# v16.0.2 → v16.0.3 · 最優先の変更候補 (85)

[一覧の目次](README.md)

<a id="compare-87b548539015c5c681dafbda41bc0c69"></a>

### [`00b45ed8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45ed8.md) → [`00b46ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46ecc.md) _ZN8firebase4util3log19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46ef8",
      "incomplete_value": true,
      "site": "00b46ef8",
      "value": [
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
      "definition_site": "00b45f04",
      "incomplete_value": true,
      "site": "00b45f04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7d8:8"
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
      "00b46edc",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46ee8",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ],
    [
      "00b46ef8",
      "WRITE",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46edc",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46ee8",
      "PARAM",
      [
        "storage",
        "002bbe41",
        null,
        "string"
      ]
    ],
    [
      "00b46ef8",
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
- 00b45f04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d8:8"]]
- 00b45f04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46ef8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00b46ef8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45ee4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46ed8 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b45ee8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d8:8"]]
- 00b45ee8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46edc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00b46edc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1c4967490c722cb6d9e0cdef72eddf61"></a>

### [`00b45f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45f18.md) → [`00b46f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46f0c.md) _ZN8firebase4util3log10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b46f3c",
      "incomplete_value": true,
      "site": "00b46f3c",
      "value": [
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
      "definition_site": "00b45f48",
      "incomplete_value": true,
      "site": "00b45f48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7d8:8"
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
      "00b46f1c",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46f2c",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ],
    [
      "00b46f3c",
      "WRITE",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46f1c",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46f2c",
      "PARAM",
      [
        "storage",
        "002bbe41",
        null,
        "string"
      ]
    ],
    [
      "00b46f3c",
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
- 00b45f48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d8:8"]]
- 00b45f48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46f3c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00b46f3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45f24 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46f18 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b45f28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d8:8"]]
- 00b45f28 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b46f1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00b46f1c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cc33084d1dc0bbc34775f1cdcd1f52c2"></a>

### [`00b45f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45f5c.md) → [`00b46f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46f50.md) _ZN8firebase4util3log10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b46f80",
      "incomplete_value": true,
      "site": "00b46f80",
      "value": [
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
      "definition_site": "00b45f8c",
      "incomplete_value": true,
      "site": "00b45f8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7d8:8"
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
      "definition_site": "00b46f64",
      "incomplete_value": true,
      "site": "00b46f64",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45f70",
      "incomplete_value": true,
      "site": "00b45f70",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b46f6c",
      "incomplete_value": false,
      "site": "00b46f78",
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
            "const:e41:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b45f78",
      "incomplete_value": false,
      "site": "00b45f84",
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
            "const:d63:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b46f60",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46f6c",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ],
    [
      "00b46f80",
      "WRITE",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b46f60",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00b46f6c",
      "PARAM",
      [
        "storage",
        "002bbe41",
        null,
        "string"
      ]
    ],
    [
      "00b46f80",
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
- 00b45f84 ["INT_ADD", "register:40f0:8", ["const:b45f84:8", "const:4:8"]]
- 00b45f84 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b46f78 ["INT_ADD", "register:40f0:8", ["const:b46f78:8", "const:4:8"]]
+ 00b46f78 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b45f8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7d8:8"]]
- 00b45f8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b46f80 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:798:8"]]
+ 00b46f80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b45f68 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b46f5c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-2a99d0e80491a34bd579dd9efb6f0345"></a>

### [`00b45fac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b45/00b45fac.md) → [`00b46fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b46/00b46fa0.md) _ZN8firebase4util3log15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b47028",
      "incomplete_value": true,
      "site": "00b47028",
      "value": [
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
    "old": {
      "definition_site": "00b46034",
      "incomplete_value": true,
      "site": "00b46034",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7e0:8"
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
      "00b46fb4",
      "READ",
      [
        "storage",
        "011257e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46fd4",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47028",
      "WRITE",
      [
        "storage",
        "011257e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b46fb4",
      "READ",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b46fd4",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47028",
      "WRITE",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46034 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b46034 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7e0:8"]]
- 00b46034 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b47028 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b47028 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7a0:8"]]
+ 00b47028 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b45fbc ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b46fb0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b45fc0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7e0:8"]]
- 00b45fc0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b45fc0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b46fb4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:7a0:8"]]
+ 00b46fb4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b46fb4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-04f28270e359e7dc5aa3b7d5b28f9104"></a>

### [`00b46048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46048.md) → [`00b4703c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b4703c.md) _ZN8firebase4util3log12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b47078",
      "incomplete_value": true,
      "site": "00b47078",
      "value": [
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
    "old": {
      "definition_site": "00b46084",
      "incomplete_value": true,
      "site": "00b46084",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7e0:8"
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
      "definition_site": "00b470c8",
      "incomplete_value": true,
      "site": "00b470c8",
      "value": [
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
    "old": {
      "definition_site": "00b460d4",
      "incomplete_value": true,
      "site": "00b460d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7d8:8"
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
      "definition_site": "00b470b8",
      "incomplete_value": true,
      "site": "00b470c4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:798:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b460c4",
      "incomplete_value": true,
      "site": "00b460d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7d8:8"
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
      "00b47050",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4705c",
      "READ",
      [
        "storage",
        "011257e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47078",
      "WRITE",
      [
        "storage",
        "011257e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b47050",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4705c",
      "READ",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47078",
      "WRITE",
      [
        "storage",
        "011267a0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46084 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b46084 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b46084 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7e0:8"]]
- 00b46084 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b47078 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b47078 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b47078 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7a0:8"]]
+ 00b47078 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b460d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b460d0 ["INT_ADD", "register:40f0:8", ["const:b460d0:8", "const:4:8"]]
- 00b460d0 ["CALLIND", null, ["register:0:8"]]
+ 00b470c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b470c4 ["INT_ADD", "register:40f0:8", ["const:b470c4:8", "const:4:8"]]
+ 00b470c4 ["CALLIND", null, ["register:0:8"]]
- 00b460d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7d8:8"]]
- 00b460d4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b460d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b470c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:798:8"]]
+ 00b470c8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b470c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-1796c305f42096ab43c4ab75f4408ebe"></a>

### [`00b460e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b460e8.md) → [`00b470dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b470dc.md) _ZN8firebase4util3log14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4711c",
      "incomplete_value": true,
      "site": "00b4711c",
      "value": [
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
    "old": {
      "definition_site": "00b46128",
      "incomplete_value": true,
      "site": "00b46128",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7d8:8"
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
      "definition_site": "00b470f8",
      "incomplete_value": true,
      "site": "00b470f8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46104",
      "incomplete_value": true,
      "site": "00b46104",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47100",
      "incomplete_value": false,
      "site": "00b47114",
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
            "const:e41:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4610c",
      "incomplete_value": false,
      "site": "00b46120",
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
            "const:d63:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b470f0",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47100",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ],
    [
      "00b4711c",
      "WRITE",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b470f0",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47100",
      "PARAM",
      [
        "storage",
        "002bbe41",
        null,
        "string"
      ]
    ],
    [
      "00b4711c",
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
- 00b46120 ["INT_ADD", "register:40f0:8", ["const:b46120:8", "const:4:8"]]
- 00b46120 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47114 ["INT_ADD", "register:40f0:8", ["const:b47114:8", "const:4:8"]]
+ 00b47114 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46128 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7d8:8"]]
- 00b46128 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4711c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:798:8"]]
+ 00b4711c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b460f4 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b470e8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-f0be93b8a3694aa3198bd57e9289dfd9"></a>

### [`00b46158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46158.md) → [`00b4714c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b4714c.md) _ZN8firebase4util3log11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b47168",
      "incomplete_value": false,
      "site": "00b4716c",
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
      "definition_site": "00b46174",
      "incomplete_value": false,
      "site": "00b46178",
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
      "00b47168",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b47178",
      "DATA",
      [
        "storage",
        "011257e8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47168",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b47178",
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
- 00b46178 ["INT_ADD", "register:40f0:8", ["const:b46178:8", "const:4:8"]]
- 00b46178 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4716c ["INT_ADD", "register:40f0:8", ["const:b4716c:8", "const:4:8"]]
+ 00b4716c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b46174 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b46174 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b46174 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b46174 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b47168 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b47168 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47168 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47168 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4617c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b47170 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-f59c032724eed4d72c860dc67c85ef12"></a>

### [`00b46194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46194.md) → [`00b47188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47188.md) _ZN8firebase4util3log13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b471c8",
      "incomplete_value": true,
      "site": "00b471c8",
      "value": [
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
    "old": {
      "definition_site": "00b461d4",
      "incomplete_value": true,
      "site": "00b461d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7d8:8"
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
      "definition_site": "00b471a4",
      "incomplete_value": true,
      "site": "00b471a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b461b0",
      "incomplete_value": true,
      "site": "00b461b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b471ac",
      "incomplete_value": false,
      "site": "00b471c0",
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
            "const:e41:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b461b8",
      "incomplete_value": false,
      "site": "00b461cc",
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
            "const:d63:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4719c",
      "READ",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b471ac",
      "PARAM",
      [
        "storage",
        "002bbd63",
        null,
        "string"
      ]
    ],
    [
      "00b471c8",
      "WRITE",
      [
        "storage",
        "011257d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4719c",
      "READ",
      [
        "storage",
        "01126798",
        null,
        "undefined8"
      ]
    ],
    [
      "00b471ac",
      "PARAM",
      [
        "storage",
        "002bbe41",
        null,
        "string"
      ]
    ],
    [
      "00b471c8",
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
- 00b461cc ["INT_ADD", "register:40f0:8", ["const:b461cc:8", "const:4:8"]]
- 00b461cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b471c0 ["INT_ADD", "register:40f0:8", ["const:b471c0:8", "const:4:8"]]
+ 00b471c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b461d4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7d8:8"]]
- 00b461d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b471c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:798:8"]]
+ 00b471c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b461a0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b47194 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-95e0402502da1754ffd869d1a80c9925"></a>

### [`00b46204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46204.md) → [`00b471f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b471f8.md) _ZN8firebase4util3log10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b47214",
      "incomplete_value": false,
      "site": "00b47218",
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
      "definition_site": "00b46220",
      "incomplete_value": false,
      "site": "00b46224",
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
      "definition_site": "00b47224",
      "incomplete_value": true,
      "site": "00b47230",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b46230",
      "incomplete_value": true,
      "site": "00b4623c",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b47214",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b47224",
      "DATA",
      [
        "storage",
        "011257f0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b47214",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b47224",
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
- 00b46224 ["INT_ADD", "register:40f0:8", ["const:b46224:8", "const:4:8"]]
- 00b46224 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b47218 ["INT_ADD", "register:40f0:8", ["const:b47218:8", "const:4:8"]]
+ 00b47218 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b46220 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b46220 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b46220 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b46220 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b47214 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b47214 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47214 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47214 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b46228 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4721c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-53d59ceb8b4f263cc387ed25ac70a637"></a>

### [`00b46240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46240.md) → [`00b47234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47234.md) _ZN8firebase4util10uribuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00b47260",
      "incomplete_value": true,
      "site": "00b47260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4626c",
      "incomplete_value": true,
      "site": "00b4626c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7f8:8"
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
      "definition_site": "00b47248",
      "incomplete_value": true,
      "site": "00b47248",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46254",
      "incomplete_value": true,
      "site": "00b46254",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47254",
      "incomplete_value": false,
      "site": "00b47258",
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
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46260",
      "incomplete_value": false,
      "site": "00b46264",
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
            "const:2b1:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47244",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47254",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b47260",
      "WRITE",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47244",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47254",
      "PARAM",
      [
        "storage",
        "002af388",
        null,
        "string"
      ]
    ],
    [
      "00b47260",
      "WRITE",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46264 ["INT_ADD", "register:40f0:8", ["const:b46264:8", "const:4:8"]]
- 00b46264 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47258 ["INT_ADD", "register:40f0:8", ["const:b47258:8", "const:4:8"]]
+ 00b47258 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4626c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
- 00b4626c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47260 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b8:8"]]
+ 00b47260 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4624c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47240 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-d996ac378e83ddb24d7856dd8405765f"></a>

### [`00b46280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46280.md) → [`00b47274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47274.md) _ZN8firebase4util10uribuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b472a0",
      "incomplete_value": true,
      "site": "00b472a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b462ac",
      "incomplete_value": true,
      "site": "00b462ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7f8:8"
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
      "definition_site": "00b47288",
      "incomplete_value": true,
      "site": "00b47288",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46294",
      "incomplete_value": true,
      "site": "00b46294",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b46294"
      ],
      [
        "FALL_THROUGH",
        "00b47288"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b47288",
      "incomplete_value": true,
      "site": "00b472a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46294",
      "incomplete_value": true,
      "site": "00b462ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b47284",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47290",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b472a0",
      "WRITE",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47284",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47290",
      "PARAM",
      [
        "storage",
        "002af388",
        null,
        "string"
      ]
    ],
    [
      "00b472a0",
      "WRITE",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b462ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
- 00b462ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b472a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b8:8"]]
+ 00b472a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4628c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47280 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b46290 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
- 00b46290 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b47284 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b8:8"]]
+ 00b47284 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-823b281c7d09c77ef644bcfa67c3edd2"></a>

### [`00b462c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b462c0.md) → [`00b472b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b472b4.md) _ZN8firebase4util10uribuilder10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b472e4",
      "incomplete_value": true,
      "site": "00b472e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b462f0",
      "incomplete_value": true,
      "site": "00b462f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7f8:8"
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
      "definition_site": "00b472c8",
      "incomplete_value": true,
      "site": "00b472c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b462d4",
      "incomplete_value": true,
      "site": "00b462d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b472d4",
      "incomplete_value": false,
      "site": "00b472dc",
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
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b462e0",
      "incomplete_value": false,
      "site": "00b462e8",
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
            "const:2b1:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b472c4",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b472d4",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b472e4",
      "WRITE",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b472c4",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b472d4",
      "PARAM",
      [
        "storage",
        "002af388",
        null,
        "string"
      ]
    ],
    [
      "00b472e4",
      "WRITE",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b462e8 ["INT_ADD", "register:40f0:8", ["const:b462e8:8", "const:4:8"]]
- 00b462e8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b472dc ["INT_ADD", "register:40f0:8", ["const:b472dc:8", "const:4:8"]]
+ 00b472dc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b462f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
- 00b462f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b472e4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b8:8"]]
+ 00b472e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b462cc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b472c0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-dbbe0993580708cfb5cca488d6f7846d"></a>

### [`00b46304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46304.md) → [`00b472f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b472f8.md) _ZN8firebase4util10uribuilder10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b47328",
      "incomplete_value": true,
      "site": "00b47328",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46334",
      "incomplete_value": true,
      "site": "00b46334",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:7f8:8"
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
      "definition_site": "00b4730c",
      "incomplete_value": true,
      "site": "00b4730c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46318",
      "incomplete_value": true,
      "site": "00b46318",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47314",
      "incomplete_value": false,
      "site": "00b47320",
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
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46320",
      "incomplete_value": false,
      "site": "00b4632c",
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
            "const:2b1:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47308",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47314",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b47328",
      "WRITE",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47308",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47314",
      "PARAM",
      [
        "storage",
        "002af388",
        null,
        "string"
      ]
    ],
    [
      "00b47328",
      "WRITE",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4632c ["INT_ADD", "register:40f0:8", ["const:b4632c:8", "const:4:8"]]
- 00b4632c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47320 ["INT_ADD", "register:40f0:8", ["const:b47320:8", "const:4:8"]]
+ 00b47320 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46334 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7f8:8"]]
- 00b46334 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47328 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7b8:8"]]
+ 00b47328 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46310 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47304 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-47caabc2b431d0b8b399f732b86836fe"></a>

### [`00b46354`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46354.md) → [`00b47348`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47348.md) _ZN8firebase4util10uribuilder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b473d0",
      "incomplete_value": true,
      "site": "00b473d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b463dc",
      "incomplete_value": true,
      "site": "00b463dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:800:8"
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
      "definition_site": "00b4737c",
      "incomplete_value": true,
      "site": "00b47388",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46388",
      "incomplete_value": true,
      "site": "00b46394",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7f8:8"
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
      "00b4735c",
      "READ",
      [
        "storage",
        "01125800",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4737c",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b473d0",
      "WRITE",
      [
        "storage",
        "01125800",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4735c",
      "READ",
      [
        "storage",
        "011267c0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4737c",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b473d0",
      "WRITE",
      [
        "storage",
        "011267c0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46394 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b46394 ["INT_ADD", "register:40f0:8", ["const:b46394:8", "const:4:8"]]
- 00b46394 ["CALLIND", null, ["register:0:8"]]
+ 00b47388 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b47388 ["INT_ADD", "register:40f0:8", ["const:b47388:8", "const:4:8"]]
+ 00b47388 ["CALLIND", null, ["register:0:8"]]
- 00b463dc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b463dc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:800:8"]]
- 00b463dc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b473d0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b473d0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7c0:8"]]
+ 00b473d0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b46364 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b47358 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-f2460eca881428c63fc4f9aaaf047aae"></a>

### [`00b463f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b463f0.md) → [`00b473e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b473e4.md) _ZN8firebase4util10uribuilder12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b47420",
      "incomplete_value": true,
      "site": "00b47420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4642c",
      "incomplete_value": true,
      "site": "00b4642c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:800:8"
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
      "definition_site": "00b47470",
      "incomplete_value": true,
      "site": "00b47470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4647c",
      "incomplete_value": true,
      "site": "00b4647c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7f8:8"
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
      "definition_site": "00b473fc",
      "incomplete_value": true,
      "site": "00b473fc",
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
      "definition_site": "00b46408",
      "incomplete_value": true,
      "site": "00b46408",
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
      "00b473f8",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47404",
      "READ",
      [
        "storage",
        "01125800",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47420",
      "WRITE",
      [
        "storage",
        "01125800",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b473f8",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47404",
      "READ",
      [
        "storage",
        "011267c0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47420",
      "WRITE",
      [
        "storage",
        "011267c0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4642c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4642c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4642c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:800:8"]]
- 00b4642c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b47420 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b47420 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b47420 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7c0:8"]]
+ 00b47420 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b46478 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b46478 ["INT_ADD", "register:40f0:8", ["const:b46478:8", "const:4:8"]]
- 00b46478 ["CALLIND", null, ["register:0:8"]]
+ 00b4746c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4746c ["INT_ADD", "register:40f0:8", ["const:b4746c:8", "const:4:8"]]
+ 00b4746c ["CALLIND", null, ["register:0:8"]]
- 00b4647c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7f8:8"]]
- 00b4647c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4647c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b47470 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7b8:8"]]
+ 00b47470 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b47470 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-43d94efe3f6bdf8aa3aecff973251054"></a>

### [`00b46490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46490.md) → [`00b47484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47484.md) _ZN8firebase4util10uribuilder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b474c4",
      "incomplete_value": true,
      "site": "00b474c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b464d0",
      "incomplete_value": true,
      "site": "00b464d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7f8:8"
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
      "definition_site": "00b474a0",
      "incomplete_value": true,
      "site": "00b474a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b464ac",
      "incomplete_value": true,
      "site": "00b464ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b474a8",
      "incomplete_value": false,
      "site": "00b474bc",
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
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b464b4",
      "incomplete_value": false,
      "site": "00b464c8",
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
            "const:2b1:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47498",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b474a8",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b474c4",
      "WRITE",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47498",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b474a8",
      "PARAM",
      [
        "storage",
        "002af388",
        null,
        "string"
      ]
    ],
    [
      "00b474c4",
      "WRITE",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b464c8 ["INT_ADD", "register:40f0:8", ["const:b464c8:8", "const:4:8"]]
- 00b464c8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b474bc ["INT_ADD", "register:40f0:8", ["const:b474bc:8", "const:4:8"]]
+ 00b474bc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b464d0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7f8:8"]]
- 00b464d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b474c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7b8:8"]]
+ 00b474c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4649c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b47490 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-938486defe8390364568259085464142"></a>

### [`00b46500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46500.md) → [`00b474f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b474f4.md) _ZN8firebase4util10uribuilder11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b47510",
      "incomplete_value": false,
      "site": "00b47514",
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
      "definition_site": "00b4651c",
      "incomplete_value": false,
      "site": "00b46520",
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
      "definition_site": "00b47520",
      "incomplete_value": true,
      "site": "00b4752c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4652c",
      "incomplete_value": true,
      "site": "00b46538",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b47510",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b47520",
      "DATA",
      [
        "storage",
        "01125808",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47510",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b47520",
      "DATA",
      [
        "storage",
        "011267c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46520 ["INT_ADD", "register:40f0:8", ["const:b46520:8", "const:4:8"]]
- 00b46520 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b47514 ["INT_ADD", "register:40f0:8", ["const:b47514:8", "const:4:8"]]
+ 00b47514 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4651c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4651c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4651c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4651c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b47510 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b47510 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47510 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47510 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b46524 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b47518 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-131e35b96bd40d45f77113afe4bb696f"></a>

### [`00b4653c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b4653c.md) → [`00b47530`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47530.md) _ZN8firebase4util10uribuilder13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b47570",
      "incomplete_value": true,
      "site": "00b47570",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4657c",
      "incomplete_value": true,
      "site": "00b4657c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:7f8:8"
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
      "definition_site": "00b4754c",
      "incomplete_value": true,
      "site": "00b4754c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46558",
      "incomplete_value": true,
      "site": "00b46558",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47554",
      "incomplete_value": false,
      "site": "00b47568",
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
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46560",
      "incomplete_value": false,
      "site": "00b46574",
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
            "const:2b1:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47544",
      "READ",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47554",
      "PARAM",
      [
        "storage",
        "002af2b1",
        null,
        "string"
      ]
    ],
    [
      "00b47570",
      "WRITE",
      [
        "storage",
        "011257f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47544",
      "READ",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47554",
      "PARAM",
      [
        "storage",
        "002af388",
        null,
        "string"
      ]
    ],
    [
      "00b47570",
      "WRITE",
      [
        "storage",
        "011267b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46574 ["INT_ADD", "register:40f0:8", ["const:b46574:8", "const:4:8"]]
- 00b46574 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47568 ["INT_ADD", "register:40f0:8", ["const:b47568:8", "const:4:8"]]
+ 00b47568 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4657c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7f8:8"]]
- 00b4657c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47570 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7b8:8"]]
+ 00b47570 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46548 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4753c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-003526fbced42b6777d0c4c24d68b664"></a>

### [`00b465ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b465ac.md) → [`00b475a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b475a0.md) _ZN8firebase4util10uribuilder10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b475bc",
      "incomplete_value": false,
      "site": "00b475c0",
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
      "definition_site": "00b465c8",
      "incomplete_value": false,
      "site": "00b465cc",
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
      "definition_site": "00b475cc",
      "incomplete_value": true,
      "site": "00b475d8",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b465d8",
      "incomplete_value": true,
      "site": "00b465e4",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b475bc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b475cc",
      "DATA",
      [
        "storage",
        "01125820",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b475bc",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b475cc",
      "DATA",
      [
        "storage",
        "011267e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b465cc ["INT_ADD", "register:40f0:8", ["const:b465cc:8", "const:4:8"]]
- 00b465cc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b475c0 ["INT_ADD", "register:40f0:8", ["const:b475c0:8", "const:4:8"]]
+ 00b475c0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b465c8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b465c8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b465c8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b465c8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b475bc ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b475bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b475bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b475bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b465d0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b475c4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-5d5414da3638947e8c575066edf2c098"></a>

### [`00b465e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b465e8.md) → [`00b475dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b475dc.md) _ZN8firebase4util3url19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cla

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
      "definition_site": "00b47608",
      "incomplete_value": true,
      "site": "00b47608",
      "value": [
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
      "definition_site": "00b46614",
      "incomplete_value": true,
      "site": "00b46614",
      "value": [
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
      "definition_site": "00b475f0",
      "incomplete_value": true,
      "site": "00b475f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b465fc",
      "incomplete_value": true,
      "site": "00b465fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b475fc",
      "incomplete_value": false,
      "site": "00b47600",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46608",
      "incomplete_value": false,
      "site": "00b4660c",
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
            "const:cd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b475ec",
      "READ",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ],
    [
      "00b475fc",
      "PARAM",
      [
        "storage",
        "002bd0cd",
        null,
        "string"
      ]
    ],
    [
      "00b47608",
      "WRITE",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b475ec",
      "READ",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b475fc",
      "PARAM",
      [
        "storage",
        "002bd1ab",
        null,
        "string"
      ]
    ],
    [
      "00b47608",
      "WRITE",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4660c ["INT_ADD", "register:40f0:8", ["const:b4660c:8", "const:4:8"]]
- 00b4660c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47600 ["INT_ADD", "register:40f0:8", ["const:b47600:8", "const:4:8"]]
+ 00b47600 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46614 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00b46614 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47608 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00b47608 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b465f4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b475e8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-4dc633eaee70df8f4cc01702e51c9ff9"></a>

### [`00b46628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46628.md) → [`00b4761c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b4761c.md) _ZN8firebase4util3url19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b47648",
      "incomplete_value": true,
      "site": "00b47648",
      "value": [
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
      "definition_site": "00b46654",
      "incomplete_value": true,
      "site": "00b46654",
      "value": [
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
      "definition_site": "00b47630",
      "incomplete_value": true,
      "site": "00b47630",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4663c",
      "incomplete_value": true,
      "site": "00b4663c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47638",
      "incomplete_value": false,
      "site": "00b47640",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46644",
      "incomplete_value": false,
      "site": "00b4664c",
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
            "const:cd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4762c",
      "READ",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47638",
      "PARAM",
      [
        "storage",
        "002bd0cd",
        null,
        "string"
      ]
    ],
    [
      "00b47648",
      "WRITE",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4762c",
      "READ",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47638",
      "PARAM",
      [
        "storage",
        "002bd1ab",
        null,
        "string"
      ]
    ],
    [
      "00b47648",
      "WRITE",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4664c ["INT_ADD", "register:40f0:8", ["const:b4664c:8", "const:4:8"]]
- 00b4664c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47640 ["INT_ADD", "register:40f0:8", ["const:b47640:8", "const:4:8"]]
+ 00b47640 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46654 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00b46654 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47648 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00b47648 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46634 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47628 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b023923a874f1848f649d49027f5f128"></a>

### [`00b46668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46668.md) → [`00b4765c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b4765c.md) _ZN8firebase4util3url10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4768c",
      "incomplete_value": true,
      "site": "00b4768c",
      "value": [
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
      "definition_site": "00b46698",
      "incomplete_value": true,
      "site": "00b46698",
      "value": [
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
      "definition_site": "00b47670",
      "incomplete_value": true,
      "site": "00b47670",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4667c",
      "incomplete_value": true,
      "site": "00b4667c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4767c",
      "incomplete_value": false,
      "site": "00b47684",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46688",
      "incomplete_value": false,
      "site": "00b46690",
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
            "const:cd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4766c",
      "READ",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4767c",
      "PARAM",
      [
        "storage",
        "002bd0cd",
        null,
        "string"
      ]
    ],
    [
      "00b4768c",
      "WRITE",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4766c",
      "READ",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4767c",
      "PARAM",
      [
        "storage",
        "002bd1ab",
        null,
        "string"
      ]
    ],
    [
      "00b4768c",
      "WRITE",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46690 ["INT_ADD", "register:40f0:8", ["const:b46690:8", "const:4:8"]]
- 00b46690 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47684 ["INT_ADD", "register:40f0:8", ["const:b47684:8", "const:4:8"]]
+ 00b47684 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46698 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00b46698 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4768c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00b4768c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46674 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47668 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-37ee806525c77baf55a85bac365cffde"></a>

### [`00b466ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b466ac.md) → [`00b476a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b476a0.md) _ZN8firebase4util3url10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b476d0",
      "incomplete_value": true,
      "site": "00b476d0",
      "value": [
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
      "definition_site": "00b466dc",
      "incomplete_value": true,
      "site": "00b466dc",
      "value": [
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
      "definition_site": "00b476b4",
      "incomplete_value": true,
      "site": "00b476b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b466c0",
      "incomplete_value": true,
      "site": "00b466c0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b476bc",
      "incomplete_value": false,
      "site": "00b476c8",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b466c8",
      "incomplete_value": false,
      "site": "00b466d4",
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
            "const:cd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b476b0",
      "READ",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ],
    [
      "00b476bc",
      "PARAM",
      [
        "storage",
        "002bd0cd",
        null,
        "string"
      ]
    ],
    [
      "00b476d0",
      "WRITE",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b476b0",
      "READ",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b476bc",
      "PARAM",
      [
        "storage",
        "002bd1ab",
        null,
        "string"
      ]
    ],
    [
      "00b476d0",
      "WRITE",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b466d4 ["INT_ADD", "register:40f0:8", ["const:b466d4:8", "const:4:8"]]
- 00b466d4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b476c8 ["INT_ADD", "register:40f0:8", ["const:b476c8:8", "const:4:8"]]
+ 00b476c8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b466dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:828:8"]]
- 00b466dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b476d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:7e8:8"]]
+ 00b476d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b466b8 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b476ac ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-351a5c22792223ed474cbb1fce2aef67"></a>

### [`00b466fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b466fc.md) → [`00b476f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b476f0.md) _ZN8firebase4util3url15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b47778",
      "incomplete_value": true,
      "site": "00b47778",
      "value": [
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
      "definition_site": "00b46784",
      "incomplete_value": true,
      "site": "00b46784",
      "value": [
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
      "definition_site": "00b47724",
      "incomplete_value": true,
      "site": "00b47730",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7e8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46730",
      "incomplete_value": true,
      "site": "00b4673c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b47704",
      "READ",
      [
        "storage",
        "01125830",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47724",
      "READ",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47778",
      "WRITE",
      [
        "storage",
        "01125830",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b47704",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47724",
      "READ",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47778",
      "WRITE",
      [
        "storage",
        "011267f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4673c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4673c ["INT_ADD", "register:40f0:8", ["const:b4673c:8", "const:4:8"]]
- 00b4673c ["CALLIND", null, ["register:0:8"]]
+ 00b47730 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b47730 ["INT_ADD", "register:40f0:8", ["const:b47730:8", "const:4:8"]]
+ 00b47730 ["CALLIND", null, ["register:0:8"]]
- 00b46784 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b46784 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:830:8"]]
- 00b46784 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b47778 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b47778 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:7f0:8"]]
+ 00b47778 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4670c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b47700 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-ef8940a8172fdcc9952d1a65ca8610e0"></a>

### [`00b46798`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46798.md) → [`00b4778c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b4778c.md) _ZN8firebase4util3url12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b477c8",
      "incomplete_value": true,
      "site": "00b477c8",
      "value": [
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
      "definition_site": "00b467d4",
      "incomplete_value": true,
      "site": "00b467d4",
      "value": [
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
      "definition_site": "00b47818",
      "incomplete_value": true,
      "site": "00b47818",
      "value": [
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
      "definition_site": "00b46824",
      "incomplete_value": true,
      "site": "00b46824",
      "value": [
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
      "definition_site": "00b477a4",
      "incomplete_value": true,
      "site": "00b477a4",
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
      "definition_site": "00b467b0",
      "incomplete_value": true,
      "site": "00b467b0",
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
      "00b477a0",
      "READ",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ],
    [
      "00b477ac",
      "READ",
      [
        "storage",
        "01125830",
        null,
        "undefined1"
      ]
    ],
    [
      "00b477c8",
      "WRITE",
      [
        "storage",
        "01125830",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b477a0",
      "READ",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b477ac",
      "READ",
      [
        "storage",
        "011267f0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b477c8",
      "WRITE",
      [
        "storage",
        "011267f0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b467d4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b467d4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b467d4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:830:8"]]
- 00b467d4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b477c8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b477c8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b477c8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:7f0:8"]]
+ 00b477c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b46820 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b46820 ["INT_ADD", "register:40f0:8", ["const:b46820:8", "const:4:8"]]
- 00b46820 ["CALLIND", null, ["register:0:8"]]
+ 00b47814 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b47814 ["INT_ADD", "register:40f0:8", ["const:b47814:8", "const:4:8"]]
+ 00b47814 ["CALLIND", null, ["register:0:8"]]
- 00b46824 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:828:8"]]
- 00b46824 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b46824 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b47818 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7e8:8"]]
+ 00b47818 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b47818 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-3b912fcfccd5350e6533c70ca7d6505b"></a>

### [`00b46838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46838.md) → [`00b4782c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b4782c.md) _ZN8firebase4util3url14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4786c",
      "incomplete_value": true,
      "site": "00b4786c",
      "value": [
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
      "definition_site": "00b46878",
      "incomplete_value": true,
      "site": "00b46878",
      "value": [
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
      "definition_site": "00b47848",
      "incomplete_value": true,
      "site": "00b47848",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46854",
      "incomplete_value": true,
      "site": "00b46854",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47850",
      "incomplete_value": false,
      "site": "00b47864",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4685c",
      "incomplete_value": false,
      "site": "00b46870",
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
            "const:cd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47840",
      "READ",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47850",
      "PARAM",
      [
        "storage",
        "002bd0cd",
        null,
        "string"
      ]
    ],
    [
      "00b4786c",
      "WRITE",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47840",
      "READ",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47850",
      "PARAM",
      [
        "storage",
        "002bd1ab",
        null,
        "string"
      ]
    ],
    [
      "00b4786c",
      "WRITE",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46870 ["INT_ADD", "register:40f0:8", ["const:b46870:8", "const:4:8"]]
- 00b46870 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47864 ["INT_ADD", "register:40f0:8", ["const:b47864:8", "const:4:8"]]
+ 00b47864 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46878 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:828:8"]]
- 00b46878 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4786c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7e8:8"]]
+ 00b4786c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46844 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b47838 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-161ee92cf5bc5fb4b0d193c364a088ad"></a>

### [`00b468a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b468a8.md) → [`00b4789c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b4789c.md) _ZN8firebase4util3url11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b478b8",
      "incomplete_value": false,
      "site": "00b478bc",
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
      "definition_site": "00b468c4",
      "incomplete_value": false,
      "site": "00b468c8",
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
      "definition_site": "00b478c8",
      "incomplete_value": true,
      "site": "00b478d4",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b468d4",
      "incomplete_value": true,
      "site": "00b468e0",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b478b8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b478c8",
      "DATA",
      [
        "storage",
        "01125838",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b478b8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b478c8",
      "DATA",
      [
        "storage",
        "011267f8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b468c8 ["INT_ADD", "register:40f0:8", ["const:b468c8:8", "const:4:8"]]
- 00b468c8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b478bc ["INT_ADD", "register:40f0:8", ["const:b478bc:8", "const:4:8"]]
+ 00b478bc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b468c4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b468c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b468c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b468c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b478b8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b478b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b478b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b478b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b468cc ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b478c0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-85a2e15154dcd4c051b213e8a1a444e9"></a>

### [`00b468e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b468e4.md) → [`00b478d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b478d8.md) _ZN8firebase4util3url13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b47918",
      "incomplete_value": true,
      "site": "00b47918",
      "value": [
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
      "definition_site": "00b46924",
      "incomplete_value": true,
      "site": "00b46924",
      "value": [
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
      "definition_site": "00b478f4",
      "incomplete_value": true,
      "site": "00b478f4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46900",
      "incomplete_value": true,
      "site": "00b46900",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b478fc",
      "incomplete_value": false,
      "site": "00b47910",
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
            "const:1ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46908",
      "incomplete_value": false,
      "site": "00b4691c",
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
            "const:cd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b478ec",
      "READ",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ],
    [
      "00b478fc",
      "PARAM",
      [
        "storage",
        "002bd0cd",
        null,
        "string"
      ]
    ],
    [
      "00b47918",
      "WRITE",
      [
        "storage",
        "01125828",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b478ec",
      "READ",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b478fc",
      "PARAM",
      [
        "storage",
        "002bd1ab",
        null,
        "string"
      ]
    ],
    [
      "00b47918",
      "WRITE",
      [
        "storage",
        "011267e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4691c ["INT_ADD", "register:40f0:8", ["const:b4691c:8", "const:4:8"]]
- 00b4691c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47910 ["INT_ADD", "register:40f0:8", ["const:b47910:8", "const:4:8"]]
+ 00b47910 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46924 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:828:8"]]
- 00b46924 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47918 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:7e8:8"]]
+ 00b47918 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b468f0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b478e4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-db25ceca94769a6df1681da9ae611bc7"></a>

### [`00b46954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46954.md) → [`00b47948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47948.md) _ZN8firebase4util3url10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b47964",
      "incomplete_value": false,
      "site": "00b47968",
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
      "definition_site": "00b46970",
      "incomplete_value": false,
      "site": "00b46974",
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
      "definition_site": "00b47974",
      "incomplete_value": true,
      "site": "00b47980",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b46980",
      "incomplete_value": true,
      "site": "00b4698c",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b47964",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b47974",
      "DATA",
      [
        "storage",
        "01125848",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b47964",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b47974",
      "DATA",
      [
        "storage",
        "01126808",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46974 ["INT_ADD", "register:40f0:8", ["const:b46974:8", "const:4:8"]]
- 00b46974 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b47968 ["INT_ADD", "register:40f0:8", ["const:b47968:8", "const:4:8"]]
+ 00b47968 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b46970 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b46970 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b46970 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b46970 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b47964 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b47964 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47964 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47964 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b46978 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4796c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-ea891fab6195ede06eff45a3105a97fd"></a>

### [`00b46990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46990.md) → [`00b47984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47984.md) _ZN8firebase4util18file_output_stream19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

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
      "definition_site": "00b479b0",
      "incomplete_value": true,
      "site": "00b479b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b469bc",
      "incomplete_value": true,
      "site": "00b469bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:850:8"
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
      "definition_site": "00b47998",
      "incomplete_value": true,
      "site": "00b47998",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b469a4",
      "incomplete_value": true,
      "site": "00b469a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b479a4",
      "incomplete_value": false,
      "site": "00b479a8",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b469b0",
      "incomplete_value": false,
      "site": "00b469b4",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47994",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ],
    [
      "00b479a4",
      "PARAM",
      [
        "storage",
        "002b04d8",
        null,
        "string"
      ]
    ],
    [
      "00b479b0",
      "WRITE",
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
      "00b47994",
      "READ",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ],
    [
      "00b479a4",
      "PARAM",
      [
        "storage",
        "002b05af",
        null,
        "string"
      ]
    ],
    [
      "00b479b0",
      "WRITE",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b469b4 ["INT_ADD", "register:40f0:8", ["const:b469b4:8", "const:4:8"]]
- 00b469b4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b479a8 ["INT_ADD", "register:40f0:8", ["const:b479a8:8", "const:4:8"]]
+ 00b479a8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b469bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:850:8"]]
- 00b469bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b479b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:810:8"]]
+ 00b479b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4699c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47990 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-0d4d842d6e88c562790073bd7d688f9f"></a>

### [`00b469d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b469d0.md) → [`00b479c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b479c4.md) _ZN8firebase4util18file_output_stream19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

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
      "definition_site": "00b479f0",
      "incomplete_value": true,
      "site": "00b479f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b469fc",
      "incomplete_value": true,
      "site": "00b469fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:850:8"
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
      "definition_site": "00b479d8",
      "incomplete_value": true,
      "site": "00b479d8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b469e4",
      "incomplete_value": true,
      "site": "00b469e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b479e0",
      "incomplete_value": false,
      "site": "00b479e8",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b469ec",
      "incomplete_value": false,
      "site": "00b469f4",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b479d4",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ],
    [
      "00b479e0",
      "PARAM",
      [
        "storage",
        "002b04d8",
        null,
        "string"
      ]
    ],
    [
      "00b479f0",
      "WRITE",
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
      "00b479d4",
      "READ",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ],
    [
      "00b479e0",
      "PARAM",
      [
        "storage",
        "002b05af",
        null,
        "string"
      ]
    ],
    [
      "00b479f0",
      "WRITE",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b469f4 ["INT_ADD", "register:40f0:8", ["const:b469f4:8", "const:4:8"]]
- 00b469f4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b479e8 ["INT_ADD", "register:40f0:8", ["const:b479e8:8", "const:4:8"]]
+ 00b479e8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b469fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:850:8"]]
- 00b469fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b479f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:810:8"]]
+ 00b479f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b469dc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b479d0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-ea8f0928dabd56157f72035e8386ea08"></a>

### [`00b46a10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46a10.md) → [`00b47a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47a04.md) _ZN8firebase4util18file_output_stream10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b47a34",
      "incomplete_value": true,
      "site": "00b47a34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46a40",
      "incomplete_value": true,
      "site": "00b46a40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:850:8"
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
      "definition_site": "00b47a18",
      "incomplete_value": true,
      "site": "00b47a18",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46a24",
      "incomplete_value": true,
      "site": "00b46a24",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47a24",
      "incomplete_value": false,
      "site": "00b47a2c",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46a30",
      "incomplete_value": false,
      "site": "00b46a38",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47a14",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47a24",
      "PARAM",
      [
        "storage",
        "002b04d8",
        null,
        "string"
      ]
    ],
    [
      "00b47a34",
      "WRITE",
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
      "00b47a14",
      "READ",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47a24",
      "PARAM",
      [
        "storage",
        "002b05af",
        null,
        "string"
      ]
    ],
    [
      "00b47a34",
      "WRITE",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46a38 ["INT_ADD", "register:40f0:8", ["const:b46a38:8", "const:4:8"]]
- 00b46a38 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47a2c ["INT_ADD", "register:40f0:8", ["const:b47a2c:8", "const:4:8"]]
+ 00b47a2c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46a40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:850:8"]]
- 00b46a40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47a34 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:810:8"]]
+ 00b47a34 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46a1c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47a10 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-eabe3ef93bcf33072aced2d83e04a4da"></a>

### [`00b46a54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46a54.md) → [`00b47a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47a48.md) _ZN8firebase4util18file_output_stream10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b47a78",
      "incomplete_value": true,
      "site": "00b47a78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46a84",
      "incomplete_value": true,
      "site": "00b46a84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:850:8"
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
      "definition_site": "00b47a5c",
      "incomplete_value": true,
      "site": "00b47a5c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46a68",
      "incomplete_value": true,
      "site": "00b46a68",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b46a68"
      ],
      [
        "FALL_THROUGH",
        "00b47a5c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b47a5c",
      "incomplete_value": true,
      "site": "00b47a78",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46a68",
      "incomplete_value": true,
      "site": "00b46a84",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b47a58",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47a64",
      "PARAM",
      [
        "storage",
        "002b04d8",
        null,
        "string"
      ]
    ],
    [
      "00b47a78",
      "WRITE",
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
      "00b47a58",
      "READ",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47a64",
      "PARAM",
      [
        "storage",
        "002b05af",
        null,
        "string"
      ]
    ],
    [
      "00b47a78",
      "WRITE",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46a84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:850:8"]]
- 00b46a84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47a78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:810:8"]]
+ 00b47a78 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46a60 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47a54 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b46a64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:850:8"]]
- 00b46a64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b47a58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:810:8"]]
+ 00b47a58 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8b7112052458d483246ac119113d4910"></a>

### [`00b46aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46aa4.md) → [`00b47a98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47a98.md) _ZN8firebase4util18file_output_stream15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b47b20",
      "incomplete_value": true,
      "site": "00b47b20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:818:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46b2c",
      "incomplete_value": true,
      "site": "00b46b2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:858:8"
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
      "definition_site": "00b47acc",
      "incomplete_value": true,
      "site": "00b47ad8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:810:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46ad8",
      "incomplete_value": true,
      "site": "00b46ae4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:850:8"
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
      "00b47aac",
      "READ",
      [
        "storage",
        "01125858",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47acc",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47b20",
      "WRITE",
      [
        "storage",
        "01125858",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b47aac",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47acc",
      "READ",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47b20",
      "WRITE",
      [
        "storage",
        "01126818",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46ae4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b46ae4 ["INT_ADD", "register:40f0:8", ["const:b46ae4:8", "const:4:8"]]
- 00b46ae4 ["CALLIND", null, ["register:0:8"]]
+ 00b47ad8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b47ad8 ["INT_ADD", "register:40f0:8", ["const:b47ad8:8", "const:4:8"]]
+ 00b47ad8 ["CALLIND", null, ["register:0:8"]]
- 00b46b2c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b46b2c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:858:8"]]
- 00b46b2c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b47b20 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b47b20 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:818:8"]]
+ 00b47b20 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b46ab4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b47aa8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-7df8061bb27ed82c844eebfd4cea9fc5"></a>

### [`00b46b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46b40.md) → [`00b47b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47b34.md) _ZN8firebase4util18file_output_stream12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b47b70",
      "incomplete_value": true,
      "site": "00b47b70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:818:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46b7c",
      "incomplete_value": true,
      "site": "00b46b7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:858:8"
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
      "definition_site": "00b47bc0",
      "incomplete_value": true,
      "site": "00b47bc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46bcc",
      "incomplete_value": true,
      "site": "00b46bcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:850:8"
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
      "definition_site": "00b47b4c",
      "incomplete_value": true,
      "site": "00b47b4c",
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
      "definition_site": "00b46b58",
      "incomplete_value": true,
      "site": "00b46b58",
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
      "00b47b48",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47b54",
      "READ",
      [
        "storage",
        "01125858",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47b70",
      "WRITE",
      [
        "storage",
        "01125858",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b47b48",
      "READ",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47b54",
      "READ",
      [
        "storage",
        "01126818",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47b70",
      "WRITE",
      [
        "storage",
        "01126818",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46b7c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b46b7c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b46b7c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:858:8"]]
- 00b46b7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b47b70 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b47b70 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b47b70 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:818:8"]]
+ 00b47b70 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b46bc8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b46bc8 ["INT_ADD", "register:40f0:8", ["const:b46bc8:8", "const:4:8"]]
- 00b46bc8 ["CALLIND", null, ["register:0:8"]]
+ 00b47bbc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b47bbc ["INT_ADD", "register:40f0:8", ["const:b47bbc:8", "const:4:8"]]
+ 00b47bbc ["CALLIND", null, ["register:0:8"]]
- 00b46bcc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:850:8"]]
- 00b46bcc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b46bcc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b47bc0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:810:8"]]
+ 00b47bc0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b47bc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-fcecb85a0b2dde4325e70bff1a4944ef"></a>

### [`00b46be0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46be0.md) → [`00b47bd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47bd4.md) _ZN8firebase4util18file_output_stream14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b47c14",
      "incomplete_value": true,
      "site": "00b47c14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46c20",
      "incomplete_value": true,
      "site": "00b46c20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:850:8"
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
      "definition_site": "00b47bf0",
      "incomplete_value": true,
      "site": "00b47bf0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46bfc",
      "incomplete_value": true,
      "site": "00b46bfc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47bf8",
      "incomplete_value": false,
      "site": "00b47c0c",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46c04",
      "incomplete_value": false,
      "site": "00b46c18",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47be8",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47bf8",
      "PARAM",
      [
        "storage",
        "002b04d8",
        null,
        "string"
      ]
    ],
    [
      "00b47c14",
      "WRITE",
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
      "00b47be8",
      "READ",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47bf8",
      "PARAM",
      [
        "storage",
        "002b05af",
        null,
        "string"
      ]
    ],
    [
      "00b47c14",
      "WRITE",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46c18 ["INT_ADD", "register:40f0:8", ["const:b46c18:8", "const:4:8"]]
- 00b46c18 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47c0c ["INT_ADD", "register:40f0:8", ["const:b47c0c:8", "const:4:8"]]
+ 00b47c0c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46c20 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:850:8"]]
- 00b46c20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47c14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:810:8"]]
+ 00b47c14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46bec ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b47be0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-379adbff437475532d6d4e34bf27320c"></a>

### [`00b46c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46c50.md) → [`00b47c44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47c44.md) _ZN8firebase4util18file_output_stream11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b47c60",
      "incomplete_value": false,
      "site": "00b47c64",
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
      "definition_site": "00b46c6c",
      "incomplete_value": false,
      "site": "00b46c70",
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
      "definition_site": "00b47c70",
      "incomplete_value": true,
      "site": "00b47c7c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b46c7c",
      "incomplete_value": true,
      "site": "00b46c88",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b47c60",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b47c70",
      "DATA",
      [
        "storage",
        "01125860",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47c60",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b47c70",
      "DATA",
      [
        "storage",
        "01126820",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46c70 ["INT_ADD", "register:40f0:8", ["const:b46c70:8", "const:4:8"]]
- 00b46c70 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b47c64 ["INT_ADD", "register:40f0:8", ["const:b47c64:8", "const:4:8"]]
+ 00b47c64 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b46c6c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b46c6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b46c6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b46c6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b47c60 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b47c60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47c60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47c60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b46c74 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b47c68 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-947674fb1f0541fdc039ba4d7967b534"></a>

### [`00b46c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46c8c.md) → [`00b47c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47c80.md) _ZN8firebase4util18file_output_stream13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b47cc0",
      "incomplete_value": true,
      "site": "00b47cc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46ccc",
      "incomplete_value": true,
      "site": "00b46ccc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:850:8"
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
      "definition_site": "00b47c9c",
      "incomplete_value": true,
      "site": "00b47c9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46ca8",
      "incomplete_value": true,
      "site": "00b46ca8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47ca4",
      "incomplete_value": false,
      "site": "00b47cb8",
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
            "const:5af:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46cb0",
      "incomplete_value": false,
      "site": "00b46cc4",
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
            "const:4d8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47c94",
      "READ",
      [
        "storage",
        "01125850",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47ca4",
      "PARAM",
      [
        "storage",
        "002b04d8",
        null,
        "string"
      ]
    ],
    [
      "00b47cc0",
      "WRITE",
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
      "00b47c94",
      "READ",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47ca4",
      "PARAM",
      [
        "storage",
        "002b05af",
        null,
        "string"
      ]
    ],
    [
      "00b47cc0",
      "WRITE",
      [
        "storage",
        "01126810",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46cc4 ["INT_ADD", "register:40f0:8", ["const:b46cc4:8", "const:4:8"]]
- 00b46cc4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47cb8 ["INT_ADD", "register:40f0:8", ["const:b47cb8:8", "const:4:8"]]
+ 00b47cb8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46ccc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:850:8"]]
- 00b46ccc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47cc0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:810:8"]]
+ 00b47cc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46c98 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b47c8c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-789dabb087f2198ef5b012f03a9d422a"></a>

### [`00b46cfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46cfc.md) → [`00b47cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47cf0.md) _ZN8firebase4util18file_output_stream10GetFieldIdENS1_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b47d1c",
      "incomplete_value": true,
      "site": "00b47d28",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b46d28",
      "incomplete_value": true,
      "site": "00b46d34",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b47d0c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b47d1c",
      "DATA",
      [
        "storage",
        "01125878",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b47d0c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b47d1c",
      "DATA",
      [
        "storage",
        "01126838",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46d18 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b46d18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b46d18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b46d18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b47d0c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b47d0c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47d0c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b47d0c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b46d1c ["INT_ADD", "register:40f0:8", ["const:b46d1c:8", "const:4:8"]]
- 00b46d1c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b47d10 ["INT_ADD", "register:40f0:8", ["const:b47d10:8", "const:4:8"]]
+ 00b47d10 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b46d20 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b47d14 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-8014f82813a77951e629a9faebb87c68"></a>

### [`00b46d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46d38.md) → [`00b47d2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47d2c.md) _ZN8firebase4util16dex_class_loader19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9

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
      "definition_site": "00b47d58",
      "incomplete_value": true,
      "site": "00b47d58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46d64",
      "incomplete_value": true,
      "site": "00b46d64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "definition_site": "00b47d40",
      "incomplete_value": true,
      "site": "00b47d40",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46d4c",
      "incomplete_value": true,
      "site": "00b46d4c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47d4c",
      "incomplete_value": false,
      "site": "00b47d50",
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
            "const:ad1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46d58",
      "incomplete_value": false,
      "site": "00b46d5c",
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
            "const:a02:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47d3c",
      "READ",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47d4c",
      "PARAM",
      [
        "storage",
        "002b8a02",
        null,
        "string"
      ]
    ],
    [
      "00b47d58",
      "WRITE",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47d3c",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47d4c",
      "PARAM",
      [
        "storage",
        "002b8ad1",
        null,
        "string"
      ]
    ],
    [
      "00b47d58",
      "WRITE",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46d5c ["INT_ADD", "register:40f0:8", ["const:b46d5c:8", "const:4:8"]]
- 00b46d5c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47d50 ["INT_ADD", "register:40f0:8", ["const:b47d50:8", "const:4:8"]]
+ 00b47d50 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46d64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:880:8"]]
- 00b46d64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47d58 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:840:8"]]
+ 00b47d58 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46d44 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47d38 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-0e4b7d4f2cfc9972f3f0210127882ce9"></a>

### [`00b46d78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46d78.md) → [`00b47d6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47d6c.md) _ZN8firebase4util16dex_class_loader19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9

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
      "definition_site": "00b47d98",
      "incomplete_value": true,
      "site": "00b47d98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46da4",
      "incomplete_value": true,
      "site": "00b46da4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "definition_site": "00b47d80",
      "incomplete_value": true,
      "site": "00b47d80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46d8c",
      "incomplete_value": true,
      "site": "00b46d8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47d88",
      "incomplete_value": false,
      "site": "00b47d90",
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
            "const:ad1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46d94",
      "incomplete_value": false,
      "site": "00b46d9c",
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
            "const:a02:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47d7c",
      "READ",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47d88",
      "PARAM",
      [
        "storage",
        "002b8a02",
        null,
        "string"
      ]
    ],
    [
      "00b47d98",
      "WRITE",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47d7c",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47d88",
      "PARAM",
      [
        "storage",
        "002b8ad1",
        null,
        "string"
      ]
    ],
    [
      "00b47d98",
      "WRITE",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46d9c ["INT_ADD", "register:40f0:8", ["const:b46d9c:8", "const:4:8"]]
- 00b46d9c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47d90 ["INT_ADD", "register:40f0:8", ["const:b47d90:8", "const:4:8"]]
+ 00b47d90 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46da4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:880:8"]]
- 00b46da4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47d98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:840:8"]]
+ 00b47d98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46d84 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47d78 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-225f7140ff3cc06d6bac34a1ba05fd5f"></a>

### [`00b46db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46db8.md) → [`00b47dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47dac.md) _ZN8firebase4util16dex_class_loader10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b47ddc",
      "incomplete_value": true,
      "site": "00b47ddc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46de8",
      "incomplete_value": true,
      "site": "00b46de8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "definition_site": "00b47dc0",
      "incomplete_value": true,
      "site": "00b47dc0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46dcc",
      "incomplete_value": true,
      "site": "00b46dcc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47dcc",
      "incomplete_value": false,
      "site": "00b47dd4",
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
            "const:ad1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46dd8",
      "incomplete_value": false,
      "site": "00b46de0",
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
            "const:a02:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47dbc",
      "READ",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47dcc",
      "PARAM",
      [
        "storage",
        "002b8a02",
        null,
        "string"
      ]
    ],
    [
      "00b47ddc",
      "WRITE",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47dbc",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47dcc",
      "PARAM",
      [
        "storage",
        "002b8ad1",
        null,
        "string"
      ]
    ],
    [
      "00b47ddc",
      "WRITE",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46de0 ["INT_ADD", "register:40f0:8", ["const:b46de0:8", "const:4:8"]]
- 00b46de0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47dd4 ["INT_ADD", "register:40f0:8", ["const:b47dd4:8", "const:4:8"]]
+ 00b47dd4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46de8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:880:8"]]
- 00b46de8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47ddc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:840:8"]]
+ 00b47ddc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46dc4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47db8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-f736277fac03234d56e795ff0c0e5a85"></a>

### [`00b46dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46dfc.md) → [`00b47df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47df0.md) _ZN8firebase4util16dex_class_loader10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b47e20",
      "incomplete_value": true,
      "site": "00b47e20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46e2c",
      "incomplete_value": true,
      "site": "00b46e2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "definition_site": "00b47e04",
      "incomplete_value": true,
      "site": "00b47e04",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46e10",
      "incomplete_value": true,
      "site": "00b46e10",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b46e10"
      ],
      [
        "FALL_THROUGH",
        "00b47e04"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b47e04",
      "incomplete_value": true,
      "site": "00b47e20",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46e10",
      "incomplete_value": true,
      "site": "00b46e2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b47e00",
      "READ",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47e0c",
      "PARAM",
      [
        "storage",
        "002b8a02",
        null,
        "string"
      ]
    ],
    [
      "00b47e20",
      "WRITE",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47e00",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47e0c",
      "PARAM",
      [
        "storage",
        "002b8ad1",
        null,
        "string"
      ]
    ],
    [
      "00b47e20",
      "WRITE",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46e2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:880:8"]]
- 00b46e2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47e20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:840:8"]]
+ 00b47e20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46e08 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b47dfc ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b46e0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:880:8"]]
- 00b46e0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b47e00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:840:8"]]
+ 00b47e00 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-70a9beeaa1846f28eece2e05124b27d0"></a>

### [`00b46e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46e4c.md) → [`00b47e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47e40.md) _ZN8firebase4util16dex_class_loader15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b47ec8",
      "incomplete_value": true,
      "site": "00b47ec8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46ed4",
      "incomplete_value": true,
      "site": "00b46ed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:888:8"
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
      "definition_site": "00b47e74",
      "incomplete_value": true,
      "site": "00b47e80",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b46e80",
      "incomplete_value": true,
      "site": "00b46e8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b47e54",
      "READ",
      [
        "storage",
        "01125888",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47e74",
      "READ",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47ec8",
      "WRITE",
      [
        "storage",
        "01125888",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b47e54",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47e74",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47ec8",
      "WRITE",
      [
        "storage",
        "01126848",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46e8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b46e8c ["INT_ADD", "register:40f0:8", ["const:b46e8c:8", "const:4:8"]]
- 00b46e8c ["CALLIND", null, ["register:0:8"]]
+ 00b47e80 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b47e80 ["INT_ADD", "register:40f0:8", ["const:b47e80:8", "const:4:8"]]
+ 00b47e80 ["CALLIND", null, ["register:0:8"]]
- 00b46ed4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b46ed4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:888:8"]]
- 00b46ed4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b47ec8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b47ec8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:848:8"]]
+ 00b47ec8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b46e5c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b47e50 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-0833763cdf280228bb409407f6237d95"></a>

### [`00b46ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46ee8.md) → [`00b47edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47edc.md) _ZN8firebase4util16dex_class_loader12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b47f18",
      "incomplete_value": true,
      "site": "00b47f18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46f24",
      "incomplete_value": true,
      "site": "00b46f24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:888:8"
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
      "definition_site": "00b47f68",
      "incomplete_value": true,
      "site": "00b47f68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46f74",
      "incomplete_value": true,
      "site": "00b46f74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "definition_site": "00b47ef4",
      "incomplete_value": true,
      "site": "00b47ef4",
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
      "definition_site": "00b46f00",
      "incomplete_value": true,
      "site": "00b46f00",
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
      "00b47ef0",
      "READ",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47efc",
      "READ",
      [
        "storage",
        "01125888",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47f18",
      "WRITE",
      [
        "storage",
        "01125888",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b47ef0",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47efc",
      "READ",
      [
        "storage",
        "01126848",
        null,
        "undefined1"
      ]
    ],
    [
      "00b47f18",
      "WRITE",
      [
        "storage",
        "01126848",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46f24 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b46f24 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b46f24 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:888:8"]]
- 00b46f24 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b47f18 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b47f18 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b47f18 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:848:8"]]
+ 00b47f18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b46f70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b46f70 ["INT_ADD", "register:40f0:8", ["const:b46f70:8", "const:4:8"]]
- 00b46f70 ["CALLIND", null, ["register:0:8"]]
+ 00b47f64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b47f64 ["INT_ADD", "register:40f0:8", ["const:b47f64:8", "const:4:8"]]
+ 00b47f64 ["CALLIND", null, ["register:0:8"]]
- 00b46f74 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:880:8"]]
- 00b46f74 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b46f74 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b47f68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:840:8"]]
+ 00b47f68 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b47f68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-753300d0bbdaf83fc64f58f70ad5f37e"></a>

### [`00b46f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46f88.md) → [`00b47f7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47f7c.md) _ZN8firebase4util16dex_class_loader14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b47fbc",
      "incomplete_value": true,
      "site": "00b47fbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46fc8",
      "incomplete_value": true,
      "site": "00b46fc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "definition_site": "00b47f98",
      "incomplete_value": true,
      "site": "00b47f98",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46fa4",
      "incomplete_value": true,
      "site": "00b46fa4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b47fa0",
      "incomplete_value": false,
      "site": "00b47fb4",
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
            "const:ad1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b46fac",
      "incomplete_value": false,
      "site": "00b46fc0",
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
            "const:a02:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b47f90",
      "READ",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47fa0",
      "PARAM",
      [
        "storage",
        "002b8a02",
        null,
        "string"
      ]
    ],
    [
      "00b47fbc",
      "WRITE",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b47f90",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b47fa0",
      "PARAM",
      [
        "storage",
        "002b8ad1",
        null,
        "string"
      ]
    ],
    [
      "00b47fbc",
      "WRITE",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b46fc0 ["INT_ADD", "register:40f0:8", ["const:b46fc0:8", "const:4:8"]]
- 00b46fc0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b47fb4 ["INT_ADD", "register:40f0:8", ["const:b47fb4:8", "const:4:8"]]
+ 00b47fb4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b46fc8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:880:8"]]
- 00b46fc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b47fbc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:840:8"]]
+ 00b47fbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b46f94 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b47f88 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-c2073248a2c3671c7aa4a38a4cc87372"></a>

### [`00b46ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b46/00b46ff8.md) → [`00b47fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b47/00b47fec.md) _ZN8firebase4util16dex_class_loader11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b48008",
      "incomplete_value": true,
      "site": "00b4800c",
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
            "const:463:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47014",
      "incomplete_value": true,
      "site": "00b47018",
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
      "definition_site": "00b48018",
      "incomplete_value": true,
      "site": "00b48024",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b47024",
      "incomplete_value": true,
      "site": "00b47030",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b48008",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b48018",
      "DATA",
      [
        "storage",
        "01125890",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48008",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b48018",
      "DATA",
      [
        "storage",
        "01126850",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47018 ["INT_ADD", "register:40f0:8", ["const:b47018:8", "const:4:8"]]
- 00b47018 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4800c ["INT_ADD", "register:40f0:8", ["const:b4800c:8", "const:4:8"]]
+ 00b4800c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b47014 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b47014 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b47014 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b47014 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b48008 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b48008 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48008 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48008 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4701c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b48010 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-33f82d544f12366422cf556376777586"></a>

### [`00b47034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47034.md) → [`00b48028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48028.md) _ZN8firebase4util16dex_class_loader13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48068",
      "incomplete_value": true,
      "site": "00b48068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47074",
      "incomplete_value": true,
      "site": "00b47074",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:880:8"
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
      "definition_site": "00b48044",
      "incomplete_value": true,
      "site": "00b48044",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47050",
      "incomplete_value": true,
      "site": "00b47050",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4804c",
      "incomplete_value": false,
      "site": "00b48060",
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
            "const:ad1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47058",
      "incomplete_value": false,
      "site": "00b4706c",
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
            "const:a02:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4803c",
      "READ",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4804c",
      "PARAM",
      [
        "storage",
        "002b8a02",
        null,
        "string"
      ]
    ],
    [
      "00b48068",
      "WRITE",
      [
        "storage",
        "01125880",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4803c",
      "READ",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4804c",
      "PARAM",
      [
        "storage",
        "002b8ad1",
        null,
        "string"
      ]
    ],
    [
      "00b48068",
      "WRITE",
      [
        "storage",
        "01126840",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4706c ["INT_ADD", "register:40f0:8", ["const:b4706c:8", "const:4:8"]]
- 00b4706c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48060 ["INT_ADD", "register:40f0:8", ["const:b48060:8", "const:4:8"]]
+ 00b48060 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47074 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:880:8"]]
- 00b47074 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48068 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:840:8"]]
+ 00b48068 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47040 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b48034 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-e5dfa92f8de4bce37f62f5fd19dbd3db"></a>

### [`00b470a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b470a4.md) → [`00b48098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48098.md) _ZN8firebase4util16dex_class_loader10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b480b4",
      "incomplete_value": true,
      "site": "00b480b8",
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
      "definition_site": "00b470c0",
      "incomplete_value": true,
      "site": "00b470c4",
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
      "definition_site": "00b480c4",
      "incomplete_value": true,
      "site": "00b480d0",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b470d0",
      "incomplete_value": true,
      "site": "00b470dc",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b480b4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b480c4",
      "DATA",
      [
        "storage",
        "011258a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b480b4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b480c4",
      "DATA",
      [
        "storage",
        "01126860",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b470c4 ["INT_ADD", "register:40f0:8", ["const:b470c4:8", "const:4:8"]]
- 00b470c4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b480b8 ["INT_ADD", "register:40f0:8", ["const:b480b8:8", "const:4:8"]]
+ 00b480b8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b470c0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b470c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b470c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b470c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b480b4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b480b4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b480b4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b480b4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b470c8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b480bc ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-09a0b5b7c63c8228bded3d088985c397"></a>

### [`00b470e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b470e0.md) → [`00b480d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b480d4.md) _ZN8firebase4util9resources19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0

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
      "definition_site": "00b48100",
      "incomplete_value": true,
      "site": "00b48100",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4710c",
      "incomplete_value": true,
      "site": "00b4710c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "definition_site": "00b480e8",
      "incomplete_value": true,
      "site": "00b480e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b470f4",
      "incomplete_value": true,
      "site": "00b470f4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b480f4",
      "incomplete_value": true,
      "site": "00b480f8",
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
            "const:9cc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47100",
      "incomplete_value": true,
      "site": "00b47104",
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
            "const:8fd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b480e4",
      "READ",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b480f4",
      "PARAM",
      [
        "storage",
        "002b58fd",
        null,
        "string"
      ]
    ],
    [
      "00b48100",
      "WRITE",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b480e4",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00b480f4",
      "PARAM",
      [
        "storage",
        "002b59cc",
        null,
        "string"
      ]
    ],
    [
      "00b48100",
      "WRITE",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47104 ["INT_ADD", "register:40f0:8", ["const:b47104:8", "const:4:8"]]
- 00b47104 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b480f8 ["INT_ADD", "register:40f0:8", ["const:b480f8:8", "const:4:8"]]
+ 00b480f8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4710c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00b4710c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48100 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:868:8"]]
+ 00b48100 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b470ec ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b480e0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-bf0a17e98b8e892df5fbe4f55a158a9b"></a>

### [`00b47120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47120.md) → [`00b48114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48114.md) _ZN8firebase4util9resources19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b48140",
      "incomplete_value": true,
      "site": "00b48140",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4714c",
      "incomplete_value": true,
      "site": "00b4714c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "definition_site": "00b48128",
      "incomplete_value": true,
      "site": "00b48128",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47134",
      "incomplete_value": true,
      "site": "00b47134",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b47134"
      ],
      [
        "FALL_THROUGH",
        "00b48128"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b48128",
      "incomplete_value": true,
      "site": "00b48140",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47134",
      "incomplete_value": true,
      "site": "00b4714c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b48124",
      "READ",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48130",
      "PARAM",
      [
        "storage",
        "002b58fd",
        null,
        "string"
      ]
    ],
    [
      "00b48140",
      "WRITE",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48124",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48130",
      "PARAM",
      [
        "storage",
        "002b59cc",
        null,
        "string"
      ]
    ],
    [
      "00b48140",
      "WRITE",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4714c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00b4714c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48140 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:868:8"]]
+ 00b48140 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4712c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48120 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b47130 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00b47130 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b48124 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:868:8"]]
+ 00b48124 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c8200963f1020fe2e147688af7f83810"></a>

### [`00b47160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47160.md) → [`00b48154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48154.md) _ZN8firebase4util9resources10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b48184",
      "incomplete_value": true,
      "site": "00b48184",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47190",
      "incomplete_value": true,
      "site": "00b47190",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "definition_site": "00b48168",
      "incomplete_value": true,
      "site": "00b48168",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47174",
      "incomplete_value": true,
      "site": "00b47174",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48174",
      "incomplete_value": false,
      "site": "00b4817c",
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
            "const:9cc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47180",
      "incomplete_value": false,
      "site": "00b47188",
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
            "const:8fd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48164",
      "READ",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48174",
      "PARAM",
      [
        "storage",
        "002b58fd",
        null,
        "string"
      ]
    ],
    [
      "00b48184",
      "WRITE",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48164",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48174",
      "PARAM",
      [
        "storage",
        "002b59cc",
        null,
        "string"
      ]
    ],
    [
      "00b48184",
      "WRITE",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47188 ["INT_ADD", "register:40f0:8", ["const:b47188:8", "const:4:8"]]
- 00b47188 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4817c ["INT_ADD", "register:40f0:8", ["const:b4817c:8", "const:4:8"]]
+ 00b4817c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47190 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00b47190 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48184 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:868:8"]]
+ 00b48184 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4716c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48160 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-16eb6e97d30922db5c173a9bf32af9ef"></a>

### [`00b471a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b471a4.md) → [`00b48198`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48198.md) _ZN8firebase4util9resources10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b481c8",
      "incomplete_value": true,
      "site": "00b481c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b471d4",
      "incomplete_value": true,
      "site": "00b471d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "definition_site": "00b481ac",
      "incomplete_value": true,
      "site": "00b481ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b471b8",
      "incomplete_value": true,
      "site": "00b471b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b481b4",
      "incomplete_value": false,
      "site": "00b481c0",
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
            "const:9cc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b471c0",
      "incomplete_value": false,
      "site": "00b471cc",
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
            "const:8fd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b481a8",
      "READ",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b481b4",
      "PARAM",
      [
        "storage",
        "002b58fd",
        null,
        "string"
      ]
    ],
    [
      "00b481c8",
      "WRITE",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b481a8",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00b481b4",
      "PARAM",
      [
        "storage",
        "002b59cc",
        null,
        "string"
      ]
    ],
    [
      "00b481c8",
      "WRITE",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b471cc ["INT_ADD", "register:40f0:8", ["const:b471cc:8", "const:4:8"]]
- 00b471cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b481c0 ["INT_ADD", "register:40f0:8", ["const:b481c0:8", "const:4:8"]]
+ 00b481c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b471d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8a8:8"]]
- 00b471d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b481c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:868:8"]]
+ 00b481c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b471b0 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b481a4 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-f14e869650c7470e69abe8d43719b32e"></a>

### [`00b471f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b471f4.md) → [`00b481e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b481e8.md) _ZN8firebase4util9resources15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b48270",
      "incomplete_value": true,
      "site": "00b48270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4727c",
      "incomplete_value": true,
      "site": "00b4727c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:8b0:8"
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
      "definition_site": "00b4821c",
      "incomplete_value": true,
      "site": "00b48228",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:868:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47228",
      "incomplete_value": true,
      "site": "00b47234",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8a8:8"
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
      "00b481fc",
      "READ",
      [
        "storage",
        "011258b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4821c",
      "READ",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48270",
      "WRITE",
      [
        "storage",
        "011258b0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b481fc",
      "READ",
      [
        "storage",
        "01126870",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4821c",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48270",
      "WRITE",
      [
        "storage",
        "01126870",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47234 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b47234 ["INT_ADD", "register:40f0:8", ["const:b47234:8", "const:4:8"]]
- 00b47234 ["CALLIND", null, ["register:0:8"]]
+ 00b48228 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b48228 ["INT_ADD", "register:40f0:8", ["const:b48228:8", "const:4:8"]]
+ 00b48228 ["CALLIND", null, ["register:0:8"]]
- 00b4727c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4727c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8b0:8"]]
- 00b4727c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b48270 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b48270 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:870:8"]]
+ 00b48270 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b47204 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b481f8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-3da611424928eac9f2fad9460f64aa63"></a>

### [`00b47290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47290.md) → [`00b48284`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48284.md) _ZN8firebase4util9resources12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b482c0",
      "incomplete_value": true,
      "site": "00b482c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:870:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b472cc",
      "incomplete_value": true,
      "site": "00b472cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:8b0:8"
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
      "definition_site": "00b48310",
      "incomplete_value": true,
      "site": "00b48310",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4731c",
      "incomplete_value": true,
      "site": "00b4731c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "definition_site": "00b4829c",
      "incomplete_value": true,
      "site": "00b4829c",
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
      "definition_site": "00b472a8",
      "incomplete_value": true,
      "site": "00b472a8",
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
      "00b48298",
      "READ",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b482a4",
      "READ",
      [
        "storage",
        "011258b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b482c0",
      "WRITE",
      [
        "storage",
        "011258b0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b48298",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00b482a4",
      "READ",
      [
        "storage",
        "01126870",
        null,
        "undefined1"
      ]
    ],
    [
      "00b482c0",
      "WRITE",
      [
        "storage",
        "01126870",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b472cc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b472cc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b472cc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8b0:8"]]
- 00b472cc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b482c0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b482c0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b482c0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:870:8"]]
+ 00b482c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b47318 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b47318 ["INT_ADD", "register:40f0:8", ["const:b47318:8", "const:4:8"]]
- 00b47318 ["CALLIND", null, ["register:0:8"]]
+ 00b4830c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4830c ["INT_ADD", "register:40f0:8", ["const:b4830c:8", "const:4:8"]]
+ 00b4830c ["CALLIND", null, ["register:0:8"]]
- 00b4731c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8a8:8"]]
- 00b4731c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4731c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b48310 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:868:8"]]
+ 00b48310 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b48310 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-74345169ce1bd61c5875ed3bd8ed8eaa"></a>

### [`00b47330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47330.md) → [`00b48324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48324.md) _ZN8firebase4util9resources14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48364",
      "incomplete_value": true,
      "site": "00b48364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47370",
      "incomplete_value": true,
      "site": "00b47370",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "definition_site": "00b48340",
      "incomplete_value": true,
      "site": "00b48340",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4734c",
      "incomplete_value": true,
      "site": "00b4734c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48348",
      "incomplete_value": false,
      "site": "00b4835c",
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
            "const:9cc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47354",
      "incomplete_value": false,
      "site": "00b47368",
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
            "const:8fd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48338",
      "READ",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48348",
      "PARAM",
      [
        "storage",
        "002b58fd",
        null,
        "string"
      ]
    ],
    [
      "00b48364",
      "WRITE",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48338",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48348",
      "PARAM",
      [
        "storage",
        "002b59cc",
        null,
        "string"
      ]
    ],
    [
      "00b48364",
      "WRITE",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47368 ["INT_ADD", "register:40f0:8", ["const:b47368:8", "const:4:8"]]
- 00b47368 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4835c ["INT_ADD", "register:40f0:8", ["const:b4835c:8", "const:4:8"]]
+ 00b4835c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47370 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8a8:8"]]
- 00b47370 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48364 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:868:8"]]
+ 00b48364 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4733c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b48330 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-f55b675ed25defc39f37c1c4e292770b"></a>

### [`00b473a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b473a0.md) → [`00b48394`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48394.md) _ZN8firebase4util9resources11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b483b0",
      "incomplete_value": false,
      "site": "00b483b4",
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
      "definition_site": "00b473bc",
      "incomplete_value": false,
      "site": "00b473c0",
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
      "definition_site": "00b483c0",
      "incomplete_value": true,
      "site": "00b483cc",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b473cc",
      "incomplete_value": true,
      "site": "00b473d8",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b483b0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b483c0",
      "DATA",
      [
        "storage",
        "011258b8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b483b0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b483c0",
      "DATA",
      [
        "storage",
        "01126878",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b473c0 ["INT_ADD", "register:40f0:8", ["const:b473c0:8", "const:4:8"]]
- 00b473c0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b483b4 ["INT_ADD", "register:40f0:8", ["const:b483b4:8", "const:4:8"]]
+ 00b483b4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b473bc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b473bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b473bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b473bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b483b0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b483b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b483b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b483b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b473c4 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b483b8 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-93f9edd7dd59c9cf16d7ddbacbf91f05"></a>

### [`00b473dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b473dc.md) → [`00b483d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b483d0.md) _ZN8firebase4util9resources13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48410",
      "incomplete_value": true,
      "site": "00b48410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4741c",
      "incomplete_value": true,
      "site": "00b4741c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:8a8:8"
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
      "definition_site": "00b483ec",
      "incomplete_value": true,
      "site": "00b483ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b473f8",
      "incomplete_value": true,
      "site": "00b473f8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b483f4",
      "incomplete_value": false,
      "site": "00b48408",
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
            "const:9cc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47400",
      "incomplete_value": false,
      "site": "00b47414",
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
            "const:8fd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b483e4",
      "READ",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b483f4",
      "PARAM",
      [
        "storage",
        "002b58fd",
        null,
        "string"
      ]
    ],
    [
      "00b48410",
      "WRITE",
      [
        "storage",
        "011258a8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b483e4",
      "READ",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ],
    [
      "00b483f4",
      "PARAM",
      [
        "storage",
        "002b59cc",
        null,
        "string"
      ]
    ],
    [
      "00b48410",
      "WRITE",
      [
        "storage",
        "01126868",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47414 ["INT_ADD", "register:40f0:8", ["const:b47414:8", "const:4:8"]]
- 00b47414 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48408 ["INT_ADD", "register:40f0:8", ["const:b48408:8", "const:4:8"]]
+ 00b48408 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4741c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8a8:8"]]
- 00b4741c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48410 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:868:8"]]
+ 00b48410 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b473e8 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b483dc ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-9dcea08641831fefcdea9e0d50df3ed5"></a>

### [`00b4744c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b4744c.md) → [`00b48440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48440.md) _ZN8firebase4util9resources10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4845c",
      "incomplete_value": false,
      "site": "00b48460",
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
      "definition_site": "00b47468",
      "incomplete_value": false,
      "site": "00b4746c",
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
      "definition_site": "00b4846c",
      "incomplete_value": true,
      "site": "00b48478",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b47478",
      "incomplete_value": true,
      "site": "00b47484",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4845c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4846c",
      "DATA",
      [
        "storage",
        "011258c0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4845c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4846c",
      "DATA",
      [
        "storage",
        "01126880",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4746c ["INT_ADD", "register:40f0:8", ["const:b4746c:8", "const:4:8"]]
- 00b4746c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b48460 ["INT_ADD", "register:40f0:8", ["const:b48460:8", "const:4:8"]]
+ 00b48460 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b47468 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b47468 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b47468 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b47468 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4845c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4845c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4845c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4845c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b47470 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b48464 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-416721b57ba413d2f44eab212b03a0dd"></a>

### [`00b47488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47488.md) → [`00b4847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b4847c.md) _ZN8firebase4util8activity19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_

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
      "definition_site": "00b484a8",
      "incomplete_value": true,
      "site": "00b484a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b474b4",
      "incomplete_value": true,
      "site": "00b474b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8c8:8"
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
      "definition_site": "00b48490",
      "incomplete_value": true,
      "site": "00b48490",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4749c",
      "incomplete_value": true,
      "site": "00b4749c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4849c",
      "incomplete_value": false,
      "site": "00b484a0",
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
            "const:65b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b474a8",
      "incomplete_value": false,
      "site": "00b474ac",
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
            "const:57d:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4848c",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4849c",
      "PARAM",
      [
        "storage",
        "002be57d",
        null,
        "string"
      ]
    ],
    [
      "00b484a8",
      "WRITE",
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
      "00b4848c",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4849c",
      "PARAM",
      [
        "storage",
        "002be65b",
        null,
        "string"
      ]
    ],
    [
      "00b484a8",
      "WRITE",
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
- 00b474ac ["INT_ADD", "register:40f0:8", ["const:b474ac:8", "const:4:8"]]
- 00b474ac ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b484a0 ["INT_ADD", "register:40f0:8", ["const:b484a0:8", "const:4:8"]]
+ 00b484a0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b474b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00b474b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b484a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:888:8"]]
+ 00b484a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47494 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48488 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-978cda7aab40c9b36d586848749e5982"></a>

### [`00b474c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b474c8.md) → [`00b484bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b484bc.md) _ZN8firebase4util8activity19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b484e8",
      "incomplete_value": true,
      "site": "00b484e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b474f4",
      "incomplete_value": true,
      "site": "00b474f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8c8:8"
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
      "definition_site": "00b484d0",
      "incomplete_value": true,
      "site": "00b484d0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b474dc",
      "incomplete_value": true,
      "site": "00b474dc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b484d8",
      "incomplete_value": false,
      "site": "00b484e0",
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
            "const:65b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b474e4",
      "incomplete_value": false,
      "site": "00b474ec",
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
            "const:57d:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b484cc",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b484d8",
      "PARAM",
      [
        "storage",
        "002be57d",
        null,
        "string"
      ]
    ],
    [
      "00b484e8",
      "WRITE",
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
      "00b484cc",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00b484d8",
      "PARAM",
      [
        "storage",
        "002be65b",
        null,
        "string"
      ]
    ],
    [
      "00b484e8",
      "WRITE",
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
- 00b474ec ["INT_ADD", "register:40f0:8", ["const:b474ec:8", "const:4:8"]]
- 00b474ec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b484e0 ["INT_ADD", "register:40f0:8", ["const:b484e0:8", "const:4:8"]]
+ 00b484e0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b474f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00b474f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b484e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:888:8"]]
+ 00b484e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b474d4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b484c8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-d3099fa84e960ab1cf4f3be3bbdd056a"></a>

### [`00b47508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47508.md) → [`00b484fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b484fc.md) _ZN8firebase4util8activity10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4852c",
      "incomplete_value": true,
      "site": "00b4852c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47538",
      "incomplete_value": true,
      "site": "00b47538",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8c8:8"
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
      "definition_site": "00b48510",
      "incomplete_value": true,
      "site": "00b48510",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4751c",
      "incomplete_value": true,
      "site": "00b4751c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4851c",
      "incomplete_value": false,
      "site": "00b48524",
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
            "const:65b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47528",
      "incomplete_value": false,
      "site": "00b47530",
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
            "const:57d:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4850c",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4851c",
      "PARAM",
      [
        "storage",
        "002be57d",
        null,
        "string"
      ]
    ],
    [
      "00b4852c",
      "WRITE",
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
      "00b4850c",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4851c",
      "PARAM",
      [
        "storage",
        "002be65b",
        null,
        "string"
      ]
    ],
    [
      "00b4852c",
      "WRITE",
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
- 00b47530 ["INT_ADD", "register:40f0:8", ["const:b47530:8", "const:4:8"]]
- 00b47530 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48524 ["INT_ADD", "register:40f0:8", ["const:b48524:8", "const:4:8"]]
+ 00b48524 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47538 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00b47538 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4852c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:888:8"]]
+ 00b4852c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47514 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48508 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-bd25377d7c5027d2f84e117470c0246a"></a>

### [`00b4754c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b4754c.md) → [`00b48540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48540.md) _ZN8firebase4util8activity10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48570",
      "incomplete_value": true,
      "site": "00b48570",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4757c",
      "incomplete_value": true,
      "site": "00b4757c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8c8:8"
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
      "definition_site": "00b48554",
      "incomplete_value": true,
      "site": "00b48554",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47560",
      "incomplete_value": true,
      "site": "00b47560",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4855c",
      "incomplete_value": false,
      "site": "00b48568",
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
            "const:65b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47568",
      "incomplete_value": false,
      "site": "00b47574",
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
            "const:57d:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48550",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4855c",
      "PARAM",
      [
        "storage",
        "002be57d",
        null,
        "string"
      ]
    ],
    [
      "00b48570",
      "WRITE",
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
      "00b48550",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4855c",
      "PARAM",
      [
        "storage",
        "002be65b",
        null,
        "string"
      ]
    ],
    [
      "00b48570",
      "WRITE",
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
- 00b47574 ["INT_ADD", "register:40f0:8", ["const:b47574:8", "const:4:8"]]
- 00b47574 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48568 ["INT_ADD", "register:40f0:8", ["const:b48568:8", "const:4:8"]]
+ 00b48568 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4757c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8c8:8"]]
- 00b4757c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48570 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:888:8"]]
+ 00b48570 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47558 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4854c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-19a7bbe76603f6dd0580ea359d304d67"></a>

### [`00b4759c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b4759c.md) → [`00b48590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48590.md) _ZN8firebase4util8activity15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b48618",
      "incomplete_value": true,
      "site": "00b48618",
      "value": [
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
      "definition_site": "00b47624",
      "incomplete_value": true,
      "site": "00b47624",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b485c4",
      "incomplete_value": true,
      "site": "00b485d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:888:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b475d0",
      "incomplete_value": true,
      "site": "00b475dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8c8:8"
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
      "00b485a4",
      "READ",
      [
        "storage",
        "011258d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b485c4",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48618",
      "WRITE",
      [
        "storage",
        "011258d0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b485a4",
      "READ",
      [
        "storage",
        "01126890",
        null,
        "undefined1"
      ]
    ],
    [
      "00b485c4",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48618",
      "WRITE",
      [
        "storage",
        "01126890",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b475dc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b475dc ["INT_ADD", "register:40f0:8", ["const:b475dc:8", "const:4:8"]]
- 00b475dc ["CALLIND", null, ["register:0:8"]]
+ 00b485d0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b485d0 ["INT_ADD", "register:40f0:8", ["const:b485d0:8", "const:4:8"]]
+ 00b485d0 ["CALLIND", null, ["register:0:8"]]
- 00b47624 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b47624 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8d0:8"]]
- 00b47624 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b48618 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b48618 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:890:8"]]
+ 00b48618 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b475ac ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b485a0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-4dc3cf1d1f6f366f7a523be0cb6b9c05"></a>

### [`00b47638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47638.md) → [`00b4862c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b4862c.md) _ZN8firebase4util8activity12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b48668",
      "incomplete_value": true,
      "site": "00b48668",
      "value": [
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
      "definition_site": "00b47674",
      "incomplete_value": true,
      "site": "00b47674",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b486b8",
      "incomplete_value": true,
      "site": "00b486b8",
      "value": [
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
      "definition_site": "00b476c4",
      "incomplete_value": true,
      "site": "00b476c4",
      "value": [
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b48644",
      "incomplete_value": true,
      "site": "00b48644",
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
      "definition_site": "00b47650",
      "incomplete_value": true,
      "site": "00b47650",
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
      "00b48640",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4864c",
      "READ",
      [
        "storage",
        "011258d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48668",
      "WRITE",
      [
        "storage",
        "011258d0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b48640",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4864c",
      "READ",
      [
        "storage",
        "01126890",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48668",
      "WRITE",
      [
        "storage",
        "01126890",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47674 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b47674 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b47674 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8d0:8"]]
- 00b47674 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b48668 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b48668 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b48668 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:890:8"]]
+ 00b48668 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b476c0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b476c0 ["INT_ADD", "register:40f0:8", ["const:b476c0:8", "const:4:8"]]
- 00b476c0 ["CALLIND", null, ["register:0:8"]]
+ 00b486b4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b486b4 ["INT_ADD", "register:40f0:8", ["const:b486b4:8", "const:4:8"]]
+ 00b486b4 ["CALLIND", null, ["register:0:8"]]
- 00b476c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8c8:8"]]
- 00b476c4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b476c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b486b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:888:8"]]
+ 00b486b8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b486b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-00536ac2a13ed06eb7a9a4e65c4fc5ea"></a>

### [`00b476d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b476d8.md) → [`00b486cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b486cc.md) _ZN8firebase4util8activity14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4870c",
      "incomplete_value": true,
      "site": "00b4870c",
      "value": [
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
      "definition_site": "00b47718",
      "incomplete_value": true,
      "site": "00b47718",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b486e8",
      "incomplete_value": true,
      "site": "00b486e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b476f4",
      "incomplete_value": true,
      "site": "00b476f4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b486f0",
      "incomplete_value": false,
      "site": "00b48704",
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
            "const:65b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b476fc",
      "incomplete_value": false,
      "site": "00b47710",
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
            "const:57d:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b486e0",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b486f0",
      "PARAM",
      [
        "storage",
        "002be57d",
        null,
        "string"
      ]
    ],
    [
      "00b4870c",
      "WRITE",
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
      "00b486e0",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00b486f0",
      "PARAM",
      [
        "storage",
        "002be65b",
        null,
        "string"
      ]
    ],
    [
      "00b4870c",
      "WRITE",
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
- 00b47710 ["INT_ADD", "register:40f0:8", ["const:b47710:8", "const:4:8"]]
- 00b47710 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48704 ["INT_ADD", "register:40f0:8", ["const:b48704:8", "const:4:8"]]
+ 00b48704 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47718 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8c8:8"]]
- 00b47718 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4870c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:888:8"]]
+ 00b4870c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b476e4 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b486d8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-26b79f2d6e04e79fdda45d779961020a"></a>

### [`00b47748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47748.md) → [`00b4873c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b4873c.md) _ZN8firebase4util8activity11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b620.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c5f0.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48758",
      "incomplete_value": false,
      "site": "00b4875c",
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
      "definition_site": "00b47764",
      "incomplete_value": false,
      "site": "00b47768",
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
      "definition_site": "00b48768",
      "incomplete_value": true,
      "site": "00b48774",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b47774",
      "incomplete_value": true,
      "site": "00b47780",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b48758",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b48768",
      "DATA",
      [
        "storage",
        "011258d8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b48758",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b48768",
      "DATA",
      [
        "storage",
        "01126898",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47768 ["INT_ADD", "register:40f0:8", ["const:b47768:8", "const:4:8"]]
- 00b47768 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4875c ["INT_ADD", "register:40f0:8", ["const:b4875c:8", "const:4:8"]]
+ 00b4875c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b47764 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b47764 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b47764 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b47764 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b48758 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b48758 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48758 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48758 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4776c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b48760 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-0b3c3d800518737e7727901ea9518b82"></a>

### [`00b47784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47784.md) → [`00b48778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48778.md) _ZN8firebase4util8activity13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b487b8",
      "incomplete_value": true,
      "site": "00b487b8",
      "value": [
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
      "definition_site": "00b477c4",
      "incomplete_value": true,
      "site": "00b477c4",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b48794",
      "incomplete_value": true,
      "site": "00b48794",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b477a0",
      "incomplete_value": true,
      "site": "00b477a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4879c",
      "incomplete_value": false,
      "site": "00b487b0",
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
            "const:65b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b477a8",
      "incomplete_value": false,
      "site": "00b477bc",
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
            "const:57d:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4878c",
      "READ",
      [
        "storage",
        "011258c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4879c",
      "PARAM",
      [
        "storage",
        "002be57d",
        null,
        "string"
      ]
    ],
    [
      "00b487b8",
      "WRITE",
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
      "00b4878c",
      "READ",
      [
        "storage",
        "01126888",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4879c",
      "PARAM",
      [
        "storage",
        "002be65b",
        null,
        "string"
      ]
    ],
    [
      "00b487b8",
      "WRITE",
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
- 00b477bc ["INT_ADD", "register:40f0:8", ["const:b477bc:8", "const:4:8"]]
- 00b477bc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b487b0 ["INT_ADD", "register:40f0:8", ["const:b487b0:8", "const:4:8"]]
+ 00b487b0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b477c4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8c8:8"]]
- 00b477c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b487b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:888:8"]]
+ 00b487b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47790 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b48784 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-8c906d8af83e28fc758d3ab63441e774"></a>

### [`00b477f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b477f4.md) → [`00b487e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b487e8.md) _ZN8firebase4util8activity10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b48804",
      "incomplete_value": false,
      "site": "00b48808",
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
      "definition_site": "00b47810",
      "incomplete_value": false,
      "site": "00b47814",
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
      "definition_site": "00b48814",
      "incomplete_value": true,
      "site": "00b48820",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b47820",
      "incomplete_value": true,
      "site": "00b4782c",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b48804",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b48814",
      "DATA",
      [
        "storage",
        "01125928",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b48804",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b48814",
      "DATA",
      [
        "storage",
        "011268e8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47814 ["INT_ADD", "register:40f0:8", ["const:b47814:8", "const:4:8"]]
- 00b47814 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b48808 ["INT_ADD", "register:40f0:8", ["const:b48808:8", "const:4:8"]]
+ 00b48808 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b47810 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b47810 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b47810 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b47810 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b48804 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b48804 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48804 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48804 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b47818 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4880c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-c35cd0f0b822e05cb16813ea3bbbaded"></a>

### [`00b47830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47830.md) → [`00b48824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48824.md) _ZN8firebase4util10array_list19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00b48850",
      "incomplete_value": true,
      "site": "00b48850",
      "value": [
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
      "definition_site": "00b4785c",
      "incomplete_value": true,
      "site": "00b4785c",
      "value": [
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
      "definition_site": "00b48838",
      "incomplete_value": true,
      "site": "00b48838",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47844",
      "incomplete_value": true,
      "site": "00b47844",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48844",
      "incomplete_value": false,
      "site": "00b48848",
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
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47850",
      "incomplete_value": false,
      "site": "00b47854",
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
            "const:b8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48834",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48844",
      "PARAM",
      [
        "storage",
        "002a70b8",
        null,
        "string"
      ]
    ],
    [
      "00b48850",
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
      "00b48834",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48844",
      "PARAM",
      [
        "storage",
        "002a7210",
        null,
        "string"
      ]
    ],
    [
      "00b48850",
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
- 00b47854 ["INT_ADD", "register:40f0:8", ["const:b47854:8", "const:4:8"]]
- 00b47854 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48848 ["INT_ADD", "register:40f0:8", ["const:b48848:8", "const:4:8"]]
+ 00b48848 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4785c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b4785c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48850 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00b48850 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4783c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48830 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-6d405ad9d9e6201237b38be712f1ab36"></a>

### [`00b47870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47870.md) → [`00b48864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48864.md) _ZN8firebase4util10array_list19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b48890",
      "incomplete_value": true,
      "site": "00b48890",
      "value": [
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
      "definition_site": "00b4789c",
      "incomplete_value": true,
      "site": "00b4789c",
      "value": [
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
      "definition_site": "00b48878",
      "incomplete_value": true,
      "site": "00b48878",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47884",
      "incomplete_value": true,
      "site": "00b47884",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48880",
      "incomplete_value": false,
      "site": "00b48888",
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
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4788c",
      "incomplete_value": false,
      "site": "00b47894",
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
            "const:b8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48874",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48880",
      "PARAM",
      [
        "storage",
        "002a70b8",
        null,
        "string"
      ]
    ],
    [
      "00b48890",
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
      "00b48874",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48880",
      "PARAM",
      [
        "storage",
        "002a7210",
        null,
        "string"
      ]
    ],
    [
      "00b48890",
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
- 00b47894 ["INT_ADD", "register:40f0:8", ["const:b47894:8", "const:4:8"]]
- 00b47894 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48888 ["INT_ADD", "register:40f0:8", ["const:b48888:8", "const:4:8"]]
+ 00b48888 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4789c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b4789c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48890 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00b48890 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4787c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48870 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-ef698e0c808c26129f62d31e2cfa789b"></a>

### [`00b478b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b478b0.md) → [`00b488a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b488a4.md) _ZN8firebase4util10array_list10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b488d4",
      "incomplete_value": true,
      "site": "00b488d4",
      "value": [
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
      "definition_site": "00b478e0",
      "incomplete_value": true,
      "site": "00b478e0",
      "value": [
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
      "definition_site": "00b488b8",
      "incomplete_value": true,
      "site": "00b488b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b478c4",
      "incomplete_value": true,
      "site": "00b478c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b488c4",
      "incomplete_value": false,
      "site": "00b488cc",
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
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b478d0",
      "incomplete_value": false,
      "site": "00b478d8",
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
            "const:b8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b488b4",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b488c4",
      "PARAM",
      [
        "storage",
        "002a70b8",
        null,
        "string"
      ]
    ],
    [
      "00b488d4",
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
      "00b488b4",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b488c4",
      "PARAM",
      [
        "storage",
        "002a7210",
        null,
        "string"
      ]
    ],
    [
      "00b488d4",
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
- 00b478d8 ["INT_ADD", "register:40f0:8", ["const:b478d8:8", "const:4:8"]]
- 00b478d8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b488cc ["INT_ADD", "register:40f0:8", ["const:b488cc:8", "const:4:8"]]
+ 00b488cc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b478e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b478e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b488d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00b488d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b478bc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b488b0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-ce2c07013b1f8a995a88d84711a2f2d2"></a>

### [`00b478f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b478f4.md) → [`00b488e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b488e8.md) _ZN8firebase4util10array_list10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48918",
      "incomplete_value": true,
      "site": "00b48918",
      "value": [
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
      "definition_site": "00b47924",
      "incomplete_value": true,
      "site": "00b47924",
      "value": [
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
      "definition_site": "00b488fc",
      "incomplete_value": true,
      "site": "00b488fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47908",
      "incomplete_value": true,
      "site": "00b47908",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48904",
      "incomplete_value": false,
      "site": "00b48910",
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
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47910",
      "incomplete_value": false,
      "site": "00b4791c",
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
            "const:b8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b488f8",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48904",
      "PARAM",
      [
        "storage",
        "002a70b8",
        null,
        "string"
      ]
    ],
    [
      "00b48918",
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
      "00b488f8",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48904",
      "PARAM",
      [
        "storage",
        "002a7210",
        null,
        "string"
      ]
    ],
    [
      "00b48918",
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
- 00b4791c ["INT_ADD", "register:40f0:8", ["const:b4791c:8", "const:4:8"]]
- 00b4791c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48910 ["INT_ADD", "register:40f0:8", ["const:b48910:8", "const:4:8"]]
+ 00b48910 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47924 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:930:8"]]
- 00b47924 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48918 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:8f0:8"]]
+ 00b48918 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47900 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b488f4 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-5db7a218ded525ecb6bf0c4d15af708e"></a>

### [`00b47944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47944.md) → [`00b48938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48938.md) _ZN8firebase4util10array_list15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b489c0",
      "incomplete_value": true,
      "site": "00b489c0",
      "value": [
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
      "definition_site": "00b479cc",
      "incomplete_value": true,
      "site": "00b479cc",
      "value": [
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
      "definition_site": "00b4896c",
      "incomplete_value": true,
      "site": "00b48978",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b47978",
      "incomplete_value": true,
      "site": "00b47984",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b4894c",
      "READ",
      [
        "storage",
        "01125938",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4896c",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b489c0",
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
      "00b4894c",
      "READ",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4896c",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b489c0",
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
- 00b47984 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b47984 ["INT_ADD", "register:40f0:8", ["const:b47984:8", "const:4:8"]]
- 00b47984 ["CALLIND", null, ["register:0:8"]]
+ 00b48978 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b48978 ["INT_ADD", "register:40f0:8", ["const:b48978:8", "const:4:8"]]
+ 00b48978 ["CALLIND", null, ["register:0:8"]]
- 00b479cc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b479cc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:938:8"]]
- 00b479cc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b489c0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b489c0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:8f8:8"]]
+ 00b489c0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b47954 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b48948 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-e24d14e7d1e98cd771ff205ab6f52bf2"></a>

### [`00b479e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b479e0.md) → [`00b489d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b489d4.md) _ZN8firebase4util10array_list12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b48a10",
      "incomplete_value": true,
      "site": "00b48a10",
      "value": [
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
      "definition_site": "00b47a1c",
      "incomplete_value": true,
      "site": "00b47a1c",
      "value": [
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
      "definition_site": "00b48a60",
      "incomplete_value": true,
      "site": "00b48a60",
      "value": [
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
      "definition_site": "00b47a6c",
      "incomplete_value": true,
      "site": "00b47a6c",
      "value": [
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
      "definition_site": "00b489ec",
      "incomplete_value": true,
      "site": "00b489ec",
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
      "definition_site": "00b479f8",
      "incomplete_value": true,
      "site": "00b479f8",
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
      "00b489e8",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b489f4",
      "READ",
      [
        "storage",
        "01125938",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48a10",
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
      "00b489e8",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b489f4",
      "READ",
      [
        "storage",
        "011268f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48a10",
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
- 00b47a1c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b47a1c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b47a1c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:938:8"]]
- 00b47a1c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b48a10 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b48a10 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b48a10 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:8f8:8"]]
+ 00b48a10 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b47a68 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b47a68 ["INT_ADD", "register:40f0:8", ["const:b47a68:8", "const:4:8"]]
- 00b47a68 ["CALLIND", null, ["register:0:8"]]
+ 00b48a5c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b48a5c ["INT_ADD", "register:40f0:8", ["const:b48a5c:8", "const:4:8"]]
+ 00b48a5c ["CALLIND", null, ["register:0:8"]]
- 00b47a6c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:930:8"]]
- 00b47a6c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b47a6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b48a60 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8f0:8"]]
+ 00b48a60 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b48a60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-3f8499318aaeea29762a2176cde2b60c"></a>

### [`00b47a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47a80.md) → [`00b48a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48a74.md) _ZN8firebase4util10array_list14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48ab4",
      "incomplete_value": true,
      "site": "00b48ab4",
      "value": [
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
      "definition_site": "00b47ac0",
      "incomplete_value": true,
      "site": "00b47ac0",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b48a90",
      "incomplete_value": true,
      "site": "00b48a90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47a9c",
      "incomplete_value": true,
      "site": "00b47a9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48a98",
      "incomplete_value": false,
      "site": "00b48aac",
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
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47aa4",
      "incomplete_value": false,
      "site": "00b47ab8",
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
            "const:b8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48a88",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48a98",
      "PARAM",
      [
        "storage",
        "002a70b8",
        null,
        "string"
      ]
    ],
    [
      "00b48ab4",
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
      "00b48a88",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48a98",
      "PARAM",
      [
        "storage",
        "002a7210",
        null,
        "string"
      ]
    ],
    [
      "00b48ab4",
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
- 00b47ab8 ["INT_ADD", "register:40f0:8", ["const:b47ab8:8", "const:4:8"]]
- 00b47ab8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48aac ["INT_ADD", "register:40f0:8", ["const:b48aac:8", "const:4:8"]]
+ 00b48aac ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47ac0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:930:8"]]
- 00b47ac0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48ab4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8f0:8"]]
+ 00b48ab4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47a8c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b48a80 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-1f5b72a33f12d9c223e9ed3a80e4a8c5"></a>

### [`00b47af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47af0.md) → [`00b48ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48ae4.md) _ZN8firebase4util10array_list11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5af80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af80.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5bf50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bf50.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48b00",
      "incomplete_value": false,
      "site": "00b48b04",
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
      "definition_site": "00b47b0c",
      "incomplete_value": false,
      "site": "00b47b10",
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
      "definition_site": "00b48b10",
      "incomplete_value": true,
      "site": "00b48b1c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b47b1c",
      "incomplete_value": true,
      "site": "00b47b28",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b48b00",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b48b10",
      "DATA",
      [
        "storage",
        "01125940",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48b00",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b48b10",
      "DATA",
      [
        "storage",
        "01126900",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47b10 ["INT_ADD", "register:40f0:8", ["const:b47b10:8", "const:4:8"]]
- 00b47b10 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b48b04 ["INT_ADD", "register:40f0:8", ["const:b48b04:8", "const:4:8"]]
+ 00b48b04 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b47b0c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b47b0c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b47b0c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b47b0c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b48b00 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b48b00 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48b00 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48b00 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b47b14 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b48b08 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-6f8b77796ac416d77cfe51a38546bb56"></a>

### [`00b47b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47b2c.md) → [`00b48b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48b20.md) _ZN8firebase4util10array_list13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48b60",
      "incomplete_value": true,
      "site": "00b48b60",
      "value": [
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
      "definition_site": "00b47b6c",
      "incomplete_value": true,
      "site": "00b47b6c",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b48b3c",
      "incomplete_value": true,
      "site": "00b48b3c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47b48",
      "incomplete_value": true,
      "site": "00b47b48",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48b44",
      "incomplete_value": false,
      "site": "00b48b58",
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
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47b50",
      "incomplete_value": false,
      "site": "00b47b64",
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
            "const:b8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48b34",
      "READ",
      [
        "storage",
        "01125930",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48b44",
      "PARAM",
      [
        "storage",
        "002a70b8",
        null,
        "string"
      ]
    ],
    [
      "00b48b60",
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
      "00b48b34",
      "READ",
      [
        "storage",
        "011268f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48b44",
      "PARAM",
      [
        "storage",
        "002a7210",
        null,
        "string"
      ]
    ],
    [
      "00b48b60",
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
- 00b47b64 ["INT_ADD", "register:40f0:8", ["const:b47b64:8", "const:4:8"]]
- 00b47b64 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48b58 ["INT_ADD", "register:40f0:8", ["const:b48b58:8", "const:4:8"]]
+ 00b48b58 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47b6c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:930:8"]]
- 00b47b6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48b60 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8f0:8"]]
+ 00b48b60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47b38 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b48b2c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-7e4e47e381241ae43a2ee89ce5168a27"></a>

### [`00b47b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47b9c.md) → [`00b48b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48b90.md) _ZN8firebase4util10array_list10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b48bac",
      "incomplete_value": false,
      "site": "00b48bb0",
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
      "definition_site": "00b47bb8",
      "incomplete_value": false,
      "site": "00b47bbc",
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
      "definition_site": "00b48bbc",
      "incomplete_value": true,
      "site": "00b48bc8",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b47bc8",
      "incomplete_value": true,
      "site": "00b47bd4",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b48bac",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b48bbc",
      "DATA",
      [
        "storage",
        "01125958",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b48bac",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b48bbc",
      "DATA",
      [
        "storage",
        "01126918",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47bbc ["INT_ADD", "register:40f0:8", ["const:b47bbc:8", "const:4:8"]]
- 00b47bbc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b48bb0 ["INT_ADD", "register:40f0:8", ["const:b48bb0:8", "const:4:8"]]
+ 00b48bb0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b47bb8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b47bb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b47bb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b47bb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b48bac ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b48bac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48bac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48bac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b47bc0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b48bb4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-dc8d4fcf6d197440fde72be2d3431931"></a>

### [`00b47bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47bd8.md) → [`00b48bcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48bcc.md) _ZN8firebase4util21asset_file_descriptor19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00b48bf8",
      "incomplete_value": true,
      "site": "00b48bf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47c04",
      "incomplete_value": true,
      "site": "00b47c04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:960:8"
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
      "definition_site": "00b48be0",
      "incomplete_value": true,
      "site": "00b48be0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47bec",
      "incomplete_value": true,
      "site": "00b47bec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48bec",
      "incomplete_value": false,
      "site": "00b48bf0",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47bf8",
      "incomplete_value": false,
      "site": "00b47bfc",
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
            "const:76a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48bdc",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48bec",
      "PARAM",
      [
        "storage",
        "002bf76a",
        null,
        "string"
      ]
    ],
    [
      "00b48bf8",
      "WRITE",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48bdc",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48bec",
      "PARAM",
      [
        "storage",
        "002bf848",
        null,
        "string"
      ]
    ],
    [
      "00b48bf8",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47bfc ["INT_ADD", "register:40f0:8", ["const:b47bfc:8", "const:4:8"]]
- 00b47bfc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48bf0 ["INT_ADD", "register:40f0:8", ["const:b48bf0:8", "const:4:8"]]
+ 00b48bf0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47c04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:960:8"]]
- 00b47c04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48bf8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:920:8"]]
+ 00b48bf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47be4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48bd8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-f80e5072fc914b8f5fa2c9b65b5eae25"></a>

### [`00b47c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47c18.md) → [`00b48c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48c0c.md) _ZN8firebase4util21asset_file_descriptor19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocat

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
      "definition_site": "00b48c38",
      "incomplete_value": true,
      "site": "00b48c38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47c44",
      "incomplete_value": true,
      "site": "00b47c44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:960:8"
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
      "definition_site": "00b48c20",
      "incomplete_value": true,
      "site": "00b48c20",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47c2c",
      "incomplete_value": true,
      "site": "00b47c2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48c28",
      "incomplete_value": false,
      "site": "00b48c30",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47c34",
      "incomplete_value": false,
      "site": "00b47c3c",
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
            "const:76a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48c1c",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48c28",
      "PARAM",
      [
        "storage",
        "002bf76a",
        null,
        "string"
      ]
    ],
    [
      "00b48c38",
      "WRITE",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48c1c",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48c28",
      "PARAM",
      [
        "storage",
        "002bf848",
        null,
        "string"
      ]
    ],
    [
      "00b48c38",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47c3c ["INT_ADD", "register:40f0:8", ["const:b47c3c:8", "const:4:8"]]
- 00b47c3c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48c30 ["INT_ADD", "register:40f0:8", ["const:b48c30:8", "const:4:8"]]
+ 00b48c30 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47c44 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:960:8"]]
- 00b47c44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48c38 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:920:8"]]
+ 00b48c38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47c24 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48c18 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-bef71e4fcc95e2f11b2410e942a176b7"></a>

### [`00b47c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47c58.md) → [`00b48c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48c4c.md) _ZN8firebase4util21asset_file_descriptor10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b48c7c",
      "incomplete_value": true,
      "site": "00b48c7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47c88",
      "incomplete_value": true,
      "site": "00b47c88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:960:8"
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
      "definition_site": "00b48c60",
      "incomplete_value": true,
      "site": "00b48c60",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47c6c",
      "incomplete_value": true,
      "site": "00b47c6c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48c6c",
      "incomplete_value": false,
      "site": "00b48c74",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47c78",
      "incomplete_value": false,
      "site": "00b47c80",
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
            "const:76a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48c5c",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48c6c",
      "PARAM",
      [
        "storage",
        "002bf76a",
        null,
        "string"
      ]
    ],
    [
      "00b48c7c",
      "WRITE",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48c5c",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48c6c",
      "PARAM",
      [
        "storage",
        "002bf848",
        null,
        "string"
      ]
    ],
    [
      "00b48c7c",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47c80 ["INT_ADD", "register:40f0:8", ["const:b47c80:8", "const:4:8"]]
- 00b47c80 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48c74 ["INT_ADD", "register:40f0:8", ["const:b48c74:8", "const:4:8"]]
+ 00b48c74 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47c88 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:960:8"]]
- 00b47c88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48c7c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:920:8"]]
+ 00b48c7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47c64 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48c58 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-e7f4cca29c0de5d7665e3c10678e8740"></a>

### [`00b47c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47c9c.md) → [`00b48c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48c90.md) _ZN8firebase4util21asset_file_descriptor10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48cc0",
      "incomplete_value": true,
      "site": "00b48cc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47ccc",
      "incomplete_value": true,
      "site": "00b47ccc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:960:8"
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
      "definition_site": "00b48ca4",
      "incomplete_value": true,
      "site": "00b48ca4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47cb0",
      "incomplete_value": true,
      "site": "00b47cb0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48cac",
      "incomplete_value": false,
      "site": "00b48cb8",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47cb8",
      "incomplete_value": false,
      "site": "00b47cc4",
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
            "const:76a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48ca0",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48cac",
      "PARAM",
      [
        "storage",
        "002bf76a",
        null,
        "string"
      ]
    ],
    [
      "00b48cc0",
      "WRITE",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48ca0",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48cac",
      "PARAM",
      [
        "storage",
        "002bf848",
        null,
        "string"
      ]
    ],
    [
      "00b48cc0",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47cc4 ["INT_ADD", "register:40f0:8", ["const:b47cc4:8", "const:4:8"]]
- 00b47cc4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48cb8 ["INT_ADD", "register:40f0:8", ["const:b48cb8:8", "const:4:8"]]
+ 00b48cb8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47ccc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:960:8"]]
- 00b47ccc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48cc0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:920:8"]]
+ 00b48cc0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47ca8 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48c9c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-bf40b84a1310b45ed11150376d9e3e53"></a>

### [`00b47cec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47cec.md) → [`00b48ce0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48ce0.md) _ZN8firebase4util21asset_file_descriptor15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b48d68",
      "incomplete_value": true,
      "site": "00b48d68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:928:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47d74",
      "incomplete_value": true,
      "site": "00b47d74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:968:8"
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
      "definition_site": "00b48d14",
      "incomplete_value": true,
      "site": "00b48d20",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:920:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47d20",
      "incomplete_value": true,
      "site": "00b47d2c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:960:8"
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
      "00b48cf4",
      "READ",
      [
        "storage",
        "01125968",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48d14",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48d68",
      "WRITE",
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
      "00b48cf4",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48d14",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48d68",
      "WRITE",
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
- 00b47d2c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b47d2c ["INT_ADD", "register:40f0:8", ["const:b47d2c:8", "const:4:8"]]
- 00b47d2c ["CALLIND", null, ["register:0:8"]]
+ 00b48d20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b48d20 ["INT_ADD", "register:40f0:8", ["const:b48d20:8", "const:4:8"]]
+ 00b48d20 ["CALLIND", null, ["register:0:8"]]
- 00b47d74 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b47d74 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:968:8"]]
- 00b47d74 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b48d68 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b48d68 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:928:8"]]
+ 00b48d68 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b47cfc ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b48cf0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-761bfe9f13bb57067bb9b7cef5de156c"></a>

### [`00b47d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47d88.md) → [`00b48d7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48d7c.md) _ZN8firebase4util21asset_file_descriptor12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b48db8",
      "incomplete_value": true,
      "site": "00b48db8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:928:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47dc4",
      "incomplete_value": true,
      "site": "00b47dc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:968:8"
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
      "definition_site": "00b48e08",
      "incomplete_value": true,
      "site": "00b48e08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47e14",
      "incomplete_value": true,
      "site": "00b47e14",
      "value": [
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48df8",
      "incomplete_value": true,
      "site": "00b48e04",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:920:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47e04",
      "incomplete_value": true,
      "site": "00b47e10",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:960:8"
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
      "00b48d90",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48d9c",
      "READ",
      [
        "storage",
        "01125968",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48db8",
      "WRITE",
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
      "00b48d90",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48d9c",
      "READ",
      [
        "storage",
        "01126928",
        null,
        "undefined1"
      ]
    ],
    [
      "00b48db8",
      "WRITE",
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
- 00b47dc4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b47dc4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b47dc4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:968:8"]]
- 00b47dc4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b48db8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b48db8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b48db8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:928:8"]]
+ 00b48db8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b47e10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b47e10 ["INT_ADD", "register:40f0:8", ["const:b47e10:8", "const:4:8"]]
- 00b47e10 ["CALLIND", null, ["register:0:8"]]
+ 00b48e04 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b48e04 ["INT_ADD", "register:40f0:8", ["const:b48e04:8", "const:4:8"]]
+ 00b48e04 ["CALLIND", null, ["register:0:8"]]
- 00b47e14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:960:8"]]
- 00b47e14 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b47e14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b48e08 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:920:8"]]
+ 00b48e08 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b48e08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-3f9e9b701322711a6049c9c92b18e787"></a>

### [`00b47e28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47e28.md) → [`00b48e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48e1c.md) _ZN8firebase4util21asset_file_descriptor14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48e5c",
      "incomplete_value": true,
      "site": "00b48e5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47e68",
      "incomplete_value": true,
      "site": "00b47e68",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b48e38",
      "incomplete_value": true,
      "site": "00b48e38",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47e44",
      "incomplete_value": true,
      "site": "00b47e44",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48e40",
      "incomplete_value": false,
      "site": "00b48e54",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47e4c",
      "incomplete_value": false,
      "site": "00b47e60",
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
            "const:76a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
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
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48e40",
      "PARAM",
      [
        "storage",
        "002bf76a",
        null,
        "string"
      ]
    ],
    [
      "00b48e5c",
      "WRITE",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48e30",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48e40",
      "PARAM",
      [
        "storage",
        "002bf848",
        null,
        "string"
      ]
    ],
    [
      "00b48e5c",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47e60 ["INT_ADD", "register:40f0:8", ["const:b47e60:8", "const:4:8"]]
- 00b47e60 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48e54 ["INT_ADD", "register:40f0:8", ["const:b48e54:8", "const:4:8"]]
+ 00b48e54 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47e68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:960:8"]]
- 00b47e68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48e5c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:920:8"]]
+ 00b48e5c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47e34 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b48e28 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-695c034d2f7ec5e763c77d667e911aaf"></a>

### [`00b47e98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47e98.md) → [`00b48e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48e8c.md) _ZN8firebase4util21asset_file_descriptor11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b48ea8",
      "incomplete_value": false,
      "site": "00b48eac",
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
      "definition_site": "00b47eb4",
      "incomplete_value": false,
      "site": "00b47eb8",
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
      "definition_site": "00b48eb8",
      "incomplete_value": true,
      "site": "00b48ec4",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b47ec4",
      "incomplete_value": true,
      "site": "00b47ed0",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b48ea8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b48eb8",
      "DATA",
      [
        "storage",
        "01125970",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b48ea8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b48eb8",
      "DATA",
      [
        "storage",
        "01126930",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47eb8 ["INT_ADD", "register:40f0:8", ["const:b47eb8:8", "const:4:8"]]
- 00b47eb8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b48eac ["INT_ADD", "register:40f0:8", ["const:b48eac:8", "const:4:8"]]
+ 00b48eac ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b47eb4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b47eb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b47eb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b47eb4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b48ea8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b48ea8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48ea8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48ea8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b47ebc ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b48eb0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-507107e726df47ff4e017c4dd9b60303"></a>

### [`00b47ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47ed4.md) → [`00b48ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48ec8.md) _ZN8firebase4util21asset_file_descriptor13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b48f08",
      "incomplete_value": true,
      "site": "00b48f08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47f14",
      "incomplete_value": true,
      "site": "00b47f14",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b48ee4",
      "incomplete_value": true,
      "site": "00b48ee4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47ef0",
      "incomplete_value": true,
      "site": "00b47ef0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48eec",
      "incomplete_value": false,
      "site": "00b48f00",
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
            "const:848:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47ef8",
      "incomplete_value": false,
      "site": "00b47f0c",
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
            "const:76a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48edc",
      "READ",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48eec",
      "PARAM",
      [
        "storage",
        "002bf76a",
        null,
        "string"
      ]
    ],
    [
      "00b48f08",
      "WRITE",
      [
        "storage",
        "01125960",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b48edc",
      "READ",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48eec",
      "PARAM",
      [
        "storage",
        "002bf848",
        null,
        "string"
      ]
    ],
    [
      "00b48f08",
      "WRITE",
      [
        "storage",
        "01126920",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47f0c ["INT_ADD", "register:40f0:8", ["const:b47f0c:8", "const:4:8"]]
- 00b47f0c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48f00 ["INT_ADD", "register:40f0:8", ["const:b48f00:8", "const:4:8"]]
+ 00b48f00 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47f14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:960:8"]]
- 00b47f14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48f08 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:920:8"]]
+ 00b48f08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47ee0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b48ed4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-c3555d9be44c253827a34c6411b8255a"></a>

### [`00b47f44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47f44.md) → [`00b48f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48f38.md) _ZN8firebase4util21asset_file_descriptor10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b48f54",
      "incomplete_value": false,
      "site": "00b48f58",
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
      "definition_site": "00b47f60",
      "incomplete_value": false,
      "site": "00b47f64",
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
      "definition_site": "00b48f64",
      "incomplete_value": true,
      "site": "00b48f70",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b47f70",
      "incomplete_value": true,
      "site": "00b47f7c",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b48f54",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b48f64",
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
      "00b48f54",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b48f64",
      "DATA",
      [
        "storage",
        "01126938",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47f64 ["INT_ADD", "register:40f0:8", ["const:b47f64:8", "const:4:8"]]
- 00b47f64 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b48f58 ["INT_ADD", "register:40f0:8", ["const:b48f58:8", "const:4:8"]]
+ 00b48f58 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b47f60 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b47f60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b47f60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b47f60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b48f54 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b48f54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48f54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b48f54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b47f68 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b48f5c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-2c82fb58be67f1581a82fea6497ee467"></a>

### [`00b47f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47f80.md) → [`00b48f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48f74.md) _ZN8firebase4util13boolean_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00b48fa0",
      "incomplete_value": true,
      "site": "00b48fa0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47fac",
      "incomplete_value": true,
      "site": "00b47fac",
      "value": [
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
      "definition_site": "00b48f88",
      "incomplete_value": true,
      "site": "00b48f88",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47f94",
      "incomplete_value": true,
      "site": "00b47f94",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48f94",
      "incomplete_value": false,
      "site": "00b48f98",
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
            "const:4f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47fa0",
      "incomplete_value": false,
      "site": "00b47fa4",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48f84",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48f94",
      "PARAM",
      [
        "storage",
        "002a83a0",
        null,
        "string"
      ]
    ],
    [
      "00b48fa0",
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
      "00b48f84",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48f94",
      "PARAM",
      [
        "storage",
        "002a84f8",
        null,
        "string"
      ]
    ],
    [
      "00b48fa0",
      "WRITE",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47fa4 ["INT_ADD", "register:40f0:8", ["const:b47fa4:8", "const:4:8"]]
- 00b47fa4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48f98 ["INT_ADD", "register:40f0:8", ["const:b48f98:8", "const:4:8"]]
+ 00b48f98 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47fac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b47fac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48fa0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:940:8"]]
+ 00b48fa0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47f8c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48f80 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-cf331f0b30acb59ee672b0a2fec87447"></a>

### [`00b47fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b47/00b47fc0.md) → [`00b48fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48fb4.md) _ZN8firebase4util13boolean_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EE

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
      "definition_site": "00b48fe0",
      "incomplete_value": true,
      "site": "00b48fe0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47fec",
      "incomplete_value": true,
      "site": "00b47fec",
      "value": [
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
      "definition_site": "00b48fc8",
      "incomplete_value": true,
      "site": "00b48fc8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47fd4",
      "incomplete_value": true,
      "site": "00b47fd4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b48fd0",
      "incomplete_value": false,
      "site": "00b48fd8",
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
            "const:4f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b47fdc",
      "incomplete_value": false,
      "site": "00b47fe4",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b48fc4",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48fd0",
      "PARAM",
      [
        "storage",
        "002a83a0",
        null,
        "string"
      ]
    ],
    [
      "00b48fe0",
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
      "00b48fc4",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b48fd0",
      "PARAM",
      [
        "storage",
        "002a84f8",
        null,
        "string"
      ]
    ],
    [
      "00b48fe0",
      "WRITE",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b47fe4 ["INT_ADD", "register:40f0:8", ["const:b47fe4:8", "const:4:8"]]
- 00b47fe4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b48fd8 ["INT_ADD", "register:40f0:8", ["const:b48fd8:8", "const:4:8"]]
+ 00b48fd8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b47fec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b47fec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b48fe0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:940:8"]]
+ 00b48fe0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b47fcc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b48fc0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-07c322b6ac2a5c60cb0999d628dccb6c"></a>

### [`00b48000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48000.md) → [`00b48ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b48/00b48ff4.md) _ZN8firebase4util13boolean_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b49024",
      "incomplete_value": true,
      "site": "00b49024",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48030",
      "incomplete_value": true,
      "site": "00b48030",
      "value": [
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
      "definition_site": "00b49008",
      "incomplete_value": true,
      "site": "00b49008",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48014",
      "incomplete_value": true,
      "site": "00b48014",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49014",
      "incomplete_value": false,
      "site": "00b4901c",
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
            "const:4f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48020",
      "incomplete_value": false,
      "site": "00b48028",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49004",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49014",
      "PARAM",
      [
        "storage",
        "002a83a0",
        null,
        "string"
      ]
    ],
    [
      "00b49024",
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
      "00b49004",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49014",
      "PARAM",
      [
        "storage",
        "002a84f8",
        null,
        "string"
      ]
    ],
    [
      "00b49024",
      "WRITE",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48028 ["INT_ADD", "register:40f0:8", ["const:b48028:8", "const:4:8"]]
- 00b48028 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4901c ["INT_ADD", "register:40f0:8", ["const:b4901c:8", "const:4:8"]]
+ 00b4901c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48030 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b48030 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49024 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:940:8"]]
+ 00b49024 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4800c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49000 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-141a99a16c5c1bb2bc06d027eec5bac1"></a>

### [`00b48044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48044.md) → [`00b49038`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49038.md) _ZN8firebase4util13boolean_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49068",
      "incomplete_value": true,
      "site": "00b49068",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48074",
      "incomplete_value": true,
      "site": "00b48074",
      "value": [
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
      "definition_site": "00b4904c",
      "incomplete_value": true,
      "site": "00b4904c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48058",
      "incomplete_value": true,
      "site": "00b48058",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49054",
      "incomplete_value": false,
      "site": "00b49060",
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
            "const:4f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48060",
      "incomplete_value": false,
      "site": "00b4806c",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49048",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49054",
      "PARAM",
      [
        "storage",
        "002a83a0",
        null,
        "string"
      ]
    ],
    [
      "00b49068",
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
      "00b49048",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49054",
      "PARAM",
      [
        "storage",
        "002a84f8",
        null,
        "string"
      ]
    ],
    [
      "00b49068",
      "WRITE",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4806c ["INT_ADD", "register:40f0:8", ["const:b4806c:8", "const:4:8"]]
- 00b4806c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49060 ["INT_ADD", "register:40f0:8", ["const:b49060:8", "const:4:8"]]
+ 00b49060 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48074 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:980:8"]]
- 00b48074 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49068 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:940:8"]]
+ 00b49068 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48050 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49044 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-87fe23b52cf01aa7e5698478caa9d3c4"></a>

### [`00b48094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48094.md) → [`00b49088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49088.md) _ZN8firebase4util13boolean_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b49110",
      "incomplete_value": true,
      "site": "00b49110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:948:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4811c",
      "incomplete_value": true,
      "site": "00b4811c",
      "value": [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b490bc",
      "incomplete_value": true,
      "site": "00b490c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b480c8",
      "incomplete_value": true,
      "site": "00b480d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b4909c",
      "READ",
      [
        "storage",
        "01125988",
        null,
        "undefined1"
      ]
    ],
    [
      "00b490bc",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49110",
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
      "00b4909c",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined1"
      ]
    ],
    [
      "00b490bc",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49110",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b480d4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b480d4 ["INT_ADD", "register:40f0:8", ["const:b480d4:8", "const:4:8"]]
- 00b480d4 ["CALLIND", null, ["register:0:8"]]
+ 00b490c8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b490c8 ["INT_ADD", "register:40f0:8", ["const:b490c8:8", "const:4:8"]]
+ 00b490c8 ["CALLIND", null, ["register:0:8"]]
- 00b4811c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4811c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:988:8"]]
- 00b4811c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b49110 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b49110 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:948:8"]]
+ 00b49110 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b480a4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b49098 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-610d608a0fa1bfa3092c37b27ef09ebf"></a>

### [`00b48130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48130.md) → [`00b49124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49124.md) _ZN8firebase4util13boolean_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b49160",
      "incomplete_value": true,
      "site": "00b49160",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:948:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4816c",
      "incomplete_value": true,
      "site": "00b4816c",
      "value": [
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
      "definition_site": "00b491b0",
      "incomplete_value": true,
      "site": "00b491b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b481bc",
      "incomplete_value": true,
      "site": "00b481bc",
      "value": [
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
      "definition_site": "00b4913c",
      "incomplete_value": true,
      "site": "00b4913c",
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
      "definition_site": "00b48148",
      "incomplete_value": true,
      "site": "00b48148",
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
      "00b49138",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49144",
      "READ",
      [
        "storage",
        "01125988",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49160",
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
      "00b49138",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49144",
      "READ",
      [
        "storage",
        "01126948",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49160",
      "WRITE",
      [
        "storage",
        "01126948",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4816c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4816c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4816c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:988:8"]]
- 00b4816c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b49160 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b49160 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b49160 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:948:8"]]
+ 00b49160 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b481b8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b481b8 ["INT_ADD", "register:40f0:8", ["const:b481b8:8", "const:4:8"]]
- 00b481b8 ["CALLIND", null, ["register:0:8"]]
+ 00b491ac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b491ac ["INT_ADD", "register:40f0:8", ["const:b491ac:8", "const:4:8"]]
+ 00b491ac ["CALLIND", null, ["register:0:8"]]
- 00b481bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:980:8"]]
- 00b481bc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b481bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b491b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:940:8"]]
+ 00b491b0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b491b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-12724be6433ddb496461409c589caf4c"></a>

### [`00b481d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b481d0.md) → [`00b491c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b491c4.md) _ZN8firebase4util13boolean_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49204",
      "incomplete_value": true,
      "site": "00b49204",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48210",
      "incomplete_value": true,
      "site": "00b48210",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b491e0",
      "incomplete_value": true,
      "site": "00b491e0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b481ec",
      "incomplete_value": true,
      "site": "00b481ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
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
      "site": "00b491fc",
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
            "const:4f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b481f4",
      "incomplete_value": false,
      "site": "00b48208",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
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
        "002a83a0",
        null,
        "string"
      ]
    ],
    [
      "00b49204",
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
        "01126940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b491e8",
      "PARAM",
      [
        "storage",
        "002a84f8",
        null,
        "string"
      ]
    ],
    [
      "00b49204",
      "WRITE",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48208 ["INT_ADD", "register:40f0:8", ["const:b48208:8", "const:4:8"]]
- 00b48208 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b491fc ["INT_ADD", "register:40f0:8", ["const:b491fc:8", "const:4:8"]]
+ 00b491fc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48210 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:980:8"]]
- 00b48210 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49204 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:940:8"]]
+ 00b49204 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b481dc ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b491d0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-25fdc1c262d66e3110084b809eb4d989"></a>

### [`00b48240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48240.md) → [`00b49234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49234.md) _ZN8firebase4util13boolean_class11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b390.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c360`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c360.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49250",
      "incomplete_value": false,
      "site": "00b49254",
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
      "definition_site": "00b4825c",
      "incomplete_value": false,
      "site": "00b48260",
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
      "definition_site": "00b49260",
      "incomplete_value": true,
      "site": "00b4926c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4826c",
      "incomplete_value": true,
      "site": "00b48278",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b49250",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b49260",
      "DATA",
      [
        "storage",
        "01125990",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49250",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b49260",
      "DATA",
      [
        "storage",
        "01126950",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48260 ["INT_ADD", "register:40f0:8", ["const:b48260:8", "const:4:8"]]
- 00b48260 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b49254 ["INT_ADD", "register:40f0:8", ["const:b49254:8", "const:4:8"]]
+ 00b49254 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4825c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4825c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4825c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4825c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b49250 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b49250 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49250 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49250 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b48264 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b49258 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-c03b68c27245ab9c074e418c2c1b057a"></a>

### [`00b4827c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b4827c.md) → [`00b49270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49270.md) _ZN8firebase4util13boolean_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b492b0",
      "incomplete_value": true,
      "site": "00b492b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:940:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b482bc",
      "incomplete_value": true,
      "site": "00b482bc",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4928c",
      "incomplete_value": true,
      "site": "00b4928c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48298",
      "incomplete_value": true,
      "site": "00b48298",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49294",
      "incomplete_value": false,
      "site": "00b492a8",
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
            "const:4f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b482a0",
      "incomplete_value": false,
      "site": "00b482b4",
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
            "const:3a0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49284",
      "READ",
      [
        "storage",
        "01125980",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49294",
      "PARAM",
      [
        "storage",
        "002a83a0",
        null,
        "string"
      ]
    ],
    [
      "00b492b0",
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
      "00b49284",
      "READ",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49294",
      "PARAM",
      [
        "storage",
        "002a84f8",
        null,
        "string"
      ]
    ],
    [
      "00b492b0",
      "WRITE",
      [
        "storage",
        "01126940",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b482b4 ["INT_ADD", "register:40f0:8", ["const:b482b4:8", "const:4:8"]]
- 00b482b4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b492a8 ["INT_ADD", "register:40f0:8", ["const:b492a8:8", "const:4:8"]]
+ 00b492a8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b482bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:980:8"]]
- 00b482bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b492b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:940:8"]]
+ 00b492b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48288 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4927c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-d030f36c441c9b6dd0ca8702e659495b"></a>

### [`00b482ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b482ec.md) → [`00b492e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b492e0.md) _ZN8firebase4util13boolean_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b492fc",
      "incomplete_value": false,
      "site": "00b49300",
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
      "definition_site": "00b48308",
      "incomplete_value": false,
      "site": "00b4830c",
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
      "definition_site": "00b4930c",
      "incomplete_value": true,
      "site": "00b49318",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b48318",
      "incomplete_value": true,
      "site": "00b48324",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b492fc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4930c",
      "DATA",
      [
        "storage",
        "011259a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b492fc",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4930c",
      "DATA",
      [
        "storage",
        "01126960",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4830c ["INT_ADD", "register:40f0:8", ["const:b4830c:8", "const:4:8"]]
- 00b4830c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b49300 ["INT_ADD", "register:40f0:8", ["const:b49300:8", "const:4:8"]]
+ 00b49300 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b48308 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b48308 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b48308 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b48308 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b492fc ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b492fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b492fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b492fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b48310 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b49304 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-a8ced8c8abaf369fc4124e7d217501cc"></a>

### [`00b48328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48328.md) → [`00b4931c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b4931c.md) _ZN8firebase4util6bundle19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16

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
      "definition_site": "00b49348",
      "incomplete_value": true,
      "site": "00b49348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48354",
      "incomplete_value": true,
      "site": "00b48354",
      "value": [
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
      "definition_site": "00b49330",
      "incomplete_value": true,
      "site": "00b49330",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4833c",
      "incomplete_value": true,
      "site": "00b4833c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4933c",
      "incomplete_value": false,
      "site": "00b49340",
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
            "const:a25:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48348",
      "incomplete_value": false,
      "site": "00b4834c",
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
            "const:947:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4932c",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4933c",
      "PARAM",
      [
        "storage",
        "002b9947",
        null,
        "string"
      ]
    ],
    [
      "00b49348",
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
      "00b4932c",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4933c",
      "PARAM",
      [
        "storage",
        "002b9a25",
        null,
        "string"
      ]
    ],
    [
      "00b49348",
      "WRITE",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4834c ["INT_ADD", "register:40f0:8", ["const:b4834c:8", "const:4:8"]]
- 00b4834c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49340 ["INT_ADD", "register:40f0:8", ["const:b49340:8", "const:4:8"]]
+ 00b49340 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48354 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b48354 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49348 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00b49348 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48334 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49328 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


