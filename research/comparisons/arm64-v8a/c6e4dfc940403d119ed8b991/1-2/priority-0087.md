# v16.0.2 → v16.0.3 · 最優先の変更候補 (87)

[一覧の目次](README.md)

<a id="compare-b47f74de0dfd6c13cca4756254bc33d4"></a>

### [`00b4a7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a7b8.md) → [`00b4b7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b7ac.md) _ZN8firebase4util4file19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cl

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
      "definition_site": "00b4b7d8",
      "incomplete_value": true,
      "site": "00b4b7d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b7c0",
      "incomplete_value": true,
      "site": "00b4b7c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b7cc",
      "incomplete_value": false,
      "site": "00b4b7d0",
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
            "const:d85:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b7bc",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b7cc",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4b7d8",
      "WRITE",
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
      "00b4b7bc",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b7cc",
      "PARAM",
      [
        "storage",
        "002b6d85",
        null,
        "string"
      ]
    ],
    [
      "00b4b7d8",
      "WRITE",
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
- 00b4a7dc ["INT_ADD", "register:40f0:8", ["const:b4a7dc:8", "const:4:8"]]
- 00b4a7dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b7d0 ["INT_ADD", "register:40f0:8", ["const:b4b7d0:8", "const:4:8"]]
+ 00b4b7d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a7e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
- 00b4a7e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b7d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b50:8"]]
+ 00b4b7d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a7c4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b7b8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-f708b357ec6b0b10d1b13612d86c8f25"></a>

### [`00b4a7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a7f8.md) → [`00b4b7ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b7ec.md) _ZN8firebase4util4file19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4b818",
      "incomplete_value": true,
      "site": "00b4b818",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b800",
      "incomplete_value": true,
      "site": "00b4b800",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b808",
      "incomplete_value": false,
      "site": "00b4b810",
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
            "const:d85:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b7fc",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b808",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4b818",
      "WRITE",
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
      "00b4b7fc",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b808",
      "PARAM",
      [
        "storage",
        "002b6d85",
        null,
        "string"
      ]
    ],
    [
      "00b4b818",
      "WRITE",
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
- 00b4a81c ["INT_ADD", "register:40f0:8", ["const:b4a81c:8", "const:4:8"]]
- 00b4a81c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b810 ["INT_ADD", "register:40f0:8", ["const:b4b810:8", "const:4:8"]]
+ 00b4b810 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a824 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
- 00b4a824 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b818 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b50:8"]]
+ 00b4b818 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a804 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b7f8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-0411146891adfb41ff0e897a6eb227f5"></a>

### [`00b4a838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a838.md) → [`00b4b82c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b82c.md) _ZN8firebase4util4file10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4b85c",
      "incomplete_value": true,
      "site": "00b4b85c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b840",
      "incomplete_value": true,
      "site": "00b4b840",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b84c",
      "incomplete_value": false,
      "site": "00b4b854",
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
            "const:d85:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b83c",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b84c",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4b85c",
      "WRITE",
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
      "00b4b83c",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b84c",
      "PARAM",
      [
        "storage",
        "002b6d85",
        null,
        "string"
      ]
    ],
    [
      "00b4b85c",
      "WRITE",
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
- 00b4a860 ["INT_ADD", "register:40f0:8", ["const:b4a860:8", "const:4:8"]]
- 00b4a860 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b854 ["INT_ADD", "register:40f0:8", ["const:b4b854:8", "const:4:8"]]
+ 00b4b854 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a868 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
- 00b4a868 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b85c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b50:8"]]
+ 00b4b85c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a844 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b838 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-a1b635fbd5bcd3478143f052c68cef23"></a>

### [`00b4a87c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a87c.md) → [`00b4b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b870.md) _ZN8firebase4util4file10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4b8a0",
      "incomplete_value": true,
      "site": "00b4b8a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b884",
      "incomplete_value": true,
      "site": "00b4b884",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b88c",
      "incomplete_value": false,
      "site": "00b4b898",
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
            "const:d85:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b880",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b88c",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4b8a0",
      "WRITE",
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
      "00b4b880",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b88c",
      "PARAM",
      [
        "storage",
        "002b6d85",
        null,
        "string"
      ]
    ],
    [
      "00b4b8a0",
      "WRITE",
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
- 00b4a8a4 ["INT_ADD", "register:40f0:8", ["const:b4a8a4:8", "const:4:8"]]
- 00b4a8a4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b898 ["INT_ADD", "register:40f0:8", ["const:b4b898:8", "const:4:8"]]
+ 00b4b898 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a8ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b90:8"]]
- 00b4a8ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b8a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b50:8"]]
+ 00b4b8a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a888 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b87c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-dd2dfdc865d19dd92e9f695a4384efd1"></a>

### [`00b4a8cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a8cc.md) → [`00b4b8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b8c0.md) _ZN8firebase4util4file15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4b948",
      "incomplete_value": true,
      "site": "00b4b948",
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
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b8f4",
      "incomplete_value": true,
      "site": "00b4b900",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b4b8d4",
      "READ",
      [
        "storage",
        "01125b98",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b8f4",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b948",
      "WRITE",
      [
        "storage",
        "01125b98",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4b8d4",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b8f4",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b948",
      "WRITE",
      [
        "storage",
        "01126b58",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a90c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a90c ["INT_ADD", "register:40f0:8", ["const:b4a90c:8", "const:4:8"]]
- 00b4a90c ["CALLIND", null, ["register:0:8"]]
+ 00b4b900 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4b900 ["INT_ADD", "register:40f0:8", ["const:b4b900:8", "const:4:8"]]
+ 00b4b900 ["CALLIND", null, ["register:0:8"]]
- 00b4a954 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4a954 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b98:8"]]
- 00b4a954 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4b948 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4b948 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b58:8"]]
+ 00b4b948 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4a8dc ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4b8d0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-34587011b1a0c1cbf53365b3c806b98d"></a>

### [`00b4a968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a968.md) → [`00b4b95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b95c.md) _ZN8firebase4util4file12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4b998",
      "incomplete_value": true,
      "site": "00b4b998",
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
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4b9e8",
      "incomplete_value": true,
      "site": "00b4b9e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b974",
      "incomplete_value": true,
      "site": "00b4b974",
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
      "00b4b970",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b97c",
      "READ",
      [
        "storage",
        "01125b98",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b998",
      "WRITE",
      [
        "storage",
        "01125b98",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4b970",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b97c",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b998",
      "WRITE",
      [
        "storage",
        "01126b58",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a9a4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4a9a4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4a9a4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b98:8"]]
- 00b4a9a4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4b998 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4b998 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4b998 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b58:8"]]
+ 00b4b998 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4a9f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a9f0 ["INT_ADD", "register:40f0:8", ["const:b4a9f0:8", "const:4:8"]]
- 00b4a9f0 ["CALLIND", null, ["register:0:8"]]
+ 00b4b9e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4b9e4 ["INT_ADD", "register:40f0:8", ["const:b4b9e4:8", "const:4:8"]]
+ 00b4b9e4 ["CALLIND", null, ["register:0:8"]]
- 00b4a9f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b90:8"]]
- 00b4a9f4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4a9f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4b9e8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b50:8"]]
+ 00b4b9e8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4b9e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-0378d82a2a8305d99a6c0cdb3515674f"></a>

### [`00b4aa08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aa08.md) → [`00b4b9fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b9fc.md) _ZN8firebase4util4file14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4ba3c",
      "incomplete_value": true,
      "site": "00b4ba3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4ba18",
      "incomplete_value": true,
      "site": "00b4ba18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ba20",
      "incomplete_value": false,
      "site": "00b4ba34",
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
            "const:d85:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ba10",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ba20",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4ba3c",
      "WRITE",
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
      "00b4ba10",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ba20",
      "PARAM",
      [
        "storage",
        "002b6d85",
        null,
        "string"
      ]
    ],
    [
      "00b4ba3c",
      "WRITE",
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
- 00b4aa40 ["INT_ADD", "register:40f0:8", ["const:b4aa40:8", "const:4:8"]]
- 00b4aa40 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ba34 ["INT_ADD", "register:40f0:8", ["const:b4ba34:8", "const:4:8"]]
+ 00b4ba34 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4aa48 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b90:8"]]
- 00b4aa48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ba3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b50:8"]]
+ 00b4ba3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4aa14 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4ba08 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-1bd64678d2f40ad4674c422a67924d1f"></a>

### [`00b4aa78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aa78.md) → [`00b4ba6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4ba6c.md) _ZN8firebase4util4file11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5e0.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c5b0.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ba88",
      "incomplete_value": false,
      "site": "00b4ba8c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4ba98",
      "incomplete_value": true,
      "site": "00b4baa4",
      "value": [
        "LOAD",
        "8",
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
      "00b4ba88",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4ba98",
      "DATA",
      [
        "storage",
        "01125ba0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ba88",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4ba98",
      "DATA",
      [
        "storage",
        "01126b60",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4aa98 ["INT_ADD", "register:40f0:8", ["const:b4aa98:8", "const:4:8"]]
- 00b4aa98 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4ba8c ["INT_ADD", "register:40f0:8", ["const:b4ba8c:8", "const:4:8"]]
+ 00b4ba8c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4aa94 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4aa94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4aa94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4aa94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4ba88 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4ba88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ba88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ba88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4aa9c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4ba90 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-e71ff812138bd4bdb478427d82934c66"></a>

### [`00b4aab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aab4.md) → [`00b4baa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4baa8.md) _ZN8firebase4util4file13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4bae8",
      "incomplete_value": true,
      "site": "00b4bae8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b50:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4bac4",
      "incomplete_value": true,
      "site": "00b4bac4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bacc",
      "incomplete_value": false,
      "site": "00b4bae0",
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
            "const:d85:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4babc",
      "READ",
      [
        "storage",
        "01125b90",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bacc",
      "PARAM",
      [
        "storage",
        "002b6cb6",
        null,
        "string"
      ]
    ],
    [
      "00b4bae8",
      "WRITE",
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
      "00b4babc",
      "READ",
      [
        "storage",
        "01126b50",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bacc",
      "PARAM",
      [
        "storage",
        "002b6d85",
        null,
        "string"
      ]
    ],
    [
      "00b4bae8",
      "WRITE",
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
- 00b4aaec ["INT_ADD", "register:40f0:8", ["const:b4aaec:8", "const:4:8"]]
- 00b4aaec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bae0 ["INT_ADD", "register:40f0:8", ["const:b4bae0:8", "const:4:8"]]
+ 00b4bae0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4aaf4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b90:8"]]
- 00b4aaf4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bae8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b50:8"]]
+ 00b4bae8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4aac0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4bab4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-2d18356d9bc8516e5a4cc39ead973d1f"></a>

### [`00b4ab24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ab24.md) → [`00b4bb18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bb18.md) _ZN8firebase4util4file10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4bb34",
      "incomplete_value": false,
      "site": "00b4bb38",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4bb44",
      "incomplete_value": true,
      "site": "00b4bb50",
      "value": [
        "LOAD",
        "8",
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
      "00b4bb34",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4bb44",
      "DATA",
      [
        "storage",
        "01125be0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4bb34",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4bb44",
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
- 00b4ab44 ["INT_ADD", "register:40f0:8", ["const:b4ab44:8", "const:4:8"]]
- 00b4ab44 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4bb38 ["INT_ADD", "register:40f0:8", ["const:b4bb38:8", "const:4:8"]]
+ 00b4bb38 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4ab40 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4ab40 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ab40 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ab40 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4bb34 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4bb34 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4bb34 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4bb34 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4ab48 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4bb3c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-3009dbb54f35825fb00411d81041c8c6"></a>

### [`00b4ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ab60.md) → [`00b4bb54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bb54.md) _ZN8firebase4util11float_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4bb80",
      "incomplete_value": true,
      "site": "00b4bb80",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4bb68",
      "incomplete_value": true,
      "site": "00b4bb68",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bb74",
      "incomplete_value": false,
      "site": "00b4bb78",
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
            "const:67c:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bb64",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bb74",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4bb80",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bb64",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bb74",
      "PARAM",
      [
        "storage",
        "002a967c",
        null,
        "string"
      ]
    ],
    [
      "00b4bb80",
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
- 00b4ab84 ["INT_ADD", "register:40f0:8", ["const:b4ab84:8", "const:4:8"]]
- 00b4ab84 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bb78 ["INT_ADD", "register:40f0:8", ["const:b4bb78:8", "const:4:8"]]
+ 00b4bb78 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4ab8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
- 00b4ab8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bb80 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00b4bb80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ab6c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4bb60 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-59206ede186328135f82f5353df0b255"></a>

### [`00b4aba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aba0.md) → [`00b4bb94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bb94.md) _ZN8firebase4util11float_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4bbc0",
      "incomplete_value": true,
      "site": "00b4bbc0",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4bba8",
      "incomplete_value": true,
      "site": "00b4bba8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bbb0",
      "incomplete_value": false,
      "site": "00b4bbb8",
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
            "const:67c:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bba4",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bbb0",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4bbc0",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bba4",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bbb0",
      "PARAM",
      [
        "storage",
        "002a967c",
        null,
        "string"
      ]
    ],
    [
      "00b4bbc0",
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
- 00b4abc4 ["INT_ADD", "register:40f0:8", ["const:b4abc4:8", "const:4:8"]]
- 00b4abc4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bbb8 ["INT_ADD", "register:40f0:8", ["const:b4bbb8:8", "const:4:8"]]
+ 00b4bbb8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4abcc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
- 00b4abcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bbc0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00b4bbc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4abac ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4bba0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-2577f2d287f05e8ddfb6b455141e56e5"></a>

### [`00b4abe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4abe0.md) → [`00b4bbd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bbd4.md) _ZN8firebase4util11float_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4bc04",
      "incomplete_value": true,
      "site": "00b4bc04",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4bbe8",
      "incomplete_value": true,
      "site": "00b4bbe8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bbf4",
      "incomplete_value": false,
      "site": "00b4bbfc",
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
            "const:67c:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bbe4",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bbf4",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4bc04",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bbe4",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bbf4",
      "PARAM",
      [
        "storage",
        "002a967c",
        null,
        "string"
      ]
    ],
    [
      "00b4bc04",
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
- 00b4ac08 ["INT_ADD", "register:40f0:8", ["const:b4ac08:8", "const:4:8"]]
- 00b4ac08 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bbfc ["INT_ADD", "register:40f0:8", ["const:b4bbfc:8", "const:4:8"]]
+ 00b4bbfc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4ac10 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
- 00b4ac10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bc04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00b4bc04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4abec ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4bbe0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-08bc02a448b311aff4cec0094f500f2b"></a>

### [`00b4ac24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ac24.md) → [`00b4bc18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bc18.md) _ZN8firebase4util11float_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4bc48",
      "incomplete_value": true,
      "site": "00b4bc48",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4bc2c",
      "incomplete_value": true,
      "site": "00b4bc2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bc34",
      "incomplete_value": false,
      "site": "00b4bc40",
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
            "const:67c:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bc28",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bc34",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4bc48",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bc28",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bc34",
      "PARAM",
      [
        "storage",
        "002a967c",
        null,
        "string"
      ]
    ],
    [
      "00b4bc48",
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
- 00b4ac4c ["INT_ADD", "register:40f0:8", ["const:b4ac4c:8", "const:4:8"]]
- 00b4ac4c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bc40 ["INT_ADD", "register:40f0:8", ["const:b4bc40:8", "const:4:8"]]
+ 00b4bc40 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4ac54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:be8:8"]]
- 00b4ac54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bc48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ba8:8"]]
+ 00b4bc48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ac30 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4bc24 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-db8e17ac6d0175a942c4b5ebd3eabff2"></a>

### [`00b4ac74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ac74.md) → [`00b4bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bc68.md) _ZN8firebase4util11float_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4bcf0",
      "incomplete_value": true,
      "site": "00b4bcf0",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bc9c",
      "incomplete_value": true,
      "site": "00b4bca8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b4bc7c",
      "READ",
      [
        "storage",
        "01125bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4bc9c",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bcf0",
      "WRITE",
      [
        "storage",
        "01125bf0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4bc7c",
      "READ",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4bc9c",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bcf0",
      "WRITE",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4acb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4acb4 ["INT_ADD", "register:40f0:8", ["const:b4acb4:8", "const:4:8"]]
- 00b4acb4 ["CALLIND", null, ["register:0:8"]]
+ 00b4bca8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4bca8 ["INT_ADD", "register:40f0:8", ["const:b4bca8:8", "const:4:8"]]
+ 00b4bca8 ["CALLIND", null, ["register:0:8"]]
- 00b4acfc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4acfc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bf0:8"]]
- 00b4acfc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4bcf0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4bcf0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bb0:8"]]
+ 00b4bcf0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4ac84 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4bc78 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-79c526a40d6326ecc2410807e45e6e21"></a>

### [`00b4ad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ad10.md) → [`00b4bd04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bd04.md) _ZN8firebase4util11float_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4bd40",
      "incomplete_value": true,
      "site": "00b4bd40",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4bd90",
      "incomplete_value": true,
      "site": "00b4bd90",
      "value": [
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4bd1c",
      "incomplete_value": true,
      "site": "00b4bd1c",
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
      "00b4bd18",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bd24",
      "READ",
      [
        "storage",
        "01125bf0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4bd40",
      "WRITE",
      [
        "storage",
        "01125bf0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4bd18",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bd24",
      "READ",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4bd40",
      "WRITE",
      [
        "storage",
        "01126bb0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ad4c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4ad4c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4ad4c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bf0:8"]]
- 00b4ad4c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4bd40 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4bd40 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4bd40 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bb0:8"]]
+ 00b4bd40 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4ad98 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4ad98 ["INT_ADD", "register:40f0:8", ["const:b4ad98:8", "const:4:8"]]
- 00b4ad98 ["CALLIND", null, ["register:0:8"]]
+ 00b4bd8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4bd8c ["INT_ADD", "register:40f0:8", ["const:b4bd8c:8", "const:4:8"]]
+ 00b4bd8c ["CALLIND", null, ["register:0:8"]]
- 00b4ad9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
- 00b4ad9c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4ad9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4bd90 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
+ 00b4bd90 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4bd90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-22f557322fc9eda924bdbb374672ba91"></a>

### [`00b4adb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4adb0.md) → [`00b4bda4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bda4.md) _ZN8firebase4util11float_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4bde4",
      "incomplete_value": true,
      "site": "00b4bde4",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4bdc0",
      "incomplete_value": true,
      "site": "00b4bdc0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bdc8",
      "incomplete_value": false,
      "site": "00b4bddc",
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
            "const:67c:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bdb8",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bdc8",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4bde4",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bdb8",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bdc8",
      "PARAM",
      [
        "storage",
        "002a967c",
        null,
        "string"
      ]
    ],
    [
      "00b4bde4",
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
- 00b4ade8 ["INT_ADD", "register:40f0:8", ["const:b4ade8:8", "const:4:8"]]
- 00b4ade8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bddc ["INT_ADD", "register:40f0:8", ["const:b4bddc:8", "const:4:8"]]
+ 00b4bddc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4adf0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
- 00b4adf0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bde4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
+ 00b4bde4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4adbc ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4bdb0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-458c920098f0ca9d26732070773c1a9e"></a>

### [`00b4ae20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ae20.md) → [`00b4be14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4be14.md) _ZN8firebase4util11float_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4be30",
      "incomplete_value": false,
      "site": "00b4be34",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4be40",
      "incomplete_value": true,
      "site": "00b4be4c",
      "value": [
        "LOAD",
        "8",
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
      "00b4be30",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4be40",
      "DATA",
      [
        "storage",
        "01125bf8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4be30",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4be40",
      "DATA",
      [
        "storage",
        "01126bb8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ae40 ["INT_ADD", "register:40f0:8", ["const:b4ae40:8", "const:4:8"]]
- 00b4ae40 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4be34 ["INT_ADD", "register:40f0:8", ["const:b4be34:8", "const:4:8"]]
+ 00b4be34 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4ae3c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4ae3c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ae3c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4ae3c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4be30 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4be30 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4be30 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4be30 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4ae44 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4be38 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-ef9532bded960f89a6e13bce0b925e88"></a>

### [`00b4ae5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4ae5c.md) → [`00b4be50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4be50.md) _ZN8firebase4util11float_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4be90",
      "incomplete_value": true,
      "site": "00b4be90",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4be6c",
      "incomplete_value": true,
      "site": "00b4be6c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4be74",
      "incomplete_value": false,
      "site": "00b4be88",
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
            "const:67c:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4be64",
      "READ",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4be74",
      "PARAM",
      [
        "storage",
        "002a95af",
        null,
        "string"
      ]
    ],
    [
      "00b4be90",
      "WRITE",
      [
        "storage",
        "01125be8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4be64",
      "READ",
      [
        "storage",
        "01126ba8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4be74",
      "PARAM",
      [
        "storage",
        "002a967c",
        null,
        "string"
      ]
    ],
    [
      "00b4be90",
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
- 00b4ae94 ["INT_ADD", "register:40f0:8", ["const:b4ae94:8", "const:4:8"]]
- 00b4ae94 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4be88 ["INT_ADD", "register:40f0:8", ["const:b4be88:8", "const:4:8"]]
+ 00b4be88 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4ae9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:be8:8"]]
- 00b4ae9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4be90 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ba8:8"]]
+ 00b4be90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ae68 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4be5c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-6e0357b7b1adbcb79863d79d710db2e9"></a>

### [`00b4aecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4aecc.md) → [`00b4bec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bec0.md) _ZN8firebase4util11float_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4bedc",
      "incomplete_value": true,
      "site": "00b4bee0",
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
      "definition_site": "00b4aee8",
      "incomplete_value": true,
      "site": "00b4aeec",
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
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4beec",
      "incomplete_value": true,
      "site": "00b4bef8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4aef8",
      "incomplete_value": true,
      "site": "00b4af04",
      "value": [
        "LOAD",
        "8",
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
      "00b4bedc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4beec",
      "DATA",
      [
        "storage",
        "01125c08",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4bedc",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4beec",
      "DATA",
      [
        "storage",
        "01126bc8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4aeec ["INT_ADD", "register:40f0:8", ["const:b4aeec:8", "const:4:8"]]
- 00b4aeec ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4bee0 ["INT_ADD", "register:40f0:8", ["const:b4bee0:8", "const:4:8"]]
+ 00b4bee0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4aee8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4aee8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4aee8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4aee8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4bedc ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4bedc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4bedc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4bedc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4aef0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4bee4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-79246123935d29238a2e0ee0d3ad931d"></a>

### [`00b4af08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4af08.md) → [`00b4befc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4befc.md) _ZN8firebase4util8hash_map19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_

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
      "definition_site": "00b4bf28",
      "incomplete_value": true,
      "site": "00b4bf28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4af34",
      "incomplete_value": true,
      "site": "00b4af34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "definition_site": "00b4bf10",
      "incomplete_value": true,
      "site": "00b4bf10",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4af1c",
      "incomplete_value": true,
      "site": "00b4af1c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bf1c",
      "incomplete_value": false,
      "site": "00b4bf20",
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
            "const:8e2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4af28",
      "incomplete_value": false,
      "site": "00b4af2c",
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
            "const:78a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bf0c",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bf1c",
      "PARAM",
      [
        "storage",
        "002a678a",
        null,
        "string"
      ]
    ],
    [
      "00b4bf28",
      "WRITE",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bf0c",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bf1c",
      "PARAM",
      [
        "storage",
        "002a68e2",
        null,
        "string"
      ]
    ],
    [
      "00b4bf28",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4af2c ["INT_ADD", "register:40f0:8", ["const:b4af2c:8", "const:4:8"]]
- 00b4af2c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bf20 ["INT_ADD", "register:40f0:8", ["const:b4bf20:8", "const:4:8"]]
+ 00b4bf20 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4af34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c10:8"]]
- 00b4af34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bf28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
+ 00b4bf28 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4af14 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4bf08 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-14d29ce3dd63dd0aa11f5ff788f7072c"></a>

### [`00b4af48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4af48.md) → [`00b4bf3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bf3c.md) _ZN8firebase4util8hash_map19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4bf68",
      "incomplete_value": true,
      "site": "00b4bf68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4af74",
      "incomplete_value": true,
      "site": "00b4af74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "definition_site": "00b4bf50",
      "incomplete_value": true,
      "site": "00b4bf50",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4af5c",
      "incomplete_value": true,
      "site": "00b4af5c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bf58",
      "incomplete_value": false,
      "site": "00b4bf60",
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
            "const:8e2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4af64",
      "incomplete_value": false,
      "site": "00b4af6c",
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
            "const:78a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bf4c",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bf58",
      "PARAM",
      [
        "storage",
        "002a678a",
        null,
        "string"
      ]
    ],
    [
      "00b4bf68",
      "WRITE",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bf4c",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bf58",
      "PARAM",
      [
        "storage",
        "002a68e2",
        null,
        "string"
      ]
    ],
    [
      "00b4bf68",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4af6c ["INT_ADD", "register:40f0:8", ["const:b4af6c:8", "const:4:8"]]
- 00b4af6c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bf60 ["INT_ADD", "register:40f0:8", ["const:b4bf60:8", "const:4:8"]]
+ 00b4bf60 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4af74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c10:8"]]
- 00b4af74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bf68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
+ 00b4bf68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4af54 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4bf48 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-21cb6492c013cba569c64bbc8b7edad2"></a>

### [`00b4af88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4af88.md) → [`00b4bf7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bf7c.md) _ZN8firebase4util8hash_map10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4bfac",
      "incomplete_value": true,
      "site": "00b4bfac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4afb8",
      "incomplete_value": true,
      "site": "00b4afb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "definition_site": "00b4bf90",
      "incomplete_value": true,
      "site": "00b4bf90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4af9c",
      "incomplete_value": true,
      "site": "00b4af9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bf9c",
      "incomplete_value": false,
      "site": "00b4bfa4",
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
            "const:8e2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4afa8",
      "incomplete_value": false,
      "site": "00b4afb0",
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
            "const:78a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bf8c",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bf9c",
      "PARAM",
      [
        "storage",
        "002a678a",
        null,
        "string"
      ]
    ],
    [
      "00b4bfac",
      "WRITE",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bf8c",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bf9c",
      "PARAM",
      [
        "storage",
        "002a68e2",
        null,
        "string"
      ]
    ],
    [
      "00b4bfac",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4afb0 ["INT_ADD", "register:40f0:8", ["const:b4afb0:8", "const:4:8"]]
- 00b4afb0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bfa4 ["INT_ADD", "register:40f0:8", ["const:b4bfa4:8", "const:4:8"]]
+ 00b4bfa4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4afb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c10:8"]]
- 00b4afb8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bfac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
+ 00b4bfac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4af94 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4bf88 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b213e544ec20cbb3520d6ab0ea85dee2"></a>

### [`00b4afcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4afcc.md) → [`00b4bfc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4bfc0.md) _ZN8firebase4util8hash_map10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4bff0",
      "incomplete_value": true,
      "site": "00b4bff0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4affc",
      "incomplete_value": true,
      "site": "00b4affc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "definition_site": "00b4bfd4",
      "incomplete_value": true,
      "site": "00b4bfd4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4afe0",
      "incomplete_value": true,
      "site": "00b4afe0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4bfdc",
      "incomplete_value": false,
      "site": "00b4bfe8",
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
            "const:8e2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4afe8",
      "incomplete_value": false,
      "site": "00b4aff4",
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
            "const:78a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4bfd0",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bfdc",
      "PARAM",
      [
        "storage",
        "002a678a",
        null,
        "string"
      ]
    ],
    [
      "00b4bff0",
      "WRITE",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4bfd0",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4bfdc",
      "PARAM",
      [
        "storage",
        "002a68e2",
        null,
        "string"
      ]
    ],
    [
      "00b4bff0",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4aff4 ["INT_ADD", "register:40f0:8", ["const:b4aff4:8", "const:4:8"]]
- 00b4aff4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4bfe8 ["INT_ADD", "register:40f0:8", ["const:b4bfe8:8", "const:4:8"]]
+ 00b4bfe8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4affc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c10:8"]]
- 00b4affc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4bff0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
+ 00b4bff0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4afd8 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4bfcc ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-426d4b14ced02d835bbc8a5f648454a5"></a>

### [`00b4b01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b01c.md) → [`00b4c010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c010.md) _ZN8firebase4util8hash_map15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4c098",
      "incomplete_value": true,
      "site": "00b4c098",
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
            "const:bd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b0a4",
      "incomplete_value": true,
      "site": "00b4b0a4",
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
            "const:c18:8"
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
      "definition_site": "00b4c044",
      "incomplete_value": true,
      "site": "00b4c050",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b4b050",
      "incomplete_value": true,
      "site": "00b4b05c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c024",
      "READ",
      [
        "storage",
        "01125c18",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c044",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c098",
      "WRITE",
      [
        "storage",
        "01125c18",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4c024",
      "READ",
      [
        "storage",
        "01126bd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c044",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c098",
      "WRITE",
      [
        "storage",
        "01126bd8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b05c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4b05c ["INT_ADD", "register:40f0:8", ["const:b4b05c:8", "const:4:8"]]
- 00b4b05c ["CALLIND", null, ["register:0:8"]]
+ 00b4c050 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4c050 ["INT_ADD", "register:40f0:8", ["const:b4c050:8", "const:4:8"]]
+ 00b4c050 ["CALLIND", null, ["register:0:8"]]
- 00b4b0a4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4b0a4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c18:8"]]
- 00b4b0a4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4c098 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4c098 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bd8:8"]]
+ 00b4c098 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4b02c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4c020 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-23c1f7b4d5920a5984b2d0ff54ff33d0"></a>

### [`00b4b0b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b0b8.md) → [`00b4c0ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c0ac.md) _ZN8firebase4util8hash_map12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4c0e8",
      "incomplete_value": true,
      "site": "00b4c0e8",
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
            "const:bd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b0f4",
      "incomplete_value": true,
      "site": "00b4b0f4",
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
            "const:c18:8"
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
      "definition_site": "00b4c138",
      "incomplete_value": true,
      "site": "00b4c138",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b144",
      "incomplete_value": true,
      "site": "00b4b144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "definition_site": "00b4c0c4",
      "incomplete_value": true,
      "site": "00b4c0c4",
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
      "definition_site": "00b4b0d0",
      "incomplete_value": true,
      "site": "00b4b0d0",
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
      "00b4c0c0",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c0cc",
      "READ",
      [
        "storage",
        "01125c18",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c0e8",
      "WRITE",
      [
        "storage",
        "01125c18",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4c0c0",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c0cc",
      "READ",
      [
        "storage",
        "01126bd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c0e8",
      "WRITE",
      [
        "storage",
        "01126bd8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b0f4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4b0f4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4b0f4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c18:8"]]
- 00b4b0f4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4c0e8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4c0e8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4c0e8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bd8:8"]]
+ 00b4c0e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4b140 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4b140 ["INT_ADD", "register:40f0:8", ["const:b4b140:8", "const:4:8"]]
- 00b4b140 ["CALLIND", null, ["register:0:8"]]
+ 00b4c134 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4c134 ["INT_ADD", "register:40f0:8", ["const:b4c134:8", "const:4:8"]]
+ 00b4c134 ["CALLIND", null, ["register:0:8"]]
- 00b4b144 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c10:8"]]
- 00b4b144 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4b144 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4c138 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd0:8"]]
+ 00b4c138 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4c138 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-f9d352a011c3b5637f1079c2c010e09d"></a>

### [`00b4b158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b158.md) → [`00b4c14c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c14c.md) _ZN8firebase4util8hash_map14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4c18c",
      "incomplete_value": true,
      "site": "00b4c18c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b198",
      "incomplete_value": true,
      "site": "00b4b198",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "definition_site": "00b4c168",
      "incomplete_value": true,
      "site": "00b4c168",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b174",
      "incomplete_value": true,
      "site": "00b4b174",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c170",
      "incomplete_value": false,
      "site": "00b4c184",
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
            "const:8e2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b17c",
      "incomplete_value": false,
      "site": "00b4b190",
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
            "const:78a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c160",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c170",
      "PARAM",
      [
        "storage",
        "002a678a",
        null,
        "string"
      ]
    ],
    [
      "00b4c18c",
      "WRITE",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c160",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c170",
      "PARAM",
      [
        "storage",
        "002a68e2",
        null,
        "string"
      ]
    ],
    [
      "00b4c18c",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b190 ["INT_ADD", "register:40f0:8", ["const:b4b190:8", "const:4:8"]]
- 00b4b190 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c184 ["INT_ADD", "register:40f0:8", ["const:b4c184:8", "const:4:8"]]
+ 00b4c184 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b198 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c10:8"]]
- 00b4b198 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c18c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd0:8"]]
+ 00b4c18c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b164 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4c158 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-e8b5ae0d9b47208a9d976bd9e0ca42f6"></a>

### [`00b4b1c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b1c8.md) → [`00b4c1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c1bc.md) _ZN8firebase4util8hash_map11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b080.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c050.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c1d8",
      "incomplete_value": false,
      "site": "00b4c1dc",
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
      "definition_site": "00b4b1e4",
      "incomplete_value": false,
      "site": "00b4b1e8",
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
      "definition_site": "00b4c1e8",
      "incomplete_value": true,
      "site": "00b4c1f4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4b1f4",
      "incomplete_value": true,
      "site": "00b4b200",
      "value": [
        "LOAD",
        "8",
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
      "00b4c1d8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4c1e8",
      "DATA",
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
      "00b4c1d8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4c1e8",
      "DATA",
      [
        "storage",
        "01126be0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b1e8 ["INT_ADD", "register:40f0:8", ["const:b4b1e8:8", "const:4:8"]]
- 00b4b1e8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4c1dc ["INT_ADD", "register:40f0:8", ["const:b4c1dc:8", "const:4:8"]]
+ 00b4c1dc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4b1e4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4b1e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b1e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b1e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4c1d8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4c1d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c1d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c1d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4b1ec ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4c1e0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-fc9244cfecaed094a749671162a5f8c2"></a>

### [`00b4b204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b204.md) → [`00b4c1f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c1f8.md) _ZN8firebase4util8hash_map13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4c238",
      "incomplete_value": true,
      "site": "00b4c238",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:bd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b244",
      "incomplete_value": true,
      "site": "00b4b244",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "definition_site": "00b4c214",
      "incomplete_value": true,
      "site": "00b4c214",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b220",
      "incomplete_value": true,
      "site": "00b4b220",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c21c",
      "incomplete_value": false,
      "site": "00b4c230",
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
            "const:8e2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b228",
      "incomplete_value": false,
      "site": "00b4b23c",
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
            "const:78a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c20c",
      "READ",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c21c",
      "PARAM",
      [
        "storage",
        "002a678a",
        null,
        "string"
      ]
    ],
    [
      "00b4c238",
      "WRITE",
      [
        "storage",
        "01125c10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c20c",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c21c",
      "PARAM",
      [
        "storage",
        "002a68e2",
        null,
        "string"
      ]
    ],
    [
      "00b4c238",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b23c ["INT_ADD", "register:40f0:8", ["const:b4b23c:8", "const:4:8"]]
- 00b4b23c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c230 ["INT_ADD", "register:40f0:8", ["const:b4c230:8", "const:4:8"]]
+ 00b4c230 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b244 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c10:8"]]
- 00b4b244 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c238 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd0:8"]]
+ 00b4c238 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b210 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4c204 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-1a0ac6df96f36059ac378ebe2b2b454c"></a>

### [`00b4b274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b274.md) → [`00b4c268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c268.md) _ZN8firebase4util8hash_map10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4c284",
      "incomplete_value": false,
      "site": "00b4c288",
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
      "definition_site": "00b4b290",
      "incomplete_value": false,
      "site": "00b4b294",
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
      "definition_site": "00b4c294",
      "incomplete_value": true,
      "site": "00b4c2a0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4b2a0",
      "incomplete_value": true,
      "site": "00b4b2ac",
      "value": [
        "LOAD",
        "8",
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
      "00b4c284",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4c294",
      "DATA",
      [
        "storage",
        "01125c28",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4c284",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4c294",
      "DATA",
      [
        "storage",
        "01126be8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b294 ["INT_ADD", "register:40f0:8", ["const:b4b294:8", "const:4:8"]]
- 00b4b294 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4c288 ["INT_ADD", "register:40f0:8", ["const:b4c288:8", "const:4:8"]]
+ 00b4c288 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4b290 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4b290 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b290 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b290 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4c284 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4c284 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c284 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c284 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4b298 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4c28c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-baf5985cc42771d125cb0dc5a959aff3"></a>

### [`00b4b2b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b2b0.md) → [`00b4c2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c2a4.md) _ZN8firebase4util13integer_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00b4c2d0",
      "incomplete_value": true,
      "site": "00b4c2d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b2dc",
      "incomplete_value": true,
      "site": "00b4b2dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c30:8"
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
      "definition_site": "00b4c2b8",
      "incomplete_value": true,
      "site": "00b4c2b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b2c4",
      "incomplete_value": true,
      "site": "00b4b2c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c2c4",
      "incomplete_value": false,
      "site": "00b4c2c8",
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
            "const:52e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b2d0",
      "incomplete_value": false,
      "site": "00b4b2d4",
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
            "const:3d6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c2b4",
      "READ",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c2c4",
      "PARAM",
      [
        "storage",
        "002a83d6",
        null,
        "string"
      ]
    ],
    [
      "00b4c2d0",
      "WRITE",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c2b4",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c2c4",
      "PARAM",
      [
        "storage",
        "002a852e",
        null,
        "string"
      ]
    ],
    [
      "00b4c2d0",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b2d4 ["INT_ADD", "register:40f0:8", ["const:b4b2d4:8", "const:4:8"]]
- 00b4b2d4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c2c8 ["INT_ADD", "register:40f0:8", ["const:b4c2c8:8", "const:4:8"]]
+ 00b4c2c8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b2dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00b4b2dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c2d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bf0:8"]]
+ 00b4c2d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b2bc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4c2b0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-df388617774315a76174d7bd367468c4"></a>

### [`00b4b2f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b2f0.md) → [`00b4c2e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c2e4.md) _ZN8firebase4util13integer_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00b4c310",
      "incomplete_value": true,
      "site": "00b4c310",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b31c",
      "incomplete_value": true,
      "site": "00b4b31c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c30:8"
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
      "definition_site": "00b4c2f8",
      "incomplete_value": true,
      "site": "00b4c2f8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b304",
      "incomplete_value": true,
      "site": "00b4b304",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c300",
      "incomplete_value": false,
      "site": "00b4c308",
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
            "const:52e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b30c",
      "incomplete_value": false,
      "site": "00b4b314",
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
            "const:3d6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c2f4",
      "READ",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c300",
      "PARAM",
      [
        "storage",
        "002a83d6",
        null,
        "string"
      ]
    ],
    [
      "00b4c310",
      "WRITE",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c2f4",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c300",
      "PARAM",
      [
        "storage",
        "002a852e",
        null,
        "string"
      ]
    ],
    [
      "00b4c310",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b314 ["INT_ADD", "register:40f0:8", ["const:b4b314:8", "const:4:8"]]
- 00b4b314 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c308 ["INT_ADD", "register:40f0:8", ["const:b4c308:8", "const:4:8"]]
+ 00b4c308 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b31c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00b4b31c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c310 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bf0:8"]]
+ 00b4c310 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b2fc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4c2f0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-a840e9ae2ca17bae055f6ed8dc544ef5"></a>

### [`00b4b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b330.md) → [`00b4c324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c324.md) _ZN8firebase4util13integer_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4c354",
      "incomplete_value": true,
      "site": "00b4c354",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b360",
      "incomplete_value": true,
      "site": "00b4b360",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c30:8"
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
      "definition_site": "00b4c344",
      "incomplete_value": true,
      "site": "00b4c34c",
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
            "const:52e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b350",
      "incomplete_value": true,
      "site": "00b4b358",
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
            "const:3d6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c334",
      "READ",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c344",
      "PARAM",
      [
        "storage",
        "002a83d6",
        null,
        "string"
      ]
    ],
    [
      "00b4c354",
      "WRITE",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c334",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c344",
      "PARAM",
      [
        "storage",
        "002a852e",
        null,
        "string"
      ]
    ],
    [
      "00b4c354",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b358 ["INT_ADD", "register:40f0:8", ["const:b4b358:8", "const:4:8"]]
- 00b4b358 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c34c ["INT_ADD", "register:40f0:8", ["const:b4c34c:8", "const:4:8"]]
+ 00b4c34c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b360 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00b4b360 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c354 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bf0:8"]]
+ 00b4c354 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b33c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4c330 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-ece1b82c20cfeea7475864556eb88ccc"></a>

### [`00b4b374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b374.md) → [`00b4c368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c368.md) _ZN8firebase4util13integer_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4c398",
      "incomplete_value": true,
      "site": "00b4c398",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b3a4",
      "incomplete_value": true,
      "site": "00b4b3a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c30:8"
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
      "definition_site": "00b4c37c",
      "incomplete_value": true,
      "site": "00b4c37c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b388",
      "incomplete_value": true,
      "site": "00b4b388",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c384",
      "incomplete_value": false,
      "site": "00b4c390",
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
            "const:52e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b390",
      "incomplete_value": false,
      "site": "00b4b39c",
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
            "const:3d6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c378",
      "READ",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c384",
      "PARAM",
      [
        "storage",
        "002a83d6",
        null,
        "string"
      ]
    ],
    [
      "00b4c398",
      "WRITE",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c378",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c384",
      "PARAM",
      [
        "storage",
        "002a852e",
        null,
        "string"
      ]
    ],
    [
      "00b4c398",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b39c ["INT_ADD", "register:40f0:8", ["const:b4b39c:8", "const:4:8"]]
- 00b4b39c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c390 ["INT_ADD", "register:40f0:8", ["const:b4c390:8", "const:4:8"]]
+ 00b4c390 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b3a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00b4b3a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c398 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bf0:8"]]
+ 00b4c398 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b380 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4c374 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-d7a804a577ef4718f09293de8a88d3d6"></a>

### [`00b4b3c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b3c4.md) → [`00b4c3b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c3b8.md) _ZN8firebase4util13integer_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4c440",
      "incomplete_value": true,
      "site": "00b4c440",
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
            "const:bf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b44c",
      "incomplete_value": true,
      "site": "00b4b44c",
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
            "const:c38:8"
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
      "definition_site": "00b4c3ec",
      "incomplete_value": true,
      "site": "00b4c3f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b3f8",
      "incomplete_value": true,
      "site": "00b4b404",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
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
      "00b4c3cc",
      "READ",
      [
        "storage",
        "01125c38",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c3ec",
      "READ",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c440",
      "WRITE",
      [
        "storage",
        "01125c38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4c3cc",
      "READ",
      [
        "storage",
        "01126bf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c3ec",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c440",
      "WRITE",
      [
        "storage",
        "01126bf8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b404 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4b404 ["INT_ADD", "register:40f0:8", ["const:b4b404:8", "const:4:8"]]
- 00b4b404 ["CALLIND", null, ["register:0:8"]]
+ 00b4c3f8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4c3f8 ["INT_ADD", "register:40f0:8", ["const:b4c3f8:8", "const:4:8"]]
+ 00b4c3f8 ["CALLIND", null, ["register:0:8"]]
- 00b4b44c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4b44c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c38:8"]]
- 00b4b44c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4c440 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4c440 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bf8:8"]]
+ 00b4c440 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4b3d4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4c3c8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-598f98330d5ff98a3f2d83cd2ebdadd8"></a>

### [`00b4b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b460.md) → [`00b4c454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c454.md) _ZN8firebase4util13integer_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4c490",
      "incomplete_value": true,
      "site": "00b4c490",
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
            "const:bf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b49c",
      "incomplete_value": true,
      "site": "00b4b49c",
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
            "const:c38:8"
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
      "definition_site": "00b4c4e0",
      "incomplete_value": true,
      "site": "00b4c4e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b4ec",
      "incomplete_value": true,
      "site": "00b4b4ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c30:8"
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
      "definition_site": "00b4c46c",
      "incomplete_value": true,
      "site": "00b4c46c",
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
      "definition_site": "00b4b478",
      "incomplete_value": true,
      "site": "00b4b478",
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
      "00b4c468",
      "READ",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c474",
      "READ",
      [
        "storage",
        "01125c38",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c490",
      "WRITE",
      [
        "storage",
        "01125c38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4c468",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c474",
      "READ",
      [
        "storage",
        "01126bf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c490",
      "WRITE",
      [
        "storage",
        "01126bf8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b49c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4b49c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4b49c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c38:8"]]
- 00b4b49c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4c490 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4c490 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4c490 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bf8:8"]]
+ 00b4c490 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4b4e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4b4e8 ["INT_ADD", "register:40f0:8", ["const:b4b4e8:8", "const:4:8"]]
- 00b4b4e8 ["CALLIND", null, ["register:0:8"]]
+ 00b4c4dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4c4dc ["INT_ADD", "register:40f0:8", ["const:b4c4dc:8", "const:4:8"]]
+ 00b4c4dc ["CALLIND", null, ["register:0:8"]]
- 00b4b4ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c30:8"]]
- 00b4b4ec ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4b4ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4c4e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bf0:8"]]
+ 00b4c4e0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4c4e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-2fac5215ea550d2c4c9286ba66a6ae47"></a>

### [`00b4b500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b500.md) → [`00b4c4f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c4f4.md) _ZN8firebase4util13integer_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4c534",
      "incomplete_value": true,
      "site": "00b4c534",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b540",
      "incomplete_value": true,
      "site": "00b4b540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c30:8"
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
      "definition_site": "00b4c510",
      "incomplete_value": true,
      "site": "00b4c510",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b51c",
      "incomplete_value": true,
      "site": "00b4b51c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c518",
      "incomplete_value": false,
      "site": "00b4c52c",
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
            "const:52e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b524",
      "incomplete_value": false,
      "site": "00b4b538",
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
            "const:3d6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c508",
      "READ",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c518",
      "PARAM",
      [
        "storage",
        "002a83d6",
        null,
        "string"
      ]
    ],
    [
      "00b4c534",
      "WRITE",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c508",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c518",
      "PARAM",
      [
        "storage",
        "002a852e",
        null,
        "string"
      ]
    ],
    [
      "00b4c534",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b538 ["INT_ADD", "register:40f0:8", ["const:b4b538:8", "const:4:8"]]
- 00b4b538 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c52c ["INT_ADD", "register:40f0:8", ["const:b4c52c:8", "const:4:8"]]
+ 00b4c52c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b540 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c30:8"]]
- 00b4b540 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c534 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bf0:8"]]
+ 00b4c534 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b50c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4c500 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-4c86fe906dfd1cb737306374e8f9a8d5"></a>

### [`00b4b570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b570.md) → [`00b4c564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c564.md) _ZN8firebase4util13integer_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4c580",
      "incomplete_value": false,
      "site": "00b4c584",
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
      "definition_site": "00b4b58c",
      "incomplete_value": false,
      "site": "00b4b590",
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
      "definition_site": "00b4c590",
      "incomplete_value": true,
      "site": "00b4c59c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4b59c",
      "incomplete_value": true,
      "site": "00b4b5a8",
      "value": [
        "LOAD",
        "8",
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
      "00b4c580",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4c590",
      "DATA",
      [
        "storage",
        "01125c40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4c580",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4c590",
      "DATA",
      [
        "storage",
        "01126c00",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b590 ["INT_ADD", "register:40f0:8", ["const:b4b590:8", "const:4:8"]]
- 00b4b590 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4c584 ["INT_ADD", "register:40f0:8", ["const:b4c584:8", "const:4:8"]]
+ 00b4c584 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4b58c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4b58c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b58c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b58c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4c580 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4c580 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c580 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c580 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4b594 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4c588 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-ff4cdb021ae23f1622bf377f1fa5890e"></a>

### [`00b4b5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b5ac.md) → [`00b4c5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c5a0.md) _ZN8firebase4util13integer_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4c5e0",
      "incomplete_value": true,
      "site": "00b4c5e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:bf0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b5ec",
      "incomplete_value": true,
      "site": "00b4b5ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c30:8"
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
      "definition_site": "00b4c5bc",
      "incomplete_value": true,
      "site": "00b4c5bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b5c8",
      "incomplete_value": true,
      "site": "00b4b5c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c5c4",
      "incomplete_value": false,
      "site": "00b4c5d8",
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
            "const:52e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b5d0",
      "incomplete_value": false,
      "site": "00b4b5e4",
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
            "const:3d6:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c5b4",
      "READ",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c5c4",
      "PARAM",
      [
        "storage",
        "002a83d6",
        null,
        "string"
      ]
    ],
    [
      "00b4c5e0",
      "WRITE",
      [
        "storage",
        "01125c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c5b4",
      "READ",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c5c4",
      "PARAM",
      [
        "storage",
        "002a852e",
        null,
        "string"
      ]
    ],
    [
      "00b4c5e0",
      "WRITE",
      [
        "storage",
        "01126bf0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b5e4 ["INT_ADD", "register:40f0:8", ["const:b4b5e4:8", "const:4:8"]]
- 00b4b5e4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c5d8 ["INT_ADD", "register:40f0:8", ["const:b4c5d8:8", "const:4:8"]]
+ 00b4c5d8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b5ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c30:8"]]
- 00b4b5ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c5e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bf0:8"]]
+ 00b4c5e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b5b8 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4c5ac ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-0583f9499dc6f38bcc40a40b985e9f10"></a>

### [`00b4b61c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b61c.md) → [`00b4c610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c610.md) _ZN8firebase4util13integer_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4c62c",
      "incomplete_value": false,
      "site": "00b4c630",
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
      "definition_site": "00b4b638",
      "incomplete_value": false,
      "site": "00b4b63c",
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
      "definition_site": "00b4c63c",
      "incomplete_value": true,
      "site": "00b4c648",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4b648",
      "incomplete_value": true,
      "site": "00b4b654",
      "value": [
        "LOAD",
        "8",
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
      "00b4c62c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4c63c",
      "DATA",
      [
        "storage",
        "01125c50",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4c62c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4c63c",
      "DATA",
      [
        "storage",
        "01126c10",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b63c ["INT_ADD", "register:40f0:8", ["const:b4b63c:8", "const:4:8"]]
- 00b4b63c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4c630 ["INT_ADD", "register:40f0:8", ["const:b4c630:8", "const:4:8"]]
+ 00b4c630 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4b638 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4b638 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b638 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b638 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4c62c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4c62c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c62c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c62c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4b640 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4c634 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-cc64e3157c38dbb0ae50ad4826107754"></a>

### [`00b4b658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b658.md) → [`00b4c64c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c64c.md) _ZN8firebase4util6intent19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16

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
      "definition_site": "00b4c678",
      "incomplete_value": true,
      "site": "00b4c678",
      "value": [
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
      "definition_site": "00b4b684",
      "incomplete_value": true,
      "site": "00b4b684",
      "value": [
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
      "definition_site": "00b4c660",
      "incomplete_value": true,
      "site": "00b4c660",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b66c",
      "incomplete_value": true,
      "site": "00b4b66c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c66c",
      "incomplete_value": false,
      "site": "00b4c670",
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
            "const:aaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b678",
      "incomplete_value": false,
      "site": "00b4b67c",
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
            "const:9e4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c65c",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c66c",
      "PARAM",
      [
        "storage",
        "002a29e4",
        null,
        "string"
      ]
    ],
    [
      "00b4c678",
      "WRITE",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c65c",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c66c",
      "PARAM",
      [
        "storage",
        "002a2aaf",
        null,
        "string"
      ]
    ],
    [
      "00b4c678",
      "WRITE",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b67c ["INT_ADD", "register:40f0:8", ["const:b4b67c:8", "const:4:8"]]
- 00b4b67c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c670 ["INT_ADD", "register:40f0:8", ["const:b4c670:8", "const:4:8"]]
+ 00b4c670 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b684 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00b4b684 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c678 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00b4c678 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b664 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4c658 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-3c40e4578355ca79c1ce458c5e5dcb8b"></a>

### [`00b4b698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b698.md) → [`00b4c68c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c68c.md) _ZN8firebase4util6intent19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4c6b8",
      "incomplete_value": true,
      "site": "00b4c6b8",
      "value": [
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
      "definition_site": "00b4b6c4",
      "incomplete_value": true,
      "site": "00b4b6c4",
      "value": [
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
      "definition_site": "00b4c6a0",
      "incomplete_value": true,
      "site": "00b4c6a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b6ac",
      "incomplete_value": true,
      "site": "00b4b6ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c6a8",
      "incomplete_value": false,
      "site": "00b4c6b0",
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
            "const:aaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b6b4",
      "incomplete_value": false,
      "site": "00b4b6bc",
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
            "const:9e4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c69c",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c6a8",
      "PARAM",
      [
        "storage",
        "002a29e4",
        null,
        "string"
      ]
    ],
    [
      "00b4c6b8",
      "WRITE",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c69c",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c6a8",
      "PARAM",
      [
        "storage",
        "002a2aaf",
        null,
        "string"
      ]
    ],
    [
      "00b4c6b8",
      "WRITE",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b6bc ["INT_ADD", "register:40f0:8", ["const:b4b6bc:8", "const:4:8"]]
- 00b4b6bc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c6b0 ["INT_ADD", "register:40f0:8", ["const:b4c6b0:8", "const:4:8"]]
+ 00b4c6b0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b6c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00b4b6c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c6b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00b4c6b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b6a4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4c698 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-c16936fb8e316617e8f27a251e978a07"></a>

### [`00b4b6d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b6d8.md) → [`00b4c6cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c6cc.md) _ZN8firebase4util6intent10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4c6fc",
      "incomplete_value": true,
      "site": "00b4c6fc",
      "value": [
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
      "definition_site": "00b4b708",
      "incomplete_value": true,
      "site": "00b4b708",
      "value": [
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
      "definition_site": "00b4c6e0",
      "incomplete_value": true,
      "site": "00b4c6e0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b6ec",
      "incomplete_value": true,
      "site": "00b4b6ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c6ec",
      "incomplete_value": false,
      "site": "00b4c6f4",
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
            "const:aaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b6f8",
      "incomplete_value": false,
      "site": "00b4b700",
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
            "const:9e4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c6dc",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c6ec",
      "PARAM",
      [
        "storage",
        "002a29e4",
        null,
        "string"
      ]
    ],
    [
      "00b4c6fc",
      "WRITE",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c6dc",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c6ec",
      "PARAM",
      [
        "storage",
        "002a2aaf",
        null,
        "string"
      ]
    ],
    [
      "00b4c6fc",
      "WRITE",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b700 ["INT_ADD", "register:40f0:8", ["const:b4b700:8", "const:4:8"]]
- 00b4b700 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c6f4 ["INT_ADD", "register:40f0:8", ["const:b4c6f4:8", "const:4:8"]]
+ 00b4c6f4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b708 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00b4b708 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c6fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00b4c6fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b6e4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4c6d8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-2d232b24414977ad2efa461b488b304b"></a>

### [`00b4b71c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b71c.md) → [`00b4c710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c710.md) _ZN8firebase4util6intent10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4c740",
      "incomplete_value": true,
      "site": "00b4c740",
      "value": [
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
      "definition_site": "00b4b74c",
      "incomplete_value": true,
      "site": "00b4b74c",
      "value": [
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
      "definition_site": "00b4c724",
      "incomplete_value": true,
      "site": "00b4c724",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b730",
      "incomplete_value": true,
      "site": "00b4b730",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c72c",
      "incomplete_value": false,
      "site": "00b4c738",
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
            "const:aaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b738",
      "incomplete_value": false,
      "site": "00b4b744",
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
            "const:9e4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c720",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c72c",
      "PARAM",
      [
        "storage",
        "002a29e4",
        null,
        "string"
      ]
    ],
    [
      "00b4c740",
      "WRITE",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c720",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c72c",
      "PARAM",
      [
        "storage",
        "002a2aaf",
        null,
        "string"
      ]
    ],
    [
      "00b4c740",
      "WRITE",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b744 ["INT_ADD", "register:40f0:8", ["const:b4b744:8", "const:4:8"]]
- 00b4b744 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c738 ["INT_ADD", "register:40f0:8", ["const:b4c738:8", "const:4:8"]]
+ 00b4c738 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b74c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
- 00b4b74c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c740 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c18:8"]]
+ 00b4c740 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b728 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4c71c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-716466e6a280c30f5c6853063409e653"></a>

### [`00b4b76c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b76c.md) → [`00b4c760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c760.md) _ZN8firebase4util6intent15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4c7e8",
      "incomplete_value": true,
      "site": "00b4c7e8",
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
      "definition_site": "00b4b7f4",
      "incomplete_value": true,
      "site": "00b4b7f4",
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
      "definition_site": "00b4c794",
      "incomplete_value": true,
      "site": "00b4c7a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b4b7a0",
      "incomplete_value": true,
      "site": "00b4b7ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c774",
      "READ",
      [
        "storage",
        "01125c60",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c794",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c7e8",
      "WRITE",
      [
        "storage",
        "01125c60",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4c774",
      "READ",
      [
        "storage",
        "01126c20",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c794",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c7e8",
      "WRITE",
      [
        "storage",
        "01126c20",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b7ac ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4b7ac ["INT_ADD", "register:40f0:8", ["const:b4b7ac:8", "const:4:8"]]
- 00b4b7ac ["CALLIND", null, ["register:0:8"]]
+ 00b4c7a0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4c7a0 ["INT_ADD", "register:40f0:8", ["const:b4c7a0:8", "const:4:8"]]
+ 00b4c7a0 ["CALLIND", null, ["register:0:8"]]
- 00b4b7f4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4b7f4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c60:8"]]
- 00b4b7f4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4c7e8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4c7e8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c20:8"]]
+ 00b4c7e8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4b77c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4c770 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-5ea9c76acff80df0a6dd2095be4c9dcb"></a>

### [`00b4b808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b808.md) → [`00b4c7fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c7fc.md) _ZN8firebase4util6intent12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4c838",
      "incomplete_value": true,
      "site": "00b4c838",
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
      "definition_site": "00b4b844",
      "incomplete_value": true,
      "site": "00b4b844",
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
      "definition_site": "00b4c888",
      "incomplete_value": true,
      "site": "00b4c888",
      "value": [
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
      "definition_site": "00b4b894",
      "incomplete_value": true,
      "site": "00b4b894",
      "value": [
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
      "definition_site": "00b4c814",
      "incomplete_value": true,
      "site": "00b4c814",
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
      "definition_site": "00b4b820",
      "incomplete_value": true,
      "site": "00b4b820",
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
      "00b4c810",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c81c",
      "READ",
      [
        "storage",
        "01125c60",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c838",
      "WRITE",
      [
        "storage",
        "01125c60",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4c810",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c81c",
      "READ",
      [
        "storage",
        "01126c20",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4c838",
      "WRITE",
      [
        "storage",
        "01126c20",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b844 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4b844 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4b844 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c60:8"]]
- 00b4b844 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4c838 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4c838 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4c838 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c20:8"]]
+ 00b4c838 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4b890 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4b890 ["INT_ADD", "register:40f0:8", ["const:b4b890:8", "const:4:8"]]
- 00b4b890 ["CALLIND", null, ["register:0:8"]]
+ 00b4c884 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4c884 ["INT_ADD", "register:40f0:8", ["const:b4c884:8", "const:4:8"]]
+ 00b4c884 ["CALLIND", null, ["register:0:8"]]
- 00b4b894 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
- 00b4b894 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4b894 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4c888 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c18:8"]]
+ 00b4c888 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4c888 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-ea6924f09e56921308e988836a779d08"></a>

### [`00b4b8a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b8a8.md) → [`00b4c89c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c89c.md) _ZN8firebase4util6intent14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4c8dc",
      "incomplete_value": true,
      "site": "00b4c8dc",
      "value": [
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
      "definition_site": "00b4b8e8",
      "incomplete_value": true,
      "site": "00b4b8e8",
      "value": [
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
      "definition_site": "00b4c8b8",
      "incomplete_value": true,
      "site": "00b4c8b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b8c4",
      "incomplete_value": true,
      "site": "00b4b8c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c8c0",
      "incomplete_value": false,
      "site": "00b4c8d4",
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
            "const:aaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b8cc",
      "incomplete_value": false,
      "site": "00b4b8e0",
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
            "const:9e4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c8b0",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c8c0",
      "PARAM",
      [
        "storage",
        "002a29e4",
        null,
        "string"
      ]
    ],
    [
      "00b4c8dc",
      "WRITE",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c8b0",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c8c0",
      "PARAM",
      [
        "storage",
        "002a2aaf",
        null,
        "string"
      ]
    ],
    [
      "00b4c8dc",
      "WRITE",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b8e0 ["INT_ADD", "register:40f0:8", ["const:b4b8e0:8", "const:4:8"]]
- 00b4b8e0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c8d4 ["INT_ADD", "register:40f0:8", ["const:b4c8d4:8", "const:4:8"]]
+ 00b4c8d4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b8e8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
- 00b4b8e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c8dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c18:8"]]
+ 00b4c8dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b8b4 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4c8a8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-f27a67c83ffa9e1735a17e68d817d440"></a>

### [`00b4b918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b918.md) → [`00b4c90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c90c.md) _ZN8firebase4util6intent11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b600.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c5d0.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c928",
      "incomplete_value": false,
      "site": "00b4c92c",
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
      "definition_site": "00b4b934",
      "incomplete_value": false,
      "site": "00b4b938",
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
      "definition_site": "00b4c938",
      "incomplete_value": true,
      "site": "00b4c944",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4b944",
      "incomplete_value": true,
      "site": "00b4b950",
      "value": [
        "LOAD",
        "8",
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
      "00b4c928",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4c938",
      "DATA",
      [
        "storage",
        "01125c68",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4c928",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4c938",
      "DATA",
      [
        "storage",
        "01126c28",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b938 ["INT_ADD", "register:40f0:8", ["const:b4b938:8", "const:4:8"]]
- 00b4b938 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4c92c ["INT_ADD", "register:40f0:8", ["const:b4c92c:8", "const:4:8"]]
+ 00b4c92c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4b934 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4b934 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b934 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b934 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4c928 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4c928 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c928 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c928 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4b93c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4c930 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-80ae53d30d13ea9a93293f54cd0ea429"></a>

### [`00b4b954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b954.md) → [`00b4c948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c948.md) _ZN8firebase4util6intent13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4c988",
      "incomplete_value": true,
      "site": "00b4c988",
      "value": [
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
      "definition_site": "00b4b994",
      "incomplete_value": true,
      "site": "00b4b994",
      "value": [
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
      "definition_site": "00b4c964",
      "incomplete_value": true,
      "site": "00b4c964",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b970",
      "incomplete_value": true,
      "site": "00b4b970",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4c96c",
      "incomplete_value": false,
      "site": "00b4c980",
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
            "const:aaf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4b978",
      "incomplete_value": false,
      "site": "00b4b98c",
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
            "const:9e4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4c95c",
      "READ",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c96c",
      "PARAM",
      [
        "storage",
        "002a29e4",
        null,
        "string"
      ]
    ],
    [
      "00b4c988",
      "WRITE",
      [
        "storage",
        "01125c58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4c95c",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4c96c",
      "PARAM",
      [
        "storage",
        "002a2aaf",
        null,
        "string"
      ]
    ],
    [
      "00b4c988",
      "WRITE",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b98c ["INT_ADD", "register:40f0:8", ["const:b4b98c:8", "const:4:8"]]
- 00b4b98c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4c980 ["INT_ADD", "register:40f0:8", ["const:b4c980:8", "const:4:8"]]
+ 00b4c980 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4b994 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
- 00b4b994 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4c988 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c18:8"]]
+ 00b4c988 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4b960 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4c954 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-cceff6404cf655972f265e0a3571c28d"></a>

### [`00b4b9c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4b9c4.md) → [`00b4c9b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c9b8.md) _ZN8firebase4util6intent10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4c9d4",
      "incomplete_value": false,
      "site": "00b4c9d8",
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
      "definition_site": "00b4b9e0",
      "incomplete_value": false,
      "site": "00b4b9e4",
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
      "definition_site": "00b4c9e4",
      "incomplete_value": true,
      "site": "00b4c9f0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4b9f0",
      "incomplete_value": true,
      "site": "00b4b9fc",
      "value": [
        "LOAD",
        "8",
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
      "00b4c9d4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4c9e4",
      "DATA",
      [
        "storage",
        "01125c90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4c9d4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4c9e4",
      "DATA",
      [
        "storage",
        "01126c50",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4b9e4 ["INT_ADD", "register:40f0:8", ["const:b4b9e4:8", "const:4:8"]]
- 00b4b9e4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4c9d8 ["INT_ADD", "register:40f0:8", ["const:b4c9d8:8", "const:4:8"]]
+ 00b4c9d8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4b9e0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4b9e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b9e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4b9e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4c9d4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4c9d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c9d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4c9d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4b9e8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4c9dc ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-b2c551ebc15b940eb219bcb23ba8b7b9"></a>

### [`00b4ba00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4ba00.md) → [`00b4c9f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4c9f4.md) _ZN8firebase4util8iterable19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_

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
      "definition_site": "00b4ca20",
      "incomplete_value": true,
      "site": "00b4ca20",
      "value": [
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
    "old": {
      "definition_site": "00b4ba2c",
      "incomplete_value": true,
      "site": "00b4ba2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "definition_site": "00b4ca08",
      "incomplete_value": true,
      "site": "00b4ca08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ba14",
      "incomplete_value": true,
      "site": "00b4ba14",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ca14",
      "incomplete_value": false,
      "site": "00b4ca18",
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
            "const:969:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ba20",
      "incomplete_value": false,
      "site": "00b4ba24",
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
            "const:929:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ca04",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ca14",
      "PARAM",
      [
        "storage",
        "0029f929",
        null,
        "string"
      ]
    ],
    [
      "00b4ca20",
      "WRITE",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ca04",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ca14",
      "PARAM",
      [
        "storage",
        "0029f969",
        null,
        "string"
      ]
    ],
    [
      "00b4ca20",
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
- 00b4ba24 ["INT_ADD", "register:40f0:8", ["const:b4ba24:8", "const:4:8"]]
- 00b4ba24 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ca18 ["INT_ADD", "register:40f0:8", ["const:b4ca18:8", "const:4:8"]]
+ 00b4ca18 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4ba2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c98:8"]]
- 00b4ba2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ca20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
+ 00b4ca20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ba0c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ca00 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-a11a8699f05c169a3a967d841419f9f5"></a>

### [`00b4ba40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4ba40.md) → [`00b4ca34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4ca34.md) _ZN8firebase4util8iterable19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4ca60",
      "incomplete_value": true,
      "site": "00b4ca60",
      "value": [
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
    "old": {
      "definition_site": "00b4ba6c",
      "incomplete_value": true,
      "site": "00b4ba6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "definition_site": "00b4ca48",
      "incomplete_value": true,
      "site": "00b4ca48",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ba54",
      "incomplete_value": true,
      "site": "00b4ba54",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ca50",
      "incomplete_value": false,
      "site": "00b4ca58",
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
            "const:969:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ba5c",
      "incomplete_value": false,
      "site": "00b4ba64",
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
            "const:929:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ca44",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ca50",
      "PARAM",
      [
        "storage",
        "0029f929",
        null,
        "string"
      ]
    ],
    [
      "00b4ca60",
      "WRITE",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ca44",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ca50",
      "PARAM",
      [
        "storage",
        "0029f969",
        null,
        "string"
      ]
    ],
    [
      "00b4ca60",
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
- 00b4ba64 ["INT_ADD", "register:40f0:8", ["const:b4ba64:8", "const:4:8"]]
- 00b4ba64 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ca58 ["INT_ADD", "register:40f0:8", ["const:b4ca58:8", "const:4:8"]]
+ 00b4ca58 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4ba6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c98:8"]]
- 00b4ba6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ca60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
+ 00b4ca60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ba4c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ca40 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-493dd77fe108af1e2dbe248838d4a5a1"></a>

### [`00b4ba80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4ba80.md) → [`00b4ca74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4ca74.md) _ZN8firebase4util8iterable10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4caa4",
      "incomplete_value": true,
      "site": "00b4caa4",
      "value": [
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
    "old": {
      "definition_site": "00b4bab0",
      "incomplete_value": true,
      "site": "00b4bab0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "definition_site": "00b4ca88",
      "incomplete_value": true,
      "site": "00b4ca88",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ba94",
      "incomplete_value": true,
      "site": "00b4ba94",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ca94",
      "incomplete_value": false,
      "site": "00b4ca9c",
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
            "const:969:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4baa0",
      "incomplete_value": false,
      "site": "00b4baa8",
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
            "const:929:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ca84",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ca94",
      "PARAM",
      [
        "storage",
        "0029f929",
        null,
        "string"
      ]
    ],
    [
      "00b4caa4",
      "WRITE",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ca84",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ca94",
      "PARAM",
      [
        "storage",
        "0029f969",
        null,
        "string"
      ]
    ],
    [
      "00b4caa4",
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
- 00b4baa8 ["INT_ADD", "register:40f0:8", ["const:b4baa8:8", "const:4:8"]]
- 00b4baa8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ca9c ["INT_ADD", "register:40f0:8", ["const:b4ca9c:8", "const:4:8"]]
+ 00b4ca9c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4bab0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c98:8"]]
- 00b4bab0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4caa4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
+ 00b4caa4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4ba8c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ca80 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-ffad476bb8595e833627480ac420a09f"></a>

### [`00b4bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bac4.md) → [`00b4cab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cab8.md) _ZN8firebase4util8iterable10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4cae8",
      "incomplete_value": true,
      "site": "00b4cae8",
      "value": [
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
    "old": {
      "definition_site": "00b4baf4",
      "incomplete_value": true,
      "site": "00b4baf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "definition_site": "00b4cacc",
      "incomplete_value": true,
      "site": "00b4cacc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bad8",
      "incomplete_value": true,
      "site": "00b4bad8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4cad4",
      "incomplete_value": false,
      "site": "00b4cae0",
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
            "const:969:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bae0",
      "incomplete_value": false,
      "site": "00b4baec",
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
            "const:929:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4cac8",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cad4",
      "PARAM",
      [
        "storage",
        "0029f929",
        null,
        "string"
      ]
    ],
    [
      "00b4cae8",
      "WRITE",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4cac8",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cad4",
      "PARAM",
      [
        "storage",
        "0029f969",
        null,
        "string"
      ]
    ],
    [
      "00b4cae8",
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
- 00b4baec ["INT_ADD", "register:40f0:8", ["const:b4baec:8", "const:4:8"]]
- 00b4baec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4cae0 ["INT_ADD", "register:40f0:8", ["const:b4cae0:8", "const:4:8"]]
+ 00b4cae0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4baf4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c98:8"]]
- 00b4baf4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4cae8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c58:8"]]
+ 00b4cae8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4bad0 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4cac4 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-7de9d754f0fdbd7c1c3e454801100f4f"></a>

### [`00b4bb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bb14.md) → [`00b4cb08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cb08.md) _ZN8firebase4util8iterable15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4cb90",
      "incomplete_value": true,
      "site": "00b4cb90",
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
      "definition_site": "00b4bb9c",
      "incomplete_value": true,
      "site": "00b4bb9c",
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
            "const:ca0:8"
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
      "definition_site": "00b4cb3c",
      "incomplete_value": true,
      "site": "00b4cb48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b4bb48",
      "incomplete_value": true,
      "site": "00b4bb54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b4cb1c",
      "READ",
      [
        "storage",
        "01125ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4cb3c",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cb90",
      "WRITE",
      [
        "storage",
        "01125ca0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4cb1c",
      "READ",
      [
        "storage",
        "01126c60",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4cb3c",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cb90",
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
- 00b4bb54 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4bb54 ["INT_ADD", "register:40f0:8", ["const:b4bb54:8", "const:4:8"]]
- 00b4bb54 ["CALLIND", null, ["register:0:8"]]
+ 00b4cb48 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4cb48 ["INT_ADD", "register:40f0:8", ["const:b4cb48:8", "const:4:8"]]
+ 00b4cb48 ["CALLIND", null, ["register:0:8"]]
- 00b4bb9c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4bb9c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ca0:8"]]
- 00b4bb9c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4cb90 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4cb90 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c60:8"]]
+ 00b4cb90 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4bb24 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4cb18 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-0dee755ab16179cd21a10c45b9b5a59f"></a>

### [`00b4bbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bbb0.md) → [`00b4cba4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cba4.md) _ZN8firebase4util8iterable12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4cbe0",
      "incomplete_value": true,
      "site": "00b4cbe0",
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
      "definition_site": "00b4bbec",
      "incomplete_value": true,
      "site": "00b4bbec",
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
            "const:ca0:8"
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
      "definition_site": "00b4cc30",
      "incomplete_value": true,
      "site": "00b4cc30",
      "value": [
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
      "definition_site": "00b4bc3c",
      "incomplete_value": true,
      "site": "00b4bc3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "definition_site": "00b4cbbc",
      "incomplete_value": true,
      "site": "00b4cbbc",
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
      "definition_site": "00b4bbc8",
      "incomplete_value": true,
      "site": "00b4bbc8",
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
      "00b4cbb8",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cbc4",
      "READ",
      [
        "storage",
        "01125ca0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4cbe0",
      "WRITE",
      [
        "storage",
        "01125ca0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4cbb8",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cbc4",
      "READ",
      [
        "storage",
        "01126c60",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4cbe0",
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
- 00b4bbec ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4bbec ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4bbec ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ca0:8"]]
- 00b4bbec ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4cbe0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4cbe0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4cbe0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c60:8"]]
+ 00b4cbe0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4bc38 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4bc38 ["INT_ADD", "register:40f0:8", ["const:b4bc38:8", "const:4:8"]]
- 00b4bc38 ["CALLIND", null, ["register:0:8"]]
+ 00b4cc2c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4cc2c ["INT_ADD", "register:40f0:8", ["const:b4cc2c:8", "const:4:8"]]
+ 00b4cc2c ["CALLIND", null, ["register:0:8"]]
- 00b4bc3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
- 00b4bc3c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4bc3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4cc30 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00b4cc30 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4cc30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-92aed53372da01fbf9f2e185f11b882e"></a>

### [`00b4bc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bc50.md) → [`00b4cc44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cc44.md) _ZN8firebase4util8iterable14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4cc84",
      "incomplete_value": true,
      "site": "00b4cc84",
      "value": [
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
      "definition_site": "00b4bc90",
      "incomplete_value": true,
      "site": "00b4bc90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "definition_site": "00b4cc60",
      "incomplete_value": true,
      "site": "00b4cc60",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bc6c",
      "incomplete_value": true,
      "site": "00b4bc6c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4cc68",
      "incomplete_value": false,
      "site": "00b4cc7c",
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
            "const:969:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bc74",
      "incomplete_value": false,
      "site": "00b4bc88",
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
            "const:929:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4cc58",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cc68",
      "PARAM",
      [
        "storage",
        "0029f929",
        null,
        "string"
      ]
    ],
    [
      "00b4cc84",
      "WRITE",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4cc58",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cc68",
      "PARAM",
      [
        "storage",
        "0029f969",
        null,
        "string"
      ]
    ],
    [
      "00b4cc84",
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
- 00b4bc88 ["INT_ADD", "register:40f0:8", ["const:b4bc88:8", "const:4:8"]]
- 00b4bc88 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4cc7c ["INT_ADD", "register:40f0:8", ["const:b4cc7c:8", "const:4:8"]]
+ 00b4cc7c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4bc90 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
- 00b4bc90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4cc84 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00b4cc84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4bc5c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4cc50 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-7bdddf27770f31ba41de178c577afd96"></a>

### [`00b4bcc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bcc0.md) → [`00b4ccb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4ccb4.md) _ZN8firebase4util8iterable11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4ccd0",
      "incomplete_value": false,
      "site": "00b4ccd4",
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
      "definition_site": "00b4bcdc",
      "incomplete_value": false,
      "site": "00b4bce0",
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
      "definition_site": "00b4cce0",
      "incomplete_value": true,
      "site": "00b4ccec",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4bcec",
      "incomplete_value": true,
      "site": "00b4bcf8",
      "value": [
        "LOAD",
        "8",
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
      "00b4ccd0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4cce0",
      "DATA",
      [
        "storage",
        "01125ca8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4ccd0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4cce0",
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
- 00b4bce0 ["INT_ADD", "register:40f0:8", ["const:b4bce0:8", "const:4:8"]]
- 00b4bce0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4ccd4 ["INT_ADD", "register:40f0:8", ["const:b4ccd4:8", "const:4:8"]]
+ 00b4ccd4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4bcdc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4bcdc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4bcdc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4bcdc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4ccd0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4ccd0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ccd0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ccd0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4bce4 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4ccd8 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-8e089d479589f327b5ad0ce1a99f4172"></a>

### [`00b4bcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bcfc.md) → [`00b4ccf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4ccf0.md) _ZN8firebase4util8iterable13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4cd30",
      "incomplete_value": true,
      "site": "00b4cd30",
      "value": [
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
      "definition_site": "00b4bd3c",
      "incomplete_value": true,
      "site": "00b4bd3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c98:8"
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
      "definition_site": "00b4cd0c",
      "incomplete_value": true,
      "site": "00b4cd0c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bd18",
      "incomplete_value": true,
      "site": "00b4bd18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4cd14",
      "incomplete_value": false,
      "site": "00b4cd28",
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
            "const:969:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bd20",
      "incomplete_value": false,
      "site": "00b4bd34",
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
            "const:929:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4cd04",
      "READ",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cd14",
      "PARAM",
      [
        "storage",
        "0029f929",
        null,
        "string"
      ]
    ],
    [
      "00b4cd30",
      "WRITE",
      [
        "storage",
        "01125c98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4cd04",
      "READ",
      [
        "storage",
        "01126c58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cd14",
      "PARAM",
      [
        "storage",
        "0029f969",
        null,
        "string"
      ]
    ],
    [
      "00b4cd30",
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
- 00b4bd34 ["INT_ADD", "register:40f0:8", ["const:b4bd34:8", "const:4:8"]]
- 00b4bd34 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4cd28 ["INT_ADD", "register:40f0:8", ["const:b4cd28:8", "const:4:8"]]
+ 00b4cd28 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4bd3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c98:8"]]
- 00b4bd3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4cd30 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c58:8"]]
+ 00b4cd30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4bd08 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4ccfc ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-d7e86ef490dc43707fd92d9d57d54d10"></a>

### [`00b4bd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bd6c.md) → [`00b4cd60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cd60.md) _ZN8firebase4util8iterable10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4cd7c",
      "incomplete_value": false,
      "site": "00b4cd80",
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
      "definition_site": "00b4bd88",
      "incomplete_value": false,
      "site": "00b4bd8c",
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
      "definition_site": "00b4cd8c",
      "incomplete_value": true,
      "site": "00b4cd98",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4bd98",
      "incomplete_value": true,
      "site": "00b4bda4",
      "value": [
        "LOAD",
        "8",
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
      "00b4cd7c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4cd8c",
      "DATA",
      [
        "storage",
        "01125cb0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4cd7c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4cd8c",
      "DATA",
      [
        "storage",
        "01126c70",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4bd8c ["INT_ADD", "register:40f0:8", ["const:b4bd8c:8", "const:4:8"]]
- 00b4bd8c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4cd80 ["INT_ADD", "register:40f0:8", ["const:b4cd80:8", "const:4:8"]]
+ 00b4cd80 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4bd88 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4bd88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4bd88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4bd88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4cd7c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4cd7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4cd7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4cd7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4bd90 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4cd84 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-172a2a04fd66bfb016551cb4cd78790e"></a>

### [`00b4bda8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bda8.md) → [`00b4cd9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cd9c.md) _ZN8firebase4util8iterator19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_

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
      "definition_site": "00b4cdc8",
      "incomplete_value": true,
      "site": "00b4cdc8",
      "value": [
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
      "definition_site": "00b4bdd4",
      "incomplete_value": true,
      "site": "00b4bdd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "definition_site": "00b4cdb0",
      "incomplete_value": true,
      "site": "00b4cdb0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bdbc",
      "incomplete_value": true,
      "site": "00b4bdbc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4cdbc",
      "incomplete_value": false,
      "site": "00b4cdc0",
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
            "const:253:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bdc8",
      "incomplete_value": false,
      "site": "00b4bdcc",
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
            "const:fb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4cdac",
      "READ",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cdbc",
      "PARAM",
      [
        "storage",
        "002a70fb",
        null,
        "string"
      ]
    ],
    [
      "00b4cdc8",
      "WRITE",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4cdac",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cdbc",
      "PARAM",
      [
        "storage",
        "002a7253",
        null,
        "string"
      ]
    ],
    [
      "00b4cdc8",
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
- 00b4bdcc ["INT_ADD", "register:40f0:8", ["const:b4bdcc:8", "const:4:8"]]
- 00b4bdcc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4cdc0 ["INT_ADD", "register:40f0:8", ["const:b4cdc0:8", "const:4:8"]]
+ 00b4cdc0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4bdd4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cb8:8"]]
- 00b4bdd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4cdc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00b4cdc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4bdb4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4cda8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-e3cd2b42ecd81b3001a4aca778341e73"></a>

### [`00b4bde8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bde8.md) → [`00b4cddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cddc.md) _ZN8firebase4util8iterator19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4ce08",
      "incomplete_value": true,
      "site": "00b4ce08",
      "value": [
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
      "definition_site": "00b4be14",
      "incomplete_value": true,
      "site": "00b4be14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "definition_site": "00b4cdf0",
      "incomplete_value": true,
      "site": "00b4cdf0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4bdfc",
      "incomplete_value": true,
      "site": "00b4bdfc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4cdf8",
      "incomplete_value": false,
      "site": "00b4ce00",
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
            "const:253:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4be04",
      "incomplete_value": false,
      "site": "00b4be0c",
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
            "const:fb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4cdec",
      "READ",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cdf8",
      "PARAM",
      [
        "storage",
        "002a70fb",
        null,
        "string"
      ]
    ],
    [
      "00b4ce08",
      "WRITE",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4cdec",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cdf8",
      "PARAM",
      [
        "storage",
        "002a7253",
        null,
        "string"
      ]
    ],
    [
      "00b4ce08",
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
- 00b4be0c ["INT_ADD", "register:40f0:8", ["const:b4be0c:8", "const:4:8"]]
- 00b4be0c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ce00 ["INT_ADD", "register:40f0:8", ["const:b4ce00:8", "const:4:8"]]
+ 00b4ce00 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4be14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cb8:8"]]
- 00b4be14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ce08 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00b4ce08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4bdf4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4cde8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-e05924a518960c22571a3209bf461b1b"></a>

### [`00b4be28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4be28.md) → [`00b4ce1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4ce1c.md) _ZN8firebase4util8iterator10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4ce4c",
      "incomplete_value": true,
      "site": "00b4ce4c",
      "value": [
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
      "definition_site": "00b4be58",
      "incomplete_value": true,
      "site": "00b4be58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "definition_site": "00b4ce30",
      "incomplete_value": true,
      "site": "00b4ce30",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4be3c",
      "incomplete_value": true,
      "site": "00b4be3c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ce3c",
      "incomplete_value": false,
      "site": "00b4ce44",
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
            "const:253:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4be48",
      "incomplete_value": false,
      "site": "00b4be50",
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
            "const:fb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ce2c",
      "READ",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ce3c",
      "PARAM",
      [
        "storage",
        "002a70fb",
        null,
        "string"
      ]
    ],
    [
      "00b4ce4c",
      "WRITE",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ce2c",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ce3c",
      "PARAM",
      [
        "storage",
        "002a7253",
        null,
        "string"
      ]
    ],
    [
      "00b4ce4c",
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
- 00b4be50 ["INT_ADD", "register:40f0:8", ["const:b4be50:8", "const:4:8"]]
- 00b4be50 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ce44 ["INT_ADD", "register:40f0:8", ["const:b4ce44:8", "const:4:8"]]
+ 00b4ce44 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4be58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cb8:8"]]
- 00b4be58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ce4c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00b4ce4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4be34 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ce28 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-16ca82f0ba3821db475aa2fd98754703"></a>

### [`00b4be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4be6c.md) → [`00b4ce60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4ce60.md) _ZN8firebase4util8iterator10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4ce90",
      "incomplete_value": true,
      "site": "00b4ce90",
      "value": [
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
      "definition_site": "00b4be9c",
      "incomplete_value": true,
      "site": "00b4be9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "definition_site": "00b4ce74",
      "incomplete_value": true,
      "site": "00b4ce74",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4be80",
      "incomplete_value": true,
      "site": "00b4be80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ce7c",
      "incomplete_value": false,
      "site": "00b4ce88",
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
            "const:253:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4be88",
      "incomplete_value": false,
      "site": "00b4be94",
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
            "const:fb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ce70",
      "READ",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ce7c",
      "PARAM",
      [
        "storage",
        "002a70fb",
        null,
        "string"
      ]
    ],
    [
      "00b4ce90",
      "WRITE",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ce70",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ce7c",
      "PARAM",
      [
        "storage",
        "002a7253",
        null,
        "string"
      ]
    ],
    [
      "00b4ce90",
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
- 00b4be94 ["INT_ADD", "register:40f0:8", ["const:b4be94:8", "const:4:8"]]
- 00b4be94 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ce88 ["INT_ADD", "register:40f0:8", ["const:b4ce88:8", "const:4:8"]]
+ 00b4ce88 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4be9c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cb8:8"]]
- 00b4be9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ce90 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00b4ce90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4be78 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ce6c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-eabf524fe2e1fb001a4ac0420c9579ca"></a>

### [`00b4bebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bebc.md) → [`00b4ceb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4ceb0.md) _ZN8firebase4util8iterator15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4cf38",
      "incomplete_value": true,
      "site": "00b4cf38",
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
    "old": {
      "definition_site": "00b4bf44",
      "incomplete_value": true,
      "site": "00b4bf44",
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
            "const:cc0:8"
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
      "definition_site": "00b4cee4",
      "incomplete_value": true,
      "site": "00b4cef0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b4bef0",
      "incomplete_value": true,
      "site": "00b4befc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb8:8"
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
      "00b4cec4",
      "READ",
      [
        "storage",
        "01125cc0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4cee4",
      "READ",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cf38",
      "WRITE",
      [
        "storage",
        "01125cc0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4cec4",
      "READ",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4cee4",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cf38",
      "WRITE",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4befc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4befc ["INT_ADD", "register:40f0:8", ["const:b4befc:8", "const:4:8"]]
- 00b4befc ["CALLIND", null, ["register:0:8"]]
+ 00b4cef0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4cef0 ["INT_ADD", "register:40f0:8", ["const:b4cef0:8", "const:4:8"]]
+ 00b4cef0 ["CALLIND", null, ["register:0:8"]]
- 00b4bf44 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4bf44 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cc0:8"]]
- 00b4bf44 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4cf38 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4cf38 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c80:8"]]
+ 00b4cf38 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4becc ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4cec0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-0ff905bb98c2ea7fed91ba645405713b"></a>

### [`00b4bf58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bf58.md) → [`00b4cf4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cf4c.md) _ZN8firebase4util8iterator12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4cf88",
      "incomplete_value": true,
      "site": "00b4cf88",
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
    "old": {
      "definition_site": "00b4bf94",
      "incomplete_value": true,
      "site": "00b4bf94",
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
            "const:cc0:8"
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
      "definition_site": "00b4cfd8",
      "incomplete_value": true,
      "site": "00b4cfd8",
      "value": [
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
    "old": {
      "definition_site": "00b4bfe4",
      "incomplete_value": true,
      "site": "00b4bfe4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "definition_site": "00b4cf64",
      "incomplete_value": true,
      "site": "00b4cf64",
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
      "definition_site": "00b4bf70",
      "incomplete_value": true,
      "site": "00b4bf70",
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
      "00b4cf60",
      "READ",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cf6c",
      "READ",
      [
        "storage",
        "01125cc0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4cf88",
      "WRITE",
      [
        "storage",
        "01125cc0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4cf60",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4cf6c",
      "READ",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4cf88",
      "WRITE",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4bf94 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4bf94 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4bf94 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cc0:8"]]
- 00b4bf94 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4cf88 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4cf88 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4cf88 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c80:8"]]
+ 00b4cf88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4bfe0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4bfe0 ["INT_ADD", "register:40f0:8", ["const:b4bfe0:8", "const:4:8"]]
- 00b4bfe0 ["CALLIND", null, ["register:0:8"]]
+ 00b4cfd4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4cfd4 ["INT_ADD", "register:40f0:8", ["const:b4cfd4:8", "const:4:8"]]
+ 00b4cfd4 ["CALLIND", null, ["register:0:8"]]
- 00b4bfe4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb8:8"]]
- 00b4bfe4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4bfe4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4cfd8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00b4cfd8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4cfd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-f58919ad7dc0a54a07a3a332543d97f7"></a>

### [`00b4bff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4b/00b4bff8.md) → [`00b4cfec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4c/00b4cfec.md) _ZN8firebase4util8iterator14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d02c",
      "incomplete_value": true,
      "site": "00b4d02c",
      "value": [
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
    "old": {
      "definition_site": "00b4c038",
      "incomplete_value": true,
      "site": "00b4c038",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "definition_site": "00b4d008",
      "incomplete_value": true,
      "site": "00b4d008",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c014",
      "incomplete_value": true,
      "site": "00b4c014",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d010",
      "incomplete_value": false,
      "site": "00b4d024",
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
            "const:253:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c01c",
      "incomplete_value": false,
      "site": "00b4c030",
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
            "const:fb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d000",
      "READ",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d010",
      "PARAM",
      [
        "storage",
        "002a70fb",
        null,
        "string"
      ]
    ],
    [
      "00b4d02c",
      "WRITE",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d000",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d010",
      "PARAM",
      [
        "storage",
        "002a7253",
        null,
        "string"
      ]
    ],
    [
      "00b4d02c",
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
- 00b4c030 ["INT_ADD", "register:40f0:8", ["const:b4c030:8", "const:4:8"]]
- 00b4c030 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d024 ["INT_ADD", "register:40f0:8", ["const:b4d024:8", "const:4:8"]]
+ 00b4d024 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c038 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb8:8"]]
- 00b4c038 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d02c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00b4d02c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c004 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4cff8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-4fc7e9702536c3079ffa0f6b68baa2e3"></a>

### [`00b4c068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c068.md) → [`00b4d05c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d05c.md) _ZN8firebase4util8iterator11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b630.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c600.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d078",
      "incomplete_value": false,
      "site": "00b4d07c",
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
      "definition_site": "00b4c084",
      "incomplete_value": false,
      "site": "00b4c088",
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
      "definition_site": "00b4d088",
      "incomplete_value": true,
      "site": "00b4d094",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4c094",
      "incomplete_value": true,
      "site": "00b4c0a0",
      "value": [
        "LOAD",
        "8",
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
      "00b4d078",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4d088",
      "DATA",
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
      "00b4d078",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4d088",
      "DATA",
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
- 00b4c088 ["INT_ADD", "register:40f0:8", ["const:b4c088:8", "const:4:8"]]
- 00b4c088 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4d07c ["INT_ADD", "register:40f0:8", ["const:b4d07c:8", "const:4:8"]]
+ 00b4d07c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4c084 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4c084 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c084 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c084 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d078 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4d078 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d078 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d078 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4c08c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4d080 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-1e690aad7f59145e684693e6689b2fd6"></a>

### [`00b4c0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c0a4.md) → [`00b4d098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d098.md) _ZN8firebase4util8iterator13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d0d8",
      "incomplete_value": true,
      "site": "00b4d0d8",
      "value": [
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
    "old": {
      "definition_site": "00b4c0e4",
      "incomplete_value": true,
      "site": "00b4c0e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cb8:8"
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
      "definition_site": "00b4d0b4",
      "incomplete_value": true,
      "site": "00b4d0b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c0c0",
      "incomplete_value": true,
      "site": "00b4c0c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d0bc",
      "incomplete_value": false,
      "site": "00b4d0d0",
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
            "const:253:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c0c8",
      "incomplete_value": false,
      "site": "00b4c0dc",
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
            "const:fb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d0ac",
      "READ",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d0bc",
      "PARAM",
      [
        "storage",
        "002a70fb",
        null,
        "string"
      ]
    ],
    [
      "00b4d0d8",
      "WRITE",
      [
        "storage",
        "01125cb8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d0ac",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d0bc",
      "PARAM",
      [
        "storage",
        "002a7253",
        null,
        "string"
      ]
    ],
    [
      "00b4d0d8",
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
- 00b4c0dc ["INT_ADD", "register:40f0:8", ["const:b4c0dc:8", "const:4:8"]]
- 00b4c0dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d0d0 ["INT_ADD", "register:40f0:8", ["const:b4d0d0:8", "const:4:8"]]
+ 00b4d0d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c0e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb8:8"]]
- 00b4c0e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d0d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00b4d0d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c0b0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4d0a4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-12134f0ddeefc9967f29c4375b6e0cf2"></a>

### [`00b4c114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c114.md) → [`00b4d108`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d108.md) _ZN8firebase4util8iterator10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4d124",
      "incomplete_value": false,
      "site": "00b4d128",
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
      "definition_site": "00b4c130",
      "incomplete_value": false,
      "site": "00b4c134",
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
      "definition_site": "00b4d134",
      "incomplete_value": true,
      "site": "00b4d140",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4c140",
      "incomplete_value": true,
      "site": "00b4c14c",
      "value": [
        "LOAD",
        "8",
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
      "00b4d124",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4d134",
      "DATA",
      [
        "storage",
        "01125cd8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4d124",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4d134",
      "DATA",
      [
        "storage",
        "01126c98",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c134 ["INT_ADD", "register:40f0:8", ["const:b4c134:8", "const:4:8"]]
- 00b4c134 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4d128 ["INT_ADD", "register:40f0:8", ["const:b4d128:8", "const:4:8"]]
+ 00b4d128 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4c130 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4c130 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c130 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c130 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d124 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4d124 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d124 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d124 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4c138 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4d12c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-7ff9cf9cb26043f05e7f78da8ccf5fa7"></a>

### [`00b4c150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c150.md) → [`00b4d144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d144.md) _ZN8firebase4util4list19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cl

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
      "definition_site": "00b4d170",
      "incomplete_value": true,
      "site": "00b4d170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c17c",
      "incomplete_value": true,
      "site": "00b4c17c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ce0:8"
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
      "definition_site": "00b4d158",
      "incomplete_value": true,
      "site": "00b4d158",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c164",
      "incomplete_value": true,
      "site": "00b4c164",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d164",
      "incomplete_value": false,
      "site": "00b4d168",
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
            "const:97c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c170",
      "incomplete_value": false,
      "site": "00b4c174",
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
            "const:93c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d154",
      "READ",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d164",
      "PARAM",
      [
        "storage",
        "0029f93c",
        null,
        "string"
      ]
    ],
    [
      "00b4d170",
      "WRITE",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d154",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d164",
      "PARAM",
      [
        "storage",
        "0029f97c",
        null,
        "string"
      ]
    ],
    [
      "00b4d170",
      "WRITE",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c174 ["INT_ADD", "register:40f0:8", ["const:b4c174:8", "const:4:8"]]
- 00b4c174 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d168 ["INT_ADD", "register:40f0:8", ["const:b4d168:8", "const:4:8"]]
+ 00b4d168 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c17c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ce0:8"]]
- 00b4c17c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d170 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca0:8"]]
+ 00b4d170 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c15c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d150 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-56b857d73e9d33eedcc785dcc6794479"></a>

### [`00b4c190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c190.md) → [`00b4d184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d184.md) _ZN8firebase4util4list19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4d1b0",
      "incomplete_value": true,
      "site": "00b4d1b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c1bc",
      "incomplete_value": true,
      "site": "00b4c1bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ce0:8"
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
      "definition_site": "00b4d198",
      "incomplete_value": true,
      "site": "00b4d198",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c1a4",
      "incomplete_value": true,
      "site": "00b4c1a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d1a0",
      "incomplete_value": false,
      "site": "00b4d1a8",
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
            "const:97c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c1ac",
      "incomplete_value": false,
      "site": "00b4c1b4",
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
            "const:93c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d194",
      "READ",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d1a0",
      "PARAM",
      [
        "storage",
        "0029f93c",
        null,
        "string"
      ]
    ],
    [
      "00b4d1b0",
      "WRITE",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d194",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d1a0",
      "PARAM",
      [
        "storage",
        "0029f97c",
        null,
        "string"
      ]
    ],
    [
      "00b4d1b0",
      "WRITE",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c1b4 ["INT_ADD", "register:40f0:8", ["const:b4c1b4:8", "const:4:8"]]
- 00b4c1b4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d1a8 ["INT_ADD", "register:40f0:8", ["const:b4d1a8:8", "const:4:8"]]
+ 00b4d1a8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c1bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ce0:8"]]
- 00b4c1bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d1b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca0:8"]]
+ 00b4d1b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c19c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d190 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-a35cf97e3ee0379505ffdffa40627a32"></a>

### [`00b4c1d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c1d0.md) → [`00b4d1c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d1c4.md) _ZN8firebase4util4list10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4d1f4",
      "incomplete_value": true,
      "site": "00b4d1f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c200",
      "incomplete_value": true,
      "site": "00b4c200",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ce0:8"
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
      "definition_site": "00b4d1d8",
      "incomplete_value": true,
      "site": "00b4d1d8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c1e4",
      "incomplete_value": true,
      "site": "00b4c1e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d1e4",
      "incomplete_value": false,
      "site": "00b4d1ec",
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
            "const:97c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c1f0",
      "incomplete_value": false,
      "site": "00b4c1f8",
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
            "const:93c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d1d4",
      "READ",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d1e4",
      "PARAM",
      [
        "storage",
        "0029f93c",
        null,
        "string"
      ]
    ],
    [
      "00b4d1f4",
      "WRITE",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d1d4",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d1e4",
      "PARAM",
      [
        "storage",
        "0029f97c",
        null,
        "string"
      ]
    ],
    [
      "00b4d1f4",
      "WRITE",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c1f8 ["INT_ADD", "register:40f0:8", ["const:b4c1f8:8", "const:4:8"]]
- 00b4c1f8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d1ec ["INT_ADD", "register:40f0:8", ["const:b4d1ec:8", "const:4:8"]]
+ 00b4d1ec ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c200 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ce0:8"]]
- 00b4c200 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d1f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca0:8"]]
+ 00b4d1f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c1dc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d1d0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-997c534cd7fc4a083ff695dc67e91deb"></a>

### [`00b4c214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c214.md) → [`00b4d208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d208.md) _ZN8firebase4util4list10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d238",
      "incomplete_value": true,
      "site": "00b4d238",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c244",
      "incomplete_value": true,
      "site": "00b4c244",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ce0:8"
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
      "definition_site": "00b4d21c",
      "incomplete_value": true,
      "site": "00b4d21c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c228",
      "incomplete_value": true,
      "site": "00b4c228",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d224",
      "incomplete_value": false,
      "site": "00b4d230",
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
            "const:97c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c230",
      "incomplete_value": false,
      "site": "00b4c23c",
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
            "const:93c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d218",
      "READ",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d224",
      "PARAM",
      [
        "storage",
        "0029f93c",
        null,
        "string"
      ]
    ],
    [
      "00b4d238",
      "WRITE",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d218",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d224",
      "PARAM",
      [
        "storage",
        "0029f97c",
        null,
        "string"
      ]
    ],
    [
      "00b4d238",
      "WRITE",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c23c ["INT_ADD", "register:40f0:8", ["const:b4c23c:8", "const:4:8"]]
- 00b4c23c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d230 ["INT_ADD", "register:40f0:8", ["const:b4d230:8", "const:4:8"]]
+ 00b4d230 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c244 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ce0:8"]]
- 00b4c244 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d238 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ca0:8"]]
+ 00b4d238 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c220 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d214 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-cbf1dd583fb656a5dbfc5e9fa7eee671"></a>

### [`00b4c258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c258.md) → [`00b4d24c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d24c.md) _ZN8firebase4util4list8GetClassEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b4d250",
      "incomplete_value": true,
      "site": "00b4d254",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ca0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c25c",
      "incomplete_value": true,
      "site": "00b4c260",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ce0:8"
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
      "00b4d250",
      "READ",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d250",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c258 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4d24c ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b4c25c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ce0:8"]]
- 00b4c25c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4d250 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ca0:8"]]
+ 00b4d250 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-701d0818a2cc59578439a77cbd87e001"></a>

### [`00b4c264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c264.md) → [`00b4d258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d258.md) _ZN8firebase4util4list15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4d2e0",
      "incomplete_value": true,
      "site": "00b4d2e0",
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
            "const:ca8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c2ec",
      "incomplete_value": true,
      "site": "00b4c2ec",
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
            "const:ce8:8"
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
      "definition_site": "00b4d28c",
      "incomplete_value": true,
      "site": "00b4d298",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c298",
      "incomplete_value": true,
      "site": "00b4c2a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ce0:8"
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
      "00b4d26c",
      "READ",
      [
        "storage",
        "01125ce8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d28c",
      "READ",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d2e0",
      "WRITE",
      [
        "storage",
        "01125ce8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d26c",
      "READ",
      [
        "storage",
        "01126ca8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d28c",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d2e0",
      "WRITE",
      [
        "storage",
        "01126ca8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c2a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4c2a4 ["INT_ADD", "register:40f0:8", ["const:b4c2a4:8", "const:4:8"]]
- 00b4c2a4 ["CALLIND", null, ["register:0:8"]]
+ 00b4d298 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d298 ["INT_ADD", "register:40f0:8", ["const:b4d298:8", "const:4:8"]]
+ 00b4d298 ["CALLIND", null, ["register:0:8"]]
- 00b4c2ec ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4c2ec ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ce8:8"]]
- 00b4c2ec ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4d2e0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4d2e0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ca8:8"]]
+ 00b4d2e0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4c274 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4d268 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-d802fe898bb14c6c9d2819e389417e8c"></a>

### [`00b4c300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c300.md) → [`00b4d2f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d2f4.md) _ZN8firebase4util4list12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4d330",
      "incomplete_value": true,
      "site": "00b4d330",
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
            "const:ca8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c33c",
      "incomplete_value": true,
      "site": "00b4c33c",
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
            "const:ce8:8"
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
      "definition_site": "00b4d380",
      "incomplete_value": true,
      "site": "00b4d380",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c38c",
      "incomplete_value": true,
      "site": "00b4c38c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ce0:8"
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
      "definition_site": "00b4d30c",
      "incomplete_value": true,
      "site": "00b4d30c",
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
      "definition_site": "00b4c318",
      "incomplete_value": true,
      "site": "00b4c318",
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
      "00b4d308",
      "READ",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d314",
      "READ",
      [
        "storage",
        "01125ce8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d330",
      "WRITE",
      [
        "storage",
        "01125ce8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d308",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d314",
      "READ",
      [
        "storage",
        "01126ca8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d330",
      "WRITE",
      [
        "storage",
        "01126ca8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c33c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4c33c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4c33c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ce8:8"]]
- 00b4c33c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4d330 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4d330 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4d330 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ca8:8"]]
+ 00b4d330 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4c388 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4c388 ["INT_ADD", "register:40f0:8", ["const:b4c388:8", "const:4:8"]]
- 00b4c388 ["CALLIND", null, ["register:0:8"]]
+ 00b4d37c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d37c ["INT_ADD", "register:40f0:8", ["const:b4d37c:8", "const:4:8"]]
+ 00b4d37c ["CALLIND", null, ["register:0:8"]]
- 00b4c38c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ce0:8"]]
- 00b4c38c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4c38c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4d380 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca0:8"]]
+ 00b4d380 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4d380 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-e97ca3d0b9363f0eff58e019c9e87253"></a>

### [`00b4c3a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c3a0.md) → [`00b4d394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d394.md) _ZN8firebase4util4list14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d3d4",
      "incomplete_value": true,
      "site": "00b4d3d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c3e0",
      "incomplete_value": true,
      "site": "00b4c3e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ce0:8"
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
      "definition_site": "00b4d3b0",
      "incomplete_value": true,
      "site": "00b4d3b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c3bc",
      "incomplete_value": true,
      "site": "00b4c3bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
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
      "site": "00b4d3cc",
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
            "const:97c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c3c4",
      "incomplete_value": false,
      "site": "00b4c3d8",
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
            "const:93c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
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
        "01125ce0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d3b8",
      "PARAM",
      [
        "storage",
        "0029f93c",
        null,
        "string"
      ]
    ],
    [
      "00b4d3d4",
      "WRITE",
      [
        "storage",
        "01125ce0",
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
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d3b8",
      "PARAM",
      [
        "storage",
        "0029f97c",
        null,
        "string"
      ]
    ],
    [
      "00b4d3d4",
      "WRITE",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c3d8 ["INT_ADD", "register:40f0:8", ["const:b4c3d8:8", "const:4:8"]]
- 00b4c3d8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d3cc ["INT_ADD", "register:40f0:8", ["const:b4d3cc:8", "const:4:8"]]
+ 00b4d3cc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c3e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ce0:8"]]
- 00b4c3e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d3d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca0:8"]]
+ 00b4d3d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c3ac ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4d3a0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-d97e1b6fda030aeca036a1028e0ba81c"></a>

### [`00b4c410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c410.md) → [`00b4d404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d404.md) _ZN8firebase4util4list11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b5f0.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c5c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c5c0.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d420",
      "incomplete_value": false,
      "site": "00b4d424",
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
      "definition_site": "00b4c42c",
      "incomplete_value": false,
      "site": "00b4c430",
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
      "definition_site": "00b4d430",
      "incomplete_value": true,
      "site": "00b4d43c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4c43c",
      "incomplete_value": true,
      "site": "00b4c448",
      "value": [
        "LOAD",
        "8",
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
      "00b4d420",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4d430",
      "DATA",
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
      "00b4d420",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4d430",
      "DATA",
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
- 00b4c430 ["INT_ADD", "register:40f0:8", ["const:b4c430:8", "const:4:8"]]
- 00b4c430 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4d424 ["INT_ADD", "register:40f0:8", ["const:b4d424:8", "const:4:8"]]
+ 00b4d424 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4c42c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4c42c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c42c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c42c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d420 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4d420 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d420 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d420 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4c434 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4d428 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-a5445081a9ca3a1d8d9a823192a4a8af"></a>

### [`00b4c44c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c44c.md) → [`00b4d440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d440.md) _ZN8firebase4util4list13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d480",
      "incomplete_value": true,
      "site": "00b4d480",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c48c",
      "incomplete_value": true,
      "site": "00b4c48c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ce0:8"
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
      "definition_site": "00b4d45c",
      "incomplete_value": true,
      "site": "00b4d45c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c468",
      "incomplete_value": true,
      "site": "00b4c468",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d464",
      "incomplete_value": false,
      "site": "00b4d478",
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
            "const:97c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c470",
      "incomplete_value": false,
      "site": "00b4c484",
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
            "const:93c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d454",
      "READ",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d464",
      "PARAM",
      [
        "storage",
        "0029f93c",
        null,
        "string"
      ]
    ],
    [
      "00b4d480",
      "WRITE",
      [
        "storage",
        "01125ce0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d454",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d464",
      "PARAM",
      [
        "storage",
        "0029f97c",
        null,
        "string"
      ]
    ],
    [
      "00b4d480",
      "WRITE",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c484 ["INT_ADD", "register:40f0:8", ["const:b4c484:8", "const:4:8"]]
- 00b4c484 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d478 ["INT_ADD", "register:40f0:8", ["const:b4d478:8", "const:4:8"]]
+ 00b4d478 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c48c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ce0:8"]]
- 00b4c48c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d480 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ca0:8"]]
+ 00b4d480 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c458 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4d44c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-672910b01935b8519bd7aae45b10cbe1"></a>

### [`00b4c4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c4bc.md) → [`00b4d4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d4b0.md) _ZN8firebase4util4list10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4d4cc",
      "incomplete_value": false,
      "site": "00b4d4d0",
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
      "definition_site": "00b4c4d8",
      "incomplete_value": false,
      "site": "00b4c4dc",
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
      "definition_site": "00b4d4dc",
      "incomplete_value": true,
      "site": "00b4d4e8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4c4e8",
      "incomplete_value": true,
      "site": "00b4c4f4",
      "value": [
        "LOAD",
        "8",
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
      "00b4d4cc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4d4dc",
      "DATA",
      [
        "storage",
        "01125d08",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4d4cc",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4d4dc",
      "DATA",
      [
        "storage",
        "01126cc8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c4dc ["INT_ADD", "register:40f0:8", ["const:b4c4dc:8", "const:4:8"]]
- 00b4c4dc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4d4d0 ["INT_ADD", "register:40f0:8", ["const:b4d4d0:8", "const:4:8"]]
+ 00b4d4d0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4c4d8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4c4d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c4d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c4d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d4cc ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4d4cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d4cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d4cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4c4e0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4d4d4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-715c3f38408a4e55cc99eb66fb6021ef"></a>

### [`00b4c4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c4f8.md) → [`00b4d4ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d4ec.md) _ZN8firebase4util10long_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00b4d518",
      "incomplete_value": true,
      "site": "00b4d518",
      "value": [
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
    "old": {
      "definition_site": "00b4c524",
      "incomplete_value": true,
      "site": "00b4c524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d10:8"
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
      "definition_site": "00b4d500",
      "incomplete_value": true,
      "site": "00b4d500",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c50c",
      "incomplete_value": true,
      "site": "00b4c50c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d50c",
      "incomplete_value": false,
      "site": "00b4d510",
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
            "const:b27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c518",
      "incomplete_value": false,
      "site": "00b4c51c",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d4fc",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d50c",
      "PARAM",
      [
        "storage",
        "002b8a58",
        null,
        "string"
      ]
    ],
    [
      "00b4d518",
      "WRITE",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d4fc",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d50c",
      "PARAM",
      [
        "storage",
        "002b8b27",
        null,
        "string"
      ]
    ],
    [
      "00b4d518",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c51c ["INT_ADD", "register:40f0:8", ["const:b4c51c:8", "const:4:8"]]
- 00b4c51c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d510 ["INT_ADD", "register:40f0:8", ["const:b4d510:8", "const:4:8"]]
+ 00b4d510 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c524 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d10:8"]]
- 00b4c524 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d518 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00b4d518 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c504 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d4f8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-3e34754ca00c701b62d4ba3dc01e50bc"></a>

### [`00b4c538`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c538.md) → [`00b4d52c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d52c.md) _ZN8firebase4util10long_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4d558",
      "incomplete_value": true,
      "site": "00b4d558",
      "value": [
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
    "old": {
      "definition_site": "00b4c564",
      "incomplete_value": true,
      "site": "00b4c564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d10:8"
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
      "definition_site": "00b4d540",
      "incomplete_value": true,
      "site": "00b4d540",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c54c",
      "incomplete_value": true,
      "site": "00b4c54c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d548",
      "incomplete_value": false,
      "site": "00b4d550",
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
            "const:b27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c554",
      "incomplete_value": false,
      "site": "00b4c55c",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d53c",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d548",
      "PARAM",
      [
        "storage",
        "002b8a58",
        null,
        "string"
      ]
    ],
    [
      "00b4d558",
      "WRITE",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d53c",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d548",
      "PARAM",
      [
        "storage",
        "002b8b27",
        null,
        "string"
      ]
    ],
    [
      "00b4d558",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c55c ["INT_ADD", "register:40f0:8", ["const:b4c55c:8", "const:4:8"]]
- 00b4c55c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d550 ["INT_ADD", "register:40f0:8", ["const:b4d550:8", "const:4:8"]]
+ 00b4d550 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c564 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d10:8"]]
- 00b4c564 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d558 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00b4d558 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c544 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d538 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-39c0c6e21211a453c9ed27766ddd1d27"></a>

### [`00b4c578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c578.md) → [`00b4d56c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d56c.md) _ZN8firebase4util10long_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4d59c",
      "incomplete_value": true,
      "site": "00b4d59c",
      "value": [
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
    "old": {
      "definition_site": "00b4c5a8",
      "incomplete_value": true,
      "site": "00b4c5a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d10:8"
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
      "definition_site": "00b4d580",
      "incomplete_value": true,
      "site": "00b4d580",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c58c",
      "incomplete_value": true,
      "site": "00b4c58c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d58c",
      "incomplete_value": false,
      "site": "00b4d594",
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
            "const:b27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c598",
      "incomplete_value": false,
      "site": "00b4c5a0",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d57c",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d58c",
      "PARAM",
      [
        "storage",
        "002b8a58",
        null,
        "string"
      ]
    ],
    [
      "00b4d59c",
      "WRITE",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d57c",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d58c",
      "PARAM",
      [
        "storage",
        "002b8b27",
        null,
        "string"
      ]
    ],
    [
      "00b4d59c",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c5a0 ["INT_ADD", "register:40f0:8", ["const:b4c5a0:8", "const:4:8"]]
- 00b4c5a0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d594 ["INT_ADD", "register:40f0:8", ["const:b4d594:8", "const:4:8"]]
+ 00b4d594 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c5a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d10:8"]]
- 00b4c5a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d59c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00b4d59c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c584 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d578 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-e398d309a9d1f822ffdf8a99c2197a1d"></a>

### [`00b4c5bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c5bc.md) → [`00b4d5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d5b0.md) _ZN8firebase4util10long_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d5e0",
      "incomplete_value": true,
      "site": "00b4d5e0",
      "value": [
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
    "old": {
      "definition_site": "00b4c5ec",
      "incomplete_value": true,
      "site": "00b4c5ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d10:8"
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
      "definition_site": "00b4d5c4",
      "incomplete_value": true,
      "site": "00b4d5c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c5d0",
      "incomplete_value": true,
      "site": "00b4c5d0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d5cc",
      "incomplete_value": false,
      "site": "00b4d5d8",
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
            "const:b27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c5d8",
      "incomplete_value": false,
      "site": "00b4c5e4",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d5c0",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d5cc",
      "PARAM",
      [
        "storage",
        "002b8a58",
        null,
        "string"
      ]
    ],
    [
      "00b4d5e0",
      "WRITE",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d5c0",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d5cc",
      "PARAM",
      [
        "storage",
        "002b8b27",
        null,
        "string"
      ]
    ],
    [
      "00b4d5e0",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c5e4 ["INT_ADD", "register:40f0:8", ["const:b4c5e4:8", "const:4:8"]]
- 00b4c5e4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d5d8 ["INT_ADD", "register:40f0:8", ["const:b4d5d8:8", "const:4:8"]]
+ 00b4d5d8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c5ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d10:8"]]
- 00b4c5ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d5e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00b4d5e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c5c8 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d5bc ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-9a07f7fb8e7a43718b9731d2f75c6ba5"></a>

### [`00b4c60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c60c.md) → [`00b4d600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d600.md) _ZN8firebase4util10long_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4d688",
      "incomplete_value": true,
      "site": "00b4d688",
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
    "old": {
      "definition_site": "00b4c694",
      "incomplete_value": true,
      "site": "00b4c694",
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
            "const:d18:8"
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
      "definition_site": "00b4d634",
      "incomplete_value": true,
      "site": "00b4d640",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b4c640",
      "incomplete_value": true,
      "site": "00b4c64c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d10:8"
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
      "00b4d614",
      "READ",
      [
        "storage",
        "01125d18",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d634",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d688",
      "WRITE",
      [
        "storage",
        "01125d18",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d614",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d634",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d688",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c64c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4c64c ["INT_ADD", "register:40f0:8", ["const:b4c64c:8", "const:4:8"]]
- 00b4c64c ["CALLIND", null, ["register:0:8"]]
+ 00b4d640 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d640 ["INT_ADD", "register:40f0:8", ["const:b4d640:8", "const:4:8"]]
+ 00b4d640 ["CALLIND", null, ["register:0:8"]]
- 00b4c694 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4c694 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d18:8"]]
- 00b4c694 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4d688 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4d688 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cd8:8"]]
+ 00b4d688 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4c61c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4d610 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-9b95ac2cce85a59679622a27b2be2ffc"></a>

### [`00b4c6a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c6a8.md) → [`00b4d69c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d69c.md) _ZN8firebase4util10long_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4d6d8",
      "incomplete_value": true,
      "site": "00b4d6d8",
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
    "old": {
      "definition_site": "00b4c6e4",
      "incomplete_value": true,
      "site": "00b4c6e4",
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
            "const:d18:8"
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
      "definition_site": "00b4d728",
      "incomplete_value": true,
      "site": "00b4d728",
      "value": [
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
    "old": {
      "definition_site": "00b4c734",
      "incomplete_value": true,
      "site": "00b4c734",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:d10:8"
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
      "definition_site": "00b4d6b4",
      "incomplete_value": true,
      "site": "00b4d6b4",
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
      "definition_site": "00b4c6c0",
      "incomplete_value": true,
      "site": "00b4c6c0",
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
      "00b4d6b0",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d6bc",
      "READ",
      [
        "storage",
        "01125d18",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d6d8",
      "WRITE",
      [
        "storage",
        "01125d18",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d6b0",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d6bc",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d6d8",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c6e4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4c6e4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4c6e4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d18:8"]]
- 00b4c6e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4d6d8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4d6d8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4d6d8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cd8:8"]]
+ 00b4d6d8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4c730 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4c730 ["INT_ADD", "register:40f0:8", ["const:b4c730:8", "const:4:8"]]
- 00b4c730 ["CALLIND", null, ["register:0:8"]]
+ 00b4d724 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d724 ["INT_ADD", "register:40f0:8", ["const:b4d724:8", "const:4:8"]]
+ 00b4d724 ["CALLIND", null, ["register:0:8"]]
- 00b4c734 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d10:8"]]
- 00b4c734 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4c734 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4d728 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00b4d728 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4d728 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-98c7ee54f8052210f75c9b99fda7e9a3"></a>

### [`00b4c748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c748.md) → [`00b4d73c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d73c.md) _ZN8firebase4util10long_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d77c",
      "incomplete_value": true,
      "site": "00b4d77c",
      "value": [
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
    "old": {
      "definition_site": "00b4c788",
      "incomplete_value": true,
      "site": "00b4c788",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:d10:8"
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
      "definition_site": "00b4d758",
      "incomplete_value": true,
      "site": "00b4d758",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c764",
      "incomplete_value": true,
      "site": "00b4c764",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
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
      "site": "00b4d774",
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
            "const:b27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c76c",
      "incomplete_value": false,
      "site": "00b4c780",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
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
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d760",
      "PARAM",
      [
        "storage",
        "002b8a58",
        null,
        "string"
      ]
    ],
    [
      "00b4d77c",
      "WRITE",
      [
        "storage",
        "01125d10",
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
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d760",
      "PARAM",
      [
        "storage",
        "002b8b27",
        null,
        "string"
      ]
    ],
    [
      "00b4d77c",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c780 ["INT_ADD", "register:40f0:8", ["const:b4c780:8", "const:4:8"]]
- 00b4c780 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d774 ["INT_ADD", "register:40f0:8", ["const:b4d774:8", "const:4:8"]]
+ 00b4d774 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c788 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d10:8"]]
- 00b4c788 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d77c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00b4d77c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c754 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4d748 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-6dbee0adef3d3bec4324401f4b322146"></a>

### [`00b4c7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c7b8.md) → [`00b4d7ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d7ac.md) _ZN8firebase4util10long_class11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b340.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c310.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d7c8",
      "incomplete_value": false,
      "site": "00b4d7cc",
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
      "definition_site": "00b4c7d4",
      "incomplete_value": false,
      "site": "00b4c7d8",
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
      "definition_site": "00b4d7d8",
      "incomplete_value": true,
      "site": "00b4d7e4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4c7e4",
      "incomplete_value": true,
      "site": "00b4c7f0",
      "value": [
        "LOAD",
        "8",
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
      "00b4d7c8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4d7d8",
      "DATA",
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
      "00b4d7c8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4d7d8",
      "DATA",
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
- 00b4c7d8 ["INT_ADD", "register:40f0:8", ["const:b4c7d8:8", "const:4:8"]]
- 00b4c7d8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4d7cc ["INT_ADD", "register:40f0:8", ["const:b4d7cc:8", "const:4:8"]]
+ 00b4d7cc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4c7d4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4c7d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c7d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c7d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d7c8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4d7c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d7c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d7c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4c7dc ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4d7d0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-edaad84b50515c8ea773c891241a3141"></a>

### [`00b4c7f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c7f4.md) → [`00b4d7e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d7e8.md) _ZN8firebase4util10long_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d828",
      "incomplete_value": true,
      "site": "00b4d828",
      "value": [
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
    "old": {
      "definition_site": "00b4c834",
      "incomplete_value": true,
      "site": "00b4c834",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:d10:8"
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
      "definition_site": "00b4d804",
      "incomplete_value": true,
      "site": "00b4d804",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c810",
      "incomplete_value": true,
      "site": "00b4c810",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d80c",
      "incomplete_value": false,
      "site": "00b4d820",
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
            "const:b27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c818",
      "incomplete_value": false,
      "site": "00b4c82c",
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
            "const:a58:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d7fc",
      "READ",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d80c",
      "PARAM",
      [
        "storage",
        "002b8a58",
        null,
        "string"
      ]
    ],
    [
      "00b4d828",
      "WRITE",
      [
        "storage",
        "01125d10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d7fc",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d80c",
      "PARAM",
      [
        "storage",
        "002b8b27",
        null,
        "string"
      ]
    ],
    [
      "00b4d828",
      "WRITE",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c82c ["INT_ADD", "register:40f0:8", ["const:b4c82c:8", "const:4:8"]]
- 00b4c82c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d820 ["INT_ADD", "register:40f0:8", ["const:b4d820:8", "const:4:8"]]
+ 00b4d820 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c834 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d10:8"]]
- 00b4c834 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d828 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00b4d828 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c800 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4d7f4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-b2d1b4003a8f5d53fdfddb8daa5a0290"></a>

### [`00b4c864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c864.md) → [`00b4d858`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d858.md) _ZN8firebase4util10long_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4d874",
      "incomplete_value": false,
      "site": "00b4d878",
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
      "definition_site": "00b4c880",
      "incomplete_value": false,
      "site": "00b4c884",
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
      "definition_site": "00b4d884",
      "incomplete_value": true,
      "site": "00b4d890",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4c890",
      "incomplete_value": true,
      "site": "00b4c89c",
      "value": [
        "LOAD",
        "8",
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
      "00b4d874",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4d884",
      "DATA",
      [
        "storage",
        "01125d30",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4d874",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4d884",
      "DATA",
      [
        "storage",
        "01126cf0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c884 ["INT_ADD", "register:40f0:8", ["const:b4c884:8", "const:4:8"]]
- 00b4c884 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4d878 ["INT_ADD", "register:40f0:8", ["const:b4d878:8", "const:4:8"]]
+ 00b4d878 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4c880 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4c880 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c880 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4c880 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4d874 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4d874 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d874 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4d874 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4c888 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4d87c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-e6724734a7d1cca518556b76b1aff249"></a>

### [`00b4c8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c8a0.md) → [`00b4d894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d894.md) _ZN8firebase4util3map19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cla

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
      "definition_site": "00b4d8c0",
      "incomplete_value": true,
      "site": "00b4d8c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c8cc",
      "incomplete_value": true,
      "site": "00b4c8cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "00b4d8a8",
      "incomplete_value": true,
      "site": "00b4d8a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c8b4",
      "incomplete_value": true,
      "site": "00b4c8b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d8b4",
      "incomplete_value": false,
      "site": "00b4d8b8",
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
            "const:655:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c8c0",
      "incomplete_value": false,
      "site": "00b4c8c4",
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
            "const:57e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d8a4",
      "READ",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d8b4",
      "PARAM",
      [
        "storage",
        "002b157e",
        null,
        "string"
      ]
    ],
    [
      "00b4d8c0",
      "WRITE",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d8a4",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d8b4",
      "PARAM",
      [
        "storage",
        "002b1655",
        null,
        "string"
      ]
    ],
    [
      "00b4d8c0",
      "WRITE",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c8c4 ["INT_ADD", "register:40f0:8", ["const:b4c8c4:8", "const:4:8"]]
- 00b4c8c4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d8b8 ["INT_ADD", "register:40f0:8", ["const:b4d8b8:8", "const:4:8"]]
+ 00b4d8b8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c8cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d38:8"]]
- 00b4c8cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d8c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf8:8"]]
+ 00b4d8c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c8ac ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d8a0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b2ddc2c5896e701ab9613ae67e8badcf"></a>

### [`00b4c8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c8e0.md) → [`00b4d8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d8d4.md) _ZN8firebase4util3map19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4d900",
      "incomplete_value": true,
      "site": "00b4d900",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c90c",
      "incomplete_value": true,
      "site": "00b4c90c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "00b4d8e8",
      "incomplete_value": true,
      "site": "00b4d8e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c8f4",
      "incomplete_value": true,
      "site": "00b4c8f4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d8f0",
      "incomplete_value": false,
      "site": "00b4d8f8",
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
            "const:655:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c8fc",
      "incomplete_value": false,
      "site": "00b4c904",
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
            "const:57e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d8e4",
      "READ",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d8f0",
      "PARAM",
      [
        "storage",
        "002b157e",
        null,
        "string"
      ]
    ],
    [
      "00b4d900",
      "WRITE",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d8e4",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d8f0",
      "PARAM",
      [
        "storage",
        "002b1655",
        null,
        "string"
      ]
    ],
    [
      "00b4d900",
      "WRITE",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c904 ["INT_ADD", "register:40f0:8", ["const:b4c904:8", "const:4:8"]]
- 00b4c904 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d8f8 ["INT_ADD", "register:40f0:8", ["const:b4d8f8:8", "const:4:8"]]
+ 00b4d8f8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c90c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d38:8"]]
- 00b4c90c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d900 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf8:8"]]
+ 00b4d900 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c8ec ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d8e0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-546208551cadbfe27019e3d6d83b259f"></a>

### [`00b4c920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c920.md) → [`00b4d914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d914.md) _ZN8firebase4util3map10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4d944",
      "incomplete_value": true,
      "site": "00b4d944",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c950",
      "incomplete_value": true,
      "site": "00b4c950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "00b4d928",
      "incomplete_value": true,
      "site": "00b4d928",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c934",
      "incomplete_value": true,
      "site": "00b4c934",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d934",
      "incomplete_value": false,
      "site": "00b4d93c",
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
            "const:655:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c940",
      "incomplete_value": false,
      "site": "00b4c948",
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
            "const:57e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d924",
      "READ",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d934",
      "PARAM",
      [
        "storage",
        "002b157e",
        null,
        "string"
      ]
    ],
    [
      "00b4d944",
      "WRITE",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d924",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d934",
      "PARAM",
      [
        "storage",
        "002b1655",
        null,
        "string"
      ]
    ],
    [
      "00b4d944",
      "WRITE",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c948 ["INT_ADD", "register:40f0:8", ["const:b4c948:8", "const:4:8"]]
- 00b4c948 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d93c ["INT_ADD", "register:40f0:8", ["const:b4d93c:8", "const:4:8"]]
+ 00b4d93c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c950 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d38:8"]]
- 00b4c950 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d944 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf8:8"]]
+ 00b4d944 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c92c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d920 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-4395d302d6b68c5dfe3232271e53d307"></a>

### [`00b4c964`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c964.md) → [`00b4d958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d958.md) _ZN8firebase4util3map10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4d988",
      "incomplete_value": true,
      "site": "00b4d988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c994",
      "incomplete_value": true,
      "site": "00b4c994",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "00b4d96c",
      "incomplete_value": true,
      "site": "00b4d96c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c978",
      "incomplete_value": true,
      "site": "00b4c978",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4d974",
      "incomplete_value": false,
      "site": "00b4d980",
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
            "const:655:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c980",
      "incomplete_value": false,
      "site": "00b4c98c",
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
            "const:57e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4d968",
      "READ",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d974",
      "PARAM",
      [
        "storage",
        "002b157e",
        null,
        "string"
      ]
    ],
    [
      "00b4d988",
      "WRITE",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4d968",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4d974",
      "PARAM",
      [
        "storage",
        "002b1655",
        null,
        "string"
      ]
    ],
    [
      "00b4d988",
      "WRITE",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c98c ["INT_ADD", "register:40f0:8", ["const:b4c98c:8", "const:4:8"]]
- 00b4c98c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4d980 ["INT_ADD", "register:40f0:8", ["const:b4d980:8", "const:4:8"]]
+ 00b4d980 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4c994 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d38:8"]]
- 00b4c994 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4d988 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cf8:8"]]
+ 00b4d988 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4c970 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4d964 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-a787fddcc2e7c523f93b2478eec286a4"></a>

### [`00b4c9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4c9b4.md) → [`00b4d9a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4d9a8.md) _ZN8firebase4util3map15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4da30",
      "incomplete_value": true,
      "site": "00b4da30",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ca3c",
      "incomplete_value": true,
      "site": "00b4ca3c",
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
            "const:d40:8"
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
      "definition_site": "00b4d9dc",
      "incomplete_value": true,
      "site": "00b4d9e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cf8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4c9e8",
      "incomplete_value": true,
      "site": "00b4c9f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d38:8"
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
      "00b4d9bc",
      "READ",
      [
        "storage",
        "01125d40",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d9dc",
      "READ",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4da30",
      "WRITE",
      [
        "storage",
        "01125d40",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4d9bc",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4d9dc",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4da30",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4c9f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4c9f4 ["INT_ADD", "register:40f0:8", ["const:b4c9f4:8", "const:4:8"]]
- 00b4c9f4 ["CALLIND", null, ["register:0:8"]]
+ 00b4d9e8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4d9e8 ["INT_ADD", "register:40f0:8", ["const:b4d9e8:8", "const:4:8"]]
+ 00b4d9e8 ["CALLIND", null, ["register:0:8"]]
- 00b4ca3c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4ca3c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d40:8"]]
- 00b4ca3c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4da30 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4da30 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d00:8"]]
+ 00b4da30 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4c9c4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4d9b8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-58b03829d5491af774cefbe2f742ce91"></a>

### [`00b4ca50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4ca50.md) → [`00b4da44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4da44.md) _ZN8firebase4util3map12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4da80",
      "incomplete_value": true,
      "site": "00b4da80",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4ca8c",
      "incomplete_value": true,
      "site": "00b4ca8c",
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
            "const:d40:8"
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
      "definition_site": "00b4dad0",
      "incomplete_value": true,
      "site": "00b4dad0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cadc",
      "incomplete_value": true,
      "site": "00b4cadc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "00b4da5c",
      "incomplete_value": true,
      "site": "00b4da5c",
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
      "definition_site": "00b4ca68",
      "incomplete_value": true,
      "site": "00b4ca68",
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
      "00b4da58",
      "READ",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4da64",
      "READ",
      [
        "storage",
        "01125d40",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4da80",
      "WRITE",
      [
        "storage",
        "01125d40",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4da58",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4da64",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4da80",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4ca8c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4ca8c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4ca8c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d40:8"]]
- 00b4ca8c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4da80 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4da80 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4da80 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d00:8"]]
+ 00b4da80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4cad8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4cad8 ["INT_ADD", "register:40f0:8", ["const:b4cad8:8", "const:4:8"]]
- 00b4cad8 ["CALLIND", null, ["register:0:8"]]
+ 00b4dacc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4dacc ["INT_ADD", "register:40f0:8", ["const:b4dacc:8", "const:4:8"]]
+ 00b4dacc ["CALLIND", null, ["register:0:8"]]
- 00b4cadc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d38:8"]]
- 00b4cadc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4cadc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4dad0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
+ 00b4dad0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4dad0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-0a4db912ff617b965b8267000e02df9c"></a>

### [`00b4caf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4caf0.md) → [`00b4dae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4dae4.md) _ZN8firebase4util3map14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4db24",
      "incomplete_value": true,
      "site": "00b4db24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cb30",
      "incomplete_value": true,
      "site": "00b4cb30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "00b4db00",
      "incomplete_value": true,
      "site": "00b4db00",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cb0c",
      "incomplete_value": true,
      "site": "00b4cb0c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
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
      "site": "00b4db1c",
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
            "const:655:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cb14",
      "incomplete_value": false,
      "site": "00b4cb28",
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
            "const:57e:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
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
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4db08",
      "PARAM",
      [
        "storage",
        "002b157e",
        null,
        "string"
      ]
    ],
    [
      "00b4db24",
      "WRITE",
      [
        "storage",
        "01125d38",
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
        "01126cf8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4db08",
      "PARAM",
      [
        "storage",
        "002b1655",
        null,
        "string"
      ]
    ],
    [
      "00b4db24",
      "WRITE",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cb28 ["INT_ADD", "register:40f0:8", ["const:b4cb28:8", "const:4:8"]]
- 00b4cb28 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4db1c ["INT_ADD", "register:40f0:8", ["const:b4db1c:8", "const:4:8"]]
+ 00b4db1c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4cb30 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d38:8"]]
- 00b4cb30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4db24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
+ 00b4db24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4cafc ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4daf0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-61e8bd2a7fd8887fe42194b02cfbcbd8"></a>

### [`00b4cb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cb60.md) → [`00b4db54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4db54.md) _ZN8firebase4util3map11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b050.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c020.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4db70",
      "incomplete_value": false,
      "site": "00b4db74",
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
      "definition_site": "00b4cb7c",
      "incomplete_value": false,
      "site": "00b4cb80",
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
      "definition_site": "00b4db80",
      "incomplete_value": true,
      "site": "00b4db8c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b4cb8c",
      "incomplete_value": true,
      "site": "00b4cb98",
      "value": [
        "LOAD",
        "8",
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
      "00b4db70",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4db80",
      "DATA",
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
      "00b4db70",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4db80",
      "DATA",
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
- 00b4cb80 ["INT_ADD", "register:40f0:8", ["const:b4cb80:8", "const:4:8"]]
- 00b4cb80 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4db74 ["INT_ADD", "register:40f0:8", ["const:b4db74:8", "const:4:8"]]
+ 00b4db74 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4cb7c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4cb7c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4cb7c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4cb7c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4db70 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4db70 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4db70 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4db70 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4cb84 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4db78 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-5d32a45255c308e78c4af6cf6d53467a"></a>

### [`00b4cb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4c/00b4cb9c.md) → [`00b4db90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4d/00b4db90.md) _ZN8firebase4util3map13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5bf90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf90.md) [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `store_condition` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4dbd0",
      "incomplete_value": true,
      "site": "00b4dbd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cbdc",
      "incomplete_value": true,
      "site": "00b4cbdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "00b4dbac",
      "incomplete_value": true,
      "site": "00b4dbac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cbb8",
      "incomplete_value": true,
      "site": "00b4cbb8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b4cbb8"
      ],
      [
        "FALL_THROUGH",
        "00b4dbac"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b4dbac",
      "incomplete_value": true,
      "site": "00b4dbd0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4cbb8",
      "incomplete_value": true,
      "site": "00b4cbdc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b4dba4",
      "READ",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dbb4",
      "PARAM",
      [
        "storage",
        "002b157e",
        null,
        "string"
      ]
    ],
    [
      "00b4dbd0",
      "WRITE",
      [
        "storage",
        "01125d38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4dba4",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4dbb4",
      "PARAM",
      [
        "storage",
        "002b1655",
        null,
        "string"
      ]
    ],
    [
      "00b4dbd0",
      "WRITE",
      [
        "storage",
        "01126cf8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4cbdc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d38:8"]]
- 00b4cbdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4dbd0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
+ 00b4dbd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4cba8 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4db9c ["COPY", "register:40a0:8", ["const:1126000:8"]]
- 00b4cbb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d38:8"]]
- 00b4cbb0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4dba4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cf8:8"]]
+ 00b4dba4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


