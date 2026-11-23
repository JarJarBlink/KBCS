# v16.0.1 → v16.0.2 · 最優先の変更候補 (62)

[一覧の目次](README.md)

<a id="compare-a3254de7b281f220f05a623d4fe2a201"></a>

### [`009cc0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009cc0c4.md) → [`009cc118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc118.md) FUN_009cc118

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009ca9d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ca/009ca9d0.md) [`009cb98c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cb98c.md) [`009cbe28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbe28.md) · 呼出先 2件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`009cbbc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cb/009cbbc0.md)
- 新版 呼出元 3件 [`009caa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ca/009caa24.md) [`009cb9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cb9e0.md) [`009cbe7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbe7c.md) · 呼出先 2件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`009cbc14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cb/009cbc14.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.09% / 新版 99.09%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009cc2a0",
      "incomplete_value": false,
      "site": "009cc2a4",
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
            "const:170:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009cc24c",
      "incomplete_value": false,
      "site": "009cc250",
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
            "const:1bd:8"
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
      "009cc2a0",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009cc2a0",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009cc250 ["INT_ADD", "register:40f0:8", ["const:9cc250:8", "const:4:8"]]
- 009cc250 ["CALL", null, ["callee:00442970:8"]]
+ 009cc2a4 ["INT_ADD", "register:40f0:8", ["const:9cc2a4:8", "const:4:8"]]
+ 009cc2a4 ["CALL", null, ["callee:00442970:8"]]
- 009cc0f0 ["INT_ADD", "register:40f0:8", ["const:9cc0f0:8", "const:4:8"]]
- 009cc0f0 ["CALL", null, ["callee:009cbc14:8"]]
+ 009cc144 ["INT_ADD", "register:40f0:8", ["const:9cc144:8", "const:4:8"]]
+ 009cc144 ["CALL", null, ["callee:009cbc14:8"]]
- 009cc24c ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 009cc24c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009cc24c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009cc24c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009cc2a0 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 009cc2a0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009cc2a0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009cc2a0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-68a423cd513bd8ea1a88c8b60714b000"></a>

### [`009cc27c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009cc27c.md) → [`009cc2d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc2d0.md) _INIT_200

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009cc30c",
      "incomplete_value": true,
      "site": "009cc328",
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
      "definition_site": "009cc2b8",
      "incomplete_value": true,
      "site": "009cc2d4",
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
      "definition_site": "009cc330",
      "incomplete_value": true,
      "site": "009cc34c",
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
      "definition_site": "009cc2dc",
      "incomplete_value": true,
      "site": "009cc2f8",
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
      "definition_site": "009cc350",
      "incomplete_value": true,
      "site": "009cc36c",
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
      "definition_site": "009cc2fc",
      "incomplete_value": true,
      "site": "009cc318",
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
      "009cc30c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009cc330",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009cc350",
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
      "009cc30c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009cc330",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009cc350",
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
- 009cc4b0 ["INT_ADD", "register:40f0:8", ["const:9cc4b0:8", "const:4:8"]]
- 009cc4b0 ["CALL", null, ["callee:00c57f00:8"]]
+ 009cc504 ["INT_ADD", "register:40f0:8", ["const:9cc504:8", "const:4:8"]]
+ 009cc504 ["CALL", null, ["callee:00c57f00:8"]]
- 009cc2a8 ["COPY", "tmp:0:8", ["const:cc0:8"]]
- 009cc2a8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009cc2a8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009cc2a8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009cc2fc ["COPY", "tmp:0:8", ["const:dc0:8"]]
+ 009cc2fc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009cc2fc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009cc2fc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009cc2b0 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-14441d8defef1165acca8c2887c8b30b"></a>

### [`009cc7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009cc7a0.md) → [`009cc7f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009cc7f4.md) _INIT_201

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009cc830",
      "incomplete_value": true,
      "site": "009cc84c",
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
      "definition_site": "009cc7dc",
      "incomplete_value": true,
      "site": "009cc7f8",
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
      "definition_site": "009cc854",
      "incomplete_value": true,
      "site": "009cc870",
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
      "definition_site": "009cc800",
      "incomplete_value": true,
      "site": "009cc81c",
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
      "definition_site": "009cc874",
      "incomplete_value": true,
      "site": "009cc890",
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
      "definition_site": "009cc820",
      "incomplete_value": true,
      "site": "009cc83c",
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
      "009cc830",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009cc854",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009cc874",
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
      "009cc830",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009cc854",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009cc874",
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
- 009cc9d4 ["INT_ADD", "register:40f0:8", ["const:9cc9d4:8", "const:4:8"]]
- 009cc9d4 ["CALL", null, ["callee:00c57f00:8"]]
+ 009cca28 ["INT_ADD", "register:40f0:8", ["const:9cca28:8", "const:4:8"]]
+ 009cca28 ["CALL", null, ["callee:00c57f00:8"]]
- 009cc7cc ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 009cc7cc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009cc7cc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009cc7cc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009cc820 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009cc820 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009cc820 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009cc820 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009cc7d4 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-bff27948309cdc782f58d4b09e884b28"></a>

### [`009ccb30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009cc/009ccb30.md) → [`009ccb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009cc/009ccb84.md) FUN_009ccb84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0087f10c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f10c.md) [`0087f368`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0087f/0087f368.md) [`0088043c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00880/0088043c.md) [`008acd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ac/008acd54.md) · 呼出先 6件 [`00768414`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768414.md) [`00768a28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768a28.md) [`00768e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00768/00768e64.md) [`007690c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/007690c4.md) [`00769250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769250.md)
- 新版 呼出元 4件 [`0087f164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f164.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00880494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880494.md) [`008acdac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008acdac.md) · 呼出先 6件 [`0076846c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/0076846c.md) [`00768a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768a80.md) [`00768ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768ebc.md) [`0076911c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/0076911c.md) [`007692a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/007692a8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ccba8",
      "value": [
        "leaf",
        "ram:768ebc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ccb54",
      "value": [
        "leaf",
        "ram:768e64:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ccbb8",
      "value": [
        "leaf",
        "ram:7692a8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009ccb64",
      "value": [
        "leaf",
        "ram:769250:8"
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
      "009ccba8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768e64"
      ]
    ],
    [
      "009ccbb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00769250"
      ]
    ]
  ],
  "added": [
    [
      "009ccba8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768ebc"
      ]
    ],
    [
      "009ccbb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007692a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ccb54 ["INT_ADD", "register:40f0:8", ["const:9ccb54:8", "const:4:8"]]
- 009ccb54 ["CALL", null, ["ram:768e64:8"]]
+ 009ccba8 ["INT_ADD", "register:40f0:8", ["const:9ccba8:8", "const:4:8"]]
+ 009ccba8 ["CALL", null, ["ram:768ebc:8"]]
- 009ccb64 ["INT_ADD", "register:40f0:8", ["const:9ccb64:8", "const:4:8"]]
- 009ccb64 ["CALL", null, ["ram:769250:8"]]
+ 009ccbb8 ["INT_ADD", "register:40f0:8", ["const:9ccbb8:8", "const:4:8"]]
+ 009ccbb8 ["CALL", null, ["ram:7692a8:8"]]
- 009ccb40 ["INT_ADD", "register:40f0:8", ["const:9ccb40:8", "const:4:8"]]
- 009ccb40 ["CALL", null, ["callee:0084e5f4:8"]]
+ 009ccb94 ["INT_ADD", "register:40f0:8", ["const:9ccb94:8", "const:4:8"]]
+ 009ccb94 ["CALL", null, ["callee:0084e5f4:8"]]
~~~


<a id="compare-8462a68e87f711e8c39445afd01d27a0"></a>

### [`009d0320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d0/009d0320.md) → [`009d0374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d0/009d0374.md) FUN_009d0374

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 10件 [`0069a504`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0069a/0069a504.md) [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`006e53d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e53d4.md) [`0073c938`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0073c/0073c938.md) [`0075d75c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075d/0075d75c.md) · 呼出先 108件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md)
- 新版 呼出元 10件 [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`006e542c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e542c.md) [`0073c990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0073c/0073c990.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) · 呼出先 108件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.44% / 新版 99.44%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 10件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009d0960",
      "incomplete_value": false,
      "site": "009d0960",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:ca8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d090c",
      "incomplete_value": false,
      "site": "009d090c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
          ]
        ]
      ]
    },
    "ordinal": 71,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009d0a60",
      "value": [
        "leaf",
        "ram:8058a4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009d0a0c",
      "value": [
        "leaf",
        "ram:80584c:8"
      ]
    },
    "ordinal": 28,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009d0ab4",
      "value": [
        "leaf",
        "ram:8058a4:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009d0a60",
      "value": [
        "leaf",
        "ram:80584c:8"
      ]
    },
    "ordinal": 33,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009d0574",
      "DATA",
      [
        "storage",
        "0038e030",
        "fde_0038e030",
        "dword"
      ]
    ],
    [
      "009d057c",
      "DATA",
      [
        "storage",
        "0038e028",
        null,
        "byte[27]"
      ]
    ],
    [
      "009d05a4",
      "DATA",
      [
        "storage",
        "0038e030",
        "fde_0038e030",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "009d0574",
      "DATA",
      [
        "storage",
        "0038e030",
        null,
        "byte[27]"
      ]
    ],
    [
      "009d057c",
      "DATA",
      [
        "storage",
        "0038e028",
        null,
        "uleb128"
      ]
    ],
    [
      "009d05a4",
      "DATA",
      [
        "storage",
        "0038e030",
        null,
        "byte[27]"
      ]
    ]
  ]
}
~~~


~~~diff
- 009d0a0c ["INT_ADD", "register:40f0:8", ["const:9d0a0c:8", "const:4:8"]]
- 009d0a0c ["CALL", null, ["ram:80584c:8"]]
+ 009d0a60 ["INT_ADD", "register:40f0:8", ["const:9d0a60:8", "const:4:8"]]
+ 009d0a60 ["CALL", null, ["ram:8058a4:8"]]
- 009d0a60 ["INT_ADD", "register:40f0:8", ["const:9d0a60:8", "const:4:8"]]
- 009d0a60 ["CALL", null, ["ram:80584c:8"]]
+ 009d0ab4 ["INT_ADD", "register:40f0:8", ["const:9d0ab4:8", "const:4:8"]]
+ 009d0ab4 ["CALL", null, ["ram:8058a4:8"]]
- 009d0aa0 ["INT_ADD", "register:40f0:8", ["const:9d0aa0:8", "const:4:8"]]
- 009d0aa0 ["CALL", null, ["ram:80584c:8"]]
+ 009d0af4 ["INT_ADD", "register:40f0:8", ["const:9d0af4:8", "const:4:8"]]
+ 009d0af4 ["CALL", null, ["ram:8058a4:8"]]
~~~


<a id="compare-1fd38cbce857df0ad7686e14a65e5129"></a>

