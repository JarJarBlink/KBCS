# v16.0.1 → v16.0.2 · 最優先の変更候補 (84)

[一覧の目次](README.md)

<a id="compare-353de3a6277ad38d0747d0bd5e322093"></a>

### [`00b657f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b657f0.md) → [`00b6588c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b6588c.md) _ZN8firebase3app11GetMethodIdENS0_6MethodE

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
      "definition_site": "00b658a8",
      "incomplete_value": false,
      "site": "00b658ac",
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
      "definition_site": "00b6580c",
      "incomplete_value": false,
      "site": "00b65810",
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
      "definition_site": "00b658b8",
      "incomplete_value": true,
      "site": "00b658c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "definition_site": "00b6581c",
      "incomplete_value": true,
      "site": "00b65828",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00b658a8",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b658b8",
      "DATA",
      [
        "storage",
        "01126060",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b658a8",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b658b8",
      "DATA",
      [
        "storage",
        "01126160",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65810 ["INT_ADD", "register:40f0:8", ["const:b65810:8", "const:4:8"]]
- 00b65810 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b658ac ["INT_ADD", "register:40f0:8", ["const:b658ac:8", "const:4:8"]]
+ 00b658ac ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b6580c ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b6580c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b6580c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b6580c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b658a8 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b658a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b658a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b658a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65818 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00b65818 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b65818 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b65818 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b658b4 ["COPY", "tmp:0:8", ["const:160:8"]]
+ 00b658b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b658b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b658b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-423e979f2f8caf3bb7fb6d00f0ee21e3"></a>

### [`00b6582c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b6582c.md) → [`00b658c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b658c8.md) _ZN8firebase3app13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b65908",
      "incomplete_value": true,
      "site": "00b65908",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6586c",
      "incomplete_value": true,
      "site": "00b6586c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "definition_site": "00b658e4",
      "incomplete_value": true,
      "site": "00b658e4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65848",
      "incomplete_value": true,
      "site": "00b65848",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b658ec",
      "incomplete_value": false,
      "site": "00b65900",
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
            "const:ceb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65850",
      "incomplete_value": false,
      "site": "00b65864",
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
            "const:cab:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b658dc",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ],
    [
      "00b658ec",
      "PARAM",
      [
        "storage",
        "002b6cab",
        null,
        "string"
      ]
    ],
    [
      "00b65908",
      "WRITE",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b658dc",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ],
    [
      "00b658ec",
      "PARAM",
      [
        "storage",
        "002b6ceb",
        null,
        "string"
      ]
    ],
    [
      "00b65908",
      "WRITE",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65864 ["INT_ADD", "register:40f0:8", ["const:b65864:8", "const:4:8"]]
- 00b65864 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65900 ["INT_ADD", "register:40f0:8", ["const:b65900:8", "const:4:8"]]
+ 00b65900 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b6586c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:50:8"]]
- 00b6586c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65908 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:150:8"]]
+ 00b65908 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65840 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:50:8"]]
- 00b65840 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b658dc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:150:8"]]
+ 00b658dc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-92f70ca3d0bd74106e9fbc80f289fea0"></a>

### [`00b6589c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b6589c.md) → [`00b65938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65938.md) _ZN8firebase3app10GetFieldIdENS0_5FieldE

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
      "definition_site": "00b65954",
      "incomplete_value": false,
      "site": "00b65958",
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
      "definition_site": "00b658b8",
      "incomplete_value": false,
      "site": "00b658bc",
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
      "definition_site": "00b65964",
      "incomplete_value": true,
      "site": "00b65970",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "definition_site": "00b658c8",
      "incomplete_value": true,
      "site": "00b658d4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00b65954",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b65964",
      "DATA",
      [
        "storage",
        "011260a8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b65954",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b65964",
      "DATA",
      [
        "storage",
        "011261a8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b658bc ["INT_ADD", "register:40f0:8", ["const:b658bc:8", "const:4:8"]]
- 00b658bc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b65958 ["INT_ADD", "register:40f0:8", ["const:b65958:8", "const:4:8"]]
+ 00b65958 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b658b8 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b658b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b658b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b658b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b65954 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b65954 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65954 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65954 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b658c4 ["COPY", "tmp:0:8", ["const:a8:8"]]
- 00b658c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b658c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b658c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b65960 ["COPY", "tmp:0:8", ["const:1a8:8"]]
+ 00b65960 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b65960 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b65960 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9c7a8ff429415a73caefe36f78472d96"></a>

### [`00b658d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b658d8.md) → [`00b65974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65974.md) _ZN8firebase15options_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEEN

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
      "definition_site": "00b659a0",
      "incomplete_value": true,
      "site": "00b659a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65904",
      "incomplete_value": true,
      "site": "00b65904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b65988",
      "incomplete_value": true,
      "site": "00b65988",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b658ec",
      "incomplete_value": true,
      "site": "00b658ec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65994",
      "incomplete_value": false,
      "site": "00b65998",
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
            "const:a09:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b658f8",
      "incomplete_value": false,
      "site": "00b658fc",
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
            "const:a56:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65984",
      "READ",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65994",
      "PARAM",
      [
        "storage",
        "002a2a56",
        null,
        "string"
      ]
    ],
    [
      "00b659a0",
      "WRITE",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65984",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65994",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b659a0",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b658fc ["INT_ADD", "register:40f0:8", ["const:b658fc:8", "const:4:8"]]
- 00b658fc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65998 ["INT_ADD", "register:40f0:8", ["const:b65998:8", "const:4:8"]]
+ 00b65998 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65904 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b0:8"]]
- 00b65904 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b659a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
+ 00b659a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b658e8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b0:8"]]
- 00b658e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65984 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
+ 00b65984 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-df735ad5b3daaa6acd959b1089c164f1"></a>

### [`00b65918`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65918.md) → [`00b659b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b659b4.md) _ZN8firebase15options_builder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

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
      "definition_site": "00b659e0",
      "incomplete_value": true,
      "site": "00b659e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65944",
      "incomplete_value": true,
      "site": "00b65944",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b659c8",
      "incomplete_value": true,
      "site": "00b659c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6592c",
      "incomplete_value": true,
      "site": "00b6592c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b659d0",
      "incomplete_value": false,
      "site": "00b659d8",
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
            "const:a09:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65934",
      "incomplete_value": false,
      "site": "00b6593c",
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
            "const:a56:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b659c4",
      "READ",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b659d0",
      "PARAM",
      [
        "storage",
        "002a2a56",
        null,
        "string"
      ]
    ],
    [
      "00b659e0",
      "WRITE",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b659c4",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b659d0",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b659e0",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6593c ["INT_ADD", "register:40f0:8", ["const:b6593c:8", "const:4:8"]]
- 00b6593c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b659d8 ["INT_ADD", "register:40f0:8", ["const:b659d8:8", "const:4:8"]]
+ 00b659d8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65944 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b0:8"]]
- 00b65944 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b659e0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
+ 00b659e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65928 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b0:8"]]
- 00b65928 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b659c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
+ 00b659c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-82a9dc6f021c4e9df880cb2c801e6d51"></a>

### [`00b65958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65958.md) → [`00b659f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b659f4.md) _ZN8firebase15options_builder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b65a24",
      "incomplete_value": true,
      "site": "00b65a24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65988",
      "incomplete_value": true,
      "site": "00b65988",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b65a08",
      "incomplete_value": true,
      "site": "00b65a08",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6596c",
      "incomplete_value": true,
      "site": "00b6596c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65a14",
      "incomplete_value": false,
      "site": "00b65a1c",
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
            "const:a09:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65978",
      "incomplete_value": false,
      "site": "00b65980",
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
            "const:a56:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65a04",
      "READ",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65a14",
      "PARAM",
      [
        "storage",
        "002a2a56",
        null,
        "string"
      ]
    ],
    [
      "00b65a24",
      "WRITE",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65a04",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65a14",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b65a24",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65980 ["INT_ADD", "register:40f0:8", ["const:b65980:8", "const:4:8"]]
- 00b65980 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65a1c ["INT_ADD", "register:40f0:8", ["const:b65a1c:8", "const:4:8"]]
+ 00b65a1c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65988 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b0:8"]]
- 00b65988 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65a24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
+ 00b65a24 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65968 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b0:8"]]
- 00b65968 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65a04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
+ 00b65a04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-17370ba65ea46e92492456150cb9b3c9"></a>

### [`00b6599c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b6599c.md) → [`00b65a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65a38.md) _ZN8firebase15options_builder10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b65a68",
      "incomplete_value": true,
      "site": "00b65a68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b659cc",
      "incomplete_value": true,
      "site": "00b659cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b0:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b65a4c",
      "incomplete_value": true,
      "site": "00b65a4c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b659b0",
      "incomplete_value": true,
      "site": "00b659b0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65a54",
      "incomplete_value": false,
      "site": "00b65a60",
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
            "const:a09:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b659b8",
      "incomplete_value": false,
      "site": "00b659c4",
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
            "const:a56:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65a48",
      "READ",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65a54",
      "PARAM",
      [
        "storage",
        "002a2a56",
        null,
        "string"
      ]
    ],
    [
      "00b65a68",
      "WRITE",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65a48",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65a54",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b65a68",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b659c4 ["INT_ADD", "register:40f0:8", ["const:b659c4:8", "const:4:8"]]
- 00b659c4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65a60 ["INT_ADD", "register:40f0:8", ["const:b65a60:8", "const:4:8"]]
+ 00b65a60 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b659cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b0:8"]]
- 00b659cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65a68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
+ 00b65a68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b659ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:b0:8"]]
- 00b659ac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65a48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:1b0:8"]]
+ 00b65a48 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c14e0963b3b39ae1ce29571dc93d75c6"></a>

### [`00b659ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b659ec.md) → [`00b65a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65a88.md) _ZN8firebase15options_builder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65abc",
      "incomplete_value": true,
      "site": "00b65ac8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65a20",
      "incomplete_value": true,
      "site": "00b65a2c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b0:8"
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
      "00b65a9c",
      "READ",
      [
        "storage",
        "011260b8",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00b65a20",
      "READ",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b65a44",
      "WRITE",
      [
        "storage",
        "011260b8",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b65a9c",
      "READ",
      [
        "storage",
        "011261b8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65abc",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65ae0",
      "WRITE",
      [
        "storage",
        "011261b8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65a2c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65a2c ["INT_ADD", "register:40f0:8", ["const:b65a2c:8", "const:4:8"]]
- 00b65a2c ["CALLIND", null, ["register:0:8"]]
+ 00b65ac8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b65ac8 ["INT_ADD", "register:40f0:8", ["const:b65ac8:8", "const:4:8"]]
+ 00b65ac8 ["CALLIND", null, ["register:0:8"]]
- 00b65a00 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:b8:8"]]
- 00b65a00 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b65a00 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b65a9c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:1b8:8"]]
+ 00b65a9c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b65a9c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00b65a0c ["BRANCH", null, ["local:b3:8"]]
+ 00b65aa8 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-48ef72b4d3fcaaad5af0725d62999890"></a>

### [`00b65a58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65a58.md) → [`00b65af4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65af4.md) _ZN8firebase15options_builder12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b65b0c",
      "incomplete_value": true,
      "site": "00b65b0c",
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
      "definition_site": "00b65a70",
      "incomplete_value": true,
      "site": "00b65a70",
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
      "unmatched:00b65a58",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b65a5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b65a60",
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
      "00b65af4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b65af8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b65afc",
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
- 00b65a70 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b65a70 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b65b0c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b65b0c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b65a58 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b65a58 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b65a58 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b65a5c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b65a5c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b65a5c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b65a5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0eaeec022804b42d542d36fc158dac26"></a>

### [`00b65ac8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65ac8.md) → [`00b65b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65b64.md) _ZN8firebase15options_builder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b65ba4",
      "incomplete_value": true,
      "site": "00b65ba4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65b08",
      "incomplete_value": true,
      "site": "00b65b08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:b0:8"
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
      "definition_site": "00b65b80",
      "incomplete_value": true,
      "site": "00b65b80",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ae4",
      "incomplete_value": true,
      "site": "00b65ae4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65b88",
      "incomplete_value": false,
      "site": "00b65b9c",
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
            "const:a09:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65aec",
      "incomplete_value": false,
      "site": "00b65b00",
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
            "const:a56:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65b78",
      "READ",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65b88",
      "PARAM",
      [
        "storage",
        "002a2a56",
        null,
        "string"
      ]
    ],
    [
      "00b65ba4",
      "WRITE",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65b78",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65b88",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ],
    [
      "00b65ba4",
      "WRITE",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65b00 ["INT_ADD", "register:40f0:8", ["const:b65b00:8", "const:4:8"]]
- 00b65b00 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65b9c ["INT_ADD", "register:40f0:8", ["const:b65b9c:8", "const:4:8"]]
+ 00b65b9c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65b08 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b0:8"]]
- 00b65b08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65ba4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1b0:8"]]
+ 00b65ba4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65adc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b0:8"]]
- 00b65adc ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65b78 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:1b0:8"]]
+ 00b65b78 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d93e9471760557da54aa683f4a67a697"></a>

### [`00b65b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65b38.md) → [`00b65bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65bd4.md) _ZN8firebase15options_builder11GetMethodIdENS0_6MethodE

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
      "definition_site": "00b65bf0",
      "incomplete_value": false,
      "site": "00b65bf4",
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
      "definition_site": "00b65b54",
      "incomplete_value": false,
      "site": "00b65b58",
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
      "definition_site": "00b65c00",
      "incomplete_value": true,
      "site": "00b65c0c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "definition_site": "00b65b64",
      "incomplete_value": true,
      "site": "00b65b70",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00b65bf0",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b65c00",
      "DATA",
      [
        "storage",
        "011260c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65bf0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b65c00",
      "DATA",
      [
        "storage",
        "011261c0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65b58 ["INT_ADD", "register:40f0:8", ["const:b65b58:8", "const:4:8"]]
- 00b65b58 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b65bf4 ["INT_ADD", "register:40f0:8", ["const:b65bf4:8", "const:4:8"]]
+ 00b65bf4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b65b54 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b65b54 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65b54 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65b54 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b65bf0 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b65bf0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65bf0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65bf0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65b60 ["COPY", "tmp:0:8", ["const:c0:8"]]
- 00b65b60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b65b60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b65b60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b65bfc ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 00b65bfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b65bfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b65bfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0ede394e7f0b390ecfd89b42a17e6e85"></a>

### [`00b65b74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65b74.md) → [`00b65c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65c10.md) _ZN8firebase15options_builder13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b65b9c",
      "incomplete_value": true,
      "site": "00b65bac",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b65ba0",
      "incomplete_value": true,
      "site": "00b65bac",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "00b65ba4",
      "incomplete_value": false,
      "site": "00b65bac",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:00b65b88",
      "READ",
      [
        "storage",
        "011260b0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b65b90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65c54"
      ]
    ],
    [
      "unmatched:00b65b98",
      "PARAM",
      [
        "storage",
        "002a2a56",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b65c24",
      "READ",
      [
        "storage",
        "011261b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65c2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65c54"
      ]
    ],
    [
      "00b65c34",
      "PARAM",
      [
        "storage",
        "002a2a09",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65bac ["INT_ADD", "register:40f0:8", ["const:b65bac:8", "const:4:8"]]
- 00b65bac ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65c48 ["INT_ADD", "register:40f0:8", ["const:b65c48:8", "const:4:8"]]
+ 00b65c48 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65b88 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:b0:8"]]
- 00b65b88 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00b65b8c ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-740e723055bdbac11d4e48082d5caadd"></a>

### [`00b65be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65be4.md) → [`00b65c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65c80.md) _ZN8firebase15options_builder10GetFieldIdENS0_5FieldE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 46.67% / 新版 46.67%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65c94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b65c08"
      ]
    ],
    [
      "unmatched:00b65c00",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b65c04",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00b65c94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b65ca4"
      ]
    ],
    [
      "00b65c9c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b65ca0",
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
- 00b65c00 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b65c00 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65c00 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65c00 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65c04 ["INT_ADD", "register:40f0:8", ["const:b65c04:8", "const:4:8"]]
- 00b65c04 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b65c08 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-d99b9844d213c76051392e644466d919"></a>

### [`00b65c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65c20.md) → [`00b65cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65cbc.md) _ZN8firebase7options19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEENS_4util16

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b65cd0",
      "incomplete_value": true,
      "site": "00b65cd0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65c34",
      "incomplete_value": true,
      "site": "00b65c34",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
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
      "00b65ccc",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b65c40",
      "PARAM",
      [
        "storage",
        "002b596b",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b65c44",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5afe0"
      ]
    ]
  ],
  "added": [
    [
      "00b65ccc",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65cdc",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b65ce0",
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
- 00b65c34 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b65c34 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b65cd0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b65cd0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00b65c30 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:108:8"]]
- 00b65c30 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65ccc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
+ 00b65ccc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b65c40 ["COPY", "tmp:0:8", ["const:96b:8"]]
- 00b65c40 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00b65c40 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00b65c40 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-a0078a1b84b85af658b4eb30aa2c6991"></a>

### [`00b65c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65c60.md) → [`00b65cfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65cfc.md) _ZN8firebase7options19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEEE

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
      "definition_site": "00b65d28",
      "incomplete_value": true,
      "site": "00b65d28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65c8c",
      "incomplete_value": true,
      "site": "00b65c8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b65d10",
      "incomplete_value": true,
      "site": "00b65d10",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65c74",
      "incomplete_value": true,
      "site": "00b65c74",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65d18",
      "incomplete_value": false,
      "site": "00b65d20",
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
            "const:9ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65c7c",
      "incomplete_value": false,
      "site": "00b65c84",
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
            "const:96b:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65d0c",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65d18",
      "PARAM",
      [
        "storage",
        "002b596b",
        null,
        "string"
      ]
    ],
    [
      "00b65d28",
      "WRITE",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65d0c",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65d18",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b65d28",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65c84 ["INT_ADD", "register:40f0:8", ["const:b65c84:8", "const:4:8"]]
- 00b65c84 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65d20 ["INT_ADD", "register:40f0:8", ["const:b65d20:8", "const:4:8"]]
+ 00b65d20 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65c8c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:108:8"]]
- 00b65c8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65d28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
+ 00b65d28 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65c70 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:108:8"]]
- 00b65c70 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65d0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
+ 00b65d0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2cb1fec87716d55c1effe09a462f5c02"></a>

### [`00b65ca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65ca0.md) → [`00b65d3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65d3c.md) _ZN8firebase7options10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b65d6c",
      "incomplete_value": true,
      "site": "00b65d6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65cd0",
      "incomplete_value": true,
      "site": "00b65cd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b65d50",
      "incomplete_value": true,
      "site": "00b65d50",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65cb4",
      "incomplete_value": true,
      "site": "00b65cb4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65d5c",
      "incomplete_value": false,
      "site": "00b65d64",
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
            "const:9ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65cc0",
      "incomplete_value": false,
      "site": "00b65cc8",
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
            "const:96b:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65d4c",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65d5c",
      "PARAM",
      [
        "storage",
        "002b596b",
        null,
        "string"
      ]
    ],
    [
      "00b65d6c",
      "WRITE",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65d4c",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65d5c",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b65d6c",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65cc8 ["INT_ADD", "register:40f0:8", ["const:b65cc8:8", "const:4:8"]]
- 00b65cc8 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65d64 ["INT_ADD", "register:40f0:8", ["const:b65d64:8", "const:4:8"]]
+ 00b65d64 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65cd0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:108:8"]]
- 00b65cd0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65d6c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
+ 00b65d6c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65cb0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:108:8"]]
- 00b65cb0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65d4c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
+ 00b65d4c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b3148c1ae8f8bde7aa6e289271c20413"></a>

### [`00b65ce4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65ce4.md) → [`00b65d80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65d80.md) _ZN8firebase7options10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b65db0",
      "incomplete_value": true,
      "site": "00b65db0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d14",
      "incomplete_value": true,
      "site": "00b65d14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:108:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b65d94",
      "incomplete_value": true,
      "site": "00b65d94",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65cf8",
      "incomplete_value": true,
      "site": "00b65cf8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65d9c",
      "incomplete_value": false,
      "site": "00b65da8",
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
            "const:9ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d00",
      "incomplete_value": false,
      "site": "00b65d0c",
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
            "const:96b:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65d90",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65d9c",
      "PARAM",
      [
        "storage",
        "002b596b",
        null,
        "string"
      ]
    ],
    [
      "00b65db0",
      "WRITE",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65d90",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65d9c",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b65db0",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65d0c ["INT_ADD", "register:40f0:8", ["const:b65d0c:8", "const:4:8"]]
- 00b65d0c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65da8 ["INT_ADD", "register:40f0:8", ["const:b65da8:8", "const:4:8"]]
+ 00b65da8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65d14 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:108:8"]]
- 00b65d14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65db0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
+ 00b65db0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65cf4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:108:8"]]
- 00b65cf4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65d90 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:208:8"]]
+ 00b65d90 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f3968a78841256b2cc118626d459ccb2"></a>

### [`00b65d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65d34.md) → [`00b65dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65dd0.md) _ZN8firebase7options15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b65e28",
      "incomplete_value": true,
      "site": "00b65e28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d8c",
      "incomplete_value": true,
      "site": "00b65d8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:110:8"
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
      "definition_site": "00b65e04",
      "incomplete_value": true,
      "site": "00b65e10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:208:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65d68",
      "incomplete_value": true,
      "site": "00b65d74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:108:8"
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
      "00b65de4",
      "READ",
      [
        "storage",
        "01126110",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65e04",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65e28",
      "WRITE",
      [
        "storage",
        "01126110",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b65de4",
      "READ",
      [
        "storage",
        "01126210",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65e04",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65e28",
      "WRITE",
      [
        "storage",
        "01126210",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65d74 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65d74 ["INT_ADD", "register:40f0:8", ["const:b65d74:8", "const:4:8"]]
- 00b65d74 ["CALLIND", null, ["register:0:8"]]
+ 00b65e10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b65e10 ["INT_ADD", "register:40f0:8", ["const:b65e10:8", "const:4:8"]]
+ 00b65e10 ["CALLIND", null, ["register:0:8"]]
- 00b65d8c ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b65d8c ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:110:8"]]
- 00b65d8c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b65e28 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b65e28 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:210:8"]]
+ 00b65e28 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b65d48 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:110:8"]]
- 00b65d48 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b65d48 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b65de4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:210:8"]]
+ 00b65de4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b65de4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-37333d59347b49b039c154d861d3c8c2"></a>

### [`00b65da0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65da0.md) → [`00b65e3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65e3c.md) _ZN8firebase7options12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b65e78",
      "incomplete_value": true,
      "site": "00b65e78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ddc",
      "incomplete_value": true,
      "site": "00b65ddc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:110:8"
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
      "definition_site": "00b65e98",
      "incomplete_value": true,
      "site": "00b65e98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65dfc",
      "incomplete_value": true,
      "site": "00b65dfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:108:8"
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
      "definition_site": "00b65e54",
      "incomplete_value": true,
      "site": "00b65e54",
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
      "definition_site": "00b65db8",
      "incomplete_value": true,
      "site": "00b65db8",
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
      "00b65e50",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65e5c",
      "READ",
      [
        "storage",
        "01126110",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65e78",
      "WRITE",
      [
        "storage",
        "01126110",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b65e50",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65e5c",
      "READ",
      [
        "storage",
        "01126210",
        null,
        "undefined1"
      ]
    ],
    [
      "00b65e78",
      "WRITE",
      [
        "storage",
        "01126210",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65ddc ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b65ddc ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b65ddc ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:110:8"]]
- 00b65ddc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b65e78 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b65e78 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b65e78 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:210:8"]]
+ 00b65e78 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b65df8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b65df8 ["INT_ADD", "register:40f0:8", ["const:b65df8:8", "const:4:8"]]
- 00b65df8 ["CALLIND", null, ["register:0:8"]]
+ 00b65e94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b65e94 ["INT_ADD", "register:40f0:8", ["const:b65e94:8", "const:4:8"]]
+ 00b65e94 ["CALLIND", null, ["register:0:8"]]
- 00b65dfc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:108:8"]]
- 00b65dfc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b65dfc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b65e98 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:208:8"]]
+ 00b65e98 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b65e98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-bb0d5d19bb8743b2f9c915629237e341"></a>

### [`00b65e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65e10.md) → [`00b65eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65eac.md) _ZN8firebase7options14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b65eec",
      "incomplete_value": true,
      "site": "00b65eec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65e50",
      "incomplete_value": true,
      "site": "00b65e50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:108:8"
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
      "definition_site": "00b65ec8",
      "incomplete_value": true,
      "site": "00b65ec8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65e2c",
      "incomplete_value": true,
      "site": "00b65e2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65ed0",
      "incomplete_value": false,
      "site": "00b65ee4",
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
            "const:9ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65e34",
      "incomplete_value": false,
      "site": "00b65e48",
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
            "const:96b:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65ec0",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65ed0",
      "PARAM",
      [
        "storage",
        "002b596b",
        null,
        "string"
      ]
    ],
    [
      "00b65eec",
      "WRITE",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65ec0",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65ed0",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b65eec",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65e48 ["INT_ADD", "register:40f0:8", ["const:b65e48:8", "const:4:8"]]
- 00b65e48 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65ee4 ["INT_ADD", "register:40f0:8", ["const:b65ee4:8", "const:4:8"]]
+ 00b65ee4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65e50 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:108:8"]]
- 00b65e50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65eec ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:208:8"]]
+ 00b65eec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65e24 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:108:8"]]
- 00b65e24 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65ec0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:208:8"]]
+ 00b65ec0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-90d68b76d322acede050eba180034d17"></a>

### [`00b65e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65e80.md) → [`00b65f1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65f1c.md) _ZN8firebase7options11GetMethodIdENS0_6MethodE

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
      "definition_site": "00b65f38",
      "incomplete_value": false,
      "site": "00b65f3c",
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
      "definition_site": "00b65e9c",
      "incomplete_value": false,
      "site": "00b65ea0",
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
      "definition_site": "00b65f48",
      "incomplete_value": true,
      "site": "00b65f54",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "definition_site": "00b65eac",
      "incomplete_value": true,
      "site": "00b65eb8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00b65f38",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b65f48",
      "DATA",
      [
        "storage",
        "01126118",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65f38",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b65f48",
      "DATA",
      [
        "storage",
        "01126218",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65ea0 ["INT_ADD", "register:40f0:8", ["const:b65ea0:8", "const:4:8"]]
- 00b65ea0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b65f3c ["INT_ADD", "register:40f0:8", ["const:b65f3c:8", "const:4:8"]]
+ 00b65f3c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b65e9c ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b65e9c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65e9c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65e9c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b65f38 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b65f38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65f38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65f38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65ea8 ["COPY", "tmp:0:8", ["const:118:8"]]
- 00b65ea8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b65ea8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b65ea8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b65f44 ["COPY", "tmp:0:8", ["const:218:8"]]
+ 00b65f44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b65f44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b65f44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-17f32102af3d9f03ae369b5fede4b814"></a>

### [`00b65ebc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65ebc.md) → [`00b65f58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65f58.md) _ZN8firebase7options13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b65f98",
      "incomplete_value": true,
      "site": "00b65f98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:208:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65efc",
      "incomplete_value": true,
      "site": "00b65efc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:108:8"
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
      "definition_site": "00b65f74",
      "incomplete_value": true,
      "site": "00b65f74",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ed8",
      "incomplete_value": true,
      "site": "00b65ed8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b65f7c",
      "incomplete_value": false,
      "site": "00b65f90",
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
            "const:9ab:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ee0",
      "incomplete_value": false,
      "site": "00b65ef4",
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
            "const:96b:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b65f6c",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65f7c",
      "PARAM",
      [
        "storage",
        "002b596b",
        null,
        "string"
      ]
    ],
    [
      "00b65f98",
      "WRITE",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b65f6c",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b65f7c",
      "PARAM",
      [
        "storage",
        "002b59ab",
        null,
        "string"
      ]
    ],
    [
      "00b65f98",
      "WRITE",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65ef4 ["INT_ADD", "register:40f0:8", ["const:b65ef4:8", "const:4:8"]]
- 00b65ef4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b65f90 ["INT_ADD", "register:40f0:8", ["const:b65f90:8", "const:4:8"]]
+ 00b65f90 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65efc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:108:8"]]
- 00b65efc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b65f98 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:208:8"]]
+ 00b65f98 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65ed0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:108:8"]]
- 00b65ed0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b65f6c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:208:8"]]
+ 00b65f6c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ed542f09669b7ef3e440d3ce1782d3b5"></a>

### [`00b65f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65f2c.md) → [`00b65fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b65/00b65fc8.md) _ZN8firebase7options10GetFieldIdENS0_5FieldE

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
      "definition_site": "00b65fe4",
      "incomplete_value": false,
      "site": "00b65fe8",
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
      "definition_site": "00b65f48",
      "incomplete_value": false,
      "site": "00b65f4c",
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
      "definition_site": "00b65ff4",
      "incomplete_value": true,
      "site": "00b66000",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "definition_site": "00b65f58",
      "incomplete_value": true,
      "site": "00b65f64",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00b65fe4",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b65ff4",
      "DATA",
      [
        "storage",
        "01126150",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b65fe4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b65ff4",
      "DATA",
      [
        "storage",
        "01126250",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65f4c ["INT_ADD", "register:40f0:8", ["const:b65f4c:8", "const:4:8"]]
- 00b65f4c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b65fe8 ["INT_ADD", "register:40f0:8", ["const:b65fe8:8", "const:4:8"]]
+ 00b65fe8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b65f48 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b65f48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b65f48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b65f48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b65fe4 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b65fe4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65fe4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b65fe4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b65f54 ["COPY", "tmp:0:8", ["const:150:8"]]
- 00b65f54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b65f54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b65f54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b65ff0 ["COPY", "tmp:0:8", ["const:250:8"]]
+ 00b65ff0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b65ff0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b65ff0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8d980f077430175b64be180d0d714f60"></a>

### [`00b65f68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65f68.md) → [`00b66004`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66004.md) _ZN8firebase17version_registrar19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEE

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
      "definition_site": "00b66030",
      "incomplete_value": true,
      "site": "00b66030",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65f94",
      "incomplete_value": true,
      "site": "00b65f94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b66018",
      "incomplete_value": true,
      "site": "00b66018",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65f7c",
      "incomplete_value": true,
      "site": "00b65f7c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b66024",
      "incomplete_value": false,
      "site": "00b66028",
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
            "const:9ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65f88",
      "incomplete_value": false,
      "site": "00b65f8c",
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
            "const:97a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b66014",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66024",
      "PARAM",
      [
        "storage",
        "002c097a",
        null,
        "string"
      ]
    ],
    [
      "00b66030",
      "WRITE",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66014",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66024",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b66030",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65f8c ["INT_ADD", "register:40f0:8", ["const:b65f8c:8", "const:4:8"]]
- 00b65f8c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b66028 ["INT_ADD", "register:40f0:8", ["const:b66028:8", "const:4:8"]]
+ 00b66028 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65f94 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:158:8"]]
- 00b65f94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66030 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
+ 00b66030 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65f78 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:158:8"]]
- 00b65f78 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b66014 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
+ 00b66014 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2f3dd852fe8ad5831871355630e527d1"></a>

### [`00b65fa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65fa8.md) → [`00b66044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66044.md) _ZN8firebase17version_registrar19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS5_9allocatorIS8_EEE

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
      "definition_site": "00b66070",
      "incomplete_value": true,
      "site": "00b66070",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65fd4",
      "incomplete_value": true,
      "site": "00b65fd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b66058",
      "incomplete_value": true,
      "site": "00b66058",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65fbc",
      "incomplete_value": true,
      "site": "00b65fbc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b66060",
      "incomplete_value": false,
      "site": "00b66068",
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
            "const:9ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65fc4",
      "incomplete_value": false,
      "site": "00b65fcc",
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
            "const:97a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b66054",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66060",
      "PARAM",
      [
        "storage",
        "002c097a",
        null,
        "string"
      ]
    ],
    [
      "00b66070",
      "WRITE",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66054",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66060",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b66070",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b65fcc ["INT_ADD", "register:40f0:8", ["const:b65fcc:8", "const:4:8"]]
- 00b65fcc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b66068 ["INT_ADD", "register:40f0:8", ["const:b66068:8", "const:4:8"]]
+ 00b66068 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b65fd4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:158:8"]]
- 00b65fd4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66070 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
+ 00b66070 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65fb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:158:8"]]
- 00b65fb8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b66054 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
+ 00b66054 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0310f42fd60a5b7668285f7437ea2f28"></a>

### [`00b65fe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b65/00b65fe8.md) → [`00b66084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66084.md) _ZN8firebase17version_registrar10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
      "definition_site": "00b660b4",
      "incomplete_value": true,
      "site": "00b660b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66018",
      "incomplete_value": true,
      "site": "00b66018",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b66098",
      "incomplete_value": true,
      "site": "00b66098",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b65ffc",
      "incomplete_value": true,
      "site": "00b65ffc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b660a4",
      "incomplete_value": false,
      "site": "00b660ac",
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
            "const:9ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66008",
      "incomplete_value": false,
      "site": "00b66010",
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
            "const:97a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b66094",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ],
    [
      "00b660a4",
      "PARAM",
      [
        "storage",
        "002c097a",
        null,
        "string"
      ]
    ],
    [
      "00b660b4",
      "WRITE",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66094",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b660a4",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b660b4",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66010 ["INT_ADD", "register:40f0:8", ["const:b66010:8", "const:4:8"]]
- 00b66010 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b660ac ["INT_ADD", "register:40f0:8", ["const:b660ac:8", "const:4:8"]]
+ 00b660ac ["CALL", null, ["callee:00c5afe0:8"]]
- 00b66018 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:158:8"]]
- 00b66018 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b660b4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
+ 00b660b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b65ff8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:158:8"]]
- 00b65ff8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b66094 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
+ 00b66094 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5618910c7fa0321815462c3c8a0fd6f2"></a>

### [`00b6602c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b6602c.md) → [`00b660c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b660c8.md) _ZN8firebase17version_registrar10CacheClassEP7_JNIEnvP8_jobject

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
      "definition_site": "00b660f8",
      "incomplete_value": true,
      "site": "00b660f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6605c",
      "incomplete_value": true,
      "site": "00b6605c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b660dc",
      "incomplete_value": true,
      "site": "00b660dc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66040",
      "incomplete_value": true,
      "site": "00b66040",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b660e4",
      "incomplete_value": false,
      "site": "00b660f0",
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
            "const:9ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66048",
      "incomplete_value": false,
      "site": "00b66054",
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
            "const:97a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b660d8",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ],
    [
      "00b660e4",
      "PARAM",
      [
        "storage",
        "002c097a",
        null,
        "string"
      ]
    ],
    [
      "00b660f8",
      "WRITE",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b660d8",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b660e4",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b660f8",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66054 ["INT_ADD", "register:40f0:8", ["const:b66054:8", "const:4:8"]]
- 00b66054 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b660f0 ["INT_ADD", "register:40f0:8", ["const:b660f0:8", "const:4:8"]]
+ 00b660f0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b6605c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:158:8"]]
- 00b6605c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b660f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
+ 00b660f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b6603c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:158:8"]]
- 00b6603c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b660d8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:258:8"]]
+ 00b660d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-04aa8c444ee143c2c5b72bedd0c6f2da"></a>

### [`00b6607c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b6607c.md) → [`00b66118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66118.md) _ZN8firebase17version_registrar15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
      "definition_site": "00b66170",
      "incomplete_value": true,
      "site": "00b66170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b660d4",
      "incomplete_value": true,
      "site": "00b660d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "definition_site": "00b6614c",
      "incomplete_value": true,
      "site": "00b66158",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:258:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b660b0",
      "incomplete_value": true,
      "site": "00b660bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:158:8"
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
      "00b6612c",
      "READ",
      [
        "storage",
        "01126160",
        null,
        "undefined1"
      ]
    ],
    [
      "00b6614c",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66170",
      "WRITE",
      [
        "storage",
        "01126160",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b6612c",
      "READ",
      [
        "storage",
        "01126260",
        null,
        "undefined1"
      ]
    ],
    [
      "00b6614c",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66170",
      "WRITE",
      [
        "storage",
        "01126260",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b660bc ["COPY", "register:0:8", ["register:4040:8"]]
- 00b660bc ["INT_ADD", "register:40f0:8", ["const:b660bc:8", "const:4:8"]]
- 00b660bc ["CALLIND", null, ["register:0:8"]]
+ 00b66158 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b66158 ["INT_ADD", "register:40f0:8", ["const:b66158:8", "const:4:8"]]
+ 00b66158 ["CALLIND", null, ["register:0:8"]]
- 00b660d4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00b660d4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:160:8"]]
- 00b660d4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b66170 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00b66170 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:260:8"]]
+ 00b66170 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b66090 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:160:8"]]
- 00b66090 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b66090 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00b6612c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:260:8"]]
+ 00b6612c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00b6612c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-56c1bcbe772a9236c8b50db309167bd3"></a>

### [`00b660e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b660e8.md) → [`00b66184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66184.md) _ZN8firebase17version_registrar12ReleaseClassEP7_JNIEnv

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
      "definition_site": "00b661c0",
      "incomplete_value": true,
      "site": "00b661c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66124",
      "incomplete_value": true,
      "site": "00b66124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "definition_site": "00b661e0",
      "incomplete_value": true,
      "site": "00b661e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66144",
      "incomplete_value": true,
      "site": "00b66144",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:158:8"
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
      "definition_site": "00b6619c",
      "incomplete_value": true,
      "site": "00b6619c",
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
      "definition_site": "00b66100",
      "incomplete_value": true,
      "site": "00b66100",
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
      "00b66198",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ],
    [
      "00b661a4",
      "READ",
      [
        "storage",
        "01126160",
        null,
        "undefined1"
      ]
    ],
    [
      "00b661c0",
      "WRITE",
      [
        "storage",
        "01126160",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b66198",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b661a4",
      "READ",
      [
        "storage",
        "01126260",
        null,
        "undefined1"
      ]
    ],
    [
      "00b661c0",
      "WRITE",
      [
        "storage",
        "01126260",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66124 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00b66124 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00b66124 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:160:8"]]
- 00b66124 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b661c0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b661c0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b661c0 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:260:8"]]
+ 00b661c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00b66140 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b66140 ["INT_ADD", "register:40f0:8", ["const:b66140:8", "const:4:8"]]
- 00b66140 ["CALLIND", null, ["register:0:8"]]
+ 00b661dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b661dc ["INT_ADD", "register:40f0:8", ["const:b661dc:8", "const:4:8"]]
+ 00b661dc ["CALLIND", null, ["register:0:8"]]
- 00b66144 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:158:8"]]
- 00b66144 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b66144 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00b661e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:258:8"]]
+ 00b661e0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00b661e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-da78d7ea959dd2b7b5f890ce23d3e82e"></a>

### [`00b66158`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66158.md) → [`00b661f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b661f4.md) _ZN8firebase17version_registrar14CacheMethodIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b66234",
      "incomplete_value": true,
      "site": "00b66234",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66198",
      "incomplete_value": true,
      "site": "00b66198",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:158:8"
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
      "definition_site": "00b66210",
      "incomplete_value": true,
      "site": "00b66210",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66174",
      "incomplete_value": true,
      "site": "00b66174",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b66218",
      "incomplete_value": false,
      "site": "00b6622c",
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
            "const:9ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6617c",
      "incomplete_value": false,
      "site": "00b66190",
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
            "const:97a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b66208",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66218",
      "PARAM",
      [
        "storage",
        "002c097a",
        null,
        "string"
      ]
    ],
    [
      "00b66234",
      "WRITE",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66208",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66218",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b66234",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66190 ["INT_ADD", "register:40f0:8", ["const:b66190:8", "const:4:8"]]
- 00b66190 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b6622c ["INT_ADD", "register:40f0:8", ["const:b6622c:8", "const:4:8"]]
+ 00b6622c ["CALL", null, ["callee:00c5afe0:8"]]
- 00b66198 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:158:8"]]
- 00b66198 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66234 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:258:8"]]
+ 00b66234 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b6616c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:158:8"]]
- 00b6616c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b66208 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:258:8"]]
+ 00b66208 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-6f58c03dc5034fb1eb15ac9b29cdd3b3"></a>

### [`00b661c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b661c8.md) → [`00b66264`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66264.md) _ZN8firebase17version_registrar11GetMethodIdENS0_6MethodE

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
      "definition_site": "00b66280",
      "incomplete_value": false,
      "site": "00b66284",
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
      "definition_site": "00b661e4",
      "incomplete_value": false,
      "site": "00b661e8",
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
      "definition_site": "00b66290",
      "incomplete_value": true,
      "site": "00b6629c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "definition_site": "00b661f4",
      "incomplete_value": true,
      "site": "00b66200",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00b66280",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00b66290",
      "DATA",
      [
        "storage",
        "01126168",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66280",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00b66290",
      "DATA",
      [
        "storage",
        "01126268",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b661e8 ["INT_ADD", "register:40f0:8", ["const:b661e8:8", "const:4:8"]]
- 00b661e8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b66284 ["INT_ADD", "register:40f0:8", ["const:b66284:8", "const:4:8"]]
+ 00b66284 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b661e4 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00b661e4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b661e4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b661e4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b66280 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00b66280 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66280 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66280 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b661f0 ["COPY", "tmp:0:8", ["const:168:8"]]
- 00b661f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b661f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b661f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b6628c ["COPY", "tmp:0:8", ["const:268:8"]]
+ 00b6628c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b6628c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b6628c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5c9c33befd059aef50fd6624cea3eb2a"></a>

### [`00b66204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66204.md) → [`00b662a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b662a0.md) _ZN8firebase17version_registrar13CacheFieldIdsEP7_JNIEnvP8_jobject

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
      "definition_site": "00b662e0",
      "incomplete_value": true,
      "site": "00b662e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:258:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66244",
      "incomplete_value": true,
      "site": "00b66244",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:158:8"
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
      "definition_site": "00b662bc",
      "incomplete_value": true,
      "site": "00b662bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66220",
      "incomplete_value": true,
      "site": "00b66220",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b662c4",
      "incomplete_value": false,
      "site": "00b662d8",
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
            "const:9ba:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66228",
      "incomplete_value": false,
      "site": "00b6623c",
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
            "const:97a:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b662b4",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ],
    [
      "00b662c4",
      "PARAM",
      [
        "storage",
        "002c097a",
        null,
        "string"
      ]
    ],
    [
      "00b662e0",
      "WRITE",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b662b4",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ],
    [
      "00b662c4",
      "PARAM",
      [
        "storage",
        "002c09ba",
        null,
        "string"
      ]
    ],
    [
      "00b662e0",
      "WRITE",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6623c ["INT_ADD", "register:40f0:8", ["const:b6623c:8", "const:4:8"]]
- 00b6623c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b662d8 ["INT_ADD", "register:40f0:8", ["const:b662d8:8", "const:4:8"]]
+ 00b662d8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b66244 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:158:8"]]
- 00b66244 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b662e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:258:8"]]
+ 00b662e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00b66218 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:158:8"]]
- 00b66218 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b662b4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:258:8"]]
+ 00b662b4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-3eeee9a211fcf06c43e3211a85115d3f"></a>

### [`00b66274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66274.md) → [`00b66310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66310.md) _ZN8firebase17version_registrar10GetFieldIdENS0_5FieldE

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
      "definition_site": "00b6632c",
      "incomplete_value": false,
      "site": "00b66330",
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
      "definition_site": "00b66290",
      "incomplete_value": false,
      "site": "00b66294",
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
      "definition_site": "00b6633c",
      "incomplete_value": true,
      "site": "00b66348",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "definition_site": "00b662a0",
      "incomplete_value": true,
      "site": "00b662ac",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00b6632c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00b6633c",
      "DATA",
      [
        "storage",
        "01126180",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b6632c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00b6633c",
      "DATA",
      [
        "storage",
        "01126280",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66294 ["INT_ADD", "register:40f0:8", ["const:b66294:8", "const:4:8"]]
- 00b66294 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b66330 ["INT_ADD", "register:40f0:8", ["const:b66330:8", "const:4:8"]]
+ 00b66330 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b66290 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00b66290 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b66290 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b66290 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b6632c ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00b6632c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6632c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6632c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b6629c ["COPY", "tmp:0:8", ["const:180:8"]]
- 00b6629c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b6629c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b6629c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b66338 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 00b66338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b66338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b66338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-45127701307192a62604a0c1ed44f336"></a>

### [`00b662b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b662b0.md) → [`00b6634c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b6634c.md) _ZN8firebase10AppOptions11LoadDefaultEPS0_P7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bec0.md) · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00b66454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66454.md) [`00b6663c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b6663c.md) [`00b66a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66a48.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00c5bf90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf90.md) · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00b664f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b664f0.md) [`00b666d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b666d8.md) [`00b66ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66ae4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.10% / 新版 98.10%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b66394",
      "incomplete_value": true,
      "site": "00b663a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:208:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b662f8",
      "incomplete_value": true,
      "site": "00b66308",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:108:8"
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
      "definition_site": "00b66398",
      "incomplete_value": true,
      "site": "00b663a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:218:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b662fc",
      "incomplete_value": true,
      "site": "00b66308",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:118:8"
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
      "00b66394",
      "READ",
      [
        "storage",
        "01126108",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66398",
      "READ",
      [
        "storage",
        "01126118",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66394",
      "READ",
      [
        "storage",
        "01126208",
        null,
        "undefined8"
      ]
    ],
    [
      "00b66398",
      "READ",
      [
        "storage",
        "01126218",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66308 ["INT_ADD", "register:40f0:8", ["const:b66308:8", "const:4:8"]]
- 00b66308 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00b663a4 ["INT_ADD", "register:40f0:8", ["const:b663a4:8", "const:4:8"]]
+ 00b663a4 ["CALL", null, ["callee:00c5ac70:8"]]
- 00b662e8 ["INT_ADD", "register:40f0:8", ["const:b662e8:8", "const:4:8"]]
- 00b662e8 ["CALL", null, ["callee:00b664f0:8"]]
+ 00b66384 ["INT_ADD", "register:40f0:8", ["const:b66384:8", "const:4:8"]]
+ 00b66384 ["CALL", null, ["callee:00b664f0:8"]]
- 00b662f8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:108:8"]]
- 00b662f8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b66394 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:208:8"]]
+ 00b66394 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-7227fd451592b483a2151a98e4cb82c7"></a>

### [`00b66454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66454.md) → [`00b664f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b664f0.md) FUN_00b664f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00b662b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b662b0.md) [`00b66cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66cac.md) [`00b66da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66da4.md) [`00b68240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b68240.md) · 呼出先 5件 [`00b66a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66a48.md) [`00c5aea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aea0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md) [`00c5bd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd00.md)
- 新版 呼出元 4件 [`00b6634c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b6634c.md) [`00b66d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66d48.md) [`00b66e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66e40.md) [`00b682dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b68/00b682dc.md) · 呼出先 5件 [`00b66ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66ae4.md) [`00c5af70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af70.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md) [`00c5bdd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bdd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 81.97% / 新版 81.97%

優先判定に残った影響 `call_argument_candidate` 16件, `store_destination` 6件

アドレスに依存する影響 `branch_value` 4件, `store_condition` 4件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b6650c",
      "incomplete_value": false,
      "site": "00b6650c",
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
            "const:288:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66470",
      "incomplete_value": false,
      "site": "00b66470",
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
            "const:188:8"
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
      "definition_site": "00b66558",
      "incomplete_value": true,
      "site": "00b66558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b664bc",
      "incomplete_value": true,
      "site": "00b664bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "definition_site": "00b665b0",
      "incomplete_value": true,
      "site": "00b665b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66514",
      "incomplete_value": true,
      "site": "00b66514",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:b0:8"
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
      "00b66504",
      "READ",
      [
        "storage",
        "01126188",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6650c",
      "WRITE",
      [
        "storage",
        "01126188",
        null,
        "undefined4"
      ]
    ],
    [
      "00b66530",
      "READ",
      [
        "storage",
        "01126050",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b66504",
      "READ",
      [
        "storage",
        "01126288",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6650c",
      "WRITE",
      [
        "storage",
        "01126288",
        null,
        "undefined4"
      ]
    ],
    [
      "00b66530",
      "READ",
      [
        "storage",
        "01126150",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66470 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:188:8"]]
- 00b66470 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 00b6650c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:288:8"]]
+ 00b6650c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 00b664b4 ["INT_ADD", "register:40f0:8", ["const:b664b4:8", "const:4:8"]]
- 00b664b4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00b66550 ["INT_ADD", "register:40f0:8", ["const:b66550:8", "const:4:8"]]
+ 00b66550 ["CALL", null, ["callee:00c5afe0:8"]]
- 00b664bc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:50:8"]]
- 00b664bc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00b66558 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:150:8"]]
+ 00b66558 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-d89be6da3de516679b001f357ebdbf6a"></a>

### [`00b66a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66a48.md) → [`00b66ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66ae4.md) FUN_00b66ae4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`00b662b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b662b0.md) [`00b66454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66454.md) [`00b66bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66bf8.md) [`00b66cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66cac.md) [`00b66da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66da4.md) · 呼出先 4件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5afd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5afd0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5bd20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd20.md)
- 新版 呼出元 6件 [`00b6634c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b6634c.md) [`00b664f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b664f0.md) [`00b66c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66c94.md) [`00b66d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66d48.md) [`00b66e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66e40.md) · 呼出先 4件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0a0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5bdf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bdf0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.05% / 新版 85.05%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 10件

アドレスに依存する影響 `branch_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b66b18",
      "incomplete_value": true,
      "site": "00b66b18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:288:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66a7c",
      "incomplete_value": true,
      "site": "00b66a7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:188:8"
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
      "definition_site": "00b66b58",
      "incomplete_value": true,
      "site": "00b66b58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66abc",
      "incomplete_value": true,
      "site": "00b66abc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:58:8"
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
      "definition_site": "00b66b78",
      "incomplete_value": true,
      "site": "00b66b78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:150:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66adc",
      "incomplete_value": true,
      "site": "00b66adc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "00b66af8",
      "READ",
      [
        "storage",
        "01126188",
        null,
        "undefined4"
      ]
    ],
    [
      "00b66b08",
      "PARAM",
      [
        "storage",
        "002bbe52",
        null,
        "string"
      ]
    ],
    [
      "00b66b10",
      "READ",
      [
        "storage",
        "01126188",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b66af8",
      "READ",
      [
        "storage",
        "01126288",
        null,
        "undefined4"
      ]
    ],
    [
      "00b66b08",
      "PARAM",
      [
        "storage",
        "002bbdfe",
        null,
        "string"
      ]
    ],
    [
      "00b66b10",
      "READ",
      [
        "storage",
        "01126288",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66a6c ["COPY", "tmp:0:8", ["const:e52:8"]]
- 00b66a6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b66a6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b66a6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b66b08 ["COPY", "tmp:0:8", ["const:dfe:8"]]
+ 00b66b08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66b08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b66b08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b66a70 ["INT_ADD", "register:40f0:8", ["const:b66a70:8", "const:4:8"]]
- 00b66a70 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b66b0c ["INT_ADD", "register:40f0:8", ["const:b66b0c:8", "const:4:8"]]
+ 00b66b0c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b66a7c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:188:8"]]
- 00b66a7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b66b18 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:288:8"]]
+ 00b66b18 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
~~~


<a id="compare-149269313c241fae07ea12f9832f55a7"></a>

### [`00b66cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66cac.md) → [`00b66d48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66d48.md) _ZN8firebase3App6CreateEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a950.md) · 呼出先 7件 [`00879c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879c88.md) [`00b66454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66454.md) [`00b66a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66a48.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md)
- 新版 呼出元 1件 [`00c5aa20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aa20.md) · 呼出先 7件 [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00b664f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b664f0.md) [`00b66ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66ae4.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.21% / 新版 98.21%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b66dc4",
      "incomplete_value": true,
      "site": "00b66dc8",
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
      "definition_site": "00b66d28",
      "incomplete_value": true,
      "site": "00b66d2c",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b66de0",
      "incomplete_value": false,
      "site": "00b66de4",
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
            "const:cef:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66d44",
      "incomplete_value": false,
      "site": "00b66d48",
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
            "const:caf:8"
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
      "00b66db4",
      "READ",
      [
        "storage",
        "00c9b778",
        null,
        "pointer"
      ]
    ],
    [
      "00b66dc4",
      "READ",
      [
        "storage",
        "00c90200",
        "firebase::kDefaultAppName",
        "pointer"
      ]
    ],
    [
      "00b66dc4",
      "PARAM",
      [
        "storage",
        "002b5932",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b66db4",
      "READ",
      [
        "storage",
        "00c9b848",
        null,
        "pointer"
      ]
    ],
    [
      "00b66dc4",
      "READ",
      [
        "storage",
        "00c902d0",
        "firebase::kDefaultAppName",
        "pointer"
      ]
    ],
    [
      "00b66dc4",
      "PARAM",
      [
        "storage",
        "002b5972",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66d2c ["INT_ADD", "register:40f0:8", ["const:b66d2c:8", "const:4:8"]]
- 00b66d2c ["CALL", null, ["callee:00c5bfa0:8"]]
+ 00b66dc8 ["INT_ADD", "register:40f0:8", ["const:b66dc8:8", "const:4:8"]]
+ 00b66dc8 ["CALL", null, ["callee:00c5bfa0:8"]]
- 00b66d48 ["INT_ADD", "register:40f0:8", ["const:b66d48:8", "const:4:8"]]
- 00b66d48 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b66de4 ["INT_ADD", "register:40f0:8", ["const:b66de4:8", "const:4:8"]]
+ 00b66de4 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b66cd4 ["INT_ADD", "register:40f0:8", ["const:b66cd4:8", "const:4:8"]]
- 00b66cd4 ["CALL", null, ["callee:00b664f0:8"]]
+ 00b66d70 ["INT_ADD", "register:40f0:8", ["const:b66d70:8", "const:4:8"]]
+ 00b66d70 ["CALL", null, ["callee:00b664f0:8"]]
~~~


<a id="compare-66d1fb7d6d08169c30929f9b6f747b50"></a>

### [`00b66da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66da4.md) → [`00b66e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b66e40.md) _ZN8firebase3App6CreateERKNS_10AppOptionsEPKcP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bed0.md) · 呼出先 28件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00879c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879c88.md) [`00b66454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b66/00b66454.md)
- 新版 呼出元 1件 [`00c5bfa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bfa0.md) · 呼出先 28件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00b664f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b66/00b664f0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 93.01% / 新版 93.01%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 11件

アドレスに依存する影響 `call_argument_candidate` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b66e90",
      "incomplete_value": false,
      "site": "00b66e98",
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
            "const:a39:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66df4",
      "incomplete_value": false,
      "site": "00b66dfc",
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
            "const:a86:8"
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
      "definition_site": "00b66eac",
      "incomplete_value": false,
      "site": "00b66eb8",
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
            "const:16a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b66e10",
      "incomplete_value": false,
      "site": "00b66e1c",
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
            "const:1be:8"
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
      "definition_site": "00b66eb4",
      "incomplete_value": true,
      "site": "00b66eb8",
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
      "definition_site": "00b66e18",
      "incomplete_value": true,
      "site": "00b66e1c",
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
      "00b66e90",
      "PARAM",
      [
        "storage",
        "0029fa86",
        null,
        "string"
      ]
    ],
    [
      "00b66ea4",
      "READ",
      [
        "storage",
        "00c9b7f8",
        null,
        "pointer"
      ]
    ],
    [
      "00b66eac",
      "PARAM",
      [
        "storage",
        "002bd1be",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b66e90",
      "PARAM",
      [
        "storage",
        "0029fa39",
        null,
        "string"
      ]
    ],
    [
      "00b66ea4",
      "READ",
      [
        "storage",
        "00c9b8c8",
        null,
        "pointer"
      ]
    ],
    [
      "00b66eac",
      "PARAM",
      [
        "storage",
        "002bd16a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b66dfc ["INT_ADD", "register:40f0:8", ["const:b66dfc:8", "const:4:8"]]
- 00b66dfc ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b66e98 ["INT_ADD", "register:40f0:8", ["const:b66e98:8", "const:4:8"]]
+ 00b66e98 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b66e1c ["INT_ADD", "register:40f0:8", ["const:b66e1c:8", "const:4:8"]]
- 00b66e1c ["CALL", null, ["callee:00c5b200:8"]]
+ 00b66eb8 ["INT_ADD", "register:40f0:8", ["const:b66eb8:8", "const:4:8"]]
+ 00b66eb8 ["CALL", null, ["callee:00c5b200:8"]]
- 00b66e58 ["INT_ADD", "register:40f0:8", ["const:b66e58:8", "const:4:8"]]
- 00b66e58 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00b66ef4 ["INT_ADD", "register:40f0:8", ["const:b66ef4:8", "const:4:8"]]
+ 00b66ef4 ["CALL", null, ["callee:00c5ac70:8"]]
~~~


<a id="compare-55c971ed05295199524773c20f7d83ca"></a>

### [`00b68048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b68048.md) → [`00b680e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b68/00b680e4.md) _ZN8firebase3App15RegisterLibraryEPKcS2_Pv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5b7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b7b0.md) · 呼出先 5件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b720.md)
- 新版 呼出元 1件 [`00c5b880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b880.md) · 呼出先 5件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b7f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 91.18% / 新版 91.18%

優先判定に残った影響 `call_argument_candidate` 4件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6810c",
      "incomplete_value": false,
      "site": "00b68110",
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
            "const:adb:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b68070",
      "incomplete_value": false,
      "site": "00b68074",
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
            "const:b2f:8"
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
      "definition_site": "00b6811c",
      "incomplete_value": true,
      "site": "00b68128",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:258:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b68080",
      "incomplete_value": true,
      "site": "00b6808c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:158:8"
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
      "definition_site": "00b68120",
      "incomplete_value": true,
      "site": "00b68128",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:268:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b68084",
      "incomplete_value": true,
      "site": "00b6808c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:168:8"
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
      "00b68104",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b68078"
      ]
    ],
    [
      "00b6810c",
      "PARAM",
      [
        "storage",
        "002b8b2f",
        null,
        "string"
      ]
    ],
    [
      "00b6811c",
      "READ",
      [
        "storage",
        "01126158",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b68104",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b68114"
      ]
    ],
    [
      "00b6810c",
      "PARAM",
      [
        "storage",
        "002b8adb",
        null,
        "string"
      ]
    ],
    [
      "00b6811c",
      "READ",
      [
        "storage",
        "01126258",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b68074 ["INT_ADD", "register:40f0:8", ["const:b68074:8", "const:4:8"]]
- 00b68074 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b68110 ["INT_ADD", "register:40f0:8", ["const:b68110:8", "const:4:8"]]
+ 00b68110 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00b6808c ["INT_ADD", "register:40f0:8", ["const:b6808c:8", "const:4:8"]]
- 00b6808c ["CALL", null, ["callee:00c5ac70:8"]]
+ 00b68128 ["INT_ADD", "register:40f0:8", ["const:b68128:8", "const:4:8"]]
+ 00b68128 ["CALL", null, ["callee:00c5ac70:8"]]
- 00b680a8 ["INT_ADD", "register:40f0:8", ["const:b680a8:8", "const:4:8"]]
- 00b680a8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00b68144 ["INT_ADD", "register:40f0:8", ["const:b68144:8", "const:4:8"]]
+ 00b68144 ["CALL", null, ["callee:00c5b0d0:8"]]
~~~


<a id="compare-ada7b98ea82a9e124225808f1ac60727"></a>

### [`00b6815c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b6815c.md) → [`00b681f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b68/00b681f8.md) _ZN8firebase3App31SetDataCollectionDefaultEnabledEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b68210",
      "incomplete_value": true,
      "site": "00b68210",
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
      "definition_site": "00b68174",
      "incomplete_value": true,
      "site": "00b68174",
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
      "definition_site": "00b6822c",
      "incomplete_value": true,
      "site": "00b6823c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b0:8"
              ],
              [
                "leaf",
                "const:1a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b68190",
      "incomplete_value": true,
      "site": "00b681a0",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b0:8"
              ],
              [
                "leaf",
                "const:a0:8"
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
      "00b6820c",
      "READ",
      [
        "storage",
        "011260a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6822c",
      "READ",
      [
        "storage",
        "011260a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b68260",
      "PARAM",
      [
        "storage",
        "002bd1de",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6820c",
      "READ",
      [
        "storage",
        "011261a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6822c",
      "READ",
      [
        "storage",
        "011261a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b68260",
      "PARAM",
      [
        "storage",
        "002bd18a",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b681a0 ["INT_ADD", "register:40f0:8", ["const:b681a0:8", "const:4:8"]]
- 00b681a0 ["CALL", null, ["callee:00574d2c:8"]]
+ 00b6823c ["INT_ADD", "register:40f0:8", ["const:b6823c:8", "const:4:8"]]
+ 00b6823c ["CALL", null, ["callee:00574d2c:8"]]
- 00b68170 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a0:8"]]
- 00b68170 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6820c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:1a0:8"]]
+ 00b6820c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b68188 ["INT_ADD", "register:40f0:8", ["const:b68188:8", "const:4:8"]]
- 00b68188 ["CALL", null, ["callee:00c5b490:8"]]
+ 00b68224 ["INT_ADD", "register:40f0:8", ["const:b68224:8", "const:4:8"]]
+ 00b68224 ["CALL", null, ["callee:00c5b490:8"]]
~~~


<a id="compare-00bc42c7d90b9c89c7984ec99ddfca00"></a>

### [`00b681d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b681d0.md) → [`00b6826c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b68/00b6826c.md) _ZNK8firebase3App30IsDataCollectionDefaultEnabledEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00497a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497a48.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b3c0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b490.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b68280",
      "incomplete_value": true,
      "site": "00b68280",
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
      "definition_site": "00b681e4",
      "incomplete_value": true,
      "site": "00b681e4",
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
      "definition_site": "00b68298",
      "incomplete_value": true,
      "site": "00b682a4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:198:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b681fc",
      "incomplete_value": true,
      "site": "00b68208",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:98:8"
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
      "00b6827c",
      "READ",
      [
        "storage",
        "01126098",
        null,
        "undefined8"
      ]
    ],
    [
      "00b68298",
      "READ",
      [
        "storage",
        "01126098",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6827c",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ],
    [
      "00b68298",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b68208 ["INT_ADD", "register:40f0:8", ["const:b68208:8", "const:4:8"]]
- 00b68208 ["CALL", null, ["callee:00497a88:8"]]
+ 00b682a4 ["INT_ADD", "register:40f0:8", ["const:b682a4:8", "const:4:8"]]
+ 00b682a4 ["CALL", null, ["callee:00497a88:8"]]
- 00b681e0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:98:8"]]
- 00b681e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6827c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:198:8"]]
+ 00b6827c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b681f4 ["INT_ADD", "register:40f0:8", ["const:b681f4:8", "const:4:8"]]
- 00b681f4 ["CALL", null, ["callee:00c5b490:8"]]
+ 00b68290 ["INT_ADD", "register:40f0:8", ["const:b68290:8", "const:4:8"]]
+ 00b68290 ["CALL", null, ["callee:00c5b490:8"]]
~~~


<a id="compare-27bb8d50a268c8498fb13d970a4c505f"></a>

### [`00b68290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b68290.md) → [`00b6832c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b68/00b6832c.md) _ZNK8firebase10AppOptionseqERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bee0.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00c5bfb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bfb0.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 72.65% / 新版 72.65%

優先判定に残った影響 `unresolved_branch_alignment` 31件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6838c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b68850"
      ]
    ],
    [
      "00b68444",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b683d8"
      ]
    ],
    [
      "unmatched:00b683c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b68850"
      ]
    ]
  ],
  "added": [
    [
      "00b68428",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b68850"
      ]
    ],
    [
      "00b68444",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b68474"
      ]
    ],
    [
      "00b6845c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b68850"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b68338 ["INT_ADD", "register:40f0:8", ["const:b68338:8", "const:4:8"]]
- 00b68338 ["CALL", null, ["callee:00c58120:8"]]
+ 00b683d4 ["INT_ADD", "register:40f0:8", ["const:b683d4:8", "const:4:8"]]
+ 00b683d4 ["CALL", null, ["callee:00c58120:8"]]
- 00b68354 ["BRANCH", null, ["local:b27:8"]]
+ 00b683f0 ["BRANCH", null, ["local:b29:8"]]
- 00b6835c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b6835c ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 00b683f8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b683f8 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
~~~


<a id="compare-18c8a02f4e2b76c49da6800a48f77f6c"></a>

### [`00b687e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b687e0.md) → [`00b6887c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b68/00b6887c.md) _ZN8firebase10AppOptions18LoadFromJsonConfigEPKcPS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`00879c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879c88.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 0件  · 呼出先 15件 [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.87% / 新版 91.87%

優先判定に残った影響 `call_argument_candidate` 15件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b688a8",
      "incomplete_value": true,
      "site": "00b688b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:8c0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6880c",
      "incomplete_value": true,
      "site": "00b68818",
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
            "const:630:8"
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
      "definition_site": "00b688d4",
      "incomplete_value": true,
      "site": "00b688e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:810:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b68838",
      "incomplete_value": true,
      "site": "00b68848",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:740:8"
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
      "definition_site": "00b6897c",
      "incomplete_value": true,
      "site": "00b68980",
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
            "const:640:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b688e0",
      "incomplete_value": false,
      "site": "00b688e4",
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
            "const:60f:8"
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
      "unmatched:00b68814",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b688d4",
      "READ",
      [
        "storage",
        "00c9b740",
        null,
        "pointer"
      ]
    ],
    [
      "00b688d4",
      "PARAM",
      [
        "storage",
        "0030bcd8",
        "firebase::fbs::google_services_resource_data",
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b688b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00b688d4",
      "READ",
      [
        "storage",
        "00c9b810",
        null,
        "pointer"
      ]
    ],
    [
      "00b688d4",
      "PARAM",
      [
        "storage",
        "0030bd18",
        "firebase::fbs::google_services_resource_data",
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b68818 ["INT_ADD", "register:40f0:8", ["const:b68818:8", "const:4:8"]]
- 00b68818 ["CALL", null, ["callee:00c5b960:8"]]
+ 00b688b4 ["INT_ADD", "register:40f0:8", ["const:b688b4:8", "const:4:8"]]
+ 00b688b4 ["CALL", null, ["callee:00c5b960:8"]]
- 00b68848 ["INT_ADD", "register:40f0:8", ["const:b68848:8", "const:4:8"]]
- 00b68848 ["CALL", null, ["callee:00c5bfe0:8"]]
+ 00b688e4 ["INT_ADD", "register:40f0:8", ["const:b688e4:8", "const:4:8"]]
+ 00b688e4 ["CALL", null, ["callee:00c5bfe0:8"]]
- 00b688e4 ["INT_ADD", "register:40f0:8", ["const:b688e4:8", "const:4:8"]]
- 00b688e4 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b68980 ["INT_ADD", "register:40f0:8", ["const:b68980:8", "const:4:8"]]
+ 00b68980 ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-bfb86a7752e518e0aceb0be247557f0b"></a>

### [`00b68fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b68/00b68fc0.md) → [`00b6905c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b69/00b6905c.md) _ZN11flatbuffers10IDLOptionsC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b890.md) · 呼出先 1件 [`00c5b5c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5c0.md)
- 新版 呼出元 1件 [`00c5b960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b960.md) · 呼出先 1件 [`00c5b690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b690.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.13% / 新版 89.13%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b6906c",
      "incomplete_value": true,
      "site": "00b6909c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c4000:8"
              ],
              [
                "leaf",
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b68fd0",
      "incomplete_value": true,
      "site": "00b69000",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c4000:8"
              ],
              [
                "leaf",
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b69088",
      "incomplete_value": false,
      "site": "00b690a4",
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
            "const:4e9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b68fec",
      "incomplete_value": false,
      "site": "00b69008",
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
            "const:545:8"
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
    "new": null,
    "old": {
      "definition_site": "00b69010",
      "incomplete_value": true,
      "site": "00b69040",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:90:8"
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
      "00b6906c",
      "READ",
      [
        "storage",
        "002c4080",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b68fec",
      "PARAM",
      [
        "storage",
        "002a8545",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b69014",
      "PARAM",
      [
        "storage",
        "002a00d6",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b6906c",
      "READ",
      [
        "storage",
        "002c40c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b69088",
      "PARAM",
      [
        "storage",
        "002a84e9",
        null,
        "string"
      ]
    ],
    [
      "00b690b0",
      "PARAM",
      [
        "storage",
        "002a0089",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b69008 ["INT_ADD", "register:40f0:8", ["const:b69008:8", "const:4:8"]]
- 00b69008 ["CALL", null, ["callee:00c5b690:8"]]
+ 00b690a4 ["INT_ADD", "register:40f0:8", ["const:b690a4:8", "const:4:8"]]
+ 00b690a4 ["CALL", null, ["callee:00c5b690:8"]]
- 00b69040 ["INT_ADD", "register:40f0:8", ["const:b69040:8", "const:4:8"]]
- 00b69040 ["CALL", null, ["callee:00c5b690:8"]]
+ 00b690dc ["INT_ADD", "register:40f0:8", ["const:b690dc:8", "const:4:8"]]
+ 00b690dc ["CALL", null, ["callee:00c5b690:8"]]
- 00b69098 ["INT_ADD", "register:40f0:8", ["const:b69098:8", "const:4:8"]]
- 00b69098 ["CALL", null, ["callee:00c5b690:8"]]
+ 00b69134 ["INT_ADD", "register:40f0:8", ["const:b69134:8", "const:4:8"]]
+ 00b69134 ["CALL", null, ["callee:00c5b690:8"]]
~~~


<a id="compare-42ba3c883797cbab34395a824e447dee"></a>

### [`00b69130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b69/00b69130.md) → [`00b691cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b69/00b691cc.md) _ZN11flatbuffers6ParserC2ERKNS_10IDLOptionsE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b900.md) · 呼出先 8件 [`006394bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/006394bc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58090.md)
- 新版 呼出元 1件 [`00c5b9d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9d0.md) · 呼出先 8件 [`006394fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/006394fc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 27.80% / 新版 27.80%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 2件, `unresolved_branch_alignment` 57件, `unresolved_call_alignment` 84件, `unresolved_store_alignment` 446件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b692e4",
      "incomplete_value": true,
      "site": "00b69304",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c4000:8"
              ],
              [
                "leaf",
                "const:320:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b69248",
      "incomplete_value": true,
      "site": "00b69268",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c4000:8"
              ],
              [
                "leaf",
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b6a1f4",
      "incomplete_value": true,
      "site": "00b6a210",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 81,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b6a388",
      "incomplete_value": true,
      "site": "00b6a3a4",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 89,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b69164",
      "READ",
      [
        "storage",
        "002c3130",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6916c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b692e4",
      "READ",
      [
        "storage",
        "002c42e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b69200",
      "READ",
      [
        "storage",
        "002c3170",
        null,
        null
      ]
    ],
    [
      "00b69208",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b692e4",
      "READ",
      [
        "storage",
        "002c4320",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6a210 ["INT_ADD", "register:40f0:8", ["const:b6a210:8", "const:4:8"]]
- 00b6a210 ["CALL", null, ["callee:006394fc:8"]]
+ 00b6a2ac ["INT_ADD", "register:40f0:8", ["const:b6a2ac:8", "const:4:8"]]
+ 00b6a2ac ["CALL", null, ["callee:006394fc:8"]]
+ 00b6a210 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00b6a210 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00b6a210 ["INT_ADD", "tmp:2:8", ["register:4000:8", "const:38:8"]]
+ 00b6a210 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00b6a2fc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b6a2fc ["CBRANCH", null, ["local:b172:8", "tmp:0:1"]]
~~~


<a id="compare-0184679e488e045da26769b98d364155"></a>

### [`00b6a83c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6a/00b6a83c.md) → [`00b6a8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6a/00b6a8d8.md) _ZN11flatbuffers6ParserD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b910.md) · 呼出先 13件 [`005408d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00540/005408d0.md) [`0073a304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073a304.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8a0.md) [`00c5b8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8b0.md)
- 新版 呼出元 1件 [`00c5b9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9e0.md) · 呼出先 13件 [`00540910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/00540910.md) [`0073a35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a35c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b970.md) [`00c5b980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b980.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.32% / 新版 96.32%

優先判定に残った影響 `unresolved_branch_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6a8b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6a900"
      ]
    ],
    [
      "unmatched:00b6aaa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ab88"
      ]
    ],
    [
      "unmatched:00b6aab0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b6aaa0"
      ]
    ]
  ],
  "added": [
    [
      "00b6a954",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6a900"
      ]
    ],
    [
      "00b6ab44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ab88"
      ]
    ],
    [
      "00b6ab4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ab3c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6a860 ["BRANCH", null, ["local:b14:8"]]
+ 00b6a8fc ["BRANCH", null, ["local:b16:8"]]
- 00b6a86c ["INT_ADD", "register:40f0:8", ["const:b6a86c:8", "const:4:8"]]
- 00b6a86c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6a908 ["INT_ADD", "register:40f0:8", ["const:b6a908:8", "const:4:8"]]
+ 00b6a908 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6a874 ["INT_ADD", "register:40f0:8", ["const:b6a874:8", "const:4:8"]]
- 00b6a874 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6a910 ["INT_ADD", "register:40f0:8", ["const:b6a910:8", "const:4:8"]]
+ 00b6a910 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-c20ba23af0132a4e47bdcb407355e5fb"></a>

### [`00b6ab34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6a/00b6ab34.md) → [`00b6abd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6a/00b6abd0.md) _ZN11flatbuffers10IDLOptionsD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b8a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8a0.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00c5b970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b970.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.51% / 新版 89.51%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6ae14",
      "incomplete_value": true,
      "site": "00b6ae18",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4098:8"
              ],
              [
                "leaf",
                "const:88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 18,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6ab34",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6ab38",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6ab3c",
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
      "00b6abd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b6abd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b6abd8",
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
- 00b6ad7c ["INT_ADD", "register:40f0:8", ["const:b6ad7c:8", "const:4:8"]]
- 00b6ad7c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6ae18 ["INT_ADD", "register:40f0:8", ["const:b6ae18:8", "const:4:8"]]
+ 00b6ae18 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6ab34 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00b6ab34 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00b6ab34 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b6ab38 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00b6ab38 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00b6ab38 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b6ab38 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-f473cf416150375910f4271998793d1d"></a>

### [`00b6adbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6a/00b6adbc.md) → [`00b6ae58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6a/00b6ae58.md) _ZN8firebase10AppOptions28PopulateRequiredWithDefaultsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b930.md) · 呼出先 5件 [`00879c88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00879/00879c88.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5bec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bec0.md)
- 新版 呼出元 1件 [`00c5ba00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba00.md) · 呼出先 5件 [`00879ce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00879/00879ce0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5bf90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf90.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 95.80% / 新版 95.80%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6af54",
      "incomplete_value": false,
      "site": "00b6af58",
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
            "const:694:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6aeb8",
      "incomplete_value": false,
      "site": "00b6aebc",
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
            "const:665:8"
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
      "definition_site": "00b6b060",
      "incomplete_value": false,
      "site": "00b6b064",
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
            "const:d6d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6afc4",
      "incomplete_value": false,
      "site": "00b6afc8",
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
            "const:dc9:8"
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
      "unmatched:00b6ade0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6ae1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b05c"
      ]
    ],
    [
      "unmatched:00b6ae48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ae90"
      ]
    ]
  ],
  "added": [
    [
      "00b6ae7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b6aeb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b05c"
      ]
    ],
    [
      "00b6aee4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ae90"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6aebc ["INT_ADD", "register:40f0:8", ["const:b6aebc:8", "const:4:8"]]
- 00b6aebc ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b6af58 ["INT_ADD", "register:40f0:8", ["const:b6af58:8", "const:4:8"]]
+ 00b6af58 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b6afc8 ["INT_ADD", "register:40f0:8", ["const:b6afc8:8", "const:4:8"]]
- 00b6afc8 ["CALL", null, ["callee:00c5ad70:8"]]
+ 00b6b064 ["INT_ADD", "register:40f0:8", ["const:b6b064:8", "const:4:8"]]
+ 00b6b064 ["CALL", null, ["callee:00c5ad70:8"]]
- 00b6ade0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b6ade0 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:ffffffffffffffd8:8"]]
- 00b6ade0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-3e53e621b7dfb7256c8e03dff9e79bd3"></a>

### [`00b6aff8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6a/00b6aff8.md) → [`00b6b094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6b/00b6b094.md) _ZN11flatbuffers10IDLOptionsC2ERKS0_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b880.md) · 呼出先 3件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md) [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md)
- 新版 呼出元 1件 [`00c5b950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b950.md) · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md) [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.67% / 新版 97.67%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b6b124"
      ],
      [
        "FALL_THROUGH",
        "00b6b1c0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b6b1c0",
      "incomplete_value": true,
      "site": "00b6b1d0",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:40b8:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6b124",
      "incomplete_value": true,
      "site": "00b6b134",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:40b8:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b6b124"
      ],
      [
        "FALL_THROUGH",
        "00b6b1c0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b6b1c0",
      "incomplete_value": true,
      "site": "00b6b1d0",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:40b8:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6b124",
      "incomplete_value": true,
      "site": "00b6b134",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:40b8:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b6b124"
      ],
      [
        "FALL_THROUGH",
        "00b6b1c0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b6b1c0",
      "incomplete_value": true,
      "site": "00b6b1d4",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:40b8:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6b124",
      "incomplete_value": true,
      "site": "00b6b138",
      "value": [
        "BOOL_AND",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:40b8:8"
              ],
              "INT_MULT"
            ]
          ],
          [
            "BOOL_NEGATE",
            "1",
            [
              "INT_EQUAL"
            ]
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6b124",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b340"
      ]
    ]
  ],
  "added": [
    [
      "00b6b1c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b340"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6b1d0 ["INT_ADD", "register:40f0:8", ["const:b6b1d0:8", "const:4:8"]]
- 00b6b1d0 ["CALL", null, ["callee:00c5b680:8"]]
+ 00b6b26c ["INT_ADD", "register:40f0:8", ["const:b6b26c:8", "const:4:8"]]
+ 00b6b26c ["CALL", null, ["callee:00c5b680:8"]]
- 00b6b034 ["INT_ADD", "register:40f0:8", ["const:b6b034:8", "const:4:8"]]
- 00b6b034 ["CALL", null, ["callee:00c5b680:8"]]
+ 00b6b0d0 ["INT_ADD", "register:40f0:8", ["const:b6b0d0:8", "const:4:8"]]
+ 00b6b0d0 ["CALL", null, ["callee:00c5b680:8"]]
- 00b6b040 ["INT_ADD", "register:40f0:8", ["const:b6b040:8", "const:4:8"]]
- 00b6b040 ["CALL", null, ["callee:00c5b680:8"]]
+ 00b6b0dc ["INT_ADD", "register:40f0:8", ["const:b6b0dc:8", "const:4:8"]]
+ 00b6b0dc ["CALL", null, ["callee:00c5b680:8"]]
~~~


<a id="compare-5e062f1fd7909fcdccfac6b26b232edd"></a>

### [`00b6b2a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6b/00b6b2a8.md) → [`00b6b344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6b/00b6b344.md) _ZNSt6__ndk16vectorIPN11flatbuffers9NamespaceENS_9allocatorIS3_EEE21__push_back_slow_pathIRKS3_EEvOT_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bae0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bae0.md) · 呼出先 4件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5bbb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bbb0.md) · 呼出先 4件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 89.66% / 新版 89.66%

アドレスに依存する影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6b2d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b3a8"
      ]
    ],
    [
      "unmatched:00b6b300",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b424"
      ]
    ]
  ],
  "added": [
    [
      "00b6b370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b3a8"
      ]
    ],
    [
      "00b6b39c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b424"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6b2cc ["COPY", "tmp:0:8", ["const:1:8"]]
- 00b6b2cc ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
- 00b6b2cc ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
- 00b6b2cc ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
- 00b6b2d0 ["INT_RIGHT", "register:4048:8", ["register:4040:8", "const:3d:8"]]
- 00b6b2d4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00b6b2d4 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-bab5084744c97b9c6e6b5d434dc8c025"></a>

### [`00b6b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6b/00b6b390.md) → [`00b6b42c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6b/00b6b42c.md) _ZNK8firebase3fbs14GoogleServices6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b990.md) · 呼出先 2件 [`00c5b980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b980.md) [`00c5b9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9e0.md)
- 新版 呼出元 1件 [`00c5ba60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba60.md) · 呼出先 2件 [`00c5ba50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba50.md) [`00c5bab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bab0.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 99.16% / 新版 99.16%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6b4b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b7b8"
      ]
    ]
  ],
  "added": [
    [
      "00b6b550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b7b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6b46c ["INT_EQUAL", "tmp:0:1", ["register:4070:8", "const:0:8"]]
- 00b6b46c ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
+ 00b6b508 ["INT_EQUAL", "tmp:0:1", ["register:4070:8", "const:0:8"]]
+ 00b6b508 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
- 00b6b4b4 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6b4b4 ["CBRANCH", null, ["local:b70:8", "tmp:0:1"]]
- 00b6b4d4 ["INT_ADD", "register:40f0:8", ["const:b6b4d4:8", "const:4:8"]]
- 00b6b4d4 ["CALL", null, ["callee:00c5ba50:8"]]
+ 00b6b570 ["INT_ADD", "register:40f0:8", ["const:b6b570:8", "const:4:8"]]
+ 00b6b570 ["CALL", null, ["callee:00c5ba50:8"]]
~~~


<a id="compare-743b91d8c74f311e38f7f39bd2294d2b"></a>

### [`00b6b748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6b/00b6b748.md) → [`00b6b7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6b/00b6b7e4.md) _ZNK8firebase3fbs11ProjectInfo6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b980.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ba50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba50.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 52.92% / 新版 52.92%

アドレスに依存する影響 `unresolved_branch_alignment` 42件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6b7e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6bc24"
      ]
    ],
    [
      "00b6b8ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b6b82c"
      ]
    ],
    [
      "unmatched:00b6b81c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6bc24"
      ]
    ]
  ],
  "added": [
    [
      "00b6b87c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6bc24"
      ]
    ],
    [
      "00b6b8ac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6b8c8"
      ]
    ],
    [
      "00b6b8b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6bc24"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6b75c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b6b75c ["CBRANCH", null, ["local:b102:8", "tmp:0:1"]]
+ 00b6b7f8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b6b7f8 ["CBRANCH", null, ["local:b103:8", "tmp:0:1"]]
- 00b6b76c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6b76c ["CBRANCH", null, ["local:b104:8", "tmp:0:1"]]
+ 00b6b808 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6b808 ["CBRANCH", null, ["local:b105:8", "tmp:0:1"]]
- 00b6b778 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6b778 ["CBRANCH", null, ["local:b104:8", "tmp:0:1"]]
+ 00b6b814 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6b814 ["CBRANCH", null, ["local:b105:8", "tmp:0:1"]]
~~~


<a id="compare-1443d698adb4a39e406381337852597e"></a>

### [`00b6bb90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6b/00b6bb90.md) → [`00b6bc2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6b/00b6bc2c.md) _ZNK8firebase3fbs6Client6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9e0.md) · 呼出先 4件 [`00c5b950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b950.md) [`00c5b970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b970.md) [`00c5b9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9d0.md) [`00c5b9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9f0.md)
- 新版 呼出元 1件 [`00c5bab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bab0.md) · 呼出先 4件 [`00c5ba20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba20.md) [`00c5ba40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba40.md) [`00c5baa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5baa0.md) [`00c5bac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bac0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 63.10% / 新版 63.10%

優先判定に残った影響 `unresolved_branch_alignment` 35件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6bd0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b6bd18"
      ]
    ],
    [
      "unmatched:00b6bd14",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c09c"
      ]
    ],
    [
      "unmatched:00b6bd24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c0a0"
      ]
    ]
  ],
  "added": [
    [
      "00b6bda8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6bdb4"
      ]
    ],
    [
      "00b6bdb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c09c"
      ]
    ],
    [
      "00b6bdc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c0a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6bbc0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b6bbc0 ["CBRANCH", null, ["local:b90:8", "tmp:0:1"]]
+ 00b6bc5c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b6bc5c ["CBRANCH", null, ["local:b94:8", "tmp:0:1"]]
- 00b6bbd0 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6bbd0 ["CBRANCH", null, ["local:b91:8", "tmp:0:1"]]
+ 00b6bc6c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6bc6c ["CBRANCH", null, ["local:b95:8", "tmp:0:1"]]
- 00b6bbdc ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6bbdc ["CBRANCH", null, ["local:b91:8", "tmp:0:1"]]
+ 00b6bc78 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6bc78 ["CBRANCH", null, ["local:b95:8", "tmp:0:1"]]
~~~


<a id="compare-bbc43124c922851b626e683deb652e08"></a>

### [`00b6c018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6c/00b6c018.md) → [`00b6c0b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6c/00b6c0b4.md) _ZNK8firebase3fbs10ClientInfo6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b950.md) · 呼出先 1件 [`00c5b9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9c0.md)
- 新版 呼出元 1件 [`00c5ba20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba20.md) · 呼出先 1件 [`00c5ba90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba90.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.14% / 新版 84.14%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 8件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b6c054"
      ],
      [
        "FALL_THROUGH",
        "00b6c0f0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b6c0f0",
      "incomplete_value": true,
      "site": "00b6c10c",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4060:8"
              ],
              "INT_SUB"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6c054",
      "incomplete_value": true,
      "site": "00b6c070",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:102:1"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b6c054"
      ],
      [
        "FALL_THROUGH",
        "00b6c0f0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b6c0f0",
      "incomplete_value": true,
      "site": "00b6c10c",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_LESSEQUAL",
            "1",
            [
              [
                "live",
                "register:4060:8"
              ],
              "INT_SUB"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6c054",
      "incomplete_value": true,
      "site": "00b6c070",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:102:1"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b6c220"
      ],
      [
        "FALL_THROUGH",
        "00b6c2bc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b6c2b8",
      "incomplete_value": true,
      "site": "00b6c2c0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
              "INT_ZEXT"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6c21c",
      "incomplete_value": true,
      "site": "00b6c224",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_ADD",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              "INT_ZEXT"
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
      "unmatched:00b6c01c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6c030",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c0d8"
      ]
    ],
    [
      "unmatched:00b6c048",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c2e8"
      ]
    ]
  ],
  "added": [
    [
      "00b6c0b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b6c0cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c0d8"
      ]
    ],
    [
      "00b6c0e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c2e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6c10c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6c10c ["CBRANCH", null, ["local:b60:8", "tmp:0:1"]]
+ 00b6c1a8 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6c1a8 ["CBRANCH", null, ["local:b59:8", "tmp:0:1"]]
- 00b6c018 ["INT_SUB", "register:8:8", ["register:8:8", "const:20:8"]]
- 00b6c01c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b6c01c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b6c01c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b6c01c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-7e7a1733927bdd04383992cf8dd2e14e"></a>

### [`00b6c25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6c/00b6c25c.md) → [`00b6c2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6c/00b6c2f8.md) _ZNK8firebase3fbs17AndroidClientInfo6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9c0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ba90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba90.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.51% / 新版 91.51%

アドレスに依存する影響 `unresolved_branch_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6c2f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c498"
      ]
    ],
    [
      "unmatched:00b6c318",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c400"
      ]
    ],
    [
      "00b6c3c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b6c340"
      ]
    ]
  ],
  "added": [
    [
      "00b6c390",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c498"
      ]
    ],
    [
      "00b6c3b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c400"
      ]
    ],
    [
      "00b6c3c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c3dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6c270 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b6c270 ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
+ 00b6c30c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b6c30c ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
- 00b6c280 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6c280 ["CBRANCH", null, ["local:b39:8", "tmp:0:1"]]
+ 00b6c31c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6c31c ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
- 00b6c28c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6c28c ["CBRANCH", null, ["local:b39:8", "tmp:0:1"]]
+ 00b6c328 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6c328 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
~~~


<a id="compare-e2ce34253794c76cdf2c205f303c255c"></a>

### [`00b6c404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6c/00b6c404.md) → [`00b6c4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6c/00b6c4a0.md) _ZNK8firebase3fbs11OAuthClient6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b970.md) · 呼出先 1件 [`00c5b960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b960.md)
- 新版 呼出元 1件 [`00c5ba40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba40.md) · 呼出先 1件 [`00c5ba30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 88.75% / 新版 88.75%

優先判定に残った影響 `unresolved_branch_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6c420",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c4c8"
      ]
    ],
    [
      "unmatched:00b6c4e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c710"
      ]
    ],
    [
      "unmatched:00b6c4f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c59c"
      ]
    ]
  ],
  "added": [
    [
      "00b6c4bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c4c8"
      ]
    ],
    [
      "00b6c584",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c710"
      ]
    ],
    [
      "00b6c58c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c59c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6c420 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 00b6c428 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b6c428 ["CBRANCH", null, ["local:b58:8", "tmp:0:1"]]
+ 00b6c4c4 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b6c4c4 ["CBRANCH", null, ["local:b57:8", "tmp:0:1"]]
- 00b6c438 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6c438 ["CBRANCH", null, ["local:b59:8", "tmp:0:1"]]
+ 00b6c4d4 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6c4d4 ["CBRANCH", null, ["local:b58:8", "tmp:0:1"]]
~~~


<a id="compare-7a59b29f00b8d8860aad97a1fec45778"></a>

### [`00b6c684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6c/00b6c684.md) → [`00b6c720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6c/00b6c720.md) _ZNK8firebase3fbs11AndroidInfo6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b960.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ba30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba30.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.91% / 新版 96.91%

アドレスに依存する影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6c790",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c8b0"
      ]
    ],
    [
      "unmatched:00b6c840",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c8ec"
      ]
    ],
    [
      "unmatched:00b6c8a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c94c"
      ]
    ]
  ],
  "added": [
    [
      "00b6c82c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c8b0"
      ]
    ],
    [
      "00b6c8dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c8ec"
      ]
    ],
    [
      "00b6c93c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6c94c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6c740 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b6c740 ["CBRANCH", null, ["local:b24:8", "tmp:0:1"]]
+ 00b6c7dc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b6c7dc ["CBRANCH", null, ["local:b23:8", "tmp:0:1"]]
- 00b6c74c ["CBRANCH", null, ["local:b21:8", "register:101:1"]]
+ 00b6c7e8 ["CBRANCH", null, ["local:b20:8", "register:101:1"]]
- 00b6c760 ["CBRANCH", null, ["local:b22:8", "register:102:1"]]
+ 00b6c7fc ["CBRANCH", null, ["local:b21:8", "register:102:1"]]
~~~


<a id="compare-c03d295ceac82b67fdaaeec8c1b72da3"></a>

### [`00b6c90c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6c/00b6c90c.md) → [`00b6c9a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6c/00b6c9a8.md) _ZNK8firebase3fbs6ApiKey6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9d0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5baa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5baa0.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.28% / 新版 95.28%

アドレスに依存する影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6c9e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ca94"
      ]
    ],
    [
      "unmatched:00b6ca48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6caf4"
      ]
    ],
    [
      "unmatched:00b6ca7c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6cb48"
      ]
    ]
  ],
  "added": [
    [
      "00b6ca84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ca94"
      ]
    ],
    [
      "00b6cae4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6caf4"
      ]
    ],
    [
      "00b6cb18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6cb48"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6c920 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b6c920 ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
+ 00b6c9bc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b6c9bc ["CBRANCH", null, ["local:b35:8", "tmp:0:1"]]
- 00b6c930 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6c930 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
+ 00b6c9cc ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6c9cc ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
- 00b6c93c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6c93c ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
+ 00b6c9d8 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6c9d8 ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
~~~


<a id="compare-161492a8e4a1157b8d0b3941537505e7"></a>

### [`00b6cab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6c/00b6cab4.md) → [`00b6cb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6c/00b6cb50.md) _ZNK8firebase3fbs8Services6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b9f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9f0.md) · 呼出先 2件 [`00c5b940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b940.md) [`00c5b9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9a0.md)
- 新版 呼出元 1件 [`00c5bac0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bac0.md) · 呼出先 2件 [`00c5ba10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba10.md) [`00c5ba70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba70.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `unresolved_branch_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6cca8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6cec4"
      ]
    ],
    [
      "unmatched:00b6cd00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6cec0"
      ]
    ],
    [
      "unmatched:00b6cd28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6cec4"
      ]
    ]
  ],
  "added": [
    [
      "00b6cd44",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6cec4"
      ]
    ],
    [
      "00b6cd9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6cec0"
      ]
    ],
    [
      "00b6cdc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6cec4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6cb2c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b6cb2c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b6cb2c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b6cb2c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b6cbc8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b6cbc8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b6cbc8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b6cbc8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b6cb48 ["INT_RIGHT", "tmp:0:4", ["register:4068:4", "const:0:4"]]
- 00b6cb48 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b6cb48 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b6cb48 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b6cbe4 ["INT_RIGHT", "tmp:0:4", ["register:4068:4", "const:0:4"]]
+ 00b6cbe4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b6cbe4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b6cbe4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b6cb80 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6cb80 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
+ 00b6cc1c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6cc1c ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
~~~


<a id="compare-fef8219a0cd38b264a4db44129672026"></a>

### [`00b6ce34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6c/00b6ce34.md) → [`00b6ced0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6c/00b6ced0.md) _ZNK8firebase3fbs16AnalyticsService6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9a0.md) · 呼出先 1件 [`00c5b9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9b0.md)
- 新版 呼出元 1件 [`00c5ba70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba70.md) · 呼出先 1件 [`00c5ba80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba80.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 97.12% / 新版 97.12%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6cf80",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d05c"
      ]
    ]
  ],
  "added": [
    [
      "00b6d01c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d05c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6ce54 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b6ce54 ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
+ 00b6cef0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b6cef0 ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
- 00b6ce64 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6ce64 ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
+ 00b6cf00 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6cf00 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
- 00b6ce70 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6ce70 ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
+ 00b6cf0c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6cf0c ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
~~~


<a id="compare-4fdccee9814eab10dc81433fa55c9a82"></a>

### [`00b6cfd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6c/00b6cfd4.md) → [`00b6d070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d070.md) _ZNK8firebase3fbs17AnalyticsProperty6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b9b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9b0.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5ba80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba80.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 89.62% / 新版 89.62%

アドレスに依存する影響 `unresolved_branch_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6d09c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d154"
      ]
    ],
    [
      "unmatched:00b6d0a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d210"
      ]
    ],
    [
      "unmatched:00b6d0b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d15c"
      ]
    ]
  ],
  "added": [
    [
      "00b6d138",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d154"
      ]
    ],
    [
      "00b6d144",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d210"
      ]
    ],
    [
      "00b6d14c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d15c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6cfe8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b6cfe8 ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
+ 00b6d084 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b6d084 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
- 00b6cff8 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6cff8 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
+ 00b6d094 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6d094 ["CBRANCH", null, ["local:b40:8", "tmp:0:1"]]
- 00b6d004 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6d004 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
+ 00b6d0a0 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b6d0a0 ["CBRANCH", null, ["local:b40:8", "tmp:0:1"]]
~~~


<a id="compare-be7a2b6ad6a155b4b80f3d386ea90c1b"></a>

### [`00b6d17c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d17c.md) → [`00b6d218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d218.md) _ZNK8firebase3fbs10AdsService6VerifyERN11flatbuffers16VerifierTemplateILb0EEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b940.md) · 呼出先 1件 [`00c5b9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b9a0.md)
- 新版 呼出元 1件 [`00c5ba10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba10.md) · 呼出先 1件 [`00c5ba70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5ba70.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 59.26% / 新版 59.26%

優先判定に残った影響 `unresolved_branch_alignment` 31件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6d204",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d564"
      ]
    ],
    [
      "unmatched:00b6d260",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d568"
      ]
    ],
    [
      "unmatched:00b6d268",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d314"
      ]
    ]
  ],
  "added": [
    [
      "00b6d2a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d564"
      ]
    ],
    [
      "00b6d2fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d568"
      ]
    ],
    [
      "00b6d304",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d314"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6d204 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b6d204 ["CBRANCH", null, ["local:b80:8", "tmp:0:1"]]
- 00b6d20c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00b6d20c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00b6d20c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00b6d20c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00b6d2a8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00b6d2a8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00b6d2a8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00b6d2a8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00b6d248 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00b6d248 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 00b6d2e4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00b6d2e4 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
~~~


<a id="compare-20bef496bfb6cba61b64d7ecc7c6d3b6"></a>

### [`00b6d4dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d4dc.md) → [`00b6d578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d578.md) _ZN11flatbuffers21FlatBufferBuilderImplILb0EED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8f0.md) · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba10.md) [`00c5be40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be40.md)
- 新版 呼出元 1件 [`00c5b9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9c0.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bae0.md) [`00c5bf10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf10.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 88.57% / 新版 88.57%

優先判定に残った影響 `unresolved_call_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6d524",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "unmatched:00b6d550",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b6d5c0",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ],
    [
      "00b6d5ec",
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
- 00b6d4fc ["INT_ADD", "register:40f0:8", ["const:b6d4fc:8", "const:4:8"]]
- 00b6d4fc ["CALL", null, ["callee:00c5bae0:8"]]
+ 00b6d598 ["INT_ADD", "register:40f0:8", ["const:b6d598:8", "const:4:8"]]
+ 00b6d598 ["CALL", null, ["callee:00c5bae0:8"]]
- 00b6d504 ["INT_ADD", "register:40f0:8", ["const:b6d504:8", "const:4:8"]]
- 00b6d504 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6d5a0 ["INT_ADD", "register:40f0:8", ["const:b6d5a0:8", "const:4:8"]]
+ 00b6d5a0 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6d50c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b6d50c ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b6d5a8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b6d5a8 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-f72593cbf3440663bc401e8ccc141647"></a>

### [`00b6d568`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d568.md) → [`00b6d604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d604.md) _ZN11flatbuffers11SymbolTableINS_10ServiceDefEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b8b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8b0.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b870.md) [`00c5ba30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba30.md) [`00c5ba80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba80.md)
- 新版 呼出元 1件 [`00c5b980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b980.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b940.md) [`00c5bb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb00.md) [`00c5bb50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.83% / 新版 94.83%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b6d634",
      "incomplete_value": true,
      "site": "00b6d63c",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:00b6d5e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d674"
      ]
    ],
    [
      "unmatched:00b6d630",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d654"
      ]
    ],
    [
      "unmatched:00b6d648",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d62c"
      ]
    ]
  ],
  "added": [
    [
      "00b6d684",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d674"
      ]
    ],
    [
      "00b6d6cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d654"
      ]
    ],
    [
      "00b6d6e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d62c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6d63c ["INT_ADD", "register:40f0:8", ["const:b6d63c:8", "const:4:8"]]
- 00b6d63c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6d6d8 ["INT_ADD", "register:40f0:8", ["const:b6d6d8:8", "const:4:8"]]
+ 00b6d6d8 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6d588 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b6d588 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b6d624 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b6d624 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00b6d598 ["INT_ADD", "register:40f0:8", ["const:b6d598:8", "const:4:8"]]
- 00b6d598 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6d634 ["INT_ADD", "register:40f0:8", ["const:b6d634:8", "const:4:8"]]
+ 00b6d634 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-00485d9974027a02650631f6de10d193"></a>

### [`00b6d650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d650.md) → [`00b6d6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d6ec.md) _ZN11flatbuffers11SymbolTableINS_7EnumDefEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b8c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8c0.md) · 呼出先 5件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b870.md) [`00c5b920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b920.md) [`00c5ba60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba60.md) [`00c5ba70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba70.md)
- 新版 呼出元 1件 [`00c5b990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b990.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b940.md) [`00c5b9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9f0.md) [`00c5bb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb30.md) [`00c5bb40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb40.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6d670",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d768"
      ]
    ]
  ],
  "added": [
    [
      "00b6d70c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d768"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6d66c ["INT_LESSEQUAL", "register:105:1", ["register:4040:8", "register:40a0:8"]]
- 00b6d66c ["INT_SBORROW", "register:106:1", ["register:40a0:8", "register:4040:8"]]
- 00b6d66c ["INT_SUB", "tmp:0:8", ["register:40a0:8", "register:4040:8"]]
- 00b6d66c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00b6d670 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b6d670 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 00b6d674 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 00b6d674 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00b6d710 ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 00b6d710 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-f43c3479e7aee5de4fa61a1cbe1d6ee9"></a>

### [`00b6d738`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6d738.md) → [`00b6d7d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6d7d4.md) _ZN11flatbuffers11SymbolTableINS_9StructDefEED2Ev

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8e0.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b870.md) [`00c5b8d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b8d0.md) [`00c5baa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5baa0.md)
- 新版 呼出元 1件 [`00c5b9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9b0.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b940.md) [`00c5b9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9a0.md) [`00c5bb70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb70.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.87% / 新版 97.87%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6d7d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d824"
      ]
    ]
  ],
  "added": [
    [
      "00b6d86c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6d824"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6d764 ["INT_ADD", "register:40f0:8", ["const:b6d764:8", "const:4:8"]]
- 00b6d764 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6d800 ["INT_ADD", "register:40f0:8", ["const:b6d800:8", "const:4:8"]]
+ 00b6d800 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6d784 ["INT_ADD", "register:40f0:8", ["const:b6d784:8", "const:4:8"]]
- 00b6d784 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6d820 ["INT_ADD", "register:40f0:8", ["const:b6d820:8", "const:4:8"]]
+ 00b6d820 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6d78c ["INT_ADD", "register:40f0:8", ["const:b6d78c:8", "const:4:8"]]
- 00b6d78c ["CALL", null, ["callee:00c5b9a0:8"]]
+ 00b6d828 ["INT_ADD", "register:40f0:8", ["const:b6d828:8", "const:4:8"]]
+ 00b6d828 ["CALL", null, ["callee:00c5b9a0:8"]]
~~~


<a id="compare-f6f657585e2dfed32f854631f2fcf2e7"></a>

### [`00b6db24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6db24.md) → [`00b6dbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6dbc0.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers5ValueEEENS_19__map_value_com

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ba50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba50.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba50.md)
- 新版 呼出元 1件 [`00c5bb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb20.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b6db58",
      "incomplete_value": true,
      "site": "00b6db5c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4098:8"
              ],
              [
                "leaf",
                "const:30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 00b6db5c ["INT_ADD", "register:40f0:8", ["const:b6db5c:8", "const:4:8"]]
- 00b6db5c ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6dbf8 ["INT_ADD", "register:40f0:8", ["const:b6dbf8:8", "const:4:8"]]
+ 00b6dbf8 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6db24 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b6db24 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b6dbc0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b6dbc0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00b6db40 ["INT_ADD", "register:40f0:8", ["const:b6db40:8", "const:4:8"]]
- 00b6db40 ["CALL", null, ["callee:00c5bb20:8"]]
+ 00b6dbdc ["INT_ADD", "register:40f0:8", ["const:b6dbdc:8", "const:4:8"]]
+ 00b6dbdc ["CALL", null, ["callee:00c5bb20:8"]]
~~~


<a id="compare-c633150d42298db0c6dc9b3ac3382d60"></a>

### [`00b6db74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6db74.md) → [`00b6dc10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6dc10.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers10ServiceDefEEENS_19__map_val

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ba30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba30.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba30.md)
- 新版 呼出元 1件 [`00c5bb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb00.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb00.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6dc24",
      "incomplete_value": true,
      "site": "00b6dc2c",
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
            "register:4008:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 00b6db90 ["INT_ADD", "register:40f0:8", ["const:b6db90:8", "const:4:8"]]
- 00b6db90 ["CALL", null, ["callee:00c5bb00:8"]]
+ 00b6dc2c ["INT_ADD", "register:40f0:8", ["const:b6dc2c:8", "const:4:8"]]
+ 00b6dc2c ["CALL", null, ["callee:00c5bb00:8"]]
- 00b6db74 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b6db74 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00b6dc10 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b6dc10 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b6db9c ["INT_ADD", "register:40f0:8", ["const:b6db9c:8", "const:4:8"]]
- 00b6db9c ["CALL", null, ["callee:00c5bb00:8"]]
+ 00b6dc38 ["INT_ADD", "register:40f0:8", ["const:b6dc38:8", "const:4:8"]]
+ 00b6dc38 ["CALL", null, ["callee:00c5bb00:8"]]
~~~


<a id="compare-4074dad86d0f057822d891c8dba32431"></a>

### [`00b6dbc4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6dbc4.md) → [`00b6dc60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6dc60.md) _ZN11flatbuffers7EnumValD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5b920`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b920.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba50.md)
- 新版 呼出元 1件 [`00c5b9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b9f0.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb20.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6dc94",
      "incomplete_value": true,
      "site": "00b6dc98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6dc90",
      "incomplete_value": true,
      "site": "00b6dc98",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4098:8"
              ],
              [
                "leaf",
                "const:58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b6dc34",
      "incomplete_value": true,
      "site": "00b6dc38",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:00b6dbc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6dbc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6dbcc",
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
      "00b6dc60",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00b6dc64",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b6dc68",
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
- 00b6dbfc ["INT_ADD", "register:40f0:8", ["const:b6dbfc:8", "const:4:8"]]
- 00b6dbfc ["CALL", null, ["callee:00c5bb20:8"]]
+ 00b6dc98 ["INT_ADD", "register:40f0:8", ["const:b6dc98:8", "const:4:8"]]
+ 00b6dc98 ["CALL", null, ["callee:00c5bb20:8"]]
- 00b6dc38 ["INT_ADD", "register:40f0:8", ["const:b6dc38:8", "const:4:8"]]
- 00b6dc38 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6dcd4 ["INT_ADD", "register:40f0:8", ["const:b6dcd4:8", "const:4:8"]]
+ 00b6dcd4 ["CALL", null, ["callee:00c57f80:8"]]
- 00b6dc44 ["INT_ADD", "register:40f0:8", ["const:b6dc44:8", "const:4:8"]]
- 00b6dc44 ["CALL", null, ["callee:00c57f80:8"]]
+ 00b6dce0 ["INT_ADD", "register:40f0:8", ["const:b6dce0:8", "const:4:8"]]
+ 00b6dce0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-09c7815b2d5d9921a93520bf5b05f522"></a>

### [`00b6dd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6dd10.md) → [`00b6ddac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6ddac.md) _ZNSt6__ndk16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPN11flatbuffers7EnumDefEEENS_19__map_value_c

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ba60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba60.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5ba60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5ba60.md)
- 新版 呼出元 1件 [`00c5bb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb30.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5bb30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bb30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6ddc0",
      "incomplete_value": true,
      "site": "00b6ddc8",
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
            "register:4008:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 00b6dd2c ["INT_ADD", "register:40f0:8", ["const:b6dd2c:8", "const:4:8"]]
- 00b6dd2c ["CALL", null, ["callee:00c5bb30:8"]]
+ 00b6ddc8 ["INT_ADD", "register:40f0:8", ["const:b6ddc8:8", "const:4:8"]]
+ 00b6ddc8 ["CALL", null, ["callee:00c5bb30:8"]]
- 00b6dd10 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00b6dd10 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00b6ddac ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00b6ddac ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 00b6dd38 ["INT_ADD", "register:40f0:8", ["const:b6dd38:8", "const:4:8"]]
- 00b6dd38 ["CALL", null, ["callee:00c5bb30:8"]]
+ 00b6ddd4 ["INT_ADD", "register:40f0:8", ["const:b6ddd4:8", "const:4:8"]]
+ 00b6ddd4 ["CALL", null, ["callee:00c5bb30:8"]]
~~~


<a id="compare-75822cae5d7db4caa542d2cf297ad15a"></a>

### [`00b6dee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6d/00b6dee0.md) → [`00b6df7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6d/00b6df7c.md) _ZN20google_play_services10InitializeEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd00.md) · 呼出先 17件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md)
- 新版 呼出元 1件 [`00c5bdd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bdd0.md) · 呼出先 17件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.45% / 新版 76.45%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 12件, `store_condition` 3件, `store_destination` 2件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b6dfbc",
      "incomplete_value": false,
      "site": "00b6dfbc",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6df20",
      "incomplete_value": false,
      "site": "00b6df20",
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
            "const:190:8"
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
      "definition_site": "00b6e00c",
      "incomplete_value": true,
      "site": "00b6e00c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:298:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6df70",
      "incomplete_value": true,
      "site": "00b6df70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:198:8"
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
      "definition_site": "00b6dfc0",
      "incomplete_value": true,
      "site": "00b6dfc0",
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
      "definition_site": "00b6df24",
      "incomplete_value": true,
      "site": "00b6df24",
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
      "00b6dfb0",
      "READ",
      [
        "storage",
        "01126190",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6dfb4",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6dfbc",
      "WRITE",
      [
        "storage",
        "01126190",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00b6dfb0",
      "READ",
      [
        "storage",
        "01126290",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6dfb4",
      "READ",
      [
        "storage",
        "01126298",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6dfbc",
      "WRITE",
      [
        "storage",
        "01126290",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6df20 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:190:8"]]
- 00b6df20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00b6dfbc ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:290:8"]]
+ 00b6dfbc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00b6df70 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:198:8"]]
- 00b6df70 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
+ 00b6e00c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:298:8"]]
+ 00b6e00c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00b6df88 ["INT_ADD", "register:40f0:8", ["const:b6df88:8", "const:4:8"]]
- 00b6df88 ["CALL", null, ["callee:00c5b640:8"]]
+ 00b6e024 ["INT_ADD", "register:40f0:8", ["const:b6e024:8", "const:4:8"]]
+ 00b6e024 ["CALL", null, ["callee:00c5b640:8"]]
~~~


<a id="compare-dba74e58f159b5569a59d14b44519faf"></a>

### [`00b6e2ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6e2ec.md) → [`00b6e388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6e388.md) _ZN20google_play_services9TerminateEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bd20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd20.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ac50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac50.md) [`00c5ade0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ade0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5bdf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bdf0.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad20.md) [`00c5aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aeb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination

命令の説明率　旧版 80.82% / 新版 80.82%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 4件, `store_destination` 5件

アドレスに依存する影響 `branch_value` 2件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b6e3a8",
      "incomplete_value": true,
      "site": "00b6e3a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6e30c",
      "incomplete_value": true,
      "site": "00b6e30c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:190:8"
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
      "definition_site": "00b6e40c",
      "incomplete_value": true,
      "site": "00b6e40c",
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
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6e370",
      "incomplete_value": true,
      "site": "00b6e370",
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
            "const:1b0:8"
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
      "definition_site": "00b6e434",
      "incomplete_value": true,
      "site": "00b6e434",
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
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6e398",
      "incomplete_value": true,
      "site": "00b6e398",
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
            "const:1d0:8"
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
      "00b6e39c",
      "READ",
      [
        "storage",
        "01126190",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6e3a8",
      "WRITE",
      [
        "storage",
        "01126190",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6e3b4",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6e39c",
      "READ",
      [
        "storage",
        "01126290",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6e3a8",
      "WRITE",
      [
        "storage",
        "01126290",
        null,
        "undefined4"
      ]
    ],
    [
      "00b6e3b4",
      "READ",
      [
        "storage",
        "01126298",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6e30c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:190:8"]]
- 00b6e30c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 00b6e3a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:290:8"]]
+ 00b6e3a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 00b6e318 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:198:8"]]
- 00b6e318 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6e3b4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:298:8"]]
+ 00b6e3b4 ["LOAD", "register:40a0:8", ["const:1b1:8", "tmp:0:8"]]
- 00b6e33c ["INT_ADD", "register:40f0:8", ["const:b6e33c:8", "const:4:8"]]
- 00b6e33c ["CALL", null, ["callee:00c5b310:8"]]
+ 00b6e3d8 ["INT_ADD", "register:40f0:8", ["const:b6e3d8:8", "const:4:8"]]
+ 00b6e3d8 ["CALL", null, ["callee:00c5b310:8"]]
~~~


<a id="compare-1304756abd776e2ce97677270721d910"></a>

### [`00b6e410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6e410.md) → [`00b6e4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6e4ac.md) _ZN20google_play_services17CheckAvailabilityEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bf20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bf20.md) · 呼出先 4件 [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5bd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd00.md)
- 新版 呼出元 1件 [`00c5bff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bff0.md) · 呼出先 4件 [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5bdd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bdd0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 80.72% / 新版 80.72%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 2件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b6e5e0",
      "incomplete_value": true,
      "site": "00b6e5e0",
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
            "const:141:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6e544",
      "incomplete_value": true,
      "site": "00b6e544",
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
            "const:141:8"
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
      "definition_site": "00b6e5e4",
      "incomplete_value": true,
      "site": "00b6e5e4",
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
            "const:144:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6e548",
      "incomplete_value": true,
      "site": "00b6e548",
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
            "const:144:8"
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
      "definition_site": "00b6e4cc",
      "incomplete_value": true,
      "site": "00b6e4cc",
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
      "definition_site": "00b6e430",
      "incomplete_value": true,
      "site": "00b6e430",
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
      "00b6e4c0",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e4d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00b6e460"
      ]
    ],
    [
      "00b6e4f0",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6e4c0",
      "READ",
      [
        "storage",
        "01126298",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e4d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6e4fc"
      ]
    ],
    [
      "00b6e4f0",
      "READ",
      [
        "storage",
        "01126298",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6e474 ["INT_ADD", "register:40f0:8", ["const:b6e474:8", "const:4:8"]]
- 00b6e474 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00b6e510 ["INT_ADD", "register:40f0:8", ["const:b6e510:8", "const:4:8"]]
+ 00b6e510 ["CALL", null, ["callee:00c5ac70:8"]]
- 00b6e4a8 ["INT_ADD", "register:40f0:8", ["const:b6e4a8:8", "const:4:8"]]
- 00b6e4a8 ["CALL", null, ["callee:005762f8:8"]]
+ 00b6e544 ["INT_ADD", "register:40f0:8", ["const:b6e544:8", "const:4:8"]]
+ 00b6e544 ["CALL", null, ["callee:005762f8:8"]]
- 00b6e424 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:198:8"]]
- 00b6e424 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6e4c0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:298:8"]]
+ 00b6e4c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ce141fb74046ef40ead26f4838a037a7"></a>

### [`00b6e55c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6e55c.md) → [`00b6e5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6e5f8.md) _ZN20google_play_services17CallMakeAvailableEPv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b6e6d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6e6d0.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ada0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ada0.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00b6e76c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6e76c.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ae70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ae70.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6e630",
      "incomplete_value": true,
      "site": "00b6e640",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6e594",
      "incomplete_value": true,
      "site": "00b6e5a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1b8:8"
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
      "definition_site": "00b6e634",
      "incomplete_value": true,
      "site": "00b6e640",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2c8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6e598",
      "incomplete_value": true,
      "site": "00b6e5a4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1c8:8"
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
      "definition_site": "00b6e674",
      "incomplete_value": true,
      "site": "00b6e678",
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
            "const:130:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6e5d8",
      "incomplete_value": true,
      "site": "00b6e5dc",
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
            "const:130:8"
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
      "00b6e630",
      "READ",
      [
        "storage",
        "011261b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e634",
      "READ",
      [
        "storage",
        "011261c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e66c",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6e630",
      "READ",
      [
        "storage",
        "011262b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e634",
      "READ",
      [
        "storage",
        "011262c8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e66c",
      "READ",
      [
        "storage",
        "01126298",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6e5a4 ["INT_ADD", "register:40f0:8", ["const:b6e5a4:8", "const:4:8"]]
- 00b6e5a4 ["CALL", null, ["callee:00c5c010:8"]]
+ 00b6e640 ["INT_ADD", "register:40f0:8", ["const:b6e640:8", "const:4:8"]]
+ 00b6e640 ["CALL", null, ["callee:00c5c010:8"]]
- 00b6e5dc ["INT_ADD", "register:40f0:8", ["const:b6e5dc:8", "const:4:8"]]
- 00b6e5dc ["CALL", null, ["callee:00c5aed0:8"]]
+ 00b6e678 ["INT_ADD", "register:40f0:8", ["const:b6e678:8", "const:4:8"]]
+ 00b6e678 ["CALL", null, ["callee:00c5aed0:8"]]
- 00b6e5f8 ["INT_ADD", "register:40f0:8", ["const:b6e5f8:8", "const:4:8"]]
- 00b6e5f8 ["CALL", null, ["callee:00c5ae70:8"]]
+ 00b6e694 ["INT_ADD", "register:40f0:8", ["const:b6e694:8", "const:4:8"]]
+ 00b6e694 ["CALL", null, ["callee:00c5ae70:8"]]
~~~


<a id="compare-c3890039bcc9261b258335328c2bcd27"></a>

### [`00b6e6d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6e6d0.md) → [`00b6e76c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6e76c.md) _ZN20google_play_services13MakeAvailableEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5bd10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bd10.md) · 呼出先 14件 [`00b6e55c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6e55c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md)
- 新版 呼出元 1件 [`00c5bde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bde0.md) · 呼出先 14件 [`00b6e5f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6e5f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 91.24% / 新版 91.24%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 4件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b6e7a8",
      "incomplete_value": true,
      "site": "00b6e7a8",
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
      "definition_site": "00b6e70c",
      "incomplete_value": true,
      "site": "00b6e70c",
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
      "definition_site": "00b6e7c4",
      "incomplete_value": true,
      "site": "00b6e7c4",
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
      "definition_site": "00b6e728",
      "incomplete_value": true,
      "site": "00b6e728",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b6e858",
      "incomplete_value": true,
      "site": "00b6e858",
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
      "definition_site": "00b6e7bc",
      "incomplete_value": true,
      "site": "00b6e7bc",
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
    "ordinal": 6,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b6e7a0",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e7c0",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e7f4",
      "READ",
      [
        "storage",
        "01126198",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b6e7a0",
      "READ",
      [
        "storage",
        "01126298",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e7c0",
      "READ",
      [
        "storage",
        "01126298",
        null,
        "undefined8"
      ]
    ],
    [
      "00b6e7f4",
      "READ",
      [
        "storage",
        "01126298",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6e720 ["INT_ADD", "register:40f0:8", ["const:b6e720:8", "const:4:8"]]
- 00b6e720 ["CALL", null, ["callee:00c5bdd0:8"]]
+ 00b6e7bc ["INT_ADD", "register:40f0:8", ["const:b6e7bc:8", "const:4:8"]]
+ 00b6e7bc ["CALL", null, ["callee:00c5bdd0:8"]]
- 00b6e76c ["INT_ADD", "register:40f0:8", ["const:b6e76c:8", "const:4:8"]]
- 00b6e76c ["CALL", null, ["callee:00c5af10:8"]]
+ 00b6e808 ["INT_ADD", "register:40f0:8", ["const:b6e808:8", "const:4:8"]]
+ 00b6e808 ["CALL", null, ["callee:00c5af10:8"]]
- 00b6e790 ["INT_ADD", "register:40f0:8", ["const:b6e790:8", "const:4:8"]]
- 00b6e790 ["CALL", null, ["callee:00c5bd40:8"]]
+ 00b6e82c ["INT_ADD", "register:40f0:8", ["const:b6e82c:8", "const:4:8"]]
+ 00b6e82c ["CALL", null, ["callee:00c5bd40:8"]]
~~~


<a id="compare-6c0ec1a3412579fc2fcf2f7d8218bd98"></a>

### [`00b6ea60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6ea60.md) → [`00b6eafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6eafc.md) _ZN11flatbuffers19FLATBUFFERS_VERSIONEv

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
      "definition_site": "00b6eb00",
      "incomplete_value": false,
      "site": "00b6eb04",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6ea64",
      "incomplete_value": false,
      "site": "00b6ea68",
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
            "const:e74:8"
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
      "00b6eb00",
      "DATA",
      [
        "storage",
        "002bbe74",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6eb00",
      "DATA",
      [
        "storage",
        "002bbe20",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6ea64 ["COPY", "tmp:0:8", ["const:e74:8"]]
- 00b6ea64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b6ea64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b6ea64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b6eb00 ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 00b6eb00 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6eb00 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6eb00 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-7b8cd1a08f183af0cb005cc78050d951"></a>

### [`00b6ea6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6ea6c.md) → [`00b6eb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6eb08.md) _ZN11flatbuffers6Parser7MessageERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c770.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5bfe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfe0.md)
- 新版 呼出元 1件 [`00c5c840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c840.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.55% / 新版 97.55%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6eb58",
      "incomplete_value": false,
      "site": "00b6eb64",
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
            "const:c11:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6eabc",
      "incomplete_value": false,
      "site": "00b6eac8",
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
            "const:be0:8"
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
      "definition_site": "00b6ec00",
      "incomplete_value": false,
      "site": "00b6ec0c",
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
            "const:96b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6eb64",
      "incomplete_value": false,
      "site": "00b6eb70",
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
            "const:9c7:8"
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
      "definition_site": "00b6ec20",
      "incomplete_value": false,
      "site": "00b6ec2c",
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
    "old": {
      "definition_site": "00b6eb84",
      "incomplete_value": false,
      "site": "00b6eb90",
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
            "const:76e:8"
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
      "00b6eb58",
      "PARAM",
      [
        "storage",
        "002b4be0",
        null,
        null
      ]
    ],
    [
      "00b6ec00",
      "PARAM",
      [
        "storage",
        "002b09c7",
        null,
        null
      ]
    ],
    [
      "00b6ec20",
      "PARAM",
      [
        "storage",
        "002bd76e",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b6eb58",
      "PARAM",
      [
        "storage",
        "002b4c11",
        null,
        null
      ]
    ],
    [
      "00b6ec00",
      "PARAM",
      [
        "storage",
        "002b096b",
        null,
        null
      ]
    ],
    [
      "00b6ec20",
      "PARAM",
      [
        "storage",
        "002bd71a",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6eac8 ["INT_ADD", "register:40f0:8", ["const:b6eac8:8", "const:4:8"]]
- 00b6eac8 ["CALL", null, ["callee:00c58050:8"]]
+ 00b6eb64 ["INT_ADD", "register:40f0:8", ["const:b6eb64:8", "const:4:8"]]
+ 00b6eb64 ["CALL", null, ["callee:00c58050:8"]]
- 00b6eb64 ["COPY", "tmp:0:8", ["const:9c7:8"]]
- 00b6eb64 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b6eb64 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b6eb64 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b6ec00 ["COPY", "tmp:0:8", ["const:96b:8"]]
+ 00b6ec00 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b6ec00 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b6ec00 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b6eb70 ["INT_ADD", "register:40f0:8", ["const:b6eb70:8", "const:4:8"]]
- 00b6eb70 ["CALL", null, ["callee:00c58050:8"]]
+ 00b6ec0c ["INT_ADD", "register:40f0:8", ["const:b6ec0c:8", "const:4:8"]]
+ 00b6ec0c ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-c4c3b753db47cd0289487bb1859d882e"></a>

### [`00b6ecf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6ecf8.md) → [`00b6ed94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6ed94.md) _ZN11flatbuffers11NumToStringIiEENSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEET_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5bfe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfe0.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c58290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58290.md)
- 新版 呼出元 1件 [`00c5c0b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0b0.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.21% / 新版 91.21%

優先判定に残った影響 `store_value` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b6edf0",
      "incomplete_value": true,
      "site": "00b6ee04",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6ed54",
      "incomplete_value": true,
      "site": "00b6ed68",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b6ede8",
      "incomplete_value": true,
      "site": "00b6ee08",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6ed4c",
      "incomplete_value": true,
      "site": "00b6ed6c",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b6ee78",
      "incomplete_value": true,
      "site": "00b6ee84",
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
      "definition_site": "00b6eddc",
      "incomplete_value": true,
      "site": "00b6ede8",
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
    "ordinal": 28,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b6edc8",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b6edcc",
      "READ",
      [
        "storage",
        "00c9b840",
        null,
        "pointer"
      ]
    ],
    [
      "00b6ee04",
      "DATA",
      [
        "storage",
        "00c90bd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b6edc8",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b6edcc",
      "READ",
      [
        "storage",
        "00c9b910",
        null,
        "pointer"
      ]
    ],
    [
      "00b6ee04",
      "DATA",
      [
        "storage",
        "00c90ca0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6ed2c ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:c18:8"]]
- 00b6ed2c ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6edc8 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:ce8:8"]]
+ 00b6edc8 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
- 00b6ed30 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:840:8"]]
- 00b6ed30 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6edcc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:910:8"]]
+ 00b6edcc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b6ed74 ["INT_ADD", "register:40f0:8", ["const:b6ed74:8", "const:4:8"]]
- 00b6ed74 ["CALL", null, ["callee:00c582b0:8"]]
+ 00b6ee10 ["INT_ADD", "register:40f0:8", ["const:b6ee10:8", "const:4:8"]]
+ 00b6ee10 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-f6ba8e8ec4ea7566ffe63115b2a8287f"></a>

### [`00b6ee64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6e/00b6ee64.md) → [`00b6ef00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6e/00b6ef00.md) _ZN11flatbuffers11NumToStringIlEENSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEET_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c000.md) · 呼出先 8件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c581b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581b0.md) [`00c581e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c581e0.md) [`00c58220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58220.md)
- 新版 呼出元 1件 [`00c5c0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c0d0.md) · 呼出先 8件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58280.md) [`00c582b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582b0.md) [`00c582f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `store_value` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b6ef58",
      "incomplete_value": true,
      "site": "00b6ef6c",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6eebc",
      "incomplete_value": true,
      "site": "00b6eed0",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b6ef50",
      "incomplete_value": true,
      "site": "00b6ef70",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6eeb4",
      "incomplete_value": true,
      "site": "00b6eed4",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b6efe0",
      "incomplete_value": true,
      "site": "00b6efec",
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
      "definition_site": "00b6ef44",
      "incomplete_value": true,
      "site": "00b6ef50",
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
    "ordinal": 28,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b6ef30",
      "READ",
      [
        "storage",
        "00c9ac18",
        null,
        "pointer"
      ]
    ],
    [
      "00b6ef34",
      "READ",
      [
        "storage",
        "00c9b840",
        null,
        "pointer"
      ]
    ],
    [
      "00b6ef6c",
      "DATA",
      [
        "storage",
        "00c90bd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b6ef30",
      "READ",
      [
        "storage",
        "00c9ace8",
        null,
        "pointer"
      ]
    ],
    [
      "00b6ef34",
      "READ",
      [
        "storage",
        "00c9b910",
        null,
        "pointer"
      ]
    ],
    [
      "00b6ef6c",
      "DATA",
      [
        "storage",
        "00c90ca0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6ee94 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:c18:8"]]
- 00b6ee94 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6ef30 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:ce8:8"]]
+ 00b6ef30 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
- 00b6ee98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:840:8"]]
- 00b6ee98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b6ef34 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:910:8"]]
+ 00b6ef34 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b6eedc ["INT_ADD", "register:40f0:8", ["const:b6eedc:8", "const:4:8"]]
- 00b6eedc ["CALL", null, ["callee:00c582b0:8"]]
+ 00b6ef78 ["INT_ADD", "register:40f0:8", ["const:b6ef78:8", "const:4:8"]]
+ 00b6ef78 ["CALL", null, ["callee:00c582b0:8"]]
~~~


<a id="compare-1230fb74b096d4d8132c80caee818fa5"></a>

### [`00b6f0ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6f/00b6f0ac.md) → [`00b6f148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6f148.md) _ZN11flatbuffers6Parser7WarningERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5c770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c770.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c840.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6f174",
      "incomplete_value": false,
      "site": "00b6f17c",
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
            "const:b5f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6f0d8",
      "incomplete_value": false,
      "site": "00b6f0e0",
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
            "const:bac:8"
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
      "00b6f174",
      "PARAM",
      [
        "storage",
        "002a0bac",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6f174",
      "PARAM",
      [
        "storage",
        "002a0b5f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6f0e0 ["INT_ADD", "register:40f0:8", ["const:b6f0e0:8", "const:4:8"]]
- 00b6f0e0 ["CALL", null, ["callee:00c58180:8"]]
+ 00b6f17c ["INT_ADD", "register:40f0:8", ["const:b6f17c:8", "const:4:8"]]
+ 00b6f17c ["CALL", null, ["callee:00c58180:8"]]
- 00b6f0d8 ["COPY", "tmp:0:8", ["const:bac:8"]]
- 00b6f0d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b6f0d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b6f0d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b6f174 ["COPY", "tmp:0:8", ["const:b5f:8"]]
+ 00b6f174 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6f174 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6f174 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b6f0ec ["INT_ADD", "register:40f0:8", ["const:b6f0ec:8", "const:4:8"]]
- 00b6f0ec ["CALL", null, ["callee:00c5c840:8"]]
+ 00b6f188 ["INT_ADD", "register:40f0:8", ["const:b6f188:8", "const:4:8"]]
+ 00b6f188 ["CALL", null, ["callee:00c5c840:8"]]
~~~


<a id="compare-e479a78a92f78dbacd6d736a8ea5c5cb"></a>

### [`00b6f12c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6f/00b6f12c.md) → [`00b6f1c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6f1c8.md) _ZN11flatbuffers6Parser5ErrorERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5c770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c770.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c840.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6f1f0",
      "incomplete_value": false,
      "site": "00b6f1fc",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6f154",
      "incomplete_value": false,
      "site": "00b6f160",
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
            "const:bb6:8"
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
      "00b6f1f0",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6f1f0",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6f160 ["INT_ADD", "register:40f0:8", ["const:b6f160:8", "const:4:8"]]
- 00b6f160 ["CALL", null, ["callee:00c58180:8"]]
+ 00b6f1fc ["INT_ADD", "register:40f0:8", ["const:b6f1fc:8", "const:4:8"]]
+ 00b6f1fc ["CALL", null, ["callee:00c58180:8"]]
- 00b6f154 ["COPY", "tmp:0:8", ["const:bb6:8"]]
- 00b6f154 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b6f154 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b6f154 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b6f1f0 ["COPY", "tmp:0:8", ["const:b69:8"]]
+ 00b6f1f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6f1f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b6f1f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00b6f16c ["INT_ADD", "register:40f0:8", ["const:b6f16c:8", "const:4:8"]]
- 00b6f16c ["CALL", null, ["callee:00c5c840:8"]]
+ 00b6f208 ["INT_ADD", "register:40f0:8", ["const:b6f208:8", "const:4:8"]]
+ 00b6f208 ["CALL", null, ["callee:00c5c840:8"]]
~~~


<a id="compare-a809d1df18b12063b15bc419776d8967"></a>

### [`00b6f1b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6f/00b6f1b0.md) → [`00b6f24c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6f24c.md) _ZN11flatbuffers6Parser12RecurseErrorEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5c520`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c520.md) · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md)
- 新版 呼出元 1件 [`00c5c5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c5f0.md) · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6f284",
      "incomplete_value": false,
      "site": "00b6f294",
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
            "const:c38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6f1e8",
      "incomplete_value": false,
      "site": "00b6f1f8",
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
            "const:bf8:8"
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
      "definition_site": "00b6f2a4",
      "incomplete_value": false,
      "site": "00b6f2c0",
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
            "const:50e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6f208",
      "incomplete_value": false,
      "site": "00b6f224",
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
            "const:56a:8"
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
      "definition_site": "00b6f2e4",
      "incomplete_value": false,
      "site": "00b6f2ec",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6f248",
      "incomplete_value": false,
      "site": "00b6f250",
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
            "const:bb6:8"
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
      "00b6f284",
      "PARAM",
      [
        "storage",
        "002c1bf8",
        null,
        "string"
      ]
    ],
    [
      "00b6f2a4",
      "PARAM",
      [
        "storage",
        "002a856a",
        null,
        "string"
      ]
    ],
    [
      "00b6f2e4",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6f284",
      "PARAM",
      [
        "storage",
        "002c1c38",
        null,
        "string"
      ]
    ],
    [
      "00b6f2a4",
      "PARAM",
      [
        "storage",
        "002a850e",
        null,
        "string"
      ]
    ],
    [
      "00b6f2e4",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6f1f8 ["INT_ADD", "register:40f0:8", ["const:b6f1f8:8", "const:4:8"]]
- 00b6f1f8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b6f294 ["INT_ADD", "register:40f0:8", ["const:b6f294:8", "const:4:8"]]
+ 00b6f294 ["CALL", null, ["callee:00c590a0:8"]]
- 00b6f224 ["INT_ADD", "register:40f0:8", ["const:b6f224:8", "const:4:8"]]
- 00b6f224 ["CALL", null, ["callee:00c58050:8"]]
+ 00b6f2c0 ["INT_ADD", "register:40f0:8", ["const:b6f2c0:8", "const:4:8"]]
+ 00b6f2c0 ["CALL", null, ["callee:00c58050:8"]]
- 00b6f250 ["INT_ADD", "register:40f0:8", ["const:b6f250:8", "const:4:8"]]
- 00b6f250 ["CALL", null, ["callee:00c58180:8"]]
+ 00b6f2ec ["INT_ADD", "register:40f0:8", ["const:b6f2ec:8", "const:4:8"]]
+ 00b6f2ec ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-1e15bfdb4cf82baf92fe440a8dd96f7b"></a>

### [`00b6f6bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6f/00b6f6bc.md) → [`00b6f758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6f758.md) _ZN11flatbuffers6Parser11ParseHexNumEiPm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c4c0.md) · 呼出先 11件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md)
- 新版 呼出元 1件 [`00c5c590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c590.md) · 呼出先 11件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.77% / 新版 96.77%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b6f748",
      "incomplete_value": false,
      "site": "00b6f758",
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
            "const:68c:8"
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
      "definition_site": "00b6f804",
      "incomplete_value": false,
      "site": "00b6f820",
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
            "const:ab3:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6f844",
      "incomplete_value": false,
      "site": "00b6f84c",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6f7a8",
      "incomplete_value": false,
      "site": "00b6f7b0",
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
            "const:bb6:8"
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
      "unmatched:00b6f748",
      "PARAM",
      [
        "storage",
        "002be68c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b6f768",
      "PARAM",
      [
        "storage",
        "002a2b00",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b6f7a8",
      "PARAM",
      [
        "storage",
        "002a0bb6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b6f7e4",
      "PARAM",
      [
        "storage",
        "002be638",
        null,
        "string"
      ]
    ],
    [
      "00b6f804",
      "PARAM",
      [
        "storage",
        "002a2ab3",
        null,
        "string"
      ]
    ],
    [
      "00b6f844",
      "PARAM",
      [
        "storage",
        "002a0b69",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6f758 ["INT_ADD", "register:40f0:8", ["const:b6f758:8", "const:4:8"]]
- 00b6f758 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b6f7f4 ["INT_ADD", "register:40f0:8", ["const:b6f7f4:8", "const:4:8"]]
+ 00b6f7f4 ["CALL", null, ["callee:00c590a0:8"]]
- 00b6f784 ["INT_ADD", "register:40f0:8", ["const:b6f784:8", "const:4:8"]]
- 00b6f784 ["CALL", null, ["callee:00c58050:8"]]
+ 00b6f820 ["INT_ADD", "register:40f0:8", ["const:b6f820:8", "const:4:8"]]
+ 00b6f820 ["CALL", null, ["callee:00c58050:8"]]
- 00b6f7b0 ["INT_ADD", "register:40f0:8", ["const:b6f7b0:8", "const:4:8"]]
- 00b6f7b0 ["CALL", null, ["callee:00c58180:8"]]
+ 00b6f84c ["INT_ADD", "register:40f0:8", ["const:b6f84c:8", "const:4:8"]]
+ 00b6f84c ["CALL", null, ["callee:00c58180:8"]]
~~~


<a id="compare-18e4ada25be8af571acb513092d1973f"></a>

### [`00b6f9a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6f/00b6f9a4.md) → [`00b6fa40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6fa40.md) _ZN11flatbuffers6Parser17SkipByteOrderMarkEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c650.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5c770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c770.md)
- 新版 呼出元 1件 [`00c5c720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c720.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5c840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c840.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 79.71% / 新版 79.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b6fae4",
      "incomplete_value": false,
      "site": "00b6faf4",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b6fa48",
      "incomplete_value": false,
      "site": "00b6fa58",
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
            "const:bb6:8"
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
      "unmatched:00b6fa24",
      "READ",
      [
        "storage",
        "002b265a",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b6fa28",
      "READ",
      [
        "storage",
        "002b264d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b6fa30",
      "READ",
      [
        "storage",
        "002c2b50",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b6fac0",
      "READ",
      [
        "storage",
        "002b268b",
        null,
        "string"
      ]
    ],
    [
      "00b6fac4",
      "READ",
      [
        "storage",
        "002b267e",
        null,
        "string"
      ]
    ],
    [
      "00b6facc",
      "READ",
      [
        "storage",
        "002c2b90",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6fa58 ["INT_ADD", "register:40f0:8", ["const:b6fa58:8", "const:4:8"]]
- 00b6fa58 ["CALL", null, ["callee:00c58180:8"]]
+ 00b6faf4 ["INT_ADD", "register:40f0:8", ["const:b6faf4:8", "const:4:8"]]
+ 00b6faf4 ["CALL", null, ["callee:00c58180:8"]]
- 00b6fa10 ["BRANCH", null, ["local:b10:8"]]
+ 00b6faac ["BRANCH", null, ["local:b9:8"]]
- 00b6fa18 ["INT_ADD", "register:40f0:8", ["const:b6fa18:8", "const:4:8"]]
- 00b6fa18 ["CALL", null, ["callee:00c57f60:8"]]
+ 00b6fab4 ["INT_ADD", "register:40f0:8", ["const:b6fab4:8", "const:4:8"]]
+ 00b6fab4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-d6c5e744c045398f75e4ace11228b9ef"></a>

### [`00b6fab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b6f/00b6fab8.md) → [`00b6fb54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b6f/00b6fb54.md) _ZN11flatbuffers6Parser4NextEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6f0.md) · 呼出先 14件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c58fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58fd0.md)
- 新版 呼出元 1件 [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md) · 呼出先 14件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c590a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.18% / 新版 77.18%

優先判定に残った影響 `call_argument_candidate` 11件, `store_condition` 10件, `store_value` 12件, `unresolved_branch_alignment` 40件, `unresolved_call_alignment` 11件, `unresolved_store_alignment` 25件

アドレスに依存する影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b70bc0",
      "incomplete_value": true,
      "site": "00b70bd8",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:400:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b70b24",
      "incomplete_value": true,
      "site": "00b70b3c",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:3c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 132,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b70bc4",
      "incomplete_value": true,
      "site": "00b70bdc",
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
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:b71:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b70b28",
      "incomplete_value": true,
      "site": "00b70b40",
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
                "const:2a0000:8"
              ],
              [
                "leaf",
                "const:bbe:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 133,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b70bc4",
      "incomplete_value": true,
      "site": "00b70bdc",
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
              "INT_ADD",
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
      "definition_site": "00b70b28",
      "incomplete_value": true,
      "site": "00b70b40",
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
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 134,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b6fadc",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6faf0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b6fba0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ff00"
      ]
    ]
  ],
  "added": [
    [
      "00b6fb78",
      "WRITE",
      [
        "storage",
        "Stack[-0xb8]",
        null,
        null
      ]
    ],
    [
      "00b6fb8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b6fc3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b6ff00"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b6fcbc ["INT_ADD", "register:40f0:8", ["const:b6fcbc:8", "const:4:8"]]
- 00b6fcbc ["CALL", null, ["callee:00c57f60:8"]]
+ 00b6fd58 ["INT_ADD", "register:40f0:8", ["const:b6fd58:8", "const:4:8"]]
+ 00b6fd58 ["CALL", null, ["callee:00c57f60:8"]]
- 00b6fd1c ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4040:8"]]
- 00b6fd1c ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4048:8"]]
- 00b6fd1c ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4048:8"]]
- 00b6fd1c ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00b6fd50 ["INT_ADD", "register:40f0:8", ["const:b6fd50:8", "const:4:8"]]
- 00b6fd50 ["CALL", null, ["callee:00c5b720:8"]]
+ 00b6fdec ["INT_ADD", "register:40f0:8", ["const:b6fdec:8", "const:4:8"]]
+ 00b6fdec ["CALL", null, ["callee:00c5b720:8"]]
~~~


<a id="compare-6e34aad611573f46d1987719bf054211"></a>

### [`00b70efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b70/00b70efc.md) → [`00b70f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b70/00b70f98.md) _ZN11flatbuffers6ToUTF8EjPNSt6__ndk112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c7f0.md) · 呼出先 1件 [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md)
- 新版 呼出元 1件 [`00c5c8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8c0.md) · 呼出先 1件 [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.49% / 新版 94.49%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b70f20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b70fcc"
      ]
    ],
    [
      "unmatched:00b70f5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71008"
      ]
    ],
    [
      "unmatched:00b70f68",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71028"
      ]
    ]
  ],
  "added": [
    [
      "00b70fbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b70fcc"
      ]
    ],
    [
      "00b70ff8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71008"
      ]
    ],
    [
      "00b71018",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71028"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b70f10 ["COPY", "tmp:0:8", ["const:40:8"]]
- 00b70f10 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b70f10 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b70f10 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b70f14 ["INT_ZEXT", "register:4098:8", ["register:4000:4"]]
- 00b70f18 ["COPY", "tmp:0:4", ["const:7f:4"]]
- 00b70f18 ["INT_LESSEQUAL", "register:105:1", ["const:7f:4", "register:4000:4"]]
- 00b70f18 ["INT_SBORROW", "register:106:1", ["register:4000:4", "const:7f:4"]]
- 00b70f18 ["INT_SUB", "tmp:1:4", ["register:4000:4", "tmp:0:4"]]
~~~


<a id="compare-b90e0bf2c91d9f437a311e66b5e25268"></a>

### [`00b7119c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b7119c.md) → [`00b71238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b71238.md) _ZN11flatbuffers6Parser6ExpectEi

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c750.md) · 呼出先 12件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 1件 [`00c5c820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c820.md) · 呼出先 12件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.44% / 新版 92.44%

優先判定に残った影響 `call_argument_candidate` 14件, `store_condition` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b71344",
      "incomplete_value": false,
      "site": "00b71354",
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
            "const:a38:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b71364",
      "incomplete_value": false,
      "site": "00b71380",
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
            "const:887:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b712c8",
      "incomplete_value": false,
      "site": "00b712e4",
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
            "const:8db:8"
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
    "new": null,
    "old": {
      "definition_site": "00b7133c",
      "incomplete_value": true,
      "site": "00b7134c",
      "value": [
        "live",
        "register:8:8"
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
      "00b712cc",
      "DATA",
      [
        "storage",
        "00c90158",
        null,
        null
      ]
    ],
    [
      "unmatched:00b712a8",
      "PARAM",
      [
        "storage",
        "002c09f8",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b712c8",
      "PARAM",
      [
        "storage",
        "002bf8db",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b712cc",
      "DATA",
      [
        "storage",
        "00c90228",
        null,
        null
      ]
    ],
    [
      "00b71344",
      "PARAM",
      [
        "storage",
        "002c0a38",
        null,
        "string"
      ]
    ],
    [
      "00b71364",
      "PARAM",
      [
        "storage",
        "002bf887",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b71248 ["CBRANCH", null, ["local:b56:8", "register:102:1"]]
+ 00b712e4 ["CBRANCH", null, ["local:b59:8", "register:102:1"]]
- 00b712b8 ["INT_ADD", "register:40f0:8", ["const:b712b8:8", "const:4:8"]]
- 00b712b8 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b71354 ["INT_ADD", "register:40f0:8", ["const:b71354:8", "const:4:8"]]
+ 00b71354 ["CALL", null, ["callee:00c590a0:8"]]
- 00b712e4 ["INT_ADD", "register:40f0:8", ["const:b712e4:8", "const:4:8"]]
- 00b712e4 ["CALL", null, ["callee:00c58050:8"]]
+ 00b71380 ["INT_ADD", "register:40f0:8", ["const:b71380:8", "const:4:8"]]
+ 00b71380 ["CALL", null, ["callee:00c58050:8"]]
~~~


<a id="compare-729b32fd0a0acb7eab95f4094a7e9e19"></a>

### [`00b71554`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b71554.md) → [`00b715f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b715f0.md) _ZN11flatbuffers6Parser16ParseNamespacingEPNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEES8_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c600.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5c6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c6f0.md) [`00c5c750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c750.md)
- 新版 呼出元 1件 [`00c5c6d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c6d0.md) · 呼出先 4件 [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5c7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c7c0.md) [`00c5c820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c820.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b715a8",
      "incomplete_value": false,
      "site": "00b715b4",
      "value": [
        "leaf",
        "const:104:8"
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
      "unmatched:00b71554",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b71558",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b7155c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b715f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b715f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b715f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b715b4 ["INT_ADD", "register:40f0:8", ["const:b715b4:8", "const:4:8"]]
- 00b715b4 ["CALL", null, ["callee:00c5c820:8"]]
+ 00b71650 ["INT_ADD", "register:40f0:8", ["const:b71650:8", "const:4:8"]]
+ 00b71650 ["CALL", null, ["callee:00c5c820:8"]]
- 00b71554 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00b71554 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00b71554 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00b71554 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00b71558 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00b71558 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00b71558 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00b71558 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-120dcd5b7140517777c6dd19343625aa"></a>

### [`00b7165c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b7165c.md) → [`00b716f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b716f8.md) _ZN11flatbuffers6Parser10LookupEnumERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c450.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md)
- 新版 呼出元 1件 [`00c5c520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c520.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.53% / 新版 90.53%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 6件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b717a8",
      "incomplete_value": true,
      "site": "00b717b0",
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
            "const:10:8"
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
      "definition_site": "00b71924",
      "incomplete_value": true,
      "site": "00b7192c",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
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
      "unmatched:00b71684",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b716b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71924"
      ]
    ],
    [
      "unmatched:00b7172c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b717ec"
      ]
    ]
  ],
  "added": [
    [
      "00b71720",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b71750",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71924"
      ]
    ],
    [
      "00b717c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b717ec"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b717b0 ["INT_ADD", "register:40f0:8", ["const:b717b0:8", "const:4:8"]]
- 00b717b0 ["CALL", null, ["callee:00c5bf40:8"]]
+ 00b7184c ["INT_ADD", "register:40f0:8", ["const:b7184c:8", "const:4:8"]]
+ 00b7184c ["CALL", null, ["callee:00c5bf40:8"]]
- 00b71890 ["INT_ADD", "register:40f0:8", ["const:b71890:8", "const:4:8"]]
- 00b71890 ["CALL", null, ["callee:00c5cb50:8"]]
+ 00b7192c ["INT_ADD", "register:40f0:8", ["const:b7192c:8", "const:4:8"]]
+ 00b7192c ["CALL", null, ["callee:00c5cb50:8"]]
- 00b71678 ["COPY", "tmp:0:8", ["const:80:8"]]
- 00b71678 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b71678 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b71678 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f6570232c4f133ee22bc2fea4d33417c"></a>

### [`00b7194c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b7194c.md) → [`00b719e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b719e8.md) _ZNK11flatbuffers6Parser32LookupStructThruParentNamespacesERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c9e0.md) · 呼出先 6件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md) [`00c5a8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8e0.md) [`00c5be70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5be70.md)
- 新版 呼出元 1件 [`00c5cab0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5cab0.md) · 呼出先 6件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md) [`00c5a9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9b0.md) [`00c5bf40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5bf40.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b71ad8",
      "incomplete_value": true,
      "site": "00b71ae0",
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
      "unmatched:00b71a38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71aec"
      ]
    ],
    [
      "unmatched:00b71ae8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71b90"
      ]
    ],
    [
      "unmatched:00b71b4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71b40"
      ]
    ]
  ],
  "added": [
    [
      "00b71ad4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71aec"
      ]
    ],
    [
      "00b71b84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71b90"
      ]
    ],
    [
      "00b71be8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b71b40"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b71ae0 ["INT_ADD", "register:40f0:8", ["const:b71ae0:8", "const:4:8"]]
- 00b71ae0 ["CALL", null, ["callee:00c5cb80:8"]]
+ 00b71b7c ["INT_ADD", "register:40f0:8", ["const:b71b7c:8", "const:4:8"]]
+ 00b71b7c ["CALL", null, ["callee:00c5cb80:8"]]
- 00b719d4 ["BRANCH", null, ["local:b6:8"]]
+ 00b71a70 ["BRANCH", null, ["local:b7:8"]]
- 00b71a00 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00b71a00 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00b71a00 ["INT_ZEXT", "register:4048:8", ["tmp:1:1"]]
~~~


<a id="compare-50fa43fc1e94f67429c1d2f5bc1b279b"></a>

### [`00b71c0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b71c0c.md) → [`00b71ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b71ca8.md) _ZN11flatbuffers6Parser14ParseTypeIdentERNS_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c5a0.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c670.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.40% / 新版 93.40%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b71e24",
      "incomplete_value": true,
      "site": "00b71e30",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "00b71e1c",
      "incomplete_value": true,
      "site": "00b71e30",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b71e20",
      "incomplete_value": false,
      "site": "00b71e30",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "old": null,
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
      "unmatched:00b71c3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b71c40",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b71c44",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b71cd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00b71cdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b71ce0",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b71d94 ["INT_ADD", "register:40f0:8", ["const:b71d94:8", "const:4:8"]]
- 00b71d94 ["CALL", null, ["callee:00c5c730:8"]]
+ 00b71e30 ["INT_ADD", "register:40f0:8", ["const:b71e30:8", "const:4:8"]]
+ 00b71e30 ["CALL", null, ["callee:00c5c730:8"]]
- 00b71c3c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:18:8"]]
- 00b71c3c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 00b71c40 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00b71c40 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00b71c40 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 00b71c40 ["COPY", "tmp:3:8", ["tmp:0:8"]]
~~~


<a id="compare-43370a02f7db7f5cbd510cae74c490ea"></a>

### [`00b71db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b71/00b71db4.md) → [`00b71e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b71/00b71e50.md) _ZN11flatbuffers6Parser18LookupCreateStructERKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEEbb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c660.md) · 呼出先 17件 [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00c5c730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c730.md) · 呼出先 17件 [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 96.26% / 新版 96.26%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b71e88",
      "incomplete_value": true,
      "site": "00b71e98",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4000:8"
              ],
              [
                "leaf",
                "const:130:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b71e80",
      "incomplete_value": false,
      "site": "00b71e98",
      "value": [
        "leaf",
        "const:3e8:8"
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
      "definition_site": "00b71e7c",
      "incomplete_value": true,
      "site": "00b71e84",
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
            "const:30:8"
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
      "unmatched:00b71dc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b71ed0",
      "READ",
      [
        "storage",
        "002c3ed8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b72090",
      "PARAM",
      [
        "storage",
        "002b09c7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b71e64",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00b71f6c",
      "READ",
      [
        "storage",
        "002c3f18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b72090",
      "PARAM",
      [
        "storage",
        "002b096b",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b71dfc ["INT_ADD", "register:40f0:8", ["const:b71dfc:8", "const:4:8"]]
- 00b71dfc ["CALL", null, ["callee:00c5cb10:8"]]
+ 00b71e98 ["INT_ADD", "register:40f0:8", ["const:b71e98:8", "const:4:8"]]
+ 00b71e98 ["CALL", null, ["callee:00c5cb10:8"]]
- 00b71e84 ["INT_ADD", "register:40f0:8", ["const:b71e84:8", "const:4:8"]]
- 00b71e84 ["CALL", null, ["callee:00c5cb80:8"]]
+ 00b71f20 ["INT_ADD", "register:40f0:8", ["const:b71f20:8", "const:4:8"]]
+ 00b71f20 ["CALL", null, ["callee:00c5cb80:8"]]
- 00b71ffc ["INT_ADD", "register:40f0:8", ["const:b71ffc:8", "const:4:8"]]
- 00b71ffc ["CALL", null, ["callee:00b5ac50:8"]]
+ 00b72098 ["INT_ADD", "register:40f0:8", ["const:b72098:8", "const:4:8"]]
+ 00b72098 ["CALL", null, ["callee:00b5ac50:8"]]
~~~


<a id="compare-b5900f0d38240fb2d8d07ece970cbe48"></a>

### [`00b7224c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b7224c.md) → [`00b722e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b722e8.md) _ZN11flatbuffers6Parser9ParseTypeERNS_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00b7224c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b7224c.md) [`00c5c7d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c7d0.md) · 呼出先 12件 [`00b7224c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b7224c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 2件 [`00b722e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b722e8.md) [`00c5c8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c8a0.md) · 呼出先 12件 [`00b722e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b722e8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.84% / 新版 63.84%

優先判定に残った影響 `call_argument_candidate` 10件, `store_value` 5件, `unresolved_branch_alignment` 31件, `unresolved_call_alignment` 10件, `unresolved_store_alignment` 25件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b727b0",
      "incomplete_value": true,
      "site": "00b727c4",
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
                "const:2c2000:8"
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
    "old": {
      "definition_site": "00b72714",
      "incomplete_value": true,
      "site": "00b72728",
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
                "const:2c2000:8"
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b727d0",
      "incomplete_value": true,
      "site": "00b727d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:2f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b72734",
      "incomplete_value": true,
      "site": "00b72734",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:2f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 31,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b727bc",
      "incomplete_value": true,
      "site": "00b727d4",
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
              "INT_ADD",
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
      "definition_site": "00b72720",
      "incomplete_value": true,
      "site": "00b72738",
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
              "INT_ADD",
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b72250",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b72254",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b72258",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b722ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00b722f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00b722f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b722e8 ["INT_ADD", "register:40f0:8", ["const:b722e8:8", "const:4:8"]]
- 00b722e8 ["CALL", null, ["callee:00c58120:8"]]
+ 00b72384 ["INT_ADD", "register:40f0:8", ["const:b72384:8", "const:4:8"]]
+ 00b72384 ["CALL", null, ["callee:00c58120:8"]]
+ 00b722e8 ["INT_SUB", "register:8:8", ["register:8:8", "const:b0:8"]]
- 00b72314 ["INT_ADD", "register:40f0:8", ["const:b72314:8", "const:4:8"]]
- 00b72314 ["CALL", null, ["callee:00c5c5f0:8"]]
+ 00b723b0 ["INT_ADD", "register:40f0:8", ["const:b723b0:8", "const:4:8"]]
+ 00b723b0 ["CALL", null, ["callee:00c5c5f0:8"]]
~~~


<a id="compare-c615085b68245818b3d0f88fa14a0582"></a>

### [`00b72a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b72a08.md) → [`00b72aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b72aa4.md) _ZN11flatbuffers6Parser8AddFieldERNS_9StructDefERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEERKNS_4TypeEPPNS_8FieldD

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c780`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c780.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c580b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580b0.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md)
- 新版 呼出元 1件 [`00c5c850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c850.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58180.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 82.58% / 新版 82.58%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b72b14",
      "incomplete_value": true,
      "site": "00b72b44",
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
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b72b18",
      "incomplete_value": false,
      "site": "00b72b44",
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
            "const:bb:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b72c38",
      "incomplete_value": false,
      "site": "00b72c44",
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
            "const:6e1:8"
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
      "unmatched:00b72a4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b72af4",
      "READ",
      [
        "storage",
        "002c3ed8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00b72a7c",
      "PARAM",
      [
        "storage",
        "002b807b",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b72ae8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b72af4",
      "READ",
      [
        "storage",
        "002c3f18",
        null,
        "undefined8"
      ]
    ],
    [
      "00b72b18",
      "PARAM",
      [
        "storage",
        "002b80bb",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b72aa8 ["INT_ADD", "register:40f0:8", ["const:b72aa8:8", "const:4:8"]]
- 00b72aa8 ["CALL", null, ["callee:00c5b690:8"]]
+ 00b72b44 ["INT_ADD", "register:40f0:8", ["const:b72b44:8", "const:4:8"]]
+ 00b72b44 ["CALL", null, ["callee:00c5b690:8"]]
- 00b72c44 ["INT_ADD", "register:40f0:8", ["const:b72c44:8", "const:4:8"]]
- 00b72c44 ["CALL", null, ["callee:00c58180:8"]]
+ 00b72ce0 ["INT_ADD", "register:40f0:8", ["const:b72ce0:8", "const:4:8"]]
+ 00b72ce0 ["CALL", null, ["callee:00c58180:8"]]
+ 00b72c44 ["INT_LEFT", "tmp:0:8", ["register:4058:8", "const:2:4"]]
+ 00b72c44 ["COPY", "tmp:1:8", ["tmp:0:8"]]
+ 00b72c44 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:1:8"]]
+ 00b72c44 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:1:8"]]
~~~


<a id="compare-184620ff3c3994627e97e10cb1a1b947"></a>

### [`00b72cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b72cd0.md) → [`00b72d6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b72d6c.md) _ZN11flatbuffers10InlineSizeERKNS_4TypeE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5bfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfb0.md) · 呼出先 2件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5bfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5bfb0.md)
- 新版 呼出元 1件 [`00c5c080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c080.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5c080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c080.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.57% / 新版 90.57%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b72e00",
      "incomplete_value": true,
      "site": "00b72e10",
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
            "const:8:8"
          ]
        ]
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
      "00b72dc4",
      "DATA",
      [
        "storage",
        "0030e083",
        "switchD_00b72d34::switchdataD_0030e083",
        "byte"
      ]
    ],
    [
      "unmatched:00b72d6c",
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
      "00b72dc4",
      "DATA",
      [
        "storage",
        "0030e0c3",
        "switchD_00b72dd0::switchdataD_0030e0c3",
        "byte"
      ]
    ],
    [
      "00b72e08",
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
- 00b72d74 ["INT_ADD", "register:40f0:8", ["const:b72d74:8", "const:4:8"]]
- 00b72d74 ["CALL", null, ["callee:00c5c080:8"]]
+ 00b72e10 ["INT_ADD", "register:40f0:8", ["const:b72e10:8", "const:4:8"]]
+ 00b72e10 ["CALL", null, ["callee:00c5c080:8"]]
- 00b72cf8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b72cf8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00b72d94 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b72d94 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00b72d04 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 00b72d04 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00b72da0 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 00b72da0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-c9e23f5a51dd0fd5de36f5cdfab2669e"></a>

### [`00b72da4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b72da4.md) → [`00b72e40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b72e40.md) _ZN11flatbuffers11SymbolTableINS_8FieldDefEE3AddERKNSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEPS1_

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c0a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c0a0.md) · 呼出先 9件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md) [`00c5b140`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b140.md)
- 新版 呼出元 1件 [`00c5c170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c170.md) · 呼出先 9件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c5b210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b210.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.73% / 新版 92.73%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b72dbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b72dd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b72fa0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b72f1c"
      ]
    ]
  ],
  "added": [
    [
      "00b72e58",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00b72e74",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00b72e8c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00b72f1c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b72dbc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00b72dbc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00b72dbc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00b72dbc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00b72dc0 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00b72dc0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00b72dc0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00b72dc0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00b72dd8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:8:8"]]
- 00b72dd8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-be09ab51ac92909dca1e878985f42d43"></a>

### [`00b72f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b72f5c.md) → [`00b72ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b72ff8.md) _ZN11flatbuffers6Parser10ParseFieldERNS_9StructDefE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c470.md) · 呼出先 27件 [`00b5abb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b5a/00b5abb4.md) [`00b76d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76d2c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00c5c540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c540.md) · 呼出先 27件 [`00b5ac50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b5a/00b5ac50.md) [`00b76dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76dc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.64% / 新版 68.64%

優先判定に残った影響 `call_argument_candidate` 33件, `store_condition` 9件, `store_value` 28件, `unresolved_branch_alignment` 77件, `unresolved_call_alignment` 32件, `unresolved_store_alignment` 183件

アドレスに依存する影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b737a8",
      "incomplete_value": true,
      "site": "00b737c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b7370c",
      "incomplete_value": true,
      "site": "00b73728",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 105,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b73a9c",
      "incomplete_value": true,
      "site": "00b73aac",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:1a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b73a00",
      "incomplete_value": true,
      "site": "00b73a10",
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
                "const:2c2000:8"
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
    "ordinal": 124,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b73aa8",
      "incomplete_value": true,
      "site": "00b73ab8",
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
                "const:2a1000:8"
              ],
              [
                "leaf",
                "const:a29:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b73a0c",
      "incomplete_value": true,
      "site": "00b73a1c",
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
                "const:2a1000:8"
              ],
              [
                "leaf",
                "const:a76:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 126,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b72f90",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b72f94",
      "WRITE",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b72f98",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b7302c",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00b73030",
      "WRITE",
      [
        "storage",
        "Stack[-0xd8]",
        null,
        null
      ]
    ],
    [
      "00b73034",
      "WRITE",
      [
        "storage",
        "Stack[-0xe0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
+ 00b73728 ["COPY", "register:4040:8", ["const:2c3000:8"]]
- 00b73974 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00b73974 ["CBRANCH", null, ["local:b185:8", "tmp:0:1"]]
+ 00b73a10 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00b73a10 ["CBRANCH", null, ["local:b182:8", "tmp:0:1"]]
- 00b73990 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 00b73990 ["CBRANCH", null, ["local:b203:8", "tmp:0:1"]]
+ 00b73a2c ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
+ 00b73a2c ["CBRANCH", null, ["local:b198:8", "tmp:0:1"]]
~~~


<a id="compare-2ad56fc436fda4bf6471d0e008746f4a"></a>

### [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) → [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) _ZN11flatbuffers6Parser16ParseSingleValueEPKNSt6__ndk112basic_stringIcNS1_11char_traitsIcEENS1_9allocatorIcEEEERNS_5ValueEb

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c630.md) · 呼出先 35件 [`00b76d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76d2c.md) [`00b780bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b780bc.md) [`00b78960`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78960.md) [`00b7d130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d130.md) [`00b7d688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7d/00b7d688.md)
- 新版 呼出元 1件 [`00c5c700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c700.md) · 呼出先 35件 [`00b76dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76dc8.md) [`00b78158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78158.md) [`00b789fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b789fc.md) [`00b7d1cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d1cc.md) [`00b7d724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7d/00b7d724.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.86% / 新版 87.86%

優先判定に残った影響 `call_argument_candidate` 36件, `store_condition` 2件, `store_value` 5件, `unresolved_branch_alignment` 22件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b75654",
      "incomplete_value": true,
      "site": "00b75668",
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
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:2ca:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b755b8",
      "incomplete_value": true,
      "site": "00b755cc",
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
                "const:2bd000:8"
              ],
              [
                "leaf",
                "const:31e:8"
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
      "definition_site": "00b7566c",
      "incomplete_value": true,
      "site": "00b7566c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b755d0",
      "incomplete_value": true,
      "site": "00b755d0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e:8"
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
      "definition_site": "00b76664",
      "incomplete_value": true,
      "site": "00b76674",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:470:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b765c8",
      "incomplete_value": true,
      "site": "00b765d8",
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
                "const:2c2000:8"
              ],
              [
                "leaf",
                "const:430:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 161,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b754ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b756c0"
      ]
    ],
    [
      "00b75654",
      "READ",
      [
        "storage",
        "002bd31e",
        null,
        "string"
      ]
    ],
    [
      "00b75658",
      "READ",
      [
        "storage",
        "002bd32c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b75588",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00b756c0"
      ]
    ],
    [
      "00b75654",
      "READ",
      [
        "storage",
        "002bd2ca",
        null,
        "string"
      ]
    ],
    [
      "00b75658",
      "READ",
      [
        "storage",
        "002bd2d8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b7554c ["INT_ADD", "register:40f0:8", ["const:b7554c:8", "const:4:8"]]
- 00b7554c ["CALL", null, ["callee:00c5c640:8"]]
+ 00b755e8 ["INT_ADD", "register:40f0:8", ["const:b755e8:8", "const:4:8"]]
+ 00b755e8 ["CALL", null, ["callee:00c5c640:8"]]
- 00b755e8 ["INT_ADD", "register:40f0:8", ["const:b755e8:8", "const:4:8"]]
- 00b755e8 ["CALL", null, ["callee:00c58180:8"]]
+ 00b75684 ["INT_ADD", "register:40f0:8", ["const:b75684:8", "const:4:8"]]
+ 00b75684 ["CALL", null, ["callee:00c58180:8"]]
- 00b75668 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00b75668 ["CBRANCH", null, ["local:b307:8", "tmp:0:1"]]
+ 00b75704 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00b75704 ["CBRANCH", null, ["local:b312:8", "tmp:0:1"]]
~~~


<a id="compare-72c5165dfb6567f82b706d5a7d0486d5"></a>

### [`00b7663c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b7663c.md) → [`00b766d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b766d8.md) _ZN11flatbuffers6Parser13ParseMetaDataEPNS_11SymbolTableINS_5ValueEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5c550`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5c/00c5c550.md) · 呼出先 13件 [`00639af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00639/00639af4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58000.md)
- 新版 呼出元 1件 [`00c5c620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5c/00c5c620.md) · 呼出先 13件 [`00639b34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00639/00639b34.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.29% / 新版 85.29%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 2件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00b767a0",
      "incomplete_value": true,
      "site": "00b767b4",
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
            "const:20:8"
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
    "new": null,
    "old": {
      "definition_site": "00b767a4",
      "incomplete_value": false,
      "site": "00b767b4",
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
            "const:7b:8"
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
      "definition_site": "00b7687c",
      "incomplete_value": false,
      "site": "00b76880",
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
            "const:7bf:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b767e0",
      "incomplete_value": true,
      "site": "00b767e4",
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
            "const:813:8"
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
      "unmatched:00b767a4",
      "PARAM",
      [
        "storage",
        "002b807b",
        null,
        null
      ]
    ],
    [
      "unmatched:00b767e0",
      "PARAM",
      [
        "storage",
        "002be813",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b767fc",
      "PARAM",
      [
        "storage",
        "002a0bac",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b76840",
      "PARAM",
      [
        "storage",
        "002b80bb",
        null,
        null
      ]
    ],
    [
      "00b7687c",
      "PARAM",
      [
        "storage",
        "002be7bf",
        null,
        "string"
      ]
    ],
    [
      "00b76898",
      "PARAM",
      [
        "storage",
        "002a0b5f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b767b4 ["INT_ADD", "register:40f0:8", ["const:b767b4:8", "const:4:8"]]
- 00b767b4 ["CALL", null, ["callee:00c5b690:8"]]
+ 00b76850 ["INT_ADD", "register:40f0:8", ["const:b76850:8", "const:4:8"]]
+ 00b76850 ["CALL", null, ["callee:00c5b690:8"]]
- 00b767e4 ["INT_ADD", "register:40f0:8", ["const:b767e4:8", "const:4:8"]]
- 00b767e4 ["CALL", null, ["callee:00c58180:8"]]
+ 00b76880 ["INT_ADD", "register:40f0:8", ["const:b76880:8", "const:4:8"]]
+ 00b76880 ["CALL", null, ["callee:00c58180:8"]]
+ 00b768a0 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 00b768a0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
+ 00b768a0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
+ 00b768a0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-47e377e89ec27e86adfd43a3187a5357"></a>

### [`00b76d2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b76/00b76d2c.md) → [`00b76dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b76/00b76dc8.md) FUN_00b76dc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`00b72f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b72/00b72f5c.md) [`00b75440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b75/00b75440.md) [`00b78e04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b78/00b78e04.md) [`00b7b278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7b278.md) [`00b7bffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b7b/00b7bffc.md) · 呼出先 12件 [`00b983e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b98/00b983e0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`00b72ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b72/00b72ff8.md) [`00b754dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b75/00b754dc.md) [`00b78ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b78/00b78ea0.md) [`00b7b314`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7b/00b7b314.md) [`00b7c098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b7c/00b7c098.md) · 呼出先 12件 [`00b9847c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b98/00b9847c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.15% / 新版 97.15%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b76f58",
      "incomplete_value": false,
      "site": "00b76f6c",
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
            "const:dfc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b76ebc",
      "incomplete_value": false,
      "site": "00b76ed0",
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
            "const:dbc:8"
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
      "definition_site": "00b76f7c",
      "incomplete_value": false,
      "site": "00b76f9c",
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
            "const:ecd:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b76ee0",
      "incomplete_value": false,
      "site": "00b76f00",
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
            "const:e8d:8"
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
      "definition_site": "00b76fc0",
      "incomplete_value": false,
      "site": "00b76fc8",
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
            "const:b69:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b76f24",
      "incomplete_value": false,
      "site": "00b76f2c",
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
            "const:bb6:8"
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
      "00b76e08",
      "READ",
      [
        "storage",
        "00c9b830",
        null,
        "pointer"
      ]
    ],
    [
      "00b76e4c",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b76e60",
      "READ",
      [
        "storage",
        "011261e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b76e08",
      "READ",
      [
        "storage",
        "00c9b900",
        null,
        "pointer"
      ]
    ],
    [
      "00b76e4c",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ],
    [
      "00b76e60",
      "READ",
      [
        "storage",
        "011262e0",
        "flatbuffers::ClassicLocale::instance_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b76ed0 ["INT_ADD", "register:40f0:8", ["const:b76ed0:8", "const:4:8"]]
- 00b76ed0 ["CALL", null, ["callee:00c590a0:8"]]
+ 00b76f6c ["INT_ADD", "register:40f0:8", ["const:b76f6c:8", "const:4:8"]]
+ 00b76f6c ["CALL", null, ["callee:00c590a0:8"]]
- 00b76f00 ["INT_ADD", "register:40f0:8", ["const:b76f00:8", "const:4:8"]]
- 00b76f00 ["CALL", null, ["callee:00c58050:8"]]
+ 00b76f9c ["INT_ADD", "register:40f0:8", ["const:b76f9c:8", "const:4:8"]]
+ 00b76f9c ["CALL", null, ["callee:00c58050:8"]]
- 00b76f2c ["INT_ADD", "register:40f0:8", ["const:b76f2c:8", "const:4:8"]]
- 00b76f2c ["CALL", null, ["callee:00c58180:8"]]
+ 00b76fc8 ["INT_ADD", "register:40f0:8", ["const:b76fc8:8", "const:4:8"]]
+ 00b76fc8 ["CALL", null, ["callee:00c58180:8"]]
~~~


