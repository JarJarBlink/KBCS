# v16.0.2 → v16.0.3 · 最優先の変更候補 (21)

[一覧の目次](README.md)

<a id="compare-444878f2f45dda1e86a70765f9318e47"></a>

### [`005a0ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0ad8.md) → [`005a0df8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a0/005a0df8.md) FUN_005a0df8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a0e00",
      "incomplete_value": false,
      "site": "005a0e04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a0ae0",
      "incomplete_value": false,
      "site": "005a0ae4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a0e04",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a0e04",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a0adc ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a0dfc ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 005a0ae0 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a0ae0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a0ae0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a0ae0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a0e00 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 005a0e00 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a0e00 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a0e00 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d238a25bf0d151850198be07a6bdca8e"></a>

### [`005a0afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0afc.md) → [`005a0e1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a0/005a0e1c.md) FUN_005a0e1c

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
      "definition_site": "005a0e20",
      "incomplete_value": false,
      "site": "005a0e24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:540:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a0b00",
      "incomplete_value": false,
      "site": "005a0b04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:570:8"
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
      "005a0e24",
      "DATA",
      [
        "storage",
        "00c6e570",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a0e24",
      "DATA",
      [
        "storage",
        "00c6f540",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a0afc ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a0e1c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a0b00 ["COPY", "tmp:0:8", ["const:570:8"]]
- 005a0b00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a0b00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a0b00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a0e20 ["COPY", "tmp:0:8", ["const:540:8"]]
+ 005a0e20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a0e20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a0e20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6e6a9184005e67dfa021f1727cb2d222"></a>

### [`005a0b0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0b0c.md) → [`005a0e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a0/005a0e2c.md) FUN_005a0e2c

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
      "definition_site": "005a0e3c",
      "incomplete_value": false,
      "site": "005a0e44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:540:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a0b1c",
      "incomplete_value": false,
      "site": "005a0b24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:570:8"
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
      "005a0e44",
      "DATA",
      [
        "storage",
        "00c6e570",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a0e44",
      "DATA",
      [
        "storage",
        "00c6f540",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a0b18 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a0e38 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a0b1c ["COPY", "tmp:0:8", ["const:570:8"]]
- 005a0b1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a0b1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a0b1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a0e3c ["COPY", "tmp:0:8", ["const:540:8"]]
+ 005a0e3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a0e3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a0e3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a0b28 ["INT_ADD", "register:40f0:8", ["const:5a0b28:8", "const:4:8"]]
- 005a0b28 ["CALL", null, ["callee:00c58f40:8"]]
+ 005a0e48 ["INT_ADD", "register:40f0:8", ["const:5a0e48:8", "const:4:8"]]
+ 005a0e48 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-d70e94cd8f865bfedf1bf86bb53d1ef9"></a>

### [`005a0b44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0b44.md) → [`005a0e64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a0/005a0e64.md) _INIT_44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.75% / 新版 84.75%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a0ea0",
      "incomplete_value": true,
      "site": "005a0ebc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0b80",
      "incomplete_value": true,
      "site": "005a0b9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0ec4",
      "incomplete_value": true,
      "site": "005a0ee0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0ba4",
      "incomplete_value": true,
      "site": "005a0bc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0ee4",
      "incomplete_value": true,
      "site": "005a0f00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a0bc4",
      "incomplete_value": true,
      "site": "005a0be0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005a0ea0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a0ec4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a0ee4",
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
      "005a0ea0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a0ec4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005a0ee4",
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
- 005a0d78 ["INT_ADD", "register:40f0:8", ["const:5a0d78:8", "const:4:8"]]
- 005a0d78 ["CALL", null, ["callee:00c58ed0:8"]]
+ 005a1098 ["INT_ADD", "register:40f0:8", ["const:5a1098:8", "const:4:8"]]
+ 005a1098 ["CALL", null, ["callee:00c58ed0:8"]]
- 005a0b6c ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005a0e8c ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 005a0b70 ["COPY", "tmp:0:8", ["const:7a8:8"]]
- 005a0b70 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005a0b70 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005a0b70 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005a0e90 ["COPY", "tmp:0:8", ["const:768:8"]]
+ 005a0e90 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005a0e90 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005a0e90 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-5b53e507bb637c141e3896783f190647"></a>

### [`005a0ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0ed4.md) → [`005a11f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a11f4.md) FUN_005a11f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005a1bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1bc0.md) [`005a1e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1e20.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005a1ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1ee0.md) [`005a2140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2140.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.66% / 新版 97.66%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a1248",
      "incomplete_value": true,
      "site": "005a1248",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2b4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a0f28",
      "incomplete_value": true,
      "site": "005a0f28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1e5:8"
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
      "definition_site": "005a1364",
      "incomplete_value": true,
      "site": "005a1370",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5ff:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1044",
      "incomplete_value": true,
      "site": "005a1050",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:530:8"
              ]
            ]
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
      "005a122c",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "005a1364",
      "READ",
      [
        "storage",
        "002b7530",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005a122c",
      "READ",
      [
        "storage",
        "002b72b4",
        null,
        "string"
      ]
    ],
    [
      "005a1364",
      "READ",
      [
        "storage",
        "002b75ff",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a0f00 ["COPY", "tmp:0:8", ["const:1e5:8"]]
- 005a0f00 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005a0f00 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005a0f00 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005a1220 ["COPY", "tmp:0:8", ["const:2b4:8"]]
+ 005a1220 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005a1220 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005a1220 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005a0f38 ["INT_ADD", "register:40f0:8", ["const:5a0f38:8", "const:4:8"]]
- 005a0f38 ["CALL", null, ["callee:004413ec:8"]]
+ 005a1258 ["INT_ADD", "register:40f0:8", ["const:5a1258:8", "const:4:8"]]
+ 005a1258 ["CALL", null, ["callee:004413ec:8"]]
- 005a0f54 ["COPY", "register:0:8", ["register:4040:8"]]
- 005a0f54 ["INT_ADD", "register:40f0:8", ["const:5a0f54:8", "const:4:8"]]
- 005a0f54 ["CALLIND", null, ["register:0:8"]]
+ 005a1274 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005a1274 ["INT_ADD", "register:40f0:8", ["const:5a1274:8", "const:4:8"]]
+ 005a1274 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-3fdb07d76401a677b0e779d0f73a463a"></a>

### [`005a140c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a140c.md) → [`005a172c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a172c.md) FUN_005a172c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0079c8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079c8c4.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)
- 新版 呼出元 1件 [`0079cca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079c/0079cca0.md) · 呼出先 1件 [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a174c",
      "incomplete_value": false,
      "site": "005a1758",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:5b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a142c",
      "incomplete_value": false,
      "site": "005a1438",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:5e0:8"
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
      "005a1758",
      "DATA",
      [
        "storage",
        "00c6e5e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a1758",
      "DATA",
      [
        "storage",
        "00c6f5b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1420 ["INT_ADD", "register:40f0:8", ["const:5a1420:8", "const:4:8"]]
- 005a1420 ["CALL", null, ["callee:0059bc68:8"]]
+ 005a1740 ["INT_ADD", "register:40f0:8", ["const:5a1740:8", "const:4:8"]]
+ 005a1740 ["CALL", null, ["callee:0059bc68:8"]]
- 005a1428 ["COPY", "register:4048:8", ["const:c6e000:8"]]
+ 005a1748 ["COPY", "register:4048:8", ["const:c6f000:8"]]
- 005a142c ["COPY", "tmp:0:8", ["const:5e0:8"]]
- 005a142c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a142c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a142c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a174c ["COPY", "tmp:0:8", ["const:5b0:8"]]
+ 005a174c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a174c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a174c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5290d2afbba9e9b99beda8646eae1ab8"></a>

### [`005a14b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a14b0.md) → [`005a17d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a17d0.md) FUN_005a17d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00459430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459430.md) [`00459b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459b10.md) [`005971dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005971dc.md) [`00597544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597544.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00459750`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459750.md) [`00459e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459e30.md) [`005974fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005974fc.md) [`00597864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597864.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.27% / 新版 97.27%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a1820",
      "incomplete_value": false,
      "site": "005a1824",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:718:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1500",
      "incomplete_value": false,
      "site": "005a1504",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:748:8"
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
      "005a1824",
      "DATA",
      [
        "storage",
        "00c6d748",
        null,
        "pointer"
      ]
    ],
    [
      "005a1894",
      "DATA",
      [
        "storage",
        "00c63830",
        null,
        "pointer"
      ]
    ],
    [
      "005a18dc",
      "READ",
      [
        "storage",
        "00c63838",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a1824",
      "DATA",
      [
        "storage",
        "00c6e718",
        null,
        "pointer"
      ]
    ],
    [
      "005a1894",
      "DATA",
      [
        "storage",
        "00c64800",
        null,
        "pointer"
      ]
    ],
    [
      "005a18dc",
      "READ",
      [
        "storage",
        "00c64808",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a14e4 ["INT_ADD", "register:40f0:8", ["const:5a14e4:8", "const:4:8"]]
- 005a14e4 ["CALL", null, ["callee:0059c2a4:8"]]
+ 005a1804 ["INT_ADD", "register:40f0:8", ["const:5a1804:8", "const:4:8"]]
+ 005a1804 ["CALL", null, ["callee:0059c2a4:8"]]
- 005a14ec ["INT_ADD", "register:40f0:8", ["const:5a14ec:8", "const:4:8"]]
- 005a14ec ["CALL", null, ["callee:00c58f30:8"]]
+ 005a180c ["INT_ADD", "register:40f0:8", ["const:5a180c:8", "const:4:8"]]
+ 005a180c ["CALL", null, ["callee:00c58f30:8"]]
- 005a14fc ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a181c ["COPY", "register:4048:8", ["const:c6e000:8"]]
~~~


<a id="compare-746b431aee082ca53933b9001cf596f0"></a>

### [`005a1720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1720.md) → [`005a1a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1a40.md) FUN_005a1a40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a1a5c",
      "incomplete_value": false,
      "site": "005a1a64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a173c",
      "incomplete_value": false,
      "site": "005a1744",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
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
      "definition_site": "005a1a74",
      "incomplete_value": false,
      "site": "005a1a74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:608:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1754",
      "incomplete_value": false,
      "site": "005a1754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:638:8"
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
      "005a1a64",
      "DATA",
      [
        "storage",
        "00c6e6e8",
        null,
        "undefined *"
      ]
    ],
    [
      "005a1a74",
      "DATA",
      [
        "storage",
        "00c6e638",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a1a64",
      "DATA",
      [
        "storage",
        "00c6f6b8",
        null,
        "undefined *"
      ]
    ],
    [
      "005a1a74",
      "DATA",
      [
        "storage",
        "00c6f608",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1734 ["INT_ADD", "register:40f0:8", ["const:5a1734:8", "const:4:8"]]
- 005a1734 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a1a54 ["INT_ADD", "register:40f0:8", ["const:5a1a54:8", "const:4:8"]]
+ 005a1a54 ["CALL", null, ["callee:00c58f30:8"]]
- 005a1738 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a1a58 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a173c ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 005a173c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a173c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a173c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a1a5c ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 005a1a5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a1a5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a1a5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c03b934b523b359aa40ff2e2f55447ac"></a>

### [`005a1768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1768.md) → [`005a1a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1a88.md) FUN_005a1a88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 3件 [`005a1814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1814.md) [`0079be60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079b/0079be60.md) [`0079c9d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079c9d8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`005a1b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1b34.md) [`0079c23c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079c/0079c23c.md) [`0079cdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079c/0079cdb4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.02% / 新版 93.02%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a1af4",
      "incomplete_value": false,
      "site": "005a1af8",
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
                "const:c6e000:8"
              ],
              [
                "leaf",
                "const:ab0:8"
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
      "definition_site": "005a17d4",
      "incomplete_value": false,
      "site": "005a17d8",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "005a1af8",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a1af8",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a17b4 ["INT_ADD", "register:40f0:8", ["const:5a17b4:8", "const:4:8"]]
- 005a17b4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a1ad4 ["INT_ADD", "register:40f0:8", ["const:5a1ad4:8", "const:4:8"]]
+ 005a1ad4 ["CALL", null, ["callee:00c58f50:8"]]
- 005a17c4 ["INT_ADD", "register:40f0:8", ["const:5a17c4:8", "const:4:8"]]
- 005a17c4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a1ae4 ["INT_ADD", "register:40f0:8", ["const:5a1ae4:8", "const:4:8"]]
+ 005a1ae4 ["CALL", null, ["callee:00c58f50:8"]]
- 005a17c8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005a1ae8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
~~~


<a id="compare-e87db69dd6f32211d1717d4b51a2013b"></a>

### [`005a1838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1838.md) → [`005a1b58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1b58.md) FUN_005a1b58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a1bc0",
      "incomplete_value": false,
      "site": "005a1bc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a18a0",
      "incomplete_value": false,
      "site": "005a18a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a1bc4",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a1bc4",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1884 ["INT_ADD", "register:40f0:8", ["const:5a1884:8", "const:4:8"]]
- 005a1884 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a1ba4 ["INT_ADD", "register:40f0:8", ["const:5a1ba4:8", "const:4:8"]]
+ 005a1ba4 ["CALL", null, ["callee:00c58f50:8"]]
- 005a1894 ["INT_ADD", "register:40f0:8", ["const:5a1894:8", "const:4:8"]]
- 005a1894 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a1bb4 ["INT_ADD", "register:40f0:8", ["const:5a1bb4:8", "const:4:8"]]
+ 005a1bb4 ["CALL", null, ["callee:00c58f50:8"]]
- 005a189c ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a1bbc ["COPY", "register:4048:8", ["const:c6e000:8"]]
~~~


<a id="compare-80b100055086b9931da1081f1578ab7d"></a>

### [`005a18d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a18d0.md) → [`005a1bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1bf0.md) FUN_005a1bf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a1c58",
      "incomplete_value": false,
      "site": "005a1c5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1938",
      "incomplete_value": false,
      "site": "005a193c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a1c5c",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a1c5c",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a191c ["INT_ADD", "register:40f0:8", ["const:5a191c:8", "const:4:8"]]
- 005a191c ["CALL", null, ["callee:00c58f50:8"]]
+ 005a1c3c ["INT_ADD", "register:40f0:8", ["const:5a1c3c:8", "const:4:8"]]
+ 005a1c3c ["CALL", null, ["callee:00c58f50:8"]]
- 005a192c ["INT_ADD", "register:40f0:8", ["const:5a192c:8", "const:4:8"]]
- 005a192c ["CALL", null, ["callee:00c58f50:8"]]
+ 005a1c4c ["INT_ADD", "register:40f0:8", ["const:5a1c4c:8", "const:4:8"]]
+ 005a1c4c ["CALL", null, ["callee:00c58f50:8"]]
- 005a1934 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a1c54 ["COPY", "register:4048:8", ["const:c6e000:8"]]
~~~


<a id="compare-c41cbde7361bba03c75ab8d3e035dc82"></a>

### [`005a1b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1b4c.md) → [`005a1e6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1e6c.md) FUN_005a1e6c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`005a1960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1960.md) [`005a1bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1bc0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`005a1c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1c80.md) [`005a1ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1ee0.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a1e78",
      "incomplete_value": false,
      "site": "005a1e7c",
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
      "definition_site": "005a1b58",
      "incomplete_value": false,
      "site": "005a1b5c",
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
      "005a1e78",
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
      "005a1e78",
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
- 005a1b5c ["INT_ADD", "register:40f0:8", ["const:5a1b5c:8", "const:4:8"]]
- 005a1b5c ["CALL", null, ["callee:0043bad8:8"]]
+ 005a1e7c ["INT_ADD", "register:40f0:8", ["const:5a1e7c:8", "const:4:8"]]
+ 005a1e7c ["CALL", null, ["callee:0043bad8:8"]]
- 005a1b54 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005a1e74 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005a1b58 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005a1b58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005a1b58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005a1b58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005a1e78 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005a1e78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005a1e78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005a1e78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-a23577d033d52b138e9709ebdf7ab29a"></a>

### [`005a1e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1e20.md) → [`005a2140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2140.md) FUN_005a2140

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005a0ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a0/005a0ed4.md) · 呼出先 3件 [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`005a1960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1960.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005a11f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a11f4.md) · 呼出先 3件 [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`005a1c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a1c80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a2178",
      "incomplete_value": false,
      "site": "005a2184",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1e58",
      "incomplete_value": false,
      "site": "005a1e64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "definition_site": "005a21c0",
      "incomplete_value": false,
      "site": "005a21c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:590:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1ea0",
      "incomplete_value": false,
      "site": "005a1ea0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:5c0:8"
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
      "005a2184",
      "DATA",
      [
        "storage",
        "00c6e698",
        null,
        "undefined *"
      ]
    ],
    [
      "005a21c0",
      "DATA",
      [
        "storage",
        "00c6e5c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a2184",
      "DATA",
      [
        "storage",
        "00c6f668",
        null,
        "undefined *"
      ]
    ],
    [
      "005a21c0",
      "DATA",
      [
        "storage",
        "00c6f590",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1e48 ["INT_ADD", "register:40f0:8", ["const:5a1e48:8", "const:4:8"]]
- 005a1e48 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a2168 ["INT_ADD", "register:40f0:8", ["const:5a2168:8", "const:4:8"]]
+ 005a2168 ["CALL", null, ["callee:00c58f30:8"]]
- 005a1e54 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a2174 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a1e58 ["COPY", "tmp:0:8", ["const:698:8"]]
- 005a1e58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a1e58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a1e58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a2178 ["COPY", "tmp:0:8", ["const:668:8"]]
+ 005a2178 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2178 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2178 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c01e366da672e14fb7673d83614c2427"></a>

### [`005a1f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1f00.md) → [`005a2220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2220.md) FUN_005a2220

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
      "definition_site": "005a2224",
      "incomplete_value": false,
      "site": "005a2228",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1f04",
      "incomplete_value": false,
      "site": "005a1f08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "005a2228",
      "DATA",
      [
        "storage",
        "00c6e698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2228",
      "DATA",
      [
        "storage",
        "00c6f668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1f00 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a2220 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a1f04 ["COPY", "tmp:0:8", ["const:698:8"]]
- 005a1f04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a1f04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a1f04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a2224 ["COPY", "tmp:0:8", ["const:668:8"]]
+ 005a2224 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2224 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2224 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-69e242b435a00f89d02deec25a7fbc15"></a>

### [`005a1f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1f10.md) → [`005a2230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2230.md) FUN_005a2230

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
      "definition_site": "005a2240",
      "incomplete_value": false,
      "site": "005a2248",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1f20",
      "incomplete_value": false,
      "site": "005a1f28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:698:8"
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
      "005a2248",
      "DATA",
      [
        "storage",
        "00c6e698",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2248",
      "DATA",
      [
        "storage",
        "00c6f668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1f1c ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a223c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a1f20 ["COPY", "tmp:0:8", ["const:698:8"]]
- 005a1f20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a1f20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a1f20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a2240 ["COPY", "tmp:0:8", ["const:668:8"]]
+ 005a2240 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2240 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2240 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a1f2c ["INT_ADD", "register:40f0:8", ["const:5a1f2c:8", "const:4:8"]]
- 005a1f2c ["CALL", null, ["callee:00c58f40:8"]]
+ 005a224c ["INT_ADD", "register:40f0:8", ["const:5a224c:8", "const:4:8"]]
+ 005a224c ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-2f654196e71dc4c41fdf3273c015a2f5"></a>

### [`005a1f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1f40.md) → [`005a2260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2260.md) FUN_005a2260

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a22c8",
      "incomplete_value": false,
      "site": "005a22cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1fa8",
      "incomplete_value": false,
      "site": "005a1fac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a22cc",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a22cc",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1f8c ["INT_ADD", "register:40f0:8", ["const:5a1f8c:8", "const:4:8"]]
- 005a1f8c ["CALL", null, ["callee:00c58f50:8"]]
+ 005a22ac ["INT_ADD", "register:40f0:8", ["const:5a22ac:8", "const:4:8"]]
+ 005a22ac ["CALL", null, ["callee:00c58f50:8"]]
- 005a1f9c ["INT_ADD", "register:40f0:8", ["const:5a1f9c:8", "const:4:8"]]
- 005a1f9c ["CALL", null, ["callee:00c58f50:8"]]
+ 005a22bc ["INT_ADD", "register:40f0:8", ["const:5a22bc:8", "const:4:8"]]
+ 005a22bc ["CALL", null, ["callee:00c58f50:8"]]
- 005a1fa4 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a22c4 ["COPY", "register:4048:8", ["const:c6e000:8"]]
~~~


<a id="compare-cd3afcb617d30a291fea8188c12664ce"></a>

### [`005a1fdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1fdc.md) → [`005a22fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a22fc.md) FUN_005a22fc

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
      "definition_site": "005a2300",
      "incomplete_value": false,
      "site": "005a2304",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1fe0",
      "incomplete_value": false,
      "site": "005a1fe4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
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
      "005a2304",
      "DATA",
      [
        "storage",
        "00c6e6e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2304",
      "DATA",
      [
        "storage",
        "00c6f6b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1fdc ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a22fc ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a1fe0 ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 005a1fe0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a1fe0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a1fe0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a2300 ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 005a2300 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2300 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2300 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a33635c5ce3490a6cfdb90eff9602090"></a>

### [`005a1fec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a1fec.md) → [`005a230c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a230c.md) FUN_005a230c

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
      "definition_site": "005a231c",
      "incomplete_value": false,
      "site": "005a2324",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:6b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a1ffc",
      "incomplete_value": false,
      "site": "005a2004",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:6e8:8"
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
      "005a2324",
      "DATA",
      [
        "storage",
        "00c6e6e8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2324",
      "DATA",
      [
        "storage",
        "00c6f6b8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a1ff8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a2318 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a1ffc ["COPY", "tmp:0:8", ["const:6e8:8"]]
- 005a1ffc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a1ffc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a1ffc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a231c ["COPY", "tmp:0:8", ["const:6b8:8"]]
+ 005a231c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a231c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a231c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a2008 ["INT_ADD", "register:40f0:8", ["const:5a2008:8", "const:4:8"]]
- 005a2008 ["CALL", null, ["callee:00c58f40:8"]]
+ 005a2328 ["INT_ADD", "register:40f0:8", ["const:5a2328:8", "const:4:8"]]
+ 005a2328 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-9f849b2e708cbce10c0b464b37b5677a"></a>

### [`005a2024`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a2024.md) → [`005a2344`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2344.md) _INIT_45

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a23e4",
      "incomplete_value": true,
      "site": "005a23fc",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:fe0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a20c4",
      "incomplete_value": true,
      "site": "005a20dc",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "005a2420",
      "incomplete_value": true,
      "site": "005a243c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a2100",
      "incomplete_value": true,
      "site": "005a211c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a2440",
      "incomplete_value": true,
      "site": "005a2484",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:f87:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a2120",
      "incomplete_value": true,
      "site": "005a2164",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a3000:8"
              ],
              [
                "leaf",
                "const:ebc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 40,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005a2380",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a23a4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a23c4",
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
      "005a2380",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a23a4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005a23c4",
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
- 005a2258 ["INT_ADD", "register:40f0:8", ["const:5a2258:8", "const:4:8"]]
- 005a2258 ["CALL", null, ["callee:00c58ed0:8"]]
+ 005a2578 ["INT_ADD", "register:40f0:8", ["const:5a2578:8", "const:4:8"]]
+ 005a2578 ["CALL", null, ["callee:00c58ed0:8"]]
- 005a204c ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005a236c ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 005a2050 ["COPY", "tmp:0:8", ["const:7c0:8"]]
- 005a2050 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005a2050 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005a2050 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005a2370 ["COPY", "tmp:0:8", ["const:780:8"]]
+ 005a2370 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005a2370 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005a2370 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-d163dd685f526f87bdfd5224c795e73b"></a>

### [`005a23b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a23b4.md) → [`005a26d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a26d4.md) FUN_005a26d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.90% / 新版 94.90%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a2844",
      "incomplete_value": true,
      "site": "005a2844",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:600:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a2524",
      "incomplete_value": true,
      "site": "005a2524",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:522:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a28fc",
      "incomplete_value": false,
      "site": "005a2904",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:708:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a25dc",
      "incomplete_value": false,
      "site": "005a25e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:738:8"
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
      "005a2704",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "005a2830",
      "READ",
      [
        "storage",
        "002bb522",
        null,
        "string"
      ]
    ],
    [
      "005a28e4",
      "DATA",
      [
        "storage",
        "00c6e810",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2704",
      "READ",
      [
        "storage",
        "002b72b4",
        null,
        "string"
      ]
    ],
    [
      "005a2830",
      "READ",
      [
        "storage",
        "002bb600",
        null,
        "string"
      ]
    ],
    [
      "005a28e4",
      "DATA",
      [
        "storage",
        "00c6f7e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a23d8 ["COPY", "tmp:0:8", ["const:1e5:8"]]
- 005a23d8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005a23d8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005a23d8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005a26f8 ["COPY", "tmp:0:8", ["const:2b4:8"]]
+ 005a26f8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005a26f8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005a26f8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005a2410 ["INT_ADD", "register:40f0:8", ["const:5a2410:8", "const:4:8"]]
- 005a2410 ["CALL", null, ["callee:004413ec:8"]]
+ 005a2730 ["INT_ADD", "register:40f0:8", ["const:5a2730:8", "const:4:8"]]
+ 005a2730 ["CALL", null, ["callee:004413ec:8"]]
- 005a242c ["COPY", "register:0:8", ["register:4040:8"]]
- 005a242c ["INT_ADD", "register:40f0:8", ["const:5a242c:8", "const:4:8"]]
- 005a242c ["CALLIND", null, ["register:0:8"]]
+ 005a274c ["COPY", "register:0:8", ["register:4040:8"]]
+ 005a274c ["INT_ADD", "register:40f0:8", ["const:5a274c:8", "const:4:8"]]
+ 005a274c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fbf4e409c0ae6cda2262121476a201e5"></a>

### [`005a2774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a2774.md) → [`005a2a94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2a94.md) FUN_005a2a94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a2ab0",
      "incomplete_value": true,
      "site": "005a2ab4",
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
      "definition_site": "005a2790",
      "incomplete_value": true,
      "site": "005a2794",
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
      "005a2aa8",
      "READ",
      [
        "storage",
        "00c9b3f0",
        null,
        "pointer"
      ]
    ],
    [
      "005a2ab4",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2aa8",
      "READ",
      [
        "storage",
        "00c9c3c0",
        null,
        "pointer"
      ]
    ],
    [
      "005a2ab4",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a2780 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005a2aa0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005a2788 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3f0:8"]]
- 005a2788 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005a2aa8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3c0:8"]]
+ 005a2aa8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005a27a0 ["INT_ADD", "register:40f0:8", ["const:5a27a0:8", "const:4:8"]]
- 005a27a0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a2ac0 ["INT_ADD", "register:40f0:8", ["const:5a2ac0:8", "const:4:8"]]
+ 005a2ac0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ea41c928b1ae9978db895a1672d6f675"></a>

### [`005a27c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a27c4.md) → [`005a2ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2ae4.md) FUN_005a2ae4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a2aec",
      "incomplete_value": false,
      "site": "005a2af0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a27cc",
      "incomplete_value": false,
      "site": "005a27d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a2af0",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a2af0",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a27c8 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a2ae8 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 005a27cc ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a27cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a27cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a27cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a2aec ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 005a2aec ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a2aec ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a2aec ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005a27f0 ["INT_ADD", "register:40f0:8", ["const:5a27f0:8", "const:4:8"]]
- 005a27f0 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a2b10 ["INT_ADD", "register:40f0:8", ["const:5a2b10:8", "const:4:8"]]
+ 005a2b10 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0fd6d2c3b511abec74caf97f49981ecb"></a>

### [`005a2814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a2814.md) → [`005a2b34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2b34.md) FUN_005a2b34

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
      "definition_site": "005a2b44",
      "incomplete_value": false,
      "site": "005a2b4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:7e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a2824",
      "incomplete_value": false,
      "site": "005a282c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:810:8"
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
      "005a2b4c",
      "DATA",
      [
        "storage",
        "00c6e810",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2b4c",
      "DATA",
      [
        "storage",
        "00c6f7e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a2820 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a2b40 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a2824 ["COPY", "tmp:0:8", ["const:810:8"]]
- 005a2824 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a2824 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a2824 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a2b44 ["COPY", "tmp:0:8", ["const:7e0:8"]]
+ 005a2b44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2b44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2b44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a2830 ["INT_ADD", "register:40f0:8", ["const:5a2830:8", "const:4:8"]]
- 005a2830 ["CALL", null, ["callee:00c58f40:8"]]
+ 005a2b50 ["INT_ADD", "register:40f0:8", ["const:5a2b50:8", "const:4:8"]]
+ 005a2b50 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-5a21dcbee538ee8c5b050785ba0a27a6"></a>

### [`005a2844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a2844.md) → [`005a2b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2b64.md) FUN_005a2b64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a2b6c",
      "incomplete_value": true,
      "site": "005a2b70",
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
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a284c",
      "incomplete_value": true,
      "site": "005a2850",
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
            "const:ad0:8"
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
      "005a2b70",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a2b70",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a2848 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a2b68 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 005a284c ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a284c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a284c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a284c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a2b6c ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 005a2b6c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a2b6c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a2b6c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9f9d343b2eb5450c65f53d11a3889d7f"></a>

### [`005a2868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a2868.md) → [`005a2b88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2b88.md) FUN_005a2b88

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
      "definition_site": "005a2b8c",
      "incomplete_value": false,
      "site": "005a2b90",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a286c",
      "incomplete_value": false,
      "site": "005a2870",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:860:8"
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
      "005a2b90",
      "DATA",
      [
        "storage",
        "00c6e860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2b90",
      "DATA",
      [
        "storage",
        "00c6f830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a2868 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a2b88 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a286c ["COPY", "tmp:0:8", ["const:860:8"]]
- 005a286c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a286c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a286c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a2b8c ["COPY", "tmp:0:8", ["const:830:8"]]
+ 005a2b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-acf8bd15d3b8bfb4e97b05e2b9e76568"></a>

### [`005a2878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a2878.md) → [`005a2b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2b98.md) FUN_005a2b98

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
      "definition_site": "005a2ba8",
      "incomplete_value": false,
      "site": "005a2bb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a2888",
      "incomplete_value": false,
      "site": "005a2890",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:860:8"
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
      "005a2bb0",
      "DATA",
      [
        "storage",
        "00c6e860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a2bb0",
      "DATA",
      [
        "storage",
        "00c6f830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a2884 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a2ba4 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a2888 ["COPY", "tmp:0:8", ["const:860:8"]]
- 005a2888 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a2888 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a2888 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a2ba8 ["COPY", "tmp:0:8", ["const:830:8"]]
+ 005a2ba8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2ba8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a2ba8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a2894 ["INT_ADD", "register:40f0:8", ["const:5a2894:8", "const:4:8"]]
- 005a2894 ["CALL", null, ["callee:00c58f40:8"]]
+ 005a2bb4 ["INT_ADD", "register:40f0:8", ["const:5a2bb4:8", "const:4:8"]]
+ 005a2bb4 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-ce53a27d7553177d9a61de99e3da1629"></a>

### [`005a28b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a28b0.md) → [`005a2bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2bd0.md) _INIT_46

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.40% / 新版 90.40%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a2c0c",
      "incomplete_value": true,
      "site": "005a2c28",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:35:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a28ec",
      "incomplete_value": true,
      "site": "005a2908",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "005a2cac",
      "incomplete_value": true,
      "site": "005a2cc8",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:f50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a298c",
      "incomplete_value": true,
      "site": "005a29a8",
      "value": [
        "LOAD",
        "16",
        [
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
      "005a2c0c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a2c30",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a2c50",
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
      "005a2c0c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a2c30",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005a2c50",
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
- 005a28d8 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005a2bf8 ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 005a28dc ["COPY", "tmp:0:8", ["const:7d8:8"]]
- 005a28dc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005a28dc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005a28dc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005a2bfc ["COPY", "tmp:0:8", ["const:798:8"]]
+ 005a2bfc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005a2bfc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005a2bfc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 005a28e4 ["COPY", "register:4048:8", ["const:2b7000:8"]]
+ 005a2c04 ["COPY", "register:4048:8", ["const:2b8000:8"]]
~~~


<a id="compare-179e667ba27858819ba09a298de38840"></a>

### [`005a2c40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a2c40.md) → [`005a2f60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a2/005a2f60.md) _INIT_47

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a3188",
      "incomplete_value": false,
      "site": "005a3194",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca7000:8"
          ],
          [
            "leaf",
            "const:7b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a2e68",
      "incomplete_value": false,
      "site": "005a2e74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:7f0:8"
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
      "definition_site": "005a3190",
      "incomplete_value": false,
      "site": "005a3194",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a2e70",
      "incomplete_value": false,
      "site": "005a2e74",
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
            "const:60:8"
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
      "005a2f9c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a2fc0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a2fe0",
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
      "005a2f9c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a2fc0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005a2fe0",
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
- 005a2e74 ["INT_ADD", "register:40f0:8", ["const:5a2e74:8", "const:4:8"]]
- 005a2e74 ["CALL", null, ["callee:00c58ed0:8"]]
+ 005a3194 ["INT_ADD", "register:40f0:8", ["const:5a3194:8", "const:4:8"]]
+ 005a3194 ["CALL", null, ["callee:00c58ed0:8"]]
- 005a2c68 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005a2f88 ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 005a2c6c ["COPY", "tmp:0:8", ["const:7f0:8"]]
- 005a2c6c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005a2c6c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005a2c6c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005a2f8c ["COPY", "tmp:0:8", ["const:7b0:8"]]
+ 005a2f8c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005a2f8c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005a2f8c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-45c7ba9f84196b8676e034a3fd447802"></a>

### [`005a2fd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a2/005a2fd0.md) → [`005a32f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a3/005a32f0.md) _INIT_48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.40% / 新版 90.40%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a332c",
      "incomplete_value": true,
      "site": "005a3348",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a300c",
      "incomplete_value": true,
      "site": "005a3028",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a3520",
      "incomplete_value": true,
      "site": "005a3524",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a3200",
      "incomplete_value": true,
      "site": "005a3204",
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
            "const:60:8"
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
      "005a332c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a3350",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a3370",
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
      "005a332c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a3350",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005a3370",
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
- 005a3204 ["INT_ADD", "register:40f0:8", ["const:5a3204:8", "const:4:8"]]
- 005a3204 ["CALL", null, ["callee:00c58ed0:8"]]
+ 005a3524 ["INT_ADD", "register:40f0:8", ["const:5a3524:8", "const:4:8"]]
+ 005a3524 ["CALL", null, ["callee:00c58ed0:8"]]
- 005a2ff8 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005a3318 ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 005a2ffc ["COPY", "tmp:0:8", ["const:808:8"]]
- 005a2ffc ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005a2ffc ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005a2ffc ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005a331c ["COPY", "tmp:0:8", ["const:7c8:8"]]
+ 005a331c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005a331c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005a331c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-3ecbf68a88cb472dabf500e03ae23b1e"></a>

### [`005a3360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3360.md) → [`005a3680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a3/005a3680.md) FUN_005a3680

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005a42e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42e0.md) [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) [`005a45d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a45d4.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005a4600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4600.md) [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) [`005a48f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a48f4.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.87% / 新版 97.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a3a8c",
      "incomplete_value": true,
      "site": "005a3a98",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3c6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a376c",
      "incomplete_value": true,
      "site": "005a3778",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 74,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005a36b8",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "005a3820",
      "READ",
      [
        "storage",
        "002a9df6",
        null,
        "string"
      ]
    ],
    [
      "005a398c",
      "READ",
      [
        "storage",
        "002b71f8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005a36b8",
      "READ",
      [
        "storage",
        "002b72b4",
        null,
        "string"
      ]
    ],
    [
      "005a3820",
      "READ",
      [
        "storage",
        "002a9ec3",
        null,
        "string"
      ]
    ],
    [
      "005a398c",
      "READ",
      [
        "storage",
        "002b72c7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a338c ["COPY", "tmp:0:8", ["const:1e5:8"]]
- 005a338c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005a338c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005a338c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005a36ac ["COPY", "tmp:0:8", ["const:2b4:8"]]
+ 005a36ac ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005a36ac ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005a36ac ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 005a33c4 ["INT_ADD", "register:40f0:8", ["const:5a33c4:8", "const:4:8"]]
- 005a33c4 ["CALL", null, ["callee:004413ec:8"]]
+ 005a36e4 ["INT_ADD", "register:40f0:8", ["const:5a36e4:8", "const:4:8"]]
+ 005a36e4 ["CALL", null, ["callee:004413ec:8"]]
- 005a33e0 ["COPY", "register:0:8", ["register:4040:8"]]
- 005a33e0 ["INT_ADD", "register:40f0:8", ["const:5a33e0:8", "const:4:8"]]
- 005a33e0 ["CALLIND", null, ["register:0:8"]]
+ 005a3700 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005a3700 ["INT_ADD", "register:40f0:8", ["const:5a3700:8", "const:4:8"]]
+ 005a3700 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-644a28548e12de539fa7d94321c7ff47"></a>

### [`005a3fd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3fd8.md) → [`005a42f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a42f8.md) FUN_005a42f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a4314",
      "incomplete_value": false,
      "site": "005a431c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a3ff4",
      "incomplete_value": false,
      "site": "005a3ffc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
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
      "definition_site": "005a432c",
      "incomplete_value": true,
      "site": "005a432c",
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
            "const:8a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a400c",
      "incomplete_value": true,
      "site": "005a400c",
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
            "const:8d0:8"
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
      "005a431c",
      "DATA",
      [
        "storage",
        "00c6e9d8",
        null,
        "undefined *"
      ]
    ],
    [
      "005a432c",
      "DATA",
      [
        "storage",
        "00c6e8d0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a431c",
      "DATA",
      [
        "storage",
        "00c6f9a8",
        null,
        "undefined *"
      ]
    ],
    [
      "005a432c",
      "DATA",
      [
        "storage",
        "00c6f8a0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a3fec ["INT_ADD", "register:40f0:8", ["const:5a3fec:8", "const:4:8"]]
- 005a3fec ["CALL", null, ["callee:00c58f30:8"]]
+ 005a430c ["INT_ADD", "register:40f0:8", ["const:5a430c:8", "const:4:8"]]
+ 005a430c ["CALL", null, ["callee:00c58f30:8"]]
- 005a3ff0 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a4310 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a3ff4 ["COPY", "tmp:0:8", ["const:9d8:8"]]
- 005a3ff4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a3ff4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a3ff4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a4314 ["COPY", "tmp:0:8", ["const:9a8:8"]]
+ 005a4314 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4314 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4314 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f2bd141967a7f6040ba1ef75fa354720"></a>

### [`005a4070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4070.md) → [`005a4390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4390.md) FUN_005a4390

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005a4548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4548.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005a4868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4868.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a43c4",
      "incomplete_value": false,
      "site": "005a43c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a40a4",
      "incomplete_value": false,
      "site": "005a40a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a43c8",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a43c8",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a4090 ["INT_ADD", "register:40f0:8", ["const:5a4090:8", "const:4:8"]]
- 005a4090 ["CALL", null, ["callee:005a4868:8"]]
+ 005a43b0 ["INT_ADD", "register:40f0:8", ["const:5a43b0:8", "const:4:8"]]
+ 005a43b0 ["CALL", null, ["callee:005a4868:8"]]
- 005a4098 ["INT_ADD", "register:40f0:8", ["const:5a4098:8", "const:4:8"]]
- 005a4098 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a43b8 ["INT_ADD", "register:40f0:8", ["const:5a43b8:8", "const:4:8"]]
+ 005a43b8 ["CALL", null, ["callee:00c58f50:8"]]
- 005a40a0 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a43c0 ["COPY", "register:4048:8", ["const:c6e000:8"]]
~~~


<a id="compare-e02376912f22017abb9ff388291570e1"></a>

### [`005a40cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a40cc.md) → [`005a43ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a43ec.md) FUN_005a43ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005a4548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4548.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005a4868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4868.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a4420",
      "incomplete_value": false,
      "site": "005a4424",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a4100",
      "incomplete_value": false,
      "site": "005a4104",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a4424",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a4424",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a40ec ["INT_ADD", "register:40f0:8", ["const:5a40ec:8", "const:4:8"]]
- 005a40ec ["CALL", null, ["callee:005a4868:8"]]
+ 005a440c ["INT_ADD", "register:40f0:8", ["const:5a440c:8", "const:4:8"]]
+ 005a440c ["CALL", null, ["callee:005a4868:8"]]
- 005a40f4 ["INT_ADD", "register:40f0:8", ["const:5a40f4:8", "const:4:8"]]
- 005a40f4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4414 ["INT_ADD", "register:40f0:8", ["const:5a4414:8", "const:4:8"]]
+ 005a4414 ["CALL", null, ["callee:00c58f50:8"]]
- 005a40fc ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a441c ["COPY", "register:4048:8", ["const:c6e000:8"]]
~~~


<a id="compare-6eca4f2856961ca704e3849f23cf61ca"></a>

### [`005a42ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42ac.md) → [`005a45cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a45cc.md) FUN_005a45cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005a4124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4124.md) [`005a45d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a45d4.md) [`0079cc68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079cc68.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`005a4444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4444.md) [`005a48f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a48f4.md) [`0079d044`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079d044.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a45d8",
      "incomplete_value": false,
      "site": "005a45dc",
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
      "definition_site": "005a42b8",
      "incomplete_value": false,
      "site": "005a42bc",
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
      "005a45d8",
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
      "005a45d8",
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
- 005a42bc ["INT_ADD", "register:40f0:8", ["const:5a42bc:8", "const:4:8"]]
- 005a42bc ["CALL", null, ["callee:0043bad8:8"]]
+ 005a45dc ["INT_ADD", "register:40f0:8", ["const:5a45dc:8", "const:4:8"]]
+ 005a45dc ["CALL", null, ["callee:0043bad8:8"]]
- 005a42b4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005a45d4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005a42b8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005a42b8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005a42b8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005a42b8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005a45d8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005a45d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005a45d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005a45d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-3e3c176b861e443de3a8825998a2dd77"></a>

### [`005a4498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4498.md) → [`005a47b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a47b8.md) FUN_005a47b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 19件 [`005a3360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3360.md) [`005a42e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a42e0.md) [`0079cfcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079c/0079cfcc.md) [`0079d624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0079d/0079d624.md) [`007a008c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007a0/007a008c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 19件 [`005a3680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a3/005a3680.md) [`005a4600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4600.md) [`0079d3a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079d3a8.md) [`0079da00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0079d/0079da00.md) [`007a0468`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007a0/007a0468.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a47c4",
      "incomplete_value": false,
      "site": "005a47c8",
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
      "definition_site": "005a44a4",
      "incomplete_value": false,
      "site": "005a44a8",
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
      "005a47c4",
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
      "005a47c4",
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
- 005a44a8 ["INT_ADD", "register:40f0:8", ["const:5a44a8:8", "const:4:8"]]
- 005a44a8 ["CALL", null, ["callee:0043bad8:8"]]
+ 005a47c8 ["INT_ADD", "register:40f0:8", ["const:5a47c8:8", "const:4:8"]]
+ 005a47c8 ["CALL", null, ["callee:0043bad8:8"]]
- 005a44a0 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005a47c0 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005a44a4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005a44a4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005a44a4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005a44a4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005a47c4 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005a47c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005a47c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005a47c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-22fa2c20acb532aa4814418d267f6cdf"></a>

### [`005a495c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a495c.md) → [`005a4c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4c7c.md) FUN_005a4c7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005a3360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a3/005a3360.md) · 呼出先 3件 [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`005a4124`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4124.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005a3680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a3/005a3680.md) · 呼出先 3件 [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`005a4444`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4444.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.50% / 新版 92.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a4cfc",
      "incomplete_value": false,
      "site": "005a4cfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:880:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a49dc",
      "incomplete_value": false,
      "site": "005a49dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:8b0:8"
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
      "005a4cc0",
      "DATA",
      [
        "storage",
        "00c6e988",
        null,
        "undefined *"
      ]
    ],
    [
      "005a4cfc",
      "DATA",
      [
        "storage",
        "00c6e8b0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a4cc0",
      "DATA",
      [
        "storage",
        "00c6f958",
        null,
        "undefined *"
      ]
    ],
    [
      "005a4cfc",
      "DATA",
      [
        "storage",
        "00c6f880",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a4984 ["INT_ADD", "register:40f0:8", ["const:5a4984:8", "const:4:8"]]
- 005a4984 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a4ca4 ["INT_ADD", "register:40f0:8", ["const:5a4ca4:8", "const:4:8"]]
+ 005a4ca4 ["CALL", null, ["callee:00c58f30:8"]]
- 005a4990 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a4cb0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a4994 ["COPY", "tmp:0:8", ["const:988:8"]]
- 005a4994 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a4994 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a4994 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a4cb4 ["COPY", "tmp:0:8", ["const:958:8"]]
+ 005a4cb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4cb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4cb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1362a5ae5915c044941acae11ea35b84"></a>

### [`005a4a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4a3c.md) → [`005a4d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4d5c.md) FUN_005a4d5c

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
      "definition_site": "005a4d60",
      "incomplete_value": false,
      "site": "005a4d64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:958:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a4a40",
      "incomplete_value": false,
      "site": "005a4a44",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:988:8"
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
      "005a4d64",
      "DATA",
      [
        "storage",
        "00c6e988",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a4d64",
      "DATA",
      [
        "storage",
        "00c6f958",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a4a3c ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a4d5c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a4a40 ["COPY", "tmp:0:8", ["const:988:8"]]
- 005a4a40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a4a40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a4a40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a4d60 ["COPY", "tmp:0:8", ["const:958:8"]]
+ 005a4d60 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4d60 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4d60 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fab496fa9fb79f4777f19a5e6d35d162"></a>

### [`005a4a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4a7c.md) → [`005a4d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4d9c.md) FUN_005a4d9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005a4548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4548.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005a4868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4868.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.30% / 新版 91.30%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a4dd0",
      "incomplete_value": false,
      "site": "005a4dd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a4ab0",
      "incomplete_value": false,
      "site": "005a4ab4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a4dd4",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a4dd4",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a4a9c ["INT_ADD", "register:40f0:8", ["const:5a4a9c:8", "const:4:8"]]
- 005a4a9c ["CALL", null, ["callee:005a4868:8"]]
+ 005a4dbc ["INT_ADD", "register:40f0:8", ["const:5a4dbc:8", "const:4:8"]]
+ 005a4dbc ["CALL", null, ["callee:005a4868:8"]]
- 005a4aa4 ["INT_ADD", "register:40f0:8", ["const:5a4aa4:8", "const:4:8"]]
- 005a4aa4 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a4dc4 ["INT_ADD", "register:40f0:8", ["const:5a4dc4:8", "const:4:8"]]
+ 005a4dc4 ["CALL", null, ["callee:00c58f50:8"]]
- 005a4aac ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a4dcc ["COPY", "register:4048:8", ["const:c6e000:8"]]
~~~


<a id="compare-54371feaf4c94c7b644613186d0faf02"></a>

### [`005a4adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4adc.md) → [`005a4dfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4dfc.md) FUN_005a4dfc

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
      "definition_site": "005a4e00",
      "incomplete_value": false,
      "site": "005a4e04",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a4ae0",
      "incomplete_value": false,
      "site": "005a4ae4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
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
      "005a4e04",
      "DATA",
      [
        "storage",
        "00c6e9d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a4e04",
      "DATA",
      [
        "storage",
        "00c6f9a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a4adc ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a4dfc ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a4ae0 ["COPY", "tmp:0:8", ["const:9d8:8"]]
- 005a4ae0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a4ae0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a4ae0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a4e00 ["COPY", "tmp:0:8", ["const:9a8:8"]]
+ 005a4e00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4e00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4e00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-27d5ab2e7b7bef2051c28b9d853cf8db"></a>

### [`005a4aec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4aec.md) → [`005a4e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4e0c.md) FUN_005a4e0c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a4e1c",
      "incomplete_value": true,
      "site": "005a4e24",
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
            "const:9a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a4afc",
      "incomplete_value": true,
      "site": "005a4b04",
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
            "const:9d8:8"
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
      "005a4e24",
      "DATA",
      [
        "storage",
        "00c6e9d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a4e24",
      "DATA",
      [
        "storage",
        "00c6f9a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a4af8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a4e18 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a4afc ["COPY", "tmp:0:8", ["const:9d8:8"]]
- 005a4afc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a4afc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a4afc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a4e1c ["COPY", "tmp:0:8", ["const:9a8:8"]]
+ 005a4e1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4e1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a4e1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a4b08 ["INT_ADD", "register:40f0:8", ["const:5a4b08:8", "const:4:8"]]
- 005a4b08 ["CALL", null, ["callee:00c58f40:8"]]
+ 005a4e28 ["INT_ADD", "register:40f0:8", ["const:5a4e28:8", "const:4:8"]]
+ 005a4e28 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-09eb192087c414c115212d79d6800d5c"></a>

### [`005a4b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4b24.md) → [`005a4e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a4/005a4e44.md) _INIT_49

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a4f00",
      "incomplete_value": true,
      "site": "005a4f1c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:643:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a4be0",
      "incomplete_value": true,
      "site": "005a4bfc",
      "value": [
        "LOAD",
        "16",
        [
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
      "005a4e80",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a4ea4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a4ec4",
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
      "005a4e80",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a4ea4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005a4ec4",
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
- 005a4b4c ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005a4e6c ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 005a4b50 ["COPY", "tmp:0:8", ["const:820:8"]]
- 005a4b50 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005a4b50 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005a4b50 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005a4e70 ["COPY", "tmp:0:8", ["const:7e0:8"]]
+ 005a4e70 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005a4e70 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005a4e70 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 005a4b58 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-40b9cf1862513c97b729b15fe203fe06"></a>

### [`005a5058`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5058.md) → [`005a5378`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5378.md) FUN_005a5378

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`007adf74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007adf74.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)
- 新版 呼出元 1件 [`007ae39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ae/007ae39c.md) · 呼出先 1件 [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5394",
      "incomplete_value": false,
      "site": "005a5398",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:a18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5074",
      "incomplete_value": false,
      "site": "005a5078",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:a48:8"
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
      "005a5398",
      "DATA",
      [
        "storage",
        "00c6ea48",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a5398",
      "DATA",
      [
        "storage",
        "00c6fa18",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a506c ["INT_ADD", "register:40f0:8", ["const:5a506c:8", "const:4:8"]]
- 005a506c ["CALL", null, ["callee:0059bc68:8"]]
+ 005a538c ["INT_ADD", "register:40f0:8", ["const:5a538c:8", "const:4:8"]]
+ 005a538c ["CALL", null, ["callee:0059bc68:8"]]
- 005a5070 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a5390 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5074 ["COPY", "tmp:0:8", ["const:a48:8"]]
- 005a5074 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5074 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5074 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a5394 ["COPY", "tmp:0:8", ["const:a18:8"]]
+ 005a5394 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5394 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5394 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6ffa525d35653d7b2a9e504aca737158"></a>

### [`005a50a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a50a4.md) → [`005a53c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a53c4.md) FUN_005a53c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

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
      "definition_site": "005a53d0",
      "incomplete_value": true,
      "site": "005a53e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:101:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a50b0",
      "incomplete_value": true,
      "site": "005a50c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:23:8"
              ]
            ]
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
      "005a53d0",
      "READ",
      [
        "storage",
        "002b5023",
        null,
        "string"
      ]
    ],
    [
      "005a53d8",
      "READ",
      [
        "storage",
        "002b5031",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005a53d0",
      "READ",
      [
        "storage",
        "002b5101",
        null,
        "string"
      ]
    ],
    [
      "005a53d8",
      "READ",
      [
        "storage",
        "002b510f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a50ac ["COPY", "tmp:0:8", ["const:23:8"]]
- 005a50ac ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005a50ac ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005a50ac ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005a53cc ["COPY", "tmp:0:8", ["const:101:8"]]
+ 005a53cc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005a53cc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005a53cc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-e6ec98c1d0a9d2b0a4b5f173201b2caf"></a>

### [`005a51d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a51d0.md) → [`005a54f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a54f0.md) FUN_005a54f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 72.22% / 新版 72.22%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a550c",
      "incomplete_value": false,
      "site": "005a5514",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:b20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a51ec",
      "incomplete_value": false,
      "site": "005a51f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:b50:8"
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
      "definition_site": "005a5524",
      "incomplete_value": false,
      "site": "005a5524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:a70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5204",
      "incomplete_value": false,
      "site": "005a5204",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
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
      "005a5514",
      "DATA",
      [
        "storage",
        "00c6eb50",
        null,
        "undefined *"
      ]
    ],
    [
      "005a5524",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a5514",
      "DATA",
      [
        "storage",
        "00c6fb20",
        null,
        "undefined *"
      ]
    ],
    [
      "005a5524",
      "DATA",
      [
        "storage",
        "00c6fa70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a51e4 ["INT_ADD", "register:40f0:8", ["const:5a51e4:8", "const:4:8"]]
- 005a51e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a5504 ["INT_ADD", "register:40f0:8", ["const:5a5504:8", "const:4:8"]]
+ 005a5504 ["CALL", null, ["callee:00c58f30:8"]]
- 005a51e8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a5508 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a51ec ["COPY", "tmp:0:8", ["const:b50:8"]]
- 005a51ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a51ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a51ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a550c ["COPY", "tmp:0:8", ["const:b20:8"]]
+ 005a550c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a550c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a550c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a189c86bad514abbbab7a089931c0987"></a>

### [`005a5218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5218.md) → [`005a5538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5538.md) FUN_005a5538

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.00% / 新版 88.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5564",
      "incomplete_value": false,
      "site": "005a5568",
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
                "const:c6e000:8"
              ],
              [
                "leaf",
                "const:ab0:8"
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
      "definition_site": "005a5244",
      "incomplete_value": false,
      "site": "005a5248",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "005a5568",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a5568",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5234 ["INT_ADD", "register:40f0:8", ["const:5a5234:8", "const:4:8"]]
- 005a5234 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a5554 ["INT_ADD", "register:40f0:8", ["const:5a5554:8", "const:4:8"]]
+ 005a5554 ["CALL", null, ["callee:00c58f50:8"]]
- 005a5238 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005a5558 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005a523c ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005a523c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a523c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a523c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a555c ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 005a555c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a555c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a555c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8c2795b8f305ea2a266f7ecaacdf09c4"></a>

### [`005a527c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a527c.md) → [`005a559c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a559c.md) FUN_005a559c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a55c8",
      "incomplete_value": false,
      "site": "005a55cc",
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
                "const:c6e000:8"
              ],
              [
                "leaf",
                "const:ab0:8"
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
      "definition_site": "005a52a8",
      "incomplete_value": false,
      "site": "005a52ac",
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
                "const:c6d000:8"
              ],
              [
                "leaf",
                "const:ae0:8"
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
      "005a55cc",
      "DATA",
      [
        "storage",
        "00c6daf0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a55cc",
      "DATA",
      [
        "storage",
        "00c6eac0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5298 ["INT_ADD", "register:40f0:8", ["const:5a5298:8", "const:4:8"]]
- 005a5298 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a55b8 ["INT_ADD", "register:40f0:8", ["const:5a55b8:8", "const:4:8"]]
+ 005a55b8 ["CALL", null, ["callee:00c58f50:8"]]
- 005a529c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005a55bc ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005a52a0 ["COPY", "tmp:0:8", ["const:ae0:8"]]
- 005a52a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a52a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a52a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a55c0 ["COPY", "tmp:0:8", ["const:ab0:8"]]
+ 005a55c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a55c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a55c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2d9c5b94df3a1d64677143d57c9b8cb1"></a>

### [`005a52dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a52dc.md) → [`005a55fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a55fc.md) FUN_005a55fc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5604",
      "incomplete_value": false,
      "site": "005a5608",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a52e4",
      "incomplete_value": false,
      "site": "005a52e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a5608",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a5608",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a52e0 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a5600 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 005a52e4 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a52e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a52e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a52e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a5604 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 005a5604 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a5604 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a5604 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005a5308 ["INT_ADD", "register:40f0:8", ["const:5a5308:8", "const:4:8"]]
- 005a5308 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a5628 ["INT_ADD", "register:40f0:8", ["const:5a5628:8", "const:4:8"]]
+ 005a5628 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-c2a8e17d9c48cabebba3e19d1b041089"></a>

### [`005a531c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a531c.md) → [`005a563c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a563c.md) FUN_005a563c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005a4eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a4/005a4eb4.md) · 呼出先 4件 [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005a51d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a51d4.md) · 呼出先 4件 [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.84% / 新版 91.84%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5678",
      "incomplete_value": false,
      "site": "005a5680",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5358",
      "incomplete_value": false,
      "site": "005a5360",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:b00:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a56bc",
      "incomplete_value": false,
      "site": "005a56c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:9f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a539c",
      "incomplete_value": false,
      "site": "005a53a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:a28:8"
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
      "005a5680",
      "DATA",
      [
        "storage",
        "00c6eb00",
        null,
        "undefined *"
      ]
    ],
    [
      "005a56c0",
      "DATA",
      [
        "storage",
        "00c6ea28",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a5680",
      "DATA",
      [
        "storage",
        "00c6fad0",
        null,
        "undefined *"
      ]
    ],
    [
      "005a56c0",
      "DATA",
      [
        "storage",
        "00c6f9f8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5350 ["INT_ADD", "register:40f0:8", ["const:5a5350:8", "const:4:8"]]
- 005a5350 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a5670 ["INT_ADD", "register:40f0:8", ["const:5a5670:8", "const:4:8"]]
+ 005a5670 ["CALL", null, ["callee:00c58f30:8"]]
- 005a5354 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a5674 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5358 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 005a5358 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5358 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5358 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a5678 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 005a5678 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5678 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5678 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7bd56a66eb7fd9e4ded5357de1c162b0"></a>

### [`005a541c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a541c.md) → [`005a573c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a573c.md) FUN_005a573c

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
      "definition_site": "005a5740",
      "incomplete_value": false,
      "site": "005a5744",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5420",
      "incomplete_value": false,
      "site": "005a5424",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:b00:8"
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
      "005a5744",
      "DATA",
      [
        "storage",
        "00c6eb00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a5744",
      "DATA",
      [
        "storage",
        "00c6fad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a541c ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a573c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5420 ["COPY", "tmp:0:8", ["const:b00:8"]]
- 005a5420 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5420 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5420 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a5740 ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 005a5740 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5740 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5740 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ad1475f13b2b8b204490d0dd327fcbd2"></a>

### [`005a542c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a542c.md) → [`005a574c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a574c.md) FUN_005a574c

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
      "definition_site": "005a575c",
      "incomplete_value": false,
      "site": "005a5764",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a543c",
      "incomplete_value": false,
      "site": "005a5444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:b00:8"
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
      "005a5764",
      "DATA",
      [
        "storage",
        "00c6eb00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a5764",
      "DATA",
      [
        "storage",
        "00c6fad0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5438 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a5758 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a543c ["COPY", "tmp:0:8", ["const:b00:8"]]
- 005a543c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a543c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a543c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a575c ["COPY", "tmp:0:8", ["const:ad0:8"]]
+ 005a575c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a575c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a575c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a5448 ["INT_ADD", "register:40f0:8", ["const:5a5448:8", "const:4:8"]]
- 005a5448 ["CALL", null, ["callee:00c58f40:8"]]
+ 005a5768 ["INT_ADD", "register:40f0:8", ["const:5a5768:8", "const:4:8"]]
+ 005a5768 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-4a097a23b1f0dffa8b01bf3fab3f4fa6"></a>

### [`005a545c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a545c.md) → [`005a577c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a577c.md) FUN_005a577c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5784",
      "incomplete_value": false,
      "site": "005a5788",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5464",
      "incomplete_value": false,
      "site": "005a5468",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a5788",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a5788",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5460 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a5780 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 005a5464 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a5464 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a5464 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a5464 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a5784 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 005a5784 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a5784 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a5784 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1d89b5f22d276c3b1b1a426a676dfe5b"></a>

### [`005a5480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5480.md) → [`005a57a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a57a0.md) FUN_005a57a0

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
      "definition_site": "005a57a4",
      "incomplete_value": false,
      "site": "005a57a8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:b20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5484",
      "incomplete_value": false,
      "site": "005a5488",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:b50:8"
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
      "005a57a8",
      "DATA",
      [
        "storage",
        "00c6eb50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a57a8",
      "DATA",
      [
        "storage",
        "00c6fb20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5480 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a57a0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5484 ["COPY", "tmp:0:8", ["const:b50:8"]]
- 005a5484 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5484 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5484 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a57a4 ["COPY", "tmp:0:8", ["const:b20:8"]]
+ 005a57a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a57a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a57a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b27d409201babcbd1284d44240339dce"></a>

### [`005a5490`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5490.md) → [`005a57b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a57b0.md) FUN_005a57b0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a57c0",
      "incomplete_value": true,
      "site": "005a57c8",
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
            "const:b20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a54a0",
      "incomplete_value": true,
      "site": "005a54a8",
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
            "const:b50:8"
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
      "005a57c8",
      "DATA",
      [
        "storage",
        "00c6eb50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a57c8",
      "DATA",
      [
        "storage",
        "00c6fb20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a549c ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a57bc ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a54a0 ["COPY", "tmp:0:8", ["const:b50:8"]]
- 005a54a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a54a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a54a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a57c0 ["COPY", "tmp:0:8", ["const:b20:8"]]
+ 005a57c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a57c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a57c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a54ac ["INT_ADD", "register:40f0:8", ["const:5a54ac:8", "const:4:8"]]
- 005a54ac ["CALL", null, ["callee:00c58f40:8"]]
+ 005a57cc ["INT_ADD", "register:40f0:8", ["const:5a57cc:8", "const:4:8"]]
+ 005a57cc ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-4e3a25dfa44481e6a2b7ac4ea499454d"></a>

### [`005a54c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a54c8.md) → [`005a57e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a57e8.md) _INIT_50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.83% / 新版 89.83%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5824",
      "incomplete_value": true,
      "site": "005a5840",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a5504",
      "incomplete_value": true,
      "site": "005a5520",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a5a08",
      "incomplete_value": false,
      "site": "005a5a1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:43b000:8"
          ],
          [
            "leaf",
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a56e8",
      "incomplete_value": false,
      "site": "005a56fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:43a000:8"
          ],
          [
            "leaf",
            "const:eb0:8"
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
      "definition_site": "005a5a10",
      "incomplete_value": false,
      "site": "005a5a1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca7000:8"
          ],
          [
            "leaf",
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a56f0",
      "incomplete_value": false,
      "site": "005a56fc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca6000:8"
          ],
          [
            "leaf",
            "const:838:8"
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
      "005a5824",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a5848",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a5868",
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
      "005a5824",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a5848",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005a5868",
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
- 005a56fc ["INT_ADD", "register:40f0:8", ["const:5a56fc:8", "const:4:8"]]
- 005a56fc ["CALL", null, ["callee:00c58ed0:8"]]
+ 005a5a1c ["INT_ADD", "register:40f0:8", ["const:5a5a1c:8", "const:4:8"]]
+ 005a5a1c ["CALL", null, ["callee:00c58ed0:8"]]
- 005a54f0 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005a5810 ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 005a54f4 ["COPY", "tmp:0:8", ["const:838:8"]]
- 005a54f4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005a54f4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005a54f4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005a5814 ["COPY", "tmp:0:8", ["const:7f8:8"]]
+ 005a5814 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005a5814 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005a5814 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-4a08f0e3d0dac7a71902d8a9cf4c33c2"></a>

### [`005a59fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a59fc.md) → [`005a5d1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5d1c.md) FUN_005a5d1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`007ad37c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007ad/007ad37c.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)
- 新版 呼出元 1件 [`007ad7a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007ad/007ad7a0.md) · 呼出先 1件 [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5d38",
      "incomplete_value": false,
      "site": "005a5d3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:b90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5a18",
      "incomplete_value": false,
      "site": "005a5a1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:bc0:8"
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
      "005a5d3c",
      "DATA",
      [
        "storage",
        "00c6ebc0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a5d3c",
      "DATA",
      [
        "storage",
        "00c6fb90",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5a10 ["INT_ADD", "register:40f0:8", ["const:5a5a10:8", "const:4:8"]]
- 005a5a10 ["CALL", null, ["callee:0059bc68:8"]]
+ 005a5d30 ["INT_ADD", "register:40f0:8", ["const:5a5d30:8", "const:4:8"]]
+ 005a5d30 ["CALL", null, ["callee:0059bc68:8"]]
- 005a5a14 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a5d34 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5a18 ["COPY", "tmp:0:8", ["const:bc0:8"]]
- 005a5a18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5a18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5a18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a5d38 ["COPY", "tmp:0:8", ["const:b90:8"]]
+ 005a5d38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5d38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5d38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4203022dcb064a61fda4456080e04a43"></a>

### [`005a5a48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5a48.md) → [`005a5d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5d68.md) FUN_005a5d68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5d84",
      "incomplete_value": true,
      "site": "005a5d84",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:810:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5a64",
      "incomplete_value": true,
      "site": "005a5a64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:6b8:8"
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
      "definition_site": "005a5d88",
      "incomplete_value": true,
      "site": "005a5d88",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "005a5a68",
      "incomplete_value": true,
      "site": "005a5a68",
      "value": [
        "LOAD",
        "8",
        [
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
      "005a5d74",
      "READ",
      [
        "storage",
        "002a56b8",
        null,
        "string"
      ]
    ],
    [
      "005a5d7c",
      "READ",
      [
        "storage",
        "002a56bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005a5d74",
      "READ",
      [
        "storage",
        "002a5810",
        null,
        "string"
      ]
    ],
    [
      "005a5d7c",
      "READ",
      [
        "storage",
        "002a5815",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5a50 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 005a5a50 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 005a5a50 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 005a5a50 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 005a5d70 ["COPY", "tmp:0:8", ["const:810:8"]]
+ 005a5d70 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 005a5d70 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 005a5d70 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-846f855d25527ca5c2fc64bef5065837"></a>

### [`005a5aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5aa0.md) → [`005a5dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5dc0.md) FUN_005a5dc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0059bf84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bf84.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00451afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451afc.md) [`0059c2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059c/0059c2a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5e10",
      "incomplete_value": true,
      "site": "005a5e10",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c03:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5af0",
      "incomplete_value": true,
      "site": "005a5af0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b2c:8"
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
      "005a5dfc",
      "READ",
      [
        "storage",
        "002afb2c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005a5dfc",
      "READ",
      [
        "storage",
        "002afc03",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5acc ["INT_ADD", "register:40f0:8", ["const:5a5acc:8", "const:4:8"]]
- 005a5acc ["CALL", null, ["callee:0059c2a4:8"]]
+ 005a5dec ["INT_ADD", "register:40f0:8", ["const:5a5dec:8", "const:4:8"]]
+ 005a5dec ["CALL", null, ["callee:0059c2a4:8"]]
- 005a5ad4 ["COPY", "tmp:0:8", ["const:b2c:8"]]
- 005a5ad4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a5ad4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a5ad4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a5df4 ["COPY", "tmp:0:8", ["const:c03:8"]]
+ 005a5df4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a5df4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a5df4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005a5b00 ["INT_ADD", "register:40f0:8", ["const:5a5b00:8", "const:4:8"]]
- 005a5b00 ["CALL", null, ["callee:00451afc:8"]]
+ 005a5e20 ["INT_ADD", "register:40f0:8", ["const:5a5e20:8", "const:4:8"]]
+ 005a5e20 ["CALL", null, ["callee:00451afc:8"]]
~~~


<a id="compare-ef5ffefbcfdbfcf2e10318db1f804ddd"></a>

### [`005a5b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5b70.md) → [`005a5e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5e90.md) FUN_005a5e90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5eac",
      "incomplete_value": false,
      "site": "005a5eb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:c98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5b8c",
      "incomplete_value": false,
      "site": "005a5b94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
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
      "definition_site": "005a5ec4",
      "incomplete_value": false,
      "site": "005a5ec4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:be8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5ba4",
      "incomplete_value": false,
      "site": "005a5ba4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:c18:8"
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
      "005a5eb4",
      "DATA",
      [
        "storage",
        "00c6ecc8",
        null,
        "undefined *"
      ]
    ],
    [
      "005a5ec4",
      "DATA",
      [
        "storage",
        "00c6ec18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a5eb4",
      "DATA",
      [
        "storage",
        "00c6fc98",
        null,
        "undefined *"
      ]
    ],
    [
      "005a5ec4",
      "DATA",
      [
        "storage",
        "00c6fbe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5b84 ["INT_ADD", "register:40f0:8", ["const:5a5b84:8", "const:4:8"]]
- 005a5b84 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a5ea4 ["INT_ADD", "register:40f0:8", ["const:5a5ea4:8", "const:4:8"]]
+ 005a5ea4 ["CALL", null, ["callee:00c58f30:8"]]
- 005a5b88 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a5ea8 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5b8c ["COPY", "tmp:0:8", ["const:cc8:8"]]
- 005a5b8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5b8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5b8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a5eac ["COPY", "tmp:0:8", ["const:c98:8"]]
+ 005a5eac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5eac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a5eac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-26e925f13ab667a576399a15b97ca0bf"></a>

### [`005a5c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5c7c.md) → [`005a5f9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5f9c.md) FUN_005a5f9c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a5fa4",
      "incomplete_value": false,
      "site": "005a5fa8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5c84",
      "incomplete_value": false,
      "site": "005a5c88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a5fa8",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a5fa8",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5c80 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a5fa0 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 005a5c84 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a5c84 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a5c84 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a5c84 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a5fa4 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 005a5fa4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a5fa4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a5fa4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005a5ca8 ["INT_ADD", "register:40f0:8", ["const:5a5ca8:8", "const:4:8"]]
- 005a5ca8 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a5fc8 ["INT_ADD", "register:40f0:8", ["const:5a5fc8:8", "const:4:8"]]
+ 005a5fc8 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-0f02c1fbfe87ce806a8f888c4e77f588"></a>

### [`005a5cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5cbc.md) → [`005a5fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5fdc.md) FUN_005a5fdc

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`005a5858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5858.md) · 呼出先 4件 [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005a5b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a5/005a5b78.md) · 呼出先 4件 [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.84% / 新版 91.84%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a6018",
      "incomplete_value": false,
      "site": "005a6020",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5cf8",
      "incomplete_value": false,
      "site": "005a5d00",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:c78:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a605c",
      "incomplete_value": false,
      "site": "005a6060",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:b70:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5d3c",
      "incomplete_value": false,
      "site": "005a5d40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:ba0:8"
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
      "005a6020",
      "DATA",
      [
        "storage",
        "00c6ec78",
        null,
        "undefined *"
      ]
    ],
    [
      "005a6060",
      "DATA",
      [
        "storage",
        "00c6eba0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a6020",
      "DATA",
      [
        "storage",
        "00c6fc48",
        null,
        "undefined *"
      ]
    ],
    [
      "005a6060",
      "DATA",
      [
        "storage",
        "00c6fb70",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5cf0 ["INT_ADD", "register:40f0:8", ["const:5a5cf0:8", "const:4:8"]]
- 005a5cf0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a6010 ["INT_ADD", "register:40f0:8", ["const:5a6010:8", "const:4:8"]]
+ 005a6010 ["CALL", null, ["callee:00c58f30:8"]]
- 005a5cf4 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a6014 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5cf8 ["COPY", "tmp:0:8", ["const:c78:8"]]
- 005a5cf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5cf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5cf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a6018 ["COPY", "tmp:0:8", ["const:c48:8"]]
+ 005a6018 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a6018 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a6018 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-60a58f7181dbac23077926a1e815d6bd"></a>

### [`005a5dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5dbc.md) → [`005a60dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a6/005a60dc.md) FUN_005a60dc

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
      "definition_site": "005a60e0",
      "incomplete_value": false,
      "site": "005a60e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:c48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5dc0",
      "incomplete_value": false,
      "site": "005a5dc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:c78:8"
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
      "005a60e4",
      "DATA",
      [
        "storage",
        "00c6ec78",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a60e4",
      "DATA",
      [
        "storage",
        "00c6fc48",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5dbc ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a60dc ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5dc0 ["COPY", "tmp:0:8", ["const:c78:8"]]
- 005a5dc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5dc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5dc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a60e0 ["COPY", "tmp:0:8", ["const:c48:8"]]
+ 005a60e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a60e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a60e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dc171f60bd33ecaab217227ddc900037"></a>

### [`005a5dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5dfc.md) → [`005a611c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a6/005a611c.md) FUN_005a611c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a6124",
      "incomplete_value": false,
      "site": "005a6128",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5e04",
      "incomplete_value": false,
      "site": "005a5e08",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "005a6128",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a6128",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5e00 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a6120 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 005a5e04 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a5e04 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a5e04 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a5e04 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 005a6124 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 005a6124 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 005a6124 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 005a6124 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-fa68f1b670f132fe3f1713a89fe82d4f"></a>

### [`005a5e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5e20.md) → [`005a6140`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a6/005a6140.md) FUN_005a6140

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
      "definition_site": "005a6144",
      "incomplete_value": false,
      "site": "005a6148",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:c98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5e24",
      "incomplete_value": false,
      "site": "005a5e28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
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
      "005a6148",
      "DATA",
      [
        "storage",
        "00c6ecc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a6148",
      "DATA",
      [
        "storage",
        "00c6fc98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5e20 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a6140 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5e24 ["COPY", "tmp:0:8", ["const:cc8:8"]]
- 005a5e24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5e24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5e24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a6144 ["COPY", "tmp:0:8", ["const:c98:8"]]
+ 005a6144 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a6144 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a6144 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a87dd43b53554533d09faef581593f2a"></a>

### [`005a5e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5e30.md) → [`005a6150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a6/005a6150.md) FUN_005a6150

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
      "definition_site": "005a6160",
      "incomplete_value": false,
      "site": "005a6168",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:c98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5e40",
      "incomplete_value": false,
      "site": "005a5e48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:cc8:8"
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
      "005a6168",
      "DATA",
      [
        "storage",
        "00c6ecc8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a6168",
      "DATA",
      [
        "storage",
        "00c6fc98",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a5e3c ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a615c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a5e40 ["COPY", "tmp:0:8", ["const:cc8:8"]]
- 005a5e40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a5e40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a5e40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a6160 ["COPY", "tmp:0:8", ["const:c98:8"]]
+ 005a6160 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a6160 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a6160 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a5e4c ["INT_ADD", "register:40f0:8", ["const:5a5e4c:8", "const:4:8"]]
- 005a5e4c ["CALL", null, ["callee:00c58f40:8"]]
+ 005a616c ["INT_ADD", "register:40f0:8", ["const:5a616c:8", "const:4:8"]]
+ 005a616c ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-69cb4cf42618f4139f9027a08997868f"></a>

### [`005a5e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a5/005a5e68.md) → [`005a6188`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a6/005a6188.md) _INIT_51

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005a61e8",
      "incomplete_value": true,
      "site": "005a6204",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a5ec8",
      "incomplete_value": true,
      "site": "005a5ee4",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "005a6208",
      "incomplete_value": true,
      "site": "005a6224",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a5ee8",
      "incomplete_value": true,
      "site": "005a5f04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a6228",
      "incomplete_value": true,
      "site": "005a6240",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "005a5f08",
      "incomplete_value": true,
      "site": "005a5f20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "005a61c4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "005a61e8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "005a6208",
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
      "005a61c4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a61e8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "005a6208",
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
- 005a609c ["INT_ADD", "register:40f0:8", ["const:5a609c:8", "const:4:8"]]
- 005a609c ["CALL", null, ["callee:00c58ed0:8"]]
+ 005a63bc ["INT_ADD", "register:40f0:8", ["const:5a63bc:8", "const:4:8"]]
+ 005a63bc ["CALL", null, ["callee:00c58ed0:8"]]
- 005a5e90 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005a61b0 ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 005a5e94 ["COPY", "tmp:0:8", ["const:850:8"]]
- 005a5e94 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 005a5e94 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 005a5e94 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005a61b4 ["COPY", "tmp:0:8", ["const:810:8"]]
+ 005a61b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005a61b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005a61b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-f40165db260a2d9887256bebe9b452f9"></a>

### [`005a66d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a6/005a66d8.md) → [`005a6a6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a6/005a6a6c.md) FUN_005a6a6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005a61f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a6/005a61f8.md) · 呼出先 3件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005a6518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a6/005a6518.md) · 呼出先 3件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 67.53% / 新版 67.53%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a66fc",
      "READ",
      [
        "storage",
        "002c1321",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005a6708",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a670c",
      "READ",
      [
        "storage",
        "002c1326",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005a6a90",
      "READ",
      [
        "storage",
        "002c136b",
        null,
        "string"
      ]
    ],
    [
      "005a6a9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005a6aa0",
      "READ",
      [
        "storage",
        "002c1370",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a66f4 ["COPY", "tmp:0:8", ["const:321:8"]]
- 005a66f4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a66f4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a66f4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005a66f8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 005a66f8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005a66fc ["COPY", "tmp:0:8", ["register:4048:8"]]
- 005a66fc ["LOAD", "register:4058:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-26230d56515c7be0cb78bf68d32fba90"></a>

### [`005a6bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a6/005a6bbc.md) → [`005a6f6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a6/005a6f6c.md) _INIT_52

根拠 `relaxed_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.62% / 新版 83.62%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a70b8",
      "incomplete_value": true,
      "site": "005a70cc",
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
            "const:8:8"
          ]
        ]
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
      "definition_site": "005a70c0",
      "incomplete_value": true,
      "site": "005a70cc",
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
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a70c4",
      "incomplete_value": true,
      "site": "005a70cc",
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
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a6bec",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a6bf8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005a6c14",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005a6f9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005a6fa8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a6fc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005a6d1c ["INT_ADD", "register:40f0:8", ["const:5a6d1c:8", "const:4:8"]]
- 005a6d1c ["CALL", null, ["callee:0043bb58:8"]]
+ 005a70cc ["INT_ADD", "register:40f0:8", ["const:5a70cc:8", "const:4:8"]]
+ 005a70cc ["CALL", null, ["callee:0043bb58:8"]]
- 005a6d44 ["INT_ADD", "register:40f0:8", ["const:5a6d44:8", "const:4:8"]]
- 005a6d44 ["CALL", null, ["callee:0043bb58:8"]]
+ 005a70f4 ["INT_ADD", "register:40f0:8", ["const:5a70f4:8", "const:4:8"]]
+ 005a70f4 ["CALL", null, ["callee:0043bb58:8"]]
- 005a6d6c ["INT_ADD", "register:40f0:8", ["const:5a6d6c:8", "const:4:8"]]
- 005a6d6c ["CALL", null, ["callee:0043bb58:8"]]
+ 005a711c ["INT_ADD", "register:40f0:8", ["const:5a711c:8", "const:4:8"]]
+ 005a711c ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-a6ec80f20edc25d54993e63b9028bcf5"></a>

### [`005a6f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a6/005a6f4c.md) → [`005a72fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a72fc.md) FUN_005a72fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005a7a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7a98.md) [`005a7cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7cf4.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`005a7e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7e48.md) [`005a80a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a80a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.03% / 新版 88.03%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a706c",
      "incomplete_value": true,
      "site": "005a7074",
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
              [
                "live",
                "register:40a0:8"
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a7070",
      "incomplete_value": true,
      "site": "005a7074",
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
            "const:50:8"
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
      "definition_site": "005a70dc",
      "incomplete_value": true,
      "site": "005a70e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:10:8"
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
      "unmatched:005a6f84",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005a6fa0",
      "WRITE",
      [
        "storage",
        "Stack[-0xcf]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a6fa4",
      "WRITE",
      [
        "storage",
        "Stack[-0xc5]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005a7334",
      "READ",
      [
        "storage",
        "002b72b4",
        null,
        "string"
      ]
    ],
    [
      "005a7350",
      "WRITE",
      [
        "storage",
        "Stack[-0xcf]",
        null,
        null
      ]
    ],
    [
      "005a7354",
      "WRITE",
      [
        "storage",
        "Stack[-0xc5]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005a6fd8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 005a6fd8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 005a6fd8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 005a6fd8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 005a7388 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 005a7388 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 005a7388 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 005a7388 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 005a7074 ["INT_ADD", "register:40f0:8", ["const:5a7074:8", "const:4:8"]]
- 005a7074 ["CALL", null, ["callee:004413ec:8"]]
+ 005a7424 ["INT_ADD", "register:40f0:8", ["const:5a7424:8", "const:4:8"]]
+ 005a7424 ["CALL", null, ["callee:004413ec:8"]]
- 005a70e8 ["INT_ADD", "register:40f0:8", ["const:5a70e8:8", "const:4:8"]]
- 005a70e8 ["CALL", null, ["callee:004413ec:8"]]
+ 005a7498 ["INT_ADD", "register:40f0:8", ["const:5a7498:8", "const:4:8"]]
+ 005a7498 ["CALL", null, ["callee:004413ec:8"]]
~~~


<a id="compare-87fe051bf822ca49133c0b15a9e8a316"></a>

### [`005a74fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a74fc.md) → [`005a78ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a78ac.md) FUN_005a78ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a74fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7500",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7504",
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
      "005a78ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005a78b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a78b4",
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
- 005a74fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a74fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a74fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005a74fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a7500 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a7500 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 005a7504 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005a7504 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005a7504 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005a7504 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a27379f6d148cda296d55f594be2e86f"></a>

### [`005a7574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7574.md) → [`005a7924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7924.md) FUN_005a7924

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009a5114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5114.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)
- 新版 呼出元 1件 [`009a60c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a60c0.md) · 呼出先 1件 [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 53.85% / 新版 53.85%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a7594",
      "DATA",
      [
        "storage",
        "00c6eeb0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005a759c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a75a0",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005a7944",
      "DATA",
      [
        "storage",
        "00c6fe80",
        null,
        "undefined *"
      ]
    ],
    [
      "005a794c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a7950",
      "DATA",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7588 ["INT_ADD", "register:40f0:8", ["const:5a7588:8", "const:4:8"]]
- 005a7588 ["CALL", null, ["callee:0059bc68:8"]]
+ 005a7938 ["INT_ADD", "register:40f0:8", ["const:5a7938:8", "const:4:8"]]
+ 005a7938 ["CALL", null, ["callee:0059bc68:8"]]
- 005a758c ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a793c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a7590 ["COPY", "tmp:0:8", ["const:eb0:8"]]
- 005a7590 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a7590 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a7590 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5420d899b652078755e7c1f37c7c067b"></a>

### [`005a75ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a75ac.md) → [`005a795c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a795c.md) FUN_005a795c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md) [`00c582a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md) [`00c59270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59270.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 42.86% / 新版 42.86%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a798c",
      "incomplete_value": true,
      "site": "005a7998",
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
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a75dc",
      "incomplete_value": true,
      "site": "005a75e8",
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
            "const:11:8"
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
      "unmatched:005a75b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a75b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a75cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005a7960",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a7964",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a797c",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005a75e8 ["INT_ADD", "register:40f0:8", ["const:5a75e8:8", "const:4:8"]]
- 005a75e8 ["CALL", null, ["callee:00c59000:8"]]
+ 005a7998 ["INT_ADD", "register:40f0:8", ["const:5a7998:8", "const:4:8"]]
+ 005a7998 ["CALL", null, ["callee:00c59000:8"]]
- 005a75ac ["INT_SUB", "register:8:8", ["register:8:8", "const:40:8"]]
- 005a75b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a75b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a75b0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005a75b0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4929bae2a358b0679c5ada8e42489e1c"></a>

### [`005a7694`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7694.md) → [`005a7a44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7a44.md) FUN_005a7a44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 61.11% / 新版 61.11%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a76a0",
      "incomplete_value": false,
      "site": "005a76a8",
      "value": [
        "leaf",
        "const:20:8"
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
      "unmatched:005a76b8",
      "DATA",
      [
        "storage",
        "00c6efb8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005a76c8",
      "DATA",
      [
        "storage",
        "00c6ef08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a7a68",
      "DATA",
      [
        "storage",
        "00c6ff88",
        null,
        "undefined *"
      ]
    ],
    [
      "005a7a78",
      "DATA",
      [
        "storage",
        "00c6fed8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a76a8 ["INT_ADD", "register:40f0:8", ["const:5a76a8:8", "const:4:8"]]
- 005a76a8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a7a58 ["INT_ADD", "register:40f0:8", ["const:5a7a58:8", "const:4:8"]]
+ 005a7a58 ["CALL", null, ["callee:00c58f30:8"]]
- 005a76ac ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a7a5c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a76b0 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 005a76b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a76b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a76b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6716f863bea6f5ea5ec99647c3dbc843"></a>

### [`005a76dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a76dc.md) → [`005a7a8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7a8c.md) FUN_005a7a8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 55.00% / 新版 55.00%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a76dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a76e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a76f0",
      "READ",
      [
        "storage",
        "00c9b3f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a7a8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a7a90",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a7aa0",
      "READ",
      [
        "storage",
        "00c9c3c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a76dc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a76dc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a76dc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005a76dc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a76e0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a76e0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005a76e4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-9ec67a475427610629290a48c2c41df7"></a>

### [`005a772c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a772c.md) → [`005a7adc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7adc.md) FUN_005a7adc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.78% / 新版 83.78%

優先判定に残った影響 `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a772c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7730",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7734",
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
      "005a7adc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005a7ae0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a7ae4",
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
- 005a772c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a772c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a772c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005a772c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a7730 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a7730 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 005a7734 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005a7734 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005a7734 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005a7734 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2ff952f0f2531646f8912dce4655f1ff"></a>

### [`005a77c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a77c0.md) → [`005a7b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7b70.md) FUN_005a7b70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a7828",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a7bd8",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7808 ["INT_ADD", "register:40f0:8", ["const:5a7808:8", "const:4:8"]]
- 005a7808 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a7bb8 ["INT_ADD", "register:40f0:8", ["const:5a7bb8:8", "const:4:8"]]
+ 005a7bb8 ["CALL", null, ["callee:00c58f50:8"]]
- 005a7818 ["INT_ADD", "register:40f0:8", ["const:5a7818:8", "const:4:8"]]
- 005a7818 ["CALL", null, ["callee:00c58f50:8"]]
+ 005a7bc8 ["INT_ADD", "register:40f0:8", ["const:5a7bc8:8", "const:4:8"]]
+ 005a7bc8 ["CALL", null, ["callee:00c58f50:8"]]
- 005a7820 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 005a7bd0 ["COPY", "register:4048:8", ["const:c6e000:8"]]
~~~


<a id="compare-6f4d0ab9668eaecd28717c02bb741e66"></a>

### [`005a784c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a784c.md) → [`005a7bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7bfc.md) FUN_005a7bfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005a7cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7cf4.md) [`009a63f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a6/009a63f4.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`005a79a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a79a8.md) [`005a7a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7a30.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`005a80a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a80a4.md) [`009a73a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a7/009a73a0.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`005a7d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7d58.md) [`005a7de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7de0.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.52% / 新版 79.52%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a7c3c",
      "incomplete_value": true,
      "site": "005a7c48",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "leaf",
            "const:5:8"
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
    "new": null,
    "old": {
      "definition_site": "005a7914",
      "incomplete_value": true,
      "site": "005a7918",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a7914",
      "incomplete_value": true,
      "site": "005a7918",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:10:8"
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
      "unmatched:005a78b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a78c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a78c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005a7c68",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "005a7c70",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "005a7c74",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7898 ["INT_ADD", "register:40f0:8", ["const:5a7898:8", "const:4:8"]]
- 005a7898 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a7c48 ["INT_ADD", "register:40f0:8", ["const:5a7c48:8", "const:4:8"]]
+ 005a7c48 ["CALL", null, ["callee:00c58f30:8"]]
- 005a7918 ["INT_ADD", "register:40f0:8", ["const:5a7918:8", "const:4:8"]]
- 005a7918 ["CALL", null, ["callee:0043be80:8"]]
+ 005a7cc8 ["INT_ADD", "register:40f0:8", ["const:5a7cc8:8", "const:4:8"]]
+ 005a7cc8 ["CALL", null, ["callee:0043be80:8"]]
- 005a7878 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
- 005a7878 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 005a7c28 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
+ 005a7c28 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
~~~


<a id="compare-f193011ebfa81f10bb755ebae8c51323"></a>

### [`005a79a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a79a8.md) → [`005a7d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7d58.md) FUN_005a7d58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005a784c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a784c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005a7bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7bfc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.18% / 新版 91.18%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a79a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a79ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a79dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005a7d70"
      ]
    ]
  ],
  "added": [
    [
      "005a7d58",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005a7d5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a7d8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005a7d70"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a79a8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a79a8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a79a8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005a79a8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a79ac ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005a79ac ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005a79ac ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005a79ac ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005a79bc ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 005a79bc ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 005a79bc ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 005a79bc ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 005a7d6c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 005a7d6c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 005a7d6c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 005a7d6c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-b233e714990dd2ef5a3251078a9724ae"></a>

### [`005a7a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7a30.md) → [`005a7de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7de0.md) FUN_005a7de0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005a784c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a784c.md) [`005a7a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7a98.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`005a7bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7bfc.md) [`005a7e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7e48.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a7a30",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7a3c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005a7a40",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "005a7de0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a7dec",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "005a7df0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7a30 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a7a30 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a7a30 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 005a7a30 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a7a34 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005a7a38 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-6041f970ae721223608d4331e6c0de9f"></a>

### [`005a7a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7a44.md) → [`005a7df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7df4.md) FUN_005a7df4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a7a54",
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
      "005a7e04",
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
- 005a7a54 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005a7a54 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005a7a54 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005a7a54 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005a7a58 ["COPY", "register:40e8:8", ["register:8:8"]]
- 005a7a68 ["BRANCH", null, ["local:b5:8"]]
+ 005a7e18 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-3957d4548cd940c0f3134519da133959"></a>

### [`005a7a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7a98.md) → [`005a7e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7e48.md) FUN_005a7e48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005a6f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a6/005a6f4c.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005a7a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7a30.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005a72fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a72fc.md) · 呼出先 6件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005a7de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7de0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.34% / 新版 85.34%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a7b18",
      "incomplete_value": true,
      "site": "005a7b1c",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:40c8:8"
          ],
          [
            "leaf",
            "const:5:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005a7ad8"
      ],
      [
        "FALL_THROUGH",
        "005a7e88"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005a7e88",
      "incomplete_value": true,
      "site": "005a7e9c",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a7ad8",
      "incomplete_value": true,
      "site": "005a7aec",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "INT_RIGHT",
            "8",
            [
              "INT_ADD",
              [
                "leaf",
                "const:3b:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a7a9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7aa0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7ad8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005a7fe8"
      ]
    ]
  ],
  "added": [
    [
      "005a7e4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005a7e50",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005a7e88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005a7fe8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7b1c ["INT_ADD", "register:40f0:8", ["const:5a7b1c:8", "const:4:8"]]
- 005a7b1c ["CALL", null, ["callee:00c58f30:8"]]
+ 005a7ecc ["INT_ADD", "register:40f0:8", ["const:5a7ecc:8", "const:4:8"]]
+ 005a7ecc ["CALL", null, ["callee:00c58f30:8"]]
- 005a7a98 ["INT_SUB", "register:8:8", ["register:8:8", "const:80:8"]]
- 005a7a9c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a7a9c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a7a9c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 005a7a9c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-443251d1187a313485a3c635f0e97cf8"></a>

### [`005a7c8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7c8c.md) → [`005a803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a803c.md) FUN_005a803c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 96.15% / 新版 96.15%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a7ca4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005a8078"
      ]
    ]
  ],
  "added": [
    [
      "005a8054",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005a8078"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7ca4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005a7ca4 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 005a7cac ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005a7cac ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 005a805c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005a805c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 005a7cc4 ["CBRANCH", null, ["local:b1:8", "register:101:1"]]
+ 005a8074 ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
~~~


<a id="compare-11a8db33936d0d6ec37c7b421d15a4dd"></a>

### [`005a7cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7cf4.md) → [`005a80a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a80a4.md) FUN_005a80a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005a6f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a6/005a6f4c.md) · 呼出先 3件 [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`005a784c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a784c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005a72fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a72fc.md) · 呼出先 3件 [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`005a7bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a7/005a7bfc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.50% / 新版 77.50%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a7d08",
      "incomplete_value": false,
      "site": "005a7d20",
      "value": [
        "leaf",
        "const:60:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a80f4",
      "incomplete_value": true,
      "site": "005a80fc",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "005a7d44",
      "incomplete_value": true,
      "site": "005a7d4c",
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
            "const:18:8"
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
      "unmatched:005a7d40",
      "DATA",
      [
        "storage",
        "00c6ef68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005a7d64",
      "DATA",
      [
        "storage",
        "00c6ee90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a80f0",
      "DATA",
      [
        "storage",
        "00c6ff38",
        null,
        "undefined *"
      ]
    ],
    [
      "005a8114",
      "DATA",
      [
        "storage",
        "00c6fe60",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7d20 ["INT_ADD", "register:40f0:8", ["const:5a7d20:8", "const:4:8"]]
- 005a7d20 ["CALL", null, ["callee:00c58f30:8"]]
+ 005a80d0 ["INT_ADD", "register:40f0:8", ["const:5a80d0:8", "const:4:8"]]
+ 005a80d0 ["CALL", null, ["callee:00c58f30:8"]]
- 005a7d4c ["INT_ADD", "register:40f0:8", ["const:5a7d4c:8", "const:4:8"]]
- 005a7d4c ["CALL", null, ["callee:0059bc3c:8"]]
+ 005a80fc ["INT_ADD", "register:40f0:8", ["const:5a80fc:8", "const:4:8"]]
+ 005a80fc ["CALL", null, ["callee:0059bc3c:8"]]
- 005a7d30 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a80e0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
~~~


<a id="compare-9e5c7bcf165b849e4567bd756b268b37"></a>

### [`005a7dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7dd4.md) → [`005a8184`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8184.md) FUN_005a8184

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a7ddc",
      "DATA",
      [
        "storage",
        "00c6ef68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005a7de0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f40"
      ]
    ]
  ],
  "added": [
    [
      "005a818c",
      "DATA",
      [
        "storage",
        "00c6ff38",
        null,
        "undefined *"
      ]
    ],
    [
      "005a8190",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f40"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7dd4 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005a7dd8 ["COPY", "tmp:0:8", ["const:f68:8"]]
- 005a7dd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a7dd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a7dd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a7ddc ["COPY", "tmp:0:8", ["register:4000:8"]]
- 005a7ddc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-33190e1e145c1623e468697a953c335c"></a>

### [`005a7de4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7de4.md) → [`005a8194`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8194.md) FUN_005a8194

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
      "definition_site": "005a81a4",
      "incomplete_value": false,
      "site": "005a81ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a7df4",
      "incomplete_value": false,
      "site": "005a7dfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:f68:8"
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
      "005a81ac",
      "DATA",
      [
        "storage",
        "00c6ef68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a81ac",
      "DATA",
      [
        "storage",
        "00c6ff38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7df0 ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a81a0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a7df4 ["COPY", "tmp:0:8", ["const:f68:8"]]
- 005a7df4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a7df4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a7df4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a81a4 ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 005a81a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a81a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a81a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a7e00 ["INT_ADD", "register:40f0:8", ["const:5a7e00:8", "const:4:8"]]
- 005a7e00 ["CALL", null, ["callee:00c58f40:8"]]
+ 005a81b0 ["INT_ADD", "register:40f0:8", ["const:5a81b0:8", "const:4:8"]]
+ 005a81b0 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-3cdbe266a441e82e0f8f1a6bcc287069"></a>

### [`005a7e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7e14.md) → [`005a81c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a81c4.md) FUN_005a81c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a8228",
      "incomplete_value": false,
      "site": "005a822c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a7e78",
      "incomplete_value": false,
      "site": "005a7e7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6d000:8"
          ],
          [
            "leaf",
            "const:ad0:8"
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
      "unmatched:005a7e3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005a8200"
      ]
    ],
    [
      "005a822c",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a81ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005a8200"
      ]
    ],
    [
      "005a822c",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7e2c ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 005a7e2c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 005a81dc ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 005a81dc ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 005a7e38 ["INT_LESSEQUAL", "register:105:1", ["register:40a0:8", "register:40a8:8"]]
- 005a7e38 ["INT_SBORROW", "register:106:1", ["register:40a8:8", "register:40a0:8"]]
- 005a7e38 ["INT_SUB", "tmp:0:8", ["register:40a8:8", "register:40a0:8"]]
- 005a7e38 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 005a7e3c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005a7e3c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-e0770989757607abd6346bbe5389a45a"></a>

### [`005a7eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7eac.md) → [`005a825c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a825c.md) FUN_005a825c

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
      "definition_site": "005a8260",
      "incomplete_value": false,
      "site": "005a8264",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a7eb0",
      "incomplete_value": false,
      "site": "005a7eb4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6e000:8"
          ],
          [
            "leaf",
            "const:fb8:8"
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
      "005a8264",
      "DATA",
      [
        "storage",
        "00c6efb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a8264",
      "DATA",
      [
        "storage",
        "00c6ff88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7eac ["COPY", "register:4040:8", ["const:c6e000:8"]]
+ 005a825c ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a7eb0 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 005a7eb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a7eb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a7eb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a8260 ["COPY", "tmp:0:8", ["const:f88:8"]]
+ 005a8260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a8260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a8260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1f4de7ea2b1d11e23a574935ee49a21f"></a>

### [`005a7ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7ebc.md) → [`005a826c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a826c.md) FUN_005a826c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 41.67% / 新版 41.67%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a7ebc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7ec0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7ed4",
      "DATA",
      [
        "storage",
        "00c6efb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a826c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a8270",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a8284",
      "DATA",
      [
        "storage",
        "00c6ff88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a7ebc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a7ebc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a7ebc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005a7ebc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a7ec0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a7ec0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005a7ec4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-92ed42cb3e3eeb17d5d16240c35a76dd"></a>

### [`005a7ef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a7/005a7ef4.md) → [`005a82a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a82a4.md) _INIT_53

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.84% / 新版 63.84%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a8040",
      "incomplete_value": true,
      "site": "005a8054",
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
            "const:8:8"
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
      "definition_site": "005a841c",
      "incomplete_value": true,
      "site": "005a842c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "leaf",
            "const:8:8"
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
      "definition_site": "005a8420",
      "incomplete_value": true,
      "site": "005a842c",
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
            "const:40:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:005a7f24",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a7f30",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005a7f4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005a82d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "005a82e0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "005a82fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005a8054 ["INT_ADD", "register:40f0:8", ["const:5a8054:8", "const:4:8"]]
- 005a8054 ["CALL", null, ["callee:0043bb58:8"]]
+ 005a8404 ["INT_ADD", "register:40f0:8", ["const:5a8404:8", "const:4:8"]]
+ 005a8404 ["CALL", null, ["callee:0043bb58:8"]]
- 005a807c ["INT_ADD", "register:40f0:8", ["const:5a807c:8", "const:4:8"]]
- 005a807c ["CALL", null, ["callee:0043bb58:8"]]
+ 005a842c ["INT_ADD", "register:40f0:8", ["const:5a842c:8", "const:4:8"]]
+ 005a842c ["CALL", null, ["callee:0043bb58:8"]]
- 005a80a4 ["INT_ADD", "register:40f0:8", ["const:5a80a4:8", "const:4:8"]]
- 005a80a4 ["CALL", null, ["callee:0043bb58:8"]]
+ 005a8454 ["INT_ADD", "register:40f0:8", ["const:5a8454:8", "const:4:8"]]
+ 005a8454 ["CALL", null, ["callee:0043bb58:8"]]
~~~


<a id="compare-9a30eb1afde087a4f110cecc2ad99222"></a>

### [`005a8284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8284.md) → [`005a8634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8634.md) FUN_005a8634

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0059b91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b91c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0059bc3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc3c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.17% / 新版 82.17%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005a82d8",
      "incomplete_value": true,
      "site": "005a82e0",
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
              [
                "live",
                "register:4008:8"
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
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a86e4",
      "incomplete_value": true,
      "site": "005a86ec",
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
              [
                "live",
                "register:40a8:8"
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
    "old": null,
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a86e8",
      "incomplete_value": true,
      "site": "005a86ec",
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
      "unmatched:005a8294",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a82b4",
      "READ",
      [
        "storage",
        "002b71e5",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005a82d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x5f]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "005a8644",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a8664",
      "READ",
      [
        "storage",
        "002b72b4",
        null,
        "string"
      ]
    ],
    [
      "005a8680",
      "WRITE",
      [
        "storage",
        "Stack[-0x5f]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 005a82e0 ["INT_ADD", "register:40f0:8", ["const:5a82e0:8", "const:4:8"]]
- 005a82e0 ["CALL", null, ["callee:004413ec:8"]]
+ 005a8690 ["INT_ADD", "register:40f0:8", ["const:5a8690:8", "const:4:8"]]
+ 005a8690 ["CALL", null, ["callee:004413ec:8"]]
- 005a833c ["INT_ADD", "register:40f0:8", ["const:5a833c:8", "const:4:8"]]
- 005a833c ["CALL", null, ["callee:004413ec:8"]]
+ 005a86ec ["INT_ADD", "register:40f0:8", ["const:5a86ec:8", "const:4:8"]]
+ 005a86ec ["CALL", null, ["callee:004413ec:8"]]
- 005a84a4 ["INT_ADD", "register:40f0:8", ["const:5a84a4:8", "const:4:8"]]
- 005a84a4 ["CALL", null, ["callee:0059bc3c:8"]]
+ 005a8854 ["INT_ADD", "register:40f0:8", ["const:5a8854:8", "const:4:8"]]
+ 005a8854 ["CALL", null, ["callee:0059bc3c:8"]]
~~~


<a id="compare-e75eed2024146e5002b9277950728e1a"></a>

### [`005a8578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8578.md) → [`005a8928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8928.md) FUN_005a8928

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`009a5808`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a5/009a5808.md) · 呼出先 1件 [`0059b948`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b948.md)
- 新版 呼出元 1件 [`009a67b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009a6/009a67b4.md) · 呼出先 1件 [`0059bc68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059bc68.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005a894c",
      "incomplete_value": false,
      "site": "005a8950",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:ff8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a859c",
      "incomplete_value": false,
      "site": "005a85a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:28:8"
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
      "005a8950",
      "DATA",
      [
        "storage",
        "00c6f028",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a8950",
      "DATA",
      [
        "storage",
        "00c6fff8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a8594 ["INT_ADD", "register:40f0:8", ["const:5a8594:8", "const:4:8"]]
- 005a8594 ["CALL", null, ["callee:0059bc68:8"]]
+ 005a8944 ["INT_ADD", "register:40f0:8", ["const:5a8944:8", "const:4:8"]]
+ 005a8944 ["CALL", null, ["callee:0059bc68:8"]]
- 005a859c ["COPY", "tmp:0:8", ["const:28:8"]]
- 005a859c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a859c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a859c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a894c ["COPY", "tmp:0:8", ["const:ff8:8"]]
+ 005a894c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a894c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a894c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4249954a97dc73e59e9fdef3b531bdb5"></a>

### [`005a85bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a85bc.md) → [`005a896c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a896c.md) FUN_005a896c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md) [`00c58040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58040.md) [`00c582a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md) [`00c59010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59010.md) [`00c59270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59270.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.51% / 新版 75.51%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a899c",
      "incomplete_value": false,
      "site": "005a89a8",
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
            "const:5b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a85ec",
      "incomplete_value": false,
      "site": "005a85f8",
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
            "const:11:8"
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
      "definition_site": "005a89c8",
      "incomplete_value": false,
      "site": "005a89d0",
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
            "const:826:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a8618",
      "incomplete_value": false,
      "site": "005a8620",
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
            "const:748:8"
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
      "unmatched:005a85dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a85e4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c59270"
      ]
    ],
    [
      "unmatched:005a85ec",
      "PARAM",
      [
        "storage",
        "002c0011",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005a898c",
      "WRITE",
      [
        "storage",
        "Stack[-0x28]",
        null,
        null
      ]
    ],
    [
      "005a8994",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c59270"
      ]
    ],
    [
      "005a899c",
      "PARAM",
      [
        "storage",
        "002c005b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a85f8 ["INT_ADD", "register:40f0:8", ["const:5a85f8:8", "const:4:8"]]
- 005a85f8 ["CALL", null, ["callee:00c59000:8"]]
+ 005a89a8 ["INT_ADD", "register:40f0:8", ["const:5a89a8:8", "const:4:8"]]
+ 005a89a8 ["CALL", null, ["callee:00c59000:8"]]
- 005a8620 ["INT_ADD", "register:40f0:8", ["const:5a8620:8", "const:4:8"]]
- 005a8620 ["CALL", null, ["callee:00c59010:8"]]
+ 005a89d0 ["INT_ADD", "register:40f0:8", ["const:5a89d0:8", "const:4:8"]]
+ 005a89d0 ["CALL", null, ["callee:00c59010:8"]]
- 005a85d4 ["COPY", "tmp:0:8", ["const:8:8"]]
- 005a85d4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 005a85d4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 005a85d4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-47ad000b7ab64014f0ce1575ca7b9417"></a>

### [`005a86c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a86c4.md) → [`005a8a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8a74.md) FUN_005a8a74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`0059bf84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059bf84.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c582a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c582a0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00451afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451afc.md) [`0059c2a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059c/0059c2a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59270`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59270.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 84.78% / 新版 84.78%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a8ad4",
      "incomplete_value": true,
      "site": "005a8ae0",
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
            "const:20:8"
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
      "definition_site": "005a8ad8",
      "incomplete_value": true,
      "site": "005a8ae0",
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
      "unmatched:005a86c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a86cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a86d0",
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
      "005a8a78",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005a8a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a8a80",
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
- 005a8730 ["INT_ADD", "register:40f0:8", ["const:5a8730:8", "const:4:8"]]
- 005a8730 ["CALL", null, ["callee:00451afc:8"]]
+ 005a8ae0 ["INT_ADD", "register:40f0:8", ["const:5a8ae0:8", "const:4:8"]]
+ 005a8ae0 ["CALL", null, ["callee:00451afc:8"]]
- 005a86c4 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 005a86c8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a86c8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a86c8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005a86c8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-489af19b89bf96dbe51ed857bad3d5f9"></a>

### [`005a87c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a87c8.md) → [`005a8b78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8b78.md) FUN_005a8b78

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.89% / 新版 38.89%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a87ec",
      "DATA",
      [
        "storage",
        "00c6f130",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005a87fc",
      "DATA",
      [
        "storage",
        "00c6f080",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005a8804",
      "READ",
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
      "005a8b9c",
      "DATA",
      [
        "storage",
        "00c70100",
        null,
        "undefined *"
      ]
    ],
    [
      "005a8bac",
      "DATA",
      [
        "storage",
        "00c70050",
        null,
        "undefined *"
      ]
    ],
    [
      "005a8bb4",
      "READ",
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
- 005a87dc ["INT_ADD", "register:40f0:8", ["const:5a87dc:8", "const:4:8"]]
- 005a87dc ["CALL", null, ["callee:00c58f30:8"]]
+ 005a8b8c ["INT_ADD", "register:40f0:8", ["const:5a8b8c:8", "const:4:8"]]
+ 005a8b8c ["CALL", null, ["callee:00c58f30:8"]]
- 005a87e0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005a8b90 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005a87e4 ["COPY", "tmp:0:8", ["const:130:8"]]
- 005a87e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a87e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a87e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b18ddb74f2e772f41bdd7a3daae050d6"></a>

### [`005a8810`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8810.md) → [`005a8bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8bc0.md) FUN_005a8bc0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 55.00% / 新版 55.00%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a8810",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a8814",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a8824",
      "READ",
      [
        "storage",
        "00c9b3f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a8bc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a8bc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a8bd4",
      "READ",
      [
        "storage",
        "00c9c3c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a8810 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a8810 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a8810 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005a8810 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a8814 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a8814 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005a8818 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e8dd6e75baec28f4141069773eb81082"></a>

### [`005a8860`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8860.md) → [`005a8c10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8c10.md) FUN_005a8c10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005a8c38",
      "incomplete_value": true,
      "site": "005a8c3c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a8888",
      "incomplete_value": true,
      "site": "005a888c",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:005a886c",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a8c1c",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a888c ["INT_ADD", "register:40f0:8", ["const:5a888c:8", "const:4:8"]]
- 005a888c ["CALL", null, ["callee:00c58f50:8"]]
+ 005a8c3c ["INT_ADD", "register:40f0:8", ["const:5a8c3c:8", "const:4:8"]]
+ 005a8c3c ["CALL", null, ["callee:00c58f50:8"]]
- 005a8864 ["COPY", "register:4048:8", ["const:c6d000:8"]]
- 005a8868 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a8868 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a8868 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a8868 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5ed021943d3ec15ed8e7831a328e85fc"></a>

### [`005a88a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a88a0.md) → [`005a8c50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8c50.md) FUN_005a8c50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a88a8",
      "DATA",
      [
        "storage",
        "00c6f0e0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005a88ac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f40"
      ]
    ]
  ],
  "added": [
    [
      "005a8c58",
      "DATA",
      [
        "storage",
        "00c700b0",
        null,
        "undefined *"
      ]
    ],
    [
      "005a8c5c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f40"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a88a0 ["COPY", "register:4040:8", ["const:c6f000:8"]]
- 005a88a4 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 005a88a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a88a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a88a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a88a8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 005a88a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-3e7fd775ef0151c81c0c6fc8f22cb0c8"></a>

### [`005a88b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a88b0.md) → [`005a8c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8c60.md) FUN_005a8c60

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 41.67% / 新版 41.67%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a88b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a88b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005a88c8",
      "DATA",
      [
        "storage",
        "00c6f0e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a8c60",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005a8c64",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005a8c78",
      "DATA",
      [
        "storage",
        "00c700b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a88b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005a88b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005a88b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005a88b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005a88b4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005a88b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 005a88b8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-1fdca71e89e859ed36e1032b4156a2a1"></a>

### [`005a88e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a88e0.md) → [`005a8c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8c90.md) FUN_005a8c90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a88ec",
      "DATA",
      [
        "storage",
        "00c6dad0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005a8c9c",
      "DATA",
      [
        "storage",
        "00c6eaa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a88e0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:28:8"]]
- 005a88e0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 005a88e0 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 005a88e4 ["COPY", "register:4048:8", ["const:c6d000:8"]]
- 005a88e8 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 005a88e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005a88e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005a88e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-10cb685681f5252e3e4ff493cee616ef"></a>

### [`005a8904`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8904.md) → [`005a8cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8cb4.md) FUN_005a8cb4

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
      "definition_site": "005a8cb8",
      "incomplete_value": false,
      "site": "005a8cbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c70000:8"
          ],
          [
            "leaf",
            "const:100:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005a8908",
      "incomplete_value": false,
      "site": "005a890c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c6f000:8"
          ],
          [
            "leaf",
            "const:130:8"
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
      "005a8cbc",
      "DATA",
      [
        "storage",
        "00c6f130",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a8cbc",
      "DATA",
      [
        "storage",
        "00c70100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a8904 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005a8cb4 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005a8908 ["COPY", "tmp:0:8", ["const:130:8"]]
- 005a8908 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a8908 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a8908 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005a8cb8 ["COPY", "tmp:0:8", ["const:100:8"]]
+ 005a8cb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005a8cb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005a8cb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-042668513e304f28bc13d39f438bf4a6"></a>

### [`005a8914`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a8/005a8914.md) → [`005a8cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a8/005a8cc4.md) FUN_005a8cc4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005a892c",
      "DATA",
      [
        "storage",
        "00c6f130",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005a8cdc",
      "DATA",
      [
        "storage",
        "00c70100",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005a8920 ["COPY", "register:4040:8", ["const:c6f000:8"]]
+ 005a8cd0 ["COPY", "register:4040:8", ["const:c70000:8"]]
- 005a8924 ["COPY", "tmp:0:8", ["const:130:8"]]
- 005a8924 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005a8924 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005a8924 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005a8928 ["COPY", "register:4098:8", ["register:4000:8"]]
~~~


