# v16.0.2 → v16.0.3 · 最優先の変更候補 (93)

[一覧の目次](README.md)

<a id="compare-679bfe16e738d70be078bab49940d813"></a>

### [`00bc37a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc37a0.md) → [`00bc4794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4794.md) _ZN8firebase13remote_config8internal13config_update12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 82.14% / 新版 82.14%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc47d0",
      "incomplete_value": true,
      "site": "00bc47d0",
      "value": [
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
      "definition_site": "00bc37dc",
      "incomplete_value": true,
      "site": "00bc37dc",
      "value": [
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
      "definition_site": "00bc47f0",
      "incomplete_value": true,
      "site": "00bc47f0",
      "value": [
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
      "definition_site": "00bc37fc",
      "incomplete_value": true,
      "site": "00bc37fc",
      "value": [
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc47ac",
      "incomplete_value": true,
      "site": "00bc47ac",
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
      "definition_site": "00bc37b8",
      "incomplete_value": true,
      "site": "00bc37b8",
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
      "00bc47a8",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc47b4",
      "READ",
      [
        "storage",
        "01126780",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc47d0",
      "WRITE",
      [
        "storage",
        "01126780",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc47a8",
      "READ",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc47b4",
      "READ",
      [
        "storage",
        "01127740",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc47d0",
      "WRITE",
      [
        "storage",
        "01127740",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc37dc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc37dc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc37dc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:780:8"]]
- 00bc37dc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc47d0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc47d0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc47d0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:740:8"]]
+ 00bc47d0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc37f8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc37f8 ["INT_ADD", "register:40f0:8", ["const:bc37f8:8", "const:4:8"]]
- 00bc37f8 ["CALLIND", null, ["register:0:8"]]
+ 00bc47ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc47ec ["INT_ADD", "register:40f0:8", ["const:bc47ec:8", "const:4:8"]]
+ 00bc47ec ["CALLIND", null, ["register:0:8"]]
- 00bc37fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
- 00bc37fc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc37fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc47f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
+ 00bc47f0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc47f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-efe47d15b62972ad9d280979ad569c25"></a>

### [`00bc3810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3810.md) → [`00bc4804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4804.md) _ZN8firebase13remote_config8internal13config_update14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bc4844",
      "incomplete_value": true,
      "site": "00bc4844",
      "value": [
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
      "definition_site": "00bc3850",
      "incomplete_value": true,
      "site": "00bc3850",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4820",
      "incomplete_value": true,
      "site": "00bc4820",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc382c",
      "incomplete_value": true,
      "site": "00bc382c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4828",
      "incomplete_value": false,
      "site": "00bc483c",
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
            "const:166:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3834",
      "incomplete_value": false,
      "site": "00bc3848",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc4818",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4828",
      "PARAM",
      [
        "storage",
        "002bc088",
        null,
        "string"
      ]
    ],
    [
      "00bc4844",
      "WRITE",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4818",
      "READ",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4828",
      "PARAM",
      [
        "storage",
        "002bc166",
        null,
        "string"
      ]
    ],
    [
      "00bc4844",
      "WRITE",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3848 ["INT_ADD", "register:40f0:8", ["const:bc3848:8", "const:4:8"]]
- 00bc3848 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc483c ["INT_ADD", "register:40f0:8", ["const:bc483c:8", "const:4:8"]]
+ 00bc483c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3850 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
- 00bc3850 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4844 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
+ 00bc4844 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc381c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc4810 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-50f48c1a5b4e61ac606589218aa7e838"></a>

### [`00bc3880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3880.md) → [`00bc4874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4874.md) _ZN8firebase13remote_config8internal13config_update11GetMethodIdENS2_6MethodE

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
      "definition_site": "00bc4890",
      "incomplete_value": false,
      "site": "00bc4894",
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
      "definition_site": "00bc389c",
      "incomplete_value": false,
      "site": "00bc38a0",
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
      "definition_site": "00bc48a0",
      "incomplete_value": true,
      "site": "00bc48ac",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bc38ac",
      "incomplete_value": true,
      "site": "00bc38b8",
      "value": [
        "LOAD",
        "8",
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
      "00bc4890",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc48a0",
      "DATA",
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
      "00bc4890",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc48a0",
      "DATA",
      [
        "storage",
        "01127748",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc38a0 ["INT_ADD", "register:40f0:8", ["const:bc38a0:8", "const:4:8"]]
- 00bc38a0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc4894 ["INT_ADD", "register:40f0:8", ["const:bc4894:8", "const:4:8"]]
+ 00bc4894 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc389c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc389c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc389c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc389c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc4890 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc4890 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4890 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4890 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc38a4 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc4898 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-333b2cc23c2c214402f176b074fa75ab"></a>

### [`00bc38bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc38bc.md) → [`00bc48b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc48b0.md) _ZN8firebase13remote_config8internal13config_update13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bc48f0",
      "incomplete_value": true,
      "site": "00bc48f0",
      "value": [
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
      "definition_site": "00bc38fc",
      "incomplete_value": true,
      "site": "00bc38fc",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc48cc",
      "incomplete_value": true,
      "site": "00bc48cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc38d8",
      "incomplete_value": true,
      "site": "00bc38d8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc48d4",
      "incomplete_value": false,
      "site": "00bc48e8",
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
            "const:166:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc38e0",
      "incomplete_value": false,
      "site": "00bc38f4",
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
            "const:88:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc48c4",
      "READ",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc48d4",
      "PARAM",
      [
        "storage",
        "002bc088",
        null,
        "string"
      ]
    ],
    [
      "00bc48f0",
      "WRITE",
      [
        "storage",
        "01126778",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc48c4",
      "READ",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc48d4",
      "PARAM",
      [
        "storage",
        "002bc166",
        null,
        "string"
      ]
    ],
    [
      "00bc48f0",
      "WRITE",
      [
        "storage",
        "01127738",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc38f4 ["INT_ADD", "register:40f0:8", ["const:bc38f4:8", "const:4:8"]]
- 00bc38f4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc48e8 ["INT_ADD", "register:40f0:8", ["const:bc48e8:8", "const:4:8"]]
+ 00bc48e8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc38fc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:778:8"]]
- 00bc38fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc48f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:738:8"]]
+ 00bc48f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc38c8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc48bc ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-8fd7f804842062d37d3f071bea017132"></a>

### [`00bc392c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc392c.md) → [`00bc4920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4920.md) _ZN8firebase13remote_config8internal13config_update10GetFieldIdENS2_5FieldE

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
      "definition_site": "00bc493c",
      "incomplete_value": false,
      "site": "00bc4940",
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
      "definition_site": "00bc3948",
      "incomplete_value": false,
      "site": "00bc394c",
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
      "00bc493c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc494c",
      "DATA",
      [
        "storage",
        "01126790",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc493c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc494c",
      "DATA",
      [
        "storage",
        "01127750",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc394c ["INT_ADD", "register:40f0:8", ["const:bc394c:8", "const:4:8"]]
- 00bc394c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc4940 ["INT_ADD", "register:40f0:8", ["const:bc4940:8", "const:4:8"]]
+ 00bc4940 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc3948 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc3948 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3948 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3948 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc493c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc493c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc493c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc493c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc3950 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc4944 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-6d67956f16ba963c1e28ae6c9e8a4a2d"></a>

### [`00bc3968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3968.md) → [`00bc495c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc495c.md) _ZN8firebase13remote_config8internal35config_update_listener_registration19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8in

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
      "definition_site": "00bc4988",
      "incomplete_value": true,
      "site": "00bc4988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3994",
      "incomplete_value": true,
      "site": "00bc3994",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4970",
      "incomplete_value": true,
      "site": "00bc4970",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc497c",
      "incomplete_value": false,
      "site": "00bc4980",
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
            "const:92b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3988",
      "incomplete_value": false,
      "site": "00bc398c",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc496c",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc497c",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc4988",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc496c",
      "READ",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc497c",
      "PARAM",
      [
        "storage",
        "002a992b",
        null,
        "string"
      ]
    ],
    [
      "00bc4988",
      "WRITE",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc398c ["INT_ADD", "register:40f0:8", ["const:bc398c:8", "const:4:8"]]
- 00bc398c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4980 ["INT_ADD", "register:40f0:8", ["const:bc4980:8", "const:4:8"]]
+ 00bc4980 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3994 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
- 00bc3994 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4988 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
+ 00bc4988 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3974 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc4968 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-42f5db1eef3beac65b9a4a26857ccc39"></a>

### [`00bc39a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc39a8.md) → [`00bc499c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc499c.md) _ZN8firebase13remote_config8internal35config_update_listener_registration19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8in

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
      "definition_site": "00bc49c8",
      "incomplete_value": true,
      "site": "00bc49c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc49b0",
      "incomplete_value": true,
      "site": "00bc49b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc49b8",
      "incomplete_value": false,
      "site": "00bc49c0",
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
            "const:92b:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc49ac",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc49b8",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc49c8",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc49ac",
      "READ",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc49b8",
      "PARAM",
      [
        "storage",
        "002a992b",
        null,
        "string"
      ]
    ],
    [
      "00bc49c8",
      "WRITE",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc39cc ["INT_ADD", "register:40f0:8", ["const:bc39cc:8", "const:4:8"]]
- 00bc39cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc49c0 ["INT_ADD", "register:40f0:8", ["const:bc49c0:8", "const:4:8"]]
+ 00bc49c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc39d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
- 00bc39d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc49c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
+ 00bc49c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc39b4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc49a8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-79d17036835340434d00dc961c6e8e16"></a>

### [`00bc39e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc39e8.md) → [`00bc49dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc49dc.md) _ZN8firebase13remote_config8internal35config_update_listener_registration10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bc4a0c",
      "incomplete_value": true,
      "site": "00bc4a0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc49f0",
      "incomplete_value": true,
      "site": "00bc49f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc49fc",
      "incomplete_value": false,
      "site": "00bc4a04",
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
            "const:92b:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc49ec",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc49fc",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc4a0c",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc49ec",
      "READ",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc49fc",
      "PARAM",
      [
        "storage",
        "002a992b",
        null,
        "string"
      ]
    ],
    [
      "00bc4a0c",
      "WRITE",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3a10 ["INT_ADD", "register:40f0:8", ["const:bc3a10:8", "const:4:8"]]
- 00bc3a10 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4a04 ["INT_ADD", "register:40f0:8", ["const:bc4a04:8", "const:4:8"]]
+ 00bc4a04 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3a18 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
- 00bc3a18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4a0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
+ 00bc4a0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc39f4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc49e8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-ee82b7b9208bdd77932f3e39ebca1847"></a>

### [`00bc3a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3a2c.md) → [`00bc4a20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4a20.md) _ZN8firebase13remote_config8internal35config_update_listener_registration10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bc4a50",
      "incomplete_value": true,
      "site": "00bc4a50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bc4a34",
      "incomplete_value": true,
      "site": "00bc4a34",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4a3c",
      "incomplete_value": false,
      "site": "00bc4a48",
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
            "const:92b:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc4a30",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4a3c",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc4a50",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4a30",
      "READ",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4a3c",
      "PARAM",
      [
        "storage",
        "002a992b",
        null,
        "string"
      ]
    ],
    [
      "00bc4a50",
      "WRITE",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3a54 ["INT_ADD", "register:40f0:8", ["const:bc3a54:8", "const:4:8"]]
- 00bc3a54 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4a48 ["INT_ADD", "register:40f0:8", ["const:bc4a48:8", "const:4:8"]]
+ 00bc4a48 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3a5c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
- 00bc3a5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4a50 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:758:8"]]
+ 00bc4a50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3a38 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bc4a2c ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-c3f724e808f4faa189d718b1755d481b"></a>

### [`00bc3a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3a7c.md) → [`00bc4a70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4a70.md) _ZN8firebase13remote_config8internal35config_update_listener_registration15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bc4ac8",
      "incomplete_value": true,
      "site": "00bc4ac8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:760:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3ad4",
      "incomplete_value": true,
      "site": "00bc3ad4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "00bc4a84",
      "READ",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4aa4",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4ac8",
      "WRITE",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc4a84",
      "READ",
      [
        "storage",
        "01127760",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4aa4",
      "READ",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4ac8",
      "WRITE",
      [
        "storage",
        "01127760",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3ad4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bc3ad4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7a0:8"]]
- 00bc3ad4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bc4ac8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bc4ac8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:760:8"]]
+ 00bc4ac8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bc3a8c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bc4a80 ["COPY", "register:40a8:8", ["const:1127000:8"]]
- 00bc3a90 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7a0:8"]]
- 00bc3a90 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bc3a90 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bc4a84 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:760:8"]]
+ 00bc4a84 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bc4a84 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-ab45c07df4077ef5789da20b09f3bced"></a>

### [`00bc3ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3ae8.md) → [`00bc4adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4adc.md) _ZN8firebase13remote_config8internal35config_update_listener_registration12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc4b18",
      "incomplete_value": true,
      "site": "00bc4b18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:760:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3b24",
      "incomplete_value": true,
      "site": "00bc3b24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7a0:8"
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
      "definition_site": "00bc4b38",
      "incomplete_value": true,
      "site": "00bc4b38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3b44",
      "incomplete_value": true,
      "site": "00bc3b44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:798:8"
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
      "definition_site": "00bc4af4",
      "incomplete_value": true,
      "site": "00bc4af4",
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
      "00bc4af0",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4afc",
      "READ",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4b18",
      "WRITE",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bc4af0",
      "READ",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4afc",
      "READ",
      [
        "storage",
        "01127760",
        null,
        "undefined1"
      ]
    ],
    [
      "00bc4b18",
      "WRITE",
      [
        "storage",
        "01127760",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3b24 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bc3b24 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bc3b24 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7a0:8"]]
- 00bc3b24 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bc4b18 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bc4b18 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bc4b18 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:760:8"]]
+ 00bc4b18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bc3b44 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:798:8"]]
- 00bc3b44 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc3b44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc4b38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:758:8"]]
+ 00bc4b38 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc4b38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00bc3af8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc4aec ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-1b23ed8bfb716d83a99853b443b39e12"></a>

### [`00bc3b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3b58.md) → [`00bc4b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4b4c.md) _ZN8firebase13remote_config8internal35config_update_listener_registration14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bc4b8c",
      "incomplete_value": true,
      "site": "00bc4b8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3b98",
      "incomplete_value": true,
      "site": "00bc3b98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:798:8"
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
      "definition_site": "00bc4b68",
      "incomplete_value": true,
      "site": "00bc4b68",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3b74",
      "incomplete_value": true,
      "site": "00bc3b74",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc4b70",
      "incomplete_value": false,
      "site": "00bc4b84",
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
            "const:92b:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc4b60",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4b70",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc4b8c",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4b60",
      "READ",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4b70",
      "PARAM",
      [
        "storage",
        "002a992b",
        null,
        "string"
      ]
    ],
    [
      "00bc4b8c",
      "WRITE",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3b90 ["INT_ADD", "register:40f0:8", ["const:bc3b90:8", "const:4:8"]]
- 00bc3b90 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4b84 ["INT_ADD", "register:40f0:8", ["const:bc4b84:8", "const:4:8"]]
+ 00bc4b84 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3b98 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:798:8"]]
- 00bc3b98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4b8c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:758:8"]]
+ 00bc4b8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3b64 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc4b58 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-7bd22e3d5f33e2f4f79e1923bab78b94"></a>

### [`00bc3bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3bc8.md) → [`00bc4bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4bbc.md) _ZN8firebase13remote_config8internal35config_update_listener_registration11GetMethodIdENS2_6MethodE

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
      "definition_site": "00bc4bd8",
      "incomplete_value": false,
      "site": "00bc4bdc",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bc4be8",
      "incomplete_value": true,
      "site": "00bc4bf4",
      "value": [
        "LOAD",
        "8",
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
      "00bc4bd8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bc4be8",
      "DATA",
      [
        "storage",
        "011267a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4bd8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bc4be8",
      "DATA",
      [
        "storage",
        "01127768",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3be8 ["INT_ADD", "register:40f0:8", ["const:bc3be8:8", "const:4:8"]]
- 00bc3be8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc4bdc ["INT_ADD", "register:40f0:8", ["const:bc4bdc:8", "const:4:8"]]
+ 00bc4bdc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc3be4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bc3be4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3be4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3be4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc4bd8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bc4bd8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4bd8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4bd8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc3bec ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc4be0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-3570314049f3dea69a197dbd932df0e9"></a>

### [`00bc3c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3c04.md) → [`00bc4bf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4bf8.md) _ZN8firebase13remote_config8internal35config_update_listener_registration13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bc4c38",
      "incomplete_value": true,
      "site": "00bc4c38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:758:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc3c44",
      "incomplete_value": true,
      "site": "00bc3c44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:798:8"
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
      "definition_site": "00bc4c1c",
      "incomplete_value": false,
      "site": "00bc4c30",
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
            "const:92b:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bc4c0c",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4c1c",
      "PARAM",
      [
        "storage",
        "002a985e",
        null,
        "string"
      ]
    ],
    [
      "00bc4c38",
      "WRITE",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc4c0c",
      "READ",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc4c1c",
      "PARAM",
      [
        "storage",
        "002a992b",
        null,
        "string"
      ]
    ],
    [
      "00bc4c38",
      "WRITE",
      [
        "storage",
        "01127758",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3c3c ["INT_ADD", "register:40f0:8", ["const:bc3c3c:8", "const:4:8"]]
- 00bc3c3c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bc4c30 ["INT_ADD", "register:40f0:8", ["const:bc4c30:8", "const:4:8"]]
+ 00bc4c30 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bc3c44 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:798:8"]]
- 00bc3c44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bc4c38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:758:8"]]
+ 00bc4c38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bc3c10 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bc4c04 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-fd9331f85a86fd86bb07e55bc889bd6b"></a>

### [`00bc3c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3c74.md) → [`00bc4c68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4c68.md) _ZN8firebase13remote_config8internal35config_update_listener_registration10GetFieldIdENS2_5FieldE

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
      "definition_site": "00bc4c84",
      "incomplete_value": false,
      "site": "00bc4c88",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bc4c94",
      "incomplete_value": true,
      "site": "00bc4ca0",
      "value": [
        "LOAD",
        "8",
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
      "00bc4c84",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bc4c94",
      "DATA",
      [
        "storage",
        "011267b0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc4c84",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bc4c94",
      "DATA",
      [
        "storage",
        "01127770",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3c94 ["INT_ADD", "register:40f0:8", ["const:bc3c94:8", "const:4:8"]]
- 00bc3c94 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bc4c88 ["INT_ADD", "register:40f0:8", ["const:bc4c88:8", "const:4:8"]]
+ 00bc4c88 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc3c90 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bc3c90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3c90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bc3c90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bc4c84 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bc4c84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4c84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bc4c84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bc3c98 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bc4c8c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-28d3168bcb89d7038eda38d9c026bb93"></a>

### [`00bc3cb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc3/00bc3cb8.md) → [`00bc4cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc4/00bc4cac.md) _ZN8firebase13remote_config8internal20RemoteConfigInternalC1ERKNS_3AppE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d940.md) · 呼出先 22件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)
- 新版 呼出元 1件 [`00c5e910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e910.md) · 呼出先 22件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md)

変更の種類 branch_value, call_argument_candidate, constant, control_flow, operands_and_dependencies, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 57.89% / 新版 57.89%

優先判定に残った影響 `call_argument_candidate` 33件, `store_destination` 1件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 25件, `unresolved_store_alignment` 20件

アドレスに依存する影響 `branch_value` 5件, `call_argument_candidate` 7件, `store_condition` 2件, `store_destination` 8件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc4d34",
      "incomplete_value": true,
      "site": "00bc4d34",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc4d34",
      "incomplete_value": true,
      "site": "00bc4d34",
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc4e38",
      "incomplete_value": true,
      "site": "00bc4e50",
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
      "00bc4d14",
      "READ",
      [
        "storage",
        "00c9ba48",
        null,
        "pointer"
      ]
    ],
    [
      "00bc4d34",
      "DATA",
      [
        "storage",
        "011267b8",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ],
    [
      "00bc4d34",
      "DATA",
      [
        "storage",
        "011267bc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc4d14",
      "READ",
      [
        "storage",
        "00c9ca18",
        null,
        "pointer"
      ]
    ],
    [
      "00bc4d34",
      "DATA",
      [
        "storage",
        "01127778",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ],
    [
      "00bc4d34",
      "DATA",
      [
        "storage",
        "0112777c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc3d48 ["INT_ADD", "register:40f0:8", ["const:bc3d48:8", "const:4:8"]]
- 00bc3d48 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc4d3c ["INT_ADD", "register:40f0:8", ["const:bc4d3c:8", "const:4:8"]]
+ 00bc4d3c ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc3d70 ["INT_ADD", "register:40f0:8", ["const:bc3d70:8", "const:4:8"]]
- 00bc3d70 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00bc4d64 ["INT_ADD", "register:40f0:8", ["const:bc4d64:8", "const:4:8"]]
+ 00bc4d64 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00bc3d84 ["INT_ADD", "register:40f0:8", ["const:bc3d84:8", "const:4:8"]]
- 00bc3d84 ["CALL", null, ["callee:00c5ce00:8"]]
+ 00bc4d78 ["INT_ADD", "register:40f0:8", ["const:bc4d78:8", "const:4:8"]]
+ 00bc4d78 ["CALL", null, ["callee:00c5ce00:8"]]
~~~


<a id="compare-03219727b5f27b5a9e97f314e6dbde24"></a>

### [`00bc4bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4bd8.md) → [`00bc5bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5bcc.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal7CleanupEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d8d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8d0.md) · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0a0.md)
- 新版 呼出元 1件 [`00c5e8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e8a0.md) · 呼出先 7件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c070.md)

変更の種類 branch_value, call_argument_candidate, constant, control_flow, operands_and_dependencies, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 45.19% / 新版 45.19%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 2件, `store_value` 2件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 20件, `unresolved_store_alignment` 14件

アドレスに依存する影響 `branch_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc5c00",
      "incomplete_value": true,
      "site": "00bc5c00",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bc5c00",
      "incomplete_value": true,
      "site": "00bc5c00",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bc5cec",
      "incomplete_value": true,
      "site": "00bc5cec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:538:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc4cf8",
      "incomplete_value": true,
      "site": "00bc4cf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:578:8"
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
      "00bc5bec",
      "READ",
      [
        "storage",
        "00c9ba48",
        null,
        "pointer"
      ]
    ],
    [
      "00bc5bfc",
      "PARAM",
      [
        "storage",
        "011267bc",
        null,
        null
      ]
    ],
    [
      "00bc5c00",
      "DATA",
      [
        "storage",
        "011267b8",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00bc5bec",
      "READ",
      [
        "storage",
        "00c9ca18",
        null,
        "pointer"
      ]
    ],
    [
      "00bc5bfc",
      "PARAM",
      [
        "storage",
        "0112777c",
        null,
        null
      ]
    ],
    [
      "00bc5c00",
      "DATA",
      [
        "storage",
        "01127778",
        "firebase::remote_config::internal::RemoteConfigInternal::initializer_",
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc4c10 ["INT_ADD", "register:40f0:8", ["const:bc4c10:8", "const:4:8"]]
- 00bc4c10 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bc5c04 ["INT_ADD", "register:40f0:8", ["const:bc5c04:8", "const:4:8"]]
+ 00bc5c04 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc4cf4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc4cf4 ["INT_ADD", "register:40f0:8", ["const:bc4cf4:8", "const:4:8"]]
- 00bc4cf4 ["CALLIND", null, ["register:0:8"]]
+ 00bc5ce8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc5ce8 ["INT_ADD", "register:40f0:8", ["const:bc5ce8:8", "const:4:8"]]
+ 00bc5ce8 ["CALLIND", null, ["register:0:8"]]
- 00bc4cf8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:578:8"]]
- 00bc4cf8 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bc4cf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bc5cec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:538:8"]]
+ 00bc5cec ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bc5cec ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-67f0362b4c8d035a5e8c29404e56464d"></a>

### [`00bc50f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc50f8.md) → [`00bc60ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc60ec.md) FUN_00bc60ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00bc4fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4fc8.md) [`00bc9210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9210.md) · 呼出先 4件 [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 2件 [`00bc5fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5fbc.md) [`00bca204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bca204.md) · 呼出先 4件 [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`0058f8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f8fc.md) [`00c5be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be80.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 83.67% / 新版 83.67%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6108",
      "incomplete_value": true,
      "site": "00bc6118",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:628:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6124",
      "incomplete_value": true,
      "site": "00bc6130",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:638:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6188",
      "incomplete_value": false,
      "site": "00bc618c",
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
            "const:ccb:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc6108",
      "READ",
      [
        "storage",
        "01126668",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc6124",
      "READ",
      [
        "storage",
        "01126678",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc6144",
      "READ",
      [
        "storage",
        "01126680",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc6108",
      "READ",
      [
        "storage",
        "01127628",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc6124",
      "READ",
      [
        "storage",
        "01127638",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc6144",
      "READ",
      [
        "storage",
        "01127640",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc5124 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc5124 ["INT_ADD", "register:40f0:8", ["const:bc5124:8", "const:4:8"]]
- 00bc5124 ["CALLIND", null, ["register:0:8"]]
+ 00bc6118 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc6118 ["INT_ADD", "register:40f0:8", ["const:bc6118:8", "const:4:8"]]
+ 00bc6118 ["CALLIND", null, ["register:0:8"]]
- 00bc513c ["INT_ADD", "register:40f0:8", ["const:bc513c:8", "const:4:8"]]
- 00bc513c ["CALL", null, ["callee:0058f8fc:8"]]
+ 00bc6130 ["INT_ADD", "register:40f0:8", ["const:bc6130:8", "const:4:8"]]
+ 00bc6130 ["CALL", null, ["callee:0058f8fc:8"]]
- 00bc5198 ["INT_ADD", "register:40f0:8", ["const:bc5198:8", "const:4:8"]]
- 00bc5198 ["CALL", null, ["callee:00c5be80:8"]]
+ 00bc618c ["INT_ADD", "register:40f0:8", ["const:bc618c:8", "const:4:8"]]
+ 00bc618c ["CALL", null, ["callee:00c5be80:8"]]
~~~


<a id="compare-dbb35b1c91125a048cbee79112c75675"></a>

### [`00bc5770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5770.md) → [`00bc6764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6764.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal17EnsureInitializedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d810.md) · 呼出先 15件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc4fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc4fc8.md) [`00bc9cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9cb0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e7e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e7e0.md) · 呼出先 15件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bc5fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5fbc.md) [`00bcaca4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcaca4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00bc67a8",
      "incomplete_value": true,
      "site": "00bc67bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc67e4",
      "incomplete_value": true,
      "site": "00bc67ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:550:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6810",
      "incomplete_value": false,
      "site": "00bc6824",
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
            "const:efb:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc67a8",
      "READ",
      [
        "storage",
        "00c9ba58",
        null,
        "pointer"
      ]
    ],
    [
      "00bc67a8",
      "PARAM",
      [
        "storage",
        "00bc9cb0",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::remote_config::ConfigInfo>",
        null
      ]
    ],
    [
      "00bc67e4",
      "READ",
      [
        "storage",
        "01126590",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc67a8",
      "READ",
      [
        "storage",
        "00c9ca28",
        null,
        "pointer"
      ]
    ],
    [
      "00bc67a8",
      "PARAM",
      [
        "storage",
        "00bcaca4",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::remote_config::ConfigInfo>",
        null
      ]
    ],
    [
      "00bc67e4",
      "READ",
      [
        "storage",
        "01127550",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc57c8 ["INT_ADD", "register:40f0:8", ["const:bc57c8:8", "const:4:8"]]
- 00bc57c8 ["CALL", null, ["callee:00c5bee0:8"]]
+ 00bc67bc ["INT_ADD", "register:40f0:8", ["const:bc67bc:8", "const:4:8"]]
+ 00bc67bc ["CALL", null, ["callee:00c5bee0:8"]]
- 00bc57f8 ["INT_ADD", "register:40f0:8", ["const:bc57f8:8", "const:4:8"]]
- 00bc57f8 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc67ec ["INT_ADD", "register:40f0:8", ["const:bc67ec:8", "const:4:8"]]
+ 00bc67ec ["CALL", null, ["callee:00497b94:8"]]
- 00bc5830 ["INT_ADD", "register:40f0:8", ["const:bc5830:8", "const:4:8"]]
- 00bc5830 ["CALL", null, ["callee:00c5e990:8"]]
+ 00bc6824 ["INT_ADD", "register:40f0:8", ["const:bc6824:8", "const:4:8"]]
+ 00bc6824 ["CALL", null, ["callee:00c5e990:8"]]
~~~


<a id="compare-571508d6508221810cae566cfbbe54a1"></a>

### [`00bc5a9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5a9c.md) → [`00bc6a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6a90.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal8ActivateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d910.md) · 呼出先 15件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc51bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc51bc.md) [`00bc9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9e64.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e8e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e8e0.md) · 呼出先 15件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bc61b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc61b0.md) [`00bcae58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcae58.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00bc6ad4",
      "incomplete_value": true,
      "site": "00bc6ae8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6b10",
      "incomplete_value": true,
      "site": "00bc6b18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:558:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6b3c",
      "incomplete_value": false,
      "site": "00bc6b50",
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
            "const:f23:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc6ad4",
      "READ",
      [
        "storage",
        "00c9ba60",
        null,
        "pointer"
      ]
    ],
    [
      "00bc6ad4",
      "PARAM",
      [
        "storage",
        "00bc9e64",
        "firebase::ReferenceCountedFutureImpl::DeleteT<bool>",
        null
      ]
    ],
    [
      "00bc6b10",
      "READ",
      [
        "storage",
        "01126598",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc6ad4",
      "READ",
      [
        "storage",
        "00c9ca30",
        null,
        "pointer"
      ]
    ],
    [
      "00bc6ad4",
      "PARAM",
      [
        "storage",
        "00bcae58",
        "firebase::ReferenceCountedFutureImpl::DeleteT<bool>",
        null
      ]
    ],
    [
      "00bc6b10",
      "READ",
      [
        "storage",
        "01127558",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc5af4 ["INT_ADD", "register:40f0:8", ["const:bc5af4:8", "const:4:8"]]
- 00bc5af4 ["CALL", null, ["callee:00c5bee0:8"]]
+ 00bc6ae8 ["INT_ADD", "register:40f0:8", ["const:bc6ae8:8", "const:4:8"]]
+ 00bc6ae8 ["CALL", null, ["callee:00c5bee0:8"]]
- 00bc5b24 ["INT_ADD", "register:40f0:8", ["const:bc5b24:8", "const:4:8"]]
- 00bc5b24 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc6b18 ["INT_ADD", "register:40f0:8", ["const:bc6b18:8", "const:4:8"]]
+ 00bc6b18 ["CALL", null, ["callee:00497b94:8"]]
- 00bc5b5c ["INT_ADD", "register:40f0:8", ["const:bc5b5c:8", "const:4:8"]]
- 00bc5b5c ["CALL", null, ["callee:00c5e9a0:8"]]
+ 00bc6b50 ["INT_ADD", "register:40f0:8", ["const:bc6b50:8", "const:4:8"]]
+ 00bc6b50 ["CALL", null, ["callee:00c5e9a0:8"]]
~~~


<a id="compare-4b435b49ac61142085f59351a6ad10b1"></a>

### [`00bc5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5dc8.md) → [`00bc6dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6dbc.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal16FetchAndActivateEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7f0.md) · 呼出先 15件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc51bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc51bc.md) [`00bc9e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9e64.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e7c0.md) · 呼出先 15件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bc61b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc61b0.md) [`00bcae58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcae58.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00bc6e00",
      "incomplete_value": true,
      "site": "00bc6e14",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6e3c",
      "incomplete_value": true,
      "site": "00bc6e44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:560:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc6e68",
      "incomplete_value": false,
      "site": "00bc6e7c",
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
            "const:8a0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc6e00",
      "READ",
      [
        "storage",
        "00c9ba60",
        null,
        "pointer"
      ]
    ],
    [
      "00bc6e00",
      "PARAM",
      [
        "storage",
        "00bc9e64",
        "firebase::ReferenceCountedFutureImpl::DeleteT<bool>",
        null
      ]
    ],
    [
      "00bc6e3c",
      "READ",
      [
        "storage",
        "011265a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc6e00",
      "READ",
      [
        "storage",
        "00c9ca30",
        null,
        "pointer"
      ]
    ],
    [
      "00bc6e00",
      "PARAM",
      [
        "storage",
        "00bcae58",
        "firebase::ReferenceCountedFutureImpl::DeleteT<bool>",
        null
      ]
    ],
    [
      "00bc6e3c",
      "READ",
      [
        "storage",
        "01127560",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc5e20 ["INT_ADD", "register:40f0:8", ["const:bc5e20:8", "const:4:8"]]
- 00bc5e20 ["CALL", null, ["callee:00c5bee0:8"]]
+ 00bc6e14 ["INT_ADD", "register:40f0:8", ["const:bc6e14:8", "const:4:8"]]
+ 00bc6e14 ["CALL", null, ["callee:00c5bee0:8"]]
- 00bc5e50 ["INT_ADD", "register:40f0:8", ["const:bc5e50:8", "const:4:8"]]
- 00bc5e50 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc6e44 ["INT_ADD", "register:40f0:8", ["const:bc6e44:8", "const:4:8"]]
+ 00bc6e44 ["CALL", null, ["callee:00497b94:8"]]
- 00bc5e88 ["INT_ADD", "register:40f0:8", ["const:bc5e88:8", "const:4:8"]]
- 00bc5e88 ["CALL", null, ["callee:00c5e9a0:8"]]
+ 00bc6e7c ["INT_ADD", "register:40f0:8", ["const:bc6e7c:8", "const:4:8"]]
+ 00bc6e7c ["CALL", null, ["callee:00c5e9a0:8"]]
~~~


<a id="compare-9e4672dae5a01d62f2e0a22d6c18867c"></a>

### [`00bc60f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc60f4.md) → [`00bc70e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc70e8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal5FetchEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8b0.md) · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc53f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc53f4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5e880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e880.md) · 呼出先 14件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bc63e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc63e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

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
      "definition_site": "00bc7160",
      "incomplete_value": true,
      "site": "00bc716c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc7190",
      "incomplete_value": false,
      "site": "00bc71a4",
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
            "const:4bb:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc7260",
      "incomplete_value": true,
      "site": "00bc7270",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bc7160",
      "READ",
      [
        "storage",
        "01126608",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7190",
      "PARAM",
      [
        "storage",
        "002a7363",
        null,
        "string"
      ]
    ],
    [
      "00bc7260",
      "READ",
      [
        "storage",
        "00c9ba28",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bc7160",
      "READ",
      [
        "storage",
        "011275c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7190",
      "PARAM",
      [
        "storage",
        "002a74bb",
        null,
        "string"
      ]
    ],
    [
      "00bc7260",
      "READ",
      [
        "storage",
        "00c9c9f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc6178 ["INT_ADD", "register:40f0:8", ["const:bc6178:8", "const:4:8"]]
- 00bc6178 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc716c ["INT_ADD", "register:40f0:8", ["const:bc716c:8", "const:4:8"]]
+ 00bc716c ["CALL", null, ["callee:00497b94:8"]]
- 00bc61b0 ["INT_ADD", "register:40f0:8", ["const:bc61b0:8", "const:4:8"]]
- 00bc61b0 ["CALL", null, ["callee:00c5be40:8"]]
+ 00bc71a4 ["INT_ADD", "register:40f0:8", ["const:bc71a4:8", "const:4:8"]]
+ 00bc71a4 ["CALL", null, ["callee:00c5be40:8"]]
- 00bc627c ["INT_ADD", "register:40f0:8", ["const:bc627c:8", "const:4:8"]]
- 00bc627c ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00bc7270 ["INT_ADD", "register:40f0:8", ["const:bc7270:8", "const:4:8"]]
+ 00bc7270 ["CALL", null, ["callee:00c5bfe0:8"]]
~~~


<a id="compare-789a7a421478c3bc1d528883fd3fc87c"></a>

### [`00bc641c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc641c.md) → [`00bc7410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc7410.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal11SetDefaultsEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7c0.md) · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5474.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00c5e790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e790.md) · 呼出先 14件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bc6468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6468.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

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
      "definition_site": "00bc7488",
      "incomplete_value": true,
      "site": "00bc7494",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:568:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc74b8",
      "incomplete_value": false,
      "site": "00bc74cc",
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
            "const:c45:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc7588",
      "incomplete_value": true,
      "site": "00bc7598",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bc7488",
      "READ",
      [
        "storage",
        "011265a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc74b8",
      "PARAM",
      [
        "storage",
        "002c0bfb",
        null,
        "string"
      ]
    ],
    [
      "00bc7588",
      "READ",
      [
        "storage",
        "00c9ba38",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bc7488",
      "READ",
      [
        "storage",
        "01127568",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc74b8",
      "PARAM",
      [
        "storage",
        "002c0c45",
        null,
        "string"
      ]
    ],
    [
      "00bc7588",
      "READ",
      [
        "storage",
        "00c9ca08",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc64a0 ["INT_ADD", "register:40f0:8", ["const:bc64a0:8", "const:4:8"]]
- 00bc64a0 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc7494 ["INT_ADD", "register:40f0:8", ["const:bc7494:8", "const:4:8"]]
+ 00bc7494 ["CALL", null, ["callee:00497b94:8"]]
- 00bc64d8 ["INT_ADD", "register:40f0:8", ["const:bc64d8:8", "const:4:8"]]
- 00bc64d8 ["CALL", null, ["callee:00c5be40:8"]]
+ 00bc74cc ["INT_ADD", "register:40f0:8", ["const:bc74cc:8", "const:4:8"]]
+ 00bc74cc ["CALL", null, ["callee:00c5be40:8"]]
- 00bc65a4 ["INT_ADD", "register:40f0:8", ["const:bc65a4:8", "const:4:8"]]
- 00bc65a4 ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00bc7598 ["INT_ADD", "register:40f0:8", ["const:bc7598:8", "const:4:8"]]
+ 00bc7598 ["CALL", null, ["callee:00c5bfe0:8"]]
~~~


<a id="compare-c4986e479e8dd223017f818bed58b413"></a>

### [`00bc66b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc66b4.md) → [`00bc76a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc76a8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal11SetDefaultsEPKNS0_21ConfigKeyValueVariantEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7b0.md) · 呼出先 33件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5474.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e780`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e780.md) · 呼出先 33件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00bc6468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6468.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00bc797c",
      "incomplete_value": false,
      "site": "00bc7980",
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
            "const:912:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 30,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc7a88",
      "incomplete_value": true,
      "site": "00bc7a94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:570:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 41,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc7abc",
      "incomplete_value": false,
      "site": "00bc7ad0",
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
            "const:c45:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc77a0",
      "DATA",
      [
        "storage",
        "0030e9da",
        "switchD_00bc67b4::switchdataD_0030e9da",
        "byte"
      ]
    ],
    [
      "00bc797c",
      "PARAM",
      [
        "storage",
        "002a87ba",
        null,
        "string"
      ]
    ],
    [
      "00bc7a88",
      "READ",
      [
        "storage",
        "011265b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc77a0",
      "DATA",
      [
        "storage",
        "0030ea1a",
        "switchD_00bc77a8::switchdataD_0030ea1a",
        "byte"
      ]
    ],
    [
      "00bc797c",
      "PARAM",
      [
        "storage",
        "002a8912",
        null,
        "string"
      ]
    ],
    [
      "00bc7a88",
      "READ",
      [
        "storage",
        "01127570",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc698c ["INT_ADD", "register:40f0:8", ["const:bc698c:8", "const:4:8"]]
- 00bc698c ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bc7980 ["INT_ADD", "register:40f0:8", ["const:bc7980:8", "const:4:8"]]
+ 00bc7980 ["CALL", null, ["callee:00c5bd40:8"]]
- 00bc6aa0 ["INT_ADD", "register:40f0:8", ["const:bc6aa0:8", "const:4:8"]]
- 00bc6aa0 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc7a94 ["INT_ADD", "register:40f0:8", ["const:bc7a94:8", "const:4:8"]]
+ 00bc7a94 ["CALL", null, ["callee:00497b94:8"]]
- 00bc6adc ["INT_ADD", "register:40f0:8", ["const:bc6adc:8", "const:4:8"]]
- 00bc6adc ["CALL", null, ["callee:00c5be40:8"]]
+ 00bc7ad0 ["INT_ADD", "register:40f0:8", ["const:bc7ad0:8", "const:4:8"]]
+ 00bc7ad0 ["CALL", null, ["callee:00c5be40:8"]]
~~~


<a id="compare-e23af2aaac11ad7749b7bb564f950e26"></a>

### [`00bc6dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc6/00bc6dc8.md) → [`00bc7dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc7/00bc7dbc.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal11SetDefaultsEPKNS0_14ConfigKeyValueEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d7a0.md) · 呼出先 21件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc5474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc5474.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e770.md) · 呼出先 21件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00bc6468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc6468.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00bc7fb0",
      "incomplete_value": true,
      "site": "00bc7fbc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:570:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 19,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc7fe4",
      "incomplete_value": false,
      "site": "00bc7ff8",
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
            "const:c45:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 22,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc80b8",
      "incomplete_value": true,
      "site": "00bc80c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bc7fb0",
      "READ",
      [
        "storage",
        "011265b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7fe4",
      "PARAM",
      [
        "storage",
        "002c0bfb",
        null,
        "string"
      ]
    ],
    [
      "00bc80b8",
      "READ",
      [
        "storage",
        "00c9ba38",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bc7fb0",
      "READ",
      [
        "storage",
        "01127570",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc7fe4",
      "PARAM",
      [
        "storage",
        "002c0c45",
        null,
        "string"
      ]
    ],
    [
      "00bc80b8",
      "READ",
      [
        "storage",
        "00c9ca08",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc6fc8 ["INT_ADD", "register:40f0:8", ["const:bc6fc8:8", "const:4:8"]]
- 00bc6fc8 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc7fbc ["INT_ADD", "register:40f0:8", ["const:bc7fbc:8", "const:4:8"]]
+ 00bc7fbc ["CALL", null, ["callee:00497b94:8"]]
- 00bc7004 ["INT_ADD", "register:40f0:8", ["const:bc7004:8", "const:4:8"]]
- 00bc7004 ["CALL", null, ["callee:00c5be40:8"]]
+ 00bc7ff8 ["INT_ADD", "register:40f0:8", ["const:bc7ff8:8", "const:4:8"]]
+ 00bc7ff8 ["CALL", null, ["callee:00c5be40:8"]]
- 00bc70d4 ["INT_ADD", "register:40f0:8", ["const:bc70d4:8", "const:4:8"]]
- 00bc70d4 ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00bc80c8 ["INT_ADD", "register:40f0:8", ["const:bc80c8:8", "const:4:8"]]
+ 00bc80c8 ["CALL", null, ["callee:00c5bfe0:8"]]
~~~


<a id="compare-6f3f3194daeadfb73b06f698b7178d0d"></a>

### [`00bc7384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7384.md) → [`00bc8378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc8378.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal17SetConfigSettingsENS0_14ConfigSettingsE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d830.md) · 呼出先 15件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc52ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc52ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e800`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e800.md) · 呼出先 15件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00bc62e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc62e0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00bc83f4",
      "incomplete_value": true,
      "site": "00bc8400",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:680:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc83f8",
      "incomplete_value": true,
      "site": "00bc8400",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:690:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8414",
      "incomplete_value": true,
      "site": "00bc8434",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bc83f4",
      "READ",
      [
        "storage",
        "011266c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc83f8",
      "READ",
      [
        "storage",
        "011266d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8414",
      "READ",
      [
        "storage",
        "011266e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc83f4",
      "READ",
      [
        "storage",
        "01127680",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc83f8",
      "READ",
      [
        "storage",
        "01127690",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8414",
      "READ",
      [
        "storage",
        "011276a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc740c ["INT_ADD", "register:40f0:8", ["const:bc740c:8", "const:4:8"]]
- 00bc740c ["CALL", null, ["callee:00589a54:8"]]
+ 00bc8400 ["INT_ADD", "register:40f0:8", ["const:bc8400:8", "const:4:8"]]
+ 00bc8400 ["CALL", null, ["callee:00589a54:8"]]
- 00bc7440 ["INT_ADD", "register:40f0:8", ["const:bc7440:8", "const:4:8"]]
- 00bc7440 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc8434 ["INT_ADD", "register:40f0:8", ["const:bc8434:8", "const:4:8"]]
+ 00bc8434 ["CALL", null, ["callee:00497b94:8"]]
- 00bc7468 ["INT_ADD", "register:40f0:8", ["const:bc7468:8", "const:4:8"]]
- 00bc7468 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc845c ["INT_ADD", "register:40f0:8", ["const:bc845c:8", "const:4:8"]]
+ 00bc845c ["CALL", null, ["callee:00497b94:8"]]
~~~


<a id="compare-1444d01500818031ef947a4a37e14e57"></a>

### [`00bc77d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc77d8.md) → [`00bc87cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc87cc.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal16SetCustomSignalsERKNSt6__ndk13mapINS3_12basic_stringIcNS3_11char_traitsIcEENS3_9

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d800.md) · 呼出先 18件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc52ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc5/00bc52ec.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5e7d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e7d0.md) · 呼出先 18件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00bc62e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc6/00bc62e0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.43% / 新版 98.43%

優先判定に残った影響 `call_argument_candidate` 5件

アドレスに依存する影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8844",
      "incomplete_value": true,
      "site": "00bc8850",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8848",
      "incomplete_value": true,
      "site": "00bc8850",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8934",
      "incomplete_value": true,
      "site": "00bc8948",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bc7940",
      "incomplete_value": true,
      "site": "00bc7954",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:710:8"
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
      "00bc8844",
      "READ",
      [
        "storage",
        "011266f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8848",
      "READ",
      [
        "storage",
        "01126708",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc88e8",
      "DATA",
      [
        "storage",
        "0030e9e4",
        "switchD_00bc78fc::switchdataD_0030e9e4",
        "byte"
      ]
    ]
  ],
  "added": [
    [
      "00bc8844",
      "READ",
      [
        "storage",
        "011276b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8848",
      "READ",
      [
        "storage",
        "011276c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc88e8",
      "DATA",
      [
        "storage",
        "0030ea24",
        "switchD_00bc88f0::switchdataD_0030ea24",
        "byte"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc785c ["INT_ADD", "register:40f0:8", ["const:bc785c:8", "const:4:8"]]
- 00bc785c ["CALL", null, ["callee:00589a54:8"]]
+ 00bc8850 ["INT_ADD", "register:40f0:8", ["const:bc8850:8", "const:4:8"]]
+ 00bc8850 ["CALL", null, ["callee:00589a54:8"]]
- 00bc7954 ["INT_ADD", "register:40f0:8", ["const:bc7954:8", "const:4:8"]]
- 00bc7954 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc8948 ["INT_ADD", "register:40f0:8", ["const:bc8948:8", "const:4:8"]]
+ 00bc8948 ["CALL", null, ["callee:00497b94:8"]]
- 00bc7a04 ["INT_ADD", "register:40f0:8", ["const:bc7a04:8", "const:4:8"]]
- 00bc7a04 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc89f8 ["INT_ADD", "register:40f0:8", ["const:bc89f8:8", "const:4:8"]]
+ 00bc89f8 ["CALL", null, ["callee:00497b94:8"]]
~~~


<a id="compare-c3d63a25814fbcdd2bfe109252b7ce9f"></a>

### [`00bc7f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc7/00bc7f20.md) → [`00bc8f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc8f14.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal17GetConfigSettingsEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d820.md) · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00c5e7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e7f0.md) · 呼出先 4件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`0058f8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f8fc.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

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
      "definition_site": "00bc8f3c",
      "incomplete_value": true,
      "site": "00bc8f44",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8f58",
      "incomplete_value": true,
      "site": "00bc8f64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:648:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc8f7c",
      "incomplete_value": true,
      "site": "00bc8f88",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:668:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bc8f3c",
      "READ",
      [
        "storage",
        "01126600",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8f58",
      "READ",
      [
        "storage",
        "01126688",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8f7c",
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
      "00bc8f3c",
      "READ",
      [
        "storage",
        "011275c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8f58",
      "READ",
      [
        "storage",
        "01127648",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc8f7c",
      "READ",
      [
        "storage",
        "01127668",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc7f50 ["INT_ADD", "register:40f0:8", ["const:bc7f50:8", "const:4:8"]]
- 00bc7f50 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc8f44 ["INT_ADD", "register:40f0:8", ["const:bc8f44:8", "const:4:8"]]
+ 00bc8f44 ["CALL", null, ["callee:00497b94:8"]]
- 00bc7f70 ["INT_ADD", "register:40f0:8", ["const:bc7f70:8", "const:4:8"]]
- 00bc7f70 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc8f64 ["INT_ADD", "register:40f0:8", ["const:bc8f64:8", "const:4:8"]]
+ 00bc8f64 ["CALL", null, ["callee:00497b94:8"]]
- 00bc7f94 ["INT_ADD", "register:40f0:8", ["const:bc7f94:8", "const:4:8"]]
- 00bc7f94 ["CALL", null, ["callee:0058f8fc:8"]]
+ 00bc8f88 ["INT_ADD", "register:40f0:8", ["const:bc8f88:8", "const:4:8"]]
+ 00bc8f88 ["CALL", null, ["callee:0058f8fc:8"]]
~~~


<a id="compare-95af459eebbb8caf9d22b81c8f1f5043"></a>

### [`00bc8008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8008.md) → [`00bc8ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc8ffc.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal10GetBooleanEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d790.md) · 呼出先 4件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00c5e760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e760.md) · 呼出先 4件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`00bc90f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc90f0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

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
      "definition_site": "00bc9040",
      "incomplete_value": true,
      "site": "00bc9050",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:610:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9098",
      "incomplete_value": false,
      "site": "00bc90a4",
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
            "const:cc9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc909c",
      "incomplete_value": false,
      "site": "00bc90a4",
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
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc9040",
      "READ",
      [
        "storage",
        "01126650",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9098",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc909c",
      "PARAM",
      [
        "storage",
        "002aa8c3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc9040",
      "READ",
      [
        "storage",
        "01127610",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9098",
      "PARAM",
      [
        "storage",
        "002a0cc9",
        null,
        "string"
      ]
    ],
    [
      "00bc909c",
      "PARAM",
      [
        "storage",
        "002aa990",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc805c ["INT_ADD", "register:40f0:8", ["const:bc805c:8", "const:4:8"]]
- 00bc805c ["CALL", null, ["callee:00497da8:8"]]
+ 00bc9050 ["INT_ADD", "register:40f0:8", ["const:bc9050:8", "const:4:8"]]
+ 00bc9050 ["CALL", null, ["callee:00497da8:8"]]
- 00bc80b0 ["INT_ADD", "register:40f0:8", ["const:bc80b0:8", "const:4:8"]]
- 00bc80b0 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bc90a4 ["INT_ADD", "register:40f0:8", ["const:bc90a4:8", "const:4:8"]]
+ 00bc90a4 ["CALL", null, ["callee:00c5bd40:8"]]
- 00bc802c ["INT_ADD", "register:40f0:8", ["const:bc802c:8", "const:4:8"]]
- 00bc802c ["CALL", null, ["callee:00c5c120:8"]]
+ 00bc9020 ["INT_ADD", "register:40f0:8", ["const:bc9020:8", "const:4:8"]]
+ 00bc9020 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-9501f464c1c52a0c3393428c39e8cf4d"></a>

### [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) → [`00bc90f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc90f0.md) FUN_00bc90f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00bc8008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8008.md) [`00bc82b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc82b4.md) [`00bc83a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc83a8.md) [`00bc84a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc84a8.md) [`00bc8618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8618.md) · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 5件 [`00bc8ffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc8/00bc8ffc.md) [`00bc92a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc92a8.md) [`00bc939c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc939c.md) [`00bc949c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc949c.md) [`00bc960c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc960c.md) · 呼出先 4件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00576618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00576/00576618.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bc9128",
      "incomplete_value": true,
      "site": "00bc913c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5a8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9198",
      "incomplete_value": false,
      "site": "00bc91a4",
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
            "const:cc9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc919c",
      "incomplete_value": false,
      "site": "00bc91a4",
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
            "const:96d:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc9128",
      "READ",
      [
        "storage",
        "011265e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9198",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc919c",
      "PARAM",
      [
        "storage",
        "002a98a0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc9128",
      "READ",
      [
        "storage",
        "011275a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9198",
      "PARAM",
      [
        "storage",
        "002a0cc9",
        null,
        "string"
      ]
    ],
    [
      "00bc919c",
      "PARAM",
      [
        "storage",
        "002a996d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc8148 ["INT_ADD", "register:40f0:8", ["const:bc8148:8", "const:4:8"]]
- 00bc8148 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc913c ["INT_ADD", "register:40f0:8", ["const:bc913c:8", "const:4:8"]]
+ 00bc913c ["CALL", null, ["callee:00497b94:8"]]
- 00bc81b0 ["INT_ADD", "register:40f0:8", ["const:bc81b0:8", "const:4:8"]]
- 00bc81b0 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bc91a4 ["INT_ADD", "register:40f0:8", ["const:bc91a4:8", "const:4:8"]]
+ 00bc91a4 ["CALL", null, ["callee:00c5bd40:8"]]
- 00bc8208 ["INT_ADD", "register:40f0:8", ["const:bc8208:8", "const:4:8"]]
- 00bc8208 ["CALL", null, ["callee:00576618:8"]]
+ 00bc91fc ["INT_ADD", "register:40f0:8", ["const:bc91fc:8", "const:4:8"]]
+ 00bc91fc ["CALL", null, ["callee:00576618:8"]]
~~~


<a id="compare-59c8d2beb83af25f11e69ee43d9f82dc"></a>

### [`00bc82b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc82b4.md) → [`00bc92a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc92a8.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal7GetLongEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d900.md) · 呼出先 4件 [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00c5e8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e8d0.md) · 呼出先 4件 [`0058f8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f8fc.md) [`00bc90f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc90f0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

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
      "definition_site": "00bc92ec",
      "incomplete_value": true,
      "site": "00bc92fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9344",
      "incomplete_value": false,
      "site": "00bc9350",
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
            "const:cc9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9348",
      "incomplete_value": false,
      "site": "00bc9350",
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
            "const:be2:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc92ec",
      "READ",
      [
        "storage",
        "01126630",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9344",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc9348",
      "PARAM",
      [
        "storage",
        "002a0ba2",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bc92ec",
      "READ",
      [
        "storage",
        "011275f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9344",
      "PARAM",
      [
        "storage",
        "002a0cc9",
        null,
        "string"
      ]
    ],
    [
      "00bc9348",
      "PARAM",
      [
        "storage",
        "002a0be2",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc8308 ["INT_ADD", "register:40f0:8", ["const:bc8308:8", "const:4:8"]]
- 00bc8308 ["CALL", null, ["callee:0058f8fc:8"]]
+ 00bc92fc ["INT_ADD", "register:40f0:8", ["const:bc92fc:8", "const:4:8"]]
+ 00bc92fc ["CALL", null, ["callee:0058f8fc:8"]]
- 00bc835c ["INT_ADD", "register:40f0:8", ["const:bc835c:8", "const:4:8"]]
- 00bc835c ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bc9350 ["INT_ADD", "register:40f0:8", ["const:bc9350:8", "const:4:8"]]
+ 00bc9350 ["CALL", null, ["callee:00c5bd40:8"]]
- 00bc82d8 ["INT_ADD", "register:40f0:8", ["const:bc82d8:8", "const:4:8"]]
- 00bc82d8 ["CALL", null, ["callee:00c5c120:8"]]
+ 00bc92cc ["INT_ADD", "register:40f0:8", ["const:bc92cc:8", "const:4:8"]]
+ 00bc92cc ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-4f4faba813b62100f3c53dacc5639117"></a>

### [`00bc83a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc83a8.md) → [`00bc939c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc939c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal9GetDoubleEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d920.md) · 呼出先 4件 [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b300.md)
- 新版 呼出元 1件 [`00c5e8f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e8f0.md) · 呼出先 4件 [`00bc90f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc90f0.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md) [`00c5c2d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c2d0.md)

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
      "definition_site": "00bc93e0",
      "incomplete_value": true,
      "site": "00bc93f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5f8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9438",
      "incomplete_value": false,
      "site": "00bc9444",
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
            "const:cc9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc943c",
      "incomplete_value": false,
      "site": "00bc9444",
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
            "const:2e4:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc93e0",
      "READ",
      [
        "storage",
        "01126638",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9438",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc943c",
      "PARAM",
      [
        "storage",
        "002ae217",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc93e0",
      "READ",
      [
        "storage",
        "011275f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9438",
      "PARAM",
      [
        "storage",
        "002a0cc9",
        null,
        "string"
      ]
    ],
    [
      "00bc943c",
      "PARAM",
      [
        "storage",
        "002ae2e4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc83fc ["INT_ADD", "register:40f0:8", ["const:bc83fc:8", "const:4:8"]]
- 00bc83fc ["CALL", null, ["callee:00c5c2d0:8"]]
+ 00bc93f0 ["INT_ADD", "register:40f0:8", ["const:bc93f0:8", "const:4:8"]]
+ 00bc93f0 ["CALL", null, ["callee:00c5c2d0:8"]]
- 00bc8450 ["INT_ADD", "register:40f0:8", ["const:bc8450:8", "const:4:8"]]
- 00bc8450 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bc9444 ["INT_ADD", "register:40f0:8", ["const:bc9444:8", "const:4:8"]]
+ 00bc9444 ["CALL", null, ["callee:00c5bd40:8"]]
- 00bc83cc ["INT_ADD", "register:40f0:8", ["const:bc83cc:8", "const:4:8"]]
- 00bc83cc ["CALL", null, ["callee:00c5c120:8"]]
+ 00bc93c0 ["INT_ADD", "register:40f0:8", ["const:bc93c0:8", "const:4:8"]]
+ 00bc93c0 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-bae49cd12ffea45e9b9ecd2fbb1e5ed8"></a>

### [`00bc84a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc84a8.md) → [`00bc949c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc949c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal9GetStringEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d930.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5e900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e900.md) · 呼出先 7件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bc90f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc90f0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bc9504",
      "incomplete_value": true,
      "site": "00bc9510",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:600:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9568",
      "incomplete_value": false,
      "site": "00bc9574",
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
            "const:cc9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc956c",
      "incomplete_value": false,
      "site": "00bc9574",
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
            "const:6a6:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc9504",
      "READ",
      [
        "storage",
        "01126640",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9568",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc956c",
      "PARAM",
      [
        "storage",
        "002a95d9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc9504",
      "READ",
      [
        "storage",
        "01127600",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9568",
      "PARAM",
      [
        "storage",
        "002a0cc9",
        null,
        "string"
      ]
    ],
    [
      "00bc956c",
      "PARAM",
      [
        "storage",
        "002a96a6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc851c ["INT_ADD", "register:40f0:8", ["const:bc851c:8", "const:4:8"]]
- 00bc851c ["CALL", null, ["callee:00497b94:8"]]
+ 00bc9510 ["INT_ADD", "register:40f0:8", ["const:bc9510:8", "const:4:8"]]
+ 00bc9510 ["CALL", null, ["callee:00497b94:8"]]
- 00bc8580 ["INT_ADD", "register:40f0:8", ["const:bc8580:8", "const:4:8"]]
- 00bc8580 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bc9574 ["INT_ADD", "register:40f0:8", ["const:bc9574:8", "const:4:8"]]
+ 00bc9574 ["CALL", null, ["callee:00c5bd40:8"]]
- 00bc84ec ["INT_ADD", "register:40f0:8", ["const:bc84ec:8", "const:4:8"]]
- 00bc84ec ["CALL", null, ["callee:00c5c120:8"]]
+ 00bc94e0 ["INT_ADD", "register:40f0:8", ["const:bc94e0:8", "const:4:8"]]
+ 00bc94e0 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-cb2d85b8dc516cfe6ce28c52f3a15a7d"></a>

### [`00bc8618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8618.md) → [`00bc960c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc960c.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal7GetDataEPKcPNS0_9ValueInfoE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8e0.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bc80fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc80fc.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5e8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e8b0.md) · 呼出先 7件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00bc90f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc90f0.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bd40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd40.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

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
      "definition_site": "00bc9674",
      "incomplete_value": true,
      "site": "00bc9680",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:608:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc96d8",
      "incomplete_value": false,
      "site": "00bc96e4",
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
            "const:cc9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc96dc",
      "incomplete_value": false,
      "site": "00bc96e4",
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
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bc9674",
      "READ",
      [
        "storage",
        "01126648",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc96d8",
      "PARAM",
      [
        "storage",
        "002a0c89",
        null,
        "string"
      ]
    ],
    [
      "00bc96dc",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bc9674",
      "READ",
      [
        "storage",
        "01127608",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc96d8",
      "PARAM",
      [
        "storage",
        "002a0cc9",
        null,
        "string"
      ]
    ],
    [
      "00bc96dc",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc868c ["INT_ADD", "register:40f0:8", ["const:bc868c:8", "const:4:8"]]
- 00bc868c ["CALL", null, ["callee:00497b94:8"]]
+ 00bc9680 ["INT_ADD", "register:40f0:8", ["const:bc9680:8", "const:4:8"]]
+ 00bc9680 ["CALL", null, ["callee:00497b94:8"]]
- 00bc86f0 ["INT_ADD", "register:40f0:8", ["const:bc86f0:8", "const:4:8"]]
- 00bc86f0 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00bc96e4 ["INT_ADD", "register:40f0:8", ["const:bc96e4:8", "const:4:8"]]
+ 00bc96e4 ["CALL", null, ["callee:00c5bd40:8"]]
- 00bc865c ["INT_ADD", "register:40f0:8", ["const:bc865c:8", "const:4:8"]]
- 00bc865c ["CALL", null, ["callee:00c5c120:8"]]
+ 00bc9650 ["INT_ADD", "register:40f0:8", ["const:bc9650:8", "const:4:8"]]
+ 00bc9650 ["CALL", null, ["callee:00c5c120:8"]]
~~~


<a id="compare-041455cf540ad0dfbd5b2caf32694be9"></a>

### [`00bc8a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc8/00bc8a74.md) → [`00bc9a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc9/00bc9a68.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal6GetAllEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d8c0.md) · 呼出先 26件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`0087f0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f0fc.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`00c5e890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e890.md) · 呼出先 26件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`0058f8fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f8fc.md) [`008800a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/008800a8.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, unresolved_call_alignment

命令の説明率　旧版 95.96% / 新版 95.96%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9ac0",
      "incomplete_value": true,
      "site": "00bc9ac8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9c10",
      "incomplete_value": true,
      "site": "00bc9c20",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 20,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bc9c30",
      "incomplete_value": true,
      "site": "00bc9c3c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bc9ac0",
      "READ",
      [
        "storage",
        "011265f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9c10",
      "READ",
      [
        "storage",
        "01126620",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9c30",
      "READ",
      [
        "storage",
        "01126630",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bc9ac0",
      "READ",
      [
        "storage",
        "011275b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9c10",
      "READ",
      [
        "storage",
        "011275e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bc9c30",
      "READ",
      [
        "storage",
        "011275f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc8ad4 ["INT_ADD", "register:40f0:8", ["const:bc8ad4:8", "const:4:8"]]
- 00bc8ad4 ["CALL", null, ["callee:00497b94:8"]]
+ 00bc9ac8 ["INT_ADD", "register:40f0:8", ["const:bc9ac8:8", "const:4:8"]]
+ 00bc9ac8 ["CALL", null, ["callee:00497b94:8"]]
- 00bc8c2c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bc8c2c ["INT_ADD", "register:40f0:8", ["const:bc8c2c:8", "const:4:8"]]
- 00bc8c2c ["CALLIND", null, ["register:0:8"]]
+ 00bc9c20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bc9c20 ["INT_ADD", "register:40f0:8", ["const:bc9c20:8", "const:4:8"]]
+ 00bc9c20 ["CALLIND", null, ["register:0:8"]]
- 00bc8c48 ["INT_ADD", "register:40f0:8", ["const:bc8c48:8", "const:4:8"]]
- 00bc8c48 ["CALL", null, ["callee:0058f8fc:8"]]
+ 00bc9c3c ["INT_ADD", "register:40f0:8", ["const:bc9c3c:8", "const:4:8"]]
+ 00bc9c3c ["CALL", null, ["callee:0058f8fc:8"]]
~~~


<a id="compare-e7ba22ab0561f87184f2e5809823fc43"></a>

### [`00bc9290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9290.md) → [`00bca284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bca284.md) _ZN8firebase13remote_config8internal20RemoteConfigInternal25AddOnConfigUpdateListenerENSt6__ndk18functionIFvONS0_12ConfigUpdateENS0_17Remote

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d860.md) · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bc9a34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9a34.md) [`00bca06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca06c.md) [`00bca070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca070.md)
- 新版 呼出元 1件 [`00c5e830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e830.md) · 呼出先 13件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00589a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589a54.md) [`00bcaa28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcaa28.md) [`00bcb060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb060.md) [`00bcb064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb064.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bca43c",
      "incomplete_value": false,
      "site": "00bca43c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c92000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bca394",
      "incomplete_value": true,
      "site": "00bca3a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:718:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bca398",
      "incomplete_value": true,
      "site": "00bca3a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:728:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bca394",
      "READ",
      [
        "storage",
        "01126758",
        null,
        "undefined8"
      ]
    ],
    [
      "00bca398",
      "READ",
      [
        "storage",
        "01126768",
        null,
        "undefined8"
      ]
    ],
    [
      "00bca3bc",
      "PARAM",
      [
        "storage",
        "002a1bdb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bca394",
      "READ",
      [
        "storage",
        "01127718",
        null,
        "undefined8"
      ]
    ],
    [
      "00bca398",
      "READ",
      [
        "storage",
        "01127728",
        null,
        "undefined8"
      ]
    ],
    [
      "00bca3bc",
      "PARAM",
      [
        "storage",
        "002a1c1b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bc93b0 ["INT_ADD", "register:40f0:8", ["const:bc93b0:8", "const:4:8"]]
- 00bc93b0 ["CALL", null, ["callee:00589a54:8"]]
+ 00bca3a4 ["INT_ADD", "register:40f0:8", ["const:bca3a4:8", "const:4:8"]]
+ 00bca3a4 ["CALL", null, ["callee:00589a54:8"]]
- 00bc93cc ["INT_ADD", "register:40f0:8", ["const:bc93cc:8", "const:4:8"]]
- 00bc93cc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bca3c0 ["INT_ADD", "register:40f0:8", ["const:bca3c0:8", "const:4:8"]]
+ 00bca3c0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc93e4 ["INT_ADD", "register:40f0:8", ["const:bc93e4:8", "const:4:8"]]
- 00bc93e4 ["CALL", null, ["callee:00497b94:8"]]
+ 00bca3d8 ["INT_ADD", "register:40f0:8", ["const:bca3d8:8", "const:4:8"]]
+ 00bca3d8 ["CALL", null, ["callee:00497b94:8"]]
~~~


<a id="compare-1309660cf8e818cc75abd0f27b4c9b53"></a>

### [`00bc9a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9a60.md) → [`00bcaa54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcaa54.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_13remote_config10ConfigInfoEZNS0_26CompleteWithResultInternalIS3_EEvRKNS_12Fut

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9a0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5e970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e970.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.67% / 新版 98.67%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcaac0",
      "incomplete_value": false,
      "site": "00bcaac4",
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
      "00bcaac0",
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
      "00bcaac0",
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
- 00bc9ad0 ["INT_ADD", "register:40f0:8", ["const:bc9ad0:8", "const:4:8"]]
- 00bc9ad0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcaac4 ["INT_ADD", "register:40f0:8", ["const:bcaac4:8", "const:4:8"]]
+ 00bcaac4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc9a94 ["INT_ADD", "register:40f0:8", ["const:bc9a94:8", "const:4:8"]]
- 00bc9a94 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcaa88 ["INT_ADD", "register:40f0:8", ["const:bcaa88:8", "const:4:8"]]
+ 00bcaa88 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc9aa0 ["INT_ADD", "register:40f0:8", ["const:bc9aa0:8", "const:4:8"]]
- 00bc9aa0 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bcaa94 ["INT_ADD", "register:40f0:8", ["const:bcaa94:8", "const:4:8"]]
+ 00bcaa94 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-338ce7e699a4626ca851a9b0cb39d8bc"></a>

### [`00bc9b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9b8c.md) → [`00bcab80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcab80.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIbZNS0_26CompleteWithResultInternalIbEEvRKNS_12FutureHandleEiPKcRKT_EUlPbE_EEvS5_i

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9b0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5e980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e980.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.63% / 新版 98.63%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcabec",
      "incomplete_value": false,
      "site": "00bcabf0",
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
      "00bcabec",
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
      "00bcabec",
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
- 00bc9bfc ["INT_ADD", "register:40f0:8", ["const:bc9bfc:8", "const:4:8"]]
- 00bc9bfc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcabf0 ["INT_ADD", "register:40f0:8", ["const:bcabf0:8", "const:4:8"]]
+ 00bcabf0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc9bc0 ["INT_ADD", "register:40f0:8", ["const:bc9bc0:8", "const:4:8"]]
- 00bc9bc0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcabb4 ["INT_ADD", "register:40f0:8", ["const:bcabb4:8", "const:4:8"]]
+ 00bcabb4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc9bcc ["INT_ADD", "register:40f0:8", ["const:bc9bcc:8", "const:4:8"]]
- 00bc9bcc ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bcabc0 ["INT_ADD", "register:40f0:8", ["const:bcabc0:8", "const:4:8"]]
+ 00bcabc0 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-54ed2e5f81ecc70fbd386c982e470294"></a>

### [`00bc9cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9cbc.md) → [`00bcacb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcacb0.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_13remote_config10ConfigInfoEEEvRKNS_12FutureHandleEiP

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9c0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5e990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e990.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcad14",
      "incomplete_value": false,
      "site": "00bcad18",
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
      "00bcad14",
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
      "00bcad14",
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
- 00bc9d24 ["INT_ADD", "register:40f0:8", ["const:bc9d24:8", "const:4:8"]]
- 00bc9d24 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcad18 ["INT_ADD", "register:40f0:8", ["const:bcad18:8", "const:4:8"]]
+ 00bcad18 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc9ce8 ["INT_ADD", "register:40f0:8", ["const:bc9ce8:8", "const:4:8"]]
- 00bc9ce8 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcacdc ["INT_ADD", "register:40f0:8", ["const:bcacdc:8", "const:4:8"]]
+ 00bcacdc ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc9cf4 ["INT_ADD", "register:40f0:8", ["const:bc9cf4:8", "const:4:8"]]
- 00bc9cf4 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bcace8 ["INT_ADD", "register:40f0:8", ["const:bcace8:8", "const:4:8"]]
+ 00bcace8 ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-8cfeb3cfb4da0a6e2ef0a39672e33b59"></a>

### [`00bc9e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc9/00bc9e70.md) → [`00bcae64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bca/00bcae64.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalIbEEvRKNS_12FutureHandleEiPKcEUlPvE_EEvS5_iS7_RKT0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d9d0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5e9a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5e9a0.md) · 呼出先 10件 [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bed0.md) [`00c5bef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bef0.md) [`00c5bf00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcaec8",
      "incomplete_value": false,
      "site": "00bcaecc",
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
      "00bcaec8",
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
      "00bcaec8",
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
- 00bc9ed8 ["INT_ADD", "register:40f0:8", ["const:bc9ed8:8", "const:4:8"]]
- 00bc9ed8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcaecc ["INT_ADD", "register:40f0:8", ["const:bcaecc:8", "const:4:8"]]
+ 00bcaecc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bc9e9c ["INT_ADD", "register:40f0:8", ["const:bc9e9c:8", "const:4:8"]]
- 00bc9e9c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcae90 ["INT_ADD", "register:40f0:8", ["const:bcae90:8", "const:4:8"]]
+ 00bcae90 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bc9ea8 ["INT_ADD", "register:40f0:8", ["const:bc9ea8:8", "const:4:8"]]
- 00bc9ea8 ["CALL", null, ["callee:00c5bf20:8"]]
+ 00bcae9c ["INT_ADD", "register:40f0:8", ["const:bcae9c:8", "const:4:8"]]
+ 00bcae9c ["CALL", null, ["callee:00c5bf20:8"]]
~~~


<a id="compare-b03ef3bda6e31c251711ff6895d1f6b6"></a>

### [`00bca01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca01c.md) → [`00bcb010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb010.md) FUN_00bcb010

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcb02c",
      "incomplete_value": false,
      "site": "00bcb030",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c92000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bca038",
      "incomplete_value": false,
      "site": "00bca03c",
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
      "00bcb030",
      "DATA",
      [
        "storage",
        "00c918f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00bcb030",
      "DATA",
      [
        "storage",
        "00c928c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca030 ["INT_ADD", "register:40f0:8", ["const:bca030:8", "const:4:8"]]
- 00bca030 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bcb024 ["INT_ADD", "register:40f0:8", ["const:bcb024:8", "const:4:8"]]
+ 00bcb024 ["CALL", null, ["callee:00c58f30:8"]]
- 00bca034 ["COPY", "register:4040:8", ["const:c91000:8"]]
+ 00bcb028 ["COPY", "register:4040:8", ["const:c92000:8"]]
- 00bca038 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 00bca038 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bca038 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bca038 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bcb02c ["COPY", "tmp:0:8", ["const:8c8:8"]]
+ 00bcb02c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcb02c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcb02c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dddb6a3c91df666bca79a324a7631218"></a>

### [`00bca054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca054.md) → [`00bcb048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb048.md) FUN_00bcb048

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcb04c",
      "incomplete_value": false,
      "site": "00bcb050",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c92000:8"
          ],
          [
            "leaf",
            "const:8c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bca058",
      "incomplete_value": false,
      "site": "00bca05c",
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
      "00bcb050",
      "DATA",
      [
        "storage",
        "00c918f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00bcb050",
      "DATA",
      [
        "storage",
        "00c928c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca054 ["COPY", "register:4040:8", ["const:c91000:8"]]
+ 00bcb048 ["COPY", "register:4040:8", ["const:c92000:8"]]
- 00bca058 ["COPY", "tmp:0:8", ["const:8f8:8"]]
- 00bca058 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bca058 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bca058 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bcb04c ["COPY", "tmp:0:8", ["const:8c8:8"]]
+ 00bcb04c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcb04c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bcb04c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4895f686e9a8f2ea8588215cc6264a25"></a>

### [`00bca074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca074.md) → [`00bcb068`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb068.md) FUN_00bcb068

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b410.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5c3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c3e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb084",
      "incomplete_value": true,
      "site": "00bcb08c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:768:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb0a0",
      "incomplete_value": false,
      "site": "00bcb0a4",
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
            "const:c1b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bca0ac",
      "incomplete_value": false,
      "site": "00bca0b0",
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
            "const:bdb:8"
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
      "00bcb084",
      "READ",
      [
        "storage",
        "011267a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcb0a0",
      "PARAM",
      [
        "storage",
        "002a1bdb",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcb084",
      "READ",
      [
        "storage",
        "01127768",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcb0a0",
      "PARAM",
      [
        "storage",
        "002a1c1b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca098 ["INT_ADD", "register:40f0:8", ["const:bca098:8", "const:4:8"]]
- 00bca098 ["CALL", null, ["callee:0057504c:8"]]
+ 00bcb08c ["INT_ADD", "register:40f0:8", ["const:bcb08c:8", "const:4:8"]]
+ 00bcb08c ["CALL", null, ["callee:0057504c:8"]]
- 00bca0b0 ["INT_ADD", "register:40f0:8", ["const:bca0b0:8", "const:4:8"]]
- 00bca0b0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcb0a4 ["INT_ADD", "register:40f0:8", ["const:bcb0a4:8", "const:4:8"]]
+ 00bcb0a4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bca084 ["INT_ADD", "register:40f0:8", ["const:bca084:8", "const:4:8"]]
- 00bca084 ["CALL", null, ["callee:00c5c3e0:8"]]
+ 00bcb078 ["INT_ADD", "register:40f0:8", ["const:bcb078:8", "const:4:8"]]
+ 00bcb078 ["CALL", null, ["callee:00c5c3e0:8"]]
~~~


<a id="compare-2243f4faf5ced727e358aca286171c80"></a>

### [`00bca254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca254.md) → [`00bcb248`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb248.md) _ZN8firebase13remote_config32ConfigUpdateListenerRegistrationD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcb264",
      "incomplete_value": true,
      "site": "00bcb268",
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
      "definition_site": "00bca270",
      "incomplete_value": true,
      "site": "00bca274",
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
      "00bcb25c",
      "READ",
      [
        "storage",
        "00c9b9f8",
        null,
        "pointer"
      ]
    ],
    [
      "00bcb268",
      "DATA",
      [
        "storage",
        "00c91978",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bcb25c",
      "READ",
      [
        "storage",
        "00c9c9c8",
        null,
        "pointer"
      ]
    ],
    [
      "00bcb268",
      "DATA",
      [
        "storage",
        "00c92948",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca260 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 00bcb254 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 00bca268 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:9f8:8"]]
- 00bca268 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcb25c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:9c8:8"]]
+ 00bcb25c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00bca284 ["INT_ADD", "register:40f0:8", ["const:bca284:8", "const:4:8"]]
- 00bca284 ["CALL", null, ["callee:00c5bcb0:8"]]
+ 00bcb278 ["INT_ADD", "register:40f0:8", ["const:bcb278:8", "const:4:8"]]
+ 00bcb278 ["CALL", null, ["callee:00c5bcb0:8"]]
~~~


<a id="compare-5f9836c994d1788393306b826ee9d5a9"></a>

### [`00bca580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca580.md) → [`00bcb574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb574.md) _ZN8firebase4auth4Auth7GetAuthEPNS_3AppEPNS_10InitResultE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5aa90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa90.md) · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md)
- 新版 呼出元 1件 [`00c5ba60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5ba60.md) · 呼出先 8件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md) [`00c5c680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c680.md)

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
      "definition_site": "00bcb5c0",
      "incomplete_value": true,
      "site": "00bcb5c0",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb5a0",
      "incomplete_value": true,
      "site": "00bcb5a4",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb668",
      "incomplete_value": false,
      "site": "00bcb674",
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
            "const:3bf:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bcb590",
      "READ",
      [
        "storage",
        "00c9ba70",
        null,
        "pointer"
      ]
    ],
    [
      "00bcb59c",
      "READ",
      [
        "storage",
        "01126820",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ],
    [
      "00bcb5a8",
      "READ",
      [
        "storage",
        "01126820",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcb590",
      "READ",
      [
        "storage",
        "00c9ca40",
        null,
        "pointer"
      ]
    ],
    [
      "00bcb59c",
      "READ",
      [
        "storage",
        "011277e0",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ],
    [
      "00bcb5a8",
      "READ",
      [
        "storage",
        "011277e0",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca5b0 ["INT_ADD", "register:40f0:8", ["const:bca5b0:8", "const:4:8"]]
- 00bca5b0 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcb5a4 ["INT_ADD", "register:40f0:8", ["const:bcb5a4:8", "const:4:8"]]
+ 00bcb5a4 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bca680 ["INT_ADD", "register:40f0:8", ["const:bca680:8", "const:4:8"]]
- 00bca680 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00bcb674 ["INT_ADD", "register:40f0:8", ["const:bcb674:8", "const:4:8"]]
+ 00bcb674 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00bca598 ["COPY", "register:40a8:8", ["const:c9b000:8"]]
+ 00bcb58c ["COPY", "register:40a8:8", ["const:c9c000:8"]]
~~~


<a id="compare-340930ef8bf7cf9d12e241401025cf42"></a>

### [`00bca82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca82c.md) → [`00bcb820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb820.md) _ZN8firebase4auth4AuthC1EPNS_3AppEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5db60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db60.md) · 呼出先 10件 [`00bcbe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbe48.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md)
- 新版 呼出元 1件 [`00c5eb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb30.md) · 呼出先 10件 [`00bcce3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcce3c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5bc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc90.md)

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
      "definition_site": "00bcb870",
      "incomplete_value": false,
      "site": "00bcb874",
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
            "const:58d:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb894",
      "incomplete_value": false,
      "site": "00bcb8a0",
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
            "const:199:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcb8f8",
      "incomplete_value": false,
      "site": "00bcb900",
      "value": [
        "leaf",
        "const:bcce3c:8"
      ]
    },
    "old": {
      "definition_site": "00bca904",
      "incomplete_value": false,
      "site": "00bca90c",
      "value": [
        "leaf",
        "const:bcbe48:8"
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
      "00bcb870",
      "PARAM",
      [
        "storage",
        "002af4b6",
        null,
        "string"
      ]
    ],
    [
      "00bcb894",
      "PARAM",
      [
        "storage",
        "002bc0bb",
        null,
        null
      ]
    ],
    [
      "00bcb8f8",
      "PARAM",
      [
        "storage",
        "00bcbe48",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcb870",
      "PARAM",
      [
        "storage",
        "002af58d",
        null,
        "string"
      ]
    ],
    [
      "00bcb894",
      "PARAM",
      [
        "storage",
        "002bc199",
        null,
        null
      ]
    ],
    [
      "00bcb8f8",
      "PARAM",
      [
        "storage",
        "00bcce3c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bca880 ["INT_ADD", "register:40f0:8", ["const:bca880:8", "const:4:8"]]
- 00bca880 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcb874 ["INT_ADD", "register:40f0:8", ["const:bcb874:8", "const:4:8"]]
+ 00bcb874 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bca8ac ["INT_ADD", "register:40f0:8", ["const:bca8ac:8", "const:4:8"]]
- 00bca8ac ["CALL", null, ["callee:00c5ce00:8"]]
+ 00bcb8a0 ["INT_ADD", "register:40f0:8", ["const:bcb8a0:8", "const:4:8"]]
+ 00bcb8a0 ["CALL", null, ["callee:00c5ce00:8"]]
- 00bca90c ["INT_ADD", "register:40f0:8", ["const:bca90c:8", "const:4:8"]]
- 00bca90c ["CALL", null, ["callee:00c5bca0:8"]]
+ 00bcb900 ["INT_ADD", "register:40f0:8", ["const:bcb900:8", "const:4:8"]]
+ 00bcb900 ["CALL", null, ["callee:00c5bca0:8"]]
~~~


<a id="compare-33cb128aa830b48b07e84eb5613d2130"></a>

### [`00bcaad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcaad8.md) → [`00bcbacc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcbacc.md) _ZN8firebase4auth4Auth14DeleteInternalEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5db00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db00.md) · 呼出先 14件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md) [`00c5ace0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ace0.md)
- 新版 呼出元 1件 [`00c5ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ead0.md) · 呼出先 14件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5bc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc90.md) [`00c5bcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bcb0.md)

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
      "definition_site": "00bcbb60",
      "incomplete_value": true,
      "site": "00bcbb64",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcbaec",
      "incomplete_value": true,
      "site": "00bcbaf0",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcbbd8",
      "incomplete_value": false,
      "site": "00bcbbe0",
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
            "const:c09:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bcbae0",
      "READ",
      [
        "storage",
        "00c9ba70",
        null,
        "pointer"
      ]
    ],
    [
      "00bcbae8",
      "READ",
      [
        "storage",
        "01126820",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ],
    [
      "00bcbb54",
      "READ",
      [
        "storage",
        "00c9ba78",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bcbae0",
      "READ",
      [
        "storage",
        "00c9ca40",
        null,
        "pointer"
      ]
    ],
    [
      "00bcbae8",
      "READ",
      [
        "storage",
        "011277e0",
        "firebase::auth::g_auths_mutex",
        "undefined8"
      ]
    ],
    [
      "00bcbb54",
      "READ",
      [
        "storage",
        "00c9ca48",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcaafc ["INT_ADD", "register:40f0:8", ["const:bcaafc:8", "const:4:8"]]
- 00bcaafc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcbaf0 ["INT_ADD", "register:40f0:8", ["const:bcbaf0:8", "const:4:8"]]
+ 00bcbaf0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcabec ["INT_ADD", "register:40f0:8", ["const:bcabec:8", "const:4:8"]]
- 00bcabec ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00bcbbe0 ["INT_ADD", "register:40f0:8", ["const:bcbbe0:8", "const:4:8"]]
+ 00bcbbe0 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00bcaae8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00bcbadc ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-9fb6305ebdc585efa5f49659422c5b28"></a>

### [`00bcae98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcae98.md) → [`00bcbe8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcbe8c.md) _ZN8firebase4auth4Auth3appEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5db50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db50.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5eb20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb20.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcbea8",
      "incomplete_value": false,
      "site": "00bcbeac",
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
            "const:783:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bcbea8",
      "PARAM",
      [
        "storage",
        "002b16ac",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcbea8",
      "PARAM",
      [
        "storage",
        "002b1783",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcaeb8 ["INT_ADD", "register:40f0:8", ["const:bcaeb8:8", "const:4:8"]]
- 00bcaeb8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcbeac ["INT_ADD", "register:40f0:8", ["const:bcbeac:8", "const:4:8"]]
+ 00bcbeac ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcaeb4 ["COPY", "tmp:0:8", ["const:6ac:8"]]
- 00bcaeb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcaeb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcaeb4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcbea8 ["COPY", "tmp:0:8", ["const:783:8"]]
+ 00bcbea8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcbea8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcbea8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-db094e18973a806cf209e09db37ae581"></a>

### [`00bcaed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bcaed0.md) → [`00bcbec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcbec4.md) _ZN8firebase4auth4Auth20AddAuthStateListenerEPNS0_17AuthStateListenerE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5dbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbc0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5eb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.08% / 新版 99.08%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcc03c",
      "incomplete_value": false,
      "site": "00bcc040",
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
            "const:ce7:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bcc03c",
      "PARAM",
      [
        "storage",
        "002b8c18",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcc03c",
      "PARAM",
      [
        "storage",
        "002b8ce7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb04c ["INT_ADD", "register:40f0:8", ["const:bcb04c:8", "const:4:8"]]
- 00bcb04c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcc040 ["INT_ADD", "register:40f0:8", ["const:bcc040:8", "const:4:8"]]
+ 00bcc040 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcaf0c ["INT_ADD", "register:40f0:8", ["const:bcaf0c:8", "const:4:8"]]
- 00bcaf0c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcbf00 ["INT_ADD", "register:40f0:8", ["const:bcbf00:8", "const:4:8"]]
+ 00bcbf00 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcaf90 ["INT_ADD", "register:40f0:8", ["const:bcaf90:8", "const:4:8"]]
- 00bcaf90 ["CALL", null, ["callee:00c5eb90:8"]]
+ 00bcbf84 ["INT_ADD", "register:40f0:8", ["const:bcbf84:8", "const:4:8"]]
+ 00bcbf84 ["CALL", null, ["callee:00c5eb90:8"]]
~~~


<a id="compare-344d92a046a7c6ce20dd96d7abf7913b"></a>

### [`00bcb0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb0a0.md) → [`00bcc094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcc094.md) _ZN8firebase4auth4Auth18AddIdTokenListenerEPNS0_15IdTokenListenerE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5dab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dab0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md) [`00c5ea80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.10% / 新版 99.10%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcc214",
      "incomplete_value": false,
      "site": "00bcc218",
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
            "const:ce7:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bcc214",
      "PARAM",
      [
        "storage",
        "002b8c18",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcc214",
      "PARAM",
      [
        "storage",
        "002b8ce7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb224 ["INT_ADD", "register:40f0:8", ["const:bcb224:8", "const:4:8"]]
- 00bcb224 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcc218 ["INT_ADD", "register:40f0:8", ["const:bcc218:8", "const:4:8"]]
+ 00bcc218 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcb0dc ["INT_ADD", "register:40f0:8", ["const:bcb0dc:8", "const:4:8"]]
- 00bcb0dc ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcc0d0 ["INT_ADD", "register:40f0:8", ["const:bcc0d0:8", "const:4:8"]]
+ 00bcc0d0 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcb160 ["INT_ADD", "register:40f0:8", ["const:bcb160:8", "const:4:8"]]
- 00bcb160 ["CALL", null, ["callee:00c5eb70:8"]]
+ 00bcc154 ["INT_ADD", "register:40f0:8", ["const:bcc154:8", "const:4:8"]]
+ 00bcc154 ["CALL", null, ["callee:00c5eb70:8"]]
~~~


<a id="compare-35a12d8bc45442ba841fc51d67a68a45"></a>

### [`00bcb5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb5f0.md) → [`00bcc5e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcc5e4.md) _ZN8firebase4auth24NotifyAuthStateListenersEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dae0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)
- 新版 呼出元 1件 [`00c5eab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eab0.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcc634",
      "incomplete_value": false,
      "site": "00bcc638",
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
            "const:4b4:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bcc634",
      "PARAM",
      [
        "storage",
        "002bd3d6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcc634",
      "PARAM",
      [
        "storage",
        "002bd4b4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb644 ["INT_ADD", "register:40f0:8", ["const:bcb644:8", "const:4:8"]]
- 00bcb644 ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00bcc638 ["INT_ADD", "register:40f0:8", ["const:bcc638:8", "const:4:8"]]
+ 00bcc638 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00bcb61c ["INT_ADD", "register:40f0:8", ["const:bcb61c:8", "const:4:8"]]
- 00bcb61c ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcc610 ["INT_ADD", "register:40f0:8", ["const:bcc610:8", "const:4:8"]]
+ 00bcc610 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcb62c ["INT_ADD", "register:40f0:8", ["const:bcb62c:8", "const:4:8"]]
- 00bcb62c ["CALL", null, ["callee:00c5eba0:8"]]
+ 00bcc620 ["INT_ADD", "register:40f0:8", ["const:bcc620:8", "const:4:8"]]
+ 00bcc620 ["CALL", null, ["callee:00c5eba0:8"]]
~~~


<a id="compare-15b1ee42528dc57cc5af53e6f6d93385"></a>

### [`00bcb818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcb818.md) → [`00bcc80c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcc80c.md) _ZN8firebase4auth22NotifyIdTokenListenersEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dac0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b200.md)
- 新版 呼出元 1件 [`00c5ea90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ea90.md) · 呼出先 6件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c1d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcc85c",
      "incomplete_value": false,
      "site": "00bcc860",
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
            "const:2e5:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bcc85c",
      "PARAM",
      [
        "storage",
        "002a618d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcc85c",
      "PARAM",
      [
        "storage",
        "002a62e5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcb86c ["INT_ADD", "register:40f0:8", ["const:bcb86c:8", "const:4:8"]]
- 00bcb86c ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00bcc860 ["INT_ADD", "register:40f0:8", ["const:bcc860:8", "const:4:8"]]
+ 00bcc860 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00bcb844 ["INT_ADD", "register:40f0:8", ["const:bcb844:8", "const:4:8"]]
- 00bcb844 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00bcc838 ["INT_ADD", "register:40f0:8", ["const:bcc838:8", "const:4:8"]]
+ 00bcc838 ["CALL", null, ["callee:00c5baa0:8"]]
- 00bcb854 ["INT_ADD", "register:40f0:8", ["const:bcb854:8", "const:4:8"]]
- 00bcb854 ["CALL", null, ["callee:00c5eb80:8"]]
+ 00bcc848 ["INT_ADD", "register:40f0:8", ["const:bcc848:8", "const:4:8"]]
+ 00bcc848 ["CALL", null, ["callee:00c5eb80:8"]]
~~~


<a id="compare-141b4402a01dae944c70d5434e01534e"></a>

### [`00bcbe48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbe48.md) → [`00bcce3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcce3c.md) FUN_00bcce3c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bca82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca82c.md) · 呼出先 2件 [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5db00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5db00.md)
- 新版 呼出元 1件 [`00bcb820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb820.md) · 呼出先 2件 [`00c5be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5be80.md) [`00c5ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ead0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcce54",
      "incomplete_value": false,
      "site": "00bcce60",
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
            "const:cda:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bcce54",
      "PARAM",
      [
        "storage",
        "002a3c0f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bcce54",
      "PARAM",
      [
        "storage",
        "002a3cda",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcbe6c ["INT_ADD", "register:40f0:8", ["const:bcbe6c:8", "const:4:8"]]
- 00bcbe6c ["CALL", null, ["callee:00c5be80:8"]]
+ 00bcce60 ["INT_ADD", "register:40f0:8", ["const:bcce60:8", "const:4:8"]]
+ 00bcce60 ["CALL", null, ["callee:00c5be80:8"]]
- 00bcbe60 ["COPY", "tmp:0:8", ["const:c0f:8"]]
- 00bcbe60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcbe60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcbe60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcce54 ["COPY", "tmp:0:8", ["const:cda:8"]]
+ 00bcce54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcce54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcce54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a0c6fcadc2e92bff76dc054232e8d19d"></a>

### [`00bcbec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbec0.md) → [`00bcceb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bcceb4.md) _ZNSt6__ndk16vectorIPN8firebase4auth17AuthStateListenerENS_9allocatorIS4_EEE21__push_back_slow_pathIRKS4_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbc0.md) · 呼出先 5件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5eb90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb90.md) · 呼出先 5件 [`00b41350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41350.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.39% / 新版 98.39%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bccf1c",
      "incomplete_value": false,
      "site": "00bccf20",
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
      "00bccf1c",
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
      "00bccf1c",
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
- 00bcbf2c ["INT_ADD", "register:40f0:8", ["const:bcbf2c:8", "const:4:8"]]
- 00bcbf2c ["CALL", null, ["callee:00b41350:8"]]
+ 00bccf20 ["INT_ADD", "register:40f0:8", ["const:bccf20:8", "const:4:8"]]
+ 00bccf20 ["CALL", null, ["callee:00b41350:8"]]
- 00bcbf28 ["COPY", "tmp:0:8", ["const:61f:8"]]
- 00bcbf28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcbf28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcbf28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bccf1c ["COPY", "tmp:0:8", ["const:777:8"]]
+ 00bccf1c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bccf1c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bccf1c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcbf38 ["INT_ADD", "register:40f0:8", ["const:bcbf38:8", "const:4:8"]]
- 00bcbf38 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bccf2c ["INT_ADD", "register:40f0:8", ["const:bccf2c:8", "const:4:8"]]
+ 00bccf2c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-f555eacc3f3fa939ec604e07b5ff5cfc"></a>

### [`00bcbfb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcb/00bcbfb8.md) → [`00bccfac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcc/00bccfac.md) _ZNSt6__ndk16vectorIPN8firebase4auth4AuthENS_9allocatorIS4_EEE21__push_back_slow_pathIRKS4_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dbe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dbe0.md) · 呼出先 5件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5ebb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ebb0.md) · 呼出先 5件 [`00b41350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41350.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.39% / 新版 98.39%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd014",
      "incomplete_value": false,
      "site": "00bcd018",
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
      "00bcd014",
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
      "00bcd014",
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
- 00bcc024 ["INT_ADD", "register:40f0:8", ["const:bcc024:8", "const:4:8"]]
- 00bcc024 ["CALL", null, ["callee:00b41350:8"]]
+ 00bcd018 ["INT_ADD", "register:40f0:8", ["const:bcd018:8", "const:4:8"]]
+ 00bcd018 ["CALL", null, ["callee:00b41350:8"]]
- 00bcc020 ["COPY", "tmp:0:8", ["const:61f:8"]]
- 00bcc020 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc020 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc020 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcd014 ["COPY", "tmp:0:8", ["const:777:8"]]
+ 00bcd014 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd014 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd014 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc030 ["INT_ADD", "register:40f0:8", ["const:bcc030:8", "const:4:8"]]
- 00bcc030 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bcd024 ["INT_ADD", "register:40f0:8", ["const:bcd024:8", "const:4:8"]]
+ 00bcd024 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-10fb560d58ac7ff70b5ae266abe09fab"></a>

### [`00bcc0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc0b0.md) → [`00bcd0a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd0a4.md) _ZNSt6__ndk16vectorIPN8firebase4auth15IdTokenListenerENS_9allocatorIS4_EEE21__push_back_slow_pathIRKS4_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dba0.md) · 呼出先 5件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md)
- 新版 呼出元 1件 [`00c5eb70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5eb70.md) · 呼出先 5件 [`00b41350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41350.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.39% / 新版 98.39%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd10c",
      "incomplete_value": false,
      "site": "00bcd110",
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
      "00bcd10c",
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
      "00bcd10c",
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
- 00bcc11c ["INT_ADD", "register:40f0:8", ["const:bcc11c:8", "const:4:8"]]
- 00bcc11c ["CALL", null, ["callee:00b41350:8"]]
+ 00bcd110 ["INT_ADD", "register:40f0:8", ["const:bcd110:8", "const:4:8"]]
+ 00bcd110 ["CALL", null, ["callee:00b41350:8"]]
- 00bcc118 ["COPY", "tmp:0:8", ["const:61f:8"]]
- 00bcc118 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc118 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc118 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcd10c ["COPY", "tmp:0:8", ["const:777:8"]]
+ 00bcd10c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd10c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd10c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc128 ["INT_ADD", "register:40f0:8", ["const:bcc128:8", "const:4:8"]]
- 00bcc128 ["CALL", null, ["callee:00c58f30:8"]]
+ 00bcd11c ["INT_ADD", "register:40f0:8", ["const:bcd11c:8", "const:4:8"]]
+ 00bcd11c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-6f80e0de6ff8c41779cfce9b7818cbb7"></a>

### [`00bcc1a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc1a8.md) → [`00bcd19c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd19c.md) _INIT_290

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`00bca56c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca56c.md) [`00bca574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca574.md) [`00bca578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bca/00bca578.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00bcb560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb560.md) [`00bcb568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb568.md) [`00bcb56c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcb/00bcb56c.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

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
      "definition_site": "00bcd1c8",
      "incomplete_value": false,
      "site": "00bcd1c8",
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
            "const:7a8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00bcd1c8",
      "incomplete_value": false,
      "site": "00bcd1c8",
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
            "const:194:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcd1c8",
      "incomplete_value": false,
      "site": "00bcd1c8",
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
                "const:1127000:8"
              ],
              [
                "leaf",
                "const:7a8:8"
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
      "00bcd1b8",
      "PARAM",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd1c8",
      "WRITE",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd1c8",
      "DATA",
      [
        "storage",
        "002bc0b6",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcd1b8",
      "PARAM",
      [
        "storage",
        "011277a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd1c8",
      "WRITE",
      [
        "storage",
        "011277a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd1c8",
      "DATA",
      [
        "storage",
        "002bc194",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc1e0 ["INT_ADD", "register:40f0:8", ["const:bcc1e0:8", "const:4:8"]]
- 00bcc1e0 ["CALL", null, ["callee:00c5bc60:8"]]
+ 00bcd1d4 ["INT_ADD", "register:40f0:8", ["const:bcd1d4:8", "const:4:8"]]
+ 00bcd1d4 ["CALL", null, ["callee:00c5bc60:8"]]
- 00bcc20c ["INT_ADD", "register:40f0:8", ["const:bcc20c:8", "const:4:8"]]
- 00bcc20c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00bcd200 ["INT_ADD", "register:40f0:8", ["const:bcd200:8", "const:4:8"]]
+ 00bcd200 ["CALL", null, ["callee:00c58ed0:8"]]
- 00bcc1b4 ["COPY", "register:4000:8", ["const:1126000:8"]]
+ 00bcd1a8 ["COPY", "register:4000:8", ["const:1127000:8"]]
~~~


<a id="compare-e90a1911a41b5f44d4f1f80c92fe8756"></a>

### [`00bcc3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc3a8.md) → [`00bcd39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd39c.md) _ZN8firebase4auth4auth19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4util

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
      "definition_site": "00bcd3c8",
      "incomplete_value": true,
      "site": "00bcd3c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd3b0",
      "incomplete_value": true,
      "site": "00bcd3b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd3bc",
      "incomplete_value": false,
      "site": "00bcd3c0",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcd3ac",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd3bc",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcd3c8",
      "WRITE",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd3ac",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd3bc",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bcd3c8",
      "WRITE",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc3cc ["INT_ADD", "register:40f0:8", ["const:bcc3cc:8", "const:4:8"]]
- 00bcc3cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd3c0 ["INT_ADD", "register:40f0:8", ["const:bcd3c0:8", "const:4:8"]]
+ 00bcd3c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc3d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00bcc3d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd3c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00bcd3c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc3b4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcd3a8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a7c7b25bfb7d4280297f88018011cd8f"></a>

### [`00bcc3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc3e8.md) → [`00bcd3dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd3dc.md) _ZN8firebase4auth4auth19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bcd408",
      "incomplete_value": true,
      "site": "00bcd408",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc414",
      "incomplete_value": true,
      "site": "00bcc414",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd3f0",
      "incomplete_value": true,
      "site": "00bcd3f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd3f8",
      "incomplete_value": true,
      "site": "00bcd400",
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
      "definition_site": "00bcc404",
      "incomplete_value": true,
      "site": "00bcc40c",
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
      "00bcd3ec",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd3f8",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcd408",
      "WRITE",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd3ec",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd3f8",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bcd408",
      "WRITE",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc40c ["INT_ADD", "register:40f0:8", ["const:bcc40c:8", "const:4:8"]]
- 00bcc40c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd400 ["INT_ADD", "register:40f0:8", ["const:bcd400:8", "const:4:8"]]
+ 00bcd400 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc414 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00bcc414 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd408 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00bcd408 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc3f4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcd3e8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-5f8f75069d9055771de8e361b7bb1228"></a>

### [`00bcc428`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc428.md) → [`00bcd41c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd41c.md) _ZN8firebase4auth4auth10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bcd44c",
      "incomplete_value": true,
      "site": "00bcd44c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc458",
      "incomplete_value": true,
      "site": "00bcc458",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd430",
      "incomplete_value": true,
      "site": "00bcd430",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd43c",
      "incomplete_value": false,
      "site": "00bcd444",
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
      "definition_site": "00bcc448",
      "incomplete_value": false,
      "site": "00bcc450",
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
      "00bcd42c",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd43c",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcd44c",
      "WRITE",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd42c",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd43c",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bcd44c",
      "WRITE",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc450 ["INT_ADD", "register:40f0:8", ["const:bcc450:8", "const:4:8"]]
- 00bcc450 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd444 ["INT_ADD", "register:40f0:8", ["const:bcd444:8", "const:4:8"]]
+ 00bcd444 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc458 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00bcc458 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd44c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00bcd44c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc434 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcd428 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-1faa1fdf460c4a503fe1f68408f2dbd8"></a>

### [`00bcc46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc46c.md) → [`00bcd460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd460.md) _ZN8firebase4auth4auth10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcd490",
      "incomplete_value": true,
      "site": "00bcd490",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc49c",
      "incomplete_value": true,
      "site": "00bcc49c",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd474",
      "incomplete_value": true,
      "site": "00bcd474",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00bcc480"
      ],
      [
        "FALL_THROUGH",
        "00bcd474"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bcd474",
      "incomplete_value": true,
      "site": "00bcd490",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc480",
      "incomplete_value": true,
      "site": "00bcc49c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bcd470",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd47c",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcd490",
      "WRITE",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd470",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd47c",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bcd490",
      "WRITE",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc49c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00bcc49c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd490 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00bcd490 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc478 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcd46c ["COPY", "register:4098:8", ["const:1127000:8"]]
- 00bcc47c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00bcc47c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcd470 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00bcd470 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-02d4c7d7da64f1451bd3090d050c8d4c"></a>

### [`00bcc4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc4bc.md) → [`00bcd4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd4b0.md) _ZN8firebase4auth4auth15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bcd508",
      "incomplete_value": true,
      "site": "00bcd508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd4e4",
      "incomplete_value": true,
      "site": "00bcd4f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bcd4c4",
      "READ",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcd4e4",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd508",
      "WRITE",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcd4c4",
      "READ",
      [
        "storage",
        "011277f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcd4e4",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd508",
      "WRITE",
      [
        "storage",
        "011277f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc4fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcc4fc ["INT_ADD", "register:40f0:8", ["const:bcc4fc:8", "const:4:8"]]
- 00bcc4fc ["CALLIND", null, ["register:0:8"]]
+ 00bcd4f0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcd4f0 ["INT_ADD", "register:40f0:8", ["const:bcd4f0:8", "const:4:8"]]
+ 00bcd4f0 ["CALLIND", null, ["register:0:8"]]
- 00bcc514 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bcc514 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:830:8"]]
- 00bcc514 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bcd508 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bcd508 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7f0:8"]]
+ 00bcd508 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bcc4cc ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bcd4c0 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-7790044c0816a815d985d673e57fd4a7"></a>

### [`00bcc528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc528.md) → [`00bcd51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd51c.md) _ZN8firebase4auth4auth12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bcd558",
      "incomplete_value": true,
      "site": "00bcd558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc564",
      "incomplete_value": true,
      "site": "00bcc564",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcd578",
      "incomplete_value": true,
      "site": "00bcd578",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc584",
      "incomplete_value": true,
      "site": "00bcc584",
      "value": [
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd534",
      "incomplete_value": true,
      "site": "00bcd534",
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
      "00bcd530",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd53c",
      "READ",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcd558",
      "WRITE",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcd530",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd53c",
      "READ",
      [
        "storage",
        "011277f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcd558",
      "WRITE",
      [
        "storage",
        "011277f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc564 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bcc564 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bcc564 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:830:8"]]
- 00bcc564 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bcd558 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bcd558 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bcd558 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7f0:8"]]
+ 00bcd558 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bcc580 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcc580 ["INT_ADD", "register:40f0:8", ["const:bcc580:8", "const:4:8"]]
- 00bcc580 ["CALLIND", null, ["register:0:8"]]
+ 00bcd574 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcd574 ["INT_ADD", "register:40f0:8", ["const:bcd574:8", "const:4:8"]]
+ 00bcd574 ["CALLIND", null, ["register:0:8"]]
- 00bcc584 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:828:8"]]
- 00bcc584 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bcc584 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bcd578 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7e8:8"]]
+ 00bcd578 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bcd578 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-c2532e74bcfe118dc868099c792d8e8f"></a>

### [`00bcc598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc598.md) → [`00bcd58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd58c.md) _ZN8firebase4auth4auth14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcd5cc",
      "incomplete_value": true,
      "site": "00bcd5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc5d8",
      "incomplete_value": true,
      "site": "00bcc5d8",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd5a8",
      "incomplete_value": true,
      "site": "00bcd5a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc5b4",
      "incomplete_value": true,
      "site": "00bcc5b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd5b0",
      "incomplete_value": false,
      "site": "00bcd5c4",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcd5a0",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd5b0",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcd5cc",
      "WRITE",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd5a0",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd5b0",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bcd5cc",
      "WRITE",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc5d0 ["INT_ADD", "register:40f0:8", ["const:bcc5d0:8", "const:4:8"]]
- 00bcc5d0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd5c4 ["INT_ADD", "register:40f0:8", ["const:bcd5c4:8", "const:4:8"]]
+ 00bcd5c4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc5d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:828:8"]]
- 00bcc5d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd5cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7e8:8"]]
+ 00bcd5cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc5a4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bcd598 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-6424a08b0381b9ce8cdc5b58008cf1ad"></a>

### [`00bcc608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc608.md) → [`00bcd5fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd5fc.md) _ZN8firebase4auth4auth11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bcd618",
      "incomplete_value": false,
      "site": "00bcd61c",
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
      "definition_site": "00bcc624",
      "incomplete_value": false,
      "site": "00bcc628",
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
      "00bcd618",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bcd628",
      "DATA",
      [
        "storage",
        "01126838",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd618",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bcd628",
      "DATA",
      [
        "storage",
        "011277f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc628 ["INT_ADD", "register:40f0:8", ["const:bcc628:8", "const:4:8"]]
- 00bcc628 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcd61c ["INT_ADD", "register:40f0:8", ["const:bcd61c:8", "const:4:8"]]
+ 00bcd61c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcc624 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bcc624 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc624 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc624 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcd618 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bcd618 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd618 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd618 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc62c ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bcd620 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-9298535ad4f74a4b62fedfa3c668faa4"></a>

### [`00bcc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc644.md) → [`00bcd638`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd638.md) _ZN8firebase4auth4auth13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcd678",
      "incomplete_value": true,
      "site": "00bcd678",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc684",
      "incomplete_value": true,
      "site": "00bcc684",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd654",
      "incomplete_value": true,
      "site": "00bcd654",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc660",
      "incomplete_value": true,
      "site": "00bcc660",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd65c",
      "incomplete_value": false,
      "site": "00bcd670",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcd64c",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd65c",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bcd678",
      "WRITE",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd64c",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd65c",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bcd678",
      "WRITE",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc67c ["INT_ADD", "register:40f0:8", ["const:bcc67c:8", "const:4:8"]]
- 00bcc67c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd670 ["INT_ADD", "register:40f0:8", ["const:bcd670:8", "const:4:8"]]
+ 00bcd670 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc684 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:828:8"]]
- 00bcc684 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd678 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7e8:8"]]
+ 00bcd678 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc650 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bcd644 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-d0cbefda2149a22fe7379ceca6f490f6"></a>

### [`00bcc6b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc6b4.md) → [`00bcd6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd6a8.md) _ZN8firebase4auth4auth10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bcd6c4",
      "incomplete_value": false,
      "site": "00bcd6c8",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bcd6d4",
      "incomplete_value": true,
      "site": "00bcd6e0",
      "value": [
        "LOAD",
        "8",
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
      "00bcd6c4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bcd6d4",
      "DATA",
      [
        "storage",
        "011268c8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcd6c4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bcd6d4",
      "DATA",
      [
        "storage",
        "01127888",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc6d4 ["INT_ADD", "register:40f0:8", ["const:bcc6d4:8", "const:4:8"]]
- 00bcc6d4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcd6c8 ["INT_ADD", "register:40f0:8", ["const:bcd6c8:8", "const:4:8"]]
+ 00bcd6c8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcc6d0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bcc6d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc6d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc6d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcd6c4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bcd6c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd6c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd6c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc6d8 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bcd6cc ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-66359b52999ba8a4c9b78e957a8c5875"></a>

### [`00bcc6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc6f0.md) → [`00bcd6e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd6e4.md) _ZN8firebase4auth17signinmethodquery19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
      "definition_site": "00bcd710",
      "incomplete_value": true,
      "site": "00bcd710",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd6f8",
      "incomplete_value": true,
      "site": "00bcd6f8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd704",
      "incomplete_value": false,
      "site": "00bcd708",
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
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcd6f4",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd704",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcd710",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd6f4",
      "READ",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd704",
      "PARAM",
      [
        "storage",
        "002a2d40",
        null,
        "string"
      ]
    ],
    [
      "00bcd710",
      "WRITE",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc714 ["INT_ADD", "register:40f0:8", ["const:bcc714:8", "const:4:8"]]
- 00bcc714 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd708 ["INT_ADD", "register:40f0:8", ["const:bcd708:8", "const:4:8"]]
+ 00bcd708 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc71c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
- 00bcc71c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd710 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:890:8"]]
+ 00bcd710 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc6fc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcd6f0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-8cbd474b659ddcac051655c71feadfb9"></a>

### [`00bcc730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc730.md) → [`00bcd724`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd724.md) _ZN8firebase4auth17signinmethodquery19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
      "definition_site": "00bcd750",
      "incomplete_value": true,
      "site": "00bcd750",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd738",
      "incomplete_value": true,
      "site": "00bcd738",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd740",
      "incomplete_value": false,
      "site": "00bcd748",
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
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcd734",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd740",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcd750",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd734",
      "READ",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd740",
      "PARAM",
      [
        "storage",
        "002a2d40",
        null,
        "string"
      ]
    ],
    [
      "00bcd750",
      "WRITE",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc754 ["INT_ADD", "register:40f0:8", ["const:bcc754:8", "const:4:8"]]
- 00bcc754 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd748 ["INT_ADD", "register:40f0:8", ["const:bcd748:8", "const:4:8"]]
+ 00bcd748 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc75c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
- 00bcc75c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd750 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:890:8"]]
+ 00bcd750 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc73c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcd730 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-342aabaafc79116f23a280d961e1b895"></a>

### [`00bcc770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc770.md) → [`00bcd764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd764.md) _ZN8firebase4auth17signinmethodquery10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bcd794",
      "incomplete_value": true,
      "site": "00bcd794",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc7a0",
      "incomplete_value": true,
      "site": "00bcc7a0",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd778",
      "incomplete_value": true,
      "site": "00bcd778",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd784",
      "incomplete_value": false,
      "site": "00bcd78c",
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
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc790",
      "incomplete_value": false,
      "site": "00bcc798",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcd774",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd784",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcd794",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd774",
      "READ",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd784",
      "PARAM",
      [
        "storage",
        "002a2d40",
        null,
        "string"
      ]
    ],
    [
      "00bcd794",
      "WRITE",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc798 ["INT_ADD", "register:40f0:8", ["const:bcc798:8", "const:4:8"]]
- 00bcc798 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd78c ["INT_ADD", "register:40f0:8", ["const:bcd78c:8", "const:4:8"]]
+ 00bcd78c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc7a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
- 00bcc7a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd794 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:890:8"]]
+ 00bcd794 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc77c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcd770 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-a53bdb367c046495eccc1dcfe900f987"></a>

### [`00bcc7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc7b4.md) → [`00bcd7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd7a8.md) _ZN8firebase4auth17signinmethodquery10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcd7d8",
      "incomplete_value": true,
      "site": "00bcd7d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc7e4",
      "incomplete_value": true,
      "site": "00bcc7e4",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd7bc",
      "incomplete_value": true,
      "site": "00bcd7bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd7c4",
      "incomplete_value": false,
      "site": "00bcd7d0",
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
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcd7b8",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd7c4",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcd7d8",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd7b8",
      "READ",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd7c4",
      "PARAM",
      [
        "storage",
        "002a2d40",
        null,
        "string"
      ]
    ],
    [
      "00bcd7d8",
      "WRITE",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc7dc ["INT_ADD", "register:40f0:8", ["const:bcc7dc:8", "const:4:8"]]
- 00bcc7dc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcd7d0 ["INT_ADD", "register:40f0:8", ["const:bcd7d0:8", "const:4:8"]]
+ 00bcd7d0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcc7e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d0:8"]]
- 00bcc7e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd7d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:890:8"]]
+ 00bcd7d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc7c0 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcd7b4 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-70d155b130e53de6d2a9f2acba51b9c0"></a>

### [`00bcc804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc804.md) → [`00bcd7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd7f8.md) _ZN8firebase4auth17signinmethodquery15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bcd850",
      "incomplete_value": true,
      "site": "00bcd850",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:898:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcd82c",
      "incomplete_value": true,
      "site": "00bcd838",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:890:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc838",
      "incomplete_value": true,
      "site": "00bcc844",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8d0:8"
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
      "00bcd80c",
      "READ",
      [
        "storage",
        "011268d8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcd82c",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd850",
      "WRITE",
      [
        "storage",
        "011268d8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcd80c",
      "READ",
      [
        "storage",
        "01127898",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcd82c",
      "READ",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd850",
      "WRITE",
      [
        "storage",
        "01127898",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc844 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcc844 ["INT_ADD", "register:40f0:8", ["const:bcc844:8", "const:4:8"]]
- 00bcc844 ["CALLIND", null, ["register:0:8"]]
+ 00bcd838 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcd838 ["INT_ADD", "register:40f0:8", ["const:bcd838:8", "const:4:8"]]
+ 00bcd838 ["CALLIND", null, ["register:0:8"]]
- 00bcc85c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bcc85c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8d8:8"]]
- 00bcc85c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bcd850 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bcd850 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:898:8"]]
+ 00bcd850 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bcc814 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bcd808 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-02eba8f35af7ee32167cd471b9c69c05"></a>

### [`00bcc870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc870.md) → [`00bcd864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd864.md) _ZN8firebase4auth17signinmethodquery12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bcd8a0",
      "incomplete_value": true,
      "site": "00bcd8a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:898:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcd8c0",
      "incomplete_value": true,
      "site": "00bcd8c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd87c",
      "incomplete_value": true,
      "site": "00bcd87c",
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
      "00bcd878",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd884",
      "READ",
      [
        "storage",
        "011268d8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcd8a0",
      "WRITE",
      [
        "storage",
        "011268d8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcd878",
      "READ",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd884",
      "READ",
      [
        "storage",
        "01127898",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcd8a0",
      "WRITE",
      [
        "storage",
        "01127898",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc8ac ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bcc8ac ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bcc8ac ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8d8:8"]]
- 00bcc8ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bcd8a0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bcd8a0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bcd8a0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:898:8"]]
+ 00bcd8a0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bcc8c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcc8c8 ["INT_ADD", "register:40f0:8", ["const:bcc8c8:8", "const:4:8"]]
- 00bcc8c8 ["CALLIND", null, ["register:0:8"]]
+ 00bcd8bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcd8bc ["INT_ADD", "register:40f0:8", ["const:bcd8bc:8", "const:4:8"]]
+ 00bcd8bc ["CALLIND", null, ["register:0:8"]]
- 00bcc8cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d0:8"]]
- 00bcc8cc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bcc8cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bcd8c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:890:8"]]
+ 00bcd8c0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bcd8c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-e391e9a0fe946b1fd0ac10f8d83d23a9"></a>

### [`00bcc8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc8e0.md) → [`00bcd8d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd8d4.md) _ZN8firebase4auth17signinmethodquery14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcd914",
      "incomplete_value": true,
      "site": "00bcd914",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc920",
      "incomplete_value": true,
      "site": "00bcc920",
      "value": [
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
      "00bcd8e8",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd8f8",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcd914",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd8e8",
      "READ",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd8f8",
      "PARAM",
      [
        "storage",
        "002a2d40",
        null,
        "string"
      ]
    ],
    [
      "00bcd914",
      "WRITE",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc920 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d0:8"]]
- 00bcc920 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd914 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:890:8"]]
+ 00bcd914 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc8ec ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bcd8e0 ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bcc8f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d0:8"]]
- 00bcc8f4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcd8e8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:890:8"]]
+ 00bcd8e8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-453a2e369bec30bbfe20bd594ad4dce2"></a>

### [`00bcc950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc950.md) → [`00bcd944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd944.md) _ZN8firebase4auth17signinmethodquery11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bcd960",
      "incomplete_value": false,
      "site": "00bcd964",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bcd970",
      "incomplete_value": true,
      "site": "00bcd97c",
      "value": [
        "LOAD",
        "8",
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
      "00bcd960",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bcd970",
      "DATA",
      [
        "storage",
        "011268e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd960",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bcd970",
      "DATA",
      [
        "storage",
        "011278a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc970 ["INT_ADD", "register:40f0:8", ["const:bcc970:8", "const:4:8"]]
- 00bcc970 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcd964 ["INT_ADD", "register:40f0:8", ["const:bcd964:8", "const:4:8"]]
+ 00bcd964 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcc96c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bcc96c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc96c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcc96c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcd960 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bcd960 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd960 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcd960 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcc974 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bcd968 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-af974134ac70ef4af1cc83c6d5ef2c6b"></a>

### [`00bcc98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc98c.md) → [`00bcd980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd980.md) _ZN8firebase4auth17signinmethodquery13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcd9c0",
      "incomplete_value": true,
      "site": "00bcd9c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc9cc",
      "incomplete_value": true,
      "site": "00bcc9cc",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcd99c",
      "incomplete_value": true,
      "site": "00bcd99c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc9a8",
      "incomplete_value": true,
      "site": "00bcc9a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00bcc9a8"
      ],
      [
        "FALL_THROUGH",
        "00bcd99c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00bcd99c",
      "incomplete_value": true,
      "site": "00bcd9c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcc9a8",
      "incomplete_value": true,
      "site": "00bcc9cc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00bcd994",
      "READ",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd9a4",
      "PARAM",
      [
        "storage",
        "002a2c75",
        null,
        "string"
      ]
    ],
    [
      "00bcd9c0",
      "WRITE",
      [
        "storage",
        "011268d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcd994",
      "READ",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcd9a4",
      "PARAM",
      [
        "storage",
        "002a2d40",
        null,
        "string"
      ]
    ],
    [
      "00bcd9c0",
      "WRITE",
      [
        "storage",
        "01127890",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcc9cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d0:8"]]
- 00bcc9cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcd9c0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:890:8"]]
+ 00bcd9c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcc998 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bcd98c ["COPY", "register:40a0:8", ["const:1127000:8"]]
- 00bcc9a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d0:8"]]
- 00bcc9a0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bcd994 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:890:8"]]
+ 00bcd994 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d27a07cdfe901f7624056ba7004508d9"></a>

### [`00bcc9fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcc9fc.md) → [`00bcd9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcd9f0.md) _ZN8firebase4auth17signinmethodquery10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bcda0c",
      "incomplete_value": false,
      "site": "00bcda10",
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
      "definition_site": "00bcca18",
      "incomplete_value": false,
      "site": "00bcca1c",
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
      "definition_site": "00bcda1c",
      "incomplete_value": true,
      "site": "00bcda28",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bcca28",
      "incomplete_value": true,
      "site": "00bcca34",
      "value": [
        "LOAD",
        "8",
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
      "00bcda0c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bcda1c",
      "DATA",
      [
        "storage",
        "011268e8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcda0c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bcda1c",
      "DATA",
      [
        "storage",
        "011278a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcca1c ["INT_ADD", "register:40f0:8", ["const:bcca1c:8", "const:4:8"]]
- 00bcca1c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcda10 ["INT_ADD", "register:40f0:8", ["const:bcda10:8", "const:4:8"]]
+ 00bcda10 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcca18 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bcca18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcca18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcca18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcda0c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bcda0c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcda0c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcda0c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcca20 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bcda14 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-a70e5bb68d6d52089e5617958472aa3d"></a>

### [`00bcca38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcca38.md) → [`00bcda2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcda2c.md) _ZN8firebase4auth11jnilistener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bcda58",
      "incomplete_value": true,
      "site": "00bcda58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcda40",
      "incomplete_value": true,
      "site": "00bcda40",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcda4c",
      "incomplete_value": false,
      "site": "00bcda50",
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
            "const:ce9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcda3c",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcda4c",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ],
    [
      "00bcda58",
      "WRITE",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcda3c",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcda4c",
      "PARAM",
      [
        "storage",
        "002b5ce9",
        null,
        "string"
      ]
    ],
    [
      "00bcda58",
      "WRITE",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcca5c ["INT_ADD", "register:40f0:8", ["const:bcca5c:8", "const:4:8"]]
- 00bcca5c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcda50 ["INT_ADD", "register:40f0:8", ["const:bcda50:8", "const:4:8"]]
+ 00bcda50 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcca64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
- 00bcca64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcda58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8b0:8"]]
+ 00bcda58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcca44 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcda38 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b118bb48b69cae52a933aa31411d5e23"></a>

### [`00bcca78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcca78.md) → [`00bcda6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcda6c.md) _ZN8firebase4auth11jnilistener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00bcda98",
      "incomplete_value": true,
      "site": "00bcda98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccaa4",
      "incomplete_value": true,
      "site": "00bccaa4",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcda80",
      "incomplete_value": true,
      "site": "00bcda80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcda88",
      "incomplete_value": true,
      "site": "00bcda90",
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
            "const:ce9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcca94",
      "incomplete_value": true,
      "site": "00bcca9c",
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
            "const:c1a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcda7c",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcda88",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ],
    [
      "00bcda98",
      "WRITE",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcda7c",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcda88",
      "PARAM",
      [
        "storage",
        "002b5ce9",
        null,
        "string"
      ]
    ],
    [
      "00bcda98",
      "WRITE",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcca9c ["INT_ADD", "register:40f0:8", ["const:bcca9c:8", "const:4:8"]]
- 00bcca9c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcda90 ["INT_ADD", "register:40f0:8", ["const:bcda90:8", "const:4:8"]]
+ 00bcda90 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bccaa4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
- 00bccaa4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcda98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8b0:8"]]
+ 00bcda98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcca84 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcda78 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-aeb76842fed595bb6d0a0142689e7304"></a>

### [`00bccab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccab8.md) → [`00bcdaac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdaac.md) _ZN8firebase4auth11jnilistener10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bcdadc",
      "incomplete_value": true,
      "site": "00bcdadc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccae8",
      "incomplete_value": true,
      "site": "00bccae8",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcdac0",
      "incomplete_value": true,
      "site": "00bcdac0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdacc",
      "incomplete_value": false,
      "site": "00bcdad4",
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
            "const:ce9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccad8",
      "incomplete_value": false,
      "site": "00bccae0",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcdabc",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdacc",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ],
    [
      "00bcdadc",
      "WRITE",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcdabc",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdacc",
      "PARAM",
      [
        "storage",
        "002b5ce9",
        null,
        "string"
      ]
    ],
    [
      "00bcdadc",
      "WRITE",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccae0 ["INT_ADD", "register:40f0:8", ["const:bccae0:8", "const:4:8"]]
- 00bccae0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcdad4 ["INT_ADD", "register:40f0:8", ["const:bcdad4:8", "const:4:8"]]
+ 00bcdad4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bccae8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
- 00bccae8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcdadc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8b0:8"]]
+ 00bcdadc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccac4 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcdab8 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-624fd929d51a8fe2b6c4e1b628d3f6e1"></a>

### [`00bccafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccafc.md) → [`00bcdaf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdaf0.md) _ZN8firebase4auth11jnilistener10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcdb20",
      "incomplete_value": true,
      "site": "00bcdb20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcdb04",
      "incomplete_value": true,
      "site": "00bcdb04",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdb0c",
      "incomplete_value": false,
      "site": "00bcdb18",
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
            "const:ce9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcdb00",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdb0c",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ],
    [
      "00bcdb20",
      "WRITE",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcdb00",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdb0c",
      "PARAM",
      [
        "storage",
        "002b5ce9",
        null,
        "string"
      ]
    ],
    [
      "00bcdb20",
      "WRITE",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccb24 ["INT_ADD", "register:40f0:8", ["const:bccb24:8", "const:4:8"]]
- 00bccb24 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcdb18 ["INT_ADD", "register:40f0:8", ["const:bcdb18:8", "const:4:8"]]
+ 00bcdb18 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bccb2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
- 00bccb2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcdb20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8b0:8"]]
+ 00bcdb20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccb08 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcdafc ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-7a2cc5a75ad7398b83947721d4589f36"></a>

### [`00bccb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccb4c.md) → [`00bcdb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdb40.md) _ZN8firebase4auth11jnilistener15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcdb98",
      "incomplete_value": true,
      "site": "00bcdb98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccba4",
      "incomplete_value": true,
      "site": "00bccba4",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdb74",
      "incomplete_value": true,
      "site": "00bcdb80",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccb80",
      "incomplete_value": true,
      "site": "00bccb8c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8f0:8"
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
      "00bcdb54",
      "READ",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcdb74",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdb98",
      "WRITE",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcdb54",
      "READ",
      [
        "storage",
        "011278b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcdb74",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdb98",
      "WRITE",
      [
        "storage",
        "011278b8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccb8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bccb8c ["INT_ADD", "register:40f0:8", ["const:bccb8c:8", "const:4:8"]]
- 00bccb8c ["CALLIND", null, ["register:0:8"]]
+ 00bcdb80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcdb80 ["INT_ADD", "register:40f0:8", ["const:bcdb80:8", "const:4:8"]]
+ 00bcdb80 ["CALLIND", null, ["register:0:8"]]
- 00bccba4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bccba4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8f8:8"]]
- 00bccba4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bcdb98 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bcdb98 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8b8:8"]]
+ 00bcdb98 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bccb5c ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bcdb50 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-cb07fb265f339b00de924ced4b0594ff"></a>

### [`00bccbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccbb8.md) → [`00bcdbac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdbac.md) _ZN8firebase4auth11jnilistener12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00bcdbe8",
      "incomplete_value": true,
      "site": "00bcdbe8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:8b8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcdc08",
      "incomplete_value": true,
      "site": "00bcdc08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcdbc4",
      "incomplete_value": true,
      "site": "00bcdbc4",
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
      "00bcdbc0",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdbcc",
      "READ",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcdbe8",
      "WRITE",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcdbc0",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdbcc",
      "READ",
      [
        "storage",
        "011278b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcdbe8",
      "WRITE",
      [
        "storage",
        "011278b8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccbf4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bccbf4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bccbf4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8f8:8"]]
- 00bccbf4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bcdbe8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bcdbe8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bcdbe8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8b8:8"]]
+ 00bcdbe8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bccc10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bccc10 ["INT_ADD", "register:40f0:8", ["const:bccc10:8", "const:4:8"]]
- 00bccc10 ["CALLIND", null, ["register:0:8"]]
+ 00bcdc04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcdc04 ["INT_ADD", "register:40f0:8", ["const:bcdc04:8", "const:4:8"]]
+ 00bcdc04 ["CALLIND", null, ["register:0:8"]]
- 00bccc14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8f0:8"]]
- 00bccc14 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bccc14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bcdc08 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8b0:8"]]
+ 00bcdc08 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bcdc08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-a69130371b12d58fdc5f134e976181a4"></a>

### [`00bccc28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccc28.md) → [`00bcdc1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdc1c.md) _ZN8firebase4auth11jnilistener14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcdc5c",
      "incomplete_value": true,
      "site": "00bcdc5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccc68",
      "incomplete_value": true,
      "site": "00bccc68",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdc40",
      "incomplete_value": false,
      "site": "00bcdc54",
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
            "const:ce9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcdc30",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdc40",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ],
    [
      "00bcdc5c",
      "WRITE",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcdc30",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdc40",
      "PARAM",
      [
        "storage",
        "002b5ce9",
        null,
        "string"
      ]
    ],
    [
      "00bcdc5c",
      "WRITE",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccc60 ["INT_ADD", "register:40f0:8", ["const:bccc60:8", "const:4:8"]]
- 00bccc60 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcdc54 ["INT_ADD", "register:40f0:8", ["const:bcdc54:8", "const:4:8"]]
+ 00bcdc54 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bccc68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8f0:8"]]
- 00bccc68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcdc5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8b0:8"]]
+ 00bcdc5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccc34 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bcdc28 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-1dacce06f1e26c489afb7b7262a8f411"></a>

### [`00bccc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccc98.md) → [`00bcdc8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdc8c.md) _ZN8firebase4auth11jnilistener11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bcdca8",
      "incomplete_value": false,
      "site": "00bcdcac",
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
      "definition_site": "00bcccb4",
      "incomplete_value": false,
      "site": "00bcccb8",
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
      "definition_site": "00bcdcb8",
      "incomplete_value": true,
      "site": "00bcdcc4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bcccc4",
      "incomplete_value": true,
      "site": "00bcccd0",
      "value": [
        "LOAD",
        "8",
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
      "00bcdca8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bcdcb8",
      "DATA",
      [
        "storage",
        "01126900",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcdca8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bcdcb8",
      "DATA",
      [
        "storage",
        "011278c0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcccb8 ["INT_ADD", "register:40f0:8", ["const:bcccb8:8", "const:4:8"]]
- 00bcccb8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcdcac ["INT_ADD", "register:40f0:8", ["const:bcdcac:8", "const:4:8"]]
+ 00bcdcac ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcccb4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bcccb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcccb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcccb4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcdca8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bcdca8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcdca8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcdca8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcccbc ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bcdcb0 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-326c57616edab7eeed0b27706d075c72"></a>

### [`00bcccd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcccd4.md) → [`00bcdcc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdcc8.md) _ZN8firebase4auth11jnilistener13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcdd08",
      "incomplete_value": true,
      "site": "00bcdd08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccd14",
      "incomplete_value": true,
      "site": "00bccd14",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcdce4",
      "incomplete_value": true,
      "site": "00bcdce4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcccf0",
      "incomplete_value": true,
      "site": "00bcccf0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdcec",
      "incomplete_value": false,
      "site": "00bcdd00",
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
            "const:ce9:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcdcdc",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdcec",
      "PARAM",
      [
        "storage",
        "002b5c1a",
        null,
        "string"
      ]
    ],
    [
      "00bcdd08",
      "WRITE",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcdcdc",
      "READ",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdcec",
      "PARAM",
      [
        "storage",
        "002b5ce9",
        null,
        "string"
      ]
    ],
    [
      "00bcdd08",
      "WRITE",
      [
        "storage",
        "011278b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccd0c ["INT_ADD", "register:40f0:8", ["const:bccd0c:8", "const:4:8"]]
- 00bccd0c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcdd00 ["INT_ADD", "register:40f0:8", ["const:bcdd00:8", "const:4:8"]]
+ 00bcdd00 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bccd14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8f0:8"]]
- 00bccd14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcdd08 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8b0:8"]]
+ 00bcdd08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccce0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bcdcd4 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-457f8fd795a03e1d15275ab448c0b96e"></a>

### [`00bccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccd44.md) → [`00bcdd38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdd38.md) _ZN8firebase4auth11jnilistener10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bcdd54",
      "incomplete_value": false,
      "site": "00bcdd58",
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
      "definition_site": "00bccd60",
      "incomplete_value": false,
      "site": "00bccd64",
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
      "00bcdd54",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bcdd64",
      "DATA",
      [
        "storage",
        "01126910",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bcdd54",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bcdd64",
      "DATA",
      [
        "storage",
        "011278d0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccd64 ["INT_ADD", "register:40f0:8", ["const:bccd64:8", "const:4:8"]]
- 00bccd64 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcdd58 ["INT_ADD", "register:40f0:8", ["const:bcdd58:8", "const:4:8"]]
+ 00bcdd58 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bccd60 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bccd60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bccd60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bccd60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcdd54 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bcdd54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcdd54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcdd54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bccd68 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bcdd5c ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-f9056dc3851d508290bbfe057cd42e8f"></a>

### [`00bccd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccd80.md) → [`00bcdd74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdd74.md) _ZN8firebase4auth21jni_id_token_listener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bcdda0",
      "incomplete_value": true,
      "site": "00bcdda0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccdac",
      "incomplete_value": true,
      "site": "00bccdac",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcdd88",
      "incomplete_value": true,
      "site": "00bcdd88",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdd94",
      "incomplete_value": false,
      "site": "00bcdd98",
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
            "const:9fb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccda0",
      "incomplete_value": false,
      "site": "00bccda4",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcdd84",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdd94",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ],
    [
      "00bcdda0",
      "WRITE",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcdd84",
      "READ",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdd94",
      "PARAM",
      [
        "storage",
        "002aa9fb",
        null,
        "string"
      ]
    ],
    [
      "00bcdda0",
      "WRITE",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccda4 ["INT_ADD", "register:40f0:8", ["const:bccda4:8", "const:4:8"]]
- 00bccda4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcdd98 ["INT_ADD", "register:40f0:8", ["const:bcdd98:8", "const:4:8"]]
+ 00bcdd98 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bccdac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:918:8"]]
- 00bccdac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcdda0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d8:8"]]
+ 00bcdda0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccd8c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcdd80 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-408b95e3ced48c9c88e71eb2a465c154"></a>

### [`00bccdc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccdc0.md) → [`00bcddb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcddb4.md) _ZN8firebase4auth21jni_id_token_listener19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00bcdde0",
      "incomplete_value": true,
      "site": "00bcdde0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcddc8",
      "incomplete_value": true,
      "site": "00bcddc8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcddd0",
      "incomplete_value": false,
      "site": "00bcddd8",
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
            "const:9fb:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcddc4",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcddd0",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ],
    [
      "00bcdde0",
      "WRITE",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcddc4",
      "READ",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcddd0",
      "PARAM",
      [
        "storage",
        "002aa9fb",
        null,
        "string"
      ]
    ],
    [
      "00bcdde0",
      "WRITE",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccde4 ["INT_ADD", "register:40f0:8", ["const:bccde4:8", "const:4:8"]]
- 00bccde4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcddd8 ["INT_ADD", "register:40f0:8", ["const:bcddd8:8", "const:4:8"]]
+ 00bcddd8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bccdec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:918:8"]]
- 00bccdec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcdde0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d8:8"]]
+ 00bcdde0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccdcc ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcddc0 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-066b0ff1ca8cda7d8d5f63cf796010b5"></a>

### [`00bcce00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcce00.md) → [`00bcddf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcddf4.md) _ZN8firebase4auth21jni_id_token_listener10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00bcde24",
      "incomplete_value": true,
      "site": "00bcde24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcce30",
      "incomplete_value": true,
      "site": "00bcce30",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcde08",
      "incomplete_value": true,
      "site": "00bcde08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcde14",
      "incomplete_value": false,
      "site": "00bcde1c",
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
            "const:9fb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcce20",
      "incomplete_value": false,
      "site": "00bcce28",
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcde04",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcde14",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ],
    [
      "00bcde24",
      "WRITE",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcde04",
      "READ",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcde14",
      "PARAM",
      [
        "storage",
        "002aa9fb",
        null,
        "string"
      ]
    ],
    [
      "00bcde24",
      "WRITE",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcce28 ["INT_ADD", "register:40f0:8", ["const:bcce28:8", "const:4:8"]]
- 00bcce28 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcde1c ["INT_ADD", "register:40f0:8", ["const:bcde1c:8", "const:4:8"]]
+ 00bcde1c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcce30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:918:8"]]
- 00bcce30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcde24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d8:8"]]
+ 00bcde24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcce0c ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcde00 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-e543eebbe82167b19e007f9383c955a6"></a>

### [`00bcce44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcce44.md) → [`00bcde38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcde38.md) _ZN8firebase4auth21jni_id_token_listener10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcde68",
      "incomplete_value": true,
      "site": "00bcde68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcce74",
      "incomplete_value": true,
      "site": "00bcce74",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcde4c",
      "incomplete_value": true,
      "site": "00bcde4c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcce58",
      "incomplete_value": true,
      "site": "00bcce58",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcde54",
      "incomplete_value": false,
      "site": "00bcde60",
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
            "const:9fb:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcde48",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcde54",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ],
    [
      "00bcde68",
      "WRITE",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcde48",
      "READ",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcde54",
      "PARAM",
      [
        "storage",
        "002aa9fb",
        null,
        "string"
      ]
    ],
    [
      "00bcde68",
      "WRITE",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcce6c ["INT_ADD", "register:40f0:8", ["const:bcce6c:8", "const:4:8"]]
- 00bcce6c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcde60 ["INT_ADD", "register:40f0:8", ["const:bcde60:8", "const:4:8"]]
+ 00bcde60 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcce74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:918:8"]]
- 00bcce74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcde68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8d8:8"]]
+ 00bcde68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcce50 ["COPY", "register:4098:8", ["const:1126000:8"]]
+ 00bcde44 ["COPY", "register:4098:8", ["const:1127000:8"]]
~~~


<a id="compare-b2aaa5044c6c592f6fb5b94055b9bade"></a>

### [`00bcce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bcce94.md) → [`00bcde88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcde88.md) _ZN8firebase4auth21jni_id_token_listener15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00bcdee0",
      "incomplete_value": true,
      "site": "00bcdee0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdebc",
      "incomplete_value": true,
      "site": "00bcdec8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00bcde9c",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcdebc",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdee0",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcde9c",
      "READ",
      [
        "storage",
        "011278e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcdebc",
      "READ",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdee0",
      "WRITE",
      [
        "storage",
        "011278e0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcced4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcced4 ["INT_ADD", "register:40f0:8", ["const:bcced4:8", "const:4:8"]]
- 00bcced4 ["CALLIND", null, ["register:0:8"]]
+ 00bcdec8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcdec8 ["INT_ADD", "register:40f0:8", ["const:bcdec8:8", "const:4:8"]]
+ 00bcdec8 ["CALLIND", null, ["register:0:8"]]
- 00bcceec ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bcceec ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:920:8"]]
- 00bcceec ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bcdee0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bcdee0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8e0:8"]]
+ 00bcdee0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bccea4 ["COPY", "register:40a8:8", ["const:1126000:8"]]
+ 00bcde98 ["COPY", "register:40a8:8", ["const:1127000:8"]]
~~~


<a id="compare-3939f0f7548c09659f43fb83b580cde7"></a>

### [`00bccf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccf00.md) → [`00bcdef4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdef4.md) _ZN8firebase4auth21jni_id_token_listener12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcdf30",
      "incomplete_value": true,
      "site": "00bcdf30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccf3c",
      "incomplete_value": true,
      "site": "00bccf3c",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bcdf50",
      "incomplete_value": true,
      "site": "00bcdf50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccf5c",
      "incomplete_value": true,
      "site": "00bccf5c",
      "value": [
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdf40",
      "incomplete_value": true,
      "site": "00bcdf4c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccf4c",
      "incomplete_value": true,
      "site": "00bccf58",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:918:8"
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
      "00bcdf08",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdf14",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcdf30",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bcdf08",
      "READ",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdf14",
      "READ",
      [
        "storage",
        "011278e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bcdf30",
      "WRITE",
      [
        "storage",
        "011278e0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccf3c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bccf3c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bccf3c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:920:8"]]
- 00bccf3c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bcdf30 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bcdf30 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bcdf30 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8e0:8"]]
+ 00bcdf30 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bccf58 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bccf58 ["INT_ADD", "register:40f0:8", ["const:bccf58:8", "const:4:8"]]
- 00bccf58 ["CALLIND", null, ["register:0:8"]]
+ 00bcdf4c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bcdf4c ["INT_ADD", "register:40f0:8", ["const:bcdf4c:8", "const:4:8"]]
+ 00bcdf4c ["CALLIND", null, ["register:0:8"]]
- 00bccf5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:918:8"]]
- 00bccf5c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bccf5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bcdf50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d8:8"]]
+ 00bcdf50 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bcdf50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-5e274a5b0c40a640816b05e91d3d0de4"></a>

### [`00bccf70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccf70.md) → [`00bcdf64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdf64.md) _ZN8firebase4auth21jni_id_token_listener14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bcdfa4",
      "incomplete_value": true,
      "site": "00bcdfa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccfb0",
      "incomplete_value": true,
      "site": "00bccfb0",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bcdf80",
      "incomplete_value": true,
      "site": "00bcdf80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bccf8c",
      "incomplete_value": true,
      "site": "00bccf8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bcdf88",
      "incomplete_value": false,
      "site": "00bcdf9c",
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
            "const:9fb:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bcdf78",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdf88",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ],
    [
      "00bcdfa4",
      "WRITE",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcdf78",
      "READ",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bcdf88",
      "PARAM",
      [
        "storage",
        "002aa9fb",
        null,
        "string"
      ]
    ],
    [
      "00bcdfa4",
      "WRITE",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bccfa8 ["INT_ADD", "register:40f0:8", ["const:bccfa8:8", "const:4:8"]]
- 00bccfa8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bcdf9c ["INT_ADD", "register:40f0:8", ["const:bcdf9c:8", "const:4:8"]]
+ 00bcdf9c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bccfb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:918:8"]]
- 00bccfb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bcdfa4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d8:8"]]
+ 00bcdfa4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bccf7c ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bcdf70 ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-eae934b5d8d87332273a2e507365a9c8"></a>

### [`00bccfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcc/00bccfe0.md) → [`00bcdfd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bcd/00bcdfd4.md) _ZN8firebase4auth21jni_id_token_listener11GetMethodIdENS1_6MethodE

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
      "definition_site": "00bcdff0",
      "incomplete_value": false,
      "site": "00bcdff4",
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
      "definition_site": "00bccffc",
      "incomplete_value": false,
      "site": "00bcd000",
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
      "definition_site": "00bce000",
      "incomplete_value": true,
      "site": "00bce00c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00bcd00c",
      "incomplete_value": true,
      "site": "00bcd018",
      "value": [
        "LOAD",
        "8",
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
      "00bcdff0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bce000",
      "DATA",
      [
        "storage",
        "01126928",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bcdff0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00bce000",
      "DATA",
      [
        "storage",
        "011278e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd000 ["INT_ADD", "register:40f0:8", ["const:bcd000:8", "const:4:8"]]
- 00bcd000 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bcdff4 ["INT_ADD", "register:40f0:8", ["const:bcdff4:8", "const:4:8"]]
+ 00bcdff4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bccffc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00bccffc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bccffc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bccffc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bcdff0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00bcdff0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcdff0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bcdff0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcd004 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bcdff8 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-349f128ba91720f4bb7083478dd459ad"></a>

### [`00bcd01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd01c.md) → [`00bce010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce010.md) _ZN8firebase4auth21jni_id_token_listener13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00bce050",
      "incomplete_value": true,
      "site": "00bce050",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bce02c",
      "incomplete_value": true,
      "site": "00bce02c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce034",
      "incomplete_value": false,
      "site": "00bce048",
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
            "const:9fb:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bce024",
      "READ",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce034",
      "PARAM",
      [
        "storage",
        "002aa92e",
        null,
        "string"
      ]
    ],
    [
      "00bce050",
      "WRITE",
      [
        "storage",
        "01126918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bce024",
      "READ",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce034",
      "PARAM",
      [
        "storage",
        "002aa9fb",
        null,
        "string"
      ]
    ],
    [
      "00bce050",
      "WRITE",
      [
        "storage",
        "011278d8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd054 ["INT_ADD", "register:40f0:8", ["const:bcd054:8", "const:4:8"]]
- 00bcd054 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bce048 ["INT_ADD", "register:40f0:8", ["const:bce048:8", "const:4:8"]]
+ 00bce048 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00bcd05c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:918:8"]]
- 00bcd05c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bce050 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8d8:8"]]
+ 00bce050 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcd028 ["COPY", "register:40a0:8", ["const:1126000:8"]]
+ 00bce01c ["COPY", "register:40a0:8", ["const:1127000:8"]]
~~~


<a id="compare-664cb3ee32f241b916bc85bbfba6be98"></a>

### [`00bcd08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd08c.md) → [`00bce080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce080.md) _ZN8firebase4auth21jni_id_token_listener10GetFieldIdENS1_5FieldE

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
      "definition_site": "00bce09c",
      "incomplete_value": false,
      "site": "00bce0a0",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00bce0ac",
      "incomplete_value": true,
      "site": "00bce0b8",
      "value": [
        "LOAD",
        "8",
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
      "00bce09c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bce0ac",
      "DATA",
      [
        "storage",
        "01126938",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bce09c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00bce0ac",
      "DATA",
      [
        "storage",
        "011278f8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd0ac ["INT_ADD", "register:40f0:8", ["const:bcd0ac:8", "const:4:8"]]
- 00bcd0ac ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00bce0a0 ["INT_ADD", "register:40f0:8", ["const:bce0a0:8", "const:4:8"]]
+ 00bce0a0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00bcd0a8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00bcd0a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bcd0a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bcd0a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bce09c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00bce09c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bce09c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bce09c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bcd0b0 ["COPY", "register:4040:8", ["const:1126000:8"]]
+ 00bce0a4 ["COPY", "register:4040:8", ["const:1127000:8"]]
~~~


<a id="compare-a8c91f69b1a4e5f628bb17800643a355"></a>

### [`00bcd0c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd0c8.md) → [`00bce0bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce0bc.md) _ZN8firebase4auth18CacheAuthMethodIdsEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd10.md) · 呼出先 3件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5ece0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ece0.md) · 呼出先 3件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md) [`00c5bfd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfd0.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 81.43% / 新版 81.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 16件, `store_condition` 1件, `store_destination` 6件

アドレスに依存する影響 `branch_value` 3件, `call_argument_candidate` 2件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bce108",
      "incomplete_value": true,
      "site": "00bce108",
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
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd114",
      "incomplete_value": true,
      "site": "00bcd114",
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
            "const:828:8"
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
      "definition_site": "00bce160",
      "incomplete_value": true,
      "site": "00bce160",
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
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd16c",
      "incomplete_value": true,
      "site": "00bcd16c",
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
            "const:8d0:8"
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
      "definition_site": "00bce1b8",
      "incomplete_value": true,
      "site": "00bce1b8",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd1c4",
      "incomplete_value": true,
      "site": "00bcd1c4",
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
      "00bce0d8",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce0ec",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bce108",
      "WRITE",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bce0d8",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce0ec",
      "PARAM",
      [
        "storage",
        "002ac2ad",
        null,
        "string"
      ]
    ],
    [
      "00bce108",
      "WRITE",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd114 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:828:8"]]
- 00bcd114 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bce108 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:7e8:8"]]
+ 00bce108 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bcd138 ["INT_ADD", "register:40f0:8", ["const:bcd138:8", "const:4:8"]]
- 00bcd138 ["CALL", null, ["callee:00c5bfd0:8"]]
+ 00bce12c ["INT_ADD", "register:40f0:8", ["const:bce12c:8", "const:4:8"]]
+ 00bce12c ["CALL", null, ["callee:00c5bfd0:8"]]
- 00bcd164 ["INT_ADD", "register:40f0:8", ["const:bcd164:8", "const:4:8"]]
- 00bcd164 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00bce158 ["INT_ADD", "register:40f0:8", ["const:bce158:8", "const:4:8"]]
+ 00bce158 ["CALL", null, ["callee:00c5bfb0:8"]]
~~~


<a id="compare-be4566c47d4c3bb244b48c2afa92594d"></a>

### [`00bcd2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd2f8.md) → [`00bce2ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce2ec.md) _ZN8firebase4auth18ReleaseAuthClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd30.md) · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)
- 新版 呼出元 1件 [`00c5ed00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ed00.md) · 呼出先 1件 [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 8件

アドレスに依存する影響 `branch_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bce328",
      "incomplete_value": true,
      "site": "00bce328",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd334",
      "incomplete_value": true,
      "site": "00bcd334",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bce348",
      "incomplete_value": true,
      "site": "00bce348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bce374",
      "incomplete_value": true,
      "site": "00bce374",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:898:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bcd380",
      "incomplete_value": true,
      "site": "00bcd380",
      "value": [
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
      "00bce300",
      "READ",
      [
        "storage",
        "01126828",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce310",
      "READ",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ],
    [
      "00bce328",
      "WRITE",
      [
        "storage",
        "01126830",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bce300",
      "READ",
      [
        "storage",
        "011277e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce310",
      "READ",
      [
        "storage",
        "011277f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bce328",
      "WRITE",
      [
        "storage",
        "011277f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd334 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bcd334 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bcd334 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:830:8"]]
- 00bcd334 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bce328 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bce328 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bce328 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7f0:8"]]
+ 00bce328 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bcd350 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bcd350 ["INT_ADD", "register:40f0:8", ["const:bcd350:8", "const:4:8"]]
- 00bcd350 ["CALLIND", null, ["register:0:8"]]
+ 00bce344 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bce344 ["INT_ADD", "register:40f0:8", ["const:bce344:8", "const:4:8"]]
+ 00bce344 ["CALLIND", null, ["register:0:8"]]
- 00bcd354 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:828:8"]]
- 00bcd354 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bcd354 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bce348 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7e8:8"]]
+ 00bce348 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bce348 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-3df81705f395669e3d996ea970c2f812"></a>

### [`00bcd44c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcd/00bcd44c.md) → [`00bce440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bce/00bce440.md) _ZN8firebase4auth17UpdateCurrentUserEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dd00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd00.md) · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)
- 新版 呼出元 1件 [`00c5ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5e/00c5ecd0.md) · 呼出先 7件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`00c5baa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5baa0.md) [`00c5bab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bab0.md) [`00c5c000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c000.md) [`00c5c120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c120.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce478",
      "incomplete_value": true,
      "site": "00bce480",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:800:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bce4b8",
      "incomplete_value": false,
      "site": "00bce4c0",
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
            "const:d04:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00bce478",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce4b8",
      "PARAM",
      [
        "storage",
        "002b8c35",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bce478",
      "READ",
      [
        "storage",
        "01127800",
        null,
        "undefined8"
      ]
    ],
    [
      "00bce4b8",
      "PARAM",
      [
        "storage",
        "002b8d04",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bcd48c ["INT_ADD", "register:40f0:8", ["const:bcd48c:8", "const:4:8"]]
- 00bcd48c ["CALL", null, ["callee:00497b94:8"]]
+ 00bce480 ["INT_ADD", "register:40f0:8", ["const:bce480:8", "const:4:8"]]
+ 00bce480 ["CALL", null, ["callee:00497b94:8"]]
- 00bcd4cc ["INT_ADD", "register:40f0:8", ["const:bcd4cc:8", "const:4:8"]]
- 00bcd4cc ["CALL", null, ["callee:00c5c1d0:8"]]
+ 00bce4c0 ["INT_ADD", "register:40f0:8", ["const:bce4c0:8", "const:4:8"]]
+ 00bce4c0 ["CALL", null, ["callee:00c5c1d0:8"]]
- 00bcd468 ["INT_ADD", "register:40f0:8", ["const:bcd468:8", "const:4:8"]]
- 00bcd468 ["CALL", null, ["callee:00c5c120:8"]]
+ 00bce45c ["INT_ADD", "register:40f0:8", ["const:bce45c:8", "const:4:8"]]
+ 00bce45c ["CALL", null, ["callee:00c5c120:8"]]
~~~


