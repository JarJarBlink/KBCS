# v16.0.2 → v16.0.3 · 最優先の変更候補 (86)

[一覧の目次](README.md)

<a id="compare-bb3be0789df8b46029c5291d693ccd1b"></a>

### [`00b48368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48368.md) → [`00b4935c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b4935c.md) _ZN8firebase4util6bundle19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b49388",
      "incomplete_value": true,
      "site": "00b49388",
      "value": [
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
      "definition_site": "00b48394",
      "incomplete_value": true,
      "site": "00b48394",
      "value": [
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
      "definition_site": "00b49370",
      "incomplete_value": true,
      "site": "00b49370",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4837c",
      "incomplete_value": true,
      "site": "00b4837c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b4837c"
      ],
      [
        "FALL_THROUGH",
        "00b49370"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b49370",
      "incomplete_value": true,
      "site": "00b49388",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4837c",
      "incomplete_value": true,
      "site": "00b48394",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b4936c",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49378",
      "PARAM",
      [
        "storage",
        "002b9947",
        null,
        "string"
      ]
    ],
    [
      "00b49388",
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
      "00b4936c",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49378",
      "PARAM",
      [
        "storage",
        "002b9a25",
        null,
        "string"
      ]
    ],
    [
      "00b49388",
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
- 00b48394 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b48394 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49388 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00b49388 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48374 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49368 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b48378 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b48378 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4936c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00b4936c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-68fd4f16e5c9609c3ccdc4aede8aa46c"></a>

### [`00b483a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b483a8.md) → [`00b4939c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b4939c.md) _ZN8firebase4util6bundle10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b493cc",
      "incomplete_value": true,
      "site": "00b493cc",
      "value": [
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
      "definition_site": "00b483d8",
      "incomplete_value": true,
      "site": "00b483d8",
      "value": [
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
      "definition_site": "00b493b0",
      "incomplete_value": true,
      "site": "00b493b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b483bc",
      "incomplete_value": true,
      "site": "00b483bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b493bc",
      "incomplete_value": false,
      "site": "00b493c4",
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
      "definition_site": "00b483c8",
      "incomplete_value": false,
      "site": "00b483d0",
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
      "00b493ac",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b493bc",
      "PARAM",
      [
        "storage",
        "002b9947",
        null,
        "string"
      ]
    ],
    [
      "00b493cc",
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
      "00b493ac",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b493bc",
      "PARAM",
      [
        "storage",
        "002b9a25",
        null,
        "string"
      ]
    ],
    [
      "00b493cc",
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
- 00b483d0 ["INT_ADD", "register:40f0:8", ["const:b483d0:8", "const:4:8"]]
- 00b483d0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b493c4 ["INT_ADD", "register:40f0:8", ["const:b493c4:8", "const:4:8"]]
+ 00b493c4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b483d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b483d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b493cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00b493cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b483b4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b493a8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-83bb79b4334b5bd7f10c233531e00b3c"></a>

### [`00b483ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b483ec.md) → [`00b493e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b493e0.md) _ZN8firebase4util6bundle10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49410",
      "incomplete_value": true,
      "site": "00b49410",
      "value": [
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
      "definition_site": "00b4841c",
      "incomplete_value": true,
      "site": "00b4841c",
      "value": [
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
      "definition_site": "00b493f4",
      "incomplete_value": true,
      "site": "00b493f4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48400",
      "incomplete_value": true,
      "site": "00b48400",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b493fc",
      "incomplete_value": false,
      "site": "00b49408",
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
      "definition_site": "00b48408",
      "incomplete_value": false,
      "site": "00b48414",
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
      "00b493f0",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b493fc",
      "PARAM",
      [
        "storage",
        "002b9947",
        null,
        "string"
      ]
    ],
    [
      "00b49410",
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
      "00b493f0",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b493fc",
      "PARAM",
      [
        "storage",
        "002b9a25",
        null,
        "string"
      ]
    ],
    [
      "00b49410",
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
- 00b48414 ["INT_ADD", "register:40f0:8", ["const:b48414:8", "const:4:8"]]
- 00b48414 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49408 ["INT_ADD", "register:40f0:8", ["const:b49408:8", "const:4:8"]]
+ 00b49408 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4841c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9a8:8"]]
- 00b4841c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49410 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:968:8"]]
+ 00b49410 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b483f8 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b493ec ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-aa8cb4d4aa4bca4acc1c3cf86f6cef09"></a>

### [`00b4843c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b4843c.md) → [`00b49430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49430.md) _ZN8firebase4util6bundle15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b494b8",
      "incomplete_value": true,
      "site": "00b494b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b484c4",
      "incomplete_value": true,
      "site": "00b484c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:9b0:8"
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
      "definition_site": "00b49464",
      "incomplete_value": true,
      "site": "00b49470",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:968:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48470",
      "incomplete_value": true,
      "site": "00b4847c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9a8:8"
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
      "00b49444",
      "READ",
      [
        "storage",
        "011259b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49464",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b494b8",
      "WRITE",
      [
        "storage",
        "011259b0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49444",
      "READ",
      [
        "storage",
        "01126970",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49464",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b494b8",
      "WRITE",
      [
        "storage",
        "01126970",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4847c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4847c ["INT_ADD", "register:40f0:8", ["const:b4847c:8", "const:4:8"]]
- 00b4847c ["CALLIND", null, ["register:0:8"]]
+ 00b49470 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49470 ["INT_ADD", "register:40f0:8", ["const:b49470:8", "const:4:8"]]
+ 00b49470 ["CALLIND", null, ["register:0:8"]]
- 00b484c4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b484c4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9b0:8"]]
- 00b484c4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b494b8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b494b8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:970:8"]]
+ 00b494b8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4844c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b49440 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-a2bff687aa8a786cb4da7172e879a3a1"></a>

### [`00b484d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b484d8.md) → [`00b494cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b494cc.md) _ZN8firebase4util6bundle12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b49508",
      "incomplete_value": true,
      "site": "00b49508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:970:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48514",
      "incomplete_value": true,
      "site": "00b48514",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:9b0:8"
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
      "definition_site": "00b49558",
      "incomplete_value": true,
      "site": "00b49558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48564",
      "incomplete_value": true,
      "site": "00b48564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9a8:8"
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
      "definition_site": "00b494e4",
      "incomplete_value": true,
      "site": "00b494e4",
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
      "definition_site": "00b484f0",
      "incomplete_value": true,
      "site": "00b484f0",
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
      "00b494e0",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b494ec",
      "READ",
      [
        "storage",
        "011259b0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49508",
      "WRITE",
      [
        "storage",
        "011259b0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b494e0",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b494ec",
      "READ",
      [
        "storage",
        "01126970",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49508",
      "WRITE",
      [
        "storage",
        "01126970",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48514 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b48514 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b48514 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9b0:8"]]
- 00b48514 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b49508 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b49508 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b49508 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:970:8"]]
+ 00b49508 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b48560 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48560 ["INT_ADD", "register:40f0:8", ["const:b48560:8", "const:4:8"]]
- 00b48560 ["CALLIND", null, ["register:0:8"]]
+ 00b49554 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49554 ["INT_ADD", "register:40f0:8", ["const:b49554:8", "const:4:8"]]
+ 00b49554 ["CALLIND", null, ["register:0:8"]]
- 00b48564 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00b48564 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b48564 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b49558 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
+ 00b49558 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b49558 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-9fb046757eb7a480336a915dd6a47f14"></a>

### [`00b48578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48578.md) → [`00b4956c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b4956c.md) _ZN8firebase4util6bundle14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b495ac",
      "incomplete_value": true,
      "site": "00b495ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b485b8",
      "incomplete_value": true,
      "site": "00b485b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9a8:8"
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
      "definition_site": "00b49588",
      "incomplete_value": true,
      "site": "00b49588",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48594",
      "incomplete_value": true,
      "site": "00b48594",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49590",
      "incomplete_value": false,
      "site": "00b495a4",
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
      "definition_site": "00b4859c",
      "incomplete_value": false,
      "site": "00b485b0",
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
      "00b49580",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49590",
      "PARAM",
      [
        "storage",
        "002b9947",
        null,
        "string"
      ]
    ],
    [
      "00b495ac",
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
      "00b49580",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49590",
      "PARAM",
      [
        "storage",
        "002b9a25",
        null,
        "string"
      ]
    ],
    [
      "00b495ac",
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
- 00b485b0 ["INT_ADD", "register:40f0:8", ["const:b485b0:8", "const:4:8"]]
- 00b485b0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b495a4 ["INT_ADD", "register:40f0:8", ["const:b495a4:8", "const:4:8"]]
+ 00b495a4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b485b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00b485b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b495ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
+ 00b495ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48584 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b49578 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-03449f1d223d3cd92c2199d35f964b69"></a>

### [`00b485e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b485e8.md) → [`00b495dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b495dc.md) _ZN8firebase4util6bundle11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b060`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b060.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c030.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b495f8",
      "incomplete_value": false,
      "site": "00b495fc",
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
      "definition_site": "00b48604",
      "incomplete_value": false,
      "site": "00b48608",
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
      "definition_site": "00b49608",
      "incomplete_value": true,
      "site": "00b49614",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b48614",
      "incomplete_value": true,
      "site": "00b48620",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b495f8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b49608",
      "DATA",
      [
        "storage",
        "011259b8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b495f8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b49608",
      "DATA",
      [
        "storage",
        "01126978",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48608 ["INT_ADD", "register:40f0:8", ["const:b48608:8", "const:4:8"]]
- 00b48608 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b495fc ["INT_ADD", "register:40f0:8", ["const:b495fc:8", "const:4:8"]]
+ 00b495fc ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b48604 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b48604 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b48604 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b48604 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b495f8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b495f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b495f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b495f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4860c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b49600 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-05d3fb236086332f6c8480f6d94b8f29"></a>

### [`00b48624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48624.md) → [`00b49618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49618.md) _ZN8firebase4util6bundle13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49658",
      "incomplete_value": true,
      "site": "00b49658",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:968:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48664",
      "incomplete_value": true,
      "site": "00b48664",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9a8:8"
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
      "definition_site": "00b49634",
      "incomplete_value": true,
      "site": "00b49634",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48640",
      "incomplete_value": true,
      "site": "00b48640",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4963c",
      "incomplete_value": false,
      "site": "00b49650",
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
      "definition_site": "00b48648",
      "incomplete_value": false,
      "site": "00b4865c",
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
      "00b4962c",
      "READ",
      [
        "storage",
        "011259a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4963c",
      "PARAM",
      [
        "storage",
        "002b9947",
        null,
        "string"
      ]
    ],
    [
      "00b49658",
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
      "00b4962c",
      "READ",
      [
        "storage",
        "01126968",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4963c",
      "PARAM",
      [
        "storage",
        "002b9a25",
        null,
        "string"
      ]
    ],
    [
      "00b49658",
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
- 00b4865c ["INT_ADD", "register:40f0:8", ["const:b4865c:8", "const:4:8"]]
- 00b4865c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49650 ["INT_ADD", "register:40f0:8", ["const:b49650:8", "const:4:8"]]
+ 00b49650 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48664 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9a8:8"]]
- 00b48664 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49658 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:968:8"]]
+ 00b49658 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48630 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b49624 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-c59d3a409e2ef180a71cfa106211c6de"></a>

### [`00b48694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48694.md) → [`00b49688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49688.md) _ZN8firebase4util6bundle10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b496a4",
      "incomplete_value": false,
      "site": "00b496a8",
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
      "definition_site": "00b486b0",
      "incomplete_value": false,
      "site": "00b486b4",
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
      "definition_site": "00b496b4",
      "incomplete_value": true,
      "site": "00b496c0",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b486c0",
      "incomplete_value": true,
      "site": "00b486cc",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b496a4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b496b4",
      "DATA",
      [
        "storage",
        "01125a00",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b496a4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b496b4",
      "DATA",
      [
        "storage",
        "011269c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b486b4 ["INT_ADD", "register:40f0:8", ["const:b486b4:8", "const:4:8"]]
- 00b486b4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b496a8 ["INT_ADD", "register:40f0:8", ["const:b496a8:8", "const:4:8"]]
+ 00b496a8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b486b0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b486b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b486b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b486b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b496a4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b496a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b496a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b496a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b486b8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b496ac ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-543e0adedbabe7d3fc2d663afa03bba7"></a>

### [`00b486d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b486d0.md) → [`00b496c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b496c4.md) _ZN8firebase4util10byte_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00b496f0",
      "incomplete_value": true,
      "site": "00b496f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b486fc",
      "incomplete_value": true,
      "site": "00b486fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "definition_site": "00b496d8",
      "incomplete_value": true,
      "site": "00b496d8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b486e4",
      "incomplete_value": true,
      "site": "00b486e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b496e4",
      "incomplete_value": false,
      "site": "00b496e8",
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
            "const:143:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b486f0",
      "incomplete_value": false,
      "site": "00b486f4",
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
            "const:feb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b496d4",
      "READ",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b496e4",
      "PARAM",
      [
        "storage",
        "002a5feb",
        null,
        "string"
      ]
    ],
    [
      "00b496f0",
      "WRITE",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b496d4",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b496e4",
      "PARAM",
      [
        "storage",
        "002a6143",
        null,
        "string"
      ]
    ],
    [
      "00b496f0",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b486f4 ["INT_ADD", "register:40f0:8", ["const:b486f4:8", "const:4:8"]]
- 00b486f4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b496e8 ["INT_ADD", "register:40f0:8", ["const:b496e8:8", "const:4:8"]]
+ 00b496e8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b486fc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00b486fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b496f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00b496f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b486dc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b496d0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-cda19ea4737d0832db799d3dfb10a793"></a>

### [`00b48710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48710.md) → [`00b49704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49704.md) _ZN8firebase4util10byte_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b49730",
      "incomplete_value": true,
      "site": "00b49730",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4873c",
      "incomplete_value": true,
      "site": "00b4873c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "definition_site": "00b49718",
      "incomplete_value": true,
      "site": "00b49718",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48724",
      "incomplete_value": true,
      "site": "00b48724",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49720",
      "incomplete_value": false,
      "site": "00b49728",
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
            "const:143:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4872c",
      "incomplete_value": false,
      "site": "00b48734",
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
            "const:feb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49714",
      "READ",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49720",
      "PARAM",
      [
        "storage",
        "002a5feb",
        null,
        "string"
      ]
    ],
    [
      "00b49730",
      "WRITE",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49714",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49720",
      "PARAM",
      [
        "storage",
        "002a6143",
        null,
        "string"
      ]
    ],
    [
      "00b49730",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48734 ["INT_ADD", "register:40f0:8", ["const:b48734:8", "const:4:8"]]
- 00b48734 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49728 ["INT_ADD", "register:40f0:8", ["const:b49728:8", "const:4:8"]]
+ 00b49728 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4873c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00b4873c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49730 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00b49730 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4871c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49710 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-c5b02955ae167562f53db50a80708512"></a>

### [`00b48750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48750.md) → [`00b49744`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49744.md) _ZN8firebase4util10byte_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b49774",
      "incomplete_value": true,
      "site": "00b49774",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48780",
      "incomplete_value": true,
      "site": "00b48780",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "definition_site": "00b49758",
      "incomplete_value": true,
      "site": "00b49758",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48764",
      "incomplete_value": true,
      "site": "00b48764",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49764",
      "incomplete_value": false,
      "site": "00b4976c",
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
            "const:143:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48770",
      "incomplete_value": false,
      "site": "00b48778",
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
            "const:feb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49754",
      "READ",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49764",
      "PARAM",
      [
        "storage",
        "002a5feb",
        null,
        "string"
      ]
    ],
    [
      "00b49774",
      "WRITE",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49754",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49764",
      "PARAM",
      [
        "storage",
        "002a6143",
        null,
        "string"
      ]
    ],
    [
      "00b49774",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48778 ["INT_ADD", "register:40f0:8", ["const:b48778:8", "const:4:8"]]
- 00b48778 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4976c ["INT_ADD", "register:40f0:8", ["const:b4976c:8", "const:4:8"]]
+ 00b4976c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48780 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00b48780 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49774 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00b49774 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4875c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49750 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-37e677a35333c8c27c7ee386802aaeb4"></a>

### [`00b48794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48794.md) → [`00b49788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49788.md) _ZN8firebase4util10byte_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b497b8",
      "incomplete_value": true,
      "site": "00b497b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b487c4",
      "incomplete_value": true,
      "site": "00b487c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "definition_site": "00b4979c",
      "incomplete_value": true,
      "site": "00b4979c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b487a8",
      "incomplete_value": true,
      "site": "00b487a8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b497a4",
      "incomplete_value": false,
      "site": "00b497b0",
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
            "const:143:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b487b0",
      "incomplete_value": false,
      "site": "00b487bc",
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
            "const:feb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49798",
      "READ",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b497a4",
      "PARAM",
      [
        "storage",
        "002a5feb",
        null,
        "string"
      ]
    ],
    [
      "00b497b8",
      "WRITE",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49798",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b497a4",
      "PARAM",
      [
        "storage",
        "002a6143",
        null,
        "string"
      ]
    ],
    [
      "00b497b8",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b487bc ["INT_ADD", "register:40f0:8", ["const:b487bc:8", "const:4:8"]]
- 00b487bc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b497b0 ["INT_ADD", "register:40f0:8", ["const:b497b0:8", "const:4:8"]]
+ 00b497b0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b487c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a08:8"]]
- 00b487c4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b497b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9c8:8"]]
+ 00b497b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b487a0 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49794 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-5e209aa05de27edcf2cea46954df452e"></a>

### [`00b487e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b487e4.md) → [`00b497d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b497d8.md) _ZN8firebase4util10byte_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b49860",
      "incomplete_value": true,
      "site": "00b49860",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4886c",
      "incomplete_value": true,
      "site": "00b4886c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a10:8"
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
      "definition_site": "00b4980c",
      "incomplete_value": true,
      "site": "00b49818",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48818",
      "incomplete_value": true,
      "site": "00b48824",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a08:8"
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
      "00b497ec",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4980c",
      "READ",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49860",
      "WRITE",
      [
        "storage",
        "01125a10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b497ec",
      "READ",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4980c",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49860",
      "WRITE",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48824 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48824 ["INT_ADD", "register:40f0:8", ["const:b48824:8", "const:4:8"]]
- 00b48824 ["CALLIND", null, ["register:0:8"]]
+ 00b49818 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49818 ["INT_ADD", "register:40f0:8", ["const:b49818:8", "const:4:8"]]
+ 00b49818 ["CALLIND", null, ["register:0:8"]]
- 00b4886c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4886c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a10:8"]]
- 00b4886c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b49860 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b49860 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9d0:8"]]
+ 00b49860 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b487f4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b497e8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-80cabe8e24e3ed5570fed3e7ae029f36"></a>

### [`00b48880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48880.md) → [`00b49874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49874.md) _ZN8firebase4util10byte_class12ReleaseClassEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_value, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b498b0",
      "incomplete_value": true,
      "site": "00b498b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:9d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b488bc",
      "incomplete_value": true,
      "site": "00b488bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a10:8"
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
      "definition_site": "00b49900",
      "incomplete_value": true,
      "site": "00b49900",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4890c",
      "incomplete_value": true,
      "site": "00b4890c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "definition_site": "00b4988c",
      "incomplete_value": true,
      "site": "00b4988c",
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
      "definition_site": "00b48898",
      "incomplete_value": true,
      "site": "00b48898",
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
      "00b49888",
      "READ",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49894",
      "READ",
      [
        "storage",
        "01125a10",
        null,
        "undefined1"
      ]
    ],
    [
      "00b498b0",
      "WRITE",
      [
        "storage",
        "01125a10",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49888",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49894",
      "READ",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b498b0",
      "WRITE",
      [
        "storage",
        "011269d0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b488bc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b488bc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b488bc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a10:8"]]
- 00b488bc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b498b0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b498b0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b498b0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9d0:8"]]
+ 00b498b0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4890c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00b4890c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4890c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b49900 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
+ 00b49900 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b49900 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00b48890 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b49884 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-9cdd8e4a6e44d0cbda05976229e1865e"></a>

### [`00b48920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48920.md) → [`00b49914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49914.md) _ZN8firebase4util10byte_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49954",
      "incomplete_value": true,
      "site": "00b49954",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48960",
      "incomplete_value": true,
      "site": "00b48960",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "definition_site": "00b49930",
      "incomplete_value": true,
      "site": "00b49930",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4893c",
      "incomplete_value": true,
      "site": "00b4893c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49938",
      "incomplete_value": false,
      "site": "00b4994c",
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
            "const:143:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48944",
      "incomplete_value": false,
      "site": "00b48958",
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
            "const:feb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49928",
      "READ",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49938",
      "PARAM",
      [
        "storage",
        "002a5feb",
        null,
        "string"
      ]
    ],
    [
      "00b49954",
      "WRITE",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49928",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49938",
      "PARAM",
      [
        "storage",
        "002a6143",
        null,
        "string"
      ]
    ],
    [
      "00b49954",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48958 ["INT_ADD", "register:40f0:8", ["const:b48958:8", "const:4:8"]]
- 00b48958 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4994c ["INT_ADD", "register:40f0:8", ["const:b4994c:8", "const:4:8"]]
+ 00b4994c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48960 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00b48960 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49954 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
+ 00b49954 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4892c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b49920 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-498262baeebe38c2da34d744ba10ac48"></a>

### [`00b48990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48990.md) → [`00b49984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49984.md) _ZN8firebase4util10byte_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b499a0",
      "incomplete_value": false,
      "site": "00b499a4",
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
      "definition_site": "00b489ac",
      "incomplete_value": false,
      "site": "00b489b0",
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
      "definition_site": "00b499b0",
      "incomplete_value": true,
      "site": "00b499bc",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b489bc",
      "incomplete_value": true,
      "site": "00b489c8",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b499a0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b499b0",
      "DATA",
      [
        "storage",
        "01125a18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b499a0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b499b0",
      "DATA",
      [
        "storage",
        "011269d8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b489b0 ["INT_ADD", "register:40f0:8", ["const:b489b0:8", "const:4:8"]]
- 00b489b0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b499a4 ["INT_ADD", "register:40f0:8", ["const:b499a4:8", "const:4:8"]]
+ 00b499a4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b489ac ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b489ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b489ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b489ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b499a0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b499a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b499a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b499a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b489b4 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b499a8 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-12366a0b4cf63ef73a6b92e1911c6679"></a>

### [`00b489cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b489cc.md) → [`00b499c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b499c0.md) _ZN8firebase4util10byte_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49a00",
      "incomplete_value": true,
      "site": "00b49a00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48a0c",
      "incomplete_value": true,
      "site": "00b48a0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "definition_site": "00b499dc",
      "incomplete_value": true,
      "site": "00b499dc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b489e8",
      "incomplete_value": true,
      "site": "00b489e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b499e4",
      "incomplete_value": false,
      "site": "00b499f8",
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
            "const:143:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b489f0",
      "incomplete_value": false,
      "site": "00b48a04",
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
            "const:feb:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b499d4",
      "READ",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ],
    [
      "00b499e4",
      "PARAM",
      [
        "storage",
        "002a5feb",
        null,
        "string"
      ]
    ],
    [
      "00b49a00",
      "WRITE",
      [
        "storage",
        "01125a08",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b499d4",
      "READ",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b499e4",
      "PARAM",
      [
        "storage",
        "002a6143",
        null,
        "string"
      ]
    ],
    [
      "00b49a00",
      "WRITE",
      [
        "storage",
        "011269c8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48a04 ["INT_ADD", "register:40f0:8", ["const:b48a04:8", "const:4:8"]]
- 00b48a04 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b499f8 ["INT_ADD", "register:40f0:8", ["const:b499f8:8", "const:4:8"]]
+ 00b499f8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48a0c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a08:8"]]
- 00b48a0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49a00 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9c8:8"]]
+ 00b49a00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b489d8 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b499cc ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-482c005b5a4a39765ead5a19837c7c5b"></a>

### [`00b48a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48a3c.md) → [`00b49a30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49a30.md) _ZN8firebase4util10byte_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b49a4c",
      "incomplete_value": false,
      "site": "00b49a50",
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
      "definition_site": "00b48a58",
      "incomplete_value": false,
      "site": "00b48a5c",
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
      "definition_site": "00b49a5c",
      "incomplete_value": true,
      "site": "00b49a68",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b48a68",
      "incomplete_value": true,
      "site": "00b48a74",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b49a4c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b49a5c",
      "DATA",
      [
        "storage",
        "01125a28",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b49a4c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b49a5c",
      "DATA",
      [
        "storage",
        "011269e8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48a5c ["INT_ADD", "register:40f0:8", ["const:b48a5c:8", "const:4:8"]]
- 00b48a5c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b49a50 ["INT_ADD", "register:40f0:8", ["const:b49a50:8", "const:4:8"]]
+ 00b49a50 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b48a58 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b48a58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b48a58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b48a58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b49a4c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b49a4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49a4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49a4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b48a60 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b49a54 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-7885bb299adcb62347d579f111465714"></a>

### [`00b48a78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48a78.md) → [`00b49a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49a6c.md) _ZN8firebase4util15character_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5bfb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bfb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b49a98",
      "incomplete_value": true,
      "site": "00b49a98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48aa4",
      "incomplete_value": true,
      "site": "00b48aa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "definition_site": "00b49a8c",
      "incomplete_value": false,
      "site": "00b49a90",
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
            "const:e83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48a98",
      "incomplete_value": false,
      "site": "00b48a9c",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49a7c",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49a8c",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ],
    [
      "00b49a98",
      "WRITE",
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
      "00b49a7c",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49a8c",
      "PARAM",
      [
        "storage",
        "002bbe83",
        null,
        "string"
      ]
    ],
    [
      "00b49a98",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48a9c ["INT_ADD", "register:40f0:8", ["const:b48a9c:8", "const:4:8"]]
- 00b48a9c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49a90 ["INT_ADD", "register:40f0:8", ["const:b49a90:8", "const:4:8"]]
+ 00b49a90 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48aa4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a30:8"]]
- 00b48aa4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49a98 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9f0:8"]]
+ 00b49a98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48a84 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49a78 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-8f5444185d10e9d0d4963f872c18abbc"></a>

### [`00b48ab8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48ab8.md) → [`00b49aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49aac.md) _ZN8firebase4util15character_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_

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
      "definition_site": "00b49ad8",
      "incomplete_value": true,
      "site": "00b49ad8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ae4",
      "incomplete_value": true,
      "site": "00b48ae4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "definition_site": "00b49ac0",
      "incomplete_value": true,
      "site": "00b49ac0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48acc",
      "incomplete_value": true,
      "site": "00b48acc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49ac8",
      "incomplete_value": false,
      "site": "00b49ad0",
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
            "const:e83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ad4",
      "incomplete_value": false,
      "site": "00b48adc",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49abc",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49ac8",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ],
    [
      "00b49ad8",
      "WRITE",
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
      "00b49abc",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49ac8",
      "PARAM",
      [
        "storage",
        "002bbe83",
        null,
        "string"
      ]
    ],
    [
      "00b49ad8",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48adc ["INT_ADD", "register:40f0:8", ["const:b48adc:8", "const:4:8"]]
- 00b48adc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49ad0 ["INT_ADD", "register:40f0:8", ["const:b49ad0:8", "const:4:8"]]
+ 00b49ad0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48ae4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a30:8"]]
- 00b48ae4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49ad8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9f0:8"]]
+ 00b49ad8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48ac4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49ab8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-5843fb7fd41ec5a2a71b0e4d164dd32b"></a>

### [`00b48af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48af8.md) → [`00b49aec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49aec.md) _ZN8firebase4util15character_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b49b1c",
      "incomplete_value": true,
      "site": "00b49b1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48b28",
      "incomplete_value": true,
      "site": "00b48b28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "definition_site": "00b49b00",
      "incomplete_value": true,
      "site": "00b49b00",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48b0c",
      "incomplete_value": true,
      "site": "00b48b0c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49b0c",
      "incomplete_value": false,
      "site": "00b49b14",
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
            "const:e83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48b18",
      "incomplete_value": false,
      "site": "00b48b20",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49afc",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49b0c",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ],
    [
      "00b49b1c",
      "WRITE",
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
      "00b49afc",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49b0c",
      "PARAM",
      [
        "storage",
        "002bbe83",
        null,
        "string"
      ]
    ],
    [
      "00b49b1c",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48b20 ["INT_ADD", "register:40f0:8", ["const:b48b20:8", "const:4:8"]]
- 00b48b20 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49b14 ["INT_ADD", "register:40f0:8", ["const:b49b14:8", "const:4:8"]]
+ 00b49b14 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48b28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a30:8"]]
- 00b48b28 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49b1c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9f0:8"]]
+ 00b49b1c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48b04 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49af8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-59d328cc2acc796c1399e91a2e39d4d2"></a>

### [`00b48b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48b3c.md) → [`00b49b30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49b30.md) _ZN8firebase4util15character_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49b60",
      "incomplete_value": true,
      "site": "00b49b60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48b6c",
      "incomplete_value": true,
      "site": "00b48b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "definition_site": "00b49b44",
      "incomplete_value": true,
      "site": "00b49b44",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48b50",
      "incomplete_value": true,
      "site": "00b48b50",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49b4c",
      "incomplete_value": false,
      "site": "00b49b58",
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
            "const:e83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48b58",
      "incomplete_value": false,
      "site": "00b48b64",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49b40",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49b4c",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ],
    [
      "00b49b60",
      "WRITE",
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
      "00b49b40",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49b4c",
      "PARAM",
      [
        "storage",
        "002bbe83",
        null,
        "string"
      ]
    ],
    [
      "00b49b60",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48b64 ["INT_ADD", "register:40f0:8", ["const:b48b64:8", "const:4:8"]]
- 00b48b64 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49b58 ["INT_ADD", "register:40f0:8", ["const:b49b58:8", "const:4:8"]]
+ 00b49b58 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48b6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a30:8"]]
- 00b48b6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49b60 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:9f0:8"]]
+ 00b49b60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48b48 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49b3c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-61a96ea71d3b663948be6a80dc67335e"></a>

### [`00b48b8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48b8c.md) → [`00b49b80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49b80.md) _ZN8firebase4util15character_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b49c08",
      "incomplete_value": true,
      "site": "00b49c08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:9f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48c14",
      "incomplete_value": true,
      "site": "00b48c14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a38:8"
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
      "definition_site": "00b49bb4",
      "incomplete_value": true,
      "site": "00b49bc0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:9f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48bc0",
      "incomplete_value": true,
      "site": "00b48bcc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a30:8"
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
      "00b49b94",
      "READ",
      [
        "storage",
        "01125a38",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49bb4",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49c08",
      "WRITE",
      [
        "storage",
        "01125a38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49b94",
      "READ",
      [
        "storage",
        "011269f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49bb4",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49c08",
      "WRITE",
      [
        "storage",
        "011269f8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48bcc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48bcc ["INT_ADD", "register:40f0:8", ["const:b48bcc:8", "const:4:8"]]
- 00b48bcc ["CALLIND", null, ["register:0:8"]]
+ 00b49bc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49bc0 ["INT_ADD", "register:40f0:8", ["const:b49bc0:8", "const:4:8"]]
+ 00b49bc0 ["CALLIND", null, ["register:0:8"]]
- 00b48c14 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b48c14 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a38:8"]]
- 00b48c14 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b49c08 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b49c08 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:9f8:8"]]
+ 00b49c08 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b48b9c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b49b90 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-2cf424c17a77d6607cf60df80f03cbad"></a>

### [`00b48c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48c28.md) → [`00b49c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49c1c.md) _ZN8firebase4util15character_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b49c58",
      "incomplete_value": true,
      "site": "00b49c58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:9f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48c64",
      "incomplete_value": true,
      "site": "00b48c64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a38:8"
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
      "definition_site": "00b49ca8",
      "incomplete_value": true,
      "site": "00b49ca8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48cb4",
      "incomplete_value": true,
      "site": "00b48cb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "definition_site": "00b49c34",
      "incomplete_value": true,
      "site": "00b49c34",
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
      "definition_site": "00b48c40",
      "incomplete_value": true,
      "site": "00b48c40",
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
      "00b49c30",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49c3c",
      "READ",
      [
        "storage",
        "01125a38",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49c58",
      "WRITE",
      [
        "storage",
        "01125a38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49c30",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49c3c",
      "READ",
      [
        "storage",
        "011269f8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49c58",
      "WRITE",
      [
        "storage",
        "011269f8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48c64 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b48c64 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b48c64 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a38:8"]]
- 00b48c64 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b49c58 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b49c58 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b49c58 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:9f8:8"]]
+ 00b49c58 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b48cb0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48cb0 ["INT_ADD", "register:40f0:8", ["const:b48cb0:8", "const:4:8"]]
- 00b48cb0 ["CALLIND", null, ["register:0:8"]]
+ 00b49ca4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49ca4 ["INT_ADD", "register:40f0:8", ["const:b49ca4:8", "const:4:8"]]
+ 00b49ca4 ["CALLIND", null, ["register:0:8"]]
- 00b48cb4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a30:8"]]
- 00b48cb4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b48cb4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b49ca8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9f0:8"]]
+ 00b49ca8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b49ca8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-4d6c13783ab1d6e24c8e3fce7a3b3423"></a>

### [`00b48cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48cc8.md) → [`00b49cbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49cbc.md) _ZN8firebase4util15character_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49cfc",
      "incomplete_value": true,
      "site": "00b49cfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48d08",
      "incomplete_value": true,
      "site": "00b48d08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "definition_site": "00b49cd8",
      "incomplete_value": true,
      "site": "00b49cd8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ce4",
      "incomplete_value": true,
      "site": "00b48ce4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49ce0",
      "incomplete_value": false,
      "site": "00b49cf4",
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
            "const:e83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48cec",
      "incomplete_value": false,
      "site": "00b48d00",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49cd0",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49ce0",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ],
    [
      "00b49cfc",
      "WRITE",
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
      "00b49cd0",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49ce0",
      "PARAM",
      [
        "storage",
        "002bbe83",
        null,
        "string"
      ]
    ],
    [
      "00b49cfc",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48d00 ["INT_ADD", "register:40f0:8", ["const:b48d00:8", "const:4:8"]]
- 00b48d00 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49cf4 ["INT_ADD", "register:40f0:8", ["const:b49cf4:8", "const:4:8"]]
+ 00b49cf4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48d08 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a30:8"]]
- 00b48d08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49cfc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9f0:8"]]
+ 00b49cfc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48cd4 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b49cc8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-8b34dd4d9e41c3d0c4f36421998702d4"></a>

### [`00b48d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48d38.md) → [`00b49d2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49d2c.md) _ZN8firebase4util15character_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b49d48",
      "incomplete_value": false,
      "site": "00b49d4c",
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
      "definition_site": "00b48d54",
      "incomplete_value": false,
      "site": "00b48d58",
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
      "definition_site": "00b49d58",
      "incomplete_value": true,
      "site": "00b49d64",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b48d64",
      "incomplete_value": true,
      "site": "00b48d70",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b49d48",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b49d58",
      "DATA",
      [
        "storage",
        "01125a40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b49d48",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b49d58",
      "DATA",
      [
        "storage",
        "01126a00",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48d58 ["INT_ADD", "register:40f0:8", ["const:b48d58:8", "const:4:8"]]
- 00b48d58 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b49d4c ["INT_ADD", "register:40f0:8", ["const:b49d4c:8", "const:4:8"]]
+ 00b49d4c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b48d54 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b48d54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b48d54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b48d54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b49d48 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b49d48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49d48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49d48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b48d5c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b49d50 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-21c33e3d5f9fb8ceb0f22c04b94b1c46"></a>

### [`00b48d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48d74.md) → [`00b49d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49d68.md) _ZN8firebase4util15character_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49da8",
      "incomplete_value": true,
      "site": "00b49da8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:9f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48db4",
      "incomplete_value": true,
      "site": "00b48db4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a30:8"
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
      "definition_site": "00b49d84",
      "incomplete_value": true,
      "site": "00b49d84",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48d90",
      "incomplete_value": true,
      "site": "00b48d90",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
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
        "00b48d90"
      ],
      [
        "FALL_THROUGH",
        "00b49d84"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b49d84",
      "incomplete_value": true,
      "site": "00b49da8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48d90",
      "incomplete_value": true,
      "site": "00b48db4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
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
      "00b49d7c",
      "READ",
      [
        "storage",
        "01125a30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49d8c",
      "PARAM",
      [
        "storage",
        "002bbda5",
        null,
        "string"
      ]
    ],
    [
      "00b49da8",
      "WRITE",
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
      "00b49d7c",
      "READ",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49d8c",
      "PARAM",
      [
        "storage",
        "002bbe83",
        null,
        "string"
      ]
    ],
    [
      "00b49da8",
      "WRITE",
      [
        "storage",
        "011269f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48db4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a30:8"]]
- 00b48db4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49da8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9f0:8"]]
+ 00b49da8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48d80 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b49d74 ["COPY", "register:40a0:8", ["const:1126000:8"]]
- 00b48d88 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a30:8"]]
- 00b48d88 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b49d7c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:9f0:8"]]
+ 00b49d7c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-14cf00439ccb1f5cfee9d4d57c724800"></a>

### [`00b48de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48de4.md) → [`00b49dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49dd8.md) _ZN8firebase4util15character_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b49df4",
      "incomplete_value": false,
      "site": "00b49df8",
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
      "definition_site": "00b48e00",
      "incomplete_value": false,
      "site": "00b48e04",
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
      "definition_site": "00b49e04",
      "incomplete_value": true,
      "site": "00b49e10",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b48e10",
      "incomplete_value": true,
      "site": "00b48e1c",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b49df4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b49e04",
      "DATA",
      [
        "storage",
        "01125a50",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b49df4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b49e04",
      "DATA",
      [
        "storage",
        "01126a10",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48e04 ["INT_ADD", "register:40f0:8", ["const:b48e04:8", "const:4:8"]]
- 00b48e04 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b49df8 ["INT_ADD", "register:40f0:8", ["const:b49df8:8", "const:4:8"]]
+ 00b49df8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b48e00 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b48e00 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b48e00 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b48e00 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b49df4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b49df4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49df4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b49df4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b48e08 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b49dfc ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-47d2abd6e05f08ff91ceec4483a58fe2"></a>

### [`00b48e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48e20.md) → [`00b49e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49e14.md) _ZN8firebase4util11class_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b49e40",
      "incomplete_value": true,
      "site": "00b49e40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e4c",
      "incomplete_value": true,
      "site": "00b48e4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "definition_site": "00b49e28",
      "incomplete_value": true,
      "site": "00b49e28",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e34",
      "incomplete_value": true,
      "site": "00b48e34",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49e34",
      "incomplete_value": true,
      "site": "00b49e38",
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
            "const:50a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e40",
      "incomplete_value": true,
      "site": "00b48e44",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49e24",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49e34",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b49e40",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49e24",
      "READ",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49e34",
      "PARAM",
      [
        "storage",
        "002a850a",
        null,
        "string"
      ]
    ],
    [
      "00b49e40",
      "WRITE",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48e44 ["INT_ADD", "register:40f0:8", ["const:b48e44:8", "const:4:8"]]
- 00b48e44 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49e38 ["INT_ADD", "register:40f0:8", ["const:b49e38:8", "const:4:8"]]
+ 00b49e38 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48e4c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
- 00b48e4c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49e40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a18:8"]]
+ 00b49e40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48e2c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49e20 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-ee48b4ce6b7de66e81cbfb1b5d2388ec"></a>

### [`00b48e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48e60.md) → [`00b49e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49e54.md) _ZN8firebase4util11class_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b49e80",
      "incomplete_value": true,
      "site": "00b49e80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e8c",
      "incomplete_value": true,
      "site": "00b48e8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "definition_site": "00b49e68",
      "incomplete_value": true,
      "site": "00b49e68",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e74",
      "incomplete_value": true,
      "site": "00b48e74",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49e70",
      "incomplete_value": false,
      "site": "00b49e78",
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
            "const:50a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48e7c",
      "incomplete_value": false,
      "site": "00b48e84",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49e64",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49e70",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b49e80",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49e64",
      "READ",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49e70",
      "PARAM",
      [
        "storage",
        "002a850a",
        null,
        "string"
      ]
    ],
    [
      "00b49e80",
      "WRITE",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48e84 ["INT_ADD", "register:40f0:8", ["const:b48e84:8", "const:4:8"]]
- 00b48e84 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49e78 ["INT_ADD", "register:40f0:8", ["const:b49e78:8", "const:4:8"]]
+ 00b49e78 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48e8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
- 00b48e8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49e80 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a18:8"]]
+ 00b49e80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48e6c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49e60 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-fff1441f0d808ec1aea7b90508296b2c"></a>

### [`00b48ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48ea0.md) → [`00b49e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49e94.md) _ZN8firebase4util11class_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b49ec4",
      "incomplete_value": true,
      "site": "00b49ec4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ed0",
      "incomplete_value": true,
      "site": "00b48ed0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "definition_site": "00b49ea8",
      "incomplete_value": true,
      "site": "00b49ea8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48eb4",
      "incomplete_value": true,
      "site": "00b48eb4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49eb4",
      "incomplete_value": false,
      "site": "00b49ebc",
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
            "const:50a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ec0",
      "incomplete_value": false,
      "site": "00b48ec8",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49ea4",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49eb4",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b49ec4",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49ea4",
      "READ",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49eb4",
      "PARAM",
      [
        "storage",
        "002a850a",
        null,
        "string"
      ]
    ],
    [
      "00b49ec4",
      "WRITE",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48ec8 ["INT_ADD", "register:40f0:8", ["const:b48ec8:8", "const:4:8"]]
- 00b48ec8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49ebc ["INT_ADD", "register:40f0:8", ["const:b49ebc:8", "const:4:8"]]
+ 00b49ebc ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48ed0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
- 00b48ed0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49ec4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a18:8"]]
+ 00b49ec4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48eac ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49ea0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-412f3db56157b75152a463ce018accf5"></a>

### [`00b48ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48ee4.md) → [`00b49ed8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49ed8.md) _ZN8firebase4util11class_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b49f08",
      "incomplete_value": true,
      "site": "00b49f08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48f14",
      "incomplete_value": true,
      "site": "00b48f14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "definition_site": "00b49eec",
      "incomplete_value": true,
      "site": "00b49eec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48ef8",
      "incomplete_value": true,
      "site": "00b48ef8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b49ef4",
      "incomplete_value": false,
      "site": "00b49f00",
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
            "const:50a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48f00",
      "incomplete_value": false,
      "site": "00b48f0c",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b49ee8",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49ef4",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b49f08",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b49ee8",
      "READ",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49ef4",
      "PARAM",
      [
        "storage",
        "002a850a",
        null,
        "string"
      ]
    ],
    [
      "00b49f08",
      "WRITE",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48f0c ["INT_ADD", "register:40f0:8", ["const:b48f0c:8", "const:4:8"]]
- 00b48f0c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b49f00 ["INT_ADD", "register:40f0:8", ["const:b49f00:8", "const:4:8"]]
+ 00b49f00 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b48f14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a58:8"]]
- 00b48f14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b49f08 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a18:8"]]
+ 00b49f08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b48ef0 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b49ee4 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-0b8b0c73da7407cb1cbaffdb89428285"></a>

### [`00b48f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48f34.md) → [`00b49f28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49f28.md) _ZN8firebase4util11class_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b49fb0",
      "incomplete_value": true,
      "site": "00b49fb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48fbc",
      "incomplete_value": true,
      "site": "00b48fbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a60:8"
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
      "definition_site": "00b49f5c",
      "incomplete_value": true,
      "site": "00b49f68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b48f68",
      "incomplete_value": true,
      "site": "00b48f74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a58:8"
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
      "00b49f3c",
      "READ",
      [
        "storage",
        "01125a60",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49f5c",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49fb0",
      "WRITE",
      [
        "storage",
        "01125a60",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49f3c",
      "READ",
      [
        "storage",
        "01126a20",
        null,
        "undefined1"
      ]
    ],
    [
      "00b49f5c",
      "READ",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49fb0",
      "WRITE",
      [
        "storage",
        "01126a20",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b48f74 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b48f74 ["INT_ADD", "register:40f0:8", ["const:b48f74:8", "const:4:8"]]
- 00b48f74 ["CALLIND", null, ["register:0:8"]]
+ 00b49f68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b49f68 ["INT_ADD", "register:40f0:8", ["const:b49f68:8", "const:4:8"]]
+ 00b49f68 ["CALLIND", null, ["register:0:8"]]
- 00b48fbc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b48fbc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a60:8"]]
- 00b48fbc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b49fb0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b49fb0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a20:8"]]
+ 00b49fb0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b48f44 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b49f38 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-04bffa88293c6dfedaab182cdd59f22b"></a>

### [`00b48fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b48/00b48fd0.md) → [`00b49fc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b49/00b49fc4.md) _ZN8firebase4util11class_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4a000",
      "incomplete_value": true,
      "site": "00b4a000",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4900c",
      "incomplete_value": true,
      "site": "00b4900c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a60:8"
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
      "definition_site": "00b4a050",
      "incomplete_value": true,
      "site": "00b4a050",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4905c",
      "incomplete_value": true,
      "site": "00b4905c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "definition_site": "00b49fdc",
      "incomplete_value": true,
      "site": "00b49fdc",
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
      "definition_site": "00b48fe8",
      "incomplete_value": true,
      "site": "00b48fe8",
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
      "00b49fd8",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49fe4",
      "READ",
      [
        "storage",
        "01125a60",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a000",
      "WRITE",
      [
        "storage",
        "01125a60",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b49fd8",
      "READ",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b49fe4",
      "READ",
      [
        "storage",
        "01126a20",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a000",
      "WRITE",
      [
        "storage",
        "01126a20",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4900c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4900c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4900c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a60:8"]]
- 00b4900c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4a000 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4a000 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4a000 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a20:8"]]
+ 00b4a000 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b49058 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49058 ["INT_ADD", "register:40f0:8", ["const:b49058:8", "const:4:8"]]
- 00b49058 ["CALLIND", null, ["register:0:8"]]
+ 00b4a04c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a04c ["INT_ADD", "register:40f0:8", ["const:b4a04c:8", "const:4:8"]]
+ 00b4a04c ["CALLIND", null, ["register:0:8"]]
- 00b4905c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a58:8"]]
- 00b4905c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4905c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4a050 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a18:8"]]
+ 00b4a050 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4a050 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-fabd2de7554484906189f6a8c0b3cdf8"></a>

### [`00b49070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49070.md) → [`00b4a064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a064.md) _ZN8firebase4util11class_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a0a4",
      "incomplete_value": true,
      "site": "00b4a0a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b490b0",
      "incomplete_value": true,
      "site": "00b490b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "definition_site": "00b4a080",
      "incomplete_value": true,
      "site": "00b4a080",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4908c",
      "incomplete_value": true,
      "site": "00b4908c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a088",
      "incomplete_value": true,
      "site": "00b4a09c",
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
            "const:50a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49094",
      "incomplete_value": true,
      "site": "00b490a8",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a078",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a088",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b4a0a4",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a078",
      "READ",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a088",
      "PARAM",
      [
        "storage",
        "002a850a",
        null,
        "string"
      ]
    ],
    [
      "00b4a0a4",
      "WRITE",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b490a8 ["INT_ADD", "register:40f0:8", ["const:b490a8:8", "const:4:8"]]
- 00b490a8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a09c ["INT_ADD", "register:40f0:8", ["const:b4a09c:8", "const:4:8"]]
+ 00b4a09c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b490b0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a58:8"]]
- 00b490b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a0a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a18:8"]]
+ 00b4a0a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4907c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4a070 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-fe3415fc3b2908c812a9d806988c8656"></a>

### [`00b490e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b490e0.md) → [`00b4a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a0d4.md) _ZN8firebase4util11class_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4a0f0",
      "incomplete_value": false,
      "site": "00b4a0f4",
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
      "definition_site": "00b490fc",
      "incomplete_value": false,
      "site": "00b49100",
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
      "definition_site": "00b4a100",
      "incomplete_value": true,
      "site": "00b4a10c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4910c",
      "incomplete_value": true,
      "site": "00b49118",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4a0f0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4a100",
      "DATA",
      [
        "storage",
        "01125a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a0f0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4a100",
      "DATA",
      [
        "storage",
        "01126a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49100 ["INT_ADD", "register:40f0:8", ["const:b49100:8", "const:4:8"]]
- 00b49100 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4a0f4 ["INT_ADD", "register:40f0:8", ["const:b4a0f4:8", "const:4:8"]]
+ 00b4a0f4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b490fc ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b490fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b490fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b490fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a0f0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4a0f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a0f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a0f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49104 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4a0f8 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-0cf709d325d3e841e11616fe431dbdc0"></a>

### [`00b4911c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b4911c.md) → [`00b4a110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a110.md) _ZN8firebase4util11class_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a150",
      "incomplete_value": true,
      "site": "00b4a150",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4915c",
      "incomplete_value": true,
      "site": "00b4915c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a58:8"
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
      "definition_site": "00b4a12c",
      "incomplete_value": true,
      "site": "00b4a12c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49138",
      "incomplete_value": true,
      "site": "00b49138",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a134",
      "incomplete_value": false,
      "site": "00b4a148",
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
            "const:50a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49140",
      "incomplete_value": false,
      "site": "00b49154",
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
            "const:3b2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a124",
      "READ",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a134",
      "PARAM",
      [
        "storage",
        "002a83b2",
        null,
        "string"
      ]
    ],
    [
      "00b4a150",
      "WRITE",
      [
        "storage",
        "01125a58",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a124",
      "READ",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a134",
      "PARAM",
      [
        "storage",
        "002a850a",
        null,
        "string"
      ]
    ],
    [
      "00b4a150",
      "WRITE",
      [
        "storage",
        "01126a18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49154 ["INT_ADD", "register:40f0:8", ["const:b49154:8", "const:4:8"]]
- 00b49154 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a148 ["INT_ADD", "register:40f0:8", ["const:b4a148:8", "const:4:8"]]
+ 00b4a148 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4915c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a58:8"]]
- 00b4915c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a150 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a18:8"]]
+ 00b4a150 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49128 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4a11c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-0da3059d384e1a555294e52336ad0ec2"></a>

### [`00b4918c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b4918c.md) → [`00b4a180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a180.md) _ZN8firebase4util11class_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4a19c",
      "incomplete_value": false,
      "site": "00b4a1a0",
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
      "definition_site": "00b491a8",
      "incomplete_value": false,
      "site": "00b491ac",
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
      "definition_site": "00b4a1ac",
      "incomplete_value": true,
      "site": "00b4a1b8",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b491b8",
      "incomplete_value": true,
      "site": "00b491c4",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4a19c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4a1ac",
      "DATA",
      [
        "storage",
        "01125a78",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a19c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4a1ac",
      "DATA",
      [
        "storage",
        "01126a38",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b491ac ["INT_ADD", "register:40f0:8", ["const:b491ac:8", "const:4:8"]]
- 00b491ac ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4a1a0 ["INT_ADD", "register:40f0:8", ["const:b4a1a0:8", "const:4:8"]]
+ 00b4a1a0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b491a8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b491a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b491a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b491a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a19c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4a19c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a19c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a19c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b491b0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4a1a4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-2b53033d03dc0c53802b9ba2a663c5db"></a>

### [`00b491c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b491c8.md) → [`00b4a1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a1bc.md) _ZN8firebase4util16content_resolver19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9

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
      "definition_site": "00b4a1e8",
      "incomplete_value": true,
      "site": "00b4a1e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b491f4",
      "incomplete_value": true,
      "site": "00b491f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "definition_site": "00b4a1d0",
      "incomplete_value": true,
      "site": "00b4a1d0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b491dc",
      "incomplete_value": true,
      "site": "00b491dc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a1dc",
      "incomplete_value": false,
      "site": "00b4a1e0",
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
            "const:3ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b491e8",
      "incomplete_value": false,
      "site": "00b491ec",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a1cc",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a1dc",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ],
    [
      "00b4a1e8",
      "WRITE",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a1cc",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a1dc",
      "PARAM",
      [
        "storage",
        "002af3ba",
        null,
        "string"
      ]
    ],
    [
      "00b4a1e8",
      "WRITE",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b491ec ["INT_ADD", "register:40f0:8", ["const:b491ec:8", "const:4:8"]]
- 00b491ec ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a1e0 ["INT_ADD", "register:40f0:8", ["const:b4a1e0:8", "const:4:8"]]
+ 00b4a1e0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b491f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
- 00b491f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a1e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
+ 00b4a1e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b491d4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a1c8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-bdaca9097d7de15740b9772e62153e1f"></a>

### [`00b49208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49208.md) → [`00b4a1fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a1fc.md) _ZN8firebase4util16content_resolver19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9

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
      "definition_site": "00b4a228",
      "incomplete_value": true,
      "site": "00b4a228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49234",
      "incomplete_value": true,
      "site": "00b49234",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "definition_site": "00b4a210",
      "incomplete_value": true,
      "site": "00b4a210",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4921c",
      "incomplete_value": true,
      "site": "00b4921c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a218",
      "incomplete_value": false,
      "site": "00b4a220",
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
            "const:3ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49224",
      "incomplete_value": false,
      "site": "00b4922c",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a20c",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a218",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ],
    [
      "00b4a228",
      "WRITE",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a20c",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a218",
      "PARAM",
      [
        "storage",
        "002af3ba",
        null,
        "string"
      ]
    ],
    [
      "00b4a228",
      "WRITE",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4922c ["INT_ADD", "register:40f0:8", ["const:b4922c:8", "const:4:8"]]
- 00b4922c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a220 ["INT_ADD", "register:40f0:8", ["const:b4a220:8", "const:4:8"]]
+ 00b4a220 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49234 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
- 00b49234 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a228 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
+ 00b4a228 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49214 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a208 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-436a5acb9055a7f58b7e109c137a7ffd"></a>

### [`00b49248`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49248.md) → [`00b4a23c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a23c.md) _ZN8firebase4util16content_resolver10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4a26c",
      "incomplete_value": true,
      "site": "00b4a26c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49278",
      "incomplete_value": true,
      "site": "00b49278",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "definition_site": "00b4a250",
      "incomplete_value": true,
      "site": "00b4a250",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4925c",
      "incomplete_value": true,
      "site": "00b4925c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a25c",
      "incomplete_value": false,
      "site": "00b4a264",
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
            "const:3ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49268",
      "incomplete_value": false,
      "site": "00b49270",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a24c",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a25c",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ],
    [
      "00b4a26c",
      "WRITE",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a24c",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a25c",
      "PARAM",
      [
        "storage",
        "002af3ba",
        null,
        "string"
      ]
    ],
    [
      "00b4a26c",
      "WRITE",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49270 ["INT_ADD", "register:40f0:8", ["const:b49270:8", "const:4:8"]]
- 00b49270 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a264 ["INT_ADD", "register:40f0:8", ["const:b4a264:8", "const:4:8"]]
+ 00b4a264 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49278 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
- 00b49278 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a26c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
+ 00b4a26c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49254 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a248 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-79ac7779b83733b033df4b29bb6fcd4b"></a>

### [`00b4928c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b4928c.md) → [`00b4a280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a280.md) _ZN8firebase4util16content_resolver10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a2b0",
      "incomplete_value": true,
      "site": "00b4a2b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b492bc",
      "incomplete_value": true,
      "site": "00b492bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "definition_site": "00b4a294",
      "incomplete_value": true,
      "site": "00b4a294",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b492a0",
      "incomplete_value": true,
      "site": "00b492a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a29c",
      "incomplete_value": false,
      "site": "00b4a2a8",
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
            "const:3ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b492a8",
      "incomplete_value": false,
      "site": "00b492b4",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a290",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a29c",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ],
    [
      "00b4a2b0",
      "WRITE",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a290",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a29c",
      "PARAM",
      [
        "storage",
        "002af3ba",
        null,
        "string"
      ]
    ],
    [
      "00b4a2b0",
      "WRITE",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b492b4 ["INT_ADD", "register:40f0:8", ["const:b492b4:8", "const:4:8"]]
- 00b492b4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a2a8 ["INT_ADD", "register:40f0:8", ["const:b4a2a8:8", "const:4:8"]]
+ 00b4a2a8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b492bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a80:8"]]
- 00b492bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a2b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a40:8"]]
+ 00b4a2b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49298 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a28c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-3aa63a24cbf6112a400b45b9a11365f9"></a>

### [`00b492d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b492d0.md) → [`00b4a2c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a2c4.md) _ZN8firebase4util16content_resolver8GetClassEv

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
      "definition_site": "00b4a2c8",
      "incomplete_value": true,
      "site": "00b4a2cc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b492d4",
      "incomplete_value": true,
      "site": "00b492d8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a80:8"
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
      "00b4a2c8",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a2c8",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b492d0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4a2c4 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b492d4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a80:8"]]
- 00b492d4 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b4a2c8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a40:8"]]
+ 00b4a2c8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f524a91f447eb95736a43a30dbe7fb50"></a>

### [`00b492dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b492dc.md) → [`00b4a2d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a2d0.md) _ZN8firebase4util16content_resolver15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4a358",
      "incomplete_value": true,
      "site": "00b4a358",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49364",
      "incomplete_value": true,
      "site": "00b49364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "definition_site": "00b4a304",
      "incomplete_value": true,
      "site": "00b4a310",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49310",
      "incomplete_value": true,
      "site": "00b4931c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a80:8"
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
      "00b4a2e4",
      "READ",
      [
        "storage",
        "01125a88",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a304",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a358",
      "WRITE",
      [
        "storage",
        "01125a88",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a2e4",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a304",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a358",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4931c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4931c ["INT_ADD", "register:40f0:8", ["const:b4931c:8", "const:4:8"]]
- 00b4931c ["CALLIND", null, ["register:0:8"]]
+ 00b4a310 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a310 ["INT_ADD", "register:40f0:8", ["const:b4a310:8", "const:4:8"]]
+ 00b4a310 ["CALLIND", null, ["register:0:8"]]
- 00b49364 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b49364 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a88:8"]]
- 00b49364 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4a358 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4a358 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a48:8"]]
+ 00b4a358 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b492ec ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4a2e0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-0faf3b194116cff47d565958b8c1a62e"></a>

### [`00b49378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49378.md) → [`00b4a36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a36c.md) _ZN8firebase4util16content_resolver12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4a3a8",
      "incomplete_value": true,
      "site": "00b4a3a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b493b4",
      "incomplete_value": true,
      "site": "00b493b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "definition_site": "00b4a3f8",
      "incomplete_value": true,
      "site": "00b4a3f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49404",
      "incomplete_value": true,
      "site": "00b49404",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "definition_site": "00b4a384",
      "incomplete_value": true,
      "site": "00b4a384",
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
      "definition_site": "00b49390",
      "incomplete_value": true,
      "site": "00b49390",
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
      "00b4a380",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a38c",
      "READ",
      [
        "storage",
        "01125a88",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a3a8",
      "WRITE",
      [
        "storage",
        "01125a88",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a380",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a38c",
      "READ",
      [
        "storage",
        "01126a48",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a3a8",
      "WRITE",
      [
        "storage",
        "01126a48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b493b4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b493b4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b493b4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a88:8"]]
- 00b493b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4a3a8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4a3a8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4a3a8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a48:8"]]
+ 00b4a3a8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b49400 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49400 ["INT_ADD", "register:40f0:8", ["const:b49400:8", "const:4:8"]]
- 00b49400 ["CALLIND", null, ["register:0:8"]]
+ 00b4a3f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a3f4 ["INT_ADD", "register:40f0:8", ["const:b4a3f4:8", "const:4:8"]]
+ 00b4a3f4 ["CALLIND", null, ["register:0:8"]]
- 00b49404 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a80:8"]]
- 00b49404 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b49404 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4a3f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a40:8"]]
+ 00b4a3f8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4a3f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-8faad05a25a6b87be38a90644d6bb235"></a>

### [`00b49418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49418.md) → [`00b4a40c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a40c.md) _ZN8firebase4util16content_resolver14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a44c",
      "incomplete_value": true,
      "site": "00b4a44c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49458",
      "incomplete_value": true,
      "site": "00b49458",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "definition_site": "00b4a430",
      "incomplete_value": false,
      "site": "00b4a444",
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
            "const:3ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4943c",
      "incomplete_value": false,
      "site": "00b49450",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a420",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a430",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ],
    [
      "00b4a44c",
      "WRITE",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a420",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a430",
      "PARAM",
      [
        "storage",
        "002af3ba",
        null,
        "string"
      ]
    ],
    [
      "00b4a44c",
      "WRITE",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49450 ["INT_ADD", "register:40f0:8", ["const:b49450:8", "const:4:8"]]
- 00b49450 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a444 ["INT_ADD", "register:40f0:8", ["const:b4a444:8", "const:4:8"]]
+ 00b4a444 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49458 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a80:8"]]
- 00b49458 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a44c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a40:8"]]
+ 00b4a44c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49424 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4a418 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-e31f0cb006940d995d8a52dc02d46712"></a>

### [`00b49488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49488.md) → [`00b4a47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a47c.md) _ZN8firebase4util16content_resolver11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4a498",
      "incomplete_value": false,
      "site": "00b4a49c",
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
      "definition_site": "00b494a4",
      "incomplete_value": false,
      "site": "00b494a8",
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
      "definition_site": "00b4a4a8",
      "incomplete_value": true,
      "site": "00b4a4b4",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b494b4",
      "incomplete_value": true,
      "site": "00b494c0",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4a498",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4a4a8",
      "DATA",
      [
        "storage",
        "01125a90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a498",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4a4a8",
      "DATA",
      [
        "storage",
        "01126a50",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b494a8 ["INT_ADD", "register:40f0:8", ["const:b494a8:8", "const:4:8"]]
- 00b494a8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4a49c ["INT_ADD", "register:40f0:8", ["const:b4a49c:8", "const:4:8"]]
+ 00b4a49c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b494a4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b494a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b494a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b494a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a498 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4a498 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a498 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a498 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b494ac ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4a4a0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-cfc614cdba44eb4d7aed58622c40f86c"></a>

### [`00b494c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b494c4.md) → [`00b4a4b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a4b8.md) _ZN8firebase4util16content_resolver13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a4f8",
      "incomplete_value": true,
      "site": "00b4a4f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49504",
      "incomplete_value": true,
      "site": "00b49504",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a80:8"
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
      "definition_site": "00b4a4d4",
      "incomplete_value": true,
      "site": "00b4a4d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b494e0",
      "incomplete_value": true,
      "site": "00b494e0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a4dc",
      "incomplete_value": false,
      "site": "00b4a4f0",
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
            "const:3ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b494e8",
      "incomplete_value": false,
      "site": "00b494fc",
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
            "const:2e3:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a4cc",
      "READ",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a4dc",
      "PARAM",
      [
        "storage",
        "002af2e3",
        null,
        "string"
      ]
    ],
    [
      "00b4a4f8",
      "WRITE",
      [
        "storage",
        "01125a80",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a4cc",
      "READ",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a4dc",
      "PARAM",
      [
        "storage",
        "002af3ba",
        null,
        "string"
      ]
    ],
    [
      "00b4a4f8",
      "WRITE",
      [
        "storage",
        "01126a40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b494fc ["INT_ADD", "register:40f0:8", ["const:b494fc:8", "const:4:8"]]
- 00b494fc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a4f0 ["INT_ADD", "register:40f0:8", ["const:b4a4f0:8", "const:4:8"]]
+ 00b4a4f0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49504 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a80:8"]]
- 00b49504 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a4f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a40:8"]]
+ 00b4a4f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b494d0 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4a4c4 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-ea0dd7642547a87bbafd92c9e9ee4d4e"></a>

### [`00b49534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49534.md) → [`00b4a528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a528.md) _ZN8firebase4util16content_resolver10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4a544",
      "incomplete_value": false,
      "site": "00b4a548",
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
      "definition_site": "00b49550",
      "incomplete_value": false,
      "site": "00b49554",
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
      "definition_site": "00b4a554",
      "incomplete_value": true,
      "site": "00b4a560",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b49560",
      "incomplete_value": true,
      "site": "00b4956c",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4a544",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4a554",
      "DATA",
      [
        "storage",
        "01125aa0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a544",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4a554",
      "DATA",
      [
        "storage",
        "01126a60",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49554 ["INT_ADD", "register:40f0:8", ["const:b49554:8", "const:4:8"]]
- 00b49554 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4a548 ["INT_ADD", "register:40f0:8", ["const:b4a548:8", "const:4:8"]]
+ 00b4a548 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b49550 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b49550 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49550 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49550 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a544 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4a544 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a544 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a544 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49558 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4a54c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-c540494b0d24a608910fbe1851922b22"></a>

### [`00b49570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49570.md) → [`00b4a564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a564.md) _ZN8firebase4util7context19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_1

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
      "definition_site": "00b4a590",
      "incomplete_value": true,
      "site": "00b4a590",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4959c",
      "incomplete_value": true,
      "site": "00b4959c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:aa8:8"
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
      "definition_site": "00b4a578",
      "incomplete_value": true,
      "site": "00b4a578",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49584",
      "incomplete_value": true,
      "site": "00b49584",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a584",
      "incomplete_value": false,
      "site": "00b4a588",
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
            "const:1aa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49590",
      "incomplete_value": false,
      "site": "00b49594",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a574",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a584",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b4a590",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a574",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a584",
      "PARAM",
      [
        "storage",
        "002ae1aa",
        null,
        "string"
      ]
    ],
    [
      "00b4a590",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49594 ["INT_ADD", "register:40f0:8", ["const:b49594:8", "const:4:8"]]
- 00b49594 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a588 ["INT_ADD", "register:40f0:8", ["const:b4a588:8", "const:4:8"]]
+ 00b4a588 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4959c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00b4959c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a590 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00b4a590 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4957c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a570 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-05f2e8a6d7fac506588028471df800b5"></a>

### [`00b495b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b495b0.md) → [`00b4a5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a5a4.md) _ZN8firebase4util7context19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4a5d0",
      "incomplete_value": true,
      "site": "00b4a5d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b495dc",
      "incomplete_value": true,
      "site": "00b495dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:aa8:8"
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
      "definition_site": "00b4a5b8",
      "incomplete_value": true,
      "site": "00b4a5b8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b495c4",
      "incomplete_value": true,
      "site": "00b495c4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a5c0",
      "incomplete_value": false,
      "site": "00b4a5c8",
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
            "const:1aa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b495cc",
      "incomplete_value": false,
      "site": "00b495d4",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a5b4",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a5c0",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b4a5d0",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a5b4",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a5c0",
      "PARAM",
      [
        "storage",
        "002ae1aa",
        null,
        "string"
      ]
    ],
    [
      "00b4a5d0",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b495d4 ["INT_ADD", "register:40f0:8", ["const:b495d4:8", "const:4:8"]]
- 00b495d4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a5c8 ["INT_ADD", "register:40f0:8", ["const:b4a5c8:8", "const:4:8"]]
+ 00b4a5c8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b495dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00b495dc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a5d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00b4a5d0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b495bc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a5b0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-f124efa4eabc59e627dfd41bed31b436"></a>

### [`00b495f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b495f0.md) → [`00b4a5e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a5e4.md) _ZN8firebase4util7context10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4a614",
      "incomplete_value": true,
      "site": "00b4a614",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49620",
      "incomplete_value": true,
      "site": "00b49620",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:aa8:8"
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
      "definition_site": "00b4a5f8",
      "incomplete_value": true,
      "site": "00b4a5f8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49604",
      "incomplete_value": true,
      "site": "00b49604",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a604",
      "incomplete_value": false,
      "site": "00b4a60c",
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
            "const:1aa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49610",
      "incomplete_value": false,
      "site": "00b49618",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a5f4",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a604",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b4a614",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a5f4",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a604",
      "PARAM",
      [
        "storage",
        "002ae1aa",
        null,
        "string"
      ]
    ],
    [
      "00b4a614",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49618 ["INT_ADD", "register:40f0:8", ["const:b49618:8", "const:4:8"]]
- 00b49618 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a60c ["INT_ADD", "register:40f0:8", ["const:b4a60c:8", "const:4:8"]]
+ 00b4a60c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49620 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00b49620 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a614 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00b4a614 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b495fc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a5f0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-4dce6e8ce4743e1af3eea8e68088e327"></a>

### [`00b49634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49634.md) → [`00b4a628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a628.md) _ZN8firebase4util7context10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a658",
      "incomplete_value": true,
      "site": "00b4a658",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49664",
      "incomplete_value": true,
      "site": "00b49664",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:aa8:8"
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
      "definition_site": "00b4a63c",
      "incomplete_value": true,
      "site": "00b4a63c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49648",
      "incomplete_value": true,
      "site": "00b49648",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a644",
      "incomplete_value": false,
      "site": "00b4a650",
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
            "const:1aa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49650",
      "incomplete_value": false,
      "site": "00b4965c",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a638",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a644",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b4a658",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a638",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a644",
      "PARAM",
      [
        "storage",
        "002ae1aa",
        null,
        "string"
      ]
    ],
    [
      "00b4a658",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4965c ["INT_ADD", "register:40f0:8", ["const:b4965c:8", "const:4:8"]]
- 00b4965c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a650 ["INT_ADD", "register:40f0:8", ["const:b4a650:8", "const:4:8"]]
+ 00b4a650 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49664 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:aa8:8"]]
- 00b49664 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a658 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a68:8"]]
+ 00b4a658 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49640 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a634 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-fe01329c666196dd0ba58c7fa06e34a7"></a>

### [`00b49684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49684.md) → [`00b4a678`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a678.md) _ZN8firebase4util7context15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4a700",
      "incomplete_value": true,
      "site": "00b4a700",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4970c",
      "incomplete_value": true,
      "site": "00b4970c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:ab0:8"
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
      "definition_site": "00b4a6ac",
      "incomplete_value": true,
      "site": "00b4a6b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b496b8",
      "incomplete_value": true,
      "site": "00b496c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:aa8:8"
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
      "00b4a68c",
      "READ",
      [
        "storage",
        "01125ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a6ac",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a700",
      "WRITE",
      [
        "storage",
        "01125ab0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a68c",
      "READ",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a6ac",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a700",
      "WRITE",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b496c4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b496c4 ["INT_ADD", "register:40f0:8", ["const:b496c4:8", "const:4:8"]]
- 00b496c4 ["CALLIND", null, ["register:0:8"]]
+ 00b4a6b8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a6b8 ["INT_ADD", "register:40f0:8", ["const:b4a6b8:8", "const:4:8"]]
+ 00b4a6b8 ["CALLIND", null, ["register:0:8"]]
- 00b4970c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4970c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ab0:8"]]
- 00b4970c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4a700 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4a700 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:a70:8"]]
+ 00b4a700 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b49694 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4a688 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-822ee2e431330f7d918d46d0667052a3"></a>

### [`00b49720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49720.md) → [`00b4a714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a714.md) _ZN8firebase4util7context12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4a750",
      "incomplete_value": true,
      "site": "00b4a750",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4975c",
      "incomplete_value": true,
      "site": "00b4975c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:ab0:8"
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
      "definition_site": "00b4a7a0",
      "incomplete_value": true,
      "site": "00b4a7a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b497ac",
      "incomplete_value": true,
      "site": "00b497ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:aa8:8"
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
      "definition_site": "00b4a72c",
      "incomplete_value": true,
      "site": "00b4a72c",
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
      "definition_site": "00b49738",
      "incomplete_value": true,
      "site": "00b49738",
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
      "00b4a728",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a734",
      "READ",
      [
        "storage",
        "01125ab0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a750",
      "WRITE",
      [
        "storage",
        "01125ab0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4a728",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a734",
      "READ",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4a750",
      "WRITE",
      [
        "storage",
        "01126a70",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4975c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4975c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4975c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ab0:8"]]
- 00b4975c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4a750 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4a750 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4a750 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:a70:8"]]
+ 00b4a750 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b497a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b497a8 ["INT_ADD", "register:40f0:8", ["const:b497a8:8", "const:4:8"]]
- 00b497a8 ["CALLIND", null, ["register:0:8"]]
+ 00b4a79c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4a79c ["INT_ADD", "register:40f0:8", ["const:b4a79c:8", "const:4:8"]]
+ 00b4a79c ["CALLIND", null, ["register:0:8"]]
- 00b497ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
- 00b497ac ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b497ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4a7a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
+ 00b4a7a0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4a7a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-74aa963b5fee3b178942f6b90cb655e1"></a>

### [`00b497c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b497c0.md) → [`00b4a7b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a7b4.md) _ZN8firebase4util7context14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a7f4",
      "incomplete_value": true,
      "site": "00b4a7f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49800",
      "incomplete_value": true,
      "site": "00b49800",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:aa8:8"
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
      "definition_site": "00b4a7d0",
      "incomplete_value": true,
      "site": "00b4a7d0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b497dc",
      "incomplete_value": true,
      "site": "00b497dc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a7d8",
      "incomplete_value": false,
      "site": "00b4a7ec",
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
            "const:1aa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b497e4",
      "incomplete_value": false,
      "site": "00b497f8",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a7c8",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a7d8",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b4a7f4",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a7c8",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a7d8",
      "PARAM",
      [
        "storage",
        "002ae1aa",
        null,
        "string"
      ]
    ],
    [
      "00b4a7f4",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b497f8 ["INT_ADD", "register:40f0:8", ["const:b497f8:8", "const:4:8"]]
- 00b497f8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a7ec ["INT_ADD", "register:40f0:8", ["const:b4a7ec:8", "const:4:8"]]
+ 00b4a7ec ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49800 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
- 00b49800 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a7f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
+ 00b4a7f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b497cc ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4a7c0 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-67d197569653fbd102b641d9151d6408"></a>

### [`00b49830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49830.md) → [`00b4a824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a824.md) _ZN8firebase4util7context11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b610.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c5e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c5e0.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a840",
      "incomplete_value": false,
      "site": "00b4a844",
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
      "definition_site": "00b4984c",
      "incomplete_value": false,
      "site": "00b49850",
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
      "definition_site": "00b4a850",
      "incomplete_value": true,
      "site": "00b4a85c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4985c",
      "incomplete_value": true,
      "site": "00b49868",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4a840",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4a850",
      "DATA",
      [
        "storage",
        "01125ab8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a840",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4a850",
      "DATA",
      [
        "storage",
        "01126a78",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49850 ["INT_ADD", "register:40f0:8", ["const:b49850:8", "const:4:8"]]
- 00b49850 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4a844 ["INT_ADD", "register:40f0:8", ["const:b4a844:8", "const:4:8"]]
+ 00b4a844 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4984c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4984c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4984c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4984c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a840 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4a840 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a840 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a840 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49854 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4a848 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-fcfb9082e25970ddbf4a538771694357"></a>

### [`00b4986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b4986c.md) → [`00b4a860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a860.md) _ZN8firebase4util7context13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4a8a0",
      "incomplete_value": true,
      "site": "00b4a8a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b498ac",
      "incomplete_value": true,
      "site": "00b498ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:aa8:8"
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
      "definition_site": "00b4a87c",
      "incomplete_value": true,
      "site": "00b4a87c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49888",
      "incomplete_value": true,
      "site": "00b49888",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a884",
      "incomplete_value": false,
      "site": "00b4a898",
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
            "const:1aa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49890",
      "incomplete_value": false,
      "site": "00b498a4",
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
            "const:dd:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a874",
      "READ",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a884",
      "PARAM",
      [
        "storage",
        "002ae0dd",
        null,
        "string"
      ]
    ],
    [
      "00b4a8a0",
      "WRITE",
      [
        "storage",
        "01125aa8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a874",
      "READ",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a884",
      "PARAM",
      [
        "storage",
        "002ae1aa",
        null,
        "string"
      ]
    ],
    [
      "00b4a8a0",
      "WRITE",
      [
        "storage",
        "01126a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b498a4 ["INT_ADD", "register:40f0:8", ["const:b498a4:8", "const:4:8"]]
- 00b498a4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a898 ["INT_ADD", "register:40f0:8", ["const:b4a898:8", "const:4:8"]]
+ 00b4a898 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b498ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:aa8:8"]]
- 00b498ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a8a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a68:8"]]
+ 00b4a8a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49878 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4a86c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-0f15759a46301347df05b60b84a3dc6d"></a>

### [`00b498dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b498dc.md) → [`00b4a8d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a8d0.md) _ZN8firebase4util7context10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4a8ec",
      "incomplete_value": false,
      "site": "00b4a8f0",
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
      "definition_site": "00b498f8",
      "incomplete_value": false,
      "site": "00b498fc",
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
      "definition_site": "00b4a8fc",
      "incomplete_value": true,
      "site": "00b4a908",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b49908",
      "incomplete_value": true,
      "site": "00b49914",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4a8ec",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4a8fc",
      "DATA",
      [
        "storage",
        "01125ad0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4a8ec",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4a8fc",
      "DATA",
      [
        "storage",
        "01126a90",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b498fc ["INT_ADD", "register:40f0:8", ["const:b498fc:8", "const:4:8"]]
- 00b498fc ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4a8f0 ["INT_ADD", "register:40f0:8", ["const:b4a8f0:8", "const:4:8"]]
+ 00b4a8f0 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b498f8 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b498f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b498f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b498f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4a8ec ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4a8ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a8ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4a8ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49900 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4a8f4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-1b62a1ce3c460d63189fe4bccccd91bd"></a>

### [`00b49918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49918.md) → [`00b4a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a90c.md) _ZN8firebase4util6cursor19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16

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
      "definition_site": "00b4a938",
      "incomplete_value": true,
      "site": "00b4a938",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49944",
      "incomplete_value": true,
      "site": "00b49944",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ad8:8"
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
      "definition_site": "00b4a920",
      "incomplete_value": true,
      "site": "00b4a920",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4992c",
      "incomplete_value": true,
      "site": "00b4992c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a92c",
      "incomplete_value": false,
      "site": "00b4a930",
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
            "const:b95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49938",
      "incomplete_value": false,
      "site": "00b4993c",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a91c",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a92c",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b4a938",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a91c",
      "READ",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a92c",
      "PARAM",
      [
        "storage",
        "002a3b95",
        null,
        "string"
      ]
    ],
    [
      "00b4a938",
      "WRITE",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4993c ["INT_ADD", "register:40f0:8", ["const:b4993c:8", "const:4:8"]]
- 00b4993c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a930 ["INT_ADD", "register:40f0:8", ["const:b4a930:8", "const:4:8"]]
+ 00b4a930 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49944 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
- 00b49944 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a938 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a98:8"]]
+ 00b4a938 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49924 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a918 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-461400fc229217f91486bdc08c88c1e5"></a>

### [`00b49958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49958.md) → [`00b4a94c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a94c.md) _ZN8firebase4util6cursor19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4a978",
      "incomplete_value": true,
      "site": "00b4a978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49984",
      "incomplete_value": true,
      "site": "00b49984",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ad8:8"
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
      "definition_site": "00b4a960",
      "incomplete_value": true,
      "site": "00b4a960",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4996c",
      "incomplete_value": true,
      "site": "00b4996c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a968",
      "incomplete_value": false,
      "site": "00b4a970",
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
            "const:b95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49974",
      "incomplete_value": false,
      "site": "00b4997c",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a95c",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a968",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b4a978",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a95c",
      "READ",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a968",
      "PARAM",
      [
        "storage",
        "002a3b95",
        null,
        "string"
      ]
    ],
    [
      "00b4a978",
      "WRITE",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4997c ["INT_ADD", "register:40f0:8", ["const:b4997c:8", "const:4:8"]]
- 00b4997c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a970 ["INT_ADD", "register:40f0:8", ["const:b4a970:8", "const:4:8"]]
+ 00b4a970 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49984 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
- 00b49984 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a978 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a98:8"]]
+ 00b4a978 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49964 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a958 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-80defd831fd2facac0dd50b029d81de5"></a>

### [`00b49998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49998.md) → [`00b4a98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a98c.md) _ZN8firebase4util6cursor10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4a9bc",
      "incomplete_value": true,
      "site": "00b4a9bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b499c8",
      "incomplete_value": true,
      "site": "00b499c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ad8:8"
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
      "definition_site": "00b4a9a0",
      "incomplete_value": true,
      "site": "00b4a9a0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b499ac",
      "incomplete_value": true,
      "site": "00b499ac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a9ac",
      "incomplete_value": false,
      "site": "00b4a9b4",
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
            "const:b95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b499b8",
      "incomplete_value": false,
      "site": "00b499c0",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a99c",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a9ac",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b4a9bc",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a99c",
      "READ",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a9ac",
      "PARAM",
      [
        "storage",
        "002a3b95",
        null,
        "string"
      ]
    ],
    [
      "00b4a9bc",
      "WRITE",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b499c0 ["INT_ADD", "register:40f0:8", ["const:b499c0:8", "const:4:8"]]
- 00b499c0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a9b4 ["INT_ADD", "register:40f0:8", ["const:b4a9b4:8", "const:4:8"]]
+ 00b4a9b4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b499c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
- 00b499c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4a9bc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a98:8"]]
+ 00b4a9bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b499a4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a998 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-a57bcba3233ccb379aedbf551a70f659"></a>

### [`00b499dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b499dc.md) → [`00b4a9d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4a9d0.md) _ZN8firebase4util6cursor10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4aa00",
      "incomplete_value": true,
      "site": "00b4aa00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49a0c",
      "incomplete_value": true,
      "site": "00b49a0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ad8:8"
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
      "definition_site": "00b4a9e4",
      "incomplete_value": true,
      "site": "00b4a9e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b499f0",
      "incomplete_value": true,
      "site": "00b499f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4a9ec",
      "incomplete_value": false,
      "site": "00b4a9f8",
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
            "const:b95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b499f8",
      "incomplete_value": false,
      "site": "00b49a04",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4a9e0",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a9ec",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b4aa00",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4a9e0",
      "READ",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4a9ec",
      "PARAM",
      [
        "storage",
        "002a3b95",
        null,
        "string"
      ]
    ],
    [
      "00b4aa00",
      "WRITE",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49a04 ["INT_ADD", "register:40f0:8", ["const:b49a04:8", "const:4:8"]]
- 00b49a04 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4a9f8 ["INT_ADD", "register:40f0:8", ["const:b4a9f8:8", "const:4:8"]]
+ 00b4a9f8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49a0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad8:8"]]
- 00b49a0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4aa00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:a98:8"]]
+ 00b4aa00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b499e8 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4a9dc ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-752a2330c8e5b031ac2342697e2adeff"></a>

### [`00b49a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49a2c.md) → [`00b4aa20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4aa20.md) _ZN8firebase4util6cursor15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4aaa8",
      "incomplete_value": true,
      "site": "00b4aaa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49ab4",
      "incomplete_value": true,
      "site": "00b49ab4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:ae0:8"
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
      "definition_site": "00b4aa54",
      "incomplete_value": true,
      "site": "00b4aa60",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b49a60",
      "incomplete_value": true,
      "site": "00b49a6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ad8:8"
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
      "00b4aa34",
      "READ",
      [
        "storage",
        "01125ae0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4aa54",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4aaa8",
      "WRITE",
      [
        "storage",
        "01125ae0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4aa34",
      "READ",
      [
        "storage",
        "01126aa0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4aa54",
      "READ",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4aaa8",
      "WRITE",
      [
        "storage",
        "01126aa0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49a6c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49a6c ["INT_ADD", "register:40f0:8", ["const:b49a6c:8", "const:4:8"]]
- 00b49a6c ["CALLIND", null, ["register:0:8"]]
+ 00b4aa60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4aa60 ["INT_ADD", "register:40f0:8", ["const:b4aa60:8", "const:4:8"]]
+ 00b4aa60 ["CALLIND", null, ["register:0:8"]]
- 00b49ab4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b49ab4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ae0:8"]]
- 00b49ab4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4aaa8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4aaa8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:aa0:8"]]
+ 00b4aaa8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b49a3c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4aa30 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-ec091a733488cbd2c0c2f92e8f1ead55"></a>

### [`00b49ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49ac8.md) → [`00b4aabc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4aabc.md) _ZN8firebase4util6cursor12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4aaf8",
      "incomplete_value": true,
      "site": "00b4aaf8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49b04",
      "incomplete_value": true,
      "site": "00b49b04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:ae0:8"
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
      "definition_site": "00b4ab48",
      "incomplete_value": true,
      "site": "00b4ab48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49b54",
      "incomplete_value": true,
      "site": "00b49b54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ad8:8"
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
      "definition_site": "00b4aad4",
      "incomplete_value": true,
      "site": "00b4aad4",
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
      "definition_site": "00b49ae0",
      "incomplete_value": true,
      "site": "00b49ae0",
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
      "00b4aad0",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4aadc",
      "READ",
      [
        "storage",
        "01125ae0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4aaf8",
      "WRITE",
      [
        "storage",
        "01125ae0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4aad0",
      "READ",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4aadc",
      "READ",
      [
        "storage",
        "01126aa0",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4aaf8",
      "WRITE",
      [
        "storage",
        "01126aa0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49b04 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b49b04 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b49b04 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ae0:8"]]
- 00b49b04 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4aaf8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4aaf8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4aaf8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:aa0:8"]]
+ 00b4aaf8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b49b50 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49b50 ["INT_ADD", "register:40f0:8", ["const:b49b50:8", "const:4:8"]]
- 00b49b50 ["CALLIND", null, ["register:0:8"]]
+ 00b4ab44 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4ab44 ["INT_ADD", "register:40f0:8", ["const:b4ab44:8", "const:4:8"]]
+ 00b4ab44 ["CALLIND", null, ["register:0:8"]]
- 00b49b54 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ad8:8"]]
- 00b49b54 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b49b54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4ab48 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a98:8"]]
+ 00b4ab48 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4ab48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-f76cfd3b56dfe69974a26265fe29d1de"></a>

### [`00b49b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49b68.md) → [`00b4ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4ab5c.md) _ZN8firebase4util6cursor14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4ab9c",
      "incomplete_value": true,
      "site": "00b4ab9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49ba8",
      "incomplete_value": true,
      "site": "00b49ba8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ad8:8"
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
      "definition_site": "00b4ab78",
      "incomplete_value": true,
      "site": "00b4ab78",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49b84",
      "incomplete_value": true,
      "site": "00b49b84",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ab80",
      "incomplete_value": false,
      "site": "00b4ab94",
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
            "const:b95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49b8c",
      "incomplete_value": false,
      "site": "00b49ba0",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ab70",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ab80",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b4ab9c",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ab70",
      "READ",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ab80",
      "PARAM",
      [
        "storage",
        "002a3b95",
        null,
        "string"
      ]
    ],
    [
      "00b4ab9c",
      "WRITE",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49ba0 ["INT_ADD", "register:40f0:8", ["const:b49ba0:8", "const:4:8"]]
- 00b49ba0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ab94 ["INT_ADD", "register:40f0:8", ["const:b4ab94:8", "const:4:8"]]
+ 00b4ab94 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49ba8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ad8:8"]]
- 00b49ba8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ab9c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a98:8"]]
+ 00b4ab9c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49b74 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4ab68 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-56d62a7b7b7cfec6150add2af78dc8f0"></a>

### [`00b49bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49bd8.md) → [`00b4abcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4abcc.md) _ZN8firebase4util6cursor11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4abe8",
      "incomplete_value": false,
      "site": "00b4abec",
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
      "definition_site": "00b49bf4",
      "incomplete_value": false,
      "site": "00b49bf8",
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
      "definition_site": "00b4abf8",
      "incomplete_value": true,
      "site": "00b4ac04",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b49c04",
      "incomplete_value": true,
      "site": "00b49c10",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4abe8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4abf8",
      "DATA",
      [
        "storage",
        "01125ae8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4abe8",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4abf8",
      "DATA",
      [
        "storage",
        "01126aa8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49bf8 ["INT_ADD", "register:40f0:8", ["const:b49bf8:8", "const:4:8"]]
- 00b49bf8 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4abec ["INT_ADD", "register:40f0:8", ["const:b4abec:8", "const:4:8"]]
+ 00b4abec ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b49bf4 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b49bf4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49bf4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49bf4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4abe8 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4abe8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4abe8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4abe8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49bfc ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4abf0 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-fa6630cbd66079f65eb7e9b9d3ee36f9"></a>

### [`00b49c14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49c14.md) → [`00b4ac08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4ac08.md) _ZN8firebase4util6cursor13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4ac48",
      "incomplete_value": true,
      "site": "00b4ac48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49c54",
      "incomplete_value": true,
      "site": "00b49c54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ad8:8"
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
      "definition_site": "00b4ac24",
      "incomplete_value": true,
      "site": "00b4ac24",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49c30",
      "incomplete_value": true,
      "site": "00b49c30",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ac2c",
      "incomplete_value": false,
      "site": "00b4ac40",
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
            "const:b95:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49c38",
      "incomplete_value": false,
      "site": "00b49c4c",
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
            "const:aca:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ac1c",
      "READ",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ac2c",
      "PARAM",
      [
        "storage",
        "002a3aca",
        null,
        "string"
      ]
    ],
    [
      "00b4ac48",
      "WRITE",
      [
        "storage",
        "01125ad8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ac1c",
      "READ",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ac2c",
      "PARAM",
      [
        "storage",
        "002a3b95",
        null,
        "string"
      ]
    ],
    [
      "00b4ac48",
      "WRITE",
      [
        "storage",
        "01126a98",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49c4c ["INT_ADD", "register:40f0:8", ["const:b49c4c:8", "const:4:8"]]
- 00b49c4c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ac40 ["INT_ADD", "register:40f0:8", ["const:b4ac40:8", "const:4:8"]]
+ 00b4ac40 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49c54 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ad8:8"]]
- 00b49c54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ac48 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:a98:8"]]
+ 00b4ac48 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49c20 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4ac14 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-66ec5114d0654eab39ff5248ad017ef8"></a>

### [`00b49c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49c84.md) → [`00b4ac78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4ac78.md) _ZN8firebase4util6cursor10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4ac94",
      "incomplete_value": false,
      "site": "00b4ac98",
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
      "definition_site": "00b49ca0",
      "incomplete_value": false,
      "site": "00b49ca4",
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
      "definition_site": "00b4aca4",
      "incomplete_value": true,
      "site": "00b4acb0",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b49cb0",
      "incomplete_value": true,
      "site": "00b49cbc",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4ac94",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4aca4",
      "DATA",
      [
        "storage",
        "01125b08",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4ac94",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4aca4",
      "DATA",
      [
        "storage",
        "01126ac8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49ca4 ["INT_ADD", "register:40f0:8", ["const:b49ca4:8", "const:4:8"]]
- 00b49ca4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4ac98 ["INT_ADD", "register:40f0:8", ["const:b4ac98:8", "const:4:8"]]
+ 00b4ac98 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b49ca0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b49ca0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49ca0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49ca0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4ac94 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4ac94 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ac94 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4ac94 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49ca8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4ac9c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-973ac7e1c7646178fc75b32e14dec316"></a>

### [`00b49cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49cc0.md) → [`00b4acb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4acb4.md) _ZN8firebase4util4date19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS0_16Cl

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
      "definition_site": "00b4ace0",
      "incomplete_value": true,
      "site": "00b4ace0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49cec",
      "incomplete_value": true,
      "site": "00b49cec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b10:8"
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
      "definition_site": "00b4acc8",
      "incomplete_value": true,
      "site": "00b4acc8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49cd4",
      "incomplete_value": true,
      "site": "00b49cd4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4acd4",
      "incomplete_value": false,
      "site": "00b4acd8",
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
            "const:51a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49ce0",
      "incomplete_value": false,
      "site": "00b49ce4",
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
            "const:3c2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4acc4",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4acd4",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ],
    [
      "00b4ace0",
      "WRITE",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4acc4",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4acd4",
      "PARAM",
      [
        "storage",
        "002a851a",
        null,
        "string"
      ]
    ],
    [
      "00b4ace0",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49ce4 ["INT_ADD", "register:40f0:8", ["const:b49ce4:8", "const:4:8"]]
- 00b49ce4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4acd8 ["INT_ADD", "register:40f0:8", ["const:b4acd8:8", "const:4:8"]]
+ 00b4acd8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49cec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b10:8"]]
- 00b49cec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ace0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad0:8"]]
+ 00b4ace0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49ccc ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4acc0 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-654078d22f1fc59bf283fd7708c1716c"></a>

### [`00b49d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49d00.md) → [`00b4acf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4acf4.md) _ZN8firebase4util4date19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4ad20",
      "incomplete_value": true,
      "site": "00b4ad20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d2c",
      "incomplete_value": true,
      "site": "00b49d2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b10:8"
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
      "definition_site": "00b4ad08",
      "incomplete_value": true,
      "site": "00b4ad08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d14",
      "incomplete_value": true,
      "site": "00b49d14",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ad10",
      "incomplete_value": false,
      "site": "00b4ad18",
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
            "const:51a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d1c",
      "incomplete_value": false,
      "site": "00b49d24",
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
            "const:3c2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ad04",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ad10",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ],
    [
      "00b4ad20",
      "WRITE",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ad04",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ad10",
      "PARAM",
      [
        "storage",
        "002a851a",
        null,
        "string"
      ]
    ],
    [
      "00b4ad20",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49d24 ["INT_ADD", "register:40f0:8", ["const:b49d24:8", "const:4:8"]]
- 00b49d24 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ad18 ["INT_ADD", "register:40f0:8", ["const:b4ad18:8", "const:4:8"]]
+ 00b4ad18 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49d2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b10:8"]]
- 00b49d2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ad20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad0:8"]]
+ 00b4ad20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49d0c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ad00 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b11da211a744d1835f436215cb66b4e9"></a>

### [`00b49d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49d40.md) → [`00b4ad34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4ad34.md) _ZN8firebase4util4date10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4ad64",
      "incomplete_value": true,
      "site": "00b4ad64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d70",
      "incomplete_value": true,
      "site": "00b49d70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b10:8"
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
      "definition_site": "00b4ad48",
      "incomplete_value": true,
      "site": "00b4ad48",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d54",
      "incomplete_value": true,
      "site": "00b49d54",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ad54",
      "incomplete_value": false,
      "site": "00b4ad5c",
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
            "const:51a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d60",
      "incomplete_value": false,
      "site": "00b49d68",
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
            "const:3c2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ad44",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ad54",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ],
    [
      "00b4ad64",
      "WRITE",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ad44",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ad54",
      "PARAM",
      [
        "storage",
        "002a851a",
        null,
        "string"
      ]
    ],
    [
      "00b4ad64",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49d68 ["INT_ADD", "register:40f0:8", ["const:b49d68:8", "const:4:8"]]
- 00b49d68 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ad5c ["INT_ADD", "register:40f0:8", ["const:b4ad5c:8", "const:4:8"]]
+ 00b4ad5c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49d70 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b10:8"]]
- 00b49d70 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ad64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad0:8"]]
+ 00b4ad64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49d4c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ad40 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-cb970895c73ed5eab7247b1bd1565813"></a>

### [`00b49d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49d84.md) → [`00b4ad78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4ad78.md) _ZN8firebase4util4date10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4ada8",
      "incomplete_value": true,
      "site": "00b4ada8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49db4",
      "incomplete_value": true,
      "site": "00b49db4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b10:8"
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
      "definition_site": "00b4ad8c",
      "incomplete_value": true,
      "site": "00b4ad8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49d98",
      "incomplete_value": true,
      "site": "00b49d98",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4ad94",
      "incomplete_value": false,
      "site": "00b4ada0",
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
            "const:51a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49da0",
      "incomplete_value": false,
      "site": "00b49dac",
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
            "const:3c2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4ad88",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ad94",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ],
    [
      "00b4ada8",
      "WRITE",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4ad88",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ad94",
      "PARAM",
      [
        "storage",
        "002a851a",
        null,
        "string"
      ]
    ],
    [
      "00b4ada8",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49dac ["INT_ADD", "register:40f0:8", ["const:b49dac:8", "const:4:8"]]
- 00b49dac ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4ada0 ["INT_ADD", "register:40f0:8", ["const:b4ada0:8", "const:4:8"]]
+ 00b4ada0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49db4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b10:8"]]
- 00b49db4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4ada8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:ad0:8"]]
+ 00b4ada8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49d90 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4ad84 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-a223d7894301c1e64eadcd6be93e8142"></a>

### [`00b49dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49dd4.md) → [`00b4adc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4adc8.md) _ZN8firebase4util4date15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4ae50",
      "incomplete_value": true,
      "site": "00b4ae50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49e5c",
      "incomplete_value": true,
      "site": "00b49e5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "definition_site": "00b4adfc",
      "incomplete_value": true,
      "site": "00b4ae08",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b49e08",
      "incomplete_value": true,
      "site": "00b49e14",
      "value": [
        "LOAD",
        "8",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4addc",
      "READ",
      [
        "storage",
        "01125b18",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4adfc",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ae50",
      "WRITE",
      [
        "storage",
        "01125b18",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4addc",
      "READ",
      [
        "storage",
        "01126ad8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4adfc",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ae50",
      "WRITE",
      [
        "storage",
        "01126ad8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49e14 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49e14 ["INT_ADD", "register:40f0:8", ["const:b49e14:8", "const:4:8"]]
- 00b49e14 ["CALLIND", null, ["register:0:8"]]
+ 00b4ae08 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4ae08 ["INT_ADD", "register:40f0:8", ["const:b4ae08:8", "const:4:8"]]
+ 00b4ae08 ["CALLIND", null, ["register:0:8"]]
- 00b49e5c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b49e5c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b18:8"]]
- 00b49e5c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4ae50 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4ae50 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:ad8:8"]]
+ 00b4ae50 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b49de4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4add8 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-5aaea68660aeb8d8ce83b2174d916876"></a>

### [`00b49e70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49e70.md) → [`00b4ae64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4ae64.md) _ZN8firebase4util4date12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4aea0",
      "incomplete_value": true,
      "site": "00b4aea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49eac",
      "incomplete_value": true,
      "site": "00b49eac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:b18:8"
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
      "definition_site": "00b4aef0",
      "incomplete_value": true,
      "site": "00b4aef0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49efc",
      "incomplete_value": true,
      "site": "00b49efc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b10:8"
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
      "definition_site": "00b4ae7c",
      "incomplete_value": true,
      "site": "00b4ae7c",
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
      "definition_site": "00b49e88",
      "incomplete_value": true,
      "site": "00b49e88",
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
      "00b4ae78",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ae84",
      "READ",
      [
        "storage",
        "01125b18",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4aea0",
      "WRITE",
      [
        "storage",
        "01125b18",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4ae78",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4ae84",
      "READ",
      [
        "storage",
        "01126ad8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4aea0",
      "WRITE",
      [
        "storage",
        "01126ad8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49eac ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b49eac ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b49eac ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b18:8"]]
- 00b49eac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4aea0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4aea0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4aea0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:ad8:8"]]
+ 00b4aea0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b49ef8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b49ef8 ["INT_ADD", "register:40f0:8", ["const:b49ef8:8", "const:4:8"]]
- 00b49ef8 ["CALLIND", null, ["register:0:8"]]
+ 00b4aeec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4aeec ["INT_ADD", "register:40f0:8", ["const:b4aeec:8", "const:4:8"]]
+ 00b4aeec ["CALLIND", null, ["register:0:8"]]
- 00b49efc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b10:8"]]
- 00b49efc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b49efc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4aef0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ad0:8"]]
+ 00b4aef0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4aef0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-ef1a84c8b09eb1830ec8ce674504c0ad"></a>

### [`00b49f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49f10.md) → [`00b4af04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4af04.md) _ZN8firebase4util4date14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4af44",
      "incomplete_value": true,
      "site": "00b4af44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49f50",
      "incomplete_value": true,
      "site": "00b49f50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b10:8"
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
      "definition_site": "00b4af20",
      "incomplete_value": true,
      "site": "00b4af20",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49f2c",
      "incomplete_value": true,
      "site": "00b49f2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4af28",
      "incomplete_value": false,
      "site": "00b4af3c",
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
            "const:51a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49f34",
      "incomplete_value": false,
      "site": "00b49f48",
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
            "const:3c2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4af18",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4af28",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ],
    [
      "00b4af44",
      "WRITE",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4af18",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4af28",
      "PARAM",
      [
        "storage",
        "002a851a",
        null,
        "string"
      ]
    ],
    [
      "00b4af44",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49f48 ["INT_ADD", "register:40f0:8", ["const:b49f48:8", "const:4:8"]]
- 00b49f48 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4af3c ["INT_ADD", "register:40f0:8", ["const:b4af3c:8", "const:4:8"]]
+ 00b4af3c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49f50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b10:8"]]
- 00b49f50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4af44 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ad0:8"]]
+ 00b4af44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49f1c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4af10 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-5cf9a16fe3b401b72696e80a9bc080fc"></a>

### [`00b49f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49f80.md) → [`00b4af74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4af74.md) _ZN8firebase4util4date11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4af90",
      "incomplete_value": false,
      "site": "00b4af94",
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
      "definition_site": "00b49f9c",
      "incomplete_value": false,
      "site": "00b49fa0",
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
      "definition_site": "00b4afa0",
      "incomplete_value": true,
      "site": "00b4afac",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b49fac",
      "incomplete_value": true,
      "site": "00b49fb8",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4af90",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4afa0",
      "DATA",
      [
        "storage",
        "01125b20",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4af90",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4afa0",
      "DATA",
      [
        "storage",
        "01126ae0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49fa0 ["INT_ADD", "register:40f0:8", ["const:b49fa0:8", "const:4:8"]]
- 00b49fa0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4af94 ["INT_ADD", "register:40f0:8", ["const:b4af94:8", "const:4:8"]]
+ 00b4af94 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b49f9c ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b49f9c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b49f9c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b49f9c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4af90 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4af90 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4af90 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4af90 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b49fa4 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4af98 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-2f3897e9f2426cfc08fb801b29d8c32c"></a>

### [`00b49fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b49/00b49fbc.md) → [`00b4afb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4a/00b4afb0.md) _ZN8firebase4util4date13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4aff0",
      "incomplete_value": true,
      "site": "00b4aff0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49ffc",
      "incomplete_value": true,
      "site": "00b49ffc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b10:8"
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
      "definition_site": "00b4afcc",
      "incomplete_value": true,
      "site": "00b4afcc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49fd8",
      "incomplete_value": true,
      "site": "00b49fd8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4afd4",
      "incomplete_value": false,
      "site": "00b4afe8",
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
            "const:51a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b49fe0",
      "incomplete_value": false,
      "site": "00b49ff4",
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
            "const:3c2:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4afc4",
      "READ",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4afd4",
      "PARAM",
      [
        "storage",
        "002a83c2",
        null,
        "string"
      ]
    ],
    [
      "00b4aff0",
      "WRITE",
      [
        "storage",
        "01125b10",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4afc4",
      "READ",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4afd4",
      "PARAM",
      [
        "storage",
        "002a851a",
        null,
        "string"
      ]
    ],
    [
      "00b4aff0",
      "WRITE",
      [
        "storage",
        "01126ad0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b49ff4 ["INT_ADD", "register:40f0:8", ["const:b49ff4:8", "const:4:8"]]
- 00b49ff4 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4afe8 ["INT_ADD", "register:40f0:8", ["const:b4afe8:8", "const:4:8"]]
+ 00b4afe8 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b49ffc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b10:8"]]
- 00b49ffc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4aff0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:ad0:8"]]
+ 00b4aff0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b49fc8 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4afbc ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-bc9d5f0a604308a34ef88721cbb51410"></a>

### [`00b4a02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a02c.md) → [`00b4b020`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b020.md) _ZN8firebase4util4date10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4b03c",
      "incomplete_value": false,
      "site": "00b4b040",
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
      "definition_site": "00b4a048",
      "incomplete_value": false,
      "site": "00b4a04c",
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
      "definition_site": "00b4b04c",
      "incomplete_value": true,
      "site": "00b4b058",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4a058",
      "incomplete_value": true,
      "site": "00b4a064",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4b03c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4b04c",
      "DATA",
      [
        "storage",
        "01125b38",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4b03c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4b04c",
      "DATA",
      [
        "storage",
        "01126af8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a04c ["INT_ADD", "register:40f0:8", ["const:b4a04c:8", "const:4:8"]]
- 00b4a04c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4b040 ["INT_ADD", "register:40f0:8", ["const:b4b040:8", "const:4:8"]]
+ 00b4b040 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4a048 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4a048 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a048 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a048 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4b03c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4b03c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b03c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b03c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a050 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4b044 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-0aafdb5ae51a61dd0150e57124f6c4a7"></a>

### [`00b4a068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a068.md) → [`00b4b05c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b05c.md) _ZN8firebase4util12double_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

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
      "definition_site": "00b4b088",
      "incomplete_value": true,
      "site": "00b4b088",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a094",
      "incomplete_value": true,
      "site": "00b4a094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b40:8"
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
      "definition_site": "00b4b070",
      "incomplete_value": true,
      "site": "00b4b070",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a07c",
      "incomplete_value": true,
      "site": "00b4a07c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b07c",
      "incomplete_value": false,
      "site": "00b4b080",
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
            "const:d83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a088",
      "incomplete_value": false,
      "site": "00b4a08c",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b06c",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b07c",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4b088",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b06c",
      "READ",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b07c",
      "PARAM",
      [
        "storage",
        "002b7d83",
        null,
        "string"
      ]
    ],
    [
      "00b4b088",
      "WRITE",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a08c ["INT_ADD", "register:40f0:8", ["const:b4a08c:8", "const:4:8"]]
- 00b4a08c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b080 ["INT_ADD", "register:40f0:8", ["const:b4b080:8", "const:4:8"]]
+ 00b4b080 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a094 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
- 00b4a094 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b088 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b00:8"]]
+ 00b4b088 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a074 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b068 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-c6afad2e9bdfab957e7d8221ef7e26f4"></a>

### [`00b4a0a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a0a8.md) → [`00b4b09c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b09c.md) _ZN8firebase4util12double_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEE

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
      "definition_site": "00b4b0c8",
      "incomplete_value": true,
      "site": "00b4b0c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a0d4",
      "incomplete_value": true,
      "site": "00b4a0d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b40:8"
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
      "definition_site": "00b4b0b0",
      "incomplete_value": true,
      "site": "00b4b0b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a0bc",
      "incomplete_value": true,
      "site": "00b4a0bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b0b8",
      "incomplete_value": false,
      "site": "00b4b0c0",
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
            "const:d83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a0c4",
      "incomplete_value": false,
      "site": "00b4a0cc",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b0ac",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b0b8",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4b0c8",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b0ac",
      "READ",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b0b8",
      "PARAM",
      [
        "storage",
        "002b7d83",
        null,
        "string"
      ]
    ],
    [
      "00b4b0c8",
      "WRITE",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a0cc ["INT_ADD", "register:40f0:8", ["const:b4a0cc:8", "const:4:8"]]
- 00b4a0cc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b0c0 ["INT_ADD", "register:40f0:8", ["const:b4b0c0:8", "const:4:8"]]
+ 00b4b0c0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a0d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
- 00b4a0d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b0c8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b00:8"]]
+ 00b4b0c8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a0b4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b0a8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-5d36edc615c46c11ae1ae3c74b0530aa"></a>

### [`00b4a0e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a0e8.md) → [`00b4b0dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b0dc.md) _ZN8firebase4util12double_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4b10c",
      "incomplete_value": true,
      "site": "00b4b10c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a118",
      "incomplete_value": true,
      "site": "00b4a118",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b40:8"
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
      "definition_site": "00b4b0f0",
      "incomplete_value": true,
      "site": "00b4b0f0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a0fc",
      "incomplete_value": true,
      "site": "00b4a0fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b0fc",
      "incomplete_value": false,
      "site": "00b4b104",
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
            "const:d83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a108",
      "incomplete_value": false,
      "site": "00b4a110",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b0ec",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b0fc",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4b10c",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b0ec",
      "READ",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b0fc",
      "PARAM",
      [
        "storage",
        "002b7d83",
        null,
        "string"
      ]
    ],
    [
      "00b4b10c",
      "WRITE",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a110 ["INT_ADD", "register:40f0:8", ["const:b4a110:8", "const:4:8"]]
- 00b4a110 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b104 ["INT_ADD", "register:40f0:8", ["const:b4b104:8", "const:4:8"]]
+ 00b4b104 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a118 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
- 00b4a118 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b10c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b00:8"]]
+ 00b4b10c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a0f4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b0e8 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-339d02f6ef6a0e2a3d912e3c7f3dffb6"></a>

### [`00b4a12c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a12c.md) → [`00b4b120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b120.md) _ZN8firebase4util12double_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4b150",
      "incomplete_value": true,
      "site": "00b4b150",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a15c",
      "incomplete_value": true,
      "site": "00b4a15c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b40:8"
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
      "definition_site": "00b4b134",
      "incomplete_value": true,
      "site": "00b4b134",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a140",
      "incomplete_value": true,
      "site": "00b4a140",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b13c",
      "incomplete_value": false,
      "site": "00b4b148",
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
            "const:d83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a148",
      "incomplete_value": false,
      "site": "00b4a154",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b130",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b13c",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4b150",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b130",
      "READ",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b13c",
      "PARAM",
      [
        "storage",
        "002b7d83",
        null,
        "string"
      ]
    ],
    [
      "00b4b150",
      "WRITE",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a154 ["INT_ADD", "register:40f0:8", ["const:b4a154:8", "const:4:8"]]
- 00b4a154 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b148 ["INT_ADD", "register:40f0:8", ["const:b4b148:8", "const:4:8"]]
+ 00b4b148 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a15c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b40:8"]]
- 00b4a15c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b150 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b00:8"]]
+ 00b4b150 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a138 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b12c ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-d24fe836c73c7017f2dd8688ab5a49e6"></a>

### [`00b4a17c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a17c.md) → [`00b4b170`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b170.md) _ZN8firebase4util12double_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4b1f8",
      "incomplete_value": true,
      "site": "00b4b1f8",
      "value": [
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
      "definition_site": "00b4a204",
      "incomplete_value": true,
      "site": "00b4a204",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b1a4",
      "incomplete_value": true,
      "site": "00b4b1b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b00:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a1b0",
      "incomplete_value": true,
      "site": "00b4a1bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b40:8"
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
      "00b4b184",
      "READ",
      [
        "storage",
        "01125b48",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b1a4",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b1f8",
      "WRITE",
      [
        "storage",
        "01125b48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4b184",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b1a4",
      "READ",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b1f8",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a1bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a1bc ["INT_ADD", "register:40f0:8", ["const:b4a1bc:8", "const:4:8"]]
- 00b4a1bc ["CALLIND", null, ["register:0:8"]]
+ 00b4b1b0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4b1b0 ["INT_ADD", "register:40f0:8", ["const:b4b1b0:8", "const:4:8"]]
+ 00b4b1b0 ["CALLIND", null, ["register:0:8"]]
- 00b4a204 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4a204 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b48:8"]]
- 00b4a204 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4b1f8 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4b1f8 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b08:8"]]
+ 00b4b1f8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4a18c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4b180 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-46a8a9e9f98499a53b2f95d626705baf"></a>

### [`00b4a218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a218.md) → [`00b4b20c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b20c.md) _ZN8firebase4util12double_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4b248",
      "incomplete_value": true,
      "site": "00b4b248",
      "value": [
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
      "definition_site": "00b4a254",
      "incomplete_value": true,
      "site": "00b4a254",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4b298",
      "incomplete_value": true,
      "site": "00b4b298",
      "value": [
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
      "definition_site": "00b4a2a4",
      "incomplete_value": true,
      "site": "00b4a2a4",
      "value": [
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b224",
      "incomplete_value": true,
      "site": "00b4b224",
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
      "definition_site": "00b4a230",
      "incomplete_value": true,
      "site": "00b4a230",
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
      "00b4b220",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b22c",
      "READ",
      [
        "storage",
        "01125b48",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b248",
      "WRITE",
      [
        "storage",
        "01125b48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4b220",
      "READ",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b22c",
      "READ",
      [
        "storage",
        "01126b08",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b248",
      "WRITE",
      [
        "storage",
        "01126b08",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a254 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4a254 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4a254 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b48:8"]]
- 00b4a254 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4b248 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4b248 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4b248 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b08:8"]]
+ 00b4b248 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4a2a0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a2a0 ["INT_ADD", "register:40f0:8", ["const:b4a2a0:8", "const:4:8"]]
- 00b4a2a0 ["CALLIND", null, ["register:0:8"]]
+ 00b4b294 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4b294 ["INT_ADD", "register:40f0:8", ["const:b4b294:8", "const:4:8"]]
+ 00b4b294 ["CALLIND", null, ["register:0:8"]]
- 00b4a2a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
- 00b4a2a4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4a2a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4b298 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b00:8"]]
+ 00b4b298 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4b298 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-1b053f5d3cd32fbdd836a075aa5558e2"></a>

### [`00b4a2b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a2b8.md) → [`00b4b2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b2ac.md) _ZN8firebase4util12double_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4b2ec",
      "incomplete_value": true,
      "site": "00b4b2ec",
      "value": [
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
      "definition_site": "00b4a2f8",
      "incomplete_value": true,
      "site": "00b4a2f8",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b2c8",
      "incomplete_value": true,
      "site": "00b4b2c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a2d4",
      "incomplete_value": true,
      "site": "00b4a2d4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b2d0",
      "incomplete_value": false,
      "site": "00b4b2e4",
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
            "const:d83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a2dc",
      "incomplete_value": false,
      "site": "00b4a2f0",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b2c0",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b2d0",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4b2ec",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b2c0",
      "READ",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b2d0",
      "PARAM",
      [
        "storage",
        "002b7d83",
        null,
        "string"
      ]
    ],
    [
      "00b4b2ec",
      "WRITE",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a2f0 ["INT_ADD", "register:40f0:8", ["const:b4a2f0:8", "const:4:8"]]
- 00b4a2f0 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b2e4 ["INT_ADD", "register:40f0:8", ["const:b4b2e4:8", "const:4:8"]]
+ 00b4b2e4 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a2f8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
- 00b4a2f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b2ec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b00:8"]]
+ 00b4b2ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a2c4 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4b2b8 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-46f35e9941924589235f8018dd073d70"></a>

### [`00b4a328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a328.md) → [`00b4b31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b31c.md) _ZN8firebase4util12double_class11GetMethodIdENS1_6MethodE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5b360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b360.md) · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)
- 新版 呼出元 1件 [`00c5c330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c330.md) · 呼出先 1件 [`00c5c0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5c/00c5c0a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b338",
      "incomplete_value": false,
      "site": "00b4b33c",
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
      "definition_site": "00b4a344",
      "incomplete_value": false,
      "site": "00b4a348",
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
      "definition_site": "00b4b348",
      "incomplete_value": true,
      "site": "00b4b354",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4a354",
      "incomplete_value": true,
      "site": "00b4a360",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4b338",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4b348",
      "DATA",
      [
        "storage",
        "01125b50",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b338",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4b348",
      "DATA",
      [
        "storage",
        "01126b10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a348 ["INT_ADD", "register:40f0:8", ["const:b4a348:8", "const:4:8"]]
- 00b4a348 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4b33c ["INT_ADD", "register:40f0:8", ["const:b4b33c:8", "const:4:8"]]
+ 00b4b33c ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4a344 ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4a344 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a344 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a344 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4b338 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4b338 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b338 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b338 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a34c ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4b340 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-1c58993ee059738876ac01f0d5b61efc"></a>

### [`00b4a364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a364.md) → [`00b4b358`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b358.md) _ZN8firebase4util12double_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4b398",
      "incomplete_value": true,
      "site": "00b4b398",
      "value": [
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
      "definition_site": "00b4a3a4",
      "incomplete_value": true,
      "site": "00b4a3a4",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b374",
      "incomplete_value": true,
      "site": "00b4b374",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a380",
      "incomplete_value": true,
      "site": "00b4a380",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b37c",
      "incomplete_value": false,
      "site": "00b4b390",
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
            "const:d83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a388",
      "incomplete_value": false,
      "site": "00b4a39c",
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
            "const:cb4:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b36c",
      "READ",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b37c",
      "PARAM",
      [
        "storage",
        "002b7cb4",
        null,
        "string"
      ]
    ],
    [
      "00b4b398",
      "WRITE",
      [
        "storage",
        "01125b40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b36c",
      "READ",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b37c",
      "PARAM",
      [
        "storage",
        "002b7d83",
        null,
        "string"
      ]
    ],
    [
      "00b4b398",
      "WRITE",
      [
        "storage",
        "01126b00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a39c ["INT_ADD", "register:40f0:8", ["const:b4a39c:8", "const:4:8"]]
- 00b4a39c ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b390 ["INT_ADD", "register:40f0:8", ["const:b4b390:8", "const:4:8"]]
+ 00b4b390 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a3a4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b40:8"]]
- 00b4a3a4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b398 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b00:8"]]
+ 00b4b398 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a370 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4b364 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-73ba1c0697a84c07e645a384e1cf491a"></a>

### [`00b4a3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a3d4.md) → [`00b4b3c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b3c8.md) _ZN8firebase4util12double_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4b3e4",
      "incomplete_value": false,
      "site": "00b4b3e8",
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
      "definition_site": "00b4a3f0",
      "incomplete_value": false,
      "site": "00b4a3f4",
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
      "definition_site": "00b4b3f4",
      "incomplete_value": true,
      "site": "00b4b400",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4a400",
      "incomplete_value": true,
      "site": "00b4a40c",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4b3e4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4b3f4",
      "DATA",
      [
        "storage",
        "01125b60",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4b3e4",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4b3f4",
      "DATA",
      [
        "storage",
        "01126b20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a3f4 ["INT_ADD", "register:40f0:8", ["const:b4a3f4:8", "const:4:8"]]
- 00b4a3f4 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4b3e8 ["INT_ADD", "register:40f0:8", ["const:b4b3e8:8", "const:4:8"]]
+ 00b4b3e8 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4a3f0 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4a3f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a3f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a3f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4b3e4 ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4b3e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b3e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b3e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a3f8 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4b3ec ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-7a48720a24798349eddecbc6d476ac50"></a>

### [`00b4a410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a410.md) → [`00b4b404`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b404.md) _ZN8firebase4util10enum_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEEN

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
      "definition_site": "00b4b430",
      "incomplete_value": true,
      "site": "00b4b430",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a43c",
      "incomplete_value": true,
      "site": "00b4a43c",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b418",
      "incomplete_value": true,
      "site": "00b4b418",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a424",
      "incomplete_value": true,
      "site": "00b4a424",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b424",
      "incomplete_value": false,
      "site": "00b4b428",
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
            "const:b9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a430",
      "incomplete_value": false,
      "site": "00b4a434",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b414",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b424",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4b430",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b414",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b424",
      "PARAM",
      [
        "storage",
        "002c1b9b",
        null,
        "string"
      ]
    ],
    [
      "00b4b430",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a434 ["INT_ADD", "register:40f0:8", ["const:b4a434:8", "const:4:8"]]
- 00b4a434 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b428 ["INT_ADD", "register:40f0:8", ["const:b4b428:8", "const:4:8"]]
+ 00b4b428 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a43c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00b4a43c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b430 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00b4b430 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a41c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b410 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-9b6894a699e02fadfd3f00d36b428b71"></a>

### [`00b4a450`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a450.md) → [`00b4b444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b444.md) _ZN8firebase4util10enum_class19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
      "definition_site": "00b4b470",
      "incomplete_value": true,
      "site": "00b4b470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a47c",
      "incomplete_value": true,
      "site": "00b4a47c",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b458",
      "incomplete_value": true,
      "site": "00b4b458",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a464",
      "incomplete_value": true,
      "site": "00b4a464",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b460",
      "incomplete_value": false,
      "site": "00b4b468",
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
            "const:b9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a46c",
      "incomplete_value": false,
      "site": "00b4a474",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b454",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b460",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4b470",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b454",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b460",
      "PARAM",
      [
        "storage",
        "002c1b9b",
        null,
        "string"
      ]
    ],
    [
      "00b4b470",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a474 ["INT_ADD", "register:40f0:8", ["const:b4a474:8", "const:4:8"]]
- 00b4a474 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b468 ["INT_ADD", "register:40f0:8", ["const:b4b468:8", "const:4:8"]]
+ 00b4b468 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a47c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00b4a47c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b470 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00b4b470 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a45c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b450 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-b9adc77a493b3751e36e32c07d4c5798"></a>

### [`00b4a490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a490.md) → [`00b4b484`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b484.md) _ZN8firebase4util10enum_class10CacheClassEP7_JNIEnvP8_jobjectNS0_16ClassRequirementE

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
      "definition_site": "00b4b4b4",
      "incomplete_value": true,
      "site": "00b4b4b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a4c0",
      "incomplete_value": true,
      "site": "00b4a4c0",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b498",
      "incomplete_value": true,
      "site": "00b4b498",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a4a4",
      "incomplete_value": true,
      "site": "00b4a4a4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b4a4",
      "incomplete_value": false,
      "site": "00b4b4ac",
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
            "const:b9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a4b0",
      "incomplete_value": false,
      "site": "00b4a4b8",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b494",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b4a4",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4b4b4",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b494",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b4a4",
      "PARAM",
      [
        "storage",
        "002c1b9b",
        null,
        "string"
      ]
    ],
    [
      "00b4b4b4",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a4b8 ["INT_ADD", "register:40f0:8", ["const:b4a4b8:8", "const:4:8"]]
- 00b4a4b8 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b4ac ["INT_ADD", "register:40f0:8", ["const:b4b4ac:8", "const:4:8"]]
+ 00b4b4ac ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a4c0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00b4a4c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b4b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00b4b4b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a49c ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b490 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-7f74d3310e3412eafe8e5622566e5b3d"></a>

### [`00b4a4d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a4d4.md) → [`00b4b4c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b4c8.md) _ZN8firebase4util10enum_class10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4b4f8",
      "incomplete_value": true,
      "site": "00b4b4f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a504",
      "incomplete_value": true,
      "site": "00b4a504",
      "value": [
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b4dc",
      "incomplete_value": true,
      "site": "00b4b4dc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a4e8",
      "incomplete_value": true,
      "site": "00b4a4e8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b4e4",
      "incomplete_value": false,
      "site": "00b4b4f0",
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
            "const:b9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a4f0",
      "incomplete_value": false,
      "site": "00b4a4fc",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b4d8",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b4e4",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4b4f8",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b4d8",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b4e4",
      "PARAM",
      [
        "storage",
        "002c1b9b",
        null,
        "string"
      ]
    ],
    [
      "00b4b4f8",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a4fc ["INT_ADD", "register:40f0:8", ["const:b4a4fc:8", "const:4:8"]]
- 00b4a4fc ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b4f0 ["INT_ADD", "register:40f0:8", ["const:b4b4f0:8", "const:4:8"]]
+ 00b4b4f0 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a504 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b68:8"]]
- 00b4a504 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b4f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b28:8"]]
+ 00b4b4f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a4e0 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b4b4d4 ["COPY", "register:4098:8", ["const:1126000:8"]]
~~~


<a id="compare-f67dbe5ba59bcf99101246d1d8e033e4"></a>

### [`00b4a524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a524.md) → [`00b4b518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b518.md) _ZN8firebase4util10enum_class15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b4b5a0",
      "incomplete_value": true,
      "site": "00b4b5a0",
      "value": [
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
      "definition_site": "00b4a5ac",
      "incomplete_value": true,
      "site": "00b4a5ac",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b54c",
      "incomplete_value": true,
      "site": "00b4b558",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00b4a558",
      "incomplete_value": true,
      "site": "00b4a564",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b68:8"
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
      "00b4b52c",
      "READ",
      [
        "storage",
        "01125b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b54c",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b5a0",
      "WRITE",
      [
        "storage",
        "01125b70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4b52c",
      "READ",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b54c",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b5a0",
      "WRITE",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a564 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a564 ["INT_ADD", "register:40f0:8", ["const:b4a564:8", "const:4:8"]]
- 00b4a564 ["CALLIND", null, ["register:0:8"]]
+ 00b4b558 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4b558 ["INT_ADD", "register:40f0:8", ["const:b4b558:8", "const:4:8"]]
+ 00b4b558 ["CALLIND", null, ["register:0:8"]]
- 00b4a5ac ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b4a5ac ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b70:8"]]
- 00b4a5ac ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b4b5a0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b4b5a0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:b30:8"]]
+ 00b4b5a0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b4a534 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b4b528 ["COPY", "register:40a8:8", ["const:1126000:8"]]
~~~


<a id="compare-0a708a083aa083bb05233b77d8d90021"></a>

### [`00b4a5c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a5c0.md) → [`00b4b5b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b5b4.md) _ZN8firebase4util10enum_class12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b4b5f0",
      "incomplete_value": true,
      "site": "00b4b5f0",
      "value": [
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
      "definition_site": "00b4a5fc",
      "incomplete_value": true,
      "site": "00b4a5fc",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b4b640",
      "incomplete_value": true,
      "site": "00b4b640",
      "value": [
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
      "definition_site": "00b4a64c",
      "incomplete_value": true,
      "site": "00b4a64c",
      "value": [
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b5cc",
      "incomplete_value": true,
      "site": "00b4b5cc",
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
      "definition_site": "00b4a5d8",
      "incomplete_value": true,
      "site": "00b4a5d8",
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
      "00b4b5c8",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b5d4",
      "READ",
      [
        "storage",
        "01125b70",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b5f0",
      "WRITE",
      [
        "storage",
        "01125b70",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b4b5c8",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b5d4",
      "READ",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ],
    [
      "00b4b5f0",
      "WRITE",
      [
        "storage",
        "01126b30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a5fc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b4a5fc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b4a5fc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b70:8"]]
- 00b4a5fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b4b5f0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b4b5f0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b4b5f0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:b30:8"]]
+ 00b4b5f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b4a648 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b4a648 ["INT_ADD", "register:40f0:8", ["const:b4a648:8", "const:4:8"]]
- 00b4a648 ["CALLIND", null, ["register:0:8"]]
+ 00b4b63c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b4b63c ["INT_ADD", "register:40f0:8", ["const:b4b63c:8", "const:4:8"]]
+ 00b4b63c ["CALLIND", null, ["register:0:8"]]
- 00b4a64c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
- 00b4a64c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b4a64c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b4b640 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
+ 00b4b640 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b4b640 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-f89a45933cbfd85f44014dc7b8ec3c98"></a>

### [`00b4a660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a660.md) → [`00b4b654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b654.md) _ZN8firebase4util10enum_class14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4b694",
      "incomplete_value": true,
      "site": "00b4b694",
      "value": [
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
      "definition_site": "00b4a6a0",
      "incomplete_value": true,
      "site": "00b4a6a0",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b670",
      "incomplete_value": true,
      "site": "00b4b670",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a67c",
      "incomplete_value": true,
      "site": "00b4a67c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b678",
      "incomplete_value": false,
      "site": "00b4b68c",
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
            "const:b9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a684",
      "incomplete_value": false,
      "site": "00b4a698",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b668",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b678",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4b694",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b668",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b678",
      "PARAM",
      [
        "storage",
        "002c1b9b",
        null,
        "string"
      ]
    ],
    [
      "00b4b694",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a698 ["INT_ADD", "register:40f0:8", ["const:b4a698:8", "const:4:8"]]
- 00b4a698 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b68c ["INT_ADD", "register:40f0:8", ["const:b4b68c:8", "const:4:8"]]
+ 00b4b68c ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a6a0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
- 00b4a6a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b694 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
+ 00b4b694 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a66c ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4b660 ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-d95a01ac03af9917fd52b52b7944830a"></a>

### [`00b4a6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a6d0.md) → [`00b4b6c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b6c4.md) _ZN8firebase4util10enum_class11GetMethodIdENS1_6MethodE

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
      "definition_site": "00b4b6e0",
      "incomplete_value": false,
      "site": "00b4b6e4",
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
      "definition_site": "00b4a6ec",
      "incomplete_value": false,
      "site": "00b4a6f0",
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
      "definition_site": "00b4b6f0",
      "incomplete_value": true,
      "site": "00b4b6fc",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4a6fc",
      "incomplete_value": true,
      "site": "00b4a708",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4b6e0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b4b6f0",
      "DATA",
      [
        "storage",
        "01125b78",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4b6e0",
      "PARAM",
      [
        "storage",
        "002a8463",
        null,
        "string"
      ]
    ],
    [
      "00b4b6f0",
      "DATA",
      [
        "storage",
        "01126b38",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a6f0 ["INT_ADD", "register:40f0:8", ["const:b4a6f0:8", "const:4:8"]]
- 00b4a6f0 ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4b6e4 ["INT_ADD", "register:40f0:8", ["const:b4b6e4:8", "const:4:8"]]
+ 00b4b6e4 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4a6ec ["COPY", "tmp:0:8", ["const:30b:8"]]
- 00b4a6ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a6ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a6ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4b6e0 ["COPY", "tmp:0:8", ["const:463:8"]]
+ 00b4b6e0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b6e0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b6e0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a6f4 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4b6e8 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-77d0bb849e55dc28d5fe3da253bd561e"></a>

### [`00b4a70c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a70c.md) → [`00b4b700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b700.md) _ZN8firebase4util10enum_class13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b4b740",
      "incomplete_value": true,
      "site": "00b4b740",
      "value": [
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
      "definition_site": "00b4a74c",
      "incomplete_value": true,
      "site": "00b4a74c",
      "value": [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b4b71c",
      "incomplete_value": true,
      "site": "00b4b71c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a728",
      "incomplete_value": true,
      "site": "00b4a728",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4b724",
      "incomplete_value": false,
      "site": "00b4b738",
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
            "const:b9b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4a730",
      "incomplete_value": false,
      "site": "00b4a744",
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
            "const:b51:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b4b714",
      "READ",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b724",
      "PARAM",
      [
        "storage",
        "002c1b51",
        null,
        "string"
      ]
    ],
    [
      "00b4b740",
      "WRITE",
      [
        "storage",
        "01125b68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b4b714",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00b4b724",
      "PARAM",
      [
        "storage",
        "002c1b9b",
        null,
        "string"
      ]
    ],
    [
      "00b4b740",
      "WRITE",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a744 ["INT_ADD", "register:40f0:8", ["const:b4a744:8", "const:4:8"]]
- 00b4a744 ["CALL", null, ["callee:00c5bfb0:8"]]
+ 00b4b738 ["INT_ADD", "register:40f0:8", ["const:b4b738:8", "const:4:8"]]
+ 00b4b738 ["CALL", null, ["callee:00c5bfb0:8"]]
- 00b4a74c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b68:8"]]
- 00b4a74c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b4b740 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b28:8"]]
+ 00b4b740 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b4a718 ["COPY", "register:40a0:8", ["const:1125000:8"]]
+ 00b4b70c ["COPY", "register:40a0:8", ["const:1126000:8"]]
~~~


<a id="compare-28378355cf56ece1b7f78998a9fcda5b"></a>

### [`00b4a77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b4a/00b4a77c.md) → [`00b4b770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b4b/00b4b770.md) _ZN8firebase4util10enum_class10GetFieldIdENS1_5FieldE

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
      "definition_site": "00b4b78c",
      "incomplete_value": false,
      "site": "00b4b790",
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
      "definition_site": "00b4a798",
      "incomplete_value": false,
      "site": "00b4a79c",
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
      "definition_site": "00b4b79c",
      "incomplete_value": true,
      "site": "00b4b7a8",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00b4a7a8",
      "incomplete_value": true,
      "site": "00b4a7b4",
      "value": [
        "LOAD",
        "8",
        [
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
      "00b4b78c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b4b79c",
      "DATA",
      [
        "storage",
        "01125b88",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b4b78c",
      "PARAM",
      [
        "storage",
        "002a961a",
        null,
        "string"
      ]
    ],
    [
      "00b4b79c",
      "DATA",
      [
        "storage",
        "01126b48",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b4a79c ["INT_ADD", "register:40f0:8", ["const:b4a79c:8", "const:4:8"]]
- 00b4a79c ["CALL", null, ["callee:00c5c0a0:8"]]
+ 00b4b790 ["INT_ADD", "register:40f0:8", ["const:b4b790:8", "const:4:8"]]
+ 00b4b790 ["CALL", null, ["callee:00c5c0a0:8"]]
- 00b4a798 ["COPY", "tmp:0:8", ["const:54d:8"]]
- 00b4a798 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a798 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b4a798 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b4b78c ["COPY", "tmp:0:8", ["const:61a:8"]]
+ 00b4b78c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b78c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b4b78c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b4a7a0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b4b794 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


