# v16.0.2 → v16.0.3 · 最優先の変更候補 (69)

[一覧の目次](README.md)

<a id="compare-e72b5eaf07e58ecd616a9c8efa40a556"></a>

### [`009dcbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dcbb8.md) → [`009ddb64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009dd/009ddb64.md) FUN_009ddb64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 11件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488598.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 11件 [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004888b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004888b8.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

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
      "definition_site": "009ddba4",
      "incomplete_value": false,
      "site": "009ddbac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ddbcc",
      "incomplete_value": true,
      "site": "009ddbcc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ddd70",
      "incomplete_value": true,
      "site": "009ddd74",
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
      "009ddbac",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ddbc0",
      "READ",
      [
        "storage",
        "002acda3",
        null,
        "string"
      ]
    ],
    [
      "009ddc04",
      "READ",
      [
        "storage",
        "002c4070",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009ddbac",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009ddbc0",
      "READ",
      [
        "storage",
        "002ace70",
        null,
        "string"
      ]
    ],
    [
      "009ddc04",
      "READ",
      [
        "storage",
        "002c40c0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dcbf0 ["INT_ADD", "register:40f0:8", ["const:9dcbf0:8", "const:4:8"]]
- 009dcbf0 ["CALL", null, ["callee:00488180:8"]]
+ 009ddb9c ["INT_ADD", "register:40f0:8", ["const:9ddb9c:8", "const:4:8"]]
+ 009ddb9c ["CALL", null, ["callee:00488180:8"]]
- 009dcbf4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009ddba0 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009dcbf8 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009dcbf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009dcbf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009dcbf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ddba4 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009ddba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ddba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ddba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5929fd50f4b972dda5653ef1256cd3b1"></a>

### [`009dd02c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd02c.md) → [`009ddfd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009dd/009ddfd8.md) FUN_009ddfd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`007562fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00756/007562fc.md) [`0082cd54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082cd54.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085bbc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085bbc8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 5件 [`007566ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00756/007566ac.md) [`0082dd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082d/0082dd00.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085cb74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085cb74.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 87.27% / 新版 87.27%

優先判定に残った影響 `call_target` 1件, `store_destination` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009de014",
      "incomplete_value": true,
      "site": "009de014",
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
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009de008",
      "incomplete_value": true,
      "site": "009de014",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009de018",
      "incomplete_value": true,
      "site": "009de018",
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
    "old": {
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
      "009de008",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009de00c",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "009de014",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009de008",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009de00c",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "009de014",
      "WRITE",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dd068 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 009dd068 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 009de014 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 009de014 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 009dd06c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
- 009dd06c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 009de018 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a38:8"]]
+ 009de018 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
- 009dd07c ["INT_ADD", "register:40f0:8", ["const:9dd07c:8", "const:4:8"]]
- 009dd07c ["CALL", null, ["ram:7562fc:8"]]
+ 009de028 ["INT_ADD", "register:40f0:8", ["const:9de028:8", "const:4:8"]]
+ 009de028 ["CALL", null, ["ram:7566ac:8"]]
~~~


<a id="compare-da2528ea9a7ea68e495c49fb747c00c9"></a>

### [`009dd144`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd144.md) → [`009de0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009de/009de0f0.md) FUN_009de0f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009d5d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d5/009d5d4c.md) [`009d7a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7a80.md) [`00a1a7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a7a4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`009d6cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d6/009d6cf8.md) [`009d8a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8a2c.md) [`00a1b750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b750.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009de0fc",
      "incomplete_value": false,
      "site": "009de100",
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
      "009de0fc",
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
      "009de0fc",
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
- 009dd154 ["INT_ADD", "register:40f0:8", ["const:9dd154:8", "const:4:8"]]
- 009dd154 ["CALL", null, ["callee:0043bad8:8"]]
+ 009de100 ["INT_ADD", "register:40f0:8", ["const:9de100:8", "const:4:8"]]
+ 009de100 ["CALL", null, ["callee:0043bad8:8"]]
- 009dd14c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009de0f8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009dd150 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009dd150 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009dd150 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009dd150 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009de0fc ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009de0fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009de0fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009de0fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4f688a735b902b3cd4e1327cb7225bc0"></a>

### [`009dd158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd158.md) → [`009de104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009de/009de104.md) FUN_009de104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009d9980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d9/009d9980.md) [`009dd158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd158.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`009da92c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009da/009da92c.md) [`009de104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009de/009de104.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.50% / 新版 98.50%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009de260",
      "incomplete_value": false,
      "site": "009de268",
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
            "const:62:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009de3b8",
      "incomplete_value": false,
      "site": "009de3c0",
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
            "const:ef6:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009de3d0",
      "incomplete_value": false,
      "site": "009de3dc",
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
            "const:f73:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009de260",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "009de284",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "009de3b8",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009de260",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "009de284",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "009de3b8",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009dd2bc ["INT_ADD", "register:40f0:8", ["const:9dd2bc:8", "const:4:8"]]
- 009dd2bc ["CALL", null, ["callee:004421f4:8"]]
+ 009de268 ["INT_ADD", "register:40f0:8", ["const:9de268:8", "const:4:8"]]
+ 009de268 ["CALL", null, ["callee:004421f4:8"]]
- 009dd414 ["INT_ADD", "register:40f0:8", ["const:9dd414:8", "const:4:8"]]
- 009dd414 ["CALL", null, ["callee:004421f4:8"]]
+ 009de3c0 ["INT_ADD", "register:40f0:8", ["const:9de3c0:8", "const:4:8"]]
+ 009de3c0 ["CALL", null, ["callee:004421f4:8"]]
- 009dd430 ["INT_ADD", "register:40f0:8", ["const:9dd430:8", "const:4:8"]]
- 009dd430 ["CALL", null, ["callee:00442b54:8"]]
+ 009de3dc ["INT_ADD", "register:40f0:8", ["const:9de3dc:8", "const:4:8"]]
+ 009de3dc ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-1e05be9375f606726bf1b84be8529937"></a>

### [`009dd970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd970.md) → [`009de91c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009de/009de91c.md) FUN_009de91c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009d803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d8/009d803c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009d8fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8fe8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009de928",
      "incomplete_value": false,
      "site": "009de92c",
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
      "009de928",
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
      "009de928",
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
- 009dd980 ["INT_ADD", "register:40f0:8", ["const:9dd980:8", "const:4:8"]]
- 009dd980 ["CALL", null, ["callee:0043bad8:8"]]
+ 009de92c ["INT_ADD", "register:40f0:8", ["const:9de92c:8", "const:4:8"]]
+ 009de92c ["CALL", null, ["callee:0043bad8:8"]]
- 009dd978 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009de924 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009dd97c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009dd97c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009dd97c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009dd97c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009de928 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009de928 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009de928 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009de928 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a91f5b1192aeceb6820f15801e294376"></a>

### [`009dd984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd984.md) → [`009de930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009de/009de930.md) FUN_009de930

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009d803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d8/009d803c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009d8fe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8fe8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009de93c",
      "incomplete_value": false,
      "site": "009de940",
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
      "009de93c",
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
      "009de93c",
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
- 009dd994 ["INT_ADD", "register:40f0:8", ["const:9dd994:8", "const:4:8"]]
- 009dd994 ["CALL", null, ["callee:0043bad8:8"]]
+ 009de940 ["INT_ADD", "register:40f0:8", ["const:9de940:8", "const:4:8"]]
+ 009de940 ["CALL", null, ["callee:0043bad8:8"]]
- 009dd98c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009de938 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009dd990 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009dd990 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009dd990 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009dd990 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009de93c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009de93c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009de93c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009de93c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-0045288154685a387b34774b353fb2c3"></a>

### [`009dd998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009dd998.md) → [`009de944`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009de/009de944.md) _INIT_202

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009de9e4",
      "incomplete_value": true,
      "site": "009de9fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009dea00",
      "incomplete_value": true,
      "site": "009dea1c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:643:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009dea20",
      "incomplete_value": true,
      "site": "009dea3c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009de980",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009de9a4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009de9c4",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009de980",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009de9a4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009de9c4",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ddbcc ["INT_ADD", "register:40f0:8", ["const:9ddbcc:8", "const:4:8"]]
- 009ddbcc ["CALL", null, ["callee:00c58ed0:8"]]
+ 009deb78 ["INT_ADD", "register:40f0:8", ["const:9deb78:8", "const:4:8"]]
+ 009deb78 ["CALL", null, ["callee:00c58ed0:8"]]
- 009dd9c0 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009de96c ["COPY", "register:4098:8", ["const:1124000:8"]]
- 009dd9c4 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 009dd9c4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009dd9c4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009dd9c4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009de970 ["COPY", "tmp:0:8", ["const:db0:8"]]
+ 009de970 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009de970 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009de970 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-4d98b1a67ac64b89cfd4f797a83b3f98"></a>

### [`009ddd34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dd/009ddd34.md) → [`009dece0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009de/009dece0.md) FUN_009dece0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

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
      "definition_site": "009ded20",
      "incomplete_value": false,
      "site": "009ded2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ded54",
      "incomplete_value": true,
      "site": "009ded64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6d9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ded68",
      "incomplete_value": true,
      "site": "009ded68",
      "value": [
        "LOAD",
        "8",
        [
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
      "009ded2c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ded54",
      "READ",
      [
        "storage",
        "0029f699",
        null,
        "string"
      ]
    ],
    [
      "009ded58",
      "READ",
      [
        "storage",
        "0029f6a8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ded2c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009ded54",
      "READ",
      [
        "storage",
        "0029f6d9",
        null,
        "string"
      ]
    ],
    [
      "009ded58",
      "READ",
      [
        "storage",
        "0029f6e8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ddd68 ["INT_ADD", "register:40f0:8", ["const:9ddd68:8", "const:4:8"]]
- 009ddd68 ["CALL", null, ["callee:00488180:8"]]
+ 009ded14 ["INT_ADD", "register:40f0:8", ["const:9ded14:8", "const:4:8"]]
+ 009ded14 ["CALL", null, ["callee:00488180:8"]]
- 009ddd70 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009ded1c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009ddd74 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009ddd74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ddd74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ddd74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ded20 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009ded20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ded20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ded20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5e252e0986cba1d7911e955d5430b1b5"></a>

### [`009de0d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009de0d4.md) → [`009df080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009df/009df080.md) FUN_009df080

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a87b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a87b40.md) · 呼出先 3件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`00a88b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a88/00a88b34.md) · 呼出先 3件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

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
      "site": "009df0a4",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de0f8",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "009df0a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "009df0a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ]
  ]
}
~~~


~~~diff
- 009de0f8 ["INT_ADD", "register:40f0:8", ["const:9de0f8:8", "const:4:8"]]
- 009de0f8 ["CALL", null, ["ram:48cd38:8"]]
+ 009df0a4 ["INT_ADD", "register:40f0:8", ["const:9df0a4:8", "const:4:8"]]
+ 009df0a4 ["CALL", null, ["ram:48d058:8"]]
- 009de0fc ["INT_ADD", "register:40f0:8", ["const:9de0fc:8", "const:4:8"]]
- 009de0fc ["CALL", null, ["callee:0048d1e4:8"]]
+ 009df0a8 ["INT_ADD", "register:40f0:8", ["const:9df0a8:8", "const:4:8"]]
+ 009df0a8 ["CALL", null, ["callee:0048d1e4:8"]]
- 009de110 ["INT_ADD", "register:40f0:8", ["const:9de110:8", "const:4:8"]]
- 009de110 ["CALL", null, ["callee:008524fc:8"]]
+ 009df0bc ["INT_ADD", "register:40f0:8", ["const:9df0bc:8", "const:4:8"]]
+ 009df0bc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-73ecbb4e2c6bdf22924c30bf3bc91bd7"></a>

### [`009de664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009de664.md) → [`009df610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009df/009df610.md) FUN_009df610

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`007dd3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007dd/007dd3bc.md) · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a84c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84c60.md) [`00a84df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84df8.md)
- 新版 呼出元 2件 [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`007de320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007de/007de320.md) · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a85c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85c54.md) [`00a85dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85dec.md)

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
      "site": "009df63c",
      "value": [
        "leaf",
        "ram:a85dec:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de690",
      "value": [
        "leaf",
        "ram:a84df8:8"
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
      "site": "009df658",
      "value": [
        "leaf",
        "ram:a85dec:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009de6ac",
      "value": [
        "leaf",
        "ram:a84df8:8"
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
      "009df63c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84df8"
      ]
    ],
    [
      "009df658",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84df8"
      ]
    ]
  ],
  "added": [
    [
      "009df63c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a85dec"
      ]
    ],
    [
      "009df658",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a85dec"
      ]
    ]
  ]
}
~~~


~~~diff
- 009de690 ["INT_ADD", "register:40f0:8", ["const:9de690:8", "const:4:8"]]
- 009de690 ["CALL", null, ["ram:a84df8:8"]]
+ 009df63c ["INT_ADD", "register:40f0:8", ["const:9df63c:8", "const:4:8"]]
+ 009df63c ["CALL", null, ["ram:a85dec:8"]]
- 009de6ac ["INT_ADD", "register:40f0:8", ["const:9de6ac:8", "const:4:8"]]
- 009de6ac ["CALL", null, ["ram:a84df8:8"]]
+ 009df658 ["INT_ADD", "register:40f0:8", ["const:9df658:8", "const:4:8"]]
+ 009df658 ["CALL", null, ["ram:a85dec:8"]]
- 009de680 ["INT_ADD", "register:40f0:8", ["const:9de680:8", "const:4:8"]]
- 009de680 ["CALL", null, ["callee:008524fc:8"]]
+ 009df62c ["INT_ADD", "register:40f0:8", ["const:9df62c:8", "const:4:8"]]
+ 009df62c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-bfdf3a2ac82343a7922d8cd68ec23449"></a>

### [`009de8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009de8e4.md) → [`009df890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009df/009df890.md) _INIT_203

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009df8cc",
      "incomplete_value": true,
      "site": "009df8e8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009df8f0",
      "incomplete_value": true,
      "site": "009df90c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009df910",
      "incomplete_value": true,
      "site": "009df92c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009df8cc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009df8f0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009df910",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009df8cc",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009df8f0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009df910",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dea44 ["INT_ADD", "register:40f0:8", ["const:9dea44:8", "const:4:8"]]
- 009dea44 ["CALL", null, ["callee:0043bb58:8"]]
+ 009df9f0 ["INT_ADD", "register:40f0:8", ["const:9df9f0:8", "const:4:8"]]
+ 009df9f0 ["CALL", null, ["callee:0043bb58:8"]]
- 009deb18 ["INT_ADD", "register:40f0:8", ["const:9deb18:8", "const:4:8"]]
- 009deb18 ["CALL", null, ["callee:00c58ed0:8"]]
+ 009dfac4 ["INT_ADD", "register:40f0:8", ["const:9dfac4:8", "const:4:8"]]
+ 009dfac4 ["CALL", null, ["callee:00c58ed0:8"]]
- 009de90c ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009df8b8 ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-4f2b946c0f273511808371fa0b6b3dfe"></a>

### [`009df940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df940.md) → [`009e08ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e08ec.md) FUN_009e08ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 11件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`009dfaf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfaf0.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) [`009e340c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e340c.md) · 呼出先 8件 [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md) [`006650ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/006650ac.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00936618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00936/00936618.md) [`009df6bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df6bc.md)
- 新版 呼出元 11件 [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) [`009e0a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0a9c.md) [`009e2278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e2/009e2278.md) [`009e43b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e43b8.md) · 呼出先 8件 [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md) [`0066545c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/0066545c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009375c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00937/009375c4.md) [`009e0668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0668.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.72% / 新版 90.72%

優先判定に残った影響 `call_target` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e09ac",
      "incomplete_value": true,
      "site": "009e09bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a52:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e09b0",
      "incomplete_value": true,
      "site": "009e09c0",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e09b4",
      "incomplete_value": true,
      "site": "009e09c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009e09ac",
      "READ",
      [
        "storage",
        "002b6983",
        null,
        "string"
      ]
    ],
    [
      "009e09b0",
      "READ",
      [
        "storage",
        "002b6991",
        null,
        "string"
      ]
    ],
    [
      "009e09b4",
      "READ",
      [
        "storage",
        "002c2470",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e09ac",
      "READ",
      [
        "storage",
        "002b6a52",
        null,
        "string"
      ]
    ],
    [
      "009e09b0",
      "READ",
      [
        "storage",
        "002b6a60",
        null,
        "string"
      ]
    ],
    [
      "009e09b4",
      "READ",
      [
        "storage",
        "002c24c0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009dfa78 ["INT_ADD", "register:40f0:8", ["const:9dfa78:8", "const:4:8"]]
- 009dfa78 ["CALL", null, ["ram:6650ac:8"]]
+ 009e0a24 ["INT_ADD", "register:40f0:8", ["const:9e0a24:8", "const:4:8"]]
+ 009e0a24 ["CALL", null, ["ram:66545c:8"]]
- 009df974 ["INT_ADD", "register:40f0:8", ["const:9df974:8", "const:4:8"]]
- 009df974 ["CALL", null, ["callee:009e0668:8"]]
+ 009e0920 ["INT_ADD", "register:40f0:8", ["const:9e0920:8", "const:4:8"]]
+ 009e0920 ["CALL", null, ["callee:009e0668:8"]]
- 009df984 ["INT_ADD", "register:40f0:8", ["const:9df984:8", "const:4:8"]]
- 009df984 ["CALL", null, ["callee:008524fc:8"]]
+ 009e0930 ["INT_ADD", "register:40f0:8", ["const:9e0930:8", "const:4:8"]]
+ 009e0930 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0a50f6b3e400da7340262d79d833be27"></a>

### [`009dfb6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfb6c.md) → [`009e0b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0b18.md) FUN_009e0b18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00658c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658c2c.md) [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md) [`009dfe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfe00.md) [`00a47f54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a47/00a47f54.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006881b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00688/006881b8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 5件 [`00658fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658fdc.md) [`0065919c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00659/0065919c.md) [`0065b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065b/0065b130.md) [`009e0dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0dac.md) [`00a48f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a48/00a48f48.md) · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00688568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00688/00688568.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.65% / 新版 98.65%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e0b48",
      "incomplete_value": true,
      "site": "009e0b6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:170:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009e0b48",
      "READ",
      [
        "storage",
        "002c4120",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "009e0b48",
      "READ",
      [
        "storage",
        "002c4170",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 009dfb9c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:120:8"]]
- 009dfb9c ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 009dfb9c ["COPY", "register:5008:8", ["const:0:8"]]
- 009dfb9c ["COPY", "register:5010:8", ["const:0:8"]]
+ 009e0b48 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:170:8"]]
+ 009e0b48 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 009e0b48 ["COPY", "register:5008:8", ["const:0:8"]]
+ 009e0b48 ["COPY", "register:5010:8", ["const:0:8"]]
- 009dfbc4 ["INT_ADD", "register:40f0:8", ["const:9dfbc4:8", "const:4:8"]]
- 009dfbc4 ["CALL", null, ["callee:00688568:8"]]
+ 009e0b70 ["INT_ADD", "register:40f0:8", ["const:9e0b70:8", "const:4:8"]]
+ 009e0b70 ["CALL", null, ["callee:00688568:8"]]
- 009dfbdc ["INT_ADD", "register:40f0:8", ["const:9dfbdc:8", "const:4:8"]]
- 009dfbdc ["CALL", null, ["callee:00c54d60:8"]]
+ 009e0b88 ["INT_ADD", "register:40f0:8", ["const:9e0b88:8", "const:4:8"]]
+ 009e0b88 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-007e30b7b930dc3b8af263b2a8e948f9"></a>

### [`009e0228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e0228.md) → [`009e11d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e11d4.md) FUN_009e11d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 7件 [`0086ab34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086ab34.md) [`009e6560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6560.md) [`009e6564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6564.md) [`009f2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2658.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 7件 [`0086bae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086b/0086bae0.md) [`009e750c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e750c.md) [`009e7510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7510.md) [`009f3604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3604.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.37% / 新版 97.37%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e121c",
      "incomplete_value": false,
      "site": "009e1224",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e1224",
      "DATA",
      [
        "storage",
        "00c89d28",
        null,
        "undefined *"
      ]
    ],
    [
      "009e12cc",
      "READ",
      [
        "storage",
        "00c89d48",
        null,
        "pointer"
      ]
    ],
    [
      "009e12cc",
      "READ",
      [
        "storage",
        "00c89d50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e1224",
      "DATA",
      [
        "storage",
        "00c8acf8",
        null,
        "undefined *"
      ]
    ],
    [
      "009e12cc",
      "READ",
      [
        "storage",
        "00c8ad18",
        null,
        "pointer"
      ]
    ],
    [
      "009e12cc",
      "READ",
      [
        "storage",
        "00c8ad20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e0258 ["INT_ADD", "register:40f0:8", ["const:9e0258:8", "const:4:8"]]
- 009e0258 ["CALL", null, ["callee:0086bae0:8"]]
+ 009e1204 ["INT_ADD", "register:40f0:8", ["const:9e1204:8", "const:4:8"]]
+ 009e1204 ["CALL", null, ["callee:0086bae0:8"]]
- 009e026c ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009e1218 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009e0270 ["COPY", "tmp:0:8", ["const:d28:8"]]
- 009e0270 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e0270 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e0270 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e121c ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 009e121c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e121c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e121c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b996de9dae75a5b0c501194ac1357f0e"></a>

### [`009e03d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e03d0.md) → [`009e137c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e137c.md) FUN_009e137c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009e03a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e03a4.md) · 呼出先 22件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`009e1350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e1350.md) · 呼出先 22件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

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
      "definition_site": "009e13c0",
      "incomplete_value": false,
      "site": "009e13cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e13f8",
      "incomplete_value": true,
      "site": "009e1408",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6ee:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e13fc",
      "incomplete_value": true,
      "site": "009e140c",
      "value": [
        "LOAD",
        "16",
        [
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
      "009e13cc",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009e13f8",
      "READ",
      [
        "storage",
        "002c06a4",
        null,
        "string"
      ]
    ],
    [
      "009e13fc",
      "READ",
      [
        "storage",
        "002c06ad",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009e13cc",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009e13f8",
      "READ",
      [
        "storage",
        "002c06ee",
        null,
        "string"
      ]
    ],
    [
      "009e13fc",
      "READ",
      [
        "storage",
        "002c06f7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e0408 ["INT_ADD", "register:40f0:8", ["const:9e0408:8", "const:4:8"]]
- 009e0408 ["CALL", null, ["callee:00488180:8"]]
+ 009e13b4 ["INT_ADD", "register:40f0:8", ["const:9e13b4:8", "const:4:8"]]
+ 009e13b4 ["CALL", null, ["callee:00488180:8"]]
- 009e0410 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009e13bc ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009e0414 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009e0414 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e0414 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e0414 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e13c0 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009e13c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e13c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e13c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-47c7dc86a3174aafe3e9c517280075dd"></a>

### [`009e4760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e4760.md) → [`009e570c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e5/009e570c.md) FUN_009e570c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009f5b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f5b08.md) [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 9件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md)
- 新版 呼出元 2件 [`009f6ab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f6/009f6ab4.md) [`00a03be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03be8.md) · 呼出先 9件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md) [`005cd4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd4e0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.62% / 新版 95.62%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e57a8",
      "incomplete_value": true,
      "site": "009e57b8",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:330:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e5848",
      "incomplete_value": false,
      "site": "009e5854",
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
            "const:aff:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e57a0",
      "READ",
      [
        "storage",
        "002bee90",
        null,
        "string"
      ]
    ],
    [
      "009e57a4",
      "READ",
      [
        "storage",
        "002bee80",
        null,
        "string"
      ]
    ],
    [
      "009e57a8",
      "READ",
      [
        "storage",
        "002c22e0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e57a0",
      "READ",
      [
        "storage",
        "002bef6e",
        null,
        "string"
      ]
    ],
    [
      "009e57a4",
      "READ",
      [
        "storage",
        "002bef5e",
        null,
        "string"
      ]
    ],
    [
      "009e57a8",
      "READ",
      [
        "storage",
        "002c2330",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e48a8 ["INT_ADD", "register:40f0:8", ["const:9e48a8:8", "const:4:8"]]
- 009e48a8 ["CALL", null, ["callee:0060d858:8"]]
+ 009e5854 ["INT_ADD", "register:40f0:8", ["const:9e5854:8", "const:4:8"]]
+ 009e5854 ["CALL", null, ["callee:0060d858:8"]]
- 009e4794 ["COPY", "register:0:8", ["register:4040:8"]]
- 009e4794 ["INT_ADD", "register:40f0:8", ["const:9e4794:8", "const:4:8"]]
- 009e4794 ["CALLIND", null, ["register:0:8"]]
+ 009e5740 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009e5740 ["INT_ADD", "register:40f0:8", ["const:9e5740:8", "const:4:8"]]
+ 009e5740 ["CALLIND", null, ["register:0:8"]]
- 009e47a8 ["COPY", "register:0:8", ["register:4040:8"]]
- 009e47a8 ["INT_ADD", "register:40f0:8", ["const:9e47a8:8", "const:4:8"]]
- 009e47a8 ["CALLIND", null, ["register:0:8"]]
+ 009e5754 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009e5754 ["INT_ADD", "register:40f0:8", ["const:9e5754:8", "const:4:8"]]
+ 009e5754 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-07a79e053e0e3b79269de23787fb11bc"></a>

### [`009e4a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e4/009e4a5c.md) → [`009e5a08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e5/009e5a08.md) FUN_009e5a08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`009f931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f931c.md) [`009f9870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9870.md) · 呼出先 14件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md)
- 新版 呼出元 6件 [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0061491c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00614/0061491c.md) [`0093c770`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0093c/0093c770.md) [`009fa2c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009fa2c8.md) [`009fa81c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009fa81c.md) · 呼出先 14件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md) [`005cd4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd4e0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.71% / 新版 92.71%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 1件, `store_value` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e5b28",
      "incomplete_value": true,
      "site": "009e5b28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:466:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e5b2c",
      "incomplete_value": true,
      "site": "009e5b2c",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e5c64",
      "incomplete_value": true,
      "site": "009e5c74",
      "value": [
        "LOAD",
        "8",
        [
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
      "009e5ad0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006648e0"
      ]
    ],
    [
      "009e5b18",
      "READ",
      [
        "storage",
        "002a1426",
        null,
        "string"
      ]
    ],
    [
      "009e5b1c",
      "READ",
      [
        "storage",
        "002a142c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009e5ad0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00664c90"
      ]
    ],
    [
      "009e5b18",
      "READ",
      [
        "storage",
        "002a1466",
        null,
        "string"
      ]
    ],
    [
      "009e5b1c",
      "READ",
      [
        "storage",
        "002a146c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e4b24 ["INT_ADD", "register:40f0:8", ["const:9e4b24:8", "const:4:8"]]
- 009e4b24 ["CALL", null, ["ram:6648e0:8"]]
+ 009e5ad0 ["INT_ADD", "register:40f0:8", ["const:9e5ad0:8", "const:4:8"]]
+ 009e5ad0 ["CALL", null, ["ram:664c90:8"]]
- 009e4ed0 ["INT_ADD", "register:40f0:8", ["const:9e4ed0:8", "const:4:8"]]
- 009e4ed0 ["CALL", null, ["callee:0060df00:8"]]
+ 009e5e7c ["INT_ADD", "register:40f0:8", ["const:9e5e7c:8", "const:4:8"]]
+ 009e5e7c ["CALL", null, ["callee:0060df00:8"]]
- 009e4eec ["INT_ADD", "register:40f0:8", ["const:9e4eec:8", "const:4:8"]]
- 009e4eec ["CALL", null, ["callee:007f0a44:8"]]
+ 009e5e98 ["INT_ADD", "register:40f0:8", ["const:9e5e98:8", "const:4:8"]]
+ 009e5e98 ["CALL", null, ["callee:007f0a44:8"]]
~~~


<a id="compare-2b7f1a38fa8ea85f7e88cc88584a8ef2"></a>

### [`009e52b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e5/009e52b4.md) → [`009e6260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e6/009e6260.md) FUN_009e6260

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 11件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`009e2fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e2/009e2fe8.md)
- 新版 呼出元 1件 [`00a03be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03be8.md) · 呼出先 11件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba85c.md) [`008bbccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbccc.md) [`009e3f94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e3/009e3f94.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.42% / 新版 85.42%

優先判定に残った影響 `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e630c",
      "incomplete_value": true,
      "site": "009e631c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:69c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e6310",
      "incomplete_value": true,
      "site": "009e6320",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e6314",
      "incomplete_value": true,
      "site": "009e6324",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009e630c",
      "READ",
      [
        "storage",
        "002b55be",
        null,
        "string"
      ]
    ],
    [
      "009e6310",
      "READ",
      [
        "storage",
        "002b55c8",
        null,
        "string"
      ]
    ],
    [
      "009e6314",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e630c",
      "READ",
      [
        "storage",
        "002b569c",
        null,
        "string"
      ]
    ],
    [
      "009e6310",
      "READ",
      [
        "storage",
        "002b56a6",
        null,
        "string"
      ]
    ],
    [
      "009e6314",
      "READ",
      [
        "storage",
        "002c2b20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e52e0 ["INT_ADD", "register:40f0:8", ["const:9e52e0:8", "const:4:8"]]
- 009e52e0 ["CALL", null, ["callee:009e3f94:8"]]
+ 009e628c ["INT_ADD", "register:40f0:8", ["const:9e628c:8", "const:4:8"]]
+ 009e628c ["CALL", null, ["callee:009e3f94:8"]]
- 009e5344 ["INT_ADD", "register:40f0:8", ["const:9e5344:8", "const:4:8"]]
- 009e5344 ["CALL", null, ["callee:008524fc:8"]]
+ 009e62f0 ["INT_ADD", "register:40f0:8", ["const:9e62f0:8", "const:4:8"]]
+ 009e62f0 ["CALL", null, ["callee:008524fc:8"]]
- 009e5350 ["INT_ADD", "register:40f0:8", ["const:9e5350:8", "const:4:8"]]
- 009e5350 ["CALL", null, ["callee:00c58f30:8"]]
+ 009e62fc ["INT_ADD", "register:40f0:8", ["const:9e62fc:8", "const:4:8"]]
+ 009e62fc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d2cca1da9e3ca0484e49b5975cc0fa29"></a>

### [`009e5670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e5/009e5670.md) → [`009e661c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e6/009e661c.md) FUN_009e661c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0061456c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00614/0061456c.md) · 呼出先 9件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`009e8cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8cc0.md)
- 新版 呼出元 2件 [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0061491c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00614/0061491c.md) · 呼出先 9件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba85c.md) [`008bbccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bb/008bbccc.md) [`009e9c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9c6c.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.49% / 新版 86.49%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e6664",
      "incomplete_value": true,
      "site": "009e6674",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e63:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e6668",
      "incomplete_value": true,
      "site": "009e6678",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e666c",
      "incomplete_value": true,
      "site": "009e667c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009e6664",
      "READ",
      [
        "storage",
        "002a5d0b",
        null,
        "string"
      ]
    ],
    [
      "009e6668",
      "READ",
      [
        "storage",
        "002a5d15",
        null,
        "string"
      ]
    ],
    [
      "009e666c",
      "READ",
      [
        "storage",
        "002c2ad0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e6664",
      "READ",
      [
        "storage",
        "002a5e63",
        null,
        "string"
      ]
    ],
    [
      "009e6668",
      "READ",
      [
        "storage",
        "002a5e6d",
        null,
        "string"
      ]
    ],
    [
      "009e666c",
      "READ",
      [
        "storage",
        "002c2b20",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e569c ["INT_ADD", "register:40f0:8", ["const:9e569c:8", "const:4:8"]]
- 009e569c ["CALL", null, ["callee:008524fc:8"]]
+ 009e6648 ["INT_ADD", "register:40f0:8", ["const:9e6648:8", "const:4:8"]]
+ 009e6648 ["CALL", null, ["callee:008524fc:8"]]
- 009e56a8 ["INT_ADD", "register:40f0:8", ["const:9e56a8:8", "const:4:8"]]
- 009e56a8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009e6654 ["INT_ADD", "register:40f0:8", ["const:9e6654:8", "const:4:8"]]
+ 009e6654 ["CALL", null, ["callee:00c58f30:8"]]
- 009e56b0 ["COPY", "tmp:0:8", ["const:d0b:8"]]
- 009e56b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e56b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e56b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e665c ["COPY", "tmp:0:8", ["const:e63:8"]]
+ 009e665c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e665c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e665c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0e4a5cc14d3c81b9cc76e27bc4a8bd3b"></a>

### [`009e6514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6514.md) → [`009e74c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e74c0.md) FUN_009e74c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 6件 [`009dec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009dec74.md) [`009dfe60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfe60.md) [`009e12cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e12cc.md) [`009e340c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e340c.md) [`009f931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f931c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 6件 [`009dfc20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009df/009dfc20.md) [`009e0e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0e0c.md) [`009e2278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e2/009e2278.md) [`009e43b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e43b8.md) [`009fa2c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009fa2c8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e74cc",
      "incomplete_value": false,
      "site": "009e74d0",
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
      "009e74cc",
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
      "009e74cc",
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
- 009e6524 ["INT_ADD", "register:40f0:8", ["const:9e6524:8", "const:4:8"]]
- 009e6524 ["CALL", null, ["callee:0043bad8:8"]]
+ 009e74d0 ["INT_ADD", "register:40f0:8", ["const:9e74d0:8", "const:4:8"]]
+ 009e74d0 ["CALL", null, ["callee:0043bad8:8"]]
- 009e651c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009e74c8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009e6520 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009e6520 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009e6520 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009e6520 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009e74cc ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009e74cc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009e74cc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009e74cc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d9c9ac6f37b138f8810d72f7afe2ee60"></a>

### [`009e652c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e652c.md) → [`009e74d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e74d8.md) FUN_009e74d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e74ec",
      "incomplete_value": false,
      "site": "009e74f0",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e74f0",
      "DATA",
      [
        "storage",
        "00c89d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e74f0",
      "DATA",
      [
        "storage",
        "00c8acf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e6538 ["INT_ADD", "register:40f0:8", ["const:9e6538:8", "const:4:8"]]
- 009e6538 ["CALL", null, ["callee:00c58f30:8"]]
+ 009e74e4 ["INT_ADD", "register:40f0:8", ["const:9e74e4:8", "const:4:8"]]
+ 009e74e4 ["CALL", null, ["callee:00c58f30:8"]]
- 009e653c ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009e74e8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009e6540 ["COPY", "tmp:0:8", ["const:d28:8"]]
- 009e6540 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e6540 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e6540 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e74ec ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 009e74ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e74ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e74ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fafe4365bb4f272eb4e5064544583f32"></a>

### [`009e6550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6550.md) → [`009e74fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e74fc.md) FUN_009e74fc

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
      "definition_site": "009e7500",
      "incomplete_value": false,
      "site": "009e7504",
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
            "const:cf8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e7504",
      "DATA",
      [
        "storage",
        "00c89d28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e7504",
      "DATA",
      [
        "storage",
        "00c8acf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e6550 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009e74fc ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009e6554 ["COPY", "tmp:0:8", ["const:d28:8"]]
- 009e6554 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e6554 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e6554 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e7500 ["COPY", "tmp:0:8", ["const:cf8:8"]]
+ 009e7500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e7500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e7500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-297e572af1986b3ff7d4ac78e4070a1c"></a>

### [`009e67c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e67c8.md) → [`009e7774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7774.md) FUN_009e7774

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009e6594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6594.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009e7540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7540.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e7780",
      "incomplete_value": false,
      "site": "009e7784",
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
      "009e7780",
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
      "009e7780",
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
- 009e67d8 ["INT_ADD", "register:40f0:8", ["const:9e67d8:8", "const:4:8"]]
- 009e67d8 ["CALL", null, ["callee:0043bad8:8"]]
+ 009e7784 ["INT_ADD", "register:40f0:8", ["const:9e7784:8", "const:4:8"]]
+ 009e7784 ["CALL", null, ["callee:0043bad8:8"]]
- 009e67d0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009e777c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009e67d4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009e67d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009e67d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009e67d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009e7780 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009e7780 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009e7780 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009e7780 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ca8bab25159a5479a33a25553354f8a9"></a>

### [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) → [`009e7c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7c80.md) FUN_009e7c80

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009e3140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e3/009e3140.md) [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) · 呼出先 7件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) [`009e7c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7c04.md) [`009e7e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7e94.md) [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md)
- 新版 呼出元 2件 [`009e40ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e4/009e40ec.md) [`009e7c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7c80.md) · 呼出先 7件 [`009e7c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7c80.md) [`009e8bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e8/009e8bb0.md) [`009e8e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e8/009e8e40.md) [`009e9124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9124.md) [`009e9458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9458.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.07% / 新版 99.07%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e83e4",
      "incomplete_value": false,
      "site": "009e83ec",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e7e34",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e7e54",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e7e98",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e7e34",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e7e54",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e7e98",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e7440 ["INT_ADD", "register:40f0:8", ["const:9e7440:8", "const:4:8"]]
- 009e7440 ["CALL", null, ["callee:009e9458:8"]]
+ 009e83ec ["INT_ADD", "register:40f0:8", ["const:9e83ec:8", "const:4:8"]]
+ 009e83ec ["CALL", null, ["callee:009e9458:8"]]
- 009e6d18 ["COPY", "tmp:0:8", ["const:735:8"]]
- 009e6d18 ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
- 009e6d18 ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
- 009e6d18 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
+ 009e7cc4 ["COPY", "tmp:0:8", ["const:785:8"]]
+ 009e7cc4 ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
+ 009e7cc4 ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
+ 009e7cc4 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
- 009e6dc4 ["INT_ADD", "register:40f0:8", ["const:9e6dc4:8", "const:4:8"]]
- 009e6dc4 ["CALL", null, ["callee:009e8e40:8"]]
+ 009e7d70 ["INT_ADD", "register:40f0:8", ["const:9e7d70:8", "const:4:8"]]
+ 009e7d70 ["CALL", null, ["callee:009e8e40:8"]]
~~~


<a id="compare-f869877ba7d03f0fefd2708dae6dfa74"></a>

### [`009e7c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7c04.md) → [`009e8bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e8/009e8bb0.md) FUN_009e8bb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) · 呼出先 3件 [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md) [`009e8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8770.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`009e7c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7c80.md) [`009e9124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9124.md) · 呼出先 3件 [`009e9458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9458.md) [`009e971c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e971c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e8c14",
      "incomplete_value": false,
      "site": "009e8c1c",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e8c98",
      "incomplete_value": false,
      "site": "009e8ca0",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e8d1c",
      "incomplete_value": false,
      "site": "009e8d24",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e8c14",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e8c34",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e8c98",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e8c14",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e8c34",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e8c98",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e7c70 ["INT_ADD", "register:40f0:8", ["const:9e7c70:8", "const:4:8"]]
- 009e7c70 ["CALL", null, ["callee:009e9458:8"]]
+ 009e8c1c ["INT_ADD", "register:40f0:8", ["const:9e8c1c:8", "const:4:8"]]
+ 009e8c1c ["CALL", null, ["callee:009e9458:8"]]
- 009e7cf4 ["INT_ADD", "register:40f0:8", ["const:9e7cf4:8", "const:4:8"]]
- 009e7cf4 ["CALL", null, ["callee:009e9458:8"]]
+ 009e8ca0 ["INT_ADD", "register:40f0:8", ["const:9e8ca0:8", "const:4:8"]]
+ 009e8ca0 ["CALL", null, ["callee:009e9458:8"]]
- 009e7d78 ["INT_ADD", "register:40f0:8", ["const:9e7d78:8", "const:4:8"]]
- 009e7d78 ["CALL", null, ["callee:009e9458:8"]]
+ 009e8d24 ["INT_ADD", "register:40f0:8", ["const:9e8d24:8", "const:4:8"]]
+ 009e8d24 ["CALL", null, ["callee:009e9458:8"]]
~~~


<a id="compare-58d1274c9edb9ac8f7ed8212e020cead"></a>

### [`009e7e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7e94.md) → [`009e8e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e8/009e8e40.md) FUN_009e8e40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) [`009e8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8770.md) · 呼出先 2件 [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009e7c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7c80.md) [`009e9124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9124.md) [`009e971c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e971c.md) · 呼出先 2件 [`009e9458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9458.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.76% / 新版 96.76%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e8e7c",
      "incomplete_value": false,
      "site": "009e8e94",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e8fd0",
      "incomplete_value": false,
      "site": "009e8fd8",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e9084",
      "incomplete_value": false,
      "site": "009e9090",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e8e7c",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e8eac",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e8edc",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e8e7c",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e8eac",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e8edc",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e7ee8 ["INT_ADD", "register:40f0:8", ["const:9e7ee8:8", "const:4:8"]]
- 009e7ee8 ["CALL", null, ["callee:009e9458:8"]]
+ 009e8e94 ["INT_ADD", "register:40f0:8", ["const:9e8e94:8", "const:4:8"]]
+ 009e8e94 ["CALL", null, ["callee:009e9458:8"]]
- 009e802c ["INT_ADD", "register:40f0:8", ["const:9e802c:8", "const:4:8"]]
- 009e802c ["CALL", null, ["callee:009e9458:8"]]
+ 009e8fd8 ["INT_ADD", "register:40f0:8", ["const:9e8fd8:8", "const:4:8"]]
+ 009e8fd8 ["CALL", null, ["callee:009e9458:8"]]
- 009e80e4 ["INT_ADD", "register:40f0:8", ["const:9e80e4:8", "const:4:8"]]
- 009e80e4 ["CALL", null, ["callee:009e9458:8"]]
+ 009e9090 ["INT_ADD", "register:40f0:8", ["const:9e9090:8", "const:4:8"]]
+ 009e9090 ["CALL", null, ["callee:009e9458:8"]]
~~~


<a id="compare-8665b51a71e93a198b4ee5d94ce32462"></a>

### [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) → [`009e9124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9124.md) FUN_009e9124

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) · 呼出先 5件 [`009e7c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7c04.md) [`009e7e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7e94.md) [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md) [`009e8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8770.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009e7c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7c80.md) · 呼出先 5件 [`009e8bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e8/009e8bb0.md) [`009e8e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e8/009e8e40.md) [`009e9458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9458.md) [`009e971c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e971c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.54% / 新版 98.54%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e91f0",
      "incomplete_value": false,
      "site": "009e91fc",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e91f0",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e9214",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e9318",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e91f0",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e9214",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e9318",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8250 ["INT_ADD", "register:40f0:8", ["const:9e8250:8", "const:4:8"]]
- 009e8250 ["CALL", null, ["callee:009e9458:8"]]
+ 009e91fc ["INT_ADD", "register:40f0:8", ["const:9e91fc:8", "const:4:8"]]
+ 009e91fc ["CALL", null, ["callee:009e9458:8"]]
- 009e8214 ["INT_ADD", "register:40f0:8", ["const:9e8214:8", "const:4:8"]]
- 009e8214 ["CALL", null, ["callee:009e8bb0:8"]]
+ 009e91c0 ["INT_ADD", "register:40f0:8", ["const:9e91c0:8", "const:4:8"]]
+ 009e91c0 ["CALL", null, ["callee:009e8bb0:8"]]
- 009e8234 ["COPY", "tmp:0:8", ["const:735:8"]]
- 009e8234 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
- 009e8234 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
- 009e8234 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
+ 009e91e0 ["COPY", "tmp:0:8", ["const:785:8"]]
+ 009e91e0 ["INT_CARRY", "register:105:1", ["register:40b0:8", "tmp:0:8"]]
+ 009e91e0 ["INT_SCARRY", "register:106:1", ["register:40b0:8", "tmp:0:8"]]
+ 009e91e0 ["INT_ADD", "tmp:1:8", ["register:40b0:8", "tmp:0:8"]]
~~~


<a id="compare-a3159fb6d030ba6c95aebf3ce125db64"></a>

### [`009e8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8770.md) → [`009e971c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e971c.md) FUN_009e971c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009e6cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e6/009e6cd4.md) [`009e7c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7c04.md) [`009e8178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8178.md) · 呼出先 3件 [`009e7e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e7/009e7e94.md) [`009e84ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e84ac.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`009e7c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e7/009e7c80.md) [`009e8bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e8/009e8bb0.md) [`009e9124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9124.md) · 呼出先 3件 [`009e8e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e8/009e8e40.md) [`009e9458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9458.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.09% / 新版 96.09%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e97fc",
      "incomplete_value": false,
      "site": "009e9804",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009e9880",
      "incomplete_value": false,
      "site": "009e9888",
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
            "const:785:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e9778",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e9798",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ],
    [
      "009e97fc",
      "PARAM",
      [
        "storage",
        "002c8735",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009e9778",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e9798",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ],
    [
      "009e97fc",
      "PARAM",
      [
        "storage",
        "002c8785",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8858 ["INT_ADD", "register:40f0:8", ["const:9e8858:8", "const:4:8"]]
- 009e8858 ["CALL", null, ["callee:009e9458:8"]]
+ 009e9804 ["INT_ADD", "register:40f0:8", ["const:9e9804:8", "const:4:8"]]
+ 009e9804 ["CALL", null, ["callee:009e9458:8"]]
- 009e88dc ["INT_ADD", "register:40f0:8", ["const:9e88dc:8", "const:4:8"]]
- 009e88dc ["CALL", null, ["callee:009e9458:8"]]
+ 009e9888 ["INT_ADD", "register:40f0:8", ["const:9e9888:8", "const:4:8"]]
+ 009e9888 ["CALL", null, ["callee:009e9458:8"]]
- 009e87b0 ["INT_ADD", "register:40f0:8", ["const:9e87b0:8", "const:4:8"]]
- 009e87b0 ["CALL", null, ["callee:009e8e40:8"]]
+ 009e975c ["INT_ADD", "register:40f0:8", ["const:9e975c:8", "const:4:8"]]
+ 009e975c ["CALL", null, ["callee:009e8e40:8"]]
~~~


<a id="compare-fd624772d646dd4345d8a2ec79352673"></a>

### [`009e8a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8a98.md) → [`009e9a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9a44.md) FUN_009e9a44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e9a68",
      "incomplete_value": false,
      "site": "009e9a68",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e9a68",
      "DATA",
      [
        "storage",
        "00c89da8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e9a68",
      "DATA",
      [
        "storage",
        "00c8ad78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8aac ["INT_ADD", "register:40f0:8", ["const:9e8aac:8", "const:4:8"]]
- 009e8aac ["CALL", null, ["callee:00c58f30:8"]]
+ 009e9a58 ["INT_ADD", "register:40f0:8", ["const:9e9a58:8", "const:4:8"]]
+ 009e9a58 ["CALL", null, ["callee:00c58f30:8"]]
- 009e8ab4 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009e9a60 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009e8ab8 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 009e8ab8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e8ab8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e8ab8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e9a64 ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 009e9a64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e9a64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e9a64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-abd014b04e64fb3451b1642a21e9826a"></a>

### [`009e8acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8acc.md) → [`009e9a78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9a78.md) FUN_009e9a78

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
      "definition_site": "009e9a84",
      "incomplete_value": false,
      "site": "009e9a84",
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
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e9a84",
      "DATA",
      [
        "storage",
        "00c89da8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e9a84",
      "DATA",
      [
        "storage",
        "00c8ad78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8ad0 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009e9a7c ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009e8ad4 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 009e8ad4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009e8ad4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009e8ad4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009e9a80 ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 009e9a80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009e9a80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009e9a80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a21b4ca3bacb3f7ea74a1856be3917fa"></a>

### [`009e8ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8ae8.md) → [`009e9a94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9a94.md) FUN_009e9a94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

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
      "site": "009e9abc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8b10",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009e9abc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009e9abc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8b10 ["INT_ADD", "register:40f0:8", ["const:9e8b10:8", "const:4:8"]]
- 009e8b10 ["CALL", null, ["ram:47ad34:8"]]
+ 009e9abc ["INT_ADD", "register:40f0:8", ["const:9e9abc:8", "const:4:8"]]
+ 009e9abc ["CALL", null, ["ram:47b054:8"]]
- 009e8b1c ["INT_ADD", "register:40f0:8", ["const:9e8b1c:8", "const:4:8"]]
- 009e8b1c ["CALL", null, ["callee:0047d134:8"]]
+ 009e9ac8 ["INT_ADD", "register:40f0:8", ["const:9e9ac8:8", "const:4:8"]]
+ 009e9ac8 ["CALL", null, ["callee:0047d134:8"]]
- 009e8b40 ["INT_ADD", "register:40f0:8", ["const:9e8b40:8", "const:4:8"]]
- 009e8b40 ["CALL", null, ["callee:008524fc:8"]]
+ 009e9aec ["INT_ADD", "register:40f0:8", ["const:9e9aec:8", "const:4:8"]]
+ 009e9aec ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-5e35b5af08224a53144cea995c35482c"></a>

### [`009e8b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8b88.md) → [`009e9b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9b34.md) FUN_009e9b34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e9b58",
      "incomplete_value": false,
      "site": "009e9b58",
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
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e9b58",
      "DATA",
      [
        "storage",
        "00c89e28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e9b58",
      "DATA",
      [
        "storage",
        "00c8adf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8b9c ["INT_ADD", "register:40f0:8", ["const:9e8b9c:8", "const:4:8"]]
- 009e8b9c ["CALL", null, ["callee:00c58f30:8"]]
+ 009e9b48 ["INT_ADD", "register:40f0:8", ["const:9e9b48:8", "const:4:8"]]
+ 009e9b48 ["CALL", null, ["callee:00c58f30:8"]]
- 009e8ba4 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009e9b50 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009e8ba8 ["COPY", "tmp:0:8", ["const:e28:8"]]
- 009e8ba8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e8ba8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e8ba8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e9b54 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 009e9b54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e9b54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e9b54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2bf2b78577d647764bc6d4b19f8a9951"></a>

### [`009e8bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8bbc.md) → [`009e9b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9b68.md) FUN_009e9b68

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
      "definition_site": "009e9b74",
      "incomplete_value": false,
      "site": "009e9b74",
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
            "const:df8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e9b74",
      "DATA",
      [
        "storage",
        "00c89e28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e9b74",
      "DATA",
      [
        "storage",
        "00c8adf8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8bc0 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009e9b6c ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009e8bc4 ["COPY", "tmp:0:8", ["const:e28:8"]]
- 009e8bc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009e8bc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009e8bc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009e9b70 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 009e9b70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009e9b70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009e9b70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9ca5d5e7508846e2931f05a226f0748b"></a>

### [`009e8bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8bd8.md) → [`009e9b84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9b84.md) FUN_009e9b84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

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
      "site": "009e9bac",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8c00",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009e9bac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009e9bac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8c00 ["INT_ADD", "register:40f0:8", ["const:9e8c00:8", "const:4:8"]]
- 009e8c00 ["CALL", null, ["ram:47ad34:8"]]
+ 009e9bac ["INT_ADD", "register:40f0:8", ["const:9e9bac:8", "const:4:8"]]
+ 009e9bac ["CALL", null, ["ram:47b054:8"]]
- 009e8c0c ["INT_ADD", "register:40f0:8", ["const:9e8c0c:8", "const:4:8"]]
- 009e8c0c ["CALL", null, ["callee:0047d134:8"]]
+ 009e9bb8 ["INT_ADD", "register:40f0:8", ["const:9e9bb8:8", "const:4:8"]]
+ 009e9bb8 ["CALL", null, ["callee:0047d134:8"]]
- 009e8c30 ["INT_ADD", "register:40f0:8", ["const:9e8c30:8", "const:4:8"]]
- 009e8c30 ["CALL", null, ["callee:008524fc:8"]]
+ 009e9bdc ["INT_ADD", "register:40f0:8", ["const:9e9bdc:8", "const:4:8"]]
+ 009e9bdc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-26c9b19de36f0434c4e3b31948af52cf"></a>

### [`009e8c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8c78.md) → [`009e9c24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9c24.md) FUN_009e9c24

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009e9c48",
      "incomplete_value": false,
      "site": "009e9c48",
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
            "const:e78:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e9c48",
      "DATA",
      [
        "storage",
        "00c89ea8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e9c48",
      "DATA",
      [
        "storage",
        "00c8ae78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8c8c ["INT_ADD", "register:40f0:8", ["const:9e8c8c:8", "const:4:8"]]
- 009e8c8c ["CALL", null, ["callee:00c58f30:8"]]
+ 009e9c38 ["INT_ADD", "register:40f0:8", ["const:9e9c38:8", "const:4:8"]]
+ 009e9c38 ["CALL", null, ["callee:00c58f30:8"]]
- 009e8c94 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009e9c40 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009e8c98 ["COPY", "tmp:0:8", ["const:ea8:8"]]
- 009e8c98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e8c98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e8c98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009e9c44 ["COPY", "tmp:0:8", ["const:e78:8"]]
+ 009e9c44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009e9c44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009e9c44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c36b1dad1396fa5f33daa6b052f7826d"></a>

### [`009e8cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8cac.md) → [`009e9c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9c58.md) FUN_009e9c58

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
      "definition_site": "009e9c64",
      "incomplete_value": false,
      "site": "009e9c64",
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
            "const:e78:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009e9c64",
      "DATA",
      [
        "storage",
        "00c89ea8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009e9c64",
      "DATA",
      [
        "storage",
        "00c8ae78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8cb0 ["COPY", "register:4048:8", ["const:c89000:8"]]
+ 009e9c5c ["COPY", "register:4048:8", ["const:c8a000:8"]]
- 009e8cb4 ["COPY", "tmp:0:8", ["const:ea8:8"]]
- 009e8cb4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009e8cb4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009e8cb4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009e9c60 ["COPY", "tmp:0:8", ["const:e78:8"]]
+ 009e9c60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009e9c60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009e9c60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f5d5eadd31f890a41c628a3d76f4b1ff"></a>

### [`009e8cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8cc8.md) → [`009e9c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9c74.md) FUN_009e9c74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

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
      "site": "009e9c9c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009e8cf0",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009e9c9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009e9c9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8cf0 ["INT_ADD", "register:40f0:8", ["const:9e8cf0:8", "const:4:8"]]
- 009e8cf0 ["CALL", null, ["ram:47ad34:8"]]
+ 009e9c9c ["INT_ADD", "register:40f0:8", ["const:9e9c9c:8", "const:4:8"]]
+ 009e9c9c ["CALL", null, ["ram:47b054:8"]]
- 009e8cfc ["INT_ADD", "register:40f0:8", ["const:9e8cfc:8", "const:4:8"]]
- 009e8cfc ["CALL", null, ["callee:0047d134:8"]]
+ 009e9ca8 ["INT_ADD", "register:40f0:8", ["const:9e9ca8:8", "const:4:8"]]
+ 009e9ca8 ["CALL", null, ["callee:0047d134:8"]]
- 009e8d20 ["INT_ADD", "register:40f0:8", ["const:9e8d20:8", "const:4:8"]]
- 009e8d20 ["CALL", null, ["callee:008524fc:8"]]
+ 009e9ccc ["INT_ADD", "register:40f0:8", ["const:9e9ccc:8", "const:4:8"]]
+ 009e9ccc ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-3fdd7c299c6bc66a65ba87ca9a46f08d"></a>

### [`009e8d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e8/009e8d64.md) → [`009e9d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e9/009e9d10.md) _INIT_204

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.49% / 新版 82.49%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 3件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e9d4c",
      "incomplete_value": true,
      "site": "009e9d68",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e9d70",
      "incomplete_value": true,
      "site": "009e9d8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009e9d90",
      "incomplete_value": true,
      "site": "009e9dac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009e9d4c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009e9d70",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009e9d90",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009e9d4c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009e9d70",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009e9d90",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e8ec4 ["INT_ADD", "register:40f0:8", ["const:9e8ec4:8", "const:4:8"]]
- 009e8ec4 ["CALL", null, ["callee:0043bb58:8"]]
+ 009e9e70 ["INT_ADD", "register:40f0:8", ["const:9e9e70:8", "const:4:8"]]
+ 009e9e70 ["CALL", null, ["callee:0043bb58:8"]]
- 009e8f98 ["INT_ADD", "register:40f0:8", ["const:9e8f98:8", "const:4:8"]]
- 009e8f98 ["CALL", null, ["callee:00c58ed0:8"]]
+ 009e9f44 ["INT_ADD", "register:40f0:8", ["const:9e9f44:8", "const:4:8"]]
+ 009e9f44 ["CALL", null, ["callee:00c58ed0:8"]]
- 009e8d8c ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009e9d38 ["COPY", "register:4098:8", ["const:1124000:8"]]
~~~


<a id="compare-1007d089b1a09bef9a5ba8cc24d6a9b7"></a>

### [`009e90f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e90f4.md) → [`009ea0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ea/009ea0a0.md) FUN_009ea0a0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009e94b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e94b4.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009ea460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ea/009ea460.md) · 呼出先 5件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.76% / 新版 91.76%

優先判定に残った影響 `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea108",
      "incomplete_value": true,
      "site": "009ea114",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:670:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea104",
      "incomplete_value": true,
      "site": "009ea118",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea104",
      "incomplete_value": true,
      "site": "009ea118",
      "value": [
        "LOAD",
        "16",
        [
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
      "009ea104",
      "READ",
      [
        "storage",
        "002a7fb0",
        null,
        "string"
      ]
    ],
    [
      "009ea104",
      "READ",
      [
        "storage",
        "002a7fc0",
        null,
        "string"
      ]
    ],
    [
      "009ea108",
      "READ",
      [
        "storage",
        "002c2620",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009ea104",
      "READ",
      [
        "storage",
        "002a8108",
        null,
        "string"
      ]
    ],
    [
      "009ea104",
      "READ",
      [
        "storage",
        "002a8118",
        null,
        "string"
      ]
    ],
    [
      "009ea108",
      "READ",
      [
        "storage",
        "002c2670",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009e9148 ["INT_ADD", "register:40f0:8", ["const:9e9148:8", "const:4:8"]]
- 009e9148 ["CALL", null, ["callee:00c58f30:8"]]
+ 009ea0f4 ["INT_ADD", "register:40f0:8", ["const:9ea0f4:8", "const:4:8"]]
+ 009ea0f4 ["CALL", null, ["callee:00c58f30:8"]]
- 009e914c ["COPY", "register:4040:8", ["const:2a7000:8"]]
+ 009ea0f8 ["COPY", "register:4040:8", ["const:2a8000:8"]]
- 009e9150 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 009e9150 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e9150 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e9150 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ea0fc ["COPY", "tmp:0:8", ["const:e8:8"]]
+ 009ea0fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ea0fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ea0fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f7bbabd34392f2a258c7ff4e5e3df5d7"></a>

### [`009e94b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e94b4.md) → [`009ea460`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ea/009ea460.md) FUN_009ea460

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)
- 新版 呼出元 1件 [`009f08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f08e0.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md)

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
      "definition_site": "009ea4a4",
      "incomplete_value": false,
      "site": "009ea4a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea4c0",
      "incomplete_value": true,
      "site": "009ea4d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:817:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ea4c4",
      "incomplete_value": true,
      "site": "009ea4d4",
      "value": [
        "LOAD",
        "8",
        [
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
      "009ea4a8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ea4c0",
      "READ",
      [
        "storage",
        "002a07d7",
        null,
        "string"
      ]
    ],
    [
      "009ea4c4",
      "READ",
      [
        "storage",
        "002a07e7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ea4a8",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009ea4c0",
      "READ",
      [
        "storage",
        "002a0817",
        null,
        "string"
      ]
    ],
    [
      "009ea4c4",
      "READ",
      [
        "storage",
        "002a0827",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e94f0 ["INT_ADD", "register:40f0:8", ["const:9e94f0:8", "const:4:8"]]
- 009e94f0 ["CALL", null, ["callee:00488180:8"]]
+ 009ea49c ["INT_ADD", "register:40f0:8", ["const:9ea49c:8", "const:4:8"]]
+ 009ea49c ["CALL", null, ["callee:00488180:8"]]
- 009e94f4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009ea4a0 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009e94f8 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009e94f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e94f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e94f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ea4a4 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009ea4a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ea4a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ea4a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f82c3aa00b234345cce6fe32d92acc51"></a>

### [`009e9ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e9ac8.md) → [`009eaa74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ea/009eaa74.md) FUN_009eaa74

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`009f08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f08e0.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

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
      "definition_site": "009eaab8",
      "incomplete_value": false,
      "site": "009eaabc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eaad8",
      "incomplete_value": true,
      "site": "009eaae0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:810:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eaad4",
      "incomplete_value": true,
      "site": "009eaae4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b7e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009eaabc",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009eaad4",
      "READ",
      [
        "storage",
        "002a4ab3",
        null,
        "string"
      ]
    ],
    [
      "009eaad4",
      "READ",
      [
        "storage",
        "002a4ac3",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009eaabc",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009eaad4",
      "READ",
      [
        "storage",
        "002a4b7e",
        null,
        "string"
      ]
    ],
    [
      "009eaad4",
      "READ",
      [
        "storage",
        "002a4b8e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009e9b04 ["INT_ADD", "register:40f0:8", ["const:9e9b04:8", "const:4:8"]]
- 009e9b04 ["CALL", null, ["callee:00488180:8"]]
+ 009eaab0 ["INT_ADD", "register:40f0:8", ["const:9eaab0:8", "const:4:8"]]
+ 009eaab0 ["CALL", null, ["callee:00488180:8"]]
- 009e9b08 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009eaab4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009e9b0c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009e9b0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009e9b0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009e9b0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009eaab8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009eaab8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009eaab8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009eaab8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-43529183efe5b922f9bd7d7b97dcdb25"></a>

### [`009e9fd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e9fd4.md) → [`009eaf80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ea/009eaf80.md) FUN_009eaf80

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009e9ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e9ac8.md) · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009eaa74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ea/009eaa74.md) · 呼出先 5件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.27% / 新版 93.27%

優先判定に残った影響 `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eafe4",
      "incomplete_value": true,
      "site": "009eafec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:140:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eafe0",
      "incomplete_value": true,
      "site": "009eaff0",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eafe0",
      "incomplete_value": true,
      "site": "009eaff0",
      "value": [
        "LOAD",
        "16",
        [
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
      "009eafe0",
      "READ",
      [
        "storage",
        "002be0db",
        null,
        "string"
      ]
    ],
    [
      "009eafe0",
      "READ",
      [
        "storage",
        "002be0eb",
        null,
        "string"
      ]
    ],
    [
      "009eafe4",
      "READ",
      [
        "storage",
        "002c30f0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009eafe0",
      "READ",
      [
        "storage",
        "002be1b9",
        null,
        "string"
      ]
    ],
    [
      "009eafe0",
      "READ",
      [
        "storage",
        "002be1c9",
        null,
        "string"
      ]
    ],
    [
      "009eafe4",
      "READ",
      [
        "storage",
        "002c3140",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009ea024 ["INT_ADD", "register:40f0:8", ["const:9ea024:8", "const:4:8"]]
- 009ea024 ["CALL", null, ["callee:00c58f30:8"]]
+ 009eafd0 ["INT_ADD", "register:40f0:8", ["const:9eafd0:8", "const:4:8"]]
+ 009eafd0 ["CALL", null, ["callee:00c58f30:8"]]
- 009ea02c ["COPY", "tmp:0:8", ["const:bb:8"]]
- 009ea02c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ea02c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ea02c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009eafd8 ["COPY", "tmp:0:8", ["const:199:8"]]
+ 009eafd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009eafd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009eafd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ea030 ["COPY", "register:4048:8", ["const:2c3000:8"]]
~~~


<a id="compare-93f298232f5359102c148da78851d814"></a>

### [`009ea3b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ea/009ea3b8.md) → [`009eb364`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009eb/009eb364.md) FUN_009eb364

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ea9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ea/009ea9c8.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md)
- 新版 呼出元 1件 [`009eb974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009eb/009eb974.md) · 呼出先 9件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eb3d8",
      "incomplete_value": true,
      "site": "009eb3e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:140:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eb3d4",
      "incomplete_value": true,
      "site": "009eb3e4",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eb3d4",
      "incomplete_value": true,
      "site": "009eb3e4",
      "value": [
        "LOAD",
        "16",
        [
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
      "009eb394",
      "READ",
      [
        "storage",
        "002a936c",
        null,
        "string"
      ]
    ],
    [
      "009eb3d4",
      "READ",
      [
        "storage",
        "002b4359",
        null,
        "string"
      ]
    ],
    [
      "009eb3d4",
      "READ",
      [
        "storage",
        "002b4369",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009eb394",
      "READ",
      [
        "storage",
        "002a9439",
        null,
        "string"
      ]
    ],
    [
      "009eb3d4",
      "READ",
      [
        "storage",
        "002b4437",
        null,
        "string"
      ]
    ],
    [
      "009eb3d4",
      "READ",
      [
        "storage",
        "002b4447",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ea3e0 ["COPY", "tmp:0:8", ["const:36c:8"]]
- 009ea3e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009ea3e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009ea3e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009eb38c ["COPY", "tmp:0:8", ["const:439:8"]]
+ 009eb38c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009eb38c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009eb38c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009ea418 ["INT_ADD", "register:40f0:8", ["const:9ea418:8", "const:4:8"]]
- 009ea418 ["CALL", null, ["callee:00c58f30:8"]]
+ 009eb3c4 ["INT_ADD", "register:40f0:8", ["const:9eb3c4:8", "const:4:8"]]
+ 009eb3c4 ["CALL", null, ["callee:00c58f30:8"]]
- 009ea420 ["COPY", "tmp:0:8", ["const:339:8"]]
- 009ea420 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ea420 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ea420 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009eb3cc ["COPY", "tmp:0:8", ["const:417:8"]]
+ 009eb3cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009eb3cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009eb3cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-efb94935491fa161d249e222f60ffc26"></a>

### [`009ea9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ea/009ea9c8.md) → [`009eb974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009eb/009eb974.md) FUN_009eb974

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)
- 新版 呼出元 1件 [`009f08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f08e0.md) · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.86% / 新版 88.86%

優先判定に残った影響 `store_value` 17件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009eb9b8",
      "incomplete_value": false,
      "site": "009eb9bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eb9d4",
      "incomplete_value": true,
      "site": "009eb9e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:830:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eb9d8",
      "incomplete_value": true,
      "site": "009eb9e8",
      "value": [
        "LOAD",
        "16",
        [
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
      "009eb9bc",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009eb9d4",
      "READ",
      [
        "storage",
        "002a07f0",
        null,
        "string"
      ]
    ],
    [
      "009eb9d8",
      "READ",
      [
        "storage",
        "002a07fc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009eb9bc",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009eb9d4",
      "READ",
      [
        "storage",
        "002a0830",
        null,
        "string"
      ]
    ],
    [
      "009eb9d8",
      "READ",
      [
        "storage",
        "002a083c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009eaa04 ["INT_ADD", "register:40f0:8", ["const:9eaa04:8", "const:4:8"]]
- 009eaa04 ["CALL", null, ["callee:00488180:8"]]
+ 009eb9b0 ["INT_ADD", "register:40f0:8", ["const:9eb9b0:8", "const:4:8"]]
+ 009eb9b0 ["CALL", null, ["callee:00488180:8"]]
- 009eaa08 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009eb9b4 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009eaa0c ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009eaa0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009eaa0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009eaa0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009eb9b8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009eb9b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009eb9b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009eb9b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8cc412d907c33d9efbfbdd19b837c3c5"></a>

### [`009eafd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ea/009eafd8.md) → [`009ebf84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009eb/009ebf84.md) FUN_009ebf84

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ec2a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec2a4.md) · 呼出先 15件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009e942c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e9/009e942c.md)
- 新版 呼出元 1件 [`009ed250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ed/009ed250.md) · 呼出先 15件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009ea3d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ea/009ea3d8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.06% / 新版 88.06%

優先判定に残った影響 `call_argument_candidate` 17件, `store_value` 45件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ebff4",
      "incomplete_value": true,
      "site": "009ec000",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ebff0",
      "incomplete_value": true,
      "site": "009ec004",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ebff0",
      "incomplete_value": true,
      "site": "009ec004",
      "value": [
        "LOAD",
        "16",
        [
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
      "009ebff0",
      "READ",
      [
        "storage",
        "002b43b7",
        null,
        "string"
      ]
    ],
    [
      "009ebff0",
      "READ",
      [
        "storage",
        "002b43c7",
        null,
        "string"
      ]
    ],
    [
      "009ebff4",
      "READ",
      [
        "storage",
        "002c3060",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009ebff0",
      "READ",
      [
        "storage",
        "002b4495",
        null,
        "string"
      ]
    ],
    [
      "009ebff0",
      "READ",
      [
        "storage",
        "002b44a5",
        null,
        "string"
      ]
    ],
    [
      "009ebff4",
      "READ",
      [
        "storage",
        "002c30b0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009eb034 ["INT_ADD", "register:40f0:8", ["const:9eb034:8", "const:4:8"]]
- 009eb034 ["CALL", null, ["callee:00c58f30:8"]]
+ 009ebfe0 ["INT_ADD", "register:40f0:8", ["const:9ebfe0:8", "const:4:8"]]
+ 009ebfe0 ["CALL", null, ["callee:00c58f30:8"]]
- 009eb03c ["COPY", "tmp:0:8", ["const:397:8"]]
- 009eb03c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009eb03c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009eb03c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ebfe8 ["COPY", "tmp:0:8", ["const:475:8"]]
+ 009ebfe8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ebfe8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ebfe8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009eb040 ["COPY", "register:4048:8", ["const:2c3000:8"]]
~~~


<a id="compare-73c66c0086314451adc7059ab7fb78e1"></a>

### [`009ec8ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec8ec.md) → [`009ed898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ed/009ed898.md) FUN_009ed898

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009ed8b4",
      "incomplete_value": false,
      "site": "009ed8b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009ed8b8",
      "DATA",
      [
        "storage",
        "00c8a080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009ed8b8",
      "DATA",
      [
        "storage",
        "00c8b050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ec904 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009ed8b0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009ec908 ["COPY", "tmp:0:8", ["const:80:8"]]
- 009ec908 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ec908 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ec908 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ed8b4 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 009ed8b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ed8b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ed8b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ec944 ["INT_ADD", "register:40f0:8", ["const:9ec944:8", "const:4:8"]]
- 009ec944 ["CALL", null, ["callee:00c54d90:8"]]
+ 009ed8f0 ["INT_ADD", "register:40f0:8", ["const:9ed8f0:8", "const:4:8"]]
+ 009ed8f0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-cbf5e543173bf6b78ef4c9a23cfd25fc"></a>

### [`009ec9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec9b0.md) → [`009ed95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ed/009ed95c.md) FUN_009ed95c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 18件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`009f08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f08e0.md) · 呼出先 18件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

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
      "definition_site": "009ed99c",
      "incomplete_value": false,
      "site": "009ed9a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ed9b8",
      "incomplete_value": true,
      "site": "009ed9c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c04:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eda64",
      "incomplete_value": true,
      "site": "009eda6c",
      "value": [
        "LOAD",
        "16",
        [
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
      "009ed9a0",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ed9b8",
      "READ",
      [
        "storage",
        "002bbb26",
        null,
        "string"
      ]
    ],
    [
      "009ed9bc",
      "READ",
      [
        "storage",
        "002bbb35",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ed9a0",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009ed9b8",
      "READ",
      [
        "storage",
        "002bbc04",
        null,
        "string"
      ]
    ],
    [
      "009ed9bc",
      "READ",
      [
        "storage",
        "002bbc13",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ecb88 ["INT_ADD", "register:40f0:8", ["const:9ecb88:8", "const:4:8"]]
- 009ecb88 ["CALL", null, ["ram:9ece88:8"]]
+ 009edb34 ["INT_ADD", "register:40f0:8", ["const:9edb34:8", "const:4:8"]]
+ 009edb34 ["CALL", null, ["ram:9ede34:8"]]
- 009ec9e8 ["INT_ADD", "register:40f0:8", ["const:9ec9e8:8", "const:4:8"]]
- 009ec9e8 ["CALL", null, ["callee:00488180:8"]]
+ 009ed994 ["INT_ADD", "register:40f0:8", ["const:9ed994:8", "const:4:8"]]
+ 009ed994 ["CALL", null, ["callee:00488180:8"]]
- 009ec9ec ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009ed998 ["COPY", "register:4040:8", ["const:c65000:8"]]
~~~


<a id="compare-e648d5f250a711949e75647122d42c97"></a>

### [`009ed16c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009ed16c.md) → [`009ee118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ee/009ee118.md) FUN_009ee118

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ed60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009ed60c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f3650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3650.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009ee5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ee/009ee5b8.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009f45fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f45fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.04% / 新版 90.04%

優先判定に残った影響 `store_value` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ee170",
      "incomplete_value": true,
      "site": "009ee170",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ee18c",
      "incomplete_value": true,
      "site": "009ee1a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:310:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ee198",
      "incomplete_value": true,
      "site": "009ee1a8",
      "value": [
        "LOAD",
        "16",
        [
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
      "009ee148",
      "READ",
      [
        "storage",
        "002a1760",
        null,
        "string"
      ]
    ],
    [
      "009ee18c",
      "READ",
      [
        "storage",
        "002c22c0",
        null,
        null
      ]
    ],
    [
      "009ee198",
      "READ",
      [
        "storage",
        "002abd2b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ee148",
      "READ",
      [
        "storage",
        "002a17a0",
        null,
        "string"
      ]
    ],
    [
      "009ee18c",
      "READ",
      [
        "storage",
        "002c2310",
        null,
        null
      ]
    ],
    [
      "009ee198",
      "READ",
      [
        "storage",
        "002abdf8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ed194 ["COPY", "tmp:0:8", ["const:760:8"]]
- 009ed194 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009ed194 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009ed194 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009ee140 ["COPY", "tmp:0:8", ["const:7a0:8"]]
+ 009ee140 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009ee140 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009ee140 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 009ed1d0 ["INT_ADD", "register:40f0:8", ["const:9ed1d0:8", "const:4:8"]]
- 009ed1d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 009ee17c ["INT_ADD", "register:40f0:8", ["const:9ee17c:8", "const:4:8"]]
+ 009ee17c ["CALL", null, ["callee:00c58f30:8"]]
- 009ed1e0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:2c0:8"]]
- 009ed1e0 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 009ed1e0 ["COPY", "register:5010:8", ["const:0:8"]]
- 009ed1e0 ["COPY", "register:5018:8", ["const:0:8"]]
+ 009ee18c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:310:8"]]
+ 009ee18c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 009ee18c ["COPY", "register:5010:8", ["const:0:8"]]
+ 009ee18c ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-5d0ef908ae91159d43df7868b09bf77c"></a>

### [`009ed60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009ed60c.md) → [`009ee5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ee/009ee5b8.md) FUN_009ee5b8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 19件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`009f08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f08e0.md) · 呼出先 19件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

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
      "definition_site": "009ee5f4",
      "incomplete_value": false,
      "site": "009ee5f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ee610",
      "incomplete_value": true,
      "site": "009ee620",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a7e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ee614",
      "incomplete_value": true,
      "site": "009ee624",
      "value": [
        "LOAD",
        "16",
        [
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
      "009ee5f8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ee610",
      "READ",
      [
        "storage",
        "002b69af",
        null,
        "string"
      ]
    ],
    [
      "009ee614",
      "READ",
      [
        "storage",
        "002b69be",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ee5f8",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009ee610",
      "READ",
      [
        "storage",
        "002b6a7e",
        null,
        "string"
      ]
    ],
    [
      "009ee614",
      "READ",
      [
        "storage",
        "002b6a8d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ed640 ["INT_ADD", "register:40f0:8", ["const:9ed640:8", "const:4:8"]]
- 009ed640 ["CALL", null, ["callee:00488180:8"]]
+ 009ee5ec ["INT_ADD", "register:40f0:8", ["const:9ee5ec:8", "const:4:8"]]
+ 009ee5ec ["CALL", null, ["callee:00488180:8"]]
- 009ed644 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009ee5f0 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009ed648 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009ed648 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ed648 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ed648 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ee5f4 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009ee5f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ee5f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ee5f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-50273161c563f4ad727158532bff6fab"></a>

### [`009edb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009edb90.md) → [`009eeb3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ee/009eeb3c.md) FUN_009eeb3c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009edf50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009edf50.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009eeefc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ee/009eeefc.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009f3de4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3de4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.59% / 新版 91.59%

優先判定に残った影響 `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eeb94",
      "incomplete_value": true,
      "site": "009eeb94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:46c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eebb4",
      "incomplete_value": true,
      "site": "009eebc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:850:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009eebb0",
      "incomplete_value": true,
      "site": "009eebc4",
      "value": [
        "LOAD",
        "16",
        [
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
      "009eeb6c",
      "READ",
      [
        "storage",
        "002aa39f",
        null,
        "string"
      ]
    ],
    [
      "009eebb0",
      "READ",
      [
        "storage",
        "002b5619",
        null,
        "string"
      ]
    ],
    [
      "009eebb0",
      "READ",
      [
        "storage",
        "002b5629",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009eeb6c",
      "READ",
      [
        "storage",
        "002aa46c",
        null,
        "string"
      ]
    ],
    [
      "009eebb0",
      "READ",
      [
        "storage",
        "002b56f7",
        null,
        "string"
      ]
    ],
    [
      "009eebb0",
      "READ",
      [
        "storage",
        "002b5707",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009edbb8 ["COPY", "tmp:0:8", ["const:39f:8"]]
- 009edbb8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009edbb8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009edbb8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009eeb64 ["COPY", "tmp:0:8", ["const:46c:8"]]
+ 009eeb64 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009eeb64 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009eeb64 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 009edbf4 ["INT_ADD", "register:40f0:8", ["const:9edbf4:8", "const:4:8"]]
- 009edbf4 ["CALL", null, ["callee:00c58f30:8"]]
+ 009eeba0 ["INT_ADD", "register:40f0:8", ["const:9eeba0:8", "const:4:8"]]
+ 009eeba0 ["CALL", null, ["callee:00c58f30:8"]]
- 009edbfc ["COPY", "tmp:0:8", ["const:5d9:8"]]
- 009edbfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009edbfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009edbfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009eeba8 ["COPY", "tmp:0:8", ["const:6b7:8"]]
+ 009eeba8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009eeba8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009eeba8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b0cf68fd69e8725a321c29d8d99e87ca"></a>

### [`009ee388`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ee/009ee388.md) → [`009ef334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ef/009ef334.md) FUN_009ef334

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)
- 新版 呼出元 1件 [`009f08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f08e0.md) · 呼出先 20件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md)

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
      "definition_site": "009ef378",
      "incomplete_value": false,
      "site": "009ef37c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ef398",
      "incomplete_value": true,
      "site": "009ef3a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:330:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ef394",
      "incomplete_value": true,
      "site": "009ef3ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b9a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009ef37c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009ef394",
      "READ",
      [
        "storage",
        "002baabc",
        null,
        "string"
      ]
    ],
    [
      "009ef394",
      "READ",
      [
        "storage",
        "002baacc",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ef37c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009ef394",
      "READ",
      [
        "storage",
        "002bab9a",
        null,
        "string"
      ]
    ],
    [
      "009ef394",
      "READ",
      [
        "storage",
        "002babaa",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ee3c4 ["INT_ADD", "register:40f0:8", ["const:9ee3c4:8", "const:4:8"]]
- 009ee3c4 ["CALL", null, ["callee:00488180:8"]]
+ 009ef370 ["INT_ADD", "register:40f0:8", ["const:9ef370:8", "const:4:8"]]
+ 009ef370 ["CALL", null, ["callee:00488180:8"]]
- 009ee3c8 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009ef374 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009ee3cc ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009ee3cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ee3cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ee3cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ef378 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009ef378 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef378 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef378 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1325647fe466d3379723b8429b3ef809"></a>

### [`009ee9c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ee/009ee9c4.md) → [`009ef970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ef/009ef970.md) FUN_009ef970

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009eed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ee/009eed04.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e38.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009efcb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ef/009efcb0.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009f3de4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3de4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.72% / 新版 95.72%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009ef9c8",
      "incomplete_value": true,
      "site": "009ef9c8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:46c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009ef9a0",
      "READ",
      [
        "storage",
        "002aa39f",
        null,
        "string"
      ]
    ],
    [
      "009ef9e4",
      "READ",
      [
        "storage",
        "002b5619",
        null,
        "string"
      ]
    ],
    [
      "009ef9e4",
      "READ",
      [
        "storage",
        "002b5629",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009ef9a0",
      "READ",
      [
        "storage",
        "002aa46c",
        null,
        "string"
      ]
    ],
    [
      "009ef9e4",
      "READ",
      [
        "storage",
        "002b56f7",
        null,
        "string"
      ]
    ],
    [
      "009ef9e4",
      "READ",
      [
        "storage",
        "002b5707",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ee9ec ["COPY", "tmp:0:8", ["const:39f:8"]]
- 009ee9ec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009ee9ec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009ee9ec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009ef998 ["COPY", "tmp:0:8", ["const:46c:8"]]
+ 009ef998 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009ef998 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009ef998 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 009eea28 ["INT_ADD", "register:40f0:8", ["const:9eea28:8", "const:4:8"]]
- 009eea28 ["CALL", null, ["callee:00c58f30:8"]]
+ 009ef9d4 ["INT_ADD", "register:40f0:8", ["const:9ef9d4:8", "const:4:8"]]
+ 009ef9d4 ["CALL", null, ["callee:00c58f30:8"]]
- 009eea30 ["COPY", "tmp:0:8", ["const:5d9:8"]]
- 009eea30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009eea30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009eea30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009ef9dc ["COPY", "tmp:0:8", ["const:6b7:8"]]
+ 009ef9dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef9dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009ef9dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fa0d551b84c9d4d73f2d21112171cf2d"></a>

### [`009ef078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef078.md) → [`009f0024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f0024.md) FUN_009f0024

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ef934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef934.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)
- 新版 呼出元 1件 [`009f08e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f08e0.md) · 呼出先 20件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.05% / 新版 92.05%

優先判定に残った影響 `store_value` 9件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f0068",
      "incomplete_value": false,
      "site": "009f006c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f0084",
      "incomplete_value": true,
      "site": "009f0094",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:479:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f0088",
      "incomplete_value": true,
      "site": "009f0098",
      "value": [
        "LOAD",
        "16",
        [
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
      "009f006c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "009f0084",
      "READ",
      [
        "storage",
        "002aa3ac",
        null,
        "string"
      ]
    ],
    [
      "009f0088",
      "READ",
      [
        "storage",
        "002aa3b8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009f006c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "009f0084",
      "READ",
      [
        "storage",
        "002aa479",
        null,
        "string"
      ]
    ],
    [
      "009f0088",
      "READ",
      [
        "storage",
        "002aa485",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ef0b4 ["INT_ADD", "register:40f0:8", ["const:9ef0b4:8", "const:4:8"]]
- 009ef0b4 ["CALL", null, ["callee:00488180:8"]]
+ 009f0060 ["INT_ADD", "register:40f0:8", ["const:9f0060:8", "const:4:8"]]
+ 009f0060 ["CALL", null, ["callee:00488180:8"]]
- 009ef0b8 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 009f0064 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 009ef0bc ["COPY", "tmp:0:8", ["const:e08:8"]]
- 009ef0bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ef0bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ef0bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f0068 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 009f0068 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f0068 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f0068 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e8dd7d2047f4bd13d4cf05c6b6e6e799"></a>

### [`009ef6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef6c0.md) → [`009f066c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f066c.md) FUN_009f066c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2658.md) · 呼出先 2件 [`009f3938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3938.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009f3604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3604.md) · 呼出先 2件 [`009f48e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f48e4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.27% / 新版 97.27%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f06b8",
      "incomplete_value": false,
      "site": "009f06bc",
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
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f06bc",
      "DATA",
      [
        "storage",
        "00c89f28",
        null,
        "undefined *"
      ]
    ],
    [
      "009f078c",
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
      "009f06bc",
      "DATA",
      [
        "storage",
        "00c8aef8",
        null,
        "undefined *"
      ]
    ],
    [
      "009f078c",
      "DATA",
      [
        "storage",
        "00c8b450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ef708 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009f06b4 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009ef70c ["COPY", "tmp:0:8", ["const:f28:8"]]
- 009ef70c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ef70c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ef70c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f06b8 ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 009f06b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f06b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f06b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ef7c0 ["COPY", "register:0:8", ["register:4048:8"]]
- 009ef7c0 ["INT_ADD", "register:40f0:8", ["const:9ef7c0:8", "const:4:8"]]
- 009ef7c0 ["CALLIND", null, ["register:0:8"]]
+ 009f076c ["COPY", "register:0:8", ["register:4048:8"]]
+ 009f076c ["INT_ADD", "register:40f0:8", ["const:9f076c:8", "const:4:8"]]
+ 009f076c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-9137473dd26b6320e7a659d5af2d11ad"></a>

### [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) → [`009f0de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f0de8.md) FUN_009f0de8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`009f0560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0560.md) [`009f0d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0d88.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f3b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b0c.md) [`009f3b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b20.md)
- 新版 呼出元 2件 [`009f150c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f1/009f150c.md) [`009f1d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f1/009f1d34.md) · 呼出先 9件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009f4ab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4ab8.md) [`009f4acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4acc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.05% / 新版 95.05%

優先判定に残った影響 `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f11c4",
      "incomplete_value": true,
      "site": "009f11cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 48,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f11c0",
      "incomplete_value": true,
      "site": "009f11d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eef:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f11c0",
      "incomplete_value": true,
      "site": "009f11d0",
      "value": [
        "LOAD",
        "16",
        [
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
      "009f11c0",
      "READ",
      [
        "storage",
        "002a5d97",
        null,
        "string"
      ]
    ],
    [
      "009f11c0",
      "READ",
      [
        "storage",
        "002a5da7",
        null,
        "string"
      ]
    ],
    [
      "009f11c4",
      "READ",
      [
        "storage",
        "002c2280",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009f11c0",
      "READ",
      [
        "storage",
        "002a5eef",
        null,
        "string"
      ]
    ],
    [
      "009f11c0",
      "READ",
      [
        "storage",
        "002a5eff",
        null,
        "string"
      ]
    ],
    [
      "009f11c4",
      "READ",
      [
        "storage",
        "002c22d0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009effec ["INT_ADD", "register:40f0:8", ["const:9effec:8", "const:4:8"]]
- 009effec ["CALL", null, ["callee:00c58f30:8"]]
+ 009f0f98 ["INT_ADD", "register:40f0:8", ["const:9f0f98:8", "const:4:8"]]
+ 009f0f98 ["CALL", null, ["callee:00c58f30:8"]]
- 009f0024 ["INT_ADD", "register:40f0:8", ["const:9f0024:8", "const:4:8"]]
- 009f0024 ["CALL", null, ["callee:00c590a0:8"]]
+ 009f0fd0 ["INT_ADD", "register:40f0:8", ["const:9f0fd0:8", "const:4:8"]]
+ 009f0fd0 ["CALL", null, ["callee:00c590a0:8"]]
- 009f0038 ["INT_ADD", "register:40f0:8", ["const:9f0038:8", "const:4:8"]]
- 009f0038 ["CALL", null, ["callee:00c58f50:8"]]
+ 009f0fe4 ["INT_ADD", "register:40f0:8", ["const:9f0fe4:8", "const:4:8"]]
+ 009f0fe4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-59cfb145ca0b820e7fe2c3da513203db"></a>

### [`009f0560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0560.md) → [`009f150c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f1/009f150c.md) FUN_009f150c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f24f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f24f8.md) · 呼出先 11件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) [`009f3b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b0c.md)
- 新版 呼出元 1件 [`009f34a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f34a4.md) · 呼出先 11件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`009f0de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f0de8.md) [`009f4ab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4ab8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.18% / 新版 99.18%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f15f8",
      "incomplete_value": false,
      "site": "009f1608",
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
            "const:f58:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f1600",
      "incomplete_value": false,
      "site": "009f1608",
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
            "const:fb0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f166c",
      "incomplete_value": false,
      "site": "009f167c",
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
            "const:f58:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f15f8",
      "PARAM",
      [
        "storage",
        "00c89f88",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f1600",
      "PARAM",
      [
        "storage",
        "00c89fe0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f166c",
      "PARAM",
      [
        "storage",
        "00c89f88",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f15f8",
      "PARAM",
      [
        "storage",
        "00c8af58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f1600",
      "PARAM",
      [
        "storage",
        "00c8afb0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f166c",
      "PARAM",
      [
        "storage",
        "00c8af58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f065c ["INT_ADD", "register:40f0:8", ["const:9f065c:8", "const:4:8"]]
- 009f065c ["CALL", null, ["callee:00c596b0:8"]]
+ 009f1608 ["INT_ADD", "register:40f0:8", ["const:9f1608:8", "const:4:8"]]
+ 009f1608 ["CALL", null, ["callee:00c596b0:8"]]
- 009f06d0 ["INT_ADD", "register:40f0:8", ["const:9f06d0:8", "const:4:8"]]
- 009f06d0 ["CALL", null, ["callee:00c596b0:8"]]
+ 009f167c ["INT_ADD", "register:40f0:8", ["const:9f167c:8", "const:4:8"]]
+ 009f167c ["CALL", null, ["callee:00c596b0:8"]]
- 009f05ac ["INT_ADD", "register:40f0:8", ["const:9f05ac:8", "const:4:8"]]
- 009f05ac ["CALL", null, ["callee:009f0de8:8"]]
+ 009f1558 ["INT_ADD", "register:40f0:8", ["const:9f1558:8", "const:4:8"]]
+ 009f1558 ["CALL", null, ["callee:009f0de8:8"]]
~~~


<a id="compare-1c15c3808c9bac6e126f35da24c7602f"></a>

### [`009f0d88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0d88.md) → [`009f1d34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f1/009f1d34.md) FUN_009f1d34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) [`009f109c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f109c.md) [`009f3850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3850.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009f0de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f0de8.md) [`009f2048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2048.md) [`009f47fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f47fc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.71% / 新版 95.71%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f1df4",
      "incomplete_value": true,
      "site": "009f1e04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:150:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f1df8",
      "incomplete_value": true,
      "site": "009f1e14",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:261:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f1df8",
      "incomplete_value": true,
      "site": "009f1e14",
      "value": [
        "LOAD",
        "16",
        [
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
      "009f1df4",
      "READ",
      [
        "storage",
        "002c2100",
        null,
        null
      ]
    ],
    [
      "009f1df8",
      "READ",
      [
        "storage",
        "002b3217",
        null,
        "string"
      ]
    ],
    [
      "009f1df8",
      "READ",
      [
        "storage",
        "002b3227",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009f1df4",
      "READ",
      [
        "storage",
        "002c2150",
        null,
        null
      ]
    ],
    [
      "009f1df8",
      "READ",
      [
        "storage",
        "002b3261",
        null,
        "string"
      ]
    ],
    [
      "009f1df8",
      "READ",
      [
        "storage",
        "002b3271",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f0de0 ["INT_ADD", "register:40f0:8", ["const:9f0de0:8", "const:4:8"]]
- 009f0de0 ["CALL", null, ["callee:009f4f34:8"]]
+ 009f1d8c ["INT_ADD", "register:40f0:8", ["const:9f1d8c:8", "const:4:8"]]
+ 009f1d8c ["CALL", null, ["callee:009f4f34:8"]]
- 009f0e38 ["INT_ADD", "register:40f0:8", ["const:9f0e38:8", "const:4:8"]]
- 009f0e38 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f1de4 ["INT_ADD", "register:40f0:8", ["const:9f1de4:8", "const:4:8"]]
+ 009f1de4 ["CALL", null, ["callee:00c58f30:8"]]
- 009f0e44 ["COPY", "tmp:0:8", ["const:217:8"]]
- 009f0e44 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009f0e44 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009f0e44 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009f1df0 ["COPY", "tmp:0:8", ["const:261:8"]]
+ 009f1df0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009f1df0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009f1df0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-51acc1fc74f400fedcef0eeb7f14587b"></a>

### [`009f19cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f19cc.md) → [`009f2978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2978.md) FUN_009f2978

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f3650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3650.md) [`009f38e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f38e8.md) [`009f3f88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3f88.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009f45fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f45fc.md) [`009f4894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4894.md) [`009f4f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4f34.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.73% / 新版 93.73%

優先判定に残った影響 `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f2a3c",
      "incomplete_value": true,
      "site": "009f2a4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:150:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f2a40",
      "incomplete_value": true,
      "site": "009f2a5c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:261:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f2a40",
      "incomplete_value": true,
      "site": "009f2a5c",
      "value": [
        "LOAD",
        "16",
        [
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
      "009f2a3c",
      "READ",
      [
        "storage",
        "002c2100",
        null,
        null
      ]
    ],
    [
      "009f2a40",
      "READ",
      [
        "storage",
        "002b3217",
        null,
        "string"
      ]
    ],
    [
      "009f2a40",
      "READ",
      [
        "storage",
        "002b3227",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009f2a3c",
      "READ",
      [
        "storage",
        "002c2150",
        null,
        null
      ]
    ],
    [
      "009f2a40",
      "READ",
      [
        "storage",
        "002b3261",
        null,
        "string"
      ]
    ],
    [
      "009f2a40",
      "READ",
      [
        "storage",
        "002b3271",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f1a28 ["INT_ADD", "register:40f0:8", ["const:9f1a28:8", "const:4:8"]]
- 009f1a28 ["CALL", null, ["callee:009f4f34:8"]]
+ 009f29d4 ["INT_ADD", "register:40f0:8", ["const:9f29d4:8", "const:4:8"]]
+ 009f29d4 ["CALL", null, ["callee:009f4f34:8"]]
- 009f1a80 ["INT_ADD", "register:40f0:8", ["const:9f1a80:8", "const:4:8"]]
- 009f1a80 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f2a2c ["INT_ADD", "register:40f0:8", ["const:9f2a2c:8", "const:4:8"]]
+ 009f2a2c ["CALL", null, ["callee:00c58f30:8"]]
- 009f1a8c ["COPY", "tmp:0:8", ["const:217:8"]]
- 009f1a8c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009f1a8c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009f1a8c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009f2a38 ["COPY", "tmp:0:8", ["const:261:8"]]
+ 009f2a38 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009f2a38 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009f2a38 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-0fb0ecea7da5300e5aeddb0fdde36495"></a>

### [`009f1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1ea0.md) → [`009f2e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2e4c.md) FUN_009f2e4c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 13件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`009f3650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3650.md) [`009f37b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f37b8.md) [`009f3850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3850.md)
- 新版 呼出元 0件  · 呼出先 13件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`009f45fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f45fc.md) [`009f4764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4764.md) [`009f47fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f47fc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.99% / 新版 96.99%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f2f14",
      "incomplete_value": true,
      "site": "009f2f24",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:150:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f2f18",
      "incomplete_value": true,
      "site": "009f2f34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:261:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f2f18",
      "incomplete_value": true,
      "site": "009f2f34",
      "value": [
        "LOAD",
        "16",
        [
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
      "009f2f14",
      "READ",
      [
        "storage",
        "002c2100",
        null,
        null
      ]
    ],
    [
      "009f2f18",
      "READ",
      [
        "storage",
        "002b3217",
        null,
        "string"
      ]
    ],
    [
      "009f2f18",
      "READ",
      [
        "storage",
        "002b3227",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009f2f14",
      "READ",
      [
        "storage",
        "002c2150",
        null,
        null
      ]
    ],
    [
      "009f2f18",
      "READ",
      [
        "storage",
        "002b3261",
        null,
        "string"
      ]
    ],
    [
      "009f2f18",
      "READ",
      [
        "storage",
        "002b3271",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f1f00 ["INT_ADD", "register:40f0:8", ["const:9f1f00:8", "const:4:8"]]
- 009f1f00 ["CALL", null, ["callee:009f4f34:8"]]
+ 009f2eac ["INT_ADD", "register:40f0:8", ["const:9f2eac:8", "const:4:8"]]
+ 009f2eac ["CALL", null, ["callee:009f4f34:8"]]
- 009f1f58 ["INT_ADD", "register:40f0:8", ["const:9f1f58:8", "const:4:8"]]
- 009f1f58 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f2f04 ["INT_ADD", "register:40f0:8", ["const:9f2f04:8", "const:4:8"]]
+ 009f2f04 ["CALL", null, ["callee:00c58f30:8"]]
- 009f1f64 ["COPY", "tmp:0:8", ["const:217:8"]]
- 009f1f64 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009f1f64 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009f1f64 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 009f2f10 ["COPY", "tmp:0:8", ["const:261:8"]]
+ 009f2f10 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 009f2f10 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 009f2f10 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-32032aa11f5f4003a5c7b38c078b5137"></a>

### [`009f2658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2658.md) → [`009f3604`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3604.md) FUN_009f3604

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`009e0228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e0/009e0228.md) · 呼出先 2件 [`009ef6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009ef6c0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009e11d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e1/009e11d4.md) · 呼出先 2件 [`009f066c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f066c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f362c",
      "incomplete_value": false,
      "site": "009f3638",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f3638",
      "DATA",
      [
        "storage",
        "00c8a500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3638",
      "DATA",
      [
        "storage",
        "00c8b4d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2674 ["INT_ADD", "register:40f0:8", ["const:9f2674:8", "const:4:8"]]
- 009f2674 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f3620 ["INT_ADD", "register:40f0:8", ["const:9f3620:8", "const:4:8"]]
+ 009f3620 ["CALL", null, ["callee:00c58f30:8"]]
- 009f267c ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f3628 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f2680 ["COPY", "tmp:0:8", ["const:500:8"]]
- 009f2680 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f2680 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f2680 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f362c ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 009f362c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f362c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f362c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8ac218c6d4142277282e9c33d6e6310e"></a>

### [`009f2700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2700.md) → [`009f36ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f36ac.md) FUN_009f36ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f36c8",
      "incomplete_value": false,
      "site": "009f36cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f36cc",
      "DATA",
      [
        "storage",
        "00c8a080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f36cc",
      "DATA",
      [
        "storage",
        "00c8b050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2718 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f36c4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f271c ["COPY", "tmp:0:8", ["const:80:8"]]
- 009f271c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f271c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f271c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f36c8 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 009f36c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f36c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f36c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f2758 ["INT_ADD", "register:40f0:8", ["const:9f2758:8", "const:4:8"]]
- 009f2758 ["CALL", null, ["callee:00c54d90:8"]]
+ 009f3704 ["INT_ADD", "register:40f0:8", ["const:9f3704:8", "const:4:8"]]
+ 009f3704 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-32a31ed9efa36608f2614ef09611de72"></a>

### [`009f2a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2a68.md) → [`009f3a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3a14.md) FUN_009f3a14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f2a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2a1c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`009f39c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f39c8.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f3a30",
      "incomplete_value": false,
      "site": "009f3a34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f3a34",
      "DATA",
      [
        "storage",
        "00c8a080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3a34",
      "DATA",
      [
        "storage",
        "00c8b050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2a80 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f3a2c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f2a84 ["COPY", "tmp:0:8", ["const:80:8"]]
- 009f2a84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f2a84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f2a84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f3a30 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 009f3a30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3a30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3a30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f2ac0 ["INT_ADD", "register:40f0:8", ["const:9f2ac0:8", "const:4:8"]]
- 009f2ac0 ["CALL", null, ["callee:00c54d90:8"]]
+ 009f3a6c ["INT_ADD", "register:40f0:8", ["const:9f3a6c:8", "const:4:8"]]
+ 009f3a6c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-0885d14770dce68bf7616678ab711112"></a>

### [`009f2e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e38.md) → [`009f3de4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3de4.md) FUN_009f3de4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`009edb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009edb90.md) [`009ee9c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ee/009ee9c4.md) [`009f2b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2b70.md) [`009f45f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f45f8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 4件 [`009eeb3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ee/009eeb3c.md) [`009ef970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ef/009ef970.md) [`009f3b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3b1c.md) [`009f55a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f55a4.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f3df0",
      "incomplete_value": false,
      "site": "009f3df4",
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
      "009f3df0",
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
      "009f3df0",
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
- 009f2e48 ["INT_ADD", "register:40f0:8", ["const:9f2e48:8", "const:4:8"]]
- 009f2e48 ["CALL", null, ["callee:0043bad8:8"]]
+ 009f3df4 ["INT_ADD", "register:40f0:8", ["const:9f3df4:8", "const:4:8"]]
+ 009f3df4 ["CALL", null, ["callee:0043bad8:8"]]
- 009f2e40 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009f3dec ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009f2e44 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009f2e44 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f2e44 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f2e44 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f3df0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009f3df0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3df0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3df0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-72907b3566a0a014f79fe9f711ac28a0"></a>

### [`009f2e4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e4c.md) → [`009f3df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3df8.md) FUN_009f3df8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f3dfc",
      "incomplete_value": false,
      "site": "009f3e00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f3e00",
      "DATA",
      [
        "storage",
        "00c8a0e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3e00",
      "DATA",
      [
        "storage",
        "00c8b0b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2e4c ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f3df8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f2e50 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 009f2e50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f2e50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f2e50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f3dfc ["COPY", "tmp:0:8", ["const:b0:8"]]
+ 009f3dfc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3dfc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3dfc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d5933f59a803e6cec65e9b62bdd6f4c4"></a>

### [`009f2e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2e5c.md) → [`009f3e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3e08.md) FUN_009f3e08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f3e18",
      "incomplete_value": false,
      "site": "009f3e20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f3e20",
      "DATA",
      [
        "storage",
        "00c8a0e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f3e20",
      "DATA",
      [
        "storage",
        "00c8b0b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f2e68 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f3e14 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f2e6c ["COPY", "tmp:0:8", ["const:e0:8"]]
- 009f2e6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f2e6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f2e6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f3e18 ["COPY", "tmp:0:8", ["const:b0:8"]]
+ 009f3e18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3e18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f3e18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f2e78 ["INT_ADD", "register:40f0:8", ["const:9f2e78:8", "const:4:8"]]
- 009f2e78 ["CALL", null, ["callee:00c58f40:8"]]
+ 009f3e24 ["INT_ADD", "register:40f0:8", ["const:9f3e24:8", "const:4:8"]]
+ 009f3e24 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-04dd94d4553eef6c2eb20000a2270dd3"></a>

### [`009f2ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2ff8.md) → [`009f3fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3fa4.md) FUN_009f3fa4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009f2eb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2eb8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009f3e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3e64.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f3fb0",
      "incomplete_value": false,
      "site": "009f3fb4",
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
      "009f3fb0",
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
      "009f3fb0",
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
- 009f3008 ["INT_ADD", "register:40f0:8", ["const:9f3008:8", "const:4:8"]]
- 009f3008 ["CALL", null, ["callee:0043bad8:8"]]
+ 009f3fb4 ["INT_ADD", "register:40f0:8", ["const:9f3fb4:8", "const:4:8"]]
+ 009f3fb4 ["CALL", null, ["callee:0043bad8:8"]]
- 009f3000 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009f3fac ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009f3004 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009f3004 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f3004 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f3004 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f3fb0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009f3fb0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3fb0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f3fb0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-fb89bba6635b29c864bdb0ab5c3c29f0"></a>

### [`009f30dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f30dc.md) → [`009f4088`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4088.md) FUN_009f4088

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f408c",
      "incomplete_value": false,
      "site": "009f4090",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f4090",
      "DATA",
      [
        "storage",
        "00c8a290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f4090",
      "DATA",
      [
        "storage",
        "00c8b260",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f30dc ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f4088 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f30e0 ["COPY", "tmp:0:8", ["const:290:8"]]
- 009f30e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f30e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f30e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f408c ["COPY", "tmp:0:8", ["const:260:8"]]
+ 009f408c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f408c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f408c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-61050d99f7cd362a65c2c6c7d3896bfc"></a>

### [`009f30ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f30ec.md) → [`009f4098`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4098.md) FUN_009f4098

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f40a8",
      "incomplete_value": false,
      "site": "009f40b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f40b0",
      "DATA",
      [
        "storage",
        "00c8a290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f40b0",
      "DATA",
      [
        "storage",
        "00c8b260",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f30f8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f40a4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f30fc ["COPY", "tmp:0:8", ["const:290:8"]]
- 009f30fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f30fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f30fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f40a8 ["COPY", "tmp:0:8", ["const:260:8"]]
+ 009f40a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f40a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f40a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f3108 ["INT_ADD", "register:40f0:8", ["const:9f3108:8", "const:4:8"]]
- 009f3108 ["CALL", null, ["callee:00c58f40:8"]]
+ 009f40b4 ["INT_ADD", "register:40f0:8", ["const:9f40b4:8", "const:4:8"]]
+ 009f40b4 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-2afd87c903f68b3fd4be749df43a6d6d"></a>

### [`009f3148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3148.md) → [`009f40f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f40f4.md) FUN_009f40f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f40f8",
      "incomplete_value": false,
      "site": "009f40fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f40fc",
      "DATA",
      [
        "storage",
        "00c8a348",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f40fc",
      "DATA",
      [
        "storage",
        "00c8b318",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3148 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f40f4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f314c ["COPY", "tmp:0:8", ["const:348:8"]]
- 009f314c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f314c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f314c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f40f8 ["COPY", "tmp:0:8", ["const:318:8"]]
+ 009f40f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f40f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f40f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4f42ec4bf23e810b11edb7ba28c5385f"></a>

### [`009f3158`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3158.md) → [`009f4104`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4104.md) FUN_009f4104

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f4114",
      "incomplete_value": false,
      "site": "009f411c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:318:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f411c",
      "DATA",
      [
        "storage",
        "00c8a348",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f411c",
      "DATA",
      [
        "storage",
        "00c8b318",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3164 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f4110 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f3168 ["COPY", "tmp:0:8", ["const:348:8"]]
- 009f3168 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f3168 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f3168 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f4114 ["COPY", "tmp:0:8", ["const:318:8"]]
+ 009f4114 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4114 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4114 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f3174 ["INT_ADD", "register:40f0:8", ["const:9f3174:8", "const:4:8"]]
- 009f3174 ["CALL", null, ["callee:00c58f40:8"]]
+ 009f4120 ["INT_ADD", "register:40f0:8", ["const:9f4120:8", "const:4:8"]]
+ 009f4120 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-ebdf6343372d15fc7d3f11598011ba90"></a>

### [`009f31b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f31b8.md) → [`009f4164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4164.md) FUN_009f4164

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`009ec2a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec2a4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009ed250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ed/009ed250.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f41f0",
      "incomplete_value": false,
      "site": "009f4258",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f4258",
      "DATA",
      [
        "storage",
        "00c8a080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f4258",
      "DATA",
      [
        "storage",
        "00c8b050",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f322c ["INT_ADD", "register:40f0:8", ["const:9f322c:8", "const:4:8"]]
- 009f322c ["CALL", null, ["callee:00c58f30:8"]]
+ 009f41d8 ["INT_ADD", "register:40f0:8", ["const:9f41d8:8", "const:4:8"]]
+ 009f41d8 ["CALL", null, ["callee:00c58f30:8"]]
- 009f3240 ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 009f41ec ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 009f3244 ["COPY", "tmp:0:8", ["const:80:8"]]
- 009f3244 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009f3244 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009f3244 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009f41f0 ["COPY", "tmp:0:8", ["const:50:8"]]
+ 009f41f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009f41f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009f41f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a1fb2bb01581fd2791489ebd6b2a8f94"></a>

### [`009f32f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f32f8.md) → [`009f42a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f42a4.md) FUN_009f42a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009ec9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ec/009ec9b0.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`009ed95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ed/009ed95c.md) · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.23% / 新版 91.23%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f42c0",
      "incomplete_value": false,
      "site": "009f42c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f42cc",
      "incomplete_value": false,
      "site": "009f42cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f42c0",
      "DATA",
      [
        "storage",
        "00c8a400",
        null,
        "undefined *"
      ]
    ],
    [
      "009f42cc",
      "DATA",
      [
        "storage",
        "00c8a450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f42c0",
      "DATA",
      [
        "storage",
        "00c8b3d0",
        null,
        "undefined *"
      ]
    ],
    [
      "009f42cc",
      "DATA",
      [
        "storage",
        "00c8b420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3308 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f42b4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f330c ["COPY", "tmp:0:8", ["const:400:8"]]
- 009f330c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f330c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f330c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f42b8 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 009f42b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f42b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f42b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f3318 ["COPY", "register:4040:8", ["const:c8a000:8"]]
~~~


<a id="compare-c611c68c1ffc9609edb99aeaf3e339c3"></a>

### [`009f33f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f33f8.md) → [`009f43a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f43a4.md) FUN_009f43a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f43a8",
      "incomplete_value": false,
      "site": "009f43ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f43ac",
      "DATA",
      [
        "storage",
        "00c8a400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f43ac",
      "DATA",
      [
        "storage",
        "00c8b3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f33f8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f43a4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f33fc ["COPY", "tmp:0:8", ["const:400:8"]]
- 009f33fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f33fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f33fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f43a8 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 009f43a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f43a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f43a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2b76a416f6c471b898a1d5edc2e32869"></a>

### [`009f3408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3408.md) → [`009f43b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f43b4.md) FUN_009f43b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f43c4",
      "incomplete_value": false,
      "site": "009f43cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:3d0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f43cc",
      "DATA",
      [
        "storage",
        "00c8a400",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f43cc",
      "DATA",
      [
        "storage",
        "00c8b3d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3414 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f43c0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f3418 ["COPY", "tmp:0:8", ["const:400:8"]]
- 009f3418 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f3418 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f3418 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f43c4 ["COPY", "tmp:0:8", ["const:3d0:8"]]
+ 009f43c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f43c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f43c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f3424 ["INT_ADD", "register:40f0:8", ["const:9f3424:8", "const:4:8"]]
- 009f3424 ["CALL", null, ["callee:00c58f40:8"]]
+ 009f43d0 ["INT_ADD", "register:40f0:8", ["const:9f43d0:8", "const:4:8"]]
+ 009f43d0 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-105d0eedc571392c3553eeb140bd522a"></a>

### [`009f3448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3448.md) → [`009f43f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f43f4.md) FUN_009f43f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f4408",
      "incomplete_value": false,
      "site": "009f440c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f440c",
      "DATA",
      [
        "storage",
        "00c8a450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f440c",
      "DATA",
      [
        "storage",
        "00c8b420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3458 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f4404 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f345c ["COPY", "tmp:0:8", ["const:450:8"]]
- 009f345c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f345c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f345c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f4408 ["COPY", "tmp:0:8", ["const:420:8"]]
+ 009f4408 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4408 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4408 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f3470 ["INT_ADD", "register:40f0:8", ["const:9f3470:8", "const:4:8"]]
- 009f3470 ["CALL", null, ["callee:00c54d90:8"]]
+ 009f441c ["INT_ADD", "register:40f0:8", ["const:9f441c:8", "const:4:8"]]
+ 009f441c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-5aa6ad5963d1bf3656988c0657c74dc2"></a>

### [`009f34a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f34a4.md) → [`009f4450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4450.md) FUN_009f4450

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f4468",
      "incomplete_value": false,
      "site": "009f446c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:420:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f446c",
      "DATA",
      [
        "storage",
        "00c8a450",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f446c",
      "DATA",
      [
        "storage",
        "00c8b420",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f34b8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f4464 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f34bc ["COPY", "tmp:0:8", ["const:450:8"]]
- 009f34bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f34bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f34bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f4468 ["COPY", "tmp:0:8", ["const:420:8"]]
+ 009f4468 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4468 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4468 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f34d0 ["INT_ADD", "register:40f0:8", ["const:9f34d0:8", "const:4:8"]]
- 009f34d0 ["CALL", null, ["callee:00c54d90:8"]]
+ 009f447c ["INT_ADD", "register:40f0:8", ["const:9f447c:8", "const:4:8"]]
+ 009f447c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-5846295f1a780c62638c1e34ea4fd098"></a>

### [`009f3650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3650.md) → [`009f45fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f45fc.md) FUN_009f45fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`009ed16c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ed/009ed16c.md) [`009f19cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f19cc.md) [`009f1ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1ea0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`009ee118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009ee/009ee118.md) [`009f2978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2978.md) [`009f2e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2e4c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f4608",
      "incomplete_value": false,
      "site": "009f460c",
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
      "009f4608",
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
      "009f4608",
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
- 009f3660 ["INT_ADD", "register:40f0:8", ["const:9f3660:8", "const:4:8"]]
- 009f3660 ["CALL", null, ["callee:0043bad8:8"]]
+ 009f460c ["INT_ADD", "register:40f0:8", ["const:9f460c:8", "const:4:8"]]
+ 009f460c ["CALL", null, ["callee:0043bad8:8"]]
- 009f3658 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009f4604 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009f365c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009f365c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f365c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f365c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f4608 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009f4608 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4608 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4608 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-34b72beccfb5241fbf433f99fe3cfd59"></a>

### [`009f3ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3ac8.md) → [`009f4a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4a74.md) FUN_009f4a74

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
      "definition_site": "009f4a78",
      "incomplete_value": false,
      "site": "009f4a7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:450:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f4a7c",
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
      "009f4a7c",
      "DATA",
      [
        "storage",
        "00c8b450",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f3ac8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f4a74 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f3acc ["COPY", "tmp:0:8", ["const:480:8"]]
- 009f3acc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f3acc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f3acc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f4a78 ["COPY", "tmp:0:8", ["const:450:8"]]
+ 009f4a78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4a78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f4a78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ccaabe604ee3094c505ab09f8fc893d7"></a>

### [`009f3b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b0c.md) → [`009f4ab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4ab8.md) FUN_009f4ab8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`009efe3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ef/009efe3c.md) [`009f0560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f0/009f0560.md) [`009f1254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1254.md) [`009f3cc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3cc0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 4件 [`009f0de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f0/009f0de8.md) [`009f150c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f1/009f150c.md) [`009f2200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2200.md) [`009f4c6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4c6c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f4ac4",
      "incomplete_value": false,
      "site": "009f4ac8",
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
      "009f4ac4",
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
      "009f4ac4",
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
- 009f3b1c ["INT_ADD", "register:40f0:8", ["const:9f3b1c:8", "const:4:8"]]
- 009f3b1c ["CALL", null, ["callee:0043bad8:8"]]
+ 009f4ac8 ["INT_ADD", "register:40f0:8", ["const:9f4ac8:8", "const:4:8"]]
+ 009f4ac8 ["CALL", null, ["callee:0043bad8:8"]]
- 009f3b14 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009f4ac0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009f3b18 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009f3b18 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f3b18 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f3b18 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f4ac4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009f4ac4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4ac4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4ac4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-9038a5a5a5b9e600511f93ccf8135ff8"></a>

### [`009f3cac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3cac.md) → [`009f4c58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4c58.md) FUN_009f4c58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`009f3b20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f3/009f3b20.md) [`009f49a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f49a4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`009f4acc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f4/009f4acc.md) [`009f5950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5950.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f4c64",
      "incomplete_value": false,
      "site": "009f4c68",
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
      "009f4c64",
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
      "009f4c64",
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
- 009f3cbc ["INT_ADD", "register:40f0:8", ["const:9f3cbc:8", "const:4:8"]]
- 009f3cbc ["CALL", null, ["callee:0043bad8:8"]]
+ 009f4c68 ["INT_ADD", "register:40f0:8", ["const:9f4c68:8", "const:4:8"]]
+ 009f4c68 ["CALL", null, ["callee:0043bad8:8"]]
- 009f3cb4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009f4c60 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009f3cb8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009f3cb8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f3cb8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f3cb8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f4c64 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009f4c64 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4c64 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f4c64 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-74d171d56d12bb71ce31a29aabca4999"></a>

### [`009f4b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b30.md) → [`009f5adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5adc.md) FUN_009f5adc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009f1610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1610.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009f25bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f25bc.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f5ae8",
      "incomplete_value": false,
      "site": "009f5aec",
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
      "009f5ae8",
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
      "009f5ae8",
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
- 009f4b40 ["INT_ADD", "register:40f0:8", ["const:9f4b40:8", "const:4:8"]]
- 009f4b40 ["CALL", null, ["callee:0043bad8:8"]]
+ 009f5aec ["INT_ADD", "register:40f0:8", ["const:9f5aec:8", "const:4:8"]]
+ 009f5aec ["CALL", null, ["callee:0043bad8:8"]]
- 009f4b38 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009f5ae4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009f4b3c ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009f4b3c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f4b3c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f4b3c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f5ae8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009f5ae8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f5ae8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f5ae8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2d5d03695a2839c9f6231f7b48c97bb4"></a>

### [`009f4b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b44.md) → [`009f5af0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5af0.md) FUN_009f5af0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009f1754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f1/009f1754.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009f2700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f2/009f2700.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009f5afc",
      "incomplete_value": false,
      "site": "009f5b00",
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
      "009f5afc",
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
      "009f5afc",
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
- 009f4b54 ["INT_ADD", "register:40f0:8", ["const:9f4b54:8", "const:4:8"]]
- 009f4b54 ["CALL", null, ["callee:0043bad8:8"]]
+ 009f5b00 ["INT_ADD", "register:40f0:8", ["const:9f5b00:8", "const:4:8"]]
+ 009f5b00 ["CALL", null, ["callee:0043bad8:8"]]
- 009f4b4c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 009f5af8 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 009f4b50 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 009f4b50 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009f4b50 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009f4b50 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009f5afc ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 009f5afc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009f5afc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009f5afc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-80f531c00937a9b0ee972e93c8727809"></a>

### [`009f4b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b58.md) → [`009f5b04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5b04.md) FUN_009f5b04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f5b08",
      "incomplete_value": false,
      "site": "009f5b0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f5b0c",
      "DATA",
      [
        "storage",
        "00c8a500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f5b0c",
      "DATA",
      [
        "storage",
        "00c8b4d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f4b58 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f5b04 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f4b5c ["COPY", "tmp:0:8", ["const:500:8"]]
- 009f4b5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f5b08 ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 009f5b08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f5b08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f5b08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-17b7298a5fa2a22d5ea04eb9e01ed716"></a>

### [`009f4b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b68.md) → [`009f5b14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5b14.md) FUN_009f5b14

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f5b24",
      "incomplete_value": false,
      "site": "009f5b2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:4d0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f5b2c",
      "DATA",
      [
        "storage",
        "00c8a500",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f5b2c",
      "DATA",
      [
        "storage",
        "00c8b4d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f4b74 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f5b20 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f4b78 ["COPY", "tmp:0:8", ["const:500:8"]]
- 009f4b78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f4b78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f5b24 ["COPY", "tmp:0:8", ["const:4d0:8"]]
+ 009f5b24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f5b24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f5b24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f4b84 ["INT_ADD", "register:40f0:8", ["const:9f4b84:8", "const:4:8"]]
- 009f4b84 ["CALL", null, ["callee:00c58f40:8"]]
+ 009f5b30 ["INT_ADD", "register:40f0:8", ["const:9f5b30:8", "const:4:8"]]
+ 009f5b30 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-573dc88a01769fc2e6e648f0bdb831c9"></a>

### [`009f4ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4ba4.md) → [`009f5b50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5b50.md) FUN_009f5b50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009f4b98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4b98.md) · 呼出先 8件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`009f28e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f28e8.md) [`009f2938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2938.md) [`009f2988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f2988.md) [`009f29cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f2/009f29cc.md)
- 新版 呼出元 1件 [`009f5b44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5b44.md) · 呼出先 8件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`009f3894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3894.md) [`009f38e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f38e4.md) [`009f3934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3934.md) [`009f3978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f3/009f3978.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.74% / 新版 95.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f5b6c",
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
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f5b6c",
      "DATA",
      [
        "storage",
        "00c89f28",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f5b6c",
      "DATA",
      [
        "storage",
        "00c8aef8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f4bb4 ["COPY", "register:4040:8", ["const:c89000:8"]]
+ 009f5b60 ["COPY", "register:4040:8", ["const:c8a000:8"]]
- 009f4bb8 ["COPY", "tmp:0:8", ["const:f28:8"]]
- 009f4bb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f4bb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f4bb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f5b64 ["COPY", "tmp:0:8", ["const:ef8:8"]]
+ 009f5b64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f5b64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f5b64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f4bc4 ["INT_ADD", "register:40f0:8", ["const:9f4bc4:8", "const:4:8"]]
- 009f4bc4 ["CALL", null, ["callee:009f4894:8"]]
+ 009f5b70 ["INT_ADD", "register:40f0:8", ["const:9f5b70:8", "const:4:8"]]
+ 009f5b70 ["CALL", null, ["callee:009f4894:8"]]
~~~


<a id="compare-719e8ad5d19d3953092d77ce064dd8e5"></a>

### [`009f4c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4c60.md) → [`009f5c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5c0c.md) _INIT_205

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f5c48",
      "incomplete_value": true,
      "site": "009f5c64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f5cc8",
      "incomplete_value": true,
      "site": "009f5ce4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:643:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f5ce8",
      "incomplete_value": true,
      "site": "009f5d04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "009f5c48",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "009f5c6c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "009f5c8c",
      "READ",
      [
        "storage",
        "002b8d6e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009f5c48",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "009f5c6c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "009f5c8c",
      "READ",
      [
        "storage",
        "002b8e3d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f4e94 ["INT_ADD", "register:40f0:8", ["const:9f4e94:8", "const:4:8"]]
- 009f4e94 ["CALL", null, ["callee:00c58ed0:8"]]
+ 009f5e40 ["INT_ADD", "register:40f0:8", ["const:9f5e40:8", "const:4:8"]]
+ 009f5e40 ["CALL", null, ["callee:00c58ed0:8"]]
- 009f4c88 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 009f5c34 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 009f4c8c ["COPY", "tmp:0:8", ["const:e38:8"]]
- 009f4c8c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 009f4c8c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 009f4c8c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 009f5c38 ["COPY", "tmp:0:8", ["const:df8:8"]]
+ 009f5c38 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 009f5c38 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 009f5c38 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-42e1cd8516f65e9394b8df72a6b76528"></a>

### [`009f4ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f4/009f4ff8.md) → [`009f5fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f5/009f5fa4.md) FUN_009f5fa4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 14件 [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`006667e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/006667e8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009df918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df918.md)
- 新版 呼出元 1件 [`009fc44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fc/009fc44c.md) · 呼出先 14件 [`0057c208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057c/0057c208.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md) [`00666b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666b98.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009e08c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e08c4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.08% / 新版 99.08%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f6288",
      "value": [
        "leaf",
        "ram:664c90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f52dc",
      "value": [
        "leaf",
        "ram:6648e0:8"
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
      "009f5ffc",
      "DATA",
      [
        "storage",
        "00c8a580",
        null,
        "undefined *"
      ]
    ],
    [
      "009f6004",
      "READ",
      [
        "storage",
        "002c4248",
        null,
        "undefined8"
      ]
    ],
    [
      "009f6288",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006648e0"
      ]
    ]
  ],
  "added": [
    [
      "009f5ffc",
      "DATA",
      [
        "storage",
        "00c8b550",
        null,
        "undefined *"
      ]
    ],
    [
      "009f6004",
      "READ",
      [
        "storage",
        "002c4298",
        null,
        "undefined8"
      ]
    ],
    [
      "009f6288",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00664c90"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f52dc ["INT_ADD", "register:40f0:8", ["const:9f52dc:8", "const:4:8"]]
- 009f52dc ["CALL", null, ["ram:6648e0:8"]]
+ 009f6288 ["INT_ADD", "register:40f0:8", ["const:9f6288:8", "const:4:8"]]
+ 009f6288 ["CALL", null, ["ram:664c90:8"]]
- 009f503c ["INT_ADD", "register:40f0:8", ["const:9f503c:8", "const:4:8"]]
- 009f503c ["CALL", null, ["callee:00c58f30:8"]]
+ 009f5fe8 ["INT_ADD", "register:40f0:8", ["const:9f5fe8:8", "const:4:8"]]
+ 009f5fe8 ["CALL", null, ["callee:00c58f30:8"]]
- 009f5044 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f5ff0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
~~~


<a id="compare-367bf398172e078211e86b216e793cbb"></a>

### [`009f53fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f53fc.md) → [`009f63a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f6/009f63a8.md) FUN_009f63a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f63c8",
      "incomplete_value": false,
      "site": "009f63cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f6408",
      "incomplete_value": false,
      "site": "009f6410",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f63cc",
      "DATA",
      [
        "storage",
        "00c8a580",
        null,
        "undefined *"
      ]
    ],
    [
      "009f6410",
      "DATA",
      [
        "storage",
        "00c8a550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f63cc",
      "DATA",
      [
        "storage",
        "00c8b550",
        null,
        "undefined *"
      ]
    ],
    [
      "009f6410",
      "DATA",
      [
        "storage",
        "00c8b520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f5418 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f63c4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f541c ["COPY", "tmp:0:8", ["const:580:8"]]
- 009f541c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f541c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f541c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f63c8 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 009f63c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f63c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f63c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f5430 ["INT_ADD", "register:40f0:8", ["const:9f5430:8", "const:4:8"]]
- 009f5430 ["CALL", null, ["callee:00c54d90:8"]]
+ 009f63dc ["INT_ADD", "register:40f0:8", ["const:9f63dc:8", "const:4:8"]]
+ 009f63dc ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-96d5ba52e576213ac125b2471ad18d51"></a>

### [`009f54a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f54a8.md) → [`009f6454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f6/009f6454.md) FUN_009f6454

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md)

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
      "site": "009f64bc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f5510",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "009f6518",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f556c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009f64bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009f6518",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009f64bc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009f6518",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f5510 ["INT_ADD", "register:40f0:8", ["const:9f5510:8", "const:4:8"]]
- 009f5510 ["CALL", null, ["ram:47ad34:8"]]
+ 009f64bc ["INT_ADD", "register:40f0:8", ["const:9f64bc:8", "const:4:8"]]
+ 009f64bc ["CALL", null, ["ram:47b054:8"]]
- 009f556c ["INT_ADD", "register:40f0:8", ["const:9f556c:8", "const:4:8"]]
- 009f556c ["CALL", null, ["ram:47ad34:8"]]
+ 009f6518 ["INT_ADD", "register:40f0:8", ["const:9f6518:8", "const:4:8"]]
+ 009f6518 ["CALL", null, ["ram:47b054:8"]]
- 009f54c8 ["INT_ADD", "register:40f0:8", ["const:9f54c8:8", "const:4:8"]]
- 009f54c8 ["CALL", null, ["callee:008524fc:8"]]
+ 009f6474 ["INT_ADD", "register:40f0:8", ["const:9f6474:8", "const:4:8"]]
+ 009f6474 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b78c5d36961072d42dc28fb8ac1b04b4"></a>

### [`009f55a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f55a8.md) → [`009f6554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f6/009f6554.md) FUN_009f6554

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 0件  · 呼出先 19件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046a5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046a5b0.md) [`0046b278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b278.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

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
      "definition_site": "009f68e4",
      "incomplete_value": true,
      "site": "009f68fc",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f68e0",
      "incomplete_value": true,
      "site": "009f6900",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f68e0",
      "incomplete_value": true,
      "site": "009f6900",
      "value": [
        "LOAD",
        "16",
        [
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
      "009f6594",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f65a0",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f65a8",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f6594",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009f65a0",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f65a8",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f5608 ["INT_ADD", "register:40f0:8", ["const:9f5608:8", "const:4:8"]]
- 009f5608 ["CALL", null, ["callee:00c596b0:8"]]
+ 009f65b4 ["INT_ADD", "register:40f0:8", ["const:9f65b4:8", "const:4:8"]]
+ 009f65b4 ["CALL", null, ["callee:00c596b0:8"]]
- 009f55e4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009f6590 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 009f55e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 009f55e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009f6594 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 009f6594 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-54b939c7e8e0c375067c047465efefda"></a>

### [`009f5b08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f5b08.md) → [`009f6ab4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f6/009f6ab4.md) FUN_009f6ab4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 20件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00665da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665da4.md)
- 新版 呼出元 1件 [`009fc44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fc/009fc44c.md) · 呼出先 20件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0057c208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057c/0057c208.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`00666154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666154.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.72% / 新版 98.72%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f6b0c",
      "incomplete_value": false,
      "site": "009f6b18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:588:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f6b50",
      "incomplete_value": true,
      "site": "009f6b58",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:298:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f6f94",
      "value": [
        "leaf",
        "ram:6c679c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f5fe8",
      "value": [
        "leaf",
        "ram:6c63ec:8"
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
      "009f6b18",
      "DATA",
      [
        "storage",
        "00c8a5b8",
        null,
        "undefined *"
      ]
    ],
    [
      "009f6b50",
      "READ",
      [
        "storage",
        "002c4248",
        null,
        "undefined8"
      ]
    ],
    [
      "009f6f94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c63ec"
      ]
    ]
  ],
  "added": [
    [
      "009f6b18",
      "DATA",
      [
        "storage",
        "00c8b588",
        null,
        "undefined *"
      ]
    ],
    [
      "009f6b50",
      "READ",
      [
        "storage",
        "002c4298",
        null,
        "undefined8"
      ]
    ],
    [
      "009f6f94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c679c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f5fe8 ["INT_ADD", "register:40f0:8", ["const:9f5fe8:8", "const:4:8"]]
- 009f5fe8 ["CALL", null, ["ram:6c63ec:8"]]
+ 009f6f94 ["INT_ADD", "register:40f0:8", ["const:9f6f94:8", "const:4:8"]]
+ 009f6f94 ["CALL", null, ["ram:6c679c:8"]]
- 009f5b54 ["INT_ADD", "register:40f0:8", ["const:9f5b54:8", "const:4:8"]]
- 009f5b54 ["CALL", null, ["callee:00c58f30:8"]]
+ 009f6b00 ["INT_ADD", "register:40f0:8", ["const:9f6b00:8", "const:4:8"]]
+ 009f6b00 ["CALL", null, ["callee:00c58f30:8"]]
- 009f5b5c ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f6b08 ["COPY", "register:4040:8", ["const:c8b000:8"]]
~~~


<a id="compare-7cf74c42842abd430bd36b3a1f9858a0"></a>

### [`009f6938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f6938.md) → [`009f78e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f7/009f78e4.md) FUN_009f78e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f7904",
      "incomplete_value": false,
      "site": "009f7908",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:588:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f7944",
      "incomplete_value": false,
      "site": "009f794c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
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
      "009f7908",
      "DATA",
      [
        "storage",
        "00c8a5b8",
        null,
        "undefined *"
      ]
    ],
    [
      "009f794c",
      "DATA",
      [
        "storage",
        "00c8a550",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009f7908",
      "DATA",
      [
        "storage",
        "00c8b588",
        null,
        "undefined *"
      ]
    ],
    [
      "009f794c",
      "DATA",
      [
        "storage",
        "00c8b520",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f6954 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009f7900 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009f6958 ["COPY", "tmp:0:8", ["const:5b8:8"]]
- 009f6958 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009f6958 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009f6958 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009f7904 ["COPY", "tmp:0:8", ["const:588:8"]]
+ 009f7904 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009f7904 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009f7904 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009f696c ["INT_ADD", "register:40f0:8", ["const:9f696c:8", "const:4:8"]]
- 009f696c ["CALL", null, ["callee:00c54d90:8"]]
+ 009f7918 ["INT_ADD", "register:40f0:8", ["const:9f7918:8", "const:4:8"]]
+ 009f7918 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-5cf62ec478ded3edadffbeb268efee93"></a>

### [`009f69e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f69e4.md) → [`009f7990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f7/009f7990.md) FUN_009f7990

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0046da9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da9c.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0046ddbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046ddbc.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

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
      "site": "009f7b5c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f6bb0",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "009f7bd0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f6c24",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009f7afc",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "009f7b0c",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "009f7b5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009f7afc",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "uleb128"
      ]
    ],
    [
      "009f7b0c",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "uleb128"
      ]
    ],
    [
      "009f7b5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f6bb0 ["INT_ADD", "register:40f0:8", ["const:9f6bb0:8", "const:4:8"]]
- 009f6bb0 ["CALL", null, ["ram:47ad34:8"]]
+ 009f7b5c ["INT_ADD", "register:40f0:8", ["const:9f7b5c:8", "const:4:8"]]
+ 009f7b5c ["CALL", null, ["ram:47b054:8"]]
- 009f6c24 ["INT_ADD", "register:40f0:8", ["const:9f6c24:8", "const:4:8"]]
- 009f6c24 ["CALL", null, ["ram:47ad34:8"]]
+ 009f7bd0 ["INT_ADD", "register:40f0:8", ["const:9f7bd0:8", "const:4:8"]]
+ 009f7bd0 ["CALL", null, ["ram:47b054:8"]]
- 009f6a28 ["INT_ADD", "register:40f0:8", ["const:9f6a28:8", "const:4:8"]]
- 009f6a28 ["CALL", null, ["callee:0046ddbc:8"]]
+ 009f79d4 ["INT_ADD", "register:40f0:8", ["const:9f79d4:8", "const:4:8"]]
+ 009f79d4 ["CALL", null, ["callee:0046ddbc:8"]]
~~~


<a id="compare-468ca78161144295c7b80bed598f3504"></a>

### [`009f6c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f6c68.md) → [`009f7c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f7/009f7c14.md) FUN_009f7c14

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 21件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`004690a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/004690a8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)
- 新版 呼出元 0件  · 呼出先 21件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`004693c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004693c8.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.64% / 新版 98.64%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 3件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f82e8",
      "incomplete_value": true,
      "site": "009f8300",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "009f733c",
      "incomplete_value": true,
      "site": "009f7354",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 37,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f82e4",
      "incomplete_value": true,
      "site": "009f8304",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f7338",
      "incomplete_value": true,
      "site": "009f7358",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 38,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009f82e4",
      "incomplete_value": true,
      "site": "009f8304",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "009f7338",
      "incomplete_value": true,
      "site": "009f7358",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 39,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f7c54",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f7c60",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f7c68",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f7c54",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009f7c60",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f7c68",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f6cc8 ["INT_ADD", "register:40f0:8", ["const:9f6cc8:8", "const:4:8"]]
- 009f6cc8 ["CALL", null, ["callee:00c596b0:8"]]
+ 009f7c74 ["INT_ADD", "register:40f0:8", ["const:9f7c74:8", "const:4:8"]]
+ 009f7c74 ["CALL", null, ["callee:00c596b0:8"]]
- 009f6ca4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009f7c50 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 009f6ca8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 009f6ca8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009f7c54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 009f7c54 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-97f8c375c9c9347727c56f63a64fe2a8"></a>

### [`009f74cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f74cc.md) → [`009f8478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f8/009f8478.md) FUN_009f8478

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`009f7e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f7e34.md) [`009f9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9f34.md) [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md) · 呼出先 14件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00665da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/00665da4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`009f8de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f8/009f8de0.md) [`009faee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009faee0.md) [`009fbbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fb/009fbbcc.md) · 呼出先 14件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00666154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00666/00666154.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 86.56% / 新版 86.56%

優先判定に残った影響 `call_argument_candidate` 15件, `store_destination` 14件, `store_value` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009f8754",
      "incomplete_value": false,
      "site": "009f8754",
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
                "const:fc0:8"
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
      "definition_site": "009f77a8",
      "incomplete_value": false,
      "site": "009f77a8",
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
    "ordinal": 28,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "009f8758",
      "incomplete_value": false,
      "site": "009f8758",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f77ac",
      "incomplete_value": false,
      "site": "009f77ac",
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
    "ordinal": 29,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f8754",
      "incomplete_value": false,
      "site": "009f8758",
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
                "const:fc0:8"
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
      "definition_site": "009f77a8",
      "incomplete_value": false,
      "site": "009f77ac",
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
    "ordinal": 29,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009f84ac",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f84b8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f84c0",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f84ac",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009f84b8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f84c0",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f751c ["INT_ADD", "register:40f0:8", ["const:9f751c:8", "const:4:8"]]
- 009f751c ["CALL", null, ["callee:00c596b0:8"]]
+ 009f84c8 ["INT_ADD", "register:40f0:8", ["const:9f84c8:8", "const:4:8"]]
+ 009f84c8 ["CALL", null, ["callee:00c596b0:8"]]
- 009f76d4 ["INT_ADD", "register:40f0:8", ["const:9f76d4:8", "const:4:8"]]
- 009f76d4 ["CALL", null, ["callee:0047e96c:8"]]
+ 009f8680 ["INT_ADD", "register:40f0:8", ["const:9f8680:8", "const:4:8"]]
+ 009f8680 ["CALL", null, ["callee:0047e96c:8"]]
- 009f7784 ["INT_ADD", "register:40f0:8", ["const:9f7784:8", "const:4:8"]]
- 009f7784 ["CALL", null, ["callee:00c58ef0:8"]]
+ 009f8730 ["INT_ADD", "register:40f0:8", ["const:9f8730:8", "const:4:8"]]
+ 009f8730 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-d264083a0a00d3b8ea0e8eed6d282646"></a>

### [`009f7bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f7bc8.md) → [`009f8b74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f8/009f8b74.md) FUN_009f8b74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a03ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03ebc.md) · 呼出先 14件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca8.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)
- 新版 呼出元 1件 [`00a04e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04e68.md) · 呼出先 14件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468fc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468fc8.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.42% / 新版 97.42%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009f8b9c",
      "incomplete_value": true,
      "site": "009f8b9c",
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
      "definition_site": "009f7bf0",
      "incomplete_value": true,
      "site": "009f7bf0",
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
      "definition_site": "009f8ba4",
      "incomplete_value": false,
      "site": "009f8bb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c66000:8"
          ],
          [
            "leaf",
            "const:ef8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f7bf8",
      "incomplete_value": false,
      "site": "009f7c08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c65000:8"
          ],
          [
            "leaf",
            "const:f28:8"
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
      "definition_site": "009f8bac",
      "incomplete_value": false,
      "site": "009f8bb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c72000:8"
          ],
          [
            "leaf",
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f7c00",
      "incomplete_value": false,
      "site": "009f7c08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c71000:8"
          ],
          [
            "leaf",
            "const:a60:8"
          ]
        ]
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
      "009f8b98",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f8ba4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f8bac",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f8b98",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009f8ba4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f8bac",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f7c08 ["INT_ADD", "register:40f0:8", ["const:9f7c08:8", "const:4:8"]]
- 009f7c08 ["CALL", null, ["callee:00c596b0:8"]]
+ 009f8bb4 ["INT_ADD", "register:40f0:8", ["const:9f8bb4:8", "const:4:8"]]
+ 009f8bb4 ["CALL", null, ["callee:00c596b0:8"]]
- 009f7be4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009f8b90 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 009f7bec ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 009f7bec ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
+ 009f8b98 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 009f8b98 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-abdcc370f79ab55b3d903f5213a2882f"></a>

### [`009f7e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f7e34.md) → [`009f8de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f8/009f8de0.md) FUN_009f8de0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a052f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a052f8.md) · 呼出先 33件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)
- 新版 呼出元 1件 [`00a062a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a062a4.md) · 呼出先 33件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.37% / 新版 96.37%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f8f34",
      "incomplete_value": false,
      "site": "009f8f34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:5c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f7f88",
      "incomplete_value": false,
      "site": "009f7f88",
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
            "const:5f0:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009f8fd4",
      "incomplete_value": false,
      "site": "009f8fd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:640:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f8028",
      "incomplete_value": false,
      "site": "009f8028",
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
            "const:670:8"
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
      "definition_site": "009f901c",
      "incomplete_value": false,
      "site": "009f9024",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:6c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009f8070",
      "incomplete_value": false,
      "site": "009f8078",
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
            "const:6f0:8"
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
      "009f8e14",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009f8e20",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f8e28",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009f8e14",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009f8e20",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009f8e28",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f7e88 ["INT_ADD", "register:40f0:8", ["const:9f7e88:8", "const:4:8"]]
- 009f7e88 ["CALL", null, ["callee:00c596b0:8"]]
+ 009f8e34 ["INT_ADD", "register:40f0:8", ["const:9f8e34:8", "const:4:8"]]
+ 009f8e34 ["CALL", null, ["callee:00c596b0:8"]]
- 009f7f1c ["INT_ADD", "register:40f0:8", ["const:9f7f1c:8", "const:4:8"]]
- 009f7f1c ["CALL", null, ["ram:6648e0:8"]]
+ 009f8ec8 ["INT_ADD", "register:40f0:8", ["const:9f8ec8:8", "const:4:8"]]
+ 009f8ec8 ["CALL", null, ["ram:664c90:8"]]
- 009f7e64 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009f8e10 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-fb8333e426a1cebd2560925cbde56929"></a>

### [`009f931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f931c.md) → [`009fa2c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009fa2c8.md) FUN_009fa2c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md) · 呼出先 20件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0060de00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060d/0060de00.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009df688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df688.md)
- 新版 呼出元 1件 [`009fbbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fb/009fbbcc.md) · 呼出先 20件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0060e1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e1b0.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009e0634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0634.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.34% / 新版 98.34%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fa56c",
      "value": [
        "leaf",
        "ram:664c90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009f95c0",
      "value": [
        "leaf",
        "ram:6648e0:8"
      ]
    },
    "ordinal": 25,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009fa3b8",
      "READ",
      [
        "storage",
        "00c9b5f0",
        null,
        "pointer"
      ]
    ],
    [
      "009fa3c0",
      "PARAM",
      [
        "storage",
        "003104e1",
        "std::nothrow",
        "undefined1"
      ]
    ],
    [
      "009fa474",
      "PARAM",
      [
        "storage",
        "002bc76a",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009fa3b8",
      "READ",
      [
        "storage",
        "00c9c5c0",
        null,
        "pointer"
      ]
    ],
    [
      "009fa3c0",
      "PARAM",
      [
        "storage",
        "00310521",
        "std::nothrow",
        "undefined1"
      ]
    ],
    [
      "009fa474",
      "PARAM",
      [
        "storage",
        "002bc848",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009f95c0 ["INT_ADD", "register:40f0:8", ["const:9f95c0:8", "const:4:8"]]
- 009f95c0 ["CALL", null, ["ram:6648e0:8"]]
+ 009fa56c ["INT_ADD", "register:40f0:8", ["const:9fa56c:8", "const:4:8"]]
+ 009fa56c ["CALL", null, ["ram:664c90:8"]]
- 009f9354 ["INT_ADD", "register:40f0:8", ["const:9f9354:8", "const:4:8"]]
- 009f9354 ["CALL", null, ["callee:008524fc:8"]]
+ 009fa300 ["INT_ADD", "register:40f0:8", ["const:9fa300:8", "const:4:8"]]
+ 009fa300 ["CALL", null, ["callee:008524fc:8"]]
- 009f9364 ["INT_ADD", "register:40f0:8", ["const:9f9364:8", "const:4:8"]]
- 009f9364 ["CALL", null, ["callee:009e3f94:8"]]
+ 009fa310 ["INT_ADD", "register:40f0:8", ["const:9fa310:8", "const:4:8"]]
+ 009fa310 ["CALL", null, ["callee:009e3f94:8"]]
~~~


<a id="compare-a956a7618c9c86cee94a5d79746c7df9"></a>

### [`009f9f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f9/009f9f34.md) → [`009faee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fa/009faee0.md) FUN_009faee0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) · 呼出先 39件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7044`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7044.md)
- 新版 呼出元 1件 [`00a03be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03be8.md) · 呼出先 39件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ff0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.43% / 新版 95.43%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 12件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009fafb4",
      "incomplete_value": true,
      "site": "009fafc4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:597:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fa008",
      "incomplete_value": true,
      "site": "009fa018",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4b9:8"
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
      "definition_site": "009fafc8",
      "incomplete_value": true,
      "site": "009fafc8",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "009fa01c",
      "incomplete_value": true,
      "site": "009fa01c",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009fafbc",
      "incomplete_value": true,
      "site": "009fafcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4e0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fa010",
      "incomplete_value": true,
      "site": "009fa020",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:490:8"
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
      "009faf20",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009faf2c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009faf34",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009faf20",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009faf2c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009faf34",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009f9f94 ["INT_ADD", "register:40f0:8", ["const:9f9f94:8", "const:4:8"]]
- 009f9f94 ["CALL", null, ["callee:00c596b0:8"]]
+ 009faf40 ["INT_ADD", "register:40f0:8", ["const:9faf40:8", "const:4:8"]]
+ 009faf40 ["CALL", null, ["callee:00c596b0:8"]]
- 009f9f70 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 009faf1c ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 009f9f74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 009f9f74 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 009faf20 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 009faf20 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-8d0f4ed0302d4c26134609df6af67913"></a>

### [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md) → [`009fbbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fb/009fbbcc.md) FUN_009fbbcc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`007f3700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3700.md) [`009fdca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdca4.md) [`00a01348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01348.md) [`00a05910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05910.md) · 呼出先 40件 [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`007f4664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007f4/007f4664.md) [`009fec50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fec50.md) [`00a022f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a022f4.md) [`00a068bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a068bc.md) · 呼出先 40件 [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009fbdb4",
      "incomplete_value": false,
      "site": "009fbdb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:c40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fae08",
      "incomplete_value": false,
      "site": "009fae08",
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
            "const:c70:8"
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009fbf8c",
      "incomplete_value": false,
      "site": "009fbf8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fafe0",
      "incomplete_value": false,
      "site": "009fafe0",
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
            "const:cf0:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009fbfe0",
      "incomplete_value": false,
      "site": "009fbfe0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8b000:8"
          ],
          [
            "leaf",
            "const:d40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fb034",
      "incomplete_value": false,
      "site": "009fb034",
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
            "const:d70:8"
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
      "009fbc04",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009fbc10",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009fbc18",
      "PARAM",
      [
        "storage",
        "00c71a60",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "009fbc04",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009fbc10",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009fbc18",
      "PARAM",
      [
        "storage",
        "00c72a30",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fac78 ["INT_ADD", "register:40f0:8", ["const:9fac78:8", "const:4:8"]]
- 009fac78 ["CALL", null, ["callee:00c596b0:8"]]
+ 009fbc24 ["INT_ADD", "register:40f0:8", ["const:9fbc24:8", "const:4:8"]]
+ 009fbc24 ["CALL", null, ["callee:00c596b0:8"]]
- 009fad90 ["INT_ADD", "register:40f0:8", ["const:9fad90:8", "const:4:8"]]
- 009fad90 ["CALL", null, ["callee:0047e96c:8"]]
+ 009fbd3c ["INT_ADD", "register:40f0:8", ["const:9fbd3c:8", "const:4:8"]]
+ 009fbd3c ["CALL", null, ["callee:0047e96c:8"]]
- 009fb304 ["INT_ADD", "register:40f0:8", ["const:9fb304:8", "const:4:8"]]
- 009fb304 ["CALL", null, ["callee:00c58ef0:8"]]
+ 009fc2b0 ["INT_ADD", "register:40f0:8", ["const:9fc2b0:8", "const:4:8"]]
+ 009fc2b0 ["CALL", null, ["callee:00c58ef0:8"]]
~~~


