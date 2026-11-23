# v16.0.1 → v16.0.2 · 最優先の変更候補 (1)

[一覧の目次](README.md)

<a id="compare-ad5d46be3ba9f5892d3705d1e4f50e53"></a>

### [`0043ae78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae78.md) → [`0043aeb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb8.md) _INIT_3

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00bfa110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00bfa/00bfa110.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00bfa1ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1ac.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 65.22% / 新版 65.22%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043aed4",
      "incomplete_value": false,
      "site": "0043aed8",
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
            "const:a00:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043ae94",
      "incomplete_value": false,
      "site": "0043ae98",
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
            "const:900:8"
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
      "definition_site": "0043aeec",
      "incomplete_value": true,
      "site": "0043aef8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043aeac",
      "incomplete_value": true,
      "site": "0043aeb8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b60:8"
              ]
            ]
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
      "definition_site": "0043aee8",
      "incomplete_value": false,
      "site": "0043aef8",
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
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043aea8",
      "incomplete_value": false,
      "site": "0043aeb8",
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
            "const:8d8:8"
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
      "0043aec8",
      "READ",
      [
        "storage",
        "00ca4900",
        null,
        "undefined1"
      ]
    ],
    [
      "0043aed4",
      "PARAM",
      [
        "storage",
        "00ca4900",
        null,
        "undefined1"
      ]
    ],
    [
      "0043aee8",
      "PARAM",
      [
        "storage",
        "00ca48d8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0043aec8",
      "READ",
      [
        "storage",
        "00ca4a00",
        null,
        "undefined1"
      ]
    ],
    [
      "0043aed4",
      "PARAM",
      [
        "storage",
        "00ca4a00",
        null,
        "undefined1"
      ]
    ],
    [
      "0043aee8",
      "PARAM",
      [
        "storage",
        "00ca49d8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0043ae98 ["INT_ADD", "register:40f0:8", ["const:43ae98:8", "const:4:8"]]
- 0043ae98 ["CALL", null, ["callee:00c57f20:8"]]
+ 0043aed8 ["INT_ADD", "register:40f0:8", ["const:43aed8:8", "const:4:8"]]
+ 0043aed8 ["CALL", null, ["callee:00c57f20:8"]]
- 0043aeb8 ["INT_ADD", "register:40f0:8", ["const:43aeb8:8", "const:4:8"]]
- 0043aeb8 ["CALL", null, ["callee:00c57f00:8"]]
+ 0043aef8 ["INT_ADD", "register:40f0:8", ["const:43aef8:8", "const:4:8"]]
+ 0043aef8 ["CALL", null, ["callee:00c57f00:8"]]
- 0043ae84 ["COPY", "tmp:0:8", ["const:900:8"]]
- 0043ae84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043ae84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043ae84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043aec4 ["COPY", "tmp:0:8", ["const:a00:8"]]
+ 0043aec4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043aec4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043aec4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-55926f8441c1c1465b68c5768b543c43"></a>

### [`0043af2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043af2c.md) → [`0043af6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043af6c.md) Java_jp_co_ponos_battlecats_MyActivity_appInit

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0055f4c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0055f/0055f4c0.md) [`0056ab68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0056a/0056ab68.md) [`00b2b8ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2b8ec.md) [`00b2c200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2c200.md) [`00b2ce48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2ce48.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0055f500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f500.md) [`0056aba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0056a/0056aba8.md) [`00b2b988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b988.md) [`00b2c29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c29c.md) [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_condition, store_destination, store_value

命令の説明率　旧版 82.22% / 新版 82.22%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_destination` 2件, `store_value` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043afb0",
      "incomplete_value": false,
      "site": "0043afbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043af70",
      "incomplete_value": false,
      "site": "0043af7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:fa8:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043afd4",
      "incomplete_value": false,
      "site": "0043afd4",
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
            "const:a10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043af94",
      "incomplete_value": false,
      "site": "0043af94",
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
            "const:910:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043afd4",
      "incomplete_value": false,
      "site": "0043afd4",
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
                "const:a10:8"
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
      "definition_site": "0043af94",
      "incomplete_value": false,
      "site": "0043af94",
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
                "const:910:8"
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
    "ordinal": 10,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043af80",
      "READ",
      [
        "storage",
        "00ca4910",
        null,
        "undefined8"
      ]
    ],
    [
      "0043afbc",
      "DATA",
      [
        "storage",
        "00c62fa8",
        null,
        "undefined *"
      ]
    ],
    [
      "0043afd0",
      "READ",
      [
        "storage",
        "00ca4918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0043af80",
      "READ",
      [
        "storage",
        "00ca4a10",
        null,
        "undefined8"
      ]
    ],
    [
      "0043afbc",
      "DATA",
      [
        "storage",
        "00c63078",
        null,
        "undefined *"
      ]
    ],
    [
      "0043afd0",
      "READ",
      [
        "storage",
        "00ca4a18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043af58 ["INT_ADD", "register:40f0:8", ["const:43af58:8", "const:4:8"]]
- 0043af58 ["CALL", null, ["callee:0056aba8:8"]]
+ 0043af98 ["INT_ADD", "register:40f0:8", ["const:43af98:8", "const:4:8"]]
+ 0043af98 ["CALL", null, ["callee:0056aba8:8"]]
- 0043af84 ["INT_ADD", "register:40f0:8", ["const:43af84:8", "const:4:8"]]
- 0043af84 ["CALL", null, ["callee:00b2b988:8"]]
+ 0043afc4 ["INT_ADD", "register:40f0:8", ["const:43afc4:8", "const:4:8"]]
+ 0043afc4 ["CALL", null, ["callee:00b2b988:8"]]
- 0043afb8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0043afb8 ["INT_ADD", "register:40f0:8", ["const:43afb8:8", "const:4:8"]]
- 0043afb8 ["CALLIND", null, ["register:0:8"]]
+ 0043aff8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0043aff8 ["INT_ADD", "register:40f0:8", ["const:43aff8:8", "const:4:8"]]
+ 0043aff8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-2855331224950a6cd3e1505720aefcd3"></a>

### [`0043affc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043affc.md) → [`0043b03c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b03c.md) Java_jp_co_ponos_battlecats_MyActivity_appUpdateDraw

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`00555454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00555/00555454.md) [`0058fa48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058fa48.md) [`00b2b8f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2b8f4.md) [`00b2d334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d334.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00555494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555494.md) [`0058fa88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fa88.md) [`00b2b990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b990.md) [`00b2d3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d3d0.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 78.95% / 新版 78.95%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043b0a8",
      "incomplete_value": true,
      "site": "0043b0a8",
      "value": [
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
      "definition_site": "0043b068",
      "incomplete_value": true,
      "site": "0043b068",
      "value": [
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043b108",
      "incomplete_value": true,
      "site": "0043b108",
      "value": [
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
      "definition_site": "0043b0c8",
      "incomplete_value": true,
      "site": "0043b0c8",
      "value": [
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
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043b084",
      "incomplete_value": true,
      "site": "0043b09c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:a10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b044",
      "incomplete_value": true,
      "site": "0043b05c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:910:8"
              ]
            ]
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
      "0043b068",
      "READ",
      [
        "storage",
        "00ca4928",
        null,
        "undefined1"
      ]
    ],
    [
      "0043b074",
      "READ",
      [
        "storage",
        "00ca4920",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b084",
      "READ",
      [
        "storage",
        "00ca4910",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0043b068",
      "READ",
      [
        "storage",
        "00ca4a28",
        null,
        "undefined1"
      ]
    ],
    [
      "0043b074",
      "READ",
      [
        "storage",
        "00ca4a20",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b084",
      "READ",
      [
        "storage",
        "00ca4a10",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b05c ["INT_ADD", "register:40f0:8", ["const:43b05c:8", "const:4:8"]]
- 0043b05c ["CALL", null, ["callee:00b2d3d0:8"]]
+ 0043b09c ["INT_ADD", "register:40f0:8", ["const:43b09c:8", "const:4:8"]]
+ 0043b09c ["CALL", null, ["callee:00b2d3d0:8"]]
- 0043b068 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:920:8"]]
- 0043b068 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
+ 0043b0a8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a20:8"]]
+ 0043b0a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0043b088 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:910:8"]]
- 0043b088 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 0043b0c8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:a10:8"]]
+ 0043b0c8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-06131e6917674b85fae01f934d6bae14"></a>

### [`0043b0e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b0e8.md) → [`0043b128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b128.md) Java_jp_co_ponos_battlecats_MyActivity_gfxInit

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043b1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b1fc.md) [`0058f77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058f77c.md) [`005923b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00592/005923b0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043b23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b23c.md) [`0058f7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f7bc.md) [`005923f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005923f0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 85.51% / 新版 85.51%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件, `store_destination` 1件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043b170",
      "incomplete_value": false,
      "site": "0043b170",
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
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b130",
      "incomplete_value": false,
      "site": "0043b130",
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
            "const:930:8"
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
      "definition_site": "0043b174",
      "incomplete_value": true,
      "site": "0043b174",
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
      "definition_site": "0043b134",
      "incomplete_value": true,
      "site": "0043b134",
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043b1d4",
      "incomplete_value": true,
      "site": "0043b1d8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:a30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b194",
      "incomplete_value": true,
      "site": "0043b198",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:930:8"
              ]
            ]
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
      "0043b14c",
      "READ",
      [
        "storage",
        "00ca4940",
        null,
        "undefined1"
      ]
    ],
    [
      "0043b168",
      "READ",
      [
        "storage",
        "00ca4938",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b170",
      "WRITE",
      [
        "storage",
        "00ca4930",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0043b14c",
      "READ",
      [
        "storage",
        "00ca4a40",
        null,
        "undefined1"
      ]
    ],
    [
      "0043b168",
      "READ",
      [
        "storage",
        "00ca4a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b170",
      "WRITE",
      [
        "storage",
        "00ca4a30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b170 ["INT_ADD", "register:40f0:8", ["const:43b170:8", "const:4:8"]]
- 0043b170 ["CALL", null, ["callee:00c53da0:8"]]
+ 0043b1b0 ["INT_ADD", "register:40f0:8", ["const:43b1b0:8", "const:4:8"]]
+ 0043b1b0 ["CALL", null, ["callee:00c53da0:8"]]
- 0043b184 ["COPY", "register:0:8", ["register:4040:8"]]
- 0043b184 ["INT_ADD", "register:40f0:8", ["const:43b184:8", "const:4:8"]]
- 0043b184 ["CALLIND", null, ["register:0:8"]]
+ 0043b1c4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0043b1c4 ["INT_ADD", "register:40f0:8", ["const:43b1c4:8", "const:4:8"]]
+ 0043b1c4 ["CALLIND", null, ["register:0:8"]]
- 0043b198 ["INT_ADD", "register:40f0:8", ["const:43b198:8", "const:4:8"]]
- 0043b198 ["CALL", null, ["callee:0058f7bc:8"]]
+ 0043b1d8 ["INT_ADD", "register:40f0:8", ["const:43b1d8:8", "const:4:8"]]
+ 0043b1d8 ["CALL", null, ["callee:0058f7bc:8"]]
~~~


<a id="compare-eb669a5be3f6169cf012b0ddd8ae7915"></a>

### [`0043b24c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b24c.md) → [`0043b28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b28c.md) Java_jp_co_ponos_battlecats_MyActivity_getDrawableWidth

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0043b294",
      "incomplete_value": true,
      "site": "0043b298",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
      "definition_site": "0043b254",
      "incomplete_value": true,
      "site": "0043b258",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043b294",
      "READ",
      [
        "storage",
        "00ca4c88",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0043b294",
      "READ",
      [
        "storage",
        "00ca4d88",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b250 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 0043b250 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043b250 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043b250 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043b290 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 0043b290 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b290 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b290 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3b3c7ad00d9f90c0131212547b9e96e4"></a>

### [`0043b25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b25c.md) → [`0043b29c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b29c.md) Java_jp_co_ponos_battlecats_MyActivity_getDrawableHeight

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0043b2a4",
      "incomplete_value": true,
      "site": "0043b2a8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
      "definition_site": "0043b264",
      "incomplete_value": true,
      "site": "0043b268",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043b2a4",
      "READ",
      [
        "storage",
        "00ca4c8c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0043b2a4",
      "READ",
      [
        "storage",
        "00ca4d8c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b260 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 0043b260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043b260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043b260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043b2a0 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 0043b2a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b00716bb60f0ad842eaca05e799dbf6d"></a>

### [`0043b26c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b26c.md) → [`0043b2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b2ac.md) Java_jp_co_ponos_battlecats_MyActivity_getWindowWidth

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0043b2b4",
      "incomplete_value": true,
      "site": "0043b2b8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
      "definition_site": "0043b274",
      "incomplete_value": true,
      "site": "0043b278",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043b2b4",
      "READ",
      [
        "storage",
        "00ca4c78",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0043b2b4",
      "READ",
      [
        "storage",
        "00ca4d78",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b270 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 0043b270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043b270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043b270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043b2b0 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 0043b2b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b397079abc62c60a605ef489fc7c2fed"></a>

### [`0043b27c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b27c.md) → [`0043b2bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b2bc.md) Java_jp_co_ponos_battlecats_MyActivity_getWindowHeight

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0043b2c4",
      "incomplete_value": true,
      "site": "0043b2c8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
      "definition_site": "0043b284",
      "incomplete_value": true,
      "site": "0043b288",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043b2c4",
      "READ",
      [
        "storage",
        "00ca4c7c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0043b2c4",
      "READ",
      [
        "storage",
        "00ca4d7c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b280 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 0043b280 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043b280 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043b280 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043b2c0 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 0043b2c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a0f004cccdb0e8626580636baf592d39"></a>

### [`0043b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b28c.md) → [`0043b2cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b2cc.md) Java_jp_co_ponos_battlecats_MyActivity_getSizeWidth

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0043b2d4",
      "incomplete_value": true,
      "site": "0043b2d8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
      "definition_site": "0043b294",
      "incomplete_value": true,
      "site": "0043b298",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043b2d4",
      "READ",
      [
        "storage",
        "00ca4c80",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0043b2d4",
      "READ",
      [
        "storage",
        "00ca4d80",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b290 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 0043b290 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043b290 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043b290 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043b2d0 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 0043b2d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-90f6fd426e27dc8ca9b1ec3180950823"></a>

### [`0043b29c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b29c.md) → [`0043b2dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b2dc.md) Java_jp_co_ponos_battlecats_MyActivity_getSizeHeight

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0043b2e4",
      "incomplete_value": true,
      "site": "0043b2e8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
      "definition_site": "0043b2a4",
      "incomplete_value": true,
      "site": "0043b2a8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "4",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043b2e4",
      "READ",
      [
        "storage",
        "00ca4c84",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0043b2e4",
      "READ",
      [
        "storage",
        "00ca4d84",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b2a0 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 0043b2a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043b2a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043b2a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043b2e0 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 0043b2e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043b2e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6cce080a575fde38aecc7a8cdda5e635"></a>

### [`0043b2ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b2ac.md) → [`0043b2ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b2ec.md) Java_jp_co_ponos_battlecats_MyActivity_gfxResize

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`0058fa48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0058f/0058fa48.md) [`00b2ce48`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2ce48.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0058fa88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fa88.md) [`00b2cee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2cee4.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 74.47% / 新版 74.47%

優先判定に残った影響 `store_destination` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043b348",
      "incomplete_value": true,
      "site": "0043b348",
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
            "const:2c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b308",
      "incomplete_value": true,
      "site": "0043b308",
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
            "const:2c:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043b348",
      "incomplete_value": true,
      "site": "0043b348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:2c:8"
              ]
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
      "definition_site": "0043b308",
      "incomplete_value": true,
      "site": "0043b308",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:2c:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:4:8"
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
      "definition_site": "0043b374",
      "incomplete_value": true,
      "site": "0043b374",
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
            "const:2c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b334",
      "incomplete_value": true,
      "site": "0043b334",
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
            "const:2c:8"
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
      "0043b304",
      "READ",
      [
        "storage",
        "00c9ab70",
        null,
        "pointer"
      ]
    ],
    [
      "0043b308",
      "READ",
      [
        "storage",
        "00c9ab78",
        null,
        "pointer"
      ]
    ],
    [
      "0043b314",
      "READ",
      [
        "storage",
        "00ca645c",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0043b304",
      "READ",
      [
        "storage",
        "00c9ac40",
        null,
        "pointer"
      ]
    ],
    [
      "0043b308",
      "READ",
      [
        "storage",
        "00c9ac48",
        null,
        "pointer"
      ]
    ],
    [
      "0043b314",
      "READ",
      [
        "storage",
        "00ca655c",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b2c8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b78:8"]]
- 0043b2c8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 0043b308 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:c48:8"]]
+ 0043b308 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 0043b30c ["INT_ADD", "register:40f0:8", ["const:43b30c:8", "const:4:8"]]
- 0043b30c ["CALL", null, ["callee:0058fa88:8"]]
+ 0043b34c ["INT_ADD", "register:40f0:8", ["const:43b34c:8", "const:4:8"]]
+ 0043b34c ["CALL", null, ["callee:0058fa88:8"]]
- 0043b348 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:910:8"]]
- 0043b348 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 0043b388 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a10:8"]]
+ 0043b388 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-60f4e084a98e9b597e3c6fc5731b5beb"></a>

### [`0043b368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b368.md) → [`0043b3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b3a8.md) Java_jp_co_ponos_battlecats_MyActivity_appTouch

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b2d25c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d25c.md) [`00b2d2a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d2a4.md) [`00b2d2ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2d/00b2d2ec.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b2d2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d2f8.md) [`00b2d340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d340.md) [`00b2d388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d388.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043b450",
      "incomplete_value": true,
      "site": "0043b450",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b410",
      "incomplete_value": true,
      "site": "0043b410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:948:8"
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
      "definition_site": "0043b454",
      "incomplete_value": true,
      "site": "0043b454",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:a4c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b414",
      "incomplete_value": true,
      "site": "0043b414",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "leaf",
            "const:94c:8"
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
      "definition_site": "0043b3f4",
      "incomplete_value": true,
      "site": "0043b3fc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:a10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b3b4",
      "incomplete_value": true,
      "site": "0043b3bc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:910:8"
              ]
            ]
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
      "0043b3f4",
      "READ",
      [
        "storage",
        "00ca4910",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b418",
      "READ",
      [
        "storage",
        "00ca4910",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b428",
      "READ",
      [
        "storage",
        "00ca4948",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0043b3f4",
      "READ",
      [
        "storage",
        "00ca4a10",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b418",
      "READ",
      [
        "storage",
        "00ca4a10",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b428",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b3bc ["INT_ADD", "register:40f0:8", ["const:43b3bc:8", "const:4:8"]]
- 0043b3bc ["CALL", null, ["callee:00b2d340:8"]]
+ 0043b3fc ["INT_ADD", "register:40f0:8", ["const:43b3fc:8", "const:4:8"]]
+ 0043b3fc ["CALL", null, ["callee:00b2d340:8"]]
- 0043b3e0 ["INT_ADD", "register:40f0:8", ["const:43b3e0:8", "const:4:8"]]
- 0043b3e0 ["CALL", null, ["callee:00b2d388:8"]]
+ 0043b420 ["INT_ADD", "register:40f0:8", ["const:43b420:8", "const:4:8"]]
+ 0043b420 ["CALL", null, ["callee:00b2d388:8"]]
- 0043b40c ["INT_ADD", "register:40f0:8", ["const:43b40c:8", "const:4:8"]]
- 0043b40c ["CALL", null, ["callee:00b2d2f8:8"]]
+ 0043b44c ["INT_ADD", "register:40f0:8", ["const:43b44c:8", "const:4:8"]]
+ 0043b44c ["CALL", null, ["callee:00b2d2f8:8"]]
~~~


<a id="compare-7b7f053966fd5529273904554add5ef8"></a>

### [`0043b658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b658.md) → [`0043b698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b698.md) Java_jp_co_ponos_battlecats_MyActivity_kill

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00b2bbcc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2b/00b2bbcc.md) [`00b2c424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2c424.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00b2bc68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2bc68.md) [`00b2c4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4c0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043b6b0",
      "incomplete_value": true,
      "site": "0043b6b4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:a10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b670",
      "incomplete_value": true,
      "site": "0043b674",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:910:8"
              ]
            ]
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
      "0043b6b0",
      "READ",
      [
        "storage",
        "00ca4910",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b6b8",
      "READ",
      [
        "storage",
        "00ca4910",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b6c0",
      "READ",
      [
        "storage",
        "00ca4918",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0043b6b0",
      "READ",
      [
        "storage",
        "00ca4a10",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b6b8",
      "READ",
      [
        "storage",
        "00ca4a10",
        null,
        "undefined8"
      ]
    ],
    [
      "0043b6c0",
      "READ",
      [
        "storage",
        "00ca4a18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b674 ["INT_ADD", "register:40f0:8", ["const:43b674:8", "const:4:8"]]
- 0043b674 ["CALL", null, ["callee:00b2bc68:8"]]
+ 0043b6b4 ["INT_ADD", "register:40f0:8", ["const:43b6b4:8", "const:4:8"]]
+ 0043b6b4 ["CALL", null, ["callee:00b2bc68:8"]]
- 0043b6b4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0043b6b4 ["INT_ADD", "register:40f0:8", ["const:43b6b4:8", "const:4:8"]]
- 0043b6b4 ["CALLIND", null, ["register:0:8"]]
+ 0043b6f4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0043b6f4 ["INT_ADD", "register:40f0:8", ["const:43b6f4:8", "const:4:8"]]
+ 0043b6f4 ["CALLIND", null, ["register:0:8"]]
- 0043b668 ["COPY", "tmp:0:8", ["const:910:8"]]
- 0043b668 ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
- 0043b668 ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
- 0043b668 ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
+ 0043b6a8 ["COPY", "tmp:0:8", ["const:a10:8"]]
+ 0043b6a8 ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
+ 0043b6a8 ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
+ 0043b6a8 ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
~~~


<a id="compare-23a30477ef1d6869cb0aebd7a639af2c"></a>

### [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) → [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) FUN_0043b7a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 272件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043d77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043d77c.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440c4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c4c.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 272件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043d7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043d7bc.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c8c.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043b7b0",
      "incomplete_value": false,
      "site": "0043b7b4",
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
    "old": {
      "definition_site": "0043b770",
      "incomplete_value": false,
      "site": "0043b774",
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
            "const:f23:8"
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
      "0043b7b0",
      "PARAM",
      [
        "storage",
        "002b9f23",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0043b7b0",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b774 ["INT_ADD", "register:40f0:8", ["const:43b774:8", "const:4:8"]]
- 0043b774 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0043b7b4 ["INT_ADD", "register:40f0:8", ["const:43b7b4:8", "const:4:8"]]
+ 0043b7b4 ["CALL", null, ["callee:0043b7b8:8"]]
- 0043b770 ["COPY", "tmp:0:8", ["const:f23:8"]]
- 0043b770 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0043b770 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0043b770 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0043b7b0 ["COPY", "tmp:0:8", ["const:ecf:8"]]
+ 0043b7b0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0043b7b0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0043b7b0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-75cca23d680c4c5e09e23f6e55617182"></a>

### [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md) → [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md) FUN_0043b7b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 234件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) [`00443718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443718.md) [`004499b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/004499b8.md) [`0045cd8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045c/0045cd8c.md) · 呼出先 4件 [`0043b7c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7c8.md) [`00c37ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ccc.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 234件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00443758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443758.md) [`004499f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/004499f8.md) [`0045cdcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045c/0045cdcc.md) · 呼出先 4件 [`0043b808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b808.md) [`00c37d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d68.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043b7e8",
      "incomplete_value": true,
      "site": "0043b7f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b7a8",
      "incomplete_value": true,
      "site": "0043b7b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b90:8"
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
      "definition_site": "0043b7ec",
      "incomplete_value": true,
      "site": "0043b7f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c68:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043b7ac",
      "incomplete_value": true,
      "site": "0043b7b0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b98:8"
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
      "0043b7e8",
      "READ",
      [
        "storage",
        "00c9ab90",
        null,
        "pointer"
      ]
    ],
    [
      "0043b7e8",
      "PARAM",
      [
        "storage",
        "00c967d8",
        "std::length_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0043b7ec",
      "READ",
      [
        "storage",
        "00c9ab98",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0043b7e8",
      "READ",
      [
        "storage",
        "00c9ac60",
        null,
        "pointer"
      ]
    ],
    [
      "0043b7e8",
      "PARAM",
      [
        "storage",
        "00c968a8",
        "std::length_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0043b7ec",
      "READ",
      [
        "storage",
        "00c9ac68",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043b7b0 ["INT_ADD", "register:40f0:8", ["const:43b7b0:8", "const:4:8"]]
- 0043b7b0 ["CALL", null, ["callee:00c57fe0:8"]]
+ 0043b7f0 ["INT_ADD", "register:40f0:8", ["const:43b7f0:8", "const:4:8"]]
+ 0043b7f0 ["CALL", null, ["callee:00c57fe0:8"]]
- 0043b78c ["INT_ADD", "register:40f0:8", ["const:43b78c:8", "const:4:8"]]
- 0043b78c ["CALL", null, ["callee:00c57fc0:8"]]
+ 0043b7cc ["INT_ADD", "register:40f0:8", ["const:43b7cc:8", "const:4:8"]]
+ 0043b7cc ["CALL", null, ["callee:00c57fc0:8"]]
- 0043b798 ["INT_ADD", "register:40f0:8", ["const:43b798:8", "const:4:8"]]
- 0043b798 ["CALL", null, ["callee:0043b808:8"]]
+ 0043b7d8 ["INT_ADD", "register:40f0:8", ["const:43b7d8:8", "const:4:8"]]
+ 0043b7d8 ["CALL", null, ["callee:0043b808:8"]]
~~~


<a id="compare-d9ada08484b5cfb960ce667393a21b3c"></a>

### [`0043bd88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bd88.md) → [`0043bdc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bdc8.md) FUN_0043bdc8

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
      "definition_site": "0043bdcc",
      "incomplete_value": false,
      "site": "0043bdd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043bd8c",
      "incomplete_value": false,
      "site": "0043bd90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:fa8:8"
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
      "0043bdd0",
      "DATA",
      [
        "storage",
        "00c62fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0043bdd0",
      "DATA",
      [
        "storage",
        "00c63078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043bd88 ["COPY", "register:4040:8", ["const:c62000:8"]]
+ 0043bdc8 ["COPY", "register:4040:8", ["const:c63000:8"]]
- 0043bd8c ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 0043bd8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043bd8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043bd8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043bdcc ["COPY", "tmp:0:8", ["const:78:8"]]
+ 0043bdcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043bdcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043bdcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dcc78e4d9e85dbb1b45b2c6c893765bf"></a>

### [`0043bd98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bd98.md) → [`0043bdd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bdd8.md) FUN_0043bdd8

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
      "definition_site": "0043bde8",
      "incomplete_value": false,
      "site": "0043bdf0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043bda8",
      "incomplete_value": false,
      "site": "0043bdb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:fa8:8"
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
      "0043bdf0",
      "DATA",
      [
        "storage",
        "00c62fa8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0043bdf0",
      "DATA",
      [
        "storage",
        "00c63078",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043bda4 ["COPY", "register:4040:8", ["const:c62000:8"]]
+ 0043bde4 ["COPY", "register:4040:8", ["const:c63000:8"]]
- 0043bda8 ["COPY", "tmp:0:8", ["const:fa8:8"]]
- 0043bda8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043bda8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043bda8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043bde8 ["COPY", "tmp:0:8", ["const:78:8"]]
+ 0043bde8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043bde8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043bde8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0043bdb4 ["INT_ADD", "register:40f0:8", ["const:43bdb4:8", "const:4:8"]]
- 0043bdb4 ["CALL", null, ["callee:00c57f70:8"]]
+ 0043bdf4 ["INT_ADD", "register:40f0:8", ["const:43bdf4:8", "const:4:8"]]
+ 0043bdf4 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-9576def84247d0a860a31492658a4576"></a>

### [`0043bdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bdd4.md) → [`0043be14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043be14.md) _INIT_4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043aed4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043aed4.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043af14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043af14.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043be50",
      "incomplete_value": true,
      "site": "0043be6c",
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
                "const:f66:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043be10",
      "incomplete_value": true,
      "site": "0043be2c",
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
                "const:f26:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043be74",
      "incomplete_value": true,
      "site": "0043be90",
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
                "const:f79:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043be34",
      "incomplete_value": true,
      "site": "0043be50",
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
                "const:f39:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0043be94",
      "incomplete_value": true,
      "site": "0043beb0",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:d6e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043be54",
      "incomplete_value": true,
      "site": "0043be70",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc2:8"
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
      "0043be50",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0043be74",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0043be94",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0043be50",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0043be74",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0043be94",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043be4c ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0043be4c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0043be4c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0043be4c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0043be8c ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0043be8c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0043be8c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0043be8c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0043be6c ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0043be6c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0043be6c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0043be6c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0043beac ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0043beac ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0043beac ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0043beac ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0043bf34 ["INT_ADD", "register:40f0:8", ["const:43bf34:8", "const:4:8"]]
- 0043bf34 ["CALL", null, ["callee:0043b838:8"]]
+ 0043bf74 ["INT_ADD", "register:40f0:8", ["const:43bf74:8", "const:4:8"]]
+ 0043bf74 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-df5eee39a1be121e2af2738eec51c7c7"></a>

### [`0043c180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c180.md) → [`0043c1c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c1c0.md) _INIT_5

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043c1dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c1dc.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043c21c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c21c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 69.57% / 新版 69.57%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043c1dc",
      "incomplete_value": false,
      "site": "0043c1e0",
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
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043c19c",
      "incomplete_value": false,
      "site": "0043c1a0",
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
            "const:970:8"
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
      "definition_site": "0043c1ec",
      "incomplete_value": false,
      "site": "0043c200",
      "value": [
        "leaf",
        "const:43c21c:8"
      ]
    },
    "old": {
      "definition_site": "0043c1ac",
      "incomplete_value": false,
      "site": "0043c1c0",
      "value": [
        "leaf",
        "const:43c1dc:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043c1f4",
      "incomplete_value": false,
      "site": "0043c200",
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
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043c1b4",
      "incomplete_value": false,
      "site": "0043c1c0",
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
            "const:968:8"
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
      "0043c1d0",
      "READ",
      [
        "storage",
        "00ca4970",
        null,
        "undefined1"
      ]
    ],
    [
      "0043c1dc",
      "PARAM",
      [
        "storage",
        "00ca4970",
        null,
        "undefined1"
      ]
    ],
    [
      "0043c1ec",
      "PARAM",
      [
        "storage",
        "0043c1dc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0043c1d0",
      "READ",
      [
        "storage",
        "00ca4a70",
        null,
        "undefined1"
      ]
    ],
    [
      "0043c1dc",
      "PARAM",
      [
        "storage",
        "00ca4a70",
        null,
        "undefined1"
      ]
    ],
    [
      "0043c1ec",
      "PARAM",
      [
        "storage",
        "0043c21c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0043c1a0 ["INT_ADD", "register:40f0:8", ["const:43c1a0:8", "const:4:8"]]
- 0043c1a0 ["CALL", null, ["callee:00c57f20:8"]]
+ 0043c1e0 ["INT_ADD", "register:40f0:8", ["const:43c1e0:8", "const:4:8"]]
+ 0043c1e0 ["CALL", null, ["callee:00c57f20:8"]]
- 0043c1c0 ["INT_ADD", "register:40f0:8", ["const:43c1c0:8", "const:4:8"]]
- 0043c1c0 ["CALL", null, ["callee:00c57f00:8"]]
+ 0043c200 ["INT_ADD", "register:40f0:8", ["const:43c200:8", "const:4:8"]]
+ 0043c200 ["CALL", null, ["callee:00c57f00:8"]]
- 0043c18c ["COPY", "tmp:0:8", ["const:970:8"]]
- 0043c18c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043c18c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043c18c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043c1cc ["COPY", "tmp:0:8", ["const:a70:8"]]
+ 0043c1cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043c1cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043c1cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-db0e30a4566b8b6d01f51b1109d7ba8d"></a>

### [`0043c1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c1fc.md) → [`0043c23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c23c.md) _INIT_6

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043c1dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c1dc.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043c21c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c21c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 69.57% / 新版 69.57%

優先判定に残った影響 `call_argument_candidate` 3件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043c258",
      "incomplete_value": false,
      "site": "0043c25c",
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
            "const:a80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043c218",
      "incomplete_value": false,
      "site": "0043c21c",
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
            "const:980:8"
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
      "definition_site": "0043c268",
      "incomplete_value": false,
      "site": "0043c27c",
      "value": [
        "leaf",
        "const:43c21c:8"
      ]
    },
    "old": {
      "definition_site": "0043c228",
      "incomplete_value": false,
      "site": "0043c23c",
      "value": [
        "leaf",
        "const:43c1dc:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043c270",
      "incomplete_value": false,
      "site": "0043c27c",
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
            "const:a78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043c230",
      "incomplete_value": false,
      "site": "0043c23c",
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
            "const:978:8"
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
      "0043c24c",
      "READ",
      [
        "storage",
        "00ca4980",
        null,
        "undefined1"
      ]
    ],
    [
      "0043c258",
      "PARAM",
      [
        "storage",
        "00ca4980",
        null,
        "undefined1"
      ]
    ],
    [
      "0043c268",
      "PARAM",
      [
        "storage",
        "0043c1dc",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0043c24c",
      "READ",
      [
        "storage",
        "00ca4a80",
        null,
        "undefined1"
      ]
    ],
    [
      "0043c258",
      "PARAM",
      [
        "storage",
        "00ca4a80",
        null,
        "undefined1"
      ]
    ],
    [
      "0043c268",
      "PARAM",
      [
        "storage",
        "0043c21c",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0043c21c ["INT_ADD", "register:40f0:8", ["const:43c21c:8", "const:4:8"]]
- 0043c21c ["CALL", null, ["callee:00c57f20:8"]]
+ 0043c25c ["INT_ADD", "register:40f0:8", ["const:43c25c:8", "const:4:8"]]
+ 0043c25c ["CALL", null, ["callee:00c57f20:8"]]
- 0043c23c ["INT_ADD", "register:40f0:8", ["const:43c23c:8", "const:4:8"]]
- 0043c23c ["CALL", null, ["callee:00c57f00:8"]]
+ 0043c27c ["INT_ADD", "register:40f0:8", ["const:43c27c:8", "const:4:8"]]
+ 0043c27c ["CALL", null, ["callee:00c57f00:8"]]
- 0043c208 ["COPY", "tmp:0:8", ["const:980:8"]]
- 0043c208 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043c208 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043c208 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043c248 ["COPY", "tmp:0:8", ["const:a80:8"]]
+ 0043c248 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043c248 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043c248 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c3dd919a4d8fcbc6cf4c2923b284a37c"></a>

### [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) → [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) FUN_0043c298

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`004430c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004430c0.md) [`00443398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443398.md) · 呼出先 49件 [`0043d5b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043d5b4.md) [`0043d77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043d77c.md) [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`0043dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dfb0.md) [`0043e578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e578.md)
- 新版 呼出元 2件 [`00443100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443100.md) [`004433d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004433d8.md) · 呼出先 49件 [`0043d5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043d5f4.md) [`0043d7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043d7bc.md) [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`0043dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dff0.md) [`0043e5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e5b8.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.32% / 新版 95.32%

優先判定に残った影響 `call_argument_candidate` 12件, `call_target` 2件, `store_value` 10件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043c420",
      "incomplete_value": true,
      "site": "0043c420",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:580:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043c3e0",
      "incomplete_value": true,
      "site": "0043c3e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5dc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043c504",
      "incomplete_value": false,
      "site": "0043c504",
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
      "definition_site": "0043c4c4",
      "incomplete_value": false,
      "site": "0043c4c4",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043c640",
      "incomplete_value": true,
      "site": "0043c640",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6cf:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043c600",
      "incomplete_value": true,
      "site": "0043c600",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:723:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 38,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043c32c",
      "PARAM",
      [
        "storage",
        "002c0ee2",
        null,
        "string"
      ]
    ],
    [
      "0043c364",
      "PARAM",
      [
        "storage",
        "002b9f30",
        null,
        null
      ]
    ],
    [
      "0043c410",
      "READ",
      [
        "storage",
        "002a75dc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0043c32c",
      "PARAM",
      [
        "storage",
        "002c0f22",
        null,
        "string"
      ]
    ],
    [
      "0043c364",
      "PARAM",
      [
        "storage",
        "002b9edc",
        null,
        null
      ]
    ],
    [
      "0043c410",
      "READ",
      [
        "storage",
        "002a7580",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043c2ec ["COPY", "tmp:0:8", ["const:ee2:8"]]
- 0043c2ec ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 0043c2ec ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 0043c2ec ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 0043c32c ["COPY", "tmp:0:8", ["const:f22:8"]]
+ 0043c32c ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 0043c32c ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 0043c32c ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
- 0043c2f8 ["INT_ADD", "register:40f0:8", ["const:43c2f8:8", "const:4:8"]]
- 0043c2f8 ["CALL", null, ["callee:00c58030:8"]]
+ 0043c338 ["INT_ADD", "register:40f0:8", ["const:43c338:8", "const:4:8"]]
+ 0043c338 ["CALL", null, ["callee:00c58030:8"]]
- 0043c32c ["INT_ADD", "register:40f0:8", ["const:43c32c:8", "const:4:8"]]
- 0043c32c ["CALL", null, ["callee:00c58040:8"]]
+ 0043c36c ["INT_ADD", "register:40f0:8", ["const:43c36c:8", "const:4:8"]]
+ 0043c36c ["CALL", null, ["callee:00c58040:8"]]
~~~


<a id="compare-cf1180770af6b742cfcc8a8c2f36d284"></a>

### [`0043d77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043d77c.md) → [`0043d7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043d7bc.md) FUN_0043d7bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) · 呼出先 13件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00440c4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c4c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488054`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488054.md) [`00488178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488178.md)
- 新版 呼出元 2件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) · 呼出先 13件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00440c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c8c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488094`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488094.md) [`004881b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/004881b8.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.81% / 新版 95.81%

優先判定に残った影響 `store_destination` 1件, `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043da58",
      "incomplete_value": true,
      "site": "0043da5c",
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
      "definition_site": "0043da18",
      "incomplete_value": true,
      "site": "0043da1c",
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
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043da54",
      "incomplete_value": true,
      "site": "0043da60",
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
      "definition_site": "0043da14",
      "incomplete_value": true,
      "site": "0043da20",
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0043da6c",
      "incomplete_value": true,
      "site": "0043da6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
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
              "LOAD",
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
      "definition_site": "0043da2c",
      "incomplete_value": true,
      "site": "0043da2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_ADD",
            "8",
            [
              "INT_ADD",
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
              "LOAD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 37,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043da48",
      "READ",
      [
        "storage",
        "00c9abb0",
        null,
        "pointer"
      ]
    ],
    [
      "0043da4c",
      "READ",
      [
        "storage",
        "00c9abb8",
        null,
        "pointer"
      ]
    ],
    [
      "0043da54",
      "READ",
      [
        "storage",
        "00c93200",
        "std::__ndk1::basic_ostringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "0043da48",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ],
    [
      "0043da4c",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "0043da54",
      "READ",
      [
        "storage",
        "00c932d0",
        "std::__ndk1::basic_ostringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043da60 ["INT_ADD", "register:40f0:8", ["const:43da60:8", "const:4:8"]]
- 0043da60 ["CALL", null, ["callee:00c58080:8"]]
+ 0043daa0 ["INT_ADD", "register:40f0:8", ["const:43daa0:8", "const:4:8"]]
+ 0043daa0 ["CALL", null, ["callee:00c58080:8"]]
- 0043d7ac ["INT_ADD", "register:40f0:8", ["const:43d7ac:8", "const:4:8"]]
- 0043d7ac ["CALL", null, ["callee:00487e60:8"]]
+ 0043d7ec ["INT_ADD", "register:40f0:8", ["const:43d7ec:8", "const:4:8"]]
+ 0043d7ec ["CALL", null, ["callee:00487e60:8"]]
- 0043d7b8 ["INT_ADD", "register:40f0:8", ["const:43d7b8:8", "const:4:8"]]
- 0043d7b8 ["CALL", null, ["callee:00488094:8"]]
+ 0043d7f8 ["INT_ADD", "register:40f0:8", ["const:43d7f8:8", "const:4:8"]]
+ 0043d7f8 ["CALL", null, ["callee:00488094:8"]]
~~~


<a id="compare-e717e961cb9f1149e759eeabd3970678"></a>

### [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) → [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) FUN_0043dbe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 39件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`0043dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dfb0.md) [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) [`0043f91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f91c.md) [`00444680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444680.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md)
- 新版 呼出元 39件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0043dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dff0.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) [`004446c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004446c0.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.23% / 新版 99.23%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043dd94",
      "incomplete_value": false,
      "site": "0043dd9c",
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
            "const:2f6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043dd54",
      "incomplete_value": false,
      "site": "0043dd5c",
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
            "const:352:8"
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
      "0043dd94",
      "PARAM",
      [
        "storage",
        "002a5352",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0043dd94",
      "PARAM",
      [
        "storage",
        "002a52f6",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0043dd5c ["INT_ADD", "register:40f0:8", ["const:43dd5c:8", "const:4:8"]]
- 0043dd5c ["CALL", null, ["callee:00c58040:8"]]
+ 0043dd9c ["INT_ADD", "register:40f0:8", ["const:43dd9c:8", "const:4:8"]]
+ 0043dd9c ["CALL", null, ["callee:00c58040:8"]]
- 0043dc3c ["INT_ADD", "register:40f0:8", ["const:43dc3c:8", "const:4:8"]]
- 0043dc3c ["CALL", null, ["callee:0043bb60:8"]]
+ 0043dc7c ["INT_ADD", "register:40f0:8", ["const:43dc7c:8", "const:4:8"]]
+ 0043dc7c ["CALL", null, ["callee:0043bb60:8"]]
- 0043dc8c ["INT_ADD", "register:40f0:8", ["const:43dc8c:8", "const:4:8"]]
- 0043dc8c ["CALL", null, ["callee:00c580a0:8"]]
+ 0043dccc ["INT_ADD", "register:40f0:8", ["const:43dccc:8", "const:4:8"]]
+ 0043dccc ["CALL", null, ["callee:00c580a0:8"]]
~~~


<a id="compare-9602ca1f4b16e3d61bd273a0ff848921"></a>

### [`0043de78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043de78.md) → [`0043deb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043deb8.md) FUN_0043deb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00482b0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00482/00482b0c.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00482b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482b4c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.83% / 新版 94.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043ded4",
      "incomplete_value": true,
      "site": "0043ded8",
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
      "definition_site": "0043de94",
      "incomplete_value": true,
      "site": "0043de98",
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
      "0043decc",
      "READ",
      [
        "storage",
        "00c9aba8",
        null,
        "pointer"
      ]
    ],
    [
      "0043ded8",
      "DATA",
      [
        "storage",
        "00c65540",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0043decc",
      "READ",
      [
        "storage",
        "00c9ac78",
        null,
        "pointer"
      ]
    ],
    [
      "0043ded8",
      "DATA",
      [
        "storage",
        "00c65610",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043ded8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0043ded8 ["INT_ADD", "register:40f0:8", ["const:43ded8:8", "const:4:8"]]
- 0043ded8 ["CALLIND", null, ["register:0:8"]]
+ 0043df18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0043df18 ["INT_ADD", "register:40f0:8", ["const:43df18:8", "const:4:8"]]
+ 0043df18 ["CALLIND", null, ["register:0:8"]]
- 0043de8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:ba8:8"]]
- 0043de8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0043decc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c78:8"]]
+ 0043decc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0043dea8 ["INT_ADD", "register:40f0:8", ["const:43dea8:8", "const:4:8"]]
- 0043dea8 ["CALL", null, ["callee:00c53da0:8"]]
+ 0043dee8 ["INT_ADD", "register:40f0:8", ["const:43dee8:8", "const:4:8"]]
+ 0043dee8 ["CALL", null, ["callee:00c53da0:8"]]
~~~


<a id="compare-b61047b6df28bedf39ce213179332110"></a>

### [`0043dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dfb0.md) → [`0043dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dff0.md) FUN_0043dff0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) · 呼出先 20件 [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`004431b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004431b4.md) [`004431b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004431b8.md) [`00443244`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443244.md) [`00443248`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443248.md)
- 新版 呼出元 2件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) · 呼出先 20件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`004431f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004431f4.md) [`004431f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004431f8.md) [`00443284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443284.md) [`00443288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443288.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.72% / 新版 96.72%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043e1e4",
      "incomplete_value": false,
      "site": "0043e1e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043e1a4",
      "incomplete_value": false,
      "site": "0043e1a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:238:8"
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043e208",
      "incomplete_value": false,
      "site": "0043e208",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043e1c8",
      "incomplete_value": false,
      "site": "0043e1c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:2b8:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043e21c",
      "incomplete_value": false,
      "site": "0043e21c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043e1dc",
      "incomplete_value": false,
      "site": "0043e1dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:338:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043e040",
      "PARAM",
      [
        "storage",
        "002a5354",
        null,
        "undefined4"
      ]
    ],
    [
      "0043e148",
      "READ",
      [
        "storage",
        "00c9abc8",
        null,
        "pointer"
      ]
    ],
    [
      "0043e148",
      "PARAM",
      [
        "storage",
        "00ca5cd0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0043e040",
      "PARAM",
      [
        "storage",
        "002a52f8",
        null,
        "undefined4"
      ]
    ],
    [
      "0043e148",
      "READ",
      [
        "storage",
        "00c9ac98",
        null,
        "pointer"
      ]
    ],
    [
      "0043e148",
      "PARAM",
      [
        "storage",
        "00ca5dd0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043e008 ["INT_ADD", "register:40f0:8", ["const:43e008:8", "const:4:8"]]
- 0043e008 ["CALL", null, ["callee:00c58040:8"]]
+ 0043e048 ["INT_ADD", "register:40f0:8", ["const:43e048:8", "const:4:8"]]
+ 0043e048 ["CALL", null, ["callee:00c58040:8"]]
- 0043e110 ["INT_ADD", "register:40f0:8", ["const:43e110:8", "const:4:8"]]
- 0043e110 ["CALL", null, ["callee:00561d74:8"]]
+ 0043e150 ["INT_ADD", "register:40f0:8", ["const:43e150:8", "const:4:8"]]
+ 0043e150 ["CALL", null, ["callee:00561d74:8"]]
- 0043e164 ["INT_ADD", "register:40f0:8", ["const:43e164:8", "const:4:8"]]
- 0043e164 ["CALL", null, ["callee:00c57f50:8"]]
+ 0043e1a4 ["INT_ADD", "register:40f0:8", ["const:43e1a4:8", "const:4:8"]]
+ 0043e1a4 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-4f64af4e16539a4b9929511c564a2c3d"></a>

### [`0043e578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e578.md) → [`0043e5b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e5b8.md) FUN_0043e5b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) · 呼出先 11件 [`00442ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442ee4.md) [`00442ee8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442ee8.md) [`00442f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442f70.md) [`00442f74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442f74.md) [`004430b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004430b8.md)
- 新版 呼出元 1件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) · 呼出先 11件 [`00442f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442f24.md) [`00442f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442f28.md) [`00442fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442fb0.md) [`00442fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442fb4.md) [`004430f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004430f8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.40% / 新版 94.40%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043e670",
      "incomplete_value": false,
      "site": "0043e670",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043e630",
      "incomplete_value": false,
      "site": "0043e630",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:88:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043e694",
      "incomplete_value": false,
      "site": "0043e694",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043e654",
      "incomplete_value": false,
      "site": "0043e654",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:118:8"
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
      "definition_site": "0043e6a8",
      "incomplete_value": false,
      "site": "0043e6a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:278:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043e668",
      "incomplete_value": false,
      "site": "0043e668",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043e5e8",
      "READ",
      [
        "storage",
        "00c9abc8",
        null,
        "pointer"
      ]
    ],
    [
      "0043e5e8",
      "PARAM",
      [
        "storage",
        "00ca5cd0",
        null,
        "undefined1"
      ]
    ],
    [
      "0043e670",
      "DATA",
      [
        "storage",
        "00c63088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0043e5e8",
      "READ",
      [
        "storage",
        "00c9ac98",
        null,
        "pointer"
      ]
    ],
    [
      "0043e5e8",
      "PARAM",
      [
        "storage",
        "00ca5dd0",
        null,
        "undefined1"
      ]
    ],
    [
      "0043e670",
      "DATA",
      [
        "storage",
        "00c63158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043e5ac ["INT_ADD", "register:40f0:8", ["const:43e5ac:8", "const:4:8"]]
- 0043e5ac ["CALL", null, ["callee:00561d74:8"]]
+ 0043e5ec ["INT_ADD", "register:40f0:8", ["const:43e5ec:8", "const:4:8"]]
+ 0043e5ec ["CALL", null, ["callee:00561d74:8"]]
- 0043e5f0 ["INT_ADD", "register:40f0:8", ["const:43e5f0:8", "const:4:8"]]
- 0043e5f0 ["CALL", null, ["callee:00c57f50:8"]]
+ 0043e630 ["INT_ADD", "register:40f0:8", ["const:43e630:8", "const:4:8"]]
+ 0043e630 ["CALL", null, ["callee:00c57f50:8"]]
- 0043e5a8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:bc8:8"]]
- 0043e5a8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 0043e5e8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:c98:8"]]
+ 0043e5e8 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-1ddd56f78e1fb01ddf8d97222e402d71"></a>

### [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) → [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) FUN_0043e98c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 38件 [`0062a1c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062a/0062a1c4.md) [`00677a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00677/00677a40.md) [`0067e7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e7f8.md) [`006b380c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b380c.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) · 呼出先 5件 [`0043e9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e9dc.md) [`0043ea60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ea60.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 38件 [`0062a204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062a/0062a204.md) [`00677a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00677/00677a80.md) [`0067e838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e838.md) [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) · 呼出先 5件 [`0043ea1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043ea1c.md) [`0043eaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eaa0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, return_value_candidate

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 5件, `return_value_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043e9c0",
      "incomplete_value": false,
      "site": "0043e9c4",
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
            "const:ae0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043e980",
      "incomplete_value": false,
      "site": "0043e984",
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
            "const:9e0:8"
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
      "definition_site": "0043e9d0",
      "incomplete_value": false,
      "site": "0043e9d4",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043e990",
      "incomplete_value": false,
      "site": "0043e994",
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
            "const:988:8"
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
      "definition_site": "0043e9dc",
      "incomplete_value": false,
      "site": "0043e9f0",
      "value": [
        "leaf",
        "const:43ea1c:8"
      ]
    },
    "old": {
      "definition_site": "0043e99c",
      "incomplete_value": false,
      "site": "0043e9b0",
      "value": [
        "leaf",
        "const:43e9dc:8"
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
      "0043e9a0",
      "READ",
      [
        "storage",
        "00ca49e0",
        null,
        "undefined1"
      ]
    ],
    [
      "0043e9ac",
      "DATA",
      [
        "storage",
        "00ca4988",
        null,
        null
      ]
    ],
    [
      "0043e9c0",
      "PARAM",
      [
        "storage",
        "00ca49e0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0043e9a0",
      "READ",
      [
        "storage",
        "00ca4ae0",
        null,
        "undefined1"
      ]
    ],
    [
      "0043e9ac",
      "DATA",
      [
        "storage",
        "00ca4a88",
        null,
        null
      ]
    ],
    [
      "0043e9c0",
      "PARAM",
      [
        "storage",
        "00ca4ae0",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043e984 ["INT_ADD", "register:40f0:8", ["const:43e984:8", "const:4:8"]]
- 0043e984 ["CALL", null, ["callee:00c57f20:8"]]
+ 0043e9c4 ["INT_ADD", "register:40f0:8", ["const:43e9c4:8", "const:4:8"]]
+ 0043e9c4 ["CALL", null, ["callee:00c57f20:8"]]
- 0043e994 ["INT_ADD", "register:40f0:8", ["const:43e994:8", "const:4:8"]]
- 0043e994 ["CALL", null, ["callee:0043eaa0:8"]]
+ 0043e9d4 ["INT_ADD", "register:40f0:8", ["const:43e9d4:8", "const:4:8"]]
+ 0043e9d4 ["CALL", null, ["callee:0043eaa0:8"]]
- 0043e9b0 ["INT_ADD", "register:40f0:8", ["const:43e9b0:8", "const:4:8"]]
- 0043e9b0 ["CALL", null, ["callee:00c57f00:8"]]
+ 0043e9f0 ["INT_ADD", "register:40f0:8", ["const:43e9f0:8", "const:4:8"]]
+ 0043e9f0 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-6188726620af261ae32bf590afd0ecaf"></a>

### [`0043ea60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ea60.md) → [`0043eaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eaa0.md) FUN_0043eaa0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`00443480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443480.md) · 呼出先 4件 [`00b33ad8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33ad8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`004434c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004434c0.md) · 呼出先 4件 [`00b33b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33b74.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.00% / 新版 84.00%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043eb0c",
      "incomplete_value": true,
      "site": "0043eb18",
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
                "const:9c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043eacc",
      "incomplete_value": true,
      "site": "0043ead8",
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
                "const:980:8"
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
      "definition_site": "0043eb08",
      "incomplete_value": true,
      "site": "0043eb1c",
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
                "const:2ae000:8"
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
      "definition_site": "0043eac8",
      "incomplete_value": true,
      "site": "0043eadc",
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
                "const:2ae000:8"
              ],
              [
                "leaf",
                "const:66c:8"
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
      "definition_site": "0043eb08",
      "incomplete_value": true,
      "site": "0043eb1c",
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
      "definition_site": "0043eac8",
      "incomplete_value": true,
      "site": "0043eadc",
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
      "0043eb08",
      "READ",
      [
        "storage",
        "002ae66c",
        null,
        "string"
      ]
    ],
    [
      "0043eb08",
      "READ",
      [
        "storage",
        "002ae67c",
        null,
        "string"
      ]
    ],
    [
      "0043eb0c",
      "READ",
      [
        "storage",
        "002c2980",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0043eb08",
      "READ",
      [
        "storage",
        "002ae610",
        null,
        "string"
      ]
    ],
    [
      "0043eb08",
      "READ",
      [
        "storage",
        "002ae620",
        null,
        "string"
      ]
    ],
    [
      "0043eb0c",
      "READ",
      [
        "storage",
        "002c29c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0043eab8 ["INT_ADD", "register:40f0:8", ["const:43eab8:8", "const:4:8"]]
- 0043eab8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0043eaf8 ["INT_ADD", "register:40f0:8", ["const:43eaf8:8", "const:4:8"]]
+ 0043eaf8 ["CALL", null, ["callee:00c57f60:8"]]
- 0043eac0 ["COPY", "tmp:0:8", ["const:66c:8"]]
- 0043eac0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043eac0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043eac0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043eb00 ["COPY", "tmp:0:8", ["const:610:8"]]
+ 0043eb00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043eb00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043eb00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0043eac4 ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-c3b6e066a481b91b89b924d16cf67678"></a>

### [`0043ec60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ec60.md) → [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) FUN_0043eca0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 9件 [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) [`00853308`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00853/00853308.md) [`0087f368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f368.md) [`00882334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00882/00882334.md) · 呼出先 24件 [`0043d77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043d77c.md) [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`0043dfb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dfb0.md) [`0044b898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b898.md) [`00481430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481430.md)
- 新版 呼出元 9件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00853360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853360.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`0088238c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00882/0088238c.md) · 呼出先 24件 [`0043d7bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043d7bc.md) [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`0043dff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dff0.md) [`0044b8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b8d8.md) [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.04% / 新版 97.04%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043ef4c",
      "incomplete_value": true,
      "site": "0043ef54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:580:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043ef0c",
      "incomplete_value": true,
      "site": "0043ef14",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5dc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 36,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0043f1b4",
      "incomplete_value": false,
      "site": "0043f1bc",
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
            "const:589:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043f174",
      "incomplete_value": false,
      "site": "0043f17c",
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
            "const:5e5:8"
          ]
        ]
      ]
    },
    "ordinal": 54,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043ede8",
      "READ",
      [
        "storage",
        "00c9aba8",
        null,
        "pointer"
      ]
    ],
    [
      "0043ee24",
      "PARAM",
      [
        "storage",
        "002c0ee2",
        null,
        "string"
      ]
    ],
    [
      "0043ee54",
      "PARAM",
      [
        "storage",
        "002b9f30",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0043ede8",
      "READ",
      [
        "storage",
        "00c9ac78",
        null,
        "pointer"
      ]
    ],
    [
      "0043ee24",
      "PARAM",
      [
        "storage",
        "002c0f22",
        null,
        "string"
      ]
    ],
    [
      "0043ee54",
      "PARAM",
      [
        "storage",
        "002b9edc",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0043eed4 ["INT_ADD", "register:40f0:8", ["const:43eed4:8", "const:4:8"]]
- 0043eed4 ["CALL", null, ["callee:004820ec:8"]]
+ 0043ef14 ["INT_ADD", "register:40f0:8", ["const:43ef14:8", "const:4:8"]]
+ 0043ef14 ["CALL", null, ["callee:004820ec:8"]]
- 0043f17c ["INT_ADD", "register:40f0:8", ["const:43f17c:8", "const:4:8"]]
- 0043f17c ["CALL", null, ["callee:00c58040:8"]]
+ 0043f1bc ["INT_ADD", "register:40f0:8", ["const:43f1bc:8", "const:4:8"]]
+ 0043f1bc ["CALL", null, ["callee:00c58040:8"]]
- 0043ec9c ["INT_ADD", "register:40f0:8", ["const:43ec9c:8", "const:4:8"]]
- 0043ec9c ["CALL", null, ["callee:0048ce90:8"]]
+ 0043ecdc ["INT_ADD", "register:40f0:8", ["const:43ecdc:8", "const:4:8"]]
+ 0043ecdc ["CALL", null, ["callee:0048ce90:8"]]
~~~


<a id="compare-0d1ec40c15954a0a6544f422b28ffb9b"></a>

### [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md) → [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) FUN_0043f478

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 25件 [`0062a1c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062a/0062a1c4.md) [`00677a40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00677/00677a40.md) [`0067e7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0067e/0067e7f8.md) [`006b380c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b380c.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) · 呼出先 4件 [`004436d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004436d8.md) [`004436dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004436dc.md) [`00b33d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33d78.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 25件 [`0062a204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062a/0062a204.md) [`00677a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00677/00677a80.md) [`0067e838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e838.md) [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) · 呼出先 4件 [`00443718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443718.md) [`0044371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/0044371c.md) [`00b33e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33e14.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043f4a4",
      "incomplete_value": false,
      "site": "0043f4ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043f464",
      "incomplete_value": false,
      "site": "0043f46c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
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
      "0043f4ac",
      "DATA",
      [
        "storage",
        "00c634d8",
        null,
        "undefined *"
      ]
    ],
    [
      "0043f4e0",
      "READ",
      [
        "storage",
        "00c634f8",
        null,
        "pointer"
      ]
    ],
    [
      "0043f4e0",
      "READ",
      [
        "storage",
        "00c63500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0043f4ac",
      "DATA",
      [
        "storage",
        "00c635a8",
        null,
        "undefined *"
      ]
    ],
    [
      "0043f4e0",
      "READ",
      [
        "storage",
        "00c635c8",
        null,
        "pointer"
      ]
    ],
    [
      "0043f4e0",
      "READ",
      [
        "storage",
        "00c635d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043f464 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 0043f464 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043f464 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043f464 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043f4a4 ["COPY", "tmp:0:8", ["const:5a8:8"]]
+ 0043f4a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043f4a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043f4a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0043f478 ["INT_ADD", "register:40f0:8", ["const:43f478:8", "const:4:8"]]
- 0043f478 ["CALL", null, ["callee:00b33e14:8"]]
+ 0043f4b8 ["INT_ADD", "register:40f0:8", ["const:43f4b8:8", "const:4:8"]]
+ 0043f4b8 ["CALL", null, ["callee:00b33e14:8"]]
- 0043f4a4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0043f4a4 ["INT_ADD", "register:40f0:8", ["const:43f4a4:8", "const:4:8"]]
- 0043f4a4 ["CALLIND", null, ["register:0:8"]]
+ 0043f4e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0043f4e4 ["INT_ADD", "register:40f0:8", ["const:43f4e4:8", "const:4:8"]]
+ 0043f4e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ef76a2fb44b6031f882668e03c89e143"></a>

### [`0043f534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f534.md) → [`0043f574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f574.md) FUN_0043f574

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00b2c424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b2c/00b2c424.md) · 呼出先 4件 [`004436d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004436d8.md) [`004436dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004436dc.md) [`00b33d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33d78.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00b2c4c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2c/00b2c4c0.md) · 呼出先 4件 [`00443718`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443718.md) [`0044371c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/0044371c.md) [`00b33e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33e14.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043f594",
      "incomplete_value": false,
      "site": "0043f5a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043f554",
      "incomplete_value": false,
      "site": "0043f564",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
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
      "0043f5a4",
      "DATA",
      [
        "storage",
        "00c634d8",
        null,
        "undefined *"
      ]
    ],
    [
      "0043f5d8",
      "READ",
      [
        "storage",
        "00c634f8",
        null,
        "pointer"
      ]
    ],
    [
      "0043f5d8",
      "READ",
      [
        "storage",
        "00c63500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0043f5a4",
      "DATA",
      [
        "storage",
        "00c635a8",
        null,
        "undefined *"
      ]
    ],
    [
      "0043f5d8",
      "READ",
      [
        "storage",
        "00c635c8",
        null,
        "pointer"
      ]
    ],
    [
      "0043f5d8",
      "READ",
      [
        "storage",
        "00c635d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043f554 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 0043f554 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0043f554 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0043f554 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0043f594 ["COPY", "tmp:0:8", ["const:5a8:8"]]
+ 0043f594 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0043f594 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0043f594 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0043f570 ["INT_ADD", "register:40f0:8", ["const:43f570:8", "const:4:8"]]
- 0043f570 ["CALL", null, ["callee:00b33e14:8"]]
+ 0043f5b0 ["INT_ADD", "register:40f0:8", ["const:43f5b0:8", "const:4:8"]]
+ 0043f5b0 ["CALL", null, ["callee:00b33e14:8"]]
- 0043f59c ["COPY", "register:0:8", ["register:4040:8"]]
- 0043f59c ["INT_ADD", "register:40f0:8", ["const:43f59c:8", "const:4:8"]]
- 0043f59c ["CALLIND", null, ["register:0:8"]]
+ 0043f5dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 0043f5dc ["INT_ADD", "register:40f0:8", ["const:43f5dc:8", "const:4:8"]]
+ 0043f5dc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-5a47607f77fa917d639cb038119279f2"></a>

### [`0043f618`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f618.md) → [`0043f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f658.md) FUN_0043f658

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0043f42c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f42c.md) · 呼出先 6件 [`00443478`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443478.md) [`0044347c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044347c.md) [`00443658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443658.md) [`0044365c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044365c.md) [`00b33adc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b33/00b33adc.md)
- 新版 呼出元 1件 [`0043f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f46c.md) · 呼出先 6件 [`004434b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004434b8.md) [`004434bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004434bc.md) [`00443698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443698.md) [`0044369c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/0044369c.md) [`00b33b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33b78.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.94% / 新版 91.94%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043f678",
      "incomplete_value": false,
      "site": "0043f69c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043f638",
      "incomplete_value": false,
      "site": "0043f65c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0043f694",
      "incomplete_value": false,
      "site": "0043f6a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:518:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043f654",
      "incomplete_value": false,
      "site": "0043f660",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:448:8"
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
      "definition_site": "0043f6ac",
      "incomplete_value": false,
      "site": "0043f6c0",
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
            "const:610:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043f66c",
      "incomplete_value": false,
      "site": "0043f680",
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
            "const:66c:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043f69c",
      "DATA",
      [
        "storage",
        "00c633b8",
        null,
        "undefined *"
      ]
    ],
    [
      "0043f6a0",
      "DATA",
      [
        "storage",
        "00c63448",
        null,
        "undefined *"
      ]
    ],
    [
      "0043f6ac",
      "PARAM",
      [
        "storage",
        "002ae66c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0043f69c",
      "DATA",
      [
        "storage",
        "00c63488",
        null,
        "undefined *"
      ]
    ],
    [
      "0043f6a0",
      "DATA",
      [
        "storage",
        "00c63518",
        null,
        "undefined *"
      ]
    ],
    [
      "0043f6ac",
      "PARAM",
      [
        "storage",
        "002ae610",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043f680 ["INT_ADD", "register:40f0:8", ["const:43f680:8", "const:4:8"]]
- 0043f680 ["CALL", null, ["callee:00b33b78:8"]]
+ 0043f6c0 ["INT_ADD", "register:40f0:8", ["const:43f6c0:8", "const:4:8"]]
+ 0043f6c0 ["CALL", null, ["callee:00b33b78:8"]]
- 0043f638 ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 0043f638 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0043f638 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0043f638 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0043f678 ["COPY", "tmp:0:8", ["const:488:8"]]
+ 0043f678 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0043f678 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0043f678 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0043f654 ["COPY", "tmp:0:8", ["const:448:8"]]
- 0043f654 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0043f654 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0043f654 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0043f694 ["COPY", "tmp:0:8", ["const:518:8"]]
+ 0043f694 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0043f694 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0043f694 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-33d91b1d9d36d10423cff8fe280a7a57"></a>

### [`0043f91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f91c.md) → [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) FUN_0043f95c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00a89ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a89/00a89ad0.md) [`00b11c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b11c80.md) · 呼出先 23件 [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00443718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443718.md) [`00481430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481430.md)
- 新版 呼出元 2件 [`00a89b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89b40.md) [`00b11d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11d1c.md) · 呼出先 23件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00443758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443758.md) [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.03% / 新版 97.03%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043fae0",
      "incomplete_value": true,
      "site": "0043fae0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:580:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043faa0",
      "incomplete_value": true,
      "site": "0043faa0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5dc:8"
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
      "definition_site": "0043fe34",
      "incomplete_value": true,
      "site": "0043fe40",
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
                "const:29e000:8"
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
      "definition_site": "0043fdf4",
      "incomplete_value": true,
      "site": "0043fe00",
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
                "const:29e000:8"
              ],
              [
                "leaf",
                "const:d80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 71,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0043ff48",
      "incomplete_value": true,
      "site": "0043ff54",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0043ff08",
      "incomplete_value": true,
      "site": "0043ff14",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f75:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 84,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0043f9c8",
      "PARAM",
      [
        "storage",
        "002b9f30",
        null,
        null
      ]
    ],
    [
      "0043fad0",
      "READ",
      [
        "storage",
        "002a75dc",
        null,
        "string"
      ]
    ],
    [
      "0043fc14",
      "READ",
      [
        "storage",
        "002a3f1c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0043f9c8",
      "PARAM",
      [
        "storage",
        "002b9edc",
        null,
        null
      ]
    ],
    [
      "0043fad0",
      "READ",
      [
        "storage",
        "002a7580",
        null,
        "string"
      ]
    ],
    [
      "0043fc14",
      "READ",
      [
        "storage",
        "002a3ecf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0043f990 ["INT_ADD", "register:40f0:8", ["const:43f990:8", "const:4:8"]]
- 0043f990 ["CALL", null, ["callee:00c58040:8"]]
+ 0043f9d0 ["INT_ADD", "register:40f0:8", ["const:43f9d0:8", "const:4:8"]]
+ 0043f9d0 ["CALL", null, ["callee:00c58040:8"]]
- 0043fae0 ["INT_ADD", "register:40f0:8", ["const:43fae0:8", "const:4:8"]]
- 0043fae0 ["CALL", null, ["callee:00596d50:8"]]
+ 0043fb20 ["INT_ADD", "register:40f0:8", ["const:43fb20:8", "const:4:8"]]
+ 0043fb20 ["CALL", null, ["callee:00596d50:8"]]
- 004406e8 ["COPY", "register:0:8", ["register:4040:8"]]
- 004406e8 ["INT_ADD", "register:40f0:8", ["const:4406e8:8", "const:4:8"]]
- 004406e8 ["CALLIND", null, ["register:0:8"]]
+ 00440728 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00440728 ["INT_ADD", "register:40f0:8", ["const:440728:8", "const:4:8"]]
+ 00440728 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-68020707306034ac751dc6648135156d"></a>

### [`00440b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440b7c.md) → [`00440bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440bbc.md) FUN_00440bbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`006b85b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b85b8.md) [`0080f128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0080f/0080f128.md) [`0081a814`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0081a/0081a814.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fc0.md)
- 新版 呼出元 4件 [`006b8610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8610.md) [`0080f180`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0080f/0080f180.md) [`0081a86c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0081a/0081a86c.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md) [`00c58080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58080.md) [`00c58090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58090.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_destination` 1件, `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00440bec",
      "incomplete_value": true,
      "site": "00440bf4",
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
      "definition_site": "00440bac",
      "incomplete_value": true,
      "site": "00440bb4",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00440bf8",
      "incomplete_value": true,
      "site": "00440bf8",
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
      "definition_site": "00440bb8",
      "incomplete_value": true,
      "site": "00440bb8",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00440c08",
      "incomplete_value": true,
      "site": "00440c08",
      "value": [
        "INT_ADD",
        "8",
        [
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
                "const:48:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
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
      "definition_site": "00440bc8",
      "incomplete_value": true,
      "site": "00440bc8",
      "value": [
        "INT_ADD",
        "8",
        [
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
                "const:48:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
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
      "00440bd8",
      "READ",
      [
        "storage",
        "00c9abb0",
        null,
        "pointer"
      ]
    ],
    [
      "00440bdc",
      "READ",
      [
        "storage",
        "00c9abb8",
        null,
        "pointer"
      ]
    ],
    [
      "00440be8",
      "READ",
      [
        "storage",
        "00c93200",
        "std::__ndk1::basic_ostringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "00440bd8",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ],
    [
      "00440bdc",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "00440be8",
      "READ",
      [
        "storage",
        "00c932d0",
        "std::__ndk1::basic_ostringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00440bf4 ["INT_ADD", "register:40f0:8", ["const:440bf4:8", "const:4:8"]]
- 00440bf4 ["CALL", null, ["callee:00c58080:8"]]
+ 00440c34 ["INT_ADD", "register:40f0:8", ["const:440c34:8", "const:4:8"]]
+ 00440c34 ["CALL", null, ["callee:00c58080:8"]]
- 00440b98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bb0:8"]]
- 00440b98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00440bd8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c80:8"]]
+ 00440bd8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00440b9c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:bb8:8"]]
- 00440b9c ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00440bdc ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c88:8"]]
+ 00440bdc ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d31579a18851c371e563547d9e156ed4"></a>

### [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) → [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) FUN_00440f00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 575件 [`0043f91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f91c.md) [`00440c4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c4c.md) [`0045ca98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045c/0045ca98.md) [`0045db78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0045d/0045db78.md) [`00461b38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00461/00461b38.md) · 呼出先 4件 [`00c37ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ba4.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md) [`00c58030`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58030.md)
- 新版 呼出元 575件 [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) [`00440c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c8c.md) [`0045cad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045c/0045cad8.md) [`0045dbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045d/0045dbb8.md) [`00461b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00461/00461b78.md) · 呼出先 4件 [`00c37c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37c40.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c58100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58100.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00440f28",
      "incomplete_value": true,
      "site": "00440f30",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00440ee8",
      "incomplete_value": true,
      "site": "00440ef0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd0:8"
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
      "definition_site": "00440f2c",
      "incomplete_value": true,
      "site": "00440f30",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00440eec",
      "incomplete_value": true,
      "site": "00440ef0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bd8:8"
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
      "00440f28",
      "READ",
      [
        "storage",
        "00c9abd0",
        null,
        "pointer"
      ]
    ],
    [
      "00440f28",
      "PARAM",
      [
        "storage",
        "00c966b0",
        "std::bad_array_new_length::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00440f2c",
      "READ",
      [
        "storage",
        "00c9abd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00440f28",
      "READ",
      [
        "storage",
        "00c9aca0",
        null,
        "pointer"
      ]
    ],
    [
      "00440f28",
      "PARAM",
      [
        "storage",
        "00c96780",
        "std::bad_array_new_length::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00440f2c",
      "READ",
      [
        "storage",
        "00c9aca8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00440ef0 ["INT_ADD", "register:40f0:8", ["const:440ef0:8", "const:4:8"]]
- 00440ef0 ["CALL", null, ["callee:00c57fe0:8"]]
+ 00440f30 ["INT_ADD", "register:40f0:8", ["const:440f30:8", "const:4:8"]]
+ 00440f30 ["CALL", null, ["callee:00c57fe0:8"]]
- 00440ed0 ["INT_ADD", "register:40f0:8", ["const:440ed0:8", "const:4:8"]]
- 00440ed0 ["CALL", null, ["callee:00c57fc0:8"]]
+ 00440f10 ["INT_ADD", "register:40f0:8", ["const:440f10:8", "const:4:8"]]
+ 00440f10 ["CALL", null, ["callee:00c57fc0:8"]]
- 00440ed8 ["INT_ADD", "register:40f0:8", ["const:440ed8:8", "const:4:8"]]
- 00440ed8 ["CALL", null, ["callee:00c58100:8"]]
+ 00440f18 ["INT_ADD", "register:40f0:8", ["const:440f18:8", "const:4:8"]]
+ 00440f18 ["CALL", null, ["callee:00c58100:8"]]
~~~


<a id="compare-7c0d45678b306177ebee2028a99fb035"></a>

### [`00440f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f5c.md) → [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) FUN_00440f9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 43件 [`00440c4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440c4c.md) [`00473540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/00473540.md) [`004858ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00485/004858ac.md) [`004b3ee4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004b3/004b3ee4.md) [`004be424`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004be/004be424.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 43件 [`00440c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440c8c.md) [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md) [`004858ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00485/004858ec.md) [`004b3f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004b3/004b3f24.md) [`004be464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004be/004be464.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00440fa8",
      "incomplete_value": false,
      "site": "00440fac",
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
      "definition_site": "00440f68",
      "incomplete_value": false,
      "site": "00440f6c",
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
      "00440fa8",
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
      "00440fa8",
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
- 00440f6c ["INT_ADD", "register:40f0:8", ["const:440f6c:8", "const:4:8"]]
- 00440f6c ["CALL", null, ["callee:0043b7b8:8"]]
+ 00440fac ["INT_ADD", "register:40f0:8", ["const:440fac:8", "const:4:8"]]
+ 00440fac ["CALL", null, ["callee:0043b7b8:8"]]
- 00440f68 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00440f68 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00440f68 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00440f68 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00440fa8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00440fa8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00440fa8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00440fa8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-da43533974784b49f5fcf8d439605773"></a>

### [`004412b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/004412b8.md) → [`004412f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004412f8.md) FUN_004412f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00441190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441190.md) [`004412b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/004412b8.md) [`00617370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00617/00617370.md) [`0061aef8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0061a/0061aef8.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`004412b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/004412b8.md)
- 新版 呼出元 4件 [`004411d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004411d0.md) [`004412f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004412f8.md) [`006173b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00617/006173b0.md) [`0061af38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061af38.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`004412f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004412f8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.80% / 新版 98.80%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00441468",
      "incomplete_value": false,
      "site": "00441470",
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
      "definition_site": "00441428",
      "incomplete_value": false,
      "site": "00441430",
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
      "definition_site": "00441520",
      "incomplete_value": false,
      "site": "00441528",
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
      "definition_site": "004414e0",
      "incomplete_value": false,
      "site": "004414e8",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0044153c",
      "incomplete_value": false,
      "site": "00441548",
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
      "definition_site": "004414fc",
      "incomplete_value": false,
      "site": "00441508",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00441468",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00441520",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "0044153c",
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
      "00441468",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00441520",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "0044153c",
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
- 00441430 ["INT_ADD", "register:40f0:8", ["const:441430:8", "const:4:8"]]
- 00441430 ["CALL", null, ["callee:00441ed4:8"]]
+ 00441470 ["INT_ADD", "register:40f0:8", ["const:441470:8", "const:4:8"]]
+ 00441470 ["CALL", null, ["callee:00441ed4:8"]]
- 004414e8 ["INT_ADD", "register:40f0:8", ["const:4414e8:8", "const:4:8"]]
- 004414e8 ["CALL", null, ["callee:00441ed4:8"]]
+ 00441528 ["INT_ADD", "register:40f0:8", ["const:441528:8", "const:4:8"]]
+ 00441528 ["CALL", null, ["callee:00441ed4:8"]]
- 00441508 ["INT_ADD", "register:40f0:8", ["const:441508:8", "const:4:8"]]
- 00441508 ["CALL", null, ["callee:00442834:8"]]
+ 00441548 ["INT_ADD", "register:40f0:8", ["const:441548:8", "const:4:8"]]
+ 00441548 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-1a69d454563612747eeecbad6f741cb6"></a>

### [`00441f14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441f14.md) → [`00441f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441f54.md) FUN_00441f54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`004412b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/004412b8.md) [`00441f14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441f14.md) [`0047d860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047d/0047d860.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`0073a354`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073a/0073a354.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 7件 [`004412f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004412f8.md) [`00441f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441f54.md) [`0047d8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d8a0.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`0073a3ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073a/0073a3ac.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.62% / 新版 98.62%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004420bc",
      "incomplete_value": false,
      "site": "004420c4",
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
      "definition_site": "0044207c",
      "incomplete_value": false,
      "site": "00442084",
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
      "definition_site": "00442174",
      "incomplete_value": false,
      "site": "0044217c",
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
      "definition_site": "00442134",
      "incomplete_value": false,
      "site": "0044213c",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00442190",
      "incomplete_value": false,
      "site": "0044219c",
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
      "definition_site": "00442150",
      "incomplete_value": false,
      "site": "0044215c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "004420bc",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00442174",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "00442190",
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
      "004420bc",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00442174",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "00442190",
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
- 00442084 ["INT_ADD", "register:40f0:8", ["const:442084:8", "const:4:8"]]
- 00442084 ["CALL", null, ["callee:00441ed4:8"]]
+ 004420c4 ["INT_ADD", "register:40f0:8", ["const:4420c4:8", "const:4:8"]]
+ 004420c4 ["CALL", null, ["callee:00441ed4:8"]]
- 0044213c ["INT_ADD", "register:40f0:8", ["const:44213c:8", "const:4:8"]]
- 0044213c ["CALL", null, ["callee:00441ed4:8"]]
+ 0044217c ["INT_ADD", "register:40f0:8", ["const:44217c:8", "const:4:8"]]
+ 0044217c ["CALL", null, ["callee:00441ed4:8"]]
- 0044215c ["INT_ADD", "register:40f0:8", ["const:44215c:8", "const:4:8"]]
- 0044215c ["CALL", null, ["callee:00442834:8"]]
+ 0044219c ["INT_ADD", "register:40f0:8", ["const:44219c:8", "const:4:8"]]
+ 0044219c ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-5085828e6f3a04aba364c89dda5e8bcf"></a>

### [`0044291c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md) → [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) FUN_0044295c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 129件 [`004412b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/004412b8.md) [`00441dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441dc0.md) [`00441e94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441e94.md) [`00441f14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441f14.md) [`00446dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446dc0.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 129件 [`004412f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004412f8.md) [`00441e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441e00.md) [`00441ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441ed4.md) [`00441f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441f54.md) [`00446e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446e00.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00442968",
      "incomplete_value": false,
      "site": "0044296c",
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
    "old": {
      "definition_site": "00442928",
      "incomplete_value": false,
      "site": "0044292c",
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
            "const:f23:8"
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
      "00442968",
      "PARAM",
      [
        "storage",
        "002b9f23",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00442968",
      "PARAM",
      [
        "storage",
        "002b9ecf",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044292c ["INT_ADD", "register:40f0:8", ["const:44292c:8", "const:4:8"]]
- 0044292c ["CALL", null, ["callee:00442970:8"]]
+ 0044296c ["INT_ADD", "register:40f0:8", ["const:44296c:8", "const:4:8"]]
+ 0044296c ["CALL", null, ["callee:00442970:8"]]
- 00442928 ["COPY", "tmp:0:8", ["const:f23:8"]]
- 00442928 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00442928 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00442928 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00442968 ["COPY", "tmp:0:8", ["const:ecf:8"]]
+ 00442968 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00442968 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00442968 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-8a92e0ff0bdff0b83837a23cf6d0e3ac"></a>

### [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) → [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) FUN_00442970

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 225件 [`0044291c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/0044291c.md) [`00486d78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00486/00486d78.md) [`0049f3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f3f0.md) [`0049f404`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f404.md) [`0049f418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049f/0049f418.md) · 呼出先 4件 [`00442980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442980.md) [`00c37ccc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37ccc.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 225件 [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00486db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00486/00486db8.md) [`0049f430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f430.md) [`0049f444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f444.md) [`0049f458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f458.md) · 呼出先 4件 [`004429c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/004429c0.md) [`00c37d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d68.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004429a0",
      "incomplete_value": true,
      "site": "004429a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00442960",
      "incomplete_value": true,
      "site": "00442968",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be0:8"
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
      "definition_site": "004429a4",
      "incomplete_value": true,
      "site": "004429a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cb8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00442964",
      "incomplete_value": true,
      "site": "00442968",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:be8:8"
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
      "004429a0",
      "READ",
      [
        "storage",
        "00c9abe0",
        null,
        "pointer"
      ]
    ],
    [
      "004429a0",
      "PARAM",
      [
        "storage",
        "00c96818",
        "std::out_of_range::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "004429a4",
      "READ",
      [
        "storage",
        "00c9abe8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "004429a0",
      "READ",
      [
        "storage",
        "00c9acb0",
        null,
        "pointer"
      ]
    ],
    [
      "004429a0",
      "PARAM",
      [
        "storage",
        "00c968e8",
        "std::out_of_range::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "004429a4",
      "READ",
      [
        "storage",
        "00c9acb8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00442968 ["INT_ADD", "register:40f0:8", ["const:442968:8", "const:4:8"]]
- 00442968 ["CALL", null, ["callee:00c57fe0:8"]]
+ 004429a8 ["INT_ADD", "register:40f0:8", ["const:4429a8:8", "const:4:8"]]
+ 004429a8 ["CALL", null, ["callee:00c57fe0:8"]]
- 00442944 ["INT_ADD", "register:40f0:8", ["const:442944:8", "const:4:8"]]
- 00442944 ["CALL", null, ["callee:00c57fc0:8"]]
+ 00442984 ["INT_ADD", "register:40f0:8", ["const:442984:8", "const:4:8"]]
+ 00442984 ["CALL", null, ["callee:00c57fc0:8"]]
- 00442950 ["INT_ADD", "register:40f0:8", ["const:442950:8", "const:4:8"]]
- 00442950 ["CALL", null, ["callee:004429c0:8"]]
+ 00442990 ["INT_ADD", "register:40f0:8", ["const:442990:8", "const:4:8"]]
+ 00442990 ["CALL", null, ["callee:004429c0:8"]]
~~~


<a id="compare-ddeedf98fa47e9910f102773f6b13794"></a>

### [`00442d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442d74.md) → [`00442db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442db4.md) FUN_00442db4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00442dc8",
      "incomplete_value": false,
      "site": "00442dcc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00442d88",
      "incomplete_value": false,
      "site": "00442d8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:ff8:8"
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
      "00442dcc",
      "DATA",
      [
        "storage",
        "00c62ff8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00442dcc",
      "DATA",
      [
        "storage",
        "00c630c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00442d80 ["INT_ADD", "register:40f0:8", ["const:442d80:8", "const:4:8"]]
- 00442d80 ["CALL", null, ["callee:00c57f60:8"]]
+ 00442dc0 ["INT_ADD", "register:40f0:8", ["const:442dc0:8", "const:4:8"]]
+ 00442dc0 ["CALL", null, ["callee:00c57f60:8"]]
- 00442d84 ["COPY", "register:4040:8", ["const:c62000:8"]]
+ 00442dc4 ["COPY", "register:4040:8", ["const:c63000:8"]]
- 00442d88 ["COPY", "tmp:0:8", ["const:ff8:8"]]
- 00442d88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00442d88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00442d88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00442dc8 ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 00442dc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00442dc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00442dc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-16f14ae5277c54b0f8111a44e440c9d6"></a>

### [`00442d98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442d98.md) → [`00442dd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442dd8.md) FUN_00442dd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00442ddc",
      "incomplete_value": false,
      "site": "00442de0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00442d9c",
      "incomplete_value": false,
      "site": "00442da0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c62000:8"
          ],
          [
            "leaf",
            "const:ff8:8"
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
      "00442de0",
      "DATA",
      [
        "storage",
        "00c62ff8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00442de0",
      "DATA",
      [
        "storage",
        "00c630c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00442d98 ["COPY", "register:4040:8", ["const:c62000:8"]]
+ 00442dd8 ["COPY", "register:4040:8", ["const:c63000:8"]]
- 00442d9c ["COPY", "tmp:0:8", ["const:ff8:8"]]
- 00442d9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00442d9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00442d9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00442ddc ["COPY", "tmp:0:8", ["const:c8:8"]]
+ 00442ddc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00442ddc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00442ddc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c1502f483f2411c8f663b3bdf125f089"></a>

### [`00442e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442e9c.md) → [`00442edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442edc.md) FUN_00442edc

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
      "definition_site": "00442f00",
      "incomplete_value": false,
      "site": "00442f00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00442ec0",
      "incomplete_value": false,
      "site": "00442ec0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:88:8"
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
      "00442f00",
      "DATA",
      [
        "storage",
        "00c63088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00442f00",
      "DATA",
      [
        "storage",
        "00c63158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00442eb0 ["INT_ADD", "register:40f0:8", ["const:442eb0:8", "const:4:8"]]
- 00442eb0 ["CALL", null, ["callee:00c57f60:8"]]
+ 00442ef0 ["INT_ADD", "register:40f0:8", ["const:442ef0:8", "const:4:8"]]
+ 00442ef0 ["CALL", null, ["callee:00c57f60:8"]]
- 00442ebc ["COPY", "tmp:0:8", ["const:88:8"]]
- 00442ebc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00442ebc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00442ebc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00442efc ["COPY", "tmp:0:8", ["const:158:8"]]
+ 00442efc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00442efc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00442efc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0beafe464accfa5397585c2bfea185f6"></a>

### [`00442ed0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442ed0.md) → [`00442f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442f10.md) FUN_00442f10

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
      "definition_site": "00442f1c",
      "incomplete_value": false,
      "site": "00442f1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:158:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00442edc",
      "incomplete_value": false,
      "site": "00442edc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:88:8"
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
      "00442f1c",
      "DATA",
      [
        "storage",
        "00c63088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00442f1c",
      "DATA",
      [
        "storage",
        "00c63158",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00442ed8 ["COPY", "tmp:0:8", ["const:88:8"]]
- 00442ed8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00442ed8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00442ed8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00442f18 ["COPY", "tmp:0:8", ["const:158:8"]]
+ 00442f18 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00442f18 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00442f18 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-88884bbf2f1121c4f5f6a6e0c7466608"></a>

### [`00442f28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442f28.md) → [`00442f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442f68.md) FUN_00442f68

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
      "definition_site": "00442f8c",
      "incomplete_value": false,
      "site": "00442f8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00442f4c",
      "incomplete_value": false,
      "site": "00442f4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:118:8"
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
      "00442f8c",
      "DATA",
      [
        "storage",
        "00c63118",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00442f8c",
      "DATA",
      [
        "storage",
        "00c631e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00442f3c ["INT_ADD", "register:40f0:8", ["const:442f3c:8", "const:4:8"]]
- 00442f3c ["CALL", null, ["callee:00c57f60:8"]]
+ 00442f7c ["INT_ADD", "register:40f0:8", ["const:442f7c:8", "const:4:8"]]
+ 00442f7c ["CALL", null, ["callee:00c57f60:8"]]
- 00442f48 ["COPY", "tmp:0:8", ["const:118:8"]]
- 00442f48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00442f48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00442f48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00442f88 ["COPY", "tmp:0:8", ["const:1e8:8"]]
+ 00442f88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00442f88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00442f88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3925a379d20996b622445c158f8b0eb3"></a>

### [`00442f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442f5c.md) → [`00442f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442f9c.md) FUN_00442f9c

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
      "definition_site": "00442fa8",
      "incomplete_value": false,
      "site": "00442fa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00442f68",
      "incomplete_value": false,
      "site": "00442f68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:118:8"
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
      "00442fa8",
      "DATA",
      [
        "storage",
        "00c63118",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00442fa8",
      "DATA",
      [
        "storage",
        "00c631e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00442f64 ["COPY", "tmp:0:8", ["const:118:8"]]
- 00442f64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00442f64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00442f64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00442fa4 ["COPY", "tmp:0:8", ["const:1e8:8"]]
+ 00442fa4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00442fa4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00442fa4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5b7e72b10e110b931a42939759ef3c13"></a>

### [`00443070`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443070.md) → [`004430b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004430b0.md) FUN_004430b0

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
      "definition_site": "004430d4",
      "incomplete_value": false,
      "site": "004430d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:278:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443094",
      "incomplete_value": false,
      "site": "00443094",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
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
      "004430d4",
      "DATA",
      [
        "storage",
        "00c631a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004430d4",
      "DATA",
      [
        "storage",
        "00c63278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443084 ["INT_ADD", "register:40f0:8", ["const:443084:8", "const:4:8"]]
- 00443084 ["CALL", null, ["callee:00c57f60:8"]]
+ 004430c4 ["INT_ADD", "register:40f0:8", ["const:4430c4:8", "const:4:8"]]
+ 004430c4 ["CALL", null, ["callee:00c57f60:8"]]
- 00443090 ["COPY", "tmp:0:8", ["const:1a8:8"]]
- 00443090 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00443090 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00443090 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004430d0 ["COPY", "tmp:0:8", ["const:278:8"]]
+ 004430d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004430d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004430d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d0db89b2d184db6dd6ed455525338cac"></a>

### [`004430a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004430a4.md) → [`004430e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004430e4.md) FUN_004430e4

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
      "definition_site": "004430f0",
      "incomplete_value": false,
      "site": "004430f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:278:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004430b0",
      "incomplete_value": false,
      "site": "004430b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:1a8:8"
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
      "004430f0",
      "DATA",
      [
        "storage",
        "00c631a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004430f0",
      "DATA",
      [
        "storage",
        "00c63278",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004430ac ["COPY", "tmp:0:8", ["const:1a8:8"]]
- 004430ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004430ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004430ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004430ec ["COPY", "tmp:0:8", ["const:278:8"]]
+ 004430ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004430ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004430ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-69f1e7d04c5781987a169cce011950a9"></a>

### [`0044316c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044316c.md) → [`004431ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004431ac.md) FUN_004431ac

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
      "definition_site": "004431d0",
      "incomplete_value": false,
      "site": "004431d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443190",
      "incomplete_value": false,
      "site": "00443190",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:238:8"
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
      "004431d0",
      "DATA",
      [
        "storage",
        "00c63238",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004431d0",
      "DATA",
      [
        "storage",
        "00c63308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443180 ["INT_ADD", "register:40f0:8", ["const:443180:8", "const:4:8"]]
- 00443180 ["CALL", null, ["callee:00c57f60:8"]]
+ 004431c0 ["INT_ADD", "register:40f0:8", ["const:4431c0:8", "const:4:8"]]
+ 004431c0 ["CALL", null, ["callee:00c57f60:8"]]
- 0044318c ["COPY", "tmp:0:8", ["const:238:8"]]
- 0044318c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044318c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044318c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004431cc ["COPY", "tmp:0:8", ["const:308:8"]]
+ 004431cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004431cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004431cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8dae215261818956b30cac0462aed9c9"></a>

### [`004431a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004431a0.md) → [`004431e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004431e0.md) FUN_004431e0

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
      "definition_site": "004431ec",
      "incomplete_value": false,
      "site": "004431ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:308:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004431ac",
      "incomplete_value": false,
      "site": "004431ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:238:8"
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
      "004431ec",
      "DATA",
      [
        "storage",
        "00c63238",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004431ec",
      "DATA",
      [
        "storage",
        "00c63308",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004431a8 ["COPY", "tmp:0:8", ["const:238:8"]]
- 004431a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 004431a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 004431a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004431e8 ["COPY", "tmp:0:8", ["const:308:8"]]
+ 004431e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004431e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004431e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-51df6c89290469f48f36c89832b4e501"></a>

### [`004431fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004431fc.md) → [`0044323c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/0044323c.md) FUN_0044323c

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
      "definition_site": "00443260",
      "incomplete_value": false,
      "site": "00443260",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443220",
      "incomplete_value": false,
      "site": "00443220",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:2b8:8"
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
      "00443260",
      "DATA",
      [
        "storage",
        "00c632b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00443260",
      "DATA",
      [
        "storage",
        "00c63388",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443210 ["INT_ADD", "register:40f0:8", ["const:443210:8", "const:4:8"]]
- 00443210 ["CALL", null, ["callee:00c57f60:8"]]
+ 00443250 ["INT_ADD", "register:40f0:8", ["const:443250:8", "const:4:8"]]
+ 00443250 ["CALL", null, ["callee:00c57f60:8"]]
- 0044321c ["COPY", "tmp:0:8", ["const:2b8:8"]]
- 0044321c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044321c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044321c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0044325c ["COPY", "tmp:0:8", ["const:388:8"]]
+ 0044325c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0044325c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0044325c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-096a203b298925b27f844949bad379ec"></a>

### [`00443230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443230.md) → [`00443270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443270.md) FUN_00443270

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
      "definition_site": "0044327c",
      "incomplete_value": false,
      "site": "0044327c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044323c",
      "incomplete_value": false,
      "site": "0044323c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:2b8:8"
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
      "0044327c",
      "DATA",
      [
        "storage",
        "00c632b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0044327c",
      "DATA",
      [
        "storage",
        "00c63388",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443238 ["COPY", "tmp:0:8", ["const:2b8:8"]]
- 00443238 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00443238 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00443238 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00443278 ["COPY", "tmp:0:8", ["const:388:8"]]
+ 00443278 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00443278 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00443278 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-af2d8f0bd3a5893f62c0d98f14ccccd0"></a>

### [`00443348`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443348.md) → [`00443388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443388.md) FUN_00443388

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
      "definition_site": "004433ac",
      "incomplete_value": false,
      "site": "004433ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044336c",
      "incomplete_value": false,
      "site": "0044336c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "004433ac",
      "DATA",
      [
        "storage",
        "00c63338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004433ac",
      "DATA",
      [
        "storage",
        "00c63408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044335c ["INT_ADD", "register:40f0:8", ["const:44335c:8", "const:4:8"]]
- 0044335c ["CALL", null, ["callee:00c57f60:8"]]
+ 0044339c ["INT_ADD", "register:40f0:8", ["const:44339c:8", "const:4:8"]]
+ 0044339c ["CALL", null, ["callee:00c57f60:8"]]
- 00443368 ["COPY", "tmp:0:8", ["const:338:8"]]
- 00443368 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00443368 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00443368 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004433a8 ["COPY", "tmp:0:8", ["const:408:8"]]
+ 004433a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004433a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004433a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6763e732a1c26f7ecc4aee56c30f537e"></a>

### [`0044337c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044337c.md) → [`004433bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004433bc.md) FUN_004433bc

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
      "definition_site": "004433c8",
      "incomplete_value": false,
      "site": "004433c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:408:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443388",
      "incomplete_value": false,
      "site": "00443388",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:338:8"
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
      "004433c8",
      "DATA",
      [
        "storage",
        "00c63338",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004433c8",
      "DATA",
      [
        "storage",
        "00c63408",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443384 ["COPY", "tmp:0:8", ["const:338:8"]]
- 00443384 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00443384 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00443384 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 004433c4 ["COPY", "tmp:0:8", ["const:408:8"]]
+ 004433c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 004433c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 004433c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-ba95d5a5c682afcd9a9a534a03d4abf1"></a>

### [`00443444`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443444.md) → [`00443484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443484.md) FUN_00443484

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00443498",
      "incomplete_value": false,
      "site": "0044349c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443458",
      "incomplete_value": false,
      "site": "0044345c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
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
      "0044349c",
      "DATA",
      [
        "storage",
        "00c633b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0044349c",
      "DATA",
      [
        "storage",
        "00c63488",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443450 ["INT_ADD", "register:40f0:8", ["const:443450:8", "const:4:8"]]
- 00443450 ["CALL", null, ["callee:00c57f60:8"]]
+ 00443490 ["INT_ADD", "register:40f0:8", ["const:443490:8", "const:4:8"]]
+ 00443490 ["CALL", null, ["callee:00c57f60:8"]]
- 00443458 ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 00443458 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00443458 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00443458 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00443498 ["COPY", "tmp:0:8", ["const:488:8"]]
+ 00443498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00443498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00443498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0248c441f3e16ece4680d8f0dd501eb8"></a>

### [`00443468`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443468.md) → [`004434a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004434a8.md) FUN_004434a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004434ac",
      "incomplete_value": false,
      "site": "004434b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044346c",
      "incomplete_value": false,
      "site": "00443470",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:3b8:8"
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
      "004434b0",
      "DATA",
      [
        "storage",
        "00c633b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004434b0",
      "DATA",
      [
        "storage",
        "00c63488",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044346c ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 0044346c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044346c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044346c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004434ac ["COPY", "tmp:0:8", ["const:488:8"]]
+ 004434ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004434ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004434ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8a57c394f84edaba27c287b5b4c2548b"></a>

### [`00443480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443480.md) → [`004434c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004434c0.md) FUN_004434c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043e9dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e9dc.md) [`0043ea60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043ea60.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043ea1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043ea1c.md) [`0043eaa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eaa0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 78.31% / 新版 78.31%

優先判定に残った影響 `call_argument_candidate` 10件

アドレスに依存する影響 `call_argument_candidate` 2件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00443554",
      "incomplete_value": false,
      "site": "00443554",
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
            "const:abc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443514",
      "incomplete_value": false,
      "site": "00443514",
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
            "const:9bc:8"
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
      "definition_site": "0044357c",
      "incomplete_value": false,
      "site": "00443580",
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
            "const:ae0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044353c",
      "incomplete_value": false,
      "site": "00443540",
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
            "const:9e0:8"
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
      "definition_site": "0044358c",
      "incomplete_value": false,
      "site": "00443590",
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
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044354c",
      "incomplete_value": false,
      "site": "00443550",
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
            "const:988:8"
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
      "00443510",
      "READ",
      [
        "storage",
        "00ca49e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00443544",
      "READ",
      [
        "storage",
        "00ca49e0",
        null,
        "undefined1"
      ]
    ],
    [
      "00443554",
      "WRITE",
      [
        "storage",
        "00ca49bc",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00443510",
      "READ",
      [
        "storage",
        "00ca4ae0",
        null,
        "undefined1"
      ]
    ],
    [
      "00443544",
      "READ",
      [
        "storage",
        "00ca4ae0",
        null,
        "undefined1"
      ]
    ],
    [
      "00443554",
      "WRITE",
      [
        "storage",
        "00ca4abc",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443500 ["COPY", "tmp:0:8", ["const:9e0:8"]]
- 00443500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00443500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00443500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00443540 ["COPY", "tmp:0:8", ["const:ae0:8"]]
+ 00443540 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00443540 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00443540 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00443514 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:9bc:8"]]
- 00443514 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 00443554 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:abc:8"]]
+ 00443554 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 00443540 ["INT_ADD", "register:40f0:8", ["const:443540:8", "const:4:8"]]
- 00443540 ["CALL", null, ["callee:00c57f20:8"]]
+ 00443580 ["INT_ADD", "register:40f0:8", ["const:443580:8", "const:4:8"]]
+ 00443580 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-45c15b7e929afd0c8080f5decf86448b"></a>

### [`00443624`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443624.md) → [`00443664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443664.md) FUN_00443664

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00443678",
      "incomplete_value": false,
      "site": "0044367c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:518:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443638",
      "incomplete_value": false,
      "site": "0044363c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:448:8"
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
      "0044367c",
      "DATA",
      [
        "storage",
        "00c63448",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0044367c",
      "DATA",
      [
        "storage",
        "00c63518",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443630 ["INT_ADD", "register:40f0:8", ["const:443630:8", "const:4:8"]]
- 00443630 ["CALL", null, ["callee:00c57f60:8"]]
+ 00443670 ["INT_ADD", "register:40f0:8", ["const:443670:8", "const:4:8"]]
+ 00443670 ["CALL", null, ["callee:00c57f60:8"]]
- 00443638 ["COPY", "tmp:0:8", ["const:448:8"]]
- 00443638 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00443638 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00443638 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00443678 ["COPY", "tmp:0:8", ["const:518:8"]]
+ 00443678 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00443678 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00443678 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-368d705612162af2f2b756b629f555e2"></a>

### [`00443648`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443648.md) → [`00443688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443688.md) FUN_00443688

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0044368c",
      "incomplete_value": false,
      "site": "00443690",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:518:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044364c",
      "incomplete_value": false,
      "site": "00443650",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:448:8"
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
      "00443690",
      "DATA",
      [
        "storage",
        "00c63448",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00443690",
      "DATA",
      [
        "storage",
        "00c63518",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044364c ["COPY", "tmp:0:8", ["const:448:8"]]
- 0044364c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044364c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044364c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0044368c ["COPY", "tmp:0:8", ["const:518:8"]]
+ 0044368c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0044368c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0044368c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-58b29a3446a9af9cc6e872f4395a649d"></a>

### [`00443660`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443660.md) → [`004436a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004436a0.md) FUN_004436a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "004436ac",
      "incomplete_value": true,
      "site": "004436ac",
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
            "const:44:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044366c",
      "incomplete_value": true,
      "site": "0044366c",
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
            "const:44:8"
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
      "004436a8",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "004436ac",
      "WRITE",
      [
        "storage",
        "00ca4cb4",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "004436a8",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "004436ac",
      "WRITE",
      [
        "storage",
        "00ca4db4",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443668 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b68:8"]]
- 00443668 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 004436a8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c38:8"]]
+ 004436a8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-5c5ee650645123d696f0d2d1d41bcaf8"></a>

### [`004436a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004436a4.md) → [`004436e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/004436e4.md) FUN_004436e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "004436f8",
      "incomplete_value": false,
      "site": "004436fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004436b8",
      "incomplete_value": false,
      "site": "004436bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
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
      "004436fc",
      "DATA",
      [
        "storage",
        "00c634d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "004436fc",
      "DATA",
      [
        "storage",
        "00c635a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004436b0 ["INT_ADD", "register:40f0:8", ["const:4436b0:8", "const:4:8"]]
- 004436b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 004436f0 ["INT_ADD", "register:40f0:8", ["const:4436f0:8", "const:4:8"]]
+ 004436f0 ["CALL", null, ["callee:00c57f60:8"]]
- 004436b8 ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 004436b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004436b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004436b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 004436f8 ["COPY", "tmp:0:8", ["const:5a8:8"]]
+ 004436f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 004436f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 004436f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b6b6b9ed279bf8865ae1502693ad8ece"></a>

### [`004436c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004436c8.md) → [`00443708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443708.md) FUN_00443708

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0044370c",
      "incomplete_value": false,
      "site": "00443710",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004436cc",
      "incomplete_value": false,
      "site": "004436d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
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
      "00443710",
      "DATA",
      [
        "storage",
        "00c634d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00443710",
      "DATA",
      [
        "storage",
        "00c635a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 004436cc ["COPY", "tmp:0:8", ["const:4d8:8"]]
- 004436cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004436cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004436cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0044370c ["COPY", "tmp:0:8", ["const:5a8:8"]]
+ 0044370c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0044370c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0044370c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-22b63991ee9f5452e0ed9e28811c7dc3"></a>

### [`004436e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/004436e0.md) → [`00443720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443720.md) FUN_00443720

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00443728",
      "incomplete_value": false,
      "site": "00443728",
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
                "const:d70:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:44:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004436e8",
      "incomplete_value": false,
      "site": "004436e8",
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
                "const:c70:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:44:8"
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
      "00443728",
      "WRITE",
      [
        "storage",
        "00ca4cb4",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00443728",
      "WRITE",
      [
        "storage",
        "00ca4db4",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 004436e4 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 004436e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 004436e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 004436e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00443724 ["COPY", "tmp:0:8", ["const:d70:8"]]
+ 00443724 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00443724 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00443724 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a49a5f290e5ced2732ee4b4d509fda50"></a>

### [`00443718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443718.md) → [`00443758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443758.md) FUN_00443758

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0043f91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f91c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00443764",
      "incomplete_value": false,
      "site": "00443768",
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
      "definition_site": "00443724",
      "incomplete_value": false,
      "site": "00443728",
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
      "00443764",
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
      "00443764",
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
- 00443728 ["INT_ADD", "register:40f0:8", ["const:443728:8", "const:4:8"]]
- 00443728 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00443768 ["INT_ADD", "register:40f0:8", ["const:443768:8", "const:4:8"]]
+ 00443768 ["CALL", null, ["callee:0043b7b8:8"]]
- 00443724 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00443724 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00443724 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00443724 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00443764 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00443764 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00443764 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00443764 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-166a79777d6fb21b184cf113875af4b4"></a>

### [`0044372c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/0044372c.md) → [`0044376c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/0044376c.md) _INIT_7

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 3件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004437a8",
      "incomplete_value": true,
      "site": "004437c4",
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
                "const:f66:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443768",
      "incomplete_value": true,
      "site": "00443784",
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
                "const:f26:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "004437cc",
      "incomplete_value": true,
      "site": "004437e8",
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
                "const:f79:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044378c",
      "incomplete_value": true,
      "site": "004437a8",
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
                "const:f39:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "004437ec",
      "incomplete_value": true,
      "site": "00443808",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:d6e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004437ac",
      "incomplete_value": true,
      "site": "004437c8",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc2:8"
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
      "004437a8",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "004437cc",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "004437ec",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "004437a8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "004437cc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "004437ec",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004437a4 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 004437a4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 004437a4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 004437a4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 004437e4 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 004437e4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 004437e4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 004437e4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 004437c4 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 004437c4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 004437c4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 004437c4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00443804 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 00443804 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00443804 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00443804 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0044388c ["INT_ADD", "register:40f0:8", ["const:44388c:8", "const:4:8"]]
- 0044388c ["CALL", null, ["callee:0043b838:8"]]
+ 004438cc ["INT_ADD", "register:40f0:8", ["const:4438cc:8", "const:4:8"]]
+ 004438cc ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-832efcba2bb8dd11197534d6c384eab8"></a>

### [`00443abc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443abc.md) → [`00443afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443afc.md) _INIT_8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 3件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00443b38",
      "incomplete_value": true,
      "site": "00443b54",
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
                "const:f66:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443af8",
      "incomplete_value": true,
      "site": "00443b14",
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
                "const:f26:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00443b5c",
      "incomplete_value": true,
      "site": "00443b78",
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
                "const:f79:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443b1c",
      "incomplete_value": true,
      "site": "00443b38",
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
                "const:f39:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "00443b7c",
      "incomplete_value": true,
      "site": "00443b98",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:d6e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443b3c",
      "incomplete_value": true,
      "site": "00443b58",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc2:8"
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
      "00443b38",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00443b5c",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00443b7c",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00443b38",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00443b5c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00443b7c",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443b34 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 00443b34 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00443b34 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00443b34 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00443b74 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 00443b74 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00443b74 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00443b74 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00443b54 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 00443b54 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00443b54 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00443b54 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00443b94 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 00443b94 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00443b94 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00443b94 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00443c1c ["INT_ADD", "register:40f0:8", ["const:443c1c:8", "const:4:8"]]
- 00443c1c ["CALL", null, ["callee:0043b838:8"]]
+ 00443c5c ["INT_ADD", "register:40f0:8", ["const:443c5c:8", "const:4:8"]]
+ 00443c5c ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-329b9403bfeb2be1303eb43a1bc5b32b"></a>

### [`00443e4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00443/00443e4c.md) → [`00443e8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00443/00443e8c.md) FUN_00443e8c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0044ab50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab50.md) · 呼出先 8件 [`00444614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444614.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md)
- 新版 呼出元 1件 [`0044ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ab90.md) · 呼出先 8件 [`00444654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444654.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 75.64% / 新版 75.64%

優先判定に残った影響 `call_argument_candidate` 16件, `store_destination` 22件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00443f50",
      "incomplete_value": false,
      "site": "00443f50",
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
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443f10",
      "incomplete_value": false,
      "site": "00443f10",
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
            "const:a30:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00443f88",
      "incomplete_value": false,
      "site": "00443f88",
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
            "const:b34:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443f48",
      "incomplete_value": false,
      "site": "00443f48",
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
            "const:a34:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00443fdc",
      "incomplete_value": false,
      "site": "00443fdc",
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
                "const:b18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00443f9c",
      "incomplete_value": false,
      "site": "00443f9c",
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
                "const:a18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00443ebc",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "00443ec8",
      "READ",
      [
        "storage",
        "00ca4a20",
        null,
        "undefined8"
      ]
    ],
    [
      "00443ed0",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00443ebc",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "00443ec8",
      "READ",
      [
        "storage",
        "00ca4b20",
        null,
        "undefined8"
      ]
    ],
    [
      "00443ed0",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00443f10 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a30:8"]]
- 00443f10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 00443f50 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:b30:8"]]
+ 00443f50 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 00443f48 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00443f48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:a34:8"]]
- 00443f48 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00443f88 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00443f88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:b34:8"]]
+ 00443f88 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00443f78 ["COPY", "tmp:0:8", ["const:a48:8"]]
- 00443f78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00443f78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00443f78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00443fb8 ["COPY", "tmp:0:8", ["const:b48:8"]]
+ 00443fb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00443fb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00443fb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a7adb858a547911b4e88c688817989f0"></a>

### [`004440e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/004440e0.md) → [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) FUN_00444120

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`00851504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851504.md) [`00872378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872378.md) [`00872a10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872a10.md) [`00872eac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872eac.md) [`00876f04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00876/00876f04.md) · 呼出先 4件 [`00444614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444614.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 6件 [`0085155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/0085155c.md) [`008723d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008723d0.md) [`00872a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a68.md) [`00872f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872f04.md) [`00876f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/00876f5c.md) · 呼出先 4件 [`00444654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444654.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, return_value_candidate, store_destination

命令の説明率　旧版 62.07% / 新版 62.07%

優先判定に残った影響 `call_argument_candidate` 4件, `return_value_candidate` 1件, `store_destination` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00444170",
      "incomplete_value": false,
      "site": "00444170",
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
                "const:b18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00444130",
      "incomplete_value": false,
      "site": "00444130",
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
                "const:a18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00444174",
      "incomplete_value": false,
      "site": "00444174",
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
                "const:b18:8"
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
      "definition_site": "00444134",
      "incomplete_value": false,
      "site": "00444134",
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
                "const:a18:8"
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00444174",
      "incomplete_value": false,
      "site": "00444174",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00444134",
      "incomplete_value": false,
      "site": "00444134",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
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
      "00444130",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "0044413c",
      "DATA",
      [
        "storage",
        "00ca4a18",
        null,
        "undefined8"
      ]
    ],
    [
      "0044414c",
      "PARAM",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00444130",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "0044413c",
      "DATA",
      [
        "storage",
        "00ca4b18",
        null,
        "undefined8"
      ]
    ],
    [
      "0044414c",
      "PARAM",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 004440fc ["COPY", "tmp:0:8", ["const:a18:8"]]
- 004440fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004440fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004440fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0044413c ["COPY", "tmp:0:8", ["const:b18:8"]]
+ 0044413c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0044413c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0044413c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 0044410c ["COPY", "tmp:0:8", ["const:a48:8"]]
- 0044410c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0044410c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0044410c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0044414c ["COPY", "tmp:0:8", ["const:b48:8"]]
+ 0044414c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0044414c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0044414c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00444110 ["INT_ADD", "register:40f0:8", ["const:444110:8", "const:4:8"]]
- 00444110 ["CALL", null, ["callee:00c57f20:8"]]
+ 00444150 ["INT_ADD", "register:40f0:8", ["const:444150:8", "const:4:8"]]
+ 00444150 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-77949c875c1776d43f34a647db6e13a4"></a>

### [`00444154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444154.md) → [`00444194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444194.md) FUN_00444194

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0044abc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044abc0.md) · 呼出先 6件 [`00444614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444614.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 1件 [`0044ac00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ac00.md) · 呼出先 6件 [`00444654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 branch_value, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 64.29% / 新版 64.29%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 29件, `call_target` 1件, `store_destination` 38件

アドレスに依存する影響 `branch_value` 2件, `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004441e8",
      "incomplete_value": false,
      "site": "004441e8",
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
            "const:b20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004441a8",
      "incomplete_value": false,
      "site": "004441a8",
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
            "const:a20:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004441e8",
      "incomplete_value": false,
      "site": "004441e8",
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
                "const:b20:8"
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
      "definition_site": "004441a8",
      "incomplete_value": false,
      "site": "004441a8",
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
                "const:a20:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0044426c",
      "incomplete_value": true,
      "site": "0044426c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:b34:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044422c",
      "incomplete_value": true,
      "site": "0044422c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:a34:8"
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
      "004441a8",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "004441b4",
      "READ",
      [
        "storage",
        "00ca4a20",
        null,
        "undefined8"
      ]
    ],
    [
      "004441bc",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "004441a8",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "004441b4",
      "READ",
      [
        "storage",
        "00ca4b20",
        null,
        "undefined8"
      ]
    ],
    [
      "004441bc",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044422c ["COPY", "tmp:0:4", ["const:0:4"]]
- 0044422c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 0044422c ["INT_ADD", "tmp:2:8", ["register:4098:8", "const:a34:8"]]
- 0044422c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 0044426c ["COPY", "tmp:0:4", ["const:0:4"]]
+ 0044426c ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 0044426c ["INT_ADD", "tmp:2:8", ["register:4098:8", "const:b34:8"]]
+ 0044426c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00444274 ["INT_ADD", "register:40f0:8", ["const:444274:8", "const:4:8"]]
- 00444274 ["CALL", null, ["callee:00c57f00:8"]]
+ 004442b4 ["INT_ADD", "register:40f0:8", ["const:4442b4:8", "const:4:8"]]
+ 004442b4 ["CALL", null, ["callee:00c57f00:8"]]
- 0044427c ["COPY", "tmp:0:8", ["const:a48:8"]]
- 0044427c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0044427c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0044427c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004442bc ["COPY", "tmp:0:8", ["const:b48:8"]]
+ 004442bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004442bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004442bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-f8e06e4c3417bd545df63b583ff954e5"></a>

### [`00444464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444464.md) → [`004444a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004444a4.md) FUN_004444a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`004460ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004460ec.md) [`0044abc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044abc0.md) · 呼出先 10件 [`00444614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444614.md) [`004462d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004462d8.md) [`00446614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446614.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 2件 [`0044612c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/0044612c.md) [`0044ac00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ac00.md) · 呼出先 10件 [`00444654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444654.md) [`00446318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446318.md) [`00446654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 89.69% / 新版 89.69%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00444600",
      "incomplete_value": false,
      "site": "00444600",
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
                "const:b18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004445c0",
      "incomplete_value": false,
      "site": "004445c0",
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
                "const:a18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00444604",
      "incomplete_value": false,
      "site": "00444604",
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
                "const:b18:8"
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
      "definition_site": "004445c4",
      "incomplete_value": false,
      "site": "004445c4",
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
                "const:a18:8"
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
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00444604",
      "incomplete_value": false,
      "site": "00444604",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004445c4",
      "incomplete_value": false,
      "site": "004445c4",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
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
      "00444574",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "004445dc",
      "PARAM",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "004445ec",
      "PARAM",
      [
        "storage",
        "00ca4a18",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00444574",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "004445dc",
      "PARAM",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "004445ec",
      "PARAM",
      [
        "storage",
        "00ca4b18",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044459c ["COPY", "tmp:0:8", ["const:a48:8"]]
- 0044459c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0044459c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0044459c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004445dc ["COPY", "tmp:0:8", ["const:b48:8"]]
+ 004445dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004445dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004445dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004445a0 ["INT_ADD", "register:40f0:8", ["const:4445a0:8", "const:4:8"]]
- 004445a0 ["CALL", null, ["callee:00c57f20:8"]]
+ 004445e0 ["INT_ADD", "register:40f0:8", ["const:4445e0:8", "const:4:8"]]
+ 004445e0 ["CALL", null, ["callee:00c57f20:8"]]
- 004445d0 ["INT_ADD", "register:40f0:8", ["const:4445d0:8", "const:4:8"]]
- 004445d0 ["CALL", null, ["callee:00c57f00:8"]]
+ 00444610 ["INT_ADD", "register:40f0:8", ["const:444610:8", "const:4:8"]]
+ 00444610 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-a653f9eefa3210fbdcf0d4e8bbb4730e"></a>

### [`00444680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444680.md) → [`004446c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004446c0.md) FUN_004446c0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00872378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00872/00872378.md) · 呼出先 13件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`00444bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444bd8.md) [`00446d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446d70.md) [`00550c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550c1c.md)
- 新版 呼出元 1件 [`008723d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008723d0.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00444c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444c18.md) [`00446db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446db0.md) [`00550c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c5c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.64% / 新版 99.64%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0044494c",
      "incomplete_value": false,
      "site": "00444950",
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
            "const:ee1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044490c",
      "incomplete_value": false,
      "site": "00444910",
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
            "const:f35:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0044494c",
      "PARAM",
      [
        "storage",
        "002b9f35",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0044494c",
      "PARAM",
      [
        "storage",
        "002b9ee1",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00444910 ["INT_ADD", "register:40f0:8", ["const:444910:8", "const:4:8"]]
- 00444910 ["CALL", null, ["callee:00c58180:8"]]
+ 00444950 ["INT_ADD", "register:40f0:8", ["const:444950:8", "const:4:8"]]
+ 00444950 ["CALL", null, ["callee:00c58180:8"]]
- 004446d4 ["INT_ADD", "register:40f0:8", ["const:4446d4:8", "const:4:8"]]
- 004446d4 ["CALL", null, ["callee:00444c18:8"]]
+ 00444714 ["INT_ADD", "register:40f0:8", ["const:444714:8", "const:4:8"]]
+ 00444714 ["CALL", null, ["callee:00444c18:8"]]
- 004446e0 ["INT_ADD", "register:40f0:8", ["const:4446e0:8", "const:4:8"]]
- 004446e0 ["CALL", null, ["callee:00550c68:8"]]
+ 00444720 ["INT_ADD", "register:40f0:8", ["const:444720:8", "const:4:8"]]
+ 00444720 ["CALL", null, ["callee:00550c68:8"]]
~~~


<a id="compare-8f410153635853de73798c6661fa891d"></a>

### [`00444bd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444bd8.md) → [`00444c18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444c18.md) FUN_00444c18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00444680`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444680.md) · 呼出先 14件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0044accc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044accc.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md)
- 新版 呼出元 1件 [`004446c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004446c0.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0044ad0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ad0c.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 91.47% / 新版 91.47%

優先判定に残った影響 `store_destination` 1件, `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00444c58",
      "incomplete_value": false,
      "site": "00444c5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:628:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00444c18",
      "incomplete_value": false,
      "site": "00444c1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:558:8"
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
      "definition_site": "00444d74",
      "incomplete_value": true,
      "site": "00444d78",
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
      "definition_site": "00444d34",
      "incomplete_value": true,
      "site": "00444d38",
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
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00444d70",
      "incomplete_value": true,
      "site": "00444d7c",
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
      "definition_site": "00444d30",
      "incomplete_value": true,
      "site": "00444d3c",
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
      "00444c5c",
      "DATA",
      [
        "storage",
        "00c63558",
        null,
        "undefined *"
      ]
    ],
    [
      "00444d64",
      "READ",
      [
        "storage",
        "00c9abb0",
        null,
        "pointer"
      ]
    ],
    [
      "00444d68",
      "READ",
      [
        "storage",
        "00c9abb8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00444c5c",
      "DATA",
      [
        "storage",
        "00c63628",
        null,
        "undefined *"
      ]
    ],
    [
      "00444d64",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ],
    [
      "00444d68",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00444d08 ["INT_ADD", "register:40f0:8", ["const:444d08:8", "const:4:8"]]
- 00444d08 ["CALL", null, ["callee:00c57f80:8"]]
+ 00444d48 ["INT_ADD", "register:40f0:8", ["const:444d48:8", "const:4:8"]]
+ 00444d48 ["CALL", null, ["callee:00c57f80:8"]]
- 00444d7c ["INT_ADD", "register:40f0:8", ["const:444d7c:8", "const:4:8"]]
- 00444d7c ["CALL", null, ["callee:00c58080:8"]]
+ 00444dbc ["INT_ADD", "register:40f0:8", ["const:444dbc:8", "const:4:8"]]
+ 00444dbc ["CALL", null, ["callee:00c58080:8"]]
- 00444c10 ["INT_ADD", "register:40f0:8", ["const:444c10:8", "const:4:8"]]
- 00444c10 ["CALL", null, ["callee:00487e60:8"]]
+ 00444c50 ["INT_ADD", "register:40f0:8", ["const:444c50:8", "const:4:8"]]
+ 00444c50 ["CALL", null, ["callee:00487e60:8"]]
~~~


<a id="compare-28ef8210a27123890cbdc57c7002c49f"></a>

### [`004460ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004460ec.md) → [`0044612c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/0044612c.md) FUN_0044612c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) · 呼出先 11件 [`00444464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444464.md) [`00444614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444614.md) [`004462d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004462d8.md) [`00550ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550ba4.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) · 呼出先 11件 [`004444a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004444a4.md) [`00444654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444654.md) [`00446318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446318.md) [`00550be4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550be4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 90.09% / 新版 90.09%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 5件

アドレスに依存する影響 `call_argument_candidate` 1件, `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004461e8",
      "incomplete_value": false,
      "site": "004461e8",
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
            "const:b30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004461a8",
      "incomplete_value": false,
      "site": "004461a8",
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
            "const:a30:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004462bc",
      "incomplete_value": false,
      "site": "004462bc",
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
                "const:b18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044627c",
      "incomplete_value": false,
      "site": "0044627c",
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
                "const:a18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "004462c0",
      "incomplete_value": false,
      "site": "004462c0",
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
                "const:b18:8"
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
      "definition_site": "00446280",
      "incomplete_value": false,
      "site": "00446280",
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
                "const:a18:8"
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
      "004461d8",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "004461e8",
      "WRITE",
      [
        "storage",
        "00ca4a30",
        null,
        "undefined4"
      ]
    ],
    [
      "00446290",
      "PARAM",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "004461d8",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "004461e8",
      "WRITE",
      [
        "storage",
        "00ca4b30",
        null,
        "undefined4"
      ]
    ],
    [
      "00446290",
      "PARAM",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 004461a8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:a30:8"]]
- 004461a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:4"]]
+ 004461e8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:b30:8"]]
+ 004461e8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:4"]]
- 00446248 ["COPY", "tmp:0:8", ["const:a48:8"]]
- 00446248 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00446248 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00446248 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00446288 ["COPY", "tmp:0:8", ["const:b48:8"]]
+ 00446288 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00446288 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00446288 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00446254 ["INT_ADD", "register:40f0:8", ["const:446254:8", "const:4:8"]]
- 00446254 ["CALL", null, ["callee:00c57f20:8"]]
+ 00446294 ["INT_ADD", "register:40f0:8", ["const:446294:8", "const:4:8"]]
+ 00446294 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-ec41d58ea66e7f8b58738aff780ba8be"></a>

### [`004462d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004462d8.md) → [`00446318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446318.md) FUN_00446318

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00444464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444464.md) [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`004460ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004460ec.md) [`004466fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004466fc.md) · 呼出先 4件 [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`00550c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550c34.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 4件 [`004444a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004444a4.md) [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`0044612c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/0044612c.md) [`0044673c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/0044673c.md) · 呼出先 4件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00550c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c74.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.68% / 新版 92.68%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00446360",
      "incomplete_value": true,
      "site": "00446360",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:a02:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00446320",
      "incomplete_value": true,
      "site": "00446320",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:a5e:8"
              ]
            ]
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
      "0044634c",
      "READ",
      [
        "storage",
        "002a8a5e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044634c",
      "READ",
      [
        "storage",
        "002a8a02",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 004462fc ["INT_ADD", "register:40f0:8", ["const:4462fc:8", "const:4:8"]]
- 004462fc ["CALL", null, ["callee:00550c74:8"]]
+ 0044633c ["INT_ADD", "register:40f0:8", ["const:44633c:8", "const:4:8"]]
+ 0044633c ["CALL", null, ["callee:00550c74:8"]]
- 00446304 ["COPY", "tmp:0:8", ["const:a5e:8"]]
- 00446304 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00446304 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00446304 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00446344 ["COPY", "tmp:0:8", ["const:a02:8"]]
+ 00446344 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00446344 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00446344 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00446334 ["INT_ADD", "register:40f0:8", ["const:446334:8", "const:4:8"]]
- 00446334 ["CALL", null, ["callee:0043dbe4:8"]]
+ 00446374 ["INT_ADD", "register:40f0:8", ["const:446374:8", "const:4:8"]]
+ 00446374 ["CALL", null, ["callee:0043dbe4:8"]]
~~~


<a id="compare-9c11ce73a139b439897dfc065794c514"></a>

### [`004466fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004466fc.md) → [`0044673c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/0044673c.md) FUN_0044673c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00446b24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446b24.md) · 呼出先 16件 [`00444614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444614.md) [`004462d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/004462d8.md) [`0049b1bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0049b/0049b1bc.md) [`00550c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550c1c.md) [`00550c20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00550/00550c20.md)
- 新版 呼出元 1件 [`00446b64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446b64.md) · 呼出先 16件 [`00444654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444654.md) [`00446318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446318.md) [`0049b1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049b/0049b1fc.md) [`00550c5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c5c.md) [`00550c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c60.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 81.08% / 新版 81.08%

優先判定に残った影響 `call_argument_candidate` 16件, `store_destination` 20件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00446900",
      "incomplete_value": false,
      "site": "00446900",
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
                "const:b18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004468c0",
      "incomplete_value": false,
      "site": "004468c0",
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
                "const:a18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00446904",
      "incomplete_value": false,
      "site": "00446904",
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
                "const:b18:8"
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
      "definition_site": "004468c4",
      "incomplete_value": false,
      "site": "004468c4",
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
                "const:a18:8"
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
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00446904",
      "incomplete_value": false,
      "site": "00446904",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "004468c4",
      "incomplete_value": false,
      "site": "004468c4",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
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
      "00446770",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "00446780",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "004467b8",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00446770",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "00446780",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "004467b8",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00446890 ["INT_ADD", "register:40f0:8", ["const:446890:8", "const:4:8"]]
- 00446890 ["CALL", null, ["callee:00c57f80:8"]]
+ 004468d0 ["INT_ADD", "register:40f0:8", ["const:4468d0:8", "const:4:8"]]
+ 004468d0 ["CALL", null, ["callee:00c57f80:8"]]
- 0044689c ["COPY", "tmp:0:8", ["const:a48:8"]]
- 0044689c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0044689c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0044689c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 004468dc ["COPY", "tmp:0:8", ["const:b48:8"]]
+ 004468dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 004468dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 004468dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 004468a0 ["INT_ADD", "register:40f0:8", ["const:4468a0:8", "const:4:8"]]
- 004468a0 ["CALL", null, ["callee:00c57f20:8"]]
+ 004468e0 ["INT_ADD", "register:40f0:8", ["const:4468e0:8", "const:4:8"]]
+ 004468e0 ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-7eb4c8eb628d47737e7729a40f0cfc57"></a>

### [`00446a6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446a6c.md) → [`00446aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446aac.md) FUN_00446aac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57fa0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fb0.md) [`00c57fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fc0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md) [`00c58080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58080.md) [`00c58090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58090.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 73.91% / 新版 73.91%

優先判定に残った影響 `store_destination` 1件, `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00446adc",
      "incomplete_value": true,
      "site": "00446ae4",
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
      "definition_site": "00446a9c",
      "incomplete_value": true,
      "site": "00446aa4",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00446ae8",
      "incomplete_value": true,
      "site": "00446ae8",
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
      "definition_site": "00446aa8",
      "incomplete_value": true,
      "site": "00446aa8",
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00446af8",
      "incomplete_value": true,
      "site": "00446af8",
      "value": [
        "INT_ADD",
        "8",
        [
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
                "const:48:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
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
      "definition_site": "00446ab8",
      "incomplete_value": true,
      "site": "00446ab8",
      "value": [
        "INT_ADD",
        "8",
        [
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
                "const:48:8"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              "LOAD",
              [
                "leaf",
                "const:0:8"
              ]
            ]
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
      "00446ac8",
      "READ",
      [
        "storage",
        "00c9abb0",
        null,
        "pointer"
      ]
    ],
    [
      "00446acc",
      "READ",
      [
        "storage",
        "00c9abb8",
        null,
        "pointer"
      ]
    ],
    [
      "00446ad8",
      "READ",
      [
        "storage",
        "00c93200",
        "std::__ndk1::basic_ostringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "00446ac8",
      "READ",
      [
        "storage",
        "00c9ac80",
        null,
        "pointer"
      ]
    ],
    [
      "00446acc",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "00446ad8",
      "READ",
      [
        "storage",
        "00c932d0",
        "std::__ndk1::basic_ostringstream<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::VTT",
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00446ae4 ["INT_ADD", "register:40f0:8", ["const:446ae4:8", "const:4:8"]]
- 00446ae4 ["CALL", null, ["callee:00c58080:8"]]
+ 00446b24 ["INT_ADD", "register:40f0:8", ["const:446b24:8", "const:4:8"]]
+ 00446b24 ["CALL", null, ["callee:00c58080:8"]]
- 00446a88 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:bb0:8"]]
- 00446a88 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00446ac8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c80:8"]]
+ 00446ac8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00446a8c ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:bb8:8"]]
- 00446a8c ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00446acc ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:c88:8"]]
+ 00446acc ["LOAD", "register:40b0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-f67cd7c3169414ecf11d2e9376af8b18"></a>

### [`00446b28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446b28.md) → [`00446b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446b68.md) FUN_00446b68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00446614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446614.md) · 呼出先 6件 [`00446c2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446c2c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58100`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58100.md) [`00c58110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58110.md)
- 新版 呼出元 1件 [`00446654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446654.md) · 呼出先 6件 [`00446c6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446c6c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c581d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581d0.md) [`00c581e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c581e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00446bcc",
      "incomplete_value": false,
      "site": "00446bd8",
      "value": [
        "leaf",
        "const:446c6c:8"
      ]
    },
    "old": {
      "definition_site": "00446b8c",
      "incomplete_value": false,
      "site": "00446b98",
      "value": [
        "leaf",
        "const:446c2c:8"
      ]
    },
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00446c1c",
      "incomplete_value": false,
      "site": "00446c20",
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
            "const:eda:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00446bdc",
      "incomplete_value": false,
      "site": "00446be0",
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
            "const:f27:8"
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
      "00446bcc",
      "PARAM",
      [
        "storage",
        "00446c2c",
        null,
        null
      ]
    ],
    [
      "00446c1c",
      "PARAM",
      [
        "storage",
        "002a3f27",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00446bcc",
      "PARAM",
      [
        "storage",
        "00446c6c",
        null,
        null
      ]
    ],
    [
      "00446c1c",
      "PARAM",
      [
        "storage",
        "002a3eda",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00446b98 ["INT_ADD", "register:40f0:8", ["const:446b98:8", "const:4:8"]]
- 00446b98 ["CALL", null, ["callee:00c581e0:8"]]
+ 00446bd8 ["INT_ADD", "register:40f0:8", ["const:446bd8:8", "const:4:8"]]
+ 00446bd8 ["CALL", null, ["callee:00c581e0:8"]]
- 00446be0 ["INT_ADD", "register:40f0:8", ["const:446be0:8", "const:4:8"]]
- 00446be0 ["CALL", null, ["callee:00c581f0:8"]]
+ 00446c20 ["INT_ADD", "register:40f0:8", ["const:446c20:8", "const:4:8"]]
+ 00446c20 ["CALL", null, ["callee:00c581f0:8"]]
- 00446b5c ["INT_ADD", "register:40f0:8", ["const:446b5c:8", "const:4:8"]]
- 00446b5c ["CALL", null, ["callee:00c57f60:8"]]
+ 00446b9c ["INT_ADD", "register:40f0:8", ["const:446b9c:8", "const:4:8"]]
+ 00446b9c ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-10f1100c10ba4b28e3b099640949f457"></a>

### [`00446dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446dc0.md) → [`00446e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446e00.md) FUN_00446e00

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`00446dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446dc0.md) · 呼出先 23件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00446e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446e00.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.69% / 新版 98.69%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00446f54",
      "incomplete_value": false,
      "site": "00446f5c",
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
      "definition_site": "00446f14",
      "incomplete_value": false,
      "site": "00446f1c",
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
      "definition_site": "00447010",
      "incomplete_value": false,
      "site": "00447018",
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
      "definition_site": "00446fd0",
      "incomplete_value": false,
      "site": "00446fd8",
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
      "definition_site": "00447028",
      "incomplete_value": false,
      "site": "00447034",
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
      "definition_site": "00446fe8",
      "incomplete_value": false,
      "site": "00446ff4",
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
      "00446f54",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00447010",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "00447028",
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
      "00446f54",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00447010",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "00447028",
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
- 00446f1c ["INT_ADD", "register:40f0:8", ["const:446f1c:8", "const:4:8"]]
- 00446f1c ["CALL", null, ["callee:00441ed4:8"]]
+ 00446f5c ["INT_ADD", "register:40f0:8", ["const:446f5c:8", "const:4:8"]]
+ 00446f5c ["CALL", null, ["callee:00441ed4:8"]]
- 00446fd8 ["INT_ADD", "register:40f0:8", ["const:446fd8:8", "const:4:8"]]
- 00446fd8 ["CALL", null, ["callee:00441ed4:8"]]
+ 00447018 ["INT_ADD", "register:40f0:8", ["const:447018:8", "const:4:8"]]
+ 00447018 ["CALL", null, ["callee:00441ed4:8"]]
- 00446ff4 ["INT_ADD", "register:40f0:8", ["const:446ff4:8", "const:4:8"]]
- 00446ff4 ["CALL", null, ["callee:00442834:8"]]
+ 00447034 ["INT_ADD", "register:40f0:8", ["const:447034:8", "const:4:8"]]
+ 00447034 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-a80387a7d680c65413d032874eaaf3b8"></a>

### [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) → [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) FUN_00447734

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 27件 [`00446dc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00446/00446dc0.md) [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`00449028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/00449028.md) [`004499cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/004499cc.md) [`005e3114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e3/005e3114.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 27件 [`00446e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446e00.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00449068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/00449068.md) [`00449a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/00449a0c.md) [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00447888",
      "incomplete_value": false,
      "site": "00447890",
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
      "definition_site": "00447848",
      "incomplete_value": false,
      "site": "00447850",
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
      "definition_site": "004478ac",
      "incomplete_value": false,
      "site": "004478b8",
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
      "definition_site": "0044786c",
      "incomplete_value": false,
      "site": "00447878",
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
      "definition_site": "004479e0",
      "incomplete_value": false,
      "site": "004479e8",
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
      "definition_site": "004479a0",
      "incomplete_value": false,
      "site": "004479a8",
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
      "00447888",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "004478ac",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "004479e0",
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
      "00447888",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "004478ac",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "004479e0",
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
- 00447850 ["INT_ADD", "register:40f0:8", ["const:447850:8", "const:4:8"]]
- 00447850 ["CALL", null, ["callee:00441ed4:8"]]
+ 00447890 ["INT_ADD", "register:40f0:8", ["const:447890:8", "const:4:8"]]
+ 00447890 ["CALL", null, ["callee:00441ed4:8"]]
- 00447878 ["INT_ADD", "register:40f0:8", ["const:447878:8", "const:4:8"]]
- 00447878 ["CALL", null, ["callee:00442834:8"]]
+ 004478b8 ["INT_ADD", "register:40f0:8", ["const:4478b8:8", "const:4:8"]]
+ 004478b8 ["CALL", null, ["callee:00442834:8"]]
- 004479a8 ["INT_ADD", "register:40f0:8", ["const:4479a8:8", "const:4:8"]]
- 004479a8 ["CALL", null, ["callee:00441ed4:8"]]
+ 004479e8 ["INT_ADD", "register:40f0:8", ["const:4479e8:8", "const:4:8"]]
+ 004479e8 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-f7f879d71e5924d400ea762f1063273f"></a>

### [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) → [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) FUN_00447f34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 178件 [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047b84c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047b/0047b84c.md) [`005c425c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c4/005c425c.md) [`005c8efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c8/005c8efc.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 178件 [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047b88c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047b/0047b88c.md) [`005c429c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c429c.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00448084",
      "incomplete_value": false,
      "site": "0044808c",
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
      "definition_site": "00448044",
      "incomplete_value": false,
      "site": "0044804c",
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
      "definition_site": "004480a8",
      "incomplete_value": false,
      "site": "004480b4",
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
      "definition_site": "00448068",
      "incomplete_value": false,
      "site": "00448074",
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
      "definition_site": "004481dc",
      "incomplete_value": false,
      "site": "004481e4",
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
      "definition_site": "0044819c",
      "incomplete_value": false,
      "site": "004481a4",
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
      "00448084",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "004480a8",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "004481dc",
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
      "00448084",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "004480a8",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "004481dc",
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
- 0044804c ["INT_ADD", "register:40f0:8", ["const:44804c:8", "const:4:8"]]
- 0044804c ["CALL", null, ["callee:00441ed4:8"]]
+ 0044808c ["INT_ADD", "register:40f0:8", ["const:44808c:8", "const:4:8"]]
+ 0044808c ["CALL", null, ["callee:00441ed4:8"]]
- 00448074 ["INT_ADD", "register:40f0:8", ["const:448074:8", "const:4:8"]]
- 00448074 ["CALL", null, ["callee:00442834:8"]]
+ 004480b4 ["INT_ADD", "register:40f0:8", ["const:4480b4:8", "const:4:8"]]
+ 004480b4 ["CALL", null, ["callee:00442834:8"]]
- 004481a4 ["INT_ADD", "register:40f0:8", ["const:4481a4:8", "const:4:8"]]
- 004481a4 ["CALL", null, ["callee:00441ed4:8"]]
+ 004481e4 ["INT_ADD", "register:40f0:8", ["const:4481e4:8", "const:4:8"]]
+ 004481e4 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-1715a22383d52e2176f5a4d92bcbd1f1"></a>

### [`004486e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00448/004486e0.md) → [`00448720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00448/00448720.md) FUN_00448720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`004486e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00448/004486e0.md) · 呼出先 23件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00448720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00448/00448720.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.70% / 新版 98.70%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00448878",
      "incomplete_value": false,
      "site": "00448880",
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
      "definition_site": "00448838",
      "incomplete_value": false,
      "site": "00448840",
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
      "definition_site": "00448934",
      "incomplete_value": false,
      "site": "0044893c",
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
      "definition_site": "004488f4",
      "incomplete_value": false,
      "site": "004488fc",
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
      "definition_site": "0044894c",
      "incomplete_value": false,
      "site": "00448958",
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
      "definition_site": "0044890c",
      "incomplete_value": false,
      "site": "00448918",
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
      "00448878",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00448934",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "0044894c",
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
      "00448878",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00448934",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "0044894c",
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
- 00448840 ["INT_ADD", "register:40f0:8", ["const:448840:8", "const:4:8"]]
- 00448840 ["CALL", null, ["callee:00441ed4:8"]]
+ 00448880 ["INT_ADD", "register:40f0:8", ["const:448880:8", "const:4:8"]]
+ 00448880 ["CALL", null, ["callee:00441ed4:8"]]
- 004488fc ["INT_ADD", "register:40f0:8", ["const:4488fc:8", "const:4:8"]]
- 004488fc ["CALL", null, ["callee:00441ed4:8"]]
+ 0044893c ["INT_ADD", "register:40f0:8", ["const:44893c:8", "const:4:8"]]
+ 0044893c ["CALL", null, ["callee:00441ed4:8"]]
- 00448918 ["INT_ADD", "register:40f0:8", ["const:448918:8", "const:4:8"]]
- 00448918 ["CALL", null, ["callee:00442834:8"]]
+ 00448958 ["INT_ADD", "register:40f0:8", ["const:448958:8", "const:4:8"]]
+ 00448958 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-a4d5d75ebcf5f391380d530bf7363dfe"></a>

### [`00449028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/00449028.md) → [`00449068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/00449068.md) FUN_00449068

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 10件 [`004486e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00448/004486e0.md) [`00449028`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/00449028.md) [`005e3114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e3/005e3114.md) [`00620430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00620/00620430.md) [`00622e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00622/00622e60.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 10件 [`00448720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00448/00448720.md) [`00449068`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/00449068.md) [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`00620470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00620/00620470.md) [`00622ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00622/00622ea0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "004491c0",
      "incomplete_value": false,
      "site": "004491c8",
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
      "definition_site": "00449180",
      "incomplete_value": false,
      "site": "00449188",
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
      "definition_site": "004491e4",
      "incomplete_value": false,
      "site": "004491f0",
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
      "definition_site": "004491a4",
      "incomplete_value": false,
      "site": "004491b0",
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
      "definition_site": "00449318",
      "incomplete_value": false,
      "site": "00449320",
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
      "definition_site": "004492d8",
      "incomplete_value": false,
      "site": "004492e0",
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
      "004491c0",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "004491e4",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "00449318",
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
      "004491c0",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "004491e4",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00449318",
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
- 00449188 ["INT_ADD", "register:40f0:8", ["const:449188:8", "const:4:8"]]
- 00449188 ["CALL", null, ["callee:00441ed4:8"]]
+ 004491c8 ["INT_ADD", "register:40f0:8", ["const:4491c8:8", "const:4:8"]]
+ 004491c8 ["CALL", null, ["callee:00441ed4:8"]]
- 004491b0 ["INT_ADD", "register:40f0:8", ["const:4491b0:8", "const:4:8"]]
- 004491b0 ["CALL", null, ["callee:00442834:8"]]
+ 004491f0 ["INT_ADD", "register:40f0:8", ["const:4491f0:8", "const:4:8"]]
+ 004491f0 ["CALL", null, ["callee:00442834:8"]]
- 004492e0 ["INT_ADD", "register:40f0:8", ["const:4492e0:8", "const:4:8"]]
- 004492e0 ["CALL", null, ["callee:00441ed4:8"]]
+ 00449320 ["INT_ADD", "register:40f0:8", ["const:449320:8", "const:4:8"]]
+ 00449320 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-fb14431b1be053b385acd137bde652a6"></a>

### [`004499b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/004499b8.md) → [`004499f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/004499f8.md) FUN_004499f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`0044982c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/0044982c.md) [`004e5e60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/004e5/004e5e60.md) [`005d17a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d1/005d17a4.md) [`005d451c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d4/005d451c.md) [`00768d64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768d64.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 8件 [`0044986c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/0044986c.md) [`004e5ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/004e5/004e5ea0.md) [`005d17e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d17e4.md) [`005d455c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d4/005d455c.md) [`00768dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768dbc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00449a04",
      "incomplete_value": false,
      "site": "00449a08",
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
      "definition_site": "004499c4",
      "incomplete_value": false,
      "site": "004499c8",
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
      "00449a04",
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
      "00449a04",
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
- 004499c8 ["INT_ADD", "register:40f0:8", ["const:4499c8:8", "const:4:8"]]
- 004499c8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 00449a08 ["INT_ADD", "register:40f0:8", ["const:449a08:8", "const:4:8"]]
+ 00449a08 ["CALL", null, ["callee:0043b7b8:8"]]
- 004499c4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 004499c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 004499c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 004499c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00449a04 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00449a04 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00449a04 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00449a04 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a2b873705799eb656b107e9b1756a75e"></a>

### [`004499cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/004499cc.md) → [`00449a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/00449a0c.md) FUN_00449a0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`004499cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00449/004499cc.md) [`0048f460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048f/0048f460.md) [`005dbd14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005db/005dbd14.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 4件 [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00449a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/00449a0c.md) [`0048f4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048f/0048f4a0.md) [`005dbd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005dbd54.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.64% / 新版 98.64%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00449b78",
      "incomplete_value": false,
      "site": "00449b80",
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
      "definition_site": "00449b38",
      "incomplete_value": false,
      "site": "00449b40",
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
      "definition_site": "00449c38",
      "incomplete_value": false,
      "site": "00449c40",
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
      "definition_site": "00449bf8",
      "incomplete_value": false,
      "site": "00449c00",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00449c54",
      "incomplete_value": false,
      "site": "00449c60",
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
      "definition_site": "00449c14",
      "incomplete_value": false,
      "site": "00449c20",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00449b78",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "00449c38",
      "PARAM",
      [
        "storage",
        "002b5de7",
        null,
        null
      ]
    ],
    [
      "00449c54",
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
      "00449b78",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00449c38",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "00449c54",
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
- 00449b40 ["INT_ADD", "register:40f0:8", ["const:449b40:8", "const:4:8"]]
- 00449b40 ["CALL", null, ["callee:00441ed4:8"]]
+ 00449b80 ["INT_ADD", "register:40f0:8", ["const:449b80:8", "const:4:8"]]
+ 00449b80 ["CALL", null, ["callee:00441ed4:8"]]
- 00449c00 ["INT_ADD", "register:40f0:8", ["const:449c00:8", "const:4:8"]]
- 00449c00 ["CALL", null, ["callee:00441ed4:8"]]
+ 00449c40 ["INT_ADD", "register:40f0:8", ["const:449c40:8", "const:4:8"]]
+ 00449c40 ["CALL", null, ["callee:00441ed4:8"]]
- 00449c20 ["INT_ADD", "register:40f0:8", ["const:449c20:8", "const:4:8"]]
- 00449c20 ["CALL", null, ["callee:00442834:8"]]
+ 00449c60 ["INT_ADD", "register:40f0:8", ["const:449c60:8", "const:4:8"]]
+ 00449c60 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-3b2ab545b2d476184818f3e9c5f6f321"></a>

### [`0044a2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044a2b8.md) → [`0044a2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044a2f8.md) FUN_0044a2f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00444e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444e20.md) [`0044a2b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044a2b8.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`0044a2f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044a2f8.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0044a448",
      "incomplete_value": false,
      "site": "0044a450",
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
      "definition_site": "0044a408",
      "incomplete_value": false,
      "site": "0044a410",
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
      "definition_site": "0044a46c",
      "incomplete_value": false,
      "site": "0044a478",
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
      "definition_site": "0044a42c",
      "incomplete_value": false,
      "site": "0044a438",
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
      "definition_site": "0044a5a0",
      "incomplete_value": false,
      "site": "0044a5a8",
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
      "definition_site": "0044a560",
      "incomplete_value": false,
      "site": "0044a568",
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
      "0044a448",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "0044a46c",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "0044a5a0",
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
      "0044a448",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0044a46c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "0044a5a0",
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
- 0044a410 ["INT_ADD", "register:40f0:8", ["const:44a410:8", "const:4:8"]]
- 0044a410 ["CALL", null, ["callee:00441ed4:8"]]
+ 0044a450 ["INT_ADD", "register:40f0:8", ["const:44a450:8", "const:4:8"]]
+ 0044a450 ["CALL", null, ["callee:00441ed4:8"]]
- 0044a438 ["INT_ADD", "register:40f0:8", ["const:44a438:8", "const:4:8"]]
- 0044a438 ["CALL", null, ["callee:00442834:8"]]
+ 0044a478 ["INT_ADD", "register:40f0:8", ["const:44a478:8", "const:4:8"]]
+ 0044a478 ["CALL", null, ["callee:00442834:8"]]
- 0044a568 ["INT_ADD", "register:40f0:8", ["const:44a568:8", "const:4:8"]]
- 0044a568 ["CALL", null, ["callee:00441ed4:8"]]
+ 0044a5a8 ["INT_ADD", "register:40f0:8", ["const:44a5a8:8", "const:4:8"]]
+ 0044a5a8 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-95acd4b2a309430f88fe73ab0dee1a51"></a>

### [`0044aaa8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044aaa8.md) → [`0044aae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044aae8.md) FUN_0044aae8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0044aafc",
      "incomplete_value": false,
      "site": "0044ab00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:6a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044aabc",
      "incomplete_value": false,
      "site": "0044aac0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:5d0:8"
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
      "0044ab00",
      "DATA",
      [
        "storage",
        "00c635d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0044ab00",
      "DATA",
      [
        "storage",
        "00c636a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044aab4 ["INT_ADD", "register:40f0:8", ["const:44aab4:8", "const:4:8"]]
- 0044aab4 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044aaf4 ["INT_ADD", "register:40f0:8", ["const:44aaf4:8", "const:4:8"]]
+ 0044aaf4 ["CALL", null, ["callee:00c57f60:8"]]
- 0044aabc ["COPY", "tmp:0:8", ["const:5d0:8"]]
- 0044aabc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044aabc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044aabc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0044aafc ["COPY", "tmp:0:8", ["const:6a0:8"]]
+ 0044aafc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0044aafc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0044aafc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b056dcd97e0355c476504407da9579ea"></a>

### [`0044ab14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab14.md) → [`0044ab54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ab54.md) FUN_0044ab54

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0044ab68",
      "incomplete_value": false,
      "site": "0044ab6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:720:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044ab28",
      "incomplete_value": false,
      "site": "0044ab2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:650:8"
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
      "0044ab6c",
      "DATA",
      [
        "storage",
        "00c63650",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0044ab6c",
      "DATA",
      [
        "storage",
        "00c63720",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044ab20 ["INT_ADD", "register:40f0:8", ["const:44ab20:8", "const:4:8"]]
- 0044ab20 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044ab60 ["INT_ADD", "register:40f0:8", ["const:44ab60:8", "const:4:8"]]
+ 0044ab60 ["CALL", null, ["callee:00c57f60:8"]]
- 0044ab28 ["COPY", "tmp:0:8", ["const:650:8"]]
- 0044ab28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044ab28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044ab28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0044ab68 ["COPY", "tmp:0:8", ["const:720:8"]]
+ 0044ab68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0044ab68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0044ab68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-644dbf48104aeb37ca75d7e20d1f0f37"></a>

### [`0044ab84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044ab84.md) → [`0044abc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044abc4.md) FUN_0044abc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0044abd8",
      "incomplete_value": false,
      "site": "0044abdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:7a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044ab98",
      "incomplete_value": false,
      "site": "0044ab9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c63000:8"
          ],
          [
            "leaf",
            "const:6d0:8"
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
      "0044abdc",
      "DATA",
      [
        "storage",
        "00c636d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0044abdc",
      "DATA",
      [
        "storage",
        "00c637a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044ab90 ["INT_ADD", "register:40f0:8", ["const:44ab90:8", "const:4:8"]]
- 0044ab90 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044abd0 ["INT_ADD", "register:40f0:8", ["const:44abd0:8", "const:4:8"]]
+ 0044abd0 ["CALL", null, ["callee:00c57f60:8"]]
- 0044ab98 ["COPY", "tmp:0:8", ["const:6d0:8"]]
- 0044ab98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044ab98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044ab98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0044abd8 ["COPY", "tmp:0:8", ["const:7a0:8"]]
+ 0044abd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0044abd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0044abd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1237d6d52949ab96d1116197bf175df1"></a>

### [`0044abc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044abc0.md) → [`0044ac00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ac00.md) FUN_0044ac00

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006ecd90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ec/006ecd90.md) · 呼出先 6件 [`00444154`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444154.md) [`00444464`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444464.md) [`00444614`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00444/00444614.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00444194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444194.md) [`004444a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004444a4.md) [`00444654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444654.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 65.62% / 新版 65.62%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 5件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0044ac5c",
      "incomplete_value": false,
      "site": "0044ac5c",
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
                "const:b18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044ac1c",
      "incomplete_value": false,
      "site": "0044ac1c",
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
                "const:a18:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0044ac60",
      "incomplete_value": false,
      "site": "0044ac60",
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
                "const:b18:8"
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
      "definition_site": "0044ac20",
      "incomplete_value": false,
      "site": "0044ac20",
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
                "const:a18:8"
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0044ac60",
      "incomplete_value": false,
      "site": "0044ac60",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044ac20",
      "incomplete_value": false,
      "site": "0044ac20",
      "value": [
        "INT_ADD",
        "8",
        [
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
          ],
          [
            "leaf",
            "const:8:8"
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
      "0044ac1c",
      "READ",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ],
    [
      "0044ac28",
      "PARAM",
      [
        "storage",
        "00ca4a18",
        null,
        "undefined8"
      ]
    ],
    [
      "0044ac38",
      "PARAM",
      [
        "storage",
        "00ca4a48",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "0044ac1c",
      "READ",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ],
    [
      "0044ac28",
      "PARAM",
      [
        "storage",
        "00ca4b18",
        null,
        "undefined8"
      ]
    ],
    [
      "0044ac38",
      "PARAM",
      [
        "storage",
        "00ca4b48",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044abe8 ["COPY", "tmp:0:8", ["const:a18:8"]]
- 0044abe8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0044abe8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0044abe8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0044ac28 ["COPY", "tmp:0:8", ["const:b18:8"]]
+ 0044ac28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0044ac28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0044ac28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 0044abf8 ["COPY", "tmp:0:8", ["const:a48:8"]]
- 0044abf8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0044abf8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0044abf8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0044ac38 ["COPY", "tmp:0:8", ["const:b48:8"]]
+ 0044ac38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0044ac38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0044ac38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 0044abfc ["INT_ADD", "register:40f0:8", ["const:44abfc:8", "const:4:8"]]
- 0044abfc ["CALL", null, ["callee:00c57f20:8"]]
+ 0044ac3c ["INT_ADD", "register:40f0:8", ["const:44ac3c:8", "const:4:8"]]
+ 0044ac3c ["CALL", null, ["callee:00c57f20:8"]]
~~~


<a id="compare-2d2bf391ff82b8d9d69ba4a1aba9f2c9"></a>

### [`0044add0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044a/0044add0.md) → [`0044ae10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044a/0044ae10.md) _INIT_9

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.05% / 新版 83.05%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 3件, `store_value` 8件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044ae4c",
      "incomplete_value": true,
      "site": "0044ae68",
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
                "const:f66:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044ae0c",
      "incomplete_value": true,
      "site": "0044ae28",
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
                "const:f26:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044ae70",
      "incomplete_value": true,
      "site": "0044ae8c",
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
                "const:f79:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044ae30",
      "incomplete_value": true,
      "site": "0044ae4c",
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
                "const:f39:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044ae90",
      "incomplete_value": true,
      "site": "0044aeac",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:d6e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044ae50",
      "incomplete_value": true,
      "site": "0044ae6c",
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
                "const:2b8000:8"
              ],
              [
                "leaf",
                "const:dc2:8"
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
      "0044ae4c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "0044ae70",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "0044ae90",
      "READ",
      [
        "storage",
        "002b8dc2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044ae4c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0044ae70",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "0044ae90",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044ae48 ["COPY", "tmp:0:8", ["const:dc2:8"]]
- 0044ae48 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0044ae48 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0044ae48 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0044ae88 ["COPY", "tmp:0:8", ["const:d6e:8"]]
+ 0044ae88 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0044ae88 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0044ae88 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0044ae68 ["COPY", "tmp:0:8", ["const:f62:8"]]
- 0044ae68 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0044ae68 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0044ae68 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0044aea8 ["COPY", "tmp:0:8", ["const:f15:8"]]
+ 0044aea8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0044aea8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0044aea8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0044af30 ["INT_ADD", "register:40f0:8", ["const:44af30:8", "const:4:8"]]
- 0044af30 ["CALL", null, ["callee:0043b838:8"]]
+ 0044af70 ["INT_ADD", "register:40f0:8", ["const:44af70:8", "const:4:8"]]
+ 0044af70 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-25533c743f63a34d18409536c9228df0"></a>

### [`0044b160`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b160.md) → [`0044b1a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b1a0.md) FUN_0044b1a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00450180`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00450/00450180.md) · 呼出先 0件 
- 新版 呼出元 2件 [`004501c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/004501c0.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b1ac",
      "incomplete_value": true,
      "site": "0044b1bc",
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
                "const:6d9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b16c",
      "incomplete_value": true,
      "site": "0044b17c",
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
                "const:72d:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b1c0",
      "incomplete_value": true,
      "site": "0044b1c0",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "0044b180",
      "incomplete_value": true,
      "site": "0044b180",
      "value": [
        "LOAD",
        "8",
        [
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
      "0044b1ac",
      "READ",
      [
        "storage",
        "002bd72d",
        null,
        "string"
      ]
    ],
    [
      "0044b1b4",
      "READ",
      [
        "storage",
        "002bd73b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044b1ac",
      "READ",
      [
        "storage",
        "002bd6d9",
        null,
        "string"
      ]
    ],
    [
      "0044b1b4",
      "READ",
      [
        "storage",
        "002bd6e7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b168 ["COPY", "tmp:0:8", ["const:72d:8"]]
- 0044b168 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0044b168 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0044b168 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0044b1a8 ["COPY", "tmp:0:8", ["const:6d9:8"]]
+ 0044b1a8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0044b1a8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0044b1a8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-4cae81d44306fbf39af4dc8fd376e8f2"></a>

### [`0044b188`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b188.md) → [`0044b1c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b1c8.md) FUN_0044b1c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0062b714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062b/0062b714.md) [`0062ecfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0062e/0062ecfc.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 3件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md)
- 新版 呼出元 3件 [`0062b754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062b/0062b754.md) [`0062ed3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062e/0062ed3c.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 3件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b1f0",
      "incomplete_value": true,
      "site": "0044b200",
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
                "const:b46:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b1b0",
      "incomplete_value": true,
      "site": "0044b1c0",
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
                "const:b9a:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b204",
      "incomplete_value": true,
      "site": "0044b204",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "0044b1c4",
      "incomplete_value": true,
      "site": "0044b1c4",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0044b210",
      "incomplete_value": false,
      "site": "0044b218",
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
            "const:d89:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b1d0",
      "incomplete_value": false,
      "site": "0044b1d8",
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
            "const:dd6:8"
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
      "0044b1f0",
      "READ",
      [
        "storage",
        "002bfb9a",
        null,
        "string"
      ]
    ],
    [
      "0044b1f8",
      "READ",
      [
        "storage",
        "002bfba8",
        null,
        "string"
      ]
    ],
    [
      "0044b210",
      "PARAM",
      [
        "storage",
        "002a1dd6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044b1f0",
      "READ",
      [
        "storage",
        "002bfb46",
        null,
        "string"
      ]
    ],
    [
      "0044b1f8",
      "READ",
      [
        "storage",
        "002bfb54",
        null,
        "string"
      ]
    ],
    [
      "0044b210",
      "PARAM",
      [
        "storage",
        "002a1d89",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b1d8 ["INT_ADD", "register:40f0:8", ["const:44b1d8:8", "const:4:8"]]
- 0044b1d8 ["CALL", null, ["callee:00c58040:8"]]
+ 0044b218 ["INT_ADD", "register:40f0:8", ["const:44b218:8", "const:4:8"]]
+ 0044b218 ["CALL", null, ["callee:00c58040:8"]]
- 0044b200 ["INT_ADD", "register:40f0:8", ["const:44b200:8", "const:4:8"]]
- 0044b200 ["CALL", null, ["callee:00c57f80:8"]]
+ 0044b240 ["INT_ADD", "register:40f0:8", ["const:44b240:8", "const:4:8"]]
+ 0044b240 ["CALL", null, ["callee:00c57f80:8"]]
- 0044b1a4 ["COPY", "tmp:0:8", ["const:b9a:8"]]
- 0044b1a4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0044b1a4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0044b1a4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0044b1e4 ["COPY", "tmp:0:8", ["const:b46:8"]]
+ 0044b1e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0044b1e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0044b1e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a422907ad70ebf3f4371947e47790fbe"></a>

### [`0044b254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b254.md) → [`0044b294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b294.md) FUN_0044b294

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`0044c7d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044c/0044c7d4.md) [`007cceec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007cc/007cceec.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) [`0089b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089b28c.md) · 呼出先 5件 [`0059761c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/0059761c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`0044c814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044c/0044c814.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) · 呼出先 5件 [`0059765c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059765c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b2c0",
      "incomplete_value": true,
      "site": "0044b2d0",
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
                "const:b46:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b280",
      "incomplete_value": true,
      "site": "0044b290",
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
                "const:b9a:8"
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
      "definition_site": "0044b2d4",
      "incomplete_value": true,
      "site": "0044b2d4",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "0044b294",
      "incomplete_value": true,
      "site": "0044b294",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0044b2e0",
      "incomplete_value": false,
      "site": "0044b2e8",
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
            "const:f96:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b2a0",
      "incomplete_value": false,
      "site": "0044b2a8",
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
            "const:f56:8"
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
      "0044b2c0",
      "READ",
      [
        "storage",
        "002bfb9a",
        null,
        "string"
      ]
    ],
    [
      "0044b2c8",
      "READ",
      [
        "storage",
        "002bfba8",
        null,
        "string"
      ]
    ],
    [
      "0044b2e0",
      "PARAM",
      [
        "storage",
        "002b7f56",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044b2c0",
      "READ",
      [
        "storage",
        "002bfb46",
        null,
        "string"
      ]
    ],
    [
      "0044b2c8",
      "READ",
      [
        "storage",
        "002bfb54",
        null,
        "string"
      ]
    ],
    [
      "0044b2e0",
      "PARAM",
      [
        "storage",
        "002b7f96",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b2a8 ["INT_ADD", "register:40f0:8", ["const:44b2a8:8", "const:4:8"]]
- 0044b2a8 ["CALL", null, ["callee:00c58040:8"]]
+ 0044b2e8 ["INT_ADD", "register:40f0:8", ["const:44b2e8:8", "const:4:8"]]
+ 0044b2e8 ["CALL", null, ["callee:00c58040:8"]]
- 0044b274 ["COPY", "tmp:0:8", ["const:b9a:8"]]
- 0044b274 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0044b274 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0044b274 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0044b2b4 ["COPY", "tmp:0:8", ["const:b46:8"]]
+ 0044b2b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0044b2b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0044b2b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0044b2a0 ["COPY", "tmp:0:8", ["const:f56:8"]]
- 0044b2a0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0044b2a0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0044b2a0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0044b2e0 ["COPY", "tmp:0:8", ["const:f96:8"]]
+ 0044b2e0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0044b2e0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0044b2e0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-9980dfe6cb23e0c5d0e0dd58d0ec4e70"></a>

### [`0044b3f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b3f4.md) → [`0044b434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b434.md) FUN_0044b434

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 10件 [`00451ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00451/00451ed8.md) [`004524e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/004524e8.md) [`00452c54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00452/00452c54.md) [`004557dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00455/004557dc.md) [`00455d58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00455/00455d58.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 10件 [`00451f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/00451f18.md) [`00452528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452528.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`0045581c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00455/0045581c.md) [`00455d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00455/00455d98.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b458",
      "incomplete_value": true,
      "site": "0044b46c",
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b418",
      "incomplete_value": true,
      "site": "0044b42c",
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
                "const:2a0:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b464",
      "incomplete_value": true,
      "site": "0044b470",
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
                "const:8fc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b424",
      "incomplete_value": true,
      "site": "0044b430",
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
                "const:958:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b464",
      "incomplete_value": true,
      "site": "0044b470",
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
      "definition_site": "0044b424",
      "incomplete_value": true,
      "site": "0044b430",
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
      "0044b458",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ],
    [
      "0044b464",
      "READ",
      [
        "storage",
        "002b1958",
        null,
        "string"
      ]
    ],
    [
      "0044b464",
      "READ",
      [
        "storage",
        "002b1968",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044b458",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "0044b464",
      "READ",
      [
        "storage",
        "002b18fc",
        null,
        "string"
      ]
    ],
    [
      "0044b464",
      "READ",
      [
        "storage",
        "002b190c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b408 ["INT_ADD", "register:40f0:8", ["const:44b408:8", "const:4:8"]]
- 0044b408 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044b448 ["INT_ADD", "register:40f0:8", ["const:44b448:8", "const:4:8"]]
+ 0044b448 ["CALL", null, ["callee:00c57f60:8"]]
- 0044b418 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2a0:8"]]
- 0044b418 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 0044b418 ["COPY", "register:5010:8", ["const:0:8"]]
- 0044b418 ["COPY", "register:5018:8", ["const:0:8"]]
+ 0044b458 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2e0:8"]]
+ 0044b458 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 0044b458 ["COPY", "register:5010:8", ["const:0:8"]]
+ 0044b458 ["COPY", "register:5018:8", ["const:0:8"]]
- 0044b41c ["COPY", "register:4040:8", ["const:2b1000:8"]]
~~~


<a id="compare-504891b0f18ec66bcc6185ea151c5aa1"></a>

### [`0044b4e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b4e4.md) → [`0044b524`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b524.md) FUN_0044b524

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`00456324`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00456/00456324.md) [`00456efc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00456/00456efc.md) [`00457400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00457/00457400.md) [`00457878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00457/00457878.md) [`00458230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00458/00458230.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 7件 [`00456364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456364.md) [`00456f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456f3c.md) [`00457440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00457/00457440.md) [`004578b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00457/004578b8.md) [`00458270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00458/00458270.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b548",
      "incomplete_value": true,
      "site": "0044b55c",
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b508",
      "incomplete_value": true,
      "site": "0044b51c",
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
                "const:2a0:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b554",
      "incomplete_value": true,
      "site": "0044b560",
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
                "const:1b1:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b514",
      "incomplete_value": true,
      "site": "0044b520",
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
                "const:171:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b554",
      "incomplete_value": true,
      "site": "0044b560",
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
      "definition_site": "0044b514",
      "incomplete_value": true,
      "site": "0044b520",
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
      "0044b548",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ],
    [
      "0044b554",
      "READ",
      [
        "storage",
        "002b7171",
        null,
        "string"
      ]
    ],
    [
      "0044b554",
      "READ",
      [
        "storage",
        "002b7181",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044b548",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "0044b554",
      "READ",
      [
        "storage",
        "002b71b1",
        null,
        "string"
      ]
    ],
    [
      "0044b554",
      "READ",
      [
        "storage",
        "002b71c1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b4f8 ["INT_ADD", "register:40f0:8", ["const:44b4f8:8", "const:4:8"]]
- 0044b4f8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044b538 ["INT_ADD", "register:40f0:8", ["const:44b538:8", "const:4:8"]]
+ 0044b538 ["CALL", null, ["callee:00c57f60:8"]]
- 0044b508 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2a0:8"]]
- 0044b508 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 0044b508 ["COPY", "register:5010:8", ["const:0:8"]]
- 0044b508 ["COPY", "register:5018:8", ["const:0:8"]]
+ 0044b548 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2e0:8"]]
+ 0044b548 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 0044b548 ["COPY", "register:5010:8", ["const:0:8"]]
+ 0044b548 ["COPY", "register:5018:8", ["const:0:8"]]
- 0044b50c ["COPY", "register:4040:8", ["const:2b7000:8"]]
~~~


<a id="compare-8580ef46450d6a3a8b8f270712b3a43c"></a>

### [`0044b534`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b534.md) → [`0044b574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b574.md) FUN_0044b574

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) [`0044f948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044f948.md) [`0044fd0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044fd0c.md) [`0045440c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00454/0045440c.md) [`00a84ea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84ea8.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 5件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0044f988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f988.md) [`0044fd4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044fd4c.md) [`0045444c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/0045444c.md) [`00a84f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84f18.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b59c",
      "incomplete_value": true,
      "site": "0044b5a8",
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
                "const:9c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b55c",
      "incomplete_value": true,
      "site": "0044b568",
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
                "const:980:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b598",
      "incomplete_value": true,
      "site": "0044b5ac",
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
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:a0f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b558",
      "incomplete_value": true,
      "site": "0044b56c",
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
                "const:2a8000:8"
              ],
              [
                "leaf",
                "const:a6b:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b598",
      "incomplete_value": true,
      "site": "0044b5ac",
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
      "definition_site": "0044b558",
      "incomplete_value": true,
      "site": "0044b56c",
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
      "0044b598",
      "READ",
      [
        "storage",
        "002a8a6b",
        null,
        "string"
      ]
    ],
    [
      "0044b598",
      "READ",
      [
        "storage",
        "002a8a7b",
        null,
        "string"
      ]
    ],
    [
      "0044b59c",
      "READ",
      [
        "storage",
        "002c2980",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0044b598",
      "READ",
      [
        "storage",
        "002a8a0f",
        null,
        "string"
      ]
    ],
    [
      "0044b598",
      "READ",
      [
        "storage",
        "002a8a1f",
        null,
        "string"
      ]
    ],
    [
      "0044b59c",
      "READ",
      [
        "storage",
        "002c29c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b548 ["INT_ADD", "register:40f0:8", ["const:44b548:8", "const:4:8"]]
- 0044b548 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044b588 ["INT_ADD", "register:40f0:8", ["const:44b588:8", "const:4:8"]]
+ 0044b588 ["CALL", null, ["callee:00c57f60:8"]]
- 0044b550 ["COPY", "tmp:0:8", ["const:a6b:8"]]
- 0044b550 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044b550 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044b550 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0044b590 ["COPY", "tmp:0:8", ["const:a0f:8"]]
+ 0044b590 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0044b590 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0044b590 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0044b554 ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-b606139ef8e392af04fbcfc52db0e174"></a>

### [`0044b584`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b584.md) → [`0044b5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b5c4.md) FUN_0044b5c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0047377c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00473/0047377c.md) [`00477e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00477/00477e0c.md) · 呼出先 6件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f50.md) [`00c57f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f70.md)
- 新版 呼出元 2件 [`004737bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/004737bc.md) [`00477e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00477/00477e4c.md) · 呼出先 6件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58020.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 83.64% / 新版 83.64%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b604",
      "incomplete_value": true,
      "site": "0044b610",
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
                "const:590:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b5c4",
      "incomplete_value": true,
      "site": "0044b5d0",
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
                "const:550:8"
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
      "definition_site": "0044b600",
      "incomplete_value": true,
      "site": "0044b614",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:f34:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b5c0",
      "incomplete_value": true,
      "site": "0044b5d4",
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
                "const:2c0000:8"
              ],
              [
                "leaf",
                "const:ef4:8"
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
      "definition_site": "0044b600",
      "incomplete_value": true,
      "site": "0044b614",
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
      "definition_site": "0044b5c0",
      "incomplete_value": true,
      "site": "0044b5d4",
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
      "0044b600",
      "READ",
      [
        "storage",
        "002c0ef4",
        null,
        "string"
      ]
    ],
    [
      "0044b600",
      "READ",
      [
        "storage",
        "002c0f04",
        null,
        "string"
      ]
    ],
    [
      "0044b604",
      "READ",
      [
        "storage",
        "002c2550",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0044b600",
      "READ",
      [
        "storage",
        "002c0f34",
        null,
        "string"
      ]
    ],
    [
      "0044b600",
      "READ",
      [
        "storage",
        "002c0f44",
        null,
        "string"
      ]
    ],
    [
      "0044b604",
      "READ",
      [
        "storage",
        "002c2590",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b5f4 ["INT_ADD", "register:40f0:8", ["const:44b5f4:8", "const:4:8"]]
- 0044b5f4 ["CALL", null, ["callee:00c58040:8"]]
+ 0044b634 ["INT_ADD", "register:40f0:8", ["const:44b634:8", "const:4:8"]]
+ 0044b634 ["CALL", null, ["callee:00c58040:8"]]
- 0044b634 ["INT_ADD", "register:40f0:8", ["const:44b634:8", "const:4:8"]]
- 0044b634 ["CALL", null, ["callee:00c57f80:8"]]
+ 0044b674 ["INT_ADD", "register:40f0:8", ["const:44b674:8", "const:4:8"]]
+ 0044b674 ["CALL", null, ["callee:00c57f80:8"]]
- 0044b5b0 ["INT_ADD", "register:40f0:8", ["const:44b5b0:8", "const:4:8"]]
- 0044b5b0 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044b5f0 ["INT_ADD", "register:40f0:8", ["const:44b5f0:8", "const:4:8"]]
+ 0044b5f0 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-dedae79d81266a5a269bb342e67950ef"></a>

### [`0044b700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b700.md) → [`0044b740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b740.md) FUN_0044b740

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00454844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00454/00454844.md) [`00454d28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00454/00454d28.md) [`004552f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00455/004552f8.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 3件 [`00454884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/00454884.md) [`00454d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00454/00454d68.md) [`00455338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00455/00455338.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b764",
      "incomplete_value": true,
      "site": "0044b77c",
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
                "const:6a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b724",
      "incomplete_value": true,
      "site": "0044b73c",
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
                "const:660:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b770",
      "incomplete_value": true,
      "site": "0044b780",
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
                "const:2b9000:8"
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
      "definition_site": "0044b730",
      "incomplete_value": true,
      "site": "0044b740",
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
                "const:2b9000:8"
              ],
              [
                "leaf",
                "const:f64:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b770",
      "incomplete_value": true,
      "site": "0044b780",
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
      "definition_site": "0044b730",
      "incomplete_value": true,
      "site": "0044b740",
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
      "0044b764",
      "READ",
      [
        "storage",
        "002c2660",
        null,
        null
      ]
    ],
    [
      "0044b770",
      "READ",
      [
        "storage",
        "002b9f64",
        null,
        "string"
      ]
    ],
    [
      "0044b770",
      "READ",
      [
        "storage",
        "002b9f74",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044b764",
      "READ",
      [
        "storage",
        "002c26a0",
        null,
        null
      ]
    ],
    [
      "0044b770",
      "READ",
      [
        "storage",
        "002b9f10",
        null,
        "string"
      ]
    ],
    [
      "0044b770",
      "READ",
      [
        "storage",
        "002b9f20",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b714 ["INT_ADD", "register:40f0:8", ["const:44b714:8", "const:4:8"]]
- 0044b714 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044b754 ["INT_ADD", "register:40f0:8", ["const:44b754:8", "const:4:8"]]
+ 0044b754 ["CALL", null, ["callee:00c57f60:8"]]
- 0044b724 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:660:8"]]
- 0044b724 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 0044b724 ["COPY", "register:5010:8", ["const:0:8"]]
- 0044b724 ["COPY", "register:5018:8", ["const:0:8"]]
+ 0044b764 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6a0:8"]]
+ 0044b764 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 0044b764 ["COPY", "register:5010:8", ["const:0:8"]]
+ 0044b764 ["COPY", "register:5018:8", ["const:0:8"]]
- 0044b728 ["COPY", "register:4040:8", ["const:2b9000:8"]]
~~~


<a id="compare-482a3e9489a259dee8391b4f225ef5d8"></a>

### [`0044b754`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b754.md) → [`0044b794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b794.md) FUN_0044b794

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 7件 [`005a7568`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a7/005a7568.md) [`005a8578`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a8/005a8578.md) [`005a97b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005a9/005a97b8.md) [`005aaee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005aa/005aaee0.md) [`005ac050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005ac/005ac050.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 7件 [`005a75a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a75a8.md) [`005a85b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a85b8.md) [`005a97f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a9/005a97f8.md) [`005aaf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005aa/005aaf20.md) [`005ac090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005ac090.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b7bc",
      "incomplete_value": true,
      "site": "0044b7c8",
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
                "const:e40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b77c",
      "incomplete_value": true,
      "site": "0044b788",
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
                "const:e00:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b7b8",
      "incomplete_value": true,
      "site": "0044b7cc",
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
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:78b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b778",
      "incomplete_value": true,
      "site": "0044b78c",
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
                "const:2af000:8"
              ],
              [
                "leaf",
                "const:7e7:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b7b8",
      "incomplete_value": true,
      "site": "0044b7cc",
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
      "definition_site": "0044b778",
      "incomplete_value": true,
      "site": "0044b78c",
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
      "0044b7b8",
      "READ",
      [
        "storage",
        "002af7e7",
        null,
        "string"
      ]
    ],
    [
      "0044b7b8",
      "READ",
      [
        "storage",
        "002af7f7",
        null,
        "string"
      ]
    ],
    [
      "0044b7bc",
      "READ",
      [
        "storage",
        "002c2e00",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0044b7b8",
      "READ",
      [
        "storage",
        "002af78b",
        null,
        "string"
      ]
    ],
    [
      "0044b7b8",
      "READ",
      [
        "storage",
        "002af79b",
        null,
        "string"
      ]
    ],
    [
      "0044b7bc",
      "READ",
      [
        "storage",
        "002c2e40",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b768 ["INT_ADD", "register:40f0:8", ["const:44b768:8", "const:4:8"]]
- 0044b768 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044b7a8 ["INT_ADD", "register:40f0:8", ["const:44b7a8:8", "const:4:8"]]
+ 0044b7a8 ["CALL", null, ["callee:00c57f60:8"]]
- 0044b770 ["COPY", "tmp:0:8", ["const:7e7:8"]]
- 0044b770 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0044b770 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0044b770 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0044b7b0 ["COPY", "tmp:0:8", ["const:78b:8"]]
+ 0044b7b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0044b7b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0044b7b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0044b774 ["COPY", "register:4048:8", ["const:2c2000:8"]]
~~~


<a id="compare-7075df9d1470f1079e57e7a2cccea135"></a>

### [`0044b7a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b7a4.md) → [`0044b7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b7e4.md) FUN_0044b7e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`008d548c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d5/008d548c.md) [`008d6ce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008d6/008d6ce0.md) · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`008d54e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d5/008d54e0.md) [`008d6d34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d6/008d6d34.md) · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0044b808",
      "incomplete_value": true,
      "site": "0044b81c",
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
                "const:2e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b7c8",
      "incomplete_value": true,
      "site": "0044b7dc",
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
                "const:2a0:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b814",
      "incomplete_value": true,
      "site": "0044b820",
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
                "const:2b3000:8"
              ],
              [
                "leaf",
                "const:8c9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0044b7d4",
      "incomplete_value": true,
      "site": "0044b7e0",
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
                "const:2b3000:8"
              ],
              [
                "leaf",
                "const:898:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "0044b814",
      "incomplete_value": true,
      "site": "0044b820",
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
      "definition_site": "0044b7d4",
      "incomplete_value": true,
      "site": "0044b7e0",
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
      "0044b808",
      "READ",
      [
        "storage",
        "002c32a0",
        null,
        null
      ]
    ],
    [
      "0044b814",
      "READ",
      [
        "storage",
        "002b3898",
        null,
        "string"
      ]
    ],
    [
      "0044b814",
      "READ",
      [
        "storage",
        "002b38a8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0044b808",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "0044b814",
      "READ",
      [
        "storage",
        "002b38c9",
        null,
        "string"
      ]
    ],
    [
      "0044b814",
      "READ",
      [
        "storage",
        "002b38d9",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0044b7b8 ["INT_ADD", "register:40f0:8", ["const:44b7b8:8", "const:4:8"]]
- 0044b7b8 ["CALL", null, ["callee:00c57f60:8"]]
+ 0044b7f8 ["INT_ADD", "register:40f0:8", ["const:44b7f8:8", "const:4:8"]]
+ 0044b7f8 ["CALL", null, ["callee:00c57f60:8"]]
- 0044b7c8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2a0:8"]]
- 0044b7c8 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 0044b7c8 ["COPY", "register:5010:8", ["const:0:8"]]
- 0044b7c8 ["COPY", "register:5018:8", ["const:0:8"]]
+ 0044b808 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2e0:8"]]
+ 0044b808 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 0044b808 ["COPY", "register:5010:8", ["const:0:8"]]
+ 0044b808 ["COPY", "register:5018:8", ["const:0:8"]]
- 0044b7cc ["COPY", "register:4040:8", ["const:2b3000:8"]]
~~~


