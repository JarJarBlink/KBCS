# v16.0.2 → v16.0.3 · 最優先の変更候補 (19)

[一覧の目次](README.md)

<a id="compare-ee88f42f1ae12917ec7e1c1adc97341c"></a>

### [`0058eee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058e/0058eee0.md) → [`0058f200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f200.md) FUN_0058f200

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00597f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f04.md) · 呼出先 9件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00598224`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598224.md) · 呼出先 9件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.57% / 新版 94.57%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0058f26c",
      "incomplete_value": true,
      "site": "0058f27c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fa5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058ef4c",
      "incomplete_value": true,
      "site": "0058ef5c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f65:8"
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
      "0058f248",
      "READ",
      [
        "storage",
        "002b750b",
        null,
        "string"
      ]
    ],
    [
      "0058f26c",
      "READ",
      [
        "storage",
        "002a0f65",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0058f248",
      "READ",
      [
        "storage",
        "002b75da",
        null,
        "string"
      ]
    ],
    [
      "0058f26c",
      "READ",
      [
        "storage",
        "002a0fa5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058ef04 ["INT_ADD", "register:40f0:8", ["const:58ef04:8", "const:4:8"]]
- 0058ef04 ["CALL", null, ["callee:005891cc:8"]]
+ 0058f224 ["INT_ADD", "register:40f0:8", ["const:58f224:8", "const:4:8"]]
+ 0058f224 ["CALL", null, ["callee:005891cc:8"]]
- 0058ef0c ["INT_ADD", "register:40f0:8", ["const:58ef0c:8", "const:4:8"]]
- 0058ef0c ["CALL", null, ["callee:005894bc:8"]]
+ 0058f22c ["INT_ADD", "register:40f0:8", ["const:58f22c:8", "const:4:8"]]
+ 0058f22c ["CALL", null, ["callee:005894bc:8"]]
- 0058ef24 ["COPY", "tmp:0:8", ["const:50b:8"]]
- 0058ef24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0058ef24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0058ef24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0058f244 ["COPY", "tmp:0:8", ["const:5da:8"]]
+ 0058f244 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0058f244 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0058f244 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d482e4581a0ab5cd6499c0e5b799ab9f"></a>

### [`0058f08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f08c.md) → [`0058f3ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f3ac.md) FUN_0058f3ac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)
- 新版 呼出元 1件 [`00598228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598228.md) · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.69% / 新版 96.69%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0058f420",
      "incomplete_value": true,
      "site": "0058f42c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:a10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058f100",
      "incomplete_value": true,
      "site": "0058f10c",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:9c0:8"
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
      "0058f41c",
      "READ",
      [
        "storage",
        "002a2111",
        null,
        "string"
      ]
    ],
    [
      "0058f41c",
      "READ",
      [
        "storage",
        "002a2121",
        null,
        "string"
      ]
    ],
    [
      "0058f420",
      "READ",
      [
        "storage",
        "002c29c0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0058f41c",
      "READ",
      [
        "storage",
        "002a21dc",
        null,
        "string"
      ]
    ],
    [
      "0058f41c",
      "READ",
      [
        "storage",
        "002a21ec",
        null,
        "string"
      ]
    ],
    [
      "0058f420",
      "READ",
      [
        "storage",
        "002c2a10",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0058f0b8 ["INT_ADD", "register:40f0:8", ["const:58f0b8:8", "const:4:8"]]
- 0058f0b8 ["CALL", null, ["callee:005891cc:8"]]
+ 0058f3d8 ["INT_ADD", "register:40f0:8", ["const:58f3d8:8", "const:4:8"]]
+ 0058f3d8 ["CALL", null, ["callee:005891cc:8"]]
- 0058f0c0 ["INT_ADD", "register:40f0:8", ["const:58f0c0:8", "const:4:8"]]
- 0058f0c0 ["CALL", null, ["callee:005894bc:8"]]
+ 0058f3e0 ["INT_ADD", "register:40f0:8", ["const:58f3e0:8", "const:4:8"]]
+ 0058f3e0 ["CALL", null, ["callee:005894bc:8"]]
- 0058f0ec ["INT_ADD", "register:40f0:8", ["const:58f0ec:8", "const:4:8"]]
- 0058f0ec ["CALL", null, ["callee:00c58f30:8"]]
+ 0058f40c ["INT_ADD", "register:40f0:8", ["const:58f40c:8", "const:4:8"]]
+ 0058f40c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d56e7bb4be5952ea6b343429f368b698"></a>

### [`0058f678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f678.md) → [`0058f998`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f998.md) FUN_0058f998

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
      "definition_site": "0058f99c",
      "incomplete_value": false,
      "site": "0058f9a0",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058f67c",
      "incomplete_value": false,
      "site": "0058f680",
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
            "const:90:8"
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
      "0058f9a0",
      "DATA",
      [
        "storage",
        "00c6d090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0058f9a0",
      "DATA",
      [
        "storage",
        "00c6e060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058f678 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0058f998 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0058f67c ["COPY", "tmp:0:8", ["const:90:8"]]
- 0058f67c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0058f67c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0058f67c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0058f99c ["COPY", "tmp:0:8", ["const:60:8"]]
+ 0058f99c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0058f99c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0058f99c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ba283c2542ba4b573606865c2ef902d3"></a>

### [`0058f688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f688.md) → [`0058f9a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f9a8.md) FUN_0058f9a8

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
      "definition_site": "0058f9b8",
      "incomplete_value": false,
      "site": "0058f9c0",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058f698",
      "incomplete_value": false,
      "site": "0058f6a0",
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
            "const:90:8"
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
      "0058f9c0",
      "DATA",
      [
        "storage",
        "00c6d090",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0058f9c0",
      "DATA",
      [
        "storage",
        "00c6e060",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058f694 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0058f9b4 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0058f698 ["COPY", "tmp:0:8", ["const:90:8"]]
- 0058f698 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0058f698 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0058f698 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0058f9b8 ["COPY", "tmp:0:8", ["const:60:8"]]
+ 0058f9b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0058f9b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0058f9b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0058f6a4 ["INT_ADD", "register:40f0:8", ["const:58f6a4:8", "const:4:8"]]
- 0058f6a4 ["CALL", null, ["callee:00c58f40:8"]]
+ 0058f9c4 ["INT_ADD", "register:40f0:8", ["const:58f9c4:8", "const:4:8"]]
+ 0058f9c4 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-ee59ff1f36eafc977116d1a60bf7baf2"></a>

### [`0058f6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f6b8.md) → [`0058f9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058f9d8.md) FUN_0058f9d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0058a8fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058a/0058a8fc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0058ac1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058a/0058ac1c.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0058f9e8",
      "incomplete_value": false,
      "site": "0058f9f0",
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
            "const:fd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058f6c8",
      "incomplete_value": false,
      "site": "0058f6d0",
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
            "const:8:8"
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
      "0058f9f0",
      "DATA",
      [
        "storage",
        "00c6d008",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0058f9f0",
      "DATA",
      [
        "storage",
        "00c6dfd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058f6c8 ["COPY", "tmp:0:8", ["const:8:8"]]
- 0058f6c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0058f6c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0058f6c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0058f9e8 ["COPY", "tmp:0:8", ["const:fd8:8"]]
+ 0058f9e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0058f9e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0058f9e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0058f6d8 ["INT_ADD", "register:40f0:8", ["const:58f6d8:8", "const:4:8"]]
- 0058f6d8 ["CALL", null, ["callee:0058ac1c:8"]]
+ 0058f9f8 ["INT_ADD", "register:40f0:8", ["const:58f9f8:8", "const:4:8"]]
+ 0058f9f8 ["CALL", null, ["callee:0058ac1c:8"]]
~~~


<a id="compare-e4734053d7aae2a5ad0ad08fafba1fd0"></a>

### [`0058f6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f6f0.md) → [`0058fa10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fa10.md) _INIT_34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`0057a998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057a/0057a998.md) [`0058ccc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058c/0058ccc0.md) [`00bfa1ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bfa/00bfa1ac.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0057acb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057a/0057acb8.md) [`0058cfe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058c/0058cfe0.md) [`00bfb1a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bfb/00bfb1a0.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 60.00% / 新版 60.00%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 4件, `store_value` 1件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fa3c",
      "incomplete_value": false,
      "site": "0058fa3c",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:458:8"
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
      "definition_site": "0058f71c",
      "incomplete_value": false,
      "site": "0058f71c",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:498:8"
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
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fa40",
      "incomplete_value": false,
      "site": "0058fa40",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:458:8"
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
      "definition_site": "0058f720",
      "incomplete_value": false,
      "site": "0058f720",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:498:8"
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
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fa44",
      "incomplete_value": false,
      "site": "0058fa44",
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
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058f724",
      "incomplete_value": false,
      "site": "0058f724",
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
            "const:498:8"
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
      "0058fa20",
      "PARAM",
      [
        "storage",
        "00ca6498",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fa34",
      "PARAM",
      [
        "storage",
        "0057a998",
        null,
        null
      ]
    ],
    [
      "0058fa38",
      "PARAM",
      [
        "storage",
        "00c63060",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0058fa20",
      "PARAM",
      [
        "storage",
        "00ca7458",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fa34",
      "PARAM",
      [
        "storage",
        "0057acb8",
        null,
        null
      ]
    ],
    [
      "0058fa38",
      "PARAM",
      [
        "storage",
        "00c64030",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058f728 ["INT_ADD", "register:40f0:8", ["const:58f728:8", "const:4:8"]]
- 0058f728 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0058fa48 ["INT_ADD", "register:40f0:8", ["const:58fa48:8", "const:4:8"]]
+ 0058fa48 ["CALL", null, ["callee:00c58ed0:8"]]
- 0058f740 ["INT_ADD", "register:40f0:8", ["const:58f740:8", "const:4:8"]]
- 0058f740 ["CALL", null, ["callee:00c58ed0:8"]]
+ 0058fa60 ["INT_ADD", "register:40f0:8", ["const:58fa60:8", "const:4:8"]]
+ 0058fa60 ["CALL", null, ["callee:00c58ed0:8"]]
- 0058f6fc ["COPY", "register:4008:8", ["const:ca6000:8"]]
+ 0058fa1c ["COPY", "register:4008:8", ["const:ca7000:8"]]
~~~


<a id="compare-d7a1f1d40fef1ff7abc906acd3046158"></a>

### [`0058f7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f7c8.md) → [`0058fae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fae8.md) FUN_0058fae8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0058fa88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fa88.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0058fda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fda8.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 82.35% / 新版 82.35%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `store_destination` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fb40",
      "incomplete_value": false,
      "site": "0058fb40",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:534:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058f820",
      "incomplete_value": false,
      "site": "0058f820",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:574:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:c:8"
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
      "definition_site": "0058fb48",
      "incomplete_value": false,
      "site": "0058fb48",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:534:8"
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
      "definition_site": "0058f828",
      "incomplete_value": false,
      "site": "0058f828",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:574:8"
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "0058fbf8",
      "incomplete_value": true,
      "site": "0058fbf8",
      "value": [
        "LOAD",
        "8",
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058f8d8",
      "incomplete_value": true,
      "site": "0058f8d8",
      "value": [
        "LOAD",
        "8",
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
                "const:80:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0058fb34",
      "READ",
      [
        "storage",
        "00ca6610",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fb40",
      "WRITE",
      [
        "storage",
        "00ca6580",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fb48",
      "WRITE",
      [
        "storage",
        "00ca6578",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0058fb34",
      "READ",
      [
        "storage",
        "00ca75d0",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fb40",
      "WRITE",
      [
        "storage",
        "00ca7540",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fb48",
      "WRITE",
      [
        "storage",
        "00ca7538",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058f8d8 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058f8d8 ["INT_ADD", "register:40f0:8", ["const:58f8d8:8", "const:4:8"]]
- 0058f8d8 ["CALLIND", null, ["register:0:8"]]
+ 0058fbf8 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058fbf8 ["INT_ADD", "register:40f0:8", ["const:58fbf8:8", "const:4:8"]]
+ 0058fbf8 ["CALLIND", null, ["register:0:8"]]
- 0058f8f0 ["COPY", "register:0:8", ["register:4040:8"]]
- 0058f8f0 ["INT_ADD", "register:40f0:8", ["const:58f8f0:8", "const:4:8"]]
- 0058f8f0 ["CALLIND", null, ["register:0:8"]]
+ 0058fc10 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058fc10 ["INT_ADD", "register:40f0:8", ["const:58fc10:8", "const:4:8"]]
+ 0058fc10 ["CALLIND", null, ["register:0:8"]]
- 0058f7fc ["COPY", "register:40a8:8", ["const:ca6000:8"]]
+ 0058fb1c ["COPY", "register:40a8:8", ["const:ca7000:8"]]
~~~


<a id="compare-1e96e9d563f566e7511431d96048257e"></a>

### [`0058f940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f940.md) → [`0058fc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fc60.md) FUN_0058fc60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0058fa88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fa88.md) · 呼出先 3件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`0058fda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fda8.md) · 呼出先 3件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_value, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 75.61% / 新版 75.61%

優先判定に残った影響 `store_destination` 4件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fd3c",
      "incomplete_value": false,
      "site": "0058fd3c",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:5d8:8"
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
      "definition_site": "0058fa1c",
      "incomplete_value": false,
      "site": "0058fa1c",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:618:8"
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
      "definition_site": "0058fd44",
      "incomplete_value": false,
      "site": "0058fd44",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:5d8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fa24",
      "incomplete_value": false,
      "site": "0058fa24",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:618:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
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
      "definition_site": "0058fd44",
      "incomplete_value": false,
      "site": "0058fd44",
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
                "const:18:8"
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
      "definition_site": "0058fa24",
      "incomplete_value": false,
      "site": "0058fa24",
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
                "const:18:8"
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
      "0058fc80",
      "READ",
      [
        "storage",
        "00ca6530",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fca8",
      "READ",
      [
        "storage",
        "00ca6538",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fcac",
      "WRITE",
      [
        "storage",
        "00ca6530",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0058fc80",
      "READ",
      [
        "storage",
        "00ca74f0",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fca8",
      "READ",
      [
        "storage",
        "00ca74f8",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fcac",
      "WRITE",
      [
        "storage",
        "00ca74f0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058f95c ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 0058fc7c ["COPY", "register:4040:8", ["const:ca7000:8"]]
- 0058f960 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:530:8"]]
- 0058f960 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 0058fc80 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4f0:8"]]
+ 0058fc80 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0058f97c ["INT_ADD", "register:40f0:8", ["const:58f97c:8", "const:4:8"]]
- 0058f97c ["CALL", null, ["callee:00c54d60:8"]]
+ 0058fc9c ["INT_ADD", "register:40f0:8", ["const:58fc9c:8", "const:4:8"]]
+ 0058fc9c ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-bcd50a6810cd3c396fd7a62e5dc414ac"></a>

### [`0058fa88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fa88.md) → [`0058fda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fda8.md) FUN_0058fda8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0043b03c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b03c.md) [`0043b2ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b2ec.md) [`00467d84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467d84.md) · 呼出先 5件 [`0058f7c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f7c8.md) [`0058f940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058f940.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`0043b35c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b35c.md) [`0043b60c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b60c.md) [`004680a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004680a4.md) · 呼出先 5件 [`0058fae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fae8.md) [`0058fc60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fc60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination

命令の説明率　旧版 81.16% / 新版 81.16%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `store_destination` 2件

アドレスに依存する影響 `store_destination` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fde8",
      "incomplete_value": false,
      "site": "0058fde8",
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
            "const:51c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fac8",
      "incomplete_value": false,
      "site": "0058fac8",
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
            "const:55c:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fdf0",
      "incomplete_value": false,
      "site": "0058fdf0",
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
            "const:520:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fad0",
      "incomplete_value": false,
      "site": "0058fad0",
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
            "const:560:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fdf8",
      "incomplete_value": false,
      "site": "0058fdf8",
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
            "const:524:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fad8",
      "incomplete_value": false,
      "site": "0058fad8",
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
            "const:564:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0058fde8",
      "WRITE",
      [
        "storage",
        "00ca655c",
        null,
        "undefined4"
      ]
    ],
    [
      "0058fdf0",
      "WRITE",
      [
        "storage",
        "00ca6560",
        null,
        "undefined4"
      ]
    ],
    [
      "0058fdf8",
      "WRITE",
      [
        "storage",
        "00ca6564",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0058fde8",
      "WRITE",
      [
        "storage",
        "00ca751c",
        null,
        "undefined4"
      ]
    ],
    [
      "0058fdf0",
      "WRITE",
      [
        "storage",
        "00ca7520",
        null,
        "undefined4"
      ]
    ],
    [
      "0058fdf8",
      "WRITE",
      [
        "storage",
        "00ca7524",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058fac8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:55c:8"]]
- 0058fac8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4020:4"]]
+ 0058fde8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:51c:8"]]
+ 0058fde8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4020:4"]]
- 0058fad0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:560:8"]]
- 0058fad0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4028:4"]]
+ 0058fdf0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:520:8"]]
+ 0058fdf0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4028:4"]]
- 0058fad8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:564:8"]]
- 0058fad8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:4"]]
+ 0058fdf8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:524:8"]]
+ 0058fdf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:4"]]
~~~


<a id="compare-ec5341602fdc7682305390afb0e2bac9"></a>

### [`0058fbc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fbc0.md) → [`0058fee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058fee0.md) FUN_0058fee0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0061a10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0061a/0061a10c.md) [`008ab940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ab/008ab940.md) [`008ac9b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ac/008ac9b4.md) [`008d94b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d9/008d94b8.md) · 呼出先 0件 
- 新版 呼出元 4件 [`0061a4bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0061a/0061a4bc.md) [`008ac8ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ac/008ac8ec.md) [`008ad960`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ad/008ad960.md) [`008da464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008da/008da464.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 47.06% / 新版 47.06%

優先判定に残った影響 `store_destination` 3件

アドレスに依存する影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058fefc",
      "incomplete_value": false,
      "site": "0058fefc",
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
            "const:524:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fbdc",
      "incomplete_value": false,
      "site": "0058fbdc",
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
            "const:564:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058ff04",
      "incomplete_value": false,
      "site": "0058ff04",
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
            "const:528:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fbe4",
      "incomplete_value": false,
      "site": "0058fbe4",
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
            "const:568:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058ff10",
      "incomplete_value": false,
      "site": "0058ff10",
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
            "const:52c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fbf0",
      "incomplete_value": false,
      "site": "0058fbf0",
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
            "const:56c:8"
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
      "0058fef0",
      "READ",
      [
        "storage",
        "00ca6610",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fefc",
      "WRITE",
      [
        "storage",
        "00ca6564",
        null,
        "undefined4"
      ]
    ],
    [
      "0058ff04",
      "WRITE",
      [
        "storage",
        "00ca6568",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0058fef0",
      "READ",
      [
        "storage",
        "00ca75d0",
        null,
        "undefined8"
      ]
    ],
    [
      "0058fefc",
      "WRITE",
      [
        "storage",
        "00ca7524",
        null,
        "undefined4"
      ]
    ],
    [
      "0058ff04",
      "WRITE",
      [
        "storage",
        "00ca7528",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058fbdc ["INT_ADD", "tmp:0:8", ["register:4060:8", "const:564:8"]]
- 0058fbdc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 0058fefc ["INT_ADD", "tmp:0:8", ["register:4060:8", "const:524:8"]]
+ 0058fefc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
- 0058fbe4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:568:8"]]
- 0058fbe4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
+ 0058ff04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:528:8"]]
+ 0058ff04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:4"]]
- 0058fbf0 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:56c:8"]]
- 0058fbf0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4058:4"]]
+ 0058ff10 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:52c:8"]]
+ 0058ff10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4058:4"]]
~~~


<a id="compare-28fad6f6ff78a4eac8769c2cd3441f6f"></a>

### [`0058fc04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fc04.md) → [`0058ff24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058ff24.md) FUN_0058ff24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00591b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591b74.md) [`00591c00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591c00.md) [`00591cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591cbc.md) [`00591e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591e04.md) · 呼出先 0件 
- 新版 呼出元 4件 [`00591e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591e94.md) [`00591f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591f20.md) [`00591fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591fdc.md) [`00592124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592124.md) · 呼出先 0件 

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 38.71% / 新版 38.71%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_destination` 9件, `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0058ff5c",
      "incomplete_value": false,
      "site": "0058ff5c",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:5d8:8"
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
      "definition_site": "0058fc3c",
      "incomplete_value": false,
      "site": "0058fc3c",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:618:8"
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
      "definition_site": "0058ff60",
      "incomplete_value": false,
      "site": "0058ff60",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:5d8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fc40",
      "incomplete_value": false,
      "site": "0058fc40",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:618:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
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
      "definition_site": "0058ff60",
      "incomplete_value": false,
      "site": "0058ff60",
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
                "const:18:8"
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
      "definition_site": "0058fc40",
      "incomplete_value": false,
      "site": "0058fc40",
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
                "const:18:8"
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0058ff34",
      "READ",
      [
        "storage",
        "00ca6608",
        null,
        "undefined1"
      ]
    ],
    [
      "0058ff48",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ],
    [
      "0058ff48",
      "READ",
      [
        "storage",
        "00ca65c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0058ff34",
      "READ",
      [
        "storage",
        "00ca75c8",
        null,
        "undefined1"
      ]
    ],
    [
      "0058ff48",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ],
    [
      "0058ff48",
      "READ",
      [
        "storage",
        "00ca7588",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058fc6c ["COPY", "register:0:8", ["register:4040:8"]]
- 0058fc6c ["INT_ADD", "register:40f0:8", ["const:58fc6c:8", "const:4:8"]]
- 0058fc6c ["CALLIND", null, ["register:0:8"]]
+ 0058ff8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0058ff8c ["INT_ADD", "register:40f0:8", ["const:58ff8c:8", "const:4:8"]]
+ 0058ff8c ["CALLIND", null, ["register:0:8"]]
- 0058fc70 ["COPY", "tmp:0:4", ["const:0:4"]]
- 0058fc70 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 0058fc70 ["INT_ADD", "tmp:2:8", ["register:4098:8", "const:608:8"]]
- 0058fc70 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 0058ff90 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 0058ff90 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 0058ff90 ["INT_ADD", "tmp:2:8", ["register:4098:8", "const:5c8:8"]]
+ 0058ff90 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 0058fc10 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 0058ff30 ["COPY", "register:4098:8", ["const:ca7000:8"]]
~~~


<a id="compare-f95547c0e2f0e1e071ea3f9297d0cc0a"></a>

### [`0058fd14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fd14.md) → [`00590034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590034.md) FUN_00590034

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 3件 [`0055d628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d628.md) [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) [`0055d9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d9dc.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0055d948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d948.md) [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) [`0055dcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055dcfc.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_value, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 44.00% / 新版 44.00%

優先判定に残った影響 `store_destination` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `branch_value` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "005900e4",
      "incomplete_value": false,
      "site": "005900e4",
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
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fdc4",
      "incomplete_value": false,
      "site": "0058fdc4",
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
            "const:5e8:8"
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
      "definition_site": "005900e0",
      "incomplete_value": true,
      "site": "005900e4",
      "value": [
        "INT_SUB",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fdc0",
      "incomplete_value": true,
      "site": "0058fdc4",
      "value": [
        "INT_SUB",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "005900f4",
      "incomplete_value": false,
      "site": "005900f4",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fdd4",
      "incomplete_value": false,
      "site": "0058fdd4",
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
            "const:608:8"
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
      "00590038",
      "READ",
      [
        "storage",
        "00ca6600",
        null,
        "undefined8"
      ]
    ],
    [
      "0059004c",
      "READ",
      [
        "storage",
        "00ca65f8",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:0058fd4c",
      "READ",
      [
        "storage",
        "00ca65e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00590038",
      "READ",
      [
        "storage",
        "00ca75c0",
        null,
        "undefined8"
      ]
    ],
    [
      "0059004c",
      "READ",
      [
        "storage",
        "00ca75b8",
        null,
        "undefined8"
      ]
    ],
    [
      "0059006c",
      "READ",
      [
        "storage",
        "00ca75a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058fdc4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:5e8:8"]]
- 0058fdc4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 005900e4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:5a8:8"]]
+ 005900e4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 0058fdd4 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 0058fdd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:608:8"]]
- 0058fdd4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 005900f4 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 005900f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:5c8:8"]]
+ 005900f4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0058fd14 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 00590034 ["COPY", "register:4040:8", ["const:ca7000:8"]]
~~~


<a id="compare-ed920668ec98bab9fda5c66c28f41875"></a>

### [`0058fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fddc.md) → [`005900fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005900fc.md) FUN_005900fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0055d628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d628.md) [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) [`0055d9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d9dc.md) · 呼出先 1件 [`005903f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/005903f8.md)
- 新版 呼出元 3件 [`0055d948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d948.md) [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) [`0055dcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055dcfc.md) · 呼出先 1件 [`00590718`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590718.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 1件, `store_value` 2件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00590194",
      "incomplete_value": true,
      "site": "0059019c",
      "value": [
        "LOAD",
        "8",
        [
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
      "definition_site": "0058fe74",
      "incomplete_value": true,
      "site": "0058fe7c",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00590198",
      "incomplete_value": true,
      "site": "005901a0",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca7000:8"
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
      "definition_site": "0058fe78",
      "incomplete_value": true,
      "site": "0058fe80",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:ca6000:8"
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "005901b0",
      "incomplete_value": false,
      "site": "005901b0",
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
            "const:5c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058fe90",
      "incomplete_value": false,
      "site": "0058fe90",
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
            "const:600:8"
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
      "00590114",
      "READ",
      [
        "storage",
        "00ca65e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00590134",
      "READ",
      [
        "storage",
        "00ca65f8",
        null,
        "undefined8"
      ]
    ],
    [
      "00590134",
      "READ",
      [
        "storage",
        "00ca6600",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00590114",
      "READ",
      [
        "storage",
        "00ca75a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00590134",
      "READ",
      [
        "storage",
        "00ca75b8",
        null,
        "undefined8"
      ]
    ],
    [
      "00590134",
      "READ",
      [
        "storage",
        "00ca75c0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058fe34 ["INT_ADD", "register:40f0:8", ["const:58fe34:8", "const:4:8"]]
- 0058fe34 ["CALL", null, ["callee:00590718:8"]]
+ 00590154 ["INT_ADD", "register:40f0:8", ["const:590154:8", "const:4:8"]]
+ 00590154 ["CALL", null, ["callee:00590718:8"]]
- 0058fe90 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:600:8"]]
- 0058fe90 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 005901b0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:5c0:8"]]
+ 005901b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 0058fde8 ["COPY", "register:4048:8", ["const:ca6000:8"]]
+ 00590108 ["COPY", "register:4048:8", ["const:ca7000:8"]]
~~~


<a id="compare-1bb03879ad91d9fe7ce8c07ddc44958e"></a>

### [`0058fea0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fea0.md) → [`005901c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005901c0.md) FUN_005901c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) · 呼出先 1件 [`00c58460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58460.md)
- 新版 呼出元 1件 [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) · 呼出先 1件 [`00c59430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59430.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590228",
      "incomplete_value": false,
      "site": "00590228",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058ff08",
      "incomplete_value": false,
      "site": "0058ff08",
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
            "const:608:8"
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
      "005901e0",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ],
    [
      "005901f4",
      "READ",
      [
        "storage",
        "00ca65c8",
        null,
        "undefined8"
      ]
    ],
    [
      "005901f4",
      "READ",
      [
        "storage",
        "00ca65cc",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "005901e0",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ],
    [
      "005901f4",
      "READ",
      [
        "storage",
        "00ca7588",
        null,
        "undefined8"
      ]
    ],
    [
      "005901f4",
      "READ",
      [
        "storage",
        "00ca758c",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058ff08 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 0058ff08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:608:8"]]
- 0058ff08 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00590228 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00590228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:5c8:8"]]
+ 00590228 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0058feb4 ["COPY", "register:4098:8", ["const:ca6000:8"]]
+ 005901d4 ["COPY", "register:4098:8", ["const:ca7000:8"]]
- 0058feb8 ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 0058feb8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0058feb8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0058feb8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 005901d8 ["COPY", "tmp:0:8", ["const:580:8"]]
+ 005901d8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 005901d8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 005901d8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-a493db4950acf28329fd164cbe882839"></a>

### [`0058ff20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ff20.md) → [`00590240`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590240.md) FUN_00590240

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0055a6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6e8.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0055aa08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa08.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 62.50% / 新版 62.50%

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590250",
      "incomplete_value": false,
      "site": "00590250",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058ff30",
      "incomplete_value": false,
      "site": "0058ff30",
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
            "const:608:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590258",
      "incomplete_value": true,
      "site": "00590258",
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
            "const:580:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058ff38",
      "incomplete_value": true,
      "site": "0058ff38",
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
            "const:5c0:8"
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
      "0059024c",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00590250",
      "WRITE",
      [
        "storage",
        "00ca6608",
        null,
        "undefined1"
      ]
    ],
    [
      "00590258",
      "WRITE",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0059024c",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ],
    [
      "00590250",
      "WRITE",
      [
        "storage",
        "00ca75c8",
        null,
        "undefined1"
      ]
    ],
    [
      "00590258",
      "WRITE",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058ff30 ["COPY", "tmp:0:4", ["register:4050:4"]]
- 0058ff30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:608:8"]]
- 0058ff30 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00590250 ["COPY", "tmp:0:4", ["register:4050:4"]]
+ 00590250 ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:5c8:8"]]
+ 00590250 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0058ff38 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:5c0:8"]]
- 0058ff38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
+ 00590258 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:580:8"]]
+ 00590258 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 0058ff20 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 00590240 ["COPY", "register:4040:8", ["const:ca7000:8"]]
~~~


<a id="compare-4df0dc2c6b0910d75e77b4bd45f9949f"></a>

### [`0058ff40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ff40.md) → [`00590260`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590260.md) FUN_00590260

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0055a6ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6ec.md) [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) · 呼出先 0件 
- 新版 呼出元 2件 [`0055aa0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa0c.md) [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `store_destination` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590274",
      "incomplete_value": true,
      "site": "00590274",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058ff54",
      "incomplete_value": true,
      "site": "0058ff54",
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
            "const:608:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590280",
      "incomplete_value": true,
      "site": "00590280",
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
            "const:580:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058ff60",
      "incomplete_value": true,
      "site": "0058ff60",
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
            "const:5c0:8"
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
      "00590270",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00590274",
      "WRITE",
      [
        "storage",
        "00ca6608",
        null,
        "undefined1"
      ]
    ],
    [
      "00590280",
      "WRITE",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00590270",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ],
    [
      "00590274",
      "WRITE",
      [
        "storage",
        "00ca75c8",
        null,
        "undefined1"
      ]
    ],
    [
      "00590280",
      "WRITE",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058ff54 ["COPY", "tmp:0:4", ["register:4050:4"]]
- 0058ff54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:608:8"]]
- 0058ff54 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00590274 ["COPY", "tmp:0:4", ["register:4050:4"]]
+ 00590274 ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:5c8:8"]]
+ 00590274 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0058ff60 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:5c0:8"]]
- 0058ff60 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
+ 00590280 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:580:8"]]
+ 00590280 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
- 0058ff40 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 00590260 ["COPY", "register:4040:8", ["const:ca7000:8"]]
~~~


<a id="compare-43a4babcbe2b843e9036eeec316ed21e"></a>

### [`0058ff68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ff68.md) → [`00590288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590288.md) FUN_00590288

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 3件 [`0055a6f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a6f0.md) [`0055d628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d628.md) [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) · 呼出先 0件 
- 新版 呼出元 3件 [`0055aa10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055aa10.md) [`0055d948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d948.md) [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 58.33% / 新版 58.33%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0059029c",
      "incomplete_value": false,
      "site": "0059029c",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0058ff7c",
      "incomplete_value": false,
      "site": "0058ff7c",
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
            "const:608:8"
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
      "00590294",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ],
    [
      "00590294",
      "READ",
      [
        "storage",
        "00ca65c8",
        null,
        "undefined8"
      ]
    ],
    [
      "0059029c",
      "WRITE",
      [
        "storage",
        "00ca6608",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00590294",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ],
    [
      "00590294",
      "READ",
      [
        "storage",
        "00ca7588",
        null,
        "undefined8"
      ]
    ],
    [
      "0059029c",
      "WRITE",
      [
        "storage",
        "00ca75c8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 0058ff7c ["COPY", "tmp:0:4", ["register:4050:4"]]
- 0058ff7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:608:8"]]
- 0058ff7c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 0059029c ["COPY", "tmp:0:4", ["register:4050:4"]]
+ 0059029c ["INT_ADD", "tmp:1:8", ["register:4048:8", "const:5c8:8"]]
+ 0059029c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 0058ff68 ["COPY", "register:4040:8", ["const:ca6000:8"]]
- 0058ff6c ["COPY", "tmp:0:8", ["const:5c0:8"]]
- 0058ff6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0058ff6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0058ff6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059028c ["COPY", "tmp:0:8", ["const:580:8"]]
+ 0059028c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059028c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059028c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-620dada3cdd473de2cba419c30b697d9"></a>

### [`0058ffe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058ffe8.md) → [`00590308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590308.md) FUN_00590308

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00468200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468200.md) [`005554b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005554b8.md) [`00555cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/00555cd4.md) [`005599a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00559/005599a4.md) [`0055a478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055a/0055a478.md) · 呼出先 0件 
- 新版 呼出元 5件 [`00468520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468520.md) [`005557d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005557d8.md) [`00555ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/00555ff4.md) [`00559cc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00559/00559cc4.md) [`0055a798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055a/0055a798.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 65.91% / 新版 65.91%

優先判定に残った影響 `store_destination` 5件, `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590350",
      "incomplete_value": false,
      "site": "00590350",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:5d8:8"
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
      "definition_site": "00590030",
      "incomplete_value": false,
      "site": "00590030",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:618:8"
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
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590358",
      "incomplete_value": false,
      "site": "00590358",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:5d8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00590038",
      "incomplete_value": false,
      "site": "00590038",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:618:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590358",
      "incomplete_value": false,
      "site": "00590358",
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
                "const:18:8"
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
      "definition_site": "00590038",
      "incomplete_value": false,
      "site": "00590038",
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
                "const:18:8"
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
    "ordinal": 9,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00590328",
      "READ",
      [
        "storage",
        "00ca6608",
        null,
        "undefined1"
      ]
    ],
    [
      "00590344",
      "PARAM",
      [
        "storage",
        "00ca6618",
        null,
        "undefined8"
      ]
    ],
    [
      "00590348",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00590328",
      "READ",
      [
        "storage",
        "00ca75c8",
        null,
        "undefined1"
      ]
    ],
    [
      "00590344",
      "PARAM",
      [
        "storage",
        "00ca75d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00590348",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00590068 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00590068 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00590068 ["INT_ADD", "tmp:2:8", ["register:40b0:8", "const:608:8"]]
- 00590068 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00590388 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00590388 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00590388 ["INT_ADD", "tmp:2:8", ["register:40b0:8", "const:5c8:8"]]
+ 00590388 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 0058fffc ["COPY", "register:40b0:8", ["const:ca6000:8"]]
+ 0059031c ["COPY", "register:40b0:8", ["const:ca7000:8"]]
- 00590008 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:608:8"]]
- 00590008 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00590008 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 00590328 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:5c8:8"]]
+ 00590328 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 00590328 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-d5a6356bfd41de1853fbbc035d07661a"></a>

### [`00590098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590098.md) → [`005903b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/005903b8.md) FUN_005903b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 13件 [`005514c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005514c8.md) [`0055155c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/0055155c.md) [`005515f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005515f0.md) [`0055183c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/0055183c.md) [`005519ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00551/005519ac.md) · 呼出先 0件 
- 新版 呼出元 13件 [`005517e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/005517e8.md) [`0055187c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/0055187c.md) [`00551910`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/00551910.md) [`00551b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/00551b5c.md) [`00551ccc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00551/00551ccc.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00590430",
      "incomplete_value": true,
      "site": "00590430",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00590110",
      "incomplete_value": true,
      "site": "00590110",
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
            "const:608:8"
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
      "005903d4",
      "READ",
      [
        "storage",
        "00ca6608",
        null,
        "undefined1"
      ]
    ],
    [
      "005903ec",
      "PARAM",
      [
        "storage",
        "00ca6618",
        null,
        "undefined8"
      ]
    ],
    [
      "005903f0",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "005903d4",
      "READ",
      [
        "storage",
        "00ca75c8",
        null,
        "undefined1"
      ]
    ],
    [
      "005903ec",
      "PARAM",
      [
        "storage",
        "00ca75d8",
        null,
        "undefined8"
      ]
    ],
    [
      "005903f0",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00590110 ["COPY", "tmp:0:4", ["const:0:4"]]
- 00590110 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 00590110 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:608:8"]]
- 00590110 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 00590430 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 00590430 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 00590430 ["INT_ADD", "tmp:2:8", ["register:40a8:8", "const:5c8:8"]]
+ 00590430 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 005900a8 ["COPY", "register:40a8:8", ["const:ca6000:8"]]
+ 005903c8 ["COPY", "register:40a8:8", ["const:ca7000:8"]]
- 005900b4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:608:8"]]
- 005900b4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 005900b4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 005903d4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:5c8:8"]]
+ 005903d4 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 005903d4 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-2fb9898660ae6eaaeadcb529a8807ca2"></a>

### [`00590138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590138.md) → [`00590458`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590458.md) FUN_00590458

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0055d628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d628.md) [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) [`0055d9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d9dc.md) · 呼出先 0件 
- 新版 呼出元 3件 [`0055d948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d948.md) [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) [`0055dcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055dcfc.md) · 呼出先 0件 

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 62.90% / 新版 62.90%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 2件, `store_destination` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "005904e4",
      "incomplete_value": true,
      "site": "005904e4",
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
            "const:5c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005901c4",
      "incomplete_value": true,
      "site": "005901c4",
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
            "const:608:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": "005904fc",
      "incomplete_value": true,
      "site": "005904fc",
      "value": [
        "LOAD",
        "8",
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005901dc",
      "incomplete_value": true,
      "site": "005901dc",
      "value": [
        "LOAD",
        "8",
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
                "const:48:8"
              ]
            ]
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
      "definition_site": "005904e8",
      "incomplete_value": true,
      "site": "005904fc",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c0:8"
              ],
              [
                "leaf",
                "const:5d0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005901c8",
      "incomplete_value": true,
      "site": "005901dc",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40c0:8"
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
      "0059047c",
      "READ",
      [
        "storage",
        "00ca6608",
        null,
        "undefined1"
      ]
    ],
    [
      "005904a0",
      "PARAM",
      [
        "storage",
        "00ca6618",
        null,
        "undefined8"
      ]
    ],
    [
      "005904a4",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0059047c",
      "READ",
      [
        "storage",
        "00ca75c8",
        null,
        "undefined1"
      ]
    ],
    [
      "005904a0",
      "PARAM",
      [
        "storage",
        "00ca75d8",
        null,
        "undefined8"
      ]
    ],
    [
      "005904a4",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005901c4 ["COPY", "tmp:0:4", ["const:0:4"]]
- 005901c4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 005901c4 ["INT_ADD", "tmp:2:8", ["register:40c8:8", "const:608:8"]]
- 005901c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 005904e4 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 005904e4 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 005904e4 ["INT_ADD", "tmp:2:8", ["register:40c8:8", "const:5c8:8"]]
+ 005904e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 005901dc ["COPY", "register:0:8", ["register:4040:8"]]
- 005901dc ["INT_ADD", "register:40f0:8", ["const:5901dc:8", "const:4:8"]]
- 005901dc ["CALLIND", null, ["register:0:8"]]
+ 005904fc ["COPY", "register:0:8", ["register:4040:8"]]
+ 005904fc ["INT_ADD", "register:40f0:8", ["const:5904fc:8", "const:4:8"]]
+ 005904fc ["CALLIND", null, ["register:0:8"]]
- 00590200 ["COPY", "register:0:8", ["register:4040:8"]]
- 00590200 ["INT_ADD", "register:40f0:8", ["const:590200:8", "const:4:8"]]
- 00590200 ["CALLIND", null, ["register:0:8"]]
+ 00590520 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00590520 ["INT_ADD", "register:40f0:8", ["const:590520:8", "const:4:8"]]
+ 00590520 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d7b76171205c086faf5381ce81ec1f84"></a>

### [`00590230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590230.md) → [`00590550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00590/00590550.md) FUN_00590550

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`0055d628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d628.md) [`0055d800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d800.md) [`0055d9dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055d/0055d9dc.md) · 呼出先 0件 
- 新版 呼出元 3件 [`0055d948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055d948.md) [`0055db20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055db20.md) [`0055dcfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055d/0055dcfc.md) · 呼出先 0件 

変更の種類 call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 55.77% / 新版 55.77%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `store_destination` 9件, `store_value` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "005905a8",
      "incomplete_value": false,
      "site": "005905a8",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:5d8:8"
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
      "definition_site": "00590288",
      "incomplete_value": false,
      "site": "00590288",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:618:8"
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
      "definition_site": "005905b0",
      "incomplete_value": false,
      "site": "005905b0",
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
                "const:ca7000:8"
              ],
              [
                "leaf",
                "const:5d8:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00590290",
      "incomplete_value": false,
      "site": "00590290",
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
                "const:ca6000:8"
              ],
              [
                "leaf",
                "const:618:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:18:8"
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
      "definition_site": "005905b0",
      "incomplete_value": false,
      "site": "005905b0",
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
                "const:18:8"
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
      "definition_site": "00590290",
      "incomplete_value": false,
      "site": "00590290",
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
                "const:18:8"
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
      "00590574",
      "READ",
      [
        "storage",
        "00ca6608",
        null,
        "undefined1"
      ]
    ],
    [
      "0059059c",
      "PARAM",
      [
        "storage",
        "00ca6618",
        null,
        "undefined8"
      ]
    ],
    [
      "005905a0",
      "READ",
      [
        "storage",
        "00ca65c0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00590574",
      "READ",
      [
        "storage",
        "00ca75c8",
        null,
        "undefined1"
      ]
    ],
    [
      "0059059c",
      "PARAM",
      [
        "storage",
        "00ca75d8",
        null,
        "undefined8"
      ]
    ],
    [
      "005905a0",
      "READ",
      [
        "storage",
        "00ca7580",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005902bc ["COPY", "register:0:8", ["register:4040:8"]]
- 005902bc ["INT_ADD", "register:40f0:8", ["const:5902bc:8", "const:4:8"]]
- 005902bc ["CALLIND", null, ["register:0:8"]]
+ 005905dc ["COPY", "register:0:8", ["register:4040:8"]]
+ 005905dc ["INT_ADD", "register:40f0:8", ["const:5905dc:8", "const:4:8"]]
+ 005905dc ["CALLIND", null, ["register:0:8"]]
- 005902c0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 005902c0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 005902c0 ["INT_ADD", "tmp:2:8", ["register:40c8:8", "const:608:8"]]
- 005902c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 005905e0 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 005905e0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 005905e0 ["INT_ADD", "tmp:2:8", ["register:40c8:8", "const:5c8:8"]]
+ 005905e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 00590248 ["COPY", "register:40c8:8", ["const:ca6000:8"]]
+ 00590568 ["COPY", "register:40c8:8", ["const:ca7000:8"]]
~~~


<a id="compare-3b95de3ef0830ba24864cc53b3c1da04"></a>

### [`00590df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590df8.md) → [`00591118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591118.md) FUN_00591118

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005923f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005923f0.md) · 呼出先 17件 [`00550c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/00550c44.md) [`005552b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552b4.md) [`0059129c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/0059129c.md) [`005925b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005925b8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`00592710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592710.md) · 呼出先 17件 [`00550f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550f64.md) [`005555d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555d4.md) [`005915bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/005915bc.md) [`005928d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005928d8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 94.02% / 新版 94.02%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00591144",
      "incomplete_value": false,
      "site": "00591150",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00590e24",
      "incomplete_value": false,
      "site": "00590e30",
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
            "const:e0:8"
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
      "definition_site": "00591184",
      "incomplete_value": true,
      "site": "00591184",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:222:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00590e64",
      "incomplete_value": true,
      "site": "00590e64",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1e2:8"
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
      "definition_site": "005911c4",
      "incomplete_value": true,
      "site": "005911c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e09:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00590ea4",
      "incomplete_value": true,
      "site": "00590ea4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d2b:8"
              ]
            ]
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
      "00591150",
      "DATA",
      [
        "storage",
        "00c6d0e0",
        null,
        "undefined *"
      ]
    ],
    [
      "00591174",
      "READ",
      [
        "storage",
        "002a01e2",
        null,
        "string"
      ]
    ],
    [
      "005911b4",
      "READ",
      [
        "storage",
        "002b3d2b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00591150",
      "DATA",
      [
        "storage",
        "00c6e0b0",
        null,
        "undefined *"
      ]
    ],
    [
      "00591174",
      "READ",
      [
        "storage",
        "002a0222",
        null,
        "string"
      ]
    ],
    [
      "005911b4",
      "READ",
      [
        "storage",
        "002b3e09",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00590f28 ["INT_ADD", "register:40f0:8", ["const:590f28:8", "const:4:8"]]
- 00590f28 ["CALL", null, ["callee:00c596b0:8"]]
+ 00591248 ["INT_ADD", "register:40f0:8", ["const:591248:8", "const:4:8"]]
+ 00591248 ["CALL", null, ["callee:00c596b0:8"]]
- 00590fbc ["INT_ADD", "register:40f0:8", ["const:590fbc:8", "const:4:8"]]
- 00590fbc ["CALL", null, ["callee:005928d8:8"]]
+ 005912dc ["INT_ADD", "register:40f0:8", ["const:5912dc:8", "const:4:8"]]
+ 005912dc ["CALL", null, ["callee:005928d8:8"]]
- 00590fec ["INT_ADD", "register:40f0:8", ["const:590fec:8", "const:4:8"]]
- 00590fec ["CALL", null, ["callee:005928d8:8"]]
+ 0059130c ["INT_ADD", "register:40f0:8", ["const:59130c:8", "const:4:8"]]
+ 0059130c ["CALL", null, ["callee:005928d8:8"]]
~~~


<a id="compare-fcb8c60a023811841c90dd216338acd7"></a>

### [`005912f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/005912f8.md) → [`00591618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591618.md) FUN_00591618

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a430.md) [`00c5a440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a440.md)
- 新版 呼出元 0件  · 呼出先 6件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b400.md) [`00c5b410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b410.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.73% / 新版 88.73%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005916e4",
      "incomplete_value": false,
      "site": "005916e4",
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
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005913c4",
      "incomplete_value": false,
      "site": "005913c4",
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
            "const:300:8"
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
      "definition_site": "005916fc",
      "incomplete_value": true,
      "site": "00591704",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005913dc",
      "incomplete_value": true,
      "site": "005913e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:750:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00591674",
      "incomplete_value": true,
      "site": "00591678",
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
              "LOAD"
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591354",
      "incomplete_value": true,
      "site": "00591358",
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
              "LOAD"
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
      "00591670",
      "READ",
      [
        "storage",
        "00c9b350",
        null,
        "pointer"
      ]
    ],
    [
      "00591674",
      "READ",
      [
        "storage",
        "00ca3f14",
        null,
        "undefined4"
      ]
    ],
    [
      "0059167c",
      "READ",
      [
        "storage",
        "00ca3f18",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "00591670",
      "READ",
      [
        "storage",
        "00c9c320",
        null,
        "pointer"
      ]
    ],
    [
      "00591674",
      "READ",
      [
        "storage",
        "00ca4ee4",
        null,
        "undefined4"
      ]
    ],
    [
      "0059167c",
      "READ",
      [
        "storage",
        "00ca4ee8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00591358 ["INT_ADD", "register:40f0:8", ["const:591358:8", "const:4:8"]]
- 00591358 ["CALL", null, ["callee:00c5b420:8"]]
+ 00591678 ["INT_ADD", "register:40f0:8", ["const:591678:8", "const:4:8"]]
+ 00591678 ["CALL", null, ["callee:00c5b420:8"]]
- 00591334 ["INT_ADD", "register:40f0:8", ["const:591334:8", "const:4:8"]]
- 00591334 ["CALL", null, ["callee:00c5b400:8"]]
+ 00591654 ["INT_ADD", "register:40f0:8", ["const:591654:8", "const:4:8"]]
+ 00591654 ["CALL", null, ["callee:00c5b400:8"]]
- 00591340 ["INT_ADD", "register:40f0:8", ["const:591340:8", "const:4:8"]]
- 00591340 ["CALL", null, ["callee:00c5b410:8"]]
+ 00591660 ["INT_ADD", "register:40f0:8", ["const:591660:8", "const:4:8"]]
+ 00591660 ["CALL", null, ["callee:00c5b410:8"]]
~~~


<a id="compare-7fb980419e14484909a1d157363a24c3"></a>

### [`00591440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591440.md) → [`00591760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591760.md) FUN_00591760

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 10件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a430.md) [`00c5a440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a440.md)
- 新版 呼出元 0件  · 呼出先 10件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b400.md) [`00c5b410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b410.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.35% / 新版 84.35%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 5件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059183c",
      "incomplete_value": false,
      "site": "00591844",
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
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059151c",
      "incomplete_value": false,
      "site": "00591524",
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
            "const:2b0:8"
          ]
        ]
      ]
    },
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059185c",
      "incomplete_value": false,
      "site": "0059185c",
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
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059153c",
      "incomplete_value": false,
      "site": "0059153c",
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
            "const:300:8"
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
      "definition_site": "00591874",
      "incomplete_value": true,
      "site": "00591878",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7a0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591554",
      "incomplete_value": true,
      "site": "00591558",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:750:8"
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
      "005917c0",
      "READ",
      [
        "storage",
        "00c9b350",
        null,
        "pointer"
      ]
    ],
    [
      "005917c4",
      "READ",
      [
        "storage",
        "00ca3f14",
        null,
        "undefined4"
      ]
    ],
    [
      "005917cc",
      "READ",
      [
        "storage",
        "00ca3f18",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "005917c0",
      "READ",
      [
        "storage",
        "00c9c320",
        null,
        "pointer"
      ]
    ],
    [
      "005917c4",
      "READ",
      [
        "storage",
        "00ca4ee4",
        null,
        "undefined4"
      ]
    ],
    [
      "005917cc",
      "READ",
      [
        "storage",
        "00ca4ee8",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005914a8 ["INT_ADD", "register:40f0:8", ["const:5914a8:8", "const:4:8"]]
- 005914a8 ["CALL", null, ["callee:00c5b420:8"]]
+ 005917c8 ["INT_ADD", "register:40f0:8", ["const:5917c8:8", "const:4:8"]]
+ 005917c8 ["CALL", null, ["callee:00c5b420:8"]]
- 00591484 ["INT_ADD", "register:40f0:8", ["const:591484:8", "const:4:8"]]
- 00591484 ["CALL", null, ["callee:00c5b400:8"]]
+ 005917a4 ["INT_ADD", "register:40f0:8", ["const:5917a4:8", "const:4:8"]]
+ 005917a4 ["CALL", null, ["callee:00c5b400:8"]]
- 00591490 ["INT_ADD", "register:40f0:8", ["const:591490:8", "const:4:8"]]
- 00591490 ["CALL", null, ["callee:00c5b410:8"]]
+ 005917b0 ["INT_ADD", "register:40f0:8", ["const:5917b0:8", "const:4:8"]]
+ 005917b0 ["CALL", null, ["callee:00c5b410:8"]]
~~~


<a id="compare-53afb3b1461f3dc48ff70b3f9ae028be"></a>

### [`0059163c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/0059163c.md) → [`0059195c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/0059195c.md) FUN_0059195c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a4d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c5b4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b4a0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.93% / 新版 82.93%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005919a0",
      "incomplete_value": false,
      "site": "005919a8",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591680",
      "incomplete_value": false,
      "site": "00591688",
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
            "const:420:8"
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
      "definition_site": "005919c0",
      "incomplete_value": false,
      "site": "005919c0",
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
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005916a0",
      "incomplete_value": false,
      "site": "005916a0",
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
            "const:470:8"
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
      "005919a8",
      "DATA",
      [
        "storage",
        "00c6d420",
        null,
        "undefined *"
      ]
    ],
    [
      "005919c0",
      "DATA",
      [
        "storage",
        "00c6d470",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005919a8",
      "DATA",
      [
        "storage",
        "00c6e3f0",
        null,
        "undefined *"
      ]
    ],
    [
      "005919c0",
      "DATA",
      [
        "storage",
        "00c6e440",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00591670 ["INT_ADD", "register:40f0:8", ["const:591670:8", "const:4:8"]]
- 00591670 ["CALL", null, ["callee:00c5b4a0:8"]]
+ 00591990 ["INT_ADD", "register:40f0:8", ["const:591990:8", "const:4:8"]]
+ 00591990 ["CALL", null, ["callee:00c5b4a0:8"]]
- 00591678 ["INT_ADD", "register:40f0:8", ["const:591678:8", "const:4:8"]]
- 00591678 ["CALL", null, ["callee:00c58f30:8"]]
+ 00591998 ["INT_ADD", "register:40f0:8", ["const:591998:8", "const:4:8"]]
+ 00591998 ["CALL", null, ["callee:00c58f30:8"]]
- 0059167c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059199c ["COPY", "register:4040:8", ["const:c6e000:8"]]
~~~


<a id="compare-9a782a619fb36a6af04b8554c9b0fc30"></a>

### [`005917c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/005917c8.md) → [`00591ae8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591ae8.md) FUN_00591ae8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`005925b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005925b8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005928d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005928d8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00591b00",
      "incomplete_value": false,
      "site": "00591b0c",
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
            "const:f31:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005917e0",
      "incomplete_value": false,
      "site": "005917ec",
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
            "const:e53:8"
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
      "00591b00",
      "PARAM",
      [
        "storage",
        "002bee53",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00591b00",
      "PARAM",
      [
        "storage",
        "002bef31",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005917ec ["INT_ADD", "register:40f0:8", ["const:5917ec:8", "const:4:8"]]
- 005917ec ["CALL", null, ["callee:005928d8:8"]]
+ 00591b0c ["INT_ADD", "register:40f0:8", ["const:591b0c:8", "const:4:8"]]
+ 00591b0c ["CALL", null, ["callee:005928d8:8"]]
- 005917e0 ["COPY", "tmp:0:8", ["const:e53:8"]]
- 005917e0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 005917e0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 005917e0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00591b00 ["COPY", "tmp:0:8", ["const:f31:8"]]
+ 00591b00 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00591b00 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00591b00 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-f69fbd73ba64ad48e552cd49c375b039"></a>

### [`00591880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591880.md) → [`00591ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591ba0.md) FUN_00591ba0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`005925b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005925b8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005928d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005928d8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00591bb8",
      "incomplete_value": false,
      "site": "00591bc4",
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
            "const:355:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591898",
      "incomplete_value": false,
      "site": "005918a4",
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
            "const:28a:8"
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
      "00591bb8",
      "PARAM",
      [
        "storage",
        "002a328a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00591bb8",
      "PARAM",
      [
        "storage",
        "002a3355",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005918a4 ["INT_ADD", "register:40f0:8", ["const:5918a4:8", "const:4:8"]]
- 005918a4 ["CALL", null, ["callee:005928d8:8"]]
+ 00591bc4 ["INT_ADD", "register:40f0:8", ["const:591bc4:8", "const:4:8"]]
+ 00591bc4 ["CALL", null, ["callee:005928d8:8"]]
- 00591898 ["COPY", "tmp:0:8", ["const:28a:8"]]
- 00591898 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00591898 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00591898 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00591bb8 ["COPY", "tmp:0:8", ["const:355:8"]]
+ 00591bb8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00591bb8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00591bb8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-cf201e31b99a137a1b4015e149e59b0b"></a>

### [`005918c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/005918c8.md) → [`00591be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591be8.md) FUN_00591be8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`005925b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005925b8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`005928d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005928d8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00591c00",
      "incomplete_value": false,
      "site": "00591c10",
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
            "const:9a5:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005918e0",
      "incomplete_value": false,
      "site": "005918f0",
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
            "const:8d8:8"
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
      "00591c00",
      "PARAM",
      [
        "storage",
        "002ad8d8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00591c00",
      "PARAM",
      [
        "storage",
        "002ad9a5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005918f0 ["INT_ADD", "register:40f0:8", ["const:5918f0:8", "const:4:8"]]
- 005918f0 ["CALL", null, ["callee:005928d8:8"]]
+ 00591c10 ["INT_ADD", "register:40f0:8", ["const:591c10:8", "const:4:8"]]
+ 00591c10 ["CALL", null, ["callee:005928d8:8"]]
- 005918e0 ["COPY", "tmp:0:8", ["const:8d8:8"]]
- 005918e0 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 005918e0 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 005918e0 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00591c00 ["COPY", "tmp:0:8", ["const:9a5:8"]]
+ 00591c00 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00591c00 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00591c00 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-e128a89ac36c26347473d3ffb3f4956b"></a>

### [`005919f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/005919f8.md) → [`00591d18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591d18.md) FUN_00591d18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 5件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md) [`00c5a540`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a540.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md) [`00c5b510`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b510.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00591d40",
      "incomplete_value": false,
      "site": "00591d50",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591a20",
      "incomplete_value": false,
      "site": "00591a30",
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
            "const:290:8"
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
      "definition_site": "00591d44",
      "incomplete_value": true,
      "site": "00591d50",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:380:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591a24",
      "incomplete_value": true,
      "site": "00591a30",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3b0:8"
              ]
            ]
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
      "00591d40",
      "PARAM",
      [
        "storage",
        "00c6d290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00591d44",
      "READ",
      [
        "storage",
        "00c9b3b0",
        null,
        "pointer"
      ]
    ],
    [
      "00591d44",
      "PARAM",
      [
        "storage",
        "00c6d5b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00591d40",
      "PARAM",
      [
        "storage",
        "00c6e260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00591d44",
      "READ",
      [
        "storage",
        "00c9c380",
        null,
        "pointer"
      ]
    ],
    [
      "00591d44",
      "PARAM",
      [
        "storage",
        "00c6e580",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00591a30 ["INT_ADD", "register:40f0:8", ["const:591a30:8", "const:4:8"]]
- 00591a30 ["CALL", null, ["callee:00c596b0:8"]]
+ 00591d50 ["INT_ADD", "register:40f0:8", ["const:591d50:8", "const:4:8"]]
+ 00591d50 ["CALL", null, ["callee:00c596b0:8"]]
- 00591a14 ["COPY", "register:4010:8", ["const:c9b000:8"]]
+ 00591d34 ["COPY", "register:4010:8", ["const:c9c000:8"]]
- 00591a1c ["COPY", "register:4008:8", ["const:c6d000:8"]]
+ 00591d3c ["COPY", "register:4008:8", ["const:c6e000:8"]]
~~~


<a id="compare-ad5f056ba12f7ea5f3ec9400dd6c6cdf"></a>

### [`00591cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591cbc.md) → [`00591fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591fdc.md) FUN_00591fdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0058fc04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fc04.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md) [`00c5a440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a440.md) [`00c5a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a470.md) [`00c5a5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a5a0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0058ff24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058ff24.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md) [`00c5b410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b410.md) [`00c5b440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b440.md) [`00c5b570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b570.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0059201c",
      "incomplete_value": true,
      "site": "00592028",
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
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591cfc",
      "incomplete_value": true,
      "site": "00591d08",
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
            "const:200:8"
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
      "definition_site": "00592040",
      "incomplete_value": false,
      "site": "00592050",
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
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591d20",
      "incomplete_value": false,
      "site": "00591d30",
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
            "const:218:8"
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
      "definition_site": "00592048",
      "incomplete_value": false,
      "site": "00592050",
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
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591d28",
      "incomplete_value": false,
      "site": "00591d30",
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
            "const:228:8"
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
      "00592014",
      "PARAM",
      [
        "storage",
        "00c6d1f0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0059201c",
      "PARAM",
      [
        "storage",
        "00c6d200",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00592040",
      "PARAM",
      [
        "storage",
        "00c6d218",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00592014",
      "PARAM",
      [
        "storage",
        "00c6e1c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0059201c",
      "PARAM",
      [
        "storage",
        "00c6e1d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00592040",
      "PARAM",
      [
        "storage",
        "00c6e1e8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00591d08 ["INT_ADD", "register:40f0:8", ["const:591d08:8", "const:4:8"]]
- 00591d08 ["CALL", null, ["callee:00c596b0:8"]]
+ 00592028 ["INT_ADD", "register:40f0:8", ["const:592028:8", "const:4:8"]]
+ 00592028 ["CALL", null, ["callee:00c596b0:8"]]
- 00591d30 ["INT_ADD", "register:40f0:8", ["const:591d30:8", "const:4:8"]]
- 00591d30 ["CALL", null, ["callee:00c596b0:8"]]
+ 00592050 ["INT_ADD", "register:40f0:8", ["const:592050:8", "const:4:8"]]
+ 00592050 ["CALL", null, ["callee:00c596b0:8"]]
- 00591cf0 ["COPY", "register:4008:8", ["const:c6d000:8"]]
+ 00592010 ["COPY", "register:4008:8", ["const:c6e000:8"]]
~~~


<a id="compare-a8edc12b41b21288101e5e84d6c63b4a"></a>

### [`00591e04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/00591e04.md) → [`00592124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592124.md) FUN_00592124

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0058fc04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058f/0058fc04.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md) [`00c5a440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a440.md) [`00c5a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a470.md) [`00c5a5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a5a0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0058ff24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058f/0058ff24.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md) [`00c5b410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b410.md) [`00c5b440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b440.md) [`00c5b570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b570.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.50% / 新版 94.50%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00592194",
      "incomplete_value": false,
      "site": "0059219c",
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
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591e74",
      "incomplete_value": false,
      "site": "00591e7c",
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
            "const:228:8"
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
      "definition_site": "005921b0",
      "incomplete_value": false,
      "site": "005921c0",
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
            "const:1e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591e90",
      "incomplete_value": false,
      "site": "00591ea0",
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
            "const:218:8"
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
      "definition_site": "005921b8",
      "incomplete_value": false,
      "site": "005921c0",
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
            "const:1f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00591e98",
      "incomplete_value": false,
      "site": "00591ea0",
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
            "const:228:8"
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
      "00592164",
      "PARAM",
      [
        "storage",
        "00c6d1f0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0059216c",
      "PARAM",
      [
        "storage",
        "00c6d200",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0059218c",
      "PARAM",
      [
        "storage",
        "00c6d218",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00592164",
      "PARAM",
      [
        "storage",
        "00c6e1c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0059216c",
      "PARAM",
      [
        "storage",
        "00c6e1d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0059218c",
      "PARAM",
      [
        "storage",
        "00c6e1e8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00591e7c ["INT_ADD", "register:40f0:8", ["const:591e7c:8", "const:4:8"]]
- 00591e7c ["CALL", null, ["callee:00c596b0:8"]]
+ 0059219c ["INT_ADD", "register:40f0:8", ["const:59219c:8", "const:4:8"]]
+ 0059219c ["CALL", null, ["callee:00c596b0:8"]]
- 00591ea0 ["INT_ADD", "register:40f0:8", ["const:591ea0:8", "const:4:8"]]
- 00591ea0 ["CALL", null, ["callee:00c596b0:8"]]
+ 005921c0 ["INT_ADD", "register:40f0:8", ["const:5921c0:8", "const:4:8"]]
+ 005921c0 ["CALL", null, ["callee:00c596b0:8"]]
- 00591e40 ["COPY", "register:4008:8", ["const:c6d000:8"]]
+ 00592160 ["COPY", "register:4008:8", ["const:c6e000:8"]]
~~~


<a id="compare-fa77fa20ec074a0ff7a438bcec297910"></a>

### [`00592100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592100.md) → [`00592420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592420.md) FUN_00592420

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00592188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592188.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005924a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005924a8.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00592448",
      "incomplete_value": false,
      "site": "00592464",
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
            "const:210:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592128",
      "incomplete_value": false,
      "site": "00592144",
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
            "const:240:8"
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
      "definition_site": "00592450",
      "incomplete_value": false,
      "site": "00592464",
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
            "const:220:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592130",
      "incomplete_value": false,
      "site": "00592144",
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
            "const:250:8"
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
      "00592448",
      "PARAM",
      [
        "storage",
        "00c6d240",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00592450",
      "PARAM",
      [
        "storage",
        "00c6d250",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00592448",
      "PARAM",
      [
        "storage",
        "00c6e210",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00592450",
      "PARAM",
      [
        "storage",
        "00c6e220",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592144 ["INT_ADD", "register:40f0:8", ["const:592144:8", "const:4:8"]]
- 00592144 ["CALL", null, ["callee:00c596b0:8"]]
+ 00592464 ["INT_ADD", "register:40f0:8", ["const:592464:8", "const:4:8"]]
+ 00592464 ["CALL", null, ["callee:00c596b0:8"]]
- 00592124 ["COPY", "register:4008:8", ["const:c6d000:8"]]
+ 00592444 ["COPY", "register:4008:8", ["const:c6e000:8"]]
- 00592128 ["COPY", "tmp:0:8", ["const:240:8"]]
- 00592128 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00592128 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00592128 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00592448 ["COPY", "tmp:0:8", ["const:210:8"]]
+ 00592448 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00592448 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00592448 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-c15830fca32193728d4d349fc04ee9e4"></a>

### [`005923f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005923f0.md) → [`00592710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592710.md) FUN_00592710

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0043b128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b128.md) · 呼出先 2件 [`00590df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00590/00590df8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`0043b448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b448.md) · 呼出先 2件 [`00591118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591118.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00592734",
      "incomplete_value": false,
      "site": "00592740",
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
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592414",
      "incomplete_value": false,
      "site": "00592420",
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
            "const:530:8"
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
      "00592740",
      "DATA",
      [
        "storage",
        "00c6d530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592740",
      "DATA",
      [
        "storage",
        "00c6e500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592408 ["INT_ADD", "register:40f0:8", ["const:592408:8", "const:4:8"]]
- 00592408 ["CALL", null, ["callee:00c58f30:8"]]
+ 00592728 ["INT_ADD", "register:40f0:8", ["const:592728:8", "const:4:8"]]
+ 00592728 ["CALL", null, ["callee:00c58f30:8"]]
- 00592410 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592730 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592414 ["COPY", "tmp:0:8", ["const:530:8"]]
- 00592414 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592414 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592414 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592734 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 00592734 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592734 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592734 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8b89a5a50c18d2cc22415aa82fd897da"></a>

### [`0059245c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/0059245c.md) → [`0059277c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/0059277c.md) FUN_0059277c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00592794",
      "incomplete_value": false,
      "site": "00592798",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592474",
      "incomplete_value": false,
      "site": "00592478",
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
            "const:e0:8"
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
      "00592798",
      "DATA",
      [
        "storage",
        "00c6d0e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592798",
      "DATA",
      [
        "storage",
        "00c6e0b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592470 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592790 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592474 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 00592474 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592474 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592474 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592794 ["COPY", "tmp:0:8", ["const:b0:8"]]
+ 00592794 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592794 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592794 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592488 ["INT_ADD", "register:40f0:8", ["const:592488:8", "const:4:8"]]
- 00592488 ["CALL", null, ["callee:00c54d90:8"]]
+ 005927a8 ["INT_ADD", "register:40f0:8", ["const:5927a8:8", "const:4:8"]]
+ 005927a8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-33fb769458d1a96d3157500a37ef6e76"></a>

### [`005924f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005924f8.md) → [`00592818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592818.md) FUN_00592818

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00592830",
      "incomplete_value": false,
      "site": "00592834",
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
            "const:b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592510",
      "incomplete_value": false,
      "site": "00592514",
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
            "const:e0:8"
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
      "00592834",
      "DATA",
      [
        "storage",
        "00c6d0e0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592834",
      "DATA",
      [
        "storage",
        "00c6e0b0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059250c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059282c ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592510 ["COPY", "tmp:0:8", ["const:e0:8"]]
- 00592510 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592510 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592510 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592830 ["COPY", "tmp:0:8", ["const:b0:8"]]
+ 00592830 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592830 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592830 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592524 ["INT_ADD", "register:40f0:8", ["const:592524:8", "const:4:8"]]
- 00592524 ["CALL", null, ["callee:00c54d90:8"]]
+ 00592844 ["INT_ADD", "register:40f0:8", ["const:592844:8", "const:4:8"]]
+ 00592844 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-d6c44d032b1d40179c8aaf63038ecf30"></a>

### [`00592604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592604.md) → [`00592924`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592924.md) FUN_00592924

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
      "definition_site": "00592928",
      "incomplete_value": false,
      "site": "0059292c",
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
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592608",
      "incomplete_value": false,
      "site": "0059260c",
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
            "const:2b0:8"
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
      "0059292c",
      "DATA",
      [
        "storage",
        "00c6d2b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059292c",
      "DATA",
      [
        "storage",
        "00c6e280",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592604 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592924 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592608 ["COPY", "tmp:0:8", ["const:2b0:8"]]
- 00592608 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592608 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592608 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592928 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 00592928 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592928 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592928 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-259a487f952b7b923ba66630e64af015"></a>

### [`00592614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592614.md) → [`00592934`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592934.md) FUN_00592934

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
      "definition_site": "00592944",
      "incomplete_value": false,
      "site": "0059294c",
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
            "const:280:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592624",
      "incomplete_value": false,
      "site": "0059262c",
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
            "const:2b0:8"
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
      "0059294c",
      "DATA",
      [
        "storage",
        "00c6d2b0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059294c",
      "DATA",
      [
        "storage",
        "00c6e280",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592620 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592940 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592624 ["COPY", "tmp:0:8", ["const:2b0:8"]]
- 00592624 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592624 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592624 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592944 ["COPY", "tmp:0:8", ["const:280:8"]]
+ 00592944 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592944 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592944 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592630 ["INT_ADD", "register:40f0:8", ["const:592630:8", "const:4:8"]]
- 00592630 ["CALL", null, ["callee:00c58f40:8"]]
+ 00592950 ["INT_ADD", "register:40f0:8", ["const:592950:8", "const:4:8"]]
+ 00592950 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-4420645cac0018a182e6e7eec5193e5d"></a>

### [`00592654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592654.md) → [`00592974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592974.md) FUN_00592974

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c5a620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a620.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c5b5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b5f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059298c",
      "incomplete_value": false,
      "site": "00592990",
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
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059266c",
      "incomplete_value": false,
      "site": "00592670",
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
            "const:300:8"
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
      "00592990",
      "DATA",
      [
        "storage",
        "00c6d300",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592990",
      "DATA",
      [
        "storage",
        "00c6e2d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592668 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592988 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0059266c ["COPY", "tmp:0:8", ["const:300:8"]]
- 0059266c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059266c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059266c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059298c ["COPY", "tmp:0:8", ["const:2d0:8"]]
+ 0059298c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059298c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059298c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592674 ["INT_ADD", "register:40f0:8", ["const:592674:8", "const:4:8"]]
- 00592674 ["CALL", null, ["callee:005555e8:8"]]
+ 00592994 ["INT_ADD", "register:40f0:8", ["const:592994:8", "const:4:8"]]
+ 00592994 ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-6722202dcfa43b5d0950d6e596a99a7f"></a>

### [`0059269c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/0059269c.md) → [`005929bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/005929bc.md) FUN_005929bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a620.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b5f0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005929d4",
      "incomplete_value": false,
      "site": "005929d8",
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
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005926b4",
      "incomplete_value": false,
      "site": "005926b8",
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
            "const:300:8"
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
      "005929d8",
      "DATA",
      [
        "storage",
        "00c6d300",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005929d8",
      "DATA",
      [
        "storage",
        "00c6e2d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005926b0 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005929d0 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005926b4 ["COPY", "tmp:0:8", ["const:300:8"]]
- 005926b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005926b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005926b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005929d4 ["COPY", "tmp:0:8", ["const:2d0:8"]]
+ 005929d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005929d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005929d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005926bc ["INT_ADD", "register:40f0:8", ["const:5926bc:8", "const:4:8"]]
- 005926bc ["CALL", null, ["callee:005555e8:8"]]
+ 005929dc ["INT_ADD", "register:40f0:8", ["const:5929dc:8", "const:4:8"]]
+ 005929dc ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-747389a58d6c5d8ea04f9bab1c996225"></a>

### [`0059288c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/0059288c.md) → [`00592bac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592bac.md) FUN_00592bac

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
      "definition_site": "00592bb0",
      "incomplete_value": false,
      "site": "00592bb4",
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
            "const:338:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592890",
      "incomplete_value": false,
      "site": "00592894",
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
            "const:368:8"
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
      "00592bb4",
      "DATA",
      [
        "storage",
        "00c6d368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592bb4",
      "DATA",
      [
        "storage",
        "00c6e338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059288c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592bac ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592890 ["COPY", "tmp:0:8", ["const:368:8"]]
- 00592890 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592890 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592890 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592bb0 ["COPY", "tmp:0:8", ["const:338:8"]]
+ 00592bb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592bb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592bb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0d8660f02b7fbd4ffb71edb6c27dae1f"></a>

### [`0059289c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/0059289c.md) → [`00592bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592bbc.md) FUN_00592bbc

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
      "definition_site": "00592bcc",
      "incomplete_value": false,
      "site": "00592bd4",
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
            "const:338:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005928ac",
      "incomplete_value": false,
      "site": "005928b4",
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
            "const:368:8"
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
      "00592bd4",
      "DATA",
      [
        "storage",
        "00c6d368",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592bd4",
      "DATA",
      [
        "storage",
        "00c6e338",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005928a8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592bc8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005928ac ["COPY", "tmp:0:8", ["const:368:8"]]
- 005928ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005928ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005928ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592bcc ["COPY", "tmp:0:8", ["const:338:8"]]
+ 00592bcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592bcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592bcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005928b8 ["INT_ADD", "register:40f0:8", ["const:5928b8:8", "const:4:8"]]
- 005928b8 ["CALL", null, ["callee:00c58f40:8"]]
+ 00592bd8 ["INT_ADD", "register:40f0:8", ["const:592bd8:8", "const:4:8"]]
+ 00592bd8 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-391db45609896d8ec16107a1c1755c9d"></a>

### [`005928dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005928dc.md) → [`00592bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592bfc.md) FUN_00592bfc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c5a630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a630.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c5b600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b600.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00592c14",
      "incomplete_value": false,
      "site": "00592c18",
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
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005928f4",
      "incomplete_value": false,
      "site": "005928f8",
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
            "const:3b8:8"
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
      "00592c18",
      "DATA",
      [
        "storage",
        "00c6d3b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592c18",
      "DATA",
      [
        "storage",
        "00c6e388",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005928f0 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592c10 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005928f4 ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 005928f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005928f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005928f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592c14 ["COPY", "tmp:0:8", ["const:388:8"]]
+ 00592c14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592c14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592c14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005928fc ["INT_ADD", "register:40f0:8", ["const:5928fc:8", "const:4:8"]]
- 005928fc ["CALL", null, ["callee:005555e8:8"]]
+ 00592c1c ["INT_ADD", "register:40f0:8", ["const:592c1c:8", "const:4:8"]]
+ 00592c1c ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-42339d7f1c8174359e88f3c4eeccff39"></a>

### [`00592924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592924.md) → [`00592c44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592c44.md) FUN_00592c44

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a630.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b600.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00592c5c",
      "incomplete_value": false,
      "site": "00592c60",
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
            "const:388:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059293c",
      "incomplete_value": false,
      "site": "00592940",
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
            "const:3b8:8"
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
      "00592c60",
      "DATA",
      [
        "storage",
        "00c6d3b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592c60",
      "DATA",
      [
        "storage",
        "00c6e388",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592938 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592c58 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0059293c ["COPY", "tmp:0:8", ["const:3b8:8"]]
- 0059293c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059293c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059293c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592c5c ["COPY", "tmp:0:8", ["const:388:8"]]
+ 00592c5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592c5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592c5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592944 ["INT_ADD", "register:40f0:8", ["const:592944:8", "const:4:8"]]
- 00592944 ["CALL", null, ["callee:005555e8:8"]]
+ 00592c64 ["INT_ADD", "register:40f0:8", ["const:592c64:8", "const:4:8"]]
+ 00592c64 ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-6c0fc6078b2f2d7bce6b0c4dab55c2ff"></a>

### [`005929b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005929b8.md) → [`00592cd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592cd8.md) FUN_00592cd8

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
      "definition_site": "00592cdc",
      "incomplete_value": false,
      "site": "00592ce0",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005929bc",
      "incomplete_value": false,
      "site": "005929c0",
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
            "const:420:8"
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
      "00592ce0",
      "DATA",
      [
        "storage",
        "00c6d420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592ce0",
      "DATA",
      [
        "storage",
        "00c6e3f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005929b8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592cd8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005929bc ["COPY", "tmp:0:8", ["const:420:8"]]
- 005929bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005929bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005929bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592cdc ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 00592cdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592cdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592cdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4ac64f8dc4dd134b9771a23f5ae686bd"></a>

### [`005929c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/005929c8.md) → [`00592ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592ce8.md) FUN_00592ce8

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
      "definition_site": "00592cf8",
      "incomplete_value": false,
      "site": "00592d00",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005929d8",
      "incomplete_value": false,
      "site": "005929e0",
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
            "const:420:8"
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
      "00592d00",
      "DATA",
      [
        "storage",
        "00c6d420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592d00",
      "DATA",
      [
        "storage",
        "00c6e3f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005929d4 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592cf4 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005929d8 ["COPY", "tmp:0:8", ["const:420:8"]]
- 005929d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005929d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005929d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592cf8 ["COPY", "tmp:0:8", ["const:3f0:8"]]
+ 00592cf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592cf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592cf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005929e4 ["INT_ADD", "register:40f0:8", ["const:5929e4:8", "const:4:8"]]
- 005929e4 ["CALL", null, ["callee:00c58f40:8"]]
+ 00592d04 ["INT_ADD", "register:40f0:8", ["const:592d04:8", "const:4:8"]]
+ 00592d04 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-fba9e832ef66614ebc94fef2c768de39"></a>

### [`00592a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592a08.md) → [`00592d28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592d28.md) FUN_00592d28

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c5a640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a640.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c5b610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b610.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00592d40",
      "incomplete_value": false,
      "site": "00592d44",
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
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592a20",
      "incomplete_value": false,
      "site": "00592a24",
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
            "const:470:8"
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
      "00592d44",
      "DATA",
      [
        "storage",
        "00c6d470",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592d44",
      "DATA",
      [
        "storage",
        "00c6e440",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592a1c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592d3c ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592a20 ["COPY", "tmp:0:8", ["const:470:8"]]
- 00592a20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592a20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592a20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592d40 ["COPY", "tmp:0:8", ["const:440:8"]]
+ 00592d40 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592d40 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592d40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592a28 ["INT_ADD", "register:40f0:8", ["const:592a28:8", "const:4:8"]]
- 00592a28 ["CALL", null, ["callee:005555e8:8"]]
+ 00592d48 ["INT_ADD", "register:40f0:8", ["const:592d48:8", "const:4:8"]]
+ 00592d48 ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-8084de28f2dd37a314e9241b20ef716f"></a>

### [`00592a50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592a50.md) → [`00592d70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592d70.md) FUN_00592d70

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a640.md)
- 新版 呼出元 0件  · 呼出先 3件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b610.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00592d88",
      "incomplete_value": false,
      "site": "00592d8c",
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
            "const:440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592a68",
      "incomplete_value": false,
      "site": "00592a6c",
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
            "const:470:8"
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
      "00592d8c",
      "DATA",
      [
        "storage",
        "00c6d470",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592d8c",
      "DATA",
      [
        "storage",
        "00c6e440",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592a64 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592d84 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592a68 ["COPY", "tmp:0:8", ["const:470:8"]]
- 00592a68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592a68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592a68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592d88 ["COPY", "tmp:0:8", ["const:440:8"]]
+ 00592d88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592d88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592d88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592a70 ["INT_ADD", "register:40f0:8", ["const:592a70:8", "const:4:8"]]
- 00592a70 ["CALL", null, ["callee:005555e8:8"]]
+ 00592d90 ["INT_ADD", "register:40f0:8", ["const:592d90:8", "const:4:8"]]
+ 00592d90 ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-1c58e354e142247291e9e3d8064c1983"></a>

### [`00592bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592bac.md) → [`00592ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592ecc.md) FUN_00592ecc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0059170c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/0059170c.md) · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a680.md)
- 新版 呼出元 1件 [`00591a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/00591a2c.md) · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b650`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b650.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.76% / 新版 82.76%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00592ef4",
      "incomplete_value": false,
      "site": "00592f0c",
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
            "const:478:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592bd4",
      "incomplete_value": false,
      "site": "00592bec",
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
            "const:4a8:8"
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
      "definition_site": "00592f10",
      "incomplete_value": false,
      "site": "00592f10",
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
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592bf0",
      "incomplete_value": false,
      "site": "00592bf0",
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
            "const:4f8:8"
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
      "00592f0c",
      "DATA",
      [
        "storage",
        "00c6d4a8",
        null,
        "undefined *"
      ]
    ],
    [
      "00592f10",
      "DATA",
      [
        "storage",
        "00c6d4f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592f0c",
      "DATA",
      [
        "storage",
        "00c6e478",
        null,
        "undefined *"
      ]
    ],
    [
      "00592f10",
      "DATA",
      [
        "storage",
        "00c6e4c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592bc4 ["INT_ADD", "register:40f0:8", ["const:592bc4:8", "const:4:8"]]
- 00592bc4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00592ee4 ["INT_ADD", "register:40f0:8", ["const:592ee4:8", "const:4:8"]]
+ 00592ee4 ["CALL", null, ["callee:00c58f30:8"]]
- 00592bd0 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592ef0 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592bd4 ["COPY", "tmp:0:8", ["const:4a8:8"]]
- 00592bd4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592bd4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592bd4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592ef4 ["COPY", "tmp:0:8", ["const:478:8"]]
+ 00592ef4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592ef4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592ef4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-12a23d9243edbe0137db7ef6a6881989"></a>

### [`00592c54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592c54.md) → [`00592f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592f74.md) FUN_00592f74

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
      "definition_site": "00592f78",
      "incomplete_value": false,
      "site": "00592f7c",
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
            "const:478:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592c58",
      "incomplete_value": false,
      "site": "00592c5c",
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
            "const:4a8:8"
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
      "00592f7c",
      "DATA",
      [
        "storage",
        "00c6d4a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592f7c",
      "DATA",
      [
        "storage",
        "00c6e478",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592c54 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592f74 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592c58 ["COPY", "tmp:0:8", ["const:4a8:8"]]
- 00592c58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592c58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592c58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592f78 ["COPY", "tmp:0:8", ["const:478:8"]]
+ 00592f78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592f78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592f78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1eb619124609e08181ceacfc26c4dc80"></a>

### [`00592c64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592c64.md) → [`00592f84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00592/00592f84.md) FUN_00592f84

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
      "definition_site": "00592f94",
      "incomplete_value": false,
      "site": "00592f9c",
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
            "const:478:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592c74",
      "incomplete_value": false,
      "site": "00592c7c",
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
            "const:4a8:8"
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
      "00592f9c",
      "DATA",
      [
        "storage",
        "00c6d4a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00592f9c",
      "DATA",
      [
        "storage",
        "00c6e478",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592c70 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00592f90 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592c74 ["COPY", "tmp:0:8", ["const:4a8:8"]]
- 00592c74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592c74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592c74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00592f94 ["COPY", "tmp:0:8", ["const:478:8"]]
+ 00592f94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00592f94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00592f94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592c80 ["INT_ADD", "register:40f0:8", ["const:592c80:8", "const:4:8"]]
- 00592c80 ["CALL", null, ["callee:00c58f40:8"]]
+ 00592fa0 ["INT_ADD", "register:40f0:8", ["const:592fa0:8", "const:4:8"]]
+ 00592fa0 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-1f52684e9e8b3b3e64490d2e58044c61"></a>

### [`00592cf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592cf4.md) → [`00593014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/00593014.md) FUN_00593014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.08% / 新版 96.08%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059302c",
      "incomplete_value": false,
      "site": "00593030",
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
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592d0c",
      "incomplete_value": false,
      "site": "00592d10",
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
            "const:4f8:8"
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
      "00593030",
      "DATA",
      [
        "storage",
        "00c6d4f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00593030",
      "DATA",
      [
        "storage",
        "00c6e4c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592d08 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00593028 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592d0c ["COPY", "tmp:0:8", ["const:4f8:8"]]
- 00592d0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592d0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592d0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059302c ["COPY", "tmp:0:8", ["const:4c8:8"]]
+ 0059302c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059302c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059302c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592d20 ["INT_ADD", "register:40f0:8", ["const:592d20:8", "const:4:8"]]
- 00592d20 ["CALL", null, ["callee:00c54d90:8"]]
+ 00593040 ["INT_ADD", "register:40f0:8", ["const:593040:8", "const:4:8"]]
+ 00593040 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-013cd1da9ce1466b2baded9019ab15ad"></a>

### [`00592dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592dc0.md) → [`005930e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/005930e0.md) FUN_005930e0

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
      "definition_site": "005930f8",
      "incomplete_value": false,
      "site": "005930fc",
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
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00592dd8",
      "incomplete_value": false,
      "site": "00592ddc",
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
            "const:4f8:8"
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
      "005930fc",
      "DATA",
      [
        "storage",
        "00c6d4f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005930fc",
      "DATA",
      [
        "storage",
        "00c6e4c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00592dd4 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005930f4 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00592dd8 ["COPY", "tmp:0:8", ["const:4f8:8"]]
- 00592dd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00592dd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00592dd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005930f8 ["COPY", "tmp:0:8", ["const:4c8:8"]]
+ 005930f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005930f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005930f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00592dec ["INT_ADD", "register:40f0:8", ["const:592dec:8", "const:4:8"]]
- 00592dec ["CALL", null, ["callee:00c54d90:8"]]
+ 0059310c ["INT_ADD", "register:40f0:8", ["const:59310c:8", "const:4:8"]]
+ 0059310c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-cc840df140f5ee33807bcb4020d7679a"></a>

### [`00592ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00592/00592ff8.md) → [`00593318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/00593318.md) FUN_00593318

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f70.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.02% / 新版 98.02%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00593350",
      "incomplete_value": false,
      "site": "00593364",
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
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00593030",
      "incomplete_value": false,
      "site": "00593044",
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
            "const:1f0:8"
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
      "definition_site": "00593358",
      "incomplete_value": false,
      "site": "00593364",
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
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00593038",
      "incomplete_value": false,
      "site": "00593044",
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
            "const:200:8"
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
      "00593350",
      "PARAM",
      [
        "storage",
        "00c6d1f0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00593358",
      "PARAM",
      [
        "storage",
        "00c6d200",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00593350",
      "PARAM",
      [
        "storage",
        "00c6e1c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00593358",
      "PARAM",
      [
        "storage",
        "00c6e1d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00593044 ["INT_ADD", "register:40f0:8", ["const:593044:8", "const:4:8"]]
- 00593044 ["CALL", null, ["callee:00c596b0:8"]]
+ 00593364 ["INT_ADD", "register:40f0:8", ["const:593364:8", "const:4:8"]]
+ 00593364 ["CALL", null, ["callee:00c596b0:8"]]
- 0059302c ["COPY", "register:4008:8", ["const:c6d000:8"]]
+ 0059334c ["COPY", "register:4008:8", ["const:c6e000:8"]]
- 00593030 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 00593030 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00593030 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00593030 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00593350 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 00593350 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00593350 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00593350 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-afdedbacf505f02ad559ab14c02acfe2"></a>

### [`005931b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/005931b4.md) → [`005934d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/005934d4.md) FUN_005934d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fa0.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 11件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f70.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.02% / 新版 98.02%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00593514",
      "incomplete_value": true,
      "site": "00593520",
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
            "const:1d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005931f4",
      "incomplete_value": true,
      "site": "00593200",
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
            "const:200:8"
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
      "0059350c",
      "PARAM",
      [
        "storage",
        "00c6d1f0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00593514",
      "PARAM",
      [
        "storage",
        "00c6d200",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0059350c",
      "PARAM",
      [
        "storage",
        "00c6e1c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00593514",
      "PARAM",
      [
        "storage",
        "00c6e1d0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00593200 ["INT_ADD", "register:40f0:8", ["const:593200:8", "const:4:8"]]
- 00593200 ["CALL", null, ["callee:00c596b0:8"]]
+ 00593520 ["INT_ADD", "register:40f0:8", ["const:593520:8", "const:4:8"]]
+ 00593520 ["CALL", null, ["callee:00c596b0:8"]]
- 005931e8 ["COPY", "register:4008:8", ["const:c6d000:8"]]
+ 00593508 ["COPY", "register:4008:8", ["const:c6e000:8"]]
- 005931ec ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 005931ec ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 005931ec ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 005931ec ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0059350c ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 0059350c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0059350c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0059350c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-2aef4ce7742725afb4d6103308710f2c"></a>

### [`00593370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593370.md) → [`00593690`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/00593690.md) FUN_00593690

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
      "definition_site": "00593694",
      "incomplete_value": false,
      "site": "00593698",
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
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00593374",
      "incomplete_value": false,
      "site": "00593378",
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
            "const:530:8"
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
      "00593698",
      "DATA",
      [
        "storage",
        "00c6d530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00593698",
      "DATA",
      [
        "storage",
        "00c6e500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00593370 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00593690 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00593374 ["COPY", "tmp:0:8", ["const:530:8"]]
- 00593374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00593374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00593374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00593694 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 00593694 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00593694 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00593694 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d9dc59c0584efaa173e0ea9c28e5b11f"></a>

### [`00593380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593380.md) → [`005936a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/005936a0.md) FUN_005936a0

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
      "definition_site": "005936b0",
      "incomplete_value": false,
      "site": "005936b8",
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
            "const:500:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00593390",
      "incomplete_value": false,
      "site": "00593398",
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
            "const:530:8"
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
      "005936b8",
      "DATA",
      [
        "storage",
        "00c6d530",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005936b8",
      "DATA",
      [
        "storage",
        "00c6e500",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059338c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005936ac ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00593390 ["COPY", "tmp:0:8", ["const:530:8"]]
- 00593390 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00593390 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00593390 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005936b0 ["COPY", "tmp:0:8", ["const:500:8"]]
+ 005936b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005936b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005936b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059339c ["INT_ADD", "register:40f0:8", ["const:59339c:8", "const:4:8"]]
- 0059339c ["CALL", null, ["callee:00c58f40:8"]]
+ 005936bc ["INT_ADD", "register:40f0:8", ["const:5936bc:8", "const:4:8"]]
+ 005936bc ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-f45b240e3371c114f67079b0ea8a2763"></a>

### [`005933c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/005933c0.md) → [`005936e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/005936e0.md) FUN_005936e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`00593ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593ce4.md) · 呼出先 14件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00446db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00446/00446db0.md) [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00593804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593804.md)
- 新版 呼出元 1件 [`00594004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594004.md) · 呼出先 14件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004470d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/004470d0.md) [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`00593b24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/00593b24.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.09% / 新版 99.09%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00593720",
      "incomplete_value": false,
      "site": "00593724",
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
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00593400",
      "incomplete_value": false,
      "site": "00593404",
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
            "const:580:8"
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
      "00593724",
      "DATA",
      [
        "storage",
        "00c6d580",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00593724",
      "DATA",
      [
        "storage",
        "00c6e550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00593724 ["INT_ADD", "register:40f0:8", ["const:593724:8", "const:4:8"]]
- 00593724 ["CALL", null, ["callee:0043bac4:8"]]
+ 00593a44 ["INT_ADD", "register:40f0:8", ["const:593a44:8", "const:4:8"]]
+ 00593a44 ["CALL", null, ["callee:0043bac4:8"]]
- 005933fc ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059371c ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00593400 ["COPY", "tmp:0:8", ["const:580:8"]]
- 00593400 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00593400 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00593400 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00593720 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 00593720 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00593720 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00593720 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4ce0d3b80cc13634b254f604179c3996"></a>

### [`00593ce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/00593ce4.md) → [`00594004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594004.md) FUN_00594004

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0059129c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00591/0059129c.md) · 呼出先 21件 [`005933c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00593/005933c0.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58030.md)
- 新版 呼出元 1件 [`005915bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00591/005915bc.md) · 呼出先 21件 [`005936e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00593/005936e0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59000`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59000.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_argument_candidate` 9件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005944f0",
      "incomplete_value": false,
      "site": "005944fc",
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
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005941d0",
      "incomplete_value": false,
      "site": "005941dc",
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
            "const:5d8:8"
          ]
        ]
      ]
    },
    "ordinal": 63,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005940f0",
      "incomplete_value": false,
      "site": "005940fc",
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
            "const:337:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00593dd0",
      "incomplete_value": false,
      "site": "00593ddc",
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
            "const:268:8"
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
      "definition_site": "0059411c",
      "incomplete_value": false,
      "site": "00594124",
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
            "const:cef:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00593dfc",
      "incomplete_value": false,
      "site": "00593e04",
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
      "005940f0",
      "PARAM",
      [
        "storage",
        "002b6268",
        null,
        "string"
      ]
    ],
    [
      "0059411c",
      "PARAM",
      [
        "storage",
        "002b4c11",
        null,
        null
      ]
    ],
    [
      "00594234",
      "PARAM",
      [
        "storage",
        "002a01ed",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005940f0",
      "PARAM",
      [
        "storage",
        "002b6337",
        null,
        "string"
      ]
    ],
    [
      "0059411c",
      "PARAM",
      [
        "storage",
        "002b4cef",
        null,
        null
      ]
    ],
    [
      "00594234",
      "PARAM",
      [
        "storage",
        "002a022d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00593ddc ["INT_ADD", "register:40f0:8", ["const:593ddc:8", "const:4:8"]]
- 00593ddc ["CALL", null, ["callee:00c59000:8"]]
+ 005940fc ["INT_ADD", "register:40f0:8", ["const:5940fc:8", "const:4:8"]]
+ 005940fc ["CALL", null, ["callee:00c59000:8"]]
- 00593e04 ["INT_ADD", "register:40f0:8", ["const:593e04:8", "const:4:8"]]
- 00593e04 ["CALL", null, ["callee:00c59010:8"]]
+ 00594124 ["INT_ADD", "register:40f0:8", ["const:594124:8", "const:4:8"]]
+ 00594124 ["CALL", null, ["callee:00c59010:8"]]
- 00593e40 ["INT_ADD", "register:40f0:8", ["const:593e40:8", "const:4:8"]]
- 00593e40 ["CALL", null, ["callee:00c59020:8"]]
+ 00594160 ["INT_ADD", "register:40f0:8", ["const:594160:8", "const:4:8"]]
+ 00594160 ["CALL", null, ["callee:00c59020:8"]]
~~~


<a id="compare-6a86070ab2e5664f8d6f50bc20fd9058"></a>

### [`005948e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/005948e0.md) → [`00594c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594c00.md) FUN_00594c00

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
      "definition_site": "00594c04",
      "incomplete_value": false,
      "site": "00594c08",
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
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005948e4",
      "incomplete_value": false,
      "site": "005948e8",
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
            "const:5d8:8"
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
      "00594c08",
      "DATA",
      [
        "storage",
        "00c6d5d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00594c08",
      "DATA",
      [
        "storage",
        "00c6e5a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005948e0 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00594c00 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005948e4 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 005948e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005948e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005948e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00594c04 ["COPY", "tmp:0:8", ["const:5a8:8"]]
+ 00594c04 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00594c04 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00594c04 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-262a2b3f531925c21a2592ed65c8bb3a"></a>

### [`005948f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/005948f0.md) → [`00594c10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594c10.md) FUN_00594c10

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
      "definition_site": "00594c20",
      "incomplete_value": false,
      "site": "00594c28",
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
            "const:5a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00594900",
      "incomplete_value": false,
      "site": "00594908",
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
            "const:5d8:8"
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
      "00594c28",
      "DATA",
      [
        "storage",
        "00c6d5d8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00594c28",
      "DATA",
      [
        "storage",
        "00c6e5a8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005948fc ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00594c1c ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00594900 ["COPY", "tmp:0:8", ["const:5d8:8"]]
- 00594900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00594900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00594900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00594c20 ["COPY", "tmp:0:8", ["const:5a8:8"]]
+ 00594c20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00594c20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00594c20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059490c ["INT_ADD", "register:40f0:8", ["const:59490c:8", "const:4:8"]]
- 0059490c ["CALL", null, ["callee:00c58f40:8"]]
+ 00594c2c ["INT_ADD", "register:40f0:8", ["const:594c2c:8", "const:4:8"]]
+ 00594c2c ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-f3e64850d461ac24931086451bd472cf"></a>

### [`00594920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594920.md) → [`00594c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594c40.md) FUN_00594c40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`005552c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00555/005552c8.md) [`00594380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594380.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c5a710`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a710.md)
- 新版 呼出元 0件  · 呼出先 4件 [`005555e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00555/005555e8.md) [`005946a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/005946a0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c5b6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b6e0.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00594c54",
      "incomplete_value": false,
      "site": "00594c58",
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
            "const:550:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00594934",
      "incomplete_value": false,
      "site": "00594938",
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
            "const:580:8"
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
      "00594c58",
      "DATA",
      [
        "storage",
        "00c6d580",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00594c58",
      "DATA",
      [
        "storage",
        "00c6e550",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00594930 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00594c50 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00594934 ["COPY", "tmp:0:8", ["const:580:8"]]
- 00594934 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00594934 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00594934 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00594c54 ["COPY", "tmp:0:8", ["const:550:8"]]
+ 00594c54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00594c54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00594c54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059493c ["INT_ADD", "register:40f0:8", ["const:59493c:8", "const:4:8"]]
- 0059493c ["CALL", null, ["callee:005555e8:8"]]
+ 00594c5c ["INT_ADD", "register:40f0:8", ["const:594c5c:8", "const:4:8"]]
+ 00594c5c ["CALL", null, ["callee:005555e8:8"]]
~~~


<a id="compare-a906f79aedfde250c53c08e966bc364a"></a>

### [`00594978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594978.md) → [`00594c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594c98.md) FUN_00594c98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00588508`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588508.md) · 呼出先 7件 [`0049f46c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0049f/0049f46c.md) [`00594bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594bac.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00588828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/00588828.md) · 呼出先 7件 [`0049f78c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0049f/0049f78c.md) [`00594ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594ecc.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.69% / 新版 96.69%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00594ccc",
      "incomplete_value": false,
      "site": "00594cdc",
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
            "const:5f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005949ac",
      "incomplete_value": false,
      "site": "005949bc",
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
            "const:628:8"
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
      "definition_site": "00594e00",
      "incomplete_value": true,
      "site": "00594e0c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:dc8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00594ae0",
      "incomplete_value": true,
      "site": "00594aec",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:d78:8"
              ]
            ]
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
      "00594cdc",
      "DATA",
      [
        "storage",
        "00c6d628",
        null,
        "undefined *"
      ]
    ],
    [
      "00594e00",
      "READ",
      [
        "storage",
        "002c3d78",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00594cdc",
      "DATA",
      [
        "storage",
        "00c6e5f8",
        null,
        "undefined *"
      ]
    ],
    [
      "00594e00",
      "READ",
      [
        "storage",
        "002c3dc8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005949a8 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 00594cc8 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 005949ac ["COPY", "tmp:0:8", ["const:628:8"]]
- 005949ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 005949ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 005949ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00594ccc ["COPY", "tmp:0:8", ["const:5f8:8"]]
+ 00594ccc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00594ccc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00594ccc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 005949e0 ["INT_ADD", "register:40f0:8", ["const:5949e0:8", "const:4:8"]]
- 005949e0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00594d00 ["INT_ADD", "register:40f0:8", ["const:594d00:8", "const:4:8"]]
+ 00594d00 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-6d74dd166a78a1807f1fa31451c8b950"></a>

### [`00594bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594bac.md) → [`00594ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594ecc.md) FUN_00594ecc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00594978`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594978.md) · 呼出先 12件 [`0055f504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f504.md) [`0055f56c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f56c.md) [`0055f580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f580.md) [`0055f5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0055f/0055f5a0.md) [`005951d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005951d0.md)
- 新版 呼出元 1件 [`00594c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00594/00594c98.md) · 呼出先 12件 [`0055f824`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f824.md) [`0055f88c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f88c.md) [`0055f8a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f8a0.md) [`0055f8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0055f/0055f8c0.md) [`005954f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005954f0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.23% / 新版 97.23%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00595054",
      "incomplete_value": true,
      "site": "00595064",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bda:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00594d34",
      "incomplete_value": true,
      "site": "00594d44",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b03:8"
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
      "00595054",
      "READ",
      [
        "storage",
        "002afb03",
        null,
        "string"
      ]
    ],
    [
      "00595058",
      "READ",
      [
        "storage",
        "002afb0e",
        null,
        "string"
      ]
    ],
    [
      "0059505c",
      "READ",
      [
        "storage",
        "002c26c0",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00595054",
      "READ",
      [
        "storage",
        "002afbda",
        null,
        "string"
      ]
    ],
    [
      "00595058",
      "READ",
      [
        "storage",
        "002afbe5",
        null,
        "string"
      ]
    ],
    [
      "0059505c",
      "READ",
      [
        "storage",
        "002c2710",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00594c00 ["COPY", "register:0:8", ["register:4040:8"]]
- 00594c00 ["INT_ADD", "register:40f0:8", ["const:594c00:8", "const:4:8"]]
- 00594c00 ["CALLIND", null, ["register:0:8"]]
+ 00594f20 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00594f20 ["INT_ADD", "register:40f0:8", ["const:594f20:8", "const:4:8"]]
+ 00594f20 ["CALLIND", null, ["register:0:8"]]
- 00594c1c ["COPY", "register:0:8", ["register:4048:8"]]
- 00594c1c ["INT_ADD", "register:40f0:8", ["const:594c1c:8", "const:4:8"]]
- 00594c1c ["CALLIND", null, ["register:0:8"]]
+ 00594f3c ["COPY", "register:0:8", ["register:4048:8"]]
+ 00594f3c ["INT_ADD", "register:40f0:8", ["const:594f3c:8", "const:4:8"]]
+ 00594f3c ["CALLIND", null, ["register:0:8"]]
- 00594c3c ["INT_ADD", "register:40f0:8", ["const:594c3c:8", "const:4:8"]]
- 00594c3c ["CALL", null, ["callee:0055f824:8"]]
+ 00594f5c ["INT_ADD", "register:40f0:8", ["const:594f5c:8", "const:4:8"]]
+ 00594f5c ["CALL", null, ["callee:0055f824:8"]]
~~~


<a id="compare-8ca1ea81b64dc353078e5ee2d43c322e"></a>

### [`00594ff8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00594/00594ff8.md) → [`00595318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595318.md) FUN_00595318

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005885dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/005885dc.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`005888fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00588/005888fc.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00595330",
      "incomplete_value": false,
      "site": "00595334",
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
            "const:5f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00595010",
      "incomplete_value": false,
      "site": "00595014",
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
            "const:628:8"
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
      "00595334",
      "DATA",
      [
        "storage",
        "00c6d628",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00595334",
      "DATA",
      [
        "storage",
        "00c6e5f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059500c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059532c ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00595010 ["COPY", "tmp:0:8", ["const:628:8"]]
- 00595010 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00595010 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00595010 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00595330 ["COPY", "tmp:0:8", ["const:5f8:8"]]
+ 00595330 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00595330 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00595330 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00595020 ["INT_ADD", "register:40f0:8", ["const:595020:8", "const:4:8"]]
- 00595020 ["CALL", null, ["callee:00c58f50:8"]]
+ 00595340 ["INT_ADD", "register:40f0:8", ["const:595340:8", "const:4:8"]]
+ 00595340 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-2e8195e9555601b9079c495fa4cef414"></a>

### [`005953ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005953ac.md) → [`005956cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005956cc.md) FUN_005956cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.98% / 新版 93.98%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005957a4",
      "incomplete_value": false,
      "site": "005957a8",
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
            "const:77a:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00595484",
      "incomplete_value": false,
      "site": "00595488",
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
            "const:622:8"
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
      "definition_site": "005957d4",
      "incomplete_value": false,
      "site": "005957d8",
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
            "const:4e6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005954b4",
      "incomplete_value": false,
      "site": "005954b8",
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
            "const:38e:8"
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
      "00595744",
      "PARAM",
      [
        "storage",
        "002ae69e",
        null,
        null
      ]
    ],
    [
      "00595744",
      "PARAM",
      [
        "storage",
        "0029ede0",
        null,
        "string"
      ]
    ],
    [
      "005957a4",
      "PARAM",
      [
        "storage",
        "002a7622",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00595744",
      "PARAM",
      [
        "storage",
        "002ae76b",
        null,
        null
      ]
    ],
    [
      "00595744",
      "PARAM",
      [
        "storage",
        "0029ee20",
        null,
        "string"
      ]
    ],
    [
      "005957a4",
      "PARAM",
      [
        "storage",
        "002a777a",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00595488 ["INT_ADD", "register:40f0:8", ["const:595488:8", "const:4:8"]]
- 00595488 ["CALL", null, ["callee:00c59080:8"]]
+ 005957a8 ["INT_ADD", "register:40f0:8", ["const:5957a8:8", "const:4:8"]]
+ 005957a8 ["CALL", null, ["callee:00c59080:8"]]
- 005954b8 ["INT_ADD", "register:40f0:8", ["const:5954b8:8", "const:4:8"]]
- 005954b8 ["CALL", null, ["callee:00c59080:8"]]
+ 005957d8 ["INT_ADD", "register:40f0:8", ["const:5957d8:8", "const:4:8"]]
+ 005957d8 ["CALL", null, ["callee:00c59080:8"]]
- 00595410 ["COPY", "tmp:0:8", ["const:69e:8"]]
- 00595410 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00595410 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00595410 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00595730 ["COPY", "tmp:0:8", ["const:76b:8"]]
+ 00595730 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00595730 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00595730 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-332f64854bb9e6a237f74113ba824a7b"></a>

### [`005955c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005955c0.md) → [`005958e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005958e0.md) FUN_005958e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) · 呼出先 2件 [`005956cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005956cc.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`00597070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597070.md) · 呼出先 2件 [`005959ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005959ec.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005958f4",
      "incomplete_value": false,
      "site": "005958fc",
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
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005955d4",
      "incomplete_value": false,
      "site": "005955dc",
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
            "const:6b8:8"
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
      "005958fc",
      "DATA",
      [
        "storage",
        "00c6d6b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005958fc",
      "DATA",
      [
        "storage",
        "00c6e688",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005955d0 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005958f0 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005955d4 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 005955d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005955d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005955d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005958f4 ["COPY", "tmp:0:8", ["const:688:8"]]
+ 005958f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005958f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005958f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00595604 ["INT_ADD", "register:40f0:8", ["const:595604:8", "const:4:8"]]
- 00595604 ["CALL", null, ["callee:00c54d60:8"]]
+ 00595924 ["INT_ADD", "register:40f0:8", ["const:595924:8", "const:4:8"]]
+ 00595924 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-102ee9b92eeb938f2f62bc946b614031"></a>

### [`005956cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005956cc.md) → [`005959ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005959ec.md) FUN_005959ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005955c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005955c0.md) · 呼出先 4件 [`005958b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005958b0.md) [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md) [`00595d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595d5c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005958e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005958e0.md) · 呼出先 4件 [`00595bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595bd0.md) [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md) [`0059607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059607c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00595a40",
      "incomplete_value": false,
      "site": "00595a44",
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
      "definition_site": "00595720",
      "incomplete_value": false,
      "site": "00595724",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00595a94",
      "incomplete_value": false,
      "site": "00595a98",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00595774",
      "incomplete_value": false,
      "site": "00595778",
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
            "const:bb0:8"
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
      "00595a44",
      "DATA",
      [
        "storage",
        "00c6d748",
        null,
        "pointer"
      ]
    ],
    [
      "00595a98",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00595a44",
      "DATA",
      [
        "storage",
        "00c6e718",
        null,
        "pointer"
      ]
    ],
    [
      "00595a98",
      "DATA",
      [
        "storage",
        "00c64b80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005956e8 ["INT_ADD", "register:40f0:8", ["const:5956e8:8", "const:4:8"]]
- 005956e8 ["CALL", null, ["callee:00595bd0:8"]]
+ 00595a08 ["INT_ADD", "register:40f0:8", ["const:595a08:8", "const:4:8"]]
+ 00595a08 ["CALL", null, ["callee:00595bd0:8"]]
- 00595708 ["INT_ADD", "register:40f0:8", ["const:595708:8", "const:4:8"]]
- 00595708 ["CALL", null, ["callee:00c58f30:8"]]
+ 00595a28 ["INT_ADD", "register:40f0:8", ["const:595a28:8", "const:4:8"]]
+ 00595a28 ["CALL", null, ["callee:00c58f30:8"]]
- 0059571c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00595a3c ["COPY", "register:4040:8", ["const:c6e000:8"]]
~~~


<a id="compare-8c591f604b59b820517fb84099c7f8a1"></a>

### [`005957c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005957c4.md) → [`00595ae4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595ae4.md) FUN_00595ae4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00595afc",
      "incomplete_value": false,
      "site": "00595b04",
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
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005957dc",
      "incomplete_value": false,
      "site": "005957e4",
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
            "const:6b8:8"
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
      "00595b04",
      "DATA",
      [
        "storage",
        "00c6d6b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00595b04",
      "DATA",
      [
        "storage",
        "00c6e688",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005957d8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00595af8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005957dc ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 005957dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005957dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005957dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00595afc ["COPY", "tmp:0:8", ["const:688:8"]]
+ 00595afc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00595afc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00595afc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005957f4 ["COPY", "register:0:8", ["register:4040:8"]]
- 005957f4 ["INT_ADD", "register:40f0:8", ["const:5957f4:8", "const:4:8"]]
- 005957f4 ["CALLIND", null, ["register:0:8"]]
+ 00595b14 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00595b14 ["INT_ADD", "register:40f0:8", ["const:595b14:8", "const:4:8"]]
+ 00595b14 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f91de271477ed143612d983d66cb2e1e"></a>

### [`0059583c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/0059583c.md) → [`00595b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595b5c.md) FUN_00595b5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00595b74",
      "incomplete_value": false,
      "site": "00595b7c",
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
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00595854",
      "incomplete_value": false,
      "site": "0059585c",
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
            "const:6b8:8"
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
      "00595b7c",
      "DATA",
      [
        "storage",
        "00c6d6b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00595b7c",
      "DATA",
      [
        "storage",
        "00c6e688",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00595850 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00595b70 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00595854 ["COPY", "tmp:0:8", ["const:6b8:8"]]
- 00595854 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00595854 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00595854 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00595b74 ["COPY", "tmp:0:8", ["const:688:8"]]
+ 00595b74 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00595b74 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00595b74 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059586c ["COPY", "register:0:8", ["register:4040:8"]]
- 0059586c ["INT_ADD", "register:40f0:8", ["const:59586c:8", "const:4:8"]]
- 0059586c ["CALLIND", null, ["register:0:8"]]
+ 00595b8c ["COPY", "register:0:8", ["register:4040:8"]]
+ 00595b8c ["INT_ADD", "register:40f0:8", ["const:595b8c:8", "const:4:8"]]
+ 00595b8c ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fdbcaeb8ec2f94c279e5530c9e6a8319"></a>

### [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md) → [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md) FUN_00595d3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005956cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005956cc.md) [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md) [`00595d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595d5c.md) · 呼出先 13件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00459510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459510.md) [`0045be38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045b/0045be38.md) [`005958b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005958b0.md) [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md)
- 新版 呼出元 3件 [`005959ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005959ec.md) [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md) [`0059607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059607c.md) · 呼出先 13件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00459830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459830.md) [`0045c158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045c/0045c158.md) [`00595bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595bd0.md) [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.88% / 新版 95.88%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00595dd4",
      "incomplete_value": false,
      "site": "00595dd8",
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
      "definition_site": "00595ab4",
      "incomplete_value": false,
      "site": "00595ab8",
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00595e68",
      "incomplete_value": false,
      "site": "00595e6c",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00595b48",
      "incomplete_value": false,
      "site": "00595b4c",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00595ff8",
      "incomplete_value": true,
      "site": "00595ffc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:388:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00595cd8",
      "incomplete_value": true,
      "site": "00595cdc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3b8:8"
              ]
            ]
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
      "00595dd8",
      "DATA",
      [
        "storage",
        "00c6d748",
        null,
        "pointer"
      ]
    ],
    [
      "00595e6c",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "00595fbc",
      "READ",
      [
        "storage",
        "00c63bb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00595dd8",
      "DATA",
      [
        "storage",
        "00c6e718",
        null,
        "pointer"
      ]
    ],
    [
      "00595e6c",
      "DATA",
      [
        "storage",
        "00c64b80",
        null,
        "pointer"
      ]
    ],
    [
      "00595fbc",
      "READ",
      [
        "storage",
        "00c64b88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00595cdc ["INT_ADD", "register:40f0:8", ["const:595cdc:8", "const:4:8"]]
- 00595cdc ["CALL", null, ["callee:00459830:8"]]
+ 00595ffc ["INT_ADD", "register:40f0:8", ["const:595ffc:8", "const:4:8"]]
+ 00595ffc ["CALL", null, ["callee:00459830:8"]]
- 00595a40 ["INT_ADD", "register:40f0:8", ["const:595a40:8", "const:4:8"]]
- 00595a40 ["CALL", null, ["callee:00595bd0:8"]]
+ 00595d60 ["INT_ADD", "register:40f0:8", ["const:595d60:8", "const:4:8"]]
+ 00595d60 ["CALL", null, ["callee:00595bd0:8"]]
- 00595a60 ["INT_ADD", "register:40f0:8", ["const:595a60:8", "const:4:8"]]
- 00595a60 ["CALL", null, ["callee:00595bd0:8"]]
+ 00595d80 ["INT_ADD", "register:40f0:8", ["const:595d80:8", "const:4:8"]]
+ 00595d80 ["CALL", null, ["callee:00595bd0:8"]]
~~~


<a id="compare-4d061c81b0528665f5aea36420a3243a"></a>

### [`00595d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595d5c.md) → [`0059607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059607c.md) FUN_0059607c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005956cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005956cc.md) [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md) [`00595d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595d5c.md) · 呼出先 15件 [`00459510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459510.md) [`00459b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459b10.md) [`0045be38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045b/0045be38.md) [`005958b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005958b0.md) [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md)
- 新版 呼出元 3件 [`005959ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005959ec.md) [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md) [`0059607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059607c.md) · 呼出先 15件 [`00459830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459830.md) [`00459e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459e30.md) [`0045c158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045c/0045c158.md) [`00595bd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595bd0.md) [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 93.46% / 新版 93.46%

優先判定に残った影響 `call_argument_candidate` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00596344",
      "incomplete_value": true,
      "site": "00596348",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:388:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596024",
      "incomplete_value": true,
      "site": "00596028",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0059639c",
      "incomplete_value": false,
      "site": "005963a0",
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
            "const:7f2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059607c",
      "incomplete_value": false,
      "site": "00596080",
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
            "const:69a:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005963b0",
      "incomplete_value": true,
      "site": "005963b4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:388:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596090",
      "incomplete_value": true,
      "site": "00596094",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0059615c",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "005961e0",
      "DATA",
      [
        "storage",
        "00c6d748",
        null,
        "pointer"
      ]
    ],
    [
      "005962a4",
      "READ",
      [
        "storage",
        "00c63bb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059615c",
      "DATA",
      [
        "storage",
        "00c64b80",
        null,
        "pointer"
      ]
    ],
    [
      "005961e0",
      "DATA",
      [
        "storage",
        "00c6e718",
        null,
        "pointer"
      ]
    ],
    [
      "005962a4",
      "READ",
      [
        "storage",
        "00c64b88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00596028 ["INT_ADD", "register:40f0:8", ["const:596028:8", "const:4:8"]]
- 00596028 ["CALL", null, ["callee:00459830:8"]]
+ 00596348 ["INT_ADD", "register:40f0:8", ["const:596348:8", "const:4:8"]]
+ 00596348 ["CALL", null, ["callee:00459830:8"]]
- 00596080 ["INT_ADD", "register:40f0:8", ["const:596080:8", "const:4:8"]]
- 00596080 ["CALL", null, ["callee:00c59080:8"]]
+ 005963a0 ["INT_ADD", "register:40f0:8", ["const:5963a0:8", "const:4:8"]]
+ 005963a0 ["CALL", null, ["callee:00c59080:8"]]
- 00596094 ["INT_ADD", "register:40f0:8", ["const:596094:8", "const:4:8"]]
- 00596094 ["CALL", null, ["callee:00459830:8"]]
+ 005963b4 ["INT_ADD", "register:40f0:8", ["const:5963b4:8", "const:4:8"]]
+ 005963b4 ["CALL", null, ["callee:00459830:8"]]
~~~


<a id="compare-adfaf68ae31fea74171d181b27af37d3"></a>

### [`00596134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596134.md) → [`00596454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596454.md) FUN_00596454

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md) [`00595d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595d5c.md) · 呼出先 3件 [`005964e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/005964e4.md) [`00596878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596878.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md) [`0059607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059607c.md) · 呼出先 3件 [`00596804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596804.md) [`00596b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596b98.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.07% / 新版 91.07%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005964b8",
      "incomplete_value": false,
      "site": "005964c0",
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
            "const:6a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596198",
      "incomplete_value": false,
      "site": "005961a0",
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
            "const:6d8:8"
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005964e0",
      "incomplete_value": false,
      "site": "005964e8",
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
            "const:6a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005961c0",
      "incomplete_value": false,
      "site": "005961c8",
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
            "const:6d8:8"
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
      "005964c0",
      "DATA",
      [
        "storage",
        "00c6d6d8",
        null,
        "pointer"
      ]
    ],
    [
      "005964e8",
      "DATA",
      [
        "storage",
        "00c6d6d8",
        null,
        "pointer"
      ]
    ],
    [
      "00596514",
      "DATA",
      [
        "storage",
        "00c6d6d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005964c0",
      "DATA",
      [
        "storage",
        "00c6e6a8",
        null,
        "pointer"
      ]
    ],
    [
      "005964e8",
      "DATA",
      [
        "storage",
        "00c6e6a8",
        null,
        "pointer"
      ]
    ],
    [
      "00596514",
      "DATA",
      [
        "storage",
        "00c6e6a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00596190 ["INT_ADD", "register:40f0:8", ["const:596190:8", "const:4:8"]]
- 00596190 ["CALL", null, ["callee:00c58f30:8"]]
+ 005964b0 ["INT_ADD", "register:40f0:8", ["const:5964b0:8", "const:4:8"]]
+ 005964b0 ["CALL", null, ["callee:00c58f30:8"]]
- 00596194 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005964b4 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00596198 ["COPY", "tmp:0:8", ["const:6d8:8"]]
- 00596198 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00596198 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00596198 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005964b8 ["COPY", "tmp:0:8", ["const:6a8:8"]]
+ 005964b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005964b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005964b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c513b21f80bb3889fa33de94c3885d0b"></a>

### [`005964e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/005964e4.md) → [`00596804`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596804.md) FUN_00596804

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00596134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596134.md) · 呼出先 12件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00596454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596454.md) · 呼出先 12件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.73% / 新版 95.73%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00596954",
      "incomplete_value": false,
      "site": "00596958",
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
            "const:6a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596634",
      "incomplete_value": false,
      "site": "00596638",
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
            "const:6d8:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005969f4",
      "incomplete_value": false,
      "site": "005969f8",
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
            "const:6a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005966d4",
      "incomplete_value": false,
      "site": "005966d8",
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
            "const:6d8:8"
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
      "definition_site": "00596af4",
      "incomplete_value": false,
      "site": "00596afc",
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
            "const:6a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005967d4",
      "incomplete_value": false,
      "site": "005967dc",
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
            "const:6d8:8"
          ]
        ]
      ]
    },
    "ordinal": 23,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005968e8",
      "PARAM",
      [
        "storage",
        "002b8f0b",
        null,
        null
      ]
    ],
    [
      "00596914",
      "PARAM",
      [
        "storage",
        "002b8f0b",
        null,
        null
      ]
    ],
    [
      "00596958",
      "DATA",
      [
        "storage",
        "00c6d6d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005968e8",
      "PARAM",
      [
        "storage",
        "002b8fda",
        null,
        null
      ]
    ],
    [
      "00596914",
      "PARAM",
      [
        "storage",
        "002b8fda",
        null,
        null
      ]
    ],
    [
      "00596958",
      "DATA",
      [
        "storage",
        "00c6e6a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005965cc ["INT_ADD", "register:40f0:8", ["const:5965cc:8", "const:4:8"]]
- 005965cc ["CALL", null, ["callee:00c59080:8"]]
+ 005968ec ["INT_ADD", "register:40f0:8", ["const:5968ec:8", "const:4:8"]]
+ 005968ec ["CALL", null, ["callee:00c59080:8"]]
- 00596584 ["INT_ADD", "register:40f0:8", ["const:596584:8", "const:4:8"]]
- 00596584 ["CALL", null, ["callee:00c58f30:8"]]
+ 005968a4 ["INT_ADD", "register:40f0:8", ["const:5968a4:8", "const:4:8"]]
+ 005968a4 ["CALL", null, ["callee:00c58f30:8"]]
- 005965a4 ["INT_ADD", "register:40f0:8", ["const:5965a4:8", "const:4:8"]]
- 005965a4 ["CALL", null, ["callee:00c58fe0:8"]]
+ 005968c4 ["INT_ADD", "register:40f0:8", ["const:5968c4:8", "const:4:8"]]
+ 005968c4 ["CALL", null, ["callee:00c58fe0:8"]]
~~~


<a id="compare-7f30dd0ceff4d323f4f764e4639ee85e"></a>

### [`00596878`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596878.md) → [`00596b98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596b98.md) FUN_00596b98

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00596134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596134.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`00459510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459510.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00596454`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/00596454.md) · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`00459830`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459830.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 97.15% / 新版 97.15%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00596f54",
      "incomplete_value": false,
      "site": "00596f58",
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
            "const:800:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596c34",
      "incomplete_value": false,
      "site": "00596c38",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "ordinal": 35,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00596d0c",
      "incomplete_value": false,
      "site": "00596d18",
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
            "const:b22:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005969ec",
      "incomplete_value": false,
      "site": "005969f8",
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
            "const:a55:8"
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
      "00596bec",
      "READ",
      [
        "storage",
        "00c9b3b8",
        null,
        "pointer"
      ]
    ],
    [
      "00596c68",
      "PARAM",
      [
        "storage",
        "002aea55",
        null,
        null
      ]
    ],
    [
      "00596cd8",
      "PARAM",
      [
        "storage",
        "002a329e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00596bec",
      "READ",
      [
        "storage",
        "00c9c388",
        null,
        "pointer"
      ]
    ],
    [
      "00596c68",
      "PARAM",
      [
        "storage",
        "002aeb22",
        null,
        null
      ]
    ],
    [
      "00596cd8",
      "PARAM",
      [
        "storage",
        "002a3369",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005969f8 ["INT_ADD", "register:40f0:8", ["const:5969f8:8", "const:4:8"]]
- 005969f8 ["CALL", null, ["callee:00c59080:8"]]
+ 00596d18 ["INT_ADD", "register:40f0:8", ["const:596d18:8", "const:4:8"]]
+ 00596d18 ["CALL", null, ["callee:00c59080:8"]]
- 005968c0 ["COPY", "register:40a8:8", ["const:c9b000:8"]]
+ 00596be0 ["COPY", "register:40a8:8", ["const:c9c000:8"]]
- 005968c8 ["COPY", "tmp:0:8", ["const:29e:8"]]
- 005968c8 ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
- 005968c8 ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
- 005968c8 ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
+ 00596be8 ["COPY", "tmp:0:8", ["const:369:8"]]
+ 00596be8 ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
+ 00596be8 ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
+ 00596be8 ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
~~~


<a id="compare-28f166e1a7b5234abf2d26a5a9ce57e6"></a>

### [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) → [`00597070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597070.md) FUN_00597070

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 14件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) [`0045a030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a030.md) [`0045a7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045a/0045a7b0.md) [`0046014c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00460/0046014c.md) · 呼出先 5件 [`005955c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/005955c0.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 14件 [`0043c5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043c/0043c5b8.md) [`0043fc7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043fc7c.md) [`0045a350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a350.md) [`0045aad0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045aad0.md) [`0046046c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00460/0046046c.md) · 呼出先 5件 [`005958e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/005958e0.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005970c8",
      "incomplete_value": false,
      "site": "005970c8",
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
            "const:778:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596da8",
      "incomplete_value": false,
      "site": "00596da8",
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
            "const:7a8:8"
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
      "definition_site": "005970f8",
      "incomplete_value": false,
      "site": "00597100",
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
            "const:688:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596dd8",
      "incomplete_value": false,
      "site": "00596de0",
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
            "const:6b8:8"
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
      "005970c8",
      "DATA",
      [
        "storage",
        "00c6d7a8",
        null,
        "undefined *"
      ]
    ],
    [
      "00597100",
      "DATA",
      [
        "storage",
        "00c6d6b8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005970c8",
      "DATA",
      [
        "storage",
        "00c6e778",
        null,
        "undefined *"
      ]
    ],
    [
      "00597100",
      "DATA",
      [
        "storage",
        "00c6e688",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00596d84 ["INT_ADD", "register:40f0:8", ["const:596d84:8", "const:4:8"]]
- 00596d84 ["CALL", null, ["callee:005958e0:8"]]
+ 005970a4 ["INT_ADD", "register:40f0:8", ["const:5970a4:8", "const:4:8"]]
+ 005970a4 ["CALL", null, ["callee:005958e0:8"]]
- 00596d98 ["INT_ADD", "register:40f0:8", ["const:596d98:8", "const:4:8"]]
- 00596d98 ["CALL", null, ["callee:00c58f30:8"]]
+ 005970b8 ["INT_ADD", "register:40f0:8", ["const:5970b8:8", "const:4:8"]]
+ 005970b8 ["CALL", null, ["callee:00c58f30:8"]]
- 00596d9c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 005970bc ["COPY", "register:4040:8", ["const:c6e000:8"]]
~~~


<a id="compare-2ff363df3340f65a4a93dc593d1088a4"></a>

### [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) → [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) FUN_0059728c

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 42件 [`0045039c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00450/0045039c.md) [`00476b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476b90.md) [`00571320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00571/00571320.md) [`00572ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00572/00572ca8.md) [`0058570c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00585/0058570c.md) · 呼出先 6件 [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 42件 [`004506bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/004506bc.md) [`00476eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00476/00476eb0.md) [`00571640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00571/00571640.md) [`00572fc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00572/00572fc8.md) [`00585a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00585/00585a2c.md) · 呼出先 6件 [`00597070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597070.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005972cc",
      "incomplete_value": false,
      "site": "005972dc",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596fac",
      "incomplete_value": false,
      "site": "00596fbc",
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
            "const:868:8"
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
      "definition_site": "005972d4",
      "incomplete_value": false,
      "site": "005972dc",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00596fb4",
      "incomplete_value": false,
      "site": "00596fbc",
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
            "const:be8:8"
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
      "005972cc",
      "PARAM",
      [
        "storage",
        "00c63868",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005972d4",
      "PARAM",
      [
        "storage",
        "00c63be8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005972cc",
      "PARAM",
      [
        "storage",
        "00c64838",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005972d4",
      "PARAM",
      [
        "storage",
        "00c64bb8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00596fbc ["INT_ADD", "register:40f0:8", ["const:596fbc:8", "const:4:8"]]
- 00596fbc ["CALL", null, ["callee:00c596b0:8"]]
+ 005972dc ["INT_ADD", "register:40f0:8", ["const:5972dc:8", "const:4:8"]]
+ 005972dc ["CALL", null, ["callee:00c596b0:8"]]
- 00596f90 ["INT_ADD", "register:40f0:8", ["const:596f90:8", "const:4:8"]]
- 00596f90 ["CALL", null, ["callee:00597070:8"]]
+ 005972b0 ["INT_ADD", "register:40f0:8", ["const:5972b0:8", "const:4:8"]]
+ 005972b0 ["CALL", null, ["callee:00597070:8"]]
- 00596fa8 ["COPY", "register:4008:8", ["const:c63000:8"]]
+ 005972c8 ["COPY", "register:4008:8", ["const:c64000:8"]]
~~~


<a id="compare-0d1dcbc63a9c8c6ea689f2e145dc2445"></a>

### [`0059705c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059705c.md) → [`0059737c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059737c.md) FUN_0059737c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00496a9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00496/00496a9c.md) [`00765e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00765/00765e74.md) · 呼出先 6件 [`00596e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596e5c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00496dbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00496/00496dbc.md) [`00766250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00766/00766250.md) · 呼出先 6件 [`0059717c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059717c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005973bc",
      "incomplete_value": false,
      "site": "005973cc",
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
            "const:838:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059709c",
      "incomplete_value": false,
      "site": "005970ac",
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
            "const:868:8"
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
      "definition_site": "005973c4",
      "incomplete_value": false,
      "site": "005973cc",
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
            "const:bb8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005970a4",
      "incomplete_value": false,
      "site": "005970ac",
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
            "const:be8:8"
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
      "005973bc",
      "PARAM",
      [
        "storage",
        "00c63868",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005973c4",
      "PARAM",
      [
        "storage",
        "00c63be8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "005973bc",
      "PARAM",
      [
        "storage",
        "00c64838",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005973c4",
      "PARAM",
      [
        "storage",
        "00c64bb8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 005970ac ["INT_ADD", "register:40f0:8", ["const:5970ac:8", "const:4:8"]]
- 005970ac ["CALL", null, ["callee:00c596b0:8"]]
+ 005973cc ["INT_ADD", "register:40f0:8", ["const:5973cc:8", "const:4:8"]]
+ 005973cc ["CALL", null, ["callee:00c596b0:8"]]
- 00597080 ["INT_ADD", "register:40f0:8", ["const:597080:8", "const:4:8"]]
- 00597080 ["CALL", null, ["callee:0059717c:8"]]
+ 005973a0 ["INT_ADD", "register:40f0:8", ["const:5973a0:8", "const:4:8"]]
+ 005973a0 ["CALL", null, ["callee:0059717c:8"]]
- 00597098 ["COPY", "register:4008:8", ["const:c63000:8"]]
+ 005973b8 ["COPY", "register:4008:8", ["const:c64000:8"]]
~~~


<a id="compare-1d45bec800ae7a2074944eb1ef291a74"></a>

### [`00597154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597154.md) → [`00597474`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597474.md) FUN_00597474

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059748c",
      "incomplete_value": false,
      "site": "00597490",
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
      "definition_site": "0059716c",
      "incomplete_value": false,
      "site": "00597170",
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
      "00597490",
      "DATA",
      [
        "storage",
        "00c6d748",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00597490",
      "DATA",
      [
        "storage",
        "00c6e718",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00597168 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00597488 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0059716c ["COPY", "tmp:0:8", ["const:748:8"]]
- 0059716c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059716c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059716c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059748c ["COPY", "tmp:0:8", ["const:718:8"]]
+ 0059748c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059748c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059748c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 005971ac ["COPY", "register:0:8", ["register:4040:8"]]
- 005971ac ["INT_ADD", "register:40f0:8", ["const:5971ac:8", "const:4:8"]]
- 005971ac ["CALLIND", null, ["register:0:8"]]
+ 005974cc ["COPY", "register:0:8", ["register:4040:8"]]
+ 005974cc ["INT_ADD", "register:40f0:8", ["const:5974cc:8", "const:4:8"]]
+ 005974cc ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-638564fb5b6e61413ce6b8a756a6b941"></a>

### [`005971dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005971dc.md) → [`005974fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/005974fc.md) FUN_005974fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md) [`00595d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595d5c.md) [`005a14b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005a1/005a14b0.md) [`00765e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00765/00765e74.md) [`00798ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00798/00798ef8.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 6件 [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md) [`0059607c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00596/0059607c.md) [`005a17d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005a1/005a17d0.md) [`00766250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00766/00766250.md) [`007992d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00799/007992d4.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00597518",
      "incomplete_value": false,
      "site": "0059751c",
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
      "definition_site": "005971f8",
      "incomplete_value": false,
      "site": "005971fc",
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
      "0059751c",
      "DATA",
      [
        "storage",
        "00c6d748",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059751c",
      "DATA",
      [
        "storage",
        "00c6e718",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005971f4 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00597514 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 005971f8 ["COPY", "tmp:0:8", ["const:748:8"]]
- 005971f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005971f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005971f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00597518 ["COPY", "tmp:0:8", ["const:718:8"]]
+ 00597518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00597518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00597518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00597234 ["COPY", "register:0:8", ["register:4040:8"]]
- 00597234 ["INT_ADD", "register:40f0:8", ["const:597234:8", "const:4:8"]]
- 00597234 ["CALLIND", null, ["register:0:8"]]
+ 00597554 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00597554 ["INT_ADD", "register:40f0:8", ["const:597554:8", "const:4:8"]]
+ 00597554 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-dfab012e97d1475a13aed475e25af42a"></a>

### [`0059725c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059725c.md) → [`0059757c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059757c.md) FUN_0059757c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00595a1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00595/00595a1c.md) [`00597544`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597544.md) [`00767074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00767/00767074.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`00595d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00595/00595d3c.md) [`00597864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597864.md) [`00767450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00767/00767450.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00597588",
      "incomplete_value": false,
      "site": "0059758c",
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
      "definition_site": "00597268",
      "incomplete_value": false,
      "site": "0059726c",
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
      "00597588",
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
      "00597588",
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
- 0059726c ["INT_ADD", "register:40f0:8", ["const:59726c:8", "const:4:8"]]
- 0059726c ["CALL", null, ["callee:0043bad8:8"]]
+ 0059758c ["INT_ADD", "register:40f0:8", ["const:59758c:8", "const:4:8"]]
+ 0059758c ["CALL", null, ["callee:0043bad8:8"]]
- 00597264 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00597584 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00597268 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00597268 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00597268 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00597268 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00597588 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00597588 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00597588 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00597588 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-82280396c94adb63c6412c3719ff36cb"></a>

### [`00597920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597920.md) → [`00597c40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597c40.md) FUN_00597c40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005977fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977fc.md) · 呼出先 8件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 1件 [`00597b1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597b1c.md) · 呼出先 8件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.51% / 新版 98.51%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00597ca8",
      "incomplete_value": true,
      "site": "00597cac",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4008:8"
              ],
              [
                "leaf",
                "const:390:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00597988",
      "incomplete_value": true,
      "site": "0059798c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:4008:8"
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
      "00597ca8",
      "READ",
      [
        "storage",
        "00c9b3c0",
        null,
        "pointer"
      ]
    ],
    [
      "00597ca8",
      "PARAM",
      [
        "storage",
        "01127cb8",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00597ca8",
      "READ",
      [
        "storage",
        "00c9c390",
        null,
        "pointer"
      ]
    ],
    [
      "00597ca8",
      "PARAM",
      [
        "storage",
        "01128c78",
        "std::__ndk1::time_get<char,std::__ndk1::istreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059798c ["INT_ADD", "register:40f0:8", ["const:59798c:8", "const:4:8"]]
- 0059798c ["CALL", null, ["callee:00c59320:8"]]
+ 00597cac ["INT_ADD", "register:40f0:8", ["const:597cac:8", "const:4:8"]]
+ 00597cac ["CALL", null, ["callee:00c59320:8"]]
- 0059795c ["INT_ADD", "register:40f0:8", ["const:59795c:8", "const:4:8"]]
- 0059795c ["CALL", null, ["callee:00c5ae70:8"]]
+ 00597c7c ["INT_ADD", "register:40f0:8", ["const:597c7c:8", "const:4:8"]]
+ 00597c7c ["CALL", null, ["callee:00c5ae70:8"]]
- 0059797c ["INT_ADD", "register:40f0:8", ["const:59797c:8", "const:4:8"]]
- 0059797c ["CALL", null, ["callee:00c59310:8"]]
+ 00597c9c ["INT_ADD", "register:40f0:8", ["const:597c9c:8", "const:4:8"]]
+ 00597c9c ["CALL", null, ["callee:00c59310:8"]]
~~~


<a id="compare-2076c64b95453585a5d74ab2460bc457"></a>

### [`00597ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597ad4.md) → [`00597df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597df4.md) FUN_00597df4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00579564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00579/00579564.md) [`009bad54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ba/009bad54.md) · 呼出先 9件 [`00597c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597c80.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58070.md) [`00c58080`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58080.md)
- 新版 呼出元 2件 [`00579884`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00579/00579884.md) [`009bbd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009bb/009bbd00.md) · 呼出先 9件 [`00597fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597fa0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59040`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59040.md) [`00c59050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59050.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.18% / 新版 93.18%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00597eac",
      "incomplete_value": true,
      "site": "00597eb0",
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
      "definition_site": "00597b8c",
      "incomplete_value": true,
      "site": "00597b90",
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
      "00597e28",
      "READ",
      [
        "storage",
        "00c9ad58",
        null,
        "pointer"
      ]
    ],
    [
      "00597e2c",
      "READ",
      [
        "storage",
        "00c9ac88",
        null,
        "pointer"
      ]
    ],
    [
      "00597e44",
      "READ",
      [
        "storage",
        "00c932d8",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ],
  "added": [
    [
      "00597e28",
      "READ",
      [
        "storage",
        "00c9bd28",
        null,
        "pointer"
      ]
    ],
    [
      "00597e2c",
      "READ",
      [
        "storage",
        "00c9bc58",
        null,
        "pointer"
      ]
    ],
    [
      "00597e44",
      "READ",
      [
        "storage",
        "00c942a8",
        null,
        "pointer __((offset(0x18)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00597af8 ["COPY", "register:40d0:8", ["const:c9a000:8"]]
+ 00597e18 ["COPY", "register:40d0:8", ["const:c9b000:8"]]
- 00597afc ["COPY", "register:40c8:8", ["const:c9a000:8"]]
+ 00597e1c ["COPY", "register:40c8:8", ["const:c9b000:8"]]
- 00597b08 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:d58:8"]]
- 00597b08 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
+ 00597e28 ["INT_ADD", "tmp:0:8", ["register:40d0:8", "const:d28:8"]]
+ 00597e28 ["LOAD", "register:40d0:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-c359c01ba534b6d28b50fa5a77fd217a"></a>

### [`00597c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597c80.md) → [`00597fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597fa0.md) FUN_00597fa0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00597ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597ad4.md) · 呼出先 9件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md) [`00c58330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58330.md) [`00c58340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58340.md) [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md)
- 新版 呼出元 1件 [`00597df4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597df4.md) · 呼出先 9件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md) [`00c59300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59300.md) [`00c59310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59310.md) [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.65% / 新版 97.65%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00598000",
      "incomplete_value": true,
      "site": "00598004",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:398:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00597ce0",
      "incomplete_value": true,
      "site": "00597ce4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3c8:8"
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
      "definition_site": "00598044",
      "incomplete_value": true,
      "site": "00598048",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:cd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00597d24",
      "incomplete_value": true,
      "site": "00597d28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d00:8"
              ]
            ]
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
      "00598000",
      "READ",
      [
        "storage",
        "00c9b3c8",
        null,
        "pointer"
      ]
    ],
    [
      "00598000",
      "PARAM",
      [
        "storage",
        "01127cd8",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00598044",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00598000",
      "READ",
      [
        "storage",
        "00c9c398",
        null,
        "pointer"
      ]
    ],
    [
      "00598000",
      "PARAM",
      [
        "storage",
        "01128c98",
        "std::__ndk1::time_put<char,std::__ndk1::ostreambuf_iterator<char,std::__ndk1::char_traits<char>>>::id",
        "undefined8"
      ]
    ],
    [
      "00598044",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00597ce4 ["INT_ADD", "register:40f0:8", ["const:597ce4:8", "const:4:8"]]
- 00597ce4 ["CALL", null, ["callee:00c59320:8"]]
+ 00598004 ["INT_ADD", "register:40f0:8", ["const:598004:8", "const:4:8"]]
+ 00598004 ["CALL", null, ["callee:00c59320:8"]]
- 00597d28 ["INT_ADD", "register:40f0:8", ["const:597d28:8", "const:4:8"]]
- 00597d28 ["CALL", null, ["callee:00c59320:8"]]
+ 00598048 ["INT_ADD", "register:40f0:8", ["const:598048:8", "const:4:8"]]
+ 00598048 ["CALL", null, ["callee:00c59320:8"]]
- 00597cb8 ["INT_ADD", "register:40f0:8", ["const:597cb8:8", "const:4:8"]]
- 00597cb8 ["CALL", null, ["callee:00c59300:8"]]
+ 00597fd8 ["INT_ADD", "register:40f0:8", ["const:597fd8:8", "const:4:8"]]
+ 00597fd8 ["CALL", null, ["callee:00c59300:8"]]
~~~


<a id="compare-1524c091a302ff1e011d4b5f28881cbf"></a>

### [`00597f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f10.md) → [`00598230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598230.md) FUN_00598230

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 18件 [`005aca50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca50.md) [`005b71c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b71c4.md) [`005b77ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b77ec.md) [`005b7d38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b7/005b7d38.md) [`005b811c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b8/005b811c.md) · 呼出先 0件 
- 新版 呼出元 18件 [`005ace00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ace00.md) [`005b7574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7574.md) [`005b7b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b7/005b7b9c.md) [`005b80e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b80e8.md) [`005b84cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b8/005b84cc.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00598238",
      "incomplete_value": false,
      "site": "0059823c",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00597f18",
      "incomplete_value": false,
      "site": "00597f1c",
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
            "const:7f8:8"
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
      "0059823c",
      "DATA",
      [
        "storage",
        "00c6d7f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059823c",
      "DATA",
      [
        "storage",
        "00c6e7c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00597f14 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 00598234 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00597f18 ["COPY", "tmp:0:8", ["const:7f8:8"]]
- 00597f18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00597f18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00597f18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00598238 ["COPY", "tmp:0:8", ["const:7c8:8"]]
+ 00598238 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00598238 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00598238 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4687697eab1cf1a35951014ec62fb706"></a>

### [`00597f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f3c.md) → [`0059825c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059825c.md) FUN_0059825c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00598e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598e00.md) [`0059929c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/0059929c.md) [`005aca84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca84.md) [`005acf00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005acf00.md) · 呼出先 24件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0044ff9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044ff9c.md) [`004518f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004518f0.md)
- 新版 呼出元 4件 [`00599120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599120.md) [`005995bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/005995bc.md) [`005ace34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ace34.md) [`005ad2b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad2b0.md) · 呼出先 24件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`004502bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00450/004502bc.md) [`00451c10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451c10.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 92.96% / 新版 92.96%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `store_destination` 1件, `store_value` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00598704",
      "incomplete_value": true,
      "site": "0059870c",
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
      "definition_site": "005983e4",
      "incomplete_value": true,
      "site": "005983ec",
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
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00598714",
      "incomplete_value": true,
      "site": "00598714",
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
                "register:8:8"
              ],
              [
                "leaf",
                "const:f0:8"
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
      "definition_site": "005983f4",
      "incomplete_value": true,
      "site": "005983f4",
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
                "register:8:8"
              ],
              [
                "leaf",
                "const:f0:8"
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
    "ordinal": 45,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00598714",
      "incomplete_value": true,
      "site": "00598714",
      "value": [
        "LOAD",
        "8",
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005983f4",
      "incomplete_value": true,
      "site": "005983f4",
      "value": [
        "LOAD",
        "8",
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "005982fc",
      "READ",
      [
        "storage",
        "00c9b3d0",
        null,
        "pointer"
      ]
    ],
    [
      "0059830c",
      "READ",
      [
        "storage",
        "00ca66d0",
        null,
        "undefined1"
      ]
    ],
    [
      "00598318",
      "READ",
      [
        "storage",
        "00ca66d8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "005982fc",
      "READ",
      [
        "storage",
        "00c9c3a0",
        null,
        "pointer"
      ]
    ],
    [
      "0059830c",
      "READ",
      [
        "storage",
        "00ca7690",
        null,
        "undefined1"
      ]
    ],
    [
      "00598318",
      "READ",
      [
        "storage",
        "00ca7698",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00598078 ["INT_ADD", "register:40f0:8", ["const:598078:8", "const:4:8"]]
- 00598078 ["CALL", null, ["callee:00c59150:8"]]
+ 00598398 ["INT_ADD", "register:40f0:8", ["const:598398:8", "const:4:8"]]
+ 00598398 ["CALL", null, ["callee:00c59150:8"]]
- 00598088 ["INT_ADD", "register:40f0:8", ["const:598088:8", "const:4:8"]]
- 00598088 ["CALL", null, ["callee:00c59010:8"]]
+ 005983a8 ["INT_ADD", "register:40f0:8", ["const:5983a8:8", "const:4:8"]]
+ 005983a8 ["CALL", null, ["callee:00c59010:8"]]
- 005980d4 ["COPY", "register:0:8", ["register:4048:8"]]
- 005980d4 ["INT_ADD", "register:40f0:8", ["const:5980d4:8", "const:4:8"]]
- 005980d4 ["CALLIND", null, ["register:0:8"]]
+ 005983f4 ["COPY", "register:0:8", ["register:4048:8"]]
+ 005983f4 ["INT_ADD", "register:40f0:8", ["const:5983f4:8", "const:4:8"]]
+ 005983f4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-66c92a5f1ce331bedd5e15967059a2a9"></a>

### [`00598b7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b7c.md) → [`00598e9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e9c.md) FUN_00598e9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00598b74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598b74.md) · 呼出先 3件 [`0059a208`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a208.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00598e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598e94.md) · 呼出先 3件 [`0059a528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a528.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.85% / 新版 97.85%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00598f3c",
      "incomplete_value": false,
      "site": "00598f40",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00598c1c",
      "incomplete_value": false,
      "site": "00598c20",
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
            "const:860:8"
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
      "00598f40",
      "DATA",
      [
        "storage",
        "00c6d860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00598f40",
      "DATA",
      [
        "storage",
        "00c6e830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00598bbc ["COPY", "register:0:8", ["register:4048:8"]]
- 00598bbc ["INT_ADD", "register:40f0:8", ["const:598bbc:8", "const:4:8"]]
- 00598bbc ["CALLIND", null, ["register:0:8"]]
+ 00598edc ["COPY", "register:0:8", ["register:4048:8"]]
+ 00598edc ["INT_ADD", "register:40f0:8", ["const:598edc:8", "const:4:8"]]
+ 00598edc ["CALLIND", null, ["register:0:8"]]
- 00598bf8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00598bf8 ["INT_ADD", "register:40f0:8", ["const:598bf8:8", "const:4:8"]]
- 00598bf8 ["CALLIND", null, ["register:0:8"]]
+ 00598f18 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00598f18 ["INT_ADD", "register:40f0:8", ["const:598f18:8", "const:4:8"]]
+ 00598f18 ["CALLIND", null, ["register:0:8"]]
- 00598c0c ["INT_ADD", "register:40f0:8", ["const:598c0c:8", "const:4:8"]]
- 00598c0c ["CALL", null, ["callee:00c58f30:8"]]
+ 00598f2c ["INT_ADD", "register:40f0:8", ["const:598f2c:8", "const:4:8"]]
+ 00598f2c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-26f88cde8d1bb27f6b237fcd558cdc87"></a>

### [`00598e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598e00.md) → [`00599120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599120.md) FUN_00599120

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00597f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f3c.md) [`0059925c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/0059925c.md) [`0059a4d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a4d8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0059825c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059825c.md) [`0059957c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/0059957c.md) [`0059a7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a7f8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.68% / 新版 98.68%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00599340",
      "incomplete_value": false,
      "site": "00599340",
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
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00599020",
      "incomplete_value": false,
      "site": "00599020",
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
            "const:950:8"
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
      "00599224",
      "PARAM",
      [
        "storage",
        "00ca6688",
        null,
        "undefined1"
      ]
    ],
    [
      "00599340",
      "DATA",
      [
        "storage",
        "00c6d950",
        null,
        "undefined *"
      ]
    ],
    [
      "005993b0",
      "READ",
      [
        "storage",
        "00c6d978",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00599224",
      "PARAM",
      [
        "storage",
        "00ca7648",
        null,
        "undefined1"
      ]
    ],
    [
      "00599340",
      "DATA",
      [
        "storage",
        "00c6e920",
        null,
        "undefined *"
      ]
    ],
    [
      "005993b0",
      "READ",
      [
        "storage",
        "00c6e948",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00598e2c ["INT_ADD", "register:40f0:8", ["const:598e2c:8", "const:4:8"]]
- 00598e2c ["CALL", null, ["callee:0059825c:8"]]
+ 0059914c ["INT_ADD", "register:40f0:8", ["const:59914c:8", "const:4:8"]]
+ 0059914c ["CALL", null, ["callee:0059825c:8"]]
- 00598e4c ["INT_ADD", "register:40f0:8", ["const:598e4c:8", "const:4:8"]]
- 00598e4c ["CALL", null, ["callee:00c54d90:8"]]
+ 0059916c ["INT_ADD", "register:40f0:8", ["const:59916c:8", "const:4:8"]]
+ 0059916c ["CALL", null, ["callee:00c54d90:8"]]
- 00598e60 ["COPY", "register:0:8", ["register:4040:8"]]
- 00598e60 ["INT_ADD", "register:40f0:8", ["const:598e60:8", "const:4:8"]]
- 00598e60 ["CALLIND", null, ["register:0:8"]]
+ 00599180 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00599180 ["INT_ADD", "register:40f0:8", ["const:599180:8", "const:4:8"]]
+ 00599180 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-65ac8d8eb9380cd6cc0803180fa1744e"></a>

### [`0059929c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/0059929c.md) → [`005995bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/005995bc.md) FUN_005995bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00597f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f3c.md) [`0059adf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059adf8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0059825c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/0059825c.md) [`0059b118`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b118.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 98.06% / 新版 98.06%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00599784",
      "incomplete_value": false,
      "site": "0059978c",
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
            "const:9a0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00599464",
      "incomplete_value": false,
      "site": "0059946c",
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
            "const:9d0:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00599678",
      "incomplete_value": false,
      "site": "00599680",
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
            "const:648:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00599358",
      "incomplete_value": false,
      "site": "00599360",
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
            "const:688:8"
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
      "00599678",
      "PARAM",
      [
        "storage",
        "00ca6688",
        null,
        "undefined1"
      ]
    ],
    [
      "0059978c",
      "DATA",
      [
        "storage",
        "00c6d9d0",
        null,
        "undefined *"
      ]
    ],
    [
      "00599818",
      "READ",
      [
        "storage",
        "00c6d9f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00599678",
      "PARAM",
      [
        "storage",
        "00ca7648",
        null,
        "undefined1"
      ]
    ],
    [
      "0059978c",
      "DATA",
      [
        "storage",
        "00c6e9a0",
        null,
        "undefined *"
      ]
    ],
    [
      "00599818",
      "READ",
      [
        "storage",
        "00c6e9c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00599360 ["INT_ADD", "register:40f0:8", ["const:599360:8", "const:4:8"]]
- 00599360 ["CALL", null, ["callee:004413ec:8"]]
+ 00599680 ["INT_ADD", "register:40f0:8", ["const:599680:8", "const:4:8"]]
+ 00599680 ["CALL", null, ["callee:004413ec:8"]]
- 005992cc ["INT_ADD", "register:40f0:8", ["const:5992cc:8", "const:4:8"]]
- 005992cc ["CALL", null, ["callee:0059825c:8"]]
+ 005995ec ["INT_ADD", "register:40f0:8", ["const:5995ec:8", "const:4:8"]]
+ 005995ec ["CALL", null, ["callee:0059825c:8"]]
- 005992ec ["INT_ADD", "register:40f0:8", ["const:5992ec:8", "const:4:8"]]
- 005992ec ["CALL", null, ["callee:00c54d90:8"]]
+ 0059960c ["INT_ADD", "register:40f0:8", ["const:59960c:8", "const:4:8"]]
+ 0059960c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-8b6bf402484925e203ba48a24901bd0d"></a>

### [`005996f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/005996f4.md) → [`00599a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599a14.md) FUN_00599a14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0059a748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a748.md) [`0059ae58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059ae58.md) · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00599844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599844.md) [`0076911c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/0076911c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 2件 [`0059aa68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059aa68.md) [`0059b178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b178.md) · 呼出先 6件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00599b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599b64.md) [`007694f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/007694f8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.62% / 新版 97.62%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00599a3c",
      "incomplete_value": false,
      "site": "00599a4c",
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
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059971c",
      "incomplete_value": false,
      "site": "0059972c",
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
            "const:670:8"
          ]
        ]
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00599a94",
      "value": [
        "leaf",
        "ram:7694f8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00599774",
      "value": [
        "leaf",
        "ram:76911c:8"
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
      "00599a3c",
      "PARAM",
      [
        "storage",
        "00ca6670",
        null,
        "undefined1"
      ]
    ],
    [
      "00599a94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076911c"
      ]
    ]
  ],
  "added": [
    [
      "00599a3c",
      "PARAM",
      [
        "storage",
        "00ca7630",
        null,
        "undefined1"
      ]
    ],
    [
      "00599a94",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007694f8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059972c ["INT_ADD", "register:40f0:8", ["const:59972c:8", "const:4:8"]]
- 0059972c ["CALL", null, ["callee:004413ec:8"]]
+ 00599a4c ["INT_ADD", "register:40f0:8", ["const:599a4c:8", "const:4:8"]]
+ 00599a4c ["CALL", null, ["callee:004413ec:8"]]
- 00599774 ["INT_ADD", "register:40f0:8", ["const:599774:8", "const:4:8"]]
- 00599774 ["CALL", null, ["ram:76911c:8"]]
+ 00599a94 ["INT_ADD", "register:40f0:8", ["const:599a94:8", "const:4:8"]]
+ 00599a94 ["CALL", null, ["ram:7694f8:8"]]
- 00599718 ["COPY", "register:4008:8", ["const:ca6000:8"]]
+ 00599a38 ["COPY", "register:4008:8", ["const:ca7000:8"]]
~~~


<a id="compare-987f6efd103da398d5d3c62412ad7f3a"></a>

### [`00599844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599844.md) → [`00599b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599b64.md) FUN_00599b64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005996f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/005996f4.md) · 呼出先 12件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`0059b380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b380.md) [`0059b3d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059b/0059b3d0.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md)
- 新版 呼出元 1件 [`00599a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599a14.md) · 呼出先 12件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00452fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00452/00452fb4.md) [`0059b6a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b6a0.md) [`0059b6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b6f0.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md)

変更の種類 call, call_count, call_target, constant, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 95.05% / 新版 95.05%

優先判定に残った影響 `call_target` 2件, `store_value` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00599c04",
      "incomplete_value": false,
      "site": "00599c04",
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
            "const:a20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005998e4",
      "incomplete_value": false,
      "site": "005998e4",
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
            "const:a50:8"
          ]
        ]
      ]
    },
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00599b90",
      "value": [
        "leaf",
        "ram:7647b8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00599870",
      "value": [
        "leaf",
        "ram:7643dc:8"
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
      "site": "00599b9c",
      "value": [
        "leaf",
        "ram:7689d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0059987c",
      "value": [
        "leaf",
        "ram:7685fc:8"
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
      "00599b90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "unmatched:00599874",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "00599b9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007685fc"
      ]
    ]
  ],
  "added": [
    [
      "00599b90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007647b8"
      ]
    ],
    [
      "00599b94",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "00599b9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007689d8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00599870 ["INT_ADD", "register:40f0:8", ["const:599870:8", "const:4:8"]]
- 00599870 ["CALL", null, ["ram:7643dc:8"]]
+ 00599b90 ["INT_ADD", "register:40f0:8", ["const:599b90:8", "const:4:8"]]
+ 00599b90 ["CALL", null, ["ram:7647b8:8"]]
- 0059987c ["INT_ADD", "register:40f0:8", ["const:59987c:8", "const:4:8"]]
- 0059987c ["CALL", null, ["ram:7685fc:8"]]
+ 00599b9c ["INT_ADD", "register:40f0:8", ["const:599b9c:8", "const:4:8"]]
+ 00599b9c ["CALL", null, ["ram:7689d8:8"]]
- 00599868 ["INT_ADD", "register:40f0:8", ["const:599868:8", "const:4:8"]]
- 00599868 ["CALL", null, ["callee:008524fc:8"]]
+ 00599b88 ["INT_ADD", "register:40f0:8", ["const:599b88:8", "const:4:8"]]
+ 00599b88 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a947fa5f794dd1634db469f8af875175"></a>

### [`00599ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599ab4.md) → [`00599dd4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599dd4.md) FUN_00599dd4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0059a748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a748.md) [`0059ae58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059ae58.md) · 呼出先 4件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 2件 [`0059aa68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059aa68.md) [`0059b178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059b/0059b178.md) · 呼出先 4件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00599e08",
      "incomplete_value": false,
      "site": "00599e18",
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
            "const:648:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00599ae8",
      "incomplete_value": false,
      "site": "00599af8",
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
            "const:688:8"
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
      "definition_site": "00599e7c",
      "incomplete_value": false,
      "site": "00599e84",
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
            "const:630:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00599b5c",
      "incomplete_value": false,
      "site": "00599b64",
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
      "00599e08",
      "PARAM",
      [
        "storage",
        "00ca6688",
        null,
        "undefined1"
      ]
    ],
    [
      "00599e7c",
      "PARAM",
      [
        "storage",
        "00ca6670",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00599e08",
      "PARAM",
      [
        "storage",
        "00ca7648",
        null,
        "undefined1"
      ]
    ],
    [
      "00599e7c",
      "PARAM",
      [
        "storage",
        "00ca7630",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00599af8 ["INT_ADD", "register:40f0:8", ["const:599af8:8", "const:4:8"]]
- 00599af8 ["CALL", null, ["callee:004413ec:8"]]
+ 00599e18 ["INT_ADD", "register:40f0:8", ["const:599e18:8", "const:4:8"]]
+ 00599e18 ["CALL", null, ["callee:004413ec:8"]]
- 00599b64 ["INT_ADD", "register:40f0:8", ["const:599b64:8", "const:4:8"]]
- 00599b64 ["CALL", null, ["callee:004413ec:8"]]
+ 00599e84 ["INT_ADD", "register:40f0:8", ["const:599e84:8", "const:4:8"]]
+ 00599e84 ["CALL", null, ["callee:004413ec:8"]]
- 00599ae4 ["COPY", "register:4008:8", ["const:ca6000:8"]]
+ 00599e04 ["COPY", "register:4008:8", ["const:ca7000:8"]]
~~~


<a id="compare-fdff8c2e65492ad7d8d1a963015f8649"></a>

### [`00599e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599e94.md) → [`0059a1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a1b4.md) FUN_0059a1b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00599f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599f78.md) [`005ad4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad4c4.md) [`005ad550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ad/005ad550.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 3件 [`0059a298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a298.md) [`005ad874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad874.md) [`005ad900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ad/005ad900.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.49% / 新版 96.49%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a1cc",
      "incomplete_value": false,
      "site": "0059a1d0",
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
            "const:7c8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00599eac",
      "incomplete_value": false,
      "site": "00599eb0",
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
            "const:7f8:8"
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
      "0059a1d0",
      "DATA",
      [
        "storage",
        "00c6d7f8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a1d0",
      "DATA",
      [
        "storage",
        "00c6e7c8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00599ea8 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059a1c8 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00599eac ["COPY", "tmp:0:8", ["const:7f8:8"]]
- 00599eac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00599eac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00599eac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059a1cc ["COPY", "tmp:0:8", ["const:7c8:8"]]
+ 0059a1cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059a1cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059a1cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00599ec0 ["INT_ADD", "register:40f0:8", ["const:599ec0:8", "const:4:8"]]
- 00599ec0 ["CALL", null, ["callee:00c54d90:8"]]
+ 0059a1e0 ["INT_ADD", "register:40f0:8", ["const:59a1e0:8", "const:4:8"]]
+ 0059a1e0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-ce79781d88c89ad6dad23989316c6385"></a>

### [`00599f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599f9c.md) → [`0059a2bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a2bc.md) FUN_0059a2bc

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
      "definition_site": "0059a2c8",
      "incomplete_value": false,
      "site": "0059a2d4",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00599fa8",
      "incomplete_value": false,
      "site": "00599fb4",
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
      "0059a2d4",
      "DATA",
      [
        "storage",
        "00c6d860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a2d4",
      "DATA",
      [
        "storage",
        "00c6e830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00599fa4 ["COPY", "register:4050:8", ["const:c6d000:8"]]
+ 0059a2c4 ["COPY", "register:4050:8", ["const:c6e000:8"]]
- 00599fa8 ["COPY", "tmp:0:8", ["const:860:8"]]
- 00599fa8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00599fa8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00599fa8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0059a2c8 ["COPY", "tmp:0:8", ["const:830:8"]]
+ 0059a2c8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0059a2c8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0059a2c8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-cea1bfa1bd7859514e8a846e149ba12f"></a>

### [`00599fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00599/00599fe0.md) → [`0059a300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a300.md) FUN_0059a300

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
      "definition_site": "0059a318",
      "incomplete_value": false,
      "site": "0059a324",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00599ff8",
      "incomplete_value": false,
      "site": "0059a004",
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
      "0059a324",
      "DATA",
      [
        "storage",
        "00c6d860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a324",
      "DATA",
      [
        "storage",
        "00c6e830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00599ff4 ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059a314 ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 00599ff8 ["COPY", "tmp:0:8", ["const:860:8"]]
- 00599ff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00599ff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00599ff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059a318 ["COPY", "tmp:0:8", ["const:830:8"]]
+ 0059a318 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059a318 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059a318 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0059a028 ["COPY", "register:0:8", ["register:4040:8"]]
- 0059a028 ["INT_ADD", "register:40f0:8", ["const:59a028:8", "const:4:8"]]
- 0059a028 ["CALLIND", null, ["register:0:8"]]
+ 0059a348 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0059a348 ["INT_ADD", "register:40f0:8", ["const:59a348:8", "const:4:8"]]
+ 0059a348 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4003a5c2c9cbcf278cff3c4ceb5e0bb5"></a>

### [`0059a03c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a03c.md) → [`0059a35c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a35c.md) FUN_0059a35c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a388",
      "incomplete_value": false,
      "site": "0059a388",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a068",
      "incomplete_value": false,
      "site": "0059a068",
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
            "const:860:8"
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
      "0059a388",
      "DATA",
      [
        "storage",
        "00c6d860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a388",
      "DATA",
      [
        "storage",
        "00c6e830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a050 ["INT_ADD", "register:40f0:8", ["const:59a050:8", "const:4:8"]]
- 0059a050 ["CALL", null, ["callee:00c58f30:8"]]
+ 0059a370 ["INT_ADD", "register:40f0:8", ["const:59a370:8", "const:4:8"]]
+ 0059a370 ["CALL", null, ["callee:00c58f30:8"]]
- 0059a05c ["COPY", "register:4040:8", ["const:c6d000:8"]]
+ 0059a37c ["COPY", "register:4040:8", ["const:c6e000:8"]]
- 0059a060 ["COPY", "tmp:0:8", ["const:860:8"]]
- 0059a060 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0059a060 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0059a060 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0059a380 ["COPY", "tmp:0:8", ["const:830:8"]]
+ 0059a380 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0059a380 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0059a380 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ba42e9905481a561d521c8a292c49841"></a>

### [`0059a0c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a0c4.md) → [`0059a3e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a3e4.md) FUN_0059a3e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.10% / 新版 93.10%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a400",
      "incomplete_value": false,
      "site": "0059a400",
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
            "const:830:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a0e0",
      "incomplete_value": false,
      "site": "0059a0e0",
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
      "0059a400",
      "DATA",
      [
        "storage",
        "00c6d860",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a400",
      "DATA",
      [
        "storage",
        "00c6e830",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a0d8 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 0059a3f8 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 0059a0dc ["COPY", "tmp:0:8", ["const:860:8"]]
- 0059a0dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a0dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a0dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a3fc ["COPY", "tmp:0:8", ["const:830:8"]]
+ 0059a3fc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a3fc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a3fc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059a100 ["COPY", "register:0:8", ["register:4048:8"]]
- 0059a100 ["INT_ADD", "register:40f0:8", ["const:59a100:8", "const:4:8"]]
- 0059a100 ["CALLIND", null, ["register:0:8"]]
+ 0059a420 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0059a420 ["INT_ADD", "register:40f0:8", ["const:59a420:8", "const:4:8"]]
+ 0059a420 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-932f7a832b60c8489ed1e03b73d16cad"></a>

### [`0059a4d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a4d8.md) → [`0059a7f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a7f8.md) FUN_0059a7f8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00598e00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00598/00598e00.md) [`005aca84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ac/005aca84.md) · 呼出先 3件 [`00bf0470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bf0/00bf0470.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)
- 新版 呼出元 2件 [`00599120`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00599/00599120.md) [`005ace34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ac/005ace34.md) · 呼出先 3件 [`00bf1464`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bf1/00bf1464.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a818",
      "incomplete_value": true,
      "site": "0059a81c",
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
      "definition_site": "0059a4f8",
      "incomplete_value": true,
      "site": "0059a4fc",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0059a820",
      "incomplete_value": true,
      "site": "0059a828",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:3b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a500",
      "incomplete_value": true,
      "site": "0059a508",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3e0:8"
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
      "definition_site": "0059a824",
      "incomplete_value": true,
      "site": "0059a828",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:c9c000:8"
              ],
              [
                "leaf",
                "const:3b8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a504",
      "incomplete_value": true,
      "site": "0059a508",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3e8:8"
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
      "0059a814",
      "READ",
      [
        "storage",
        "00c9b3d8",
        null,
        "pointer"
      ]
    ],
    [
      "0059a81c",
      "DATA",
      [
        "storage",
        "00c92ad8",
        null,
        "pointer"
      ]
    ],
    [
      "0059a820",
      "READ",
      [
        "storage",
        "00c9b3e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0059a814",
      "READ",
      [
        "storage",
        "00c9c3a8",
        null,
        "pointer"
      ]
    ],
    [
      "0059a81c",
      "DATA",
      [
        "storage",
        "00c93aa8",
        null,
        "pointer"
      ]
    ],
    [
      "0059a820",
      "READ",
      [
        "storage",
        "00c9c3b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a508 ["INT_ADD", "register:40f0:8", ["const:59a508:8", "const:4:8"]]
- 0059a508 ["CALL", null, ["callee:00c58fb0:8"]]
+ 0059a828 ["INT_ADD", "register:40f0:8", ["const:59a828:8", "const:4:8"]]
+ 0059a828 ["CALL", null, ["callee:00c58fb0:8"]]
- 0059a4e4 ["INT_ADD", "register:40f0:8", ["const:59a4e4:8", "const:4:8"]]
- 0059a4e4 ["CALL", null, ["callee:00c58f90:8"]]
+ 0059a804 ["INT_ADD", "register:40f0:8", ["const:59a804:8", "const:4:8"]]
+ 0059a804 ["CALL", null, ["callee:00c58f90:8"]]
- 0059a4e8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 0059a808 ["COPY", "register:4040:8", ["const:c9c000:8"]]
~~~


<a id="compare-8248a8f6bbef089fd225da1b1da0eb0d"></a>

### [`0059a50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a50c.md) → [`0059a82c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a82c.md) FUN_0059a82c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a844",
      "incomplete_value": false,
      "site": "0059a848",
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
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a524",
      "incomplete_value": false,
      "site": "0059a528",
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
            "const:950:8"
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
      "0059a848",
      "DATA",
      [
        "storage",
        "00c6d950",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a848",
      "DATA",
      [
        "storage",
        "00c6e920",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a520 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 0059a840 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 0059a524 ["COPY", "tmp:0:8", ["const:950:8"]]
- 0059a524 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a524 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a524 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a844 ["COPY", "tmp:0:8", ["const:920:8"]]
+ 0059a844 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a844 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a844 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059a534 ["INT_ADD", "register:40f0:8", ["const:59a534:8", "const:4:8"]]
- 0059a534 ["CALL", null, ["callee:00c58f50:8"]]
+ 0059a854 ["INT_ADD", "register:40f0:8", ["const:59a854:8", "const:4:8"]]
+ 0059a854 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-05d2f4d77edffb26d29b20ebf3fddae4"></a>

### [`0059a558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a558.md) → [`0059a878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a878.md) FUN_0059a878

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a890",
      "incomplete_value": false,
      "site": "0059a894",
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
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a570",
      "incomplete_value": false,
      "site": "0059a574",
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
            "const:950:8"
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
      "0059a894",
      "DATA",
      [
        "storage",
        "00c6d950",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a894",
      "DATA",
      [
        "storage",
        "00c6e920",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a56c ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 0059a88c ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 0059a570 ["COPY", "tmp:0:8", ["const:950:8"]]
- 0059a570 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a570 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a570 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a890 ["COPY", "tmp:0:8", ["const:920:8"]]
+ 0059a890 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a890 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a890 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0059a580 ["INT_ADD", "register:40f0:8", ["const:59a580:8", "const:4:8"]]
- 0059a580 ["CALL", null, ["callee:00c58f50:8"]]
+ 0059a8a0 ["INT_ADD", "register:40f0:8", ["const:59a8a0:8", "const:4:8"]]
+ 0059a8a0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-a49f6e5d5581630a08c28e5df1478a6b"></a>

### [`0059a5a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0059a/0059a5a0.md) → [`0059a8c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0059a/0059a8c0.md) FUN_0059a8c0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.55% / 新版 93.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0059a8e8",
      "incomplete_value": false,
      "site": "0059a8e8",
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
            "const:920:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0059a5c8",
      "incomplete_value": false,
      "site": "0059a5c8",
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
            "const:950:8"
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
      "0059a8e8",
      "DATA",
      [
        "storage",
        "00c6d950",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0059a8e8",
      "DATA",
      [
        "storage",
        "00c6e920",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0059a5b4 ["INT_ADD", "register:40f0:8", ["const:59a5b4:8", "const:4:8"]]
- 0059a5b4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0059a8d4 ["INT_ADD", "register:40f0:8", ["const:59a8d4:8", "const:4:8"]]
+ 0059a8d4 ["CALL", null, ["callee:00c58f30:8"]]
- 0059a5c0 ["COPY", "register:4048:8", ["const:c6d000:8"]]
+ 0059a8e0 ["COPY", "register:4048:8", ["const:c6e000:8"]]
- 0059a5c4 ["COPY", "tmp:0:8", ["const:950:8"]]
- 0059a5c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0059a5c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0059a5c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0059a8e4 ["COPY", "tmp:0:8", ["const:920:8"]]
+ 0059a8e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a8e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0059a8e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