### [`009d3af4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d3/009d3af4.md) → [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) FUN_009d3b48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`0075d75c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075d/0075d75c.md) [`0089b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089b28c.md) [`0089d4c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089d/0089d4c8.md) [`00911be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00911/00911be4.md) · 呼出先 65件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046e538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e538.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md)
- 新版 呼出元 5件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) [`0089d520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089d/0089d520.md) [`00911c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00911/00911c38.md) · 呼出先 65件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `call_argument_candidate` 27件, `call_target` 7件, `store_destination` 21件, `store_value` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009d4ee4",
      "incomplete_value": false,
      "site": "009d4ee4",
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
      "definition_site": "009d4e90",
      "incomplete_value": false,
      "site": "009d4e90",
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
    "ordinal": 208,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009d4ee8",
      "incomplete_value": false,
      "site": "009d4ee8",
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
      "definition_site": "009d4e94",
      "incomplete_value": false,
      "site": "009d4e94",
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
    "ordinal": 209,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009d4ee4",
      "incomplete_value": false,
      "site": "009d4ee8",
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
      "definition_site": "009d4e90",
      "incomplete_value": false,
      "site": "009d4e94",
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
    "ordinal": 209,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009d3b94",
      "DATA",
      [
        "storage",
        "00393c13",
        null,
        "byte[35]"
      ]
    ],
    [
      "009d3ba0",
      "DATA",
      [
        "storage",
        "00393c04",
        null,
        "byte[35]"
      ]
    ],
    [
      "009d3ca4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a35554"
      ]
    ]
  ],
  "added": [
    [
      "009d3b94",
      "DATA",
      [
        "storage",
        "00393c13",
        null,
        "byte[59]"
      ]
    ],
    [
      "009d3ba0",
      "DATA",
      [
        "storage",
        "00393c04",
        null,
        "byte[59]"
      ]
    ],
    [
      "009d3ca4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a355a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009d3c50 ["INT_ADD", "register:40f0:8", ["const:9d3c50:8", "const:4:8"]]
- 009d3c50 ["CALL", null, ["ram:a35554:8"]]
+ 009d3ca4 ["INT_ADD", "register:40f0:8", ["const:9d3ca4:8", "const:4:8"]]
+ 009d3ca4 ["CALL", null, ["ram:a355a8:8"]]
- 009d3ca4 ["INT_ADD", "register:40f0:8", ["const:9d3ca4:8", "const:4:8"]]
- 009d3ca4 ["CALL", null, ["callee:00a38be0:8"]]
+ 009d3cf8 ["INT_ADD", "register:40f0:8", ["const:9d3cf8:8", "const:4:8"]]
+ 009d3cf8 ["CALL", null, ["callee:00a38be0:8"]]
- 009d40b8 ["INT_ADD", "register:40f0:8", ["const:9d40b8:8", "const:4:8"]]
- 009d40b8 ["CALL", null, ["ram:71bed8:8"]]
+ 009d410c ["INT_ADD", "register:40f0:8", ["const:9d410c:8", "const:4:8"]]
+ 009d410c ["CALL", null, ["ram:71bf30:8"]]
~~~


<a id="compare-0ba73256c8d9da5d3a7a0487f069d60f"></a>

### [`009d5cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d5/009d5cf8.md) → [`009d5d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d5/009d5d4c.md) FUN_009d5d4c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`007ef684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007ef/007ef684.md) [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) [`009d7b7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d7/009d7b7c.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 36件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`004476f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/004476f4.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md)
- 新版 呼出元 5件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`007ef6dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ef/007ef6dc.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`009d7bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7bd0.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 36件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 95.81% / 新版 95.81%

優先判定に残った影響 `call_argument_candidate` 34件, `call_target` 1件, `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009d5e0c",
      "incomplete_value": false,
      "site": "009d5e18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d5db8",
      "incomplete_value": false,
      "site": "009d5dc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009d5e38",
      "incomplete_value": true,
      "site": "009d5e58",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:30f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d5de4",
      "incomplete_value": true,
      "site": "009d5e04",
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
                "const:2b4000:8"
              ],
              [
                "leaf",
                "const:2de:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009d610c",
      "incomplete_value": false,
      "site": "009d6110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009d60b8",
      "incomplete_value": false,
      "site": "009d60bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "009d5da8",
      "READ",
      [
        "storage",
        "00c9b610",
        null,
        "pointer"
      ]
    ],
    [
      "009d5dac",
      "PARAM",
      [
        "storage",
        "011218f0",
        null,
        "undefined1"
      ]
    ],
    [
      "009d5dbc",
      "READ",
      [
        "storage",
        "00c9b620",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "009d5da8",
      "READ",
      [
        "storage",
        "00c9b6e0",
        null,
        "pointer"
      ]
    ],
    [
      "009d5dac",
      "PARAM",
      [
        "storage",
        "011219f0",
        null,
        "undefined1"
      ]
    ],
    [
      "009d5dbc",
      "READ",
      [
        "storage",
        "00c9b6f0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 009d5d5c ["INT_ADD", "register:40f0:8", ["const:9d5d5c:8", "const:4:8"]]
- 009d5d5c ["CALL", null, ["callee:00484800:8"]]
+ 009d5db0 ["INT_ADD", "register:40f0:8", ["const:9d5db0:8", "const:4:8"]]
+ 009d5db0 ["CALL", null, ["callee:00484800:8"]]
- 009d5d6c ["INT_ADD", "register:40f0:8", ["const:9d5d6c:8", "const:4:8"]]
- 009d5d6c ["CALL", null, ["callee:004939d8:8"]]
+ 009d5dc0 ["INT_ADD", "register:40f0:8", ["const:9d5dc0:8", "const:4:8"]]
+ 009d5dc0 ["CALL", null, ["callee:004939d8:8"]]
- 009d5e18 ["INT_ADD", "register:40f0:8", ["const:9d5e18:8", "const:4:8"]]
- 009d5e18 ["CALL", null, ["callee:00447734:8"]]
+ 009d5e6c ["INT_ADD", "register:40f0:8", ["const:9d5e6c:8", "const:4:8"]]
+ 009d5e6c ["CALL", null, ["callee:00447734:8"]]
~~~


<a id="compare-d4edf59d2eee312c009dec7aa29f990d"></a>

### [`009dc6f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dc/009dc6f0.md) → [`009dc744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dc744.md) FUN_009dc744

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 14件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487a64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487a64.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 14件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487aa4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 93.80% / 新版 93.80%

優先判定に残った影響 `store_destination` 1件, `store_value` 5件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009dc78c",
      "incomplete_value": false,
      "site": "009dc794",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dc738",
      "incomplete_value": false,
      "site": "009dc740",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009dc7b8",
      "incomplete_value": true,
      "site": "009dc7b8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:a9b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dc764",
      "incomplete_value": true,
      "site": "009dc764",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a4000:8"
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009dca5c",
      "incomplete_value": true,
      "site": "009dca60",
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
      "definition_site": "009dca08",
      "incomplete_value": true,
      "site": "009dca0c",
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
    "ordinal": 69,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009dc794",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009dc7ac",
      "READ",
      [
        "storage",
        "002a4ae8",
        null,
        "string"
      ]
    ],
    [
      "009dc840",
      "READ",
      [
        "storage",
        "002c4030",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009dc794",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009dc7ac",
      "READ",
      [
        "storage",
        "002a4a9b",
        null,
        "string"
      ]
    ],
    [
      "009dc840",
      "READ",
      [
        "storage",
        "002c4070",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dc730 ["INT_ADD", "register:40f0:8", ["const:9dc730:8", "const:4:8"]]
- 009dc730 ["CALL", null, ["callee:00487e60:8"]]
+ 009dc784 ["INT_ADD", "register:40f0:8", ["const:9dc784:8", "const:4:8"]]
+ 009dc784 ["CALL", null, ["callee:00487e60:8"]]
- 009dc738 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009dc738 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009dc738 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009dc738 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009dc78c ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 009dc78c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009dc78c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009dc78c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009dc754 ["COPY", "tmp:0:8", ["const:ae8:8"]]
- 009dc754 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009dc754 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009dc754 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009dc7a8 ["COPY", "tmp:0:8", ["const:a9b:8"]]
+ 009dc7a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009dc7a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009dc7a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2944c0e00fc1ca3888b3d6bdb8a5e7eb"></a>

### [`009dcb64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dc/009dcb64.md) → [`009dcbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dcbb8.md) FUN_009dcbb8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 11件 [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488558`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488558.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 11件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488598.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 90.96% / 新版 90.96%

優先判定に残った影響 `store_value` 2件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009dcbf8",
      "incomplete_value": false,
      "site": "009dcc00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dcba4",
      "incomplete_value": false,
      "site": "009dcbac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009dcc20",
      "incomplete_value": true,
      "site": "009dcc20",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:da3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dcbcc",
      "incomplete_value": true,
      "site": "009dcbcc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:dff:8"
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
      "definition_site": "009dcdc4",
      "incomplete_value": true,
      "site": "009dcdc8",
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
      "definition_site": "009dcd70",
      "incomplete_value": true,
      "site": "009dcd74",
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
    "ordinal": 61,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009dcc00",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009dcc14",
      "READ",
      [
        "storage",
        "002acdff",
        null,
        "string"
      ]
    ],
    [
      "009dcc58",
      "READ",
      [
        "storage",
        "002c4030",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009dcc00",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009dcc14",
      "READ",
      [
        "storage",
        "002acda3",
        null,
        "string"
      ]
    ],
    [
      "009dcc58",
      "READ",
      [
        "storage",
        "002c4070",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dcb9c ["INT_ADD", "register:40f0:8", ["const:9dcb9c:8", "const:4:8"]]
- 009dcb9c ["CALL", null, ["callee:00487e60:8"]]
+ 009dcbf0 ["INT_ADD", "register:40f0:8", ["const:9dcbf0:8", "const:4:8"]]
+ 009dcbf0 ["CALL", null, ["callee:00487e60:8"]]
- 009dcba4 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009dcba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009dcba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009dcba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009dcbf8 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 009dcbf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009dcbf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009dcbf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009dcbbc ["COPY", "tmp:0:8", ["const:dff:8"]]
- 009dcbbc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009dcbbc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009dcbbc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009dcc10 ["COPY", "tmp:0:8", ["const:da3:8"]]
+ 009dcc10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009dcc10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009dcc10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-533e9519733a6a02becc1c4720f8790c"></a>

### [`009dcfd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dc/009dcfd8.md) → [`009dd02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd02c.md) FUN_009dd02c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`007562a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00756/007562a4.md) [`0082ccfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082c/0082ccfc.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085bb70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085bb70.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 5件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`0082cd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082cd54.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 87.27% / 新版 87.27%

優先判定に残った影響 `call_target` 1件, `store_destination` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009dd068",
      "incomplete_value": true,
      "site": "009dd068",
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
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dd014",
      "incomplete_value": true,
      "site": "009dd014",
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
    "kind": "store_value",
    "new": {
      "definition_site": "009dd05c",
      "incomplete_value": true,
      "site": "009dd068",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
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
    "old": {
      "definition_site": "009dd008",
      "incomplete_value": true,
      "site": "009dd014",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40a8:8"
              ],
              [
                "leaf",
                "const:978:8"
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
    "kind": "store_destination",
    "new": {
      "definition_site": "009dd06c",
      "incomplete_value": true,
      "site": "009dd06c",
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
            "const:a78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dd018",
      "incomplete_value": true,
      "site": "009dd018",
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
            "const:978:8"
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
      "009dd05c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009dd060",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "009dd068",
      "WRITE",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009dd05c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009dd060",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "009dd068",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dd014 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 009dd014 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 009dd068 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 009dd068 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 009dd018 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:978:8"]]
- 009dd018 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 009dd06c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
+ 009dd06c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 009dd028 ["INT_ADD", "register:40f0:8", ["const:9dd028:8", "const:4:8"]]
- 009dd028 ["CALL", null, ["ram:7562a4:8"]]
+ 009dd07c ["INT_ADD", "register:40f0:8", ["const:9dd07c:8", "const:4:8"]]
+ 009dd07c ["CALL", null, ["ram:7562fc:8"]]
~~~


<a id="compare-d232f27ed7a778a6c549083e17cd8eab"></a>

### [`009dd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dd/009dd0f0.md) → [`009dd144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd144.md) FUN_009dd144

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009d5cf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d5/009d5cf8.md) [`009d7a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d7/009d7a2c.md) [`00a1a750`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a750.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`009d5d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d5/009d5d4c.md) [`009d7a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7a80.md) [`00a1a7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a7a4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009dd150",
      "incomplete_value": false,
      "site": "009dd154",
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
      "definition_site": "009dd0fc",
      "incomplete_value": false,
      "site": "009dd100",
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
      "009dd150",
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
      "009dd150",
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
- 009dd100 ["INT_ADD", "register:40f0:8", ["const:9dd100:8", "const:4:8"]]
- 009dd100 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009dd154 ["INT_ADD", "register:40f0:8", ["const:9dd154:8", "const:4:8"]]
+ 009dd154 ["CALL", null, ["callee:0043b7b8:8"]]
- 009dd0fc ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009dd0fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009dd0fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009dd0fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009dd150 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009dd150 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009dd150 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009dd150 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-aff725572e2dfead7755a79c7444cb48"></a>

### [`009dd104`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dd/009dd104.md) → [`009dd158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd158.md) FUN_009dd158

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009d992c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d9/009d992c.md) [`009dd104`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dd/009dd104.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 3件 [`009d9980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d9/009d9980.md) [`009dd158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd158.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.50% / 新版 98.50%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009dd2b4",
      "incomplete_value": false,
      "site": "009dd2bc",
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
      "definition_site": "009dd260",
      "incomplete_value": false,
      "site": "009dd268",
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
      "definition_site": "009dd40c",
      "incomplete_value": false,
      "site": "009dd414",
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
      "definition_site": "009dd3b8",
      "incomplete_value": false,
      "site": "009dd3c0",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009dd424",
      "incomplete_value": false,
      "site": "009dd430",
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
      "definition_site": "009dd3d0",
      "incomplete_value": false,
      "site": "009dd3dc",
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
    "ordinal": 10,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009dd2b4",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "009dd2d8",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ],
    [
      "009dd40c",
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
      "009dd2b4",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009dd2d8",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "009dd40c",
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
- 009dd268 ["INT_ADD", "register:40f0:8", ["const:9dd268:8", "const:4:8"]]
- 009dd268 ["CALL", null, ["callee:00441ed4:8"]]
+ 009dd2bc ["INT_ADD", "register:40f0:8", ["const:9dd2bc:8", "const:4:8"]]
+ 009dd2bc ["CALL", null, ["callee:00441ed4:8"]]
- 009dd3c0 ["INT_ADD", "register:40f0:8", ["const:9dd3c0:8", "const:4:8"]]
- 009dd3c0 ["CALL", null, ["callee:00441ed4:8"]]
+ 009dd414 ["INT_ADD", "register:40f0:8", ["const:9dd414:8", "const:4:8"]]
+ 009dd414 ["CALL", null, ["callee:00441ed4:8"]]
- 009dd3dc ["INT_ADD", "register:40f0:8", ["const:9dd3dc:8", "const:4:8"]]
- 009dd3dc ["CALL", null, ["callee:00442834:8"]]
+ 009dd430 ["INT_ADD", "register:40f0:8", ["const:9dd430:8", "const:4:8"]]
+ 009dd430 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-1f4569a5890d4e1ce63b2611a3c3f134"></a>

### [`009dd91c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dd/009dd91c.md) → [`009dd970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd970.md) FUN_009dd970

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009d7fe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d7/009d7fe8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009d803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d8/009d803c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009dd97c",
      "incomplete_value": false,
      "site": "009dd980",
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
      "definition_site": "009dd928",
      "incomplete_value": false,
      "site": "009dd92c",
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
      "009dd97c",
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
      "009dd97c",
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
- 009dd92c ["INT_ADD", "register:40f0:8", ["const:9dd92c:8", "const:4:8"]]
- 009dd92c ["CALL", null, ["callee:0043b7b8:8"]]
+ 009dd980 ["INT_ADD", "register:40f0:8", ["const:9dd980:8", "const:4:8"]]
+ 009dd980 ["CALL", null, ["callee:0043b7b8:8"]]
- 009dd928 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009dd928 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009dd928 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009dd928 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009dd97c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009dd97c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009dd97c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009dd97c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b59ade99c8e68a6d41dfe0692f7344ff"></a>

### [`009dd930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dd/009dd930.md) → [`009dd984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd984.md) FUN_009dd984

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009d7fe8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009d7/009d7fe8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009d803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d8/009d803c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009dd990",
      "incomplete_value": false,
      "site": "009dd994",
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
      "definition_site": "009dd93c",
      "incomplete_value": false,
      "site": "009dd940",
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
      "009dd990",
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
      "009dd990",
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
- 009dd940 ["INT_ADD", "register:40f0:8", ["const:9dd940:8", "const:4:8"]]
- 009dd940 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009dd994 ["INT_ADD", "register:40f0:8", ["const:9dd994:8", "const:4:8"]]
+ 009dd994 ["CALL", null, ["callee:0043b7b8:8"]]
- 009dd93c ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009dd93c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009dd93c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009dd93c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009dd990 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009dd990 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009dd990 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009dd990 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ca52605f4d88fabd597b1b513e66fbd3"></a>

### [`009dd944`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dd/009dd944.md) → [`009dd998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd998.md) _INIT_202

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009dda38",
      "incomplete_value": true,
      "site": "009dda50",
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
                "const:f15:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dd9e4",
      "incomplete_value": true,
      "site": "009dd9fc",
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
                "const:f62:8"
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
      "definition_site": "009dda54",
      "incomplete_value": true,
      "site": "009dda70",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:576:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dda00",
      "incomplete_value": true,
      "site": "009dda1c",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:5d2:8"
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
      "definition_site": "009dda74",
      "incomplete_value": true,
      "site": "009dda90",
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
                "const:f10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dda20",
      "incomplete_value": true,
      "site": "009dda3c",
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
                "const:f5d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009dd9d4",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009dd9f8",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009dda18",
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
      "009dd9d4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009dd9f8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009dda18",
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
- 009ddb78 ["INT_ADD", "register:40f0:8", ["const:9ddb78:8", "const:4:8"]]
- 009ddb78 ["CALL", null, ["callee:00c57f00:8"]]
+ 009ddbcc ["INT_ADD", "register:40f0:8", ["const:9ddbcc:8", "const:4:8"]]
+ 009ddbcc ["CALL", null, ["callee:00c57f00:8"]]
- 009dd970 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 009dd970 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009dd970 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009dd970 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009dd9c4 ["COPY", "tmp:0:8", ["const:df0:8"]]
+ 009dd9c4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009dd9c4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009dd9c4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009dd978 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-b42a68290f86d847e9543a9b05e83614"></a>

### [`009ddce0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dd/009ddce0.md) → [`009ddd34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009ddd34.md) FUN_009ddd34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 91.00% / 新版 91.00%

優先判定に残った影響 `store_destination` 1件, `store_value` 7件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ddd74",
      "incomplete_value": false,
      "site": "009ddd80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ddd20",
      "incomplete_value": false,
      "site": "009ddd2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ddda8",
      "incomplete_value": true,
      "site": "009dddb8",
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
                "const:699:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ddd54",
      "incomplete_value": true,
      "site": "009ddd64",
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
                "const:6e6:8"
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
      "definition_site": "009dddbc",
      "incomplete_value": true,
      "site": "009dddbc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ddd68",
      "incomplete_value": true,
      "site": "009ddd68",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ddd80",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009ddda8",
      "READ",
      [
        "storage",
        "0029f6e6",
        null,
        "string"
      ]
    ],
    [
      "009dddac",
      "READ",
      [
        "storage",
        "0029f6f5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ddd80",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ddda8",
      "READ",
      [
        "storage",
        "0029f699",
        null,
        "string"
      ]
    ],
    [
      "009dddac",
      "READ",
      [
        "storage",
        "0029f6a8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ddd14 ["INT_ADD", "register:40f0:8", ["const:9ddd14:8", "const:4:8"]]
- 009ddd14 ["CALL", null, ["callee:00487e60:8"]]
+ 009ddd68 ["INT_ADD", "register:40f0:8", ["const:9ddd68:8", "const:4:8"]]
+ 009ddd68 ["CALL", null, ["callee:00487e60:8"]]
- 009dddc0 ["INT_ADD", "register:40f0:8", ["const:9dddc0:8", "const:4:8"]]
- 009dddc0 ["CALL", null, ["callee:00487bc0:8"]]
+ 009dde14 ["INT_ADD", "register:40f0:8", ["const:9dde14:8", "const:4:8"]]
+ 009dde14 ["CALL", null, ["callee:00487bc0:8"]]
- 009ddd20 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009ddd20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ddd20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ddd20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ddd74 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 009ddd74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ddd74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ddd74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f14ec3a8bf65d1d17132c8c8487bfe43"></a>

### [`009de080`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009de/009de080.md) → [`009de0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009de0d4.md) FUN_009de0d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a87ad0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a87/00a87ad0.md) · 呼出先 3件 [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`00a87b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a87b40.md) · 呼出先 3件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de0f8",
      "value": [
        "leaf",
        "ram:48cd38:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de0a4",
      "value": [
        "leaf",
        "ram:48ccf8:8"
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
      "009de0f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ]
  ],
  "added": [
    [
      "009de0f8",
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
- 009de0a4 ["INT_ADD", "register:40f0:8", ["const:9de0a4:8", "const:4:8"]]
- 009de0a4 ["CALL", null, ["ram:48ccf8:8"]]
+ 009de0f8 ["INT_ADD", "register:40f0:8", ["const:9de0f8:8", "const:4:8"]]
+ 009de0f8 ["CALL", null, ["ram:48cd38:8"]]
- 009de0a8 ["INT_ADD", "register:40f0:8", ["const:9de0a8:8", "const:4:8"]]
- 009de0a8 ["CALL", null, ["callee:0048cec4:8"]]
+ 009de0fc ["INT_ADD", "register:40f0:8", ["const:9de0fc:8", "const:4:8"]]
+ 009de0fc ["CALL", null, ["callee:0048cec4:8"]]
- 009de0bc ["INT_ADD", "register:40f0:8", ["const:9de0bc:8", "const:4:8"]]
- 009de0bc ["CALL", null, ["callee:00851550:8"]]
+ 009de110 ["INT_ADD", "register:40f0:8", ["const:9de110:8", "const:4:8"]]
+ 009de110 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f518b01dc0c8f43cb2fc66acf00f6974"></a>

### [`009de610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009de/009de610.md) → [`009de664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009de664.md) FUN_009de664

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`007dd364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007dd/007dd364.md) · 呼出先 3件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00a84bf0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84bf0.md) [`00a84d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a84/00a84d88.md)
- 新版 呼出元 2件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`007dd3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd3bc.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a84c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84c60.md) [`00a84df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84df8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de690",
      "value": [
        "leaf",
        "ram:a84df8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de63c",
      "value": [
        "leaf",
        "ram:a84d88:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de6ac",
      "value": [
        "leaf",
        "ram:a84df8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de658",
      "value": [
        "leaf",
        "ram:a84d88:8"
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
      "009de690",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84d88"
      ]
    ],
    [
      "009de6ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84d88"
      ]
    ]
  ],
  "added": [
    [
      "009de690",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84df8"
      ]
    ],
    [
      "009de6ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84df8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009de63c ["INT_ADD", "register:40f0:8", ["const:9de63c:8", "const:4:8"]]
- 009de63c ["CALL", null, ["ram:a84d88:8"]]
+ 009de690 ["INT_ADD", "register:40f0:8", ["const:9de690:8", "const:4:8"]]
+ 009de690 ["CALL", null, ["ram:a84df8:8"]]
- 009de658 ["INT_ADD", "register:40f0:8", ["const:9de658:8", "const:4:8"]]
- 009de658 ["CALL", null, ["ram:a84d88:8"]]
+ 009de6ac ["INT_ADD", "register:40f0:8", ["const:9de6ac:8", "const:4:8"]]
+ 009de6ac ["CALL", null, ["ram:a84df8:8"]]
- 009de62c ["INT_ADD", "register:40f0:8", ["const:9de62c:8", "const:4:8"]]
- 009de62c ["CALL", null, ["callee:00851550:8"]]
+ 009de680 ["INT_ADD", "register:40f0:8", ["const:9de680:8", "const:4:8"]]
+ 009de680 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-a74088caacf293ae1295ecc19b4af3a7"></a>

### [`009de890`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009de/009de890.md) → [`009de8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009de8e4.md) _INIT_203

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009de920",
      "incomplete_value": true,
      "site": "009de93c",
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
      "definition_site": "009de8cc",
      "incomplete_value": true,
      "site": "009de8e8",
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
      "definition_site": "009de944",
      "incomplete_value": true,
      "site": "009de960",
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
      "definition_site": "009de8f0",
      "incomplete_value": true,
      "site": "009de90c",
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
      "definition_site": "009de964",
      "incomplete_value": true,
      "site": "009de980",
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
      "definition_site": "009de910",
      "incomplete_value": true,
      "site": "009de92c",
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
      "009de920",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009de944",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009de964",
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
      "009de920",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009de944",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009de964",
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
- 009de984 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 009de984 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009de984 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009de984 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009de9d8 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 009de9d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009de9d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009de9d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009de9f0 ["INT_ADD", "register:40f0:8", ["const:9de9f0:8", "const:4:8"]]
- 009de9f0 ["CALL", null, ["callee:0043b838:8"]]
+ 009dea44 ["INT_ADD", "register:40f0:8", ["const:9dea44:8", "const:4:8"]]
+ 009dea44 ["CALL", null, ["callee:0043b838:8"]]
- 009dea2c ["INT_ADD", "register:40f0:8", ["const:9dea2c:8", "const:4:8"]]
- 009dea2c ["CALL", null, ["callee:0043b838:8"]]
+ 009dea80 ["INT_ADD", "register:40f0:8", ["const:9dea80:8", "const:4:8"]]
+ 009dea80 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-c6a1b819c5291d7f24893a0ea208c39b"></a>

### [`009df8ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009df8ec.md) → [`009df940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df940.md) FUN_009df940

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 11件 [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) [`009dfa9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009dfa9c.md) [`009e1278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e1/009e1278.md) [`009e33b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e3/009e33b8.md) · 呼出先 8件 [`0046dad4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046dad4.md) [`0066506c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/0066506c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009365c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00936/009365c4.md) [`009df668`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009df668.md)
- 新版 呼出元 11件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`009dfaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfaf0.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) [`009e340c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e340c.md) · 呼出先 8件 [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`006650ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/006650ac.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`009df6bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df6bc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.72% / 新版 90.72%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009dfa00",
      "incomplete_value": true,
      "site": "009dfa10",
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
                "const:2b6000:8"
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
    "old": {
      "definition_site": "009df9ac",
      "incomplete_value": true,
      "site": "009df9bc",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:943:8"
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
      "definition_site": "009dfa04",
      "incomplete_value": true,
      "site": "009dfa14",
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
                "const:e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009df9b0",
      "incomplete_value": true,
      "site": "009df9c0",
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
                "const:e:8"
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
      "definition_site": "009dfa08",
      "incomplete_value": true,
      "site": "009dfa18",
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
      "definition_site": "009df9b4",
      "incomplete_value": true,
      "site": "009df9c4",
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
    "ordinal": 13,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009dfa00",
      "READ",
      [
        "storage",
        "002b6943",
        null,
        "string"
      ]
    ],
    [
      "009dfa04",
      "READ",
      [
        "storage",
        "002b6951",
        null,
        "string"
      ]
    ],
    [
      "009dfa08",
      "READ",
      [
        "storage",
        "002c2430",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009dfa00",
      "READ",
      [
        "storage",
        "002b6983",
        null,
        "string"
      ]
    ],
    [
      "009dfa04",
      "READ",
      [
        "storage",
        "002b6991",
        null,
        "string"
      ]
    ],
    [
      "009dfa08",
      "READ",
      [
        "storage",
        "002c2470",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009dfa24 ["INT_ADD", "register:40f0:8", ["const:9dfa24:8", "const:4:8"]]
- 009dfa24 ["CALL", null, ["ram:66506c:8"]]
+ 009dfa78 ["INT_ADD", "register:40f0:8", ["const:9dfa78:8", "const:4:8"]]
+ 009dfa78 ["CALL", null, ["ram:6650ac:8"]]
- 009df920 ["INT_ADD", "register:40f0:8", ["const:9df920:8", "const:4:8"]]
- 009df920 ["CALL", null, ["callee:009df6bc:8"]]
+ 009df974 ["INT_ADD", "register:40f0:8", ["const:9df974:8", "const:4:8"]]
+ 009df974 ["CALL", null, ["callee:009df6bc:8"]]
- 009df930 ["INT_ADD", "register:40f0:8", ["const:9df930:8", "const:4:8"]]
- 009df930 ["CALL", null, ["callee:00851550:8"]]
+ 009df984 ["INT_ADD", "register:40f0:8", ["const:9df984:8", "const:4:8"]]
+ 009df984 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-24bfce31c9e4f239c95e6b3ce4355865"></a>

### [`009dfb18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009dfb18.md) → [`009dfb6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfb6c.md) FUN_009dfb6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00658bec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/00658bec.md) [`00658dac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00658/00658dac.md) [`0065ad40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0065a/0065ad40.md) [`009dfdac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009dfdac.md) [`00a47f00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a47/00a47f00.md) · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00688178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00688/00688178.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 5件 [`00658c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658c2c.md) [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md) [`009dfe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfe00.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006881b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/006881b8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.65% / 新版 98.65%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009dfb9c",
      "incomplete_value": true,
      "site": "009dfbc0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:120:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009dfb48",
      "incomplete_value": true,
      "site": "009dfb6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009dfb9c",
      "READ",
      [
        "storage",
        "002c40e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009dfb9c",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dfb48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:e0:8"]]
- 009dfb48 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 009dfb48 ["COPY", "register:5008:8", ["const:0:8"]]
- 009dfb48 ["COPY", "register:5010:8", ["const:0:8"]]
+ 009dfb9c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:120:8"]]
+ 009dfb9c ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 009dfb9c ["COPY", "register:5008:8", ["const:0:8"]]
+ 009dfb9c ["COPY", "register:5010:8", ["const:0:8"]]
- 009dfb70 ["INT_ADD", "register:40f0:8", ["const:9dfb70:8", "const:4:8"]]
- 009dfb70 ["CALL", null, ["callee:006881b8:8"]]
+ 009dfbc4 ["INT_ADD", "register:40f0:8", ["const:9dfbc4:8", "const:4:8"]]
+ 009dfbc4 ["CALL", null, ["callee:006881b8:8"]]
- 009dfb88 ["INT_ADD", "register:40f0:8", ["const:9dfb88:8", "const:4:8"]]
- 009dfb88 ["CALL", null, ["callee:00c53d70:8"]]
+ 009dfbdc ["INT_ADD", "register:40f0:8", ["const:9dfbdc:8", "const:4:8"]]
+ 009dfbdc ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-56d9a48945449e4ca0cf1a9a46912b2a"></a>

### [`009e01d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e01d4.md) → [`009e0228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e0228.md) FUN_009e0228

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0084e59c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0084e/0084e59c.md) · 呼出先 7件 [`0086aadc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086aadc.md) [`009e650c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e650c.md) [`009e6510`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6510.md) [`009f2604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2604.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md)
- 新版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 7件 [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`009e6560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6560.md) [`009e6564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6564.md) [`009f2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2658.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e0270",
      "incomplete_value": false,
      "site": "009e0278",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e021c",
      "incomplete_value": false,
      "site": "009e0224",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:c58:8"
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
      "009e0278",
      "DATA",
      [
        "storage",
        "00c89c58",
        null,
        "undefined *"
      ]
    ],
    [
      "009e0320",
      "READ",
      [
        "storage",
        "00c89c78",
        null,
        "pointer"
      ]
    ],
    [
      "009e0320",
      "READ",
      [
        "storage",
        "00c89c80",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e0278",
      "DATA",
      [
        "storage",
        "00c89d28",
        null,
        "undefined *"
      ]
    ],
    [
      "009e0320",
      "READ",
      [
        "storage",
        "00c89d48",
        null,
        "pointer"
      ]
    ],
    [
      "009e0320",
      "READ",
      [
        "storage",
        "00c89d50",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e0204 ["INT_ADD", "register:40f0:8", ["const:9e0204:8", "const:4:8"]]
- 009e0204 ["CALL", null, ["callee:0086ab34:8"]]
+ 009e0258 ["INT_ADD", "register:40f0:8", ["const:9e0258:8", "const:4:8"]]
+ 009e0258 ["CALL", null, ["callee:0086ab34:8"]]
- 009e021c ["COPY", "tmp:0:8", ["const:c58:8"]]
- 009e021c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e021c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e021c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e0270 ["COPY", "tmp:0:8", ["const:d28:8"]]
+ 009e0270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e0270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e0270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009e0234 ["INT_ADD", "register:40f0:8", ["const:9e0234:8", "const:4:8"]]
- 009e0234 ["CALL", null, ["callee:009f2658:8"]]
+ 009e0288 ["INT_ADD", "register:40f0:8", ["const:9e0288:8", "const:4:8"]]
+ 009e0288 ["CALL", null, ["callee:009f2658:8"]]
~~~


<a id="compare-6f84b4f9e4f58fcee5321b8f1212ef1a"></a>

### [`009e037c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e037c.md) → [`009e03d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e03d0.md) FUN_009e03d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009e0350`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e0350.md) · 呼出先 22件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md)
- 新版 呼出元 1件 [`009e03a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e03a4.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 95.71% / 新版 95.71%

優先判定に残った影響 `store_destination` 1件, `store_value` 9件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e0414",
      "incomplete_value": false,
      "site": "009e0420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e03c0",
      "incomplete_value": false,
      "site": "009e03cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009e044c",
      "incomplete_value": true,
      "site": "009e045c",
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
                "const:6a4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e03f8",
      "incomplete_value": true,
      "site": "009e0408",
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
                "const:664:8"
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
      "definition_site": "009e0450",
      "incomplete_value": true,
      "site": "009e0460",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e03fc",
      "incomplete_value": true,
      "site": "009e040c",
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009e0420",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009e044c",
      "READ",
      [
        "storage",
        "002c0664",
        null,
        "string"
      ]
    ],
    [
      "009e0450",
      "READ",
      [
        "storage",
        "002c066d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009e0420",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009e044c",
      "READ",
      [
        "storage",
        "002c06a4",
        null,
        "string"
      ]
    ],
    [
      "009e0450",
      "READ",
      [
        "storage",
        "002c06ad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e03b4 ["INT_ADD", "register:40f0:8", ["const:9e03b4:8", "const:4:8"]]
- 009e03b4 ["CALL", null, ["callee:00487e60:8"]]
+ 009e0408 ["INT_ADD", "register:40f0:8", ["const:9e0408:8", "const:4:8"]]
+ 009e0408 ["CALL", null, ["callee:00487e60:8"]]
- 009e0464 ["INT_ADD", "register:40f0:8", ["const:9e0464:8", "const:4:8"]]
- 009e0464 ["CALL", null, ["callee:00596f6c:8"]]
+ 009e04b8 ["INT_ADD", "register:40f0:8", ["const:9e04b8:8", "const:4:8"]]
+ 009e04b8 ["CALL", null, ["callee:00596f6c:8"]]
- 009e0b24 ["INT_ADD", "register:40f0:8", ["const:9e0b24:8", "const:4:8"]]
- 009e0b24 ["CALL", null, ["callee:00488698:8"]]
+ 009e0b78 ["INT_ADD", "register:40f0:8", ["const:9e0b78:8", "const:4:8"]]
+ 009e0b78 ["CALL", null, ["callee:00488698:8"]]
~~~


<a id="compare-bb3cc5f6708960cf8a0a829c167ef778"></a>

### [`009e470c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e4/009e470c.md) → [`009e4760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e4760.md) FUN_009e4760

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009f5ab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f5/009f5ab4.md) [`00a02be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02be8.md) · 呼出先 9件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md) [`005cd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd0f0.md)
- 新版 呼出元 2件 [`009f5b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f5b08.md) [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 9件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.62% / 新版 95.62%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e47fc",
      "incomplete_value": true,
      "site": "009e480c",
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
                "live",
                "register:4050:8"
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
      "definition_site": "009e47a8",
      "incomplete_value": true,
      "site": "009e47b8",
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
                "live",
                "register:4050:8"
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e489c",
      "incomplete_value": false,
      "site": "009e48a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:a21:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e4848",
      "incomplete_value": false,
      "site": "009e4854",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2ba000:8"
          ],
          [
            "leaf",
            "const:a75:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009e47f4",
      "READ",
      [
        "storage",
        "002beee4",
        null,
        "string"
      ]
    ],
    [
      "009e47f8",
      "READ",
      [
        "storage",
        "002beed4",
        null,
        "string"
      ]
    ],
    [
      "009e47fc",
      "READ",
      [
        "storage",
        "002c22a0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e47f4",
      "READ",
      [
        "storage",
        "002bee90",
        null,
        "string"
      ]
    ],
    [
      "009e47f8",
      "READ",
      [
        "storage",
        "002bee80",
        null,
        "string"
      ]
    ],
    [
      "009e47fc",
      "READ",
      [
        "storage",
        "002c22e0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e4854 ["INT_ADD", "register:40f0:8", ["const:9e4854:8", "const:4:8"]]
- 009e4854 ["CALL", null, ["callee:0060d4a8:8"]]
+ 009e48a8 ["INT_ADD", "register:40f0:8", ["const:9e48a8:8", "const:4:8"]]
+ 009e48a8 ["CALL", null, ["callee:0060d4a8:8"]]
- 009e4740 ["COPY", "register:0:8", ["register:4040:8"]]
- 009e4740 ["INT_ADD", "register:40f0:8", ["const:9e4740:8", "const:4:8"]]
- 009e4740 ["CALLIND", null, ["register:0:8"]]
+ 009e4794 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009e4794 ["INT_ADD", "register:40f0:8", ["const:9e4794:8", "const:4:8"]]
+ 009e4794 ["CALLIND", null, ["register:0:8"]]
- 009e4754 ["COPY", "register:0:8", ["register:4040:8"]]
- 009e4754 ["INT_ADD", "register:40f0:8", ["const:9e4754:8", "const:4:8"]]
- 009e4754 ["CALLIND", null, ["register:0:8"]]
+ 009e47a8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009e47a8 ["INT_ADD", "register:40f0:8", ["const:9e47a8:8", "const:4:8"]]
+ 009e47a8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4b7ca5986683c9cc818cb63973988eb6"></a>

### [`009e4a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e4/009e4a08.md) → [`009e4a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e4a5c.md) FUN_009e4a5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0061452c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00614/0061452c.md) [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) [`009f92c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f92c8.md) [`009f981c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f981c.md) · 呼出先 14件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0052dd00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0052d/0052dd00.md) [`005cd0f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cd/005cd0f0.md)
- 新版 呼出元 6件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`009f931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f931c.md) [`009f9870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9870.md) · 呼出先 14件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.94% / 新版 92.94%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e4b7c",
      "incomplete_value": true,
      "site": "009e4b7c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:426:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e4b28",
      "incomplete_value": true,
      "site": "009e4b28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:473:8"
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
      "definition_site": "009e4b80",
      "incomplete_value": true,
      "site": "009e4b80",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e4b2c",
      "incomplete_value": true,
      "site": "009e4b2c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e4cb8",
      "incomplete_value": true,
      "site": "009e4cc8",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "009e4c64",
      "incomplete_value": true,
      "site": "009e4c74",
      "value": [
        "LOAD",
        "8",
        [
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
      "009e4b6c",
      "READ",
      [
        "storage",
        "002a1473",
        null,
        "string"
      ]
    ],
    [
      "009e4b70",
      "READ",
      [
        "storage",
        "002a1479",
        null,
        "string"
      ]
    ],
    [
      "009e4cb8",
      "READ",
      [
        "storage",
        "002beee4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009e4b6c",
      "READ",
      [
        "storage",
        "002a1426",
        null,
        "string"
      ]
    ],
    [
      "009e4b70",
      "READ",
      [
        "storage",
        "002a142c",
        null,
        "string"
      ]
    ],
    [
      "009e4cb8",
      "READ",
      [
        "storage",
        "002bee90",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e4d8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:660:8"]]
- 009e4d8c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 009e4d8c ["COPY", "register:5010:8", ["const:0:8"]]
- 009e4d8c ["COPY", "register:5018:8", ["const:0:8"]]
+ 009e4de0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:6a0:8"]]
+ 009e4de0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 009e4de0 ["COPY", "register:5010:8", ["const:0:8"]]
+ 009e4de0 ["COPY", "register:5018:8", ["const:0:8"]]
- 009e4df4 ["INT_ADD", "register:40f0:8", ["const:9e4df4:8", "const:4:8"]]
- 009e4df4 ["CALL", null, ["callee:0048ce94:8"]]
+ 009e4e48 ["INT_ADD", "register:40f0:8", ["const:9e4e48:8", "const:4:8"]]
+ 009e4e48 ["CALL", null, ["callee:0048ce94:8"]]
- 009e4e7c ["INT_ADD", "register:40f0:8", ["const:9e4e7c:8", "const:4:8"]]
- 009e4e7c ["CALL", null, ["callee:0060db50:8"]]
+ 009e4ed0 ["INT_ADD", "register:40f0:8", ["const:9e4ed0:8", "const:4:8"]]
+ 009e4ed0 ["CALL", null, ["callee:0060db50:8"]]
~~~


<a id="compare-189ce8ff5c995febc69b6e65eafb4b9c"></a>

### [`009e5260`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e5/009e5260.md) → [`009e52b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e5/009e52b4.md) FUN_009e52b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a02be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a02/00a02be8.md) · 呼出先 11件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) [`009e2f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e2/009e2f94.md)
- 新版 呼出元 1件 [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 11件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`009e2fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e2fe8.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.42% / 新版 85.42%

優先判定に残った影響 `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e5360",
      "incomplete_value": true,
      "site": "009e5370",
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
                "const:2b5000:8"
              ],
              [
                "leaf",
                "const:5be:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e530c",
      "incomplete_value": true,
      "site": "009e531c",
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
                "const:2b5000:8"
              ],
              [
                "leaf",
                "const:58d:8"
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
      "definition_site": "009e5364",
      "incomplete_value": true,
      "site": "009e5374",
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
                "const:a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e5310",
      "incomplete_value": true,
      "site": "009e5320",
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
                "const:a:8"
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
      "definition_site": "009e5368",
      "incomplete_value": true,
      "site": "009e5378",
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e5314",
      "incomplete_value": true,
      "site": "009e5324",
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
                "const:a90:8"
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
      "009e5360",
      "READ",
      [
        "storage",
        "002b558d",
        null,
        "string"
      ]
    ],
    [
      "009e5364",
      "READ",
      [
        "storage",
        "002b5597",
        null,
        "string"
      ]
    ],
    [
      "009e5368",
      "READ",
      [
        "storage",
        "002c2a90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e5360",
      "READ",
      [
        "storage",
        "002b55be",
        null,
        "string"
      ]
    ],
    [
      "009e5364",
      "READ",
      [
        "storage",
        "002b55c8",
        null,
        "string"
      ]
    ],
    [
      "009e5368",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e5370 ["INT_ADD", "register:40f0:8", ["const:9e5370:8", "const:4:8"]]
- 009e5370 ["CALL", null, ["callee:008b98b0:8"]]
+ 009e53c4 ["INT_ADD", "register:40f0:8", ["const:9e53c4:8", "const:4:8"]]
+ 009e53c4 ["CALL", null, ["callee:008b98b0:8"]]
- 009e5424 ["INT_ADD", "register:40f0:8", ["const:9e5424:8", "const:4:8"]]
- 009e5424 ["CALL", null, ["callee:008b98b0:8"]]
+ 009e5478 ["INT_ADD", "register:40f0:8", ["const:9e5478:8", "const:4:8"]]
+ 009e5478 ["CALL", null, ["callee:008b98b0:8"]]
- 009e528c ["INT_ADD", "register:40f0:8", ["const:9e528c:8", "const:4:8"]]
- 009e528c ["CALL", null, ["callee:009e2fe8:8"]]
+ 009e52e0 ["INT_ADD", "register:40f0:8", ["const:9e52e0:8", "const:4:8"]]
+ 009e52e0 ["CALL", null, ["callee:009e2fe8:8"]]
~~~


<a id="compare-fec4c58df7e62d3f330bf3f5d0633fe6"></a>

### [`009e561c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e5/009e561c.md) → [`009e5670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e5/009e5670.md) FUN_009e5670

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00606ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00606/00606ae4.md) [`0061452c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00614/0061452c.md) · 呼出先 9件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) [`009e8c6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8c6c.md)
- 新版 呼出元 2件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) · 呼出先 9件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`009e8cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8cc0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.49% / 新版 86.49%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e56b8",
      "incomplete_value": true,
      "site": "009e56c8",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:d0b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e5664",
      "incomplete_value": true,
      "site": "009e5674",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:d67:8"
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
      "definition_site": "009e56bc",
      "incomplete_value": true,
      "site": "009e56cc",
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
                "const:a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e5668",
      "incomplete_value": true,
      "site": "009e5678",
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
                "const:a:8"
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
      "definition_site": "009e56c0",
      "incomplete_value": true,
      "site": "009e56d0",
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
                "const:ad0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e566c",
      "incomplete_value": true,
      "site": "009e567c",
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
                "const:a90:8"
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
      "009e56b8",
      "READ",
      [
        "storage",
        "002a5d67",
        null,
        "string"
      ]
    ],
    [
      "009e56bc",
      "READ",
      [
        "storage",
        "002a5d71",
        null,
        "string"
      ]
    ],
    [
      "009e56c0",
      "READ",
      [
        "storage",
        "002c2a90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e56b8",
      "READ",
      [
        "storage",
        "002a5d0b",
        null,
        "string"
      ]
    ],
    [
      "009e56bc",
      "READ",
      [
        "storage",
        "002a5d15",
        null,
        "string"
      ]
    ],
    [
      "009e56c0",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e56c8 ["INT_ADD", "register:40f0:8", ["const:9e56c8:8", "const:4:8"]]
- 009e56c8 ["CALL", null, ["callee:008b98b0:8"]]
+ 009e571c ["INT_ADD", "register:40f0:8", ["const:9e571c:8", "const:4:8"]]
+ 009e571c ["CALL", null, ["callee:008b98b0:8"]]
- 009e5648 ["INT_ADD", "register:40f0:8", ["const:9e5648:8", "const:4:8"]]
- 009e5648 ["CALL", null, ["callee:00851550:8"]]
+ 009e569c ["INT_ADD", "register:40f0:8", ["const:9e569c:8", "const:4:8"]]
+ 009e569c ["CALL", null, ["callee:00851550:8"]]
- 009e5654 ["INT_ADD", "register:40f0:8", ["const:9e5654:8", "const:4:8"]]
- 009e5654 ["CALL", null, ["callee:00c57f60:8"]]
+ 009e56a8 ["INT_ADD", "register:40f0:8", ["const:9e56a8:8", "const:4:8"]]
+ 009e56a8 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-b65a72e57cba8401f7755b2d1f9e8921"></a>

### [`009e64c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e64c0.md) → [`009e6514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6514.md) FUN_009e6514

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`009dec20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009de/009dec20.md) [`009dfe0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009df/009dfe0c.md) [`009e1278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e1/009e1278.md) [`009e33b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e3/009e33b8.md) [`009f92c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f9/009f92c8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 6件 [`009dec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009dec74.md) [`009dfe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfe60.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) [`009e340c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e340c.md) [`009f931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f931c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e6520",
      "incomplete_value": false,
      "site": "009e6524",
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
      "definition_site": "009e64cc",
      "incomplete_value": false,
      "site": "009e64d0",
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
      "009e6520",
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
      "009e6520",
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
- 009e64d0 ["INT_ADD", "register:40f0:8", ["const:9e64d0:8", "const:4:8"]]
- 009e64d0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009e6524 ["INT_ADD", "register:40f0:8", ["const:9e6524:8", "const:4:8"]]
+ 009e6524 ["CALL", null, ["callee:0043b7b8:8"]]
- 009e64cc ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009e64cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009e64cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009e64cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009e6520 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009e6520 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009e6520 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009e6520 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-acda1543dd496e541287ca70101bc172"></a>

### [`009e64d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e64d8.md) → [`009e652c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e652c.md) FUN_009e652c

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
      "definition_site": "009e6540",
      "incomplete_value": false,
      "site": "009e6544",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e64ec",
      "incomplete_value": false,
      "site": "009e64f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:c58:8"
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
      "009e6544",
      "DATA",
      [
        "storage",
        "00c89c58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e6544",
      "DATA",
      [
        "storage",
        "00c89d28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e64e4 ["INT_ADD", "register:40f0:8", ["const:9e64e4:8", "const:4:8"]]
- 009e64e4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009e6538 ["INT_ADD", "register:40f0:8", ["const:9e6538:8", "const:4:8"]]
+ 009e6538 ["CALL", null, ["callee:00c57f60:8"]]
- 009e64ec ["COPY", "tmp:0:8", ["const:c58:8"]]
- 009e64ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e64ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e64ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e6540 ["COPY", "tmp:0:8", ["const:d28:8"]]
+ 009e6540 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e6540 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e6540 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-541c2a8d37b51c2c5d40944f16b8a0b9"></a>

### [`009e64fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e64fc.md) → [`009e6550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6550.md) FUN_009e6550

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
      "definition_site": "009e6554",
      "incomplete_value": false,
      "site": "009e6558",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:d28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e6500",
      "incomplete_value": false,
      "site": "009e6504",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:c58:8"
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
      "009e6558",
      "DATA",
      [
        "storage",
        "00c89c58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e6558",
      "DATA",
      [
        "storage",
        "00c89d28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e6500 ["COPY", "tmp:0:8", ["const:c58:8"]]
- 009e6500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e6500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e6500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e6554 ["COPY", "tmp:0:8", ["const:d28:8"]]
+ 009e6554 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e6554 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e6554 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5e85a792543d1a503c1157e97d803d3a"></a>

### [`009e6774`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6774.md) → [`009e67c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e67c8.md) FUN_009e67c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009e6540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6540.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009e6594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6594.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e67d4",
      "incomplete_value": false,
      "site": "009e67d8",
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
      "definition_site": "009e6780",
      "incomplete_value": false,
      "site": "009e6784",
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
      "009e67d4",
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
      "009e67d4",
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
- 009e6784 ["INT_ADD", "register:40f0:8", ["const:9e6784:8", "const:4:8"]]
- 009e6784 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009e67d8 ["INT_ADD", "register:40f0:8", ["const:9e67d8:8", "const:4:8"]]
+ 009e67d8 ["CALL", null, ["callee:0043b7b8:8"]]
- 009e6780 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009e6780 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009e6780 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009e6780 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009e67d4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009e67d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009e67d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009e67d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-bf70728a73029692b57f2be819972e35"></a>

### [`009e6c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6c80.md) → [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) FUN_009e6cd4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009e30ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e3/009e30ec.md) [`009e6c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6c80.md) · 呼出先 7件 [`009e6c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6c80.md) [`009e7bb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e7/009e7bb0.md) [`009e7e40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e7/009e7e40.md) [`009e8124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8124.md) [`009e8458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8458.md)
- 新版 呼出元 2件 [`009e3140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3140.md) [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) · 呼出先 7件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) [`009e7c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7c04.md) [`009e7e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7e94.md) [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.07% / 新版 99.07%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e7438",
      "incomplete_value": false,
      "site": "009e7440",
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
      "definition_site": "009e73e4",
      "incomplete_value": false,
      "site": "009e73ec",
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
    "ordinal": 33,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009e6e88",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e6ea8",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e6eec",
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
      "009e6e88",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e6ea8",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e6eec",
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
- 009e73ec ["INT_ADD", "register:40f0:8", ["const:9e73ec:8", "const:4:8"]]
- 009e73ec ["CALL", null, ["callee:009e84ac:8"]]
+ 009e7440 ["INT_ADD", "register:40f0:8", ["const:9e7440:8", "const:4:8"]]
+ 009e7440 ["CALL", null, ["callee:009e84ac:8"]]
- 009e6cc4 ["COPY", "tmp:0:8", ["const:6f5:8"]]
- 009e6cc4 ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
- 009e6cc4 ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
- 009e6cc4 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
+ 009e6d18 ["COPY", "tmp:0:8", ["const:735:8"]]
+ 009e6d18 ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
+ 009e6d18 ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
+ 009e6d18 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
- 009e6d70 ["INT_ADD", "register:40f0:8", ["const:9e6d70:8", "const:4:8"]]
- 009e6d70 ["CALL", null, ["callee:009e7e94:8"]]
+ 009e6dc4 ["INT_ADD", "register:40f0:8", ["const:9e6dc4:8", "const:4:8"]]
+ 009e6dc4 ["CALL", null, ["callee:009e7e94:8"]]
~~~


<a id="compare-395bc56d3b5ab96ed6d24baaa92c0fe0"></a>

### [`009e7bb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e7/009e7bb0.md) → [`009e7c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7c04.md) FUN_009e7c04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009e6c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6c80.md) [`009e8124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8124.md) · 呼出先 3件 [`009e8458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8458.md) [`009e871c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e871c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) · 呼出先 3件 [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md) [`009e8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8770.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e7c68",
      "incomplete_value": false,
      "site": "009e7c70",
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
      "definition_site": "009e7c14",
      "incomplete_value": false,
      "site": "009e7c1c",
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e7cec",
      "incomplete_value": false,
      "site": "009e7cf4",
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
      "definition_site": "009e7c98",
      "incomplete_value": false,
      "site": "009e7ca0",
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
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e7d70",
      "incomplete_value": false,
      "site": "009e7d78",
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
      "definition_site": "009e7d1c",
      "incomplete_value": false,
      "site": "009e7d24",
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
      "009e7c68",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e7c88",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e7cec",
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
      "009e7c68",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e7c88",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e7cec",
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
- 009e7c1c ["INT_ADD", "register:40f0:8", ["const:9e7c1c:8", "const:4:8"]]
- 009e7c1c ["CALL", null, ["callee:009e84ac:8"]]
+ 009e7c70 ["INT_ADD", "register:40f0:8", ["const:9e7c70:8", "const:4:8"]]
+ 009e7c70 ["CALL", null, ["callee:009e84ac:8"]]
- 009e7ca0 ["INT_ADD", "register:40f0:8", ["const:9e7ca0:8", "const:4:8"]]
- 009e7ca0 ["CALL", null, ["callee:009e84ac:8"]]
+ 009e7cf4 ["INT_ADD", "register:40f0:8", ["const:9e7cf4:8", "const:4:8"]]
+ 009e7cf4 ["CALL", null, ["callee:009e84ac:8"]]
- 009e7d24 ["INT_ADD", "register:40f0:8", ["const:9e7d24:8", "const:4:8"]]
- 009e7d24 ["CALL", null, ["callee:009e84ac:8"]]
+ 009e7d78 ["INT_ADD", "register:40f0:8", ["const:9e7d78:8", "const:4:8"]]
+ 009e7d78 ["CALL", null, ["callee:009e84ac:8"]]
~~~


<a id="compare-78b5f9bd70dcac0022b36549abc007ba"></a>

### [`009e7e40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e7/009e7e40.md) → [`009e7e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7e94.md) FUN_009e7e94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009e6c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6c80.md) [`009e8124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8124.md) [`009e871c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e871c.md) · 呼出先 2件 [`009e8458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8458.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) [`009e8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8770.md) · 呼出先 2件 [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.76% / 新版 96.76%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e7ed0",
      "incomplete_value": false,
      "site": "009e7ee8",
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
      "definition_site": "009e7e7c",
      "incomplete_value": false,
      "site": "009e7e94",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e8024",
      "incomplete_value": false,
      "site": "009e802c",
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
      "definition_site": "009e7fd0",
      "incomplete_value": false,
      "site": "009e7fd8",
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
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e80d8",
      "incomplete_value": false,
      "site": "009e80e4",
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
      "definition_site": "009e8084",
      "incomplete_value": false,
      "site": "009e8090",
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
    "ordinal": 8,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009e7ed0",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e7f00",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e7f30",
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
      "009e7ed0",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e7f00",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e7f30",
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
- 009e7e94 ["INT_ADD", "register:40f0:8", ["const:9e7e94:8", "const:4:8"]]
- 009e7e94 ["CALL", null, ["callee:009e84ac:8"]]
+ 009e7ee8 ["INT_ADD", "register:40f0:8", ["const:9e7ee8:8", "const:4:8"]]
+ 009e7ee8 ["CALL", null, ["callee:009e84ac:8"]]
- 009e7fd8 ["INT_ADD", "register:40f0:8", ["const:9e7fd8:8", "const:4:8"]]
- 009e7fd8 ["CALL", null, ["callee:009e84ac:8"]]
+ 009e802c ["INT_ADD", "register:40f0:8", ["const:9e802c:8", "const:4:8"]]
+ 009e802c ["CALL", null, ["callee:009e84ac:8"]]
- 009e8090 ["INT_ADD", "register:40f0:8", ["const:9e8090:8", "const:4:8"]]
- 009e8090 ["CALL", null, ["callee:009e84ac:8"]]
+ 009e80e4 ["INT_ADD", "register:40f0:8", ["const:9e80e4:8", "const:4:8"]]
+ 009e80e4 ["CALL", null, ["callee:009e84ac:8"]]
~~~


<a id="compare-816c206a957193bbb3d31eb43fb5cc5e"></a>

### [`009e8124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8124.md) → [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) FUN_009e8178

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009e6c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6c80.md) · 呼出先 5件 [`009e7bb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e7/009e7bb0.md) [`009e7e40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e7/009e7e40.md) [`009e8458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8458.md) [`009e871c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e871c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) · 呼出先 5件 [`009e7c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7c04.md) [`009e7e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7e94.md) [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md) [`009e8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8770.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.54% / 新版 98.54%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e8244",
      "incomplete_value": false,
      "site": "009e8250",
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
      "definition_site": "009e81f0",
      "incomplete_value": false,
      "site": "009e81fc",
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
      "009e8244",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e8268",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e836c",
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
      "009e8244",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e8268",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e836c",
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
- 009e81fc ["INT_ADD", "register:40f0:8", ["const:9e81fc:8", "const:4:8"]]
- 009e81fc ["CALL", null, ["callee:009e84ac:8"]]
+ 009e8250 ["INT_ADD", "register:40f0:8", ["const:9e8250:8", "const:4:8"]]
+ 009e8250 ["CALL", null, ["callee:009e84ac:8"]]
- 009e81c0 ["INT_ADD", "register:40f0:8", ["const:9e81c0:8", "const:4:8"]]
- 009e81c0 ["CALL", null, ["callee:009e7c04:8"]]
+ 009e8214 ["INT_ADD", "register:40f0:8", ["const:9e8214:8", "const:4:8"]]
+ 009e8214 ["CALL", null, ["callee:009e7c04:8"]]
- 009e81e0 ["COPY", "tmp:0:8", ["const:6f5:8"]]
- 009e81e0 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 009e81e0 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 009e81e0 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
+ 009e8234 ["COPY", "tmp:0:8", ["const:735:8"]]
+ 009e8234 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
+ 009e8234 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
+ 009e8234 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
~~~


<a id="compare-afd95705a0b77b65276b8a57eb3f72e9"></a>

### [`009e871c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e871c.md) → [`009e8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8770.md) FUN_009e8770

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009e6c80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e6/009e6c80.md) [`009e7bb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e7/009e7bb0.md) [`009e8124`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8124.md) · 呼出先 3件 [`009e7e40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e7/009e7e40.md) [`009e8458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8458.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) [`009e7c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7c04.md) [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) · 呼出先 3件 [`009e7e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7e94.md) [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.09% / 新版 96.09%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e8850",
      "incomplete_value": false,
      "site": "009e8858",
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
      "definition_site": "009e87fc",
      "incomplete_value": false,
      "site": "009e8804",
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
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e88d4",
      "incomplete_value": false,
      "site": "009e88dc",
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
      "definition_site": "009e8880",
      "incomplete_value": false,
      "site": "009e8888",
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
      "009e87cc",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e87ec",
      "PARAM",
      [
        "storage",
        "002c86f5",
        null,
        null
      ]
    ],
    [
      "009e8850",
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
      "009e87cc",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e87ec",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e8850",
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
- 009e8804 ["INT_ADD", "register:40f0:8", ["const:9e8804:8", "const:4:8"]]
- 009e8804 ["CALL", null, ["callee:009e84ac:8"]]
+ 009e8858 ["INT_ADD", "register:40f0:8", ["const:9e8858:8", "const:4:8"]]
+ 009e8858 ["CALL", null, ["callee:009e84ac:8"]]
- 009e8888 ["INT_ADD", "register:40f0:8", ["const:9e8888:8", "const:4:8"]]
- 009e8888 ["CALL", null, ["callee:009e84ac:8"]]
+ 009e88dc ["INT_ADD", "register:40f0:8", ["const:9e88dc:8", "const:4:8"]]
+ 009e88dc ["CALL", null, ["callee:009e84ac:8"]]
- 009e875c ["INT_ADD", "register:40f0:8", ["const:9e875c:8", "const:4:8"]]
- 009e875c ["CALL", null, ["callee:009e7e94:8"]]
+ 009e87b0 ["INT_ADD", "register:40f0:8", ["const:9e87b0:8", "const:4:8"]]
+ 009e87b0 ["CALL", null, ["callee:009e7e94:8"]]
~~~


<a id="compare-78e7c698dbf3169468565b8cad52d31c"></a>

### [`009e8a44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8a44.md) → [`009e8a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8a98.md) FUN_009e8a98

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
      "definition_site": "009e8abc",
      "incomplete_value": false,
      "site": "009e8abc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e8a68",
      "incomplete_value": false,
      "site": "009e8a68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
      "009e8abc",
      "DATA",
      [
        "storage",
        "00c89cd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e8abc",
      "DATA",
      [
        "storage",
        "00c89da8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8a58 ["INT_ADD", "register:40f0:8", ["const:9e8a58:8", "const:4:8"]]
- 009e8a58 ["CALL", null, ["callee:00c57f60:8"]]
+ 009e8aac ["INT_ADD", "register:40f0:8", ["const:9e8aac:8", "const:4:8"]]
+ 009e8aac ["CALL", null, ["callee:00c57f60:8"]]
- 009e8a64 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 009e8a64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e8a64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e8a64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e8ab8 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 009e8ab8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e8ab8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e8ab8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bb35ab5cc47d2116e6b45cf09df919bf"></a>

### [`009e8a78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8a78.md) → [`009e8acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8acc.md) FUN_009e8acc

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
      "definition_site": "009e8ad8",
      "incomplete_value": false,
      "site": "009e8ad8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:da8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e8a84",
      "incomplete_value": false,
      "site": "009e8a84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:cd8:8"
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
      "009e8ad8",
      "DATA",
      [
        "storage",
        "00c89cd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e8ad8",
      "DATA",
      [
        "storage",
        "00c89da8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8a80 ["COPY", "tmp:0:8", ["const:cd8:8"]]
- 009e8a80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009e8a80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009e8a80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009e8ad4 ["COPY", "tmp:0:8", ["const:da8:8"]]
+ 009e8ad4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009e8ad4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009e8ad4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a3e6102a1959a0086d048e880423a6e2"></a>

### [`009e8a94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8a94.md) → [`009e8ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8ae8.md) FUN_009e8ae8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8b10",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8abc",
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
      "009e8b10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009e8b10",
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
- 009e8abc ["INT_ADD", "register:40f0:8", ["const:9e8abc:8", "const:4:8"]]
- 009e8abc ["CALL", null, ["ram:47acf4:8"]]
+ 009e8b10 ["INT_ADD", "register:40f0:8", ["const:9e8b10:8", "const:4:8"]]
+ 009e8b10 ["CALL", null, ["ram:47ad34:8"]]
- 009e8ac8 ["INT_ADD", "register:40f0:8", ["const:9e8ac8:8", "const:4:8"]]
- 009e8ac8 ["CALL", null, ["callee:0047ce14:8"]]
+ 009e8b1c ["INT_ADD", "register:40f0:8", ["const:9e8b1c:8", "const:4:8"]]
+ 009e8b1c ["CALL", null, ["callee:0047ce14:8"]]
- 009e8aec ["INT_ADD", "register:40f0:8", ["const:9e8aec:8", "const:4:8"]]
- 009e8aec ["CALL", null, ["callee:00851550:8"]]
+ 009e8b40 ["INT_ADD", "register:40f0:8", ["const:9e8b40:8", "const:4:8"]]
+ 009e8b40 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-f5885293f9aab2634a0371c069b26d00"></a>

### [`009e8b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8b34.md) → [`009e8b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8b88.md) FUN_009e8b88

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
      "definition_site": "009e8bac",
      "incomplete_value": false,
      "site": "009e8bac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:e28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e8b58",
      "incomplete_value": false,
      "site": "009e8b58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:d58:8"
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
      "009e8bac",
      "DATA",
      [
        "storage",
        "00c89d58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e8bac",
      "DATA",
      [
        "storage",
        "00c89e28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8b48 ["INT_ADD", "register:40f0:8", ["const:9e8b48:8", "const:4:8"]]
- 009e8b48 ["CALL", null, ["callee:00c57f60:8"]]
+ 009e8b9c ["INT_ADD", "register:40f0:8", ["const:9e8b9c:8", "const:4:8"]]
+ 009e8b9c ["CALL", null, ["callee:00c57f60:8"]]
- 009e8b54 ["COPY", "tmp:0:8", ["const:d58:8"]]
- 009e8b54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e8b54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e8b54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e8ba8 ["COPY", "tmp:0:8", ["const:e28:8"]]
+ 009e8ba8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e8ba8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e8ba8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ef3f887bcae2436b8ec77d95f1990abf"></a>

### [`009e8b68`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8b68.md) → [`009e8bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8bbc.md) FUN_009e8bbc

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
      "definition_site": "009e8bc8",
      "incomplete_value": false,
      "site": "009e8bc8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:e28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e8b74",
      "incomplete_value": false,
      "site": "009e8b74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:d58:8"
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
      "009e8bc8",
      "DATA",
      [
        "storage",
        "00c89d58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e8bc8",
      "DATA",
      [
        "storage",
        "00c89e28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8b70 ["COPY", "tmp:0:8", ["const:d58:8"]]
- 009e8b70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009e8b70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009e8b70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009e8bc4 ["COPY", "tmp:0:8", ["const:e28:8"]]
+ 009e8bc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009e8bc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009e8bc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5fffb412ea4fe54dd754222bd2b802f8"></a>

### [`009e8b84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8b84.md) → [`009e8bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8bd8.md) FUN_009e8bd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8c00",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8bac",
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
      "009e8c00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009e8c00",
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
- 009e8bac ["INT_ADD", "register:40f0:8", ["const:9e8bac:8", "const:4:8"]]
- 009e8bac ["CALL", null, ["ram:47acf4:8"]]
+ 009e8c00 ["INT_ADD", "register:40f0:8", ["const:9e8c00:8", "const:4:8"]]
+ 009e8c00 ["CALL", null, ["ram:47ad34:8"]]
- 009e8bb8 ["INT_ADD", "register:40f0:8", ["const:9e8bb8:8", "const:4:8"]]
- 009e8bb8 ["CALL", null, ["callee:0047ce14:8"]]
+ 009e8c0c ["INT_ADD", "register:40f0:8", ["const:9e8c0c:8", "const:4:8"]]
+ 009e8c0c ["CALL", null, ["callee:0047ce14:8"]]
- 009e8bdc ["INT_ADD", "register:40f0:8", ["const:9e8bdc:8", "const:4:8"]]
- 009e8bdc ["CALL", null, ["callee:00851550:8"]]
+ 009e8c30 ["INT_ADD", "register:40f0:8", ["const:9e8c30:8", "const:4:8"]]
+ 009e8c30 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-ee407da7c6c5586c3768f00915aea6c3"></a>

### [`009e8c24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8c24.md) → [`009e8c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8c78.md) FUN_009e8c78

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
      "definition_site": "009e8c9c",
      "incomplete_value": false,
      "site": "009e8c9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:ea8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e8c48",
      "incomplete_value": false,
      "site": "009e8c48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
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
      "009e8c9c",
      "DATA",
      [
        "storage",
        "00c89dd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e8c9c",
      "DATA",
      [
        "storage",
        "00c89ea8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8c38 ["INT_ADD", "register:40f0:8", ["const:9e8c38:8", "const:4:8"]]
- 009e8c38 ["CALL", null, ["callee:00c57f60:8"]]
+ 009e8c8c ["INT_ADD", "register:40f0:8", ["const:9e8c8c:8", "const:4:8"]]
+ 009e8c8c ["CALL", null, ["callee:00c57f60:8"]]
- 009e8c44 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 009e8c44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e8c44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e8c44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e8c98 ["COPY", "tmp:0:8", ["const:ea8:8"]]
+ 009e8c98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e8c98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e8c98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-30f53aa63a534fd495c6d7f2e557e21e"></a>

### [`009e8c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8c58.md) → [`009e8cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8cac.md) FUN_009e8cac

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
      "definition_site": "009e8cb8",
      "incomplete_value": false,
      "site": "009e8cb8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:ea8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e8c64",
      "incomplete_value": false,
      "site": "009e8c64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
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
      "009e8cb8",
      "DATA",
      [
        "storage",
        "00c89dd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e8cb8",
      "DATA",
      [
        "storage",
        "00c89ea8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8c60 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 009e8c60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009e8c60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009e8c60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009e8cb4 ["COPY", "tmp:0:8", ["const:ea8:8"]]
+ 009e8cb4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009e8cb4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009e8cb4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-413c1ff357c5caedd0dde63a9b20228f"></a>

### [`009e8c74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8c74.md) → [`009e8cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8cc8.md) FUN_009e8cc8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8cf0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8c9c",
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
      "009e8cf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009e8cf0",
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
- 009e8c9c ["INT_ADD", "register:40f0:8", ["const:9e8c9c:8", "const:4:8"]]
- 009e8c9c ["CALL", null, ["ram:47acf4:8"]]
+ 009e8cf0 ["INT_ADD", "register:40f0:8", ["const:9e8cf0:8", "const:4:8"]]
+ 009e8cf0 ["CALL", null, ["ram:47ad34:8"]]
- 009e8ca8 ["INT_ADD", "register:40f0:8", ["const:9e8ca8:8", "const:4:8"]]
- 009e8ca8 ["CALL", null, ["callee:0047ce14:8"]]
+ 009e8cfc ["INT_ADD", "register:40f0:8", ["const:9e8cfc:8", "const:4:8"]]
+ 009e8cfc ["CALL", null, ["callee:0047ce14:8"]]
- 009e8ccc ["INT_ADD", "register:40f0:8", ["const:9e8ccc:8", "const:4:8"]]
- 009e8ccc ["CALL", null, ["callee:00851550:8"]]
+ 009e8d20 ["INT_ADD", "register:40f0:8", ["const:9e8d20:8", "const:4:8"]]
+ 009e8d20 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-8344b044689b6f2c3148c9500baf065e"></a>

### [`009e8d10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e8/009e8d10.md) → [`009e8d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8d64.md) _INIT_204

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e8da0",
      "incomplete_value": true,
      "site": "009e8dbc",
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
      "definition_site": "009e8d4c",
      "incomplete_value": true,
      "site": "009e8d68",
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
      "definition_site": "009e8dc4",
      "incomplete_value": true,
      "site": "009e8de0",
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
      "definition_site": "009e8d70",
      "incomplete_value": true,
      "site": "009e8d8c",
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
      "definition_site": "009e8de4",
      "incomplete_value": true,
      "site": "009e8e00",
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
      "definition_site": "009e8d90",
      "incomplete_value": true,
      "site": "009e8dac",
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
      "009e8da0",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009e8dc4",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009e8de4",
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
      "009e8da0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009e8dc4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009e8de4",
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
- 009e8e04 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 009e8e04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009e8e04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009e8e04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009e8e58 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 009e8e58 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009e8e58 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009e8e58 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009e8e70 ["INT_ADD", "register:40f0:8", ["const:9e8e70:8", "const:4:8"]]
- 009e8e70 ["CALL", null, ["callee:0043b838:8"]]
+ 009e8ec4 ["INT_ADD", "register:40f0:8", ["const:9e8ec4:8", "const:4:8"]]
+ 009e8ec4 ["CALL", null, ["callee:0043b838:8"]]
- 009e8eac ["INT_ADD", "register:40f0:8", ["const:9e8eac:8", "const:4:8"]]
- 009e8eac ["CALL", null, ["callee:0043b838:8"]]
+ 009e8f00 ["INT_ADD", "register:40f0:8", ["const:9e8f00:8", "const:4:8"]]
+ 009e8f00 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-d91114bf9b190689ee36bf0e099d40ac"></a>

### [`009e90a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e9/009e90a0.md) → [`009e90f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e90f4.md) FUN_009e90f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009e9460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e9/009e9460.md) · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009e94b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e94b4.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.76% / 新版 91.76%

優先判定に残った影響 `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e915c",
      "incomplete_value": true,
      "site": "009e9168",
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
                "const:620:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e9108",
      "incomplete_value": true,
      "site": "009e9114",
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
                "const:5e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e9158",
      "incomplete_value": true,
      "site": "009e916c",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e9104",
      "incomplete_value": true,
      "site": "009e9118",
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
                "const:20:8"
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
      "definition_site": "009e9158",
      "incomplete_value": true,
      "site": "009e916c",
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
      "definition_site": "009e9104",
      "incomplete_value": true,
      "site": "009e9118",
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
      "009e9158",
      "READ",
      [
        "storage",
        "002a800c",
        null,
        "string"
      ]
    ],
    [
      "009e9158",
      "READ",
      [
        "storage",
        "002a801c",
        null,
        "string"
      ]
    ],
    [
      "009e915c",
      "READ",
      [
        "storage",
        "002c25e0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e9158",
      "READ",
      [
        "storage",
        "002a7fb0",
        null,
        "string"
      ]
    ],
    [
      "009e9158",
      "READ",
      [
        "storage",
        "002a7fc0",
        null,
        "string"
      ]
    ],
    [
      "009e915c",
      "READ",
      [
        "storage",
        "002c2620",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e9180 ["COPY", "register:0:8", ["register:4040:8"]]
- 009e9180 ["INT_ADD", "register:40f0:8", ["const:9e9180:8", "const:4:8"]]
- 009e9180 ["CALLIND", null, ["register:0:8"]]
+ 009e91d4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009e91d4 ["INT_ADD", "register:40f0:8", ["const:9e91d4:8", "const:4:8"]]
+ 009e91d4 ["CALLIND", null, ["register:0:8"]]
- 009e929c ["INT_ADD", "register:40f0:8", ["const:9e929c:8", "const:4:8"]]
- 009e929c ["CALL", null, ["callee:004410cc:8"]]
+ 009e92f0 ["INT_ADD", "register:40f0:8", ["const:9e92f0:8", "const:4:8"]]
+ 009e92f0 ["CALL", null, ["callee:004410cc:8"]]
- 009e90f4 ["INT_ADD", "register:40f0:8", ["const:9e90f4:8", "const:4:8"]]
- 009e90f4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009e9148 ["INT_ADD", "register:40f0:8", ["const:9e9148:8", "const:4:8"]]
+ 009e9148 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-24d6972c01a24aafca3b496b19335cf5"></a>

### [`009e9460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e9/009e9460.md) → [`009e94b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e94b4.md) FUN_009e94b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef8e0.md) · 呼出先 19件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md)
- 新版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 88.05% / 新版 88.05%

優先判定に残った影響 `store_destination` 1件, `store_value` 13件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e94f8",
      "incomplete_value": false,
      "site": "009e94fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e94a4",
      "incomplete_value": false,
      "site": "009e94a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009e9514",
      "incomplete_value": true,
      "site": "009e9524",
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
                "const:7d7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e94c0",
      "incomplete_value": true,
      "site": "009e94d0",
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
                "const:824:8"
              ]
            ]
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
      "definition_site": "009e9518",
      "incomplete_value": true,
      "site": "009e9528",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "009e94c4",
      "incomplete_value": true,
      "site": "009e94d4",
      "value": [
        "LOAD",
        "8",
        [
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
      "009e94fc",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009e9514",
      "READ",
      [
        "storage",
        "002a0824",
        null,
        "string"
      ]
    ],
    [
      "009e9518",
      "READ",
      [
        "storage",
        "002a0834",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009e94fc",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009e9514",
      "READ",
      [
        "storage",
        "002a07d7",
        null,
        "string"
      ]
    ],
    [
      "009e9518",
      "READ",
      [
        "storage",
        "002a07e7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e952c ["INT_ADD", "register:40f0:8", ["const:9e952c:8", "const:4:8"]]
- 009e952c ["CALL", null, ["callee:00596f6c:8"]]
+ 009e9580 ["INT_ADD", "register:40f0:8", ["const:9e9580:8", "const:4:8"]]
+ 009e9580 ["CALL", null, ["callee:00596f6c:8"]]
- 009e9808 ["COPY", "tmp:0:8", ["const:75d:8"]]
- 009e9808 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e9808 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e9808 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e985c ["COPY", "tmp:0:8", ["const:710:8"]]
+ 009e985c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e985c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e985c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009e949c ["INT_ADD", "register:40f0:8", ["const:9e949c:8", "const:4:8"]]
- 009e949c ["CALL", null, ["callee:00487e60:8"]]
+ 009e94f0 ["INT_ADD", "register:40f0:8", ["const:9e94f0:8", "const:4:8"]]
+ 009e94f0 ["CALL", null, ["callee:00487e60:8"]]
~~~


<a id="compare-174fd0de7316e352978303d5079dbe1e"></a>

### [`009e9a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e9/009e9a74.md) → [`009e9ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e9ac8.md) FUN_009e9ac8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef8e0.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 86.79% / 新版 86.79%

優先判定に残った影響 `store_destination` 1件, `store_value` 17件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e9b0c",
      "incomplete_value": false,
      "site": "009e9b10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e9ab8",
      "incomplete_value": false,
      "site": "009e9abc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009e9b2c",
      "incomplete_value": true,
      "site": "009e9b34",
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
                "const:7c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e9ad8",
      "incomplete_value": true,
      "site": "009e9ae0",
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
                "const:780:8"
              ]
            ]
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
      "definition_site": "009e9b28",
      "incomplete_value": true,
      "site": "009e9b38",
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
                "const:2a4000:8"
              ],
              [
                "leaf",
                "const:ab3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e9ad4",
      "incomplete_value": true,
      "site": "009e9ae4",
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
                "const:2a4000:8"
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
      "009e9b10",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009e9b28",
      "READ",
      [
        "storage",
        "002a4b00",
        null,
        "string"
      ]
    ],
    [
      "009e9b28",
      "READ",
      [
        "storage",
        "002a4b10",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009e9b10",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009e9b28",
      "READ",
      [
        "storage",
        "002a4ab3",
        null,
        "string"
      ]
    ],
    [
      "009e9b28",
      "READ",
      [
        "storage",
        "002a4ac3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e9b10 ["INT_ADD", "register:40f0:8", ["const:9e9b10:8", "const:4:8"]]
- 009e9b10 ["CALL", null, ["callee:00c57f80:8"]]
+ 009e9b64 ["INT_ADD", "register:40f0:8", ["const:9e9b64:8", "const:4:8"]]
+ 009e9b64 ["CALL", null, ["callee:00c57f80:8"]]
- 009e9b38 ["INT_ADD", "register:40f0:8", ["const:9e9b38:8", "const:4:8"]]
- 009e9b38 ["CALL", null, ["callee:00596f6c:8"]]
+ 009e9b8c ["INT_ADD", "register:40f0:8", ["const:9e9b8c:8", "const:4:8"]]
+ 009e9b8c ["CALL", null, ["callee:00596f6c:8"]]
- 009e9d30 ["INT_ADD", "register:40f0:8", ["const:9e9d30:8", "const:4:8"]]
- 009e9d30 ["CALL", null, ["callee:00c57f60:8"]]
+ 009e9d84 ["INT_ADD", "register:40f0:8", ["const:9e9d84:8", "const:4:8"]]
+ 009e9d84 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-fc2fc6502d197814af1fd9d518a01864"></a>

### [`009e9f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e9/009e9f80.md) → [`009e9fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e9fd4.md) FUN_009e9fd4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009e9a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e9/009e9a74.md) · 呼出先 5件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009e9ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e9ac8.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.27% / 新版 93.27%

優先判定に残った影響 `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea038",
      "incomplete_value": true,
      "site": "009ea040",
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
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e9fe4",
      "incomplete_value": true,
      "site": "009e9fec",
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
                "const:b0:8"
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
      "definition_site": "009ea034",
      "incomplete_value": true,
      "site": "009ea044",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009e9fe0",
      "incomplete_value": true,
      "site": "009e9ff0",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea034",
      "incomplete_value": true,
      "site": "009ea044",
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
      "definition_site": "009e9fe0",
      "incomplete_value": true,
      "site": "009e9ff0",
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
    "ordinal": 14,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ea034",
      "READ",
      [
        "storage",
        "002be12f",
        null,
        "string"
      ]
    ],
    [
      "009ea034",
      "READ",
      [
        "storage",
        "002be13f",
        null,
        "string"
      ]
    ],
    [
      "009ea038",
      "READ",
      [
        "storage",
        "002c30b0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009ea034",
      "READ",
      [
        "storage",
        "002be0db",
        null,
        "string"
      ]
    ],
    [
      "009ea034",
      "READ",
      [
        "storage",
        "002be0eb",
        null,
        "string"
      ]
    ],
    [
      "009ea038",
      "READ",
      [
        "storage",
        "002c30f0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009ea10c ["INT_ADD", "register:40f0:8", ["const:9ea10c:8", "const:4:8"]]
- 009ea10c ["CALL", null, ["callee:004410cc:8"]]
+ 009ea160 ["INT_ADD", "register:40f0:8", ["const:9ea160:8", "const:4:8"]]
+ 009ea160 ["CALL", null, ["callee:004410cc:8"]]
- 009e9fd0 ["INT_ADD", "register:40f0:8", ["const:9e9fd0:8", "const:4:8"]]
- 009e9fd0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009ea024 ["INT_ADD", "register:40f0:8", ["const:9ea024:8", "const:4:8"]]
+ 009ea024 ["CALL", null, ["callee:00c57f60:8"]]
- 009e9fd8 ["COPY", "tmp:0:8", ["const:10f:8"]]
- 009e9fd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e9fd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e9fd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ea02c ["COPY", "tmp:0:8", ["const:bb:8"]]
+ 009ea02c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ea02c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ea02c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a919793288d8049b00ac4db8f7030fb7"></a>

### [`009ea364`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ea/009ea364.md) → [`009ea3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ea/009ea3b8.md) FUN_009ea3b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ea974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ea/009ea974.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md)
- 新版 呼出元 1件 [`009ea9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ea/009ea9c8.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea42c",
      "incomplete_value": true,
      "site": "009ea434",
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
                "const:f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ea3d8",
      "incomplete_value": true,
      "site": "009ea3e0",
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
                "const:b0:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea428",
      "incomplete_value": true,
      "site": "009ea438",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ea3d4",
      "incomplete_value": true,
      "site": "009ea3e4",
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
                "const:20:8"
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
      "definition_site": "009ea428",
      "incomplete_value": true,
      "site": "009ea438",
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
      "definition_site": "009ea3d4",
      "incomplete_value": true,
      "site": "009ea3e4",
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
    "ordinal": 19,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ea3e8",
      "READ",
      [
        "storage",
        "002a933d",
        null,
        "string"
      ]
    ],
    [
      "009ea428",
      "READ",
      [
        "storage",
        "002b4328",
        null,
        "string"
      ]
    ],
    [
      "009ea428",
      "READ",
      [
        "storage",
        "002b4338",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ea3e8",
      "READ",
      [
        "storage",
        "002a936c",
        null,
        "string"
      ]
    ],
    [
      "009ea428",
      "READ",
      [
        "storage",
        "002b4359",
        null,
        "string"
      ]
    ],
    [
      "009ea428",
      "READ",
      [
        "storage",
        "002b4369",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ea38c ["COPY", "tmp:0:8", ["const:33d:8"]]
- 009ea38c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009ea38c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009ea38c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009ea3e0 ["COPY", "tmp:0:8", ["const:36c:8"]]
+ 009ea3e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009ea3e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009ea3e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009ea668 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ea668 ["INT_ADD", "register:40f0:8", ["const:9ea668:8", "const:4:8"]]
- 009ea668 ["CALLIND", null, ["register:0:8"]]
+ 009ea6bc ["COPY", "register:0:8", ["register:4040:8"]]
+ 009ea6bc ["INT_ADD", "register:40f0:8", ["const:9ea6bc:8", "const:4:8"]]
+ 009ea6bc ["CALLIND", null, ["register:0:8"]]
- 009ea3c4 ["INT_ADD", "register:40f0:8", ["const:9ea3c4:8", "const:4:8"]]
- 009ea3c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009ea418 ["INT_ADD", "register:40f0:8", ["const:9ea418:8", "const:4:8"]]
+ 009ea418 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-270f827f93ccddcbb157972cfe15ea1e"></a>

### [`009ea974`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ea/009ea974.md) → [`009ea9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ea/009ea9c8.md) FUN_009ea9c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef8e0.md) · 呼出先 19件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md)
- 新版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.86% / 新版 88.86%

優先判定に残った影響 `store_value` 17件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009eaa0c",
      "incomplete_value": false,
      "site": "009eaa10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ea9b8",
      "incomplete_value": false,
      "site": "009ea9bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009eaa28",
      "incomplete_value": true,
      "site": "009eaa38",
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
                "const:7f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ea9d4",
      "incomplete_value": true,
      "site": "009ea9e4",
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
                "const:83d:8"
              ]
            ]
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
      "definition_site": "009eaa2c",
      "incomplete_value": true,
      "site": "009eaa3c",
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
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ea9d8",
      "incomplete_value": true,
      "site": "009ea9e8",
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
                "const:c:8"
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
      "009eaa10",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009eaa28",
      "READ",
      [
        "storage",
        "002a083d",
        null,
        "string"
      ]
    ],
    [
      "009eaa2c",
      "READ",
      [
        "storage",
        "002a0849",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009eaa10",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009eaa28",
      "READ",
      [
        "storage",
        "002a07f0",
        null,
        "string"
      ]
    ],
    [
      "009eaa2c",
      "READ",
      [
        "storage",
        "002a07fc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009eaa38 ["INT_ADD", "register:40f0:8", ["const:9eaa38:8", "const:4:8"]]
- 009eaa38 ["CALL", null, ["callee:00597648:8"]]
+ 009eaa8c ["INT_ADD", "register:40f0:8", ["const:9eaa8c:8", "const:4:8"]]
+ 009eaa8c ["CALL", null, ["callee:00597648:8"]]
- 009eacfc ["COPY", "register:0:8", ["register:4048:8"]]
- 009eacfc ["INT_ADD", "register:40f0:8", ["const:9eacfc:8", "const:4:8"]]
- 009eacfc ["CALLIND", null, ["register:0:8"]]
+ 009ead50 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009ead50 ["INT_ADD", "register:40f0:8", ["const:9ead50:8", "const:4:8"]]
+ 009ead50 ["CALLIND", null, ["register:0:8"]]
- 009ead1c ["COPY", "register:4040:8", ["const:2af000:8"]]
+ 009ead70 ["COPY", "register:4040:8", ["const:2ae000:8"]]
~~~


<a id="compare-6f57ae9ddcd490fff005cb376dd67ac2"></a>

### [`009eaf84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ea/009eaf84.md) → [`009eafd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ea/009eafd8.md) FUN_009eafd8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ec250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ec/009ec250.md) · 呼出先 15件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009e93d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e9/009e93d8.md)
- 新版 呼出元 1件 [`009ec2a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec2a4.md) · 呼出先 15件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009e942c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e942c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.06% / 新版 88.06%

優先判定に残った影響 `call_argument_candidate` 17件, `store_value` 45件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eb048",
      "incomplete_value": true,
      "site": "009eb054",
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
                "const:60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009eaff4",
      "incomplete_value": true,
      "site": "009eb000",
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
                "const:20:8"
              ]
            ]
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
      "definition_site": "009eb044",
      "incomplete_value": true,
      "site": "009eb058",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009eaff0",
      "incomplete_value": true,
      "site": "009eb004",
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
                "const:20:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eb044",
      "incomplete_value": true,
      "site": "009eb058",
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
      "definition_site": "009eaff0",
      "incomplete_value": true,
      "site": "009eb004",
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
    "ordinal": 18,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009eb044",
      "READ",
      [
        "storage",
        "002b4386",
        null,
        "string"
      ]
    ],
    [
      "009eb044",
      "READ",
      [
        "storage",
        "002b4396",
        null,
        "string"
      ]
    ],
    [
      "009eb048",
      "READ",
      [
        "storage",
        "002c3020",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009eb044",
      "READ",
      [
        "storage",
        "002b43b7",
        null,
        "string"
      ]
    ],
    [
      "009eb044",
      "READ",
      [
        "storage",
        "002b43c7",
        null,
        "string"
      ]
    ],
    [
      "009eb048",
      "READ",
      [
        "storage",
        "002c3060",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009eb06c ["COPY", "register:0:8", ["register:4040:8"]]
- 009eb06c ["INT_ADD", "register:40f0:8", ["const:9eb06c:8", "const:4:8"]]
- 009eb06c ["CALLIND", null, ["register:0:8"]]
+ 009eb0c0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009eb0c0 ["INT_ADD", "register:40f0:8", ["const:9eb0c0:8", "const:4:8"]]
+ 009eb0c0 ["CALLIND", null, ["register:0:8"]]
- 009eb0c8 ["INT_ADD", "register:40f0:8", ["const:9eb0c8:8", "const:4:8"]]
- 009eb0c8 ["CALL", null, ["callee:004410cc:8"]]
+ 009eb11c ["INT_ADD", "register:40f0:8", ["const:9eb11c:8", "const:4:8"]]
+ 009eb11c ["CALL", null, ["callee:004410cc:8"]]
- 009eb0fc ["INT_ADD", "register:40f0:8", ["const:9eb0fc:8", "const:4:8"]]
- 009eb0fc ["CALL", null, ["callee:00c57f80:8"]]
+ 009eb150 ["INT_ADD", "register:40f0:8", ["const:9eb150:8", "const:4:8"]]
+ 009eb150 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-b7e68db277e86bd457a5409dd76df3fd"></a>

### [`009ec898`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ec/009ec898.md) → [`009ec8ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec8ec.md) FUN_009ec8ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ec908",
      "incomplete_value": false,
      "site": "009ec90c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ec8b4",
      "incomplete_value": false,
      "site": "009ec8b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:fb0:8"
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
      "009ec90c",
      "DATA",
      [
        "storage",
        "00c89fb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ec90c",
      "DATA",
      [
        "storage",
        "00c8a080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ec90c ["INT_ADD", "register:40f0:8", ["const:9ec90c:8", "const:4:8"]]
- 009ec90c ["CALL", null, ["callee:00c57f50:8"]]
+ 009ec960 ["INT_ADD", "register:40f0:8", ["const:9ec960:8", "const:4:8"]]
+ 009ec960 ["CALL", null, ["callee:00c57f50:8"]]
- 009ec8b0 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009ec904 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009ec8b4 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 009ec8b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ec8b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ec8b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ec908 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 009ec908 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ec908 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ec908 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-89c23661c0e4a0439e9db244ae405cf2"></a>

### [`009ec95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ec/009ec95c.md) → [`009ec9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec9b0.md) FUN_009ec9b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef8e0.md) · 呼出先 18件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 85.61% / 新版 85.61%

優先判定に残った影響 `call_target` 1件, `store_destination` 1件, `store_value` 15件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ec9f0",
      "incomplete_value": false,
      "site": "009ec9f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ec99c",
      "incomplete_value": false,
      "site": "009ec9a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009eca0c",
      "incomplete_value": true,
      "site": "009eca1c",
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
                "const:b26:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ec9b8",
      "incomplete_value": true,
      "site": "009ec9c8",
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
                "const:b7a:8"
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
      "definition_site": "009ecab8",
      "incomplete_value": true,
      "site": "009ecac0",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009eca64",
      "incomplete_value": true,
      "site": "009eca6c",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ec9f4",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009eca0c",
      "READ",
      [
        "storage",
        "002bbb7a",
        null,
        "string"
      ]
    ],
    [
      "009eca10",
      "READ",
      [
        "storage",
        "002bbb89",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ec9f4",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009eca0c",
      "READ",
      [
        "storage",
        "002bbb26",
        null,
        "string"
      ]
    ],
    [
      "009eca10",
      "READ",
      [
        "storage",
        "002bbb35",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009eca18 ["INT_ADD", "register:40f0:8", ["const:9eca18:8", "const:4:8"]]
- 009eca18 ["CALL", null, ["callee:00597648:8"]]
+ 009eca6c ["INT_ADD", "register:40f0:8", ["const:9eca6c:8", "const:4:8"]]
+ 009eca6c ["CALL", null, ["callee:00597648:8"]]
- 009eca28 ["INT_ADD", "register:40f0:8", ["const:9eca28:8", "const:4:8"]]
- 009eca28 ["CALL", null, ["callee:00c57f60:8"]]
+ 009eca7c ["INT_ADD", "register:40f0:8", ["const:9eca7c:8", "const:4:8"]]
+ 009eca7c ["CALL", null, ["callee:00c57f60:8"]]
- 009eca34 ["INT_ADD", "register:40f0:8", ["const:9eca34:8", "const:4:8"]]
- 009eca34 ["CALL", null, ["callee:009f32f8:8"]]
+ 009eca88 ["INT_ADD", "register:40f0:8", ["const:9eca88:8", "const:4:8"]]
+ 009eca88 ["CALL", null, ["callee:009f32f8:8"]]
~~~


<a id="compare-845dd4ffe84c72b1642ce8a856def8d6"></a>

### [`009ed118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ed/009ed118.md) → [`009ed16c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009ed16c.md) FUN_009ed16c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ed5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ed/009ed5b8.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009f35fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f35fc.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009ed60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009ed60c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f3650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3650.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.04% / 新版 90.04%

優先判定に残った影響 `store_value` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ed1c4",
      "incomplete_value": true,
      "site": "009ed1c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:760:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ed170",
      "incomplete_value": true,
      "site": "009ed170",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7ad:8"
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
      "definition_site": "009ed1e0",
      "incomplete_value": true,
      "site": "009ed1f4",
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
                "const:2c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ed18c",
      "incomplete_value": true,
      "site": "009ed1a0",
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
                "const:280:8"
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
      "definition_site": "009ed1ec",
      "incomplete_value": true,
      "site": "009ed1fc",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ed198",
      "incomplete_value": true,
      "site": "009ed1a8",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ed19c",
      "READ",
      [
        "storage",
        "002a17ad",
        null,
        "string"
      ]
    ],
    [
      "009ed1e0",
      "READ",
      [
        "storage",
        "002c2280",
        null,
        null
      ]
    ],
    [
      "009ed1ec",
      "READ",
      [
        "storage",
        "002abd87",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ed19c",
      "READ",
      [
        "storage",
        "002a1760",
        null,
        "string"
      ]
    ],
    [
      "009ed1e0",
      "READ",
      [
        "storage",
        "002c22c0",
        null,
        null
      ]
    ],
    [
      "009ed1ec",
      "READ",
      [
        "storage",
        "002abd2b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ed1c4 ["INT_ADD", "register:40f0:8", ["const:9ed1c4:8", "const:4:8"]]
- 009ed1c4 ["CALL", null, ["callee:004410cc:8"]]
+ 009ed218 ["INT_ADD", "register:40f0:8", ["const:9ed218:8", "const:4:8"]]
+ 009ed218 ["CALL", null, ["callee:004410cc:8"]]
- 009ed260 ["INT_ADD", "register:40f0:8", ["const:9ed260:8", "const:4:8"]]
- 009ed260 ["CALL", null, ["callee:004410cc:8"]]
+ 009ed2b4 ["INT_ADD", "register:40f0:8", ["const:9ed2b4:8", "const:4:8"]]
+ 009ed2b4 ["CALL", null, ["callee:004410cc:8"]]
- 009ed30c ["INT_ADD", "register:40f0:8", ["const:9ed30c:8", "const:4:8"]]
- 009ed30c ["CALL", null, ["callee:004410cc:8"]]
+ 009ed360 ["INT_ADD", "register:40f0:8", ["const:9ed360:8", "const:4:8"]]
+ 009ed360 ["CALL", null, ["callee:004410cc:8"]]
~~~


<a id="compare-515168db225b9afb0291d175d76f99a5"></a>

### [`009ed5b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ed/009ed5b8.md) → [`009ed60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009ed60c.md) FUN_009ed60c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef8e0.md) · 呼出先 19件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 19件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 83.11% / 新版 83.11%

優先判定に残った影響 `store_destination` 1件, `store_value` 22件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ed648",
      "incomplete_value": false,
      "site": "009ed64c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ed5f4",
      "incomplete_value": false,
      "site": "009ed5f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009ed664",
      "incomplete_value": true,
      "site": "009ed674",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:9af:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ed610",
      "incomplete_value": true,
      "site": "009ed620",
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
                "const:2b6000:8"
              ],
              [
                "leaf",
                "const:96f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ed668",
      "incomplete_value": true,
      "site": "009ed678",
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ed614",
      "incomplete_value": true,
      "site": "009ed624",
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
                "const:f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ed64c",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009ed664",
      "READ",
      [
        "storage",
        "002b696f",
        null,
        "string"
      ]
    ],
    [
      "009ed668",
      "READ",
      [
        "storage",
        "002b697e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ed64c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ed664",
      "READ",
      [
        "storage",
        "002b69af",
        null,
        "string"
      ]
    ],
    [
      "009ed668",
      "READ",
      [
        "storage",
        "002b69be",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ed67c ["INT_ADD", "register:40f0:8", ["const:9ed67c:8", "const:4:8"]]
- 009ed67c ["CALL", null, ["callee:00596f6c:8"]]
+ 009ed6d0 ["INT_ADD", "register:40f0:8", ["const:9ed6d0:8", "const:4:8"]]
+ 009ed6d0 ["CALL", null, ["callee:00596f6c:8"]]
- 009ed86c ["INT_ADD", "register:40f0:8", ["const:9ed86c:8", "const:4:8"]]
- 009ed86c ["CALL", null, ["callee:00c57f60:8"]]
+ 009ed8c0 ["INT_ADD", "register:40f0:8", ["const:9ed8c0:8", "const:4:8"]]
+ 009ed8c0 ["CALL", null, ["callee:00c57f60:8"]]
- 009ed8e0 ["COPY", "tmp:0:8", ["const:85a:8"]]
- 009ed8e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ed8e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ed8e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ed934 ["COPY", "tmp:0:8", ["const:80d:8"]]
+ 009ed934 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ed934 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ed934 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ef7811af5060e924f1385ebe21bdaa4d"></a>

### [`009edb3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ed/009edb3c.md) → [`009edb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009edb90.md) FUN_009edb90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009edefc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ed/009edefc.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009f2de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2de4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009edf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009edf50.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.59% / 新版 91.59%

優先判定に残った影響 `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009edbe8",
      "incomplete_value": true,
      "site": "009edbe8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:39f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009edb94",
      "incomplete_value": true,
      "site": "009edb94",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:3fb:8"
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
      "definition_site": "009edc08",
      "incomplete_value": true,
      "site": "009edc14",
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
                "const:800:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009edbb4",
      "incomplete_value": true,
      "site": "009edbc0",
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
                "const:7c0:8"
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
      "definition_site": "009edc04",
      "incomplete_value": true,
      "site": "009edc18",
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009edbb0",
      "incomplete_value": true,
      "site": "009edbc4",
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009edbc0",
      "READ",
      [
        "storage",
        "002aa3fb",
        null,
        "string"
      ]
    ],
    [
      "009edc04",
      "READ",
      [
        "storage",
        "002b55e8",
        null,
        "string"
      ]
    ],
    [
      "009edc04",
      "READ",
      [
        "storage",
        "002b55f8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009edbc0",
      "READ",
      [
        "storage",
        "002aa39f",
        null,
        "string"
      ]
    ],
    [
      "009edc04",
      "READ",
      [
        "storage",
        "002b5619",
        null,
        "string"
      ]
    ],
    [
      "009edc04",
      "READ",
      [
        "storage",
        "002b5629",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009edbe8 ["INT_ADD", "register:40f0:8", ["const:9edbe8:8", "const:4:8"]]
- 009edbe8 ["CALL", null, ["callee:004410cc:8"]]
+ 009edc3c ["INT_ADD", "register:40f0:8", ["const:9edc3c:8", "const:4:8"]]
+ 009edc3c ["CALL", null, ["callee:004410cc:8"]]
- 009edb64 ["COPY", "tmp:0:8", ["const:3fb:8"]]
- 009edb64 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009edb64 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009edb64 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009edbb8 ["COPY", "tmp:0:8", ["const:39f:8"]]
+ 009edbb8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009edbb8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009edbb8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 009edba0 ["INT_ADD", "register:40f0:8", ["const:9edba0:8", "const:4:8"]]
- 009edba0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009edbf4 ["INT_ADD", "register:40f0:8", ["const:9edbf4:8", "const:4:8"]]
+ 009edbf4 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-8975f6ed778e7b4d1d5641cd7034b802"></a>

### [`009ee334`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ee/009ee334.md) → [`009ee388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ee/009ee388.md) FUN_009ee388

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef8e0.md) · 呼出先 20件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md)
- 新版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.97% / 新版 89.97%

優先判定に残った影響 `store_value` 16件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ee3cc",
      "incomplete_value": false,
      "site": "009ee3d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ee378",
      "incomplete_value": false,
      "site": "009ee37c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009ee3ec",
      "incomplete_value": true,
      "site": "009ee3fc",
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
      "definition_site": "009ee398",
      "incomplete_value": true,
      "site": "009ee3a8",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ee3e8",
      "incomplete_value": true,
      "site": "009ee400",
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
                "const:2ba000:8"
              ],
              [
                "leaf",
                "const:abc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ee394",
      "incomplete_value": true,
      "site": "009ee3ac",
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
                "const:2ba000:8"
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
    "ordinal": 18,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ee3d0",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009ee3e8",
      "READ",
      [
        "storage",
        "002bab10",
        null,
        "string"
      ]
    ],
    [
      "009ee3e8",
      "READ",
      [
        "storage",
        "002bab20",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ee3d0",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ee3e8",
      "READ",
      [
        "storage",
        "002baabc",
        null,
        "string"
      ]
    ],
    [
      "009ee3e8",
      "READ",
      [
        "storage",
        "002baacc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ee400 ["INT_ADD", "register:40f0:8", ["const:9ee400:8", "const:4:8"]]
- 009ee400 ["CALL", null, ["callee:00596f6c:8"]]
+ 009ee454 ["INT_ADD", "register:40f0:8", ["const:9ee454:8", "const:4:8"]]
+ 009ee454 ["CALL", null, ["callee:00596f6c:8"]]
- 009ee6d0 ["COPY", "register:0:8", ["register:4048:8"]]
- 009ee6d0 ["INT_ADD", "register:40f0:8", ["const:9ee6d0:8", "const:4:8"]]
- 009ee6d0 ["CALLIND", null, ["register:0:8"]]
+ 009ee724 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009ee724 ["INT_ADD", "register:40f0:8", ["const:9ee724:8", "const:4:8"]]
+ 009ee724 ["CALLIND", null, ["register:0:8"]]
- 009ee6f4 ["COPY", "tmp:0:8", ["const:73a:8"]]
- 009ee6f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ee6f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ee6f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ee748 ["COPY", "tmp:0:8", ["const:6ed:8"]]
+ 009ee748 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ee748 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ee748 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e4e7217b1c7ab38eb04d9b7dcf86bfd2"></a>

### [`009ee970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ee/009ee970.md) → [`009ee9c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ee/009ee9c4.md) FUN_009ee9c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009eecb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ee/009eecb0.md) · 呼出先 8件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009f2de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2de4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009eed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ee/009eed04.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.72% / 新版 95.72%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eea1c",
      "incomplete_value": true,
      "site": "009eea1c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:39f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ee9c8",
      "incomplete_value": true,
      "site": "009ee9c8",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:3fb:8"
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
      "009ee9f4",
      "READ",
      [
        "storage",
        "002aa3fb",
        null,
        "string"
      ]
    ],
    [
      "009eea38",
      "READ",
      [
        "storage",
        "002b55e8",
        null,
        "string"
      ]
    ],
    [
      "009eea38",
      "READ",
      [
        "storage",
        "002b55f8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ee9f4",
      "READ",
      [
        "storage",
        "002aa39f",
        null,
        "string"
      ]
    ],
    [
      "009eea38",
      "READ",
      [
        "storage",
        "002b5619",
        null,
        "string"
      ]
    ],
    [
      "009eea38",
      "READ",
      [
        "storage",
        "002b5629",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009eea1c ["INT_ADD", "register:40f0:8", ["const:9eea1c:8", "const:4:8"]]
- 009eea1c ["CALL", null, ["callee:004410cc:8"]]
+ 009eea70 ["INT_ADD", "register:40f0:8", ["const:9eea70:8", "const:4:8"]]
+ 009eea70 ["CALL", null, ["callee:004410cc:8"]]
- 009ee998 ["COPY", "tmp:0:8", ["const:3fb:8"]]
- 009ee998 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009ee998 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009ee998 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009ee9ec ["COPY", "tmp:0:8", ["const:39f:8"]]
+ 009ee9ec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009ee9ec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009ee9ec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 009ee9d4 ["INT_ADD", "register:40f0:8", ["const:9ee9d4:8", "const:4:8"]]
- 009ee9d4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009eea28 ["INT_ADD", "register:40f0:8", ["const:9eea28:8", "const:4:8"]]
+ 009eea28 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-6fc44b4cfa80f3f5032b22a489a00402"></a>

### [`009ef024`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef024.md) → [`009ef078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef078.md) FUN_009ef078

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef8e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef8e0.md) · 呼出先 20件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md)
- 新版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.05% / 新版 92.05%

優先判定に残った影響 `store_value` 9件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ef0bc",
      "incomplete_value": false,
      "site": "009ef0c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ef068",
      "incomplete_value": false,
      "site": "009ef06c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c64000:8"
          ],
          [
            "leaf",
            "const:d38:8"
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
      "definition_site": "009ef0d8",
      "incomplete_value": true,
      "site": "009ef0e8",
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
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:3ac:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ef084",
      "incomplete_value": true,
      "site": "009ef094",
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
                "const:2aa000:8"
              ],
              [
                "leaf",
                "const:408:8"
              ]
            ]
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
      "definition_site": "009ef0dc",
      "incomplete_value": true,
      "site": "009ef0ec",
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
                "const:c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ef088",
      "incomplete_value": true,
      "site": "009ef098",
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
                "const:c:8"
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
      "009ef0c0",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "009ef0d8",
      "READ",
      [
        "storage",
        "002aa408",
        null,
        "string"
      ]
    ],
    [
      "009ef0dc",
      "READ",
      [
        "storage",
        "002aa414",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ef0c0",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ef0d8",
      "READ",
      [
        "storage",
        "002aa3ac",
        null,
        "string"
      ]
    ],
    [
      "009ef0dc",
      "READ",
      [
        "storage",
        "002aa3b8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ef0f0 ["INT_ADD", "register:40f0:8", ["const:9ef0f0:8", "const:4:8"]]
- 009ef0f0 ["CALL", null, ["callee:00596f6c:8"]]
+ 009ef144 ["INT_ADD", "register:40f0:8", ["const:9ef144:8", "const:4:8"]]
+ 009ef144 ["CALL", null, ["callee:00596f6c:8"]]
- 009ef060 ["INT_ADD", "register:40f0:8", ["const:9ef060:8", "const:4:8"]]
- 009ef060 ["CALL", null, ["callee:00487e60:8"]]
+ 009ef0b4 ["INT_ADD", "register:40f0:8", ["const:9ef0b4:8", "const:4:8"]]
+ 009ef0b4 ["CALL", null, ["callee:00487e60:8"]]
- 009ef068 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009ef068 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ef068 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ef068 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ef0bc ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 009ef0bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef0bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef0bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e991a7c593f7fe23a5ac737bd7ee3943"></a>

### [`009ef66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef66c.md) → [`009ef6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef6c0.md) FUN_009ef6c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f2604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2604.md) · 呼出先 2件 [`009f38e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f38e4.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009f2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2658.md) · 呼出先 2件 [`009f3938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3938.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.27% / 新版 97.27%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ef70c",
      "incomplete_value": false,
      "site": "009ef710",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:f28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ef6b8",
      "incomplete_value": false,
      "site": "009ef6bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:e58:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009ef710",
      "DATA",
      [
        "storage",
        "00c89e58",
        null,
        "undefined *"
      ]
    ],
    [
      "009ef7e0",
      "DATA",
      [
        "storage",
        "00c8a3b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ef710",
      "DATA",
      [
        "storage",
        "00c89f28",
        null,
        "undefined *"
      ]
    ],
    [
      "009ef7e0",
      "DATA",
      [
        "storage",
        "00c8a480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ef6b8 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 009ef6b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ef6b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ef6b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ef70c ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 009ef70c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef70c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef70c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ef76c ["COPY", "register:0:8", ["register:4048:8"]]
- 009ef76c ["INT_ADD", "register:40f0:8", ["const:9ef76c:8", "const:4:8"]]
- 009ef76c ["CALLIND", null, ["register:0:8"]]
+ 009ef7c0 ["COPY", "register:0:8", ["register:4048:8"]]
+ 009ef7c0 ["INT_ADD", "register:40f0:8", ["const:9ef7c0:8", "const:4:8"]]
+ 009ef7c0 ["CALLIND", null, ["register:0:8"]]
- 009ef77c ["COPY", "tmp:0:8", ["const:3b0:8"]]
- 009ef77c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ef77c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ef77c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ef7d0 ["COPY", "tmp:0:8", ["const:480:8"]]
+ 009ef7d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef7d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef7d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c0148e33bd1a855f924ca6dfda033dd2"></a>

### [`009efde8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009efde8.md) → [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) FUN_009efe3c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009f050c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f0/009f050c.md) [`009f0d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f0/009f0d34.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009f3ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3ab8.md) [`009f3acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3acc.md)
- 新版 呼出元 2件 [`009f0560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0560.md) [`009f0d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0d88.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f3b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b0c.md) [`009f3b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b20.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.05% / 新版 95.05%

優先判定に残った影響 `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f0218",
      "incomplete_value": true,
      "site": "009f0220",
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
                "const:280:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f01c4",
      "incomplete_value": true,
      "site": "009f01cc",
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
                "const:240:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 48,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f0214",
      "incomplete_value": true,
      "site": "009f0224",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:d97:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f01c0",
      "incomplete_value": true,
      "site": "009f01d0",
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
                "const:2a5000:8"
              ],
              [
                "leaf",
                "const:df3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f0214",
      "incomplete_value": true,
      "site": "009f0224",
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
      "definition_site": "009f01c0",
      "incomplete_value": true,
      "site": "009f01d0",
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
    "ordinal": 50,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f0214",
      "READ",
      [
        "storage",
        "002a5df3",
        null,
        "string"
      ]
    ],
    [
      "009f0214",
      "READ",
      [
        "storage",
        "002a5e03",
        null,
        "string"
      ]
    ],
    [
      "009f0218",
      "READ",
      [
        "storage",
        "002c2240",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009f0214",
      "READ",
      [
        "storage",
        "002a5d97",
        null,
        "string"
      ]
    ],
    [
      "009f0214",
      "READ",
      [
        "storage",
        "002a5da7",
        null,
        "string"
      ]
    ],
    [
      "009f0218",
      "READ",
      [
        "storage",
        "002c2280",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009f017c ["INT_ADD", "register:40f0:8", ["const:9f017c:8", "const:4:8"]]
- 009f017c ["CALL", null, ["callee:009f3b20:8"]]
+ 009f01d0 ["INT_ADD", "register:40f0:8", ["const:9f01d0:8", "const:4:8"]]
+ 009f01d0 ["CALL", null, ["callee:009f3b20:8"]]
- 009f01f4 ["INT_ADD", "register:40f0:8", ["const:9f01f4:8", "const:4:8"]]
- 009f01f4 ["CALL", null, ["callee:00447f34:8"]]
+ 009f0248 ["INT_ADD", "register:40f0:8", ["const:9f0248:8", "const:4:8"]]
+ 009f0248 ["CALL", null, ["callee:00447f34:8"]]
- 009f0224 ["COPY", "tmp:0:8", ["const:3f2:8"]]
- 009f0224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f0224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f0224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f0278 ["COPY", "tmp:0:8", ["const:423:8"]]
+ 009f0278 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f0278 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f0278 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6917f7586a7052d13adcc3c4f9721b70"></a>

### [`009f050c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f0/009f050c.md) → [`009f0560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0560.md) FUN_009f0560

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f24a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f24a4.md) · 呼出先 11件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`009efde8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009efde8.md) [`009f3ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3ab8.md)
- 新版 呼出元 1件 [`009f24f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f24f8.md) · 呼出先 11件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) [`009f3b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b0c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.18% / 新版 99.18%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f064c",
      "incomplete_value": false,
      "site": "009f065c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f05f8",
      "incomplete_value": false,
      "site": "009f0608",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
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
      "definition_site": "009f0654",
      "incomplete_value": false,
      "site": "009f065c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:fe0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f0600",
      "incomplete_value": false,
      "site": "009f0608",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:f10:8"
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
      "definition_site": "009f06c0",
      "incomplete_value": false,
      "site": "009f06d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f066c",
      "incomplete_value": false,
      "site": "009f067c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:eb8:8"
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
      "009f064c",
      "PARAM",
      [
        "storage",
        "00c89eb8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f0654",
      "PARAM",
      [
        "storage",
        "00c89f10",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f06c0",
      "PARAM",
      [
        "storage",
        "00c89eb8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f064c",
      "PARAM",
      [
        "storage",
        "00c89f88",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f0654",
      "PARAM",
      [
        "storage",
        "00c89fe0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f06c0",
      "PARAM",
      [
        "storage",
        "00c89f88",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f0608 ["INT_ADD", "register:40f0:8", ["const:9f0608:8", "const:4:8"]]
- 009f0608 ["CALL", null, ["callee:00c586e0:8"]]
+ 009f065c ["INT_ADD", "register:40f0:8", ["const:9f065c:8", "const:4:8"]]
+ 009f065c ["CALL", null, ["callee:00c586e0:8"]]
- 009f067c ["INT_ADD", "register:40f0:8", ["const:9f067c:8", "const:4:8"]]
- 009f067c ["CALL", null, ["callee:00c586e0:8"]]
+ 009f06d0 ["INT_ADD", "register:40f0:8", ["const:9f06d0:8", "const:4:8"]]
+ 009f06d0 ["CALL", null, ["callee:00c586e0:8"]]
- 009f0558 ["INT_ADD", "register:40f0:8", ["const:9f0558:8", "const:4:8"]]
- 009f0558 ["CALL", null, ["callee:009efe3c:8"]]
+ 009f05ac ["INT_ADD", "register:40f0:8", ["const:9f05ac:8", "const:4:8"]]
+ 009f05ac ["CALL", null, ["callee:009efe3c:8"]]
~~~


<a id="compare-bec440c95d73f06cfab653ab53c0b691"></a>

### [`009f0d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f0/009f0d34.md) → [`009f0d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0d88.md) FUN_009f0d88

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009efde8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009efde8.md) [`009f1048`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1048.md) [`009f37fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f37fc.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) [`009f109c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f109c.md) [`009f3850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3850.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.71% / 新版 95.71%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f0e48",
      "incomplete_value": true,
      "site": "009f0e58",
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
                "const:100:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f0df4",
      "incomplete_value": true,
      "site": "009f0e04",
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
                "const:c0:8"
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
      "definition_site": "009f0e4c",
      "incomplete_value": true,
      "site": "009f0e68",
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
                "const:217:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f0df8",
      "incomplete_value": true,
      "site": "009f0e14",
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
                "const:1e6:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f0e4c",
      "incomplete_value": true,
      "site": "009f0e68",
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
      "definition_site": "009f0df8",
      "incomplete_value": true,
      "site": "009f0e14",
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
    "ordinal": 18,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f0e48",
      "READ",
      [
        "storage",
        "002c20c0",
        null,
        null
      ]
    ],
    [
      "009f0e4c",
      "READ",
      [
        "storage",
        "002b31e6",
        null,
        "string"
      ]
    ],
    [
      "009f0e4c",
      "READ",
      [
        "storage",
        "002b31f6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009f0e48",
      "READ",
      [
        "storage",
        "002c2100",
        null,
        null
      ]
    ],
    [
      "009f0e4c",
      "READ",
      [
        "storage",
        "002b3217",
        null,
        "string"
      ]
    ],
    [
      "009f0e4c",
      "READ",
      [
        "storage",
        "002b3227",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f0e58 ["INT_ADD", "register:40f0:8", ["const:9f0e58:8", "const:4:8"]]
- 009f0e58 ["CALL", null, ["callee:00c57f80:8"]]
+ 009f0eac ["INT_ADD", "register:40f0:8", ["const:9f0eac:8", "const:4:8"]]
+ 009f0eac ["CALL", null, ["callee:00c57f80:8"]]
- 009f0e68 ["INT_ADD", "register:40f0:8", ["const:9f0e68:8", "const:4:8"]]
- 009f0e68 ["CALL", null, ["callee:00c57f80:8"]]
+ 009f0ebc ["INT_ADD", "register:40f0:8", ["const:9f0ebc:8", "const:4:8"]]
+ 009f0ebc ["CALL", null, ["callee:00c57f80:8"]]
- 009f0d8c ["INT_ADD", "register:40f0:8", ["const:9f0d8c:8", "const:4:8"]]
- 009f0d8c ["CALL", null, ["callee:009f3f88:8"]]
+ 009f0de0 ["INT_ADD", "register:40f0:8", ["const:9f0de0:8", "const:4:8"]]
+ 009f0de0 ["CALL", null, ["callee:009f3f88:8"]]
~~~


<a id="compare-de2f34e18276134aa6a827a2ea41841b"></a>

### [`009f1978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1978.md) → [`009f19cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f19cc.md) FUN_009f19cc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009f35fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f35fc.md) [`009f3894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3894.md) [`009f3f34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3f34.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f3650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3650.md) [`009f38e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f38e8.md) [`009f3f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3f88.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.73% / 新版 93.73%

優先判定に残った影響 `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f1a90",
      "incomplete_value": true,
      "site": "009f1aa0",
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
                "const:100:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f1a3c",
      "incomplete_value": true,
      "site": "009f1a4c",
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
                "const:c0:8"
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
      "definition_site": "009f1a94",
      "incomplete_value": true,
      "site": "009f1ab0",
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
                "const:217:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f1a40",
      "incomplete_value": true,
      "site": "009f1a5c",
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
                "const:1e6:8"
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
      "definition_site": "009f1a94",
      "incomplete_value": true,
      "site": "009f1ab0",
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
      "definition_site": "009f1a40",
      "incomplete_value": true,
      "site": "009f1a5c",
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
      "009f1a90",
      "READ",
      [
        "storage",
        "002c20c0",
        null,
        null
      ]
    ],
    [
      "009f1a94",
      "READ",
      [
        "storage",
        "002b31e6",
        null,
        "string"
      ]
    ],
    [
      "009f1a94",
      "READ",
      [
        "storage",
        "002b31f6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009f1a90",
      "READ",
      [
        "storage",
        "002c2100",
        null,
        null
      ]
    ],
    [
      "009f1a94",
      "READ",
      [
        "storage",
        "002b3217",
        null,
        "string"
      ]
    ],
    [
      "009f1a94",
      "READ",
      [
        "storage",
        "002b3227",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f1d08 ["INT_ADD", "register:40f0:8", ["const:9f1d08:8", "const:4:8"]]
- 009f1d08 ["CALL", null, ["callee:00c57f80:8"]]
+ 009f1d5c ["INT_ADD", "register:40f0:8", ["const:9f1d5c:8", "const:4:8"]]
+ 009f1d5c ["CALL", null, ["callee:00c57f80:8"]]
- 009f1d18 ["INT_ADD", "register:40f0:8", ["const:9f1d18:8", "const:4:8"]]
- 009f1d18 ["CALL", null, ["callee:00c57f80:8"]]
+ 009f1d6c ["INT_ADD", "register:40f0:8", ["const:9f1d6c:8", "const:4:8"]]
+ 009f1d6c ["CALL", null, ["callee:00c57f80:8"]]
- 009f19d4 ["INT_ADD", "register:40f0:8", ["const:9f19d4:8", "const:4:8"]]
- 009f19d4 ["CALL", null, ["callee:009f3f88:8"]]
+ 009f1a28 ["INT_ADD", "register:40f0:8", ["const:9f1a28:8", "const:4:8"]]
+ 009f1a28 ["CALL", null, ["callee:009f3f88:8"]]
~~~


<a id="compare-0dd7b64415ee3bbeeeb566c69bb966c1"></a>

### [`009f1e4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1e4c.md) → [`009f1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1ea0.md) FUN_009f1ea0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`009f35fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f35fc.md) [`009f3764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3764.md) [`009f37fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f37fc.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f3650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3650.md) [`009f37b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f37b8.md) [`009f3850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3850.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.99% / 新版 96.99%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f1f68",
      "incomplete_value": true,
      "site": "009f1f78",
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
                "const:100:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f1f14",
      "incomplete_value": true,
      "site": "009f1f24",
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
                "const:c0:8"
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
      "definition_site": "009f1f6c",
      "incomplete_value": true,
      "site": "009f1f88",
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
                "const:217:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f1f18",
      "incomplete_value": true,
      "site": "009f1f34",
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
                "const:1e6:8"
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
      "definition_site": "009f1f6c",
      "incomplete_value": true,
      "site": "009f1f88",
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
      "definition_site": "009f1f18",
      "incomplete_value": true,
      "site": "009f1f34",
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
    "ordinal": 21,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f1f68",
      "READ",
      [
        "storage",
        "002c20c0",
        null,
        null
      ]
    ],
    [
      "009f1f6c",
      "READ",
      [
        "storage",
        "002b31e6",
        null,
        "string"
      ]
    ],
    [
      "009f1f6c",
      "READ",
      [
        "storage",
        "002b31f6",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009f1f68",
      "READ",
      [
        "storage",
        "002c2100",
        null,
        null
      ]
    ],
    [
      "009f1f6c",
      "READ",
      [
        "storage",
        "002b3217",
        null,
        "string"
      ]
    ],
    [
      "009f1f6c",
      "READ",
      [
        "storage",
        "002b3227",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f1f78 ["INT_ADD", "register:40f0:8", ["const:9f1f78:8", "const:4:8"]]
- 009f1f78 ["CALL", null, ["callee:00c57f80:8"]]
+ 009f1fcc ["INT_ADD", "register:40f0:8", ["const:9f1fcc:8", "const:4:8"]]
+ 009f1fcc ["CALL", null, ["callee:00c57f80:8"]]
- 009f1f88 ["INT_ADD", "register:40f0:8", ["const:9f1f88:8", "const:4:8"]]
- 009f1f88 ["CALL", null, ["callee:00c57f80:8"]]
+ 009f1fdc ["INT_ADD", "register:40f0:8", ["const:9f1fdc:8", "const:4:8"]]
+ 009f1fdc ["CALL", null, ["callee:00c57f80:8"]]
- 009f1eac ["INT_ADD", "register:40f0:8", ["const:9f1eac:8", "const:4:8"]]
- 009f1eac ["CALL", null, ["callee:009f3f88:8"]]
+ 009f1f00 ["INT_ADD", "register:40f0:8", ["const:9f1f00:8", "const:4:8"]]
+ 009f1f00 ["CALL", null, ["callee:009f3f88:8"]]
~~~


<a id="compare-73f2d9d2592474e74b9f4d6d7cfb808f"></a>

### [`009f2604`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2604.md) → [`009f2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2658.md) FUN_009f2658

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`009e01d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e01d4.md) · 呼出先 2件 [`009ef66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009ef66c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009e0228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e0228.md) · 呼出先 2件 [`009ef6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef6c0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f2680",
      "incomplete_value": false,
      "site": "009f268c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f262c",
      "incomplete_value": false,
      "site": "009f2638",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:430:8"
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
      "009f268c",
      "DATA",
      [
        "storage",
        "00c8a430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f268c",
      "DATA",
      [
        "storage",
        "00c8a500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2620 ["INT_ADD", "register:40f0:8", ["const:9f2620:8", "const:4:8"]]
- 009f2620 ["CALL", null, ["callee:00c57f60:8"]]
+ 009f2674 ["INT_ADD", "register:40f0:8", ["const:9f2674:8", "const:4:8"]]
+ 009f2674 ["CALL", null, ["callee:00c57f60:8"]]
- 009f262c ["COPY", "tmp:0:8", ["const:430:8"]]
- 009f262c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f262c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f262c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f2680 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 009f2680 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f2680 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f2680 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f2644 ["INT_ADD", "register:40f0:8", ["const:9f2644:8", "const:4:8"]]
- 009f2644 ["CALL", null, ["callee:009ef6c0:8"]]
+ 009f2698 ["INT_ADD", "register:40f0:8", ["const:9f2698:8", "const:4:8"]]
+ 009f2698 ["CALL", null, ["callee:009ef6c0:8"]]
~~~


<a id="compare-c02e0d1138a8822d5383646518b80e8f"></a>

### [`009f26ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f26ac.md) → [`009f2700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2700.md) FUN_009f2700

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f271c",
      "incomplete_value": false,
      "site": "009f2720",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f26c8",
      "incomplete_value": false,
      "site": "009f26cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:fb0:8"
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
      "009f2720",
      "DATA",
      [
        "storage",
        "00c89fb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f2720",
      "DATA",
      [
        "storage",
        "00c8a080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2720 ["INT_ADD", "register:40f0:8", ["const:9f2720:8", "const:4:8"]]
- 009f2720 ["CALL", null, ["callee:00c57f50:8"]]
+ 009f2774 ["INT_ADD", "register:40f0:8", ["const:9f2774:8", "const:4:8"]]
+ 009f2774 ["CALL", null, ["callee:00c57f50:8"]]
- 009f26c4 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009f2718 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009f26c8 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 009f26c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f26c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f26c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f271c ["COPY", "tmp:0:8", ["const:80:8"]]
+ 009f271c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f271c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f271c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-57e409545440bca49fe7d8c93f3b76b2"></a>

### [`009f2a14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2a14.md) → [`009f2a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2a68.md) FUN_009f2a68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f29c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f29c8.md) · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`009f2a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2a1c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f2a84",
      "incomplete_value": false,
      "site": "009f2a88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f2a30",
      "incomplete_value": false,
      "site": "009f2a34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:fb0:8"
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
      "009f2a88",
      "DATA",
      [
        "storage",
        "00c89fb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f2a88",
      "DATA",
      [
        "storage",
        "00c8a080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2a88 ["INT_ADD", "register:40f0:8", ["const:9f2a88:8", "const:4:8"]]
- 009f2a88 ["CALL", null, ["callee:00c57f50:8"]]
+ 009f2adc ["INT_ADD", "register:40f0:8", ["const:9f2adc:8", "const:4:8"]]
+ 009f2adc ["CALL", null, ["callee:00c57f50:8"]]
- 009f2a2c ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009f2a80 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009f2a30 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 009f2a30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f2a30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f2a30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f2a84 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 009f2a84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f2a84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f2a84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a38f060d8f38907344ce6f231ee4edae"></a>

### [`009f2de4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2de4.md) → [`009f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e38.md) FUN_009f2e38

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`009edb3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ed/009edb3c.md) [`009ee970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ee/009ee970.md) [`009f2b1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2b1c.md) [`009f45a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f45a4.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 4件 [`009edb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009edb90.md) [`009ee9c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ee/009ee9c4.md) [`009f2b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2b70.md) [`009f45f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f45f8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f2e44",
      "incomplete_value": false,
      "site": "009f2e48",
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
      "definition_site": "009f2df0",
      "incomplete_value": false,
      "site": "009f2df4",
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
      "009f2e44",
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
      "009f2e44",
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
- 009f2df4 ["INT_ADD", "register:40f0:8", ["const:9f2df4:8", "const:4:8"]]
- 009f2df4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009f2e48 ["INT_ADD", "register:40f0:8", ["const:9f2e48:8", "const:4:8"]]
+ 009f2e48 ["CALL", null, ["callee:0043b7b8:8"]]
- 009f2df0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009f2df0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f2df0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f2df0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f2e44 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009f2e44 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f2e44 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f2e44 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b84a7c47e55365fb18317d11c06c61ba"></a>

### [`009f2df8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2df8.md) → [`009f2e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e4c.md) FUN_009f2e4c

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
      "definition_site": "009f2e50",
      "incomplete_value": false,
      "site": "009f2e54",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f2dfc",
      "incomplete_value": false,
      "site": "009f2e00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:10:8"
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
      "009f2e54",
      "DATA",
      [
        "storage",
        "00c8a010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f2e54",
      "DATA",
      [
        "storage",
        "00c8a0e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2dfc ["COPY", "tmp:0:8", ["const:10:8"]]
- 009f2dfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f2dfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f2dfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f2e50 ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 009f2e50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f2e50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f2e50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9ef21baab94667fc1713da72ca0d61f9"></a>

### [`009f2e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2e08.md) → [`009f2e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e5c.md) FUN_009f2e5c

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
      "definition_site": "009f2e6c",
      "incomplete_value": false,
      "site": "009f2e74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f2e18",
      "incomplete_value": false,
      "site": "009f2e20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
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
      "009f2e74",
      "DATA",
      [
        "storage",
        "00c8a010",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f2e74",
      "DATA",
      [
        "storage",
        "00c8a0e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2e18 ["COPY", "tmp:0:8", ["const:10:8"]]
- 009f2e18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f2e18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f2e18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f2e6c ["COPY", "tmp:0:8", ["const:e0:8"]]
+ 009f2e6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f2e6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f2e6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f2e24 ["INT_ADD", "register:40f0:8", ["const:9f2e24:8", "const:4:8"]]
- 009f2e24 ["CALL", null, ["callee:00c57f70:8"]]
+ 009f2e78 ["INT_ADD", "register:40f0:8", ["const:9f2e78:8", "const:4:8"]]
+ 009f2e78 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-503059bbcf0fec5e9d4deef8307a0b45"></a>

### [`009f2fa4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2fa4.md) → [`009f2ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2ff8.md) FUN_009f2ff8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009f2e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2e64.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009f2eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2eb8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f3004",
      "incomplete_value": false,
      "site": "009f3008",
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
      "definition_site": "009f2fb0",
      "incomplete_value": false,
      "site": "009f2fb4",
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
      "009f3004",
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
      "009f3004",
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
- 009f2fb4 ["INT_ADD", "register:40f0:8", ["const:9f2fb4:8", "const:4:8"]]
- 009f2fb4 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009f3008 ["INT_ADD", "register:40f0:8", ["const:9f3008:8", "const:4:8"]]
+ 009f3008 ["CALL", null, ["callee:0043b7b8:8"]]
- 009f2fb0 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009f2fb0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f2fb0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f2fb0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f3004 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009f3004 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3004 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3004 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2bcc75eec59774a03e6ce27cb810626b"></a>

### [`009f3088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3088.md) → [`009f30dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f30dc.md) FUN_009f30dc

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
      "definition_site": "009f30e0",
      "incomplete_value": false,
      "site": "009f30e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f308c",
      "incomplete_value": false,
      "site": "009f3090",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
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
      "009f30e4",
      "DATA",
      [
        "storage",
        "00c8a1c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f30e4",
      "DATA",
      [
        "storage",
        "00c8a290",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f308c ["COPY", "tmp:0:8", ["const:1c0:8"]]
- 009f308c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f308c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f308c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f30e0 ["COPY", "tmp:0:8", ["const:290:8"]]
+ 009f30e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f30e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f30e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2696eb4c7e4dfd5f1a74e0c776c32675"></a>

### [`009f3098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3098.md) → [`009f30ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f30ec.md) FUN_009f30ec

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
      "definition_site": "009f30fc",
      "incomplete_value": false,
      "site": "009f3104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f30a8",
      "incomplete_value": false,
      "site": "009f30b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
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
      "009f3104",
      "DATA",
      [
        "storage",
        "00c8a1c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3104",
      "DATA",
      [
        "storage",
        "00c8a290",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f30a8 ["COPY", "tmp:0:8", ["const:1c0:8"]]
- 009f30a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f30a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f30a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f30fc ["COPY", "tmp:0:8", ["const:290:8"]]
+ 009f30fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f30fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f30fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f30b4 ["INT_ADD", "register:40f0:8", ["const:9f30b4:8", "const:4:8"]]
- 009f30b4 ["CALL", null, ["callee:00c57f70:8"]]
+ 009f3108 ["INT_ADD", "register:40f0:8", ["const:9f3108:8", "const:4:8"]]
+ 009f3108 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-fda04184c38d49fa91dd5580548cb7f8"></a>

### [`009f30f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f30f4.md) → [`009f3148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3148.md) FUN_009f3148

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
      "definition_site": "009f314c",
      "incomplete_value": false,
      "site": "009f3150",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:348:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f30f8",
      "incomplete_value": false,
      "site": "009f30fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:278:8"
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
      "009f3150",
      "DATA",
      [
        "storage",
        "00c8a278",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3150",
      "DATA",
      [
        "storage",
        "00c8a348",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f30f8 ["COPY", "tmp:0:8", ["const:278:8"]]
- 009f30f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f30f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f30f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f314c ["COPY", "tmp:0:8", ["const:348:8"]]
+ 009f314c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f314c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f314c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d4978698da272ad9aef00eb9b53fc4c4"></a>

### [`009f3104`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3104.md) → [`009f3158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3158.md) FUN_009f3158

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
      "definition_site": "009f3168",
      "incomplete_value": false,
      "site": "009f3170",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:348:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f3114",
      "incomplete_value": false,
      "site": "009f311c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:278:8"
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
      "009f3170",
      "DATA",
      [
        "storage",
        "00c8a278",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3170",
      "DATA",
      [
        "storage",
        "00c8a348",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3114 ["COPY", "tmp:0:8", ["const:278:8"]]
- 009f3114 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f3114 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f3114 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f3168 ["COPY", "tmp:0:8", ["const:348:8"]]
+ 009f3168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f3120 ["INT_ADD", "register:40f0:8", ["const:9f3120:8", "const:4:8"]]
- 009f3120 ["CALL", null, ["callee:00c57f70:8"]]
+ 009f3174 ["INT_ADD", "register:40f0:8", ["const:9f3174:8", "const:4:8"]]
+ 009f3174 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-be36f3a0211bf39beabfd02372908539"></a>

### [`009f3164`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3164.md) → [`009f31b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f31b8.md) FUN_009f31b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`009ec250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ec/009ec250.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`009ec2a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec2a4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f3244",
      "incomplete_value": false,
      "site": "009f32ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f31f0",
      "incomplete_value": false,
      "site": "009f3258",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:fb0:8"
          ]
        ]
      ]
    },
    "ordinal": 30,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f32ac",
      "DATA",
      [
        "storage",
        "00c89fb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f32ac",
      "DATA",
      [
        "storage",
        "00c8a080",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f31d8 ["INT_ADD", "register:40f0:8", ["const:9f31d8:8", "const:4:8"]]
- 009f31d8 ["CALL", null, ["callee:00c57f60:8"]]
+ 009f322c ["INT_ADD", "register:40f0:8", ["const:9f322c:8", "const:4:8"]]
+ 009f322c ["CALL", null, ["callee:00c57f60:8"]]
- 009f31ec ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009f3240 ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009f31f0 ["COPY", "tmp:0:8", ["const:fb0:8"]]
- 009f31f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009f31f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009f31f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009f3244 ["COPY", "tmp:0:8", ["const:80:8"]]
+ 009f3244 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009f3244 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009f3244 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2e414db7cb6ecd60066e43e5d71415af"></a>

### [`009f32a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f32a4.md) → [`009f32f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f32f8.md) FUN_009f32f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ec95c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ec/009ec95c.md) · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 1件 [`009ec9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec9b0.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.23% / 新版 91.23%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f3314",
      "incomplete_value": false,
      "site": "009f3314",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f32c0",
      "incomplete_value": false,
      "site": "009f32c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:330:8"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f3320",
      "incomplete_value": false,
      "site": "009f3320",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f32cc",
      "incomplete_value": false,
      "site": "009f32cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:380:8"
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
      "009f3314",
      "DATA",
      [
        "storage",
        "00c8a330",
        null,
        "undefined *"
      ]
    ],
    [
      "009f3320",
      "DATA",
      [
        "storage",
        "00c8a380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3314",
      "DATA",
      [
        "storage",
        "00c8a400",
        null,
        "undefined *"
      ]
    ],
    [
      "009f3320",
      "DATA",
      [
        "storage",
        "00c8a450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3320 ["COPY", "register:0:8", ["register:4040:8"]]
- 009f3320 ["INT_ADD", "register:40f0:8", ["const:9f3320:8", "const:4:8"]]
- 009f3320 ["CALLIND", null, ["register:0:8"]]
+ 009f3374 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f3374 ["INT_ADD", "register:40f0:8", ["const:9f3374:8", "const:4:8"]]
+ 009f3374 ["CALLIND", null, ["register:0:8"]]
- 009f32b8 ["COPY", "tmp:0:8", ["const:330:8"]]
- 009f32b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f32b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f32b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f330c ["COPY", "tmp:0:8", ["const:400:8"]]
+ 009f330c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f330c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f330c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f32c4 ["COPY", "register:4040:8", ["const:c8a000:8"]]
~~~


<a id="compare-a71b946a22a096142ad41880dc41a38d"></a>

### [`009f33a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f33a4.md) → [`009f33f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f33f8.md) FUN_009f33f8

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
      "definition_site": "009f33fc",
      "incomplete_value": false,
      "site": "009f3400",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f33a8",
      "incomplete_value": false,
      "site": "009f33ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:330:8"
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
      "009f3400",
      "DATA",
      [
        "storage",
        "00c8a330",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3400",
      "DATA",
      [
        "storage",
        "00c8a400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f33a8 ["COPY", "tmp:0:8", ["const:330:8"]]
- 009f33a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f33a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f33a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f33fc ["COPY", "tmp:0:8", ["const:400:8"]]
+ 009f33fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f33fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f33fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f23fd08fa3c2b6007873774bb8249871"></a>

### [`009f33b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f33b4.md) → [`009f3408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3408.md) FUN_009f3408

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
      "definition_site": "009f3418",
      "incomplete_value": false,
      "site": "009f3420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:400:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f33c4",
      "incomplete_value": false,
      "site": "009f33cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:330:8"
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
      "009f3420",
      "DATA",
      [
        "storage",
        "00c8a330",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3420",
      "DATA",
      [
        "storage",
        "00c8a400",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f33c4 ["COPY", "tmp:0:8", ["const:330:8"]]
- 009f33c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f33c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f33c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f3418 ["COPY", "tmp:0:8", ["const:400:8"]]
+ 009f3418 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3418 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3418 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f33d0 ["INT_ADD", "register:40f0:8", ["const:9f33d0:8", "const:4:8"]]
- 009f33d0 ["CALL", null, ["callee:00c57f70:8"]]
+ 009f3424 ["INT_ADD", "register:40f0:8", ["const:9f3424:8", "const:4:8"]]
+ 009f3424 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-cf14a120c38148e95ab41ddfe4c2cd1f"></a>

### [`009f33f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f33f4.md) → [`009f3448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3448.md) FUN_009f3448

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f345c",
      "incomplete_value": false,
      "site": "009f3460",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f3408",
      "incomplete_value": false,
      "site": "009f340c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:380:8"
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
      "009f3460",
      "DATA",
      [
        "storage",
        "00c8a380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3460",
      "DATA",
      [
        "storage",
        "00c8a450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3408 ["COPY", "tmp:0:8", ["const:380:8"]]
- 009f3408 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f3408 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f3408 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f345c ["COPY", "tmp:0:8", ["const:450:8"]]
+ 009f345c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f345c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f345c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f341c ["INT_ADD", "register:40f0:8", ["const:9f341c:8", "const:4:8"]]
- 009f341c ["CALL", null, ["callee:00c53da0:8"]]
+ 009f3470 ["INT_ADD", "register:40f0:8", ["const:9f3470:8", "const:4:8"]]
+ 009f3470 ["CALL", null, ["callee:00c53da0:8"]]
- 009f343c ["COPY", "register:0:8", ["register:4040:8"]]
- 009f343c ["INT_ADD", "register:40f0:8", ["const:9f343c:8", "const:4:8"]]
- 009f343c ["CALLIND", null, ["register:0:8"]]
+ 009f3490 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f3490 ["INT_ADD", "register:40f0:8", ["const:9f3490:8", "const:4:8"]]
+ 009f3490 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-33870a6bc9c7fbf9db76cbedebe62691"></a>

### [`009f3450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3450.md) → [`009f34a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f34a4.md) FUN_009f34a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f34bc",
      "incomplete_value": false,
      "site": "009f34c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f3468",
      "incomplete_value": false,
      "site": "009f346c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:380:8"
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
      "009f34c0",
      "DATA",
      [
        "storage",
        "00c8a380",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f34c0",
      "DATA",
      [
        "storage",
        "00c8a450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3468 ["COPY", "tmp:0:8", ["const:380:8"]]
- 009f3468 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f3468 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f3468 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f34bc ["COPY", "tmp:0:8", ["const:450:8"]]
+ 009f34bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f34bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f34bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f347c ["INT_ADD", "register:40f0:8", ["const:9f347c:8", "const:4:8"]]
- 009f347c ["CALL", null, ["callee:00c53da0:8"]]
+ 009f34d0 ["INT_ADD", "register:40f0:8", ["const:9f34d0:8", "const:4:8"]]
+ 009f34d0 ["CALL", null, ["callee:00c53da0:8"]]
- 009f3490 ["COPY", "register:0:8", ["register:4040:8"]]
- 009f3490 ["INT_ADD", "register:40f0:8", ["const:9f3490:8", "const:4:8"]]
- 009f3490 ["CALLIND", null, ["register:0:8"]]
+ 009f34e4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f34e4 ["INT_ADD", "register:40f0:8", ["const:9f34e4:8", "const:4:8"]]
+ 009f34e4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-0595c7b9e0fd9224a65cd4d5048f5317"></a>

### [`009f35fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f35fc.md) → [`009f3650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3650.md) FUN_009f3650

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009ed118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ed/009ed118.md) [`009f1978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1978.md) [`009f1e4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1e4c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 3件 [`009ed16c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009ed16c.md) [`009f19cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f19cc.md) [`009f1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1ea0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f365c",
      "incomplete_value": false,
      "site": "009f3660",
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
      "definition_site": "009f3608",
      "incomplete_value": false,
      "site": "009f360c",
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
      "009f365c",
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
      "009f365c",
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
- 009f360c ["INT_ADD", "register:40f0:8", ["const:9f360c:8", "const:4:8"]]
- 009f360c ["CALL", null, ["callee:0043b7b8:8"]]
+ 009f3660 ["INT_ADD", "register:40f0:8", ["const:9f3660:8", "const:4:8"]]
+ 009f3660 ["CALL", null, ["callee:0043b7b8:8"]]
- 009f3608 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009f3608 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f3608 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f3608 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f365c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009f365c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f365c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f365c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-12cd9230f4be479c30571cef16a7b59c"></a>

### [`009f3a74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3a74.md) → [`009f3ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3ac8.md) FUN_009f3ac8

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
      "definition_site": "009f3acc",
      "incomplete_value": false,
      "site": "009f3ad0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:480:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f3a78",
      "incomplete_value": false,
      "site": "009f3a7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:3b0:8"
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
      "009f3ad0",
      "DATA",
      [
        "storage",
        "00c8a3b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3ad0",
      "DATA",
      [
        "storage",
        "00c8a480",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3a78 ["COPY", "tmp:0:8", ["const:3b0:8"]]
- 009f3a78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f3a78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f3a78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f3acc ["COPY", "tmp:0:8", ["const:480:8"]]
+ 009f3acc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3acc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3acc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-76d652c6744c87d1508ad40f9ef06b80"></a>

### [`009f3ab8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3ab8.md) → [`009f3b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b0c.md) FUN_009f3b0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`009efde8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009ef/009efde8.md) [`009f050c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f0/009f050c.md) [`009f1200`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1200.md) [`009f3c6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3c6c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 4件 [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) [`009f0560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0560.md) [`009f1254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1254.md) [`009f3cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3cc0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f3b18",
      "incomplete_value": false,
      "site": "009f3b1c",
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
      "definition_site": "009f3ac4",
      "incomplete_value": false,
      "site": "009f3ac8",
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
      "009f3b18",
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
      "009f3b18",
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
- 009f3ac8 ["INT_ADD", "register:40f0:8", ["const:9f3ac8:8", "const:4:8"]]
- 009f3ac8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009f3b1c ["INT_ADD", "register:40f0:8", ["const:9f3b1c:8", "const:4:8"]]
+ 009f3b1c ["CALL", null, ["callee:0043b7b8:8"]]
- 009f3ac4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009f3ac4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f3ac4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f3ac4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f3b18 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009f3b18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3b18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3b18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-dfb144f9e83b8bed759e0e2001d390c0"></a>

### [`009f3c58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3c58.md) → [`009f3cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3cac.md) FUN_009f3cac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009f3acc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f3/009f3acc.md) [`009f4950`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4950.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 2件 [`009f3b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b20.md) [`009f49a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f49a4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f3cb8",
      "incomplete_value": false,
      "site": "009f3cbc",
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
      "definition_site": "009f3c64",
      "incomplete_value": false,
      "site": "009f3c68",
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
      "009f3cb8",
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
      "009f3cb8",
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
- 009f3c68 ["INT_ADD", "register:40f0:8", ["const:9f3c68:8", "const:4:8"]]
- 009f3c68 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009f3cbc ["INT_ADD", "register:40f0:8", ["const:9f3cbc:8", "const:4:8"]]
+ 009f3cbc ["CALL", null, ["callee:0043b7b8:8"]]
- 009f3c64 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009f3c64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f3c64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f3c64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f3cb8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009f3cb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3cb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3cb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0d46f79c5aae029c6ae68038642c7bea"></a>

### [`009f4adc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4adc.md) → [`009f4b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b30.md) FUN_009f4b30

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009f15bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f15bc.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009f1610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1610.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f4b3c",
      "incomplete_value": false,
      "site": "009f4b40",
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
      "definition_site": "009f4ae8",
      "incomplete_value": false,
      "site": "009f4aec",
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
      "009f4b3c",
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
      "009f4b3c",
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
- 009f4aec ["INT_ADD", "register:40f0:8", ["const:9f4aec:8", "const:4:8"]]
- 009f4aec ["CALL", null, ["callee:0043b7b8:8"]]
+ 009f4b40 ["INT_ADD", "register:40f0:8", ["const:9f4b40:8", "const:4:8"]]
+ 009f4b40 ["CALL", null, ["callee:0043b7b8:8"]]
- 009f4ae8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009f4ae8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f4ae8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f4ae8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f4b3c ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009f4b3c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4b3c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4b3c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-caa7c4a1ab9baded9bb8b6da978d5610"></a>

### [`009f4af0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4af0.md) → [`009f4b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b44.md) FUN_009f4b44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009f1700`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f1/009f1700.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`009f1754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1754.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f4b50",
      "incomplete_value": false,
      "site": "009f4b54",
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
      "definition_site": "009f4afc",
      "incomplete_value": false,
      "site": "009f4b00",
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
      "009f4b50",
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
      "009f4b50",
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
- 009f4b00 ["INT_ADD", "register:40f0:8", ["const:9f4b00:8", "const:4:8"]]
- 009f4b00 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009f4b54 ["INT_ADD", "register:40f0:8", ["const:9f4b54:8", "const:4:8"]]
+ 009f4b54 ["CALL", null, ["callee:0043b7b8:8"]]
- 009f4afc ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009f4afc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f4afc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f4afc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f4b50 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009f4b50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4b50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4b50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-847967738ab7260962fb504355deea37"></a>

### [`009f4b04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4b04.md) → [`009f4b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b58.md) FUN_009f4b58

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
      "definition_site": "009f4b5c",
      "incomplete_value": false,
      "site": "009f4b60",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f4b08",
      "incomplete_value": false,
      "site": "009f4b0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:430:8"
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
      "009f4b60",
      "DATA",
      [
        "storage",
        "00c8a430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f4b60",
      "DATA",
      [
        "storage",
        "00c8a500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f4b08 ["COPY", "tmp:0:8", ["const:430:8"]]
- 009f4b08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f4b5c ["COPY", "tmp:0:8", ["const:500:8"]]
+ 009f4b5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4b5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4b5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-db4a3cecd019188284a6261a81fef073"></a>

### [`009f4b14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4b14.md) → [`009f4b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b68.md) FUN_009f4b68

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
      "definition_site": "009f4b78",
      "incomplete_value": false,
      "site": "009f4b80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f4b24",
      "incomplete_value": false,
      "site": "009f4b2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:430:8"
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
      "009f4b80",
      "DATA",
      [
        "storage",
        "00c8a430",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f4b80",
      "DATA",
      [
        "storage",
        "00c8a500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f4b24 ["COPY", "tmp:0:8", ["const:430:8"]]
- 009f4b24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f4b78 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 009f4b78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4b78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4b78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f4b30 ["INT_ADD", "register:40f0:8", ["const:9f4b30:8", "const:4:8"]]
- 009f4b30 ["CALL", null, ["callee:00c57f70:8"]]
+ 009f4b84 ["INT_ADD", "register:40f0:8", ["const:9f4b84:8", "const:4:8"]]
+ 009f4b84 ["CALL", null, ["callee:00c57f70:8"]]
~~~


<a id="compare-4778119f5fb0f6c1635dae04f832cbff"></a>

### [`009f4b50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4b50.md) → [`009f4ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4ba4.md) FUN_009f4ba4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f4b44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4b44.md) · 呼出先 8件 [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`009f2894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2894.md) [`009f28e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f28e4.md) [`009f2934`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2934.md) [`009f2978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f2/009f2978.md)
- 新版 呼出元 1件 [`009f4b98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b98.md) · 呼出先 8件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`009f28e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f28e8.md) [`009f2938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2938.md) [`009f2988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2988.md) [`009f29cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f29cc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f4bc0",
      "incomplete_value": false,
      "site": "009f4bc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:f28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f4b6c",
      "incomplete_value": false,
      "site": "009f4b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c89000:8"
          ],
          [
            "leaf",
            "const:e58:8"
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
      "009f4bc0",
      "DATA",
      [
        "storage",
        "00c89e58",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f4bc0",
      "DATA",
      [
        "storage",
        "00c89f28",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f4b64 ["COPY", "tmp:0:8", ["const:e58:8"]]
- 009f4b64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f4bb8 ["COPY", "tmp:0:8", ["const:f28:8"]]
+ 009f4bb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4bb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4bb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f4b70 ["INT_ADD", "register:40f0:8", ["const:9f4b70:8", "const:4:8"]]
- 009f4b70 ["CALL", null, ["callee:009f38e8:8"]]
+ 009f4bc4 ["INT_ADD", "register:40f0:8", ["const:9f4bc4:8", "const:4:8"]]
+ 009f4bc4 ["CALL", null, ["callee:009f38e8:8"]]
- 009f4b7c ["INT_ADD", "register:40f0:8", ["const:9f4b7c:8", "const:4:8"]]
- 009f4b7c ["CALL", null, ["callee:009f28e8:8"]]
+ 009f4bd0 ["INT_ADD", "register:40f0:8", ["const:9f4bd0:8", "const:4:8"]]
+ 009f4bd0 ["CALL", null, ["callee:009f28e8:8"]]
~~~


<a id="compare-5f06ec859d1fa50cabc141965f57108f"></a>

### [`009f4c0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f4/009f4c0c.md) → [`009f4c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4c60.md) _INIT_205

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f4c9c",
      "incomplete_value": true,
      "site": "009f4cb8",
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
      "definition_site": "009f4c48",
      "incomplete_value": true,
      "site": "009f4c64",
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
      "definition_site": "009f4d1c",
      "incomplete_value": true,
      "site": "009f4d38",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:576:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f4cc8",
      "incomplete_value": true,
      "site": "009f4ce4",
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
                "const:2ac000:8"
              ],
              [
                "leaf",
                "const:5d2:8"
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
      "definition_site": "009f4d3c",
      "incomplete_value": true,
      "site": "009f4d58",
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
                "const:f10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f4ce8",
      "incomplete_value": true,
      "site": "009f4d04",
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
                "const:f5d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f4c9c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "009f4cc0",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "009f4ce0",
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
      "009f4c9c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009f4cc0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009f4ce0",
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
- 009f4e40 ["INT_ADD", "register:40f0:8", ["const:9f4e40:8", "const:4:8"]]
- 009f4e40 ["CALL", null, ["callee:00c57f00:8"]]
+ 009f4e94 ["INT_ADD", "register:40f0:8", ["const:9f4e94:8", "const:4:8"]]
+ 009f4e94 ["CALL", null, ["callee:00c57f00:8"]]
- 009f4c38 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 009f4c38 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009f4c38 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009f4c38 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009f4c8c ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 009f4c8c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009f4c8c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009f4c8c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 009f4c40 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-32019cb8ab252f35d4c7868da524f182"></a>

### [`009f53a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f5/009f53a8.md) → [`009f53fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f53fc.md) FUN_009f53fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f541c",
      "incomplete_value": false,
      "site": "009f5420",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:580:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f53c8",
      "incomplete_value": false,
      "site": "009f53cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:4b0:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f545c",
      "incomplete_value": false,
      "site": "009f5464",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f5408",
      "incomplete_value": false,
      "site": "009f5410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:480:8"
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
      "009f5420",
      "DATA",
      [
        "storage",
        "00c8a4b0",
        null,
        "undefined *"
      ]
    ],
    [
      "009f5464",
      "DATA",
      [
        "storage",
        "00c8a480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f5420",
      "DATA",
      [
        "storage",
        "00c8a580",
        null,
        "undefined *"
      ]
    ],
    [
      "009f5464",
      "DATA",
      [
        "storage",
        "00c8a550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f53c8 ["COPY", "tmp:0:8", ["const:4b0:8"]]
- 009f53c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f53c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f53c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f541c ["COPY", "tmp:0:8", ["const:580:8"]]
+ 009f541c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f541c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f541c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f53dc ["INT_ADD", "register:40f0:8", ["const:9f53dc:8", "const:4:8"]]
- 009f53dc ["CALL", null, ["callee:00c53da0:8"]]
+ 009f5430 ["INT_ADD", "register:40f0:8", ["const:9f5430:8", "const:4:8"]]
+ 009f5430 ["CALL", null, ["callee:00c53da0:8"]]
- 009f53f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 009f53f0 ["INT_ADD", "register:40f0:8", ["const:9f53f0:8", "const:4:8"]]
- 009f53f0 ["CALLIND", null, ["register:0:8"]]
+ 009f5444 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f5444 ["INT_ADD", "register:40f0:8", ["const:9f5444:8", "const:4:8"]]
+ 009f5444 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3916cbcbf3d97ad29b1eba1fd12b3cf2"></a>

### [`009f5454`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f5/009f5454.md) → [`009f54a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f54a8.md) FUN_009f54a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00859b4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b4c.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.88% / 新版 96.88%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f5510",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f54bc",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 5,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f556c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f5518",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f5510",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "009f556c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009f5510",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009f556c",
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
- 009f54bc ["INT_ADD", "register:40f0:8", ["const:9f54bc:8", "const:4:8"]]
- 009f54bc ["CALL", null, ["ram:47acf4:8"]]
+ 009f5510 ["INT_ADD", "register:40f0:8", ["const:9f5510:8", "const:4:8"]]
+ 009f5510 ["CALL", null, ["ram:47ad34:8"]]
- 009f5510 ["INT_ADD", "register:40f0:8", ["const:9f5510:8", "const:4:8"]]
- 009f5510 ["CALL", null, ["callee:009dce94:8"]]
+ 009f5564 ["INT_ADD", "register:40f0:8", ["const:9f5564:8", "const:4:8"]]
+ 009f5564 ["CALL", null, ["callee:009dce94:8"]]
- 009f5518 ["INT_ADD", "register:40f0:8", ["const:9f5518:8", "const:4:8"]]
- 009f5518 ["CALL", null, ["ram:47acf4:8"]]
+ 009f556c ["INT_ADD", "register:40f0:8", ["const:9f556c:8", "const:4:8"]]
+ 009f556c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-c3342c46f0d1d2074f9413f65b7b59be"></a>

### [`009f5554`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f5/009f5554.md) → [`009f55a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f55a8.md) FUN_009f55a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046a250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a250.md) [`0046af18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af18.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md)
- 新版 呼出元 0件  · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.88% / 新版 97.88%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f5938",
      "incomplete_value": true,
      "site": "009f5950",
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f58e4",
      "incomplete_value": true,
      "site": "009f58fc",
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
                "const:20:8"
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
      "definition_site": "009f5934",
      "incomplete_value": true,
      "site": "009f5954",
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
                "const:302000:8"
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
      "definition_site": "009f58e0",
      "incomplete_value": true,
      "site": "009f5900",
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
                "const:302000:8"
              ],
              [
                "leaf",
                "const:c70:8"
              ]
            ]
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
      "definition_site": "009f5934",
      "incomplete_value": true,
      "site": "009f5954",
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
      "definition_site": "009f58e0",
      "incomplete_value": true,
      "site": "009f5900",
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
      "009f55e8",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "009f55f4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f55fc",
      "PARAM",
      [
        "storage",
        "00c71990",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f55e8",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f55f4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f55fc",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f55b4 ["INT_ADD", "register:40f0:8", ["const:9f55b4:8", "const:4:8"]]
- 009f55b4 ["CALL", null, ["callee:00c586e0:8"]]
+ 009f5608 ["INT_ADD", "register:40f0:8", ["const:9f5608:8", "const:4:8"]]
+ 009f5608 ["CALL", null, ["callee:00c586e0:8"]]
- 009f55ec ["INT_ADD", "register:40f0:8", ["const:9f55ec:8", "const:4:8"]]
- 009f55ec ["CALL", null, ["callee:00851550:8"]]
+ 009f5640 ["INT_ADD", "register:40f0:8", ["const:9f5640:8", "const:4:8"]]
+ 009f5640 ["CALL", null, ["callee:00851550:8"]]
- 009f5594 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:978:8"]]
- 009f5594 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009f55e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
+ 009f55e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-92a8667c8eb18c96233598354ee679fa"></a>

### [`009f5ab4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f5/009f5ab4.md) → [`009f5b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f5b08.md) FUN_009f5b08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009fb44c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009fb/009fb44c.md) · 呼出先 20件 [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`0057bea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0057b/0057bea8.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`00665d64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/00665d64.md)
- 新版 呼出元 1件 [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 20件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00665da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665da4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f5b60",
      "incomplete_value": false,
      "site": "009f5b6c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f5b0c",
      "incomplete_value": false,
      "site": "009f5b18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
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
      "definition_site": "009f5ba4",
      "incomplete_value": true,
      "site": "009f5bac",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:248:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f5b50",
      "incomplete_value": true,
      "site": "009f5b58",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:208:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f5fe8",
      "value": [
        "leaf",
        "ram:6c63ec:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f5f94",
      "value": [
        "leaf",
        "ram:6c6394:8"
      ]
    },
    "ordinal": 49,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f5b6c",
      "DATA",
      [
        "storage",
        "00c8a4e8",
        null,
        "undefined *"
      ]
    ],
    [
      "009f5ba4",
      "READ",
      [
        "storage",
        "002c4208",
        null,
        "undefined8"
      ]
    ],
    [
      "009f5fe8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c6394"
      ]
    ]
  ],
  "added": [
    [
      "009f5b6c",
      "DATA",
      [
        "storage",
        "00c8a5b8",
        null,
        "undefined *"
      ]
    ],
    [
      "009f5ba4",
      "READ",
      [
        "storage",
        "002c4248",
        null,
        "undefined8"
      ]
    ],
    [
      "009f5fe8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c63ec"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f5bac ["COPY", "register:0:8", ["register:4040:8"]]
- 009f5bac ["INT_ADD", "register:40f0:8", ["const:9f5bac:8", "const:4:8"]]
- 009f5bac ["CALLIND", null, ["register:0:8"]]
+ 009f5c00 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f5c00 ["INT_ADD", "register:40f0:8", ["const:9f5c00:8", "const:4:8"]]
+ 009f5c00 ["CALLIND", null, ["register:0:8"]]
- 009f5f94 ["INT_ADD", "register:40f0:8", ["const:9f5f94:8", "const:4:8"]]
- 009f5f94 ["CALL", null, ["ram:6c6394:8"]]
+ 009f5fe8 ["INT_ADD", "register:40f0:8", ["const:9f5fe8:8", "const:4:8"]]
+ 009f5fe8 ["CALL", null, ["ram:6c63ec:8"]]
- 009f5b00 ["INT_ADD", "register:40f0:8", ["const:9f5b00:8", "const:4:8"]]
- 009f5b00 ["CALL", null, ["callee:00c57f60:8"]]
+ 009f5b54 ["INT_ADD", "register:40f0:8", ["const:9f5b54:8", "const:4:8"]]
+ 009f5b54 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-d91b52a54df88de054d354524a4228c7"></a>

### [`009f68e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f6/009f68e4.md) → [`009f6938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f6938.md) FUN_009f6938

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f6958",
      "incomplete_value": false,
      "site": "009f695c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f6904",
      "incomplete_value": false,
      "site": "009f6908",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f6998",
      "incomplete_value": false,
      "site": "009f69a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f6944",
      "incomplete_value": false,
      "site": "009f694c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8a000:8"
          ],
          [
            "leaf",
            "const:480:8"
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
      "009f695c",
      "DATA",
      [
        "storage",
        "00c8a4e8",
        null,
        "undefined *"
      ]
    ],
    [
      "009f69a0",
      "DATA",
      [
        "storage",
        "00c8a480",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f695c",
      "DATA",
      [
        "storage",
        "00c8a5b8",
        null,
        "undefined *"
      ]
    ],
    [
      "009f69a0",
      "DATA",
      [
        "storage",
        "00c8a550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f6904 ["COPY", "tmp:0:8", ["const:4e8:8"]]
- 009f6904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f6904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f6904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f6958 ["COPY", "tmp:0:8", ["const:5b8:8"]]
+ 009f6958 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f6958 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f6958 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f6918 ["INT_ADD", "register:40f0:8", ["const:9f6918:8", "const:4:8"]]
- 009f6918 ["CALL", null, ["callee:00c53da0:8"]]
+ 009f696c ["INT_ADD", "register:40f0:8", ["const:9f696c:8", "const:4:8"]]
+ 009f696c ["CALL", null, ["callee:00c53da0:8"]]
- 009f692c ["COPY", "register:0:8", ["register:4040:8"]]
- 009f692c ["INT_ADD", "register:40f0:8", ["const:9f692c:8", "const:4:8"]]
- 009f692c ["CALLIND", null, ["register:0:8"]]
+ 009f6980 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009f6980 ["INT_ADD", "register:40f0:8", ["const:9f6980:8", "const:4:8"]]
+ 009f6980 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-b8c96f234d1df81acfdc03a2f7d1e768"></a>

### [`009f6990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f6/009f6990.md) → [`009f69e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f69e4.md) FUN_009f69e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0046da5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046da5c.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.76% / 新版 98.76%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f6bb0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f6b5c",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 18,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f6c24",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f6bd0",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 26,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f6b50",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[59]"
      ]
    ],
    [
      "009f6b60",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[59]"
      ]
    ],
    [
      "009f6bb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009f6b50",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "009f6b60",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "009f6bb0",
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
- 009f6b5c ["INT_ADD", "register:40f0:8", ["const:9f6b5c:8", "const:4:8"]]
- 009f6b5c ["CALL", null, ["ram:47acf4:8"]]
+ 009f6bb0 ["INT_ADD", "register:40f0:8", ["const:9f6bb0:8", "const:4:8"]]
+ 009f6bb0 ["CALL", null, ["ram:47ad34:8"]]
- 009f6bd0 ["INT_ADD", "register:40f0:8", ["const:9f6bd0:8", "const:4:8"]]
- 009f6bd0 ["CALL", null, ["ram:47acf4:8"]]
+ 009f6c24 ["INT_ADD", "register:40f0:8", ["const:9f6c24:8", "const:4:8"]]
+ 009f6c24 ["CALL", null, ["ram:47ad34:8"]]
- 009f69d4 ["INT_ADD", "register:40f0:8", ["const:9f69d4:8", "const:4:8"]]
- 009f69d4 ["CALL", null, ["callee:0046da9c:8"]]
+ 009f6a28 ["INT_ADD", "register:40f0:8", ["const:9f6a28:8", "const:4:8"]]
+ 009f6a28 ["CALL", null, ["callee:0046da9c:8"]]
~~~


