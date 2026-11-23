# v16.0.2 → v16.0.3 · 最優先の変更候補 (97)

[一覧の目次](README.md)

<a id="compare-ab5465dbfd01050b59335d713253f4d4"></a>

### [`00bd7918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7918.md) → [`00bd890c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd890c.md) _ZN8firebase4auth31oauthprovider_credentialbuilder13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd894c",
      "incomplete_value": true,
      "site": "00bd894c",
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
      "definition_site": "00bd7958",
      "incomplete_value": true,
      "site": "00bd7958",
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
      "definition_site": "00bd8930",
      "incomplete_value": false,
      "site": "00bd8944",
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
      "definition_site": "00bd793c",
      "incomplete_value": false,
      "site": "00bd7950",
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
      "00bd8920",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8930",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd894c",
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
      "00bd8920",
      "READ",
      [
        "storage",
        "01127cf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8930",
      "PARAM",
      [
        "storage",
        "002bc29d",
        null,
        "string"
      ]
    ],
    [
      "00bd894c",
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
- 00bd7950 ["INT_ADD", "register:40f0:8", ["const:bd7950:8", "const:4:8"]]
- 00bd7950 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8944 ["INT_ADD", "register:40f0:8", ["const:bd8944:8", "const:4:8"]]
+ 00bd8944 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7958 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d30:8"]]
- 00bd7958 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd894c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf0:8"]]
+ 00bd894c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7924 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd8918 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-a809975d8c24859e73be70255e360819"></a>

### [`00bd7988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7988.md) → [`00bd897c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd897c.md) _ZN8firebase4auth31oauthprovider_credentialbuilder10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd8998",
      "incomplete_value": false,
      "site": "00bd899c",
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
      "definition_site": "00bd79a4",
      "incomplete_value": false,
      "site": "00bd79a8",
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
      "definition_site": "00bd89a8",
      "incomplete_value": true,
      "site": "00bd89b4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd79b4",
      "incomplete_value": true,
      "site": "00bd79c0",
      "value": [
        "LOAD",
        "8",
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
      "00bd8998",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd89a8",
      "DATA",
      [
        "storage",
        "01126d60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd8998",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd89a8",
      "DATA",
      [
        "storage",
        "01127d20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd79a8 ["INT_ADD", "register:40f0:8", ["const:bd79a8:8", "const:4:8"]]
- 00bd79a8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd899c ["INT_ADD", "register:40f0:8", ["const:bd899c:8", "const:4:8"]]
+ 00bd899c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd79a4 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd79a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd79a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd79a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd8998 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd8998 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8998 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8998 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd79ac ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd89a0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-ba9c378715089416c6c60034c0e8f300"></a>

### [`00bd79c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd79c4.md) → [`00bd89b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd89b8.md) _ZN8firebase4auth8auth_idp19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
      "definition_site": "00bd89e4",
      "incomplete_value": true,
      "site": "00bd89e4",
      "value": [
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
      "definition_site": "00bd79f0",
      "incomplete_value": true,
      "site": "00bd79f0",
      "value": [
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
      "definition_site": "00bd89cc",
      "incomplete_value": true,
      "site": "00bd89cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd79d8",
      "incomplete_value": true,
      "site": "00bd79d8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd89d8",
      "incomplete_value": true,
      "site": "00bd89dc",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd79e4",
      "incomplete_value": true,
      "site": "00bd79e8",
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
            "const:1e0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd89c8",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd89d8",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd89e4",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd89c8",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd89d8",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bd89e4",
      "WRITE",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd79e8 ["INT_ADD", "register:40f0:8", ["const:bd79e8:8", "const:4:8"]]
- 00bd79e8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd89dc ["INT_ADD", "register:40f0:8", ["const:bd89dc:8", "const:4:8"]]
+ 00bd89dc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd79f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00bd79f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd89e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00bd89e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd79d0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd89c4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-6b17caec9e8ce11f221a614b0fc4360d"></a>

### [`00bd7a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7a04.md) → [`00bd89f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd89f8.md) _ZN8firebase4auth8auth_idp19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd8a24",
      "incomplete_value": true,
      "site": "00bd8a24",
      "value": [
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
      "definition_site": "00bd7a30",
      "incomplete_value": true,
      "site": "00bd7a30",
      "value": [
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
      "definition_site": "00bd8a0c",
      "incomplete_value": true,
      "site": "00bd8a0c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7a18",
      "incomplete_value": true,
      "site": "00bd7a18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8a14",
      "incomplete_value": false,
      "site": "00bd8a1c",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7a20",
      "incomplete_value": false,
      "site": "00bd7a28",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8a08",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8a14",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd8a24",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8a08",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8a14",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bd8a24",
      "WRITE",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7a28 ["INT_ADD", "register:40f0:8", ["const:bd7a28:8", "const:4:8"]]
- 00bd7a28 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8a1c ["INT_ADD", "register:40f0:8", ["const:bd8a1c:8", "const:4:8"]]
+ 00bd8a1c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7a30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00bd7a30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8a24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00bd8a24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7a10 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8a04 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-265ebdec8171485640915db4a0031ce9"></a>

### [`00bd7a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7a44.md) → [`00bd8a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8a38.md) _ZN8firebase4auth8auth_idp10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd8a68",
      "incomplete_value": true,
      "site": "00bd8a68",
      "value": [
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
      "definition_site": "00bd7a74",
      "incomplete_value": true,
      "site": "00bd7a74",
      "value": [
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
      "definition_site": "00bd8a4c",
      "incomplete_value": true,
      "site": "00bd8a4c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7a58",
      "incomplete_value": true,
      "site": "00bd7a58",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8a58",
      "incomplete_value": false,
      "site": "00bd8a60",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7a64",
      "incomplete_value": false,
      "site": "00bd7a6c",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8a48",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8a58",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd8a68",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8a48",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8a58",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bd8a68",
      "WRITE",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7a6c ["INT_ADD", "register:40f0:8", ["const:bd7a6c:8", "const:4:8"]]
- 00bd7a6c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8a60 ["INT_ADD", "register:40f0:8", ["const:bd8a60:8", "const:4:8"]]
+ 00bd8a60 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7a74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00bd7a74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8a68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00bd8a68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7a50 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8a44 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e3674a029eec21d271cde4efe8aded74"></a>

### [`00bd7a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7a88.md) → [`00bd8a7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8a7c.md) _ZN8firebase4auth8auth_idp10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8aac",
      "incomplete_value": true,
      "site": "00bd8aac",
      "value": [
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
      "definition_site": "00bd7ab8",
      "incomplete_value": true,
      "site": "00bd7ab8",
      "value": [
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
      "definition_site": "00bd8a90",
      "incomplete_value": true,
      "site": "00bd8a90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7a9c",
      "incomplete_value": true,
      "site": "00bd7a9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8a98",
      "incomplete_value": false,
      "site": "00bd8aa4",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7aa4",
      "incomplete_value": false,
      "site": "00bd7ab0",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8a8c",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8a98",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd8aac",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8a8c",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8a98",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bd8aac",
      "WRITE",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7ab0 ["INT_ADD", "register:40f0:8", ["const:bd7ab0:8", "const:4:8"]]
- 00bd7ab0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8aa4 ["INT_ADD", "register:40f0:8", ["const:bd8aa4:8", "const:4:8"]]
+ 00bd8aa4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7ab8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
- 00bd7ab8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8aac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d28:8"]]
+ 00bd8aac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7a94 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8a88 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-bdedc4a3c1a4f6dc07e42aff8f81afcf"></a>

### [`00bd7ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7ad8.md) → [`00bd8acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8acc.md) _ZN8firebase4auth8auth_idp15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd8b24",
      "incomplete_value": true,
      "site": "00bd8b24",
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
      "definition_site": "00bd7b30",
      "incomplete_value": true,
      "site": "00bd7b30",
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
      "definition_site": "00bd8b00",
      "incomplete_value": true,
      "site": "00bd8b0c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7b0c",
      "incomplete_value": true,
      "site": "00bd7b18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd8ae0",
      "READ",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8b00",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8b24",
      "WRITE",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8ae0",
      "READ",
      [
        "storage",
        "01127d30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8b00",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8b24",
      "WRITE",
      [
        "storage",
        "01127d30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7b18 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7b18 ["INT_ADD", "register:40f0:8", ["const:bd7b18:8", "const:4:8"]]
- 00bd7b18 ["CALLIND", null, ["register:0:8"]]
+ 00bd8b0c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd8b0c ["INT_ADD", "register:40f0:8", ["const:bd8b0c:8", "const:4:8"]]
+ 00bd8b0c ["CALLIND", null, ["register:0:8"]]
- 00bd7b30 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd7b30 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d70:8"]]
- 00bd7b30 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd8b24 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd8b24 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d30:8"]]
+ 00bd8b24 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd7ae8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd8adc ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-3324db13c1d640505fcbb0b1af7b957d"></a>

### [`00bd7b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7b44.md) → [`00bd8b38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8b38.md) _ZN8firebase4auth8auth_idp12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd8b74",
      "incomplete_value": true,
      "site": "00bd8b74",
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
      "definition_site": "00bd7b80",
      "incomplete_value": true,
      "site": "00bd7b80",
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
      "definition_site": "00bd8b94",
      "incomplete_value": true,
      "site": "00bd8b94",
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
      "definition_site": "00bd7ba0",
      "incomplete_value": true,
      "site": "00bd7ba0",
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
      "definition_site": "00bd8b50",
      "incomplete_value": true,
      "site": "00bd8b50",
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
      "definition_site": "00bd7b5c",
      "incomplete_value": true,
      "site": "00bd7b5c",
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
      "00bd8b4c",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8b58",
      "READ",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8b74",
      "WRITE",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8b4c",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8b58",
      "READ",
      [
        "storage",
        "01127d30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8b74",
      "WRITE",
      [
        "storage",
        "01127d30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7b80 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd7b80 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd7b80 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d70:8"]]
- 00bd7b80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd8b74 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd8b74 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd8b74 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d30:8"]]
+ 00bd8b74 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd7b9c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7b9c ["INT_ADD", "register:40f0:8", ["const:bd7b9c:8", "const:4:8"]]
- 00bd7b9c ["CALLIND", null, ["register:0:8"]]
+ 00bd8b90 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd8b90 ["INT_ADD", "register:40f0:8", ["const:bd8b90:8", "const:4:8"]]
+ 00bd8b90 ["CALLIND", null, ["register:0:8"]]
- 00bd7ba0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
- 00bd7ba0 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd7ba0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd8b94 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
+ 00bd8b94 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd8b94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-cd2a9c26841a0ff7394f422c3b85ff90"></a>

### [`00bd7bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7bb4.md) → [`00bd8ba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8ba8.md) _ZN8firebase4auth8auth_idp14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8be8",
      "incomplete_value": true,
      "site": "00bd8be8",
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
      "definition_site": "00bd7bf4",
      "incomplete_value": true,
      "site": "00bd7bf4",
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
      "definition_site": "00bd8bc4",
      "incomplete_value": true,
      "site": "00bd8bc4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7bd0",
      "incomplete_value": true,
      "site": "00bd7bd0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8bcc",
      "incomplete_value": false,
      "site": "00bd8be0",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7bd8",
      "incomplete_value": false,
      "site": "00bd7bec",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8bbc",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8bcc",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd8be8",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8bbc",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8bcc",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bd8be8",
      "WRITE",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7bec ["INT_ADD", "register:40f0:8", ["const:bd7bec:8", "const:4:8"]]
- 00bd7bec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8be0 ["INT_ADD", "register:40f0:8", ["const:bd8be0:8", "const:4:8"]]
+ 00bd8be0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7bf4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
- 00bd7bf4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8be8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
+ 00bd8be8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7bc0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd8bb4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-fcbbf573bc8da0dd3a41f45dfcd27514"></a>

### [`00bd7c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7c24.md) → [`00bd8c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8c18.md) _ZN8firebase4auth8auth_idp11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd8c34",
      "incomplete_value": false,
      "site": "00bd8c38",
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
      "definition_site": "00bd7c40",
      "incomplete_value": false,
      "site": "00bd7c44",
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
      "definition_site": "00bd8c44",
      "incomplete_value": true,
      "site": "00bd8c50",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd7c50",
      "incomplete_value": true,
      "site": "00bd7c5c",
      "value": [
        "LOAD",
        "8",
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
      "00bd8c34",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd8c44",
      "DATA",
      [
        "storage",
        "01126d78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8c34",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd8c44",
      "DATA",
      [
        "storage",
        "01127d38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7c44 ["INT_ADD", "register:40f0:8", ["const:bd7c44:8", "const:4:8"]]
- 00bd7c44 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd8c38 ["INT_ADD", "register:40f0:8", ["const:bd8c38:8", "const:4:8"]]
+ 00bd8c38 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd7c40 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd7c40 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7c40 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7c40 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd8c34 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd8c34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8c34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8c34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7c48 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd8c3c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-adc1191e9762c29ffb2b3e254e159f3c"></a>

### [`00bd7c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7c60.md) → [`00bd8c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8c54.md) _ZN8firebase4auth8auth_idp13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8c94",
      "incomplete_value": true,
      "site": "00bd8c94",
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
      "definition_site": "00bd7ca0",
      "incomplete_value": true,
      "site": "00bd7ca0",
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
      "definition_site": "00bd8c70",
      "incomplete_value": true,
      "site": "00bd8c70",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7c7c",
      "incomplete_value": true,
      "site": "00bd7c7c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8c78",
      "incomplete_value": false,
      "site": "00bd8c8c",
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
            "const:2ad:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7c84",
      "incomplete_value": false,
      "site": "00bd7c98",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8c68",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8c78",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd8c94",
      "WRITE",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8c68",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8c78",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bd8c94",
      "WRITE",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7c98 ["INT_ADD", "register:40f0:8", ["const:bd7c98:8", "const:4:8"]]
- 00bd7c98 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8c8c ["INT_ADD", "register:40f0:8", ["const:bd8c8c:8", "const:4:8"]]
+ 00bd8c8c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7ca0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
- 00bd7ca0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8c94 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d28:8"]]
+ 00bd8c94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7c6c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd8c60 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-1602f451ac75f3dda76dba3e8eed9d8f"></a>

### [`00bd7cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7cd0.md) → [`00bd8cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8cc4.md) _ZN8firebase4auth8auth_idp10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd8ce0",
      "incomplete_value": false,
      "site": "00bd8ce4",
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
      "definition_site": "00bd7cec",
      "incomplete_value": false,
      "site": "00bd7cf0",
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
      "definition_site": "00bd8cf0",
      "incomplete_value": true,
      "site": "00bd8cfc",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd7cfc",
      "incomplete_value": true,
      "site": "00bd7d08",
      "value": [
        "LOAD",
        "8",
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
      "00bd8ce0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd8cf0",
      "DATA",
      [
        "storage",
        "01126d80",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd8ce0",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd8cf0",
      "DATA",
      [
        "storage",
        "01127d40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7cf0 ["INT_ADD", "register:40f0:8", ["const:bd7cf0:8", "const:4:8"]]
- 00bd7cf0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd8ce4 ["INT_ADD", "register:40f0:8", ["const:bd8ce4:8", "const:4:8"]]
+ 00bd8ce4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd7cec ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd7cec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7cec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7cec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd8ce0 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd8ce0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8ce0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8ce0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7cf4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd8ce8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-0d14186bd615339aa00823cce711eccb"></a>

### [`00bd7d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7d0c.md) → [`00bd8d00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8d00.md) _ZN8firebase4auth8user_idp19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
      "definition_site": "00bd8d2c",
      "incomplete_value": true,
      "site": "00bd8d2c",
      "value": [
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
      "definition_site": "00bd7d38",
      "incomplete_value": true,
      "site": "00bd7d38",
      "value": [
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
      "definition_site": "00bd8d14",
      "incomplete_value": true,
      "site": "00bd8d14",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7d20",
      "incomplete_value": true,
      "site": "00bd7d20",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8d20",
      "incomplete_value": false,
      "site": "00bd8d24",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7d2c",
      "incomplete_value": false,
      "site": "00bd7d30",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8d10",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8d20",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd8d2c",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8d10",
      "READ",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8d20",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bd8d2c",
      "WRITE",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7d30 ["INT_ADD", "register:40f0:8", ["const:bd7d30:8", "const:4:8"]]
- 00bd7d30 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8d24 ["INT_ADD", "register:40f0:8", ["const:bd8d24:8", "const:4:8"]]
+ 00bd8d24 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7d38 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
- 00bd7d38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8d2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
+ 00bd8d2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7d18 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8d0c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-0b8ffb045c54631b36d2ac01f90f36c0"></a>

### [`00bd7d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7d4c.md) → [`00bd8d40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8d40.md) _ZN8firebase4auth8user_idp19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd8d6c",
      "incomplete_value": true,
      "site": "00bd8d6c",
      "value": [
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
      "definition_site": "00bd7d78",
      "incomplete_value": true,
      "site": "00bd7d78",
      "value": [
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
      "definition_site": "00bd8d54",
      "incomplete_value": true,
      "site": "00bd8d54",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7d60",
      "incomplete_value": true,
      "site": "00bd7d60",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8d5c",
      "incomplete_value": false,
      "site": "00bd8d64",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7d68",
      "incomplete_value": false,
      "site": "00bd7d70",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8d50",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8d5c",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd8d6c",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8d50",
      "READ",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8d5c",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bd8d6c",
      "WRITE",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7d70 ["INT_ADD", "register:40f0:8", ["const:bd7d70:8", "const:4:8"]]
- 00bd7d70 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8d64 ["INT_ADD", "register:40f0:8", ["const:bd8d64:8", "const:4:8"]]
+ 00bd8d64 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7d78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
- 00bd7d78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8d6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
+ 00bd8d6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7d58 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8d4c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-2d8409a479bf5a6c4704192026ce2aa6"></a>

### [`00bd7d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7d8c.md) → [`00bd8d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8d80.md) _ZN8firebase4auth8user_idp10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd8db0",
      "incomplete_value": true,
      "site": "00bd8db0",
      "value": [
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
      "definition_site": "00bd7dbc",
      "incomplete_value": true,
      "site": "00bd7dbc",
      "value": [
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
      "definition_site": "00bd8d94",
      "incomplete_value": true,
      "site": "00bd8d94",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7da0",
      "incomplete_value": true,
      "site": "00bd7da0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8da0",
      "incomplete_value": false,
      "site": "00bd8da8",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7dac",
      "incomplete_value": false,
      "site": "00bd7db4",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8d90",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8da0",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd8db0",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8d90",
      "READ",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8da0",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bd8db0",
      "WRITE",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7db4 ["INT_ADD", "register:40f0:8", ["const:bd7db4:8", "const:4:8"]]
- 00bd7db4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8da8 ["INT_ADD", "register:40f0:8", ["const:bd8da8:8", "const:4:8"]]
+ 00bd8da8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7dbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
- 00bd7dbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8db0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
+ 00bd8db0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7d98 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8d8c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ba971dd1bd1e6e206b877a60b2def3bd"></a>

### [`00bd7dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7dd0.md) → [`00bd8dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8dc4.md) _ZN8firebase4auth8user_idp10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8df4",
      "incomplete_value": true,
      "site": "00bd8df4",
      "value": [
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
      "definition_site": "00bd7e00",
      "incomplete_value": true,
      "site": "00bd7e00",
      "value": [
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
      "definition_site": "00bd8dd8",
      "incomplete_value": true,
      "site": "00bd8dd8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7de4",
      "incomplete_value": true,
      "site": "00bd7de4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8de0",
      "incomplete_value": false,
      "site": "00bd8dec",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7dec",
      "incomplete_value": false,
      "site": "00bd7df8",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8dd4",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8de0",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd8df4",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8dd4",
      "READ",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8de0",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bd8df4",
      "WRITE",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7df8 ["INT_ADD", "register:40f0:8", ["const:bd7df8:8", "const:4:8"]]
- 00bd7df8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8dec ["INT_ADD", "register:40f0:8", ["const:bd8dec:8", "const:4:8"]]
+ 00bd8dec ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7e00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
- 00bd7e00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8df4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d48:8"]]
+ 00bd8df4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7ddc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd8dd0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ad5639b74c4f09698a19d88b675ccdbc"></a>

### [`00bd7e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7e20.md) → [`00bd8e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8e14.md) _ZN8firebase4auth8user_idp15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd8e6c",
      "incomplete_value": true,
      "site": "00bd8e6c",
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
      "definition_site": "00bd7e78",
      "incomplete_value": true,
      "site": "00bd7e78",
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
      "definition_site": "00bd8e48",
      "incomplete_value": true,
      "site": "00bd8e54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7e54",
      "incomplete_value": true,
      "site": "00bd7e60",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd8e28",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8e48",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8e6c",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8e28",
      "READ",
      [
        "storage",
        "01127d50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8e48",
      "READ",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8e6c",
      "WRITE",
      [
        "storage",
        "01127d50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7e60 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7e60 ["INT_ADD", "register:40f0:8", ["const:bd7e60:8", "const:4:8"]]
- 00bd7e60 ["CALLIND", null, ["register:0:8"]]
+ 00bd8e54 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd8e54 ["INT_ADD", "register:40f0:8", ["const:bd8e54:8", "const:4:8"]]
+ 00bd8e54 ["CALLIND", null, ["register:0:8"]]
- 00bd7e78 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd7e78 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d90:8"]]
- 00bd7e78 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd8e6c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd8e6c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d50:8"]]
+ 00bd8e6c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd7e30 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd8e24 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-c237bc13fb2a687847ed12b952fbc2d4"></a>

### [`00bd7e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7e8c.md) → [`00bd8e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8e80.md) _ZN8firebase4auth8user_idp12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd8ebc",
      "incomplete_value": true,
      "site": "00bd8ebc",
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
      "definition_site": "00bd7ec8",
      "incomplete_value": true,
      "site": "00bd7ec8",
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
      "definition_site": "00bd8edc",
      "incomplete_value": true,
      "site": "00bd8edc",
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
      "definition_site": "00bd7ee8",
      "incomplete_value": true,
      "site": "00bd7ee8",
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
      "definition_site": "00bd8e98",
      "incomplete_value": true,
      "site": "00bd8e98",
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
      "definition_site": "00bd7ea4",
      "incomplete_value": true,
      "site": "00bd7ea4",
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
      "00bd8e94",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8ea0",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8ebc",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8e94",
      "READ",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8ea0",
      "READ",
      [
        "storage",
        "01127d50",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8ebc",
      "WRITE",
      [
        "storage",
        "01127d50",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7ec8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd7ec8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd7ec8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d90:8"]]
- 00bd7ec8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd8ebc ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd8ebc ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd8ebc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d50:8"]]
+ 00bd8ebc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd7ee4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7ee4 ["INT_ADD", "register:40f0:8", ["const:bd7ee4:8", "const:4:8"]]
- 00bd7ee4 ["CALLIND", null, ["register:0:8"]]
+ 00bd8ed8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd8ed8 ["INT_ADD", "register:40f0:8", ["const:bd8ed8:8", "const:4:8"]]
+ 00bd8ed8 ["CALLIND", null, ["register:0:8"]]
- 00bd7ee8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
- 00bd7ee8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd7ee8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd8edc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
+ 00bd8edc ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd8edc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8f0f699270bad34043033aef0d0d30ea"></a>

### [`00bd7efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7efc.md) → [`00bd8ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8ef0.md) _ZN8firebase4auth8user_idp14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8f30",
      "incomplete_value": true,
      "site": "00bd8f30",
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
      "definition_site": "00bd7f3c",
      "incomplete_value": true,
      "site": "00bd7f3c",
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
      "definition_site": "00bd8f0c",
      "incomplete_value": true,
      "site": "00bd8f0c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7f18",
      "incomplete_value": true,
      "site": "00bd7f18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8f14",
      "incomplete_value": false,
      "site": "00bd8f28",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7f20",
      "incomplete_value": false,
      "site": "00bd7f34",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8f04",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8f14",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd8f30",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8f04",
      "READ",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8f14",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bd8f30",
      "WRITE",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7f34 ["INT_ADD", "register:40f0:8", ["const:bd7f34:8", "const:4:8"]]
- 00bd7f34 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8f28 ["INT_ADD", "register:40f0:8", ["const:bd8f28:8", "const:4:8"]]
+ 00bd8f28 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7f3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
- 00bd7f3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8f30 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
+ 00bd8f30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7f08 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd8efc ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-a3ee702178e29b612a74a5bbe28ce0c7"></a>

### [`00bd7f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7f6c.md) → [`00bd8f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8f60.md) _ZN8firebase4auth8user_idp11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd8f7c",
      "incomplete_value": false,
      "site": "00bd8f80",
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
      "definition_site": "00bd7f88",
      "incomplete_value": false,
      "site": "00bd7f8c",
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
      "definition_site": "00bd8f8c",
      "incomplete_value": true,
      "site": "00bd8f98",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd7f98",
      "incomplete_value": true,
      "site": "00bd7fa4",
      "value": [
        "LOAD",
        "8",
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
      "00bd8f7c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd8f8c",
      "DATA",
      [
        "storage",
        "01126d98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8f7c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd8f8c",
      "DATA",
      [
        "storage",
        "01127d58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7f8c ["INT_ADD", "register:40f0:8", ["const:bd7f8c:8", "const:4:8"]]
- 00bd7f8c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd8f80 ["INT_ADD", "register:40f0:8", ["const:bd8f80:8", "const:4:8"]]
+ 00bd8f80 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd7f88 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd7f88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7f88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7f88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd8f7c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd8f7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8f7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8f7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7f90 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd8f84 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-b28ef1b1ece1e19c15d7ae7886a4aa1d"></a>

### [`00bd7fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7fa8.md) → [`00bd8f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd8/00bd8f9c.md) _ZN8firebase4auth8user_idp13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd8fdc",
      "incomplete_value": true,
      "site": "00bd8fdc",
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
      "definition_site": "00bd7fe8",
      "incomplete_value": true,
      "site": "00bd7fe8",
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
      "definition_site": "00bd8fb8",
      "incomplete_value": true,
      "site": "00bd8fb8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7fc4",
      "incomplete_value": true,
      "site": "00bd7fc4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd8fc0",
      "incomplete_value": false,
      "site": "00bd8fd4",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd7fcc",
      "incomplete_value": false,
      "site": "00bd7fe0",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8fb0",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8fc0",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd8fdc",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8fb0",
      "READ",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8fc0",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bd8fdc",
      "WRITE",
      [
        "storage",
        "01127d48",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7fe0 ["INT_ADD", "register:40f0:8", ["const:bd7fe0:8", "const:4:8"]]
- 00bd7fe0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd8fd4 ["INT_ADD", "register:40f0:8", ["const:bd8fd4:8", "const:4:8"]]
+ 00bd8fd4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd7fe8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
- 00bd7fe8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8fdc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d48:8"]]
+ 00bd8fdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7fb4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd8fa8 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-4e3ca9fa5f9533feaa87126af502b95f"></a>

### [`00bd8018`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8018.md) → [`00bd900c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd900c.md) _ZN8firebase4auth8user_idp10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd9028",
      "incomplete_value": false,
      "site": "00bd902c",
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
      "definition_site": "00bd8034",
      "incomplete_value": false,
      "site": "00bd8038",
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
      "definition_site": "00bd9038",
      "incomplete_value": true,
      "site": "00bd9044",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd8044",
      "incomplete_value": true,
      "site": "00bd8050",
      "value": [
        "LOAD",
        "8",
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
      "00bd9028",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd9038",
      "DATA",
      [
        "storage",
        "01126da8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd9028",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd9038",
      "DATA",
      [
        "storage",
        "01127d68",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8038 ["INT_ADD", "register:40f0:8", ["const:bd8038:8", "const:4:8"]]
- 00bd8038 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd902c ["INT_ADD", "register:40f0:8", ["const:bd902c:8", "const:4:8"]]
+ 00bd902c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd8034 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd8034 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd8034 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd8034 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd9028 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd9028 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd9028 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd9028 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd803c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd9030 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-0b979c09dcf66209f0cb4606c6ae4b4c"></a>

### [`00bd8054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8054.md) → [`00bd9048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9048.md) _ZN8firebase4auth8jniphone19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
      "definition_site": "00bd9074",
      "incomplete_value": true,
      "site": "00bd9074",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8080",
      "incomplete_value": true,
      "site": "00bd8080",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd905c",
      "incomplete_value": true,
      "site": "00bd905c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8068",
      "incomplete_value": true,
      "site": "00bd8068",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd9068",
      "incomplete_value": false,
      "site": "00bd906c",
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
            "const:832:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8074",
      "incomplete_value": false,
      "site": "00bd8078",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd9058",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9068",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd9074",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd9058",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9068",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        "string"
      ]
    ],
    [
      "00bd9074",
      "WRITE",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8078 ["INT_ADD", "register:40f0:8", ["const:bd8078:8", "const:4:8"]]
- 00bd8078 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd906c ["INT_ADD", "register:40f0:8", ["const:bd906c:8", "const:4:8"]]
+ 00bd906c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd8080 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bd8080 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd9074 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d70:8"]]
+ 00bd9074 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8060 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd9054 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-bd98cb9489c1d8bb7ef8edb3f5c2e4df"></a>

### [`00bd8094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8094.md) → [`00bd9088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9088.md) _ZN8firebase4auth8jniphone19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bd90b4",
      "incomplete_value": true,
      "site": "00bd90b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd80c0",
      "incomplete_value": true,
      "site": "00bd80c0",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd909c",
      "incomplete_value": true,
      "site": "00bd909c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd80a8",
      "incomplete_value": true,
      "site": "00bd80a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd90a4",
      "incomplete_value": false,
      "site": "00bd90ac",
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
            "const:832:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd80b0",
      "incomplete_value": false,
      "site": "00bd80b8",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd9098",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd90a4",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd90b4",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd9098",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd90a4",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        "string"
      ]
    ],
    [
      "00bd90b4",
      "WRITE",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd80b8 ["INT_ADD", "register:40f0:8", ["const:bd80b8:8", "const:4:8"]]
- 00bd80b8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd90ac ["INT_ADD", "register:40f0:8", ["const:bd90ac:8", "const:4:8"]]
+ 00bd90ac ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd80c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bd80c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd90b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d70:8"]]
+ 00bd90b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd80a0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd9094 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-105117195168e060aaa16a7e32eb7786"></a>

### [`00bd80d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd80d4.md) → [`00bd90c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd90c8.md) _ZN8firebase4auth8jniphone10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 76.47% / 新版 76.47%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd90f8",
      "incomplete_value": true,
      "site": "00bd90f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8104",
      "incomplete_value": true,
      "site": "00bd8104",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd90dc",
      "incomplete_value": true,
      "site": "00bd90dc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd80e8",
      "incomplete_value": true,
      "site": "00bd80e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd90e8",
      "incomplete_value": false,
      "site": "00bd90f0",
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
            "const:832:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd80f4",
      "incomplete_value": false,
      "site": "00bd80fc",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd90d8",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd90e8",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd90f8",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd90d8",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd90e8",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        "string"
      ]
    ],
    [
      "00bd90f8",
      "WRITE",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd80fc ["INT_ADD", "register:40f0:8", ["const:bd80fc:8", "const:4:8"]]
- 00bd80fc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd90f0 ["INT_ADD", "register:40f0:8", ["const:bd90f0:8", "const:4:8"]]
+ 00bd90f0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd8104 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bd8104 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd90f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d70:8"]]
+ 00bd90f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd80e0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd90d4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-5fd1241706a2afe055b4d605605e92ee"></a>

### [`00bd8118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8118.md) → [`00bd910c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd910c.md) _ZN8firebase4auth8jniphone10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd913c",
      "incomplete_value": true,
      "site": "00bd913c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8148",
      "incomplete_value": true,
      "site": "00bd8148",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd9120",
      "incomplete_value": true,
      "site": "00bd9120",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd812c",
      "incomplete_value": true,
      "site": "00bd812c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00bd812c"
      ],
      [
        "FALL_THROUGH",
        "00bd9120"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bd9120",
      "incomplete_value": true,
      "site": "00bd913c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd812c",
      "incomplete_value": true,
      "site": "00bd8148",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bd911c",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9128",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd913c",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd911c",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9128",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        "string"
      ]
    ],
    [
      "00bd913c",
      "WRITE",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8148 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bd8148 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd913c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d70:8"]]
+ 00bd913c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8124 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd9118 ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bd8128 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bd8128 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd911c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d70:8"]]
+ 00bd911c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c32fe3c7bae5aebb629bdc62eb72d107"></a>

### [`00bd8168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8168.md) → [`00bd915c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd915c.md) _ZN8firebase4auth8jniphone15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd91b4",
      "incomplete_value": true,
      "site": "00bd91b4",
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
    "old": {
      "definition_site": "00bd81c0",
      "incomplete_value": true,
      "site": "00bd81c0",
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
      "00bd9170",
      "READ",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9190",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd91b4",
      "WRITE",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd9170",
      "READ",
      [
        "storage",
        "01127d78",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9190",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd91b4",
      "WRITE",
      [
        "storage",
        "01127d78",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd81c0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd81c0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:db8:8"]]
- 00bd81c0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd91b4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd91b4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d78:8"]]
+ 00bd91b4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd8178 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd916c ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bd817c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:db8:8"]]
- 00bd817c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd817c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd9170 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d78:8"]]
+ 00bd9170 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd9170 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-2630ba5eb9770214c3c2a033becd1adb"></a>

### [`00bd81d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd81d4.md) → [`00bd91c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd91c8.md) _ZN8firebase4auth8jniphone12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd9204",
      "incomplete_value": true,
      "site": "00bd9204",
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
    "old": {
      "definition_site": "00bd8210",
      "incomplete_value": true,
      "site": "00bd8210",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd9224",
      "incomplete_value": true,
      "site": "00bd9224",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8230",
      "incomplete_value": true,
      "site": "00bd8230",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd91e0",
      "incomplete_value": true,
      "site": "00bd91e0",
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
      "definition_site": "00bd81ec",
      "incomplete_value": true,
      "site": "00bd81ec",
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
      "00bd91dc",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd91e8",
      "READ",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9204",
      "WRITE",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd91dc",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd91e8",
      "READ",
      [
        "storage",
        "01127d78",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9204",
      "WRITE",
      [
        "storage",
        "01127d78",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8210 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd8210 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd8210 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:db8:8"]]
- 00bd8210 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd9204 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd9204 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd9204 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d78:8"]]
+ 00bd9204 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd822c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd822c ["INT_ADD", "register:40f0:8", ["const:bd822c:8", "const:4:8"]]
- 00bd822c ["CALLIND", null, ["register:0:8"]]
+ 00bd9220 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd9220 ["INT_ADD", "register:40f0:8", ["const:bd9220:8", "const:4:8"]]
+ 00bd9220 ["CALLIND", null, ["register:0:8"]]
- 00bd8230 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
- 00bd8230 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd8230 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd9224 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d70:8"]]
+ 00bd9224 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd9224 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-66826b72eb18e0e4228fbea786890855"></a>

### [`00bd8244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8244.md) → [`00bd9238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9238.md) _ZN8firebase4auth8jniphone14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd9278",
      "incomplete_value": true,
      "site": "00bd9278",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8284",
      "incomplete_value": true,
      "site": "00bd8284",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd9254",
      "incomplete_value": true,
      "site": "00bd9254",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8260",
      "incomplete_value": true,
      "site": "00bd8260",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd925c",
      "incomplete_value": false,
      "site": "00bd9270",
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
            "const:832:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8268",
      "incomplete_value": false,
      "site": "00bd827c",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd924c",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd925c",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd9278",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd924c",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd925c",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        "string"
      ]
    ],
    [
      "00bd9278",
      "WRITE",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd827c ["INT_ADD", "register:40f0:8", ["const:bd827c:8", "const:4:8"]]
- 00bd827c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd9270 ["INT_ADD", "register:40f0:8", ["const:bd9270:8", "const:4:8"]]
+ 00bd9270 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd8284 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
- 00bd8284 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd9278 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d70:8"]]
+ 00bd9278 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8250 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd9244 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-67b12edbd6cab57cda3775f757b2c47e"></a>

### [`00bd82b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd82b4.md) → [`00bd92a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd92a8.md) _ZN8firebase4auth8jniphone11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd92c4",
      "incomplete_value": false,
      "site": "00bd92c8",
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
      "definition_site": "00bd82d0",
      "incomplete_value": false,
      "site": "00bd82d4",
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
      "definition_site": "00bd92d4",
      "incomplete_value": true,
      "site": "00bd92e0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd82e0",
      "incomplete_value": true,
      "site": "00bd82ec",
      "value": [
        "LOAD",
        "8",
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
      "00bd92c4",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd92d4",
      "DATA",
      [
        "storage",
        "01126dc0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd92c4",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd92d4",
      "DATA",
      [
        "storage",
        "01127d80",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd82d4 ["INT_ADD", "register:40f0:8", ["const:bd82d4:8", "const:4:8"]]
- 00bd82d4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd92c8 ["INT_ADD", "register:40f0:8", ["const:bd92c8:8", "const:4:8"]]
+ 00bd92c8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd82d0 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd82d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd82d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd82d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd92c4 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd92c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd92c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd92c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd82d8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd92cc ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-247d097ffe416584edb96b5d7937e05f"></a>

### [`00bd82f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd82f0.md) → [`00bd92e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd92e4.md) _ZN8firebase4auth8jniphone13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd9324",
      "incomplete_value": true,
      "site": "00bd9324",
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
            "const:d70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8330",
      "incomplete_value": true,
      "site": "00bd8330",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd9300",
      "incomplete_value": true,
      "site": "00bd9300",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd830c",
      "incomplete_value": true,
      "site": "00bd830c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd9308",
      "incomplete_value": false,
      "site": "00bd931c",
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
            "const:832:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8314",
      "incomplete_value": false,
      "site": "00bd8328",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd92f8",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9308",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd9324",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd92f8",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9308",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        "string"
      ]
    ],
    [
      "00bd9324",
      "WRITE",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8328 ["INT_ADD", "register:40f0:8", ["const:bd8328:8", "const:4:8"]]
- 00bd8328 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd931c ["INT_ADD", "register:40f0:8", ["const:bd931c:8", "const:4:8"]]
+ 00bd931c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd8330 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
- 00bd8330 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd9324 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d70:8"]]
+ 00bd9324 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd82fc ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd92f0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-8cf83ee4833e0a22e85bc494eb974f96"></a>

### [`00bd8360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8360.md) → [`00bd9354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9354.md) _ZN8firebase4auth8jniphone10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd9370",
      "incomplete_value": false,
      "site": "00bd9374",
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
      "definition_site": "00bd837c",
      "incomplete_value": false,
      "site": "00bd8380",
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
      "definition_site": "00bd9380",
      "incomplete_value": true,
      "site": "00bd938c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd838c",
      "incomplete_value": true,
      "site": "00bd8398",
      "value": [
        "LOAD",
        "8",
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
      "00bd9370",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd9380",
      "DATA",
      [
        "storage",
        "01126dd0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd9370",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd9380",
      "DATA",
      [
        "storage",
        "01127d90",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8380 ["INT_ADD", "register:40f0:8", ["const:bd8380:8", "const:4:8"]]
- 00bd8380 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd9374 ["INT_ADD", "register:40f0:8", ["const:bd9374:8", "const:4:8"]]
+ 00bd9374 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd837c ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd837c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd837c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd837c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd9370 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd9370 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd9370 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd9370 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd8384 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd9378 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-65720fa59f60756b60e89686c30b4535"></a>

### [`00bd839c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd839c.md) → [`00bd9390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9390.md) _ZN8firebase4auth15phonecredential19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
      "definition_site": "00bd93bc",
      "incomplete_value": true,
      "site": "00bd93bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd83c8",
      "incomplete_value": true,
      "site": "00bd83c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:dd8:8"
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
      "definition_site": "00bd93a4",
      "incomplete_value": true,
      "site": "00bd93a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd83b0",
      "incomplete_value": true,
      "site": "00bd83b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd93b0",
      "incomplete_value": false,
      "site": "00bd93b4",
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
            "const:dfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd83bc",
      "incomplete_value": false,
      "site": "00bd83c0",
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
            "const:d2c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd93a0",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd93b0",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd93bc",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd93a0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd93b0",
      "PARAM",
      [
        "storage",
        "002b5dfb",
        null,
        "string"
      ]
    ],
    [
      "00bd93bc",
      "WRITE",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd83c0 ["INT_ADD", "register:40f0:8", ["const:bd83c0:8", "const:4:8"]]
- 00bd83c0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd93b4 ["INT_ADD", "register:40f0:8", ["const:bd93b4:8", "const:4:8"]]
+ 00bd93b4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd83c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
- 00bd83c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd93bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d98:8"]]
+ 00bd93bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd83a8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd939c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-1f9d51771fc57de33b37631aba468030"></a>

### [`00bd83dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd83dc.md) → [`00bd93d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd93d0.md) _ZN8firebase4auth15phonecredential19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
      "definition_site": "00bd93fc",
      "incomplete_value": true,
      "site": "00bd93fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8408",
      "incomplete_value": true,
      "site": "00bd8408",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:dd8:8"
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
      "definition_site": "00bd93e4",
      "incomplete_value": true,
      "site": "00bd93e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd83f0",
      "incomplete_value": true,
      "site": "00bd83f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd93ec",
      "incomplete_value": false,
      "site": "00bd93f4",
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
            "const:dfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd83f8",
      "incomplete_value": false,
      "site": "00bd8400",
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
            "const:d2c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd93e0",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd93ec",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd93fc",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd93e0",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd93ec",
      "PARAM",
      [
        "storage",
        "002b5dfb",
        null,
        "string"
      ]
    ],
    [
      "00bd93fc",
      "WRITE",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8400 ["INT_ADD", "register:40f0:8", ["const:bd8400:8", "const:4:8"]]
- 00bd8400 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd93f4 ["INT_ADD", "register:40f0:8", ["const:bd93f4:8", "const:4:8"]]
+ 00bd93f4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd8408 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
- 00bd8408 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd93fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d98:8"]]
+ 00bd93fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd83e8 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd93dc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-33969d49de0dbcc60ec3695262ce895e"></a>

### [`00bd841c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd841c.md) → [`00bd9410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9410.md) _ZN8firebase4auth15phonecredential10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bd9440",
      "incomplete_value": true,
      "site": "00bd9440",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd844c",
      "incomplete_value": true,
      "site": "00bd844c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:dd8:8"
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
      "definition_site": "00bd9424",
      "incomplete_value": true,
      "site": "00bd9424",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8430",
      "incomplete_value": true,
      "site": "00bd8430",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd9430",
      "incomplete_value": false,
      "site": "00bd9438",
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
            "const:dfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd843c",
      "incomplete_value": false,
      "site": "00bd8444",
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
            "const:d2c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd9420",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9430",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd9440",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd9420",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9430",
      "PARAM",
      [
        "storage",
        "002b5dfb",
        null,
        "string"
      ]
    ],
    [
      "00bd9440",
      "WRITE",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8444 ["INT_ADD", "register:40f0:8", ["const:bd8444:8", "const:4:8"]]
- 00bd8444 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd9438 ["INT_ADD", "register:40f0:8", ["const:bd9438:8", "const:4:8"]]
+ 00bd9438 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd844c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
- 00bd844c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd9440 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d98:8"]]
+ 00bd9440 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8428 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd941c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-58b868cc97cb84769f9c5ea2115df9a6"></a>

### [`00bd8460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8460.md) → [`00bd9454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9454.md) _ZN8firebase4auth15phonecredential10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd9484",
      "incomplete_value": true,
      "site": "00bd9484",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8490",
      "incomplete_value": true,
      "site": "00bd8490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:dd8:8"
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
      "definition_site": "00bd9468",
      "incomplete_value": true,
      "site": "00bd9468",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8474",
      "incomplete_value": true,
      "site": "00bd8474",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd9470",
      "incomplete_value": false,
      "site": "00bd947c",
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
            "const:dfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd847c",
      "incomplete_value": false,
      "site": "00bd8488",
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
            "const:d2c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd9464",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9470",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd9484",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd9464",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9470",
      "PARAM",
      [
        "storage",
        "002b5dfb",
        null,
        "string"
      ]
    ],
    [
      "00bd9484",
      "WRITE",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8488 ["INT_ADD", "register:40f0:8", ["const:bd8488:8", "const:4:8"]]
- 00bd8488 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd947c ["INT_ADD", "register:40f0:8", ["const:bd947c:8", "const:4:8"]]
+ 00bd947c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd8490 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
- 00bd8490 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd9484 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d98:8"]]
+ 00bd9484 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd846c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bd9460 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ba43be12ce573c3bd75bd4d87f63d1d6"></a>

### [`00bd84b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd84b0.md) → [`00bd94a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd94a4.md) _ZN8firebase4auth15phonecredential15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bd94fc",
      "incomplete_value": true,
      "site": "00bd94fc",
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
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8508",
      "incomplete_value": true,
      "site": "00bd8508",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd94d8",
      "incomplete_value": true,
      "site": "00bd94e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd84e4",
      "incomplete_value": true,
      "site": "00bd84f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd8:8"
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
      "00bd94b8",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd94d8",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd94fc",
      "WRITE",
      [
        "storage",
        "01126de0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd94b8",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd94d8",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd94fc",
      "WRITE",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd84f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd84f0 ["INT_ADD", "register:40f0:8", ["const:bd84f0:8", "const:4:8"]]
- 00bd84f0 ["CALLIND", null, ["register:0:8"]]
+ 00bd94e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd94e4 ["INT_ADD", "register:40f0:8", ["const:bd94e4:8", "const:4:8"]]
+ 00bd94e4 ["CALLIND", null, ["register:0:8"]]
- 00bd8508 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd8508 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:de0:8"]]
- 00bd8508 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd94fc ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd94fc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:da0:8"]]
+ 00bd94fc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd84c0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bd94b4 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-4d49ab814aecc56945ae96eeadcabe18"></a>

### [`00bd851c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd851c.md) → [`00bd9510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9510.md) _ZN8firebase4auth15phonecredential12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bd954c",
      "incomplete_value": true,
      "site": "00bd954c",
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
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8558",
      "incomplete_value": true,
      "site": "00bd8558",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd956c",
      "incomplete_value": true,
      "site": "00bd956c",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8578",
      "incomplete_value": true,
      "site": "00bd8578",
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
            "const:dd8:8"
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
      "definition_site": "00bd9528",
      "incomplete_value": true,
      "site": "00bd9528",
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
      "definition_site": "00bd8534",
      "incomplete_value": true,
      "site": "00bd8534",
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
      "00bd9524",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9530",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd954c",
      "WRITE",
      [
        "storage",
        "01126de0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd9524",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9530",
      "READ",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd954c",
      "WRITE",
      [
        "storage",
        "01127da0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8558 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd8558 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd8558 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:de0:8"]]
- 00bd8558 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd954c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd954c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd954c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:da0:8"]]
+ 00bd954c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd8574 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd8574 ["INT_ADD", "register:40f0:8", ["const:bd8574:8", "const:4:8"]]
- 00bd8574 ["CALLIND", null, ["register:0:8"]]
+ 00bd9568 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd9568 ["INT_ADD", "register:40f0:8", ["const:bd9568:8", "const:4:8"]]
+ 00bd9568 ["CALLIND", null, ["register:0:8"]]
- 00bd8578 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
- 00bd8578 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd8578 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd956c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
+ 00bd956c ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd956c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-04d77bd4a3aac6e02e6aed045e77a001"></a>

### [`00bd858c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd858c.md) → [`00bd9580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9580.md) _ZN8firebase4auth15phonecredential14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd95c0",
      "incomplete_value": true,
      "site": "00bd95c0",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd85cc",
      "incomplete_value": true,
      "site": "00bd85cc",
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
            "const:dd8:8"
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
      "definition_site": "00bd959c",
      "incomplete_value": true,
      "site": "00bd959c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd85a8",
      "incomplete_value": true,
      "site": "00bd85a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd95a4",
      "incomplete_value": false,
      "site": "00bd95b8",
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
            "const:dfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd85b0",
      "incomplete_value": false,
      "site": "00bd85c4",
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
            "const:d2c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd9594",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd95a4",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd95c0",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd9594",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd95a4",
      "PARAM",
      [
        "storage",
        "002b5dfb",
        null,
        "string"
      ]
    ],
    [
      "00bd95c0",
      "WRITE",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd85c4 ["INT_ADD", "register:40f0:8", ["const:bd85c4:8", "const:4:8"]]
- 00bd85c4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd95b8 ["INT_ADD", "register:40f0:8", ["const:bd95b8:8", "const:4:8"]]
+ 00bd95b8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd85cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
- 00bd85cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd95c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
+ 00bd95c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8598 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd958c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-7529dab1a41a33b5e767c0ed6972e117"></a>

### [`00bd85fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd85fc.md) → [`00bd95f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd95f0.md) _ZN8firebase4auth15phonecredential11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bd960c",
      "incomplete_value": false,
      "site": "00bd9610",
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
      "definition_site": "00bd8618",
      "incomplete_value": false,
      "site": "00bd861c",
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
      "definition_site": "00bd961c",
      "incomplete_value": true,
      "site": "00bd9628",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd8628",
      "incomplete_value": true,
      "site": "00bd8634",
      "value": [
        "LOAD",
        "8",
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
      "00bd960c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd961c",
      "DATA",
      [
        "storage",
        "01126de8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd960c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bd961c",
      "DATA",
      [
        "storage",
        "01127da8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd861c ["INT_ADD", "register:40f0:8", ["const:bd861c:8", "const:4:8"]]
- 00bd861c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd9610 ["INT_ADD", "register:40f0:8", ["const:bd9610:8", "const:4:8"]]
+ 00bd9610 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd8618 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bd8618 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd8618 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd8618 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd960c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bd960c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd960c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd960c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd8620 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd9614 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-6adaee24556d4f7b8e62d6f504d6e35c"></a>

### [`00bd8638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8638.md) → [`00bd962c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd962c.md) _ZN8firebase4auth15phonecredential13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bd966c",
      "incomplete_value": true,
      "site": "00bd966c",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8678",
      "incomplete_value": true,
      "site": "00bd8678",
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
            "const:dd8:8"
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
      "definition_site": "00bd9648",
      "incomplete_value": true,
      "site": "00bd9648",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8654",
      "incomplete_value": true,
      "site": "00bd8654",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bd9650",
      "incomplete_value": false,
      "site": "00bd9664",
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
            "const:dfb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd865c",
      "incomplete_value": false,
      "site": "00bd8670",
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
            "const:d2c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd9640",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9650",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd966c",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd9640",
      "READ",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9650",
      "PARAM",
      [
        "storage",
        "002b5dfb",
        null,
        "string"
      ]
    ],
    [
      "00bd966c",
      "WRITE",
      [
        "storage",
        "01127d98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8670 ["INT_ADD", "register:40f0:8", ["const:bd8670:8", "const:4:8"]]
- 00bd8670 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bd9664 ["INT_ADD", "register:40f0:8", ["const:bd9664:8", "const:4:8"]]
+ 00bd9664 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bd8678 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
- 00bd8678 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd966c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d98:8"]]
+ 00bd966c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8644 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bd9638 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-e8fbddb9833ad0f6c08583b2f7810bd3"></a>

### [`00bd86a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd86a8.md) → [`00bd969c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd969c.md) _ZN8firebase4auth15phonecredential10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bd96b8",
      "incomplete_value": false,
      "site": "00bd96bc",
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
      "definition_site": "00bd86c4",
      "incomplete_value": false,
      "site": "00bd86c8",
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
      "definition_site": "00bd96c8",
      "incomplete_value": true,
      "site": "00bd96d4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bd86d4",
      "incomplete_value": true,
      "site": "00bd86e0",
      "value": [
        "LOAD",
        "8",
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
      "00bd96b8",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd96c8",
      "DATA",
      [
        "storage",
        "01126df0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd96b8",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bd96c8",
      "DATA",
      [
        "storage",
        "01127db0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd86c8 ["INT_ADD", "register:40f0:8", ["const:bd86c8:8", "const:4:8"]]
- 00bd86c8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bd96bc ["INT_ADD", "register:40f0:8", ["const:bd96bc:8", "const:4:8"]]
+ 00bd96bc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd86c4 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bd86c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd86c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd86c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd96b8 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bd96b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd96b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd96b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd86cc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bd96c0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-835b8cd2d3df41b7e7d4f228b872818d"></a>

### [`00bd86e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd86e4.md) → [`00bd96d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd96d8.md) _ZN8firebase4auth24CacheCredentialMethodIdsEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd80.md) · 呼出先 4件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5ed50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed50.md) · 呼出先 4件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 77.86% / 新版 77.86%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 57件, `store_condition` 2件, `store_destination` 18件

アドレスに依存する影響 `branch_value` 14件, `call_argument_candidate` 1件, `store_condition` 14件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd9718",
      "incomplete_value": true,
      "site": "00bd9718",
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
      "definition_site": "00bd8724",
      "incomplete_value": true,
      "site": "00bd8724",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd9790",
      "incomplete_value": true,
      "site": "00bd9790",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd879c",
      "incomplete_value": true,
      "site": "00bd879c",
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
            "const:db8:8"
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
      "definition_site": "00bd97cc",
      "incomplete_value": true,
      "site": "00bd97cc",
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
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd87d8",
      "incomplete_value": true,
      "site": "00bd87d8",
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
      "00bd96f0",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9700",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd9718",
      "WRITE",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd96f0",
      "READ",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9700",
      "PARAM",
      [
        "storage",
        "002b2832",
        null,
        "string"
      ]
    ],
    [
      "00bd9718",
      "WRITE",
      [
        "storage",
        "01127d70",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8724 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:db0:8"]]
- 00bd8724 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd9718 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d70:8"]]
+ 00bd9718 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd879c ["COPY", "tmp:0:4", ["register:4040:4"]]
- 00bd879c ["INT_ADD", "tmp:1:8", ["register:40b0:8", "const:db8:8"]]
- 00bd879c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd9790 ["COPY", "tmp:0:4", ["register:4040:4"]]
+ 00bd9790 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "const:d78:8"]]
+ 00bd9790 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd87d8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b48:8"]]
- 00bd87d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd97cc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b08:8"]]
+ 00bd97cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-02d400a277083406e2eabcbdf5bd270c"></a>

### [`00bd8d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8d50.md) → [`00bd9d44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bd9/00bd9d44.md) _ZN8firebase4auth24ReleaseCredentialClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd90.md) · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5ed60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed60.md) · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 47.60% / 新版 47.60%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 6件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 29件, `unresolved_store_alignment` 20件

アドレスに依存する影響 `branch_value` 11件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd9e64",
      "incomplete_value": true,
      "site": "00bd9e64",
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
      "definition_site": "00bd8e70",
      "incomplete_value": true,
      "site": "00bd8e70",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bda17c",
      "incomplete_value": true,
      "site": "00bda17c",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9188",
      "incomplete_value": true,
      "site": "00bd9188",
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
            "const:dd8:8"
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
      "definition_site": "00bda1a8",
      "incomplete_value": true,
      "site": "00bda1a8",
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
      "definition_site": "00bd91b4",
      "incomplete_value": true,
      "site": "00bd91b4",
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
      "00bd9d58",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9d60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd8db0"
      ]
    ],
    [
      "00bd9d68",
      "READ",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd9d58",
      "READ",
      [
        "storage",
        "01127d28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd9d60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd9da4"
      ]
    ],
    [
      "00bd9d68",
      "READ",
      [
        "storage",
        "01127d30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8de0 ["INT_ADD", "register:40f0:8", ["const:bd8de0:8", "const:4:8"]]
- 00bd8de0 ["CALL", null, ["callee:00c5c000:8"]]
+ 00bd9e6c ["INT_ADD", "register:40f0:8", ["const:bd9e6c:8", "const:4:8"]]
+ 00bd9e6c ["CALL", null, ["callee:00c5c000:8"]]
- 00bd8e04 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd8e04 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 00bd9e90 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd9e90 ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
- 00bd8e50 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd8e50 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00bd9edc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd9edc ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
~~~


<a id="compare-db8d6ae2dcfad151027ea46bdebca768"></a>

### [`00bd9288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9288.md) → [`00bda27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda27c.md) _ZN8firebase4auth10CredentialD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00c5aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aac0.md) [`00c5ded0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ded0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 2件 [`00c5ba90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba90.md) [`00c5eea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eea0.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda2a4",
      "incomplete_value": false,
      "site": "00bda2a8",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd92b0",
      "incomplete_value": false,
      "site": "00bd92b4",
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
            "const:609:8"
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
      "00bda2a4",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda2a4",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd92b4 ["INT_ADD", "register:40f0:8", ["const:bd92b4:8", "const:4:8"]]
- 00bd92b4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda2a8 ["INT_ADD", "register:40f0:8", ["const:bda2a8:8", "const:4:8"]]
+ 00bda2a8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd92a0 ["INT_ADD", "register:40f0:8", ["const:bd92a0:8", "const:4:8"]]
- 00bd92a0 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bda294 ["INT_ADD", "register:40f0:8", ["const:bda294:8", "const:4:8"]]
+ 00bda294 ["CALL", null, ["callee:00c5c300:8"]]
- 00bd92b0 ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bd92b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd92b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd92b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda2a4 ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bda2a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda2a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda2a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1c0d084999187fc3cc88c4d28068ef6d"></a>

### [`00bd935c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd935c.md) → [`00bda350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda350.md) _ZN8firebase4auth10CredentialaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md) · 呼出先 4件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 1件 [`00c5ee00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee00.md) · 呼出先 4件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c150.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda388",
      "incomplete_value": false,
      "site": "00bda38c",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9394",
      "incomplete_value": false,
      "site": "00bd9398",
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
            "const:609:8"
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
      "00bda388",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda388",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9398 ["INT_ADD", "register:40f0:8", ["const:bd9398:8", "const:4:8"]]
- 00bd9398 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda38c ["INT_ADD", "register:40f0:8", ["const:bda38c:8", "const:4:8"]]
+ 00bda38c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9384 ["INT_ADD", "register:40f0:8", ["const:bd9384:8", "const:4:8"]]
- 00bd9384 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bda378 ["INT_ADD", "register:40f0:8", ["const:bda378:8", "const:4:8"]]
+ 00bda378 ["CALL", null, ["callee:00c5c300:8"]]
- 00bd9394 ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bd9394 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd9394 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd9394 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda388 ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bda388 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda388 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda388 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-562ceee381596854cc27c2e0764de623"></a>

### [`00bd942c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd942c.md) → [`00bda420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda420.md) _ZNK8firebase4auth10Credential8providerEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md) [`00c5c430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c430.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda448",
      "incomplete_value": false,
      "site": "00bda44c",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9454",
      "incomplete_value": false,
      "site": "00bd9458",
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
            "const:609:8"
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
      "definition_site": "00bda464",
      "incomplete_value": true,
      "site": "00bda46c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9470",
      "incomplete_value": true,
      "site": "00bd9478",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bda448",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00bda464",
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
      "00bda448",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ],
    [
      "00bda464",
      "READ",
      [
        "storage",
        "01127b18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9458 ["INT_ADD", "register:40f0:8", ["const:bd9458:8", "const:4:8"]]
- 00bd9458 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda44c ["INT_ADD", "register:40f0:8", ["const:bda44c:8", "const:4:8"]]
+ 00bda44c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9478 ["INT_ADD", "register:40f0:8", ["const:bd9478:8", "const:4:8"]]
- 00bd9478 ["CALL", null, ["callee:00497b94:8"]]
+ 00bda46c ["INT_ADD", "register:40f0:8", ["const:bda46c:8", "const:4:8"]]
+ 00bda46c ["CALL", null, ["callee:00497b94:8"]]
- 00bd9444 ["INT_ADD", "register:40f0:8", ["const:bd9444:8", "const:4:8"]]
- 00bd9444 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bda438 ["INT_ADD", "register:40f0:8", ["const:bda438:8", "const:4:8"]]
+ 00bda438 ["CALL", null, ["callee:00c5c300:8"]]
~~~


<a id="compare-fbbdc3f95c21301a2767062451f9a629"></a>

### [`00bd94c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd94c0.md) → [`00bda4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda4b4.md) _ZN8firebase4auth17EmailAuthProvider13GetCredentialEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.45% / 新版 93.45%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda50c",
      "incomplete_value": false,
      "site": "00bda510",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9518",
      "incomplete_value": false,
      "site": "00bd951c",
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
            "const:609:8"
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
      "definition_site": "00bda550",
      "incomplete_value": true,
      "site": "00bda568",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd955c",
      "incomplete_value": true,
      "site": "00bd9574",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda554",
      "incomplete_value": true,
      "site": "00bda568",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9560",
      "incomplete_value": true,
      "site": "00bd9574",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b78:8"
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
      "00bda4f0",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bda4f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd968c"
      ]
    ],
    [
      "00bda50c",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda4f0",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bda4f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bda680"
      ]
    ],
    [
      "00bda50c",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd951c ["INT_ADD", "register:40f0:8", ["const:bd951c:8", "const:4:8"]]
- 00bd951c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda510 ["INT_ADD", "register:40f0:8", ["const:bda510:8", "const:4:8"]]
+ 00bda510 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9574 ["INT_ADD", "register:40f0:8", ["const:bd9574:8", "const:4:8"]]
- 00bd9574 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bda568 ["INT_ADD", "register:40f0:8", ["const:bda568:8", "const:4:8"]]
+ 00bda568 ["CALL", null, ["callee:00c5bc40:8"]]
- 00bd95c4 ["INT_ADD", "register:40f0:8", ["const:bd95c4:8", "const:4:8"]]
- 00bd95c4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda5b8 ["INT_ADD", "register:40f0:8", ["const:bda5b8:8", "const:4:8"]]
+ 00bda5b8 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-4090091820144ab4ae553657bf0685e5"></a>

### [`00bd9804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9804.md) → [`00bda7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda7f8.md) _ZNK8firebase4auth19PhoneAuthCredential8sms_codeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md) [`00c5c430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c430.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda828",
      "incomplete_value": false,
      "site": "00bda82c",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9834",
      "incomplete_value": false,
      "site": "00bd9838",
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
            "const:609:8"
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
      "definition_site": "00bda840",
      "incomplete_value": true,
      "site": "00bda848",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:da8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd984c",
      "incomplete_value": true,
      "site": "00bd9854",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de8:8"
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
      "00bda828",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00bda840",
      "READ",
      [
        "storage",
        "01126de8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bda828",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ],
    [
      "00bda840",
      "READ",
      [
        "storage",
        "01127da8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9838 ["INT_ADD", "register:40f0:8", ["const:bd9838:8", "const:4:8"]]
- 00bd9838 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda82c ["INT_ADD", "register:40f0:8", ["const:bda82c:8", "const:4:8"]]
+ 00bda82c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9854 ["INT_ADD", "register:40f0:8", ["const:bd9854:8", "const:4:8"]]
- 00bd9854 ["CALL", null, ["callee:00497b94:8"]]
+ 00bda848 ["INT_ADD", "register:40f0:8", ["const:bda848:8", "const:4:8"]]
+ 00bda848 ["CALL", null, ["callee:00497b94:8"]]
- 00bd9824 ["INT_ADD", "register:40f0:8", ["const:bd9824:8", "const:4:8"]]
- 00bd9824 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bda818 ["INT_ADD", "register:40f0:8", ["const:bda818:8", "const:4:8"]]
+ 00bda818 ["CALL", null, ["callee:00c5c300:8"]]
~~~


<a id="compare-1c5162fc525efacd6defc75e879b6fd9"></a>

### [`00bd988c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd988c.md) → [`00bda880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda880.md) _ZN8firebase4auth26InternalAuthResultProvider13GetCredentialEP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de70.md) · 呼出先 3件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 1件 [`00c5ee40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee40.md) · 呼出先 3件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda8ac",
      "incomplete_value": false,
      "site": "00bda8b0",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd98b8",
      "incomplete_value": false,
      "site": "00bd98bc",
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
            "const:609:8"
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
      "00bda8ac",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda8ac",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd98bc ["INT_ADD", "register:40f0:8", ["const:bd98bc:8", "const:4:8"]]
- 00bd98bc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda8b0 ["INT_ADD", "register:40f0:8", ["const:bda8b0:8", "const:4:8"]]
+ 00bda8b0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd98a8 ["INT_ADD", "register:40f0:8", ["const:bd98a8:8", "const:4:8"]]
- 00bd98a8 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bda89c ["INT_ADD", "register:40f0:8", ["const:bda89c:8", "const:4:8"]]
+ 00bda89c ["CALL", null, ["callee:00c5c300:8"]]
- 00bd98b8 ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bd98b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd98b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd98b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda8ac ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bda8ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda8ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda8ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-33ceb0520bb0871df407e71228a4f021"></a>

### [`00bd991c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd991c.md) → [`00bda910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bda910.md) _ZN8firebase4auth20FacebookAuthProvider13GetCredentialEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.16% / 新版 89.16%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda94c",
      "incomplete_value": false,
      "site": "00bda950",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9958",
      "incomplete_value": false,
      "site": "00bd995c",
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
            "const:609:8"
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
      "definition_site": "00bda978",
      "incomplete_value": true,
      "site": "00bda98c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9984",
      "incomplete_value": true,
      "site": "00bd9998",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b88:8"
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
      "definition_site": "00bda97c",
      "incomplete_value": true,
      "site": "00bda98c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9988",
      "incomplete_value": true,
      "site": "00bd9998",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b98:8"
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
      "00bda930",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bda934",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd9a28"
      ]
    ],
    [
      "00bda94c",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda930",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bda934",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdaa1c"
      ]
    ],
    [
      "00bda94c",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd995c ["INT_ADD", "register:40f0:8", ["const:bd995c:8", "const:4:8"]]
- 00bd995c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda950 ["INT_ADD", "register:40f0:8", ["const:bda950:8", "const:4:8"]]
+ 00bda950 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9998 ["INT_ADD", "register:40f0:8", ["const:bd9998:8", "const:4:8"]]
- 00bd9998 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bda98c ["INT_ADD", "register:40f0:8", ["const:bda98c:8", "const:4:8"]]
+ 00bda98c ["CALL", null, ["callee:00c5bc40:8"]]
- 00bd99e0 ["INT_ADD", "register:40f0:8", ["const:bd99e0:8", "const:4:8"]]
- 00bd99e0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bda9d4 ["INT_ADD", "register:40f0:8", ["const:bda9d4:8", "const:4:8"]]
+ 00bda9d4 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-61ae15b4095868017031ceabf7124194"></a>

### [`00bd9a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9a68.md) → [`00bdaa5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bdaa5c.md) _ZN8firebase4auth18GitHubAuthProvider13GetCredentialEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.16% / 新版 89.16%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdaa98",
      "incomplete_value": false,
      "site": "00bdaa9c",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9aa4",
      "incomplete_value": false,
      "site": "00bd9aa8",
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
            "const:609:8"
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
      "definition_site": "00bdaac4",
      "incomplete_value": true,
      "site": "00bdaad8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bd9ad0",
      "incomplete_value": true,
      "site": "00bd9ae4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdaac8",
      "incomplete_value": true,
      "site": "00bdaad8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9ad4",
      "incomplete_value": true,
      "site": "00bd9ae4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb8:8"
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
      "00bdaa7c",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdaa80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd9b74"
      ]
    ],
    [
      "00bdaa98",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdaa7c",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdaa80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdab68"
      ]
    ],
    [
      "00bdaa98",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9aa8 ["INT_ADD", "register:40f0:8", ["const:bd9aa8:8", "const:4:8"]]
- 00bd9aa8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdaa9c ["INT_ADD", "register:40f0:8", ["const:bdaa9c:8", "const:4:8"]]
+ 00bdaa9c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9ae4 ["INT_ADD", "register:40f0:8", ["const:bd9ae4:8", "const:4:8"]]
- 00bd9ae4 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bdaad8 ["INT_ADD", "register:40f0:8", ["const:bdaad8:8", "const:4:8"]]
+ 00bdaad8 ["CALL", null, ["callee:00c5bc40:8"]]
- 00bd9b2c ["INT_ADD", "register:40f0:8", ["const:bd9b2c:8", "const:4:8"]]
- 00bd9b2c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdab20 ["INT_ADD", "register:40f0:8", ["const:bdab20:8", "const:4:8"]]
+ 00bdab20 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-3be16bc9a38c5bd07a33a7fddf78e5ec"></a>

### [`00bd9bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9bb4.md) → [`00bdaba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bdaba8.md) _ZN8firebase4auth18GoogleAuthProvider13GetCredentialEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5aaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aaa0.md) · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00c5ba70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba70.md) · 呼出先 6件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdabe4",
      "incomplete_value": false,
      "site": "00bdabe8",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9bf0",
      "incomplete_value": false,
      "site": "00bd9bf4",
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
            "const:609:8"
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
      "definition_site": "00bdac48",
      "incomplete_value": false,
      "site": "00bdac4c",
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
            "const:f1f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9c54",
      "incomplete_value": false,
      "site": "00bd9c58",
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
      "definition_site": "00bdac54",
      "incomplete_value": true,
      "site": "00bdac58",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9c60",
      "incomplete_value": true,
      "site": "00bd9c64",
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
            "const:130:8"
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
      "00bdabc0",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdabe4",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00bdac48",
      "PARAM",
      [
        "storage",
        "002b7e50",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdabc0",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdabe4",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ],
    [
      "00bdac48",
      "PARAM",
      [
        "storage",
        "002b7f1f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9bf4 ["INT_ADD", "register:40f0:8", ["const:bd9bf4:8", "const:4:8"]]
- 00bd9bf4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdabe8 ["INT_ADD", "register:40f0:8", ["const:bdabe8:8", "const:4:8"]]
+ 00bdabe8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9c58 ["INT_ADD", "register:40f0:8", ["const:bd9c58:8", "const:4:8"]]
- 00bd9c58 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bdac4c ["INT_ADD", "register:40f0:8", ["const:bdac4c:8", "const:4:8"]]
+ 00bdac4c ["CALL", null, ["callee:00c5bd40:8"]]
- 00bd9c64 ["INT_ADD", "register:40f0:8", ["const:bd9c64:8", "const:4:8"]]
- 00bd9c64 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdac58 ["INT_ADD", "register:40f0:8", ["const:bdac58:8", "const:4:8"]]
+ 00bdac58 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-bed3deeca863876d644878af0b0bdcd3"></a>

### [`00bd9d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9d58.md) → [`00bdad4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bdad4c.md) _ZN8firebase4auth21PlayGamesAuthProvider13GetCredentialEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.16% / 新版 89.16%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdad88",
      "incomplete_value": false,
      "site": "00bdad8c",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9d94",
      "incomplete_value": false,
      "site": "00bd9d98",
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
            "const:609:8"
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
      "definition_site": "00bdadb4",
      "incomplete_value": true,
      "site": "00bdadc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bd9dc0",
      "incomplete_value": true,
      "site": "00bd9dd4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdadb8",
      "incomplete_value": true,
      "site": "00bdadc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bb8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9dc4",
      "incomplete_value": true,
      "site": "00bd9dd4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf8:8"
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
      "00bdad6c",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdad70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd9e64"
      ]
    ],
    [
      "00bdad88",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdad6c",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdad70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdae58"
      ]
    ],
    [
      "00bdad88",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9d98 ["INT_ADD", "register:40f0:8", ["const:bd9d98:8", "const:4:8"]]
- 00bd9d98 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdad8c ["INT_ADD", "register:40f0:8", ["const:bdad8c:8", "const:4:8"]]
+ 00bdad8c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9dd4 ["INT_ADD", "register:40f0:8", ["const:bd9dd4:8", "const:4:8"]]
- 00bd9dd4 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bdadc8 ["INT_ADD", "register:40f0:8", ["const:bdadc8:8", "const:4:8"]]
+ 00bdadc8 ["CALL", null, ["callee:00c5bc40:8"]]
- 00bd9e1c ["INT_ADD", "register:40f0:8", ["const:bd9e1c:8", "const:4:8"]]
- 00bd9e1c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdae10 ["INT_ADD", "register:40f0:8", ["const:bdae10:8", "const:4:8"]]
+ 00bdae10 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-e9c9eec71392b6ae71072135778f6c07"></a>

### [`00bd9ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9ea4.md) → [`00bdae98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bda/00bdae98.md) _ZN8firebase4auth19TwitterAuthProvider13GetCredentialEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.72% / 新版 90.72%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdaedc",
      "incomplete_value": false,
      "site": "00bdaee0",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9ee8",
      "incomplete_value": false,
      "site": "00bd9eec",
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
            "const:609:8"
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
      "definition_site": "00bdaf20",
      "incomplete_value": true,
      "site": "00bdaf38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bd9f2c",
      "incomplete_value": true,
      "site": "00bd9f44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdaf24",
      "incomplete_value": true,
      "site": "00bdaf38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd9f30",
      "incomplete_value": true,
      "site": "00bd9f44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c18:8"
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
      "00bdaec0",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdaec4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd9fe8"
      ]
    ],
    [
      "00bdaedc",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdaec0",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdaec4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdafdc"
      ]
    ],
    [
      "00bdaedc",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9eec ["INT_ADD", "register:40f0:8", ["const:bd9eec:8", "const:4:8"]]
- 00bd9eec ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdaee0 ["INT_ADD", "register:40f0:8", ["const:bdaee0:8", "const:4:8"]]
+ 00bdaee0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bd9f44 ["INT_ADD", "register:40f0:8", ["const:bd9f44:8", "const:4:8"]]
- 00bd9f44 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bdaf38 ["INT_ADD", "register:40f0:8", ["const:bdaf38:8", "const:4:8"]]
+ 00bdaf38 ["CALL", null, ["callee:00c5bc40:8"]]
- 00bd9fa0 ["INT_ADD", "register:40f0:8", ["const:bd9fa0:8", "const:4:8"]]
- 00bd9fa0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdaf94 ["INT_ADD", "register:40f0:8", ["const:bdaf94:8", "const:4:8"]]
+ 00bdaf94 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-165df6a54b24a61ee6d993c7d0253daf"></a>

### [`00bda028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda028.md) → [`00bdb01c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb01c.md) _ZN8firebase4auth13OAuthProvider13GetCredentialEPKcS3_S3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.04% / 新版 92.04%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb06c",
      "incomplete_value": false,
      "site": "00bdb070",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda078",
      "incomplete_value": false,
      "site": "00bda07c",
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
            "const:609:8"
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
      "definition_site": "00bdb0c8",
      "incomplete_value": true,
      "site": "00bdb0e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda0d4",
      "incomplete_value": true,
      "site": "00bda0f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
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
      "definition_site": "00bdb0cc",
      "incomplete_value": true,
      "site": "00bdb0e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda0d8",
      "incomplete_value": true,
      "site": "00bda0f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c38:8"
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
      "00bdb050",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdb054",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bda1a8"
      ]
    ],
    [
      "00bdb06c",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb050",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdb054",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdb19c"
      ]
    ],
    [
      "00bdb06c",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda07c ["INT_ADD", "register:40f0:8", ["const:bda07c:8", "const:4:8"]]
- 00bda07c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb070 ["INT_ADD", "register:40f0:8", ["const:bdb070:8", "const:4:8"]]
+ 00bdb070 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda0f0 ["INT_ADD", "register:40f0:8", ["const:bda0f0:8", "const:4:8"]]
- 00bda0f0 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bdb0e4 ["INT_ADD", "register:40f0:8", ["const:bdb0e4:8", "const:4:8"]]
+ 00bdb0e4 ["CALL", null, ["callee:00c5bc40:8"]]
- 00bda160 ["INT_ADD", "register:40f0:8", ["const:bda160:8", "const:4:8"]]
- 00bda160 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb154 ["INT_ADD", "register:40f0:8", ["const:bdb154:8", "const:4:8"]]
+ 00bdb154 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-a9dafea852207ad3f79d4e32e4c365e2"></a>

### [`00bda1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda1ec.md) → [`00bdb1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb1e0.md) _ZN8firebase4auth13OAuthProvider13GetCredentialEPKcS3_S3_S3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.89% / 新版 94.89%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb234",
      "incomplete_value": false,
      "site": "00bdb238",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda240",
      "incomplete_value": false,
      "site": "00bda244",
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
            "const:609:8"
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
      "definition_site": "00bdb290",
      "incomplete_value": true,
      "site": "00bdb2a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda29c",
      "incomplete_value": true,
      "site": "00bda2b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
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
      "definition_site": "00bdb294",
      "incomplete_value": true,
      "site": "00bdb2a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda2a0",
      "incomplete_value": true,
      "site": "00bda2b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
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
      "00bdb214",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdb218",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bda380"
      ]
    ],
    [
      "00bdb234",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb214",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdb218",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdb374"
      ]
    ],
    [
      "00bdb234",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda244 ["INT_ADD", "register:40f0:8", ["const:bda244:8", "const:4:8"]]
- 00bda244 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb238 ["INT_ADD", "register:40f0:8", ["const:bdb238:8", "const:4:8"]]
+ 00bdb238 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda2b0 ["INT_ADD", "register:40f0:8", ["const:bda2b0:8", "const:4:8"]]
- 00bda2b0 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bdb2a4 ["INT_ADD", "register:40f0:8", ["const:bdb2a4:8", "const:4:8"]]
+ 00bdb2a4 ["CALL", null, ["callee:00c5bc40:8"]]
- 00bda2dc ["INT_ADD", "register:40f0:8", ["const:bda2dc:8", "const:4:8"]]
- 00bda2dc ["CALL", null, ["callee:00497b94:8"]]
+ 00bdb2d0 ["INT_ADD", "register:40f0:8", ["const:bdb2d0:8", "const:4:8"]]
+ 00bdb2d0 ["CALL", null, ["callee:00497b94:8"]]
~~~


<a id="compare-4c2da828246bb0cbfeb2b251f7ee55ac"></a>

### [`00bda4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda4ac.md) → [`00bdb4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb4a0.md) _ZN8firebase4auth22GameCenterAuthProvider13GetCredentialEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00bdc4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc4c4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00bdd4b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd4b8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bb30.md) [`00c5bea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bea0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb4e8",
      "incomplete_value": true,
      "site": "00bdb4fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda4f4",
      "incomplete_value": true,
      "site": "00bda508",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b00:8"
              ]
            ]
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
      "definition_site": "00bdb524",
      "incomplete_value": true,
      "site": "00bdb538",
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
            "const:d7a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda530",
      "incomplete_value": true,
      "site": "00bda544",
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
            "const:c9c:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb548",
      "incomplete_value": false,
      "site": "00bdb54c",
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
            "const:a36:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda554",
      "incomplete_value": false,
      "site": "00bda558",
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
            "const:958:8"
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
      "00bdb4e8",
      "READ",
      [
        "storage",
        "00c9bb00",
        null,
        "pointer"
      ]
    ],
    [
      "00bdb4e8",
      "PARAM",
      [
        "storage",
        "00bdc4c4",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::auth::Credential>",
        null
      ]
    ],
    [
      "00bdb524",
      "PARAM",
      [
        "storage",
        "002b9c9c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb4e8",
      "READ",
      [
        "storage",
        "00c9cad0",
        null,
        "pointer"
      ]
    ],
    [
      "00bdb4e8",
      "PARAM",
      [
        "storage",
        "00bdd4b8",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::auth::Credential>",
        null
      ]
    ],
    [
      "00bdb524",
      "PARAM",
      [
        "storage",
        "002b9d7a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda508 ["INT_ADD", "register:40f0:8", ["const:bda508:8", "const:4:8"]]
- 00bda508 ["CALL", null, ["callee:00c5bee0:8"]]
+ 00bdb4fc ["INT_ADD", "register:40f0:8", ["const:bdb4fc:8", "const:4:8"]]
+ 00bdb4fc ["CALL", null, ["callee:00c5bee0:8"]]
- 00bda544 ["INT_ADD", "register:40f0:8", ["const:bda544:8", "const:4:8"]]
- 00bda544 ["CALL", null, ["callee:00c5ee70:8"]]
+ 00bdb538 ["INT_ADD", "register:40f0:8", ["const:bdb538:8", "const:4:8"]]
+ 00bdb538 ["CALL", null, ["callee:00c5ee70:8"]]
- 00bda558 ["INT_ADD", "register:40f0:8", ["const:bda558:8", "const:4:8"]]
- 00bda558 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb54c ["INT_ADD", "register:40f0:8", ["const:bdb54c:8", "const:4:8"]]
+ 00bdb54c ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-dbf374faf518c0b12fae5822871d4731"></a>

### [`00bda6f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda6f4.md) → [`00bdb6e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb6e8.md) _ZN8firebase4auth22GameCenterAuthProvider21IsPlayerAuthenticatedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb6f4",
      "incomplete_value": false,
      "site": "00bdb6f8",
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
            "const:a36:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda700",
      "incomplete_value": false,
      "site": "00bda704",
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
            "const:958:8"
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
      "00bdb6f4",
      "PARAM",
      [
        "storage",
        "002b4958",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb6f4",
      "PARAM",
      [
        "storage",
        "002b4a36",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda704 ["INT_ADD", "register:40f0:8", ["const:bda704:8", "const:4:8"]]
- 00bda704 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb6f8 ["INT_ADD", "register:40f0:8", ["const:bdb6f8:8", "const:4:8"]]
+ 00bdb6f8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda700 ["COPY", "tmp:0:8", ["const:958:8"]]
- 00bda700 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda700 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda700 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdb6f4 ["COPY", "tmp:0:8", ["const:a36:8"]]
+ 00bdb6f4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb6f4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb6f4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-cfd1aced5dbf699034837221c2c9a030"></a>

### [`00bda740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda740.md) → [`00bdb734`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb734.md) _ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb760",
      "incomplete_value": false,
      "site": "00bdb764",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda76c",
      "incomplete_value": false,
      "site": "00bda770",
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
            "const:609:8"
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
      "00bdb760",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb760",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda770 ["INT_ADD", "register:40f0:8", ["const:bda770:8", "const:4:8"]]
- 00bda770 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb764 ["INT_ADD", "register:40f0:8", ["const:bdb764:8", "const:4:8"]]
+ 00bdb764 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda75c ["INT_ADD", "register:40f0:8", ["const:bda75c:8", "const:4:8"]]
- 00bda75c ["CALL", null, ["callee:00c5c300:8"]]
+ 00bdb750 ["INT_ADD", "register:40f0:8", ["const:bdb750:8", "const:4:8"]]
+ 00bdb750 ["CALL", null, ["callee:00c5c300:8"]]
- 00bda76c ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bda76c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda76c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda76c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdb760 ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bdb760 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb760 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb760 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8e79993eafe54ec3e8f0b80de2eebb80"></a>

### [`00bda7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda7e4.md) → [`00bdb7d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb7d8.md) _ZN8firebase4auth23ForceResendingTokenData6SetRefEP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5df10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df10.md) · 呼出先 3件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 1件 [`00c5eee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eee0.md) · 呼出先 3件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb808",
      "incomplete_value": false,
      "site": "00bdb80c",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda814",
      "incomplete_value": false,
      "site": "00bda818",
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
            "const:609:8"
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
      "definition_site": "00bdb83c",
      "incomplete_value": false,
      "site": "00bdb840",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda848",
      "incomplete_value": false,
      "site": "00bda84c",
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
            "const:609:8"
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
      "00bdb808",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00bdb83c",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb808",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ],
    [
      "00bdb83c",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda818 ["INT_ADD", "register:40f0:8", ["const:bda818:8", "const:4:8"]]
- 00bda818 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb80c ["INT_ADD", "register:40f0:8", ["const:bdb80c:8", "const:4:8"]]
+ 00bdb80c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda84c ["INT_ADD", "register:40f0:8", ["const:bda84c:8", "const:4:8"]]
- 00bda84c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb840 ["INT_ADD", "register:40f0:8", ["const:bdb840:8", "const:4:8"]]
+ 00bdb840 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda804 ["INT_ADD", "register:40f0:8", ["const:bda804:8", "const:4:8"]]
- 00bda804 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bdb7f8 ["INT_ADD", "register:40f0:8", ["const:bdb7f8:8", "const:4:8"]]
+ 00bdb7f8 ["CALL", null, ["callee:00c5c300:8"]]
~~~


<a id="compare-e0f89d23ed5fe0c32edd074a7a1c416d"></a>

### [`00bda8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda8b8.md) → [`00bdb8ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb8ac.md) _ZNK8firebase4auth17PhoneAuthProvider19ForceResendingTokeneqERKS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb8d4",
      "incomplete_value": false,
      "site": "00bdb8d8",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda8e0",
      "incomplete_value": false,
      "site": "00bda8e4",
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
            "const:609:8"
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
      "00bdb8d4",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb8d4",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda8e4 ["INT_ADD", "register:40f0:8", ["const:bda8e4:8", "const:4:8"]]
- 00bda8e4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb8d8 ["INT_ADD", "register:40f0:8", ["const:bdb8d8:8", "const:4:8"]]
+ 00bdb8d8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda8d0 ["INT_ADD", "register:40f0:8", ["const:bda8d0:8", "const:4:8"]]
- 00bda8d0 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bdb8c4 ["INT_ADD", "register:40f0:8", ["const:bdb8c4:8", "const:4:8"]]
+ 00bdb8c4 ["CALL", null, ["callee:00c5c300:8"]]
- 00bda8e0 ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bda8e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda8e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda8e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdb8d4 ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bdb8d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb8d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb8d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0c3e5a1c8b2506b4330cd1d8658a8500"></a>

### [`00bda924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda924.md) → [`00bdb918`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb918.md) _ZNK8firebase4auth17PhoneAuthProvider19ForceResendingTokenneERKS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb940",
      "incomplete_value": false,
      "site": "00bdb944",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda94c",
      "incomplete_value": false,
      "site": "00bda950",
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
            "const:609:8"
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
      "00bdb940",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb940",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda950 ["INT_ADD", "register:40f0:8", ["const:bda950:8", "const:4:8"]]
- 00bda950 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb944 ["INT_ADD", "register:40f0:8", ["const:bdb944:8", "const:4:8"]]
+ 00bdb944 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda93c ["INT_ADD", "register:40f0:8", ["const:bda93c:8", "const:4:8"]]
- 00bda93c ["CALL", null, ["callee:00c5c300:8"]]
+ 00bdb930 ["INT_ADD", "register:40f0:8", ["const:bdb930:8", "const:4:8"]]
+ 00bdb930 ["CALL", null, ["callee:00c5c300:8"]]
- 00bda94c ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bda94c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda94c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda94c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdb940 ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bdb940 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb940 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb940 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a3d9ed2ee826680514fa42bdeb937210"></a>

### [`00bda998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda998.md) → [`00bdb98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb98c.md) _ZN8firebase4auth17PhoneAuthProviderD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5da90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da90.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 1件 [`00c5ea60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea60.md) · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb9b4",
      "incomplete_value": false,
      "site": "00bdb9b8",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda9c0",
      "incomplete_value": false,
      "site": "00bda9c4",
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
            "const:609:8"
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
      "00bdb9b4",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdb9b4",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda9c4 ["INT_ADD", "register:40f0:8", ["const:bda9c4:8", "const:4:8"]]
- 00bda9c4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdb9b8 ["INT_ADD", "register:40f0:8", ["const:bdb9b8:8", "const:4:8"]]
+ 00bdb9b8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bda9b0 ["INT_ADD", "register:40f0:8", ["const:bda9b0:8", "const:4:8"]]
- 00bda9b0 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bdb9a4 ["INT_ADD", "register:40f0:8", ["const:bdb9a4:8", "const:4:8"]]
+ 00bdb9a4 ["CALL", null, ["callee:00c5c300:8"]]
- 00bda9c0 ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bda9c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda9c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda9c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdb9b4 ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bdb9b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb9b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb9b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-00a309f8badb57c49ad9bb2890f21683"></a>

### [`00bdaa08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bdaa08.md) → [`00bdb9fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdb9fc.md) _ZN8firebase4auth17PhoneAuthProvider8ListenerC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bdba14",
      "incomplete_value": true,
      "site": "00bdba18",
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
      "definition_site": "00bdaa20",
      "incomplete_value": true,
      "site": "00bdaa24",
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
    "new": {
      "definition_site": "00bdba3c",
      "incomplete_value": false,
      "site": "00bdba40",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdaa48",
      "incomplete_value": false,
      "site": "00bdaa4c",
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
            "const:609:8"
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
      "definition_site": "00bdba54",
      "incomplete_value": true,
      "site": "00bdba64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdaa60",
      "incomplete_value": true,
      "site": "00bdaa70",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bdba0c",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bdba18",
      "DATA",
      [
        "storage",
        "00c92610",
        null,
        "pointer"
      ]
    ],
    [
      "00bdba3c",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdba0c",
      "READ",
      [
        "storage",
        "00c9cae0",
        null,
        "pointer"
      ]
    ],
    [
      "00bdba18",
      "DATA",
      [
        "storage",
        "00c935e0",
        null,
        "pointer"
      ]
    ],
    [
      "00bdba3c",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdaa4c ["INT_ADD", "register:40f0:8", ["const:bdaa4c:8", "const:4:8"]]
- 00bdaa4c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdba40 ["INT_ADD", "register:40f0:8", ["const:bdba40:8", "const:4:8"]]
+ 00bdba40 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdaa70 ["INT_ADD", "register:40f0:8", ["const:bdaa70:8", "const:4:8"]]
- 00bdaa70 ["CALL", null, ["callee:00589a54:8"]]
+ 00bdba64 ["INT_ADD", "register:40f0:8", ["const:bdba64:8", "const:4:8"]]
+ 00bdba64 ["CALL", null, ["callee:00589a54:8"]]
- 00bdaa14 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bdba08 ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-70ded1af0a2406fc256b15bd9447b575"></a>

### [`00bdaa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bdaa9c.md) → [`00bdba90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdba90.md) _ZN8firebase4auth17PhoneAuthProvider8ListenerD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bdbaa8",
      "incomplete_value": true,
      "site": "00bdbaac",
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
      "definition_site": "00bdaab4",
      "incomplete_value": true,
      "site": "00bdaab8",
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
    "new": {
      "definition_site": "00bdbac0",
      "incomplete_value": false,
      "site": "00bdbac4",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdaacc",
      "incomplete_value": false,
      "site": "00bdaad0",
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
            "const:609:8"
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
      "definition_site": "00bdbad8",
      "incomplete_value": true,
      "site": "00bdbae4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdaae4",
      "incomplete_value": true,
      "site": "00bdaaf0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc8:8"
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
      "00bdbaa0",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bdbaac",
      "DATA",
      [
        "storage",
        "00c92610",
        null,
        "pointer"
      ]
    ],
    [
      "00bdbac0",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdbaa0",
      "READ",
      [
        "storage",
        "00c9cae0",
        null,
        "pointer"
      ]
    ],
    [
      "00bdbaac",
      "DATA",
      [
        "storage",
        "00c935e0",
        null,
        "pointer"
      ]
    ],
    [
      "00bdbac0",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdaad0 ["INT_ADD", "register:40f0:8", ["const:bdaad0:8", "const:4:8"]]
- 00bdaad0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdbac4 ["INT_ADD", "register:40f0:8", ["const:bdbac4:8", "const:4:8"]]
+ 00bdbac4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdaaf0 ["INT_ADD", "register:40f0:8", ["const:bdaaf0:8", "const:4:8"]]
- 00bdaaf0 ["CALL", null, ["callee:0057504c:8"]]
+ 00bdbae4 ["INT_ADD", "register:40f0:8", ["const:bdbae4:8", "const:4:8"]]
+ 00bdbae4 ["CALL", null, ["callee:0057504c:8"]]
- 00bdaaa8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bdba9c ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-2710df1097ac6dcb0eedbdff4c5f1e04"></a>

### [`00bdab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bdab34.md) → [`00bdbb28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdb/00bdbb28.md) _ZN8firebase4auth17PhoneAuthProvider17VerifyPhoneNumberERKNS0_16PhoneAuthOptionsEPNS1_8ListenerE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.85% / 新版 95.85%

優先判定に残った影響 `call_argument_candidate` 13件

アドレスに依存する影響 `call_argument_candidate` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdbb94",
      "incomplete_value": true,
      "site": "00bdbbac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bdaba0",
      "incomplete_value": true,
      "site": "00bdabb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdbba0",
      "incomplete_value": true,
      "site": "00bdbbac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdabac",
      "incomplete_value": true,
      "site": "00bdabb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdbbc4",
      "incomplete_value": false,
      "site": "00bdbbcc",
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
            "const:9a7:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdabd0",
      "incomplete_value": false,
      "site": "00bdabd8",
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
            "const:8c9:8"
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
      "00bdbb94",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdbba0",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdbbc4",
      "PARAM",
      [
        "storage",
        "002be8c9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdbb94",
      "READ",
      [
        "storage",
        "01127c38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdbba0",
      "READ",
      [
        "storage",
        "01127c48",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdbbc4",
      "PARAM",
      [
        "storage",
        "002be9a7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdabb8 ["INT_ADD", "register:40f0:8", ["const:bdabb8:8", "const:4:8"]]
- 00bdabb8 ["CALL", null, ["callee:00589a54:8"]]
+ 00bdbbac ["INT_ADD", "register:40f0:8", ["const:bdbbac:8", "const:4:8"]]
+ 00bdbbac ["CALL", null, ["callee:00589a54:8"]]
- 00bdabd8 ["INT_ADD", "register:40f0:8", ["const:bdabd8:8", "const:4:8"]]
- 00bdabd8 ["CALL", null, ["callee:00c5c660:8"]]
+ 00bdbbcc ["INT_ADD", "register:40f0:8", ["const:bdbbcc:8", "const:4:8"]]
+ 00bdbbcc ["CALL", null, ["callee:00c5c660:8"]]
- 00bdabfc ["INT_ADD", "register:40f0:8", ["const:bdabfc:8", "const:4:8"]]
- 00bdabfc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdbbf0 ["INT_ADD", "register:40f0:8", ["const:bdbbf0:8", "const:4:8"]]
+ 00bdbbf0 ["CALL", null, ["callee:00c5c0a0:8"]]
~~~


<a id="compare-f34ecae61a092032835637ac515651c7"></a>

### [`00bdb054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb054.md) → [`00bdc048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdc048.md) _ZN8firebase4auth17PhoneAuthProvider13GetCredentialEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 91.58% / 新版 91.58%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc0c0",
      "incomplete_value": true,
      "site": "00bdc0d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00bdb0cc",
      "incomplete_value": true,
      "site": "00bdb0e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc0c4",
      "incomplete_value": true,
      "site": "00bdc0d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdb0d0",
      "incomplete_value": true,
      "site": "00bdb0e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ce8:8"
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
      "definition_site": "00bdc130",
      "incomplete_value": false,
      "site": "00bdc134",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdb13c",
      "incomplete_value": false,
      "site": "00bdb140",
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
            "const:609:8"
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
      "00bdc070",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdc074",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bdb1a0"
      ]
    ],
    [
      "00bdc0c0",
      "READ",
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
      "00bdc070",
      "READ",
      [
        "storage",
        "01127db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdc074",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdc194"
      ]
    ],
    [
      "00bdc0c0",
      "READ",
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
- 00bdb0e4 ["INT_ADD", "register:40f0:8", ["const:bdb0e4:8", "const:4:8"]]
- 00bdb0e4 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bdc0d8 ["INT_ADD", "register:40f0:8", ["const:bdc0d8:8", "const:4:8"]]
+ 00bdc0d8 ["CALL", null, ["callee:00c5bc40:8"]]
- 00bdb140 ["INT_ADD", "register:40f0:8", ["const:bdb140:8", "const:4:8"]]
- 00bdb140 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdc134 ["INT_ADD", "register:40f0:8", ["const:bdc134:8", "const:4:8"]]
+ 00bdc134 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdb1a8 ["INT_ADD", "register:40f0:8", ["const:bdb1a8:8", "const:4:8"]]
- 00bdb1a8 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bdc19c ["INT_ADD", "register:40f0:8", ["const:bdc19c:8", "const:4:8"]]
+ 00bdc19c ["CALL", null, ["callee:00c5bd40:8"]]
~~~


<a id="compare-07402bd0272cf7a1749ee3c4c829ecc3"></a>

### [`00bdb270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb270.md) → [`00bdc264`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdc264.md) _ZN8firebase4auth20JniAuthPhoneListener29nativeOnVerificationCompletedEP7_JNIEnvP8_jobjectlS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c300.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc2a4",
      "incomplete_value": false,
      "site": "00bdc2a8",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdb2b0",
      "incomplete_value": false,
      "site": "00bdb2b4",
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
            "const:609:8"
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
      "00bdc2a4",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdc2a4",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdb2b4 ["INT_ADD", "register:40f0:8", ["const:bdb2b4:8", "const:4:8"]]
- 00bdb2b4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdc2a8 ["INT_ADD", "register:40f0:8", ["const:bdc2a8:8", "const:4:8"]]
+ 00bdc2a8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdb2a0 ["INT_ADD", "register:40f0:8", ["const:bdb2a0:8", "const:4:8"]]
- 00bdb2a0 ["CALL", null, ["callee:00c5c300:8"]]
+ 00bdc294 ["INT_ADD", "register:40f0:8", ["const:bdc294:8", "const:4:8"]]
+ 00bdc294 ["CALL", null, ["callee:00c5c300:8"]]
- 00bdb2b0 ["COPY", "tmp:0:8", ["const:609:8"]]
- 00bdb2b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdb2b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdb2b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdc2a4 ["COPY", "tmp:0:8", ["const:653:8"]]
+ 00bdc2a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdc2a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdc2a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-063069d0f3a081eb8523ea4437458511"></a>

### [`00bdb40c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb40c.md) → [`00bdc400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdc400.md) _ZN8firebase4auth20JniAuthPhoneListener16nativeOnCodeSentEP7_JNIEnvP8_jobjectlP8_jstringS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc4a8",
      "incomplete_value": false,
      "site": "00bdc4ac",
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
            "const:653:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdb4b4",
      "incomplete_value": false,
      "site": "00bdb4b8",
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
            "const:609:8"
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
      "00bdc4a8",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdc4a8",
      "PARAM",
      [
        "storage",
        "002b2653",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdb4b8 ["INT_ADD", "register:40f0:8", ["const:bdb4b8:8", "const:4:8"]]
- 00bdb4b8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdc4ac ["INT_ADD", "register:40f0:8", ["const:bdc4ac:8", "const:4:8"]]
+ 00bdc4ac ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdb444 ["INT_ADD", "register:40f0:8", ["const:bdb444:8", "const:4:8"]]
- 00bdb444 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bdc438 ["INT_ADD", "register:40f0:8", ["const:bdc438:8", "const:4:8"]]
+ 00bdc438 ["CALL", null, ["callee:00c58f30:8"]]
- 00bdb458 ["INT_ADD", "register:40f0:8", ["const:bdb458:8", "const:4:8"]]
- 00bdb458 ["CALL", null, ["callee:00c5eee0:8"]]
+ 00bdc44c ["INT_ADD", "register:40f0:8", ["const:bdc44c:8", "const:4:8"]]
+ 00bdc44c ["CALL", null, ["callee:00c5eee0:8"]]
~~~


<a id="compare-7a87e970fd59a378984de7779a0855d4"></a>

### [`00bdbcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbcd4.md) → [`00bdccc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdccc8.md) FUN_00bdccc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00bdb930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb930.md) [`00bdbf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbf14.md) [`00bdc1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc1ec.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5b080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b080.md)
- 新版 呼出元 3件 [`00bdc924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdc924.md) [`00bdcf08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdc/00bdcf08.md) [`00bdd1e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd1e0.md) · 呼出先 9件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc40.md) [`00c5c050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.61% / 新版 98.61%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdcd24",
      "incomplete_value": true,
      "site": "00bdcd3c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdbd30",
      "incomplete_value": true,
      "site": "00bdbd48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c28:8"
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
      "definition_site": "00bdcd28",
      "incomplete_value": true,
      "site": "00bdcd3c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdbd34",
      "incomplete_value": true,
      "site": "00bdbd48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c40:8"
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
      "definition_site": "00bdcd9c",
      "incomplete_value": true,
      "site": "00bdcdac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdbda8",
      "incomplete_value": true,
      "site": "00bdbdb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bdcd24",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcd28",
      "READ",
      [
        "storage",
        "01126c40",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcd9c",
      "READ",
      [
        "storage",
        "01126d18",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdcd24",
      "READ",
      [
        "storage",
        "01127be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcd28",
      "READ",
      [
        "storage",
        "01127c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcd9c",
      "READ",
      [
        "storage",
        "01127cd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdbd48 ["INT_ADD", "register:40f0:8", ["const:bdbd48:8", "const:4:8"]]
- 00bdbd48 ["CALL", null, ["callee:00c5bc40:8"]]
+ 00bdcd3c ["INT_ADD", "register:40f0:8", ["const:bdcd3c:8", "const:4:8"]]
+ 00bdcd3c ["CALL", null, ["callee:00c5bc40:8"]]
- 00bdbdb8 ["INT_ADD", "register:40f0:8", ["const:bdbdb8:8", "const:4:8"]]
- 00bdbdb8 ["CALL", null, ["callee:00497b94:8"]]
+ 00bdcdac ["INT_ADD", "register:40f0:8", ["const:bdcdac:8", "const:4:8"]]
+ 00bdcdac ["CALL", null, ["callee:00497b94:8"]]
- 00bdbe48 ["INT_ADD", "register:40f0:8", ["const:bdbe48:8", "const:4:8"]]
- 00bdbe48 ["CALL", null, ["callee:00497b94:8"]]
+ 00bdce3c ["INT_ADD", "register:40f0:8", ["const:bdce3c:8", "const:4:8"]]
+ 00bdce3c ["CALL", null, ["callee:00497b94:8"]]
~~~


<a id="compare-8d71ba330d72f7658b9afb1cc8220e60"></a>

### [`00bdc4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc4f0.md) → [`00bdd4e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bdd4e4.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_4auth10CredentialEEEvRKNS_12FutureHandleEiPKcEUlPvE_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dea0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ee70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee70.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdd548",
      "incomplete_value": false,
      "site": "00bdd54c",
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
      "definition_site": "00bdc554",
      "incomplete_value": false,
      "site": "00bdc558",
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
      "00bdd548",
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
      "00bdd548",
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
- 00bdc558 ["INT_ADD", "register:40f0:8", ["const:bdc558:8", "const:4:8"]]
- 00bdc558 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bdd54c ["INT_ADD", "register:40f0:8", ["const:bdd54c:8", "const:4:8"]]
+ 00bdd54c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdc51c ["INT_ADD", "register:40f0:8", ["const:bdc51c:8", "const:4:8"]]
- 00bdc51c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bdd510 ["INT_ADD", "register:40f0:8", ["const:bdd510:8", "const:4:8"]]
+ 00bdd510 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bdc528 ["INT_ADD", "register:40f0:8", ["const:bdc528:8", "const:4:8"]]
- 00bdc528 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bdd51c ["INT_ADD", "register:40f0:8", ["const:bdd51c:8", "const:4:8"]]
+ 00bdd51c ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-9e16e8036cc711a97e581ac7d398f2b0"></a>

### [`00bdccf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdccf4.md) → [`00bddce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bddce8.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_4auth10AuthResultEZNS2_35FederatedAuthProviderFutureCallbackIS3_EEvP7_JNIEnvP8

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de90.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5ee60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ee60.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bddd54",
      "incomplete_value": false,
      "site": "00bddd58",
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
      "definition_site": "00bdcd60",
      "incomplete_value": false,
      "site": "00bdcd64",
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
      "00bddd54",
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
      "00bddd54",
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
- 00bdcd64 ["INT_ADD", "register:40f0:8", ["const:bdcd64:8", "const:4:8"]]
- 00bdcd64 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bddd58 ["INT_ADD", "register:40f0:8", ["const:bddd58:8", "const:4:8"]]
+ 00bddd58 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdcd28 ["INT_ADD", "register:40f0:8", ["const:bdcd28:8", "const:4:8"]]
- 00bdcd28 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bddd1c ["INT_ADD", "register:40f0:8", ["const:bddd1c:8", "const:4:8"]]
+ 00bddd1c ["CALL", null, ["callee:00c5baa0:8"]]
- 00bdcd34 ["INT_ADD", "register:40f0:8", ["const:bdcd34:8", "const:4:8"]]
- 00bdcd34 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bddd28 ["INT_ADD", "register:40f0:8", ["const:bddd28:8", "const:4:8"]]
+ 00bddd28 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-9c32cf8a8e4fcd3de47c08e3f36f7794"></a>

### [`00bdceb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdceb4.md) → [`00bddea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bddea8.md) _ZN8firebase4auth11tokenresult19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bdded4",
      "incomplete_value": true,
      "site": "00bdded4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcee0",
      "incomplete_value": true,
      "site": "00bdcee0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e00:8"
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
      "definition_site": "00bddebc",
      "incomplete_value": true,
      "site": "00bddebc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcec8",
      "incomplete_value": true,
      "site": "00bdcec8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bddec8",
      "incomplete_value": false,
      "site": "00bddecc",
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
            "const:2da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdced4",
      "incomplete_value": false,
      "site": "00bdced8",
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
            "const:1fc:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bddeb8",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddec8",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bdded4",
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
      "00bddeb8",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddec8",
      "PARAM",
      [
        "storage",
        "002bc2da",
        null,
        "string"
      ]
    ],
    [
      "00bdded4",
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
- 00bdced8 ["INT_ADD", "register:40f0:8", ["const:bdced8:8", "const:4:8"]]
- 00bdced8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bddecc ["INT_ADD", "register:40f0:8", ["const:bddecc:8", "const:4:8"]]
+ 00bddecc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdcee0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdcee0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdded4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dc0:8"]]
+ 00bdded4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdcec0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bddeb4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-886cb4f0d7ee5f6efe97adb7ba7b9ed2"></a>

### [`00bdcef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcef4.md) → [`00bddee8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bddee8.md) _ZN8firebase4auth11tokenresult19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bddf14",
      "incomplete_value": true,
      "site": "00bddf14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcf20",
      "incomplete_value": true,
      "site": "00bdcf20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e00:8"
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
      "definition_site": "00bddefc",
      "incomplete_value": true,
      "site": "00bddefc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcf08",
      "incomplete_value": true,
      "site": "00bdcf08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bddf04",
      "incomplete_value": false,
      "site": "00bddf0c",
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
            "const:2da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcf10",
      "incomplete_value": false,
      "site": "00bdcf18",
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
            "const:1fc:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bddef8",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddf04",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bddf14",
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
      "00bddef8",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddf04",
      "PARAM",
      [
        "storage",
        "002bc2da",
        null,
        "string"
      ]
    ],
    [
      "00bddf14",
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
- 00bdcf18 ["INT_ADD", "register:40f0:8", ["const:bdcf18:8", "const:4:8"]]
- 00bdcf18 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bddf0c ["INT_ADD", "register:40f0:8", ["const:bddf0c:8", "const:4:8"]]
+ 00bddf0c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdcf20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdcf20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddf14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dc0:8"]]
+ 00bddf14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdcf00 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bddef4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-78d51194fa9edf9defb7e15be94a84e0"></a>

### [`00bdcf34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcf34.md) → [`00bddf28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bddf28.md) _ZN8firebase4auth11tokenresult10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bddf58",
      "incomplete_value": true,
      "site": "00bddf58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcf64",
      "incomplete_value": true,
      "site": "00bdcf64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e00:8"
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
      "definition_site": "00bddf3c",
      "incomplete_value": true,
      "site": "00bddf3c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcf48",
      "incomplete_value": true,
      "site": "00bdcf48",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bddf48",
      "incomplete_value": false,
      "site": "00bddf50",
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
            "const:2da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcf54",
      "incomplete_value": false,
      "site": "00bdcf5c",
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
            "const:1fc:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bddf38",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddf48",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bddf58",
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
      "00bddf38",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddf48",
      "PARAM",
      [
        "storage",
        "002bc2da",
        null,
        "string"
      ]
    ],
    [
      "00bddf58",
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
- 00bdcf5c ["INT_ADD", "register:40f0:8", ["const:bdcf5c:8", "const:4:8"]]
- 00bdcf5c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bddf50 ["INT_ADD", "register:40f0:8", ["const:bddf50:8", "const:4:8"]]
+ 00bddf50 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdcf64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdcf64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddf58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dc0:8"]]
+ 00bddf58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdcf40 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bddf34 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-32d212ddfaf3de30c2d91309b91789b8"></a>

### [`00bdcf78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcf78.md) → [`00bddf6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bddf6c.md) _ZN8firebase4auth11tokenresult10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bddf9c",
      "incomplete_value": true,
      "site": "00bddf9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcfa8",
      "incomplete_value": true,
      "site": "00bdcfa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e00:8"
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
      "definition_site": "00bddf80",
      "incomplete_value": true,
      "site": "00bddf80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcf8c",
      "incomplete_value": true,
      "site": "00bdcf8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bddf88",
      "incomplete_value": false,
      "site": "00bddf94",
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
            "const:2da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcf94",
      "incomplete_value": false,
      "site": "00bdcfa0",
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
            "const:1fc:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bddf7c",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddf88",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bddf9c",
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
      "00bddf7c",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddf88",
      "PARAM",
      [
        "storage",
        "002bc2da",
        null,
        "string"
      ]
    ],
    [
      "00bddf9c",
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
- 00bdcfa0 ["INT_ADD", "register:40f0:8", ["const:bdcfa0:8", "const:4:8"]]
- 00bdcfa0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bddf94 ["INT_ADD", "register:40f0:8", ["const:bddf94:8", "const:4:8"]]
+ 00bddf94 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdcfa8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdcfa8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddf9c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dc0:8"]]
+ 00bddf9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdcf84 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bddf78 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ef732619f02b16b789a9e00a792e9c02"></a>

### [`00bdcfc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcfc8.md) → [`00bddfbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bdd/00bddfbc.md) _ZN8firebase4auth11tokenresult15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bde014",
      "incomplete_value": true,
      "site": "00bde014",
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
      "definition_site": "00bdd020",
      "incomplete_value": true,
      "site": "00bdd020",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bddff0",
      "incomplete_value": true,
      "site": "00bddffc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dc0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdcffc",
      "incomplete_value": true,
      "site": "00bdd008",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e00:8"
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
      "00bddfd0",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bddff0",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde014",
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
      "00bddfd0",
      "READ",
      [
        "storage",
        "01127dc8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bddff0",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde014",
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
- 00bdd008 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd008 ["INT_ADD", "register:40f0:8", ["const:bdd008:8", "const:4:8"]]
- 00bdd008 ["CALLIND", null, ["register:0:8"]]
+ 00bddffc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bddffc ["INT_ADD", "register:40f0:8", ["const:bddffc:8", "const:4:8"]]
+ 00bddffc ["CALLIND", null, ["register:0:8"]]
- 00bdd020 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bdd020 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e08:8"]]
- 00bdd020 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bde014 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bde014 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:dc8:8"]]
+ 00bde014 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bdcfd8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bddfcc ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-661c9e499c41b140cf9648b8eb334587"></a>

### [`00bdd034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd034.md) → [`00bde028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde028.md) _ZN8firebase4auth11tokenresult12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bde064",
      "incomplete_value": true,
      "site": "00bde064",
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
      "definition_site": "00bdd070",
      "incomplete_value": true,
      "site": "00bdd070",
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
      "definition_site": "00bde084",
      "incomplete_value": true,
      "site": "00bde084",
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
      "definition_site": "00bdd090",
      "incomplete_value": true,
      "site": "00bdd090",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00bde040",
      "incomplete_value": true,
      "site": "00bde040",
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
      "definition_site": "00bdd04c",
      "incomplete_value": true,
      "site": "00bdd04c",
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
      "00bde03c",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde048",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde064",
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
      "00bde03c",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde048",
      "READ",
      [
        "storage",
        "01127dc8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde064",
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
- 00bdd070 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bdd070 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bdd070 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e08:8"]]
- 00bdd070 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bde064 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bde064 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bde064 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:dc8:8"]]
+ 00bde064 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdd08c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd08c ["INT_ADD", "register:40f0:8", ["const:bdd08c:8", "const:4:8"]]
- 00bdd08c ["CALLIND", null, ["register:0:8"]]
+ 00bde080 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bde080 ["INT_ADD", "register:40f0:8", ["const:bde080:8", "const:4:8"]]
+ 00bde080 ["CALLIND", null, ["register:0:8"]]
- 00bdd090 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bdd090 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdd090 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bde084 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
+ 00bde084 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bde084 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-5d0ee76b87733ad4aa99921099ab0909"></a>

### [`00bdd0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd0a4.md) → [`00bde098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde098.md) _ZN8firebase4auth11tokenresult14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde0d8",
      "incomplete_value": true,
      "site": "00bde0d8",
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
      "definition_site": "00bdd0e4",
      "incomplete_value": true,
      "site": "00bdd0e4",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bde0b4",
      "incomplete_value": true,
      "site": "00bde0b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd0c0",
      "incomplete_value": true,
      "site": "00bdd0c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde0bc",
      "incomplete_value": false,
      "site": "00bde0d0",
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
            "const:2da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd0c8",
      "incomplete_value": false,
      "site": "00bdd0dc",
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
            "const:1fc:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde0ac",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde0bc",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bde0d8",
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
      "00bde0ac",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde0bc",
      "PARAM",
      [
        "storage",
        "002bc2da",
        null,
        "string"
      ]
    ],
    [
      "00bde0d8",
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
- 00bdd0dc ["INT_ADD", "register:40f0:8", ["const:bdd0dc:8", "const:4:8"]]
- 00bdd0dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde0d0 ["INT_ADD", "register:40f0:8", ["const:bde0d0:8", "const:4:8"]]
+ 00bde0d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd0e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bdd0e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde0d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
+ 00bde0d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd0b0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bde0a4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-f83e667803b7b544e4adae973afc2cb6"></a>

### [`00bdd114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd114.md) → [`00bde108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde108.md) _ZN8firebase4auth11tokenresult11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bde124",
      "incomplete_value": false,
      "site": "00bde128",
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
      "definition_site": "00bdd130",
      "incomplete_value": false,
      "site": "00bdd134",
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
      "definition_site": "00bde134",
      "incomplete_value": true,
      "site": "00bde140",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bdd140",
      "incomplete_value": true,
      "site": "00bdd14c",
      "value": [
        "LOAD",
        "8",
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
      "00bde124",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bde134",
      "DATA",
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
      "00bde124",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bde134",
      "DATA",
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
- 00bdd134 ["INT_ADD", "register:40f0:8", ["const:bdd134:8", "const:4:8"]]
- 00bdd134 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bde128 ["INT_ADD", "register:40f0:8", ["const:bde128:8", "const:4:8"]]
+ 00bde128 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdd130 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bdd130 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd130 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd130 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bde124 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bde124 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde124 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde124 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd138 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bde12c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-e85cdfb6abd3616373b51aff5081109d"></a>

### [`00bdd150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd150.md) → [`00bde144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde144.md) _ZN8firebase4auth11tokenresult13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde184",
      "incomplete_value": true,
      "site": "00bde184",
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
      "definition_site": "00bdd190",
      "incomplete_value": true,
      "site": "00bdd190",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bde160",
      "incomplete_value": true,
      "site": "00bde160",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd16c",
      "incomplete_value": true,
      "site": "00bdd16c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde168",
      "incomplete_value": false,
      "site": "00bde17c",
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
            "const:2da:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd174",
      "incomplete_value": false,
      "site": "00bdd188",
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
            "const:1fc:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde158",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde168",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bde184",
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
      "00bde158",
      "READ",
      [
        "storage",
        "01127dc0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde168",
      "PARAM",
      [
        "storage",
        "002bc2da",
        null,
        "string"
      ]
    ],
    [
      "00bde184",
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
- 00bdd188 ["INT_ADD", "register:40f0:8", ["const:bdd188:8", "const:4:8"]]
- 00bdd188 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde17c ["INT_ADD", "register:40f0:8", ["const:bde17c:8", "const:4:8"]]
+ 00bde17c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd190 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bdd190 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde184 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dc0:8"]]
+ 00bde184 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd15c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bde150 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-e0adeb8f3e8fd2518d6f9397cef59136"></a>

### [`00bdd1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd1c0.md) → [`00bde1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde1b4.md) _ZN8firebase4auth11tokenresult10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bde1d0",
      "incomplete_value": false,
      "site": "00bde1d4",
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
      "definition_site": "00bdd1dc",
      "incomplete_value": false,
      "site": "00bdd1e0",
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
      "definition_site": "00bde1e0",
      "incomplete_value": true,
      "site": "00bde1ec",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bdd1ec",
      "incomplete_value": true,
      "site": "00bdd1f8",
      "value": [
        "LOAD",
        "8",
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
      "00bde1d0",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bde1e0",
      "DATA",
      [
        "storage",
        "01126e18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bde1d0",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bde1e0",
      "DATA",
      [
        "storage",
        "01127dd8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd1e0 ["INT_ADD", "register:40f0:8", ["const:bdd1e0:8", "const:4:8"]]
- 00bdd1e0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bde1d4 ["INT_ADD", "register:40f0:8", ["const:bde1d4:8", "const:4:8"]]
+ 00bde1d4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdd1dc ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bdd1dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd1dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd1dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bde1d0 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bde1d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde1d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde1d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd1e4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bde1d8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-f9f308045489f57cacaafc3f6e0acf47"></a>

### [`00bdd1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd1fc.md) → [`00bde1f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde1f0.md) _ZN8firebase4auth4user19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4util

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
      "definition_site": "00bde21c",
      "incomplete_value": true,
      "site": "00bde21c",
      "value": [
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
      "definition_site": "00bdd228",
      "incomplete_value": true,
      "site": "00bdd228",
      "value": [
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
      "definition_site": "00bde204",
      "incomplete_value": true,
      "site": "00bde204",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd210",
      "incomplete_value": true,
      "site": "00bdd210",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde210",
      "incomplete_value": false,
      "site": "00bde214",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd21c",
      "incomplete_value": false,
      "site": "00bdd220",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde200",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde210",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bde21c",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde200",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde210",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bde21c",
      "WRITE",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd220 ["INT_ADD", "register:40f0:8", ["const:bdd220:8", "const:4:8"]]
- 00bdd220 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde214 ["INT_ADD", "register:40f0:8", ["const:bde214:8", "const:4:8"]]
+ 00bde214 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd228 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
- 00bdd228 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde21c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:de0:8"]]
+ 00bde21c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd208 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde1fc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b885b538acaf583908137a9101e583a1"></a>

### [`00bdd23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd23c.md) → [`00bde230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde230.md) _ZN8firebase4auth4user19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bde25c",
      "incomplete_value": true,
      "site": "00bde25c",
      "value": [
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
      "definition_site": "00bdd268",
      "incomplete_value": true,
      "site": "00bdd268",
      "value": [
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
      "definition_site": "00bde244",
      "incomplete_value": true,
      "site": "00bde244",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd250",
      "incomplete_value": true,
      "site": "00bdd250",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde24c",
      "incomplete_value": false,
      "site": "00bde254",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd258",
      "incomplete_value": false,
      "site": "00bdd260",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde240",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde24c",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bde25c",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde240",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde24c",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bde25c",
      "WRITE",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd260 ["INT_ADD", "register:40f0:8", ["const:bdd260:8", "const:4:8"]]
- 00bdd260 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde254 ["INT_ADD", "register:40f0:8", ["const:bde254:8", "const:4:8"]]
+ 00bde254 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd268 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
- 00bdd268 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde25c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:de0:8"]]
+ 00bde25c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd248 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde23c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-0928b8097cdc06e32c54f68adf761e07"></a>

### [`00bdd27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd27c.md) → [`00bde270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde270.md) _ZN8firebase4auth4user10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bde2a0",
      "incomplete_value": true,
      "site": "00bde2a0",
      "value": [
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
      "definition_site": "00bdd2ac",
      "incomplete_value": true,
      "site": "00bdd2ac",
      "value": [
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
      "definition_site": "00bde284",
      "incomplete_value": true,
      "site": "00bde284",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd290",
      "incomplete_value": true,
      "site": "00bdd290",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde290",
      "incomplete_value": false,
      "site": "00bde298",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd29c",
      "incomplete_value": false,
      "site": "00bdd2a4",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde280",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde290",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bde2a0",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde280",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde290",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bde2a0",
      "WRITE",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd2a4 ["INT_ADD", "register:40f0:8", ["const:bdd2a4:8", "const:4:8"]]
- 00bdd2a4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde298 ["INT_ADD", "register:40f0:8", ["const:bde298:8", "const:4:8"]]
+ 00bde298 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd2ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
- 00bdd2ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde2a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:de0:8"]]
+ 00bde2a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd288 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde27c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-51d4ef930673734543177f63c64a46a7"></a>

### [`00bdd2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd2c0.md) → [`00bde2b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde2b4.md) _ZN8firebase4auth4user10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde2e4",
      "incomplete_value": true,
      "site": "00bde2e4",
      "value": [
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
      "definition_site": "00bdd2f0",
      "incomplete_value": true,
      "site": "00bdd2f0",
      "value": [
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
      "definition_site": "00bde2c8",
      "incomplete_value": true,
      "site": "00bde2c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd2d4",
      "incomplete_value": true,
      "site": "00bdd2d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde2d0",
      "incomplete_value": false,
      "site": "00bde2dc",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd2dc",
      "incomplete_value": false,
      "site": "00bdd2e8",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde2c4",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde2d0",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bde2e4",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde2c4",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde2d0",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bde2e4",
      "WRITE",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd2e8 ["INT_ADD", "register:40f0:8", ["const:bdd2e8:8", "const:4:8"]]
- 00bdd2e8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde2dc ["INT_ADD", "register:40f0:8", ["const:bde2dc:8", "const:4:8"]]
+ 00bde2dc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd2f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
- 00bdd2f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde2e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:de0:8"]]
+ 00bde2e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd2cc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde2c0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-fba4201ab327adfa8dbcf1a52749eba9"></a>

### [`00bdd310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd310.md) → [`00bde304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde304.md) _ZN8firebase4auth4user15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bde35c",
      "incomplete_value": true,
      "site": "00bde35c",
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
      "definition_site": "00bdd368",
      "incomplete_value": true,
      "site": "00bdd368",
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
      "definition_site": "00bde338",
      "incomplete_value": true,
      "site": "00bde344",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd344",
      "incomplete_value": true,
      "site": "00bdd350",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bde318",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde338",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde35c",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bde318",
      "READ",
      [
        "storage",
        "01127de8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde338",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde35c",
      "WRITE",
      [
        "storage",
        "01127de8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd350 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd350 ["INT_ADD", "register:40f0:8", ["const:bdd350:8", "const:4:8"]]
- 00bdd350 ["CALLIND", null, ["register:0:8"]]
+ 00bde344 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bde344 ["INT_ADD", "register:40f0:8", ["const:bde344:8", "const:4:8"]]
+ 00bde344 ["CALLIND", null, ["register:0:8"]]
- 00bdd368 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bdd368 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e28:8"]]
- 00bdd368 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bde35c ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bde35c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:de8:8"]]
+ 00bde35c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bdd320 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bde314 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-460fd782532c606f39d45eb08366ac13"></a>

### [`00bdd37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd37c.md) → [`00bde370`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde370.md) _ZN8firebase4auth4user12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bde3ac",
      "incomplete_value": true,
      "site": "00bde3ac",
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
      "definition_site": "00bdd3b8",
      "incomplete_value": true,
      "site": "00bdd3b8",
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
      "definition_site": "00bde3cc",
      "incomplete_value": true,
      "site": "00bde3cc",
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
      "definition_site": "00bdd3d8",
      "incomplete_value": true,
      "site": "00bdd3d8",
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
      "definition_site": "00bde388",
      "incomplete_value": true,
      "site": "00bde388",
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
      "definition_site": "00bdd394",
      "incomplete_value": true,
      "site": "00bdd394",
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
      "00bde384",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde390",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde3ac",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bde384",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde390",
      "READ",
      [
        "storage",
        "01127de8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde3ac",
      "WRITE",
      [
        "storage",
        "01127de8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd3b8 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bdd3b8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bdd3b8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e28:8"]]
- 00bdd3b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bde3ac ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bde3ac ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bde3ac ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:de8:8"]]
+ 00bde3ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdd3d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd3d4 ["INT_ADD", "register:40f0:8", ["const:bdd3d4:8", "const:4:8"]]
- 00bdd3d4 ["CALLIND", null, ["register:0:8"]]
+ 00bde3c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bde3c8 ["INT_ADD", "register:40f0:8", ["const:bde3c8:8", "const:4:8"]]
+ 00bde3c8 ["CALLIND", null, ["register:0:8"]]
- 00bdd3d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
- 00bdd3d8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdd3d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bde3cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
+ 00bde3cc ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bde3cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-7c3b40085bd1397895ae5a00c3bff49f"></a>

### [`00bdd3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd3ec.md) → [`00bde3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde3e0.md) _ZN8firebase4auth4user14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde420",
      "incomplete_value": true,
      "site": "00bde420",
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
      "definition_site": "00bdd42c",
      "incomplete_value": true,
      "site": "00bdd42c",
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
      "definition_site": "00bde3fc",
      "incomplete_value": true,
      "site": "00bde3fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd408",
      "incomplete_value": true,
      "site": "00bdd408",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde404",
      "incomplete_value": false,
      "site": "00bde418",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd410",
      "incomplete_value": false,
      "site": "00bdd424",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde3f4",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde404",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bde420",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde3f4",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde404",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bde420",
      "WRITE",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd424 ["INT_ADD", "register:40f0:8", ["const:bdd424:8", "const:4:8"]]
- 00bdd424 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde418 ["INT_ADD", "register:40f0:8", ["const:bde418:8", "const:4:8"]]
+ 00bde418 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd42c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
- 00bdd42c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde420 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
+ 00bde420 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd3f8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bde3ec ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-dc96bb0ed6f3a18e7615a86bba884b47"></a>

### [`00bdd45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd45c.md) → [`00bde450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde450.md) _ZN8firebase4auth4user11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bde46c",
      "incomplete_value": false,
      "site": "00bde470",
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
      "definition_site": "00bdd478",
      "incomplete_value": false,
      "site": "00bdd47c",
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
      "definition_site": "00bde47c",
      "incomplete_value": true,
      "site": "00bde488",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bdd488",
      "incomplete_value": true,
      "site": "00bdd494",
      "value": [
        "LOAD",
        "8",
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
      "00bde46c",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bde47c",
      "DATA",
      [
        "storage",
        "01126e30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde46c",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bde47c",
      "DATA",
      [
        "storage",
        "01127df0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd47c ["INT_ADD", "register:40f0:8", ["const:bdd47c:8", "const:4:8"]]
- 00bdd47c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bde470 ["INT_ADD", "register:40f0:8", ["const:bde470:8", "const:4:8"]]
+ 00bde470 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdd478 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bdd478 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd478 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd478 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bde46c ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bde46c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde46c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde46c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd480 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bde474 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-9284c67145e60381c0f514834b95bb0f"></a>

### [`00bdd498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd498.md) → [`00bde48c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde48c.md) _ZN8firebase4auth4user13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde4cc",
      "incomplete_value": true,
      "site": "00bde4cc",
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
      "definition_site": "00bdd4d8",
      "incomplete_value": true,
      "site": "00bdd4d8",
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
      "definition_site": "00bde4a8",
      "incomplete_value": true,
      "site": "00bde4a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd4b4",
      "incomplete_value": true,
      "site": "00bdd4b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde4b0",
      "incomplete_value": false,
      "site": "00bde4c4",
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
            "const:983:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd4bc",
      "incomplete_value": false,
      "site": "00bdd4d0",
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
            "const:8b6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde4a0",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde4b0",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bde4cc",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bde4a0",
      "READ",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde4b0",
      "PARAM",
      [
        "storage",
        "002a9983",
        null,
        "string"
      ]
    ],
    [
      "00bde4cc",
      "WRITE",
      [
        "storage",
        "01127de0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd4d0 ["INT_ADD", "register:40f0:8", ["const:bdd4d0:8", "const:4:8"]]
- 00bdd4d0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde4c4 ["INT_ADD", "register:40f0:8", ["const:bde4c4:8", "const:4:8"]]
+ 00bde4c4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd4d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
- 00bdd4d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde4cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:de0:8"]]
+ 00bde4cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd4a4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bde498 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-9e17a866b69558195ceb60f669d6bf29"></a>

### [`00bdd508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd508.md) → [`00bde4fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde4fc.md) _ZN8firebase4auth4user10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bde518",
      "incomplete_value": false,
      "site": "00bde51c",
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
      "definition_site": "00bdd524",
      "incomplete_value": false,
      "site": "00bdd528",
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
      "definition_site": "00bde528",
      "incomplete_value": true,
      "site": "00bde534",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bdd534",
      "incomplete_value": true,
      "site": "00bdd540",
      "value": [
        "LOAD",
        "8",
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
      "00bde518",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bde528",
      "DATA",
      [
        "storage",
        "01126ea8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bde518",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bde528",
      "DATA",
      [
        "storage",
        "01127e68",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd528 ["INT_ADD", "register:40f0:8", ["const:bdd528:8", "const:4:8"]]
- 00bdd528 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bde51c ["INT_ADD", "register:40f0:8", ["const:bde51c:8", "const:4:8"]]
+ 00bde51c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bdd524 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bdd524 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd524 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd524 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bde518 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bde518 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde518 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bde518 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd52c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bde520 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-5c16d5de58ae130583b8723708c9e007"></a>

### [`00bdd544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd544.md) → [`00bde538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde538.md) _ZN8firebase4auth8userinfo19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
      "definition_site": "00bde564",
      "incomplete_value": true,
      "site": "00bde564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd570",
      "incomplete_value": true,
      "site": "00bdd570",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "definition_site": "00bde54c",
      "incomplete_value": true,
      "site": "00bde54c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd558",
      "incomplete_value": true,
      "site": "00bdd558",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde558",
      "incomplete_value": false,
      "site": "00bde55c",
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
      "definition_site": "00bdd564",
      "incomplete_value": false,
      "site": "00bdd568",
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
      "00bde548",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde558",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bde564",
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
      "00bde548",
      "READ",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde558",
      "PARAM",
      [
        "storage",
        "002b17f7",
        null,
        "string"
      ]
    ],
    [
      "00bde564",
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
- 00bdd568 ["INT_ADD", "register:40f0:8", ["const:bdd568:8", "const:4:8"]]
- 00bdd568 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde55c ["INT_ADD", "register:40f0:8", ["const:bde55c:8", "const:4:8"]]
+ 00bde55c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd570 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
- 00bdd570 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde564 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e70:8"]]
+ 00bde564 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd550 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde544 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e805bdd58bace146cda07f071a35366c"></a>

### [`00bdd584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd584.md) → [`00bde578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde578.md) _ZN8firebase4auth8userinfo19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bde5a4",
      "incomplete_value": true,
      "site": "00bde5a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd5b0",
      "incomplete_value": true,
      "site": "00bdd5b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "definition_site": "00bde58c",
      "incomplete_value": true,
      "site": "00bde58c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd598",
      "incomplete_value": true,
      "site": "00bdd598",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde594",
      "incomplete_value": false,
      "site": "00bde59c",
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
      "definition_site": "00bdd5a0",
      "incomplete_value": false,
      "site": "00bdd5a8",
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
      "00bde588",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde594",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bde5a4",
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
      "00bde588",
      "READ",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde594",
      "PARAM",
      [
        "storage",
        "002b17f7",
        null,
        "string"
      ]
    ],
    [
      "00bde5a4",
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
- 00bdd5a8 ["INT_ADD", "register:40f0:8", ["const:bdd5a8:8", "const:4:8"]]
- 00bdd5a8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde59c ["INT_ADD", "register:40f0:8", ["const:bde59c:8", "const:4:8"]]
+ 00bde59c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd5b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
- 00bdd5b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde5a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e70:8"]]
+ 00bde5a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd590 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde584 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-4307048f660da41406663f5db2adefa1"></a>

### [`00bdd5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd5c4.md) → [`00bde5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde5b8.md) _ZN8firebase4auth8userinfo10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bde5e8",
      "incomplete_value": true,
      "site": "00bde5e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd5f4",
      "incomplete_value": true,
      "site": "00bdd5f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "definition_site": "00bde5cc",
      "incomplete_value": true,
      "site": "00bde5cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd5d8",
      "incomplete_value": true,
      "site": "00bdd5d8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde5d8",
      "incomplete_value": false,
      "site": "00bde5e0",
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
      "definition_site": "00bdd5e4",
      "incomplete_value": false,
      "site": "00bdd5ec",
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
      "00bde5c8",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde5d8",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bde5e8",
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
      "00bde5c8",
      "READ",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde5d8",
      "PARAM",
      [
        "storage",
        "002b17f7",
        null,
        "string"
      ]
    ],
    [
      "00bde5e8",
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
- 00bdd5ec ["INT_ADD", "register:40f0:8", ["const:bdd5ec:8", "const:4:8"]]
- 00bdd5ec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde5e0 ["INT_ADD", "register:40f0:8", ["const:bde5e0:8", "const:4:8"]]
+ 00bde5e0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd5f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
- 00bdd5f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde5e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e70:8"]]
+ 00bde5e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd5d0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde5c4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-2837c3def7b5d1b55878d47dd83651e0"></a>

### [`00bdd608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd608.md) → [`00bde5fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde5fc.md) _ZN8firebase4auth8userinfo10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde62c",
      "incomplete_value": true,
      "site": "00bde62c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd638",
      "incomplete_value": true,
      "site": "00bdd638",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "definition_site": "00bde610",
      "incomplete_value": true,
      "site": "00bde610",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd61c",
      "incomplete_value": true,
      "site": "00bdd61c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
      "definition_site": "00bde618",
      "incomplete_value": false,
      "site": "00bde624",
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
      "definition_site": "00bdd624",
      "incomplete_value": false,
      "site": "00bdd630",
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
      "00bde60c",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde618",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bde62c",
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
      "00bde60c",
      "READ",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde618",
      "PARAM",
      [
        "storage",
        "002b17f7",
        null,
        "string"
      ]
    ],
    [
      "00bde62c",
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
- 00bdd630 ["INT_ADD", "register:40f0:8", ["const:bdd630:8", "const:4:8"]]
- 00bdd630 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bde624 ["INT_ADD", "register:40f0:8", ["const:bde624:8", "const:4:8"]]
+ 00bde624 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bdd638 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
- 00bdd638 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde62c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e70:8"]]
+ 00bde62c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd614 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bde608 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-baff2da8030c2f95d2be2bf2b9f9fde8"></a>

### [`00bdd658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd658.md) → [`00bde64c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde64c.md) _ZN8firebase4auth8userinfo15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bde6a4",
      "incomplete_value": true,
      "site": "00bde6a4",
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
      "definition_site": "00bdd6b0",
      "incomplete_value": true,
      "site": "00bdd6b0",
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
            "const:eb8:8"
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
      "definition_site": "00bde680",
      "incomplete_value": true,
      "site": "00bde68c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd68c",
      "incomplete_value": true,
      "site": "00bdd698",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:eb0:8"
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
      "00bde660",
      "READ",
      [
        "storage",
        "01126eb8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde680",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde6a4",
      "WRITE",
      [
        "storage",
        "01126eb8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bde660",
      "READ",
      [
        "storage",
        "01127e78",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde680",
      "READ",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde6a4",
      "WRITE",
      [
        "storage",
        "01127e78",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd698 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd698 ["INT_ADD", "register:40f0:8", ["const:bdd698:8", "const:4:8"]]
- 00bdd698 ["CALLIND", null, ["register:0:8"]]
+ 00bde68c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bde68c ["INT_ADD", "register:40f0:8", ["const:bde68c:8", "const:4:8"]]
+ 00bde68c ["CALLIND", null, ["register:0:8"]]
- 00bdd6b0 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bdd6b0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:eb8:8"]]
- 00bdd6b0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bde6a4 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bde6a4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e78:8"]]
+ 00bde6a4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bdd668 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bde65c ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-112f727f7899a35edee298394317a0bb"></a>

### [`00bdd6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd6c4.md) → [`00bde6b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde6b8.md) _ZN8firebase4auth8userinfo12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bde6f4",
      "incomplete_value": true,
      "site": "00bde6f4",
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
      "definition_site": "00bdd700",
      "incomplete_value": true,
      "site": "00bdd700",
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
            "const:eb8:8"
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
      "definition_site": "00bde714",
      "incomplete_value": true,
      "site": "00bde714",
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
      "definition_site": "00bdd720",
      "incomplete_value": true,
      "site": "00bdd720",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bde6d0",
      "incomplete_value": true,
      "site": "00bde6d0",
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
      "definition_site": "00bdd6dc",
      "incomplete_value": true,
      "site": "00bdd6dc",
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
      "00bde6cc",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde6d8",
      "READ",
      [
        "storage",
        "01126eb8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde6f4",
      "WRITE",
      [
        "storage",
        "01126eb8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bde6cc",
      "READ",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde6d8",
      "READ",
      [
        "storage",
        "01127e78",
        null,
        "undefined1"
      ]
    ],
    [
      "00bde6f4",
      "WRITE",
      [
        "storage",
        "01127e78",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd700 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bdd700 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bdd700 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:eb8:8"]]
- 00bdd700 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bde6f4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bde6f4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bde6f4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e78:8"]]
+ 00bde6f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdd71c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd71c ["INT_ADD", "register:40f0:8", ["const:bdd71c:8", "const:4:8"]]
- 00bdd71c ["CALLIND", null, ["register:0:8"]]
+ 00bde710 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bde710 ["INT_ADD", "register:40f0:8", ["const:bde710:8", "const:4:8"]]
+ 00bde710 ["CALLIND", null, ["register:0:8"]]
- 00bdd720 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:eb0:8"]]
- 00bdd720 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdd720 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bde714 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e70:8"]]
+ 00bde714 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bde714 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-32a5d78dcde111bca2efea82cb8d58f4"></a>

### [`00bdd734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd734.md) → [`00bde728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bde/00bde728.md) _ZN8firebase4auth8userinfo14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bde768",
      "incomplete_value": true,
      "site": "00bde768",
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
      "definition_site": "00bdd774",
      "incomplete_value": true,
      "site": "00bdd774",
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
      "definition_site": "00bde744",
      "incomplete_value": true,
      "site": "00bde744",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd750",
      "incomplete_value": true,
      "site": "00bdd750",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00bdd750"
      ],
      [
        "FALL_THROUGH",
        "00bde744"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bde744",
      "incomplete_value": true,
      "site": "00bde768",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdd750",
      "incomplete_value": true,
      "site": "00bdd774",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bde73c",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde74c",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bde768",
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
      "00bde73c",
      "READ",
      [
        "storage",
        "01127e70",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde74c",
      "PARAM",
      [
        "storage",
        "002b17f7",
        null,
        "string"
      ]
    ],
    [
      "00bde768",
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
- 00bdd774 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:eb0:8"]]
- 00bdd774 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bde768 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e70:8"]]
+ 00bde768 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd740 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bde734 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bdd748 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:eb0:8"]]
- 00bdd748 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bde73c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e70:8"]]
+ 00bde73c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


