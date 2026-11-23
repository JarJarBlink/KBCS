# v16.0.2 → v16.0.3 · 最優先の変更候補 (70)

[一覧の目次](README.md)

<a id="compare-b47755e8726189b86029a115ecc19081"></a>

### [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) → [`009fc44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fc/009fc44c.md) FUN_009fc44c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 54件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)
- 新版 呼出元 1件 [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 54件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`00470cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470cf4.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.64% / 新版 95.64%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件, `store_value` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009fc508",
      "incomplete_value": true,
      "site": "009fc518",
      "value": [
        "LOAD",
        "16",
        [
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
                "register:40b8:8"
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
      "definition_site": "009fb55c",
      "incomplete_value": true,
      "site": "009fb56c",
      "value": [
        "LOAD",
        "16",
        [
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
                "register:40b8:8"
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009fc50c",
      "incomplete_value": true,
      "site": "009fc51c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:74f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fb560",
      "incomplete_value": true,
      "site": "009fb570",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:671:8"
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
      "definition_site": "009fc520",
      "incomplete_value": true,
      "site": "009fc520",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "009fb574",
      "incomplete_value": true,
      "site": "009fb574",
      "value": [
        "LOAD",
        "8",
        [
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
      "009fc508",
      "READ",
      [
        "storage",
        "002c2490",
        null,
        null
      ]
    ],
    [
      "009fc50c",
      "READ",
      [
        "storage",
        "002b5671",
        null,
        "string"
      ]
    ],
    [
      "009fc510",
      "READ",
      [
        "storage",
        "002b5680",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "009fc508",
      "READ",
      [
        "storage",
        "002c24e0",
        null,
        null
      ]
    ],
    [
      "009fc50c",
      "READ",
      [
        "storage",
        "002b574f",
        null,
        "string"
      ]
    ],
    [
      "009fc510",
      "READ",
      [
        "storage",
        "002b575e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fb700 ["INT_ADD", "register:40f0:8", ["const:9fb700:8", "const:4:8"]]
- 009fb700 ["CALL", null, ["callee:00c59000:8"]]
+ 009fc6ac ["INT_ADD", "register:40f0:8", ["const:9fc6ac:8", "const:4:8"]]
+ 009fc6ac ["CALL", null, ["callee:00c59000:8"]]
- 009fb728 ["INT_ADD", "register:40f0:8", ["const:9fb728:8", "const:4:8"]]
- 009fb728 ["CALL", null, ["callee:00c59010:8"]]
+ 009fc6d4 ["INT_ADD", "register:40f0:8", ["const:9fc6d4:8", "const:4:8"]]
+ 009fc6d4 ["CALL", null, ["callee:00c59010:8"]]
- 009fbae4 ["INT_ADD", "register:40f0:8", ["const:9fbae4:8", "const:4:8"]]
- 009fbae4 ["CALL", null, ["callee:00c596b0:8"]]
+ 009fca90 ["INT_ADD", "register:40f0:8", ["const:9fca90:8", "const:4:8"]]
+ 009fca90 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-8ff2524d7df3b65b30b5e334e974d2a9"></a>

### [`009fcddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fc/009fcddc.md) → [`009fdd88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fd/009fdd88.md) FUN_009fdd88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "009fddac",
      "incomplete_value": false,
      "site": "009fddb4",
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
      "definition_site": "009fce00",
      "incomplete_value": false,
      "site": "009fce08",
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
      "009fddb4",
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
      "009fddb4",
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
- 009fcdfc ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009fdda8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fce00 ["COPY", "tmp:0:8", ["const:550:8"]]
- 009fce00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fce00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fce00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fddac ["COPY", "tmp:0:8", ["const:520:8"]]
+ 009fddac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fddac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fddac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009fce38 ["COPY", "register:0:8", ["register:4040:8"]]
- 009fce38 ["INT_ADD", "register:40f0:8", ["const:9fce38:8", "const:4:8"]]
- 009fce38 ["CALLIND", null, ["register:0:8"]]
+ 009fdde4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 009fdde4 ["INT_ADD", "register:40f0:8", ["const:9fdde4:8", "const:4:8"]]
+ 009fdde4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f2e400df0c5b9cc32463e8fd99667c33"></a>

### [`009fd1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd1dc.md) → [`009fe188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe188.md) FUN_009fe188

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
      "definition_site": "009fe19c",
      "incomplete_value": false,
      "site": "009fe1a0",
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
      "definition_site": "009fd1f0",
      "incomplete_value": false,
      "site": "009fd1f4",
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
      "009fe1a0",
      "DATA",
      [
        "storage",
        "00c8a5f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fe1a0",
      "DATA",
      [
        "storage",
        "00c8b5c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd1e8 ["INT_ADD", "register:40f0:8", ["const:9fd1e8:8", "const:4:8"]]
- 009fd1e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 009fe194 ["INT_ADD", "register:40f0:8", ["const:9fe194:8", "const:4:8"]]
+ 009fe194 ["CALL", null, ["callee:00c58f30:8"]]
- 009fd1ec ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009fe198 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fd1f0 ["COPY", "tmp:0:8", ["const:5f0:8"]]
- 009fd1f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd1f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd1f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fe19c ["COPY", "tmp:0:8", ["const:5c0:8"]]
+ 009fe19c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe19c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe19c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e6a04e560f37ab508b55bc554cce9e61"></a>

### [`009fd200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd200.md) → [`009fe1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe1ac.md) FUN_009fe1ac

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
      "definition_site": "009fe1b0",
      "incomplete_value": false,
      "site": "009fe1b4",
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
      "definition_site": "009fd204",
      "incomplete_value": false,
      "site": "009fd208",
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
      "009fe1b4",
      "DATA",
      [
        "storage",
        "00c8a5f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fe1b4",
      "DATA",
      [
        "storage",
        "00c8b5c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd200 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009fe1ac ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fd204 ["COPY", "tmp:0:8", ["const:5f0:8"]]
- 009fd204 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd204 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd204 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fe1b0 ["COPY", "tmp:0:8", ["const:5c0:8"]]
+ 009fe1b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe1b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe1b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-337b1c02872ffb78bda0ef685357249b"></a>

### [`009fd28c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd28c.md) → [`009fe238`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe238.md) FUN_009fe238

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
      "definition_site": "009fe258",
      "incomplete_value": false,
      "site": "009fe25c",
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
      "definition_site": "009fd2ac",
      "incomplete_value": false,
      "site": "009fd2b0",
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
      "009fe25c",
      "DATA",
      [
        "storage",
        "00c8a670",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fe25c",
      "DATA",
      [
        "storage",
        "00c8b640",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd2a0 ["INT_ADD", "register:40f0:8", ["const:9fd2a0:8", "const:4:8"]]
- 009fd2a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 009fe24c ["INT_ADD", "register:40f0:8", ["const:9fe24c:8", "const:4:8"]]
+ 009fe24c ["CALL", null, ["callee:00c58f30:8"]]
- 009fd2a8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009fe254 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fd2ac ["COPY", "tmp:0:8", ["const:670:8"]]
- 009fd2ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd2ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd2ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fe258 ["COPY", "tmp:0:8", ["const:640:8"]]
+ 009fe258 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe258 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe258 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c1b1cb73f56594f7a694173b9445e7de"></a>

### [`009fd2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd2c4.md) → [`009fe270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe270.md) FUN_009fe270

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
      "definition_site": "009fe274",
      "incomplete_value": false,
      "site": "009fe278",
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
      "definition_site": "009fd2c8",
      "incomplete_value": false,
      "site": "009fd2cc",
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
      "009fe278",
      "DATA",
      [
        "storage",
        "00c8a670",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fe278",
      "DATA",
      [
        "storage",
        "00c8b640",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd2c4 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009fe270 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fd2c8 ["COPY", "tmp:0:8", ["const:670:8"]]
- 009fd2c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd2c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd2c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fe274 ["COPY", "tmp:0:8", ["const:640:8"]]
+ 009fe274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dcb93123fff61e1579fa46eb07639cca"></a>

### [`009fd2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd2e4.md) → [`009fe290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe290.md) FUN_009fe290

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md) [`008b7a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7a60.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.46% / 新版 99.46%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fe3f0",
      "value": [
        "leaf",
        "ram:664c90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fd444",
      "value": [
        "leaf",
        "ram:6648e0:8"
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
      "009fe3f0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006648e0"
      ]
    ]
  ],
  "added": [
    [
      "009fe3f0",
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
- 009fd444 ["INT_ADD", "register:40f0:8", ["const:9fd444:8", "const:4:8"]]
- 009fd444 ["CALL", null, ["ram:6648e0:8"]]
+ 009fe3f0 ["INT_ADD", "register:40f0:8", ["const:9fe3f0:8", "const:4:8"]]
+ 009fe3f0 ["CALL", null, ["ram:664c90:8"]]
- 009fd33c ["INT_ADD", "register:40f0:8", ["const:9fd33c:8", "const:4:8"]]
- 009fd33c ["CALL", null, ["callee:008ba29c:8"]]
+ 009fe2e8 ["INT_ADD", "register:40f0:8", ["const:9fe2e8:8", "const:4:8"]]
+ 009fe2e8 ["CALL", null, ["callee:008ba29c:8"]]
- 009fd348 ["INT_ADD", "register:40f0:8", ["const:9fd348:8", "const:4:8"]]
- 009fd348 ["CALL", null, ["callee:008ba29c:8"]]
+ 009fe2f4 ["INT_ADD", "register:40f0:8", ["const:9fe2f4:8", "const:4:8"]]
+ 009fe2f4 ["CALL", null, ["callee:008ba29c:8"]]
~~~


<a id="compare-75b3aa9c1ecf9f33b5de1e301627c521"></a>

### [`009fd628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd628.md) → [`009fe5d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe5d4.md) FUN_009fe5d4

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
      "definition_site": "009fe5f4",
      "incomplete_value": false,
      "site": "009fe5f8",
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
      "definition_site": "009fd648",
      "incomplete_value": false,
      "site": "009fd64c",
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
      "009fe5f8",
      "DATA",
      [
        "storage",
        "00c8a6f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fe5f8",
      "DATA",
      [
        "storage",
        "00c8b6c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd63c ["INT_ADD", "register:40f0:8", ["const:9fd63c:8", "const:4:8"]]
- 009fd63c ["CALL", null, ["callee:00c58f30:8"]]
+ 009fe5e8 ["INT_ADD", "register:40f0:8", ["const:9fe5e8:8", "const:4:8"]]
+ 009fe5e8 ["CALL", null, ["callee:00c58f30:8"]]
- 009fd644 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009fe5f0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fd648 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 009fd648 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd648 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd648 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fe5f4 ["COPY", "tmp:0:8", ["const:6c0:8"]]
+ 009fe5f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe5f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe5f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4ab349abb7108c3473806111a007dd1e"></a>

### [`009fd660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd660.md) → [`009fe60c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe60c.md) FUN_009fe60c

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
      "definition_site": "009fe610",
      "incomplete_value": false,
      "site": "009fe614",
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
      "definition_site": "009fd664",
      "incomplete_value": false,
      "site": "009fd668",
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
      "009fe614",
      "DATA",
      [
        "storage",
        "00c8a6f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fe614",
      "DATA",
      [
        "storage",
        "00c8b6c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fd660 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009fe60c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fd664 ["COPY", "tmp:0:8", ["const:6f0:8"]]
- 009fd664 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fd664 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fd664 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fe610 ["COPY", "tmp:0:8", ["const:6c0:8"]]
+ 009fe610 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe610 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fe610 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-85f5cf6984ec7e715239a42959fc6d0f"></a>

### [`009fd680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fd680.md) → [`009fe62c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fe62c.md) FUN_009fe62c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 18件 [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)
- 新版 呼出元 0件  · 呼出先 18件 [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md) [`0046b278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b278.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.39% / 新版 98.39%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009fe694",
      "incomplete_value": true,
      "site": "009fe694",
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
      "definition_site": "009fd6e8",
      "incomplete_value": true,
      "site": "009fd6e8",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009fe6a4",
      "incomplete_value": true,
      "site": "009fe6ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4010:8"
          ],
          [
            "leaf",
            "const:a30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fd6f8",
      "incomplete_value": true,
      "site": "009fd700",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4010:8"
          ],
          [
            "leaf",
            "const:a60:8"
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fe9a0",
      "value": [
        "leaf",
        "ram:9f8990:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fd9f4",
      "value": [
        "leaf",
        "ram:9f79e4:8"
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
      "009fe690",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009fe69c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009fe6a4",
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
      "009fe690",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "009fe69c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "009fe6a4",
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
- 009fd700 ["INT_ADD", "register:40f0:8", ["const:9fd700:8", "const:4:8"]]
- 009fd700 ["CALL", null, ["callee:00c596b0:8"]]
+ 009fe6ac ["INT_ADD", "register:40f0:8", ["const:9fe6ac:8", "const:4:8"]]
+ 009fe6ac ["CALL", null, ["callee:00c596b0:8"]]
- 009fd9f4 ["INT_ADD", "register:40f0:8", ["const:9fd9f4:8", "const:4:8"]]
- 009fd9f4 ["CALL", null, ["ram:9f79e4:8"]]
+ 009fe9a0 ["INT_ADD", "register:40f0:8", ["const:9fe9a0:8", "const:4:8"]]
+ 009fe9a0 ["CALL", null, ["ram:9f8990:8"]]
- 009fd6c0 ["INT_ADD", "register:40f0:8", ["const:9fd6c0:8", "const:4:8"]]
- 009fd6c0 ["CALL", null, ["callee:008ba294:8"]]
+ 009fe66c ["INT_ADD", "register:40f0:8", ["const:9fe66c:8", "const:4:8"]]
+ 009fe66c ["CALL", null, ["callee:008ba294:8"]]
~~~


<a id="compare-81e85805f39279e32ddf0f7ca138428c"></a>

### [`009fdb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdb84.md) → [`009feb30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feb30.md) FUN_009feb30

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
      "definition_site": "009feb54",
      "incomplete_value": false,
      "site": "009feb54",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fdba8",
      "incomplete_value": false,
      "site": "009fdba8",
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
            "const:770:8"
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
      "009feb54",
      "DATA",
      [
        "storage",
        "00c8a770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009feb54",
      "DATA",
      [
        "storage",
        "00c8b740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fdb98 ["INT_ADD", "register:40f0:8", ["const:9fdb98:8", "const:4:8"]]
- 009fdb98 ["CALL", null, ["callee:00c58f30:8"]]
+ 009feb44 ["INT_ADD", "register:40f0:8", ["const:9feb44:8", "const:4:8"]]
+ 009feb44 ["CALL", null, ["callee:00c58f30:8"]]
- 009fdba0 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009feb4c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fdba4 ["COPY", "tmp:0:8", ["const:770:8"]]
- 009fdba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fdba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fdba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009feb50 ["COPY", "tmp:0:8", ["const:740:8"]]
+ 009feb50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009feb50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009feb50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-865f5ca7743cfa1216b9bb636d4f4317"></a>

### [`009fdbb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdbb8.md) → [`009feb64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feb64.md) FUN_009feb64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009feb70",
      "incomplete_value": true,
      "site": "009feb70",
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
            "const:740:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fdbc4",
      "incomplete_value": true,
      "site": "009fdbc4",
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
            "const:770:8"
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
      "009feb70",
      "DATA",
      [
        "storage",
        "00c8a770",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009feb70",
      "DATA",
      [
        "storage",
        "00c8b740",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fdbbc ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 009feb68 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 009fdbc0 ["COPY", "tmp:0:8", ["const:770:8"]]
- 009fdbc0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009fdbc0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009fdbc0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009feb6c ["COPY", "tmp:0:8", ["const:740:8"]]
+ 009feb6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009feb6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009feb6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fb6284e052f5a5235794890620498359"></a>

### [`009fdbd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdbd4.md) → [`009feb80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009feb80.md) FUN_009feb80

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009feba0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fdbf4",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "009febac",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fdc00",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009feba0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009febac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009feba0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009febac",
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
- 009fdbf4 ["INT_ADD", "register:40f0:8", ["const:9fdbf4:8", "const:4:8"]]
- 009fdbf4 ["CALL", null, ["ram:47ad34:8"]]
+ 009feba0 ["INT_ADD", "register:40f0:8", ["const:9feba0:8", "const:4:8"]]
+ 009feba0 ["CALL", null, ["ram:47b054:8"]]
- 009fdc00 ["INT_ADD", "register:40f0:8", ["const:9fdc00:8", "const:4:8"]]
- 009fdc00 ["CALL", null, ["ram:47ad34:8"]]
+ 009febac ["INT_ADD", "register:40f0:8", ["const:9febac:8", "const:4:8"]]
+ 009febac ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-2e83b58f79e073ff14fd5ffa46b446d3"></a>

### [`009fdc54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdc54.md) → [`009fec00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fec00.md) FUN_009fec00

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
      "definition_site": "009fec24",
      "incomplete_value": false,
      "site": "009fec24",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fdc78",
      "incomplete_value": false,
      "site": "009fdc78",
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
            "const:7f0:8"
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
      "009fec24",
      "DATA",
      [
        "storage",
        "00c8a7f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fec24",
      "DATA",
      [
        "storage",
        "00c8b7c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fdc68 ["INT_ADD", "register:40f0:8", ["const:9fdc68:8", "const:4:8"]]
- 009fdc68 ["CALL", null, ["callee:00c58f30:8"]]
+ 009fec14 ["INT_ADD", "register:40f0:8", ["const:9fec14:8", "const:4:8"]]
+ 009fec14 ["CALL", null, ["callee:00c58f30:8"]]
- 009fdc70 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 009fec1c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fdc74 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 009fdc74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fdc74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fdc74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009fec20 ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 009fec20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009fec20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009fec20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-59c7f083e0bc6557b373788cc3343a1f"></a>

### [`009fdc88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdc88.md) → [`009fec34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fec34.md) FUN_009fec34

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
      "definition_site": "009fec40",
      "incomplete_value": false,
      "site": "009fec40",
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
            "const:7c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fdc94",
      "incomplete_value": false,
      "site": "009fdc94",
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
            "const:7f0:8"
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
      "009fec40",
      "DATA",
      [
        "storage",
        "00c8a7f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009fec40",
      "DATA",
      [
        "storage",
        "00c8b7c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fdc8c ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 009fec38 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 009fdc90 ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 009fdc90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009fdc90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009fdc90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009fec3c ["COPY", "tmp:0:8", ["const:7c0:8"]]
+ 009fec3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009fec3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009fec3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-10a4a4480c41afdbfbb40945bb7998a4"></a>

### [`009fdca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fd/009fdca4.md) → [`009fec50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fe/009fec50.md) FUN_009fec50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`009fbbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fb/009fbbcc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fec70",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fdcc4",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "009fec7c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009fdcd0",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "009fec70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009fec7c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "009fec70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "009fec7c",
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
- 009fdcc4 ["INT_ADD", "register:40f0:8", ["const:9fdcc4:8", "const:4:8"]]
- 009fdcc4 ["CALL", null, ["ram:47ad34:8"]]
+ 009fec70 ["INT_ADD", "register:40f0:8", ["const:9fec70:8", "const:4:8"]]
+ 009fec70 ["CALL", null, ["ram:47b054:8"]]
- 009fdcd0 ["INT_ADD", "register:40f0:8", ["const:9fdcd0:8", "const:4:8"]]
- 009fdcd0 ["CALL", null, ["ram:47ad34:8"]]
+ 009fec7c ["INT_ADD", "register:40f0:8", ["const:9fec7c:8", "const:4:8"]]
+ 009fec7c ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-8afed82f41db25960ee53add21a814b8"></a>

### [`009ff20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff20c.md) → [`00a001b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a001b8.md) FUN_00a001b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a001c4",
      "incomplete_value": false,
      "site": "00a001d0",
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
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff218",
      "incomplete_value": false,
      "site": "009ff224",
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
            "const:870:8"
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
      "00a001d0",
      "DATA",
      [
        "storage",
        "00c8a870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a001d0",
      "DATA",
      [
        "storage",
        "00c8b840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff214 ["COPY", "register:4050:8", ["const:c8a000:8"]]
+ 00a001c0 ["COPY", "register:4050:8", ["const:c8b000:8"]]
- 009ff218 ["COPY", "tmp:0:8", ["const:870:8"]]
- 009ff218 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009ff218 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009ff218 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00a001c4 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 00a001c4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00a001c4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00a001c4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-6981fad45fa91edfada7e610debb5df8"></a>

### [`009ff250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff250.md) → [`00a001fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a001fc.md) FUN_00a001fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a00214",
      "incomplete_value": false,
      "site": "00a00220",
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
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff268",
      "incomplete_value": false,
      "site": "009ff274",
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
            "const:870:8"
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
      "00a00220",
      "DATA",
      [
        "storage",
        "00c8a870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00220",
      "DATA",
      [
        "storage",
        "00c8b840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff264 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a00210 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009ff268 ["COPY", "tmp:0:8", ["const:870:8"]]
- 009ff268 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ff268 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ff268 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a00214 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 00a00214 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00214 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00214 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ff298 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ff298 ["INT_ADD", "register:40f0:8", ["const:9ff298:8", "const:4:8"]]
- 009ff298 ["CALLIND", null, ["register:0:8"]]
+ 00a00244 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a00244 ["INT_ADD", "register:40f0:8", ["const:a00244:8", "const:4:8"]]
+ 00a00244 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-285effa2ebb2c40b92cefba3d77a5e0b"></a>

### [`009ff2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff2ac.md) → [`00a00258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a00258.md) FUN_00a00258

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a00274",
      "incomplete_value": false,
      "site": "00a00284",
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
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff2c8",
      "incomplete_value": false,
      "site": "009ff2d8",
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
            "const:870:8"
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
      "00a00284",
      "DATA",
      [
        "storage",
        "00c8a870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00284",
      "DATA",
      [
        "storage",
        "00c8b840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff2c0 ["INT_ADD", "register:40f0:8", ["const:9ff2c0:8", "const:4:8"]]
- 009ff2c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a0026c ["INT_ADD", "register:40f0:8", ["const:a0026c:8", "const:4:8"]]
+ 00a0026c ["CALL", null, ["callee:00c58f30:8"]]
- 009ff2c4 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a00270 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009ff2c8 ["COPY", "tmp:0:8", ["const:870:8"]]
- 009ff2c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ff2c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ff2c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a00274 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 00a00274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3745b3a56bdd40edb376b01bf92b63fc"></a>

### [`009ff34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff34c.md) → [`00a002f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a002f8.md) FUN_00a002f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a00308",
      "incomplete_value": false,
      "site": "00a00310",
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
            "const:840:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff35c",
      "incomplete_value": false,
      "site": "009ff364",
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
            "const:870:8"
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
      "00a00310",
      "DATA",
      [
        "storage",
        "00c8a870",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00310",
      "DATA",
      [
        "storage",
        "00c8b840",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff358 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a00304 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009ff35c ["COPY", "tmp:0:8", ["const:870:8"]]
- 009ff35c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ff35c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ff35c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a00308 ["COPY", "tmp:0:8", ["const:840:8"]]
+ 00a00308 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00308 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00308 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009ff398 ["COPY", "register:0:8", ["register:4040:8"]]
- 009ff398 ["INT_ADD", "register:40f0:8", ["const:9ff398:8", "const:4:8"]]
- 009ff398 ["CALLIND", null, ["register:0:8"]]
+ 00a00344 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a00344 ["INT_ADD", "register:40f0:8", ["const:a00344:8", "const:4:8"]]
+ 00a00344 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-1102dc791ae7df8b2c6d016c2d090808"></a>

### [`009ff460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ff460.md) → [`00a0040c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a0040c.md) FUN_00a0040c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 27件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0046db34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 27件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0046de54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de54.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 93.42% / 新版 93.42%

優先判定に残った影響 `call_target` 4件, `store_value` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a00588",
      "incomplete_value": true,
      "site": "00a00598",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:fa2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ff5dc",
      "incomplete_value": true,
      "site": "009ff5ec",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2bc000:8"
              ],
              [
                "leaf",
                "const:ec4:8"
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
      "definition_site": "00a0059c",
      "incomplete_value": true,
      "site": "00a0059c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "009ff5f0",
      "incomplete_value": true,
      "site": "009ff5f0",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a00590",
      "incomplete_value": true,
      "site": "00a005a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009ff5e4",
      "incomplete_value": true,
      "site": "009ff5f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00a0045c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a00484",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a00588",
      "READ",
      [
        "storage",
        "002bcec4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a0045c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a00484",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a00588",
      "READ",
      [
        "storage",
        "002bcfa2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ff4b0 ["INT_ADD", "register:40f0:8", ["const:9ff4b0:8", "const:4:8"]]
- 009ff4b0 ["CALL", null, ["ram:47ad34:8"]]
+ 00a0045c ["INT_ADD", "register:40f0:8", ["const:a0045c:8", "const:4:8"]]
+ 00a0045c ["CALL", null, ["ram:47b054:8"]]
- 009ff4d8 ["INT_ADD", "register:40f0:8", ["const:9ff4d8:8", "const:4:8"]]
- 009ff4d8 ["CALL", null, ["ram:47ad34:8"]]
+ 00a00484 ["INT_ADD", "register:40f0:8", ["const:a00484:8", "const:4:8"]]
+ 00a00484 ["CALL", null, ["ram:47b054:8"]]
- 009ff62c ["INT_ADD", "register:40f0:8", ["const:9ff62c:8", "const:4:8"]]
- 009ff62c ["CALL", null, ["ram:6648e0:8"]]
+ 00a005d8 ["INT_ADD", "register:40f0:8", ["const:a005d8:8", "const:4:8"]]
+ 00a005d8 ["CALL", null, ["ram:664c90:8"]]
~~~


<a id="compare-511896dff48afa091d9ddf89f8b6e5ed"></a>

### [`009ffe08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ffe08.md) → [`00a00db4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a00db4.md) FUN_00a00db4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a00dc0",
      "incomplete_value": false,
      "site": "00a00dcc",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ffe14",
      "incomplete_value": false,
      "site": "009ffe20",
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
            "const:8e0:8"
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
      "00a00dcc",
      "DATA",
      [
        "storage",
        "00c8a8e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00dcc",
      "DATA",
      [
        "storage",
        "00c8b8b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ffe10 ["COPY", "register:4050:8", ["const:c8a000:8"]]
+ 00a00dbc ["COPY", "register:4050:8", ["const:c8b000:8"]]
- 009ffe14 ["COPY", "tmp:0:8", ["const:8e0:8"]]
- 009ffe14 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 009ffe14 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 009ffe14 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00a00dc0 ["COPY", "tmp:0:8", ["const:8b0:8"]]
+ 00a00dc0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00a00dc0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00a00dc0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-6656d9bc100eeea239037accfff1edd1"></a>

### [`009ffea8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009ffea8.md) → [`00a00e54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a00e54.md) FUN_00a00e54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.94% / 新版 93.94%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a00e80",
      "incomplete_value": false,
      "site": "00a00e80",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009ffed4",
      "incomplete_value": false,
      "site": "009ffed4",
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
            "const:8e0:8"
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
      "00a00e80",
      "DATA",
      [
        "storage",
        "00c8a8e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00e80",
      "DATA",
      [
        "storage",
        "00c8b8b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009ffebc ["INT_ADD", "register:40f0:8", ["const:9ffebc:8", "const:4:8"]]
- 009ffebc ["CALL", null, ["callee:00c58f30:8"]]
+ 00a00e68 ["INT_ADD", "register:40f0:8", ["const:a00e68:8", "const:4:8"]]
+ 00a00e68 ["CALL", null, ["callee:00c58f30:8"]]
- 009ffec8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a00e74 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009ffecc ["COPY", "tmp:0:8", ["const:8e0:8"]]
- 009ffecc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009ffecc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009ffecc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a00e78 ["COPY", "tmp:0:8", ["const:8b0:8"]]
+ 00a00e78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00e78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00e78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9225da4f47534ac90d2e30f4aab07bbc"></a>

### [`009fff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ff/009fff40.md) → [`00a00eec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a00eec.md) FUN_00a00eec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a00f0c",
      "incomplete_value": false,
      "site": "00a00f0c",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009fff60",
      "incomplete_value": false,
      "site": "009fff60",
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
            "const:8e0:8"
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
      "00a00f0c",
      "DATA",
      [
        "storage",
        "00c8a8e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a00f0c",
      "DATA",
      [
        "storage",
        "00c8b8b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009fff58 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a00f04 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 009fff5c ["COPY", "tmp:0:8", ["const:8e0:8"]]
- 009fff5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009fff5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009fff5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a00f08 ["COPY", "tmp:0:8", ["const:8b0:8"]]
+ 00a00f08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00f08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a00f08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009fff7c ["COPY", "register:0:8", ["register:4040:8"]]
- 009fff7c ["INT_ADD", "register:40f0:8", ["const:9fff7c:8", "const:4:8"]]
- 009fff7c ["CALLIND", null, ["register:0:8"]]
+ 00a00f28 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a00f28 ["INT_ADD", "register:40f0:8", ["const:a00f28:8", "const:4:8"]]
+ 00a00f28 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-91badb0b83afd55b1be0545f6119993e"></a>

### [`00a00048`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00048.md) → [`00a00ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a00/00a00ff4.md) FUN_00a00ff4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.59% / 新版 98.59%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01034",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00088",
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
      "00a01034",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a01034",
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
- 00a00088 ["INT_ADD", "register:40f0:8", ["const:a00088:8", "const:4:8"]]
- 00a00088 ["CALL", null, ["ram:47ad34:8"]]
+ 00a01034 ["INT_ADD", "register:40f0:8", ["const:a01034:8", "const:4:8"]]
+ 00a01034 ["CALL", null, ["ram:47b054:8"]]
- 00a00094 ["INT_ADD", "register:40f0:8", ["const:a00094:8", "const:4:8"]]
- 00a00094 ["CALL", null, ["callee:0047d134:8"]]
+ 00a01040 ["INT_ADD", "register:40f0:8", ["const:a01040:8", "const:4:8"]]
+ 00a01040 ["CALL", null, ["callee:0047d134:8"]]
- 00a000f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a000f0 ["INT_ADD", "register:40f0:8", ["const:a000f0:8", "const:4:8"]]
- 00a000f0 ["CALLIND", null, ["register:0:8"]]
+ 00a0109c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a0109c ["INT_ADD", "register:40f0:8", ["const:a0109c:8", "const:4:8"]]
+ 00a0109c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6ef240c3856d1d12eb9f018c76dfafb3"></a>

### [`00a00190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00190.md) → [`00a0113c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a0113c.md) FUN_00a0113c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a01164",
      "incomplete_value": false,
      "site": "00a01164",
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
            "const:930:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a001b8",
      "incomplete_value": false,
      "site": "00a001b8",
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
            "const:960:8"
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
      "00a01164",
      "DATA",
      [
        "storage",
        "00c8a960",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01164",
      "DATA",
      [
        "storage",
        "00c8b930",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a001a4 ["INT_ADD", "register:40f0:8", ["const:a001a4:8", "const:4:8"]]
- 00a001a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a01150 ["INT_ADD", "register:40f0:8", ["const:a01150:8", "const:4:8"]]
+ 00a01150 ["CALL", null, ["callee:00c58f30:8"]]
- 00a001b0 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a0115c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a001b4 ["COPY", "tmp:0:8", ["const:960:8"]]
- 00a001b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a001b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a001b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01160 ["COPY", "tmp:0:8", ["const:930:8"]]
+ 00a01160 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01160 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01160 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9d7791fbd9de352922387377ab6b0c5e"></a>

### [`00a001cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a001cc.md) → [`00a01178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a01178.md) FUN_00a01178

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a0117c",
      "incomplete_value": false,
      "site": "00a01180",
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
            "const:930:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a001d0",
      "incomplete_value": false,
      "site": "00a001d4",
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
            "const:960:8"
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
      "00a01180",
      "DATA",
      [
        "storage",
        "00c8a960",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01180",
      "DATA",
      [
        "storage",
        "00c8b930",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a001cc ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a01178 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a001d0 ["COPY", "tmp:0:8", ["const:960:8"]]
- 00a001d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a001d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a001d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a0117c ["COPY", "tmp:0:8", ["const:930:8"]]
+ 00a0117c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a0117c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a0117c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d591b95798194beca07ce2719c755f8a"></a>

### [`00a00390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00390.md) → [`00a0133c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a0133c.md) FUN_00a0133c

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
      "definition_site": "00a01340",
      "incomplete_value": false,
      "site": "00a01344",
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
            "const:9c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00394",
      "incomplete_value": false,
      "site": "00a00398",
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
            "const:9f0:8"
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
      "00a01344",
      "DATA",
      [
        "storage",
        "00c8a9f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01344",
      "DATA",
      [
        "storage",
        "00c8b9c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00390 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a0133c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a00394 ["COPY", "tmp:0:8", ["const:9f0:8"]]
- 00a00394 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a00394 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a00394 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01340 ["COPY", "tmp:0:8", ["const:9c0:8"]]
+ 00a01340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fb1a2d623492e01a557dd0c0af51c07a"></a>

### [`00a003b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a003b0.md) → [`00a0135c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a0135c.md) FUN_00a0135c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`008b6ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6ab4.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md) [`008b7a60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7a60.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.54% / 新版 99.54%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a014f8",
      "value": [
        "leaf",
        "ram:664c90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a0054c",
      "value": [
        "leaf",
        "ram:6648e0:8"
      ]
    },
    "ordinal": 15,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a014f8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006648e0"
      ]
    ]
  ],
  "added": [
    [
      "00a014f8",
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
- 00a0054c ["INT_ADD", "register:40f0:8", ["const:a0054c:8", "const:4:8"]]
- 00a0054c ["CALL", null, ["ram:6648e0:8"]]
+ 00a014f8 ["INT_ADD", "register:40f0:8", ["const:a014f8:8", "const:4:8"]]
+ 00a014f8 ["CALL", null, ["ram:664c90:8"]]
- 00a003e8 ["INT_ADD", "register:40f0:8", ["const:a003e8:8", "const:4:8"]]
- 00a003e8 ["CALL", null, ["callee:008ba294:8"]]
+ 00a01394 ["INT_ADD", "register:40f0:8", ["const:a01394:8", "const:4:8"]]
+ 00a01394 ["CALL", null, ["callee:008ba294:8"]]
- 00a00414 ["INT_ADD", "register:40f0:8", ["const:a00414:8", "const:4:8"]]
- 00a00414 ["CALL", null, ["callee:008ba29c:8"]]
+ 00a013c0 ["INT_ADD", "register:40f0:8", ["const:a013c0:8", "const:4:8"]]
+ 00a013c0 ["CALL", null, ["callee:008ba29c:8"]]
~~~


<a id="compare-da75092c820137dc45b7f9788d2e8977"></a>

### [`00a00778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00778.md) → [`00a01724`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a01724.md) FUN_00a01724

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
      "definition_site": "00a01744",
      "incomplete_value": false,
      "site": "00a01748",
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
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00798",
      "incomplete_value": false,
      "site": "00a0079c",
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
            "const:a70:8"
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
      "00a01748",
      "DATA",
      [
        "storage",
        "00c8aa70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01748",
      "DATA",
      [
        "storage",
        "00c8ba40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0078c ["INT_ADD", "register:40f0:8", ["const:a0078c:8", "const:4:8"]]
- 00a0078c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a01738 ["INT_ADD", "register:40f0:8", ["const:a01738:8", "const:4:8"]]
+ 00a01738 ["CALL", null, ["callee:00c58f30:8"]]
- 00a00794 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a01740 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a00798 ["COPY", "tmp:0:8", ["const:a70:8"]]
- 00a00798 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a00798 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a00798 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01744 ["COPY", "tmp:0:8", ["const:a40:8"]]
+ 00a01744 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01744 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01744 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4be57569c4277016488c74b770defc9d"></a>

### [`00a007b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a007b0.md) → [`00a0175c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a0175c.md) FUN_00a0175c

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
      "definition_site": "00a01760",
      "incomplete_value": false,
      "site": "00a01764",
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
            "const:a40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a007b4",
      "incomplete_value": false,
      "site": "00a007b8",
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
            "const:a70:8"
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
      "00a01764",
      "DATA",
      [
        "storage",
        "00c8aa70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01764",
      "DATA",
      [
        "storage",
        "00c8ba40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a007b0 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a0175c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a007b4 ["COPY", "tmp:0:8", ["const:a70:8"]]
- 00a007b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a007b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a007b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01760 ["COPY", "tmp:0:8", ["const:a40:8"]]
+ 00a01760 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01760 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01760 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-babd601008eba42f4cc58f5470160a12"></a>

### [`00a007d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a007d0.md) → [`00a0177c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a0177c.md) FUN_00a0177c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 24件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`0046969c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/0046969c.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046af58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af58.md)
- 新版 呼出元 0件  · 呼出先 24件 [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`004699bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004699bc.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046b278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046b/0046b278.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 98.35% / 新版 98.35%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 4件, `call_target` 1件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00a017e0",
      "incomplete_value": true,
      "site": "00a017e0",
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
      "definition_site": "00a00834",
      "incomplete_value": true,
      "site": "00a00834",
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
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00a01820",
      "incomplete_value": true,
      "site": "00a01820",
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
      "definition_site": "00a00874",
      "incomplete_value": true,
      "site": "00a00874",
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
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a017e8",
      "incomplete_value": false,
      "site": "00a017f8",
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
      "definition_site": "00a0083c",
      "incomplete_value": false,
      "site": "00a0084c",
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
      "00a017dc",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a017e8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a017f0",
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
      "00a017dc",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00a017e8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a017f0",
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
- 00a0084c ["INT_ADD", "register:40f0:8", ["const:a0084c:8", "const:4:8"]]
- 00a0084c ["CALL", null, ["callee:00c596b0:8"]]
+ 00a017f8 ["INT_ADD", "register:40f0:8", ["const:a017f8:8", "const:4:8"]]
+ 00a017f8 ["CALL", null, ["callee:00c596b0:8"]]
- 00a0088c ["INT_ADD", "register:40f0:8", ["const:a0088c:8", "const:4:8"]]
- 00a0088c ["CALL", null, ["callee:00c596b0:8"]]
+ 00a01838 ["INT_ADD", "register:40f0:8", ["const:a01838:8", "const:4:8"]]
+ 00a01838 ["CALL", null, ["callee:00c596b0:8"]]
- 00a00c70 ["INT_ADD", "register:40f0:8", ["const:a00c70:8", "const:4:8"]]
- 00a00c70 ["CALL", null, ["ram:9f79e4:8"]]
+ 00a01c1c ["INT_ADD", "register:40f0:8", ["const:a01c1c:8", "const:4:8"]]
+ 00a01c1c ["CALL", null, ["ram:9f8990:8"]]
~~~


<a id="compare-246a68b38a3c979d2e05102b72d28eb5"></a>

### [`00a00ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00ea0.md) → [`00a01e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a01e4c.md) FUN_00a01e4c

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
      "definition_site": "00a01e70",
      "incomplete_value": false,
      "site": "00a01e70",
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
            "const:ac0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00ec4",
      "incomplete_value": false,
      "site": "00a00ec4",
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
            "const:af0:8"
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
      "00a01e70",
      "DATA",
      [
        "storage",
        "00c8aaf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01e70",
      "DATA",
      [
        "storage",
        "00c8bac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00eb4 ["INT_ADD", "register:40f0:8", ["const:a00eb4:8", "const:4:8"]]
- 00a00eb4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a01e60 ["INT_ADD", "register:40f0:8", ["const:a01e60:8", "const:4:8"]]
+ 00a01e60 ["CALL", null, ["callee:00c58f30:8"]]
- 00a00ebc ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a01e68 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a00ec0 ["COPY", "tmp:0:8", ["const:af0:8"]]
- 00a00ec0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a00ec0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a00ec0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a01e6c ["COPY", "tmp:0:8", ["const:ac0:8"]]
+ 00a01e6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01e6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a01e6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-626787a40069d9c80348b185e7f7a4e0"></a>

### [`00a00ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00ed4.md) → [`00a01e80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a01e80.md) FUN_00a01e80

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
      "definition_site": "00a01e8c",
      "incomplete_value": false,
      "site": "00a01e8c",
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
            "const:ac0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a00ee0",
      "incomplete_value": false,
      "site": "00a00ee0",
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
            "const:af0:8"
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
      "00a01e8c",
      "DATA",
      [
        "storage",
        "00c8aaf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a01e8c",
      "DATA",
      [
        "storage",
        "00c8bac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a00ed8 ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 00a01e84 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a00edc ["COPY", "tmp:0:8", ["const:af0:8"]]
- 00a00edc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a00edc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a00edc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a01e88 ["COPY", "tmp:0:8", ["const:ac0:8"]]
+ 00a01e88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a01e88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a01e88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-62811a61722d5b3ef5d79e53fe4b114d"></a>

### [`00a00ef0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a00/00a00ef0.md) → [`00a01e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a01/00a01e9c.md) FUN_00a01e9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 21件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006648e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/006648e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 21件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00664c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664c90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01eec",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00f40",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01f08",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a00f5c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00a02044",
      "value": [
        "leaf",
        "ram:664c90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01098",
      "value": [
        "leaf",
        "ram:6648e0:8"
      ]
    },
    "ordinal": 18,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a01eec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a01f08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a02044",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006648e0"
      ]
    ]
  ],
  "added": [
    [
      "00a01eec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a01f08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a02044",
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
- 00a00f40 ["INT_ADD", "register:40f0:8", ["const:a00f40:8", "const:4:8"]]
- 00a00f40 ["CALL", null, ["ram:47ad34:8"]]
+ 00a01eec ["INT_ADD", "register:40f0:8", ["const:a01eec:8", "const:4:8"]]
+ 00a01eec ["CALL", null, ["ram:47b054:8"]]
- 00a00f5c ["INT_ADD", "register:40f0:8", ["const:a00f5c:8", "const:4:8"]]
- 00a00f5c ["CALL", null, ["ram:47ad34:8"]]
+ 00a01f08 ["INT_ADD", "register:40f0:8", ["const:a01f08:8", "const:4:8"]]
+ 00a01f08 ["CALL", null, ["ram:47b054:8"]]
- 00a01098 ["INT_ADD", "register:40f0:8", ["const:a01098:8", "const:4:8"]]
- 00a01098 ["CALL", null, ["ram:6648e0:8"]]
+ 00a02044 ["INT_ADD", "register:40f0:8", ["const:a02044:8", "const:4:8"]]
+ 00a02044 ["CALL", null, ["ram:664c90:8"]]
~~~


<a id="compare-c05b7deb3391aecd646cf3343fc8fa5c"></a>

### [`00a01204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01204.md) → [`00a021b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a021b0.md) FUN_00a021b0

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
      "definition_site": "00a021d4",
      "incomplete_value": false,
      "site": "00a021d4",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a01228",
      "incomplete_value": false,
      "site": "00a01228",
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
            "const:b70:8"
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
      "00a021d4",
      "DATA",
      [
        "storage",
        "00c8ab70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a021d4",
      "DATA",
      [
        "storage",
        "00c8bb40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a01218 ["INT_ADD", "register:40f0:8", ["const:a01218:8", "const:4:8"]]
- 00a01218 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a021c4 ["INT_ADD", "register:40f0:8", ["const:a021c4:8", "const:4:8"]]
+ 00a021c4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a01220 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a021cc ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a01224 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 00a01224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a01224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a01224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a021d0 ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 00a021d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a021d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a021d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-79dddcdb1c3abbaf351bffec46a100ae"></a>

### [`00a01238`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01238.md) → [`00a021e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a021e4.md) FUN_00a021e4

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
      "definition_site": "00a021f0",
      "incomplete_value": false,
      "site": "00a021f0",
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
            "const:b40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a01244",
      "incomplete_value": false,
      "site": "00a01244",
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
            "const:b70:8"
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
      "00a021f0",
      "DATA",
      [
        "storage",
        "00c8ab70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a021f0",
      "DATA",
      [
        "storage",
        "00c8bb40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0123c ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 00a021e8 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a01240 ["COPY", "tmp:0:8", ["const:b70:8"]]
- 00a01240 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a01240 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a01240 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a021ec ["COPY", "tmp:0:8", ["const:b40:8"]]
+ 00a021ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a021ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a021ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-672bfde68861f7eef3eb73b81281973c"></a>

### [`00a01254`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01254.md) → [`00a02200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a02200.md) FUN_00a02200

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f4c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a02238",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a0128c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a02250",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a012a4",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00a02238",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a02250",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a02238",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a02250",
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
- 00a0128c ["INT_ADD", "register:40f0:8", ["const:a0128c:8", "const:4:8"]]
- 00a0128c ["CALL", null, ["ram:47ad34:8"]]
+ 00a02238 ["INT_ADD", "register:40f0:8", ["const:a02238:8", "const:4:8"]]
+ 00a02238 ["CALL", null, ["ram:47b054:8"]]
- 00a012a4 ["INT_ADD", "register:40f0:8", ["const:a012a4:8", "const:4:8"]]
- 00a012a4 ["CALL", null, ["ram:47ad34:8"]]
+ 00a02250 ["INT_ADD", "register:40f0:8", ["const:a02250:8", "const:4:8"]]
+ 00a02250 ["CALL", null, ["ram:47b054:8"]]
- 00a01270 ["INT_ADD", "register:40f0:8", ["const:a01270:8", "const:4:8"]]
- 00a01270 ["CALL", null, ["callee:008b7f4c:8"]]
+ 00a0221c ["INT_ADD", "register:40f0:8", ["const:a0221c:8", "const:4:8"]]
+ 00a0221c ["CALL", null, ["callee:008b7f4c:8"]]
~~~


<a id="compare-d2182c4b33347aad895304d51a3add69"></a>

### [`00a012f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a012f8.md) → [`00a022a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a022a4.md) FUN_00a022a4

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
      "definition_site": "00a022c8",
      "incomplete_value": false,
      "site": "00a022c8",
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
            "const:bc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0131c",
      "incomplete_value": false,
      "site": "00a0131c",
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
            "const:bf0:8"
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
      "00a022c8",
      "DATA",
      [
        "storage",
        "00c8abf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a022c8",
      "DATA",
      [
        "storage",
        "00c8bbc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0130c ["INT_ADD", "register:40f0:8", ["const:a0130c:8", "const:4:8"]]
- 00a0130c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a022b8 ["INT_ADD", "register:40f0:8", ["const:a022b8:8", "const:4:8"]]
+ 00a022b8 ["CALL", null, ["callee:00c58f30:8"]]
- 00a01314 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a022c0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a01318 ["COPY", "tmp:0:8", ["const:bf0:8"]]
- 00a01318 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a01318 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a01318 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a022c4 ["COPY", "tmp:0:8", ["const:bc0:8"]]
+ 00a022c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a022c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a022c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eda597a9cc87a46391d14656f35b2fa3"></a>

### [`00a0132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a0132c.md) → [`00a022d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a022d8.md) FUN_00a022d8

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
      "definition_site": "00a022e4",
      "incomplete_value": false,
      "site": "00a022e4",
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
            "const:bc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a01338",
      "incomplete_value": false,
      "site": "00a01338",
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
            "const:bf0:8"
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
      "00a022e4",
      "DATA",
      [
        "storage",
        "00c8abf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a022e4",
      "DATA",
      [
        "storage",
        "00c8bbc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a01330 ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 00a022dc ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a01334 ["COPY", "tmp:0:8", ["const:bf0:8"]]
- 00a01334 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a01334 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a01334 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a022e0 ["COPY", "tmp:0:8", ["const:bc0:8"]]
+ 00a022e0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a022e0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a022e0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0f5fd22184b0c5c5bb8717482c7d70db"></a>

### [`00a01348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01348.md) → [`00a022f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a022f4.md) FUN_00a022f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`009fbbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fb/009fbbcc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a02314",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01368",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00a02320",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a01374",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00a02314",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a02320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a02314",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a02320",
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
- 00a01368 ["INT_ADD", "register:40f0:8", ["const:a01368:8", "const:4:8"]]
- 00a01368 ["CALL", null, ["ram:47ad34:8"]]
+ 00a02314 ["INT_ADD", "register:40f0:8", ["const:a02314:8", "const:4:8"]]
+ 00a02314 ["CALL", null, ["ram:47b054:8"]]
- 00a01374 ["INT_ADD", "register:40f0:8", ["const:a01374:8", "const:4:8"]]
- 00a01374 ["CALL", null, ["ram:47ad34:8"]]
+ 00a02320 ["INT_ADD", "register:40f0:8", ["const:a02320:8", "const:4:8"]]
+ 00a02320 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-796f170e90e18f64d91db28c035c551e"></a>

### [`00a013c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a013c8.md) → [`00a02374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a02374.md) FUN_00a02374

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
      "definition_site": "00a02388",
      "incomplete_value": false,
      "site": "00a0238c",
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
      "definition_site": "00a013dc",
      "incomplete_value": false,
      "site": "00a013e0",
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
      "00a0238c",
      "DATA",
      [
        "storage",
        "00c8ac70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a0238c",
      "DATA",
      [
        "storage",
        "00c8bc40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a013d4 ["INT_ADD", "register:40f0:8", ["const:a013d4:8", "const:4:8"]]
- 00a013d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a02380 ["INT_ADD", "register:40f0:8", ["const:a02380:8", "const:4:8"]]
+ 00a02380 ["CALL", null, ["callee:00c58f30:8"]]
- 00a013d8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a02384 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a013dc ["COPY", "tmp:0:8", ["const:c70:8"]]
- 00a013dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a013dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a013dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a02388 ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 00a02388 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a02388 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a02388 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-90978cff404c8864efdde1c78c144a8c"></a>

### [`00a013ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a013ec.md) → [`00a02398`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a02398.md) FUN_00a02398

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
      "definition_site": "00a0239c",
      "incomplete_value": false,
      "site": "00a023a0",
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
      "definition_site": "00a013f0",
      "incomplete_value": false,
      "site": "00a013f4",
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
      "00a023a0",
      "DATA",
      [
        "storage",
        "00c8ac70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a023a0",
      "DATA",
      [
        "storage",
        "00c8bc40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a013ec ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a02398 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a013f0 ["COPY", "tmp:0:8", ["const:c70:8"]]
- 00a013f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a013f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a013f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a0239c ["COPY", "tmp:0:8", ["const:c40:8"]]
+ 00a0239c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a0239c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a0239c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d9f1261f4532f64a1d0dcbce323d09b2"></a>

### [`00a01404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01404.md) → [`00a023b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a023b0.md) FUN_00a023b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b894c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.67% / 新版 97.67%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a023d8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a0142c",
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
      "00a023d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a023d8",
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
- 00a0142c ["INT_ADD", "register:40f0:8", ["const:a0142c:8", "const:4:8"]]
- 00a0142c ["CALL", null, ["ram:47ad34:8"]]
+ 00a023d8 ["INT_ADD", "register:40f0:8", ["const:a023d8:8", "const:4:8"]]
+ 00a023d8 ["CALL", null, ["ram:47b054:8"]]
- 00a01438 ["INT_ADD", "register:40f0:8", ["const:a01438:8", "const:4:8"]]
- 00a01438 ["CALL", null, ["callee:0047d134:8"]]
+ 00a023e4 ["INT_ADD", "register:40f0:8", ["const:a023e4:8", "const:4:8"]]
+ 00a023e4 ["CALL", null, ["callee:0047d134:8"]]
- 00a01454 ["INT_ADD", "register:40f0:8", ["const:a01454:8", "const:4:8"]]
- 00a01454 ["CALL", null, ["callee:008524fc:8"]]
+ 00a02400 ["INT_ADD", "register:40f0:8", ["const:a02400:8", "const:4:8"]]
+ 00a02400 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-063f85b7114235d32e89b6ee047a6b5a"></a>

### [`00a014dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a014dc.md) → [`00a02488`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a02488.md) FUN_00a02488

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a024ac",
      "incomplete_value": true,
      "site": "00a024b0",
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
            "const:cc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a01500",
      "incomplete_value": true,
      "site": "00a01504",
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
            "const:cf0:8"
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
      "00a024b0",
      "DATA",
      [
        "storage",
        "00c8acf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a024b0",
      "DATA",
      [
        "storage",
        "00c8bcc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a014f0 ["INT_ADD", "register:40f0:8", ["const:a014f0:8", "const:4:8"]]
- 00a014f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a0249c ["INT_ADD", "register:40f0:8", ["const:a0249c:8", "const:4:8"]]
+ 00a0249c ["CALL", null, ["callee:00c58f30:8"]]
- 00a014fc ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a024a8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a01500 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 00a01500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a01500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a01500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a024ac ["COPY", "tmp:0:8", ["const:cc0:8"]]
+ 00a024ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a024ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a024ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6ccaf2732ac9957a97744bc86f36e48d"></a>

### [`00a0151c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a0151c.md) → [`00a024c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a024c8.md) FUN_00a024c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a024cc",
      "incomplete_value": false,
      "site": "00a024d0",
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
      "definition_site": "00a01520",
      "incomplete_value": false,
      "site": "00a01524",
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
      "00a024d0",
      "DATA",
      [
        "storage",
        "00c8acf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a024d0",
      "DATA",
      [
        "storage",
        "00c8bcc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0151c ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a024c8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a01520 ["COPY", "tmp:0:8", ["const:cf0:8"]]
- 00a01520 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a01520 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a01520 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a024cc ["COPY", "tmp:0:8", ["const:cc0:8"]]
+ 00a024cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a024cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a024cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3d53fad49eaa258fb62a1c1c3c3a98bf"></a>

### [`00a01544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a01/00a01544.md) → [`00a024f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a02/00a024f0.md) FUN_00a024f0

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 33件 [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md)
- 新版 呼出元 0件  · 呼出先 33件 [`0046dda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda8.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493cf8.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.03% / 新版 98.03%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a02b94",
      "incomplete_value": true,
      "site": "00a02b94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:74c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a01be8",
      "incomplete_value": true,
      "site": "00a01be8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:67d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 47,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a02b98",
      "incomplete_value": true,
      "site": "00a02b98",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00a01bec",
      "incomplete_value": true,
      "site": "00a01bec",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 48,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a0273c",
      "incomplete_value": false,
      "site": "00a02748",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a01790",
      "incomplete_value": false,
      "site": "00a0179c",
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
            "const:76d:8"
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a0254c",
      "DATA",
      [
        "storage",
        "00436bd4",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a02564",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a02574",
      "DATA",
      [
        "storage",
        "00436bc8",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00a0254c",
      "DATA",
      [
        "storage",
        "00436bd4",
        null,
        "qword"
      ]
    ],
    [
      "00a02564",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "uleb128"
      ]
    ],
    [
      "00a02574",
      "DATA",
      [
        "storage",
        "00436bc8",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0179c ["INT_ADD", "register:40f0:8", ["const:a0179c:8", "const:4:8"]]
- 00a0179c ["CALL", null, ["callee:00c59000:8"]]
+ 00a02748 ["INT_ADD", "register:40f0:8", ["const:a02748:8", "const:4:8"]]
+ 00a02748 ["CALL", null, ["callee:00c59000:8"]]
- 00a017d4 ["INT_ADD", "register:40f0:8", ["const:a017d4:8", "const:4:8"]]
- 00a017d4 ["CALL", null, ["callee:00c59000:8"]]
+ 00a02780 ["INT_ADD", "register:40f0:8", ["const:a02780:8", "const:4:8"]]
+ 00a02780 ["CALL", null, ["callee:00c59000:8"]]
- 00a017fc ["INT_ADD", "register:40f0:8", ["const:a017fc:8", "const:4:8"]]
- 00a017fc ["CALL", null, ["callee:00c59010:8"]]
+ 00a027a8 ["INT_ADD", "register:40f0:8", ["const:a027a8:8", "const:4:8"]]
+ 00a027a8 ["CALL", null, ["callee:00c59010:8"]]
~~~


<a id="compare-5f2bf235f69a270e09a914bf7e50cbc8"></a>

### [`00a022d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a022d4.md) → [`00a03280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03280.md) FUN_00a03280

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
      "definition_site": "00a032a0",
      "incomplete_value": false,
      "site": "00a032a4",
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
      "definition_site": "00a022f4",
      "incomplete_value": false,
      "site": "00a022f8",
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
      "00a032a4",
      "DATA",
      [
        "storage",
        "00c8ad70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a032a4",
      "DATA",
      [
        "storage",
        "00c8bd40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a022e8 ["INT_ADD", "register:40f0:8", ["const:a022e8:8", "const:4:8"]]
- 00a022e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a03294 ["INT_ADD", "register:40f0:8", ["const:a03294:8", "const:4:8"]]
+ 00a03294 ["CALL", null, ["callee:00c58f30:8"]]
- 00a022f0 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a0329c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a022f4 ["COPY", "tmp:0:8", ["const:d70:8"]]
- 00a022f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a022f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a022f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a032a0 ["COPY", "tmp:0:8", ["const:d40:8"]]
+ 00a032a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a032a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a032a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4788fe6f21a9fdefc7c61de71dab413d"></a>

### [`00a0230c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a0230c.md) → [`00a032b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a032b8.md) FUN_00a032b8

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
      "definition_site": "00a032bc",
      "incomplete_value": false,
      "site": "00a032c0",
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
      "definition_site": "00a02310",
      "incomplete_value": false,
      "site": "00a02314",
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
      "00a032c0",
      "DATA",
      [
        "storage",
        "00c8ad70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a032c0",
      "DATA",
      [
        "storage",
        "00c8bd40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0230c ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a032b8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a02310 ["COPY", "tmp:0:8", ["const:d70:8"]]
- 00a02310 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a02310 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a02310 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a032bc ["COPY", "tmp:0:8", ["const:d40:8"]]
+ 00a032bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a032bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a032bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a15d638a5eacb6e6cbd0220d3ec4d32c"></a>

### [`00a0232c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a0232c.md) → [`00a032d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a032d8.md) FUN_00a032d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 19件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)
- 新版 呼出元 0件  · 呼出先 19件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00468114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468114.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.15% / 新版 99.15%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a035a4",
      "value": [
        "leaf",
        "ram:9f9cac:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a025f8",
      "value": [
        "leaf",
        "ram:9f8d00:8"
      ]
    },
    "ordinal": 30,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a03680",
      "incomplete_value": false,
      "site": "00a03684",
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
            "const:e83:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a026d4",
      "incomplete_value": false,
      "site": "00a026d8",
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
    "ordinal": 43,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a035a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009f8d00"
      ]
    ],
    [
      "00a03634",
      "DATA",
      [
        "storage",
        "00436bd4",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a03680",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a035a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "009f9cac"
      ]
    ],
    [
      "00a03634",
      "DATA",
      [
        "storage",
        "00436bd4",
        null,
        "qword"
      ]
    ],
    [
      "00a03680",
      "PARAM",
      [
        "storage",
        "002b3e83",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a025f8 ["INT_ADD", "register:40f0:8", ["const:a025f8:8", "const:4:8"]]
- 00a025f8 ["CALL", null, ["ram:9f8d00:8"]]
+ 00a035a4 ["INT_ADD", "register:40f0:8", ["const:a035a4:8", "const:4:8"]]
+ 00a035a4 ["CALL", null, ["ram:9f9cac:8"]]
- 00a026d8 ["INT_ADD", "register:40f0:8", ["const:a026d8:8", "const:4:8"]]
- 00a026d8 ["CALL", null, ["callee:00442c90:8"]]
+ 00a03684 ["INT_ADD", "register:40f0:8", ["const:a03684:8", "const:4:8"]]
+ 00a03684 ["CALL", null, ["callee:00442c90:8"]]
- 00a0235c ["INT_ADD", "register:40f0:8", ["const:a0235c:8", "const:4:8"]]
- 00a0235c ["CALL", null, ["callee:008ba294:8"]]
+ 00a03308 ["INT_ADD", "register:40f0:8", ["const:a03308:8", "const:4:8"]]
+ 00a03308 ["CALL", null, ["callee:008ba294:8"]]
~~~


<a id="compare-11ff501355c2e7db42a64e7fe738d151"></a>

### [`00a02708`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02708.md) → [`00a036b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a036b4.md) FUN_00a036b4

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
      "definition_site": "00a036d8",
      "incomplete_value": false,
      "site": "00a036d8",
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
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a0272c",
      "incomplete_value": false,
      "site": "00a0272c",
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
            "const:df0:8"
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
      "00a036d8",
      "DATA",
      [
        "storage",
        "00c8adf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a036d8",
      "DATA",
      [
        "storage",
        "00c8bdc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0271c ["INT_ADD", "register:40f0:8", ["const:a0271c:8", "const:4:8"]]
- 00a0271c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a036c8 ["INT_ADD", "register:40f0:8", ["const:a036c8:8", "const:4:8"]]
+ 00a036c8 ["CALL", null, ["callee:00c58f30:8"]]
- 00a02724 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a036d0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a02728 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 00a02728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a02728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a02728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a036d4 ["COPY", "tmp:0:8", ["const:dc0:8"]]
+ 00a036d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a036d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a036d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-15436d27efa50ee7fae855e5936086d0"></a>

### [`00a0273c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a0273c.md) → [`00a036e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a036e8.md) FUN_00a036e8

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
      "definition_site": "00a036f4",
      "incomplete_value": false,
      "site": "00a036f4",
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
            "const:dc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a02748",
      "incomplete_value": false,
      "site": "00a02748",
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
            "const:df0:8"
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
      "00a036f4",
      "DATA",
      [
        "storage",
        "00c8adf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a036f4",
      "DATA",
      [
        "storage",
        "00c8bdc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a02740 ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 00a036ec ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a02744 ["COPY", "tmp:0:8", ["const:df0:8"]]
- 00a02744 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a02744 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a02744 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a036f0 ["COPY", "tmp:0:8", ["const:dc0:8"]]
+ 00a036f0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a036f0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a036f0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-cf4f15e4476984234dfa8469a1eb8df8"></a>

### [`00a02758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02758.md) → [`00a03704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03704.md) FUN_00a03704

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa0.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7f4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f4c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a0373c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a02790",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a03754",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a027a8",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00a0373c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a03754",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a0373c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a03754",
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
- 00a02790 ["INT_ADD", "register:40f0:8", ["const:a02790:8", "const:4:8"]]
- 00a02790 ["CALL", null, ["ram:47ad34:8"]]
+ 00a0373c ["INT_ADD", "register:40f0:8", ["const:a0373c:8", "const:4:8"]]
+ 00a0373c ["CALL", null, ["ram:47b054:8"]]
- 00a027a8 ["INT_ADD", "register:40f0:8", ["const:a027a8:8", "const:4:8"]]
- 00a027a8 ["CALL", null, ["ram:47ad34:8"]]
+ 00a03754 ["INT_ADD", "register:40f0:8", ["const:a03754:8", "const:4:8"]]
+ 00a03754 ["CALL", null, ["ram:47b054:8"]]
- 00a02774 ["INT_ADD", "register:40f0:8", ["const:a02774:8", "const:4:8"]]
- 00a02774 ["CALL", null, ["callee:008b7f4c:8"]]
+ 00a03720 ["INT_ADD", "register:40f0:8", ["const:a03720:8", "const:4:8"]]
+ 00a03720 ["CALL", null, ["callee:008b7f4c:8"]]
~~~


<a id="compare-4fe28ee26f9001e9e6e24017126d5821"></a>

### [`00a027f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a027f8.md) → [`00a037a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a037a4.md) FUN_00a037a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a037bc",
      "incomplete_value": false,
      "site": "00a037c8",
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
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a02810",
      "incomplete_value": false,
      "site": "00a0281c",
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
            "const:e70:8"
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
      "00a037c8",
      "DATA",
      [
        "storage",
        "00c8ae70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a037c8",
      "DATA",
      [
        "storage",
        "00c8be40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0280c ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a037b8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a02810 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 00a02810 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a02810 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a02810 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a037bc ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 00a037bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a037bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a037bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a02840 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02840 ["INT_ADD", "register:40f0:8", ["const:a02840:8", "const:4:8"]]
- 00a02840 ["CALLIND", null, ["register:0:8"]]
+ 00a037ec ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a037ec ["INT_ADD", "register:40f0:8", ["const:a037ec:8", "const:4:8"]]
+ 00a037ec ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fa6c0d4625433a6ebd32ee653c200f25"></a>

### [`00a02888`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02888.md) → [`00a03834`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03834.md) FUN_00a03834

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a0384c",
      "incomplete_value": false,
      "site": "00a03858",
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
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a028a0",
      "incomplete_value": false,
      "site": "00a028ac",
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
            "const:e70:8"
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
      "00a03858",
      "DATA",
      [
        "storage",
        "00c8ae70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a03858",
      "DATA",
      [
        "storage",
        "00c8be40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0289c ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a03848 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a028a0 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 00a028a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a028a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a028a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a0384c ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 00a0384c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a0384c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a0384c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a028d0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a028d0 ["INT_ADD", "register:40f0:8", ["const:a028d0:8", "const:4:8"]]
- 00a028d0 ["CALLIND", null, ["register:0:8"]]
+ 00a0387c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a0387c ["INT_ADD", "register:40f0:8", ["const:a0387c:8", "const:4:8"]]
+ 00a0387c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c0882d5e5b97dfa56c62fa0cfa23e4b9"></a>

### [`00a02914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02914.md) → [`00a038c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a038c0.md) FUN_00a038c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.92% / 新版 95.92%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a038ec",
      "incomplete_value": false,
      "site": "00a038f4",
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
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a02940",
      "incomplete_value": false,
      "site": "00a02948",
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
            "const:e70:8"
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
      "00a038f4",
      "DATA",
      [
        "storage",
        "00c8ae70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a038f4",
      "DATA",
      [
        "storage",
        "00c8be40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0292c ["INT_ADD", "register:40f0:8", ["const:a0292c:8", "const:4:8"]]
- 00a0292c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a038d8 ["INT_ADD", "register:40f0:8", ["const:a038d8:8", "const:4:8"]]
+ 00a038d8 ["CALL", null, ["callee:00c58f30:8"]]
- 00a0293c ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 00a038e8 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a02940 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 00a02940 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a02940 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a02940 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a038ec ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 00a038ec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a038ec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a038ec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3acddc59f76574365119390db82db3e2"></a>

### [`00a02a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02a24.md) → [`00a039d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a039d0.md) FUN_00a039d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a039f4",
      "incomplete_value": false,
      "site": "00a039fc",
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
            "const:e40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a02a48",
      "incomplete_value": false,
      "site": "00a02a50",
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
            "const:e70:8"
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
      "00a039fc",
      "DATA",
      [
        "storage",
        "00c8ae70",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a039fc",
      "DATA",
      [
        "storage",
        "00c8be40",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a02a44 ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 00a039f0 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a02a48 ["COPY", "tmp:0:8", ["const:e70:8"]]
- 00a02a48 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a02a48 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a02a48 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a039f4 ["COPY", "tmp:0:8", ["const:e40:8"]]
+ 00a039f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a039f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a039f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00a02a70 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a02a70 ["INT_ADD", "register:40f0:8", ["const:a02a70:8", "const:4:8"]]
- 00a02a70 ["CALLIND", null, ["register:0:8"]]
+ 00a03a1c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a03a1c ["INT_ADD", "register:40f0:8", ["const:a03a1c:8", "const:4:8"]]
+ 00a03a1c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d2e0108fc74a0f5685ca8332daf5c503"></a>

### [`00a02c3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a02/00a02c3c.md) → [`00a03be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a03/00a03be8.md) FUN_00a03be8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 28件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 28件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `call_target` 3件, `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a03f88",
      "incomplete_value": true,
      "site": "00a03f98",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:307:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a02fdc",
      "incomplete_value": true,
      "site": "00a02fec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:230:8"
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
      "definition_site": "00a03f9c",
      "incomplete_value": true,
      "site": "00a03f9c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00a02ff0",
      "incomplete_value": true,
      "site": "00a02ff0",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 20,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a03f90",
      "incomplete_value": true,
      "site": "00a03fa0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a02fe4",
      "incomplete_value": true,
      "site": "00a02ff4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00a03c74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a03c9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a03d20",
      "DATA",
      [
        "storage",
        "0040edd0",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "00a03c74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a03c9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a03d20",
      "DATA",
      [
        "storage",
        "0040edd0",
        null,
        "byte[55]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a02cc8 ["INT_ADD", "register:40f0:8", ["const:a02cc8:8", "const:4:8"]]
- 00a02cc8 ["CALL", null, ["ram:47ad34:8"]]
+ 00a03c74 ["INT_ADD", "register:40f0:8", ["const:a03c74:8", "const:4:8"]]
+ 00a03c74 ["CALL", null, ["ram:47b054:8"]]
- 00a02cf0 ["INT_ADD", "register:40f0:8", ["const:a02cf0:8", "const:4:8"]]
- 00a02cf0 ["CALL", null, ["ram:47ad34:8"]]
+ 00a03c9c ["INT_ADD", "register:40f0:8", ["const:a03c9c:8", "const:4:8"]]
+ 00a03c9c ["CALL", null, ["ram:47b054:8"]]
- 00a0311c ["INT_ADD", "register:40f0:8", ["const:a0311c:8", "const:4:8"]]
- 00a0311c ["CALL", null, ["ram:6648e0:8"]]
+ 00a040c8 ["INT_ADD", "register:40f0:8", ["const:a040c8:8", "const:4:8"]]
+ 00a040c8 ["CALL", null, ["ram:664c90:8"]]
~~~


<a id="compare-43414c66c97667490fcc2c955102e269"></a>

### [`00a037e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a037e8.md) → [`00a04794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04794.md) FUN_00a04794

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a047a0",
      "incomplete_value": false,
      "site": "00a047ac",
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
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a037f4",
      "incomplete_value": false,
      "site": "00a03800",
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
            "const:ee0:8"
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
      "00a047ac",
      "DATA",
      [
        "storage",
        "00c8aee0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a047ac",
      "DATA",
      [
        "storage",
        "00c8beb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a037f0 ["COPY", "register:4050:8", ["const:c8a000:8"]]
+ 00a0479c ["COPY", "register:4050:8", ["const:c8b000:8"]]
- 00a037f4 ["COPY", "tmp:0:8", ["const:ee0:8"]]
- 00a037f4 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00a037f4 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00a037f4 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00a047a0 ["COPY", "tmp:0:8", ["const:eb0:8"]]
+ 00a047a0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00a047a0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00a047a0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-c9192244884bbf8d5712a6441df38811"></a>

### [`00a0382c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a0382c.md) → [`00a047d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a047d8.md) FUN_00a047d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a047f0",
      "incomplete_value": false,
      "site": "00a047fc",
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
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03844",
      "incomplete_value": false,
      "site": "00a03850",
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
            "const:ee0:8"
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
      "00a047fc",
      "DATA",
      [
        "storage",
        "00c8aee0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a047fc",
      "DATA",
      [
        "storage",
        "00c8beb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03840 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a047ec ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a03844 ["COPY", "tmp:0:8", ["const:ee0:8"]]
- 00a03844 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03844 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03844 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a047f0 ["COPY", "tmp:0:8", ["const:eb0:8"]]
+ 00a047f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a047f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a047f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03874 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03874 ["INT_ADD", "register:40f0:8", ["const:a03874:8", "const:4:8"]]
- 00a03874 ["CALLIND", null, ["register:0:8"]]
+ 00a04820 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a04820 ["INT_ADD", "register:40f0:8", ["const:a04820:8", "const:4:8"]]
+ 00a04820 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f2d65ed5033a986fc85ac32104d4969c"></a>

### [`00a03918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03918.md) → [`00a048c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a048c4.md) FUN_00a048c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a048e4",
      "incomplete_value": false,
      "site": "00a048e4",
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
            "const:eb0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03938",
      "incomplete_value": false,
      "site": "00a03938",
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
            "const:ee0:8"
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
      "00a048e4",
      "DATA",
      [
        "storage",
        "00c8aee0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a048e4",
      "DATA",
      [
        "storage",
        "00c8beb0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03930 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a048dc ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a03934 ["COPY", "tmp:0:8", ["const:ee0:8"]]
- 00a03934 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03934 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03934 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a048e0 ["COPY", "tmp:0:8", ["const:eb0:8"]]
+ 00a048e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a048e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a048e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03954 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03954 ["INT_ADD", "register:40f0:8", ["const:a03954:8", "const:4:8"]]
- 00a03954 ["CALLIND", null, ["register:0:8"]]
+ 00a04900 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a04900 ["INT_ADD", "register:40f0:8", ["const:a04900:8", "const:4:8"]]
+ 00a04900 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-773c4461a86e0166b87b21a6ea2f0009"></a>

### [`00a03a18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03a18.md) → [`00a049c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a049c4.md) FUN_00a049c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b925c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008ba208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba208.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a04a00",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a03a54",
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
      "00a04a00",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a04a00",
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
- 00a03a54 ["INT_ADD", "register:40f0:8", ["const:a03a54:8", "const:4:8"]]
- 00a03a54 ["CALL", null, ["ram:47ad34:8"]]
+ 00a04a00 ["INT_ADD", "register:40f0:8", ["const:a04a00:8", "const:4:8"]]
+ 00a04a00 ["CALL", null, ["ram:47b054:8"]]
- 00a03a60 ["INT_ADD", "register:40f0:8", ["const:a03a60:8", "const:4:8"]]
- 00a03a60 ["CALL", null, ["callee:0047d134:8"]]
+ 00a04a0c ["INT_ADD", "register:40f0:8", ["const:a04a0c:8", "const:4:8"]]
+ 00a04a0c ["CALL", null, ["callee:0047d134:8"]]
- 00a03abc ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03abc ["INT_ADD", "register:40f0:8", ["const:a03abc:8", "const:4:8"]]
- 00a03abc ["CALLIND", null, ["register:0:8"]]
+ 00a04a68 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a04a68 ["INT_ADD", "register:40f0:8", ["const:a04a68:8", "const:4:8"]]
+ 00a04a68 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-ee7297abf3b5404208b43cf28fbfcf2e"></a>

### [`00a03b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03b6c.md) → [`00a04b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04b18.md) FUN_00a04b18

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a04b30",
      "incomplete_value": false,
      "site": "00a04b3c",
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
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03b84",
      "incomplete_value": false,
      "site": "00a03b90",
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
            "const:f60:8"
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
      "00a04b3c",
      "DATA",
      [
        "storage",
        "00c8af60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04b3c",
      "DATA",
      [
        "storage",
        "00c8bf30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03b80 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a04b2c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a03b84 ["COPY", "tmp:0:8", ["const:f60:8"]]
- 00a03b84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03b84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03b84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a04b30 ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 00a04b30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04b30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04b30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03bb4 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03bb4 ["INT_ADD", "register:40f0:8", ["const:a03bb4:8", "const:4:8"]]
- 00a03bb4 ["CALLIND", null, ["register:0:8"]]
+ 00a04b60 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a04b60 ["INT_ADD", "register:40f0:8", ["const:a04b60:8", "const:4:8"]]
+ 00a04b60 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-eae35e97469b1786a7b9e179500ae55e"></a>

### [`00a03bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03bc8.md) → [`00a04b74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04b74.md) FUN_00a04b74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a04ba0",
      "incomplete_value": false,
      "site": "00a04ba0",
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
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03bf4",
      "incomplete_value": false,
      "site": "00a03bf4",
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
            "const:f60:8"
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
      "00a04ba0",
      "DATA",
      [
        "storage",
        "00c8af60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04ba0",
      "DATA",
      [
        "storage",
        "00c8bf30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03bdc ["INT_ADD", "register:40f0:8", ["const:a03bdc:8", "const:4:8"]]
- 00a03bdc ["CALL", null, ["callee:00c58f30:8"]]
+ 00a04b88 ["INT_ADD", "register:40f0:8", ["const:a04b88:8", "const:4:8"]]
+ 00a04b88 ["CALL", null, ["callee:00c58f30:8"]]
- 00a03be8 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a04b94 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a03bec ["COPY", "tmp:0:8", ["const:f60:8"]]
- 00a03bec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03bec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03bec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a04b98 ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 00a04b98 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04b98 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04b98 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9e288df43fc427b15af3e36ea2b6d12b"></a>

### [`00a03c58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03c58.md) → [`00a04c04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04c04.md) FUN_00a04c04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a04c24",
      "incomplete_value": false,
      "site": "00a04c24",
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
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03c78",
      "incomplete_value": false,
      "site": "00a03c78",
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
            "const:f60:8"
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
      "00a04c24",
      "DATA",
      [
        "storage",
        "00c8af60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04c24",
      "DATA",
      [
        "storage",
        "00c8bf30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03c70 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a04c1c ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a03c74 ["COPY", "tmp:0:8", ["const:f60:8"]]
- 00a03c74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03c74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03c74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a04c20 ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 00a04c20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04c20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04c20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a03c94 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03c94 ["INT_ADD", "register:40f0:8", ["const:a03c94:8", "const:4:8"]]
- 00a03c94 ["CALLIND", null, ["register:0:8"]]
+ 00a04c40 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a04c40 ["INT_ADD", "register:40f0:8", ["const:a04c40:8", "const:4:8"]]
+ 00a04c40 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-787ce611346168bee22abd0529926f59"></a>

### [`00a03d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03d58.md) → [`00a04d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04d04.md) FUN_00a04d04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b925c.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008ba208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba208.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a04d40",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a03d94",
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
      "00a04d40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a04d40",
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
- 00a03d94 ["INT_ADD", "register:40f0:8", ["const:a03d94:8", "const:4:8"]]
- 00a03d94 ["CALL", null, ["ram:47ad34:8"]]
+ 00a04d40 ["INT_ADD", "register:40f0:8", ["const:a04d40:8", "const:4:8"]]
+ 00a04d40 ["CALL", null, ["ram:47b054:8"]]
- 00a03da0 ["INT_ADD", "register:40f0:8", ["const:a03da0:8", "const:4:8"]]
- 00a03da0 ["CALL", null, ["callee:0047d134:8"]]
+ 00a04d4c ["INT_ADD", "register:40f0:8", ["const:a04d4c:8", "const:4:8"]]
+ 00a04d4c ["CALL", null, ["callee:0047d134:8"]]
- 00a03dfc ["COPY", "register:0:8", ["register:4040:8"]]
- 00a03dfc ["INT_ADD", "register:40f0:8", ["const:a03dfc:8", "const:4:8"]]
- 00a03dfc ["CALLIND", null, ["register:0:8"]]
+ 00a04da8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a04da8 ["INT_ADD", "register:40f0:8", ["const:a04da8:8", "const:4:8"]]
+ 00a04da8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-46a0efe6482c435a61a05d23f8d33794"></a>

### [`00a03e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03e6c.md) → [`00a04e18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04e18.md) FUN_00a04e18

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
      "definition_site": "00a04e3c",
      "incomplete_value": false,
      "site": "00a04e3c",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03e90",
      "incomplete_value": false,
      "site": "00a03e90",
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
            "const:ff0:8"
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
      "00a04e3c",
      "DATA",
      [
        "storage",
        "00c8aff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04e3c",
      "DATA",
      [
        "storage",
        "00c8bfc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03e80 ["INT_ADD", "register:40f0:8", ["const:a03e80:8", "const:4:8"]]
- 00a03e80 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a04e2c ["INT_ADD", "register:40f0:8", ["const:a04e2c:8", "const:4:8"]]
+ 00a04e2c ["CALL", null, ["callee:00c58f30:8"]]
- 00a03e88 ["COPY", "register:4040:8", ["const:c8a000:8"]]
+ 00a04e34 ["COPY", "register:4040:8", ["const:c8b000:8"]]
- 00a03e8c ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 00a03e8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a03e8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a03e8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a04e38 ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 00a04e38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04e38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a04e38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5550b84ca51d8a3369b5d96ae785f485"></a>

### [`00a03ea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03ea0.md) → [`00a04e4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04e4c.md) FUN_00a04e4c

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
      "definition_site": "00a04e58",
      "incomplete_value": false,
      "site": "00a04e58",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a03eac",
      "incomplete_value": false,
      "site": "00a03eac",
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
            "const:ff0:8"
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
      "00a04e58",
      "DATA",
      [
        "storage",
        "00c8aff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a04e58",
      "DATA",
      [
        "storage",
        "00c8bfc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a03ea4 ["COPY", "register:4048:8", ["const:c8a000:8"]]
+ 00a04e50 ["COPY", "register:4048:8", ["const:c8b000:8"]]
- 00a03ea8 ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 00a03ea8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a03ea8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a03ea8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a04e54 ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 00a04e54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a04e54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a04e54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-10133c406458d1d157cc658b99953b8b"></a>

### [`00a03ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a03/00a03ebc.md) → [`00a04e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a04/00a04e68.md) FUN_00a04e68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 25件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md)
- 新版 呼出元 0件  · 呼出先 25件 [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.82% / 新版 98.82%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00a04ec4",
      "incomplete_value": true,
      "site": "00a04ec4",
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
      "definition_site": "00a03f18",
      "incomplete_value": true,
      "site": "00a03f18",
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
      "definition_site": "00a04ecc",
      "incomplete_value": false,
      "site": "00a04edc",
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
      "definition_site": "00a03f20",
      "incomplete_value": false,
      "site": "00a03f30",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a04ed4",
      "incomplete_value": false,
      "site": "00a04edc",
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
      "definition_site": "00a03f28",
      "incomplete_value": false,
      "site": "00a03f30",
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
      "00a04ec0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a04ecc",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a04ed4",
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
      "00a04ec0",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00a04ecc",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a04ed4",
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
- 00a03f30 ["INT_ADD", "register:40f0:8", ["const:a03f30:8", "const:4:8"]]
- 00a03f30 ["CALL", null, ["callee:00c596b0:8"]]
+ 00a04edc ["INT_ADD", "register:40f0:8", ["const:a04edc:8", "const:4:8"]]
+ 00a04edc ["CALL", null, ["callee:00c596b0:8"]]
- 00a0430c ["INT_ADD", "register:40f0:8", ["const:a0430c:8", "const:4:8"]]
- 00a0430c ["CALL", null, ["ram:9f79e4:8"]]
+ 00a052b8 ["INT_ADD", "register:40f0:8", ["const:a052b8:8", "const:4:8"]]
+ 00a052b8 ["CALL", null, ["ram:9f8990:8"]]
- 00a03f00 ["INT_ADD", "register:40f0:8", ["const:a03f00:8", "const:4:8"]]
- 00a03f00 ["CALL", null, ["callee:008ba294:8"]]
+ 00a04eac ["INT_ADD", "register:40f0:8", ["const:a04eac:8", "const:4:8"]]
+ 00a04eac ["CALL", null, ["callee:008ba294:8"]]
~~~


<a id="compare-3ae0247b32644ac18f5a1144e8e758ab"></a>

### [`00a045ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a045ac.md) → [`00a05558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a05558.md) FUN_00a05558

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
      "definition_site": "00a0557c",
      "incomplete_value": false,
      "site": "00a0557c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a045d0",
      "incomplete_value": false,
      "site": "00a045d0",
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
            "const:70:8"
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
      "00a0557c",
      "DATA",
      [
        "storage",
        "00c8b070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a0557c",
      "DATA",
      [
        "storage",
        "00c8c040",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a045c0 ["INT_ADD", "register:40f0:8", ["const:a045c0:8", "const:4:8"]]
- 00a045c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a0556c ["INT_ADD", "register:40f0:8", ["const:a0556c:8", "const:4:8"]]
+ 00a0556c ["CALL", null, ["callee:00c58f30:8"]]
- 00a045c8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a05574 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a045cc ["COPY", "tmp:0:8", ["const:70:8"]]
- 00a045cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a045cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a045cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a05578 ["COPY", "tmp:0:8", ["const:40:8"]]
+ 00a05578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-da70095cf8e03d6d319128a770e0eec4"></a>

### [`00a045e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a045e0.md) → [`00a0558c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a0558c.md) FUN_00a0558c

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
      "definition_site": "00a05598",
      "incomplete_value": false,
      "site": "00a05598",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a045ec",
      "incomplete_value": false,
      "site": "00a045ec",
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
            "const:70:8"
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
      "00a05598",
      "DATA",
      [
        "storage",
        "00c8b070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a05598",
      "DATA",
      [
        "storage",
        "00c8c040",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a045e4 ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a05590 ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a045e8 ["COPY", "tmp:0:8", ["const:70:8"]]
- 00a045e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a045e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a045e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a05594 ["COPY", "tmp:0:8", ["const:40:8"]]
+ 00a05594 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a05594 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a05594 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-aeac622dcd7da5d18104bb190dd5af26"></a>

### [`00a045fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a045fc.md) → [`00a055a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a055a8.md) FUN_00a055a8

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 24件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md)
- 新版 呼出元 0件  · 呼出先 24件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493cf8.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.20% / 新版 98.20%

優先判定に残った影響 `call_argument_candidate` 5件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a0571c",
      "incomplete_value": false,
      "site": "00a05728",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04770",
      "incomplete_value": false,
      "site": "00a0477c",
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
            "const:76d:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a05754",
      "incomplete_value": false,
      "site": "00a05760",
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
            "const:74c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a047a8",
      "incomplete_value": false,
      "site": "00a047b4",
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
            "const:67d:8"
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
      "definition_site": "00a05780",
      "incomplete_value": false,
      "site": "00a05788",
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
            "const:24e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a047d4",
      "incomplete_value": false,
      "site": "00a047dc",
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
            "const:17f:8"
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a05604",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a05614",
      "DATA",
      [
        "storage",
        "00436bc8",
        null,
        "byte[47]"
      ]
    ],
    [
      "00a05620",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "byte[47]"
      ]
    ]
  ],
  "added": [
    [
      "00a05604",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "uleb128"
      ]
    ],
    [
      "00a05614",
      "DATA",
      [
        "storage",
        "00436bc8",
        null,
        "dword"
      ]
    ],
    [
      "00a05620",
      "DATA",
      [
        "storage",
        "00436bcc",
        null,
        "uleb128"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0477c ["INT_ADD", "register:40f0:8", ["const:a0477c:8", "const:4:8"]]
- 00a0477c ["CALL", null, ["callee:00c59000:8"]]
+ 00a05728 ["INT_ADD", "register:40f0:8", ["const:a05728:8", "const:4:8"]]
+ 00a05728 ["CALL", null, ["callee:00c59000:8"]]
- 00a047b4 ["INT_ADD", "register:40f0:8", ["const:a047b4:8", "const:4:8"]]
- 00a047b4 ["CALL", null, ["callee:00c59000:8"]]
+ 00a05760 ["INT_ADD", "register:40f0:8", ["const:a05760:8", "const:4:8"]]
+ 00a05760 ["CALL", null, ["callee:00c59000:8"]]
- 00a047dc ["INT_ADD", "register:40f0:8", ["const:a047dc:8", "const:4:8"]]
- 00a047dc ["CALL", null, ["callee:00c59010:8"]]
+ 00a05788 ["INT_ADD", "register:40f0:8", ["const:a05788:8", "const:4:8"]]
+ 00a05788 ["CALL", null, ["callee:00c59010:8"]]
~~~


<a id="compare-863e7f5c593fcf2078f3d9cb6246bb49"></a>

### [`00a04e18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04e18.md) → [`00a05dc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a05dc4.md) FUN_00a05dc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a05de8",
      "incomplete_value": false,
      "site": "00a05dec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04e3c",
      "incomplete_value": false,
      "site": "00a04e40",
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
            "const:f0:8"
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
      "00a05dec",
      "DATA",
      [
        "storage",
        "00c8b0f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a05dec",
      "DATA",
      [
        "storage",
        "00c8c0c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04e2c ["INT_ADD", "register:40f0:8", ["const:a04e2c:8", "const:4:8"]]
- 00a04e2c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a05dd8 ["INT_ADD", "register:40f0:8", ["const:a05dd8:8", "const:4:8"]]
+ 00a05dd8 ["CALL", null, ["callee:00c58f30:8"]]
- 00a04e38 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a05de4 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a04e3c ["COPY", "tmp:0:8", ["const:f0:8"]]
- 00a04e3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04e3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04e3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a05de8 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 00a05de8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05de8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05de8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-eb16f8e7dc30d59c847587c568c2168e"></a>

### [`00a04e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04e58.md) → [`00a05e04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a05e04.md) FUN_00a05e04

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a05e08",
      "incomplete_value": false,
      "site": "00a05e0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04e5c",
      "incomplete_value": false,
      "site": "00a04e60",
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
            "const:f0:8"
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
      "00a05e0c",
      "DATA",
      [
        "storage",
        "00c8b0f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a05e0c",
      "DATA",
      [
        "storage",
        "00c8c0c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04e58 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a05e04 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a04e5c ["COPY", "tmp:0:8", ["const:f0:8"]]
- 00a04e5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04e5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04e5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a05e08 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 00a05e08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05e08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05e08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3f29dabf184e30d9b82e4ba87caedcf0"></a>

### [`00a04ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04ee8.md) → [`00a05e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a05e94.md) FUN_00a05e94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`009fb4a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fb/009fb4a0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`009fc44c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fc/009fc44c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a05ea0",
      "incomplete_value": false,
      "site": "00a05ea4",
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
      "definition_site": "00a04ef4",
      "incomplete_value": false,
      "site": "00a04ef8",
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
      "00a05ea0",
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
      "00a05ea0",
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
- 00a04ef8 ["INT_ADD", "register:40f0:8", ["const:a04ef8:8", "const:4:8"]]
- 00a04ef8 ["CALL", null, ["callee:0043bad8:8"]]
+ 00a05ea4 ["INT_ADD", "register:40f0:8", ["const:a05ea4:8", "const:4:8"]]
+ 00a05ea4 ["CALL", null, ["callee:0043bad8:8"]]
- 00a04ef0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00a05e9c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00a04ef4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00a04ef4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a04ef4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a04ef4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a05ea0 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00a05ea0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a05ea0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a05ea0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-098e863a5373414e7eba2b967a3172ac"></a>

### [`00a04f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04f00.md) → [`00a05eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a05eac.md) FUN_00a05eac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a05ed0",
      "incomplete_value": false,
      "site": "00a05ed4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:140:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04f24",
      "incomplete_value": false,
      "site": "00a04f28",
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
            "const:170:8"
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
      "00a05ed4",
      "DATA",
      [
        "storage",
        "00c8b170",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a05ed4",
      "DATA",
      [
        "storage",
        "00c8c140",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04f14 ["INT_ADD", "register:40f0:8", ["const:a04f14:8", "const:4:8"]]
- 00a04f14 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a05ec0 ["INT_ADD", "register:40f0:8", ["const:a05ec0:8", "const:4:8"]]
+ 00a05ec0 ["CALL", null, ["callee:00c58f30:8"]]
- 00a04f20 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a05ecc ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a04f24 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a04f24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04f24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04f24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a05ed0 ["COPY", "tmp:0:8", ["const:140:8"]]
+ 00a05ed0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05ed0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05ed0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7fd44b15ea9ec4dc4db7b707d96d9c93"></a>

### [`00a04f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04f40.md) → [`00a05eec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a05eec.md) FUN_00a05eec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a05ef0",
      "incomplete_value": false,
      "site": "00a05ef4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:140:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a04f44",
      "incomplete_value": false,
      "site": "00a04f48",
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
            "const:170:8"
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
      "00a05ef4",
      "DATA",
      [
        "storage",
        "00c8b170",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a05ef4",
      "DATA",
      [
        "storage",
        "00c8c140",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04f40 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a05eec ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a04f44 ["COPY", "tmp:0:8", ["const:170:8"]]
- 00a04f44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a04f44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a04f44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a05ef0 ["COPY", "tmp:0:8", ["const:140:8"]]
+ 00a05ef0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05ef0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a05ef0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-befbaaad6692d50f915bd621e826184f"></a>

### [`00a04f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a04/00a04f68.md) → [`00a05f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a05/00a05f14.md) FUN_00a05f14

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b97f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b97f8.md) [`009df688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df688.md) [`009df918`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009df918.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba7a4.md) [`009e0634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0634.md) [`009e08c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e08c4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a060dc",
      "incomplete_value": true,
      "site": "00a060ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:767:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05130",
      "incomplete_value": true,
      "site": "00a05140",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:689:8"
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
      "definition_site": "00a060e0",
      "incomplete_value": true,
      "site": "00a060f0",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "00a05134",
      "incomplete_value": true,
      "site": "00a05144",
      "value": [
        "LOAD",
        "16",
        [
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a060e4",
      "incomplete_value": true,
      "site": "00a060f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:320:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05138",
      "incomplete_value": true,
      "site": "00a05148",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2d0:8"
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
      "00a060dc",
      "READ",
      [
        "storage",
        "002b5689",
        null,
        "string"
      ]
    ],
    [
      "00a060e0",
      "READ",
      [
        "storage",
        "002b5695",
        null,
        "string"
      ]
    ],
    [
      "00a060e4",
      "READ",
      [
        "storage",
        "002c32d0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a060dc",
      "READ",
      [
        "storage",
        "002b5767",
        null,
        "string"
      ]
    ],
    [
      "00a060e0",
      "READ",
      [
        "storage",
        "002b5773",
        null,
        "string"
      ]
    ],
    [
      "00a060e4",
      "READ",
      [
        "storage",
        "002c3320",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a04f9c ["INT_ADD", "register:40f0:8", ["const:a04f9c:8", "const:4:8"]]
- 00a04f9c ["CALL", null, ["callee:008ba7a4:8"]]
+ 00a05f48 ["INT_ADD", "register:40f0:8", ["const:a05f48:8", "const:4:8"]]
+ 00a05f48 ["CALL", null, ["callee:008ba7a4:8"]]
- 00a04fb0 ["INT_ADD", "register:40f0:8", ["const:a04fb0:8", "const:4:8"]]
- 00a04fb0 ["CALL", null, ["callee:008524fc:8"]]
+ 00a05f5c ["INT_ADD", "register:40f0:8", ["const:a05f5c:8", "const:4:8"]]
+ 00a05f5c ["CALL", null, ["callee:008524fc:8"]]
- 00a04fcc ["INT_ADD", "register:40f0:8", ["const:a04fcc:8", "const:4:8"]]
- 00a04fcc ["CALL", null, ["callee:009e5a08:8"]]
+ 00a05f78 ["INT_ADD", "register:40f0:8", ["const:a05f78:8", "const:4:8"]]
+ 00a05f78 ["CALL", null, ["callee:009e5a08:8"]]
~~~


<a id="compare-01568ac93250cc5662ac6b1cdd8c304b"></a>

### [`00a052a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a052a8.md) → [`00a06254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a06254.md) FUN_00a06254

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
      "definition_site": "00a06278",
      "incomplete_value": false,
      "site": "00a06278",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a052cc",
      "incomplete_value": false,
      "site": "00a052cc",
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
            "const:1f0:8"
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
      "00a06278",
      "DATA",
      [
        "storage",
        "00c8b1f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a06278",
      "DATA",
      [
        "storage",
        "00c8c1c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a052bc ["INT_ADD", "register:40f0:8", ["const:a052bc:8", "const:4:8"]]
- 00a052bc ["CALL", null, ["callee:00c58f30:8"]]
+ 00a06268 ["INT_ADD", "register:40f0:8", ["const:a06268:8", "const:4:8"]]
+ 00a06268 ["CALL", null, ["callee:00c58f30:8"]]
- 00a052c4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a06270 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a052c8 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 00a052c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a052c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a052c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a06274 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 00a06274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-41c7363f42795bd365bcfa76c1b53c57"></a>

### [`00a052dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a052dc.md) → [`00a06288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a06288.md) FUN_00a06288

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a06294",
      "incomplete_value": true,
      "site": "00a06294",
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
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a052e8",
      "incomplete_value": true,
      "site": "00a052e8",
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
            "const:1f0:8"
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
      "00a06294",
      "DATA",
      [
        "storage",
        "00c8b1f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a06294",
      "DATA",
      [
        "storage",
        "00c8c1c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a052e0 ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a0628c ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a052e4 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 00a052e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a052e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a052e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a06290 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 00a06290 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a06290 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a06290 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-77828a58d43ccd18e3291d479d78f54a"></a>

### [`00a052f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a052f8.md) → [`00a062a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a062a4.md) FUN_00a062a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009f7e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f7e34.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`009f8de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f8/009f8de0.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a062c4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a05318",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00a062d0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a05324",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00a062c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a062d0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a062c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a062d0",
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
- 00a05318 ["INT_ADD", "register:40f0:8", ["const:a05318:8", "const:4:8"]]
- 00a05318 ["CALL", null, ["ram:47ad34:8"]]
+ 00a062c4 ["INT_ADD", "register:40f0:8", ["const:a062c4:8", "const:4:8"]]
+ 00a062c4 ["CALL", null, ["ram:47b054:8"]]
- 00a05324 ["INT_ADD", "register:40f0:8", ["const:a05324:8", "const:4:8"]]
- 00a05324 ["CALL", null, ["ram:47ad34:8"]]
+ 00a062d0 ["INT_ADD", "register:40f0:8", ["const:a062d0:8", "const:4:8"]]
+ 00a062d0 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-78b3dd26a0263298f4566b15316bb54a"></a>

### [`00a05378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05378.md) → [`00a06324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a06324.md) FUN_00a06324

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
      "definition_site": "00a06344",
      "incomplete_value": false,
      "site": "00a06348",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:240:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05398",
      "incomplete_value": false,
      "site": "00a0539c",
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
            "const:270:8"
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
      "00a06348",
      "DATA",
      [
        "storage",
        "00c8b270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a06348",
      "DATA",
      [
        "storage",
        "00c8c240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0538c ["INT_ADD", "register:40f0:8", ["const:a0538c:8", "const:4:8"]]
- 00a0538c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a06338 ["INT_ADD", "register:40f0:8", ["const:a06338:8", "const:4:8"]]
+ 00a06338 ["CALL", null, ["callee:00c58f30:8"]]
- 00a05394 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a06340 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a05398 ["COPY", "tmp:0:8", ["const:270:8"]]
- 00a05398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a05398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a05398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a06344 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 00a06344 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06344 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06344 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3c793afec56da325cee4eeec3926b24d"></a>

### [`00a053b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a053b0.md) → [`00a0635c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a0635c.md) FUN_00a0635c

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
      "definition_site": "00a06360",
      "incomplete_value": false,
      "site": "00a06364",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:240:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a053b4",
      "incomplete_value": false,
      "site": "00a053b8",
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
            "const:270:8"
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
      "00a06364",
      "DATA",
      [
        "storage",
        "00c8b270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a06364",
      "DATA",
      [
        "storage",
        "00c8c240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a053b0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a0635c ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a053b4 ["COPY", "tmp:0:8", ["const:270:8"]]
- 00a053b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a053b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a053b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a06360 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 00a06360 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06360 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06360 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b5cffb5c4fa2c844ba3f06c5df32a2ea"></a>

### [`00a053d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a053d0.md) → [`00a0637c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a0637c.md) FUN_00a0637c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 15件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.62% / 新版 89.62%

優先判定に残った影響 `call_target` 2件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a0642c",
      "incomplete_value": true,
      "site": "00a0643c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:8cd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05480",
      "incomplete_value": true,
      "site": "00a05490",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7fe:8"
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
      "definition_site": "00a06440",
      "incomplete_value": true,
      "site": "00a06440",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "00a05494",
      "incomplete_value": true,
      "site": "00a05494",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a06434",
      "incomplete_value": true,
      "site": "00a06444",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a05488",
      "incomplete_value": true,
      "site": "00a05498",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00a063b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a063d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a0642c",
      "READ",
      [
        "storage",
        "002b87fe",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a063b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a063d4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a0642c",
      "READ",
      [
        "storage",
        "002b88cd",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0540c ["INT_ADD", "register:40f0:8", ["const:a0540c:8", "const:4:8"]]
- 00a0540c ["CALL", null, ["ram:47ad34:8"]]
+ 00a063b8 ["INT_ADD", "register:40f0:8", ["const:a063b8:8", "const:4:8"]]
+ 00a063b8 ["CALL", null, ["ram:47b054:8"]]
- 00a05428 ["INT_ADD", "register:40f0:8", ["const:a05428:8", "const:4:8"]]
- 00a05428 ["CALL", null, ["ram:47ad34:8"]]
+ 00a063d4 ["INT_ADD", "register:40f0:8", ["const:a063d4:8", "const:4:8"]]
+ 00a063d4 ["CALL", null, ["ram:47b054:8"]]
- 00a05464 ["INT_ADD", "register:40f0:8", ["const:a05464:8", "const:4:8"]]
- 00a05464 ["CALL", null, ["callee:008524fc:8"]]
+ 00a06410 ["INT_ADD", "register:40f0:8", ["const:a06410:8", "const:4:8"]]
+ 00a06410 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-2376bea23b8f4449faffd75ab5d8625c"></a>

### [`00a057e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a057e4.md) → [`00a06790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a06790.md) FUN_00a06790

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
      "definition_site": "00a067b4",
      "incomplete_value": false,
      "site": "00a067b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05808",
      "incomplete_value": false,
      "site": "00a05808",
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
            "const:2e0:8"
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
      "00a067b4",
      "DATA",
      [
        "storage",
        "00c8b2e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a067b4",
      "DATA",
      [
        "storage",
        "00c8c2b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a057f8 ["INT_ADD", "register:40f0:8", ["const:a057f8:8", "const:4:8"]]
- 00a057f8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a067a4 ["INT_ADD", "register:40f0:8", ["const:a067a4:8", "const:4:8"]]
+ 00a067a4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a05800 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a067ac ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a05804 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 00a05804 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a05804 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a05804 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a067b0 ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 00a067b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a067b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a067b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-939fe4937ec483e76e3959364242b185"></a>

### [`00a05818`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05818.md) → [`00a067c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a067c4.md) FUN_00a067c4

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
      "definition_site": "00a067d0",
      "incomplete_value": false,
      "site": "00a067d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:2b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05824",
      "incomplete_value": false,
      "site": "00a05824",
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
            "const:2e0:8"
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
      "00a067d0",
      "DATA",
      [
        "storage",
        "00c8b2e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a067d0",
      "DATA",
      [
        "storage",
        "00c8c2b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0581c ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a067c8 ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a05820 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 00a05820 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a05820 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a05820 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a067cc ["COPY", "tmp:0:8", ["const:2b0:8"]]
+ 00a067cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a067cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a067cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-049694e38f4bb6e48a522a82e88296ac"></a>

### [`00a05834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05834.md) → [`00a067e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a067e0.md) FUN_00a067e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b925c.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008ba208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba208.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a06808",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a0585c",
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
      "00a06808",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a06808",
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
- 00a0585c ["INT_ADD", "register:40f0:8", ["const:a0585c:8", "const:4:8"]]
- 00a0585c ["CALL", null, ["ram:47ad34:8"]]
+ 00a06808 ["INT_ADD", "register:40f0:8", ["const:a06808:8", "const:4:8"]]
+ 00a06808 ["CALL", null, ["ram:47b054:8"]]
- 00a05868 ["INT_ADD", "register:40f0:8", ["const:a05868:8", "const:4:8"]]
- 00a05868 ["CALL", null, ["callee:0047d134:8"]]
+ 00a06814 ["INT_ADD", "register:40f0:8", ["const:a06814:8", "const:4:8"]]
+ 00a06814 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-de0842fee2ee4c7b8345a56fe5fcc894"></a>

### [`00a058c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a058c0.md) → [`00a0686c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a0686c.md) FUN_00a0686c

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
      "definition_site": "00a06890",
      "incomplete_value": false,
      "site": "00a06890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:340:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a058e4",
      "incomplete_value": false,
      "site": "00a058e4",
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
            "const:370:8"
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
      "00a06890",
      "DATA",
      [
        "storage",
        "00c8b370",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a06890",
      "DATA",
      [
        "storage",
        "00c8c340",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a058d4 ["INT_ADD", "register:40f0:8", ["const:a058d4:8", "const:4:8"]]
- 00a058d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a06880 ["INT_ADD", "register:40f0:8", ["const:a06880:8", "const:4:8"]]
+ 00a06880 ["CALL", null, ["callee:00c58f30:8"]]
- 00a058dc ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a06888 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a058e0 ["COPY", "tmp:0:8", ["const:370:8"]]
- 00a058e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a058e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a058e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a0688c ["COPY", "tmp:0:8", ["const:340:8"]]
+ 00a0688c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a0688c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a0688c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8b69ed3392caf93665829d47608e690f"></a>

### [`00a058f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a058f4.md) → [`00a068a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a068a0.md) FUN_00a068a0

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
      "definition_site": "00a068ac",
      "incomplete_value": false,
      "site": "00a068ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:340:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05900",
      "incomplete_value": false,
      "site": "00a05900",
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
            "const:370:8"
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
      "00a068ac",
      "DATA",
      [
        "storage",
        "00c8b370",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a068ac",
      "DATA",
      [
        "storage",
        "00c8c340",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a058f8 ["COPY", "register:4048:8", ["const:c8b000:8"]]
+ 00a068a4 ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a058fc ["COPY", "tmp:0:8", ["const:370:8"]]
- 00a058fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a058fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a058fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a068a8 ["COPY", "tmp:0:8", ["const:340:8"]]
+ 00a068a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a068a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a068a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-edc34c4d1d38777d6d5bfa9589cc20a7"></a>

### [`00a05910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05910.md) → [`00a068bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a068bc.md) FUN_00a068bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`009fac20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009fa/009fac20.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`009fbbcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009fb/009fbbcc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a068dc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a05930",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "site": "00a068e8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a0593c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "00a068dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a068e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a068dc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a068e8",
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
- 00a05930 ["INT_ADD", "register:40f0:8", ["const:a05930:8", "const:4:8"]]
- 00a05930 ["CALL", null, ["ram:47ad34:8"]]
+ 00a068dc ["INT_ADD", "register:40f0:8", ["const:a068dc:8", "const:4:8"]]
+ 00a068dc ["CALL", null, ["ram:47b054:8"]]
- 00a0593c ["INT_ADD", "register:40f0:8", ["const:a0593c:8", "const:4:8"]]
- 00a0593c ["CALL", null, ["ram:47ad34:8"]]
+ 00a068e8 ["INT_ADD", "register:40f0:8", ["const:a068e8:8", "const:4:8"]]
+ 00a068e8 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-96770e96a104ba28de53c42258237eeb"></a>

### [`00a05990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05990.md) → [`00a0693c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a0693c.md) FUN_00a0693c

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
      "definition_site": "00a06950",
      "incomplete_value": false,
      "site": "00a06954",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a059a4",
      "incomplete_value": false,
      "site": "00a059a8",
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
            "const:3f0:8"
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
      "00a06954",
      "DATA",
      [
        "storage",
        "00c8b3f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a06954",
      "DATA",
      [
        "storage",
        "00c8c3c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a0599c ["INT_ADD", "register:40f0:8", ["const:a0599c:8", "const:4:8"]]
- 00a0599c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a06948 ["INT_ADD", "register:40f0:8", ["const:a06948:8", "const:4:8"]]
+ 00a06948 ["CALL", null, ["callee:00c58f30:8"]]
- 00a059a0 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a0694c ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a059a4 ["COPY", "tmp:0:8", ["const:3f0:8"]]
- 00a059a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a059a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a059a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a06950 ["COPY", "tmp:0:8", ["const:3c0:8"]]
+ 00a06950 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06950 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06950 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5806772706379b890b7758ad5b937cf2"></a>

### [`00a059b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a059b4.md) → [`00a06960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a06960.md) FUN_00a06960

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
      "definition_site": "00a06964",
      "incomplete_value": false,
      "site": "00a06968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8c000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a059b8",
      "incomplete_value": false,
      "site": "00a059bc",
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
            "const:3f0:8"
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
      "00a06968",
      "DATA",
      [
        "storage",
        "00c8b3f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a06968",
      "DATA",
      [
        "storage",
        "00c8c3c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a059b4 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 00a06960 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 00a059b8 ["COPY", "tmp:0:8", ["const:3f0:8"]]
- 00a059b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a059b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a059b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a06964 ["COPY", "tmp:0:8", ["const:3c0:8"]]
+ 00a06964 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06964 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06964 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3ee68e32d9beb32dd27d2d01f7cd9a89"></a>

### [`00a05aa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05aa4.md) → [`00a06a50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a06a50.md) _INIT_206

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a06a8c",
      "incomplete_value": true,
      "site": "00a06aa8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a05ae0",
      "incomplete_value": true,
      "site": "00a05afc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a06ad0",
      "incomplete_value": true,
      "site": "00a06aec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a05b24",
      "incomplete_value": true,
      "site": "00a05b40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a06af0",
      "incomplete_value": true,
      "site": "00a06b08",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a05b44",
      "incomplete_value": true,
      "site": "00a05b5c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a06a8c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00a06ab0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00a06ad0",
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
      "00a06a8c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00a06ab0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00a06ad0",
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
- 00a05cd8 ["INT_ADD", "register:40f0:8", ["const:a05cd8:8", "const:4:8"]]
- 00a05cd8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00a06c84 ["INT_ADD", "register:40f0:8", ["const:a06c84:8", "const:4:8"]]
+ 00a06c84 ["CALL", null, ["callee:00c58ed0:8"]]
- 00a05acc ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00a06a78 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 00a05ad0 ["COPY", "tmp:0:8", ["const:e50:8"]]
- 00a05ad0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00a05ad0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00a05ad0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00a06a7c ["COPY", "tmp:0:8", ["const:e10:8"]]
+ 00a06a7c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00a06a7c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00a06a7c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-3e2c260bd415f09ec97c419251b0c7e6"></a>

### [`00a05e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05e34.md) → [`00a06de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a06de0.md) FUN_00a06de0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 15件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 15件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.27% / 新版 96.27%

優先判定に残った影響 `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a06e20",
      "incomplete_value": false,
      "site": "00a06e2c",
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
      "definition_site": "00a05e74",
      "incomplete_value": false,
      "site": "00a05e80",
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
      "definition_site": "00a06e58",
      "incomplete_value": true,
      "site": "00a06e64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7ac:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a05eac",
      "incomplete_value": true,
      "site": "00a05eb8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:76c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a06fb4",
      "incomplete_value": true,
      "site": "00a06fc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:769:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a06008",
      "incomplete_value": true,
      "site": "00a06014",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:69a:8"
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
      "00a06e2c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00a06e58",
      "READ",
      [
        "storage",
        "002a176c",
        null,
        "string"
      ]
    ],
    [
      "00a06fb4",
      "READ",
      [
        "storage",
        "002b969a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a06e2c",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00a06e58",
      "READ",
      [
        "storage",
        "002a17ac",
        null,
        "string"
      ]
    ],
    [
      "00a06fb4",
      "READ",
      [
        "storage",
        "002b9769",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a05e6c ["INT_ADD", "register:40f0:8", ["const:a05e6c:8", "const:4:8"]]
- 00a05e6c ["CALL", null, ["callee:00488180:8"]]
+ 00a06e18 ["INT_ADD", "register:40f0:8", ["const:a06e18:8", "const:4:8"]]
+ 00a06e18 ["CALL", null, ["callee:00488180:8"]]
- 00a05e70 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00a06e1c ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00a05e74 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00a05e74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a05e74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a05e74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a06e20 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00a06e20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06e20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a06e20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-be68dae882ac3219319bb1aab69242cc"></a>

### [`00a06a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06a4c.md) → [`00a079f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a079f8.md) FUN_00a079f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a05e34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a05/00a05e34.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`00a06de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a06/00a06de0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a07a04",
      "incomplete_value": false,
      "site": "00a07a08",
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
      "definition_site": "00a06a58",
      "incomplete_value": false,
      "site": "00a06a5c",
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
      "00a07a04",
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
      "00a07a04",
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
- 00a06a5c ["INT_ADD", "register:40f0:8", ["const:a06a5c:8", "const:4:8"]]
- 00a06a5c ["CALL", null, ["callee:0043bad8:8"]]
+ 00a07a08 ["INT_ADD", "register:40f0:8", ["const:a07a08:8", "const:4:8"]]
+ 00a07a08 ["CALL", null, ["callee:0043bad8:8"]]
- 00a06a54 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00a07a00 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00a06a58 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00a06a58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00a06a58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00a06a58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00a07a04 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00a07a04 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00a07a04 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00a07a04 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4c238a3b5364956c5136865ee1ba9fc1"></a>

### [`00a06a60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06a60.md) → [`00a07a0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07a0c.md) _INIT_207

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.01% / 新版 87.01%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a07a8c",
      "incomplete_value": true,
      "site": "00a07aa8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a06ae0",
      "incomplete_value": true,
      "site": "00a06afc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a07aac",
      "incomplete_value": true,
      "site": "00a07ac4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a06b00",
      "incomplete_value": true,
      "site": "00a06b18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a07ac8",
      "incomplete_value": true,
      "site": "00a07ae4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a06b1c",
      "incomplete_value": true,
      "site": "00a06b38",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a07a48",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00a07a6c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00a07a8c",
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
      "00a07a48",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00a07a6c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00a07a8c",
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
- 00a06c94 ["INT_ADD", "register:40f0:8", ["const:a06c94:8", "const:4:8"]]
- 00a06c94 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00a07c40 ["INT_ADD", "register:40f0:8", ["const:a07c40:8", "const:4:8"]]
+ 00a07c40 ["CALL", null, ["callee:00c58ed0:8"]]
- 00a06a88 ["COPY", "register:4098:8", ["const:1123000:8"]]
+ 00a07a34 ["COPY", "register:4098:8", ["const:1124000:8"]]
- 00a06a8c ["COPY", "tmp:0:8", ["const:e68:8"]]
- 00a06a8c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00a06a8c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00a06a8c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00a07a38 ["COPY", "tmp:0:8", ["const:e28:8"]]
+ 00a07a38 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00a07a38 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00a07a38 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-8f0e20a05a4ceae9466009c26330379f"></a>

### [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) → [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) FUN_00a07d9c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00a14ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14ad4.md) · 呼出先 84件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00440f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f9c.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 2件 [`0088036c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088036c.md) [`00a15a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15a80.md) · 呼出先 83件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004412bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412bc.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 99.44% / 新版 99.44%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 7件, `store_destination` 43件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a08978",
      "incomplete_value": true,
      "site": "00a08978",
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
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a079cc",
      "incomplete_value": true,
      "site": "00a079cc",
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
            "const:f6c:8"
          ]
        ]
      ]
    },
    "ordinal": 162,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a089f8",
      "incomplete_value": true,
      "site": "00a089f8",
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
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a07a4c",
      "incomplete_value": true,
      "site": "00a07a4c",
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
            "const:f6c:8"
          ]
        ]
      ]
    },
    "ordinal": 169,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a08a68",
      "incomplete_value": true,
      "site": "00a08a68",
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
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a07abc",
      "incomplete_value": true,
      "site": "00a07abc",
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
            "const:f6c:8"
          ]
        ]
      ]
    },
    "ordinal": 176,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a07f70",
      "DATA",
      [
        "storage",
        "0039b1d6",
        null,
        "qword"
      ]
    ],
    [
      "00a07f74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a07f90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a07f70",
      "DATA",
      [
        "storage",
        "0039b1d6",
        null,
        "dword"
      ]
    ],
    [
      "00a07f74",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a07f90",
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
- 00a06fd4 ["INT_ADD", "register:40f0:8", ["const:a06fd4:8", "const:4:8"]]
- 00a06fd4 ["CALL", null, ["callee:00480658:8"]]
+ 00a07f80 ["INT_ADD", "register:40f0:8", ["const:a07f80:8", "const:4:8"]]
+ 00a07f80 ["CALL", null, ["callee:00480658:8"]]
- 00a071a4 ["INT_ADD", "register:40f0:8", ["const:a071a4:8", "const:4:8"]]
- 00a071a4 ["CALL", null, ["callee:00480750:8"]]
+ 00a08150 ["INT_ADD", "register:40f0:8", ["const:a08150:8", "const:4:8"]]
+ 00a08150 ["CALL", null, ["callee:00480750:8"]]
- 00a07218 ["INT_ADD", "register:40f0:8", ["const:a07218:8", "const:4:8"]]
- 00a07218 ["CALL", null, ["callee:00480750:8"]]
+ 00a081c4 ["INT_ADD", "register:40f0:8", ["const:a081c4:8", "const:4:8"]]
+ 00a081c4 ["CALL", null, ["callee:00480750:8"]]
~~~


<a id="compare-c9101b932e82ec4c95e0a76e941e416d"></a>

### [`00a14ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14ad4.md) → [`00a15a80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15a80.md) FUN_00a15a80

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b1f034`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f034.md) · 呼出先 14件 [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md) [`004814a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004814a0.md) [`004820ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/004820ec.md) [`004825f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/004825f0.md) [`00482620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482620.md)
- 新版 呼出元 1件 [`00b20028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b20028.md) · 呼出先 14件 [`00481790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/00481790.md) [`004817c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004817c0.md) [`0048240c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/0048240c.md) [`00482910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/00482910.md) [`00482940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00482/00482940.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.27% / 新版 95.27%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a15b9c",
      "incomplete_value": true,
      "site": "00a15ba0",
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
      "definition_site": "00a14bf0",
      "incomplete_value": true,
      "site": "00a14bf4",
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a15c3c",
      "incomplete_value": true,
      "site": "00a15c40",
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
                "register:4040:8"
              ],
              [
                "leaf",
                "const:5d0:8"
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
      "definition_site": "00a14c90",
      "incomplete_value": true,
      "site": "00a14c94",
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
                "register:4040:8"
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
      "00a15ab8",
      "READ",
      [
        "storage",
        "002a1580",
        null,
        "string"
      ]
    ],
    [
      "00a15b94",
      "READ",
      [
        "storage",
        "00c9ad68",
        null,
        "pointer"
      ]
    ],
    [
      "00a15ba0",
      "DATA",
      [
        "storage",
        "00c65668",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a15ab8",
      "READ",
      [
        "storage",
        "002a15c0",
        null,
        "string"
      ]
    ],
    [
      "00a15b94",
      "READ",
      [
        "storage",
        "00c9bd38",
        null,
        "pointer"
      ]
    ],
    [
      "00a15ba0",
      "DATA",
      [
        "storage",
        "00c66638",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a14afc ["INT_ADD", "register:40f0:8", ["const:a14afc:8", "const:4:8"]]
- 00a14afc ["CALL", null, ["callee:00481790:8"]]
+ 00a15aa8 ["INT_ADD", "register:40f0:8", ["const:a15aa8:8", "const:4:8"]]
+ 00a15aa8 ["CALL", null, ["callee:00481790:8"]]
- 00a14b04 ["COPY", "tmp:0:8", ["const:580:8"]]
- 00a14b04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a14b04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a14b04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a15ab0 ["COPY", "tmp:0:8", ["const:5c0:8"]]
+ 00a15ab0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a15ab0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a15ab0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00a14b34 ["INT_ADD", "register:40f0:8", ["const:a14b34:8", "const:4:8"]]
- 00a14b34 ["CALL", null, ["callee:004817c0:8"]]
+ 00a15ae0 ["INT_ADD", "register:40f0:8", ["const:a15ae0:8", "const:4:8"]]
+ 00a15ae0 ["CALL", null, ["callee:004817c0:8"]]
~~~


<a id="compare-433504b3aa398923f377dc65b07148e8"></a>

### [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) → [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) FUN_00a15d8c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`007692b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/007692b8.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) [`00a22424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a22/00a22424.md) · 呼出先 57件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0044e108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044e/0044e108.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cfc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cfc8.md) [`0047cfd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cfd0.md)
- 新版 呼出元 4件 [`00769694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/00769694.md) [`0088036c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088036c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md) [`00a233d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a23/00a233d0.md) · 呼出先 56件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d2e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d2e8.md) [`0047d2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d2f0.md) [`00480e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480e98.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.76% / 新版 99.76%

優先判定に残った影響 `call_target` 9件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a1aee0",
      "incomplete_value": true,
      "site": "00a1aee0",
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
      "definition_site": "00a19f34",
      "incomplete_value": true,
      "site": "00a19f34",
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
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a15e28",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a14e7c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a15e40",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a14e94",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 9,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a15e18",
      "DATA",
      [
        "storage",
        "0039b1d6",
        null,
        "qword"
      ]
    ],
    [
      "00a15e28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a15e40",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a15e18",
      "DATA",
      [
        "storage",
        "0039b1d6",
        null,
        "dword"
      ]
    ],
    [
      "00a15e28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a15e40",
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
- 00a14e7c ["INT_ADD", "register:40f0:8", ["const:a14e7c:8", "const:4:8"]]
- 00a14e7c ["CALL", null, ["ram:47ad34:8"]]
+ 00a15e28 ["INT_ADD", "register:40f0:8", ["const:a15e28:8", "const:4:8"]]
+ 00a15e28 ["CALL", null, ["ram:47b054:8"]]
- 00a14e94 ["INT_ADD", "register:40f0:8", ["const:a14e94:8", "const:4:8"]]
- 00a14e94 ["CALL", null, ["ram:47ad34:8"]]
+ 00a15e40 ["INT_ADD", "register:40f0:8", ["const:a15e40:8", "const:4:8"]]
+ 00a15e40 ["CALL", null, ["ram:47b054:8"]]
- 00a16d20 ["INT_ADD", "register:40f0:8", ["const:a16d20:8", "const:4:8"]]
- 00a16d20 ["CALL", null, ["ram:7643dc:8"]]
+ 00a17ccc ["INT_ADD", "register:40f0:8", ["const:a17ccc:8", "const:4:8"]]
+ 00a17ccc ["CALL", null, ["ram:7647b8:8"]]
~~~


<a id="compare-91776410e781b75fa7d2bb4b2c34985a"></a>

### [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md) → [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md) FUN_00a1b6a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 127件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0045abac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045abac.md) [`0045c948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045c/0045c948.md) [`0045d9f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045d/0045d9f4.md) [`005996f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/005996f4.md) · 呼出先 3件 [`00a14de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a14/00a14de0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 127件 [`0043c5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043c/0043c5b8.md) [`0045aecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aecc.md) [`0045cc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045c/0045cc68.md) [`0045dd14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045d/0045dd14.md) [`00599a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599a14.md) · 呼出先 3件 [`00a15d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a15/00a15d8c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a1b6d8",
      "incomplete_value": true,
      "site": "00a1b6d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a1a72c",
      "incomplete_value": true,
      "site": "00a1a72c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:580:8"
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
      "00a1b6c4",
      "READ",
      [
        "storage",
        "002a1580",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a1b6c4",
      "READ",
      [
        "storage",
        "002a15c0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a1a710 ["COPY", "tmp:0:8", ["const:580:8"]]
- 00a1a710 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a1a710 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a1a710 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a1b6bc ["COPY", "tmp:0:8", ["const:5c0:8"]]
+ 00a1b6bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a1b6bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a1b6bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00a1a738 ["INT_ADD", "register:40f0:8", ["const:a1a738:8", "const:4:8"]]
- 00a1a738 ["CALL", null, ["callee:00a15d8c:8"]]
+ 00a1b6e4 ["INT_ADD", "register:40f0:8", ["const:a1b6e4:8", "const:4:8"]]
+ 00a1b6e4 ["CALL", null, ["callee:00a15d8c:8"]]
- 00a1a74c ["INT_ADD", "register:40f0:8", ["const:a1a74c:8", "const:4:8"]]
- 00a1a74c ["CALL", null, ["callee:00c58f50:8"]]
+ 00a1b6f8 ["INT_ADD", "register:40f0:8", ["const:a1b6f8:8", "const:4:8"]]
+ 00a1b6f8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


