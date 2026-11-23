# v16.0.1 → v16.0.2 · 最優先の変更候補 (94)

[一覧の目次](README.md)

<a id="compare-8272c8b07532c6b3bcf2507eec38461d"></a>

### [`00bd6c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6c88.md) → [`00bd6d24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6d24.md) _ZN8firebase4auth26phone_auth_options_builder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bd6cb8",
      "incomplete_value": true,
      "site": "00bd6cb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b78:8"
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
    "old": {
      "definition_site": "00bd6c9c",
      "incomplete_value": true,
      "site": "00bd6c9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd6ca8",
      "incomplete_value": false,
      "site": "00bd6cb0",
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
            "const:d31:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd6d34",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d44",
      "PARAM",
      [
        "storage",
        "0029fd31",
        null,
        "string"
      ]
    ],
    [
      "00bd6d54",
      "WRITE",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6d34",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d44",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd6d54",
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
- 00bd6cb0 ["INT_ADD", "register:40f0:8", ["const:bd6cb0:8", "const:4:8"]]
- 00bd6cb0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6d4c ["INT_ADD", "register:40f0:8", ["const:bd6d4c:8", "const:4:8"]]
+ 00bd6d4c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6cb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b78:8"]]
- 00bd6cb8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6d54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00bd6d54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6c98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b78:8"]]
- 00bd6c98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6d34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00bd6d34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c38c4f0f9c35941ba46dbddbe3e16714"></a>

### [`00bd6ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6ccc.md) → [`00bd6d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6d68.md) _ZN8firebase4auth26phone_auth_options_builder10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd6cfc",
      "incomplete_value": true,
      "site": "00bd6cfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b78:8"
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
    "old": {
      "definition_site": "00bd6ce0",
      "incomplete_value": true,
      "site": "00bd6ce0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd6ce8",
      "incomplete_value": false,
      "site": "00bd6cf4",
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
            "const:d31:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd6d78",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d84",
      "PARAM",
      [
        "storage",
        "0029fd31",
        null,
        "string"
      ]
    ],
    [
      "00bd6d98",
      "WRITE",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6d78",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6d84",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd6d98",
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
- 00bd6cf4 ["INT_ADD", "register:40f0:8", ["const:bd6cf4:8", "const:4:8"]]
- 00bd6cf4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6d90 ["INT_ADD", "register:40f0:8", ["const:bd6d90:8", "const:4:8"]]
+ 00bd6d90 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6cfc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b78:8"]]
- 00bd6cfc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6d98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00bd6d98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6cdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b78:8"]]
- 00bd6cdc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6d78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c78:8"]]
+ 00bd6d78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-720c8976593d046eb33c2b2257530f47"></a>

### [`00bd6d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6d1c.md) → [`00bd6db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6db8.md) _ZN8firebase4auth26phone_auth_options_builder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bd6d74",
      "incomplete_value": true,
      "site": "00bd6d74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:b80:8"
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
    "old": {
      "definition_site": "00bd6d50",
      "incomplete_value": true,
      "site": "00bd6d5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd6dcc",
      "READ",
      [
        "storage",
        "01126b80",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6dec",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6e10",
      "WRITE",
      [
        "storage",
        "01126b80",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6dcc",
      "READ",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6dec",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6e10",
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
- 00bd6d5c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6d5c ["INT_ADD", "register:40f0:8", ["const:bd6d5c:8", "const:4:8"]]
- 00bd6d5c ["CALLIND", null, ["register:0:8"]]
+ 00bd6df8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6df8 ["INT_ADD", "register:40f0:8", ["const:bd6df8:8", "const:4:8"]]
+ 00bd6df8 ["CALLIND", null, ["register:0:8"]]
- 00bd6d74 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd6d74 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b80:8"]]
- 00bd6d74 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd6e10 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd6e10 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c80:8"]]
+ 00bd6e10 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd6d30 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b80:8"]]
- 00bd6d30 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd6d30 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd6dcc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c80:8"]]
+ 00bd6dcc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6dcc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-b58bf866ebc0c6f70b3ca72e001dd9ac"></a>

### [`00bd6d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6d88.md) → [`00bd6e24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6e24.md) _ZN8firebase4auth26phone_auth_options_builder12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bd6dc4",
      "incomplete_value": true,
      "site": "00bd6dc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:b80:8"
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
    "old": {
      "definition_site": "00bd6de4",
      "incomplete_value": true,
      "site": "00bd6de4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b78:8"
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
    "old": {
      "definition_site": "00bd6da0",
      "incomplete_value": true,
      "site": "00bd6da0",
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
      "00bd6e38",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6e44",
      "READ",
      [
        "storage",
        "01126b80",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6e60",
      "WRITE",
      [
        "storage",
        "01126b80",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd6e38",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6e44",
      "READ",
      [
        "storage",
        "01126c80",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd6e60",
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
- 00bd6dc4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd6dc4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd6dc4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b80:8"]]
- 00bd6dc4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd6e60 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd6e60 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd6e60 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c80:8"]]
+ 00bd6e60 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd6de0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd6de0 ["INT_ADD", "register:40f0:8", ["const:bd6de0:8", "const:4:8"]]
- 00bd6de0 ["CALLIND", null, ["register:0:8"]]
+ 00bd6e7c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd6e7c ["INT_ADD", "register:40f0:8", ["const:bd6e7c:8", "const:4:8"]]
+ 00bd6e7c ["CALLIND", null, ["register:0:8"]]
- 00bd6de4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b78:8"]]
- 00bd6de4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd6de4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd6e80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00bd6e80 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd6e80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-4a5424c4519ab639ac7623daf714f606"></a>

### [`00bd6df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6df8.md) → [`00bd6e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6e94.md) _ZN8firebase4auth26phone_auth_options_builder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd6e38",
      "incomplete_value": true,
      "site": "00bd6e38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b78:8"
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
    "old": {
      "definition_site": "00bd6e14",
      "incomplete_value": true,
      "site": "00bd6e14",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd6e1c",
      "incomplete_value": false,
      "site": "00bd6e30",
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
            "const:d31:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd6ea8",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6eb8",
      "PARAM",
      [
        "storage",
        "0029fd31",
        null,
        "string"
      ]
    ],
    [
      "00bd6ed4",
      "WRITE",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6ea8",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6eb8",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd6ed4",
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
- 00bd6e30 ["INT_ADD", "register:40f0:8", ["const:bd6e30:8", "const:4:8"]]
- 00bd6e30 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6ecc ["INT_ADD", "register:40f0:8", ["const:bd6ecc:8", "const:4:8"]]
+ 00bd6ecc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6e38 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b78:8"]]
- 00bd6e38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6ed4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00bd6ed4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6e0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b78:8"]]
- 00bd6e0c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6ea8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00bd6ea8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ba2a170dc2a26e2781c00f1e96371e03"></a>

### [`00bd6e68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6e68.md) → [`00bd6f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6f04.md) _ZN8firebase4auth26phone_auth_options_builder11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bd6e84",
      "incomplete_value": false,
      "site": "00bd6e88",
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
    "old": {
      "definition_site": "00bd6e94",
      "incomplete_value": true,
      "site": "00bd6ea0",
      "value": [
        "LOAD",
        "8",
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
      "00bd6f20",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd6f30",
      "DATA",
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
      "00bd6f20",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd6f30",
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
- 00bd6e88 ["INT_ADD", "register:40f0:8", ["const:bd6e88:8", "const:4:8"]]
- 00bd6e88 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd6f24 ["INT_ADD", "register:40f0:8", ["const:bd6f24:8", "const:4:8"]]
+ 00bd6f24 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd6e84 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd6e84 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6e84 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6e84 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd6f20 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd6f20 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6f20 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd6f20 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6e90 ["COPY", "tmp:0:8", ["const:b88:8"]]
- 00bd6e90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd6e90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd6e90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd6f2c ["COPY", "tmp:0:8", ["const:c88:8"]]
+ 00bd6f2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd6f2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd6f2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ab7f0a69d3cb32e9c9d4eabe0d8a6ca7"></a>

### [`00bd6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6ea4.md) → [`00bd6f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6f40.md) _ZN8firebase4auth26phone_auth_options_builder13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd6ee4",
      "incomplete_value": true,
      "site": "00bd6ee4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b78:8"
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
    "old": {
      "definition_site": "00bd6ec0",
      "incomplete_value": true,
      "site": "00bd6ec0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd6ec8",
      "incomplete_value": false,
      "site": "00bd6edc",
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
            "const:d31:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd6f54",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6f64",
      "PARAM",
      [
        "storage",
        "0029fd31",
        null,
        "string"
      ]
    ],
    [
      "00bd6f80",
      "WRITE",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6f54",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd6f64",
      "PARAM",
      [
        "storage",
        "0029fce4",
        null,
        "string"
      ]
    ],
    [
      "00bd6f80",
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
- 00bd6edc ["INT_ADD", "register:40f0:8", ["const:bd6edc:8", "const:4:8"]]
- 00bd6edc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd6f78 ["INT_ADD", "register:40f0:8", ["const:bd6f78:8", "const:4:8"]]
+ 00bd6f78 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6ee4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b78:8"]]
- 00bd6ee4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd6f80 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00bd6f80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6eb8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b78:8"]]
- 00bd6eb8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6f54 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c78:8"]]
+ 00bd6f54 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c7b7281e4d9e316cb9816d13109e81d9"></a>

### [`00bd6f14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6f14.md) → [`00bd6fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6fb0.md) _ZN8firebase4auth26phone_auth_options_builder10GetFieldIdENS1_5FieldE

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
      "00bd6fc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd6f38"
      ]
    ],
    [
      "unmatched:00bd6f30",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd6f34",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd6fc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd6fd4"
      ]
    ],
    [
      "00bd6fcc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd6fd0",
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
- 00bd6f28 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bd6f28 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd6fc4 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00bd6fc4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd6f30 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd6f30 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6f30 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd6f30 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd6f34 ["INT_ADD", "register:40f0:8", ["const:bd6f34:8", "const:4:8"]]
- 00bd6f34 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-286a391eed7cd4f7942cf7f6750b7a2d"></a>

### [`00bd6f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6f50.md) → [`00bd6fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd6/00bd6fec.md) _ZN8firebase4auth17phoneauthprovider19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
    "old": {
      "definition_site": "00bd6f7c",
      "incomplete_value": true,
      "site": "00bd6f7c",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd6f64",
      "incomplete_value": true,
      "site": "00bd6f64",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd6f70",
      "incomplete_value": false,
      "site": "00bd6f74",
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
            "const:d49:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd6ffc",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd700c",
      "PARAM",
      [
        "storage",
        "002a1d49",
        null,
        "string"
      ]
    ],
    [
      "00bd7018",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd6ffc",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd700c",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd7018",
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
- 00bd6f74 ["INT_ADD", "register:40f0:8", ["const:bd6f74:8", "const:4:8"]]
- 00bd6f74 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7010 ["INT_ADD", "register:40f0:8", ["const:bd7010:8", "const:4:8"]]
+ 00bd7010 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6f7c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
- 00bd6f7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7018 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00bd7018 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6f60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
- 00bd6f60 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd6ffc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00bd6ffc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-714a14f52913a12dfc9e4494db9a4e17"></a>

### [`00bd6f90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6f90.md) → [`00bd702c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd702c.md) _ZN8firebase4auth17phoneauthprovider19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS

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
    "old": {
      "definition_site": "00bd6fbc",
      "incomplete_value": true,
      "site": "00bd6fbc",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd6fa4",
      "incomplete_value": true,
      "site": "00bd6fa4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd6fac",
      "incomplete_value": false,
      "site": "00bd6fb4",
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
            "const:d49:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd703c",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7048",
      "PARAM",
      [
        "storage",
        "002a1d49",
        null,
        "string"
      ]
    ],
    [
      "00bd7058",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd703c",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7048",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd7058",
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
- 00bd6fb4 ["INT_ADD", "register:40f0:8", ["const:bd6fb4:8", "const:4:8"]]
- 00bd6fb4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7050 ["INT_ADD", "register:40f0:8", ["const:bd7050:8", "const:4:8"]]
+ 00bd7050 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd6fbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
- 00bd6fbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7058 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00bd7058 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6fa0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
- 00bd6fa0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd703c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00bd703c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2c16ad3a5a9a15cc969941fe2cb84eec"></a>

### [`00bd6fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd6/00bd6fd0.md) → [`00bd706c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd706c.md) _ZN8firebase4auth17phoneauthprovider10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bd7000",
      "incomplete_value": true,
      "site": "00bd7000",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd6fe4",
      "incomplete_value": true,
      "site": "00bd6fe4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd6ff0",
      "incomplete_value": false,
      "site": "00bd6ff8",
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
            "const:d49:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd707c",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd708c",
      "PARAM",
      [
        "storage",
        "002a1d49",
        null,
        "string"
      ]
    ],
    [
      "00bd709c",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd707c",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd708c",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd709c",
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
- 00bd6ff8 ["INT_ADD", "register:40f0:8", ["const:bd6ff8:8", "const:4:8"]]
- 00bd6ff8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7094 ["INT_ADD", "register:40f0:8", ["const:bd7094:8", "const:4:8"]]
+ 00bd7094 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7000 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
- 00bd7000 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd709c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00bd709c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd6fe0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
- 00bd6fe0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd707c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00bd707c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e2d640a2bf4d0a1b66da4c7c7d9fe960"></a>

### [`00bd7014`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7014.md) → [`00bd70b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd70b0.md) _ZN8firebase4auth17phoneauthprovider10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd7044",
      "incomplete_value": true,
      "site": "00bd7044",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd7028",
      "incomplete_value": true,
      "site": "00bd7028",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7030",
      "incomplete_value": false,
      "site": "00bd703c",
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
            "const:d49:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd70c0",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd70cc",
      "PARAM",
      [
        "storage",
        "002a1d49",
        null,
        "string"
      ]
    ],
    [
      "00bd70e0",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd70c0",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd70cc",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd70e0",
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
- 00bd703c ["INT_ADD", "register:40f0:8", ["const:bd703c:8", "const:4:8"]]
- 00bd703c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd70d8 ["INT_ADD", "register:40f0:8", ["const:bd70d8:8", "const:4:8"]]
+ 00bd70d8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7044 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
- 00bd7044 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd70e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00bd70e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7024 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:bd0:8"]]
- 00bd7024 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd70c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd0:8"]]
+ 00bd70c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0b3de384c97b5330cda5b8a95d0d664f"></a>

### [`00bd7064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7064.md) → [`00bd7100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7100.md) _ZN8firebase4auth17phoneauthprovider15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bd70bc",
      "incomplete_value": true,
      "site": "00bd70bc",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7098",
      "incomplete_value": true,
      "site": "00bd70a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd7114",
      "READ",
      [
        "storage",
        "01126bd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7134",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7158",
      "WRITE",
      [
        "storage",
        "01126bd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7114",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7134",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7158",
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
- 00bd70a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd70a4 ["INT_ADD", "register:40f0:8", ["const:bd70a4:8", "const:4:8"]]
- 00bd70a4 ["CALLIND", null, ["register:0:8"]]
+ 00bd7140 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7140 ["INT_ADD", "register:40f0:8", ["const:bd7140:8", "const:4:8"]]
+ 00bd7140 ["CALLIND", null, ["register:0:8"]]
- 00bd70bc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd70bc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:bd8:8"]]
- 00bd70bc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd7158 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd7158 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:cd8:8"]]
+ 00bd7158 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd7078 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:bd8:8"]]
- 00bd7078 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd7078 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd7114 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:cd8:8"]]
+ 00bd7114 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7114 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-c29a4c08900eee6b839110c79480b963"></a>

### [`00bd70d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd70d0.md) → [`00bd716c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd716c.md) _ZN8firebase4auth17phoneauthprovider12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bd710c",
      "incomplete_value": true,
      "site": "00bd710c",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bd712c",
      "incomplete_value": true,
      "site": "00bd712c",
      "value": [
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
    "ordinal": 6,
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
      "definition_site": "00bd70e8",
      "incomplete_value": true,
      "site": "00bd70e8",
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
      "00bd7180",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd718c",
      "READ",
      [
        "storage",
        "01126bd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd71a8",
      "WRITE",
      [
        "storage",
        "01126bd8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7180",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd718c",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd71a8",
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
- 00bd710c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd710c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd710c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:bd8:8"]]
- 00bd710c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd71a8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd71a8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd71a8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:cd8:8"]]
+ 00bd71a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd7128 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7128 ["INT_ADD", "register:40f0:8", ["const:bd7128:8", "const:4:8"]]
- 00bd7128 ["CALLIND", null, ["register:0:8"]]
+ 00bd71c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd71c4 ["INT_ADD", "register:40f0:8", ["const:bd71c4:8", "const:4:8"]]
+ 00bd71c4 ["CALLIND", null, ["register:0:8"]]
- 00bd712c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd0:8"]]
- 00bd712c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd712c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd71c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00bd71c8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd71c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-de965cbeab213d0e204ff60b186c76a9"></a>

### [`00bd7140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7140.md) → [`00bd71dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd71dc.md) _ZN8firebase4auth17phoneauthprovider14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd7180",
      "incomplete_value": true,
      "site": "00bd7180",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd715c",
      "incomplete_value": true,
      "site": "00bd715c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7164",
      "incomplete_value": false,
      "site": "00bd7178",
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
            "const:d49:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd71f0",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7200",
      "PARAM",
      [
        "storage",
        "002a1d49",
        null,
        "string"
      ]
    ],
    [
      "00bd721c",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd71f0",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7200",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd721c",
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
- 00bd7178 ["INT_ADD", "register:40f0:8", ["const:bd7178:8", "const:4:8"]]
- 00bd7178 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7214 ["INT_ADD", "register:40f0:8", ["const:bd7214:8", "const:4:8"]]
+ 00bd7214 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7180 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd0:8"]]
- 00bd7180 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd721c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00bd721c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7154 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd0:8"]]
- 00bd7154 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd71f0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00bd71f0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c197e58e863cea62e63dacfdafdac7e6"></a>

### [`00bd71b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd71b0.md) → [`00bd724c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd724c.md) _ZN8firebase4auth17phoneauthprovider11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bd71cc",
      "incomplete_value": false,
      "site": "00bd71d0",
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
    "old": {
      "definition_site": "00bd71dc",
      "incomplete_value": true,
      "site": "00bd71e8",
      "value": [
        "LOAD",
        "8",
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
      "00bd7268",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd7278",
      "DATA",
      [
        "storage",
        "01126be0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7268",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd7278",
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
- 00bd71d0 ["INT_ADD", "register:40f0:8", ["const:bd71d0:8", "const:4:8"]]
- 00bd71d0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd726c ["INT_ADD", "register:40f0:8", ["const:bd726c:8", "const:4:8"]]
+ 00bd726c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd71cc ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd71cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd71cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd71cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7268 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd7268 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7268 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7268 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd71d8 ["COPY", "tmp:0:8", ["const:be0:8"]]
- 00bd71d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd71d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd71d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd7274 ["COPY", "tmp:0:8", ["const:ce0:8"]]
+ 00bd7274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-03d52fc643483fc5e92c4ffba75e8ee9"></a>

### [`00bd71ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd71ec.md) → [`00bd7288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7288.md) _ZN8firebase4auth17phoneauthprovider13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd722c",
      "incomplete_value": true,
      "site": "00bd722c",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd7208",
      "incomplete_value": true,
      "site": "00bd7208",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7210",
      "incomplete_value": false,
      "site": "00bd7224",
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
            "const:d49:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd729c",
      "READ",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd72ac",
      "PARAM",
      [
        "storage",
        "002a1d49",
        null,
        "string"
      ]
    ],
    [
      "00bd72c8",
      "WRITE",
      [
        "storage",
        "01126bd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd729c",
      "READ",
      [
        "storage",
        "01126cd0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd72ac",
      "PARAM",
      [
        "storage",
        "002a1cfc",
        null,
        "string"
      ]
    ],
    [
      "00bd72c8",
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
- 00bd7224 ["INT_ADD", "register:40f0:8", ["const:bd7224:8", "const:4:8"]]
- 00bd7224 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd72c0 ["INT_ADD", "register:40f0:8", ["const:bd72c0:8", "const:4:8"]]
+ 00bd72c0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd722c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd0:8"]]
- 00bd722c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd72c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00bd72c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7200 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:bd0:8"]]
- 00bd7200 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd729c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd0:8"]]
+ 00bd729c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-127cd304f06199ea31c835040ebf263d"></a>

### [`00bd725c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd725c.md) → [`00bd72f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd72f8.md) _ZN8firebase4auth17phoneauthprovider10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bd7278",
      "incomplete_value": false,
      "site": "00bd727c",
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
    "old": {
      "definition_site": "00bd7288",
      "incomplete_value": true,
      "site": "00bd7294",
      "value": [
        "LOAD",
        "8",
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
      "00bd7314",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd7324",
      "DATA",
      [
        "storage",
        "01126bf8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd7314",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd7324",
      "DATA",
      [
        "storage",
        "01126cf8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd727c ["INT_ADD", "register:40f0:8", ["const:bd727c:8", "const:4:8"]]
- 00bd727c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd7318 ["INT_ADD", "register:40f0:8", ["const:bd7318:8", "const:4:8"]]
+ 00bd7318 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd7278 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd7278 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7278 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7278 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7314 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd7314 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7314 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7314 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7284 ["COPY", "tmp:0:8", ["const:bf8:8"]]
- 00bd7284 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7284 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7284 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd7320 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 00bd7320 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7320 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7320 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-53a44d8dd6b1371740a273d52a812681"></a>

### [`00bd7298`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7298.md) → [`00bd7334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7334.md) _ZN8firebase4auth21oauthprovider_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
    "old": {
      "definition_site": "00bd72c4",
      "incomplete_value": true,
      "site": "00bd72c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c00:8"
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
    "old": {
      "definition_site": "00bd72ac",
      "incomplete_value": true,
      "site": "00bd72ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd72b8",
      "incomplete_value": false,
      "site": "00bd72bc",
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
            "const:d1a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7344",
      "READ",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7354",
      "PARAM",
      [
        "storage",
        "002c0d1a",
        null,
        "string"
      ]
    ],
    [
      "00bd7360",
      "WRITE",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7344",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7354",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd7360",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd72bc ["INT_ADD", "register:40f0:8", ["const:bd72bc:8", "const:4:8"]]
- 00bd72bc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7358 ["INT_ADD", "register:40f0:8", ["const:bd7358:8", "const:4:8"]]
+ 00bd7358 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd72c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c00:8"]]
- 00bd72c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7360 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
+ 00bd7360 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd72a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c00:8"]]
- 00bd72a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7344 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
+ 00bd7344 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dcc262e613b6af979fe623f275415f7b"></a>

### [`00bd72d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd72d8.md) → [`00bd7374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7374.md) _ZN8firebase4auth21oauthprovider_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
    "old": {
      "definition_site": "00bd7304",
      "incomplete_value": true,
      "site": "00bd7304",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c00:8"
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
    "old": {
      "definition_site": "00bd72ec",
      "incomplete_value": true,
      "site": "00bd72ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd72f4",
      "incomplete_value": false,
      "site": "00bd72fc",
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
            "const:d1a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7384",
      "READ",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7390",
      "PARAM",
      [
        "storage",
        "002c0d1a",
        null,
        "string"
      ]
    ],
    [
      "00bd73a0",
      "WRITE",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7384",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7390",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd73a0",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd72fc ["INT_ADD", "register:40f0:8", ["const:bd72fc:8", "const:4:8"]]
- 00bd72fc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7398 ["INT_ADD", "register:40f0:8", ["const:bd7398:8", "const:4:8"]]
+ 00bd7398 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7304 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c00:8"]]
- 00bd7304 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd73a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
+ 00bd73a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd72e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c00:8"]]
- 00bd72e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7384 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
+ 00bd7384 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dd60589912725d132d89de4fa2d875ff"></a>

### [`00bd7318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7318.md) → [`00bd73b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd73b4.md) _ZN8firebase4auth21oauthprovider_builder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bd7348",
      "incomplete_value": true,
      "site": "00bd7348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c00:8"
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
    "old": {
      "definition_site": "00bd732c",
      "incomplete_value": true,
      "site": "00bd732c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7338",
      "incomplete_value": false,
      "site": "00bd7340",
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
            "const:d1a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd73c4",
      "READ",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd73d4",
      "PARAM",
      [
        "storage",
        "002c0d1a",
        null,
        "string"
      ]
    ],
    [
      "00bd73e4",
      "WRITE",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd73c4",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd73d4",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd73e4",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7340 ["INT_ADD", "register:40f0:8", ["const:bd7340:8", "const:4:8"]]
- 00bd7340 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd73dc ["INT_ADD", "register:40f0:8", ["const:bd73dc:8", "const:4:8"]]
+ 00bd73dc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7348 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c00:8"]]
- 00bd7348 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd73e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
+ 00bd73e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7328 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c00:8"]]
- 00bd7328 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd73c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
+ 00bd73c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5a8460e52d3a8409c713a32dd1b9bd3b"></a>

### [`00bd735c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd735c.md) → [`00bd73f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd73f8.md) _ZN8firebase4auth21oauthprovider_builder10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd738c",
      "incomplete_value": true,
      "site": "00bd738c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c00:8"
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
    "old": {
      "definition_site": "00bd7370",
      "incomplete_value": true,
      "site": "00bd7370",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7378",
      "incomplete_value": false,
      "site": "00bd7384",
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
            "const:d1a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7408",
      "READ",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7414",
      "PARAM",
      [
        "storage",
        "002c0d1a",
        null,
        "string"
      ]
    ],
    [
      "00bd7428",
      "WRITE",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7408",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7414",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd7428",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7384 ["INT_ADD", "register:40f0:8", ["const:bd7384:8", "const:4:8"]]
- 00bd7384 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7420 ["INT_ADD", "register:40f0:8", ["const:bd7420:8", "const:4:8"]]
+ 00bd7420 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd738c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c00:8"]]
- 00bd738c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7428 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
+ 00bd7428 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd736c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c00:8"]]
- 00bd736c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7408 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
+ 00bd7408 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2bf67fa7c7299b10b8ddae6959196a80"></a>

### [`00bd73ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd73ac.md) → [`00bd7448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7448.md) _ZN8firebase4auth21oauthprovider_builder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bd7404",
      "incomplete_value": true,
      "site": "00bd7404",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
    "old": {
      "definition_site": "00bd73e0",
      "incomplete_value": true,
      "site": "00bd73ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c00:8"
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
      "00bd745c",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd747c",
      "READ",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd74a0",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd745c",
      "READ",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd747c",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd74a0",
      "WRITE",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd73ec ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd73ec ["INT_ADD", "register:40f0:8", ["const:bd73ec:8", "const:4:8"]]
- 00bd73ec ["CALLIND", null, ["register:0:8"]]
+ 00bd7488 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7488 ["INT_ADD", "register:40f0:8", ["const:bd7488:8", "const:4:8"]]
+ 00bd7488 ["CALLIND", null, ["register:0:8"]]
- 00bd7404 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd7404 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c08:8"]]
- 00bd7404 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd74a0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd74a0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d08:8"]]
+ 00bd74a0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd73c0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c08:8"]]
- 00bd73c0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd73c0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd745c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d08:8"]]
+ 00bd745c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd745c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-909bc1ca9c0e40886f8fac98a088aac0"></a>

### [`00bd7418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7418.md) → [`00bd74b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd74b4.md) _ZN8firebase4auth21oauthprovider_builder12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bd7454",
      "incomplete_value": true,
      "site": "00bd7454",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
    "old": {
      "definition_site": "00bd7474",
      "incomplete_value": true,
      "site": "00bd7474",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c00:8"
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
    "old": {
      "definition_site": "00bd7430",
      "incomplete_value": true,
      "site": "00bd7430",
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
      "00bd74c8",
      "READ",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd74d4",
      "READ",
      [
        "storage",
        "01126c08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd74f0",
      "WRITE",
      [
        "storage",
        "01126c08",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd74c8",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd74d4",
      "READ",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd74f0",
      "WRITE",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7454 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd7454 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd7454 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c08:8"]]
- 00bd7454 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd74f0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd74f0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd74f0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d08:8"]]
+ 00bd74f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd7470 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7470 ["INT_ADD", "register:40f0:8", ["const:bd7470:8", "const:4:8"]]
- 00bd7470 ["CALLIND", null, ["register:0:8"]]
+ 00bd750c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd750c ["INT_ADD", "register:40f0:8", ["const:bd750c:8", "const:4:8"]]
+ 00bd750c ["CALLIND", null, ["register:0:8"]]
- 00bd7474 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c00:8"]]
- 00bd7474 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd7474 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd7510 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
+ 00bd7510 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd7510 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-2811aba7f51dd4ed526d60368d573fe0"></a>

### [`00bd7488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7488.md) → [`00bd7524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7524.md) _ZN8firebase4auth21oauthprovider_builder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd74c8",
      "incomplete_value": true,
      "site": "00bd74c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c00:8"
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
    "old": {
      "definition_site": "00bd74a4",
      "incomplete_value": true,
      "site": "00bd74a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd74ac",
      "incomplete_value": false,
      "site": "00bd74c0",
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
            "const:d1a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7538",
      "READ",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7548",
      "PARAM",
      [
        "storage",
        "002c0d1a",
        null,
        "string"
      ]
    ],
    [
      "00bd7564",
      "WRITE",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7538",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7548",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd7564",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd74c0 ["INT_ADD", "register:40f0:8", ["const:bd74c0:8", "const:4:8"]]
- 00bd74c0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd755c ["INT_ADD", "register:40f0:8", ["const:bd755c:8", "const:4:8"]]
+ 00bd755c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd74c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c00:8"]]
- 00bd74c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7564 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
+ 00bd7564 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd749c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c00:8"]]
- 00bd749c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7538 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
+ 00bd7538 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2f268eb5ad54486fe20310b1e3a668ad"></a>

### [`00bd74f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd74f8.md) → [`00bd7594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7594.md) _ZN8firebase4auth21oauthprovider_builder11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bd7514",
      "incomplete_value": false,
      "site": "00bd7518",
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
    "old": {
      "definition_site": "00bd7524",
      "incomplete_value": true,
      "site": "00bd7530",
      "value": [
        "LOAD",
        "8",
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
      "00bd75b0",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd75c0",
      "DATA",
      [
        "storage",
        "01126c10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd75b0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd75c0",
      "DATA",
      [
        "storage",
        "01126d10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7518 ["INT_ADD", "register:40f0:8", ["const:bd7518:8", "const:4:8"]]
- 00bd7518 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd75b4 ["INT_ADD", "register:40f0:8", ["const:bd75b4:8", "const:4:8"]]
+ 00bd75b4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd7514 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd7514 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7514 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7514 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd75b0 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd75b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd75b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd75b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7520 ["COPY", "tmp:0:8", ["const:c10:8"]]
- 00bd7520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd75bc ["COPY", "tmp:0:8", ["const:d10:8"]]
+ 00bd75bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd75bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd75bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c53cb0e6173e2f2805ab34498e25fe02"></a>

### [`00bd7534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7534.md) → [`00bd75d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd75d0.md) _ZN8firebase4auth21oauthprovider_builder13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd7574",
      "incomplete_value": true,
      "site": "00bd7574",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c00:8"
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
    "old": {
      "definition_site": "00bd7550",
      "incomplete_value": true,
      "site": "00bd7550",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7558",
      "incomplete_value": false,
      "site": "00bd756c",
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
            "const:d1a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd75e4",
      "READ",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd75f4",
      "PARAM",
      [
        "storage",
        "002c0d1a",
        null,
        "string"
      ]
    ],
    [
      "00bd7610",
      "WRITE",
      [
        "storage",
        "01126c00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd75e4",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd75f4",
      "PARAM",
      [
        "storage",
        "002c0d5a",
        null,
        "string"
      ]
    ],
    [
      "00bd7610",
      "WRITE",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd756c ["INT_ADD", "register:40f0:8", ["const:bd756c:8", "const:4:8"]]
- 00bd756c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7608 ["INT_ADD", "register:40f0:8", ["const:bd7608:8", "const:4:8"]]
+ 00bd7608 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7574 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c00:8"]]
- 00bd7574 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7610 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
+ 00bd7610 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7548 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c00:8"]]
- 00bd7548 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd75e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
+ 00bd75e4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a8487715962f4a596d91c82123b5e446"></a>

### [`00bd75a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd75a4.md) → [`00bd7640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7640.md) _ZN8firebase4auth21oauthprovider_builder10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bd75c0",
      "incomplete_value": false,
      "site": "00bd75c4",
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
    "old": {
      "definition_site": "00bd75d0",
      "incomplete_value": true,
      "site": "00bd75dc",
      "value": [
        "LOAD",
        "8",
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
      "00bd765c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd766c",
      "DATA",
      [
        "storage",
        "01126c28",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd765c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd766c",
      "DATA",
      [
        "storage",
        "01126d28",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd75c4 ["INT_ADD", "register:40f0:8", ["const:bd75c4:8", "const:4:8"]]
- 00bd75c4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd7660 ["INT_ADD", "register:40f0:8", ["const:bd7660:8", "const:4:8"]]
+ 00bd7660 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd75c0 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd75c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd75c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd75c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd765c ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd765c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd765c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd765c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd75cc ["COPY", "tmp:0:8", ["const:c28:8"]]
- 00bd75cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd75cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd75cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd7668 ["COPY", "tmp:0:8", ["const:d28:8"]]
+ 00bd7668 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7668 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7668 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-da39fc58a01a0b3d8c62c23b5ea5e3cf"></a>

### [`00bd75e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd75e0.md) → [`00bd767c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd767c.md) _ZN8firebase4auth31oauthprovider_credentialbuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

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
    "old": {
      "definition_site": "00bd760c",
      "incomplete_value": true,
      "site": "00bd760c",
      "value": [
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
    "old": {
      "definition_site": "00bd75f4",
      "incomplete_value": true,
      "site": "00bd75f4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7600",
      "incomplete_value": false,
      "site": "00bd7604",
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
            "const:213:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd768c",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd769c",
      "PARAM",
      [
        "storage",
        "002bc213",
        null,
        "string"
      ]
    ],
    [
      "00bd76a8",
      "WRITE",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd768c",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd769c",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd76a8",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7604 ["INT_ADD", "register:40f0:8", ["const:bd7604:8", "const:4:8"]]
- 00bd7604 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd76a0 ["INT_ADD", "register:40f0:8", ["const:bd76a0:8", "const:4:8"]]
+ 00bd76a0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd760c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00bd760c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd76a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
+ 00bd76a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd75f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00bd75f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd768c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
+ 00bd768c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2dac1233b0de490d5f3acd51a850a67b"></a>

### [`00bd7620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7620.md) → [`00bd76bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd76bc.md) _ZN8firebase4auth31oauthprovider_credentialbuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS

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
    "old": {
      "definition_site": "00bd764c",
      "incomplete_value": true,
      "site": "00bd764c",
      "value": [
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
    "old": {
      "definition_site": "00bd7634",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd763c",
      "incomplete_value": false,
      "site": "00bd7644",
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
            "const:213:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd76cc",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd76d8",
      "PARAM",
      [
        "storage",
        "002bc213",
        null,
        "string"
      ]
    ],
    [
      "00bd76e8",
      "WRITE",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd76cc",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd76d8",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd76e8",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7644 ["INT_ADD", "register:40f0:8", ["const:bd7644:8", "const:4:8"]]
- 00bd7644 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd76e0 ["INT_ADD", "register:40f0:8", ["const:bd76e0:8", "const:4:8"]]
+ 00bd76e0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd764c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00bd764c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd76e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
+ 00bd76e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7630 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00bd7630 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd76cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
+ 00bd76cc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-372574ed05d8ae54e127b9e53be54c81"></a>

### [`00bd7660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7660.md) → [`00bd76fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd76fc.md) _ZN8firebase4auth31oauthprovider_credentialbuilder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bd7690",
      "incomplete_value": true,
      "site": "00bd7690",
      "value": [
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
    "old": {
      "definition_site": "00bd7674",
      "incomplete_value": true,
      "site": "00bd7674",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7680",
      "incomplete_value": false,
      "site": "00bd7688",
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
            "const:213:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd770c",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd771c",
      "PARAM",
      [
        "storage",
        "002bc213",
        null,
        "string"
      ]
    ],
    [
      "00bd772c",
      "WRITE",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd770c",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd771c",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd772c",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7688 ["INT_ADD", "register:40f0:8", ["const:bd7688:8", "const:4:8"]]
- 00bd7688 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7724 ["INT_ADD", "register:40f0:8", ["const:bd7724:8", "const:4:8"]]
+ 00bd7724 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7690 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00bd7690 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd772c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
+ 00bd772c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7670 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00bd7670 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd770c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
+ 00bd770c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-158a21335ffff3810b7ffe33d9c88962"></a>

### [`00bd76a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd76a4.md) → [`00bd7740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7740.md) _ZN8firebase4auth31oauthprovider_credentialbuilder10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd76d4",
      "incomplete_value": true,
      "site": "00bd76d4",
      "value": [
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
    "old": {
      "definition_site": "00bd76b8",
      "incomplete_value": true,
      "site": "00bd76b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd76c0",
      "incomplete_value": false,
      "site": "00bd76cc",
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
            "const:213:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7750",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd775c",
      "PARAM",
      [
        "storage",
        "002bc213",
        null,
        "string"
      ]
    ],
    [
      "00bd7770",
      "WRITE",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7750",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd775c",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ],
    [
      "00bd7770",
      "WRITE",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd76cc ["INT_ADD", "register:40f0:8", ["const:bd76cc:8", "const:4:8"]]
- 00bd76cc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7768 ["INT_ADD", "register:40f0:8", ["const:bd7768:8", "const:4:8"]]
+ 00bd7768 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd76d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00bd76d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7770 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
+ 00bd7770 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd76b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c30:8"]]
- 00bd76b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7750 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d30:8"]]
+ 00bd7750 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-03003592434650ec58c13b3a5952a897"></a>

### [`00bd76f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd76f4.md) → [`00bd7790`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7790.md) _ZN8firebase4auth31oauthprovider_credentialbuilder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bd774c",
      "incomplete_value": true,
      "site": "00bd774c",
      "value": [
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
    "old": {
      "definition_site": "00bd7728",
      "incomplete_value": true,
      "site": "00bd7734",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd77a4",
      "READ",
      [
        "storage",
        "01126c38",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd77c4",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd77e8",
      "WRITE",
      [
        "storage",
        "01126c38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd77a4",
      "READ",
      [
        "storage",
        "01126d38",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd77c4",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd77e8",
      "WRITE",
      [
        "storage",
        "01126d38",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7734 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7734 ["INT_ADD", "register:40f0:8", ["const:bd7734:8", "const:4:8"]]
- 00bd7734 ["CALLIND", null, ["register:0:8"]]
+ 00bd77d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd77d0 ["INT_ADD", "register:40f0:8", ["const:bd77d0:8", "const:4:8"]]
+ 00bd77d0 ["CALLIND", null, ["register:0:8"]]
- 00bd774c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd774c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c38:8"]]
- 00bd774c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd77e8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd77e8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d38:8"]]
+ 00bd77e8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd7708 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c38:8"]]
- 00bd7708 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd7708 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd77a4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d38:8"]]
+ 00bd77a4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd77a4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-d18a5e4989c0ed68c66b4edaaf5da1c4"></a>

### [`00bd7760`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7760.md) → [`00bd77fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd77fc.md) _ZN8firebase4auth31oauthprovider_credentialbuilder12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 60.71% / 新版 60.71%

優先判定に残った影響 `unresolved_call_alignment` 3件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd7778",
      "incomplete_value": true,
      "site": "00bd7778",
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
      "00bd7810",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd781c",
      "READ",
      [
        "storage",
        "01126c38",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7824",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd77a0"
      ]
    ]
  ],
  "added": [
    [
      "00bd7810",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd781c",
      "READ",
      [
        "storage",
        "01126d38",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7824",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd783c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7774 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c30:8"]]
- 00bd7774 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7810 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d30:8"]]
+ 00bd7810 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd7780 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c38:8"]]
- 00bd7780 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd7780 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd781c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d38:8"]]
+ 00bd781c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd781c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd7788 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00bd7788 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd7824 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00bd7824 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-e060ac3e70da313cff486fce351432ef"></a>

### [`00bd77d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd77d0.md) → [`00bd786c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd786c.md) _ZN8firebase4auth31oauthprovider_credentialbuilder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd77f4",
      "incomplete_value": false,
      "site": "00bd7808",
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
            "const:213:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd77e4",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd77ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd78b0"
      ]
    ],
    [
      "unmatched:00bd77f4",
      "PARAM",
      [
        "storage",
        "002bc213",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd7880",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7888",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd78b0"
      ]
    ],
    [
      "00bd7890",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7808 ["INT_ADD", "register:40f0:8", ["const:bd7808:8", "const:4:8"]]
- 00bd7808 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd78a4 ["INT_ADD", "register:40f0:8", ["const:bd78a4:8", "const:4:8"]]
+ 00bd78a4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd77e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c30:8"]]
- 00bd77e4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd77e8 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-81b403dc7be0ff3b8def9001855cad24"></a>

### [`00bd7840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7840.md) → [`00bd78dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd78dc.md) _ZN8firebase4auth31oauthprovider_credentialbuilder11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bd785c",
      "incomplete_value": false,
      "site": "00bd7860",
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
    "old": {
      "definition_site": "00bd786c",
      "incomplete_value": true,
      "site": "00bd7878",
      "value": [
        "LOAD",
        "8",
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
      "00bd78f8",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd7908",
      "DATA",
      [
        "storage",
        "01126c40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd78f8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd7908",
      "DATA",
      [
        "storage",
        "01126d40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7860 ["INT_ADD", "register:40f0:8", ["const:bd7860:8", "const:4:8"]]
- 00bd7860 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd78fc ["INT_ADD", "register:40f0:8", ["const:bd78fc:8", "const:4:8"]]
+ 00bd78fc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd785c ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd785c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd785c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd785c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd78f8 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd78f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd78f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd78f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7868 ["COPY", "tmp:0:8", ["const:c40:8"]]
- 00bd7868 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7868 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7868 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd7904 ["COPY", "tmp:0:8", ["const:d40:8"]]
+ 00bd7904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0be83b17a06289ad187c1e22c597aa0"></a>

### [`00bd787c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd787c.md) → [`00bd7918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7918.md) _ZN8firebase4auth31oauthprovider_credentialbuilder13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd78a0",
      "incomplete_value": false,
      "site": "00bd78b4",
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
            "const:213:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd7890",
      "READ",
      [
        "storage",
        "01126c30",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd7898",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd795c"
      ]
    ],
    [
      "unmatched:00bd78a0",
      "PARAM",
      [
        "storage",
        "002bc213",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd792c",
      "READ",
      [
        "storage",
        "01126d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7934",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd795c"
      ]
    ],
    [
      "00bd793c",
      "PARAM",
      [
        "storage",
        "002bc1bf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd78b4 ["INT_ADD", "register:40f0:8", ["const:bd78b4:8", "const:4:8"]]
- 00bd78b4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7950 ["INT_ADD", "register:40f0:8", ["const:bd7950:8", "const:4:8"]]
+ 00bd7950 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7890 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c30:8"]]
- 00bd7890 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd7894 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-82d0b9bf5cdee1970b236f802ce13f24"></a>

### [`00bd78ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd78ec.md) → [`00bd7988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7988.md) _ZN8firebase4auth31oauthprovider_credentialbuilder10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bd7908",
      "incomplete_value": false,
      "site": "00bd790c",
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
    "old": {
      "definition_site": "00bd7918",
      "incomplete_value": true,
      "site": "00bd7924",
      "value": [
        "LOAD",
        "8",
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
      "00bd79a4",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd79b4",
      "DATA",
      [
        "storage",
        "01126c60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd79a4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd79b4",
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
- 00bd790c ["INT_ADD", "register:40f0:8", ["const:bd790c:8", "const:4:8"]]
- 00bd790c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd79a8 ["INT_ADD", "register:40f0:8", ["const:bd79a8:8", "const:4:8"]]
+ 00bd79a8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd7908 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd7908 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7908 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7908 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd79a4 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd79a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd79a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd79a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7914 ["COPY", "tmp:0:8", ["const:c60:8"]]
- 00bd7914 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7914 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7914 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd79b0 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00bd79b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd79b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd79b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-72e9e15574ca640489e81b1d4f4241b8"></a>

### [`00bd7928`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7928.md) → [`00bd79c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd79c4.md) _ZN8firebase4auth8auth_idp19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
    "old": {
      "definition_site": "00bd793c",
      "incomplete_value": true,
      "site": "00bd793c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "00bd79d4",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd7948",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd794c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd79d4",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd79e4",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd79e8",
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
- 00bd793c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd793c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd79d8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd79d8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd7938 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c68:8"]]
- 00bd7938 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd79d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00bd79d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd7948 ["COPY", "tmp:0:8", ["const:23c:8"]]
- 00bd7948 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd7948 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd7948 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-9c7eb0c5c1d831d5e1eea2c523e9fcd6"></a>

### [`00bd7968`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7968.md) → [`00bd7a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7a04.md) _ZN8firebase4auth8auth_idp19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00bd797c",
      "incomplete_value": true,
      "site": "00bd797c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "00bd7a14",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd7984",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd798c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd7a14",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7a20",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd7a28",
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
- 00bd797c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd797c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd7a18 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd7a18 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd7978 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c68:8"]]
- 00bd7978 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7a14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00bd7a14 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd7984 ["COPY", "tmp:0:8", ["const:23c:8"]]
- 00bd7984 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd7984 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd7984 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-a57a3eba8ddd7e28d4f2b662ac06e582"></a>

### [`00bd79a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd79a8.md) → [`00bd7a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7a44.md) _ZN8firebase4auth8auth_idp10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bd79d8",
      "incomplete_value": true,
      "site": "00bd79d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
    "old": {
      "definition_site": "00bd79bc",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd79c8",
      "incomplete_value": false,
      "site": "00bd79d0",
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
      "00bd7a54",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7a64",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ],
    [
      "00bd7a74",
      "WRITE",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7a54",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7a64",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd7a74",
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
- 00bd79d0 ["INT_ADD", "register:40f0:8", ["const:bd79d0:8", "const:4:8"]]
- 00bd79d0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7a6c ["INT_ADD", "register:40f0:8", ["const:bd7a6c:8", "const:4:8"]]
+ 00bd7a6c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd79d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c68:8"]]
- 00bd79d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7a74 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00bd7a74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd79b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c68:8"]]
- 00bd79b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7a54 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00bd7a54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fa1dc42ed332077c823923e12219385c"></a>

### [`00bd79ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd79ec.md) → [`00bd7a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7a88.md) _ZN8firebase4auth8auth_idp10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd7a1c",
      "incomplete_value": true,
      "site": "00bd7a1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
    "old": {
      "definition_site": "00bd7a00",
      "incomplete_value": true,
      "site": "00bd7a00",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7a08",
      "incomplete_value": false,
      "site": "00bd7a14",
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
      "00bd7a98",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7aa4",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ],
    [
      "00bd7ab8",
      "WRITE",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7a98",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7aa4",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd7ab8",
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
- 00bd7a14 ["INT_ADD", "register:40f0:8", ["const:bd7a14:8", "const:4:8"]]
- 00bd7a14 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7ab0 ["INT_ADD", "register:40f0:8", ["const:bd7ab0:8", "const:4:8"]]
+ 00bd7ab0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7a1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c68:8"]]
- 00bd7a1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7ab8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00bd7ab8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd79fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c68:8"]]
- 00bd79fc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7a98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d68:8"]]
+ 00bd7a98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3ae0d40f711469cf2383659f0a360489"></a>

### [`00bd7a3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7a3c.md) → [`00bd7ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7ad8.md) _ZN8firebase4auth8auth_idp15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bd7a94",
      "incomplete_value": true,
      "site": "00bd7a94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:c70:8"
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
    "old": {
      "definition_site": "00bd7a70",
      "incomplete_value": true,
      "site": "00bd7a7c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
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
      "00bd7aec",
      "READ",
      [
        "storage",
        "01126c70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7b0c",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7b30",
      "WRITE",
      [
        "storage",
        "01126c70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7aec",
      "READ",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7b0c",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7b30",
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
- 00bd7a7c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7a7c ["INT_ADD", "register:40f0:8", ["const:bd7a7c:8", "const:4:8"]]
- 00bd7a7c ["CALLIND", null, ["register:0:8"]]
+ 00bd7b18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7b18 ["INT_ADD", "register:40f0:8", ["const:bd7b18:8", "const:4:8"]]
+ 00bd7b18 ["CALLIND", null, ["register:0:8"]]
- 00bd7a94 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bd7a94 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:c70:8"]]
- 00bd7a94 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bd7b30 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bd7b30 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d70:8"]]
+ 00bd7b30 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bd7a50 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c70:8"]]
- 00bd7a50 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd7a50 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd7aec ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d70:8"]]
+ 00bd7aec ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7aec ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-c51db7f867eb3728a01b16bf970c7151"></a>

### [`00bd7aa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7aa8.md) → [`00bd7b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7b44.md) _ZN8firebase4auth8auth_idp12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bd7ae4",
      "incomplete_value": true,
      "site": "00bd7ae4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:c70:8"
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
    "old": {
      "definition_site": "00bd7b04",
      "incomplete_value": true,
      "site": "00bd7b04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
    "old": {
      "definition_site": "00bd7ac0",
      "incomplete_value": true,
      "site": "00bd7ac0",
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
      "00bd7b58",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7b64",
      "READ",
      [
        "storage",
        "01126c70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7b80",
      "WRITE",
      [
        "storage",
        "01126c70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7b58",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7b64",
      "READ",
      [
        "storage",
        "01126d70",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7b80",
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
- 00bd7ae4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd7ae4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd7ae4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c70:8"]]
- 00bd7ae4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd7b80 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd7b80 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd7b80 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d70:8"]]
+ 00bd7b80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd7b00 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7b00 ["INT_ADD", "register:40f0:8", ["const:bd7b00:8", "const:4:8"]]
- 00bd7b00 ["CALLIND", null, ["register:0:8"]]
+ 00bd7b9c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7b9c ["INT_ADD", "register:40f0:8", ["const:bd7b9c:8", "const:4:8"]]
+ 00bd7b9c ["CALLIND", null, ["register:0:8"]]
- 00bd7b04 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c68:8"]]
- 00bd7b04 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd7b04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd7ba0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
+ 00bd7ba0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd7ba0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-619895bf3d928bfc55ba348043441000"></a>

### [`00bd7b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7b18.md) → [`00bd7bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7bb4.md) _ZN8firebase4auth8auth_idp14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd7b3c",
      "incomplete_value": false,
      "site": "00bd7b50",
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
      "unmatched:00bd7b2c",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd7b34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd7bf8"
      ]
    ],
    [
      "unmatched:00bd7b3c",
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
      "00bd7bc8",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7bd0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd7bf8"
      ]
    ],
    [
      "00bd7bd8",
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
- 00bd7b50 ["INT_ADD", "register:40f0:8", ["const:bd7b50:8", "const:4:8"]]
- 00bd7b50 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7bec ["INT_ADD", "register:40f0:8", ["const:bd7bec:8", "const:4:8"]]
+ 00bd7bec ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7b2c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c68:8"]]
- 00bd7b2c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd7b30 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-048f6bab3b958558bf70fcbe06184b21"></a>

### [`00bd7b88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7b88.md) → [`00bd7c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7c24.md) _ZN8firebase4auth8auth_idp11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 26.67% / 新版 26.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd7b88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd7b8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd7c38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd7bac"
      ]
    ]
  ],
  "added": [
    [
      "00bd7c24",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd7c28",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd7c38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd7c48"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7b88 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd7b88 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd7b88 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd7b8c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd7b8c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd7b8c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd7b8c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd7b90 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd7b90 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd7b90 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd7b90 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-b06c28831b290c7acab5e00fe2a637a5"></a>

### [`00bd7bc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7bc4.md) → [`00bd7c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7c60.md) _ZN8firebase4auth8auth_idp13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd7c04",
      "incomplete_value": true,
      "site": "00bd7c04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:c68:8"
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
    "old": {
      "definition_site": "00bd7be0",
      "incomplete_value": true,
      "site": "00bd7be0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7be8",
      "incomplete_value": false,
      "site": "00bd7bfc",
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
      "00bd7c74",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7c84",
      "PARAM",
      [
        "storage",
        "002ac23c",
        null,
        "string"
      ]
    ],
    [
      "00bd7ca0",
      "WRITE",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7c74",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7c84",
      "PARAM",
      [
        "storage",
        "002ac1e0",
        null,
        "string"
      ]
    ],
    [
      "00bd7ca0",
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
- 00bd7bfc ["INT_ADD", "register:40f0:8", ["const:bd7bfc:8", "const:4:8"]]
- 00bd7bfc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7c98 ["INT_ADD", "register:40f0:8", ["const:bd7c98:8", "const:4:8"]]
+ 00bd7c98 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7c04 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c68:8"]]
- 00bd7c04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7ca0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
+ 00bd7ca0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7bd8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c68:8"]]
- 00bd7bd8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7c74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d68:8"]]
+ 00bd7c74 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-697c08668a6d4680c04e140e861daf35"></a>

### [`00bd7c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7c34.md) → [`00bd7cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7cd0.md) _ZN8firebase4auth8auth_idp10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bd7c50",
      "incomplete_value": false,
      "site": "00bd7c54",
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
    "old": {
      "definition_site": "00bd7c60",
      "incomplete_value": true,
      "site": "00bd7c6c",
      "value": [
        "LOAD",
        "8",
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
      "00bd7cec",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd7cfc",
      "DATA",
      [
        "storage",
        "01126c80",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd7cec",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd7cfc",
      "DATA",
      [
        "storage",
        "01126d80",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7c54 ["INT_ADD", "register:40f0:8", ["const:bd7c54:8", "const:4:8"]]
- 00bd7c54 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd7cf0 ["INT_ADD", "register:40f0:8", ["const:bd7cf0:8", "const:4:8"]]
+ 00bd7cf0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd7c50 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd7c50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7c50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7c50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7cec ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd7cec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7cec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7cec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7c5c ["COPY", "tmp:0:8", ["const:c80:8"]]
- 00bd7c5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7c5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7c5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd7cf8 ["COPY", "tmp:0:8", ["const:d80:8"]]
+ 00bd7cf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7cf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7cf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9b98ff168c0a1574cfe2618a6cde73a5"></a>

### [`00bd7c70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7c70.md) → [`00bd7d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7d0c.md) _ZN8firebase4auth8user_idp19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
      "00bd7d1c",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd7c84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd7d3c"
      ]
    ],
    [
      "unmatched:00bd7c90",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd7d1c",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7d20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd7d3c"
      ]
    ],
    [
      "00bd7d2c",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7c80 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c88:8"]]
- 00bd7c80 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7d1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
+ 00bd7d1c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd7c84 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd7c84 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd7c88 ["INT_ZEXT", "register:4020:8", ["register:4018:4"]]
~~~


<a id="compare-37493bc9ab11d4c178df49d71542f12a"></a>

### [`00bd7cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7cb0.md) → [`00bd7d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7d4c.md) _ZN8firebase4auth8user_idp19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00bd7cdc",
      "incomplete_value": true,
      "site": "00bd7cdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c88:8"
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
    "old": {
      "definition_site": "00bd7cc4",
      "incomplete_value": true,
      "site": "00bd7cc4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7ccc",
      "incomplete_value": false,
      "site": "00bd7cd4",
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
            "const:887:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7d5c",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7d68",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bd7d78",
      "WRITE",
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
      "00bd7d5c",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7d68",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd7d78",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7cd4 ["INT_ADD", "register:40f0:8", ["const:bd7cd4:8", "const:4:8"]]
- 00bd7cd4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7d70 ["INT_ADD", "register:40f0:8", ["const:bd7d70:8", "const:4:8"]]
+ 00bd7d70 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7cdc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c88:8"]]
- 00bd7cdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7d78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
+ 00bd7d78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7cc0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c88:8"]]
- 00bd7cc0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7d5c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
+ 00bd7d5c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-274f6f4afd205fb59d6c2ce24632589f"></a>

### [`00bd7cf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7cf0.md) → [`00bd7d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7d8c.md) _ZN8firebase4auth8user_idp10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bd7d20",
      "incomplete_value": true,
      "site": "00bd7d20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:c88:8"
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
    "old": {
      "definition_site": "00bd7d04",
      "incomplete_value": true,
      "site": "00bd7d04",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7d10",
      "incomplete_value": false,
      "site": "00bd7d18",
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
            "const:887:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7d9c",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7dac",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bd7dbc",
      "WRITE",
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
      "00bd7d9c",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7dac",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd7dbc",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7d18 ["INT_ADD", "register:40f0:8", ["const:bd7d18:8", "const:4:8"]]
- 00bd7d18 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7db4 ["INT_ADD", "register:40f0:8", ["const:bd7db4:8", "const:4:8"]]
+ 00bd7db4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7d20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c88:8"]]
- 00bd7d20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7dbc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
+ 00bd7dbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7d00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:c88:8"]]
- 00bd7d00 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7d9c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d88:8"]]
+ 00bd7d9c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a4f636a48452329227d27b4761ea3cd4"></a>

### [`00bd7d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7d34.md) → [`00bd7dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7dd0.md) _ZN8firebase4auth8user_idp10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd7d48",
      "incomplete_value": true,
      "site": "00bd7d48",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7d50",
      "incomplete_value": false,
      "site": "00bd7d5c",
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
            "const:887:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd7d34",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd7d38",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd7de0",
      "READ",
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
      "00bd7dd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd7dd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd7de0",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7d5c ["INT_ADD", "register:40f0:8", ["const:bd7d5c:8", "const:4:8"]]
- 00bd7d5c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7df8 ["INT_ADD", "register:40f0:8", ["const:bd7df8:8", "const:4:8"]]
+ 00bd7df8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7d34 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd7d34 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd7d34 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd7d38 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd7d38 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd7d38 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd7d38 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7d8d6c850d764466ec41acd0f53b0d73"></a>

### [`00bd7d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7d84.md) → [`00bd7e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7e20.md) _ZN8firebase4auth8user_idp15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7db8",
      "incomplete_value": true,
      "site": "00bd7dc4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bd7e34",
      "READ",
      [
        "storage",
        "01126c90",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00bd7db8",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd7ddc",
      "WRITE",
      [
        "storage",
        "01126c90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7e34",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7e54",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7e78",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7dc4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7dc4 ["INT_ADD", "register:40f0:8", ["const:bd7dc4:8", "const:4:8"]]
- 00bd7dc4 ["CALLIND", null, ["register:0:8"]]
+ 00bd7e60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7e60 ["INT_ADD", "register:40f0:8", ["const:bd7e60:8", "const:4:8"]]
+ 00bd7e60 ["CALLIND", null, ["register:0:8"]]
- 00bd7d98 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:c90:8"]]
- 00bd7d98 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd7d98 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd7e34 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d90:8"]]
+ 00bd7e34 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7e34 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd7d9c ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00bd7d9c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd7e38 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00bd7e38 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-78660dd31d6c2ec2519f06cad981b564"></a>

### [`00bd7df0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7df0.md) → [`00bd7e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7e8c.md) _ZN8firebase4auth8user_idp12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bd7e2c",
      "incomplete_value": true,
      "site": "00bd7e2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:c90:8"
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
    "old": {
      "definition_site": "00bd7e4c",
      "incomplete_value": true,
      "site": "00bd7e4c",
      "value": [
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
    "ordinal": 6,
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
      "definition_site": "00bd7e08",
      "incomplete_value": true,
      "site": "00bd7e08",
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
      "00bd7ea0",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7eac",
      "READ",
      [
        "storage",
        "01126c90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7ec8",
      "WRITE",
      [
        "storage",
        "01126c90",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd7ea0",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7eac",
      "READ",
      [
        "storage",
        "01126d90",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd7ec8",
      "WRITE",
      [
        "storage",
        "01126d90",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7e2c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bd7e2c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bd7e2c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:c90:8"]]
- 00bd7e2c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bd7ec8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bd7ec8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bd7ec8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d90:8"]]
+ 00bd7ec8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bd7e48 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bd7e48 ["INT_ADD", "register:40f0:8", ["const:bd7e48:8", "const:4:8"]]
- 00bd7e48 ["CALLIND", null, ["register:0:8"]]
+ 00bd7ee4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bd7ee4 ["INT_ADD", "register:40f0:8", ["const:bd7ee4:8", "const:4:8"]]
+ 00bd7ee4 ["CALLIND", null, ["register:0:8"]]
- 00bd7e4c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00bd7e4c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bd7e4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bd7ee8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
+ 00bd7ee8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bd7ee8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-2cd35a9b74a8595667bb8c91dcf3c5c2"></a>

### [`00bd7e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7e60.md) → [`00bd7efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7efc.md) _ZN8firebase4auth8user_idp14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd7ea0",
      "incomplete_value": true,
      "site": "00bd7ea0",
      "value": [
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
    "old": {
      "definition_site": "00bd7e7c",
      "incomplete_value": true,
      "site": "00bd7e7c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7e84",
      "incomplete_value": false,
      "site": "00bd7e98",
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
            "const:887:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7f10",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7f20",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bd7f3c",
      "WRITE",
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
      "00bd7f10",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7f20",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd7f3c",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7e98 ["INT_ADD", "register:40f0:8", ["const:bd7e98:8", "const:4:8"]]
- 00bd7e98 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7f34 ["INT_ADD", "register:40f0:8", ["const:bd7f34:8", "const:4:8"]]
+ 00bd7f34 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7ea0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00bd7ea0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7f3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
+ 00bd7f3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7e74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00bd7e74 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7f10 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
+ 00bd7f10 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6f96bebcb54cf9f3a00b1adeb7c860e8"></a>

### [`00bd7ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7ed0.md) → [`00bd7f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7f6c.md) _ZN8firebase4auth8user_idp11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bd7eec",
      "incomplete_value": false,
      "site": "00bd7ef0",
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
    "old": {
      "definition_site": "00bd7efc",
      "incomplete_value": true,
      "site": "00bd7f08",
      "value": [
        "LOAD",
        "8",
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
      "00bd7f88",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd7f98",
      "DATA",
      [
        "storage",
        "01126c98",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd7f88",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd7f98",
      "DATA",
      [
        "storage",
        "01126d98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7ef0 ["INT_ADD", "register:40f0:8", ["const:bd7ef0:8", "const:4:8"]]
- 00bd7ef0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd7f8c ["INT_ADD", "register:40f0:8", ["const:bd7f8c:8", "const:4:8"]]
+ 00bd7f8c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd7eec ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd7eec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7eec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7eec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd7f88 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd7f88 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7f88 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd7f88 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7ef8 ["COPY", "tmp:0:8", ["const:c98:8"]]
- 00bd7ef8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7ef8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7ef8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd7f94 ["COPY", "tmp:0:8", ["const:d98:8"]]
+ 00bd7f94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7f94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd7f94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9f00a237f0c927cc91301b650e122d50"></a>

### [`00bd7f0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7f0c.md) → [`00bd7fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd7/00bd7fa8.md) _ZN8firebase4auth8user_idp13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd7f4c",
      "incomplete_value": true,
      "site": "00bd7f4c",
      "value": [
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
    "old": {
      "definition_site": "00bd7f28",
      "incomplete_value": true,
      "site": "00bd7f28",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7f30",
      "incomplete_value": false,
      "site": "00bd7f44",
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
            "const:887:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd7fbc",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7fcc",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bd7fe8",
      "WRITE",
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
      "00bd7fbc",
      "READ",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd7fcc",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bd7fe8",
      "WRITE",
      [
        "storage",
        "01126d88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd7f44 ["INT_ADD", "register:40f0:8", ["const:bd7f44:8", "const:4:8"]]
- 00bd7f44 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd7fe0 ["INT_ADD", "register:40f0:8", ["const:bd7fe0:8", "const:4:8"]]
+ 00bd7fe0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7f4c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00bd7f4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd7fe8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
+ 00bd7fe8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7f20 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:c88:8"]]
- 00bd7f20 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd7fbc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d88:8"]]
+ 00bd7fbc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-732e2143a769a118a7ddf4eef08f8081"></a>

### [`00bd7f7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7f7c.md) → [`00bd8018`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8018.md) _ZN8firebase4auth8user_idp10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bd7f98",
      "incomplete_value": false,
      "site": "00bd7f9c",
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
    "old": {
      "definition_site": "00bd7fa8",
      "incomplete_value": true,
      "site": "00bd7fb4",
      "value": [
        "LOAD",
        "8",
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
      "00bd8034",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd8044",
      "DATA",
      [
        "storage",
        "01126ca8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd8034",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd8044",
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
- 00bd7f9c ["INT_ADD", "register:40f0:8", ["const:bd7f9c:8", "const:4:8"]]
- 00bd7f9c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd8038 ["INT_ADD", "register:40f0:8", ["const:bd8038:8", "const:4:8"]]
+ 00bd8038 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd7f98 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd7f98 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7f98 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd7f98 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd8034 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd8034 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8034 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8034 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd7fa4 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00bd7fa4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7fa4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd7fa4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd8040 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 00bd8040 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd8040 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd8040 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d3ea7b8ec7b1cd1ae5b705c8bd9e7f8d"></a>

### [`00bd7fb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7fb8.md) → [`00bd8054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8054.md) _ZN8firebase4auth8jniphone19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
    "old": {
      "definition_site": "00bd7fe4",
      "incomplete_value": true,
      "site": "00bd7fe4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cb0:8"
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
    "old": {
      "definition_site": "00bd7fcc",
      "incomplete_value": true,
      "site": "00bd7fcc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd7fd8",
      "incomplete_value": false,
      "site": "00bd7fdc",
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
            "const:7b7:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8064",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8074",
      "PARAM",
      [
        "storage",
        "002b27b7",
        null,
        "string"
      ]
    ],
    [
      "00bd8080",
      "WRITE",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8064",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8074",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd8080",
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
- 00bd7fdc ["INT_ADD", "register:40f0:8", ["const:bd7fdc:8", "const:4:8"]]
- 00bd7fdc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd8078 ["INT_ADD", "register:40f0:8", ["const:bd8078:8", "const:4:8"]]
+ 00bd8078 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd7fe4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cb0:8"]]
- 00bd7fe4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8080 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
+ 00bd8080 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd7fc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cb0:8"]]
- 00bd7fc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd8064 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
+ 00bd8064 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bc5a0712248d6e18b2ad5c7f91cea976"></a>

### [`00bd7ff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd7/00bd7ff8.md) → [`00bd8094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8094.md) _ZN8firebase4auth8jniphone19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00bd800c",
      "incomplete_value": true,
      "site": "00bd800c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "00bd80a4",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd8014",
      "PARAM",
      [
        "storage",
        "002b27b7",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd801c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00bd80a4",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd80b0",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd80b8",
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
- 00bd800c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd800c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd80a8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd80a8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd8008 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cb0:8"]]
- 00bd8008 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd80a4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
+ 00bd80a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd8014 ["COPY", "tmp:0:8", ["const:7b7:8"]]
- 00bd8014 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bd8014 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bd8014 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-e5f1b43ac7484e30277c9878b280bd9d"></a>

### [`00bd8038`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8038.md) → [`00bd80d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd80d4.md) _ZN8firebase4auth8jniphone10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 23.53% / 新版 23.53%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd8048",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd804c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd806c"
      ]
    ],
    [
      "unmatched:00bd8058",
      "PARAM",
      [
        "storage",
        "002b27b7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd80e4",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd80e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd8108"
      ]
    ],
    [
      "00bd80f4",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8048 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cb0:8"]]
- 00bd8048 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd804c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd804c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00bd8050 ["COPY", "register:4018:8", ["const:2b2000:8"]]
~~~


<a id="compare-a092b541e1681f8f16904c3a45503460"></a>

### [`00bd807c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd807c.md) → [`00bd8118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8118.md) _ZN8firebase4auth8jniphone10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 70.59% / 新版 70.59%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bd8090",
      "incomplete_value": true,
      "site": "00bd8090",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
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
      "definition_site": "00bd809c",
      "incomplete_value": false,
      "site": "00bd80a4",
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
      "definition_site": "00bd8098",
      "incomplete_value": false,
      "site": "00bd80a4",
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
            "const:7b7:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd807c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd8080",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd8128",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8118",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd811c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd8128",
      "READ",
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
- 00bd8090 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd8090 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00bd812c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd812c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd80a4 ["INT_ADD", "register:40f0:8", ["const:bd80a4:8", "const:4:8"]]
- 00bd80a4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd8140 ["INT_ADD", "register:40f0:8", ["const:bd8140:8", "const:4:8"]]
+ 00bd8140 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd807c ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd807c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd807c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-ad60a0302e1663500a58ac12d9755362"></a>

### [`00bd80cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd80cc.md) → [`00bd8168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8168.md) _ZN8firebase4auth8jniphone15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 62.96% / 新版 62.96%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd817c",
      "READ",
      [
        "storage",
        "01126cb8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8188",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd8128"
      ]
    ],
    [
      "unmatched:00bd8100",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd817c",
      "READ",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8188",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd81c4"
      ]
    ],
    [
      "00bd819c",
      "READ",
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
- 00bd80e0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:cb8:8"]]
- 00bd80e0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd80e0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd817c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:db8:8"]]
+ 00bd817c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd817c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bd80ec ["BRANCH", null, ["local:b5:8"]]
+ 00bd8188 ["BRANCH", null, ["local:b6:8"]]
- 00bd8100 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:cb0:8"]]
- 00bd8100 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fecd3abb2fae8661ce6e4ba9dd4c2c41"></a>

### [`00bd8138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8138.md) → [`00bd81d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd81d4.md) _ZN8firebase4auth8jniphone12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bd8150",
      "incomplete_value": true,
      "site": "00bd8150",
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
      "unmatched:00bd8138",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd813c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd8140",
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
      "00bd81d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd81d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd81dc",
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
- 00bd8150 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd8150 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00bd81ec ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd81ec ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd8138 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd8138 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd8138 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd813c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd813c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd813c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd813c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ba4dab89316d9d1528f3a0847f5c51ac"></a>

### [`00bd81a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd81a8.md) → [`00bd8244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8244.md) _ZN8firebase4auth8jniphone14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd81e8",
      "incomplete_value": true,
      "site": "00bd81e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cb0:8"
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
    "old": {
      "definition_site": "00bd81c4",
      "incomplete_value": true,
      "site": "00bd81c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd81cc",
      "incomplete_value": false,
      "site": "00bd81e0",
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
            "const:7b7:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8258",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8268",
      "PARAM",
      [
        "storage",
        "002b27b7",
        null,
        "string"
      ]
    ],
    [
      "00bd8284",
      "WRITE",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8258",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8268",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ],
    [
      "00bd8284",
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
- 00bd81e0 ["INT_ADD", "register:40f0:8", ["const:bd81e0:8", "const:4:8"]]
- 00bd81e0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd827c ["INT_ADD", "register:40f0:8", ["const:bd827c:8", "const:4:8"]]
+ 00bd827c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd81e8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb0:8"]]
- 00bd81e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8284 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
+ 00bd8284 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd81bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb0:8"]]
- 00bd81bc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd8258 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
+ 00bd8258 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e76e8d186cb17bae39fb40cf490ef152"></a>

### [`00bd8218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8218.md) → [`00bd82b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd82b4.md) _ZN8firebase4auth8jniphone11GetMethodIdENS1_6MethodE

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
      "00bd82c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd823c"
      ]
    ],
    [
      "unmatched:00bd8234",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd8238",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bd82c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd82d8"
      ]
    ],
    [
      "00bd82d0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd82d4",
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
- 00bd822c ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00bd822c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd82c8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00bd82c8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd8234 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd8234 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd8234 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd8234 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd8238 ["INT_ADD", "register:40f0:8", ["const:bd8238:8", "const:4:8"]]
- 00bd8238 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-06496e2ec4295da48585d58316144dbf"></a>

### [`00bd8254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8254.md) → [`00bd82f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd82f0.md) _ZN8firebase4auth8jniphone13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd8278",
      "incomplete_value": false,
      "site": "00bd828c",
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
            "const:7b7:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd8268",
      "READ",
      [
        "storage",
        "01126cb0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd8270",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd8334"
      ]
    ],
    [
      "unmatched:00bd8278",
      "PARAM",
      [
        "storage",
        "002b27b7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd8304",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd830c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd8334"
      ]
    ],
    [
      "00bd8314",
      "PARAM",
      [
        "storage",
        "002b27e8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd828c ["INT_ADD", "register:40f0:8", ["const:bd828c:8", "const:4:8"]]
- 00bd828c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd8328 ["INT_ADD", "register:40f0:8", ["const:bd8328:8", "const:4:8"]]
+ 00bd8328 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd8268 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cb0:8"]]
- 00bd8268 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd826c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-4180af7b1a1f9a3f6dbcf41b07e819a6"></a>

### [`00bd82c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd82c4.md) → [`00bd8360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8360.md) _ZN8firebase4auth8jniphone10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 26.67% / 新版 26.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd82c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd82c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd8374",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd82e8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8360",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd8364",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd8374",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd8384"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd82c4 ["COPY", "tmp:0:8", ["register:4098:8"]]
- 00bd82c4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd82c4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd82c8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd82c8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd82c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd82c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd82cc ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bd82cc ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00bd82cc ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00bd82cc ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-6a9f8ca07976867a44e0b8dea9ea25ab"></a>

### [`00bd8300`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8300.md) → [`00bd839c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd839c.md) _ZN8firebase4auth15phonecredential19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
    "old": {
      "definition_site": "00bd832c",
      "incomplete_value": true,
      "site": "00bd832c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
    "old": {
      "definition_site": "00bd8314",
      "incomplete_value": true,
      "site": "00bd8314",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd8320",
      "incomplete_value": false,
      "site": "00bd8324",
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
            "const:cec:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd83ac",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd83bc",
      "PARAM",
      [
        "storage",
        "002b5cec",
        null,
        "string"
      ]
    ],
    [
      "00bd83c8",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd83ac",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd83bc",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd83c8",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8324 ["INT_ADD", "register:40f0:8", ["const:bd8324:8", "const:4:8"]]
- 00bd8324 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd83c0 ["INT_ADD", "register:40f0:8", ["const:bd83c0:8", "const:4:8"]]
+ 00bd83c0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd832c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd8:8"]]
- 00bd832c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd83c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
+ 00bd83c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8310 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd8:8"]]
- 00bd8310 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd83ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
+ 00bd83ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6a2f4bc063ad84743d902f564c8c142d"></a>

### [`00bd8340`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8340.md) → [`00bd83dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd83dc.md) _ZN8firebase4auth15phonecredential19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
    "old": {
      "definition_site": "00bd836c",
      "incomplete_value": true,
      "site": "00bd836c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
    "old": {
      "definition_site": "00bd8354",
      "incomplete_value": true,
      "site": "00bd8354",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd835c",
      "incomplete_value": false,
      "site": "00bd8364",
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
            "const:cec:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd83ec",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd83f8",
      "PARAM",
      [
        "storage",
        "002b5cec",
        null,
        "string"
      ]
    ],
    [
      "00bd8408",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd83ec",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd83f8",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd8408",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8364 ["INT_ADD", "register:40f0:8", ["const:bd8364:8", "const:4:8"]]
- 00bd8364 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd8400 ["INT_ADD", "register:40f0:8", ["const:bd8400:8", "const:4:8"]]
+ 00bd8400 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd836c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd8:8"]]
- 00bd836c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8408 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
+ 00bd8408 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8350 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd8:8"]]
- 00bd8350 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd83ec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
+ 00bd83ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f41a9def92d3bb004cb58460073a1143"></a>

### [`00bd8380`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8380.md) → [`00bd841c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd841c.md) _ZN8firebase4auth15phonecredential10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bd83b0",
      "incomplete_value": true,
      "site": "00bd83b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
    "old": {
      "definition_site": "00bd8394",
      "incomplete_value": true,
      "site": "00bd8394",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd83a0",
      "incomplete_value": false,
      "site": "00bd83a8",
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
            "const:cec:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd842c",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd843c",
      "PARAM",
      [
        "storage",
        "002b5cec",
        null,
        "string"
      ]
    ],
    [
      "00bd844c",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd842c",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd843c",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd844c",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd83a8 ["INT_ADD", "register:40f0:8", ["const:bd83a8:8", "const:4:8"]]
- 00bd83a8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd8444 ["INT_ADD", "register:40f0:8", ["const:bd8444:8", "const:4:8"]]
+ 00bd8444 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd83b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd8:8"]]
- 00bd83b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd844c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
+ 00bd844c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8390 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd8:8"]]
- 00bd8390 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd842c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
+ 00bd842c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0e9933dd2c2ac3f87317fda3e451e4af"></a>

### [`00bd83c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd83c4.md) → [`00bd8460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8460.md) _ZN8firebase4auth15phonecredential10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd83d8",
      "incomplete_value": true,
      "site": "00bd83d8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd83e0",
      "incomplete_value": false,
      "site": "00bd83ec",
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
            "const:cec:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8470",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bd83e0",
      "PARAM",
      [
        "storage",
        "002b5cec",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bd83f4",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8470",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd847c",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd8490",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd83d8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00bd83d8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bd8474 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00bd8474 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bd83ec ["INT_ADD", "register:40f0:8", ["const:bd83ec:8", "const:4:8"]]
- 00bd83ec ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd8488 ["INT_ADD", "register:40f0:8", ["const:bd8488:8", "const:4:8"]]
+ 00bd8488 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd83d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:cd8:8"]]
- 00bd83d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd8470 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:dd8:8"]]
+ 00bd8470 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-9ce59b07ecee2b6d5b0477b933f85296"></a>

### [`00bd8408`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8408.md) → [`00bd84a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd84a4.md) _ZN8firebase4auth15phonecredential8GetClassEv

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5de10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de10.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5dee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dee0.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

アドレスに依存する影響 `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd840c",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd84a8",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8408 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00bd840c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cd8:8"]]
- 00bd840c ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd8410 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00bd8410 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-44b43bfa0369e5ff7e38589fedebb523"></a>

### [`00bd8414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8414.md) → [`00bd84b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd84b0.md) _ZN8firebase4auth15phonecredential15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bd8414",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd8418",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd841c",
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
      "00bd84b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd84b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd84b8",
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
- 00bd8414 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bd8414 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bd8414 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd8418 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd8418 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd8418 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd8418 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bd841c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd841c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd841c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00bd841c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-40f1a375c52c0904a04f36fa5ab994e1"></a>

### [`00bd8480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8480.md) → [`00bd851c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd851c.md) _ZN8firebase4auth15phonecredential12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bd8498",
      "incomplete_value": true,
      "site": "00bd8498",
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
      "00bd8530",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd853c",
      "READ",
      [
        "storage",
        "01126ce0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8544",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd84c0"
      ]
    ]
  ],
  "added": [
    [
      "00bd8530",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd853c",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd8544",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd855c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8498 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd8498 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00bd8534 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd8534 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00bd8494 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
- 00bd8494 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd8530 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
+ 00bd8530 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd84a0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:ce0:8"]]
- 00bd84a0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bd84a0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bd853c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:de0:8"]]
+ 00bd853c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bd853c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-d6bed553f24ee3fcdc23ac71658de867"></a>

### [`00bd84f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd84f0.md) → [`00bd858c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd858c.md) _ZN8firebase4auth15phonecredential14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd8530",
      "incomplete_value": true,
      "site": "00bd8530",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
    "old": {
      "definition_site": "00bd850c",
      "incomplete_value": true,
      "site": "00bd850c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd8514",
      "incomplete_value": false,
      "site": "00bd8528",
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
            "const:cec:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd85a0",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd85b0",
      "PARAM",
      [
        "storage",
        "002b5cec",
        null,
        "string"
      ]
    ],
    [
      "00bd85cc",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd85a0",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd85b0",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd85cc",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8528 ["INT_ADD", "register:40f0:8", ["const:bd8528:8", "const:4:8"]]
- 00bd8528 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd85c4 ["INT_ADD", "register:40f0:8", ["const:bd85c4:8", "const:4:8"]]
+ 00bd85c4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd8530 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
- 00bd8530 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd85cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
+ 00bd85cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd8504 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
- 00bd8504 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd85a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
+ 00bd85a0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dbc88e8b3be6c2b69b9e36b37adaf062"></a>

### [`00bd8560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8560.md) → [`00bd85fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd85fc.md) _ZN8firebase4auth15phonecredential11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bd857c",
      "incomplete_value": false,
      "site": "00bd8580",
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
    "old": {
      "definition_site": "00bd858c",
      "incomplete_value": true,
      "site": "00bd8598",
      "value": [
        "LOAD",
        "8",
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
      "00bd8618",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bd8628",
      "DATA",
      [
        "storage",
        "01126ce8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd8618",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bd8628",
      "DATA",
      [
        "storage",
        "01126de8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd8580 ["INT_ADD", "register:40f0:8", ["const:bd8580:8", "const:4:8"]]
- 00bd8580 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd861c ["INT_ADD", "register:40f0:8", ["const:bd861c:8", "const:4:8"]]
+ 00bd861c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd857c ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bd857c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd857c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd857c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd8618 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bd8618 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8618 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd8618 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd8588 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 00bd8588 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd8588 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd8588 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd8624 ["COPY", "tmp:0:8", ["const:de8:8"]]
+ 00bd8624 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd8624 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd8624 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-acdb9d6dd1c79bbbf778ed478e033f32"></a>

### [`00bd859c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd859c.md) → [`00bd8638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8638.md) _ZN8firebase4auth15phonecredential13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bd85dc",
      "incomplete_value": true,
      "site": "00bd85dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
    "old": {
      "definition_site": "00bd85b8",
      "incomplete_value": true,
      "site": "00bd85b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd85c0",
      "incomplete_value": false,
      "site": "00bd85d4",
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
            "const:cec:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd864c",
      "READ",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd865c",
      "PARAM",
      [
        "storage",
        "002b5cec",
        null,
        "string"
      ]
    ],
    [
      "00bd8678",
      "WRITE",
      [
        "storage",
        "01126cd8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd864c",
      "READ",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd865c",
      "PARAM",
      [
        "storage",
        "002b5d2c",
        null,
        "string"
      ]
    ],
    [
      "00bd8678",
      "WRITE",
      [
        "storage",
        "01126dd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd85d4 ["INT_ADD", "register:40f0:8", ["const:bd85d4:8", "const:4:8"]]
- 00bd85d4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd8670 ["INT_ADD", "register:40f0:8", ["const:bd8670:8", "const:4:8"]]
+ 00bd8670 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd85dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
- 00bd85dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bd8678 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
+ 00bd8678 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bd85b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:cd8:8"]]
- 00bd85b0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd864c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
+ 00bd864c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-88eb77a433566579e8246ee35d40c47d"></a>

### [`00bd860c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd860c.md) → [`00bd86a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd86a8.md) _ZN8firebase4auth15phonecredential10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bd8628",
      "incomplete_value": false,
      "site": "00bd862c",
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
    "old": {
      "definition_site": "00bd8638",
      "incomplete_value": true,
      "site": "00bd8644",
      "value": [
        "LOAD",
        "8",
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
      "00bd86c4",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bd86d4",
      "DATA",
      [
        "storage",
        "01126cf0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bd86c4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bd86d4",
      "DATA",
      [
        "storage",
        "01126df0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd862c ["INT_ADD", "register:40f0:8", ["const:bd862c:8", "const:4:8"]]
- 00bd862c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd86c8 ["INT_ADD", "register:40f0:8", ["const:bd86c8:8", "const:4:8"]]
+ 00bd86c8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd8628 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bd8628 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd8628 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd8628 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd86c4 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bd86c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd86c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd86c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bd8634 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 00bd8634 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bd8634 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bd8634 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bd86d0 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 00bd86d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd86d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bd86d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b2b85ee28a17f52cd5b127681a434d6"></a>

### [`00bd8648`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8648.md) → [`00bd86e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd86e4.md) _ZN8firebase4auth24CacheCredentialMethodIdsEP7_JNIEnvP8_jobjectRKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dcb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dcb0.md) · 呼出先 4件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5dd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd80.md) · 呼出先 4件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 18.00% / 新版 18.00%

優先判定に残った影響 `call_argument_candidate` 23件, `unresolved_branch_alignment` 26件, `unresolved_call_alignment` 28件, `unresolved_store_alignment` 24件

アドレスに依存する影響 `branch_value` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd8d38",
      "incomplete_value": false,
      "site": "00bd8d38",
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
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8c9c",
      "incomplete_value": false,
      "site": "00bd8c9c",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd87b4",
      "incomplete_value": true,
      "site": "00bd87b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd8718",
      "incomplete_value": true,
      "site": "00bd8718",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd8710",
      "incomplete_value": true,
      "site": "00bd871c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "unmatched:00bd8648",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd864c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd8650",
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
      "00bd86e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bd86e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd86ec",
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
- 00bd8680 ["INT_ADD", "register:40f0:8", ["const:bd8680:8", "const:4:8"]]
- 00bd8680 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bd871c ["INT_ADD", "register:40f0:8", ["const:bd871c:8", "const:4:8"]]
+ 00bd871c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bd86b0 ["INT_ADD", "register:40f0:8", ["const:bd86b0:8", "const:4:8"]]
- 00bd86b0 ["CALL", null, ["callee:00c5b000:8"]]
+ 00bd874c ["INT_ADD", "register:40f0:8", ["const:bd874c:8", "const:4:8"]]
+ 00bd874c ["CALL", null, ["callee:00c5b000:8"]]
- 00bd86f4 ["INT_ADD", "register:40f0:8", ["const:bd86f4:8", "const:4:8"]]
- 00bd86f4 ["CALL", null, ["callee:00c5b030:8"]]
+ 00bd8790 ["INT_ADD", "register:40f0:8", ["const:bd8790:8", "const:4:8"]]
+ 00bd8790 ["CALL", null, ["callee:00c5b030:8"]]
~~~


<a id="compare-74f9153baf0d77b6018716e9ea05cf7d"></a>

### [`00bd8cb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd8/00bd8cb4.md) → [`00bd8d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd8/00bd8d50.md) _ZN8firebase4auth24ReleaseCredentialClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dcc0.md) · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5dd90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd90.md) · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 7.49% / 新版 7.49%

優先判定に残った影響 `unresolved_branch_alignment` 31件, `unresolved_call_alignment` 50件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 34件

アドレスに依存する影響 `branch_value` 2件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00bd927c",
      "incomplete_value": false,
      "site": "00bd927c",
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
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bd91e0",
      "incomplete_value": false,
      "site": "00bd91e0",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "ordinal": 39,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bd8d6c",
      "incomplete_value": true,
      "site": "00bd8d6c",
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
      "definition_site": "00bd8cd0",
      "incomplete_value": true,
      "site": "00bd8cd0",
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
      "definition_site": "00bd9148",
      "incomplete_value": true,
      "site": "00bd9148",
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
      "definition_site": "00bd9144",
      "incomplete_value": true,
      "site": "00bd9144",
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
    "ordinal": 30,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd8d64",
      "READ",
      [
        "storage",
        "01126c68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8d6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd8d14"
      ]
    ],
    [
      "00bd8d74",
      "READ",
      [
        "storage",
        "01126c70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bd8d64",
      "READ",
      [
        "storage",
        "01126d68",
        null,
        "undefined8"
      ]
    ],
    [
      "00bd8d6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd8db0"
      ]
    ],
    [
      "00bd8d74",
      "READ",
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
- 00bd8d6c ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00bd9140 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b08:8"]]
- 00bd9140 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bd9144 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:dd8:8"]]
+ 00bd9144 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bd9144 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bd9144 ["CBRANCH", null, ["local:b74:8", "tmp:0:1"]]
+ 00bd9148 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bd9148 ["CBRANCH", null, ["local:b65:8", "tmp:0:1"]]
~~~


<a id="compare-c1df773beb4e035db0d094c6b18d8534"></a>

### [`00bd91ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd91ec.md) → [`00bd9288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9288.md) _ZN8firebase4auth10CredentialD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00c5a9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a9f0.md) [`00c5de00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de00.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 2件 [`00c5aac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aac0.md) [`00c5ded0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5ded0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd9214",
      "incomplete_value": false,
      "site": "00bd9218",
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
            "const:5d8:8"
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
      "unmatched:00bd91ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd91f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bd9214",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd9288",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bd928c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bd92b0",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9218 ["INT_ADD", "register:40f0:8", ["const:bd9218:8", "const:4:8"]]
- 00bd9218 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd92b4 ["INT_ADD", "register:40f0:8", ["const:bd92b4:8", "const:4:8"]]
+ 00bd92b4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd91ec ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bd91ec ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bd91ec ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00bd91ec ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bd91f0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00bd91f0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00bd91f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bd91f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-173e3e5667ed0ef7c24c8d5e807976a6"></a>

### [`00bd92c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd92c0.md) → [`00bd935c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd935c.md) _ZN8firebase4auth10CredentialaSERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd60.md) · 呼出先 4件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 1件 [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md) · 呼出先 4件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd92f8",
      "incomplete_value": false,
      "site": "00bd92fc",
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
            "const:5d8:8"
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
      "00bd9394",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd9394",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd92fc ["INT_ADD", "register:40f0:8", ["const:bd92fc:8", "const:4:8"]]
- 00bd92fc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9398 ["INT_ADD", "register:40f0:8", ["const:bd9398:8", "const:4:8"]]
+ 00bd9398 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd92e8 ["INT_ADD", "register:40f0:8", ["const:bd92e8:8", "const:4:8"]]
- 00bd92e8 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bd9384 ["INT_ADD", "register:40f0:8", ["const:bd9384:8", "const:4:8"]]
+ 00bd9384 ["CALL", null, ["callee:00c5b330:8"]]
- 00bd92f8 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00bd92f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd92f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd92f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd9394 ["COPY", "tmp:0:8", ["const:609:8"]]
+ 00bd9394 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd9394 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd9394 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2979a6f78e1756e3deff64c5ee48a24f"></a>

### [`00bd9390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9390.md) → [`00bd942c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd942c.md) _ZNK8firebase4auth10Credential8providerEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md) [`00c5b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b390.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)

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
    "old": {
      "definition_site": "00bd93b8",
      "incomplete_value": false,
      "site": "00bd93bc",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bd93d4",
      "incomplete_value": true,
      "site": "00bd93dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a58:8"
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
      "00bd9454",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ],
    [
      "00bd9470",
      "READ",
      [
        "storage",
        "01126a58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd9454",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00bd9470",
      "READ",
      [
        "storage",
        "01126b58",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd93bc ["INT_ADD", "register:40f0:8", ["const:bd93bc:8", "const:4:8"]]
- 00bd93bc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9458 ["INT_ADD", "register:40f0:8", ["const:bd9458:8", "const:4:8"]]
+ 00bd9458 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd93dc ["INT_ADD", "register:40f0:8", ["const:bd93dc:8", "const:4:8"]]
- 00bd93dc ["CALL", null, ["callee:00497874:8"]]
+ 00bd9478 ["INT_ADD", "register:40f0:8", ["const:bd9478:8", "const:4:8"]]
+ 00bd9478 ["CALL", null, ["callee:00497874:8"]]
- 00bd93a8 ["INT_ADD", "register:40f0:8", ["const:bd93a8:8", "const:4:8"]]
- 00bd93a8 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bd9444 ["INT_ADD", "register:40f0:8", ["const:bd9444:8", "const:4:8"]]
+ 00bd9444 ["CALL", null, ["callee:00c5b330:8"]]
~~~


<a id="compare-afcc5b29852334d2e7669e0c62ab8444"></a>

### [`00bd9424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9424.md) → [`00bd94c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd94c0.md) _ZN8firebase4auth17EmailAuthProvider13GetCredentialEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md) [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.45% / 新版 93.45%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd947c",
      "incomplete_value": false,
      "site": "00bd9480",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bd94c0",
      "incomplete_value": true,
      "site": "00bd94d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a68:8"
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
    "old": {
      "definition_site": "00bd94c4",
      "incomplete_value": true,
      "site": "00bd94d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a78:8"
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
      "00bd94fc",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9500",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd95f0"
      ]
    ],
    [
      "00bd9518",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd94fc",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9500",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd968c"
      ]
    ],
    [
      "00bd9518",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9480 ["INT_ADD", "register:40f0:8", ["const:bd9480:8", "const:4:8"]]
- 00bd9480 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd951c ["INT_ADD", "register:40f0:8", ["const:bd951c:8", "const:4:8"]]
+ 00bd951c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd94d8 ["INT_ADD", "register:40f0:8", ["const:bd94d8:8", "const:4:8"]]
- 00bd94d8 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bd9574 ["INT_ADD", "register:40f0:8", ["const:bd9574:8", "const:4:8"]]
+ 00bd9574 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bd9528 ["INT_ADD", "register:40f0:8", ["const:bd9528:8", "const:4:8"]]
- 00bd9528 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd95c4 ["INT_ADD", "register:40f0:8", ["const:bd95c4:8", "const:4:8"]]
+ 00bd95c4 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-e3f0be6a4c7b0d733b1ef81de07a9b2f"></a>

### [`00bd9768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9768.md) → [`00bd9804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9804.md) _ZNK8firebase4auth19PhoneAuthCredential8sms_codeEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md) [`00c5b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b390.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd9798",
      "incomplete_value": false,
      "site": "00bd979c",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bd97b0",
      "incomplete_value": true,
      "site": "00bd97b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bd9834",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ],
    [
      "00bd984c",
      "READ",
      [
        "storage",
        "01126ce8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bd9834",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00bd984c",
      "READ",
      [
        "storage",
        "01126de8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd979c ["INT_ADD", "register:40f0:8", ["const:bd979c:8", "const:4:8"]]
- 00bd979c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9838 ["INT_ADD", "register:40f0:8", ["const:bd9838:8", "const:4:8"]]
+ 00bd9838 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd97b8 ["INT_ADD", "register:40f0:8", ["const:bd97b8:8", "const:4:8"]]
- 00bd97b8 ["CALL", null, ["callee:00497874:8"]]
+ 00bd9854 ["INT_ADD", "register:40f0:8", ["const:bd9854:8", "const:4:8"]]
+ 00bd9854 ["CALL", null, ["callee:00497874:8"]]
- 00bd9788 ["INT_ADD", "register:40f0:8", ["const:bd9788:8", "const:4:8"]]
- 00bd9788 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bd9824 ["INT_ADD", "register:40f0:8", ["const:bd9824:8", "const:4:8"]]
+ 00bd9824 ["CALL", null, ["callee:00c5b330:8"]]
~~~


<a id="compare-10283807f6ac41f011c7eabafb003392"></a>

### [`00bd97f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd97f0.md) → [`00bd988c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd988c.md) _ZN8firebase4auth26InternalAuthResultProvider13GetCredentialEP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dda0.md) · 呼出先 3件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 1件 [`00c5de70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de70.md) · 呼出先 3件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.22% / 新版 97.22%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd981c",
      "incomplete_value": false,
      "site": "00bd9820",
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
            "const:5d8:8"
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
      "00bd98b8",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd98b8",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9820 ["INT_ADD", "register:40f0:8", ["const:bd9820:8", "const:4:8"]]
- 00bd9820 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd98bc ["INT_ADD", "register:40f0:8", ["const:bd98bc:8", "const:4:8"]]
+ 00bd98bc ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd980c ["INT_ADD", "register:40f0:8", ["const:bd980c:8", "const:4:8"]]
- 00bd980c ["CALL", null, ["callee:00c5b330:8"]]
+ 00bd98a8 ["INT_ADD", "register:40f0:8", ["const:bd98a8:8", "const:4:8"]]
+ 00bd98a8 ["CALL", null, ["callee:00c5b330:8"]]
- 00bd981c ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00bd981c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bd981c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bd981c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bd98b8 ["COPY", "tmp:0:8", ["const:609:8"]]
+ 00bd98b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd98b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bd98b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-fd0bd23c65e04c685eee6233807baf43"></a>

### [`00bd9880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9880.md) → [`00bd991c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd991c.md) _ZN8firebase4auth20FacebookAuthProvider13GetCredentialEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.16% / 新版 89.16%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd98bc",
      "incomplete_value": false,
      "site": "00bd98c0",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bd98e8",
      "incomplete_value": true,
      "site": "00bd98fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a88:8"
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
    "old": {
      "definition_site": "00bd98ec",
      "incomplete_value": true,
      "site": "00bd98fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a98:8"
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
      "00bd993c",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9940",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd998c"
      ]
    ],
    [
      "00bd9958",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd993c",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9940",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd9a28"
      ]
    ],
    [
      "00bd9958",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd98c0 ["INT_ADD", "register:40f0:8", ["const:bd98c0:8", "const:4:8"]]
- 00bd98c0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd995c ["INT_ADD", "register:40f0:8", ["const:bd995c:8", "const:4:8"]]
+ 00bd995c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd98fc ["INT_ADD", "register:40f0:8", ["const:bd98fc:8", "const:4:8"]]
- 00bd98fc ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bd9998 ["INT_ADD", "register:40f0:8", ["const:bd9998:8", "const:4:8"]]
+ 00bd9998 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bd9944 ["INT_ADD", "register:40f0:8", ["const:bd9944:8", "const:4:8"]]
- 00bd9944 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd99e0 ["INT_ADD", "register:40f0:8", ["const:bd99e0:8", "const:4:8"]]
+ 00bd99e0 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-997a363c5da70deda78e982065824a6b"></a>

### [`00bd99cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd99cc.md) → [`00bd9a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9a68.md) _ZN8firebase4auth18GitHubAuthProvider13GetCredentialEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.16% / 新版 89.16%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd9a08",
      "incomplete_value": false,
      "site": "00bd9a0c",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bd9a34",
      "incomplete_value": true,
      "site": "00bd9a48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:aa8:8"
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
    "old": {
      "definition_site": "00bd9a38",
      "incomplete_value": true,
      "site": "00bd9a48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ab8:8"
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
      "00bd9a88",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9a8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd9ad8"
      ]
    ],
    [
      "00bd9aa4",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd9a88",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9a8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd9b74"
      ]
    ],
    [
      "00bd9aa4",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9a0c ["INT_ADD", "register:40f0:8", ["const:bd9a0c:8", "const:4:8"]]
- 00bd9a0c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9aa8 ["INT_ADD", "register:40f0:8", ["const:bd9aa8:8", "const:4:8"]]
+ 00bd9aa8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd9a48 ["INT_ADD", "register:40f0:8", ["const:bd9a48:8", "const:4:8"]]
- 00bd9a48 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bd9ae4 ["INT_ADD", "register:40f0:8", ["const:bd9ae4:8", "const:4:8"]]
+ 00bd9ae4 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bd9a90 ["INT_ADD", "register:40f0:8", ["const:bd9a90:8", "const:4:8"]]
- 00bd9a90 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9b2c ["INT_ADD", "register:40f0:8", ["const:bd9b2c:8", "const:4:8"]]
+ 00bd9b2c ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-5a6955e924c04520992af6e5c538ccf3"></a>

### [`00bd9b18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9b18.md) → [`00bd9bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9bb4.md) _ZN8firebase4auth18GoogleAuthProvider13GetCredentialEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5a9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a9d0.md) · 呼出先 6件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 1件 [`00c5aaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aaa0.md) · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd9b54",
      "incomplete_value": false,
      "site": "00bd9b58",
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
            "const:5d8:8"
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
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bd9c88",
      "incomplete_value": true,
      "site": "00bd9c94",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "00bd9bcc",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9bd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd9bb4"
      ]
    ],
    [
      "unmatched:00bd9b54",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd9bcc",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9bd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd9c50"
      ]
    ],
    [
      "00bd9bf0",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9b58 ["INT_ADD", "register:40f0:8", ["const:bd9b58:8", "const:4:8"]]
- 00bd9b58 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9bf4 ["INT_ADD", "register:40f0:8", ["const:bd9bf4:8", "const:4:8"]]
+ 00bd9bf4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd9bc8 ["INT_ADD", "register:40f0:8", ["const:bd9bc8:8", "const:4:8"]]
- 00bd9bc8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9c64 ["INT_ADD", "register:40f0:8", ["const:bd9c64:8", "const:4:8"]]
+ 00bd9c64 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd9bf8 ["INT_ADD", "register:40f0:8", ["const:bd9bf8:8", "const:4:8"]]
- 00bd9bf8 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bd9c94 ["INT_ADD", "register:40f0:8", ["const:bd9c94:8", "const:4:8"]]
+ 00bd9c94 ["CALL", null, ["callee:00c5ac70:8"]]
~~~


<a id="compare-bc060bf1c038747f7422515e840ba9ba"></a>

### [`00bd9cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9cbc.md) → [`00bd9d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9d58.md) _ZN8firebase4auth21PlayGamesAuthProvider13GetCredentialEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.16% / 新版 89.16%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd9cf8",
      "incomplete_value": false,
      "site": "00bd9cfc",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bd9d24",
      "incomplete_value": true,
      "site": "00bd9d38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ae8:8"
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
    "old": {
      "definition_site": "00bd9d28",
      "incomplete_value": true,
      "site": "00bd9d38",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:af8:8"
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
      "00bd9d78",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9d7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd9dc8"
      ]
    ],
    [
      "00bd9d94",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd9d78",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9d7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd9e64"
      ]
    ],
    [
      "00bd9d94",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9cfc ["INT_ADD", "register:40f0:8", ["const:bd9cfc:8", "const:4:8"]]
- 00bd9cfc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9d98 ["INT_ADD", "register:40f0:8", ["const:bd9d98:8", "const:4:8"]]
+ 00bd9d98 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd9d38 ["INT_ADD", "register:40f0:8", ["const:bd9d38:8", "const:4:8"]]
- 00bd9d38 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bd9dd4 ["INT_ADD", "register:40f0:8", ["const:bd9dd4:8", "const:4:8"]]
+ 00bd9dd4 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bd9d80 ["INT_ADD", "register:40f0:8", ["const:bd9d80:8", "const:4:8"]]
- 00bd9d80 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9e1c ["INT_ADD", "register:40f0:8", ["const:bd9e1c:8", "const:4:8"]]
+ 00bd9e1c ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-3ae90df5865236a79f7d97f13acf3c59"></a>

### [`00bd9e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9e08.md) → [`00bd9ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd9/00bd9ea4.md) _ZN8firebase4auth19TwitterAuthProvider13GetCredentialEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 90.72% / 新版 90.72%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd9e4c",
      "incomplete_value": false,
      "site": "00bd9e50",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bd9e90",
      "incomplete_value": true,
      "site": "00bd9ea8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b08:8"
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
    "old": {
      "definition_site": "00bd9e94",
      "incomplete_value": true,
      "site": "00bd9ea8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b18:8"
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
      "00bd9ecc",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9ed0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bd9f4c"
      ]
    ],
    [
      "00bd9ee8",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bd9ecc",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bd9ed0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bd9fe8"
      ]
    ],
    [
      "00bd9ee8",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9e50 ["INT_ADD", "register:40f0:8", ["const:bd9e50:8", "const:4:8"]]
- 00bd9e50 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9eec ["INT_ADD", "register:40f0:8", ["const:bd9eec:8", "const:4:8"]]
+ 00bd9eec ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bd9ea8 ["INT_ADD", "register:40f0:8", ["const:bd9ea8:8", "const:4:8"]]
- 00bd9ea8 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bd9f44 ["INT_ADD", "register:40f0:8", ["const:bd9f44:8", "const:4:8"]]
+ 00bd9f44 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bd9f04 ["INT_ADD", "register:40f0:8", ["const:bd9f04:8", "const:4:8"]]
- 00bd9f04 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bd9fa0 ["INT_ADD", "register:40f0:8", ["const:bd9fa0:8", "const:4:8"]]
+ 00bd9fa0 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-7057d54edbfdb4e1483dfc4ebe271726"></a>

### [`00bd9f8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd9/00bd9f8c.md) → [`00bda028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda028.md) _ZN8firebase4auth13OAuthProvider13GetCredentialEPKcS3_S3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 92.04% / 新版 92.04%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bd9fdc",
      "incomplete_value": false,
      "site": "00bd9fe0",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bda038",
      "incomplete_value": true,
      "site": "00bda054",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b28:8"
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
    "old": {
      "definition_site": "00bda03c",
      "incomplete_value": true,
      "site": "00bda054",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b38:8"
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
      "00bda05c",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bda060",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bda10c"
      ]
    ],
    [
      "00bda078",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda05c",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bda060",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bda1a8"
      ]
    ],
    [
      "00bda078",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bd9fe0 ["INT_ADD", "register:40f0:8", ["const:bd9fe0:8", "const:4:8"]]
- 00bd9fe0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda07c ["INT_ADD", "register:40f0:8", ["const:bda07c:8", "const:4:8"]]
+ 00bda07c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda054 ["INT_ADD", "register:40f0:8", ["const:bda054:8", "const:4:8"]]
- 00bda054 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bda0f0 ["INT_ADD", "register:40f0:8", ["const:bda0f0:8", "const:4:8"]]
+ 00bda0f0 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bda078 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bda078 ["INT_ADD", "register:40f0:8", ["const:bda078:8", "const:4:8"]]
- 00bda078 ["CALLIND", null, ["register:0:8"]]
+ 00bda114 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bda114 ["INT_ADD", "register:40f0:8", ["const:bda114:8", "const:4:8"]]
+ 00bda114 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6c615d5446040e0cb5b9940bf09b7936"></a>

### [`00bda150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda150.md) → [`00bda1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda1ec.md) _ZN8firebase4auth13OAuthProvider13GetCredentialEPKcS3_S3_S3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

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
    "old": {
      "definition_site": "00bda1a4",
      "incomplete_value": false,
      "site": "00bda1a8",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bda200",
      "incomplete_value": true,
      "site": "00bda214",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b28:8"
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
    "old": {
      "definition_site": "00bda204",
      "incomplete_value": true,
      "site": "00bda214",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b48:8"
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
      "00bda220",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bda224",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bda2e4"
      ]
    ],
    [
      "00bda240",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda220",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bda224",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bda380"
      ]
    ],
    [
      "00bda240",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda1a4 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00bda1a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda1a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda1a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda240 ["COPY", "tmp:0:8", ["const:609:8"]]
+ 00bda240 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda240 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda240 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bda1a8 ["INT_ADD", "register:40f0:8", ["const:bda1a8:8", "const:4:8"]]
- 00bda1a8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda244 ["INT_ADD", "register:40f0:8", ["const:bda244:8", "const:4:8"]]
+ 00bda244 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda214 ["INT_ADD", "register:40f0:8", ["const:bda214:8", "const:4:8"]]
- 00bda214 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bda2b0 ["INT_ADD", "register:40f0:8", ["const:bda2b0:8", "const:4:8"]]
+ 00bda2b0 ["CALL", null, ["callee:00c5ac70:8"]]
~~~


<a id="compare-80fcfd40dc0ac36d14b2d592880c20a3"></a>

### [`00bda410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda410.md) → [`00bda4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda4ac.md) _ZN8firebase4auth22GameCenterAuthProvider13GetCredentialEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`00bdc428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc428.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00bdc4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc4c4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 6件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bda458",
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
                "const:c9b000:8"
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
    "ordinal": 2,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bda470",
      "incomplete_value": true,
      "site": "00bda478",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bda518",
      "incomplete_value": true,
      "site": "00bda51c",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "00bda4f4",
      "READ",
      [
        "storage",
        "00c9ba30",
        null,
        "pointer"
      ]
    ],
    [
      "00bda4f4",
      "PARAM",
      [
        "storage",
        "00bdc428",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::auth::Credential>",
        null
      ]
    ],
    [
      "unmatched:00bda494",
      "PARAM",
      [
        "storage",
        "002b9cf0",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda4f4",
      "READ",
      [
        "storage",
        "00c9bb00",
        null,
        "pointer"
      ]
    ],
    [
      "00bda4f4",
      "PARAM",
      [
        "storage",
        "00bdc4c4",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::auth::Credential>",
        null
      ]
    ],
    [
      "00bda530",
      "PARAM",
      [
        "storage",
        "002b9c9c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda46c ["INT_ADD", "register:40f0:8", ["const:bda46c:8", "const:4:8"]]
- 00bda46c ["CALL", null, ["callee:00c5af10:8"]]
+ 00bda508 ["INT_ADD", "register:40f0:8", ["const:bda508:8", "const:4:8"]]
+ 00bda508 ["CALL", null, ["callee:00c5af10:8"]]
- 00bda478 ["INT_ADD", "register:40f0:8", ["const:bda478:8", "const:4:8"]]
- 00bda478 ["CALL", null, ["callee:00c5aed0:8"]]
+ 00bda514 ["INT_ADD", "register:40f0:8", ["const:bda514:8", "const:4:8"]]
+ 00bda514 ["CALL", null, ["callee:00c5aed0:8"]]
- 00bda480 ["INT_ADD", "register:40f0:8", ["const:bda480:8", "const:4:8"]]
- 00bda480 ["CALL", null, ["callee:00c5ab60:8"]]
+ 00bda51c ["INT_ADD", "register:40f0:8", ["const:bda51c:8", "const:4:8"]]
+ 00bda51c ["CALL", null, ["callee:00c5ab60:8"]]
~~~


<a id="compare-2fc131952fcbbe3f3da205cacfe983e5"></a>

### [`00bda658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda658.md) → [`00bda6f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda6f4.md) _ZN8firebase4auth22GameCenterAuthProvider21IsPlayerAuthenticatedEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bda664",
      "incomplete_value": false,
      "site": "00bda668",
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
            "const:927:8"
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
      "00bda700",
      "PARAM",
      [
        "storage",
        "002b4927",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda700",
      "PARAM",
      [
        "storage",
        "002b4958",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda668 ["INT_ADD", "register:40f0:8", ["const:bda668:8", "const:4:8"]]
- 00bda668 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda704 ["INT_ADD", "register:40f0:8", ["const:bda704:8", "const:4:8"]]
+ 00bda704 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda664 ["COPY", "tmp:0:8", ["const:927:8"]]
- 00bda664 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda664 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda664 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda700 ["COPY", "tmp:0:8", ["const:958:8"]]
+ 00bda700 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda700 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda700 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7dd2612c39d0a75fe3dd1ee6fb47fdb2"></a>

### [`00bda6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda6a4.md) → [`00bda740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda740.md) _ZN8firebase4auth17PhoneAuthProvider19ForceResendingTokenD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bda6d0",
      "incomplete_value": false,
      "site": "00bda6d4",
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
            "const:5d8:8"
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
      "00bda76c",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda76c",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda6d4 ["INT_ADD", "register:40f0:8", ["const:bda6d4:8", "const:4:8"]]
- 00bda6d4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda770 ["INT_ADD", "register:40f0:8", ["const:bda770:8", "const:4:8"]]
+ 00bda770 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda6c0 ["INT_ADD", "register:40f0:8", ["const:bda6c0:8", "const:4:8"]]
- 00bda6c0 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bda75c ["INT_ADD", "register:40f0:8", ["const:bda75c:8", "const:4:8"]]
+ 00bda75c ["CALL", null, ["callee:00c5b330:8"]]
- 00bda6d0 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00bda6d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda6d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda6d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda76c ["COPY", "tmp:0:8", ["const:609:8"]]
+ 00bda76c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda76c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda76c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4fbc17049fcf638456fc095d0ae04cf8"></a>

### [`00bda748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda748.md) → [`00bda7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda7e4.md) _ZN8firebase4auth23ForceResendingTokenData6SetRefEP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de40.md) · 呼出先 3件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 1件 [`00c5df10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df10.md) · 呼出先 3件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bda778",
      "incomplete_value": false,
      "site": "00bda77c",
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
            "const:5d8:8"
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
    "old": {
      "definition_site": "00bda7ac",
      "incomplete_value": false,
      "site": "00bda7b0",
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
            "const:5d8:8"
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
      "00bda814",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ],
    [
      "00bda848",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda814",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ],
    [
      "00bda848",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda77c ["INT_ADD", "register:40f0:8", ["const:bda77c:8", "const:4:8"]]
- 00bda77c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda818 ["INT_ADD", "register:40f0:8", ["const:bda818:8", "const:4:8"]]
+ 00bda818 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda7b0 ["INT_ADD", "register:40f0:8", ["const:bda7b0:8", "const:4:8"]]
- 00bda7b0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda84c ["INT_ADD", "register:40f0:8", ["const:bda84c:8", "const:4:8"]]
+ 00bda84c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda768 ["INT_ADD", "register:40f0:8", ["const:bda768:8", "const:4:8"]]
- 00bda768 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bda804 ["INT_ADD", "register:40f0:8", ["const:bda804:8", "const:4:8"]]
+ 00bda804 ["CALL", null, ["callee:00c5b330:8"]]
~~~


<a id="compare-889929471d0fb1d57e8b9b597e9c321c"></a>

### [`00bda81c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda81c.md) → [`00bda8b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda8b8.md) _ZNK8firebase4auth17PhoneAuthProvider19ForceResendingTokeneqERKS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bda844",
      "incomplete_value": false,
      "site": "00bda848",
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
            "const:5d8:8"
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
      "00bda8e0",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bda8e0",
      "PARAM",
      [
        "storage",
        "002b2609",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bda848 ["INT_ADD", "register:40f0:8", ["const:bda848:8", "const:4:8"]]
- 00bda848 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda8e4 ["INT_ADD", "register:40f0:8", ["const:bda8e4:8", "const:4:8"]]
+ 00bda8e4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda834 ["INT_ADD", "register:40f0:8", ["const:bda834:8", "const:4:8"]]
- 00bda834 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bda8d0 ["INT_ADD", "register:40f0:8", ["const:bda8d0:8", "const:4:8"]]
+ 00bda8d0 ["CALL", null, ["callee:00c5b330:8"]]
- 00bda844 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00bda844 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda844 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda844 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda8e0 ["COPY", "tmp:0:8", ["const:609:8"]]
+ 00bda8e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda8e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda8e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-1a6f0a3cd7ab389f7f952030255ac270"></a>

### [`00bda888`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda888.md) → [`00bda924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda924.md) _ZNK8firebase4auth17PhoneAuthProvider19ForceResendingTokenneERKS2_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 1件

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
            "const:609:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bda8b0",
      "incomplete_value": false,
      "site": "00bda8b4",
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
            "const:5d8:8"
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
      "00bda94c",
      "PARAM",
      [
        "storage",
        "002b25d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
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
  ]
}
~~~


~~~diff
- 00bda8b4 ["INT_ADD", "register:40f0:8", ["const:bda8b4:8", "const:4:8"]]
- 00bda8b4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda950 ["INT_ADD", "register:40f0:8", ["const:bda950:8", "const:4:8"]]
+ 00bda950 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda8a0 ["INT_ADD", "register:40f0:8", ["const:bda8a0:8", "const:4:8"]]
- 00bda8a0 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bda93c ["INT_ADD", "register:40f0:8", ["const:bda93c:8", "const:4:8"]]
+ 00bda93c ["CALL", null, ["callee:00c5b330:8"]]
- 00bda8b0 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00bda8b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda8b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda8b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda94c ["COPY", "tmp:0:8", ["const:609:8"]]
+ 00bda94c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda94c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda94c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


