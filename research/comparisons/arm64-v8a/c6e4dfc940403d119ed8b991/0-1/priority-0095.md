# v16.0.1 → v16.0.2 · 最優先の変更候補 (95)

[一覧の目次](README.md)

<a id="compare-5769fff52042665a134417717b7df6f1"></a>

### [`00bda8fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda8fc.md) → [`00bda998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bda998.md) _ZN8firebase4auth17PhoneAuthProviderD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5d9c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d9c0.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 1件 [`00c5da90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5da90.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bda924",
      "incomplete_value": false,
      "site": "00bda928",
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
      "00bda9c0",
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
      "00bda9c0",
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
- 00bda928 ["INT_ADD", "register:40f0:8", ["const:bda928:8", "const:4:8"]]
- 00bda928 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bda9c4 ["INT_ADD", "register:40f0:8", ["const:bda9c4:8", "const:4:8"]]
+ 00bda9c4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda914 ["INT_ADD", "register:40f0:8", ["const:bda914:8", "const:4:8"]]
- 00bda914 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bda9b0 ["INT_ADD", "register:40f0:8", ["const:bda9b0:8", "const:4:8"]]
+ 00bda9b0 ["CALL", null, ["callee:00c5b330:8"]]
- 00bda924 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00bda924 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bda924 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bda924 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bda9c0 ["COPY", "tmp:0:8", ["const:609:8"]]
+ 00bda9c0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda9c0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bda9c0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-f0621cf1583934c137d8ff9f832bf4b3"></a>

