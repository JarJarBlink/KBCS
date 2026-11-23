# v16.0.1 → v16.0.2 · 最優先の変更候補 (47)

[一覧の目次](README.md)

<a id="compare-06f8a5413603f8a69d1ef282ac67e74b"></a>

### [`00862980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00862/00862980.md) → [`008629d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/008629d8.md) FUN_008629d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008acd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acd54.md) · 呼出先 5件 [`00597ebc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ebc.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`008acdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acdac.md) · 呼出先 5件 [`00597efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597efc.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 85.06% / 新版 85.06%

優先判定に残った影響 `store_destination` 4件, `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00862a04",
      "incomplete_value": true,
      "site": "00862a04",
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
                "const:caa000:8"
              ],
              [
                "leaf",
                "const:48:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008629ac",
      "incomplete_value": true,
      "site": "008629ac",
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
                "const:ca9000:8"
              ],
              [
                "leaf",
                "const:f48:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_ZEXT",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00862a08",
      "incomplete_value": false,
      "site": "00862a08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:caa000:8"
          ],
          [
            "leaf",
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008629b0",
      "incomplete_value": false,
      "site": "008629b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca9000:8"
          ],
          [
            "leaf",
            "const:f48:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00862a0c",
      "incomplete_value": false,
      "site": "00862a0c",
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
                "const:caa000:8"
              ],
              [
                "leaf",
                "const:48:8"
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
      "definition_site": "008629b4",
      "incomplete_value": false,
      "site": "008629b4",
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
                "const:ca9000:8"
              ],
              [
                "leaf",
                "const:f48:8"
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
      "00862a04",
      "WRITE",
      [
        "storage",
        "0112183a",
        null,
        "undefined2"
      ]
    ],
    [
      "00862a08",
      "WRITE",
      [
        "storage",
        "00ca9f48",
        null,
        "undefined4"
      ]
    ],
    [
      "00862a0c",
      "WRITE",
      [
        "storage",
        "00ca9f50",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00862a04",
      "WRITE",
      [
        "storage",
        "0112193a",
        null,
        "undefined2"
      ]
    ],
    [
      "00862a08",
      "WRITE",
      [
        "storage",
        "00caa048",
        null,
        "undefined4"
      ]
    ],
    [
      "00862a0c",
      "WRITE",
      [
        "storage",
        "00caa050",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00862a0c ["COPY", "register:0:8", ["register:4040:8"]]
- 00862a0c ["INT_ADD", "register:40f0:8", ["const:862a0c:8", "const:4:8"]]
- 00862a0c ["CALLIND", null, ["register:0:8"]]
+ 00862a64 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00862a64 ["INT_ADD", "register:40f0:8", ["const:862a64:8", "const:4:8"]]
+ 00862a64 ["CALLIND", null, ["register:0:8"]]
- 00862ae0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00862ae0 ["INT_ADD", "register:40f0:8", ["const:862ae0:8", "const:4:8"]]
- 00862ae0 ["CALLIND", null, ["register:0:8"]]
+ 00862b38 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00862b38 ["INT_ADD", "register:40f0:8", ["const:862b38:8", "const:4:8"]]
+ 00862b38 ["CALLIND", null, ["register:0:8"]]
- 00862b24 ["COPY", "register:0:8", ["register:4040:8"]]
- 00862b24 ["INT_ADD", "register:40f0:8", ["const:862b24:8", "const:4:8"]]
- 00862b24 ["CALLIND", null, ["register:0:8"]]
+ 00862b7c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00862b7c ["INT_ADD", "register:40f0:8", ["const:862b7c:8", "const:4:8"]]
+ 00862b7c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b45797046a65e26ff61e9a6ff16fbccb"></a>

### [`00862c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00862/00862c50.md) → [`00862ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00862/00862ca8.md) FUN_00862ca8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 13件 [`0067d4d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067d/0067d4d0.md) [`007562a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00756/007562a4.md) [`0078c21c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078c/0078c21c.md) [`007b0a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0a18.md) [`008378d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00837/008378d8.md) · 呼出先 13件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md)
- 新版 呼出元 13件 [`0067d510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067d/0067d510.md) [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`0078c274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c274.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`00837930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00837/00837930.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value

命令の説明率　旧版 79.68% / 新版 79.68%

優先判定に残った影響 `branch_value` 5件, `call_argument_candidate` 26件, `store_condition` 5件, `store_destination` 33件, `store_value` 18件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00862d14",
      "incomplete_value": true,
      "site": "00862d20",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00862cbc",
      "incomplete_value": true,
      "site": "00862cc8",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00862d10",
      "incomplete_value": true,
      "site": "00862d28",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:224:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00862cb8",
      "incomplete_value": true,
      "site": "00862cd0",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:1f5:8"
              ]
            ]
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
      "definition_site": "00862d2c",
      "incomplete_value": true,
      "site": "00862d44",
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00862cd4",
      "incomplete_value": true,
      "site": "00862cec",
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
                "const:2a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00862cdc",
      "PARAM",
      [
        "storage",
        "00ca8d50",
        null,
        null
      ]
    ],
    [
      "00862cf4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "00862d10",
      "READ",
      [
        "storage",
        "002a91f5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00862cdc",
      "PARAM",
      [
        "storage",
        "00ca8e50",
        null,
        null
      ]
    ],
    [
      "00862cf4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00862d10",
      "READ",
      [
        "storage",
        "002a9224",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00862c94 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00862cec ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00862d40 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00862d98 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00862d44 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00862d44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00862d44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00862d44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00862d9c ["COPY", "tmp:0:8", ["const:38:8"]]
+ 00862d9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00862d9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00862d9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f3b566966895dfba2c806b71c367de8b"></a>

### [`008636dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00863/008636dc.md) → [`00863734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00863/00863734.md) FUN_00863734

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`006b0238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b0/006b0238.md) [`0073b9fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b9fc.md) [`008d0cb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d0/008d0cb8.md) [`008e0c30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008e0/008e0c30.md) [`00908314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00908/00908314.md) · 呼出先 13件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 7件 [`006b0290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b0/006b0290.md) [`0073ba54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073ba54.md) [`008d0d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d0/008d0d0c.md) [`008e0c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008e0/008e0c84.md) [`00908368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00908/00908368.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value

命令の説明率　旧版 82.01% / 新版 82.01%

優先判定に残った影響 `branch_value` 5件, `call_argument_candidate` 22件, `store_condition` 5件, `store_destination` 24件, `store_value` 14件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086379c",
      "incomplete_value": true,
      "site": "008637a8",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00863744",
      "incomplete_value": true,
      "site": "00863750",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00863798",
      "incomplete_value": true,
      "site": "008637b0",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:224:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00863740",
      "incomplete_value": true,
      "site": "00863758",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:1f5:8"
              ]
            ]
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
      "definition_site": "008637b4",
      "incomplete_value": true,
      "site": "008637cc",
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086375c",
      "incomplete_value": true,
      "site": "00863774",
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
                "const:2a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00863760",
      "PARAM",
      [
        "storage",
        "00ca8d50",
        null,
        null
      ]
    ],
    [
      "0086377c",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "00863798",
      "READ",
      [
        "storage",
        "002a91f5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00863760",
      "PARAM",
      [
        "storage",
        "00ca8e50",
        null,
        null
      ]
    ],
    [
      "0086377c",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00863798",
      "READ",
      [
        "storage",
        "002a9224",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086371c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00863774 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 008637c8 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00863820 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 008637cc ["COPY", "tmp:0:8", ["const:f38:8"]]
- 008637cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008637cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008637cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00863824 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 00863824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00863824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00863824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f6846d16c3f171d1ee8218f691fc98ed"></a>

### [`00864160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864160.md) → [`008641b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/008641b8.md) FUN_008641b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 11件 [`006714ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00671/006714ac.md) [`00754910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00754/00754910.md) [`007562a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00756/007562a4.md) [`0078c21c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078c/0078c21c.md) [`007b0a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0a18.md) · 呼出先 9件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00744208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744208.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 11件 [`006714ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00671/006714ec.md) [`00754968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00754/00754968.md) [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`0078c274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078c/0078c274.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) · 呼出先 9件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 63.55% / 新版 63.55%

優先判定に残った影響 `call_argument_candidate` 18件, `store_destination` 21件, `store_value` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00864208",
      "incomplete_value": true,
      "site": "00864238",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:23d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008641b0",
      "incomplete_value": true,
      "site": "008641e0",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:20e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086423c",
      "incomplete_value": true,
      "site": "0086423c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5f9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008641e4",
      "incomplete_value": true,
      "site": "008641e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:646:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00864240",
      "incomplete_value": true,
      "site": "00864240",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008641e8",
      "incomplete_value": true,
      "site": "008641e8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5:8"
              ]
            ]
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
      "008641f4",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "00864208",
      "READ",
      [
        "storage",
        "002a920e",
        null,
        "string"
      ]
    ],
    [
      "00864230",
      "READ",
      [
        "storage",
        "002a0646",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008641f4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00864208",
      "READ",
      [
        "storage",
        "002a923d",
        null,
        "string"
      ]
    ],
    [
      "00864230",
      "READ",
      [
        "storage",
        "002a05f9",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0086418c ["INT_ADD", "register:40f0:8", ["const:86418c:8", "const:4:8"]]
- 0086418c ["CALL", null, ["callee:00744260:8"]]
+ 008641e4 ["INT_ADD", "register:40f0:8", ["const:8641e4:8", "const:4:8"]]
+ 008641e4 ["CALL", null, ["callee:00744260:8"]]
- 0086423c ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 00864294 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00864240 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00864240 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00864240 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00864240 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00864298 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 00864298 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00864298 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00864298 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-95a1a6567d226c618aa51a5d7aa8baef"></a>

### [`00864538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864538.md) → [`00864590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864590.md) FUN_00864590

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 10件 [`0067d4d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067d/0067d4d0.md) [`006b0238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b0/006b0238.md) [`0073b9fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073b/0073b9fc.md) [`007b0a18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007b0/007b0a18.md) [`008378d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00837/008378d8.md) · 呼出先 9件 [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00633374`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00633/00633374.md) [`00744208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744208.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 10件 [`0067d510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067d/0067d510.md) [`006b0290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b0/006b0290.md) [`0073ba54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073b/0073ba54.md) [`007b0a70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007b0/007b0a70.md) [`00837930`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00837/00837930.md) · 呼出先 9件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006333b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00633/006333b4.md) [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 64.49% / 新版 64.49%

優先判定に残った影響 `call_argument_candidate` 17件, `store_destination` 21件, `store_value` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008645e0",
      "incomplete_value": true,
      "site": "00864610",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:23d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00864588",
      "incomplete_value": true,
      "site": "008645b8",
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
                "const:2a9000:8"
              ],
              [
                "leaf",
                "const:20e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00864614",
      "incomplete_value": true,
      "site": "00864614",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5f9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008645bc",
      "incomplete_value": true,
      "site": "008645bc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:646:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00864618",
      "incomplete_value": true,
      "site": "00864618",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008645c0",
      "incomplete_value": true,
      "site": "008645c0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:5:8"
              ]
            ]
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
      "008645cc",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "008645e0",
      "READ",
      [
        "storage",
        "002a920e",
        null,
        "string"
      ]
    ],
    [
      "00864608",
      "READ",
      [
        "storage",
        "002a0646",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008645cc",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "008645e0",
      "READ",
      [
        "storage",
        "002a923d",
        null,
        "string"
      ]
    ],
    [
      "00864608",
      "READ",
      [
        "storage",
        "002a05f9",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00864564 ["INT_ADD", "register:40f0:8", ["const:864564:8", "const:4:8"]]
- 00864564 ["CALL", null, ["callee:00744260:8"]]
+ 008645bc ["INT_ADD", "register:40f0:8", ["const:8645bc:8", "const:4:8"]]
+ 008645bc ["CALL", null, ["callee:00744260:8"]]
- 00864614 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 0086466c ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 00864618 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00864618 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00864618 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00864618 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00864670 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 00864670 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00864670 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00864670 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-efa66f0c461e4acd5f01007cc0065007"></a>

### [`00864910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864910.md) → [`00864968`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864968.md) FUN_00864968

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0048dd40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048dd40.md) [`0048e900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e900.md) · 呼出先 15件 [`0046d6ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d6ac.md) [`0048e0b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e0b8.md) [`0048e194`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e194.md) [`00493980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493980.md) [`00493a48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493a48.md)
- 新版 呼出元 2件 [`0048dd80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dd80.md) [`0048e940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e940.md) · 呼出先 15件 [`0046d6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d6ec.md) [`0048e0f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e0f8.md) [`0048e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e1d4.md) [`004939c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939c0.md) [`00493a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493a88.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.47% / 新版 98.47%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00864aec",
      "incomplete_value": false,
      "site": "00864b00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:735:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00864a94",
      "incomplete_value": false,
      "site": "00864aa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2c8000:8"
          ],
          [
            "leaf",
            "const:6f5:8"
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
      "008649a0",
      "READ",
      [
        "storage",
        "002bb253",
        null,
        "string"
      ]
    ],
    [
      "008649b0",
      "READ",
      [
        "storage",
        "002bb25a",
        null,
        "string"
      ]
    ],
    [
      "00864aec",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "008649a0",
      "READ",
      [
        "storage",
        "002bb1ff",
        null,
        "string"
      ]
    ],
    [
      "008649b0",
      "READ",
      [
        "storage",
        "002bb206",
        null,
        "string"
      ]
    ],
    [
      "00864aec",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00864aa8 ["INT_ADD", "register:40f0:8", ["const:864aa8:8", "const:4:8"]]
- 00864aa8 ["CALL", null, ["callee:00494cbc:8"]]
+ 00864b00 ["INT_ADD", "register:40f0:8", ["const:864b00:8", "const:4:8"]]
+ 00864b00 ["CALL", null, ["callee:00494cbc:8"]]
- 00864b00 ["INT_ADD", "register:40f0:8", ["const:864b00:8", "const:4:8"]]
- 00864b00 ["CALL", null, ["callee:00c57f80:8"]]
+ 00864b58 ["INT_ADD", "register:40f0:8", ["const:864b58:8", "const:4:8"]]
+ 00864b58 ["CALL", null, ["callee:00c57f80:8"]]
- 0086493c ["COPY", "tmp:0:8", ["const:253:8"]]
- 0086493c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086493c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086493c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00864994 ["COPY", "tmp:0:8", ["const:1ff:8"]]
+ 00864994 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00864994 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00864994 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cf3f1a3b427992a65e4e5872c2eb2a04"></a>

### [`00864ce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00864/00864ce0.md) → [`00864d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/00864d38.md) FUN_00864d38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) [`008a54b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a5/008a54b4.md) · 呼出先 12件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`00492ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492ccc.md) [`00564588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00564/00564588.md)
- 新版 呼出元 2件 [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) [`008a550c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a5/008a550c.md) · 呼出先 12件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d0c.md) [`005645c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00564/005645c8.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00864ed8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00864e80",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00864f00",
      "incomplete_value": false,
      "site": "00864f0c",
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
            "const:10f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00864ea8",
      "incomplete_value": false,
      "site": "00864eb4",
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
            "const:16b:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00864f2c",
      "incomplete_value": false,
      "site": "00864f34",
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
            "const:126:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00864ed4",
      "incomplete_value": false,
      "site": "00864edc",
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
            "const:182:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00864dac",
      "PARAM",
      [
        "storage",
        "002a648c",
        null,
        null
      ]
    ],
    [
      "00864dbc",
      "PARAM",
      [
        "storage",
        "002a648c",
        null,
        null
      ]
    ],
    [
      "00864ed8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "00864dac",
      "PARAM",
      [
        "storage",
        "002a6430",
        null,
        null
      ]
    ],
    [
      "00864dbc",
      "PARAM",
      [
        "storage",
        "002a6430",
        null,
        null
      ]
    ],
    [
      "00864ed8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00864e5c ["INT_ADD", "register:40f0:8", ["const:864e5c:8", "const:4:8"]]
- 00864e5c ["CALL", null, ["callee:00c57f80:8"]]
+ 00864eb4 ["INT_ADD", "register:40f0:8", ["const:864eb4:8", "const:4:8"]]
+ 00864eb4 ["CALL", null, ["callee:00c57f80:8"]]
- 00864e80 ["INT_ADD", "register:40f0:8", ["const:864e80:8", "const:4:8"]]
- 00864e80 ["CALL", null, ["ram:48ccf8:8"]]
+ 00864ed8 ["INT_ADD", "register:40f0:8", ["const:864ed8:8", "const:4:8"]]
+ 00864ed8 ["CALL", null, ["ram:48cd38:8"]]
- 00864eb4 ["INT_ADD", "register:40f0:8", ["const:864eb4:8", "const:4:8"]]
- 00864eb4 ["CALL", null, ["callee:00c58030:8"]]
+ 00864f0c ["INT_ADD", "register:40f0:8", ["const:864f0c:8", "const:4:8"]]
+ 00864f0c ["CALL", null, ["callee:00c58030:8"]]
~~~


<a id="compare-48769dac08dab02526d5ddb35fff7090"></a>

### [`00865110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865110.md) → [`00865168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865168.md) FUN_00865168

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`008a69c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a69c4.md) [`008a6c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a6/008a6c2c.md) [`008a75d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a75d0.md) [`008a7758`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008a7/008a7758.md) · 呼出先 14件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md)
- 新版 呼出元 4件 [`008a6a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6a1c.md) [`008a6c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a6/008a6c84.md) [`008a7628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a7628.md) [`008a77b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a7/008a77b0.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.29% / 新版 97.29%

優先判定に残った影響 `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008652c8",
      "incomplete_value": true,
      "site": "008652c8",
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
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00865270",
      "incomplete_value": true,
      "site": "00865270",
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
            "const:a60:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00865388",
      "incomplete_value": false,
      "site": "00865388",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00865330",
      "incomplete_value": false,
      "site": "00865330",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:ae0:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00865264",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086520c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00865264",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0086526c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008652c8",
      "DATA",
      [
        "storage",
        "00c7fa60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00865264",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0086526c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008652c8",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086520c ["INT_ADD", "register:40f0:8", ["const:86520c:8", "const:4:8"]]
- 0086520c ["CALL", null, ["ram:48ccf8:8"]]
+ 00865264 ["INT_ADD", "register:40f0:8", ["const:865264:8", "const:4:8"]]
+ 00865264 ["CALL", null, ["ram:48cd38:8"]]
- 00865214 ["INT_ADD", "register:40f0:8", ["const:865214:8", "const:4:8"]]
- 00865214 ["CALL", null, ["ram:48ccf8:8"]]
+ 0086526c ["INT_ADD", "register:40f0:8", ["const:86526c:8", "const:4:8"]]
+ 0086526c ["CALL", null, ["ram:48cd38:8"]]
- 0086526c ["COPY", "tmp:0:8", ["const:a60:8"]]
- 0086526c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086526c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086526c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008652c4 ["COPY", "tmp:0:8", ["const:b30:8"]]
+ 008652c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008652c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008652c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1f3b320b3095000d60d4c34a2f5ef5fe"></a>

### [`008656a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/008656a8.md) → [`00865700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865700.md) FUN_00865700

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`00a8e5b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a8e/00a8e5b4.md) · 呼出先 13件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00727d1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00727/00727d1c.md) [`0086588c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/0086588c.md) [`00865950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865950.md)
- 新版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) · 呼出先 13件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md) [`008658e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008658e4.md) [`008659a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008659a8.md)

変更の種類 comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008657b0",
      "incomplete_value": false,
      "site": "008657b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:240:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00865758",
      "incomplete_value": false,
      "site": "00865758",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c80000:8"
          ],
          [
            "leaf",
            "const:170:8"
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
      "0086577c",
      "READ",
      [
        "storage",
        "002a3625",
        null,
        "string"
      ]
    ],
    [
      "008657b0",
      "DATA",
      [
        "storage",
        "00c80170",
        null,
        "undefined *"
      ]
    ],
    [
      "00865804",
      "READ",
      [
        "storage",
        "00c80190",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0086577c",
      "READ",
      [
        "storage",
        "002a35d8",
        null,
        "string"
      ]
    ],
    [
      "008657b0",
      "DATA",
      [
        "storage",
        "00c80240",
        null,
        "undefined *"
      ]
    ],
    [
      "00865804",
      "READ",
      [
        "storage",
        "00c80260",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008657b0 ["COPY", "register:0:8", ["register:4040:8"]]
- 008657b0 ["INT_ADD", "register:40f0:8", ["const:8657b0:8", "const:4:8"]]
- 008657b0 ["CALLIND", null, ["register:0:8"]]
+ 00865808 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00865808 ["INT_ADD", "register:40f0:8", ["const:865808:8", "const:4:8"]]
+ 00865808 ["CALLIND", null, ["register:0:8"]]
- 008656d4 ["INT_ADD", "register:40f0:8", ["const:8656d4:8", "const:4:8"]]
- 008656d4 ["CALL", null, ["callee:008bb584:8"]]
+ 0086572c ["INT_ADD", "register:40f0:8", ["const:86572c:8", "const:4:8"]]
+ 0086572c ["CALL", null, ["callee:008bb584:8"]]
- 008656dc ["INT_ADD", "register:40f0:8", ["const:8656dc:8", "const:4:8"]]
- 008656dc ["CALL", null, ["callee:00727d74:8"]]
+ 00865734 ["INT_ADD", "register:40f0:8", ["const:865734:8", "const:4:8"]]
+ 00865734 ["CALL", null, ["callee:00727d74:8"]]
~~~


<a id="compare-58cc067fe52d9d079d27f8e4428bbf12"></a>

### [`00865950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/00865950.md) → [`008659a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/008659a8.md) FUN_008659a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008656a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00865/008656a8.md) · 呼出先 6件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00865700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865700.md) · 呼出先 6件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008659f0",
      "incomplete_value": true,
      "site": "00865a08",
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
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00865998",
      "incomplete_value": true,
      "site": "008659b0",
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
                "const:cb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008659fc",
      "incomplete_value": true,
      "site": "00865a0c",
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
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:129:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008659a4",
      "incomplete_value": true,
      "site": "008659b4",
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
                "const:2b1000:8"
              ],
              [
                "leaf",
                "const:185:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008659fc",
      "incomplete_value": true,
      "site": "00865a0c",
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
      "definition_site": "008659a4",
      "incomplete_value": true,
      "site": "008659b4",
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
      "008659f0",
      "READ",
      [
        "storage",
        "002c2cb0",
        null,
        null
      ]
    ],
    [
      "008659fc",
      "READ",
      [
        "storage",
        "002b1185",
        null,
        "string"
      ]
    ],
    [
      "008659fc",
      "READ",
      [
        "storage",
        "002b1195",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "008659f0",
      "READ",
      [
        "storage",
        "002c2cf0",
        null,
        null
      ]
    ],
    [
      "008659fc",
      "READ",
      [
        "storage",
        "002b1129",
        null,
        "string"
      ]
    ],
    [
      "008659fc",
      "READ",
      [
        "storage",
        "002b1139",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00865978 ["INT_ADD", "register:40f0:8", ["const:865978:8", "const:4:8"]]
- 00865978 ["CALL", null, ["callee:0048cec4:8"]]
+ 008659d0 ["INT_ADD", "register:40f0:8", ["const:8659d0:8", "const:4:8"]]
+ 008659d0 ["CALL", null, ["callee:0048cec4:8"]]
- 00865988 ["INT_ADD", "register:40f0:8", ["const:865988:8", "const:4:8"]]
- 00865988 ["CALL", null, ["callee:00c57f60:8"]]
+ 008659e0 ["INT_ADD", "register:40f0:8", ["const:8659e0:8", "const:4:8"]]
+ 008659e0 ["CALL", null, ["callee:00c57f60:8"]]
- 00865998 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cb0:8"]]
- 00865998 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00865998 ["COPY", "register:5010:8", ["const:0:8"]]
- 00865998 ["COPY", "register:5018:8", ["const:0:8"]]
+ 008659f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:cf0:8"]]
+ 008659f0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 008659f0 ["COPY", "register:5010:8", ["const:0:8"]]
+ 008659f0 ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-3ad582011d1313ad8c0135ab029cff49"></a>

### [`00869a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869a74.md) → [`00869acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869acc.md) FUN_00869acc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0083a120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083a/0083a120.md) [`00869a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869a74.md) [`008b7994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7994.md) · 呼出先 3件 [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`00869a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00869/00869a74.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 3件 [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00869acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869acc.md) [`008b79ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79ec.md) · 呼出先 3件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00869acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/00869acc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.00% / 新版 94.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00869b68",
      "incomplete_value": true,
      "site": "00869b68",
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
      "definition_site": "00869b10",
      "incomplete_value": true,
      "site": "00869b10",
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
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00869b60",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "00869b68",
      "DATA",
      [
        "storage",
        "00c8b758",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00869b60",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "00869b68",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00869a94 ["INT_ADD", "register:40f0:8", ["const:869a94:8", "const:4:8"]]
- 00869a94 ["CALL", null, ["local:b0:8"]]
+ 00869aec ["INT_ADD", "register:40f0:8", ["const:869aec:8", "const:4:8"]]
+ 00869aec ["CALL", null, ["local:b0:8"]]
- 00869aa0 ["INT_ADD", "register:40f0:8", ["const:869aa0:8", "const:4:8"]]
- 00869aa0 ["CALL", null, ["local:b0:8"]]
+ 00869af8 ["INT_ADD", "register:40f0:8", ["const:869af8:8", "const:4:8"]]
+ 00869af8 ["CALL", null, ["local:b0:8"]]
- 00869abc ["INT_ADD", "register:40f0:8", ["const:869abc:8", "const:4:8"]]
- 00869abc ["CALL", null, ["callee:00c57f80:8"]]
+ 00869b14 ["INT_ADD", "register:40f0:8", ["const:869b14:8", "const:4:8"]]
+ 00869b14 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-2d90f1122235ebbac89c5224394aea55"></a>

### [`0086ae04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ae04.md) → [`0086ae5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ae5c.md) FUN_0086ae5c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ae68",
      "incomplete_value": false,
      "site": "0086ae6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086ae10",
      "incomplete_value": false,
      "site": "0086ae14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
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
      "0086ae6c",
      "DATA",
      [
        "storage",
        "00c7efd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ae6c",
      "DATA",
      [
        "storage",
        "00c7f0a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ae0c ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 0086ae64 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086ae10 ["COPY", "tmp:0:8", ["const:fd0:8"]]
- 0086ae10 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae10 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae10 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086ae68 ["COPY", "tmp:0:8", ["const:a0:8"]]
+ 0086ae68 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ae68 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ae68 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-608d1fd489278e7176918394ea54042c"></a>

### [`0086ae24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ae24.md) → [`0086ae7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ae7c.md) FUN_0086ae7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ae84",
      "incomplete_value": true,
      "site": "0086ae88",
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
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086ae2c",
      "incomplete_value": true,
      "site": "0086ae30",
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
            "const:fd0:8"
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
      "0086ae88",
      "DATA",
      [
        "storage",
        "00c7efd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ae88",
      "DATA",
      [
        "storage",
        "00c7f0a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ae28 ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 0086ae80 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086ae2c ["COPY", "tmp:0:8", ["const:fd0:8"]]
- 0086ae2c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae2c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae2c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086ae84 ["COPY", "tmp:0:8", ["const:a0:8"]]
+ 0086ae84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ae84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ae84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086ae4c ["INT_ADD", "register:40f0:8", ["const:86ae4c:8", "const:4:8"]]
- 0086ae4c ["CALL", null, ["callee:00c57f50:8"]]
+ 0086aea4 ["INT_ADD", "register:40f0:8", ["const:86aea4:8", "const:4:8"]]
+ 0086aea4 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-62342d81dafd919ad9780cb59240aaf0"></a>

### [`0086ae60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086ae60.md) → [`0086aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086aeb8.md) FUN_0086aeb8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086aedc",
      "incomplete_value": false,
      "site": "0086aedc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086ae84",
      "incomplete_value": false,
      "site": "0086ae84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7e000:8"
          ],
          [
            "leaf",
            "const:fd0:8"
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
      "0086aedc",
      "DATA",
      [
        "storage",
        "00c7efd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086aedc",
      "DATA",
      [
        "storage",
        "00c7f0a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ae74 ["INT_ADD", "register:40f0:8", ["const:86ae74:8", "const:4:8"]]
- 0086ae74 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086aecc ["INT_ADD", "register:40f0:8", ["const:86aecc:8", "const:4:8"]]
+ 0086aecc ["CALL", null, ["callee:00c57f60:8"]]
- 0086ae7c ["COPY", "register:4048:8", ["const:c7e000:8"]]
+ 0086aed4 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086ae80 ["COPY", "tmp:0:8", ["const:fd0:8"]]
- 0086ae80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086ae80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086aed8 ["COPY", "tmp:0:8", ["const:a0:8"]]
+ 0086aed8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086aed8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086aed8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8f025163f2052855523f8da0ffe7f173"></a>

### [`0086af54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086af54.md) → [`0086afac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086afac.md) FUN_0086afac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0086af24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086af24.md) · 呼出先 7件 [`0048969c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00489/0048969c.md) [`004986e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00498/004986e4.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 1件 [`0086af7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086af7c.md) · 呼出先 7件 [`004896dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004896dc.md) [`00498724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/00498724.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.41% / 新版 98.41%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086b000",
      "value": [
        "leaf",
        "ram:4896dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086afa8",
      "value": [
        "leaf",
        "ram:48969c:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086b000",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048969c"
      ]
    ]
  ],
  "added": [
    [
      "0086b000",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "004896dc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086afa8 ["INT_ADD", "register:40f0:8", ["const:86afa8:8", "const:4:8"]]
- 0086afa8 ["CALL", null, ["ram:48969c:8"]]
+ 0086b000 ["INT_ADD", "register:40f0:8", ["const:86b000:8", "const:4:8"]]
+ 0086b000 ["CALL", null, ["ram:4896dc:8"]]
- 0086af88 ["INT_ADD", "register:40f0:8", ["const:86af88:8", "const:4:8"]]
- 0086af88 ["CALL", null, ["callee:00c585c0:8"]]
+ 0086afe0 ["INT_ADD", "register:40f0:8", ["const:86afe0:8", "const:4:8"]]
+ 0086afe0 ["CALL", null, ["callee:00c585c0:8"]]
- 0086afb8 ["INT_ADD", "register:40f0:8", ["const:86afb8:8", "const:4:8"]]
- 0086afb8 ["CALL", null, ["callee:00c53d70:8"]]
+ 0086b010 ["INT_ADD", "register:40f0:8", ["const:86b010:8", "const:4:8"]]
+ 0086b010 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-503a6dc720c0c00d18e3453ec7666676"></a>

### [`0086b084`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b084.md) → [`0086b0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b0dc.md) FUN_0086b0dc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b0e8",
      "incomplete_value": false,
      "site": "0086b0ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:120:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b090",
      "incomplete_value": false,
      "site": "0086b094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "0086b0ec",
      "DATA",
      [
        "storage",
        "00c7f050",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086b0ec",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b090 ["COPY", "tmp:0:8", ["const:50:8"]]
- 0086b090 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b090 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b090 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086b0e8 ["COPY", "tmp:0:8", ["const:120:8"]]
+ 0086b0e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b0e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b0e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a871eceae09a251d259be6472ac75267"></a>

### [`0086b0a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b0a4.md) → [`0086b0fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b0fc.md) FUN_0086b0fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b104",
      "incomplete_value": false,
      "site": "0086b108",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:120:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b0ac",
      "incomplete_value": false,
      "site": "0086b0b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "0086b108",
      "DATA",
      [
        "storage",
        "00c7f050",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086b108",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b0ac ["COPY", "tmp:0:8", ["const:50:8"]]
- 0086b0ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b0ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b0ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086b104 ["COPY", "tmp:0:8", ["const:120:8"]]
+ 0086b104 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b104 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b104 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b0cc ["INT_ADD", "register:40f0:8", ["const:86b0cc:8", "const:4:8"]]
- 0086b0cc ["CALL", null, ["callee:00c57f50:8"]]
+ 0086b124 ["INT_ADD", "register:40f0:8", ["const:86b124:8", "const:4:8"]]
+ 0086b124 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-86f2fb7a23722005bb586dd475609ecb"></a>

### [`0086b0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b0e0.md) → [`0086b138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b138.md) FUN_0086b138

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b15c",
      "incomplete_value": false,
      "site": "0086b15c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:120:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b104",
      "incomplete_value": false,
      "site": "0086b104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "0086b15c",
      "DATA",
      [
        "storage",
        "00c7f050",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086b15c",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b0f4 ["INT_ADD", "register:40f0:8", ["const:86b0f4:8", "const:4:8"]]
- 0086b0f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086b14c ["INT_ADD", "register:40f0:8", ["const:86b14c:8", "const:4:8"]]
+ 0086b14c ["CALL", null, ["callee:00c57f60:8"]]
- 0086b100 ["COPY", "tmp:0:8", ["const:50:8"]]
- 0086b100 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b100 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b100 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086b158 ["COPY", "tmp:0:8", ["const:120:8"]]
+ 0086b158 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b158 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b158 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b11c ["INT_ADD", "register:40f0:8", ["const:86b11c:8", "const:4:8"]]
- 0086b11c ["CALL", null, ["callee:00c53d70:8"]]
+ 0086b174 ["INT_ADD", "register:40f0:8", ["const:86b174:8", "const:4:8"]]
+ 0086b174 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-1a60b16c2c70bdbaaaca68b9aa2293a3"></a>

### [`0086b130`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b130.md) → [`0086b188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b188.md) FUN_0086b188

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b194",
      "incomplete_value": false,
      "site": "0086b194",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:120:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b13c",
      "incomplete_value": false,
      "site": "0086b13c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:50:8"
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
      "0086b194",
      "DATA",
      [
        "storage",
        "00c7f050",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086b194",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b138 ["COPY", "tmp:0:8", ["const:50:8"]]
- 0086b138 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b138 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b138 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086b190 ["COPY", "tmp:0:8", ["const:120:8"]]
+ 0086b190 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b190 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b190 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b158 ["INT_ADD", "register:40f0:8", ["const:86b158:8", "const:4:8"]]
- 0086b158 ["CALL", null, ["callee:00c53d70:8"]]
+ 0086b1b0 ["INT_ADD", "register:40f0:8", ["const:86b1b0:8", "const:4:8"]]
+ 0086b1b0 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-b407091d755702f39aee769002bfb823"></a>

### [`0086b304`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b304.md) → [`0086b35c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b35c.md) FUN_0086b35c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b360",
      "incomplete_value": false,
      "site": "0086b364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b308",
      "incomplete_value": false,
      "site": "0086b30c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d0:8"
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
      "0086b364",
      "DATA",
      [
        "storage",
        "00c7f0d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086b364",
      "DATA",
      [
        "storage",
        "00c7f1a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b308 ["COPY", "tmp:0:8", ["const:d0:8"]]
- 0086b308 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086b308 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086b308 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086b360 ["COPY", "tmp:0:8", ["const:1a0:8"]]
+ 0086b360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086b360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086b360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f14422fcf0b0fd8024fc7f1fe163c6fd"></a>

### [`0086b314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b314.md) → [`0086b36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b36c.md) FUN_0086b36c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b37c",
      "incomplete_value": false,
      "site": "0086b384",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:1a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b324",
      "incomplete_value": false,
      "site": "0086b32c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d0:8"
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
      "0086b384",
      "DATA",
      [
        "storage",
        "00c7f0d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086b384",
      "DATA",
      [
        "storage",
        "00c7f1a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b324 ["COPY", "tmp:0:8", ["const:d0:8"]]
- 0086b324 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086b324 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086b324 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086b37c ["COPY", "tmp:0:8", ["const:1a0:8"]]
+ 0086b37c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086b37c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086b37c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0086b330 ["INT_ADD", "register:40f0:8", ["const:86b330:8", "const:4:8"]]
- 0086b330 ["CALL", null, ["callee:00c57f70:8"]]
+ 0086b388 ["INT_ADD", "register:40f0:8", ["const:86b388:8", "const:4:8"]]
+ 0086b388 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-cd4ba0755787777d5e16f2352c2368a3"></a>

### [`0086b354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b354.md) → [`0086b3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b3ac.md) FUN_0086b3ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`008536a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/008536a0.md) · 呼出先 3件 [`0049887c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00498/0049887c.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c58190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58190.md)
- 新版 呼出元 1件 [`008536f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/008536f8.md) · 呼出先 3件 [`004988bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00498/004988bc.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c58260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58260.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b3cc",
      "incomplete_value": false,
      "site": "0086b3cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b374",
      "incomplete_value": false,
      "site": "0086b374",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:120:8"
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
      "0086b3cc",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ],
    [
      "0086b424",
      "PARAM",
      [
        "storage",
        "002ede7e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086b3cc",
      "DATA",
      [
        "storage",
        "00c7f1f0",
        null,
        "undefined *"
      ]
    ],
    [
      "0086b424",
      "PARAM",
      [
        "storage",
        "002edebe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b3cc ["COPY", "tmp:0:8", ["const:e7e:8"]]
- 0086b3cc ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0086b3cc ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0086b3cc ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0086b424 ["COPY", "tmp:0:8", ["const:ebe:8"]]
+ 0086b424 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0086b424 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0086b424 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 0086b368 ["COPY", "tmp:0:8", ["const:120:8"]]
- 0086b368 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086b368 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086b368 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086b3c0 ["COPY", "tmp:0:8", ["const:1f0:8"]]
+ 0086b3c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086b3c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086b3c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0086b39c ["INT_ADD", "register:40f0:8", ["const:86b39c:8", "const:4:8"]]
- 0086b39c ["CALL", null, ["callee:00c53d70:8"]]
+ 0086b3f4 ["INT_ADD", "register:40f0:8", ["const:86b3f4:8", "const:4:8"]]
+ 0086b3f4 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-d3aee8f432bf15ddddb0abfa8453ca97"></a>

### [`0086b420`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b420.md) → [`0086b478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b478.md) FUN_0086b478

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b490",
      "incomplete_value": false,
      "site": "0086b494",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b438",
      "incomplete_value": false,
      "site": "0086b43c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:120:8"
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
      "0086b494",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086b494",
      "DATA",
      [
        "storage",
        "00c7f1f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b494 ["COPY", "register:0:8", ["register:4040:8"]]
- 0086b494 ["INT_ADD", "register:40f0:8", ["const:86b494:8", "const:4:8"]]
- 0086b494 ["CALLIND", null, ["register:0:8"]]
+ 0086b4ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 0086b4ec ["INT_ADD", "register:40f0:8", ["const:86b4ec:8", "const:4:8"]]
+ 0086b4ec ["CALLIND", null, ["register:0:8"]]
- 0086b438 ["COPY", "tmp:0:8", ["const:120:8"]]
- 0086b438 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b438 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b438 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086b490 ["COPY", "tmp:0:8", ["const:1f0:8"]]
+ 0086b490 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b490 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b490 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b448 ["INT_ADD", "register:40f0:8", ["const:86b448:8", "const:4:8"]]
- 0086b448 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086b4a0 ["INT_ADD", "register:40f0:8", ["const:86b4a0:8", "const:4:8"]]
+ 0086b4a0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-17dc86d139c02e2a386fb2e0d31e0a9a"></a>

### [`0086b4cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086b/0086b4cc.md) → [`0086b524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086b/0086b524.md) FUN_0086b524

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086b53c",
      "incomplete_value": false,
      "site": "0086b540",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:1f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086b4e4",
      "incomplete_value": false,
      "site": "0086b4e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:120:8"
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
      "0086b540",
      "DATA",
      [
        "storage",
        "00c7f120",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086b540",
      "DATA",
      [
        "storage",
        "00c7f1f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086b4e4 ["COPY", "tmp:0:8", ["const:120:8"]]
- 0086b4e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086b4e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086b4e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086b53c ["COPY", "tmp:0:8", ["const:1f0:8"]]
+ 0086b53c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b53c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086b53c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086b4f4 ["INT_ADD", "register:40f0:8", ["const:86b4f4:8", "const:4:8"]]
- 0086b4f4 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086b54c ["INT_ADD", "register:40f0:8", ["const:86b54c:8", "const:4:8"]]
+ 0086b54c ["CALL", null, ["callee:00c57f80:8"]]
- 0086b508 ["INT_ADD", "register:40f0:8", ["const:86b508:8", "const:4:8"]]
- 0086b508 ["CALL", null, ["callee:00c53da0:8"]]
+ 0086b560 ["INT_ADD", "register:40f0:8", ["const:86b560:8", "const:4:8"]]
+ 0086b560 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-73a1a5cd02cb1caa582165de05fdd3d3"></a>

### [`0086c724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c724.md) → [`0086c77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c77c.md) FUN_0086c77c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086c7c4",
      "incomplete_value": true,
      "site": "0086c7c4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086c76c",
      "incomplete_value": true,
      "site": "0086c76c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086c7a4",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086c7a4",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086c744 ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 0086c744 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086c744 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086c744 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086c79c ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 0086c79c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086c79c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086c79c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086c77c ["INT_ADD", "register:40f0:8", ["const:86c77c:8", "const:4:8"]]
- 0086c77c ["CALL", null, ["callee:00c58470:8"]]
+ 0086c7d4 ["INT_ADD", "register:40f0:8", ["const:86c7d4:8", "const:4:8"]]
+ 0086c7d4 ["CALL", null, ["callee:00c58470:8"]]
- 0086c78c ["INT_ADD", "register:40f0:8", ["const:86c78c:8", "const:4:8"]]
- 0086c78c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c7e4 ["INT_ADD", "register:40f0:8", ["const:86c7e4:8", "const:4:8"]]
+ 0086c7e4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-a9842f7220327a994cd8137a4a5a73e9"></a>

### [`0086c8b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086c8b4.md) → [`0086c90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c90c.md) FUN_0086c90c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086c954",
      "incomplete_value": true,
      "site": "0086c954",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086c8fc",
      "incomplete_value": true,
      "site": "0086c8fc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086c934",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086c934",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086c8d4 ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 0086c8d4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086c8d4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086c8d4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086c92c ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 0086c92c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086c92c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086c92c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086c90c ["INT_ADD", "register:40f0:8", ["const:86c90c:8", "const:4:8"]]
- 0086c90c ["CALL", null, ["callee:00c58470:8"]]
+ 0086c964 ["INT_ADD", "register:40f0:8", ["const:86c964:8", "const:4:8"]]
+ 0086c964 ["CALL", null, ["callee:00c58470:8"]]
- 0086c91c ["INT_ADD", "register:40f0:8", ["const:86c91c:8", "const:4:8"]]
- 0086c91c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086c974 ["INT_ADD", "register:40f0:8", ["const:86c974:8", "const:4:8"]]
+ 0086c974 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-30e50ea58ba34efac6aba62e53bb9f9f"></a>

### [`0086ca44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086ca44.md) → [`0086ca9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086ca9c.md) FUN_0086ca9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086cae4",
      "incomplete_value": true,
      "site": "0086cae4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086ca8c",
      "incomplete_value": true,
      "site": "0086ca8c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086cac4",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086cac4",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ca64 ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 0086ca64 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086ca64 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086ca64 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086cabc ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 0086cabc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086cabc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086cabc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086ca9c ["INT_ADD", "register:40f0:8", ["const:86ca9c:8", "const:4:8"]]
- 0086ca9c ["CALL", null, ["callee:00c58470:8"]]
+ 0086caf4 ["INT_ADD", "register:40f0:8", ["const:86caf4:8", "const:4:8"]]
+ 0086caf4 ["CALL", null, ["callee:00c58470:8"]]
- 0086caac ["INT_ADD", "register:40f0:8", ["const:86caac:8", "const:4:8"]]
- 0086caac ["CALL", null, ["callee:00c57f80:8"]]
+ 0086cb04 ["INT_ADD", "register:40f0:8", ["const:86cb04:8", "const:4:8"]]
+ 0086cb04 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-6cb3fe9cf998f78134db58ba8d9265a3"></a>

### [`0086cbd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086cbd4.md) → [`0086cc2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086cc2c.md) FUN_0086cc2c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086cc74",
      "incomplete_value": true,
      "site": "0086cc74",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086cc1c",
      "incomplete_value": true,
      "site": "0086cc1c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086cc54",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086cc54",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086cbf4 ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 0086cbf4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086cbf4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086cbf4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086cc4c ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 0086cc4c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086cc4c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086cc4c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086cc2c ["INT_ADD", "register:40f0:8", ["const:86cc2c:8", "const:4:8"]]
- 0086cc2c ["CALL", null, ["callee:00c58470:8"]]
+ 0086cc84 ["INT_ADD", "register:40f0:8", ["const:86cc84:8", "const:4:8"]]
+ 0086cc84 ["CALL", null, ["callee:00c58470:8"]]
- 0086cc3c ["INT_ADD", "register:40f0:8", ["const:86cc3c:8", "const:4:8"]]
- 0086cc3c ["CALL", null, ["callee:00c57f80:8"]]
+ 0086cc94 ["INT_ADD", "register:40f0:8", ["const:86cc94:8", "const:4:8"]]
+ 0086cc94 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ee388515a762a68a2830a6ef89d7637b"></a>

### [`0086cd64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086cd64.md) → [`0086cdbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086cdbc.md) FUN_0086cdbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) [`00a39400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39400.md) [`00a39528`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a39/00a39528.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 3件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) [`00a39454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39454.md) [`00a3957c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a3957c.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.34% / 新版 96.34%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ce04",
      "incomplete_value": true,
      "site": "0086ce04",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086cdac",
      "incomplete_value": true,
      "site": "0086cdac",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086cde4",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086cde4",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086cd84 ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 0086cd84 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086cd84 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086cd84 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086cddc ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 0086cddc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086cddc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086cddc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086cdbc ["INT_ADD", "register:40f0:8", ["const:86cdbc:8", "const:4:8"]]
- 0086cdbc ["CALL", null, ["callee:00c58470:8"]]
+ 0086ce14 ["INT_ADD", "register:40f0:8", ["const:86ce14:8", "const:4:8"]]
+ 0086ce14 ["CALL", null, ["callee:00c58470:8"]]
- 0086cdcc ["INT_ADD", "register:40f0:8", ["const:86cdcc:8", "const:4:8"]]
- 0086cdcc ["CALL", null, ["callee:00c57f80:8"]]
+ 0086ce24 ["INT_ADD", "register:40f0:8", ["const:86ce24:8", "const:4:8"]]
+ 0086ce24 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-5a5528b83a7e3a0115ce79e80fbfa851"></a>

### [`0086ceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086c/0086ceec.md) → [`0086cf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086cf44.md) FUN_0086cf44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.34% / 新版 96.34%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086cf8c",
      "incomplete_value": true,
      "site": "0086cf8c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086cf34",
      "incomplete_value": true,
      "site": "0086cf34",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086cf6c",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086cf6c",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086cf0c ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 0086cf0c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086cf0c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086cf0c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086cf64 ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 0086cf64 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086cf64 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086cf64 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086cf44 ["INT_ADD", "register:40f0:8", ["const:86cf44:8", "const:4:8"]]
- 0086cf44 ["CALL", null, ["callee:00c58470:8"]]
+ 0086cf9c ["INT_ADD", "register:40f0:8", ["const:86cf9c:8", "const:4:8"]]
+ 0086cf9c ["CALL", null, ["callee:00c58470:8"]]
- 0086cf54 ["INT_ADD", "register:40f0:8", ["const:86cf54:8", "const:4:8"]]
- 0086cf54 ["CALL", null, ["callee:00c57f80:8"]]
+ 0086cfac ["INT_ADD", "register:40f0:8", ["const:86cfac:8", "const:4:8"]]
+ 0086cfac ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-3ca41910def079ec3f68f65e556343a0"></a>

### [`0086d074`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d074.md) → [`0086d0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d0cc.md) FUN_0086d0cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0083f/0083f884.md) · 呼出先 6件 [`0046db00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046db00.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c583a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583a0.md) [`00c583b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c583b0.md)
- 新版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d114",
      "incomplete_value": true,
      "site": "0086d114",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d0bc",
      "incomplete_value": true,
      "site": "0086d0bc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:e1d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086d0f4",
      "READ",
      [
        "storage",
        "002b8e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086d0f4",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d094 ["COPY", "tmp:0:8", ["const:e1d:8"]]
- 0086d094 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086d094 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086d094 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086d0ec ["COPY", "tmp:0:8", ["const:dc9:8"]]
+ 0086d0ec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086d0ec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086d0ec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086d0cc ["INT_ADD", "register:40f0:8", ["const:86d0cc:8", "const:4:8"]]
- 0086d0cc ["CALL", null, ["callee:00c58470:8"]]
+ 0086d124 ["INT_ADD", "register:40f0:8", ["const:86d124:8", "const:4:8"]]
+ 0086d124 ["CALL", null, ["callee:00c58470:8"]]
- 0086d0dc ["INT_ADD", "register:40f0:8", ["const:86d0dc:8", "const:4:8"]]
- 0086d0dc ["CALL", null, ["callee:00c57f80:8"]]
+ 0086d134 ["INT_ADD", "register:40f0:8", ["const:86d134:8", "const:4:8"]]
+ 0086d134 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-972d3d78375b5251b135e2f90cc0b7c4"></a>

### [`0086d204`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d204.md) → [`0086d25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d25c.md) FUN_0086d25c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d260",
      "incomplete_value": false,
      "site": "0086d264",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:250:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d208",
      "incomplete_value": false,
      "site": "0086d20c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:180:8"
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
      "0086d264",
      "DATA",
      [
        "storage",
        "00c7f180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d264",
      "DATA",
      [
        "storage",
        "00c7f250",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d208 ["COPY", "tmp:0:8", ["const:180:8"]]
- 0086d208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d260 ["COPY", "tmp:0:8", ["const:250:8"]]
+ 0086d260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0702d43b6195f51481b308130f04a5f9"></a>

### [`0086d214`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d214.md) → [`0086d26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d26c.md) FUN_0086d26c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d27c",
      "incomplete_value": false,
      "site": "0086d284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:250:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d224",
      "incomplete_value": false,
      "site": "0086d22c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:180:8"
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
      "0086d284",
      "DATA",
      [
        "storage",
        "00c7f180",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d284",
      "DATA",
      [
        "storage",
        "00c7f250",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d224 ["COPY", "tmp:0:8", ["const:180:8"]]
- 0086d224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d27c ["COPY", "tmp:0:8", ["const:250:8"]]
+ 0086d27c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d27c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d27c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0086d230 ["INT_ADD", "register:40f0:8", ["const:86d230:8", "const:4:8"]]
- 0086d230 ["CALL", null, ["callee:00c57f70:8"]]
+ 0086d288 ["INT_ADD", "register:40f0:8", ["const:86d288:8", "const:4:8"]]
+ 0086d288 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-da6bf10137db96152f10f1adda49a2dd"></a>

### [`0086d254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d254.md) → [`0086d2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d2ac.md) FUN_0086d2ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d2d0",
      "incomplete_value": false,
      "site": "0086d2d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:2a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d278",
      "incomplete_value": false,
      "site": "0086d278",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
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
      "0086d2d0",
      "DATA",
      [
        "storage",
        "00c7f1d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d2d0",
      "DATA",
      [
        "storage",
        "00c7f2a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d268 ["INT_ADD", "register:40f0:8", ["const:86d268:8", "const:4:8"]]
- 0086d268 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086d2c0 ["INT_ADD", "register:40f0:8", ["const:86d2c0:8", "const:4:8"]]
+ 0086d2c0 ["CALL", null, ["callee:00c57f60:8"]]
- 0086d274 ["COPY", "tmp:0:8", ["const:1d0:8"]]
- 0086d274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d2cc ["COPY", "tmp:0:8", ["const:2a0:8"]]
+ 0086d2cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d2cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d2cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2a3fdf69b1eb79ab877ef24b988b855f"></a>

### [`0086d288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d288.md) → [`0086d2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d2e0.md) FUN_0086d2e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d2ec",
      "incomplete_value": false,
      "site": "0086d2ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:2a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d294",
      "incomplete_value": false,
      "site": "0086d294",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
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
      "0086d2ec",
      "DATA",
      [
        "storage",
        "00c7f1d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d2ec",
      "DATA",
      [
        "storage",
        "00c7f2a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d290 ["COPY", "tmp:0:8", ["const:1d0:8"]]
- 0086d290 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d290 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d290 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086d2e8 ["COPY", "tmp:0:8", ["const:2a0:8"]]
+ 0086d2e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d2e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d2e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fc11b89cf762c68c1f982cfc9316339f"></a>

### [`0086d2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d2a4.md) → [`0086d2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d2fc.md) FUN_0086d2fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d320",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d2c8",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "0086d320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0086d320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d2c8 ["INT_ADD", "register:40f0:8", ["const:86d2c8:8", "const:4:8"]]
- 0086d2c8 ["CALL", null, ["ram:47acf4:8"]]
+ 0086d320 ["INT_ADD", "register:40f0:8", ["const:86d320:8", "const:4:8"]]
+ 0086d320 ["CALL", null, ["ram:47ad34:8"]]
- 0086d2d4 ["INT_ADD", "register:40f0:8", ["const:86d2d4:8", "const:4:8"]]
- 0086d2d4 ["CALL", null, ["callee:0047ce14:8"]]
+ 0086d32c ["INT_ADD", "register:40f0:8", ["const:86d32c:8", "const:4:8"]]
+ 0086d32c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-b8e8327b61fcdf6a10435c67ccbc178b"></a>

### [`0086d318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d318.md) → [`0086d370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d370.md) FUN_0086d370

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d394",
      "incomplete_value": false,
      "site": "0086d394",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d33c",
      "incomplete_value": false,
      "site": "0086d33c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:250:8"
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
      "0086d394",
      "DATA",
      [
        "storage",
        "00c7f250",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d394",
      "DATA",
      [
        "storage",
        "00c7f320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d32c ["INT_ADD", "register:40f0:8", ["const:86d32c:8", "const:4:8"]]
- 0086d32c ["CALL", null, ["callee:00c57f60:8"]]
+ 0086d384 ["INT_ADD", "register:40f0:8", ["const:86d384:8", "const:4:8"]]
+ 0086d384 ["CALL", null, ["callee:00c57f60:8"]]
- 0086d338 ["COPY", "tmp:0:8", ["const:250:8"]]
- 0086d338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d390 ["COPY", "tmp:0:8", ["const:320:8"]]
+ 0086d390 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d390 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d390 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b2f60ab848de72401fb36ba24c7e07c8"></a>

### [`0086d34c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d34c.md) → [`0086d3a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d3a4.md) FUN_0086d3a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d3b0",
      "incomplete_value": false,
      "site": "0086d3b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:320:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d358",
      "incomplete_value": false,
      "site": "0086d358",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:250:8"
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
      "0086d3b0",
      "DATA",
      [
        "storage",
        "00c7f250",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d3b0",
      "DATA",
      [
        "storage",
        "00c7f320",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d354 ["COPY", "tmp:0:8", ["const:250:8"]]
- 0086d354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086d3ac ["COPY", "tmp:0:8", ["const:320:8"]]
+ 0086d3ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d3ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d3ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fc1af08cc92835a6b538c1ce90056e88"></a>

### [`0086d368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d368.md) → [`0086d3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d3c0.md) FUN_0086d3c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d3e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d38c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "0086d3e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0086d3e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d38c ["INT_ADD", "register:40f0:8", ["const:86d38c:8", "const:4:8"]]
- 0086d38c ["CALL", null, ["ram:47acf4:8"]]
+ 0086d3e4 ["INT_ADD", "register:40f0:8", ["const:86d3e4:8", "const:4:8"]]
+ 0086d3e4 ["CALL", null, ["ram:47ad34:8"]]
- 0086d398 ["INT_ADD", "register:40f0:8", ["const:86d398:8", "const:4:8"]]
- 0086d398 ["CALL", null, ["callee:0047ce14:8"]]
+ 0086d3f0 ["INT_ADD", "register:40f0:8", ["const:86d3f0:8", "const:4:8"]]
+ 0086d3f0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-23db4d16baaf2935ce9b246121858640"></a>

### [`0086d3dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d3dc.md) → [`0086d434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d434.md) FUN_0086d434

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d458",
      "incomplete_value": false,
      "site": "0086d458",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d400",
      "incomplete_value": false,
      "site": "0086d400",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
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
      "0086d458",
      "DATA",
      [
        "storage",
        "00c7f2d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d458",
      "DATA",
      [
        "storage",
        "00c7f3a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d3f0 ["INT_ADD", "register:40f0:8", ["const:86d3f0:8", "const:4:8"]]
- 0086d3f0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086d448 ["INT_ADD", "register:40f0:8", ["const:86d448:8", "const:4:8"]]
+ 0086d448 ["CALL", null, ["callee:00c57f60:8"]]
- 0086d3fc ["COPY", "tmp:0:8", ["const:2d0:8"]]
- 0086d3fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d3fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d3fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d454 ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 0086d454 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d454 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d454 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0c95b1abde07a568e5034dc214143330"></a>

### [`0086d410`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d410.md) → [`0086d468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d468.md) FUN_0086d468

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d474",
      "incomplete_value": false,
      "site": "0086d474",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:3a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d41c",
      "incomplete_value": false,
      "site": "0086d41c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
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
      "0086d474",
      "DATA",
      [
        "storage",
        "00c7f2d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d474",
      "DATA",
      [
        "storage",
        "00c7f3a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d418 ["COPY", "tmp:0:8", ["const:2d0:8"]]
- 0086d418 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d418 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d418 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086d470 ["COPY", "tmp:0:8", ["const:3a0:8"]]
+ 0086d470 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d470 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d470 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a9e37472e92fac2e30f1f9d5823fa680"></a>

### [`0086d42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d42c.md) → [`0086d484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d484.md) FUN_0086d484

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d4a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d450",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "0086d4a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0086d4a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d450 ["INT_ADD", "register:40f0:8", ["const:86d450:8", "const:4:8"]]
- 0086d450 ["CALL", null, ["ram:47acf4:8"]]
+ 0086d4a8 ["INT_ADD", "register:40f0:8", ["const:86d4a8:8", "const:4:8"]]
+ 0086d4a8 ["CALL", null, ["ram:47ad34:8"]]
- 0086d45c ["INT_ADD", "register:40f0:8", ["const:86d45c:8", "const:4:8"]]
- 0086d45c ["CALL", null, ["callee:0047ce14:8"]]
+ 0086d4b4 ["INT_ADD", "register:40f0:8", ["const:86d4b4:8", "const:4:8"]]
+ 0086d4b4 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-6c2cc2519adeebb72afd7ad8fef357c6"></a>

### [`0086d4a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d4a0.md) → [`0086d4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d4f8.md) FUN_0086d4f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d51c",
      "incomplete_value": false,
      "site": "0086d51c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d4c4",
      "incomplete_value": false,
      "site": "0086d4c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:350:8"
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
      "0086d51c",
      "DATA",
      [
        "storage",
        "00c7f350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d51c",
      "DATA",
      [
        "storage",
        "00c7f420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d4b4 ["INT_ADD", "register:40f0:8", ["const:86d4b4:8", "const:4:8"]]
- 0086d4b4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086d50c ["INT_ADD", "register:40f0:8", ["const:86d50c:8", "const:4:8"]]
+ 0086d50c ["CALL", null, ["callee:00c57f60:8"]]
- 0086d4c0 ["COPY", "tmp:0:8", ["const:350:8"]]
- 0086d4c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d4c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d4c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d518 ["COPY", "tmp:0:8", ["const:420:8"]]
+ 0086d518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-31349ede9210755778d5f2737174e2b1"></a>

### [`0086d4d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d4d4.md) → [`0086d52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d52c.md) FUN_0086d52c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d538",
      "incomplete_value": false,
      "site": "0086d538",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d4e0",
      "incomplete_value": false,
      "site": "0086d4e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:350:8"
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
      "0086d538",
      "DATA",
      [
        "storage",
        "00c7f350",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d538",
      "DATA",
      [
        "storage",
        "00c7f420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d4dc ["COPY", "tmp:0:8", ["const:350:8"]]
- 0086d4dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d4dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d4dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086d534 ["COPY", "tmp:0:8", ["const:420:8"]]
+ 0086d534 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d534 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d534 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ebbfb49eb60b2377f9a1b3762a441076"></a>

### [`0086d4f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d4f0.md) → [`0086d548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d548.md) FUN_0086d548

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d56c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d514",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "0086d56c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0086d56c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d514 ["INT_ADD", "register:40f0:8", ["const:86d514:8", "const:4:8"]]
- 0086d514 ["CALL", null, ["ram:47acf4:8"]]
+ 0086d56c ["INT_ADD", "register:40f0:8", ["const:86d56c:8", "const:4:8"]]
+ 0086d56c ["CALL", null, ["ram:47ad34:8"]]
- 0086d520 ["INT_ADD", "register:40f0:8", ["const:86d520:8", "const:4:8"]]
- 0086d520 ["CALL", null, ["callee:0047ce14:8"]]
+ 0086d578 ["INT_ADD", "register:40f0:8", ["const:86d578:8", "const:4:8"]]
+ 0086d578 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-d816546172b2f9f4111c0f04016bd189"></a>

### [`0086d564`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d564.md) → [`0086d5bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d5bc.md) FUN_0086d5bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d5e0",
      "incomplete_value": false,
      "site": "0086d5e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d588",
      "incomplete_value": false,
      "site": "0086d588",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
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
      "0086d5e0",
      "DATA",
      [
        "storage",
        "00c7f3d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d5e0",
      "DATA",
      [
        "storage",
        "00c7f4a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d578 ["INT_ADD", "register:40f0:8", ["const:86d578:8", "const:4:8"]]
- 0086d578 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086d5d0 ["INT_ADD", "register:40f0:8", ["const:86d5d0:8", "const:4:8"]]
+ 0086d5d0 ["CALL", null, ["callee:00c57f60:8"]]
- 0086d584 ["COPY", "tmp:0:8", ["const:3d0:8"]]
- 0086d584 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d584 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d584 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d5dc ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 0086d5dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d5dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d5dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-092e3da8febfd23e5a5f07f1afafd249"></a>

### [`0086d598`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d598.md) → [`0086d5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d5f0.md) FUN_0086d5f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d5fc",
      "incomplete_value": false,
      "site": "0086d5fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:4a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d5a4",
      "incomplete_value": false,
      "site": "0086d5a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
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
      "0086d5fc",
      "DATA",
      [
        "storage",
        "00c7f3d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d5fc",
      "DATA",
      [
        "storage",
        "00c7f4a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d5a0 ["COPY", "tmp:0:8", ["const:3d0:8"]]
- 0086d5a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d5a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d5a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086d5f8 ["COPY", "tmp:0:8", ["const:4a0:8"]]
+ 0086d5f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d5f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d5f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-260e20a2a82ce46ee81b2eccaebed67a"></a>

### [`0086d5b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d5b4.md) → [`0086d60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d60c.md) FUN_0086d60c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d630",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d5d8",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "0086d630",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0086d630",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d5d8 ["INT_ADD", "register:40f0:8", ["const:86d5d8:8", "const:4:8"]]
- 0086d5d8 ["CALL", null, ["ram:47acf4:8"]]
+ 0086d630 ["INT_ADD", "register:40f0:8", ["const:86d630:8", "const:4:8"]]
+ 0086d630 ["CALL", null, ["ram:47ad34:8"]]
- 0086d5e4 ["INT_ADD", "register:40f0:8", ["const:86d5e4:8", "const:4:8"]]
- 0086d5e4 ["CALL", null, ["callee:0047ce14:8"]]
+ 0086d63c ["INT_ADD", "register:40f0:8", ["const:86d63c:8", "const:4:8"]]
+ 0086d63c ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-e1be6b8a9c375a31f601b88b77c2f184"></a>

### [`0086d62c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d62c.md) → [`0086d684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d684.md) FUN_0086d684

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d6a8",
      "incomplete_value": false,
      "site": "0086d6a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d650",
      "incomplete_value": false,
      "site": "0086d650",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:450:8"
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
      "0086d6a8",
      "DATA",
      [
        "storage",
        "00c7f450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d6a8",
      "DATA",
      [
        "storage",
        "00c7f520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d640 ["INT_ADD", "register:40f0:8", ["const:86d640:8", "const:4:8"]]
- 0086d640 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086d698 ["INT_ADD", "register:40f0:8", ["const:86d698:8", "const:4:8"]]
+ 0086d698 ["CALL", null, ["callee:00c57f60:8"]]
- 0086d64c ["COPY", "tmp:0:8", ["const:450:8"]]
- 0086d64c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d64c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d64c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d6a4 ["COPY", "tmp:0:8", ["const:520:8"]]
+ 0086d6a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d6a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d6a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8a021645db8c790b233b74ef624d2711"></a>

### [`0086d6cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d6cc.md) → [`0086d724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d724.md) FUN_0086d724

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d748",
      "incomplete_value": false,
      "site": "0086d748",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d6f0",
      "incomplete_value": false,
      "site": "0086d6f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
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
      "0086d748",
      "DATA",
      [
        "storage",
        "00c7f4d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d748",
      "DATA",
      [
        "storage",
        "00c7f5a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d6e0 ["INT_ADD", "register:40f0:8", ["const:86d6e0:8", "const:4:8"]]
- 0086d6e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086d738 ["INT_ADD", "register:40f0:8", ["const:86d738:8", "const:4:8"]]
+ 0086d738 ["CALL", null, ["callee:00c57f60:8"]]
- 0086d6ec ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 0086d6ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d6ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d6ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086d744 ["COPY", "tmp:0:8", ["const:5a0:8"]]
+ 0086d744 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d744 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086d744 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-75b3bdf20a08f11121d644a42acd39cb"></a>

### [`0086d700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d700.md) → [`0086d758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d758.md) FUN_0086d758

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d764",
      "incomplete_value": false,
      "site": "0086d764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:5a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d70c",
      "incomplete_value": false,
      "site": "0086d70c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
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
      "0086d764",
      "DATA",
      [
        "storage",
        "00c7f4d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086d764",
      "DATA",
      [
        "storage",
        "00c7f5a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d708 ["COPY", "tmp:0:8", ["const:4d0:8"]]
- 0086d708 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d708 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d708 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086d760 ["COPY", "tmp:0:8", ["const:5a0:8"]]
+ 0086d760 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d760 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d760 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2e7b5627878d09628ed6b76d7e7b1cf6"></a>

### [`0086d71c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086d71c.md) → [`0086d774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d774.md) FUN_0086d774

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0044f898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f898.md) [`0044f8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f8e0.md) [`00456808`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00456/00456808.md) [`0046479c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00464/0046479c.md) [`00464878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00464/00464878.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md) [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00456848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456848.md) [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`004648b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004648b8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.13% / 新版 97.13%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d87c",
      "incomplete_value": true,
      "site": "0086d88c",
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
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:12f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d824",
      "incomplete_value": true,
      "site": "0086d834",
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
                "const:2bf000:8"
              ],
              [
                "leaf",
                "const:183:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 54,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d924",
      "incomplete_value": false,
      "site": "0086d924",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086d8cc",
      "incomplete_value": false,
      "site": "0086d8cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "ordinal": 61,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086dad8",
      "incomplete_value": false,
      "site": "0086dadc",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:600:8"
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
    "old": {
      "definition_site": "0086da80",
      "incomplete_value": false,
      "site": "0086da84",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:530:8"
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
    "ordinal": 109,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086d87c",
      "READ",
      [
        "storage",
        "002bf183",
        null,
        "string"
      ]
    ],
    [
      "0086d924",
      "DATA",
      [
        "storage",
        "00c7f550",
        null,
        "undefined *"
      ]
    ],
    [
      "0086da48",
      "DATA",
      [
        "storage",
        "003c7788",
        "fde_003c7788",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "0086d87c",
      "READ",
      [
        "storage",
        "002bf12f",
        null,
        "string"
      ]
    ],
    [
      "0086d924",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ],
    [
      "0086da48",
      "DATA",
      [
        "storage",
        "003c7788",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086dadc ["INT_ADD", "register:40f0:8", ["const:86dadc:8", "const:4:8"]]
- 0086dadc ["CALL", null, ["callee:00c57f80:8"]]
+ 0086db34 ["INT_ADD", "register:40f0:8", ["const:86db34:8", "const:4:8"]]
+ 0086db34 ["CALL", null, ["callee:00c57f80:8"]]
- 0086d814 ["INT_ADD", "register:40f0:8", ["const:86d814:8", "const:4:8"]]
- 0086d814 ["CALL", null, ["callee:00481470:8"]]
+ 0086d86c ["INT_ADD", "register:40f0:8", ["const:86d86c:8", "const:4:8"]]
+ 0086d86c ["CALL", null, ["callee:00481470:8"]]
- 0086d81c ["COPY", "tmp:0:8", ["const:183:8"]]
- 0086d81c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d81c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d81c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086d874 ["COPY", "tmp:0:8", ["const:12f:8"]]
+ 0086d874 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d874 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086d874 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-12817a71431abfb15669a46ddda78128"></a>

### [`0086dc64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086dc64.md) → [`0086dcbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086dcbc.md) FUN_0086dcbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0046479c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00464/0046479c.md)
- 新版 呼出元 0件  · 呼出先 1件 [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086dcc4",
      "incomplete_value": false,
      "site": "0086dcc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086dc6c",
      "incomplete_value": false,
      "site": "0086dc70",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "0086dcc8",
      "DATA",
      [
        "storage",
        "00c7f550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086dcc8",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086dc6c ["COPY", "tmp:0:8", ["const:550:8"]]
- 0086dc6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086dc6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086dc6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086dcc4 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 0086dcc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086dcc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086dcc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-62181250b245ce254adeb9995bc53587"></a>

### [`0086dc84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086dc84.md) → [`0086dcdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086dcdc.md) FUN_0086dcdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0046479c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00464/0046479c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086dce4",
      "incomplete_value": false,
      "site": "0086dce8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086dc8c",
      "incomplete_value": false,
      "site": "0086dc90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "0086dce8",
      "DATA",
      [
        "storage",
        "00c7f550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086dce8",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086dc8c ["COPY", "tmp:0:8", ["const:550:8"]]
- 0086dc8c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086dc8c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086dc8c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086dce4 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 0086dce4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086dce4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086dce4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086dcac ["INT_ADD", "register:40f0:8", ["const:86dcac:8", "const:4:8"]]
- 0086dcac ["CALL", null, ["callee:004647dc:8"]]
+ 0086dd04 ["INT_ADD", "register:40f0:8", ["const:86dd04:8", "const:4:8"]]
+ 0086dd04 ["CALL", null, ["callee:004647dc:8"]]
~~~


<a id="compare-eab89b115cb5fb52844e749511ebc75b"></a>

### [`0086dcc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086dcc0.md) → [`0086dd18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086dd18.md) FUN_0086dd18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00464878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00464/00464878.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`004648b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004648b8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086dd4c",
      "incomplete_value": false,
      "site": "0086dd4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086dcf4",
      "incomplete_value": false,
      "site": "0086dcf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "0086dd4c",
      "DATA",
      [
        "storage",
        "00c7f550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086dd4c",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086dcd8 ["INT_ADD", "register:40f0:8", ["const:86dcd8:8", "const:4:8"]]
- 0086dcd8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086dd30 ["INT_ADD", "register:40f0:8", ["const:86dd30:8", "const:4:8"]]
+ 0086dd30 ["CALL", null, ["callee:00c57f60:8"]]
- 0086dce4 ["COPY", "tmp:0:8", ["const:550:8"]]
- 0086dce4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086dce4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086dce4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086dd3c ["COPY", "tmp:0:8", ["const:620:8"]]
+ 0086dd3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086dd3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086dd3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086dd0c ["INT_ADD", "register:40f0:8", ["const:86dd0c:8", "const:4:8"]]
- 0086dd0c ["CALL", null, ["callee:004648b8:8"]]
+ 0086dd64 ["INT_ADD", "register:40f0:8", ["const:86dd64:8", "const:4:8"]]
+ 0086dd64 ["CALL", null, ["callee:004648b8:8"]]
~~~


<a id="compare-d18608907b1282161d5155a7fa0c61bd"></a>

### [`0086dd50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086dd50.md) → [`0086dda8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086dda8.md) FUN_0086dda8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00464878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00464/00464878.md)
- 新版 呼出元 0件  · 呼出先 1件 [`004648b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004648b8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ddd0",
      "incomplete_value": false,
      "site": "0086ddd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:620:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086dd78",
      "incomplete_value": false,
      "site": "0086dd78",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:550:8"
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
      "0086ddd0",
      "DATA",
      [
        "storage",
        "00c7f550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ddd0",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086dd70 ["COPY", "tmp:0:8", ["const:550:8"]]
- 0086dd70 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086dd70 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086dd70 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086ddc8 ["COPY", "tmp:0:8", ["const:620:8"]]
+ 0086ddc8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086ddc8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086ddc8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086dd8c ["INT_ADD", "register:40f0:8", ["const:86dd8c:8", "const:4:8"]]
- 0086dd8c ["CALL", null, ["callee:004648b8:8"]]
+ 0086dde4 ["INT_ADD", "register:40f0:8", ["const:86dde4:8", "const:4:8"]]
+ 0086dde4 ["CALL", null, ["callee:004648b8:8"]]
~~~


<a id="compare-3202033246ed163b2234bf32f43ca52b"></a>

### [`0086dea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086dea4.md) → [`0086defc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086defc.md) FUN_0086defc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0085b2f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2f8.md) [`0086dea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086dea4.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`0085b350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b350.md) [`0086defc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086defc.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.66% / 新版 98.66%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086e06c",
      "incomplete_value": false,
      "site": "0086e074",
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
            "const:f93:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086e014",
      "incomplete_value": false,
      "site": "0086e01c",
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
            "const:f53:8"
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
      "definition_site": "0086e12c",
      "incomplete_value": true,
      "site": "0086e134",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4008:8"
          ],
          [
            "leaf",
            "const:e27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086e0d4",
      "incomplete_value": true,
      "site": "0086e0dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4008:8"
          ],
          [
            "leaf",
            "const:de7:8"
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
      "definition_site": "0086e1f8",
      "incomplete_value": false,
      "site": "0086e204",
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
            "const:f29:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086e1a0",
      "incomplete_value": false,
      "site": "0086e1ac",
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
            "const:ee9:8"
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
      "0086e06c",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "0086e12c",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "0086e148",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086e06c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0086e12c",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "0086e148",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086e01c ["INT_ADD", "register:40f0:8", ["const:86e01c:8", "const:4:8"]]
- 0086e01c ["CALL", null, ["callee:00441ed4:8"]]
+ 0086e074 ["INT_ADD", "register:40f0:8", ["const:86e074:8", "const:4:8"]]
+ 0086e074 ["CALL", null, ["callee:00441ed4:8"]]
- 0086e0dc ["INT_ADD", "register:40f0:8", ["const:86e0dc:8", "const:4:8"]]
- 0086e0dc ["CALL", null, ["callee:00441ed4:8"]]
+ 0086e134 ["INT_ADD", "register:40f0:8", ["const:86e134:8", "const:4:8"]]
+ 0086e134 ["CALL", null, ["callee:00441ed4:8"]]
- 0086e1ac ["INT_ADD", "register:40f0:8", ["const:86e1ac:8", "const:4:8"]]
- 0086e1ac ["CALL", null, ["callee:00442834:8"]]
+ 0086e204 ["INT_ADD", "register:40f0:8", ["const:86e204:8", "const:4:8"]]
+ 0086e204 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-5bde361f20b2237eb9d4681a9cbf0b40"></a>

### [`0086e7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086e/0086e7a4.md) → [`0086e7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086e/0086e7fc.md) FUN_0086e7fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0086dea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086d/0086dea4.md) [`0086e7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086e/0086e7a4.md) · 呼出先 23件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`0086defc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086defc.md) [`0086e7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086e/0086e7fc.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.69% / 新版 98.69%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086e954",
      "incomplete_value": false,
      "site": "0086e95c",
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
            "const:f93:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086e8fc",
      "incomplete_value": false,
      "site": "0086e904",
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
            "const:f53:8"
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
      "definition_site": "0086ea10",
      "incomplete_value": false,
      "site": "0086ea18",
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
            "const:e27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086e9b8",
      "incomplete_value": false,
      "site": "0086e9c0",
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
            "const:de7:8"
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
      "definition_site": "0086ea28",
      "incomplete_value": false,
      "site": "0086ea34",
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
            "const:f29:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086e9d0",
      "incomplete_value": false,
      "site": "0086e9dc",
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
            "const:ee9:8"
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
      "0086e954",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "0086ea10",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "0086ea28",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086e954",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0086ea10",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "0086ea28",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086e904 ["INT_ADD", "register:40f0:8", ["const:86e904:8", "const:4:8"]]
- 0086e904 ["CALL", null, ["callee:00441ed4:8"]]
+ 0086e95c ["INT_ADD", "register:40f0:8", ["const:86e95c:8", "const:4:8"]]
+ 0086e95c ["CALL", null, ["callee:00441ed4:8"]]
- 0086e9c0 ["INT_ADD", "register:40f0:8", ["const:86e9c0:8", "const:4:8"]]
- 0086e9c0 ["CALL", null, ["callee:00441ed4:8"]]
+ 0086ea18 ["INT_ADD", "register:40f0:8", ["const:86ea18:8", "const:4:8"]]
+ 0086ea18 ["CALL", null, ["callee:00441ed4:8"]]
- 0086e9dc ["INT_ADD", "register:40f0:8", ["const:86e9dc:8", "const:4:8"]]
- 0086e9dc ["CALL", null, ["callee:00442834:8"]]
+ 0086ea34 ["INT_ADD", "register:40f0:8", ["const:86ea34:8", "const:4:8"]]
+ 0086ea34 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-2bb3ba2018425c38cb1edde194a850a3"></a>

### [`0086f0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086f0dc.md) → [`0086f134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f134.md) FUN_0086f134

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0086e7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086e/0086e7a4.md) [`0086f0dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086f0dc.md) [`0089788c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00897/0089788c.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`0086e7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086e/0086e7fc.md) [`0086f134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f134.md) [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086f284",
      "incomplete_value": false,
      "site": "0086f28c",
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
            "const:f93:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086f22c",
      "incomplete_value": false,
      "site": "0086f234",
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
            "const:f53:8"
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
      "definition_site": "0086f2a8",
      "incomplete_value": false,
      "site": "0086f2b4",
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
            "const:f29:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086f250",
      "incomplete_value": false,
      "site": "0086f25c",
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
            "const:ee9:8"
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
      "definition_site": "0086f3dc",
      "incomplete_value": false,
      "site": "0086f3e4",
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
            "const:e27:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086f384",
      "incomplete_value": false,
      "site": "0086f38c",
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
            "const:de7:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086f284",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "0086f2a8",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "0086f3dc",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0086f284",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0086f2a8",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "0086f3dc",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0086f234 ["INT_ADD", "register:40f0:8", ["const:86f234:8", "const:4:8"]]
- 0086f234 ["CALL", null, ["callee:00441ed4:8"]]
+ 0086f28c ["INT_ADD", "register:40f0:8", ["const:86f28c:8", "const:4:8"]]
+ 0086f28c ["CALL", null, ["callee:00441ed4:8"]]
- 0086f25c ["INT_ADD", "register:40f0:8", ["const:86f25c:8", "const:4:8"]]
- 0086f25c ["CALL", null, ["callee:00442834:8"]]
+ 0086f2b4 ["INT_ADD", "register:40f0:8", ["const:86f2b4:8", "const:4:8"]]
+ 0086f2b4 ["CALL", null, ["callee:00442834:8"]]
- 0086f38c ["INT_ADD", "register:40f0:8", ["const:86f38c:8", "const:4:8"]]
- 0086f38c ["CALL", null, ["callee:00441ed4:8"]]
+ 0086f3e4 ["INT_ADD", "register:40f0:8", ["const:86f3e4:8", "const:4:8"]]
+ 0086f3e4 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-8ab34cc0f479ed4cf3ccaa41a1c0e9e9"></a>

### [`0086f8cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086f8cc.md) → [`0086f924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f924.md) FUN_0086f924

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086f948",
      "incomplete_value": false,
      "site": "0086f948",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:6c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086f8f0",
      "incomplete_value": false,
      "site": "0086f8f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:5f0:8"
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
      "0086f948",
      "DATA",
      [
        "storage",
        "00c7f5f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086f948",
      "DATA",
      [
        "storage",
        "00c7f6c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086f8e0 ["INT_ADD", "register:40f0:8", ["const:86f8e0:8", "const:4:8"]]
- 0086f8e0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086f938 ["INT_ADD", "register:40f0:8", ["const:86f938:8", "const:4:8"]]
+ 0086f938 ["CALL", null, ["callee:00c57f60:8"]]
- 0086f8ec ["COPY", "tmp:0:8", ["const:5f0:8"]]
- 0086f8ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086f8ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086f8ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086f944 ["COPY", "tmp:0:8", ["const:6c0:8"]]
+ 0086f944 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086f944 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086f944 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-259e3656aaebef38bae9b6f72cafdf40"></a>

### [`0086f900`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086f900.md) → [`0086f958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f958.md) FUN_0086f958

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086f964",
      "incomplete_value": false,
      "site": "0086f964",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:6c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086f90c",
      "incomplete_value": false,
      "site": "0086f90c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:5f0:8"
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
      "0086f964",
      "DATA",
      [
        "storage",
        "00c7f5f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086f964",
      "DATA",
      [
        "storage",
        "00c7f6c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086f908 ["COPY", "tmp:0:8", ["const:5f0:8"]]
- 0086f908 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086f908 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086f908 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086f960 ["COPY", "tmp:0:8", ["const:6c0:8"]]
+ 0086f960 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086f960 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086f960 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-22e97df10096d47249084f982b1e7a32"></a>

### [`0086f91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086f91c.md) → [`0086f974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f974.md) FUN_0086f974

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00442b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442b38.md) [`0044dd80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044d/0044dd80.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0044ddc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044ddc0.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.98% / 新版 95.98%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086fa54",
      "incomplete_value": true,
      "site": "0086fa64",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:4ea:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086f9fc",
      "incomplete_value": true,
      "site": "0086fa0c",
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
                "const:2a2000:8"
              ],
              [
                "leaf",
                "const:537:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086fb24",
      "incomplete_value": false,
      "site": "0086fb24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:730:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086facc",
      "incomplete_value": false,
      "site": "0086facc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:660:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086f9b0",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086f958",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086f9b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0086f9c4",
      "PARAM",
      [
        "storage",
        "002c1770",
        null,
        "string"
      ]
    ],
    [
      "0086fa44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "0086f9b0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0086f9c4",
      "PARAM",
      [
        "storage",
        "002c17b0",
        null,
        "string"
      ]
    ],
    [
      "0086fa44",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086f958 ["INT_ADD", "register:40f0:8", ["const:86f958:8", "const:4:8"]]
- 0086f958 ["CALL", null, ["ram:48ccf8:8"]]
+ 0086f9b0 ["INT_ADD", "register:40f0:8", ["const:86f9b0:8", "const:4:8"]]
+ 0086f9b0 ["CALL", null, ["ram:48cd38:8"]]
- 0086f974 ["INT_ADD", "register:40f0:8", ["const:86f974:8", "const:4:8"]]
- 0086f974 ["CALL", null, ["callee:00c58040:8"]]
+ 0086f9cc ["INT_ADD", "register:40f0:8", ["const:86f9cc:8", "const:4:8"]]
+ 0086f9cc ["CALL", null, ["callee:00c58040:8"]]
- 0086f9ec ["INT_ADD", "register:40f0:8", ["const:86f9ec:8", "const:4:8"]]
- 0086f9ec ["CALL", null, ["ram:48ccf8:8"]]
+ 0086fa44 ["INT_ADD", "register:40f0:8", ["const:86fa44:8", "const:4:8"]]
+ 0086fa44 ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-75ac84c79100918c671b6c26fd85d075"></a>

### [`0086fda0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086fda0.md) → [`0086fdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fdf8.md) FUN_0086fdf8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086fe1c",
      "incomplete_value": false,
      "site": "0086fe1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:730:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086fdc4",
      "incomplete_value": false,
      "site": "0086fdc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "0086fe1c",
      "DATA",
      [
        "storage",
        "00c7f660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086fe1c",
      "DATA",
      [
        "storage",
        "00c7f730",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fdb4 ["INT_ADD", "register:40f0:8", ["const:86fdb4:8", "const:4:8"]]
- 0086fdb4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086fe0c ["INT_ADD", "register:40f0:8", ["const:86fe0c:8", "const:4:8"]]
+ 0086fe0c ["CALL", null, ["callee:00c57f60:8"]]
- 0086fdc0 ["COPY", "tmp:0:8", ["const:660:8"]]
- 0086fdc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fdc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fdc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086fe18 ["COPY", "tmp:0:8", ["const:730:8"]]
+ 0086fe18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086fe18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086fe18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f5dd3452ba36ec75480c190ec2d2af41"></a>

### [`0086fdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086fdd4.md) → [`0086fe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fe2c.md) FUN_0086fe2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086fe38",
      "incomplete_value": false,
      "site": "0086fe38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:730:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086fde0",
      "incomplete_value": false,
      "site": "0086fde0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:660:8"
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
      "0086fe38",
      "DATA",
      [
        "storage",
        "00c7f660",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086fe38",
      "DATA",
      [
        "storage",
        "00c7f730",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fddc ["COPY", "tmp:0:8", ["const:660:8"]]
- 0086fddc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086fddc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086fddc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086fe34 ["COPY", "tmp:0:8", ["const:730:8"]]
+ 0086fe34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086fe34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086fe34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f3e821af174985f403c62d95c06fc765"></a>

### [`0086fe30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086fe30.md) → [`0086fe88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fe88.md) FUN_0086fe88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086fe8c",
      "incomplete_value": false,
      "site": "0086fe90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086fe34",
      "incomplete_value": false,
      "site": "0086fe38",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:6f0:8"
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
      "0086fe90",
      "DATA",
      [
        "storage",
        "00c7f6f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0086fe90",
      "DATA",
      [
        "storage",
        "00c7f7c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fe34 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 0086fe34 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fe34 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fe34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086fe8c ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 0086fe8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086fe8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086fe8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a043d6567c5835f5cf6db1b24b80c07d"></a>

### [`0086fe40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086fe40.md) → [`0086fe98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fe98.md) FUN_0086fe98

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086fea8",
      "incomplete_value": false,
      "site": "0086feb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086fe50",
      "incomplete_value": false,
      "site": "0086fe58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:6f0:8"
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
      "0086feb0",
      "DATA",
      [
        "storage",
        "00c7f6f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0086feb0",
      "DATA",
      [
        "storage",
        "00c7f7c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fe50 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 0086fe50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fe50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fe50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086fea8 ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 0086fea8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086fea8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086fea8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0086fe5c ["INT_ADD", "register:40f0:8", ["const:86fe5c:8", "const:4:8"]]
- 0086fe5c ["CALL", null, ["callee:00c57f70:8"]]
+ 0086feb4 ["INT_ADD", "register:40f0:8", ["const:86feb4:8", "const:4:8"]]
+ 0086feb4 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-c08bdba38b6fdb4235f7b26d41728fc3"></a>

### [`0086fe84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086fe84.md) → [`0086fedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fedc.md) FUN_0086fedc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086fefc",
      "incomplete_value": false,
      "site": "0086ff00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086fea4",
      "incomplete_value": false,
      "site": "0086fea8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:740:8"
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
      "0086ff00",
      "DATA",
      [
        "storage",
        "00c7f740",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ff00",
      "DATA",
      [
        "storage",
        "00c7f810",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fe98 ["INT_ADD", "register:40f0:8", ["const:86fe98:8", "const:4:8"]]
- 0086fe98 ["CALL", null, ["callee:00c57f60:8"]]
+ 0086fef0 ["INT_ADD", "register:40f0:8", ["const:86fef0:8", "const:4:8"]]
+ 0086fef0 ["CALL", null, ["callee:00c57f60:8"]]
- 0086fea4 ["COPY", "tmp:0:8", ["const:740:8"]]
- 0086fea4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fea4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fea4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086fefc ["COPY", "tmp:0:8", ["const:810:8"]]
+ 0086fefc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086fefc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086fefc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7fecc5d1e11c0877f1d8ab7ce6b4b8da"></a>

### [`0086febc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086febc.md) → [`0086ff14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086ff14.md) FUN_0086ff14

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
      "definition_site": "0086ff18",
      "incomplete_value": false,
      "site": "0086ff1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:810:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086fec0",
      "incomplete_value": false,
      "site": "0086fec4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:740:8"
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
      "0086ff1c",
      "DATA",
      [
        "storage",
        "00c7f740",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ff1c",
      "DATA",
      [
        "storage",
        "00c7f810",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fec0 ["COPY", "tmp:0:8", ["const:740:8"]]
- 0086fec0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fec0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fec0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086ff18 ["COPY", "tmp:0:8", ["const:810:8"]]
+ 0086ff18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086ff18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086ff18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-63496e0b773b43280f457757f0afa231"></a>

### [`0086ff08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086ff08.md) → [`0086ff60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086ff60.md) FUN_0086ff60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0086fedc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086f/0086fedc.md) [`00870240`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870240.md) · 呼出先 7件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`005509b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b0.md) [`005509bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509bc.md) [`00597ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ec8.md) [`00a86810`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a86/00a86810.md)
- 新版 呼出元 2件 [`0086ff34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086ff34.md) [`00870298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870298.md) · 呼出先 7件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`005509fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509fc.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00a86880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86880.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.44% / 新版 93.44%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ff9c",
      "incomplete_value": true,
      "site": "0086ffb4",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:8b5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086ff44",
      "incomplete_value": true,
      "site": "0086ff5c",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:875:8"
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
      "definition_site": "0086ff9c",
      "incomplete_value": true,
      "site": "0086ffb8",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:8b5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086ff44",
      "incomplete_value": true,
      "site": "0086ff60",
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
                "const:2b7000:8"
              ],
              [
                "leaf",
                "const:875:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00870010",
      "incomplete_value": true,
      "site": "00870020",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:92f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086ffb8",
      "incomplete_value": true,
      "site": "0086ffc8",
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
                "const:2bb000:8"
              ],
              [
                "leaf",
                "const:983:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0086ff78",
      "PARAM",
      [
        "storage",
        "00cb4578",
        null,
        null
      ]
    ],
    [
      "0086ff9c",
      "READ",
      [
        "storage",
        "002b7875",
        null,
        "string"
      ]
    ],
    [
      "00870010",
      "READ",
      [
        "storage",
        "002bb983",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086ff78",
      "PARAM",
      [
        "storage",
        "00cb4678",
        null,
        null
      ]
    ],
    [
      "0086ff9c",
      "READ",
      [
        "storage",
        "002b78b5",
        null,
        "string"
      ]
    ],
    [
      "00870010",
      "READ",
      [
        "storage",
        "002bb92f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ff2c ["INT_ADD", "register:40f0:8", ["const:86ff2c:8", "const:4:8"]]
- 0086ff2c ["CALL", null, ["callee:00a86880:8"]]
+ 0086ff84 ["INT_ADD", "register:40f0:8", ["const:86ff84:8", "const:4:8"]]
+ 0086ff84 ["CALL", null, ["callee:00a86880:8"]]
- 0086ff20 ["COPY", "tmp:0:8", ["const:578:8"]]
- 0086ff20 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0086ff20 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0086ff20 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0086ff78 ["COPY", "tmp:0:8", ["const:678:8"]]
+ 0086ff78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0086ff78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0086ff78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 0086ff3c ["COPY", "tmp:0:8", ["const:875:8"]]
- 0086ff3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086ff3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086ff3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086ff94 ["COPY", "tmp:0:8", ["const:8b5:8"]]
+ 0086ff94 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ff94 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ff94 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-6cdcc7de7c3820194e7a865870ec246f"></a>

### [`008701e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/008701e8.md) → [`00870240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870240.md) FUN_00870240

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00870260",
      "incomplete_value": false,
      "site": "00870264",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00870208",
      "incomplete_value": false,
      "site": "0087020c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:7c0:8"
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
      "00870264",
      "DATA",
      [
        "storage",
        "00c7f7c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870264",
      "DATA",
      [
        "storage",
        "00c7f890",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008701fc ["INT_ADD", "register:40f0:8", ["const:8701fc:8", "const:4:8"]]
- 008701fc ["CALL", null, ["callee:00c57f60:8"]]
+ 00870254 ["INT_ADD", "register:40f0:8", ["const:870254:8", "const:4:8"]]
+ 00870254 ["CALL", null, ["callee:00c57f60:8"]]
- 00870208 ["COPY", "tmp:0:8", ["const:7c0:8"]]
- 00870208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870260 ["COPY", "tmp:0:8", ["const:890:8"]]
+ 00870260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-11e4d7a1b9fa12bd7072fbf5da21d7c9"></a>

### [`00870220`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870220.md) → [`00870278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870278.md) FUN_00870278

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
      "definition_site": "0087027c",
      "incomplete_value": false,
      "site": "00870280",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:890:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00870224",
      "incomplete_value": false,
      "site": "00870228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:7c0:8"
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
      "00870280",
      "DATA",
      [
        "storage",
        "00c7f7c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870280",
      "DATA",
      [
        "storage",
        "00c7f890",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870224 ["COPY", "tmp:0:8", ["const:7c0:8"]]
- 00870224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087027c ["COPY", "tmp:0:8", ["const:890:8"]]
+ 0087027c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087027c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087027c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9a90b6b8e6c72a73961bf1b48dedf842"></a>

### [`00870270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870270.md) → [`008702c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/008702c8.md) FUN_008702c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008702e8",
      "incomplete_value": false,
      "site": "008702ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00870290",
      "incomplete_value": false,
      "site": "00870294",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:840:8"
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
      "008702ec",
      "DATA",
      [
        "storage",
        "00c7f840",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008702ec",
      "DATA",
      [
        "storage",
        "00c7f910",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870284 ["INT_ADD", "register:40f0:8", ["const:870284:8", "const:4:8"]]
- 00870284 ["CALL", null, ["callee:00c57f60:8"]]
+ 008702dc ["INT_ADD", "register:40f0:8", ["const:8702dc:8", "const:4:8"]]
+ 008702dc ["CALL", null, ["callee:00c57f60:8"]]
- 00870290 ["COPY", "tmp:0:8", ["const:840:8"]]
- 00870290 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870290 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870290 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008702e8 ["COPY", "tmp:0:8", ["const:910:8"]]
+ 008702e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008702e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008702e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c44bfbfd515a447f71a59ba42fe6083c"></a>

### [`008702a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/008702a8.md) → [`00870300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870300.md) FUN_00870300

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
      "definition_site": "00870304",
      "incomplete_value": false,
      "site": "00870308",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:910:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008702ac",
      "incomplete_value": false,
      "site": "008702b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:840:8"
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
      "00870308",
      "DATA",
      [
        "storage",
        "00c7f840",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870308",
      "DATA",
      [
        "storage",
        "00c7f910",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008702ac ["COPY", "tmp:0:8", ["const:840:8"]]
- 008702ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008702ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008702ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870304 ["COPY", "tmp:0:8", ["const:910:8"]]
+ 00870304 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870304 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870304 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0f3df6f46811b515ebffd59a48606aea"></a>

### [`008702f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/008702f4.md) → [`0087034c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/0087034c.md) FUN_0087034c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008702c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/008702c8.md) [`00870c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870c7c.md) · 呼出先 16件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`005509b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/005509b0.md)
- 新版 呼出元 2件 [`00870320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870320.md) [`00870cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870cd4.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.43% / 新版 93.43%

優先判定に残った影響 `branch_value` 1件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00870394",
      "incomplete_value": true,
      "site": "00870394",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:e6d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087033c",
      "incomplete_value": true,
      "site": "0087033c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:ec9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00870398",
      "incomplete_value": true,
      "site": "00870398",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00870340",
      "incomplete_value": true,
      "site": "00870340",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:7:8"
              ]
            ]
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
      "definition_site": "008703f0",
      "incomplete_value": true,
      "site": "008703fc",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:502:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00870398",
      "incomplete_value": true,
      "site": "008703a4",
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
                "const:29f000:8"
              ],
              [
                "leaf",
                "const:54f:8"
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
      "0087037c",
      "READ",
      [
        "storage",
        "002aeec9",
        null,
        "string"
      ]
    ],
    [
      "00870380",
      "READ",
      [
        "storage",
        "002aeed0",
        null,
        "string"
      ]
    ],
    [
      "008703f0",
      "READ",
      [
        "storage",
        "0029f54f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0087037c",
      "READ",
      [
        "storage",
        "002aee6d",
        null,
        "string"
      ]
    ],
    [
      "00870380",
      "READ",
      [
        "storage",
        "002aee74",
        null,
        "string"
      ]
    ],
    [
      "008703f0",
      "READ",
      [
        "storage",
        "0029f502",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087034c ["INT_ADD", "register:40f0:8", ["const:87034c:8", "const:4:8"]]
- 0087034c ["CALL", null, ["callee:005509f0:8"]]
+ 008703a4 ["INT_ADD", "register:40f0:8", ["const:8703a4:8", "const:4:8"]]
+ 008703a4 ["CALL", null, ["callee:005509f0:8"]]
- 00870440 ["COPY", "tmp:0:8", ["const:212:8"]]
- 00870440 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00870440 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00870440 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00870498 ["COPY", "tmp:0:8", ["const:243:8"]]
+ 00870498 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00870498 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00870498 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087047c ["COPY", "tmp:0:8", ["const:6d1:8"]]
- 0087047c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087047c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087047c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008704d4 ["COPY", "tmp:0:8", ["const:67d:8"]]
+ 008704d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008704d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008704d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1eee9074de1c317302a440a44ed1f444"></a>

### [`00870c24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870c24.md) → [`00870c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870c7c.md) FUN_00870c7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00870c9c",
      "incomplete_value": false,
      "site": "00870ca0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00870c44",
      "incomplete_value": false,
      "site": "00870c48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
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
      "00870ca0",
      "DATA",
      [
        "storage",
        "00c7f8c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870ca0",
      "DATA",
      [
        "storage",
        "00c7f990",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870c38 ["INT_ADD", "register:40f0:8", ["const:870c38:8", "const:4:8"]]
- 00870c38 ["CALL", null, ["callee:00c57f60:8"]]
+ 00870c90 ["INT_ADD", "register:40f0:8", ["const:870c90:8", "const:4:8"]]
+ 00870c90 ["CALL", null, ["callee:00c57f60:8"]]
- 00870c44 ["COPY", "tmp:0:8", ["const:8c0:8"]]
- 00870c44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870c44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870c44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870c9c ["COPY", "tmp:0:8", ["const:990:8"]]
+ 00870c9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870c9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870c9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c2da157b64ccce3dc24d8aeb7467f8c2"></a>

### [`00870c5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870c5c.md) → [`00870cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870cb4.md) FUN_00870cb4

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
      "definition_site": "00870cb8",
      "incomplete_value": false,
      "site": "00870cbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:990:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00870c60",
      "incomplete_value": false,
      "site": "00870c64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:8c0:8"
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
      "00870cbc",
      "DATA",
      [
        "storage",
        "00c7f8c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870cbc",
      "DATA",
      [
        "storage",
        "00c7f990",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870c60 ["COPY", "tmp:0:8", ["const:8c0:8"]]
- 00870c60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870c60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870c60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870cb8 ["COPY", "tmp:0:8", ["const:990:8"]]
+ 00870cb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870cb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870cb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ea7b70773ec82a8386f7bfe860b86269"></a>

### [`00870ca8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00870/00870ca8.md) → [`00870d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d00.md) FUN_00870d00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0085d4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085d/0085d4f4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00870d0c",
      "incomplete_value": false,
      "site": "00870d10",
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
    "old": {
      "definition_site": "00870cb4",
      "incomplete_value": false,
      "site": "00870cb8",
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
            "const:f4c:8"
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
      "00870d0c",
      "PARAM",
      [
        "storage",
        "002b7f4c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00870d0c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870cb8 ["INT_ADD", "register:40f0:8", ["const:870cb8:8", "const:4:8"]]
- 00870cb8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00870d10 ["INT_ADD", "register:40f0:8", ["const:870d10:8", "const:4:8"]]
+ 00870d10 ["CALL", null, ["callee:0043b7b8:8"]]
- 00870cb4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00870cb4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00870cb4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00870cb4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00870d0c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00870d0c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00870d0c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00870d0c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4fbd5169dfa88e82d430d4d6550c30c3"></a>

### [`00871938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871938.md) → [`00871990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871990.md) FUN_00871990

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008719b4",
      "incomplete_value": false,
      "site": "008719b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087195c",
      "incomplete_value": false,
      "site": "0087195c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:940:8"
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
      "008719b4",
      "DATA",
      [
        "storage",
        "00c7f940",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008719b4",
      "DATA",
      [
        "storage",
        "00c7fa10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087194c ["INT_ADD", "register:40f0:8", ["const:87194c:8", "const:4:8"]]
- 0087194c ["CALL", null, ["callee:00c57f60:8"]]
+ 008719a4 ["INT_ADD", "register:40f0:8", ["const:8719a4:8", "const:4:8"]]
+ 008719a4 ["CALL", null, ["callee:00c57f60:8"]]
- 00871958 ["COPY", "tmp:0:8", ["const:940:8"]]
- 00871958 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00871958 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00871958 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008719b0 ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 008719b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008719b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008719b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cd7c8759489c5c2320fc8299764489e4"></a>

### [`0087196c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/0087196c.md) → [`008719c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008719c4.md) FUN_008719c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008719d0",
      "incomplete_value": false,
      "site": "008719d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871978",
      "incomplete_value": false,
      "site": "00871978",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:940:8"
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
      "008719d0",
      "DATA",
      [
        "storage",
        "00c7f940",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008719d0",
      "DATA",
      [
        "storage",
        "00c7fa10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871974 ["COPY", "tmp:0:8", ["const:940:8"]]
- 00871974 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00871974 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00871974 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008719cc ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 008719cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008719cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008719cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9883dbe99481d1940f348cb4e3fdc6b5"></a>

### [`00871988`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871988.md) → [`008719e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008719e0.md) FUN_008719e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0085d4f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085d/0085d4f4.md) · 呼出先 10件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`008001ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/008001ec.md) [`00801c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00801/00801c44.md) [`00801c90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00801/00801c90.md) [`008056ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00805/008056ec.md)
- 新版 呼出元 1件 [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) · 呼出先 10件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`00801c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801c9c.md) [`00801ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801ce8.md) [`00805744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/00805744.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.97% / 新版 98.97%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00871b5c",
      "incomplete_value": false,
      "site": "00871b60",
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
            "const:da5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871b04",
      "incomplete_value": false,
      "site": "00871b08",
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
            "const:d74:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00871b5c",
      "PARAM",
      [
        "storage",
        "002b3d74",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00871b5c",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871b08 ["INT_ADD", "register:40f0:8", ["const:871b08:8", "const:4:8"]]
- 00871b08 ["CALL", null, ["callee:00442970:8"]]
+ 00871b60 ["INT_ADD", "register:40f0:8", ["const:871b60:8", "const:4:8"]]
+ 00871b60 ["CALL", null, ["callee:00442970:8"]]
- 008719b8 ["INT_ADD", "register:40f0:8", ["const:8719b8:8", "const:4:8"]]
- 008719b8 ["CALL", null, ["callee:00800244:8"]]
+ 00871a10 ["INT_ADD", "register:40f0:8", ["const:871a10:8", "const:4:8"]]
+ 00871a10 ["CALL", null, ["callee:00800244:8"]]
- 008719d0 ["INT_ADD", "register:40f0:8", ["const:8719d0:8", "const:4:8"]]
- 008719d0 ["CALL", null, ["callee:00801ce8:8"]]
+ 00871a28 ["INT_ADD", "register:40f0:8", ["const:871a28:8", "const:4:8"]]
+ 00871a28 ["CALL", null, ["callee:00801ce8:8"]]
~~~


<a id="compare-2fbeb719e1515a10ccc1cb68d1973af6"></a>

### [`00871b3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871b3c.md) → [`00871b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871b94.md) FUN_00871b94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00871bb8",
      "incomplete_value": false,
      "site": "00871bb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871b60",
      "incomplete_value": false,
      "site": "00871b60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
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
      "00871bb8",
      "DATA",
      [
        "storage",
        "00c7f9d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871bb8",
      "DATA",
      [
        "storage",
        "00c7faa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871b50 ["INT_ADD", "register:40f0:8", ["const:871b50:8", "const:4:8"]]
- 00871b50 ["CALL", null, ["callee:00c57f60:8"]]
+ 00871ba8 ["INT_ADD", "register:40f0:8", ["const:871ba8:8", "const:4:8"]]
+ 00871ba8 ["CALL", null, ["callee:00c57f60:8"]]
- 00871b5c ["COPY", "tmp:0:8", ["const:9d0:8"]]
- 00871b5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00871b5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00871b5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00871bb4 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 00871bb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00871bb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00871bb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8fe36f83b66eaf427c4b0f9a6ca645c"></a>

### [`00871b70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871b70.md) → [`00871bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871bc8.md) FUN_00871bc8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00871bd4",
      "incomplete_value": false,
      "site": "00871bd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871b7c",
      "incomplete_value": false,
      "site": "00871b7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:9d0:8"
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
      "00871bd4",
      "DATA",
      [
        "storage",
        "00c7f9d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871bd4",
      "DATA",
      [
        "storage",
        "00c7faa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871b78 ["COPY", "tmp:0:8", ["const:9d0:8"]]
- 00871b78 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00871b78 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00871b78 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00871bd0 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 00871bd0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00871bd0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00871bd0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9a9f3ee51dc57c087ef66ce750386a47"></a>

### [`00871ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871ec8.md) → [`00871f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871f20.md) FUN_00871f20

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00871f28",
      "incomplete_value": false,
      "site": "00871f2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871ed0",
      "incomplete_value": false,
      "site": "00871ed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a60:8"
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
      "00871f2c",
      "DATA",
      [
        "storage",
        "00c7fa60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871f2c",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871ed0 ["COPY", "tmp:0:8", ["const:a60:8"]]
- 00871ed0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00871ed0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00871ed0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00871f28 ["COPY", "tmp:0:8", ["const:b30:8"]]
+ 00871f28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00871f28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00871f28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1e61d81450a0df1f74759420f5f1156c"></a>

### [`00871ee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871ee8.md) → [`00871f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871f40.md) FUN_00871f40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00871f48",
      "incomplete_value": false,
      "site": "00871f4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871ef0",
      "incomplete_value": false,
      "site": "00871ef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a60:8"
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
      "00871f4c",
      "DATA",
      [
        "storage",
        "00c7fa60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871f4c",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871ef0 ["COPY", "tmp:0:8", ["const:a60:8"]]
- 00871ef0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00871ef0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00871ef0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00871f48 ["COPY", "tmp:0:8", ["const:b30:8"]]
+ 00871f48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00871f48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00871f48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00871f14 ["INT_ADD", "register:40f0:8", ["const:871f14:8", "const:4:8"]]
- 00871f14 ["CALL", null, ["callee:00c57f80:8"]]
+ 00871f6c ["INT_ADD", "register:40f0:8", ["const:871f6c:8", "const:4:8"]]
+ 00871f6c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-a217a2caf10c48dc356be5da4529ece0"></a>

### [`00871f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871f28.md) → [`00871f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871f80.md) FUN_00871f80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00871fac",
      "incomplete_value": false,
      "site": "00871fac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871f54",
      "incomplete_value": false,
      "site": "00871f54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a60:8"
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
      "00871fac",
      "DATA",
      [
        "storage",
        "00c7fa60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871fac",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871f3c ["INT_ADD", "register:40f0:8", ["const:871f3c:8", "const:4:8"]]
- 00871f3c ["CALL", null, ["callee:00c57f60:8"]]
+ 00871f94 ["INT_ADD", "register:40f0:8", ["const:871f94:8", "const:4:8"]]
+ 00871f94 ["CALL", null, ["callee:00c57f60:8"]]
- 00871f4c ["COPY", "tmp:0:8", ["const:a60:8"]]
- 00871f4c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00871f4c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00871f4c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00871fa4 ["COPY", "tmp:0:8", ["const:b30:8"]]
+ 00871fa4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00871fa4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00871fa4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00871f74 ["INT_ADD", "register:40f0:8", ["const:871f74:8", "const:4:8"]]
- 00871f74 ["CALL", null, ["callee:0043bb60:8"]]
+ 00871fcc ["INT_ADD", "register:40f0:8", ["const:871fcc:8", "const:4:8"]]
+ 00871fcc ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-e4ee71cf10e5c9095f5421c6c27a763c"></a>

### [`00871f9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00871/00871f9c.md) → [`00871ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871ff4.md) FUN_00871ff4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00871ffc",
      "incomplete_value": false,
      "site": "00871ffc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871fa4",
      "incomplete_value": false,
      "site": "00871fa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:a60:8"
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
      "00871ffc",
      "DATA",
      [
        "storage",
        "00c7fa60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871ffc",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871fa0 ["COPY", "tmp:0:8", ["const:a60:8"]]
- 00871fa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00871fa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00871fa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00871ff8 ["COPY", "tmp:0:8", ["const:b30:8"]]
+ 00871ff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00871ff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00871ff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-008bf73a33f55f219d37304329e2dcd4"></a>

### [`00872020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872020.md) → [`00872078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872078.md) FUN_00872078

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087209c",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00872044",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008720a4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087204c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0087209c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008720a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "0087209c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008720a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872044 ["INT_ADD", "register:40f0:8", ["const:872044:8", "const:4:8"]]
- 00872044 ["CALL", null, ["ram:48ccf8:8"]]
+ 0087209c ["INT_ADD", "register:40f0:8", ["const:87209c:8", "const:4:8"]]
+ 0087209c ["CALL", null, ["ram:48cd38:8"]]
- 0087204c ["INT_ADD", "register:40f0:8", ["const:87204c:8", "const:4:8"]]
- 0087204c ["CALL", null, ["ram:48ccf8:8"]]
+ 008720a4 ["INT_ADD", "register:40f0:8", ["const:8720a4:8", "const:4:8"]]
+ 008720a4 ["CALL", null, ["ram:48cd38:8"]]
- 00872048 ["INT_ADD", "register:40f0:8", ["const:872048:8", "const:4:8"]]
- 00872048 ["CALL", null, ["callee:0048e820:8"]]
+ 008720a0 ["INT_ADD", "register:40f0:8", ["const:8720a0:8", "const:4:8"]]
+ 008720a0 ["CALL", null, ["callee:0048e820:8"]]
~~~


<a id="compare-16606ec2361b8bd64c71623b07933eb7"></a>

### [`008720f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/008720f8.md) → [`00872150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872150.md) FUN_00872150

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00872158",
      "incomplete_value": true,
      "site": "0087215c",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00872100",
      "incomplete_value": true,
      "site": "00872104",
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
            "const:ae0:8"
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
      "0087215c",
      "DATA",
      [
        "storage",
        "00c7fae0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087215c",
      "DATA",
      [
        "storage",
        "00c7fbb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872100 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 00872100 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00872100 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00872100 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00872158 ["COPY", "tmp:0:8", ["const:bb0:8"]]
+ 00872158 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00872158 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00872158 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1b705b98f2e6dec99b39848951c74a98"></a>

### [`00872118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872118.md) → [`00872170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872170.md) FUN_00872170

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00872178",
      "incomplete_value": false,
      "site": "0087217c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00872120",
      "incomplete_value": false,
      "site": "00872124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:ae0:8"
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
      "0087217c",
      "DATA",
      [
        "storage",
        "00c7fae0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087217c",
      "DATA",
      [
        "storage",
        "00c7fbb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872120 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 00872120 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00872120 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00872120 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00872178 ["COPY", "tmp:0:8", ["const:bb0:8"]]
+ 00872178 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00872178 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00872178 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00872144 ["INT_ADD", "register:40f0:8", ["const:872144:8", "const:4:8"]]
- 00872144 ["CALL", null, ["callee:00c57f80:8"]]
+ 0087219c ["INT_ADD", "register:40f0:8", ["const:87219c:8", "const:4:8"]]
+ 0087219c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-8c9c8ffc43b6bb2f8d69426ef0b7af84"></a>

### [`008721cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/008721cc.md) → [`00872224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872224.md) FUN_00872224

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087222c",
      "incomplete_value": false,
      "site": "0087222c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:bb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008721d4",
      "incomplete_value": false,
      "site": "008721d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:ae0:8"
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
      "0087222c",
      "DATA",
      [
        "storage",
        "00c7fae0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087222c",
      "DATA",
      [
        "storage",
        "00c7fbb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008721d0 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 008721d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008721d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008721d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00872228 ["COPY", "tmp:0:8", ["const:bb0:8"]]
+ 00872228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00872228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00872228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b7ed057fbb5820131dbcd688343e3d2a"></a>

### [`00872250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872250.md) → [`008722a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008722a8.md) FUN_008722a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048e7e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048e/0048e7e0.md) [`004928ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/004928ac.md) [`00492d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492d04.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008722cc",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00872274",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008722d4",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0087227c",
      "value": [
        "leaf",
        "ram:48ccf8:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "008722cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "008722d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "008722cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "008722d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872274 ["INT_ADD", "register:40f0:8", ["const:872274:8", "const:4:8"]]
- 00872274 ["CALL", null, ["ram:48ccf8:8"]]
+ 008722cc ["INT_ADD", "register:40f0:8", ["const:8722cc:8", "const:4:8"]]
+ 008722cc ["CALL", null, ["ram:48cd38:8"]]
- 0087227c ["INT_ADD", "register:40f0:8", ["const:87227c:8", "const:4:8"]]
- 0087227c ["CALL", null, ["ram:48ccf8:8"]]
+ 008722d4 ["INT_ADD", "register:40f0:8", ["const:8722d4:8", "const:4:8"]]
+ 008722d4 ["CALL", null, ["ram:48cd38:8"]]
- 00872278 ["INT_ADD", "register:40f0:8", ["const:872278:8", "const:4:8"]]
- 00872278 ["CALL", null, ["callee:0048e820:8"]]
+ 008722d0 ["INT_ADD", "register:40f0:8", ["const:8722d0:8", "const:4:8"]]
+ 008722d0 ["CALL", null, ["callee:0048e820:8"]]
~~~


<a id="compare-41361d4b34be64cb959fc829d40ea345"></a>

### [`00872328`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872328.md) → [`00872380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872380.md) FUN_00872380

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00872384",
      "incomplete_value": false,
      "site": "00872388",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087232c",
      "incomplete_value": false,
      "site": "00872330",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:b78:8"
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
      "00872388",
      "DATA",
      [
        "storage",
        "00c7fb78",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00872388",
      "DATA",
      [
        "storage",
        "00c7fc48",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087232c ["COPY", "tmp:0:8", ["const:b78:8"]]
- 0087232c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087232c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087232c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00872384 ["COPY", "tmp:0:8", ["const:c48:8"]]
+ 00872384 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00872384 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00872384 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3a1ebd3d540cf8cff1cefc73cb97e3eb"></a>

### [`00872378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872378.md) → [`008723d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008723d0.md) FUN_008723d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0085b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b430.md) · 呼出先 6件 [`004440e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/004440e0.md) [`00444680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444680.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) · 呼出先 6件 [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`004446c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004446c0.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.54% / 新版 95.54%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00872410",
      "incomplete_value": false,
      "site": "00872410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008723b8",
      "incomplete_value": false,
      "site": "008723b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:bc8:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00872428",
      "incomplete_value": false,
      "site": "00872430",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ee000:8"
          ],
          [
            "leaf",
            "const:e0c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008723d0",
      "incomplete_value": false,
      "site": "008723d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ee000:8"
          ],
          [
            "leaf",
            "const:dcc:8"
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
      "00872410",
      "DATA",
      [
        "storage",
        "00c7fbc8",
        null,
        "undefined *"
      ]
    ],
    [
      "00872428",
      "PARAM",
      [
        "storage",
        "002eedcc",
        null,
        "string"
      ]
    ],
    [
      "00872488",
      "READ",
      [
        "storage",
        "002a7e0b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00872410",
      "DATA",
      [
        "storage",
        "00c7fc98",
        null,
        "undefined *"
      ]
    ],
    [
      "00872428",
      "PARAM",
      [
        "storage",
        "002eee0c",
        null,
        "string"
      ]
    ],
    [
      "00872488",
      "READ",
      [
        "storage",
        "002a7daf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 008723d8 ["INT_ADD", "register:40f0:8", ["const:8723d8:8", "const:4:8"]]
- 008723d8 ["CALL", null, ["callee:00c58260:8"]]
+ 00872430 ["INT_ADD", "register:40f0:8", ["const:872430:8", "const:4:8"]]
+ 00872430 ["CALL", null, ["callee:00c58260:8"]]
- 008723b4 ["COPY", "tmp:0:8", ["const:bc8:8"]]
- 008723b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008723b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008723b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087240c ["COPY", "tmp:0:8", ["const:c98:8"]]
+ 0087240c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087240c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087240c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008723d0 ["COPY", "tmp:0:8", ["const:dcc:8"]]
- 008723d0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 008723d0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 008723d0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00872428 ["COPY", "tmp:0:8", ["const:e0c:8"]]
+ 00872428 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00872428 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00872428 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-179ad44ec5696834baf65584f238a838"></a>

### [`008725a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/008725a0.md) → [`008725f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008725f8.md) FUN_008725f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`008729ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/008729ec.md) · 呼出先 5件 [`004847c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00484/004847c0.md) [`00493998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00493/00493998.md) [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00872a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a44.md) · 呼出先 5件 [`00484800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00484/00484800.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 87.45% / 新版 87.45%

優先判定に残った影響 `call_argument_candidate` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087265c",
      "incomplete_value": false,
      "site": "00872664",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1121000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00872604",
      "incomplete_value": false,
      "site": "0087260c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1121000:8"
          ],
          [
            "leaf",
            "const:8d8:8"
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
      "definition_site": "0087266c",
      "incomplete_value": false,
      "site": "00872674",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1122000:8"
          ],
          [
            "leaf",
            "const:c70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00872614",
      "incomplete_value": false,
      "site": "0087261c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1122000:8"
          ],
          [
            "leaf",
            "const:b70:8"
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
      "definition_site": "00872694",
      "incomplete_value": false,
      "site": "0087269c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1121000:8"
          ],
          [
            "leaf",
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087263c",
      "incomplete_value": false,
      "site": "00872644",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1121000:8"
          ],
          [
            "leaf",
            "const:908:8"
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
      "00872638",
      "DATA",
      [
        "storage",
        "00c7fbc8",
        null,
        "undefined *"
      ]
    ],
    [
      "00872640",
      "READ",
      [
        "storage",
        "00fe0878",
        null,
        "undefined1"
      ]
    ],
    [
      "00872650",
      "READ",
      [
        "storage",
        "01070513",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00872638",
      "DATA",
      [
        "storage",
        "00c7fc98",
        null,
        "undefined *"
      ]
    ],
    [
      "00872640",
      "READ",
      [
        "storage",
        "00fe0978",
        null,
        "undefined1"
      ]
    ],
    [
      "00872650",
      "READ",
      [
        "storage",
        "01070613",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 008725c4 ["COPY", "tmp:0:8", ["const:bc8:8"]]
- 008725c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008725c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008725c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087261c ["COPY", "tmp:0:8", ["const:c98:8"]]
+ 0087261c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087261c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087261c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0087260c ["INT_ADD", "register:40f0:8", ["const:87260c:8", "const:4:8"]]
- 0087260c ["CALL", null, ["callee:00484800:8"]]
+ 00872664 ["INT_ADD", "register:40f0:8", ["const:872664:8", "const:4:8"]]
+ 00872664 ["CALL", null, ["callee:00484800:8"]]
- 0087261c ["INT_ADD", "register:40f0:8", ["const:87261c:8", "const:4:8"]]
- 0087261c ["CALL", null, ["callee:004939d8:8"]]
+ 00872674 ["INT_ADD", "register:40f0:8", ["const:872674:8", "const:4:8"]]
+ 00872674 ["CALL", null, ["callee:004939d8:8"]]
~~~


<a id="compare-b1374b4b6b92d8cc340d3a2269099ce6"></a>

### [`00872a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872a10.md) → [`00872a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a68.md) FUN_00872a68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`004440e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/004440e0.md) [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 85.26% / 新版 85.26%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 5件, `call_target` 2件, `store_destination` 9件, `store_value` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00872ce0",
      "incomplete_value": false,
      "site": "00872ce0",
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
                "const:ca5000:8"
              ],
              [
                "leaf",
                "const:0:8"
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
      "definition_site": "00872c88",
      "incomplete_value": false,
      "site": "00872c88",
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
                "const:ca4000:8"
              ],
              [
                "leaf",
                "const:f00:8"
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
    "ordinal": 24,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00872ce4",
      "incomplete_value": false,
      "site": "00872ce4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca5000:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00872c8c",
      "incomplete_value": false,
      "site": "00872c8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca4000:8"
          ],
          [
            "leaf",
            "const:f00:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00872ce0",
      "incomplete_value": false,
      "site": "00872ce4",
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
                "const:ca5000:8"
              ],
              [
                "leaf",
                "const:0:8"
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
      "definition_site": "00872c88",
      "incomplete_value": false,
      "site": "00872c8c",
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
                "const:ca4000:8"
              ],
              [
                "leaf",
                "const:f00:8"
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
      "00872aa0",
      "PARAM",
      [
        "storage",
        "00ca8170",
        null,
        null
      ]
    ],
    [
      "00872aa4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009ccb7c"
      ]
    ],
    [
      "00872b14",
      "READ",
      [
        "storage",
        "002a7e1b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00872aa0",
      "PARAM",
      [
        "storage",
        "00ca8270",
        null,
        null
      ]
    ],
    [
      "00872aa4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009ccbd0"
      ]
    ],
    [
      "00872b14",
      "READ",
      [
        "storage",
        "002a7dbf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872a4c ["INT_ADD", "register:40f0:8", ["const:872a4c:8", "const:4:8"]]
- 00872a4c ["CALL", null, ["ram:9ccb7c:8"]]
+ 00872aa4 ["INT_ADD", "register:40f0:8", ["const:872aa4:8", "const:4:8"]]
+ 00872aa4 ["CALL", null, ["ram:9ccbd0:8"]]
- 00872b7c ["INT_ADD", "register:40f0:8", ["const:872b7c:8", "const:4:8"]]
- 00872b7c ["CALL", null, ["callee:0047e91c:8"]]
+ 00872bd4 ["INT_ADD", "register:40f0:8", ["const:872bd4:8", "const:4:8"]]
+ 00872bd4 ["CALL", null, ["callee:0047e91c:8"]]
- 00872c0c ["INT_ADD", "register:40f0:8", ["const:872c0c:8", "const:4:8"]]
- 00872c0c ["CALL", null, ["callee:00c57f80:8"]]
+ 00872c64 ["INT_ADD", "register:40f0:8", ["const:872c64:8", "const:4:8"]]
+ 00872c64 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ecb7b1aea9f74656371c4e0e9aec50c3"></a>

### [`00873048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873048.md) → [`008730a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730a0.md) FUN_008730a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "008730a4",
      "incomplete_value": true,
      "site": "008730a8",
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
            "const:ce0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087304c",
      "incomplete_value": true,
      "site": "00873050",
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
            "const:c10:8"
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
      "008730a8",
      "DATA",
      [
        "storage",
        "00c7fc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008730a8",
      "DATA",
      [
        "storage",
        "00c7fce0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087304c ["COPY", "tmp:0:8", ["const:c10:8"]]
- 0087304c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087304c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087304c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008730a4 ["COPY", "tmp:0:8", ["const:ce0:8"]]
+ 008730a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008730a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008730a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-366961453a7a17d89d3ebf0783972b43"></a>

### [`00873058`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873058.md) → [`008730b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730b0.md) FUN_008730b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57ea0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ea0.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008730c0",
      "incomplete_value": false,
      "site": "008730c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:ce0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873068",
      "incomplete_value": false,
      "site": "00873070",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c10:8"
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
      "008730c8",
      "DATA",
      [
        "storage",
        "00c7fc10",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "008730c8",
      "DATA",
      [
        "storage",
        "00c7fce0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873068 ["COPY", "tmp:0:8", ["const:c10:8"]]
- 00873068 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00873068 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00873068 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008730c0 ["COPY", "tmp:0:8", ["const:ce0:8"]]
+ 008730c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008730c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008730c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00873074 ["INT_ADD", "register:40f0:8", ["const:873074:8", "const:4:8"]]
- 00873074 ["CALL", null, ["callee:00c57f70:8"]]
+ 008730cc ["INT_ADD", "register:40f0:8", ["const:8730cc:8", "const:4:8"]]
+ 008730cc ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-2070f0484cc13bafb0b387563ea36753"></a>

### [`00873098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873098.md) → [`008730f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730f0.md) FUN_008730f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0085b430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b430.md) [`008766f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/008766f4.md) · 呼出先 12件 [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00597ec8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597ec8.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 2件 [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`0087674c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/0087674c.md) · 呼出先 12件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.04% / 新版 89.04%

優先判定に残った影響 `call_argument_candidate` 6件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00873134",
      "incomplete_value": false,
      "site": "00873134",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008730dc",
      "incomplete_value": false,
      "site": "008730dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c60:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087319c",
      "incomplete_value": true,
      "site": "0087319c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b0000:8"
              ],
              [
                "leaf",
                "const:93e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873144",
      "incomplete_value": true,
      "site": "00873144",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b0000:8"
              ],
              [
                "leaf",
                "const:99a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00873154",
      "incomplete_value": false,
      "site": "0087315c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ee000:8"
          ],
          [
            "leaf",
            "const:e70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008730fc",
      "incomplete_value": false,
      "site": "00873104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ee000:8"
          ],
          [
            "leaf",
            "const:e30:8"
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
      "00873134",
      "DATA",
      [
        "storage",
        "00c7fc60",
        null,
        "undefined *"
      ]
    ],
    [
      "00873154",
      "PARAM",
      [
        "storage",
        "002eee30",
        null,
        "string"
      ]
    ],
    [
      "00873168",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00873134",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ],
    [
      "00873154",
      "PARAM",
      [
        "storage",
        "002eee70",
        null,
        "string"
      ]
    ],
    [
      "00873168",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873104 ["INT_ADD", "register:40f0:8", ["const:873104:8", "const:4:8"]]
- 00873104 ["CALL", null, ["callee:00c58260:8"]]
+ 0087315c ["INT_ADD", "register:40f0:8", ["const:87315c:8", "const:4:8"]]
+ 0087315c ["CALL", null, ["callee:00c58260:8"]]
- 00873180 ["INT_ADD", "register:40f0:8", ["const:873180:8", "const:4:8"]]
- 00873180 ["CALL", null, ["callee:0047e64c:8"]]
+ 008731d8 ["INT_ADD", "register:40f0:8", ["const:8731d8:8", "const:4:8"]]
+ 008731d8 ["CALL", null, ["callee:0047e64c:8"]]
- 0087335c ["INT_ADD", "register:40f0:8", ["const:87335c:8", "const:4:8"]]
- 0087335c ["CALL", null, ["callee:00c57f20:8"]]
+ 008733b4 ["INT_ADD", "register:40f0:8", ["const:8733b4:8", "const:4:8"]]
+ 008733b4 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-360ff2bbd5e5fac64219de5e2e93a5f5"></a>

### [`00873494`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873494.md) → [`008734ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008734ec.md) FUN_008734ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00873504",
      "incomplete_value": false,
      "site": "00873508",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008734ac",
      "incomplete_value": false,
      "site": "008734b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c60:8"
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
      "00873508",
      "DATA",
      [
        "storage",
        "00c7fc60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00873508",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873508 ["COPY", "register:0:8", ["register:4040:8"]]
- 00873508 ["INT_ADD", "register:40f0:8", ["const:873508:8", "const:4:8"]]
- 00873508 ["CALLIND", null, ["register:0:8"]]
+ 00873560 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00873560 ["INT_ADD", "register:40f0:8", ["const:873560:8", "const:4:8"]]
+ 00873560 ["CALLIND", null, ["register:0:8"]]
- 008734ac ["COPY", "tmp:0:8", ["const:c60:8"]]
- 008734ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008734ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008734ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00873504 ["COPY", "tmp:0:8", ["const:d30:8"]]
+ 00873504 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00873504 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00873504 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008734bc ["INT_ADD", "register:40f0:8", ["const:8734bc:8", "const:4:8"]]
- 008734bc ["CALL", null, ["callee:00c57f80:8"]]
+ 00873514 ["INT_ADD", "register:40f0:8", ["const:873514:8", "const:4:8"]]
+ 00873514 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-755069c5e87619ae2c79fd1cd7766a4e"></a>

### [`00873540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00873/00873540.md) → [`00873598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873598.md) FUN_00873598

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008735b0",
      "incomplete_value": false,
      "site": "008735b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873558",
      "incomplete_value": false,
      "site": "0087355c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c7f000:8"
          ],
          [
            "leaf",
            "const:c60:8"
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
      "008735b4",
      "DATA",
      [
        "storage",
        "00c7fc60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008735b4",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873558 ["COPY", "tmp:0:8", ["const:c60:8"]]
- 00873558 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00873558 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00873558 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 008735b0 ["COPY", "tmp:0:8", ["const:d30:8"]]
+ 008735b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 008735b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 008735b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00873568 ["INT_ADD", "register:40f0:8", ["const:873568:8", "const:4:8"]]
- 00873568 ["CALL", null, ["callee:00c57f80:8"]]
+ 008735c0 ["INT_ADD", "register:40f0:8", ["const:8735c0:8", "const:4:8"]]
+ 008735c0 ["CALL", null, ["callee:00c57f80:8"]]
- 0087357c ["INT_ADD", "register:40f0:8", ["const:87357c:8", "const:4:8"]]
- 0087357c ["CALL", null, ["callee:00c53da0:8"]]
+ 008735d4 ["INT_ADD", "register:40f0:8", ["const:8735d4:8", "const:4:8"]]
+ 008735d4 ["CALL", null, ["callee:00c53da0:8"]]
~~~