### [`00bda96c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bda96c.md) → [`00bdaa08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bdaa08.md) _ZN8firebase4auth17PhoneAuthProvider8ListenerC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

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
    "old": {
      "definition_site": "00bda984",
      "incomplete_value": true,
      "site": "00bda988",
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
    "old": {
      "definition_site": "00bda9ac",
      "incomplete_value": false,
      "site": "00bda9b0",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bda9c4",
      "incomplete_value": true,
      "site": "00bda9d4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb0:8"
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
      "00bdaa18",
      "READ",
      [
        "storage",
        "00c9ba40",
        null,
        "pointer"
      ]
    ],
    [
      "00bdaa24",
      "DATA",
      [
        "storage",
        "00c92540",
        null,
        "pointer"
      ]
    ],
    [
      "00bdaa48",
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
      "00bdaa18",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bdaa24",
      "DATA",
      [
        "storage",
        "00c92610",
        null,
        "pointer"
      ]
    ],
    [
      "00bdaa48",
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
- 00bda9b0 ["INT_ADD", "register:40f0:8", ["const:bda9b0:8", "const:4:8"]]
- 00bda9b0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdaa4c ["INT_ADD", "register:40f0:8", ["const:bdaa4c:8", "const:4:8"]]
+ 00bdaa4c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bda9d4 ["INT_ADD", "register:40f0:8", ["const:bda9d4:8", "const:4:8"]]
- 00bda9d4 ["CALL", null, ["callee:00589734:8"]]
+ 00bdaa70 ["INT_ADD", "register:40f0:8", ["const:bdaa70:8", "const:4:8"]]
+ 00bdaa70 ["CALL", null, ["callee:00589734:8"]]
- 00bda97c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a40:8"]]
- 00bda97c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdaa18 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b10:8"]]
+ 00bdaa18 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-80136b0fe66f254012d308ae01a71618"></a>

### [`00bdaa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bdaa00.md) → [`00bdaa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bdaa9c.md) _ZN8firebase4auth17PhoneAuthProvider8ListenerD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00574cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00574/00574cec.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

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
    "old": {
      "definition_site": "00bdaa18",
      "incomplete_value": true,
      "site": "00bdaa1c",
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
    "old": {
      "definition_site": "00bdaa30",
      "incomplete_value": false,
      "site": "00bdaa34",
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
    "old": {
      "definition_site": "00bdaa48",
      "incomplete_value": true,
      "site": "00bdaa54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cc8:8"
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
      "00bdaaac",
      "READ",
      [
        "storage",
        "00c9ba40",
        null,
        "pointer"
      ]
    ],
    [
      "00bdaab8",
      "DATA",
      [
        "storage",
        "00c92540",
        null,
        "pointer"
      ]
    ],
    [
      "00bdaacc",
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
      "00bdaaac",
      "READ",
      [
        "storage",
        "00c9bb10",
        null,
        "pointer"
      ]
    ],
    [
      "00bdaab8",
      "DATA",
      [
        "storage",
        "00c92610",
        null,
        "pointer"
      ]
    ],
    [
      "00bdaacc",
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
- 00bdaa34 ["INT_ADD", "register:40f0:8", ["const:bdaa34:8", "const:4:8"]]
- 00bdaa34 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdaad0 ["INT_ADD", "register:40f0:8", ["const:bdaad0:8", "const:4:8"]]
+ 00bdaad0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdaa54 ["INT_ADD", "register:40f0:8", ["const:bdaa54:8", "const:4:8"]]
- 00bdaa54 ["CALL", null, ["callee:00574d2c:8"]]
+ 00bdaaf0 ["INT_ADD", "register:40f0:8", ["const:bdaaf0:8", "const:4:8"]]
+ 00bdaaf0 ["CALL", null, ["callee:00574d2c:8"]]
- 00bdaa10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a40:8"]]
- 00bdaa10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdaaac ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b10:8"]]
+ 00bdaaac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dd02f62357f11688b2db9237fc938cc9"></a>

### [`00bdaa98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bdaa98.md) → [`00bdab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bda/00bdab34.md) _ZN8firebase4auth17PhoneAuthProvider17VerifyPhoneNumberERKNS0_16PhoneAuthOptionsEPNS1_8ListenerE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

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
    "old": {
      "definition_site": "00bdab04",
      "incomplete_value": true,
      "site": "00bdab1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdab10",
      "incomplete_value": true,
      "site": "00bdab1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdab34",
      "incomplete_value": false,
      "site": "00bdab3c",
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
            "const:91d:8"
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
      "00bdaba0",
      "READ",
      [
        "storage",
        "01126b78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdabac",
      "READ",
      [
        "storage",
        "01126b88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdabd0",
      "PARAM",
      [
        "storage",
        "002be91d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdaba0",
      "READ",
      [
        "storage",
        "01126c78",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdabac",
      "READ",
      [
        "storage",
        "01126c88",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdabd0",
      "PARAM",
      [
        "storage",
        "002be8c9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdab1c ["INT_ADD", "register:40f0:8", ["const:bdab1c:8", "const:4:8"]]
- 00bdab1c ["CALL", null, ["callee:00589734:8"]]
+ 00bdabb8 ["INT_ADD", "register:40f0:8", ["const:bdabb8:8", "const:4:8"]]
+ 00bdabb8 ["CALL", null, ["callee:00589734:8"]]
- 00bdab3c ["INT_ADD", "register:40f0:8", ["const:bdab3c:8", "const:4:8"]]
- 00bdab3c ["CALL", null, ["callee:00c5b690:8"]]
+ 00bdabd8 ["INT_ADD", "register:40f0:8", ["const:bdabd8:8", "const:4:8"]]
+ 00bdabd8 ["CALL", null, ["callee:00c5b690:8"]]
- 00bdab50 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdab50 ["INT_ADD", "register:40f0:8", ["const:bdab50:8", "const:4:8"]]
- 00bdab50 ["CALLIND", null, ["register:0:8"]]
+ 00bdabec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdabec ["INT_ADD", "register:40f0:8", ["const:bdabec:8", "const:4:8"]]
+ 00bdabec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ce965b8d02b71b24c11f49b8e145b863"></a>

### [`00bdafb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bda/00bdafb8.md) → [`00bdb054`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb054.md) _ZN8firebase4auth17PhoneAuthProvider13GetCredentialEPKcS3_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5aca0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aca0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5ad70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad70.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 91.58% / 新版 91.58%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
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
      "definition_site": "00bdb030",
      "incomplete_value": true,
      "site": "00bdb048",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdb034",
      "incomplete_value": true,
      "site": "00bdb048",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdb0a0",
      "incomplete_value": false,
      "site": "00bdb0a4",
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
      "00bdb07c",
      "READ",
      [
        "storage",
        "01126cf8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdb080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bdb104"
      ]
    ],
    [
      "00bdb0cc",
      "READ",
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
      "00bdb07c",
      "READ",
      [
        "storage",
        "01126df8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdb080",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdb1a0"
      ]
    ],
    [
      "00bdb0cc",
      "READ",
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
- 00bdb048 ["INT_ADD", "register:40f0:8", ["const:bdb048:8", "const:4:8"]]
- 00bdb048 ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bdb0e4 ["INT_ADD", "register:40f0:8", ["const:bdb0e4:8", "const:4:8"]]
+ 00bdb0e4 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bdb0a4 ["INT_ADD", "register:40f0:8", ["const:bdb0a4:8", "const:4:8"]]
- 00bdb0a4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdb140 ["INT_ADD", "register:40f0:8", ["const:bdb140:8", "const:4:8"]]
+ 00bdb140 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdb10c ["INT_ADD", "register:40f0:8", ["const:bdb10c:8", "const:4:8"]]
- 00bdb10c ["CALL", null, ["callee:00c5ad70:8"]]
+ 00bdb1a8 ["INT_ADD", "register:40f0:8", ["const:bdb1a8:8", "const:4:8"]]
+ 00bdb1a8 ["CALL", null, ["callee:00c5ad70:8"]]
~~~


<a id="compare-b0b3d3a059af46faa8968a9f0e31ecc5"></a>

### [`00bdb1d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb1d4.md) → [`00bdb270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb270.md) _ZN8firebase4auth20JniAuthPhoneListener29nativeOnVerificationCompletedEP7_JNIEnvP8_jobjectlS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b260.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdb214",
      "incomplete_value": false,
      "site": "00bdb218",
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
      "00bdb2b0",
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
      "00bdb2b0",
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
- 00bdb218 ["INT_ADD", "register:40f0:8", ["const:bdb218:8", "const:4:8"]]
- 00bdb218 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdb2b4 ["INT_ADD", "register:40f0:8", ["const:bdb2b4:8", "const:4:8"]]
+ 00bdb2b4 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdb204 ["INT_ADD", "register:40f0:8", ["const:bdb204:8", "const:4:8"]]
- 00bdb204 ["CALL", null, ["callee:00c5b330:8"]]
+ 00bdb2a0 ["INT_ADD", "register:40f0:8", ["const:bdb2a0:8", "const:4:8"]]
+ 00bdb2a0 ["CALL", null, ["callee:00c5b330:8"]]
- 00bdb214 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00bdb214 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdb214 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdb214 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdb2b0 ["COPY", "tmp:0:8", ["const:609:8"]]
+ 00bdb2b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb2b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdb2b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-64837d61c013acb4e082efc2052bb54b"></a>

### [`00bdb370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb370.md) → [`00bdb40c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb40c.md) _ZN8firebase4auth20JniAuthPhoneListener16nativeOnCodeSentEP7_JNIEnvP8_jobjectlP8_jstringS5_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdb418",
      "incomplete_value": false,
      "site": "00bdb41c",
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
      "00bdb4b4",
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
      "00bdb4b4",
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
- 00bdb41c ["INT_ADD", "register:40f0:8", ["const:bdb41c:8", "const:4:8"]]
- 00bdb41c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdb4b8 ["INT_ADD", "register:40f0:8", ["const:bdb4b8:8", "const:4:8"]]
+ 00bdb4b8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdb3a8 ["INT_ADD", "register:40f0:8", ["const:bdb3a8:8", "const:4:8"]]
- 00bdb3a8 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bdb444 ["INT_ADD", "register:40f0:8", ["const:bdb444:8", "const:4:8"]]
+ 00bdb444 ["CALL", null, ["callee:00c57f60:8"]]
- 00bdb3bc ["INT_ADD", "register:40f0:8", ["const:bdb3bc:8", "const:4:8"]]
- 00bdb3bc ["CALL", null, ["callee:00c5df10:8"]]
+ 00bdb458 ["INT_ADD", "register:40f0:8", ["const:bdb458:8", "const:4:8"]]
+ 00bdb458 ["CALL", null, ["callee:00c5df10:8"]]
~~~


<a id="compare-c241908a889daae2bb0053c694ce0368"></a>

### [`00bdb6d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb6d8.md) → [`00bdb774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb774.md) _ZN8firebase4auth22FederatedOAuthProviderD1Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb78c",
      "incomplete_value": true,
      "site": "00bdb79c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:40:8"
              ]
            ]
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdb788",
      "READ",
      [
        "storage",
        "00c9ba48",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00bdb6fc",
      "DATA",
      [
        "storage",
        "00c92580",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bdb788",
      "READ",
      [
        "storage",
        "00c9bb18",
        null,
        "pointer"
      ]
    ],
    [
      "00bdb798",
      "DATA",
      [
        "storage",
        "00c92650",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdb700 ["INT_ADD", "register:40f0:8", ["const:bdb700:8", "const:4:8"]]
- 00bdb700 ["CALL", null, ["callee:0046d4d0:8"]]
+ 00bdb79c ["INT_ADD", "register:40f0:8", ["const:bdb79c:8", "const:4:8"]]
+ 00bdb79c ["CALL", null, ["callee:0046d4d0:8"]]
- 00bdb6ec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a48:8"]]
- 00bdb6ec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdb788 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b18:8"]]
+ 00bdb788 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bdb6f8 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bdb6f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdb6f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdb6f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-04641944be65ccf933575dd4eaa5e01d"></a>

### [`00bdb784`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb784.md) → [`00bdb820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb820.md) _ZN8firebase4auth22FederatedOAuthProviderD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies, store_value

命令の説明率　旧版 100.00% / 新版 100.00%

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bdb844",
      "incomplete_value": true,
      "site": "00bdb844",
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
      "definition_site": "00bdb7a8",
      "incomplete_value": true,
      "site": "00bdb7a8",
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
      "00bdb834",
      "READ",
      [
        "storage",
        "00c9ba48",
        null,
        "pointer"
      ]
    ],
    [
      "00bdb844",
      "DATA",
      [
        "storage",
        "00c92580",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bdb834",
      "READ",
      [
        "storage",
        "00c9bb18",
        null,
        "pointer"
      ]
    ],
    [
      "00bdb844",
      "DATA",
      [
        "storage",
        "00c92650",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdb798 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a48:8"]]
- 00bdb798 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdb834 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b18:8"]]
+ 00bdb834 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bdb7ac ["INT_ADD", "register:40f0:8", ["const:bdb7ac:8", "const:4:8"]]
- 00bdb7ac ["CALL", null, ["callee:0046d4d0:8"]]
+ 00bdb848 ["INT_ADD", "register:40f0:8", ["const:bdb848:8", "const:4:8"]]
+ 00bdb848 ["CALL", null, ["callee:0046d4d0:8"]]
- 00bdb7e8 ["INT_ADD", "register:40f0:8", ["const:bdb7e8:8", "const:4:8"]]
- 00bdb7e8 ["CALL", null, ["callee:00c57f80:8"]]
+ 00bdb884 ["INT_ADD", "register:40f0:8", ["const:bdb884:8", "const:4:8"]]
+ 00bdb884 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-49f54567371e0b50b0587d4033aface3"></a>

### [`00bdb828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb828.md) → [`00bdb8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb8c4.md) _ZN8firebase4auth22FederatedOAuthProvider15SetProviderDataERKNS0_26FederatedOAuthProviderDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0053b77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0053b/0053b77c.md) [`00c5b0b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b0b0.md) [`00c5d030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5d030.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0053b7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0053b/0053b7bc.md) [`00c5b180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b180.md) [`00c5d100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5d100.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 70.37% / 新版 70.37%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb904",
      "incomplete_value": true,
      "site": "00bdb908",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "definition_site": "00bdb900",
      "incomplete_value": true,
      "site": "00bdb908",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:18:8"
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
    "new": {
      "definition_site": "00bdb900",
      "incomplete_value": true,
      "site": "00bdb908",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00bdb840",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdb924"
      ]
    ]
  ],
  "added": [
    [
      "00bdb8dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdb924"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdb86c ["INT_ADD", "register:40f0:8", ["const:bdb86c:8", "const:4:8"]]
- 00bdb86c ["CALL", null, ["callee:00c5d100:8"]]
+ 00bdb908 ["INT_ADD", "register:40f0:8", ["const:bdb908:8", "const:4:8"]]
+ 00bdb908 ["CALL", null, ["callee:00c5d100:8"]]
- 00bdb840 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 00bdb844 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00bdb844 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bdb844 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-c2f4a80fe12594da98cae346b8a2c8d2"></a>

### [`00bdb894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb894.md) → [`00bdb930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb930.md) _ZN8firebase4auth22FederatedOAuthProvider6SignInEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 18件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00bdbc38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdbc38.md) [`00bdcb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdcb7c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 18件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00bdbcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbcd4.md) [`00bdcc18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcc18.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.47% / 新版 92.47%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 13件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bdbac8",
      "incomplete_value": true,
      "site": "00bdbac8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:af0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdba2c",
      "incomplete_value": true,
      "site": "00bdba2c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdb968",
      "incomplete_value": true,
      "site": "00bdb970",
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
    "old": {
      "definition_site": "00bdb8cc",
      "incomplete_value": true,
      "site": "00bdb8d4",
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
            "register:4098:8"
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
      "definition_site": "00bdba68",
      "incomplete_value": true,
      "site": "00bdba78",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdb9cc",
      "incomplete_value": true,
      "site": "00bdb9dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 11,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bdb898",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdb89c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdb8a0",
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
      "00bdb934",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00bdb938",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bdb93c",
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
- 00bdb8d4 ["INT_ADD", "register:40f0:8", ["const:bdb8d4:8", "const:4:8"]]
- 00bdb8d4 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bdb970 ["INT_ADD", "register:40f0:8", ["const:bdb970:8", "const:4:8"]]
+ 00bdb970 ["CALL", null, ["callee:00c5b150:8"]]
- 00bdb990 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00bdb990 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00bdb990 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00bdb990 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00bdba2c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00bdba2c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00bdba2c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00bdba2c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00bdb9dc ["INT_ADD", "register:40f0:8", ["const:bdb9dc:8", "const:4:8"]]
- 00bdb9dc ["CALL", null, ["callee:00497874:8"]]
+ 00bdba78 ["INT_ADD", "register:40f0:8", ["const:bdba78:8", "const:4:8"]]
+ 00bdba78 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-edcde6e52c0ebb00bf47ff2d9d12b466"></a>

### [`00bdbb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdbb6c.md) → [`00bdbc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbc08.md) _ZN8firebase26ReferenceCountedFutureImpl9SafeAllocINS_4auth10AuthResultEEENS_16SafeFutureHandleIT_EEiRKS5_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5dde0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dde0.md) · 呼出先 7件 [`00bcfcd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfcd8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md) [`00c5ae00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae00.md)
- 新版 呼出元 1件 [`00c5deb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5deb0.md) · 呼出先 7件 [`00bcfd74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfd74.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md) [`00c5aed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aed0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 92.68% / 新版 92.68%

アドレスに依存する影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdbbc0",
      "incomplete_value": true,
      "site": "00bdbbcc",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdbbc4",
      "incomplete_value": true,
      "site": "00bdbbcc",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdbbc8",
      "incomplete_value": true,
      "site": "00bdbbcc",
      "value": [
        "live",
        "register:40b0:8"
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
      "00bdbc54",
      "READ",
      [
        "storage",
        "00c9b9e8",
        null,
        "pointer"
      ]
    ],
    [
      "00bdbc54",
      "PARAM",
      [
        "storage",
        "00bcfcd8",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::auth::AuthResult>",
        null
      ]
    ],
    [
      "unmatched:00bdbbf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdbca8"
      ]
    ]
  ],
  "added": [
    [
      "00bdbc54",
      "READ",
      [
        "storage",
        "00c9bab8",
        null,
        "pointer"
      ]
    ],
    [
      "00bdbc54",
      "PARAM",
      [
        "storage",
        "00bcfd74",
        "firebase::ReferenceCountedFutureImpl::DeleteT<firebase::auth::AuthResult>",
        null
      ]
    ],
    [
      "00bdbc8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdbca8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdbbcc ["INT_ADD", "register:40f0:8", ["const:bdbbcc:8", "const:4:8"]]
- 00bdbbcc ["CALL", null, ["callee:00c5af10:8"]]
+ 00bdbc68 ["INT_ADD", "register:40f0:8", ["const:bdbc68:8", "const:4:8"]]
+ 00bdbc68 ["CALL", null, ["callee:00c5af10:8"]]
- 00bdbba4 ["INT_ADD", "register:40f0:8", ["const:bdbba4:8", "const:4:8"]]
- 00bdbba4 ["CALL", null, ["callee:00c57f60:8"]]
+ 00bdbc40 ["INT_ADD", "register:40f0:8", ["const:bdbc40:8", "const:4:8"]]
+ 00bdbc40 ["CALL", null, ["callee:00c57f60:8"]]
- 00bdbbb0 ["INT_ADD", "register:40f0:8", ["const:bdbbb0:8", "const:4:8"]]
- 00bdbbb0 ["CALL", null, ["callee:00c5dec0:8"]]
+ 00bdbc4c ["INT_ADD", "register:40f0:8", ["const:bdbc4c:8", "const:4:8"]]
+ 00bdbc4c ["CALL", null, ["callee:00c5dec0:8"]]
~~~


<a id="compare-f61f27b1b3d2d8dce3963656c63ec582"></a>

### [`00bdbc38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdbc38.md) → [`00bdbcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbcd4.md) FUN_00bdbcd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00bdb894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdb894.md) [`00bdbe78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdbe78.md) [`00bdc150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc150.md) · 呼出先 9件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aba0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aba0.md) [`00c5afb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5afb0.md)
- 新版 呼出元 3件 [`00bdb930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdb930.md) [`00bdbf14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbf14.md) [`00bdc1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc1ec.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ac70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ac70.md) [`00c5b080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b080.md)

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
    "old": {
      "definition_site": "00bdbc94",
      "incomplete_value": true,
      "site": "00bdbcac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdbc98",
      "incomplete_value": true,
      "site": "00bdbcac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b40:8"
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
    "old": {
      "definition_site": "00bdbd0c",
      "incomplete_value": true,
      "site": "00bdbd1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bdbd30",
      "READ",
      [
        "storage",
        "01126b28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdbd34",
      "READ",
      [
        "storage",
        "01126b40",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdbda8",
      "READ",
      [
        "storage",
        "01126c18",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdbd30",
      "READ",
      [
        "storage",
        "01126c28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdbd34",
      "READ",
      [
        "storage",
        "01126c40",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdbda8",
      "READ",
      [
        "storage",
        "01126d18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdbcac ["INT_ADD", "register:40f0:8", ["const:bdbcac:8", "const:4:8"]]
- 00bdbcac ["CALL", null, ["callee:00c5ac70:8"]]
+ 00bdbd48 ["INT_ADD", "register:40f0:8", ["const:bdbd48:8", "const:4:8"]]
+ 00bdbd48 ["CALL", null, ["callee:00c5ac70:8"]]
- 00bdbd1c ["INT_ADD", "register:40f0:8", ["const:bdbd1c:8", "const:4:8"]]
- 00bdbd1c ["CALL", null, ["callee:00497874:8"]]
+ 00bdbdb8 ["INT_ADD", "register:40f0:8", ["const:bdbdb8:8", "const:4:8"]]
+ 00bdbdb8 ["CALL", null, ["callee:00497874:8"]]
- 00bdbdac ["INT_ADD", "register:40f0:8", ["const:bdbdac:8", "const:4:8"]]
- 00bdbdac ["CALL", null, ["callee:00497874:8"]]
+ 00bdbe48 ["INT_ADD", "register:40f0:8", ["const:bdbe48:8", "const:4:8"]]
+ 00bdbe48 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-dcc38110ec087c7eaa4083ec534cb016"></a>

### [`00bdc150`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc150.md) → [`00bdc1ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc1ec.md) _ZN8firebase4auth22FederatedOAuthProvider14ReauthenticateEPNS0_8AuthDataE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 18件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00bdbc38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdb/00bdbc38.md) [`00bdcb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdcb7c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 18件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00bdbcd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdb/00bdbcd4.md) [`00bdcc18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcc18.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 97.26% / 新版 97.26%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bdc384",
      "incomplete_value": true,
      "site": "00bdc384",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:af0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdc2e8",
      "incomplete_value": true,
      "site": "00bdc2e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc324",
      "incomplete_value": true,
      "site": "00bdc334",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:da0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdc288",
      "incomplete_value": true,
      "site": "00bdc298",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 11,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc3a4",
      "incomplete_value": true,
      "site": "00bdc3b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b08:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdc308",
      "incomplete_value": true,
      "site": "00bdc318",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 17,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdc324",
      "READ",
      [
        "storage",
        "01126ca0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdc380",
      "READ",
      [
        "storage",
        "00c9ba20",
        null,
        "pointer"
      ]
    ],
    [
      "00bdc384",
      "DATA",
      [
        "storage",
        "00bd482c",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bdc324",
      "READ",
      [
        "storage",
        "01126da0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdc380",
      "READ",
      [
        "storage",
        "00c9baf0",
        null,
        "pointer"
      ]
    ],
    [
      "00bdc384",
      "DATA",
      [
        "storage",
        "00bd48c8",
        "firebase::auth::ReadAuthResult",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdc298 ["INT_ADD", "register:40f0:8", ["const:bdc298:8", "const:4:8"]]
- 00bdc298 ["CALL", null, ["callee:00497874:8"]]
+ 00bdc334 ["INT_ADD", "register:40f0:8", ["const:bdc334:8", "const:4:8"]]
+ 00bdc334 ["CALL", null, ["callee:00497874:8"]]
- 00bdc318 ["INT_ADD", "register:40f0:8", ["const:bdc318:8", "const:4:8"]]
- 00bdc318 ["CALL", null, ["callee:00c5b010:8"]]
+ 00bdc3b4 ["INT_ADD", "register:40f0:8", ["const:bdc3b4:8", "const:4:8"]]
+ 00bdc3b4 ["CALL", null, ["callee:00c5b010:8"]]
- 00bdc320 ["INT_ADD", "register:40f0:8", ["const:bdc320:8", "const:4:8"]]
- 00bdc320 ["CALL", null, ["callee:00c5ab60:8"]]
+ 00bdc3bc ["INT_ADD", "register:40f0:8", ["const:bdc3bc:8", "const:4:8"]]
+ 00bdc3bc ["CALL", null, ["callee:00c5ab60:8"]]
~~~


<a id="compare-471cfb5e3a030a5e4771adef84c99649"></a>

### [`00bdc454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc454.md) → [`00bdc4f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc4f0.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINS_4auth10CredentialEEEvRKNS_12FutureHandleEiPKcEUlPvE_E

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5ddd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5ddd0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5dea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dea0.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdc4b8",
      "incomplete_value": false,
      "site": "00bdc4bc",
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
            "const:e4:8"
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
      "00bdc554",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdc554",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdc4bc ["INT_ADD", "register:40f0:8", ["const:bdc4bc:8", "const:4:8"]]
- 00bdc4bc ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdc558 ["INT_ADD", "register:40f0:8", ["const:bdc558:8", "const:4:8"]]
+ 00bdc558 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdc480 ["INT_ADD", "register:40f0:8", ["const:bdc480:8", "const:4:8"]]
- 00bdc480 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bdc51c ["INT_ADD", "register:40f0:8", ["const:bdc51c:8", "const:4:8"]]
+ 00bdc51c ["CALL", null, ["callee:00c5aad0:8"]]
- 00bdc48c ["INT_ADD", "register:40f0:8", ["const:bdc48c:8", "const:4:8"]]
- 00bdc48c ["CALL", null, ["callee:00c5af50:8"]]
+ 00bdc528 ["INT_ADD", "register:40f0:8", ["const:bdc528:8", "const:4:8"]]
+ 00bdc528 ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-f88f6c6cd42d16f76ce390092d4b2bb5"></a>

### [`00bdc5fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc5fc.md) → [`00bdc698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc698.md) _ZN8firebase4auth10AuthResultC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `observed` · 参照 `equal`

- 旧版 呼出元 1件 [`00c5ddf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5ddf0.md) · 呼出先 3件 [`00c5aa40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa40.md) [`00c5dd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd60.md) [`00c5de20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de20.md)
- 新版 呼出元 1件 [`00c5dec0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dec0.md) · 呼出先 3件 [`00c5ab10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab10.md) [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md) [`00c5def0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5def0.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc6d0",
      "incomplete_value": true,
      "site": "00bdc6d4",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "00bdc634",
      "incomplete_value": true,
      "site": "00bdc638",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:70:8"
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
      "definition_site": "00bdc6d8",
      "incomplete_value": true,
      "site": "00bdc6e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:98:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  }
]
~~~


~~~diff
- 00bdc638 ["INT_ADD", "register:40f0:8", ["const:bdc638:8", "const:4:8"]]
- 00bdc638 ["CALL", null, ["callee:00c5de30:8"]]
+ 00bdc6d4 ["INT_ADD", "register:40f0:8", ["const:bdc6d4:8", "const:4:8"]]
+ 00bdc6d4 ["CALL", null, ["callee:00c5de30:8"]]
- 00bdc644 ["INT_ADD", "register:40f0:8", ["const:bdc644:8", "const:4:8"]]
- 00bdc644 ["CALL", null, ["callee:00c5ab10:8"]]
+ 00bdc6e0 ["INT_ADD", "register:40f0:8", ["const:bdc6e0:8", "const:4:8"]]
+ 00bdc6e0 ["CALL", null, ["callee:00c5ab10:8"]]
- 00bdc614 ["INT_ADD", "register:40f0:8", ["const:bdc614:8", "const:4:8"]]
- 00bdc614 ["CALL", null, ["callee:00c5def0:8"]]
+ 00bdc6b0 ["INT_ADD", "register:40f0:8", ["const:bdc6b0:8", "const:4:8"]]
+ 00bdc6b0 ["CALL", null, ["callee:00c5def0:8"]]
~~~


<a id="compare-3dc4920c0df47b5f83891f1e3f46ef7f"></a>

### [`00bdc6cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc6cc.md) → [`00bdc768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc768.md) _ZN8firebase4auth18AdditionalUserInfoC2ERKS1_

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5de20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de20.md) · 呼出先 3件 [`00c5b5b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5b0.md) [`00c5dd60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dd60.md) [`00c5de70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de70.md)
- 新版 呼出元 1件 [`00c5def0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5def0.md) · 呼出先 3件 [`00c5b680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b680.md) [`00c5de30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de30.md) [`00c5df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df40.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.54% / 新版 82.54%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc830",
      "incomplete_value": true,
      "site": "00bdc848",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdc834",
      "incomplete_value": true,
      "site": "00bdc848",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00bdc770",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdc7c4"
      ]
    ],
    [
      "unmatched:00bdc788",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bdc774"
      ]
    ]
  ],
  "added": [
    [
      "00bdc80c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdc7c4"
      ]
    ],
    [
      "00bdc824",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdc810"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdc7ac ["INT_ADD", "register:40f0:8", ["const:bdc7ac:8", "const:4:8"]]
- 00bdc7ac ["CALL", null, ["callee:00c5de30:8"]]
+ 00bdc848 ["INT_ADD", "register:40f0:8", ["const:bdc848:8", "const:4:8"]]
+ 00bdc848 ["CALL", null, ["callee:00c5de30:8"]]
- 00bdc6ec ["INT_ADD", "register:40f0:8", ["const:bdc6ec:8", "const:4:8"]]
- 00bdc6ec ["CALL", null, ["callee:00c5b680:8"]]
+ 00bdc788 ["INT_ADD", "register:40f0:8", ["const:bdc788:8", "const:4:8"]]
+ 00bdc788 ["CALL", null, ["callee:00c5b680:8"]]
- 00bdc6fc ["INT_ADD", "register:40f0:8", ["const:bdc6fc:8", "const:4:8"]]
- 00bdc6fc ["CALL", null, ["callee:00c5b680:8"]]
+ 00bdc798 ["INT_ADD", "register:40f0:8", ["const:bdc798:8", "const:4:8"]]
+ 00bdc798 ["CALL", null, ["callee:00c5b680:8"]]
~~~


<a id="compare-31dfc59dbfac41680e5a069493d7d964"></a>

### [`00bdc83c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc83c.md) → [`00bdc8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc8d8.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE30__emp

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5de70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de70.md) · 呼出先 5件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a8f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a8f0.md) [`00c5b5e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5e0.md) [`00c5de60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de60.md)
- 新版 呼出元 1件 [`00c5df40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df40.md) · 呼出先 5件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a9c0.md) [`00c5b6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b6b0.md) [`00c5df30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdc864",
      "incomplete_value": true,
      "site": "00bdc874",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdc868",
      "incomplete_value": true,
      "site": "00bdc874",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdc860",
      "incomplete_value": true,
      "site": "00bdc874",
      "value": [
        "live",
        "register:4010:8"
      ]
    },
    "ordinal": 0,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bdc900",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdc9bc"
      ]
    ]
  ],
  "added": [
    [
      "00bdc99c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdc9bc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdc874 ["INT_ADD", "register:40f0:8", ["const:bdc874:8", "const:4:8"]]
- 00bdc874 ["CALL", null, ["callee:00c5df30:8"]]
+ 00bdc910 ["INT_ADD", "register:40f0:8", ["const:bdc910:8", "const:4:8"]]
+ 00bdc910 ["CALL", null, ["callee:00c5df30:8"]]
- 00bdc8a0 ["INT_ADD", "register:40f0:8", ["const:bdc8a0:8", "const:4:8"]]
- 00bdc8a0 ["CALL", null, ["callee:00c5a9c0:8"]]
+ 00bdc93c ["INT_ADD", "register:40f0:8", ["const:bdc93c:8", "const:4:8"]]
+ 00bdc93c ["CALL", null, ["callee:00c5a9c0:8"]]
- 00bdc8b0 ["INT_ADD", "register:40f0:8", ["const:bdc8b0:8", "const:4:8"]]
- 00bdc8b0 ["CALL", null, ["callee:00c5a9c0:8"]]
+ 00bdc94c ["INT_ADD", "register:40f0:8", ["const:bdc94c:8", "const:4:8"]]
+ 00bdc94c ["CALL", null, ["callee:00c5a9c0:8"]]
~~~


<a id="compare-388c6fbc88571004d7a9166d6f9b7782"></a>

### [`00bdc950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdc950.md) → [`00bdc9ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdc9ec.md) _ZNSt6__ndk16__treeINS_12__value_typeIN8firebase7VariantES3_EENS_19__map_value_compareIS3_S4_NS_4lessIS3_EELb1EEENS_9allocatorIS4_EEE12__fin

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00c5de60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de60.md) · 呼出先 1件 [`00c5b5a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b5a0.md)
- 新版 呼出元 1件 [`00c5df30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df30.md) · 呼出先 1件 [`00c5b670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b670.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 74.10% / 新版 74.10%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdcb70",
      "incomplete_value": true,
      "site": "00bdcb74",
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
      "definition_site": "00bdcb6c",
      "incomplete_value": true,
      "site": "00bdcb74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:20:8"
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
      "unmatched:00bdc980",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdca38"
      ]
    ],
    [
      "unmatched:00bdc9b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdca8c"
      ]
    ],
    [
      "unmatched:00bdca04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdca90"
      ]
    ]
  ],
  "added": [
    [
      "00bdca1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdca38"
      ]
    ],
    [
      "00bdca4c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdca8c"
      ]
    ],
    [
      "00bdcaa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdca90"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdcad8 ["INT_ADD", "register:40f0:8", ["const:bdcad8:8", "const:4:8"]]
- 00bdcad8 ["CALL", null, ["callee:00c5b670:8"]]
+ 00bdcb74 ["INT_ADD", "register:40f0:8", ["const:bdcb74:8", "const:4:8"]]
+ 00bdcb74 ["CALL", null, ["callee:00c5b670:8"]]
- 00bdc978 ["INT_LESSEQUAL", "register:105:1", ["register:4008:8", "register:40c8:8"]]
- 00bdc978 ["INT_SBORROW", "register:106:1", ["register:40c8:8", "register:4008:8"]]
- 00bdc978 ["INT_SUB", "tmp:0:8", ["register:40c8:8", "register:4008:8"]]
- 00bdc978 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00bdc97c ["COPY", "register:4098:8", ["register:4010:8"]]
~~~


<a id="compare-2ad246b874eb3ac854435184fb5e77d0"></a>

### [`00bdcc58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdcc58.md) → [`00bdccf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdccf4.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINS_4auth10AuthResultEZNS2_35FederatedAuthProviderFutureCallbackIS3_EEvP7_JNIEnvP8

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ddc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5ddc0.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5de90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5de90.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.74% / 新版 89.74%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdcc78",
      "incomplete_value": true,
      "site": "00bdcc8c",
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
            "const:8:8"
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
      "definition_site": "00bdcd2c",
      "incomplete_value": true,
      "site": "00bdcd34",
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
            "register:40a0:8"
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
    "new": {
      "definition_site": "00bdcd44",
      "incomplete_value": true,
      "site": "00bdcd50",
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
      "unmatched:00bdcc68",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdccbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdcd68"
      ]
    ],
    [
      "unmatched:00bdccc4",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdcd04",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bdcd58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdcd68"
      ]
    ],
    [
      "00bdcd60",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdcc8c ["INT_ADD", "register:40f0:8", ["const:bdcc8c:8", "const:4:8"]]
- 00bdcc8c ["CALL", null, ["callee:00c5aad0:8"]]
+ 00bdcd28 ["INT_ADD", "register:40f0:8", ["const:bdcd28:8", "const:4:8"]]
+ 00bdcd28 ["CALL", null, ["callee:00c5aad0:8"]]
- 00bdcc98 ["INT_ADD", "register:40f0:8", ["const:bdcc98:8", "const:4:8"]]
- 00bdcc98 ["CALL", null, ["callee:00c5af50:8"]]
+ 00bdcd34 ["INT_ADD", "register:40f0:8", ["const:bdcd34:8", "const:4:8"]]
+ 00bdcd34 ["CALL", null, ["callee:00c5af50:8"]]
- 00bdccb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdccb4 ["INT_ADD", "register:40f0:8", ["const:bdccb4:8", "const:4:8"]]
- 00bdccb4 ["CALLIND", null, ["register:0:8"]]
+ 00bdcd50 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdcd50 ["INT_ADD", "register:40f0:8", ["const:bdcd50:8", "const:4:8"]]
+ 00bdcd50 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-29b6a65d9746ffc5f163786ea4450db0"></a>

### [`00bdce18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdce18.md) → [`00bdceb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdceb4.md) _ZN8firebase4auth11tokenresult19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00bdce44",
      "incomplete_value": true,
      "site": "00bdce44",
      "value": [
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
    "old": {
      "definition_site": "00bdce2c",
      "incomplete_value": true,
      "site": "00bdce2c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdce38",
      "incomplete_value": false,
      "site": "00bdce3c",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdcec4",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdced4",
      "PARAM",
      [
        "storage",
        "002bc250",
        null,
        "string"
      ]
    ],
    [
      "00bdcee0",
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
      "00bdcec4",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdced4",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bdcee0",
      "WRITE",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdce3c ["INT_ADD", "register:40f0:8", ["const:bdce3c:8", "const:4:8"]]
- 00bdce3c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdced8 ["INT_ADD", "register:40f0:8", ["const:bdced8:8", "const:4:8"]]
+ 00bdced8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdce44 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bdce44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdcee0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
+ 00bdcee0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdce28 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bdce28 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdcec4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
+ 00bdcec4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-83a2956d009fb8cf18b6353b14df56f6"></a>

### [`00bdce58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdce58.md) → [`00bdcef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcef4.md) _ZN8firebase4auth11tokenresult19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00bdce84",
      "incomplete_value": true,
      "site": "00bdce84",
      "value": [
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
    "old": {
      "definition_site": "00bdce6c",
      "incomplete_value": true,
      "site": "00bdce6c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdce74",
      "incomplete_value": false,
      "site": "00bdce7c",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdcf04",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcf10",
      "PARAM",
      [
        "storage",
        "002bc250",
        null,
        "string"
      ]
    ],
    [
      "00bdcf20",
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
      "00bdcf04",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcf10",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bdcf20",
      "WRITE",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdce7c ["INT_ADD", "register:40f0:8", ["const:bdce7c:8", "const:4:8"]]
- 00bdce7c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdcf18 ["INT_ADD", "register:40f0:8", ["const:bdcf18:8", "const:4:8"]]
+ 00bdcf18 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdce84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bdce84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdcf20 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
+ 00bdcf20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdce68 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bdce68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdcf04 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
+ 00bdcf04 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f01284de1b3a552a15ba10f8cb4662db"></a>

### [`00bdce98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdce98.md) → [`00bdcf34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcf34.md) _ZN8firebase4auth11tokenresult10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bdcec8",
      "incomplete_value": true,
      "site": "00bdcec8",
      "value": [
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
    "old": {
      "definition_site": "00bdceac",
      "incomplete_value": true,
      "site": "00bdceac",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdceb8",
      "incomplete_value": false,
      "site": "00bdcec0",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdcf44",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcf54",
      "PARAM",
      [
        "storage",
        "002bc250",
        null,
        "string"
      ]
    ],
    [
      "00bdcf64",
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
      "00bdcf44",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcf54",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bdcf64",
      "WRITE",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdcec0 ["INT_ADD", "register:40f0:8", ["const:bdcec0:8", "const:4:8"]]
- 00bdcec0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdcf5c ["INT_ADD", "register:40f0:8", ["const:bdcf5c:8", "const:4:8"]]
+ 00bdcf5c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdcec8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bdcec8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdcf64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
+ 00bdcf64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdcea8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bdcea8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdcf44 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
+ 00bdcf44 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fb3cecf59e12d090715e03843e562b37"></a>

### [`00bdcedc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdcedc.md) → [`00bdcf78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcf78.md) _ZN8firebase4auth11tokenresult10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdcf0c",
      "incomplete_value": true,
      "site": "00bdcf0c",
      "value": [
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
    "old": {
      "definition_site": "00bdcef0",
      "incomplete_value": true,
      "site": "00bdcef0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdcef8",
      "incomplete_value": false,
      "site": "00bdcf04",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdcf88",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcf94",
      "PARAM",
      [
        "storage",
        "002bc250",
        null,
        "string"
      ]
    ],
    [
      "00bdcfa8",
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
      "00bdcf88",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdcf94",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bdcfa8",
      "WRITE",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdcf04 ["INT_ADD", "register:40f0:8", ["const:bdcf04:8", "const:4:8"]]
- 00bdcf04 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdcfa0 ["INT_ADD", "register:40f0:8", ["const:bdcfa0:8", "const:4:8"]]
+ 00bdcfa0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdcf0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bdcf0c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdcfa8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
+ 00bdcfa8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdceec ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d00:8"]]
- 00bdceec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdcf88 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
+ 00bdcf88 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-fe08098407ec6299e071fd17e4ec8427"></a>

### [`00bdcf2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdcf2c.md) → [`00bdcfc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdc/00bdcfc8.md) _ZN8firebase4auth11tokenresult15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bdcf84",
      "incomplete_value": true,
      "site": "00bdcf84",
      "value": [
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
    "old": {
      "definition_site": "00bdcf60",
      "incomplete_value": true,
      "site": "00bdcf6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bdcfdc",
      "READ",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdcffc",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd020",
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
      "00bdcfdc",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdcffc",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd020",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdcf6c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdcf6c ["INT_ADD", "register:40f0:8", ["const:bdcf6c:8", "const:4:8"]]
- 00bdcf6c ["CALLIND", null, ["register:0:8"]]
+ 00bdd008 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdd008 ["INT_ADD", "register:40f0:8", ["const:bdd008:8", "const:4:8"]]
+ 00bdd008 ["CALLIND", null, ["register:0:8"]]
- 00bdcf84 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bdcf84 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d08:8"]]
- 00bdcf84 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bdd020 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bdd020 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e08:8"]]
+ 00bdd020 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bdcf40 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d08:8"]]
- 00bdcf40 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bdcf40 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bdcfdc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e08:8"]]
+ 00bdcfdc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bdcfdc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-1ea7f8d327c78fc1f05c1e5cab87d9f7"></a>

### [`00bdcf98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdc/00bdcf98.md) → [`00bdd034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd034.md) _ZN8firebase4auth11tokenresult12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bdcfd4",
      "incomplete_value": true,
      "site": "00bdcfd4",
      "value": [
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
    "old": {
      "definition_site": "00bdcff4",
      "incomplete_value": true,
      "site": "00bdcff4",
      "value": [
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
    "old": {
      "definition_site": "00bdcfb0",
      "incomplete_value": true,
      "site": "00bdcfb0",
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
      "00bdd048",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd054",
      "READ",
      [
        "storage",
        "01126d08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd070",
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
      "00bdd048",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd054",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd070",
      "WRITE",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdcfd4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bdcfd4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bdcfd4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d08:8"]]
- 00bdcfd4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bdd070 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bdd070 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bdd070 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e08:8"]]
+ 00bdd070 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdcff0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdcff0 ["INT_ADD", "register:40f0:8", ["const:bdcff0:8", "const:4:8"]]
- 00bdcff0 ["CALLIND", null, ["register:0:8"]]
+ 00bdd08c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdd08c ["INT_ADD", "register:40f0:8", ["const:bdd08c:8", "const:4:8"]]
+ 00bdd08c ["CALLIND", null, ["register:0:8"]]
- 00bdcff4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00bdcff4 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdcff4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bdd090 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
+ 00bdd090 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bdd090 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-530e8d917eb76eac7f5d3544fa8410c9"></a>

### [`00bdd008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd008.md) → [`00bdd0a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd0a4.md) _ZN8firebase4auth11tokenresult14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdd048",
      "incomplete_value": true,
      "site": "00bdd048",
      "value": [
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
    "old": {
      "definition_site": "00bdd024",
      "incomplete_value": true,
      "site": "00bdd024",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd02c",
      "incomplete_value": false,
      "site": "00bdd040",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdd0b8",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd0c8",
      "PARAM",
      [
        "storage",
        "002bc250",
        null,
        "string"
      ]
    ],
    [
      "00bdd0e4",
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
      "00bdd0b8",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd0c8",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bdd0e4",
      "WRITE",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd040 ["INT_ADD", "register:40f0:8", ["const:bdd040:8", "const:4:8"]]
- 00bdd040 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd0dc ["INT_ADD", "register:40f0:8", ["const:bdd0dc:8", "const:4:8"]]
+ 00bdd0dc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd048 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00bdd048 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd0e4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
+ 00bdd0e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd01c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00bdd01c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd0b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
+ 00bdd0b8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e1e2711ef60775b780c82e9f75aeff92"></a>

### [`00bdd078`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd078.md) → [`00bdd114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd114.md) _ZN8firebase4auth11tokenresult11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bdd094",
      "incomplete_value": false,
      "site": "00bdd098",
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
    "old": {
      "definition_site": "00bdd0a4",
      "incomplete_value": true,
      "site": "00bdd0b0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bdd130",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bdd140",
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
      "00bdd130",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bdd140",
      "DATA",
      [
        "storage",
        "01126e10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd098 ["INT_ADD", "register:40f0:8", ["const:bdd098:8", "const:4:8"]]
- 00bdd098 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdd134 ["INT_ADD", "register:40f0:8", ["const:bdd134:8", "const:4:8"]]
+ 00bdd134 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdd094 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bdd094 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd094 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd094 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdd130 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bdd130 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd130 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd130 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd0a0 ["COPY", "tmp:0:8", ["const:d10:8"]]
- 00bdd0a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd0a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd0a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bdd13c ["COPY", "tmp:0:8", ["const:e10:8"]]
+ 00bdd13c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd13c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd13c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-adb1f1931caf6b397e8606a94479be6e"></a>

### [`00bdd0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd0b4.md) → [`00bdd150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd150.md) _ZN8firebase4auth11tokenresult13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdd0f4",
      "incomplete_value": true,
      "site": "00bdd0f4",
      "value": [
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
    "old": {
      "definition_site": "00bdd0d0",
      "incomplete_value": true,
      "site": "00bdd0d0",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd0d8",
      "incomplete_value": false,
      "site": "00bdd0ec",
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
            "const:250:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdd164",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd174",
      "PARAM",
      [
        "storage",
        "002bc250",
        null,
        "string"
      ]
    ],
    [
      "00bdd190",
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
      "00bdd164",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd174",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bdd190",
      "WRITE",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd0ec ["INT_ADD", "register:40f0:8", ["const:bdd0ec:8", "const:4:8"]]
- 00bdd0ec ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd188 ["INT_ADD", "register:40f0:8", ["const:bdd188:8", "const:4:8"]]
+ 00bdd188 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd0f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00bdd0f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd190 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
+ 00bdd190 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd0c8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d00:8"]]
- 00bdd0c8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd164 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
+ 00bdd164 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b33c86ee6502b81cf10215d28fc213d4"></a>

### [`00bdd124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd124.md) → [`00bdd1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd1c0.md) _ZN8firebase4auth11tokenresult10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bdd140",
      "incomplete_value": false,
      "site": "00bdd144",
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
    "old": {
      "definition_site": "00bdd150",
      "incomplete_value": true,
      "site": "00bdd15c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bdd1dc",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bdd1ec",
      "DATA",
      [
        "storage",
        "01126d18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bdd1dc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bdd1ec",
      "DATA",
      [
        "storage",
        "01126e18",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd144 ["INT_ADD", "register:40f0:8", ["const:bdd144:8", "const:4:8"]]
- 00bdd144 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdd1e0 ["INT_ADD", "register:40f0:8", ["const:bdd1e0:8", "const:4:8"]]
+ 00bdd1e0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdd140 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bdd140 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd140 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd140 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdd1dc ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bdd1dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd1dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd1dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd14c ["COPY", "tmp:0:8", ["const:d18:8"]]
- 00bdd14c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd14c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd14c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bdd1e8 ["COPY", "tmp:0:8", ["const:e18:8"]]
+ 00bdd1e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd1e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd1e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1388b6d98916ba729bb2fab0effd1024"></a>

### [`00bdd160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd160.md) → [`00bdd1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd1fc.md) _ZN8firebase4auth4user19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4util

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
    "old": {
      "definition_site": "00bdd18c",
      "incomplete_value": true,
      "site": "00bdd18c",
      "value": [
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
    "old": {
      "definition_site": "00bdd174",
      "incomplete_value": true,
      "site": "00bdd174",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd180",
      "incomplete_value": false,
      "site": "00bdd184",
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
      "00bdd20c",
      "READ",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd21c",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bdd228",
      "WRITE",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdd20c",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd21c",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bdd228",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd184 ["INT_ADD", "register:40f0:8", ["const:bdd184:8", "const:4:8"]]
- 00bdd184 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd220 ["INT_ADD", "register:40f0:8", ["const:bdd220:8", "const:4:8"]]
+ 00bdd220 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd18c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00bdd18c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd228 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00bdd228 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd170 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00bdd170 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd20c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00bdd20c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d4a95c566d611156c829ac1d2a365a00"></a>

### [`00bdd1a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd1a0.md) → [`00bdd23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd23c.md) _ZN8firebase4auth4user19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00bdd1cc",
      "incomplete_value": true,
      "site": "00bdd1cc",
      "value": [
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
    "old": {
      "definition_site": "00bdd1b4",
      "incomplete_value": true,
      "site": "00bdd1b4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd1bc",
      "incomplete_value": false,
      "site": "00bdd1c4",
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
      "00bdd24c",
      "READ",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd258",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bdd268",
      "WRITE",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdd24c",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd258",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bdd268",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd1c4 ["INT_ADD", "register:40f0:8", ["const:bdd1c4:8", "const:4:8"]]
- 00bdd1c4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd260 ["INT_ADD", "register:40f0:8", ["const:bdd260:8", "const:4:8"]]
+ 00bdd260 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd1cc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00bdd1cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd268 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00bdd268 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd1b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00bdd1b0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd24c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00bdd24c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f8b9f741290d789797461faea7f783c3"></a>

### [`00bdd1e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd1e0.md) → [`00bdd27c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd27c.md) _ZN8firebase4auth4user10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bdd210",
      "incomplete_value": true,
      "site": "00bdd210",
      "value": [
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
    "old": {
      "definition_site": "00bdd1f4",
      "incomplete_value": true,
      "site": "00bdd1f4",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd200",
      "incomplete_value": false,
      "site": "00bdd208",
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
      "00bdd28c",
      "READ",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd29c",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bdd2ac",
      "WRITE",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdd28c",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd29c",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bdd2ac",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd208 ["INT_ADD", "register:40f0:8", ["const:bdd208:8", "const:4:8"]]
- 00bdd208 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd2a4 ["INT_ADD", "register:40f0:8", ["const:bdd2a4:8", "const:4:8"]]
+ 00bdd2a4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd210 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00bdd210 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd2ac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00bdd2ac ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd1f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00bdd1f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd28c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00bdd28c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-20a0c3a75e56f0692a305bce536ff440"></a>

### [`00bdd224`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd224.md) → [`00bdd2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd2c0.md) _ZN8firebase4auth4user10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdd254",
      "incomplete_value": true,
      "site": "00bdd254",
      "value": [
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
    "old": {
      "definition_site": "00bdd238",
      "incomplete_value": true,
      "site": "00bdd238",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd240",
      "incomplete_value": false,
      "site": "00bdd24c",
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
      "00bdd2d0",
      "READ",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd2dc",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bdd2f0",
      "WRITE",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdd2d0",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd2dc",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bdd2f0",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd24c ["INT_ADD", "register:40f0:8", ["const:bdd24c:8", "const:4:8"]]
- 00bdd24c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd2e8 ["INT_ADD", "register:40f0:8", ["const:bdd2e8:8", "const:4:8"]]
+ 00bdd2e8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd254 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00bdd254 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd2f0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00bdd2f0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd234 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:d20:8"]]
- 00bdd234 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd2d0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e20:8"]]
+ 00bdd2d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-06e603a9f8ce4687d5191bbbe1e94818"></a>

### [`00bdd274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd274.md) → [`00bdd310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd310.md) _ZN8firebase4auth4user15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bdd2cc",
      "incomplete_value": true,
      "site": "00bdd2cc",
      "value": [
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
    "old": {
      "definition_site": "00bdd2a8",
      "incomplete_value": true,
      "site": "00bdd2b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bdd324",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd344",
      "READ",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd368",
      "WRITE",
      [
        "storage",
        "01126d28",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bdd324",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd344",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd368",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd2b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd2b4 ["INT_ADD", "register:40f0:8", ["const:bdd2b4:8", "const:4:8"]]
- 00bdd2b4 ["CALLIND", null, ["register:0:8"]]
+ 00bdd350 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdd350 ["INT_ADD", "register:40f0:8", ["const:bdd350:8", "const:4:8"]]
+ 00bdd350 ["CALLIND", null, ["register:0:8"]]
- 00bdd2cc ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bdd2cc ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:d28:8"]]
- 00bdd2cc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bdd368 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bdd368 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e28:8"]]
+ 00bdd368 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bdd288 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d28:8"]]
- 00bdd288 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bdd288 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bdd324 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e28:8"]]
+ 00bdd324 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd324 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-513dd41f84d635477eed4ce54d9d1974"></a>

### [`00bdd2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd2e0.md) → [`00bdd37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd37c.md) _ZN8firebase4auth4user12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bdd31c",
      "incomplete_value": true,
      "site": "00bdd31c",
      "value": [
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
    "old": {
      "definition_site": "00bdd33c",
      "incomplete_value": true,
      "site": "00bdd33c",
      "value": [
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
    "old": {
      "definition_site": "00bdd2f8",
      "incomplete_value": true,
      "site": "00bdd2f8",
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
      "00bdd390",
      "READ",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd39c",
      "READ",
      [
        "storage",
        "01126d28",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd3b8",
      "WRITE",
      [
        "storage",
        "01126d28",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bdd390",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd39c",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd3b8",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd31c ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bdd31c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bdd31c ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:d28:8"]]
- 00bdd31c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bdd3b8 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bdd3b8 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bdd3b8 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e28:8"]]
+ 00bdd3b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdd338 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd338 ["INT_ADD", "register:40f0:8", ["const:bdd338:8", "const:4:8"]]
- 00bdd338 ["CALLIND", null, ["register:0:8"]]
+ 00bdd3d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdd3d4 ["INT_ADD", "register:40f0:8", ["const:bdd3d4:8", "const:4:8"]]
+ 00bdd3d4 ["CALLIND", null, ["register:0:8"]]
- 00bdd33c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00bdd33c ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdd33c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bdd3d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00bdd3d8 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bdd3d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-6996b1dbf4306fb51a8065f9234e638c"></a>

### [`00bdd350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd350.md) → [`00bdd3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd3ec.md) _ZN8firebase4auth4user14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdd390",
      "incomplete_value": true,
      "site": "00bdd390",
      "value": [
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
    "old": {
      "definition_site": "00bdd36c",
      "incomplete_value": true,
      "site": "00bdd36c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd374",
      "incomplete_value": false,
      "site": "00bdd388",
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
      "00bdd400",
      "READ",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd410",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bdd42c",
      "WRITE",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdd400",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd410",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bdd42c",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd388 ["INT_ADD", "register:40f0:8", ["const:bdd388:8", "const:4:8"]]
- 00bdd388 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd424 ["INT_ADD", "register:40f0:8", ["const:bdd424:8", "const:4:8"]]
+ 00bdd424 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd390 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00bdd390 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd42c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00bdd42c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd364 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00bdd364 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd400 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00bdd400 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ebe462e363407744a56c8053e6794a39"></a>

### [`00bdd3c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd3c0.md) → [`00bdd45c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd45c.md) _ZN8firebase4auth4user11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bdd3dc",
      "incomplete_value": false,
      "site": "00bdd3e0",
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
    "old": {
      "definition_site": "00bdd3ec",
      "incomplete_value": true,
      "site": "00bdd3f8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bdd478",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bdd488",
      "DATA",
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
      "00bdd478",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bdd488",
      "DATA",
      [
        "storage",
        "01126e30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd3e0 ["INT_ADD", "register:40f0:8", ["const:bdd3e0:8", "const:4:8"]]
- 00bdd3e0 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdd47c ["INT_ADD", "register:40f0:8", ["const:bdd47c:8", "const:4:8"]]
+ 00bdd47c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdd3dc ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bdd3dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd3dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd3dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdd478 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bdd478 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd478 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd478 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd3e8 ["COPY", "tmp:0:8", ["const:d30:8"]]
- 00bdd3e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd3e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd3e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bdd484 ["COPY", "tmp:0:8", ["const:e30:8"]]
+ 00bdd484 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd484 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd484 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-baa4a51b5d15b350d2d39f7c95d5ae39"></a>

### [`00bdd3fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd3fc.md) → [`00bdd498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd498.md) _ZN8firebase4auth4user13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdd43c",
      "incomplete_value": true,
      "site": "00bdd43c",
      "value": [
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
    "old": {
      "definition_site": "00bdd418",
      "incomplete_value": true,
      "site": "00bdd418",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd420",
      "incomplete_value": false,
      "site": "00bdd434",
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
      "00bdd4ac",
      "READ",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd4bc",
      "PARAM",
      [
        "storage",
        "002a9887",
        null,
        "string"
      ]
    ],
    [
      "00bdd4d8",
      "WRITE",
      [
        "storage",
        "01126d20",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdd4ac",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd4bc",
      "PARAM",
      [
        "storage",
        "002a98b6",
        null,
        "string"
      ]
    ],
    [
      "00bdd4d8",
      "WRITE",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd434 ["INT_ADD", "register:40f0:8", ["const:bdd434:8", "const:4:8"]]
- 00bdd434 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd4d0 ["INT_ADD", "register:40f0:8", ["const:bdd4d0:8", "const:4:8"]]
+ 00bdd4d0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd43c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00bdd43c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd4d8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00bdd4d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd410 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:d20:8"]]
- 00bdd410 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd4ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e20:8"]]
+ 00bdd4ac ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d095b308feb99519c551cbb85d72dab6"></a>

### [`00bdd46c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd46c.md) → [`00bdd508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd508.md) _ZN8firebase4auth4user10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bdd488",
      "incomplete_value": false,
      "site": "00bdd48c",
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
    "old": {
      "definition_site": "00bdd498",
      "incomplete_value": true,
      "site": "00bdd4a4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bdd524",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bdd534",
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
      "00bdd524",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bdd534",
      "DATA",
      [
        "storage",
        "01126ea8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd48c ["INT_ADD", "register:40f0:8", ["const:bdd48c:8", "const:4:8"]]
- 00bdd48c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdd528 ["INT_ADD", "register:40f0:8", ["const:bdd528:8", "const:4:8"]]
+ 00bdd528 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdd488 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bdd488 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd488 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd488 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdd524 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bdd524 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd524 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd524 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd494 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00bdd494 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd494 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd494 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bdd530 ["COPY", "tmp:0:8", ["const:ea8:8"]]
+ 00bdd530 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd530 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd530 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bc706d2bcb4e3997c4c2e8c2917a135a"></a>

### [`00bdd4a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd4a8.md) → [`00bdd544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd544.md) _ZN8firebase4auth8userinfo19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
    "old": {
      "definition_site": "00bdd4d4",
      "incomplete_value": true,
      "site": "00bdd4d4",
      "value": [
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
    "old": {
      "definition_site": "00bdd4bc",
      "incomplete_value": true,
      "site": "00bdd4bc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd4c8",
      "incomplete_value": false,
      "site": "00bdd4cc",
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
            "const:77c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdd554",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd564",
      "PARAM",
      [
        "storage",
        "002b177c",
        null,
        "string"
      ]
    ],
    [
      "00bdd570",
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
      "00bdd554",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd564",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bdd570",
      "WRITE",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd4cc ["INT_ADD", "register:40f0:8", ["const:bdd4cc:8", "const:4:8"]]
- 00bdd4cc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd568 ["INT_ADD", "register:40f0:8", ["const:bdd568:8", "const:4:8"]]
+ 00bdd568 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd4d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bdd4d4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd570 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
+ 00bdd570 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd4b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bdd4b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd554 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
+ 00bdd554 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-dec2964f4ce2105565e7e7b91d396783"></a>

### [`00bdd4e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd4e8.md) → [`00bdd584`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd584.md) _ZN8firebase4auth8userinfo19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00bdd514",
      "incomplete_value": true,
      "site": "00bdd514",
      "value": [
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
    "old": {
      "definition_site": "00bdd4fc",
      "incomplete_value": true,
      "site": "00bdd4fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd504",
      "incomplete_value": false,
      "site": "00bdd50c",
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
            "const:77c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdd594",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd5a0",
      "PARAM",
      [
        "storage",
        "002b177c",
        null,
        "string"
      ]
    ],
    [
      "00bdd5b0",
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
      "00bdd594",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd5a0",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bdd5b0",
      "WRITE",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd50c ["INT_ADD", "register:40f0:8", ["const:bdd50c:8", "const:4:8"]]
- 00bdd50c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd5a8 ["INT_ADD", "register:40f0:8", ["const:bdd5a8:8", "const:4:8"]]
+ 00bdd5a8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd514 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bdd514 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd5b0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
+ 00bdd5b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd4f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bdd4f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd594 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
+ 00bdd594 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-49331670b367d3e9b9cd1620e68802b9"></a>

### [`00bdd528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd528.md) → [`00bdd5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd5c4.md) _ZN8firebase4auth8userinfo10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bdd558",
      "incomplete_value": true,
      "site": "00bdd558",
      "value": [
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
    "old": {
      "definition_site": "00bdd53c",
      "incomplete_value": true,
      "site": "00bdd53c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd548",
      "incomplete_value": false,
      "site": "00bdd550",
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
            "const:77c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdd5d4",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd5e4",
      "PARAM",
      [
        "storage",
        "002b177c",
        null,
        "string"
      ]
    ],
    [
      "00bdd5f4",
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
      "00bdd5d4",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd5e4",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bdd5f4",
      "WRITE",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd550 ["INT_ADD", "register:40f0:8", ["const:bdd550:8", "const:4:8"]]
- 00bdd550 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd5ec ["INT_ADD", "register:40f0:8", ["const:bdd5ec:8", "const:4:8"]]
+ 00bdd5ec ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd558 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bdd558 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd5f4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
+ 00bdd5f4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd538 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bdd538 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd5d4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
+ 00bdd5d4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-a099d336887e1fb44c3f583a5118eb4f"></a>

### [`00bdd56c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd56c.md) → [`00bdd608`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd608.md) _ZN8firebase4auth8userinfo10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdd59c",
      "incomplete_value": true,
      "site": "00bdd59c",
      "value": [
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
    "old": {
      "definition_site": "00bdd580",
      "incomplete_value": true,
      "site": "00bdd580",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd588",
      "incomplete_value": false,
      "site": "00bdd594",
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
            "const:77c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdd618",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd624",
      "PARAM",
      [
        "storage",
        "002b177c",
        null,
        "string"
      ]
    ],
    [
      "00bdd638",
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
      "00bdd618",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd624",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bdd638",
      "WRITE",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd594 ["INT_ADD", "register:40f0:8", ["const:bdd594:8", "const:4:8"]]
- 00bdd594 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd630 ["INT_ADD", "register:40f0:8", ["const:bdd630:8", "const:4:8"]]
+ 00bdd630 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd59c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bdd59c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd638 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
+ 00bdd638 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd57c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:db0:8"]]
- 00bdd57c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd618 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:eb0:8"]]
+ 00bdd618 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4b2a95165d01c7d2db492924615d88a5"></a>

### [`00bdd5bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd5bc.md) → [`00bdd658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd658.md) _ZN8firebase4auth8userinfo15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bdd614",
      "incomplete_value": true,
      "site": "00bdd614",
      "value": [
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
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd5f0",
      "incomplete_value": true,
      "site": "00bdd5fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bdd66c",
      "READ",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd68c",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd6b0",
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
      "00bdd66c",
      "READ",
      [
        "storage",
        "01126eb8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd68c",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd6b0",
      "WRITE",
      [
        "storage",
        "01126eb8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd5fc ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd5fc ["INT_ADD", "register:40f0:8", ["const:bdd5fc:8", "const:4:8"]]
- 00bdd5fc ["CALLIND", null, ["register:0:8"]]
+ 00bdd698 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdd698 ["INT_ADD", "register:40f0:8", ["const:bdd698:8", "const:4:8"]]
+ 00bdd698 ["CALLIND", null, ["register:0:8"]]
- 00bdd614 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bdd614 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:db8:8"]]
- 00bdd614 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bdd6b0 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bdd6b0 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:eb8:8"]]
+ 00bdd6b0 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bdd5d0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:db8:8"]]
- 00bdd5d0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bdd5d0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bdd66c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:eb8:8"]]
+ 00bdd66c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd66c ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-9e95de907c061c2e19d4546befd96bdc"></a>

### [`00bdd628`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd628.md) → [`00bdd6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd6c4.md) _ZN8firebase4auth8userinfo12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bdd664",
      "incomplete_value": true,
      "site": "00bdd664",
      "value": [
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
    "old": {
      "definition_site": "00bdd684",
      "incomplete_value": true,
      "site": "00bdd684",
      "value": [
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
    "old": {
      "definition_site": "00bdd640",
      "incomplete_value": true,
      "site": "00bdd640",
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
      "00bdd6d8",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd6e4",
      "READ",
      [
        "storage",
        "01126db8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd700",
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
      "00bdd6d8",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd6e4",
      "READ",
      [
        "storage",
        "01126eb8",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd700",
      "WRITE",
      [
        "storage",
        "01126eb8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd664 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bdd664 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bdd664 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:db8:8"]]
- 00bdd664 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bdd700 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bdd700 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bdd700 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:eb8:8"]]
+ 00bdd700 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdd680 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd680 ["INT_ADD", "register:40f0:8", ["const:bdd680:8", "const:4:8"]]
- 00bdd680 ["CALLIND", null, ["register:0:8"]]
+ 00bdd71c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdd71c ["INT_ADD", "register:40f0:8", ["const:bdd71c:8", "const:4:8"]]
+ 00bdd71c ["CALLIND", null, ["register:0:8"]]
- 00bdd684 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
- 00bdd684 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdd684 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bdd720 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:eb0:8"]]
+ 00bdd720 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bdd720 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-0b3b0c5a64bf51f8c952244082154faf"></a>

### [`00bdd698`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd698.md) → [`00bdd734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd734.md) _ZN8firebase4auth8userinfo14CacheMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdd6c0",
      "incomplete_value": true,
      "site": "00bdd6d0",
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
      "definition_site": "00bdd6bc",
      "incomplete_value": false,
      "site": "00bdd6d0",
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
            "const:77c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bdd6ac",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bdd6b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdd778"
      ]
    ],
    [
      "unmatched:00bdd6bc",
      "PARAM",
      [
        "storage",
        "002b177c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdd748",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd750",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdd778"
      ]
    ],
    [
      "00bdd758",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd6d0 ["INT_ADD", "register:40f0:8", ["const:bdd6d0:8", "const:4:8"]]
- 00bdd6d0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd76c ["INT_ADD", "register:40f0:8", ["const:bdd76c:8", "const:4:8"]]
+ 00bdd76c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd6ac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
- 00bdd6ac ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bdd6b0 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-8bc02fe56f603ddcc378266d1ce08df8"></a>

### [`00bdd708`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd708.md) → [`00bdd7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd7a4.md) _ZN8firebase4auth8userinfo11GetMethodIdENS1_6MethodE

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
      "00bdd7b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bdd72c"
      ]
    ],
    [
      "unmatched:00bdd724",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00bdd728",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c5b0d0"
      ]
    ]
  ],
  "added": [
    [
      "00bdd7b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdd7c8"
      ]
    ],
    [
      "00bdd7c0",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bdd7c4",
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
- 00bdd724 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bdd724 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd724 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd724 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd728 ["INT_ADD", "register:40f0:8", ["const:bdd728:8", "const:4:8"]]
- 00bdd728 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdd72c ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-9dc8d9927f6717c59d068ee910ad9c82"></a>

### [`00bdd744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd744.md) → [`00bdd7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd7e0.md) _ZN8firebase4auth8userinfo13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdd784",
      "incomplete_value": true,
      "site": "00bdd784",
      "value": [
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
    "old": {
      "definition_site": "00bdd760",
      "incomplete_value": true,
      "site": "00bdd760",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd768",
      "incomplete_value": false,
      "site": "00bdd77c",
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
            "const:77c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdd7f4",
      "READ",
      [
        "storage",
        "01126db0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd804",
      "PARAM",
      [
        "storage",
        "002b177c",
        null,
        "string"
      ]
    ],
    [
      "00bdd820",
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
      "00bdd7f4",
      "READ",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd804",
      "PARAM",
      [
        "storage",
        "002b1720",
        null,
        "string"
      ]
    ],
    [
      "00bdd820",
      "WRITE",
      [
        "storage",
        "01126eb0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd77c ["INT_ADD", "register:40f0:8", ["const:bdd77c:8", "const:4:8"]]
- 00bdd77c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd818 ["INT_ADD", "register:40f0:8", ["const:bdd818:8", "const:4:8"]]
+ 00bdd818 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd784 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
- 00bdd784 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd820 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:eb0:8"]]
+ 00bdd820 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd758 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:db0:8"]]
- 00bdd758 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd7f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:eb0:8"]]
+ 00bdd7f4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-401100fa8a950fbdef2a7646373567f5"></a>

### [`00bdd7b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd7b4.md) → [`00bdd850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd850.md) _ZN8firebase4auth8userinfo10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bdd7d0",
      "incomplete_value": false,
      "site": "00bdd7d4",
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
    "old": {
      "definition_site": "00bdd7e0",
      "incomplete_value": true,
      "site": "00bdd7ec",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bdd86c",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bdd87c",
      "DATA",
      [
        "storage",
        "01126df8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bdd86c",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bdd87c",
      "DATA",
      [
        "storage",
        "01126ef8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd7d4 ["INT_ADD", "register:40f0:8", ["const:bdd7d4:8", "const:4:8"]]
- 00bdd7d4 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdd870 ["INT_ADD", "register:40f0:8", ["const:bdd870:8", "const:4:8"]]
+ 00bdd870 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdd7d0 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bdd7d0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd7d0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdd7d0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdd86c ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bdd86c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd86c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdd86c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdd7dc ["COPY", "tmp:0:8", ["const:df8:8"]]
- 00bdd7dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd7dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdd7dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bdd878 ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 00bdd878 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd878 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdd878 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2dc3b0a8e492fc0aa303c8aca31acc22"></a>

### [`00bdd7f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd7f0.md) → [`00bdd88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd88c.md) _ZN8firebase4auth8metadata19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEENS_4

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
    "old": {
      "definition_site": "00bdd81c",
      "incomplete_value": true,
      "site": "00bdd81c",
      "value": [
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
    "old": {
      "definition_site": "00bdd804",
      "incomplete_value": true,
      "site": "00bdd804",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd810",
      "incomplete_value": false,
      "site": "00bdd814",
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
      "00bdd89c",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd8ac",
      "PARAM",
      [
        "storage",
        "002be9ad",
        null,
        "string"
      ]
    ],
    [
      "00bdd8b8",
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
      "00bdd89c",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd8ac",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bdd8b8",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd814 ["INT_ADD", "register:40f0:8", ["const:bdd814:8", "const:4:8"]]
- 00bdd814 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd8b0 ["INT_ADD", "register:40f0:8", ["const:bdd8b0:8", "const:4:8"]]
+ 00bdd8b0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd81c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdd81c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd8b8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
+ 00bdd8b8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd800 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdd800 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd89c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
+ 00bdd89c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4f65db2d0b169dd24b159943ab6ec341"></a>

### [`00bdd830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd830.md) → [`00bdd8cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd8cc.md) _ZN8firebase4auth8metadata19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorIS9_EEEE

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
    "old": {
      "definition_site": "00bdd85c",
      "incomplete_value": true,
      "site": "00bdd85c",
      "value": [
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
    "old": {
      "definition_site": "00bdd844",
      "incomplete_value": true,
      "site": "00bdd844",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd84c",
      "incomplete_value": false,
      "site": "00bdd854",
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
      "00bdd8dc",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd8e8",
      "PARAM",
      [
        "storage",
        "002be9ad",
        null,
        "string"
      ]
    ],
    [
      "00bdd8f8",
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
      "00bdd8dc",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd8e8",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bdd8f8",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd854 ["INT_ADD", "register:40f0:8", ["const:bdd854:8", "const:4:8"]]
- 00bdd854 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd8f0 ["INT_ADD", "register:40f0:8", ["const:bdd8f0:8", "const:4:8"]]
+ 00bdd8f0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd85c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdd85c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd8f8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
+ 00bdd8f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd840 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdd840 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd8dc ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
+ 00bdd8dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-bbe78069cd7c08f1df8b92e5d69d87f8"></a>

### [`00bdd870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd870.md) → [`00bdd90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd90c.md) _ZN8firebase4auth8metadata10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bdd8a0",
      "incomplete_value": true,
      "site": "00bdd8a0",
      "value": [
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
    "old": {
      "definition_site": "00bdd884",
      "incomplete_value": true,
      "site": "00bdd884",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd890",
      "incomplete_value": false,
      "site": "00bdd898",
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
      "00bdd91c",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd92c",
      "PARAM",
      [
        "storage",
        "002be9ad",
        null,
        "string"
      ]
    ],
    [
      "00bdd93c",
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
      "00bdd91c",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd92c",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bdd93c",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd898 ["INT_ADD", "register:40f0:8", ["const:bdd898:8", "const:4:8"]]
- 00bdd898 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd934 ["INT_ADD", "register:40f0:8", ["const:bdd934:8", "const:4:8"]]
+ 00bdd934 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd8a0 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdd8a0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdd93c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
+ 00bdd93c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd880 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdd880 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd91c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
+ 00bdd91c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-41b9f0ec0739f276616ec459234d14c8"></a>

### [`00bdd8b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd8b4.md) → [`00bdd950`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd950.md) _ZN8firebase4auth8metadata10CacheClassEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 64.71% / 新版 64.71%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bdd8c8",
      "incomplete_value": true,
      "site": "00bdd8c8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdd8d0",
      "incomplete_value": false,
      "site": "00bdd8dc",
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
      "00bdd960",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd964",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bdd8e8"
      ]
    ],
    [
      "unmatched:00bdd8d0",
      "PARAM",
      [
        "storage",
        "002be9ad",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdd960",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdd964",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdd984"
      ]
    ],
    [
      "00bdd96c",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd8dc ["INT_ADD", "register:40f0:8", ["const:bdd8dc:8", "const:4:8"]]
- 00bdd8dc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdd978 ["INT_ADD", "register:40f0:8", ["const:bdd978:8", "const:4:8"]]
+ 00bdd978 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdd8c4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e00:8"]]
- 00bdd8c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd960 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f00:8"]]
+ 00bdd960 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00bdd8d0 ["COPY", "tmp:0:8", ["const:9ad:8"]]
- 00bdd8d0 ["INT_CARRY", "register:105:1", ["register:4018:8", "tmp:0:8"]]
- 00bdd8d0 ["INT_SCARRY", "register:106:1", ["register:4018:8", "tmp:0:8"]]
- 00bdd8d0 ["INT_ADD", "tmp:1:8", ["register:4018:8", "tmp:0:8"]]
~~~


<a id="compare-065683a33e6f8508ce76a79ab7b47433"></a>

### [`00bdd904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd904.md) → [`00bdd9a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdd9a0.md) _ZN8firebase4auth8metadata15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdd9b4",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd9c0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bdd960"
      ]
    ],
    [
      "unmatched:00bdd938",
      "READ",
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
      "00bdd9b4",
      "READ",
      [
        "storage",
        "01126f08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdd9c0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00bdd9fc"
      ]
    ],
    [
      "00bdd9d4",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd918 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e08:8"]]
- 00bdd918 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bdd918 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bdd9b4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:f08:8"]]
+ 00bdd9b4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bdd9b4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00bdd91c ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00bdd91c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bdd9b8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00bdd9b8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00bdd924 ["BRANCH", null, ["local:b4:8"]]
+ 00bdd9c0 ["BRANCH", null, ["local:b5:8"]]
~~~


<a id="compare-e1d060a322373a114240506ea8ab0f75"></a>

### [`00bdd970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd970.md) → [`00bdda0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdda0c.md) _ZN8firebase4auth8metadata12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bdd9ac",
      "incomplete_value": true,
      "site": "00bdd9ac",
      "value": [
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
    "old": {
      "definition_site": "00bdd9cc",
      "incomplete_value": true,
      "site": "00bdd9cc",
      "value": [
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
    "old": {
      "definition_site": "00bdd988",
      "incomplete_value": true,
      "site": "00bdd988",
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
      "00bdda20",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdda2c",
      "READ",
      [
        "storage",
        "01126e08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdda48",
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
      "00bdda20",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdda2c",
      "READ",
      [
        "storage",
        "01126f08",
        null,
        "undefined1"
      ]
    ],
    [
      "00bdda48",
      "WRITE",
      [
        "storage",
        "01126f08",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdd9ac ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bdd9ac ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bdd9ac ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e08:8"]]
- 00bdd9ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bdda48 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bdda48 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bdda48 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:f08:8"]]
+ 00bdda48 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bdd9c8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bdd9c8 ["INT_ADD", "register:40f0:8", ["const:bdd9c8:8", "const:4:8"]]
- 00bdd9c8 ["CALLIND", null, ["register:0:8"]]
+ 00bdda64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdda64 ["INT_ADD", "register:40f0:8", ["const:bdda64:8", "const:4:8"]]
+ 00bdda64 ["CALLIND", null, ["register:0:8"]]
- 00bdd9cc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bdd9cc ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bdd9cc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bdda68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f00:8"]]
+ 00bdda68 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bdda68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-feb49f3f76328d55cbfedb6b3eb78678"></a>

### [`00bdd9e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdd9e0.md) → [`00bdda7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdda7c.md) _ZN8firebase4auth8metadata14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bdda20",
      "incomplete_value": true,
      "site": "00bdda20",
      "value": [
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
    "old": {
      "definition_site": "00bdd9fc",
      "incomplete_value": true,
      "site": "00bdd9fc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdda04",
      "incomplete_value": false,
      "site": "00bdda18",
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
      "00bdda90",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddaa0",
      "PARAM",
      [
        "storage",
        "002be9ad",
        null,
        "string"
      ]
    ],
    [
      "00bddabc",
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
      "00bdda90",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddaa0",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bddabc",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdda18 ["INT_ADD", "register:40f0:8", ["const:bdda18:8", "const:4:8"]]
- 00bdda18 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bddab4 ["INT_ADD", "register:40f0:8", ["const:bddab4:8", "const:4:8"]]
+ 00bddab4 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bdda20 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bdda20 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddabc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f00:8"]]
+ 00bddabc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdd9f4 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bdd9f4 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdda90 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f00:8"]]
+ 00bdda90 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-758c1b970145903a7ff4451fcbc66c51"></a>

### [`00bdda50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdda50.md) → [`00bddaec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddaec.md) _ZN8firebase4auth8metadata11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bdda6c",
      "incomplete_value": false,
      "site": "00bdda70",
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
    "old": {
      "definition_site": "00bdda7c",
      "incomplete_value": true,
      "site": "00bdda88",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bddb08",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bddb18",
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
      "00bddb08",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bddb18",
      "DATA",
      [
        "storage",
        "01126f10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdda70 ["INT_ADD", "register:40f0:8", ["const:bdda70:8", "const:4:8"]]
- 00bdda70 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bddb0c ["INT_ADD", "register:40f0:8", ["const:bddb0c:8", "const:4:8"]]
+ 00bddb0c ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdda6c ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bdda6c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdda6c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdda6c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bddb08 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bddb08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bddb08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bddb08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdda78 ["COPY", "tmp:0:8", ["const:e10:8"]]
- 00bdda78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdda78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdda78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bddb14 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 00bddb14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bddb14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bddb14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8e335176b1900d5ebce627e6159b5dde"></a>

### [`00bdda8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdda8c.md) → [`00bddb28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddb28.md) _ZN8firebase4auth8metadata13CacheFieldIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bddacc",
      "incomplete_value": true,
      "site": "00bddacc",
      "value": [
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
    "old": {
      "definition_site": "00bddaa8",
      "incomplete_value": true,
      "site": "00bddaa8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bddab0",
      "incomplete_value": false,
      "site": "00bddac4",
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
      "00bddb3c",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddb4c",
      "PARAM",
      [
        "storage",
        "002be9ad",
        null,
        "string"
      ]
    ],
    [
      "00bddb68",
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
      "00bddb3c",
      "READ",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddb4c",
      "PARAM",
      [
        "storage",
        "002be959",
        null,
        "string"
      ]
    ],
    [
      "00bddb68",
      "WRITE",
      [
        "storage",
        "01126f00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddac4 ["INT_ADD", "register:40f0:8", ["const:bddac4:8", "const:4:8"]]
- 00bddac4 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bddb60 ["INT_ADD", "register:40f0:8", ["const:bddb60:8", "const:4:8"]]
+ 00bddb60 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bddacc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bddacc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddb68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f00:8"]]
+ 00bddb68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddaa0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e00:8"]]
- 00bddaa0 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bddb3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f00:8"]]
+ 00bddb3c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-753c3bc6f36404acd22f5f3eae8907e3"></a>

### [`00bddafc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddafc.md) → [`00bddb98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddb98.md) _ZN8firebase4auth8metadata10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bddb18",
      "incomplete_value": false,
      "site": "00bddb1c",
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
    "old": {
      "definition_site": "00bddb28",
      "incomplete_value": true,
      "site": "00bddb34",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bddbb4",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bddbc4",
      "DATA",
      [
        "storage",
        "01126e20",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bddbb4",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bddbc4",
      "DATA",
      [
        "storage",
        "01126f20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddb1c ["INT_ADD", "register:40f0:8", ["const:bddb1c:8", "const:4:8"]]
- 00bddb1c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bddbb8 ["INT_ADD", "register:40f0:8", ["const:bddbb8:8", "const:4:8"]]
+ 00bddbb8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bddb18 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bddb18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bddb18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bddb18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bddbb4 ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bddbb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bddbb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bddbb4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bddb24 ["COPY", "tmp:0:8", ["const:e20:8"]]
- 00bddb24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bddb24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bddb24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bddbc0 ["COPY", "tmp:0:8", ["const:f20:8"]]
+ 00bddbc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bddbc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bddbc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-73f2fa1a6b2e934e6a9374a425d62865"></a>

### [`00bddb38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddb38.md) → [`00bddbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddbd4.md) _ZN8firebase4auth18userprofilebuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

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
    "old": {
      "definition_site": "00bddb64",
      "incomplete_value": true,
      "site": "00bddb64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e28:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bddb4c",
      "incomplete_value": true,
      "site": "00bddb4c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bddb58",
      "incomplete_value": false,
      "site": "00bddb5c",
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
            "const:488:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bddbe4",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddbf4",
      "PARAM",
      [
        "storage",
        "002ad488",
        null,
        "string"
      ]
    ],
    [
      "00bddc00",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bddbe4",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddbf4",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bddc00",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddb5c ["INT_ADD", "register:40f0:8", ["const:bddb5c:8", "const:4:8"]]
- 00bddb5c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bddbf8 ["INT_ADD", "register:40f0:8", ["const:bddbf8:8", "const:4:8"]]
+ 00bddbf8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bddb64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e28:8"]]
- 00bddb64 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddc00 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
+ 00bddc00 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddb48 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e28:8"]]
- 00bddb48 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bddbe4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
+ 00bddbe4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-2cdc94082acd089f8700f0fb140fbf37"></a>

### [`00bddb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddb78.md) → [`00bddc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddc14.md) _ZN8firebase4auth18userprofilebuilder19CacheClassFromFilesEP7_JNIEnvP8_jobjectPKNSt6__ndk16vectorINS_8internal12EmbeddedFileENS6_9allocatorI

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
    "old": {
      "definition_site": "00bddba4",
      "incomplete_value": true,
      "site": "00bddba4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e28:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bddb8c",
      "incomplete_value": true,
      "site": "00bddb8c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bddb94",
      "incomplete_value": false,
      "site": "00bddb9c",
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
            "const:488:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bddc24",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddc30",
      "PARAM",
      [
        "storage",
        "002ad488",
        null,
        "string"
      ]
    ],
    [
      "00bddc40",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bddc24",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddc30",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bddc40",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddb9c ["INT_ADD", "register:40f0:8", ["const:bddb9c:8", "const:4:8"]]
- 00bddb9c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bddc38 ["INT_ADD", "register:40f0:8", ["const:bddc38:8", "const:4:8"]]
+ 00bddc38 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bddba4 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e28:8"]]
- 00bddba4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddc40 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
+ 00bddc40 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddb88 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e28:8"]]
- 00bddb88 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bddc24 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
+ 00bddc24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ee18a04115681de27b8b31ecb587787a"></a>

### [`00bddbb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddbb8.md) → [`00bddc54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddc54.md) _ZN8firebase4auth18userprofilebuilder10CacheClassEP7_JNIEnvP8_jobjectNS_4util16ClassRequirementE

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
    "old": {
      "definition_site": "00bddbe8",
      "incomplete_value": true,
      "site": "00bddbe8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e28:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bddbcc",
      "incomplete_value": true,
      "site": "00bddbcc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bddbd8",
      "incomplete_value": false,
      "site": "00bddbe0",
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
            "const:488:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bddc64",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddc74",
      "PARAM",
      [
        "storage",
        "002ad488",
        null,
        "string"
      ]
    ],
    [
      "00bddc84",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bddc64",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddc74",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bddc84",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddbe0 ["INT_ADD", "register:40f0:8", ["const:bddbe0:8", "const:4:8"]]
- 00bddbe0 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bddc7c ["INT_ADD", "register:40f0:8", ["const:bddc7c:8", "const:4:8"]]
+ 00bddc7c ["CALL", null, ["callee:00c5afe0:8"]]
- 00bddbe8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e28:8"]]
- 00bddbe8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddc84 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
+ 00bddc84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddbc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e28:8"]]
- 00bddbc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bddc64 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
+ 00bddc64 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-b916ab3be908e251c25844e2d8970296"></a>

### [`00bddbfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddbfc.md) → [`00bddc98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddc98.md) _ZN8firebase4auth18userprofilebuilder10CacheClassEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bddc2c",
      "incomplete_value": true,
      "site": "00bddc2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:e28:8"
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
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
    "old": {
      "definition_site": "00bddc10",
      "incomplete_value": true,
      "site": "00bddc10",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bddc18",
      "incomplete_value": false,
      "site": "00bddc24",
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
            "const:488:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bddca8",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddcb4",
      "PARAM",
      [
        "storage",
        "002ad488",
        null,
        "string"
      ]
    ],
    [
      "00bddcc8",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bddca8",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddcb4",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bddcc8",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddc24 ["INT_ADD", "register:40f0:8", ["const:bddc24:8", "const:4:8"]]
- 00bddc24 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bddcc0 ["INT_ADD", "register:40f0:8", ["const:bddcc0:8", "const:4:8"]]
+ 00bddcc0 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bddc2c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e28:8"]]
- 00bddc2c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddcc8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
+ 00bddcc8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddc0c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:e28:8"]]
- 00bddc0c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bddca8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:f28:8"]]
+ 00bddca8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c307cbe4bd1f7d2a3f3cc0fe4bf6942d"></a>

### [`00bddc4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddc4c.md) → [`00bddce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddce8.md) _ZN8firebase4auth18userprofilebuilder15RegisterNativesEP7_JNIEnvPK15JNINativeMethodm

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
    "old": {
      "definition_site": "00bddca4",
      "incomplete_value": true,
      "site": "00bddca4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:e30:8"
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
    "old": {
      "definition_site": "00bddc80",
      "incomplete_value": true,
      "site": "00bddc8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e28:8"
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
      "00bddcfc",
      "READ",
      [
        "storage",
        "01126e30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bddd1c",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddd40",
      "WRITE",
      [
        "storage",
        "01126e30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bddcfc",
      "READ",
      [
        "storage",
        "01126f30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bddd1c",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddd40",
      "WRITE",
      [
        "storage",
        "01126f30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddc8c ["COPY", "register:0:8", ["register:4040:8"]]
- 00bddc8c ["INT_ADD", "register:40f0:8", ["const:bddc8c:8", "const:4:8"]]
- 00bddc8c ["CALLIND", null, ["register:0:8"]]
+ 00bddd28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bddd28 ["INT_ADD", "register:40f0:8", ["const:bddd28:8", "const:4:8"]]
+ 00bddd28 ["CALLIND", null, ["register:0:8"]]
- 00bddca4 ["COPY", "tmp:0:4", ["register:4000:4"]]
- 00bddca4 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:e30:8"]]
- 00bddca4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00bddd40 ["COPY", "tmp:0:4", ["register:4000:4"]]
+ 00bddd40 ["INT_ADD", "tmp:1:8", ["register:40a8:8", "const:f30:8"]]
+ 00bddd40 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00bddc60 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e30:8"]]
- 00bddc60 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00bddc60 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00bddcfc ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:f30:8"]]
+ 00bddcfc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00bddcfc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-f032155871d00122734dfbe94817759a"></a>

### [`00bddcb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddcb8.md) → [`00bddd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddd54.md) _ZN8firebase4auth18userprofilebuilder12ReleaseClassEP7_JNIEnv

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
    "old": {
      "definition_site": "00bddcf4",
      "incomplete_value": true,
      "site": "00bddcf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "leaf",
            "const:e30:8"
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
    "old": {
      "definition_site": "00bddd14",
      "incomplete_value": true,
      "site": "00bddd14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
    "old": {
      "definition_site": "00bddcd0",
      "incomplete_value": true,
      "site": "00bddcd0",
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
      "00bddd68",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddd74",
      "READ",
      [
        "storage",
        "01126e30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bddd90",
      "WRITE",
      [
        "storage",
        "01126e30",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00bddd68",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddd74",
      "READ",
      [
        "storage",
        "01126f30",
        null,
        "undefined1"
      ]
    ],
    [
      "00bddd90",
      "WRITE",
      [
        "storage",
        "01126f30",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddcf4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00bddcf4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00bddcf4 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:e30:8"]]
- 00bddcf4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00bddd90 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00bddd90 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00bddd90 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:f30:8"]]
+ 00bddd90 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00bddd10 ["COPY", "register:0:8", ["register:4040:8"]]
- 00bddd10 ["INT_ADD", "register:40f0:8", ["const:bddd10:8", "const:4:8"]]
- 00bddd10 ["CALLIND", null, ["register:0:8"]]
+ 00bdddac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00bdddac ["INT_ADD", "register:40f0:8", ["const:bdddac:8", "const:4:8"]]
+ 00bdddac ["CALLIND", null, ["register:0:8"]]
- 00bddd14 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e28:8"]]
- 00bddd14 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00bddd14 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 00bdddb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f28:8"]]
+ 00bdddb0 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 00bdddb0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-94f819089fc8ff1345e3e76c605bcc46"></a>

### [`00bddd28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddd28.md) → [`00bdddc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdddc4.md) _ZN8firebase4auth18userprofilebuilder14CacheMethodIdsEP7_JNIEnvP8_jobject

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
    "old": {
      "definition_site": "00bddd68",
      "incomplete_value": true,
      "site": "00bddd68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:e28:8"
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
    "old": {
      "definition_site": "00bddd44",
      "incomplete_value": true,
      "site": "00bddd44",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "LOAD",
            "8",
            [
              [
                "leaf",
                "const:1b1:8"
              ],
              "INT_ADD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bddd4c",
      "incomplete_value": false,
      "site": "00bddd60",
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
            "const:488:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdddd8",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddde8",
      "PARAM",
      [
        "storage",
        "002ad488",
        null,
        "string"
      ]
    ],
    [
      "00bdde04",
      "WRITE",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdddd8",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddde8",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ],
    [
      "00bdde04",
      "WRITE",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddd60 ["INT_ADD", "register:40f0:8", ["const:bddd60:8", "const:4:8"]]
- 00bddd60 ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bdddfc ["INT_ADD", "register:40f0:8", ["const:bdddfc:8", "const:4:8"]]
+ 00bdddfc ["CALL", null, ["callee:00c5afe0:8"]]
- 00bddd68 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e28:8"]]
- 00bddd68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bdde04 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f28:8"]]
+ 00bdde04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bddd3c ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e28:8"]]
- 00bddd3c ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
+ 00bdddd8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:f28:8"]]
+ 00bdddd8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4fc0d5c7275d5a172ec1081cee429133"></a>

### [`00bddd98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bddd98.md) → [`00bdde34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdde34.md) _ZN8firebase4auth18userprofilebuilder11GetMethodIdENS1_6MethodE

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
    "old": {
      "definition_site": "00bdddb4",
      "incomplete_value": false,
      "site": "00bdddb8",
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
    "old": {
      "definition_site": "00bdddc4",
      "incomplete_value": true,
      "site": "00bdddd0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bdde50",
      "PARAM",
      [
        "storage",
        "002a8367",
        null,
        "string"
      ]
    ],
    [
      "00bdde60",
      "DATA",
      [
        "storage",
        "01126e38",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdde50",
      "PARAM",
      [
        "storage",
        "002a830b",
        null,
        "string"
      ]
    ],
    [
      "00bdde60",
      "DATA",
      [
        "storage",
        "01126f38",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdddb8 ["INT_ADD", "register:40f0:8", ["const:bdddb8:8", "const:4:8"]]
- 00bdddb8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bdde54 ["INT_ADD", "register:40f0:8", ["const:bdde54:8", "const:4:8"]]
+ 00bdde54 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdddb4 ["COPY", "tmp:0:8", ["const:367:8"]]
- 00bdddb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdddb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdddb4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bdde50 ["COPY", "tmp:0:8", ["const:30b:8"]]
+ 00bdde50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdde50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bdde50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdddc0 ["COPY", "tmp:0:8", ["const:e38:8"]]
- 00bdddc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdddc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdddc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bdde5c ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 00bdde5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdde5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bdde5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bec1de1c10f998035360c941bf5ad41d"></a>

### [`00bdddd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdddd4.md) → [`00bdde70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bdde70.md) _ZN8firebase4auth18userprofilebuilder13CacheFieldIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5aef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aef0.md) [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5afc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afc0.md) [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 67.86% / 新版 67.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdddf8",
      "incomplete_value": false,
      "site": "00bdde0c",
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
            "const:488:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bddde8",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bdddf0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bddeb4"
      ]
    ],
    [
      "unmatched:00bdddf8",
      "PARAM",
      [
        "storage",
        "002ad488",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00bdde84",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdde8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bddeb4"
      ]
    ],
    [
      "00bdde94",
      "PARAM",
      [
        "storage",
        "002ad42c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdde0c ["INT_ADD", "register:40f0:8", ["const:bdde0c:8", "const:4:8"]]
- 00bdde0c ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bddea8 ["INT_ADD", "register:40f0:8", ["const:bddea8:8", "const:4:8"]]
+ 00bddea8 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bddde8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:e28:8"]]
- 00bddde8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
- 00bdddec ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


<a id="compare-92c8f45a1f1f13e2d29b66f68f6ae429"></a>

### [`00bdde44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdde44.md) → [`00bddee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddee0.md) _ZN8firebase4auth18userprofilebuilder10GetFieldIdENS1_5FieldE

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
    "old": {
      "definition_site": "00bdde60",
      "incomplete_value": false,
      "site": "00bdde64",
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
    "old": {
      "definition_site": "00bdde70",
      "incomplete_value": true,
      "site": "00bdde7c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
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
      "00bddefc",
      "PARAM",
      [
        "storage",
        "002a951e",
        null,
        "string"
      ]
    ],
    [
      "00bddf0c",
      "DATA",
      [
        "storage",
        "01126e58",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00bddefc",
      "PARAM",
      [
        "storage",
        "002a954d",
        null,
        "string"
      ]
    ],
    [
      "00bddf0c",
      "DATA",
      [
        "storage",
        "01126f58",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdde64 ["INT_ADD", "register:40f0:8", ["const:bdde64:8", "const:4:8"]]
- 00bdde64 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bddf00 ["INT_ADD", "register:40f0:8", ["const:bddf00:8", "const:4:8"]]
+ 00bddf00 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdde60 ["COPY", "tmp:0:8", ["const:51e:8"]]
- 00bdde60 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00bdde60 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00bdde60 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00bddefc ["COPY", "tmp:0:8", ["const:54d:8"]]
+ 00bddefc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00bddefc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00bddefc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00bdde6c ["COPY", "tmp:0:8", ["const:e58:8"]]
- 00bdde6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00bdde6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00bdde6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00bddf08 ["COPY", "tmp:0:8", ["const:f58:8"]]
+ 00bddf08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00bddf08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00bddf08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b08f3ad841ff2b04db7243c32c330925"></a>

### [`00bdde80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdd/00bdde80.md) → [`00bddf1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdd/00bddf1c.md) _ZN8firebase4auth18CacheUserMethodIdsEP7_JNIEnvP8_jobject

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5dc50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc50.md) · 呼出先 2件 [`00c5af10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af10.md) [`00c5af30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af30.md)
- 新版 呼出元 1件 [`00c5dd20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd20.md) · 呼出先 2件 [`00c5afe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5afe0.md) [`00c5b000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b000.md)

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
    "old": {
      "definition_site": "00bddec4",
      "incomplete_value": true,
      "site": "00bddec4",
      "value": [
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bddf1c",
      "incomplete_value": true,
      "site": "00bddf1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
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
    "kind": "store_destination",
    "new": {
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
    "old": {
      "definition_site": "00bddf74",
      "incomplete_value": true,
      "site": "00bddf74",
      "value": [
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
      "00bddf34",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddf44",
      "PARAM",
      [
        "storage",
        "002bc250",
        null,
        "string"
      ]
    ],
    [
      "00bddf60",
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
      "00bddf34",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bddf44",
      "PARAM",
      [
        "storage",
        "002bc1fc",
        null,
        "string"
      ]
    ],
    [
      "00bddf60",
      "WRITE",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bddebc ["INT_ADD", "register:40f0:8", ["const:bddebc:8", "const:4:8"]]
- 00bddebc ["CALL", null, ["callee:00c5afe0:8"]]
+ 00bddf58 ["INT_ADD", "register:40f0:8", ["const:bddf58:8", "const:4:8"]]
+ 00bddf58 ["CALL", null, ["callee:00c5afe0:8"]]
- 00bddec4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:d00:8"]]
- 00bddec4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00bddf60 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:e00:8"]]
+ 00bddf60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00bdded8 ["COPY", "tmp:0:8", ["const:d10:8"]]
- 00bdded8 ["INT_CARRY", "register:105:1", ["register:4020:8", "tmp:0:8"]]
- 00bdded8 ["INT_SCARRY", "register:106:1", ["register:4020:8", "tmp:0:8"]]
- 00bdded8 ["INT_ADD", "tmp:1:8", ["register:4020:8", "tmp:0:8"]]
+ 00bddf74 ["COPY", "tmp:0:8", ["const:e10:8"]]
+ 00bddf74 ["INT_CARRY", "register:105:1", ["register:4020:8", "tmp:0:8"]]
+ 00bddf74 ["INT_SCARRY", "register:106:1", ["register:4020:8", "tmp:0:8"]]
+ 00bddf74 ["INT_ADD", "tmp:1:8", ["register:4020:8", "tmp:0:8"]]
~~~


<a id="compare-b17bbed7398aba32a83ca32b70c08d71"></a>

### [`00bde06c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bde/00bde06c.md) → [`00bde108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde108.md) _ZN8firebase4auth18ReleaseUserClassesEP7_JNIEnv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5dc70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dc70.md) · 呼出先 1件 [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dd40.md) · 呼出先 1件 [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_value, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 29.81% / 新版 29.81%

優先判定に残った影響 `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `branch_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00bde124",
      "incomplete_value": true,
      "site": "00bde124",
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
      "definition_site": "00bde088",
      "incomplete_value": true,
      "site": "00bde088",
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
      "definition_site": "00bde170",
      "incomplete_value": true,
      "site": "00bde170",
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
      "definition_site": "00bde1b8",
      "incomplete_value": true,
      "site": "00bde1b8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bde11c",
      "READ",
      [
        "storage",
        "01126d00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde124",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bde0cc"
      ]
    ],
    [
      "unmatched:00bde090",
      "READ",
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
      "00bde11c",
      "READ",
      [
        "storage",
        "01126e00",
        null,
        "undefined8"
      ]
    ],
    [
      "00bde124",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00bde168"
      ]
    ],
    [
      "00bde16c",
      "READ",
      [
        "storage",
        "01126e20",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bde124 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00bde1b8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00bde1b8 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
+ 00bde170 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00bde170 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 00bde1b8 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:eb0:8"]]
+ 00bde1b8 ["LOAD", "register:4008:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-4f8072b28a722b55f34fab27ed2a5960"></a>

### [`00bde6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bde/00bde6a4.md) → [`00bde740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde740.md) _ZN8firebase4auth15ReadTokenResultEP8_jobjectPNS0_18FutureCallbackDataINSt6__ndk112basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEEEE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00bde818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bde/00bde818.md) · 呼出先 9件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md)
- 新版 呼出元 1件 [`00bde8b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bde8b4.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md)

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
    "old": {
      "definition_site": "00bde728",
      "incomplete_value": false,
      "site": "00bde72c",
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
            "const:eef:8"
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
    "old": {
      "definition_site": "00bde734",
      "incomplete_value": true,
      "site": "00bde740",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d10:8"
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
      "00bde7c4",
      "PARAM",
      [
        "storage",
        "002b6eef",
        null,
        "string"
      ]
    ],
    [
      "00bde7d0",
      "READ",
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
      "00bde7c4",
      "PARAM",
      [
        "storage",
        "002b6f2f",
        null,
        "string"
      ]
    ],
    [
      "00bde7d0",
      "READ",
      [
        "storage",
        "01126e10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bde72c ["INT_ADD", "register:40f0:8", ["const:bde72c:8", "const:4:8"]]
- 00bde72c ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00bde7c8 ["INT_ADD", "register:40f0:8", ["const:bde7c8:8", "const:4:8"]]
+ 00bde7c8 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bde740 ["INT_ADD", "register:40f0:8", ["const:bde740:8", "const:4:8"]]
- 00bde740 ["CALL", null, ["callee:00497874:8"]]
+ 00bde7dc ["INT_ADD", "register:40f0:8", ["const:bde7dc:8", "const:4:8"]]
+ 00bde7dc ["CALL", null, ["callee:00497874:8"]]
- 00bde6e8 ["INT_ADD", "register:40f0:8", ["const:bde6e8:8", "const:4:8"]]
- 00bde6e8 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bde784 ["INT_ADD", "register:40f0:8", ["const:bde784:8", "const:4:8"]]
+ 00bde784 ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-d032c60b6705583d97ea0efbdb1200fd"></a>

### [`00bdeb7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bde/00bdeb7c.md) → [`00bdec18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bde/00bdec18.md) _ZNK8firebase4auth4User13provider_dataEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5aab0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aab0.md) · 呼出先 14件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005762b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00576/005762b8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md)
- 新版 呼出元 1件 [`00c5ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab80.md) · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`005762f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00576/005762f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.47% / 新版 73.47%

優先判定に残った影響 `call_argument_candidate` 12件, `store_condition` 2件, `store_value` 1件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 14件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00bdf118",
      "incomplete_value": true,
      "site": "00bdf11c",
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
      "definition_site": "00bdec68",
      "incomplete_value": true,
      "site": "00bdec6c",
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
            "register:4040:8"
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
      "definition_site": "00bdec80",
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
              "LOAD",
              [
                "leaf",
                "const:200:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdebe4",
      "incomplete_value": true,
      "site": "00bdebec",
      "value": [
        "LOAD",
        "8",
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
                "const:200:8"
              ]
            ]
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
      "unmatched:00bdeb7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdeb80",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdeb84",
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
      "00bdec18",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00bdec1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bdec20",
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
- 00bdebd0 ["INT_ADD", "register:40f0:8", ["const:bdebd0:8", "const:4:8"]]
- 00bdebd0 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bdec6c ["INT_ADD", "register:40f0:8", ["const:bdec6c:8", "const:4:8"]]
+ 00bdec6c ["CALL", null, ["callee:00c5b150:8"]]
- 00bdebec ["INT_ADD", "register:40f0:8", ["const:bdebec:8", "const:4:8"]]
- 00bdebec ["CALL", null, ["callee:00497874:8"]]
+ 00bdec88 ["INT_ADD", "register:40f0:8", ["const:bdec88:8", "const:4:8"]]
+ 00bdec88 ["CALL", null, ["callee:00497874:8"]]
- 00bdec08 ["INT_ADD", "register:40f0:8", ["const:bdec08:8", "const:4:8"]]
- 00bdec08 ["CALL", null, ["callee:005762f8:8"]]
+ 00bdeca4 ["INT_ADD", "register:40f0:8", ["const:bdeca4:8", "const:4:8"]]
+ 00bdeca4 ["CALL", null, ["callee:005762f8:8"]]
~~~


<a id="compare-3b7c46a4bdb8cccc41c0848fbef12b09"></a>

### [`00bdf288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf288.md) → [`00bdf324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf324.md) _ZNSt6__ndk16vectorIN8firebase4auth17UserInfoInterfaceENS_9allocatorIS3_EEE7reserveEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00c5ded0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5ded0.md) · 呼出先 4件 [`00b402c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b40/00b402c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5dea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5dea0.md)
- 新版 呼出元 1件 [`00c5dfa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dfa0.md) · 呼出先 4件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5df70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df70.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bdf288",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdf28c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdf290",
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
      "00bdf324",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00bdf328",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00bdf32c",
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
- 00bdf288 ["COPY", "tmp:0:8", ["register:40c8:8"]]
- 00bdf288 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00bdf288 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bdf28c ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00bdf28c ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00bdf28c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bdf28c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00bdf290 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00bdf290 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00bdf290 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00bdf290 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-14ce65b83f4fe4fcbba2ffff87636afb"></a>

### [`00bdf458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf458.md) → [`00bdf4f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf4f4.md) _ZNK8firebase4auth22AndroidWrappedUserInfo5emailEv

根拠 `symbol` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b390.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.88% / 新版 87.88%

優先判定に残った影響 `unresolved_store_alignment` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdf520",
      "incomplete_value": true,
      "site": "00bdf52c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "old": {
      "definition_site": "00bdf484",
      "incomplete_value": true,
      "site": "00bdf490",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "unmatched:00bdf458",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdf45c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdf460",
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
      "00bdf4f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00bdf4f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00bdf4fc",
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
- 00bdf490 ["INT_ADD", "register:40f0:8", ["const:bdf490:8", "const:4:8"]]
- 00bdf490 ["CALL", null, ["callee:00497874:8"]]
+ 00bdf52c ["INT_ADD", "register:40f0:8", ["const:bdf52c:8", "const:4:8"]]
+ 00bdf52c ["CALL", null, ["callee:00497874:8"]]
- 00bdf458 ["COPY", "tmp:0:8", ["register:40a8:8"]]
- 00bdf458 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00bdf458 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00bdf45c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00bdf45c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00bdf45c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00bdf45c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-3a6bfb742a991cefd3e58dcda6e20787"></a>

### [`00bdf4dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf4dc.md) → [`00bdf578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf578.md) _ZNK8firebase4auth22AndroidWrappedUserInfo12display_nameEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b390.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdf508",
      "incomplete_value": true,
      "site": "00bdf514",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd0:8"
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
      "unmatched:00bdf508",
      "READ",
      [
        "storage",
        "01126dd0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdf5a4",
      "READ",
      [
        "storage",
        "01126ed0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf514 ["INT_ADD", "register:40f0:8", ["const:bdf514:8", "const:4:8"]]
- 00bdf514 ["CALL", null, ["callee:00497874:8"]]
+ 00bdf5b0 ["INT_ADD", "register:40f0:8", ["const:bdf5b0:8", "const:4:8"]]
+ 00bdf5b0 ["CALL", null, ["callee:00497874:8"]]
- 00bdf4f8 ["INT_ADD", "register:40f0:8", ["const:bdf4f8:8", "const:4:8"]]
- 00bdf4f8 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bdf594 ["INT_ADD", "register:40f0:8", ["const:bdf594:8", "const:4:8"]]
+ 00bdf594 ["CALL", null, ["callee:00c5b150:8"]]
- 00bdf500 ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
- 00bdf500 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00bdf59c ["INT_EQUAL", "tmp:0:1", ["register:40a8:8", "const:0:8"]]
+ 00bdf59c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-3c712e915c65fcc3fa169427517ad19c"></a>

### [`00bdf560`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf560.md) → [`00bdf5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf5fc.md) _ZNK8firebase4auth22AndroidWrappedUserInfo9photo_urlEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b2f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b2f0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b3c0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdf614",
      "incomplete_value": true,
      "site": "00bdf618",
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
            "register:4048:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdf578",
      "incomplete_value": true,
      "site": "00bdf57c",
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
    "old": {
      "definition_site": "00bdf58c",
      "incomplete_value": true,
      "site": "00bdf598",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:de0:8"
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
      "unmatched:00bdf58c",
      "READ",
      [
        "storage",
        "01126de0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdf628",
      "READ",
      [
        "storage",
        "01126ee0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf57c ["INT_ADD", "register:40f0:8", ["const:bdf57c:8", "const:4:8"]]
- 00bdf57c ["CALL", null, ["callee:00c5b150:8"]]
+ 00bdf618 ["INT_ADD", "register:40f0:8", ["const:bdf618:8", "const:4:8"]]
+ 00bdf618 ["CALL", null, ["callee:00c5b150:8"]]
- 00bdf598 ["INT_ADD", "register:40f0:8", ["const:bdf598:8", "const:4:8"]]
- 00bdf598 ["CALL", null, ["callee:00497874:8"]]
+ 00bdf634 ["INT_ADD", "register:40f0:8", ["const:bdf634:8", "const:4:8"]]
+ 00bdf634 ["CALL", null, ["callee:00497874:8"]]
- 00bdf578 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00bdf578 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c9ea7d618e6799e4f9317b2989e1aa59"></a>

### [`00bdf5e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf5e4.md) → [`00bdf680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf680.md) _ZNK8firebase4auth22AndroidWrappedUserInfo11provider_idEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b390.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdf698",
      "incomplete_value": true,
      "site": "00bdf69c",
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
      "definition_site": "00bdf5fc",
      "incomplete_value": true,
      "site": "00bdf600",
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
            "register:4048:8"
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
      "definition_site": "00bdf6ac",
      "incomplete_value": true,
      "site": "00bdf6b8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ec8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdf610",
      "incomplete_value": true,
      "site": "00bdf61c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00bdf6ac",
      "READ",
      [
        "storage",
        "01126dc8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdf6ac",
      "READ",
      [
        "storage",
        "01126ec8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf600 ["INT_ADD", "register:40f0:8", ["const:bdf600:8", "const:4:8"]]
- 00bdf600 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bdf69c ["INT_ADD", "register:40f0:8", ["const:bdf69c:8", "const:4:8"]]
+ 00bdf69c ["CALL", null, ["callee:00c5b150:8"]]
- 00bdf61c ["INT_ADD", "register:40f0:8", ["const:bdf61c:8", "const:4:8"]]
- 00bdf61c ["CALL", null, ["callee:00497874:8"]]
+ 00bdf6b8 ["INT_ADD", "register:40f0:8", ["const:bdf6b8:8", "const:4:8"]]
+ 00bdf6b8 ["CALL", null, ["callee:00497874:8"]]
- 00bdf5fc ["COPY", "tmp:0:8", ["register:4048:8"]]
- 00bdf5fc ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-acb2cdde249695defd66fad3dde1afea"></a>

### [`00bdf668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf668.md) → [`00bdf704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf704.md) _ZNK8firebase4auth22AndroidWrappedUserInfo12phone_numberEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5b390`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b390.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5b460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b460.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdf730",
      "incomplete_value": true,
      "site": "00bdf73c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ed8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdf694",
      "incomplete_value": true,
      "site": "00bdf6a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdf744",
      "incomplete_value": true,
      "site": "00bdf748",
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
      "00bdf730",
      "READ",
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
      "00bdf730",
      "READ",
      [
        "storage",
        "01126ed8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf6a0 ["INT_ADD", "register:40f0:8", ["const:bdf6a0:8", "const:4:8"]]
- 00bdf6a0 ["CALL", null, ["callee:00497874:8"]]
+ 00bdf73c ["INT_ADD", "register:40f0:8", ["const:bdf73c:8", "const:4:8"]]
+ 00bdf73c ["CALL", null, ["callee:00497874:8"]]
- 00bdf6ac ["INT_ADD", "register:40f0:8", ["const:bdf6ac:8", "const:4:8"]]
- 00bdf6ac ["CALL", null, ["callee:00c5b030:8"]]
+ 00bdf748 ["INT_ADD", "register:40f0:8", ["const:bdf748:8", "const:4:8"]]
+ 00bdf748 ["CALL", null, ["callee:00c5b030:8"]]
- 00bdf684 ["INT_ADD", "register:40f0:8", ["const:bdf684:8", "const:4:8"]]
- 00bdf684 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bdf720 ["INT_ADD", "register:40f0:8", ["const:bdf720:8", "const:4:8"]]
+ 00bdf720 ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-087dc3fb32f29a993e55d4f3f208c271"></a>

### [`00bdf6ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf6ec.md) → [`00bdf788`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf788.md) _ZN8firebase4auth22AndroidWrappedUserInfoD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5db80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc50.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00bdf700",
      "READ",
      [
        "storage",
        "00c9ba60",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00bdf70c",
      "DATA",
      [
        "storage",
        "00c92910",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bdf79c",
      "READ",
      [
        "storage",
        "00c9bb30",
        null,
        "pointer"
      ]
    ],
    [
      "00bdf7a8",
      "DATA",
      [
        "storage",
        "00c929e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf700 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a60:8"]]
- 00bdf700 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00bdf704 ["COPY", "register:4098:8", ["register:4000:8"]]
- 00bdf708 ["COPY", "tmp:0:8", ["const:10:8"]]
- 00bdf708 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00bdf708 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00bdf708 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-77f696b2b36730f12fdd328254819afb"></a>

### [`00bdf750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf750.md) → [`00bdf7ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdf7ec.md) _ZN8firebase4auth4User14UpdatePasswordEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bd04c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd04c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 93.91% / 新版 93.91%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdf888",
      "incomplete_value": true,
      "site": "00bdf89c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdf7ec",
      "incomplete_value": true,
      "site": "00bdf800",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d50:8"
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
    "new": null,
    "old": {
      "definition_site": "00bdf878",
      "incomplete_value": true,
      "site": "00bdf880",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00bdf87c",
      "incomplete_value": false,
      "site": "00bdf880",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "leaf",
            "const:0:4"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00bdf888",
      "READ",
      [
        "storage",
        "01126d50",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bdf8a4",
      "READ",
      [
        "storage",
        "00c9ba18",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00bdf8a4",
      "PARAM",
      [
        "storage",
        "00bd04c0",
        "firebase::auth::FutureCallback<void>",
        null
      ]
    ]
  ],
  "added": [
    [
      "00bdf888",
      "READ",
      [
        "storage",
        "01126e50",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdf940",
      "READ",
      [
        "storage",
        "00c9bae8",
        null,
        "pointer"
      ]
    ],
    [
      "00bdf940",
      "PARAM",
      [
        "storage",
        "00bd055c",
        "firebase::auth::FutureCallback<void>",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf800 ["INT_ADD", "register:40f0:8", ["const:bdf800:8", "const:4:8"]]
- 00bdf800 ["CALL", null, ["callee:00497874:8"]]
+ 00bdf89c ["INT_ADD", "register:40f0:8", ["const:bdf89c:8", "const:4:8"]]
+ 00bdf89c ["CALL", null, ["callee:00497874:8"]]
- 00bdf844 ["INT_ADD", "register:40f0:8", ["const:bdf844:8", "const:4:8"]]
- 00bdf844 ["CALL", null, ["callee:00c5b150:8"]]
+ 00bdf8e0 ["INT_ADD", "register:40f0:8", ["const:bdf8e0:8", "const:4:8"]]
+ 00bdf8e0 ["CALL", null, ["callee:00c5b150:8"]]
- 00bdf880 ["INT_ADD", "register:40f0:8", ["const:bdf880:8", "const:4:8"]]
- 00bdf880 ["CALL", null, ["callee:00c5ad40:8"]]
+ 00bdf91c ["INT_ADD", "register:40f0:8", ["const:bdf91c:8", "const:4:8"]]
+ 00bdf91c ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-4fd8d75046431e392664f4ca8682b473"></a>

### [`00bdf978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdf978.md) → [`00bdfa14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdfa14.md) _ZN8firebase4auth4User17UpdateUserProfileERKNS1_11UserProfileE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 19件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`005896f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00589/005896f4.md) [`00bd04c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd04c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00589734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589734.md) [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 88.16% / 新版 88.16%

優先判定に残った影響 `call_argument_candidate` 24件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdfa68",
      "incomplete_value": true,
      "site": "00bdfa74",
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
            "const:10:8"
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
      "definition_site": "00bdfa64",
      "incomplete_value": false,
      "site": "00bdfa74",
      "value": [
        "leaf",
        "const:11:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00bdfa6c",
      "incomplete_value": false,
      "site": "00bdfa74",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "old": null,
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
      "unmatched:00bdfa04",
      "READ",
      [
        "storage",
        "01126e28",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00bdfa08",
      "READ",
      [
        "storage",
        "01126e38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdfad8",
      "READ",
      [
        "storage",
        "01126e40",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdfaa0",
      "READ",
      [
        "storage",
        "01126f28",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdfaa4",
      "READ",
      [
        "storage",
        "01126f38",
        null,
        "undefined8"
      ]
    ],
    [
      "00bdfad8",
      "READ",
      [
        "storage",
        "01126f40",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdf9d8 ["INT_ADD", "register:40f0:8", ["const:bdf9d8:8", "const:4:8"]]
- 00bdf9d8 ["CALL", null, ["callee:00c5af10:8"]]
+ 00bdfa74 ["INT_ADD", "register:40f0:8", ["const:bdfa74:8", "const:4:8"]]
+ 00bdfa74 ["CALL", null, ["callee:00c5af10:8"]]
- 00bdfa18 ["INT_ADD", "register:40f0:8", ["const:bdfa18:8", "const:4:8"]]
- 00bdfa18 ["CALL", null, ["callee:00589734:8"]]
+ 00bdfab4 ["INT_ADD", "register:40f0:8", ["const:bdfab4:8", "const:4:8"]]
+ 00bdfab4 ["CALL", null, ["callee:00589734:8"]]
- 00bdfa50 ["INT_ADD", "register:40f0:8", ["const:bdfa50:8", "const:4:8"]]
- 00bdfa50 ["CALL", null, ["callee:00497874:8"]]
+ 00bdfaec ["INT_ADD", "register:40f0:8", ["const:bdfaec:8", "const:4:8"]]
+ 00bdfaec ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-0853697accafd364dbed3cefb98ef7e1"></a>

### [`00bdfda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdfda0.md) → [`00bdfe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bdf/00bdfe3c.md) _ZN8firebase4auth4User18LinkWithCredentialERKNS0_10CredentialE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bcfd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfd44.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00bdff0c",
      "incomplete_value": true,
      "site": "00bdff0c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:af0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdfe70",
      "incomplete_value": true,
      "site": "00bdfe70",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a20:8"
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
      "definition_site": "00bdfea8",
      "incomplete_value": true,
      "site": "00bdfeb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00bdfe0c",
      "incomplete_value": true,
      "site": "00bdfe1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d60:8"
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
      "definition_site": "00bdfec4",
      "incomplete_value": true,
      "site": "00bdfecc",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
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
      "unmatched:00bdfdb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00bdfdc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00bdfea8",
      "READ",
      [
        "storage",
        "01126d60",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00bdfe50",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00bdfe64",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00bdfea8",
      "READ",
      [
        "storage",
        "01126e60",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdfe1c ["INT_ADD", "register:40f0:8", ["const:bdfe1c:8", "const:4:8"]]
- 00bdfe1c ["CALL", null, ["callee:00497874:8"]]
+ 00bdfeb8 ["INT_ADD", "register:40f0:8", ["const:bdfeb8:8", "const:4:8"]]
+ 00bdfeb8 ["CALL", null, ["callee:00497874:8"]]
- 00bdfe30 ["INT_ADD", "register:40f0:8", ["const:bdfe30:8", "const:4:8"]]
- 00bdfe30 ["CALL", null, ["callee:00c5dda0:8"]]
+ 00bdfecc ["INT_ADD", "register:40f0:8", ["const:bdfecc:8", "const:4:8"]]
+ 00bdfecc ["CALL", null, ["callee:00c5dda0:8"]]
- 00bdfec4 ["INT_ADD", "register:40f0:8", ["const:bdfec4:8", "const:4:8"]]
- 00bdfec4 ["CALL", null, ["callee:00c5b010:8"]]
+ 00bdff60 ["INT_ADD", "register:40f0:8", ["const:bdff60:8", "const:4:8"]]
+ 00bdff60 ["CALL", null, ["callee:00c5b010:8"]]
~~~


<a id="compare-ca68a6926a0554a1dc25e8fcd57b317f"></a>

### [`00bdff78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdff78.md) → [`00be0014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be0014.md) _ZNK8firebase4auth4User16LinkWithProviderEPNS0_21FederatedAuthProviderE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bdffb4",
      "incomplete_value": false,
      "site": "00bdffb8",
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
            "const:bc2:8"
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
      "00be0024",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00bdffb0"
      ]
    ],
    [
      "unmatched:00bdffb4",
      "PARAM",
      [
        "storage",
        "002b5bc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be0024",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00be004c"
      ]
    ],
    [
      "00be0050",
      "PARAM",
      [
        "storage",
        "002b5c02",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bdffb8 ["INT_ADD", "register:40f0:8", ["const:bdffb8:8", "const:4:8"]]
- 00bdffb8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00be0054 ["INT_ADD", "register:40f0:8", ["const:be0054:8", "const:4:8"]]
+ 00be0054 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00bdff9c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:18:8"]]
- 00bdff9c ["LOAD", "register:4010:8", ["const:1b1:8", "tmp:0:8"]]
- 00bdffa0 ["COPY", "register:4040:8", ["register:4098:8"]]
~~~


<a id="compare-ff71f7905d93af65398419fb34b6cf7e"></a>

### [`00bdfffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bdf/00bdfffc.md) → [`00be0098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be0098.md) _ZN8firebase4auth4User6UnlinkEPKc

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bcfd44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bcf/00bcfd44.md) [`00bd482c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd482c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bcfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bcf/00bcfde0.md) [`00bd48c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd48c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.27% / 新版 87.27%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00be0194",
      "incomplete_value": true,
      "site": "00be0194",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:af0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be00f8",
      "incomplete_value": true,
      "site": "00be00f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a20:8"
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
      "definition_site": "00be00e8",
      "incomplete_value": true,
      "site": "00be00ec",
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
            "const:10:8"
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
      "definition_site": "00be00e4",
      "incomplete_value": false,
      "site": "00be00ec",
      "value": [
        "leaf",
        "const:15:8"
      ]
    },
    "old": null,
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
      "unmatched:00be0000",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00be0004",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00be0008",
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
      "00be009c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00be00a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00be00a4",
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
- 00be0050 ["INT_ADD", "register:40f0:8", ["const:be0050:8", "const:4:8"]]
- 00be0050 ["CALL", null, ["callee:00c5dcd0:8"]]
+ 00be00ec ["INT_ADD", "register:40f0:8", ["const:be00ec:8", "const:4:8"]]
+ 00be00ec ["CALL", null, ["callee:00c5dcd0:8"]]
- 00be005c ["INT_ADD", "register:40f0:8", ["const:be005c:8", "const:4:8"]]
- 00be005c ["CALL", null, ["callee:00c5b150:8"]]
+ 00be00f8 ["INT_ADD", "register:40f0:8", ["const:be00f8:8", "const:4:8"]]
+ 00be00f8 ["CALL", null, ["callee:00c5b150:8"]]
- 00be0090 ["INT_ADD", "register:40f0:8", ["const:be0090:8", "const:4:8"]]
- 00be0090 ["CALL", null, ["callee:00497874:8"]]
+ 00be012c ["INT_ADD", "register:40f0:8", ["const:be012c:8", "const:4:8"]]
+ 00be012c ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-d2af18da97d5da16e7a514584a169633"></a>

### [`00be0204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be0/00be0204.md) → [`00be02a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be02a0.md) _ZN8firebase4auth4User27UpdatePhoneNumberCredentialERKNS0_19PhoneAuthCredentialE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 16件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bd010c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd010c.md) [`00bd4c3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd4/00bd4c3c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 16件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd01a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd01a8.md) [`00bd4cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd4/00bd4cd8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.42% / 新版 76.42%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 11件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00be0300",
      "incomplete_value": true,
      "site": "00be0300",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00be033c",
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
              "LOAD",
              [
                "leaf",
                "const:200:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00be02a0",
      "incomplete_value": true,
      "site": "00be02ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:200:8"
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
    "old": {
      "definition_site": "00be029c",
      "incomplete_value": true,
      "site": "00be02ac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d70:8"
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
      "unmatched:00be0208",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00be020c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00be0210",
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
      "00be02a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00be02a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00be02ac",
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
- 00be0264 ["INT_ADD", "register:40f0:8", ["const:be0264:8", "const:4:8"]]
- 00be0264 ["CALL", null, ["callee:00c5b150:8"]]
+ 00be0300 ["INT_ADD", "register:40f0:8", ["const:be0300:8", "const:4:8"]]
+ 00be0300 ["CALL", null, ["callee:00c5b150:8"]]
- 00be02ac ["INT_ADD", "register:40f0:8", ["const:be02ac:8", "const:4:8"]]
- 00be02ac ["CALL", null, ["callee:00497874:8"]]
+ 00be0348 ["INT_ADD", "register:40f0:8", ["const:be0348:8", "const:4:8"]]
+ 00be0348 ["CALL", null, ["callee:00497874:8"]]
+ 00be02ac ["COPY", "tmp:0:8", ["register:40b0:8"]]
+ 00be02ac ["COPY", "tmp:1:8", ["register:40a8:8"]]
+ 00be02ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
+ 00be02ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5d5133ef948e1eb8f6f24fee7defad6f"></a>

### [`00be0450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be0/00be0450.md) → [`00be04ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be04ec.md) _ZN8firebase4auth4User6ReloadEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bd04c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd04c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00be049c",
      "incomplete_value": true,
      "site": "00be04a8",
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
            "const:10:8"
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
    "new": null,
    "old": {
      "definition_site": "00be0498",
      "incomplete_value": false,
      "site": "00be04a8",
      "value": [
        "leaf",
        "const:17:8"
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
      "definition_site": "00be04a0",
      "incomplete_value": false,
      "site": "00be04a8",
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
      "unmatched:00be0454",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00be0458",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00be045c",
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
      "00be04f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00be04f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00be04f8",
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
- 00be04a8 ["INT_ADD", "register:40f0:8", ["const:be04a8:8", "const:4:8"]]
- 00be04a8 ["CALL", null, ["callee:00c5af10:8"]]
+ 00be0544 ["INT_ADD", "register:40f0:8", ["const:be0544:8", "const:4:8"]]
+ 00be0544 ["CALL", null, ["callee:00c5af10:8"]]
- 00be04e0 ["INT_ADD", "register:40f0:8", ["const:be04e0:8", "const:4:8"]]
- 00be04e0 ["CALL", null, ["callee:00497874:8"]]
+ 00be057c ["INT_ADD", "register:40f0:8", ["const:be057c:8", "const:4:8"]]
+ 00be057c ["CALL", null, ["callee:00497874:8"]]
- 00be0510 ["INT_ADD", "register:40f0:8", ["const:be0510:8", "const:4:8"]]
- 00be0510 ["CALL", null, ["callee:00c5b150:8"]]
+ 00be05ac ["INT_ADD", "register:40f0:8", ["const:be05ac:8", "const:4:8"]]
+ 00be05ac ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-71cb31546883e41255cea6f96a37fe5b"></a>

### [`00be0640`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be0/00be0640.md) → [`00be06dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be06dc.md) _ZN8firebase4auth4User14ReauthenticateERKNS0_10CredentialE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`00bd04c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bd0/00bd04c0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5aa90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa90.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00bd055c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bd0/00bd055c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5ab60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ab60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00be0690",
      "incomplete_value": true,
      "site": "00be069c",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "00be068c",
      "incomplete_value": false,
      "site": "00be069c",
      "value": [
        "leaf",
        "const:c:8"
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
      "definition_site": "00be0694",
      "incomplete_value": false,
      "site": "00be069c",
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
      "unmatched:00be0668",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00be0670",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00be07d8"
      ]
    ],
    [
      "unmatched:00be0678",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00be07d8"
      ]
    ]
  ],
  "added": [
    [
      "00be0704",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00be070c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00be07d8"
      ]
    ],
    [
      "00be0714",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00be07d8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be069c ["INT_ADD", "register:40f0:8", ["const:be069c:8", "const:4:8"]]
- 00be069c ["CALL", null, ["callee:00c5af10:8"]]
+ 00be0738 ["INT_ADD", "register:40f0:8", ["const:be0738:8", "const:4:8"]]
+ 00be0738 ["CALL", null, ["callee:00c5af10:8"]]
- 00be06b0 ["INT_ADD", "register:40f0:8", ["const:be06b0:8", "const:4:8"]]
- 00be06b0 ["CALL", null, ["callee:00c5ab60:8"]]
+ 00be074c ["INT_ADD", "register:40f0:8", ["const:be074c:8", "const:4:8"]]
+ 00be074c ["CALL", null, ["callee:00c5ab60:8"]]
- 00be06d8 ["INT_ADD", "register:40f0:8", ["const:be06d8:8", "const:4:8"]]
- 00be06d8 ["CALL", null, ["callee:00497874:8"]]
+ 00be0774 ["INT_ADD", "register:40f0:8", ["const:be0774:8", "const:4:8"]]
+ 00be0774 ["CALL", null, ["callee:00497874:8"]]
~~~


<a id="compare-9d75c329e9c8c037980e09c2198b2c9d"></a>

### [`00be0a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be0/00be0a10.md) → [`00be0aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be0/00be0aac.md) _ZNK8firebase4auth4User26ReauthenticateWithProviderEPNS0_21FederatedAuthProviderE

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c5abe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5abe0.md) [`00c5ac70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ac70.md) [`00c5b000`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b000.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c5acb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acb0.md) [`00c5ad40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad40.md) [`00c5b0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b0d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00be0a4c",
      "incomplete_value": false,
      "site": "00be0a50",
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
            "const:bc2:8"
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
      "00be0ae8",
      "PARAM",
      [
        "storage",
        "002b5bc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be0ae8",
      "PARAM",
      [
        "storage",
        "002b5c02",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be0a50 ["INT_ADD", "register:40f0:8", ["const:be0a50:8", "const:4:8"]]
- 00be0a50 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00be0aec ["INT_ADD", "register:40f0:8", ["const:be0aec:8", "const:4:8"]]
+ 00be0aec ["CALL", null, ["callee:00c5b0d0:8"]]
- 00be0a4c ["COPY", "tmp:0:8", ["const:bc2:8"]]
- 00be0a4c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00be0a4c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00be0a4c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00be0ae8 ["COPY", "tmp:0:8", ["const:c02:8"]]
+ 00be0ae8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00be0ae8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00be0ae8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00be0a5c ["INT_ADD", "register:40f0:8", ["const:be0a5c:8", "const:4:8"]]
- 00be0a5c ["CALL", null, ["callee:00c5ad40:8"]]
+ 00be0af8 ["INT_ADD", "register:40f0:8", ["const:be0af8:8", "const:4:8"]]
+ 00be0af8 ["CALL", null, ["callee:00c5ad40:8"]]
~~~


<a id="compare-4936a944d19cb1dd9ca21bc60a5ecb3e"></a>

### [`00be10a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be10a4.md) → [`00be1140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1140.md) _ZNK8firebase4auth4User8metadataEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00497834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00497/00497834.md) [`0058f59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f59c.md) [`00c5af60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5af60.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`0058f5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f5dc.md) [`00c5b030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b030.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md)

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
    "old": {
      "definition_site": "00be10d8",
      "incomplete_value": true,
      "site": "00be10e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:da0:8"
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
    "old": {
      "definition_site": "00be1100",
      "incomplete_value": true,
      "site": "00be110c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00be1174",
      "READ",
      [
        "storage",
        "01126da0",
        null,
        "undefined8"
      ]
    ],
    [
      "00be119c",
      "READ",
      [
        "storage",
        "01126e10",
        null,
        "undefined8"
      ]
    ],
    [
      "00be11ac",
      "READ",
      [
        "storage",
        "01126e18",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00be1174",
      "READ",
      [
        "storage",
        "01126ea0",
        null,
        "undefined8"
      ]
    ],
    [
      "00be119c",
      "READ",
      [
        "storage",
        "01126f10",
        null,
        "undefined8"
      ]
    ],
    [
      "00be11ac",
      "READ",
      [
        "storage",
        "01126f18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be10e4 ["INT_ADD", "register:40f0:8", ["const:be10e4:8", "const:4:8"]]
- 00be10e4 ["CALL", null, ["callee:00497874:8"]]
+ 00be1180 ["INT_ADD", "register:40f0:8", ["const:be1180:8", "const:4:8"]]
+ 00be1180 ["CALL", null, ["callee:00497874:8"]]
- 00be110c ["INT_ADD", "register:40f0:8", ["const:be110c:8", "const:4:8"]]
- 00be110c ["CALL", null, ["callee:0058f5dc:8"]]
+ 00be11a8 ["INT_ADD", "register:40f0:8", ["const:be11a8:8", "const:4:8"]]
+ 00be11a8 ["CALL", null, ["callee:0058f5dc:8"]]
- 00be10cc ["INT_ADD", "register:40f0:8", ["const:be10cc:8", "const:4:8"]]
- 00be10cc ["CALL", null, ["callee:00c5b150:8"]]
+ 00be1168 ["INT_ADD", "register:40f0:8", ["const:be1168:8", "const:4:8"]]
+ 00be1168 ["CALL", null, ["callee:00c5b150:8"]]
~~~


<a id="compare-09ec0a526dc3b58283969be52af10648"></a>

### [`00be1230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1230.md) → [`00be12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be12cc.md) _ZN8firebase4auth22AndroidWrappedUserInfoD0Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c5b080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5b/00c5b080.md) [`00c5db80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5b150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5b/00c5b150.md) [`00c5dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00be124c",
      "incomplete_value": true,
      "site": "00be1250",
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
      "00be12e0",
      "READ",
      [
        "storage",
        "00c9ba60",
        null,
        "pointer"
      ]
    ],
    [
      "00be12ec",
      "DATA",
      [
        "storage",
        "00c92910",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00be12e0",
      "READ",
      [
        "storage",
        "00c9bb30",
        null,
        "pointer"
      ]
    ],
    [
      "00be12ec",
      "DATA",
      [
        "storage",
        "00c929e0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be1244 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a60:8"]]
- 00be1244 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00be12e0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b30:8"]]
+ 00be12e0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00be1258 ["INT_ADD", "register:40f0:8", ["const:be1258:8", "const:4:8"]]
- 00be1258 ["CALL", null, ["callee:00c5b150:8"]]
+ 00be12f4 ["INT_ADD", "register:40f0:8", ["const:be12f4:8", "const:4:8"]]
+ 00be12f4 ["CALL", null, ["callee:00c5b150:8"]]
- 00be1268 ["COPY", "register:0:8", ["register:4040:8"]]
- 00be1268 ["INT_ADD", "register:40f0:8", ["const:be1268:8", "const:4:8"]]
- 00be1268 ["CALLIND", null, ["register:0:8"]]
+ 00be1304 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00be1304 ["INT_ADD", "register:40f0:8", ["const:be1304:8", "const:4:8"]]
+ 00be1304 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9dce5c56f818621cfe162f3d98845b89"></a>

### [`00be12ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be12ac.md) → [`00be1348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1348.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalIvZNS0_16CompleteInternalINSt6__ndk112basic_stringIcNS3_11char_traitsIcEENS3_9allo

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de90.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5df60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df60.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00be1310",
      "incomplete_value": false,
      "site": "00be1314",
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
            "const:e4:8"
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
      "00be13ac",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be13ac",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be1314 ["INT_ADD", "register:40f0:8", ["const:be1314:8", "const:4:8"]]
- 00be1314 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00be13b0 ["INT_ADD", "register:40f0:8", ["const:be13b0:8", "const:4:8"]]
+ 00be13b0 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00be12d8 ["INT_ADD", "register:40f0:8", ["const:be12d8:8", "const:4:8"]]
- 00be12d8 ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1374 ["INT_ADD", "register:40f0:8", ["const:be1374:8", "const:4:8"]]
+ 00be1374 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be12e4 ["INT_ADD", "register:40f0:8", ["const:be12e4:8", "const:4:8"]]
- 00be12e4 ["CALL", null, ["callee:00c5af50:8"]]
+ 00be1380 ["INT_ADD", "register:40f0:8", ["const:be1380:8", "const:4:8"]]
+ 00be1380 ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-f8d56f95bc0df5e5f644b8db24bec0c0"></a>

### [`00be1488`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be1/00be1488.md) → [`00be1524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be1/00be1524.md) _ZN8firebase26ReferenceCountedFutureImpl16CompleteInternalINSt6__ndk112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEZNS_4auth14Fut

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00c5de80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5de80.md) · 呼出先 10件 [`00c5aa00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa00.md) [`00c5aa10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5aa10.md) [`00c5ae30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae30.md) [`00c5ae50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae50.md) [`00c5ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5ae60.md)
- 新版 呼出元 1件 [`00c5df50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5df50.md) · 呼出先 10件 [`00c5aad0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aad0.md) [`00c5aae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aae0.md) [`00c5af00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af00.md) [`00c5af20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af20.md) [`00c5af30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5af30.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00be14f4",
      "incomplete_value": false,
      "site": "00be14f8",
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
            "const:e4:8"
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
      "00be1590",
      "PARAM",
      [
        "storage",
        "002a70e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00be1590",
      "PARAM",
      [
        "storage",
        "002a7088",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be14f8 ["INT_ADD", "register:40f0:8", ["const:be14f8:8", "const:4:8"]]
- 00be14f8 ["CALL", null, ["callee:00c5b0d0:8"]]
+ 00be1594 ["INT_ADD", "register:40f0:8", ["const:be1594:8", "const:4:8"]]
+ 00be1594 ["CALL", null, ["callee:00c5b0d0:8"]]
- 00be14bc ["INT_ADD", "register:40f0:8", ["const:be14bc:8", "const:4:8"]]
- 00be14bc ["CALL", null, ["callee:00c5aad0:8"]]
+ 00be1558 ["INT_ADD", "register:40f0:8", ["const:be1558:8", "const:4:8"]]
+ 00be1558 ["CALL", null, ["callee:00c5aad0:8"]]
- 00be14c8 ["INT_ADD", "register:40f0:8", ["const:be14c8:8", "const:4:8"]]
- 00be14c8 ["CALL", null, ["callee:00c5af50:8"]]
+ 00be1564 ["INT_ADD", "register:40f0:8", ["const:be1564:8", "const:4:8"]]
+ 00be1564 ["CALL", null, ["callee:00c5af50:8"]]
~~~


<a id="compare-daf2f7b520217cc1a4106bd49edf6a7f"></a>

### [`00be2124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00be2/00be2124.md) → [`00be21c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00be2/00be21c0.md) _ZN8firebase4auth17UserInfoInterfaceD2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00c5db70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db70.md) [`00c5db80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5db80.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`00c5dc40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc40.md) [`00c5dc50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5d/00c5dc50.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.62% / 新版 93.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00be2140",
      "incomplete_value": true,
      "site": "00be2144",
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
      "00be21d4",
      "READ",
      [
        "storage",
        "00c9b9c8",
        null,
        "pointer"
      ]
    ],
    [
      "00be21e0",
      "DATA",
      [
        "storage",
        "00c92978",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00be21d4",
      "READ",
      [
        "storage",
        "00c9ba98",
        null,
        "pointer"
      ]
    ],
    [
      "00be21e0",
      "DATA",
      [
        "storage",
        "00c92a48",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00be2138 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:9c8:8"]]
- 00be2138 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 00be21d4 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a98:8"]]
+ 00be21d4 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 00be2184 ["INT_ADD", "register:40f0:8", ["const:be2184:8", "const:4:8"]]
- 00be2184 ["CALL", null, ["callee:00c57f80:8"]]
+ 00be2220 ["INT_ADD", "register:40f0:8", ["const:be2220:8", "const:4:8"]]
+ 00be2220 ["CALL", null, ["callee:00c57f80:8"]]
- 00be2194 ["INT_ADD", "register:40f0:8", ["const:be2194:8", "const:4:8"]]
- 00be2194 ["CALL", null, ["callee:00c57f80:8"]]
+ 00be2230 ["INT_ADD", "register:40f0:8", ["const:be2230:8", "const:4:8"]]
+ 00be2230 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-7a2d90868f0c498cc23aa0bd01205bbe"></a>

### [`00bef954`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00bef954.md) → [`00bef9f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00bef9f0.md) _ZNSt6__ndk16chrono12system_clock3nowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c58580`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58580.md) · 呼出先 3件 [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c59700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59700.md)
- 新版 呼出元 1件 [`00c58650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58650.md) · 呼出先 3件 [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c597d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bef9c0",
      "incomplete_value": false,
      "site": "00bef9c4",
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
            "const:9dd:8"
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
      "00befa5c",
      "PARAM",
      [
        "storage",
        "002b49dd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00befa5c",
      "PARAM",
      [
        "storage",
        "002b4a0e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bef9c4 ["INT_ADD", "register:40f0:8", ["const:bef9c4:8", "const:4:8"]]
- 00bef9c4 ["CALL", null, ["callee:00c581f0:8"]]
+ 00befa60 ["INT_ADD", "register:40f0:8", ["const:befa60:8", "const:4:8"]]
+ 00befa60 ["CALL", null, ["callee:00c581f0:8"]]
- 00bef96c ["INT_ADD", "register:40f0:8", ["const:bef96c:8", "const:4:8"]]
- 00bef96c ["CALL", null, ["callee:00c597d0:8"]]
+ 00befa08 ["INT_ADD", "register:40f0:8", ["const:befa08:8", "const:4:8"]]
+ 00befa08 ["CALL", null, ["callee:00c597d0:8"]]
- 00bef9b4 ["INT_ADD", "register:40f0:8", ["const:bef9b4:8", "const:4:8"]]
- 00bef9b4 ["CALL", null, ["callee:00c58190:8"]]
+ 00befa50 ["INT_ADD", "register:40f0:8", ["const:befa50:8", "const:4:8"]]
+ 00befa50 ["CALL", null, ["callee:00c58190:8"]]
~~~


<a id="compare-629e6170cc24c4cd8c8c04c3fbdbf6e2"></a>

### [`00befa08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befa08.md) → [`00befaa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befaa4.md) _ZNSt6__ndk16chrono12steady_clock3nowEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c57ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ec0.md) · 呼出先 3件 [`00c580c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c580c0.md) [`00c58120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58120.md) [`00c59700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c59/00c59700.md)
- 新版 呼出元 1件 [`00c57f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f90.md) · 呼出先 3件 [`00c58190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58190.md) [`00c581f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581f0.md) [`00c597d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c59/00c597d0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00befa54",
      "incomplete_value": false,
      "site": "00befa58",
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
            "const:19f:8"
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
      "00befaf0",
      "PARAM",
      [
        "storage",
        "002a519f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00befaf0",
      "PARAM",
      [
        "storage",
        "002a5143",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00befa58 ["INT_ADD", "register:40f0:8", ["const:befa58:8", "const:4:8"]]
- 00befa58 ["CALL", null, ["callee:00c581f0:8"]]
+ 00befaf4 ["INT_ADD", "register:40f0:8", ["const:befaf4:8", "const:4:8"]]
+ 00befaf4 ["CALL", null, ["callee:00c581f0:8"]]
- 00befa20 ["INT_ADD", "register:40f0:8", ["const:befa20:8", "const:4:8"]]
- 00befa20 ["CALL", null, ["callee:00c597d0:8"]]
+ 00befabc ["INT_ADD", "register:40f0:8", ["const:befabc:8", "const:4:8"]]
+ 00befabc ["CALL", null, ["callee:00c597d0:8"]]
- 00befa48 ["INT_ADD", "register:40f0:8", ["const:befa48:8", "const:4:8"]]
- 00befa48 ["CALL", null, ["callee:00c58190:8"]]
+ 00befae4 ["INT_ADD", "register:40f0:8", ["const:befae4:8", "const:4:8"]]
+ 00befae4 ["CALL", null, ["callee:00c58190:8"]]
~~~


<a id="compare-67f9ab61d2706e7551f5fd7903552f69"></a>

### [`00befb0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befb0c.md) → [`00befba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befba8.md) _ZNSt16nested_exceptionC2Ev

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c5df40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5d/00c5df40.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c5e010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5e/00c5e010.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
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
    "old": {
      "definition_site": "00befb28",
      "incomplete_value": true,
      "site": "00befb2c",
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
      "00befbc0",
      "READ",
      [
        "storage",
        "00c9ba70",
        null,
        "pointer"
      ]
    ],
    [
      "00befbc8",
      "DATA",
      [
        "storage",
        "00c929d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00befbc0",
      "READ",
      [
        "storage",
        "00c9bb40",
        null,
        "pointer"
      ]
    ],
    [
      "00befbc8",
      "DATA",
      [
        "storage",
        "00c92aa8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00befb24 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a70:8"]]
- 00befb24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00befbc0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b40:8"]]
+ 00befbc0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00befb30 ["INT_ADD", "register:40f0:8", ["const:befb30:8", "const:4:8"]]
- 00befb30 ["CALL", null, ["callee:00c5e010:8"]]
+ 00befbcc ["INT_ADD", "register:40f0:8", ["const:befbcc:8", "const:4:8"]]
+ 00befbcc ["CALL", null, ["callee:00c5e010:8"]]
~~~


<a id="compare-1c0fe76272fdbc0365792cb3c068fc4a"></a>

### [`00befc28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befc28.md) → [`00befcc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befcc4.md) _ZNSt6__ndk112__next_primeEm

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5a820`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a820.md) · 呼出先 1件 [`00bf0348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0348.md)
- 新版 呼出元 1件 [`00c5a8f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8f0.md) · 呼出先 1件 [`00bf03e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf03e4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.90% / 新版 98.90%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bf0340",
      "incomplete_value": false,
      "site": "00bf0344",
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
            "const:290:8"
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
      "00befcf4",
      "READ",
      [
        "storage",
        "00310328",
        null,
        "undefined4"
      ]
    ],
    [
      "00befcf4",
      "READ",
      [
        "storage",
        "003102f8",
        null,
        "undefined4"
      ]
    ],
    [
      "00befd08",
      "READ",
      [
        "storage",
        "003102c8",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00befcf4",
      "READ",
      [
        "storage",
        "00310368",
        null,
        "undefined4"
      ]
    ],
    [
      "00befcf4",
      "READ",
      [
        "storage",
        "00310338",
        null,
        "undefined4"
      ]
    ],
    [
      "00befd08",
      "READ",
      [
        "storage",
        "00310308",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0344 ["INT_ADD", "register:40f0:8", ["const:bf0344:8", "const:4:8"]]
- 00bf0344 ["CALL", null, ["callee:00bf03e4:8"]]
+ 00bf03e0 ["INT_ADD", "register:40f0:8", ["const:bf03e0:8", "const:4:8"]]
+ 00bf03e0 ["CALL", null, ["callee:00bf03e4:8"]]
- 00befc40 ["COPY", "tmp:0:8", ["const:2c8:8"]]
- 00befc40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00befc40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00befc40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00befcdc ["COPY", "tmp:0:8", ["const:308:8"]]
+ 00befcdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00befcdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00befcdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00befcac ["COPY", "tmp:0:8", ["const:388:8"]]
- 00befcac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00befcac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00befcac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00befd48 ["COPY", "tmp:0:8", ["const:3c8:8"]]
+ 00befd48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00befd48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00befd48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5ad32616a5650eac8dbe47dd87081ed7"></a>

### [`00bf0348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf0348.md) → [`00bf03e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf03e4.md) FUN_00bf03e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00befc28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bef/00befc28.md) · 呼出先 4件 [`00bf039c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bf0/00bf039c.md) [`00c37d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37d5c.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 1件 [`00befcc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bef/00befcc4.md) · 呼出先 4件 [`00bf0438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0438.md) [`00c37df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37df8.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
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
    "old": {
      "definition_site": "00bf037c",
      "incomplete_value": true,
      "site": "00bf0384",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a78:8"
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
    "old": {
      "definition_site": "00bf0380",
      "incomplete_value": true,
      "site": "00bf0384",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a80:8"
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
      "00bf0418",
      "READ",
      [
        "storage",
        "00c9ba78",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0418",
      "PARAM",
      [
        "storage",
        "00c968b0",
        "std::overflow_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf041c",
      "READ",
      [
        "storage",
        "00c9ba80",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00bf0418",
      "READ",
      [
        "storage",
        "00c9bb48",
        null,
        "pointer"
      ]
    ],
    [
      "00bf0418",
      "PARAM",
      [
        "storage",
        "00c96980",
        "std::overflow_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00bf041c",
      "READ",
      [
        "storage",
        "00c9bb50",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00bf0384 ["INT_ADD", "register:40f0:8", ["const:bf0384:8", "const:4:8"]]
- 00bf0384 ["CALL", null, ["callee:00c57fe0:8"]]
+ 00bf0420 ["INT_ADD", "register:40f0:8", ["const:bf0420:8", "const:4:8"]]
+ 00bf0420 ["CALL", null, ["callee:00c57fe0:8"]]
- 00bf0360 ["INT_ADD", "register:40f0:8", ["const:bf0360:8", "const:4:8"]]
- 00bf0360 ["CALL", null, ["callee:00c57fc0:8"]]
+ 00bf03fc ["INT_ADD", "register:40f0:8", ["const:bf03fc:8", "const:4:8"]]
+ 00bf03fc ["CALL", null, ["callee:00c57fc0:8"]]
- 00bf036c ["INT_ADD", "register:40f0:8", ["const:bf036c:8", "const:4:8"]]
- 00bf036c ["CALL", null, ["callee:00bf0438:8"]]
+ 00bf0408 ["INT_ADD", "register:40f0:8", ["const:bf0408:8", "const:4:8"]]
+ 00bf0408 ["CALL", null, ["callee:00bf0438:8"]]
~~~


