# v16.0.2 → v16.0.3 · 最優先の変更候補 (54)

[一覧の目次](README.md)

<a id="compare-11670673473db738143b6f5ac1df403e"></a>

### [`0086c5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c5f4.md) → [`0086d5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d5a0.md) FUN_0086d5a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.93% / 新版 82.93%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086d5f0",
      "incomplete_value": true,
      "site": "0086d5f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
      "definition_site": "0086c644",
      "incomplete_value": true,
      "site": "0086c64c",
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
            "const:c:8"
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
      "definition_site": "0086d5f4",
      "incomplete_value": true,
      "site": "0086d5f8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
      "definition_site": "0086c648",
      "incomplete_value": true,
      "site": "0086c64c",
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
      "unmatched:0086c61c",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0086c628",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086c634",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0086d5c8",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ],
    [
      "0086d5d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0086d5e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0086c64c ["INT_ADD", "register:40f0:8", ["const:86c64c:8", "const:4:8"]]
- 0086c64c ["CALL", null, ["callee:00c59440:8"]]
+ 0086d5f8 ["INT_ADD", "register:40f0:8", ["const:86d5f8:8", "const:4:8"]]
+ 0086d5f8 ["CALL", null, ["callee:00c59440:8"]]
- 0086c614 ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 0086c614 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086c614 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086c614 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086c618 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 0086c618 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-338c1e72ccb41385ebeb8ee08165319d"></a>

### [`0086c77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c77c.md) → [`0086d728`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d728.md) FUN_0086d728

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d770",
      "incomplete_value": true,
      "site": "0086d770",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "0086d750",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086d750",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086c79c ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 0086c79c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086c79c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086c79c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086d748 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 0086d748 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086d748 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086d748 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086c7d4 ["INT_ADD", "register:40f0:8", ["const:86c7d4:8", "const:4:8"]]
- 0086c7d4 ["CALL", null, ["callee:00c59440:8"]]
+ 0086d780 ["INT_ADD", "register:40f0:8", ["const:86d780:8", "const:4:8"]]
+ 0086d780 ["CALL", null, ["callee:00c59440:8"]]
- 0086c7e4 ["INT_ADD", "register:40f0:8", ["const:86c7e4:8", "const:4:8"]]
- 0086c7e4 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d790 ["INT_ADD", "register:40f0:8", ["const:86d790:8", "const:4:8"]]
+ 0086d790 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-96a7a87a90f0d94032a8b0f7763e8973"></a>

### [`0086c90c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086c90c.md) → [`0086d8b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086d8b8.md) FUN_0086d8b8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086d900",
      "incomplete_value": true,
      "site": "0086d900",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "0086d8e0",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086d8e0",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086c92c ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 0086c92c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086c92c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086c92c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086d8d8 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 0086d8d8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086d8d8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086d8d8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086c964 ["INT_ADD", "register:40f0:8", ["const:86c964:8", "const:4:8"]]
- 0086c964 ["CALL", null, ["callee:00c59440:8"]]
+ 0086d910 ["INT_ADD", "register:40f0:8", ["const:86d910:8", "const:4:8"]]
+ 0086d910 ["CALL", null, ["callee:00c59440:8"]]
- 0086c974 ["INT_ADD", "register:40f0:8", ["const:86c974:8", "const:4:8"]]
- 0086c974 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086d920 ["INT_ADD", "register:40f0:8", ["const:86d920:8", "const:4:8"]]
+ 0086d920 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-ab5b54ad802ef25cfeecba1dfd286318"></a>

### [`0086ca9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086ca9c.md) → [`0086da48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086da48.md) FUN_0086da48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 73.81% / 新版 73.81%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086caec",
      "incomplete_value": true,
      "site": "0086caf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086caf0",
      "incomplete_value": true,
      "site": "0086caf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086cac4",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0086cad0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086cadc",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0086da70",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ],
    [
      "0086da7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0086da88",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0086caf4 ["INT_ADD", "register:40f0:8", ["const:86caf4:8", "const:4:8"]]
- 0086caf4 ["CALL", null, ["callee:00c59440:8"]]
+ 0086daa0 ["INT_ADD", "register:40f0:8", ["const:86daa0:8", "const:4:8"]]
+ 0086daa0 ["CALL", null, ["callee:00c59440:8"]]
- 0086cabc ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 0086cabc ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086cabc ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086cabc ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086cac0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:28:8"]]
- 0086cac0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d4b0ffc5a22622b5ea09766094291d62"></a>

### [`0086cc2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086cc2c.md) → [`0086dbd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086dbd8.md) FUN_0086dbd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 89.29% / 新版 89.29%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086dc28",
      "incomplete_value": true,
      "site": "0086dc30",
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
            "const:c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086cc7c",
      "incomplete_value": true,
      "site": "0086cc84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086dc2c",
      "incomplete_value": true,
      "site": "0086dc30",
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
    "old": {
      "definition_site": "0086cc80",
      "incomplete_value": true,
      "site": "0086cc84",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086cd1c",
      "incomplete_value": true,
      "site": "0086cd28",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:0086cc54",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0086cc6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c0]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086cc70",
      "WRITE",
      [
        "storage",
        "Stack[-0x13b7]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0086dc00",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ],
    [
      "0086dc18",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c0]",
        null,
        null
      ]
    ],
    [
      "0086dc1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x13b7]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0086cc84 ["INT_ADD", "register:40f0:8", ["const:86cc84:8", "const:4:8"]]
- 0086cc84 ["CALL", null, ["callee:00c59440:8"]]
+ 0086dc30 ["INT_ADD", "register:40f0:8", ["const:86dc30:8", "const:4:8"]]
+ 0086dc30 ["CALL", null, ["callee:00c59440:8"]]
- 0086cd28 ["INT_ADD", "register:40f0:8", ["const:86cd28:8", "const:4:8"]]
- 0086cd28 ["CALL", null, ["callee:0046de60:8"]]
+ 0086dcd4 ["INT_ADD", "register:40f0:8", ["const:86dcd4:8", "const:4:8"]]
+ 0086dcd4 ["CALL", null, ["callee:0046de60:8"]]
- 0086cc4c ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 0086cc4c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086cc4c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086cc4c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-2567e9af58e060a86cfb546230a7b215"></a>

### [`0086cdbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086cdbc.md) → [`0086dd68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086dd68.md) FUN_0086dd68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) [`00a39454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a39454.md) [`00a3957c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a39/00a3957c.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 3件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) [`00a3a448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3a448.md) [`00a3a570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3a/00a3a570.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 63.41% / 新版 63.41%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086ddb8",
      "incomplete_value": true,
      "site": "0086ddc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
      "definition_site": "0086ce0c",
      "incomplete_value": true,
      "site": "0086ce14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086ddbc",
      "incomplete_value": true,
      "site": "0086ddc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
      "definition_site": "0086ce10",
      "incomplete_value": true,
      "site": "0086ce14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086ceac",
      "incomplete_value": true,
      "site": "0086ceb8",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:0086cdbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086cdc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086cdc4",
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
      "0086dd68",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0086dd6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086dd70",
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
- 0086ce14 ["INT_ADD", "register:40f0:8", ["const:86ce14:8", "const:4:8"]]
- 0086ce14 ["CALL", null, ["callee:00c59440:8"]]
+ 0086ddc0 ["INT_ADD", "register:40f0:8", ["const:86ddc0:8", "const:4:8"]]
+ 0086ddc0 ["CALL", null, ["callee:00c59440:8"]]
- 0086ceb8 ["INT_ADD", "register:40f0:8", ["const:86ceb8:8", "const:4:8"]]
- 0086ceb8 ["CALL", null, ["callee:0046de60:8"]]
+ 0086de64 ["INT_ADD", "register:40f0:8", ["const:86de64:8", "const:4:8"]]
+ 0086de64 ["CALL", null, ["callee:0046de60:8"]]
- 0086cdbc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086cdbc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086cdbc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 0086cdbc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-131dea9bd2cb96b5587df143c300ceb8"></a>

### [`0086cf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086c/0086cf44.md) → [`0086def0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086d/0086def0.md) FUN_0086def0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 79.27% / 新版 79.27%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086df40",
      "incomplete_value": true,
      "site": "0086df48",
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
                "const:3a0:8"
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
      "definition_site": "0086cf94",
      "incomplete_value": true,
      "site": "0086cf9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086df44",
      "incomplete_value": true,
      "site": "0086df48",
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
                "const:3a0:8"
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
      "definition_site": "0086cf98",
      "incomplete_value": true,
      "site": "0086cf9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_SUB",
              [
                "leaf",
                "const:3a0:8"
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
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086cf6c",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0086cf78",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086cf84",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0086df18",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ],
    [
      "0086df24",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0086df30",
      "WRITE",
      [
        "storage",
        "Stack[-0x13c0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0086cf9c ["INT_ADD", "register:40f0:8", ["const:86cf9c:8", "const:4:8"]]
- 0086cf9c ["CALL", null, ["callee:00c59440:8"]]
+ 0086df48 ["INT_ADD", "register:40f0:8", ["const:86df48:8", "const:4:8"]]
+ 0086df48 ["CALL", null, ["callee:00c59440:8"]]
- 0086cf58 ["INT_SUB", "register:8:8", ["register:8:8", "const:3a0:8"]]
- 0086cf5c ["COPY", "register:40a0:8", ["register:1660:8"]]
~~~


<a id="compare-d6a207c4b1c9005fb4f19a6d9578c0d0"></a>

### [`0086d0cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d0cc.md) → [`0086e078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e078.md) FUN_0086e078

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0086e0c0",
      "incomplete_value": true,
      "site": "0086e0c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "0086e0a0",
      "READ",
      [
        "storage",
        "002b8dc9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0086e0a0",
      "READ",
      [
        "storage",
        "002b8e98",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d0ec ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 0086d0ec ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086d0ec ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086d0ec ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086e098 ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 0086e098 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086e098 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086e098 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086d124 ["INT_ADD", "register:40f0:8", ["const:86d124:8", "const:4:8"]]
- 0086d124 ["CALL", null, ["callee:00c59440:8"]]
+ 0086e0d0 ["INT_ADD", "register:40f0:8", ["const:86e0d0:8", "const:4:8"]]
+ 0086e0d0 ["CALL", null, ["callee:00c59440:8"]]
- 0086d134 ["INT_ADD", "register:40f0:8", ["const:86d134:8", "const:4:8"]]
- 0086d134 ["CALL", null, ["callee:00c58f50:8"]]
+ 0086e0e0 ["INT_ADD", "register:40f0:8", ["const:86e0e0:8", "const:4:8"]]
+ 0086e0e0 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-74c1141e9cf64c159231135897a40c8d"></a>

### [`0086d25c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d25c.md) → [`0086e208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e208.md) FUN_0086e208

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
      "definition_site": "0086e20c",
      "incomplete_value": false,
      "site": "0086e210",
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
            "const:220:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e210",
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
      "0086e210",
      "DATA",
      [
        "storage",
        "00c80220",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d25c ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086e208 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086d260 ["COPY", "tmp:0:8", ["const:250:8"]]
- 0086d260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086e20c ["COPY", "tmp:0:8", ["const:220:8"]]
+ 0086e20c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e20c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e20c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c0796155875d72c4c2f0dd2e3f824d65"></a>

### [`0086d26c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d26c.md) → [`0086e218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e218.md) FUN_0086e218

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
      "definition_site": "0086e228",
      "incomplete_value": false,
      "site": "0086e230",
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
            "const:220:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e230",
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
      "0086e230",
      "DATA",
      [
        "storage",
        "00c80220",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d278 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086e224 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086d27c ["COPY", "tmp:0:8", ["const:250:8"]]
- 0086d27c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d27c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d27c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086e228 ["COPY", "tmp:0:8", ["const:220:8"]]
+ 0086e228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0086d288 ["INT_ADD", "register:40f0:8", ["const:86d288:8", "const:4:8"]]
- 0086d288 ["CALL", null, ["callee:00c58f40:8"]]
+ 0086e234 ["INT_ADD", "register:40f0:8", ["const:86e234:8", "const:4:8"]]
+ 0086e234 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-a8d0152f1c3b8423a997a9b44197c999"></a>

### [`0086d2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d2ac.md) → [`0086e258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e258.md) FUN_0086e258

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
      "definition_site": "0086e27c",
      "incomplete_value": false,
      "site": "0086e27c",
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
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e27c",
      "DATA",
      [
        "storage",
        "00c7f2a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e27c",
      "DATA",
      [
        "storage",
        "00c80270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d2c0 ["INT_ADD", "register:40f0:8", ["const:86d2c0:8", "const:4:8"]]
- 0086d2c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0086e26c ["INT_ADD", "register:40f0:8", ["const:86e26c:8", "const:4:8"]]
+ 0086e26c ["CALL", null, ["callee:00c58f30:8"]]
- 0086d2c8 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086e274 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086d2cc ["COPY", "tmp:0:8", ["const:2a0:8"]]
- 0086d2cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d2cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d2cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086e278 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 0086e278 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e278 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e278 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-63ccd07f422d86ae7284a5353291624f"></a>

### [`0086d2e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d2e0.md) → [`0086e28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e28c.md) FUN_0086e28c

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
      "definition_site": "0086e298",
      "incomplete_value": false,
      "site": "0086e298",
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
            "const:270:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e298",
      "DATA",
      [
        "storage",
        "00c7f2a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e298",
      "DATA",
      [
        "storage",
        "00c80270",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d2e4 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086e290 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086d2e8 ["COPY", "tmp:0:8", ["const:2a0:8"]]
- 0086d2e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d2e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d2e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086e294 ["COPY", "tmp:0:8", ["const:270:8"]]
+ 0086e294 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086e294 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086e294 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2a16ea338e7b56301452d5ad95bd15dc"></a>

### [`0086d2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d2fc.md) → [`0086e2a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e2a8.md) FUN_0086e2a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d320",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0086e2cc",
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
- 0086d304 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0086d304 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086e2b0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0086e2b0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0086d30c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 0086d30c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086e2b8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 0086e2b8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
- 0086d320 ["INT_ADD", "register:40f0:8", ["const:86d320:8", "const:4:8"]]
- 0086d320 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-a5f0913e51a19d3e3cb268833e28da05"></a>

### [`0086d370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d370.md) → [`0086e31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e31c.md) FUN_0086e31c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0086d380",
      "incomplete_value": false,
      "site": "0086d384",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:0086d394",
      "DATA",
      [
        "storage",
        "00c7f320",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0086d398",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086d39c",
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
      "0086e340",
      "DATA",
      [
        "storage",
        "00c802f0",
        null,
        "undefined *"
      ]
    ],
    [
      "0086e344",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0086e348",
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
- 0086d384 ["INT_ADD", "register:40f0:8", ["const:86d384:8", "const:4:8"]]
- 0086d384 ["CALL", null, ["callee:00c58f30:8"]]
+ 0086e330 ["INT_ADD", "register:40f0:8", ["const:86e330:8", "const:4:8"]]
+ 0086e330 ["CALL", null, ["callee:00c58f30:8"]]
- 0086d38c ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086e338 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086d390 ["COPY", "tmp:0:8", ["const:320:8"]]
- 0086d390 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d390 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d390 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f0732fabe00064b1e7f40e9ad14db824"></a>

### [`0086d3a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d3a4.md) → [`0086e350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e350.md) FUN_0086e350

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
      "definition_site": "0086e35c",
      "incomplete_value": false,
      "site": "0086e35c",
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
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e35c",
      "DATA",
      [
        "storage",
        "00c7f320",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e35c",
      "DATA",
      [
        "storage",
        "00c802f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d3a8 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086e354 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086d3ac ["COPY", "tmp:0:8", ["const:320:8"]]
- 0086d3ac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d3ac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d3ac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086e358 ["COPY", "tmp:0:8", ["const:2f0:8"]]
+ 0086e358 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086e358 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086e358 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7875094f2bb010f60ea0305b579e0eed"></a>

### [`0086d3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d3c0.md) → [`0086e36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e36c.md) FUN_0086e36c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "0086e390",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d3e4",
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
      "0086e390",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0086e390",
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
- 0086d3e4 ["INT_ADD", "register:40f0:8", ["const:86d3e4:8", "const:4:8"]]
- 0086d3e4 ["CALL", null, ["ram:47ad34:8"]]
+ 0086e390 ["INT_ADD", "register:40f0:8", ["const:86e390:8", "const:4:8"]]
+ 0086e390 ["CALL", null, ["ram:47b054:8"]]
- 0086d3f0 ["INT_ADD", "register:40f0:8", ["const:86d3f0:8", "const:4:8"]]
- 0086d3f0 ["CALL", null, ["callee:0047d134:8"]]
+ 0086e39c ["INT_ADD", "register:40f0:8", ["const:86e39c:8", "const:4:8"]]
+ 0086e39c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-599751c340fe44ca56bfa911500a5736"></a>

### [`0086d434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d434.md) → [`0086e3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e3e0.md) FUN_0086e3e0

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
      "definition_site": "0086e404",
      "incomplete_value": false,
      "site": "0086e404",
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
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e404",
      "DATA",
      [
        "storage",
        "00c7f3a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e404",
      "DATA",
      [
        "storage",
        "00c80370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d448 ["INT_ADD", "register:40f0:8", ["const:86d448:8", "const:4:8"]]
- 0086d448 ["CALL", null, ["callee:00c58f30:8"]]
+ 0086e3f4 ["INT_ADD", "register:40f0:8", ["const:86e3f4:8", "const:4:8"]]
+ 0086e3f4 ["CALL", null, ["callee:00c58f30:8"]]
- 0086d450 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086e3fc ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086d454 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 0086d454 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d454 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d454 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086e400 ["COPY", "tmp:0:8", ["const:370:8"]]
+ 0086e400 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e400 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e400 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8369b283c3521557e16f3665a262b7d8"></a>

### [`0086d468`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d468.md) → [`0086e414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e414.md) FUN_0086e414

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
      "definition_site": "0086e420",
      "incomplete_value": false,
      "site": "0086e420",
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
            "const:370:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e420",
      "DATA",
      [
        "storage",
        "00c7f3a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e420",
      "DATA",
      [
        "storage",
        "00c80370",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d46c ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086e418 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086d470 ["COPY", "tmp:0:8", ["const:3a0:8"]]
- 0086d470 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d470 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d470 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086e41c ["COPY", "tmp:0:8", ["const:370:8"]]
+ 0086e41c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086e41c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086e41c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-819ceca3606957b9999a418b938cf214"></a>

### [`0086d484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d484.md) → [`0086e430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e430.md) FUN_0086e430

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "0086e454",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0086d4a8",
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
      "0086e454",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0086e454",
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
- 0086d4a8 ["INT_ADD", "register:40f0:8", ["const:86d4a8:8", "const:4:8"]]
- 0086d4a8 ["CALL", null, ["ram:47ad34:8"]]
+ 0086e454 ["INT_ADD", "register:40f0:8", ["const:86e454:8", "const:4:8"]]
+ 0086e454 ["CALL", null, ["ram:47b054:8"]]
- 0086d4b4 ["INT_ADD", "register:40f0:8", ["const:86d4b4:8", "const:4:8"]]
- 0086d4b4 ["CALL", null, ["callee:0047d134:8"]]
+ 0086e460 ["INT_ADD", "register:40f0:8", ["const:86e460:8", "const:4:8"]]
+ 0086e460 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-11e119ec9debfed3fc7747358518a6d0"></a>

### [`0086d4f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d4f8.md) → [`0086e4a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e4a4.md) FUN_0086e4a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d51c",
      "DATA",
      [
        "storage",
        "00c7f420",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0086d520",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086d524",
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
      "0086e4c8",
      "DATA",
      [
        "storage",
        "00c803f0",
        null,
        "undefined *"
      ]
    ],
    [
      "0086e4cc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0086e4d0",
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
- 0086d50c ["INT_ADD", "register:40f0:8", ["const:86d50c:8", "const:4:8"]]
- 0086d50c ["CALL", null, ["callee:00c58f30:8"]]
+ 0086e4b8 ["INT_ADD", "register:40f0:8", ["const:86e4b8:8", "const:4:8"]]
+ 0086e4b8 ["CALL", null, ["callee:00c58f30:8"]]
- 0086d514 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086e4c0 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086d518 ["COPY", "tmp:0:8", ["const:420:8"]]
- 0086d518 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d518 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d518 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4ad1c1fee9482adb754227f2568e31f4"></a>

### [`0086d52c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d52c.md) → [`0086e4d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e4d8.md) FUN_0086e4d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d538",
      "DATA",
      [
        "storage",
        "00c7f420",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e4e4",
      "DATA",
      [
        "storage",
        "00c803f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d52c ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0086d52c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0086d530 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086d534 ["COPY", "tmp:0:8", ["const:420:8"]]
- 0086d534 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d534 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d534 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2154cd1ec2862236b8b2f696be5c5df9"></a>

### [`0086d548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d548.md) → [`0086e4f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e4f4.md) FUN_0086e4f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d56c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0086e518",
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
- 0086d550 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0086d550 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086e4fc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0086e4fc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 0086d558 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 0086d558 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 0086e504 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 0086e504 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 0086d56c ["INT_ADD", "register:40f0:8", ["const:86d56c:8", "const:4:8"]]
- 0086d56c ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-73b405928e3fa9ba37f590ee4cc55566"></a>

### [`0086d5bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d5bc.md) → [`0086e568`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e568.md) FUN_0086e568

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d5bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086d5c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086d5e0",
      "DATA",
      [
        "storage",
        "00c7f4a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e568",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0086e56c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0086e58c",
      "DATA",
      [
        "storage",
        "00c80470",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d5bc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0086d5bc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0086d5bc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0086d5bc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0086d5c0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0086d5c0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0086d5c4 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-9f2cb8016d9273c4f69bb57f86c9d793"></a>

### [`0086d5f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d5f0.md) → [`0086e59c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e59c.md) FUN_0086e59c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d5fc",
      "DATA",
      [
        "storage",
        "00c7f4a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e5a8",
      "DATA",
      [
        "storage",
        "00c80470",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d5f0 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0086d5f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0086d5f4 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086d5f8 ["COPY", "tmp:0:8", ["const:4a0:8"]]
- 0086d5f8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d5f8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d5f8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-98ca55367ff4e37c1c3a04a089210cb9"></a>

### [`0086d60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d60c.md) → [`0086e5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e5b8.md) FUN_0086e5b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d614",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086e5fc"
      ]
    ],
    [
      "unmatched:0086d630",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0086e5c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086e5fc"
      ]
    ],
    [
      "0086e5dc",
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
- 0086d60c ["COPY", "tmp:0:8", ["register:4010:8"]]
- 0086d60c ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 0086d60c ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 0086d610 ["COPY", "tmp:0:4", ["const:2:4"]]
- 0086d610 ["INT_LESSEQUAL", "register:105:1", ["const:2:4", "register:4040:4"]]
- 0086d610 ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:2:4"]]
- 0086d610 ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
- 0086d614 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0086d614 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-555d203987b0e25f58a36cbe01a01005"></a>

### [`0086d684`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d684.md) → [`0086e630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e630.md) FUN_0086e630

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d6a8",
      "DATA",
      [
        "storage",
        "00c7f520",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0086d6ac",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086d6b0",
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
      "0086e654",
      "DATA",
      [
        "storage",
        "00c804f0",
        null,
        "undefined *"
      ]
    ],
    [
      "0086e658",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0086e65c",
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
- 0086d698 ["INT_ADD", "register:40f0:8", ["const:86d698:8", "const:4:8"]]
- 0086d698 ["CALL", null, ["callee:00c58f30:8"]]
+ 0086e644 ["INT_ADD", "register:40f0:8", ["const:86e644:8", "const:4:8"]]
+ 0086e644 ["CALL", null, ["callee:00c58f30:8"]]
- 0086d6a0 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086e64c ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086d6a4 ["COPY", "tmp:0:8", ["const:520:8"]]
- 0086d6a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d6a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d6a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-01f21d76384b620c334d66a542aed96c"></a>

### [`0086d6b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d6b8.md) → [`0086e664`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e664.md) FUN_0086e664

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086d6c4",
      "DATA",
      [
        "storage",
        "00c7f520",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e670",
      "DATA",
      [
        "storage",
        "00c804f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d6b8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0086d6b8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0086d6bc ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086d6c0 ["COPY", "tmp:0:8", ["const:520:8"]]
- 0086d6c0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d6c0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d6c0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-aac5ddd7f41d4b739a37c2614ce94600"></a>

### [`0086d724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d724.md) → [`0086e6d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e6d0.md) FUN_0086e6d0

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
      "definition_site": "0086e6f4",
      "incomplete_value": false,
      "site": "0086e6f4",
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
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e6f4",
      "DATA",
      [
        "storage",
        "00c7f5a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e6f4",
      "DATA",
      [
        "storage",
        "00c80570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d738 ["INT_ADD", "register:40f0:8", ["const:86d738:8", "const:4:8"]]
- 0086d738 ["CALL", null, ["callee:00c58f30:8"]]
+ 0086e6e4 ["INT_ADD", "register:40f0:8", ["const:86e6e4:8", "const:4:8"]]
+ 0086e6e4 ["CALL", null, ["callee:00c58f30:8"]]
- 0086d740 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0086e6ec ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086d744 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 0086d744 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086d744 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086d744 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0086e6f0 ["COPY", "tmp:0:8", ["const:570:8"]]
+ 0086e6f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e6f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0086e6f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-20777695ba7ad48e2d7d4777ce6ac214"></a>

### [`0086d758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d758.md) → [`0086e704`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e704.md) FUN_0086e704

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
      "definition_site": "0086e710",
      "incomplete_value": false,
      "site": "0086e710",
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
            "const:570:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086e710",
      "DATA",
      [
        "storage",
        "00c7f5a0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086e710",
      "DATA",
      [
        "storage",
        "00c80570",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d75c ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086e708 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086d760 ["COPY", "tmp:0:8", ["const:5a0:8"]]
- 0086d760 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086d760 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086d760 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086e70c ["COPY", "tmp:0:8", ["const:570:8"]]
+ 0086e70c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086e70c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086e70c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-1b64ca04d36db123be066f11b248afae"></a>

### [`0086d774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086d774.md) → [`0086e720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086e720.md) FUN_0086e720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0044f8d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f8d8.md) [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00456848`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00456/00456848.md) [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`004648b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004648b8.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0044fbf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fbf8.md) [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00456b68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00456/00456b68.md) [`00464afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464afc.md) [`00464bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464bd8.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.21% / 新版 79.21%

優先判定に残った影響 `store_value` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086e8d0",
      "incomplete_value": false,
      "site": "0086e8d0",
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
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "unmatched:0086d79c",
      "WRITE",
      [
        "storage",
        "Stack[-0x220]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086d7a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x160]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086d7bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x220]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0086e748",
      "WRITE",
      [
        "storage",
        "Stack[-0x220]",
        null,
        null
      ]
    ],
    [
      "0086e74c",
      "WRITE",
      [
        "storage",
        "Stack[-0x160]",
        null,
        null
      ]
    ],
    [
      "0086e768",
      "WRITE",
      [
        "storage",
        "Stack[-0x220]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0086d79c ["COPY", "tmp:0:4", ["const:0:4"]]
- 0086d79c ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 0086d79c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:90:8"]]
- 0086d79c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 0086d7a0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 0086d7a0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 0086d7a0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:150:8"]]
- 0086d7a0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 0086d7a4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0086d7a4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0086d7a4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0086d7a4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0086e750 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0086e750 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0086e750 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0086e750 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-512abbe6857dc9f20bed86981509e6bf"></a>

### [`0086dcbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086dcbc.md) → [`0086ec68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086ec68.md) FUN_0086ec68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00464afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464afc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086dcc8",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ec74",
      "DATA",
      [
        "storage",
        "00c805f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086dcbc ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:d0:8"]]
- 0086dcbc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0086dcbc ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 0086dcc0 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086dcc4 ["COPY", "tmp:0:8", ["const:620:8"]]
- 0086dcc4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086dcc4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086dcc4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-178f7d4b1efa646c4c3a5292bcb0f0a8"></a>

### [`0086dcdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086dcdc.md) → [`0086ec88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086ec88.md) FUN_0086ec88

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`004647dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004647dc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00464afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464afc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ec90",
      "incomplete_value": false,
      "site": "0086ec94",
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
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086ec94",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ec94",
      "DATA",
      [
        "storage",
        "00c805f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086dce0 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086ec8c ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086dce4 ["COPY", "tmp:0:8", ["const:620:8"]]
- 0086dce4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086dce4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086dce4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086ec90 ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 0086ec90 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ec90 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ec90 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0086dd04 ["INT_ADD", "register:40f0:8", ["const:86dd04:8", "const:4:8"]]
- 0086dd04 ["CALL", null, ["callee:00464afc:8"]]
+ 0086ecb0 ["INT_ADD", "register:40f0:8", ["const:86ecb0:8", "const:4:8"]]
+ 0086ecb0 ["CALL", null, ["callee:00464afc:8"]]
~~~


<a id="compare-4c7c61233945b0004789d7f687c304fe"></a>

### [`0086dd18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086dd18.md) → [`0086ecc4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086ecc4.md) FUN_0086ecc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`004648b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004648b8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00464bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464bd8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ecf8",
      "incomplete_value": false,
      "site": "0086ecf8",
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
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086ecf8",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ecf8",
      "DATA",
      [
        "storage",
        "00c805f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086dd30 ["INT_ADD", "register:40f0:8", ["const:86dd30:8", "const:4:8"]]
- 0086dd30 ["CALL", null, ["callee:00c58f30:8"]]
+ 0086ecdc ["INT_ADD", "register:40f0:8", ["const:86ecdc:8", "const:4:8"]]
+ 0086ecdc ["CALL", null, ["callee:00c58f30:8"]]
- 0086dd38 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 0086ece4 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086dd3c ["COPY", "tmp:0:8", ["const:620:8"]]
- 0086dd3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086dd3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086dd3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0086ece8 ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 0086ece8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ece8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0086ece8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-7904c62f49a5b65f163bb9d60b0b4021"></a>

### [`0086dda8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086dda8.md) → [`0086ed54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086ed54.md) FUN_0086ed54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`004648b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00464/004648b8.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00464bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00464/00464bd8.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0086ed7c",
      "incomplete_value": false,
      "site": "0086ed7c",
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
            "const:5f0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0086ed7c",
      "DATA",
      [
        "storage",
        "00c7f620",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0086ed7c",
      "DATA",
      [
        "storage",
        "00c805f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ddc4 ["COPY", "register:4050:8", ["const:c7f000:8"]]
+ 0086ed70 ["COPY", "register:4050:8", ["const:c80000:8"]]
- 0086ddc8 ["COPY", "tmp:0:8", ["const:620:8"]]
- 0086ddc8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0086ddc8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0086ddc8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0086ed74 ["COPY", "tmp:0:8", ["const:5f0:8"]]
+ 0086ed74 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0086ed74 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0086ed74 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0086dde4 ["INT_ADD", "register:40f0:8", ["const:86dde4:8", "const:4:8"]]
- 0086dde4 ["CALL", null, ["callee:00464bd8:8"]]
+ 0086ed90 ["INT_ADD", "register:40f0:8", ["const:86ed90:8", "const:4:8"]]
+ 0086ed90 ["CALL", null, ["callee:00464bd8:8"]]
~~~


<a id="compare-05c2e4e191b58bdb052d2e6ab9d3fe90"></a>

### [`0086defc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086defc.md) → [`0086eea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086eea8.md) FUN_0086eea8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0085b350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b350.md) [`0086defc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086defc.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0085c2fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2fc.md) [`0086eea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086eea8.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.53% / 新版 82.53%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086f018",
      "incomplete_value": false,
      "site": "0086f020",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086f0d8",
      "incomplete_value": false,
      "site": "0086f0e0",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086f1a4",
      "incomplete_value": false,
      "site": "0086f1b0",
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
      "unmatched:0086df00",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086df04",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086df08",
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
      "0086eeac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0086eeb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0086eeb4",
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
- 0086e074 ["INT_ADD", "register:40f0:8", ["const:86e074:8", "const:4:8"]]
- 0086e074 ["CALL", null, ["callee:004421f4:8"]]
+ 0086f020 ["INT_ADD", "register:40f0:8", ["const:86f020:8", "const:4:8"]]
+ 0086f020 ["CALL", null, ["callee:004421f4:8"]]
- 0086e134 ["INT_ADD", "register:40f0:8", ["const:86e134:8", "const:4:8"]]
- 0086e134 ["CALL", null, ["callee:004421f4:8"]]
+ 0086f0e0 ["INT_ADD", "register:40f0:8", ["const:86f0e0:8", "const:4:8"]]
+ 0086f0e0 ["CALL", null, ["callee:004421f4:8"]]
- 0086e204 ["INT_ADD", "register:40f0:8", ["const:86e204:8", "const:4:8"]]
- 0086e204 ["CALL", null, ["callee:00442b54:8"]]
+ 0086f1b0 ["INT_ADD", "register:40f0:8", ["const:86f1b0:8", "const:4:8"]]
+ 0086f1b0 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-dfb0d32193d8a0c4a982d40f6e6df2ea"></a>

### [`0086e7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086e/0086e7fc.md) → [`0086f7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086f/0086f7a8.md) FUN_0086f7a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0086defc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086d/0086defc.md) [`0086e7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086e/0086e7fc.md) · 呼出先 23件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`0086eea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086e/0086eea8.md) [`0086f7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086f/0086f7a8.md) · 呼出先 23件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.57% / 新版 86.57%

優先判定に残った影響 `call_argument_candidate` 20件, `store_condition` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086f900",
      "incomplete_value": false,
      "site": "0086f908",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086f9bc",
      "incomplete_value": false,
      "site": "0086f9c4",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0086f9d4",
      "incomplete_value": false,
      "site": "0086f9e0",
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
      "unmatched:0086e868",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086f938"
      ]
    ],
    [
      "0086f900",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0086f920",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0086eb00"
      ]
    ]
  ],
  "added": [
    [
      "0086f814",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086f938"
      ]
    ],
    [
      "0086f900",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0086f920",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0086faac"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086e95c ["INT_ADD", "register:40f0:8", ["const:86e95c:8", "const:4:8"]]
- 0086e95c ["CALL", null, ["callee:004421f4:8"]]
+ 0086f908 ["INT_ADD", "register:40f0:8", ["const:86f908:8", "const:4:8"]]
+ 0086f908 ["CALL", null, ["callee:004421f4:8"]]
- 0086ea18 ["INT_ADD", "register:40f0:8", ["const:86ea18:8", "const:4:8"]]
- 0086ea18 ["CALL", null, ["callee:004421f4:8"]]
+ 0086f9c4 ["INT_ADD", "register:40f0:8", ["const:86f9c4:8", "const:4:8"]]
+ 0086f9c4 ["CALL", null, ["callee:004421f4:8"]]
- 0086ea34 ["INT_ADD", "register:40f0:8", ["const:86ea34:8", "const:4:8"]]
- 0086ea34 ["CALL", null, ["callee:00442b54:8"]]
+ 0086f9e0 ["INT_ADD", "register:40f0:8", ["const:86f9e0:8", "const:4:8"]]
+ 0086f9e0 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-189255b1210e57e6e1fa4c1ba5c6ecb1"></a>

### [`0086f134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f134.md) → [`008700e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/008700e0.md) FUN_008700e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0086e7fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086e/0086e7fc.md) [`0086f134`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f134.md) [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 3件 [`0086f7a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086f/0086f7a8.md) [`008700e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/008700e0.md) [`00898890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/00898890.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.46% / 新版 98.46%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00870230",
      "incomplete_value": false,
      "site": "00870238",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00870254",
      "incomplete_value": false,
      "site": "00870260",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00870388",
      "incomplete_value": false,
      "site": "00870390",
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
      "00870230",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00870254",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00870388",
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
      "00870230",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00870254",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00870388",
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
- 0086f28c ["INT_ADD", "register:40f0:8", ["const:86f28c:8", "const:4:8"]]
- 0086f28c ["CALL", null, ["callee:004421f4:8"]]
+ 00870238 ["INT_ADD", "register:40f0:8", ["const:870238:8", "const:4:8"]]
+ 00870238 ["CALL", null, ["callee:004421f4:8"]]
- 0086f2b4 ["INT_ADD", "register:40f0:8", ["const:86f2b4:8", "const:4:8"]]
- 0086f2b4 ["CALL", null, ["callee:00442b54:8"]]
+ 00870260 ["INT_ADD", "register:40f0:8", ["const:870260:8", "const:4:8"]]
+ 00870260 ["CALL", null, ["callee:00442b54:8"]]
- 0086f3e4 ["INT_ADD", "register:40f0:8", ["const:86f3e4:8", "const:4:8"]]
- 0086f3e4 ["CALL", null, ["callee:004421f4:8"]]
+ 00870390 ["INT_ADD", "register:40f0:8", ["const:870390:8", "const:4:8"]]
+ 00870390 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-06ad282786987484a71aebff6385bafc"></a>

### [`0086f924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f924.md) → [`008708d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/008708d0.md) FUN_008708d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086f948",
      "DATA",
      [
        "storage",
        "00c7f6c0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0086f94c",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086f950",
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
      "008708f4",
      "DATA",
      [
        "storage",
        "00c80690",
        null,
        "undefined *"
      ]
    ],
    [
      "008708f8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008708fc",
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
- 0086f938 ["INT_ADD", "register:40f0:8", ["const:86f938:8", "const:4:8"]]
- 0086f938 ["CALL", null, ["callee:00c58f30:8"]]
+ 008708e4 ["INT_ADD", "register:40f0:8", ["const:8708e4:8", "const:4:8"]]
+ 008708e4 ["CALL", null, ["callee:00c58f30:8"]]
- 0086f940 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 008708ec ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086f944 ["COPY", "tmp:0:8", ["const:6c0:8"]]
- 0086f944 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086f944 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086f944 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7989eb5ffaae8fee7d095163bf360ce9"></a>

### [`0086f958`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f958.md) → [`00870904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870904.md) FUN_00870904

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0086f964",
      "DATA",
      [
        "storage",
        "00c7f6c0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870910",
      "DATA",
      [
        "storage",
        "00c80690",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086f958 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 0086f958 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 0086f95c ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 0086f960 ["COPY", "tmp:0:8", ["const:6c0:8"]]
- 0086f960 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086f960 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086f960 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-22152424186483a2946bfcc1176c9736"></a>

### [`0086f974`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086f974.md) → [`00870920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870920.md) FUN_00870920

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 15件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0044ddc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044ddc0.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md)
- 新版 呼出元 0件  · 呼出先 15件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0044e0e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044e/0044e0e0.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.45% / 新版 89.45%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_value` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00870a00",
      "incomplete_value": true,
      "site": "00870a10",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5b5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 17,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00870ad0",
      "incomplete_value": false,
      "site": "00870ad0",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00870970",
      "incomplete_value": false,
      "site": "00870978",
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
            "const:7fa:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0086f9c4",
      "incomplete_value": false,
      "site": "0086f9cc",
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
            "const:7b0:8"
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
      "unmatched:0086f978",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086f97c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0086f980",
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
      "00870924",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00870928",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087092c",
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
- 0086f9cc ["INT_ADD", "register:40f0:8", ["const:86f9cc:8", "const:4:8"]]
- 0086f9cc ["CALL", null, ["callee:00c59010:8"]]
+ 00870978 ["INT_ADD", "register:40f0:8", ["const:870978:8", "const:4:8"]]
+ 00870978 ["CALL", null, ["callee:00c59010:8"]]
- 0086fa44 ["INT_ADD", "register:40f0:8", ["const:86fa44:8", "const:4:8"]]
- 0086fa44 ["CALL", null, ["ram:48cd38:8"]]
+ 008709f0 ["INT_ADD", "register:40f0:8", ["const:8709f0:8", "const:4:8"]]
+ 008709f0 ["CALL", null, ["ram:48d058:8"]]
- 0086f974 ["INT_SUB", "register:8:8", ["register:8:8", "const:110:8"]]
~~~


<a id="compare-6cd2648532451b7a4ae6ceddefc9fd18"></a>

### [`0086fdf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fdf8.md) → [`00870da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870da4.md) FUN_00870da4

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
      "definition_site": "00870dc8",
      "incomplete_value": false,
      "site": "00870dc8",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00870dc8",
      "DATA",
      [
        "storage",
        "00c7f730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870dc8",
      "DATA",
      [
        "storage",
        "00c80700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fe0c ["INT_ADD", "register:40f0:8", ["const:86fe0c:8", "const:4:8"]]
- 0086fe0c ["CALL", null, ["callee:00c58f30:8"]]
+ 00870db8 ["INT_ADD", "register:40f0:8", ["const:870db8:8", "const:4:8"]]
+ 00870db8 ["CALL", null, ["callee:00c58f30:8"]]
- 0086fe14 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00870dc0 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086fe18 ["COPY", "tmp:0:8", ["const:730:8"]]
- 0086fe18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fe18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fe18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870dc4 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 00870dc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870dc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870dc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-666e15ec2ffe4f50b5e0dfd3ce37fa72"></a>

### [`0086fe2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fe2c.md) → [`00870dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870dd8.md) FUN_00870dd8

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
      "definition_site": "00870de4",
      "incomplete_value": false,
      "site": "00870de4",
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
            "const:700:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00870de4",
      "DATA",
      [
        "storage",
        "00c7f730",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870de4",
      "DATA",
      [
        "storage",
        "00c80700",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fe30 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00870ddc ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0086fe34 ["COPY", "tmp:0:8", ["const:730:8"]]
- 0086fe34 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0086fe34 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0086fe34 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00870de0 ["COPY", "tmp:0:8", ["const:700:8"]]
+ 00870de0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00870de0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00870de0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e09c6be9e67bc333b0447e9a6a28b2e2"></a>

### [`0086fe88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fe88.md) → [`00870e34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870e34.md) FUN_00870e34

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
      "definition_site": "00870e38",
      "incomplete_value": false,
      "site": "00870e3c",
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
            "const:790:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00870e3c",
      "DATA",
      [
        "storage",
        "00c7f7c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00870e3c",
      "DATA",
      [
        "storage",
        "00c80790",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fe88 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00870e34 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086fe8c ["COPY", "tmp:0:8", ["const:7c0:8"]]
- 0086fe8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fe8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fe8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870e38 ["COPY", "tmp:0:8", ["const:790:8"]]
+ 00870e38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870e38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870e38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bb6950a7e430efaac15367bf5fca389d"></a>

### [`0086fe98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fe98.md) → [`00870e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870e44.md) FUN_00870e44

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
      "definition_site": "00870e54",
      "incomplete_value": false,
      "site": "00870e5c",
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
            "const:790:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00870e5c",
      "DATA",
      [
        "storage",
        "00c7f7c0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00870e5c",
      "DATA",
      [
        "storage",
        "00c80790",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fea4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00870e50 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086fea8 ["COPY", "tmp:0:8", ["const:7c0:8"]]
- 0086fea8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fea8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fea8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870e54 ["COPY", "tmp:0:8", ["const:790:8"]]
+ 00870e54 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870e54 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870e54 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0086feb4 ["INT_ADD", "register:40f0:8", ["const:86feb4:8", "const:4:8"]]
- 0086feb4 ["CALL", null, ["callee:00c58f40:8"]]
+ 00870e60 ["INT_ADD", "register:40f0:8", ["const:870e60:8", "const:4:8"]]
+ 00870e60 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-483d47a8274e503d2fa58774222e061f"></a>

### [`0086fedc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086fedc.md) → [`00870e88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870e88.md) FUN_00870e88

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
      "definition_site": "00870ea8",
      "incomplete_value": false,
      "site": "00870eac",
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
            "const:7e0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00870eac",
      "DATA",
      [
        "storage",
        "00c7f810",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870eac",
      "DATA",
      [
        "storage",
        "00c807e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086fef0 ["INT_ADD", "register:40f0:8", ["const:86fef0:8", "const:4:8"]]
- 0086fef0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00870e9c ["INT_ADD", "register:40f0:8", ["const:870e9c:8", "const:4:8"]]
+ 00870e9c ["CALL", null, ["callee:00c58f30:8"]]
- 0086fef8 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00870ea4 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086fefc ["COPY", "tmp:0:8", ["const:810:8"]]
- 0086fefc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086fefc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086fefc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870ea8 ["COPY", "tmp:0:8", ["const:7e0:8"]]
+ 00870ea8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870ea8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870ea8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a23160f7eb33187bfa0ff33c8e86d4e5"></a>

### [`0086ff14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086ff14.md) → [`00870ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870ec0.md) FUN_00870ec0

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
      "definition_site": "00870ec4",
      "incomplete_value": false,
      "site": "00870ec8",
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
            "const:7e0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00870ec8",
      "DATA",
      [
        "storage",
        "00c7f810",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00870ec8",
      "DATA",
      [
        "storage",
        "00c807e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ff14 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00870ec0 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0086ff18 ["COPY", "tmp:0:8", ["const:810:8"]]
- 0086ff18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0086ff18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0086ff18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00870ec4 ["COPY", "tmp:0:8", ["const:7e0:8"]]
+ 00870ec4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00870ec4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00870ec4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-68fc00e48004e791a0747e0f76af80c0"></a>

### [`0086ff60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086ff60.md) → [`00870f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870f0c.md) FUN_00870f0c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0086ff34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086f/0086ff34.md) [`00870298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870298.md) · 呼出先 7件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`005509fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509fc.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00a86880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86880.md)
- 新版 呼出元 2件 [`00870ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00870/00870ee0.md) [`00871244`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871244.md) · 呼出先 7件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00550d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d10.md) [`00550d1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d1c.md) [`00598228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598228.md) [`00a87874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a87/00a87874.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.44% / 新版 93.44%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00870f48",
      "incomplete_value": true,
      "site": "00870f60",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:984:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00870f48",
      "incomplete_value": true,
      "site": "00870f64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:984:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00870fbc",
      "incomplete_value": true,
      "site": "00870fcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a0d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00870f24",
      "PARAM",
      [
        "storage",
        "00cb4678",
        null,
        null
      ]
    ],
    [
      "00870f48",
      "READ",
      [
        "storage",
        "002b78b5",
        null,
        "string"
      ]
    ],
    [
      "00870fbc",
      "READ",
      [
        "storage",
        "002bb92f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00870f24",
      "PARAM",
      [
        "storage",
        "00cb5638",
        null,
        null
      ]
    ],
    [
      "00870f48",
      "READ",
      [
        "storage",
        "002b7984",
        null,
        "string"
      ]
    ],
    [
      "00870fbc",
      "READ",
      [
        "storage",
        "002bba0d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0086ff84 ["INT_ADD", "register:40f0:8", ["const:86ff84:8", "const:4:8"]]
- 0086ff84 ["CALL", null, ["callee:00a87874:8"]]
+ 00870f30 ["INT_ADD", "register:40f0:8", ["const:870f30:8", "const:4:8"]]
+ 00870f30 ["CALL", null, ["callee:00a87874:8"]]
- 0086ff74 ["COPY", "register:4000:8", ["const:cb4000:8"]]
+ 00870f20 ["COPY", "register:4000:8", ["const:cb5000:8"]]
- 0086ff78 ["COPY", "tmp:0:8", ["const:678:8"]]
- 0086ff78 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0086ff78 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0086ff78 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00870f24 ["COPY", "tmp:0:8", ["const:638:8"]]
+ 00870f24 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00870f24 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00870f24 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2f2686b07f1094d4366caa40793cae93"></a>

### [`00870240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870240.md) → [`008711ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/008711ec.md) FUN_008711ec

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
      "definition_site": "0087120c",
      "incomplete_value": false,
      "site": "00871210",
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
            "const:860:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00871210",
      "DATA",
      [
        "storage",
        "00c7f890",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871210",
      "DATA",
      [
        "storage",
        "00c80860",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870254 ["INT_ADD", "register:40f0:8", ["const:870254:8", "const:4:8"]]
- 00870254 ["CALL", null, ["callee:00c58f30:8"]]
+ 00871200 ["INT_ADD", "register:40f0:8", ["const:871200:8", "const:4:8"]]
+ 00871200 ["CALL", null, ["callee:00c58f30:8"]]
- 0087025c ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00871208 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00870260 ["COPY", "tmp:0:8", ["const:890:8"]]
- 00870260 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870260 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870260 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087120c ["COPY", "tmp:0:8", ["const:860:8"]]
+ 0087120c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087120c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087120c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-59d8e865be2914e35f4e2a27699762d3"></a>

### [`00870278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870278.md) → [`00871224`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871224.md) FUN_00871224

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
      "definition_site": "00871228",
      "incomplete_value": false,
      "site": "0087122c",
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
            "const:860:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0087122c",
      "DATA",
      [
        "storage",
        "00c7f890",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087122c",
      "DATA",
      [
        "storage",
        "00c80860",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870278 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00871224 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 0087027c ["COPY", "tmp:0:8", ["const:890:8"]]
- 0087027c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0087027c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0087027c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00871228 ["COPY", "tmp:0:8", ["const:860:8"]]
+ 00871228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00871228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00871228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7bb85cf7f97ea16aad33d1c269710774"></a>

### [`008702c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/008702c8.md) → [`00871274`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871274.md) FUN_00871274

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
      "definition_site": "00871294",
      "incomplete_value": false,
      "site": "00871298",
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
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00871298",
      "DATA",
      [
        "storage",
        "00c7f910",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871298",
      "DATA",
      [
        "storage",
        "00c808e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008702dc ["INT_ADD", "register:40f0:8", ["const:8702dc:8", "const:4:8"]]
- 008702dc ["CALL", null, ["callee:00c58f30:8"]]
+ 00871288 ["INT_ADD", "register:40f0:8", ["const:871288:8", "const:4:8"]]
+ 00871288 ["CALL", null, ["callee:00c58f30:8"]]
- 008702e4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00871290 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 008702e8 ["COPY", "tmp:0:8", ["const:910:8"]]
- 008702e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008702e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008702e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00871294 ["COPY", "tmp:0:8", ["const:8e0:8"]]
+ 00871294 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00871294 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00871294 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4e082e9630189f1e6bd14e7e545a00ff"></a>

### [`00870300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870300.md) → [`008712ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/008712ac.md) FUN_008712ac

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
      "definition_site": "008712b0",
      "incomplete_value": false,
      "site": "008712b4",
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
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "008712b4",
      "DATA",
      [
        "storage",
        "00c7f910",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008712b4",
      "DATA",
      [
        "storage",
        "00c808e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870300 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 008712ac ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00870304 ["COPY", "tmp:0:8", ["const:910:8"]]
- 00870304 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870304 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870304 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008712b0 ["COPY", "tmp:0:8", ["const:8e0:8"]]
+ 008712b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008712b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008712b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d41b510dae5adaf8c9103a346af23916"></a>

### [`0087034c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/0087034c.md) → [`008712f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/008712f8.md) FUN_008712f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00870320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870320.md) [`00870cd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870cd4.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md)
- 新版 呼出元 2件 [`008712cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/008712cc.md) [`00871c80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871c80.md) · 呼出先 16件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00550d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d10.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.43% / 新版 93.43%

優先判定に残った影響 `branch_value` 1件, `store_value` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00871340",
      "incomplete_value": true,
      "site": "00871340",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f44:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00871344",
      "incomplete_value": true,
      "site": "00871344",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0087139c",
      "incomplete_value": true,
      "site": "008713a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:542:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "00871328",
      "READ",
      [
        "storage",
        "002aee6d",
        null,
        "string"
      ]
    ],
    [
      "0087132c",
      "READ",
      [
        "storage",
        "002aee74",
        null,
        "string"
      ]
    ],
    [
      "0087139c",
      "READ",
      [
        "storage",
        "0029f502",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00871328",
      "READ",
      [
        "storage",
        "002aef44",
        null,
        "string"
      ]
    ],
    [
      "0087132c",
      "READ",
      [
        "storage",
        "002aef4b",
        null,
        "string"
      ]
    ],
    [
      "0087139c",
      "READ",
      [
        "storage",
        "0029f542",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870374 ["COPY", "tmp:0:8", ["const:e6d:8"]]
- 00870374 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00870374 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00870374 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00871320 ["COPY", "tmp:0:8", ["const:f44:8"]]
+ 00871320 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00871320 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00871320 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008703a4 ["INT_ADD", "register:40f0:8", ["const:8703a4:8", "const:4:8"]]
- 008703a4 ["CALL", null, ["callee:00550d10:8"]]
+ 00871350 ["INT_ADD", "register:40f0:8", ["const:871350:8", "const:4:8"]]
+ 00871350 ["CALL", null, ["callee:00550d10:8"]]
- 008703b4 ["INT_ADD", "register:40f0:8", ["const:8703b4:8", "const:4:8"]]
- 008703b4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00871360 ["INT_ADD", "register:40f0:8", ["const:871360:8", "const:4:8"]]
+ 00871360 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-431cb649069ee8ee90d952b1fc8f711d"></a>

### [`00870c7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870c7c.md) → [`00871c28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871c28.md) FUN_00871c28

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
      "definition_site": "00871c48",
      "incomplete_value": false,
      "site": "00871c4c",
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
            "const:960:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00871c4c",
      "DATA",
      [
        "storage",
        "00c7f990",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871c4c",
      "DATA",
      [
        "storage",
        "00c80960",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870c90 ["INT_ADD", "register:40f0:8", ["const:870c90:8", "const:4:8"]]
- 00870c90 ["CALL", null, ["callee:00c58f30:8"]]
+ 00871c3c ["INT_ADD", "register:40f0:8", ["const:871c3c:8", "const:4:8"]]
+ 00871c3c ["CALL", null, ["callee:00c58f30:8"]]
- 00870c98 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00871c44 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00870c9c ["COPY", "tmp:0:8", ["const:990:8"]]
- 00870c9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870c9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870c9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00871c48 ["COPY", "tmp:0:8", ["const:960:8"]]
+ 00871c48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00871c48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00871c48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0610ada6ca1bca09c0e701730bfb01a4"></a>

### [`00870cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870cb4.md) → [`00871c60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871c60.md) FUN_00871c60

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
      "definition_site": "00871c64",
      "incomplete_value": false,
      "site": "00871c68",
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
            "const:960:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00871c68",
      "DATA",
      [
        "storage",
        "00c7f990",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00871c68",
      "DATA",
      [
        "storage",
        "00c80960",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870cb4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00871c60 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00870cb8 ["COPY", "tmp:0:8", ["const:990:8"]]
- 00870cb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00870cb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00870cb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00871c64 ["COPY", "tmp:0:8", ["const:960:8"]]
+ 00871c64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00871c64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00871c64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3c29e16133c67eb1b2df0c3c7221e31c"></a>

### [`00870d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d00.md) → [`00871cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871cac.md) FUN_00871cac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`0085e4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085e/0085e4f8.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00870d00",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00870d0c",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00870d10",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "00871cac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00871cb8",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "00871cbc",
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
- 00870d00 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00870d00 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00870d00 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 00870d00 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00870d04 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00870d08 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-edb8e2b9f4b9121416e91d2023abe9d1"></a>

### [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) → [`00871cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871cc0.md) FUN_00871cc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) [`00871014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871014.md) · 呼出先 4件 [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) [`00871014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871014.md) [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`0085e4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085e/0085e4f8.md) [`00871cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871cc0.md) [`00871fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871fc0.md) · 呼出先 4件 [`00871cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871cc0.md) [`00871fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871fc0.md) [`00872258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872258.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00870ea0",
      "incomplete_value": true,
      "site": "00870eac",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 3,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00870ea4",
      "incomplete_value": true,
      "site": "00870eac",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 3,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00870eb0",
      "incomplete_value": true,
      "site": "00870ecc",
      "value": [
        "live",
        "register:40c8:8"
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
      "unmatched:00870f0c",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00871008",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00871f90"
      ]
    ]
  ],
  "added": [
    [
      "00871eb8",
      "READ",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00871fb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00871f90"
      ]
    ]
  ]
}
~~~


~~~diff
- 00870eac ["INT_ADD", "register:40f0:8", ["const:870eac:8", "const:4:8"]]
- 00870eac ["CALL", null, ["local:b0:8"]]
+ 00871e58 ["INT_ADD", "register:40f0:8", ["const:871e58:8", "const:4:8"]]
+ 00871e58 ["CALL", null, ["local:b0:8"]]
- 00870ecc ["INT_ADD", "register:40f0:8", ["const:870ecc:8", "const:4:8"]]
- 00870ecc ["CALL", null, ["local:b0:8"]]
+ 00871e78 ["INT_ADD", "register:40f0:8", ["const:871e78:8", "const:4:8"]]
+ 00871e78 ["CALL", null, ["local:b0:8"]]
- 00870d54 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00870d54 ["CBRANCH", null, ["local:b35:8", "tmp:0:1"]]
+ 00871d00 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00871d00 ["CBRANCH", null, ["local:b43:8", "tmp:0:1"]]
~~~


<a id="compare-b8d780214d1bfa4264dfe427bc9a5e7e"></a>

### [`00871014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871014.md) → [`00871fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871fc0.md) FUN_00871fc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) · 呼出先 1件 [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md)
- 新版 呼出元 1件 [`00871cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871cc0.md) · 呼出先 1件 [`00871cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871cc0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.76% / 新版 89.76%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008711c4",
      "incomplete_value": true,
      "site": "008711d4",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008711c8",
      "incomplete_value": true,
      "site": "008711d4",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "008711cc",
      "incomplete_value": true,
      "site": "008711d4",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:008710ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087223c"
      ]
    ],
    [
      "unmatched:00871128",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872080"
      ]
    ],
    [
      "unmatched:0087128c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872214"
      ]
    ]
  ],
  "added": [
    [
      "00872098",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0087223c"
      ]
    ],
    [
      "008720d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872080"
      ]
    ],
    [
      "00872238",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872214"
      ]
    ]
  ]
}
~~~


~~~diff
- 008711d4 ["INT_ADD", "register:40f0:8", ["const:8711d4:8", "const:4:8"]]
- 008711d4 ["CALL", null, ["callee:00871cc0:8"]]
+ 00872180 ["INT_ADD", "register:40f0:8", ["const:872180:8", "const:4:8"]]
+ 00872180 ["CALL", null, ["callee:00871cc0:8"]]
- 00871030 ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
- 00871030 ["CBRANCH", null, ["local:b33:8", "tmp:0:1"]]
+ 00871fdc ["INT_EQUAL", "tmp:0:1", ["register:4018:8", "const:0:8"]]
+ 00871fdc ["CBRANCH", null, ["local:b47:8", "tmp:0:1"]]
- 00871050 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00871050 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 00871ffc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00871ffc ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-804da4250c7d44cf5758828ab8f5ae97"></a>

### [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) → [`00872258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872258.md) FUN_00872258

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00870d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00870/00870d14.md) [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) · 呼出先 4件 [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) [`00871764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871764.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 2件 [`00871cc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00871/00871cc0.md) [`00872258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872258.md) · 呼出先 4件 [`00872258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872258.md) [`00872710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872710.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 65.89% / 新版 65.89%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 28件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00871460",
      "incomplete_value": true,
      "site": "00871464",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40e0:8"
          ],
          [
            "INT_MULT",
            "8",
            [
              "INT_RIGHT",
              [
                "live",
                "register:4048:8"
              ]
            ]
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
    "new": null,
    "old": {
      "definition_site": "00871458",
      "incomplete_value": true,
      "site": "00871464",
      "value": [
        "live",
        "register:40d8:8"
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
      "definition_site": "008714fc",
      "incomplete_value": true,
      "site": "00871510",
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
            "live",
            "register:40c0:8"
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
      "unmatched:008712b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008712b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008712b8",
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
      "0087225c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00872260",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00872264",
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
- 00871464 ["COPY", "register:0:8", ["register:40c8:8"]]
- 00871464 ["INT_ADD", "register:40f0:8", ["const:871464:8", "const:4:8"]]
- 00871464 ["CALLIND", null, ["register:0:8"]]
+ 00872410 ["COPY", "register:0:8", ["register:40c8:8"]]
+ 00872410 ["INT_ADD", "register:40f0:8", ["const:872410:8", "const:4:8"]]
+ 00872410 ["CALLIND", null, ["register:0:8"]]
- 00871510 ["INT_ADD", "register:40f0:8", ["const:871510:8", "const:4:8"]]
- 00871510 ["CALL", null, ["local:b0:8"]]
+ 008724bc ["INT_ADD", "register:40f0:8", ["const:8724bc:8", "const:4:8"]]
+ 008724bc ["CALL", null, ["local:b0:8"]]
- 00871548 ["INT_ADD", "register:40f0:8", ["const:871548:8", "const:4:8"]]
- 00871548 ["CALL", null, ["local:b0:8"]]
+ 008724f4 ["INT_ADD", "register:40f0:8", ["const:8724f4:8", "const:4:8"]]
+ 008724f4 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-2bc89d68e03505415bf68a575afcb952"></a>

### [`00871764`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871764.md) → [`00872710`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872710.md) FUN_00872710

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`008712ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008712ac.md) · 呼出先 2件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`00872258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872258.md) · 呼出先 2件 [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 75.91% / 新版 75.91%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 8件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00871838",
      "incomplete_value": true,
      "site": "00871848",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4010:8"
          ],
          [
            "live",
            "register:4008:8"
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
      "definition_site": "00872844",
      "incomplete_value": true,
      "site": "0087284c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": {
      "definition_site": "00871898",
      "incomplete_value": true,
      "site": "008718a0",
      "value": [
        "live",
        "register:4000:8"
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
      "unmatched:00871788",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0087178c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872904"
      ]
    ],
    [
      "unmatched:00871794",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008727cc"
      ]
    ]
  ],
  "added": [
    [
      "00872734",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00872738",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872904"
      ]
    ],
    [
      "00872740",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "008727cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871848 ["INT_ADD", "register:40f0:8", ["const:871848:8", "const:4:8"]]
- 00871848 ["CALL", null, ["callee:00c58fe0:8"]]
+ 008727f4 ["INT_ADD", "register:40f0:8", ["const:8727f4:8", "const:4:8"]]
+ 008727f4 ["CALL", null, ["callee:00c58fe0:8"]]
- 008718a0 ["INT_ADD", "register:40f0:8", ["const:8718a0:8", "const:4:8"]]
- 008718a0 ["CALL", null, ["callee:00c58fe0:8"]]
+ 0087284c ["INT_ADD", "register:40f0:8", ["const:87284c:8", "const:4:8"]]
+ 0087284c ["CALL", null, ["callee:00c58fe0:8"]]
- 00871780 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 00871780 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cb2b6e3ebf4fa67dffde6e8a4c01524c"></a>

### [`00871990`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871990.md) → [`0087293c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/0087293c.md) FUN_0087293c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:008719b4",
      "DATA",
      [
        "storage",
        "00c7fa10",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:008719b8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008719bc",
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
      "00872960",
      "DATA",
      [
        "storage",
        "00c809e0",
        null,
        "undefined *"
      ]
    ],
    [
      "00872964",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00872968",
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
- 008719a4 ["INT_ADD", "register:40f0:8", ["const:8719a4:8", "const:4:8"]]
- 008719a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00872950 ["INT_ADD", "register:40f0:8", ["const:872950:8", "const:4:8"]]
+ 00872950 ["CALL", null, ["callee:00c58f30:8"]]
- 008719ac ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00872958 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 008719b0 ["COPY", "tmp:0:8", ["const:a10:8"]]
- 008719b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008719b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008719b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-06915972502be0d1ed7f91473e3029c3"></a>

### [`008719c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008719c4.md) → [`00872970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872970.md) FUN_00872970

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
      "definition_site": "0087297c",
      "incomplete_value": false,
      "site": "0087297c",
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
            "const:9e0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "0087297c",
      "DATA",
      [
        "storage",
        "00c7fa10",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087297c",
      "DATA",
      [
        "storage",
        "00c809e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008719c8 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00872974 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 008719cc ["COPY", "tmp:0:8", ["const:a10:8"]]
- 008719cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008719cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008719cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00872978 ["COPY", "tmp:0:8", ["const:9e0:8"]]
+ 00872978 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00872978 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00872978 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-85684daba7224416cec408454a3b921a"></a>

### [`008719e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/008719e0.md) → [`0087298c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/0087298c.md) FUN_0087298c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0085d54c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085d/0085d54c.md) · 呼出先 10件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00800244`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/00800244.md) [`00801c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801c9c.md) [`00801ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00801/00801ce8.md) [`00805744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/00805744.md)
- 新版 呼出元 1件 [`0085e4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085e/0085e4f8.md) · 呼出先 10件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`008011a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00801/008011a8.md) [`00802c00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802c00.md) [`00802c4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00802/00802c4c.md) [`008066a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00806/008066a8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.85% / 新版 94.85%

優先判定に残った影響 `call_argument_candidate` 13件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00871a08",
      "incomplete_value": true,
      "site": "00871a10",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40a8:4"
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
      "definition_site": "008729d0",
      "incomplete_value": true,
      "site": "008729d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "live",
            "register:40d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00871a24",
      "incomplete_value": true,
      "site": "00871a28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4098:8"
          ],
          [
            "INT_ZEXT",
            "8",
            [
              "INT_OR"
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
    "new": null,
    "old": {
      "definition_site": "00871a20",
      "incomplete_value": true,
      "site": "00871a28",
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
      "unmatched:00871ae4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008064b4"
      ]
    ],
    [
      "unmatched:00871b5c",
      "PARAM",
      [
        "storage",
        "002b3da5",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00871b60",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00442c90"
      ]
    ]
  ],
  "added": [
    [
      "00872a90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00807418"
      ]
    ],
    [
      "00872b08",
      "PARAM",
      [
        "storage",
        "002b3e83",
        null,
        "string"
      ]
    ],
    [
      "00872b0c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00442c90"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871a10 ["INT_ADD", "register:40f0:8", ["const:871a10:8", "const:4:8"]]
- 00871a10 ["CALL", null, ["callee:008011a8:8"]]
+ 008729bc ["INT_ADD", "register:40f0:8", ["const:8729bc:8", "const:4:8"]]
+ 008729bc ["CALL", null, ["callee:008011a8:8"]]
- 00871a28 ["INT_ADD", "register:40f0:8", ["const:871a28:8", "const:4:8"]]
- 00871a28 ["CALL", null, ["callee:00802c4c:8"]]
+ 008729d4 ["INT_ADD", "register:40f0:8", ["const:8729d4:8", "const:4:8"]]
+ 008729d4 ["CALL", null, ["callee:00802c4c:8"]]
- 00871a38 ["INT_ADD", "register:40f0:8", ["const:871a38:8", "const:4:8"]]
- 00871a38 ["CALL", null, ["callee:008066a8:8"]]
+ 008729e4 ["INT_ADD", "register:40f0:8", ["const:8729e4:8", "const:4:8"]]
+ 008729e4 ["CALL", null, ["callee:008066a8:8"]]
~~~


<a id="compare-8bd43b535d0aa340a46e5b388e8216ed"></a>

### [`00871b94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871b94.md) → [`00872b40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872b40.md) FUN_00872b40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00871ba4",
      "incomplete_value": false,
      "site": "00871ba8",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:00871bb8",
      "DATA",
      [
        "storage",
        "00c7faa0",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00871bbc",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00871bc0",
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
      "00872b64",
      "DATA",
      [
        "storage",
        "00c80a70",
        null,
        "undefined *"
      ]
    ],
    [
      "00872b68",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00872b6c",
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
- 00871ba8 ["INT_ADD", "register:40f0:8", ["const:871ba8:8", "const:4:8"]]
- 00871ba8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00872b54 ["INT_ADD", "register:40f0:8", ["const:872b54:8", "const:4:8"]]
+ 00872b54 ["CALL", null, ["callee:00c58f30:8"]]
- 00871bb0 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00872b5c ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00871bb4 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 00871bb4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00871bb4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00871bb4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d56ba68815401d1b55a76ff4de770353"></a>

### [`00871bc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871bc8.md) → [`00872b74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872b74.md) FUN_00872b74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00871bd4",
      "DATA",
      [
        "storage",
        "00c7faa0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00872b80",
      "DATA",
      [
        "storage",
        "00c80a70",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871bc8 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00871bc8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00871bcc ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00871bd0 ["COPY", "tmp:0:8", ["const:aa0:8"]]
- 00871bd0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00871bd0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00871bd0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-de08132250971d32a958e5de1b760fde"></a>

### [`00871c10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871c10.md) → [`00872bbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872bbc.md) FUN_00872bbc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`008615b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00861/008615b4.md) [`008c525c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c5/008c525c.md) [`008fc644`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008fc/008fc644.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) [`00a3ab1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a3a/00a3ab1c.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 5件 [`00862560`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00862/00862560.md) [`008c6208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c6/008c6208.md) [`008fd5f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008fd/008fd5f0.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) [`00a3bb10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a3b/00a3bb10.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 12件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00871c78"
      ],
      [
        "FALL_THROUGH",
        "00872c24"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00872c20",
      "incomplete_value": true,
      "site": "00872c28",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40b0:8"
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
    "old": {
      "definition_site": "00871c74",
      "incomplete_value": true,
      "site": "00871c7c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "live",
                "register:40b0:8"
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
    "ordinal": 13,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00871c78"
      ],
      [
        "CONDITIONAL_JUMP",
        "00872c24"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00872c20",
      "incomplete_value": true,
      "site": "00872c58",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40b0:8"
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
    "old": {
      "definition_site": "00871c74",
      "incomplete_value": true,
      "site": "00871cac",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "live",
                "register:40b0:8"
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
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00871dbc"
      ],
      [
        "CONDITIONAL_JUMP",
        "00872d68"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00872d90",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "00871db8",
      "incomplete_value": true,
      "site": "00871de4",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              [
                "live",
                "register:40b0:8"
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
    "ordinal": 24,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00871c78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872c54"
      ]
    ],
    [
      "unmatched:00871cb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872c74"
      ]
    ],
    [
      "00872c68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00871cb4"
      ]
    ]
  ],
  "added": [
    [
      "00872c24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872c54"
      ]
    ],
    [
      "00872c5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872c74"
      ]
    ],
    [
      "00872c68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872c60"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871c38 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00871c38 ["CBRANCH", null, ["local:b59:8", "tmp:0:1"]]
+ 00872be4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00872be4 ["CBRANCH", null, ["local:b55:8", "tmp:0:1"]]
- 00871c54 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00871c54 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00871c54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 00871c64 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 00871c64 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 00872c10 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 00872c10 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-714e0fa5087c8e0c1212761a45fd9f4e"></a>

### [`00871f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871f20.md) → [`00872ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872ecc.md) FUN_00872ecc

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
      "definition_site": "00872ed4",
      "incomplete_value": false,
      "site": "00872ed8",
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
            "const:b00:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00872ed8",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00872ed8",
      "DATA",
      [
        "storage",
        "00c80b00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871f24 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00872ed0 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00871f28 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 00871f28 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00871f28 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00871f28 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00872ed4 ["COPY", "tmp:0:8", ["const:b00:8"]]
+ 00872ed4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00872ed4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00872ed4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0be6424321024438cd9f6ffc5ce8306f"></a>

### [`00871f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871f40.md) → [`00872eec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872eec.md) FUN_00872eec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 31.25% / 新版 31.25%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00872f14",
      "incomplete_value": true,
      "site": "00872f18",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:18:8"
              ]
            ]
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
      "unmatched:00871f4c",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00871f50",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872f28"
      ]
    ],
    [
      "unmatched:00871f54",
      "WRITE",
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
      "00872ef8",
      "DATA",
      [
        "storage",
        "00c80b00",
        null,
        "undefined *"
      ]
    ],
    [
      "00872efc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00872f28"
      ]
    ],
    [
      "00872f00",
      "WRITE",
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
- 00871f6c ["INT_ADD", "register:40f0:8", ["const:871f6c:8", "const:4:8"]]
- 00871f6c ["CALL", null, ["callee:00c58f50:8"]]
+ 00872f18 ["INT_ADD", "register:40f0:8", ["const:872f18:8", "const:4:8"]]
+ 00872f18 ["CALL", null, ["callee:00c58f50:8"]]
- 00871f40 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00871f40 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00871f40 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00871f44 ["COPY", "register:4048:8", ["const:c7f000:8"]]
~~~


<a id="compare-83de006de127caef0db19921663a3fc4"></a>

### [`00871f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871f80.md) → [`00872f2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872f2c.md) FUN_00872f2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00872f74",
      "incomplete_value": true,
      "site": "00872f78",
      "value": [
        "LOAD",
        "8",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00872f74",
      "incomplete_value": true,
      "site": "00872f78",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:10:8"
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
      "unmatched:00871fac",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00872f58",
      "DATA",
      [
        "storage",
        "00c80b00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871fcc ["INT_ADD", "register:40f0:8", ["const:871fcc:8", "const:4:8"]]
- 00871fcc ["CALL", null, ["callee:0043be80:8"]]
+ 00872f78 ["INT_ADD", "register:40f0:8", ["const:872f78:8", "const:4:8"]]
+ 00872f78 ["CALL", null, ["callee:0043be80:8"]]
- 00871f94 ["INT_ADD", "register:40f0:8", ["const:871f94:8", "const:4:8"]]
- 00871f94 ["CALL", null, ["callee:00c58f30:8"]]
+ 00872f40 ["INT_ADD", "register:40f0:8", ["const:872f40:8", "const:4:8"]]
+ 00872f40 ["CALL", null, ["callee:00c58f30:8"]]
- 00871fa0 ["COPY", "register:4050:8", ["const:c7f000:8"]]
+ 00872f4c ["COPY", "register:4050:8", ["const:c80000:8"]]
~~~


<a id="compare-6493fef8830fca87d8c91ec7b2d54cf1"></a>

### [`00871ff4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00871/00871ff4.md) → [`00872fa0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872fa0.md) FUN_00872fa0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00871ffc",
      "DATA",
      [
        "storage",
        "00c7fb30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00872fa8",
      "DATA",
      [
        "storage",
        "00c80b00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00871ff4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 00871ff8 ["COPY", "tmp:0:8", ["const:b30:8"]]
- 00871ff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00871ff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00871ff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00871ffc ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00871ffc ["COPY", "tmp:1:8", ["register:4008:8"]]
- 00871ffc ["INT_ADD", "register:4008:8", ["register:4008:8", "const:8:8"]]
- 00871ffc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-967f3ffcca3006052f3ab2d7fdc22f86"></a>

### [`00872030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872030.md) → [`00872fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00872/00872fdc.md) FUN_00872fdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00872034 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00872034 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00872034 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00872034 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00872fe0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00872fe0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00872fe0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00872fe0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-4f017a12b18c89e42ea81eb3b39f078a"></a>

### [`00872078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872078.md) → [`00873024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/00873024.md) FUN_00873024

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087305c",
      "incomplete_value": true,
      "site": "00873060",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00873078",
      "incomplete_value": true,
      "site": "0087307c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:8:8"
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
      "unmatched:0087209c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008720a0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ],
    [
      "unmatched:008720a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00873048",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "0087304c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ],
    [
      "00873050",
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
- 008720b4 ["INT_ADD", "register:40f0:8", ["const:8720b4:8", "const:4:8"]]
- 008720b4 ["CALL", null, ["callee:00493064:8"]]
+ 00873060 ["INT_ADD", "register:40f0:8", ["const:873060:8", "const:4:8"]]
+ 00873060 ["CALL", null, ["callee:00493064:8"]]
- 008720d0 ["INT_ADD", "register:40f0:8", ["const:8720d0:8", "const:4:8"]]
- 008720d0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0087307c ["INT_ADD", "register:40f0:8", ["const:87307c:8", "const:4:8"]]
+ 0087307c ["CALL", null, ["callee:00c58f50:8"]]
- 0087209c ["INT_ADD", "register:40f0:8", ["const:87209c:8", "const:4:8"]]
- 0087209c ["CALL", null, ["ram:48cd38:8"]]
~~~


<a id="compare-f12ef181fafd1b7072568b28714c3a3c"></a>

### [`00872150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872150.md) → [`008730fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/008730fc.md) FUN_008730fc

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
      "unmatched:0087215c",
      "DATA",
      [
        "storage",
        "00c7fbb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00873108",
      "DATA",
      [
        "storage",
        "00c80b80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872150 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00872150 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00872150 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00872154 ["COPY", "register:4048:8", ["const:c7f000:8"]]
- 00872158 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 00872158 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00872158 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00872158 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-137ecd37ab674df72a88595373e1128d"></a>

### [`00872170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872170.md) → [`0087311c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/0087311c.md) FUN_0087311c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, store_value

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00873124",
      "incomplete_value": false,
      "site": "00873128",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00873144",
      "incomplete_value": true,
      "site": "00873148",
      "value": [
        "live",
        "register:4040:8"
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
      "00873128",
      "DATA",
      [
        "storage",
        "00c7fbb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00873128",
      "DATA",
      [
        "storage",
        "00c80b80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0087219c ["INT_ADD", "register:40f0:8", ["const:87219c:8", "const:4:8"]]
- 0087219c ["CALL", null, ["callee:00c58f50:8"]]
+ 00873148 ["INT_ADD", "register:40f0:8", ["const:873148:8", "const:4:8"]]
+ 00873148 ["CALL", null, ["callee:00c58f50:8"]]
- 00872174 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00873120 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00872178 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 00872178 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00872178 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00872178 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00873124 ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 00873124 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00873124 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00873124 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a29a86bf7c2b0a61f7217e3dee13733a"></a>

### [`008721b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008721b0.md) → [`0087315c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/0087315c.md) FUN_0087315c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008731a4",
      "incomplete_value": true,
      "site": "008731a8",
      "value": [
        "LOAD",
        "8",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008731a4",
      "incomplete_value": true,
      "site": "008731a8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00872200",
      "incomplete_value": true,
      "site": "0087220c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:008721dc",
      "DATA",
      [
        "storage",
        "00c7fbb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00873188",
      "DATA",
      [
        "storage",
        "00c80b80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008721fc ["INT_ADD", "register:40f0:8", ["const:8721fc:8", "const:4:8"]]
- 008721fc ["CALL", null, ["callee:0043be80:8"]]
+ 008731a8 ["INT_ADD", "register:40f0:8", ["const:8731a8:8", "const:4:8"]]
+ 008731a8 ["CALL", null, ["callee:0043be80:8"]]
- 008721c4 ["INT_ADD", "register:40f0:8", ["const:8721c4:8", "const:4:8"]]
- 008721c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00873170 ["INT_ADD", "register:40f0:8", ["const:873170:8", "const:4:8"]]
+ 00873170 ["CALL", null, ["callee:00c58f30:8"]]
- 008721d0 ["COPY", "register:4050:8", ["const:c7f000:8"]]
+ 0087317c ["COPY", "register:4050:8", ["const:c80000:8"]]
~~~


<a id="compare-c3ba7a2aa9306222bc4359273f9c1f70"></a>

### [`00872224`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872224.md) → [`008731d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/008731d0.md) FUN_008731d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008731d8",
      "incomplete_value": false,
      "site": "008731d8",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
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
      "008731d8",
      "DATA",
      [
        "storage",
        "00c7fbb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008731d8",
      "DATA",
      [
        "storage",
        "00c80b80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872224 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 008731d0 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00872228 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 00872228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00872228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00872228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008731d4 ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 008731d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008731d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008731d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5772863bf7e0b3eef45dc086897f8c08"></a>

### [`008722a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008722a8.md) → [`00873254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/00873254.md) FUN_00873254

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048e820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048e820.md) [`004928ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/004928ec.md) [`00492d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492d44.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048eb40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048e/0048eb40.md) [`00492c0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00492/00492c0c.md) [`00493064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493064.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.85% / 新版 84.85%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00873298",
      "incomplete_value": true,
      "site": "0087329c",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00873294",
      "incomplete_value": true,
      "site": "0087329c",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
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
      "unmatched:008722c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:008722cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "unmatched:008722d0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ]
  ],
  "added": [
    [
      "00873274",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00873278",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "0087327c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048eb40"
      ]
    ]
  ]
}
~~~


~~~diff
- 008722f0 ["INT_ADD", "register:40f0:8", ["const:8722f0:8", "const:4:8"]]
- 008722f0 ["CALL", null, ["callee:00492c0c:8"]]
+ 0087329c ["INT_ADD", "register:40f0:8", ["const:87329c:8", "const:4:8"]]
+ 0087329c ["CALL", null, ["callee:00492c0c:8"]]
- 008722c4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:28:8"]]
- 008722c4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 008722c8 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 008722c8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 008722c8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-326390bf063e26f9c10ec5fe227d5db8"></a>

### [`00872380`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872380.md) → [`0087332c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/0087332c.md) FUN_0087332c

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
      "definition_site": "00873330",
      "incomplete_value": false,
      "site": "00873334",
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
            "const:c18:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00873334",
      "DATA",
      [
        "storage",
        "00c7fc48",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00873334",
      "DATA",
      [
        "storage",
        "00c80c18",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872380 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0087332c ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00872384 ["COPY", "tmp:0:8", ["const:c48:8"]]
- 00872384 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00872384 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00872384 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00873330 ["COPY", "tmp:0:8", ["const:c18:8"]]
+ 00873330 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00873330 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00873330 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-94b8adb25c56f326e4924862db668703"></a>

### [`00872390`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872390.md) → [`0087333c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/0087333c.md) FUN_0087333c

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
      "unmatched:00872390",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00872394",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:008723a8",
      "DATA",
      [
        "storage",
        "00c7fc48",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0087333c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00873340",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00873354",
      "DATA",
      [
        "storage",
        "00c80c18",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00872390 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00872390 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00872390 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00872390 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00872394 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00872394 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00872398 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-6fb967d9d0c35b0fab0c31edadee7e23"></a>

### [`008723c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008723c0.md) → [`0087336c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/0087336c.md) FUN_0087336c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0085c434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c434.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-c1f7a310d7cb97807e3c8cdea2b49c0a"></a>

### [`008723d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008723d0.md) → [`0087337c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/0087337c.md) FUN_0087337c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) · 呼出先 6件 [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`004446c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/004446c0.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0085c434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c434.md) · 呼出先 6件 [`00444440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00444/00444440.md) [`004449e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00444/004449e0.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "008733c0",
      "incomplete_value": true,
      "site": "008733dc",
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
      "definition_site": "008733d4",
      "incomplete_value": false,
      "site": "008733dc",
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
            "const:e4c:8"
          ]
        ]
      ]
    },
    "old": {
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
      "unmatched:008723d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:008723d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:008723dc",
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
      "00873380",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00873384",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00873388",
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
- 00872430 ["INT_ADD", "register:40f0:8", ["const:872430:8", "const:4:8"]]
- 00872430 ["CALL", null, ["callee:00c59230:8"]]
+ 008733dc ["INT_ADD", "register:40f0:8", ["const:8733dc:8", "const:4:8"]]
+ 008733dc ["CALL", null, ["callee:00c59230:8"]]
- 008723d0 ["INT_SUB", "register:8:8", ["register:8:8", "const:b0:8"]]
- 008723d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008723d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008723d4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 008723d4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-9b644e3d95c7cbb05e1df52ed3cf21a0"></a>

### [`008725f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008725f8.md) → [`008735a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/008735a4.md) FUN_008735a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00872a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a44.md) · 呼出先 5件 [`00484800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00484/00484800.md) [`004939d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004939d8.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`008739f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/008739f0.md) · 呼出先 5件 [`00484b20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00484/00484b20.md) [`00493cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493cf8.md) [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 22.88% / 新版 22.88%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 27件, `unresolved_call_alignment` 41件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00872980",
      "incomplete_value": true,
      "site": "00872984",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 42,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00873934",
      "incomplete_value": true,
      "site": "0087393c",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": null,
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
      "unmatched:008725fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00872600",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00872604",
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
      "008735a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "008735ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "008735b0",
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
- 00872984 ["INT_ADD", "register:40f0:8", ["const:872984:8", "const:4:8"]]
- 00872984 ["CALL", null, ["callee:00484b20:8"]]
+ 00873930 ["INT_ADD", "register:40f0:8", ["const:873930:8", "const:4:8"]]
+ 00873930 ["CALL", null, ["callee:00484b20:8"]]
- 00872990 ["INT_ADD", "register:40f0:8", ["const:872990:8", "const:4:8"]]
- 00872990 ["CALL", null, ["callee:00493cf8:8"]]
+ 0087393c ["INT_ADD", "register:40f0:8", ["const:87393c:8", "const:4:8"]]
+ 0087393c ["CALL", null, ["callee:00493cf8:8"]]
- 008725f8 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-a580c98410813c9d7c28aaa10549aa1e"></a>

### [`00872a44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a44.md) → [`008739f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/008739f0.md) FUN_008739f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`008725f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/008725f8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`008735a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/008735a4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00872a54 ["INT_ADD", "register:40f0:8", ["const:872a54:8", "const:4:8"]]
- 00872a54 ["CALL", null, ["callee:008735a4:8"]]
+ 00873a00 ["INT_ADD", "register:40f0:8", ["const:873a00:8", "const:4:8"]]
+ 00873a00 ["CALL", null, ["callee:008735a4:8"]]
~~~


<a id="compare-58bb86ee237d3ae37bf86920c08d0a51"></a>

### [`00872a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00872/00872a68.md) → [`00873a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00873/00873a14.md) FUN_00873a14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`00444120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444120.md) [`00444e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00444/00444e60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00444440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00444/00444440.md) [`00445180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00445/00445180.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.53% / 新版 68.53%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 19件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00873a50",
      "value": [
        "leaf",
        "ram:9cdb7c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00872aa4",
      "value": [
        "leaf",
        "ram:9ccbd0:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00873a4c",
      "incomplete_value": false,
      "site": "00873a50",
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
            "const:230:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00872aa0",
      "incomplete_value": false,
      "site": "00872aa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca8000:8"
          ],
          [
            "leaf",
            "const:270:8"
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
      "definition_site": "00872bbc",
      "incomplete_value": true,
      "site": "00872bd4",
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
            "const:0:8"
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
      "unmatched:00872a78",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00872a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00872a80",
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
      "00873a24",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00873a28",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00873a2c",
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
- 00872aa4 ["INT_ADD", "register:40f0:8", ["const:872aa4:8", "const:4:8"]]
- 00872aa4 ["CALL", null, ["ram:9ccbd0:8"]]
+ 00873a50 ["INT_ADD", "register:40f0:8", ["const:873a50:8", "const:4:8"]]
+ 00873a50 ["CALL", null, ["ram:9cdb7c:8"]]
- 00872bd4 ["INT_ADD", "register:40f0:8", ["const:872bd4:8", "const:4:8"]]
- 00872bd4 ["CALL", null, ["callee:0047ec3c:8"]]
+ 00873b80 ["INT_ADD", "register:40f0:8", ["const:873b80:8", "const:4:8"]]
+ 00873b80 ["CALL", null, ["callee:0047ec3c:8"]]
- 00872d94 ["INT_ADD", "register:40f0:8", ["const:872d94:8", "const:4:8"]]
- 00872d94 ["CALL", null, ["callee:00c58f20:8"]]
+ 00873d40 ["INT_ADD", "register:40f0:8", ["const:873d40:8", "const:4:8"]]
+ 00873d40 ["CALL", null, ["callee:00c58f20:8"]]
~~~


<a id="compare-d3962afbbb5ea9e8bc2510b5894708e7"></a>

### [`008730a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730a0.md) → [`0087404c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/0087404c.md) FUN_0087404c

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
      "unmatched:008730a8",
      "DATA",
      [
        "storage",
        "00c7fce0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:008730ac",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c58f40"
      ]
    ]
  ],
  "added": [
    [
      "00874054",
      "DATA",
      [
        "storage",
        "00c80cb0",
        null,
        "pointer"
      ]
    ],
    [
      "00874058",
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
- 008730a0 ["COPY", "register:4040:8", ["const:c7f000:8"]]
- 008730a4 ["COPY", "tmp:0:8", ["const:ce0:8"]]
- 008730a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008730a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008730a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008730a8 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 008730a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-2db33f57b827c7a2f8b5dd947dd11b2b"></a>

### [`008730b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730b0.md) → [`0087405c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/0087405c.md) FUN_0087405c

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
      "definition_site": "0087406c",
      "incomplete_value": false,
      "site": "00874074",
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
            "const:cb0:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00874074",
      "DATA",
      [
        "storage",
        "00c7fce0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00874074",
      "DATA",
      [
        "storage",
        "00c80cb0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008730bc ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00874068 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 008730c0 ["COPY", "tmp:0:8", ["const:ce0:8"]]
- 008730c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008730c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008730c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0087406c ["COPY", "tmp:0:8", ["const:cb0:8"]]
+ 0087406c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0087406c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0087406c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008730cc ["INT_ADD", "register:40f0:8", ["const:8730cc:8", "const:4:8"]]
- 008730cc ["CALL", null, ["callee:00c58f40:8"]]
+ 00874078 ["INT_ADD", "register:40f0:8", ["const:874078:8", "const:4:8"]]
+ 00874078 ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-fa914e0c049731c49900384f988293ea"></a>

### [`008730f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008730f0.md) → [`0087409c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/0087409c.md) FUN_0087409c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`0087674c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/0087674c.md) · 呼出先 12件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 2件 [`0085c434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c434.md) [`008776f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/008776f8.md) · 呼出先 12件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00598228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598228.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.32% / 新版 70.32%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087417c",
      "incomplete_value": false,
      "site": "00874184",
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
      "definition_site": "008731d0",
      "incomplete_value": false,
      "site": "008731d8",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00874270",
      "incomplete_value": false,
      "site": "00874290",
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
    "old": null,
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00874274",
      "incomplete_value": true,
      "site": "00874290",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00873134",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00873154",
      "PARAM",
      [
        "storage",
        "002eee70",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0087315c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c59230"
      ]
    ]
  ],
  "added": [
    [
      "008740e0",
      "DATA",
      [
        "storage",
        "00c80d00",
        null,
        "undefined *"
      ]
    ],
    [
      "00874100",
      "PARAM",
      [
        "storage",
        "002eeeb0",
        null,
        "string"
      ]
    ],
    [
      "00874108",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c59230"
      ]
    ]
  ]
}
~~~


~~~diff
- 008731d8 ["INT_ADD", "register:40f0:8", ["const:8731d8:8", "const:4:8"]]
- 008731d8 ["CALL", null, ["callee:0047e96c:8"]]
+ 00874184 ["INT_ADD", "register:40f0:8", ["const:874184:8", "const:4:8"]]
+ 00874184 ["CALL", null, ["callee:0047e96c:8"]]
- 008732e4 ["INT_ADD", "register:40f0:8", ["const:8732e4:8", "const:4:8"]]
- 008732e4 ["CALL", null, ["callee:0047ec3c:8"]]
+ 00874290 ["INT_ADD", "register:40f0:8", ["const:874290:8", "const:4:8"]]
+ 00874290 ["CALL", null, ["callee:0047ec3c:8"]]
- 00873304 ["INT_ADD", "register:40f0:8", ["const:873304:8", "const:4:8"]]
- 00873304 ["CALL", null, ["callee:00c54d90:8"]]
+ 008742b0 ["INT_ADD", "register:40f0:8", ["const:8742b0:8", "const:4:8"]]
+ 008742b0 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-49fb7b9baabc1a19042cee16b752bf82"></a>

### [`008734ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/008734ec.md) → [`00874498`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874498.md) FUN_00874498

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 81.40% / 新版 81.40%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00874510",
      "incomplete_value": true,
      "site": "00874514",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "unmatched:008734ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:008734f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00873508",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874498",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0087449c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "008744b4",
      "DATA",
      [
        "storage",
        "00c80d00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873568 ["INT_ADD", "register:40f0:8", ["const:873568:8", "const:4:8"]]
- 00873568 ["CALL", null, ["callee:00c58f20:8"]]
+ 00874514 ["INT_ADD", "register:40f0:8", ["const:874514:8", "const:4:8"]]
+ 00874514 ["CALL", null, ["callee:00c58f20:8"]]
- 008734ec ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 008734ec ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 008734ec ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 008734ec ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 008734f0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 008734f0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 008734f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 008734f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bef86aacea9b1c5acfb286b19590cf7c"></a>

### [`00873598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873598.md) → [`00874544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874544.md) FUN_00874544

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.18% / 新版 87.18%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087455c",
      "incomplete_value": false,
      "site": "00874560",
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
            "const:d00:8"
          ]
        ]
      ]
    },
    "old": {
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
      "00874560",
      "DATA",
      [
        "storage",
        "00c7fd30",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00874560",
      "DATA",
      [
        "storage",
        "00c80d00",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008735ac ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00874558 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 008735b0 ["COPY", "tmp:0:8", ["const:d30:8"]]
- 008735b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 008735b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 008735b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087455c ["COPY", "tmp:0:8", ["const:d00:8"]]
+ 0087455c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087455c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087455c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008735c0 ["INT_ADD", "register:40f0:8", ["const:8735c0:8", "const:4:8"]]
- 008735c0 ["CALL", null, ["callee:00c58f50:8"]]
+ 0087456c ["INT_ADD", "register:40f0:8", ["const:87456c:8", "const:4:8"]]
+ 0087456c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-f32dac0ba03ad178a316d2b1dc11d047"></a>

### [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) → [`008745e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/008745e0.md) FUN_008745e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00560b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560b48.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md)
- 新版 呼出元 0件  · 呼出先 17件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00560e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/00560e68.md) [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.07% / 新版 84.07%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0087469c",
      "incomplete_value": true,
      "site": "008746ac",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40e8:8"
          ],
          [
            "leaf",
            "const:20:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "008747b4",
      "value": [
        "leaf",
        "ram:769674:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00873808",
      "value": [
        "leaf",
        "ram:769298:8"
      ]
    },
    "ordinal": 11,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0087365c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "unmatched:00873688",
      "READ",
      [
        "storage",
        "002b4bdb",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0087368c",
      "WRITE",
      [
        "storage",
        "Stack[-0x9c]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00874608",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076880c"
      ]
    ],
    [
      "00874634",
      "READ",
      [
        "storage",
        "002b4cb9",
        null,
        "string"
      ]
    ],
    [
      "00874638",
      "WRITE",
      [
        "storage",
        "Stack[-0x9c]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00873700 ["INT_ADD", "register:40f0:8", ["const:873700:8", "const:4:8"]]
- 00873700 ["CALL", null, ["callee:00442e98:8"]]
+ 008746ac ["INT_ADD", "register:40f0:8", ["const:8746ac:8", "const:4:8"]]
+ 008746ac ["CALL", null, ["callee:00442e98:8"]]
- 00873808 ["INT_ADD", "register:40f0:8", ["const:873808:8", "const:4:8"]]
- 00873808 ["CALL", null, ["ram:769298:8"]]
+ 008747b4 ["INT_ADD", "register:40f0:8", ["const:8747b4:8", "const:4:8"]]
+ 008747b4 ["CALL", null, ["ram:769674:8"]]
- 0087365c ["INT_ADD", "register:40f0:8", ["const:87365c:8", "const:4:8"]]
- 0087365c ["CALL", null, ["ram:768430:8"]]
~~~


<a id="compare-039311bdfb4b3c3ff430b11c3e96808a"></a>

### [`00873b00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873b00.md) → [`00874aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874aac.md) FUN_00874aac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) [`00874b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874b2c.md) · 呼出先 9件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`0044f988`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f988.md) [`008745d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008745d0.md) [`00874620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874620.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 2件 [`008745e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/008745e0.md) [`00875ad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875ad8.md) · 呼出先 9件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`0044fca8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fca8.md) [`0087557c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/0087557c.md) [`008755cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008755cc.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.06% / 新版 95.06%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874b14",
      "incomplete_value": false,
      "site": "00874b14",
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
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873b68",
      "incomplete_value": false,
      "site": "00873b68",
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
            "const:d90:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874b34",
      "incomplete_value": false,
      "site": "00874b34",
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
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873b88",
      "incomplete_value": false,
      "site": "00873b88",
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
            "const:d90:8"
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
      "00874b14",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ],
    [
      "00874b34",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ],
    [
      "00874b74",
      "READ",
      [
        "storage",
        "00c7fdb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00874b14",
      "DATA",
      [
        "storage",
        "00c80d60",
        null,
        "undefined *"
      ]
    ],
    [
      "00874b34",
      "DATA",
      [
        "storage",
        "00c80d60",
        null,
        "undefined *"
      ]
    ],
    [
      "00874b74",
      "READ",
      [
        "storage",
        "00c80d80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873b2c ["INT_ADD", "register:40f0:8", ["const:873b2c:8", "const:4:8"]]
- 00873b2c ["CALL", null, ["callee:0044fc40:8"]]
+ 00874ad8 ["INT_ADD", "register:40f0:8", ["const:874ad8:8", "const:4:8"]]
+ 00874ad8 ["CALL", null, ["callee:0044fc40:8"]]
- 00873b50 ["INT_ADD", "register:40f0:8", ["const:873b50:8", "const:4:8"]]
- 00873b50 ["CALL", null, ["callee:00c54d60:8"]]
+ 00874afc ["INT_ADD", "register:40f0:8", ["const:874afc:8", "const:4:8"]]
+ 00874afc ["CALL", null, ["callee:00c54d60:8"]]
- 00873b54 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00874b00 ["COPY", "register:4040:8", ["const:c80000:8"]]
~~~


<a id="compare-d1a307db313a3090316a30c594b3c92c"></a>

### [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) → [`00874c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874c54.md) FUN_00874c54

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) · 呼出先 7件 [`00874d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874d00.md) [`00874d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874d50.md) [`00880700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880700.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 2件 [`008745e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/008745e0.md) [`008756ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008756ec.md) · 呼出先 7件 [`00875cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875cac.md) [`00875cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875cfc.md) [`008816ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/008816ac.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.15% / 新版 93.15%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874cb4",
      "incomplete_value": false,
      "site": "00874cb4",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873d08",
      "incomplete_value": false,
      "site": "00873d08",
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
            "const:e90:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874cd4",
      "incomplete_value": false,
      "site": "00874cd4",
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
            "const:e60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873d28",
      "incomplete_value": false,
      "site": "00873d28",
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
            "const:e90:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00874cf0",
      "value": [
        "leaf",
        "ram:8816ac:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00873d44",
      "value": [
        "leaf",
        "ram:880700:8"
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
      "00874cb4",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ],
    [
      "00874cd4",
      "DATA",
      [
        "storage",
        "00c7fe90",
        null,
        "undefined *"
      ]
    ],
    [
      "00874cf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00880700"
      ]
    ]
  ],
  "added": [
    [
      "00874cb4",
      "DATA",
      [
        "storage",
        "00c80e60",
        null,
        "undefined *"
      ]
    ],
    [
      "00874cd4",
      "DATA",
      [
        "storage",
        "00c80e60",
        null,
        "undefined *"
      ]
    ],
    [
      "00874cf0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008816ac"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873d44 ["INT_ADD", "register:40f0:8", ["const:873d44:8", "const:4:8"]]
- 00873d44 ["CALL", null, ["ram:880700:8"]]
+ 00874cf0 ["INT_ADD", "register:40f0:8", ["const:874cf0:8", "const:4:8"]]
+ 00874cf0 ["CALL", null, ["ram:8816ac:8"]]
- 00873cf0 ["INT_ADD", "register:40f0:8", ["const:873cf0:8", "const:4:8"]]
- 00873cf0 ["CALL", null, ["callee:00c54d60:8"]]
+ 00874c9c ["INT_ADD", "register:40f0:8", ["const:874c9c:8", "const:4:8"]]
+ 00874c9c ["CALL", null, ["callee:00c54d60:8"]]
- 00873cf4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00874ca0 ["COPY", "register:4040:8", ["const:c80000:8"]]
~~~


<a id="compare-49946503bbc81921bd078e91d33a3aa9"></a>

### [`00873e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873e20.md) → [`00874dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874dcc.md) FUN_00874dcc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) · 呼出先 7件 [`00875138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875138.md) [`00875188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875188.md) [`00880d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00880/00880d4c.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`008745e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/008745e0.md) · 呼出先 7件 [`008760e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008760e4.md) [`00876134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/00876134.md) [`00881cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00881/00881cf8.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.52% / 新版 94.52%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874e2c",
      "incomplete_value": false,
      "site": "00874e2c",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873e80",
      "incomplete_value": false,
      "site": "00873e80",
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
            "const:f10:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00874e4c",
      "incomplete_value": false,
      "site": "00874e4c",
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
            "const:ee0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873ea0",
      "incomplete_value": false,
      "site": "00873ea0",
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
            "const:f10:8"
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
      "00874e2c",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ],
    [
      "00874e4c",
      "DATA",
      [
        "storage",
        "00c7ff10",
        null,
        "undefined *"
      ]
    ],
    [
      "00874e90",
      "READ",
      [
        "storage",
        "00c7ff30",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00874e2c",
      "DATA",
      [
        "storage",
        "00c80ee0",
        null,
        "undefined *"
      ]
    ],
    [
      "00874e4c",
      "DATA",
      [
        "storage",
        "00c80ee0",
        null,
        "undefined *"
      ]
    ],
    [
      "00874e90",
      "READ",
      [
        "storage",
        "00c80f00",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00873e68 ["INT_ADD", "register:40f0:8", ["const:873e68:8", "const:4:8"]]
- 00873e68 ["CALL", null, ["callee:00c54d60:8"]]
+ 00874e14 ["INT_ADD", "register:40f0:8", ["const:874e14:8", "const:4:8"]]
+ 00874e14 ["CALL", null, ["callee:00c54d60:8"]]
- 00873e6c ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00874e18 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00873e70 ["COPY", "tmp:0:8", ["const:f10:8"]]
- 00873e70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00873e70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00873e70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00874e1c ["COPY", "tmp:0:8", ["const:ee0:8"]]
+ 00874e1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00874e1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00874e1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-60026eb22464a8f6e295a94e0752bffe"></a>

### [`00873f98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873f98.md) → [`00874f44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874f44.md) FUN_00874f44

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00873634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873634.md) [`00874dd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874dd4.md) [`0087520c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/0087520c.md) [`008760b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00876/008760b0.md) · 呼出先 16件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00453cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00453/00453cf0.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md) [`00764f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/00764f38.md) [`00875434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00875/00875434.md)
- 新版 呼出元 4件 [`008745e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/008745e0.md) [`00875d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875d80.md) [`008761b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008761b8.md) [`0087705c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00877/0087705c.md) · 呼出先 16件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00454010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00454/00454010.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md) [`00765314`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00765/00765314.md) [`008763e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00876/008763e0.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_target` 1件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00874fa0",
      "incomplete_value": true,
      "site": "00874fa0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f23:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00873ff4",
      "incomplete_value": true,
      "site": "00873ff4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dcb:8"
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
      "definition_site": "00874fa8",
      "incomplete_value": true,
      "site": "00874fa8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00873ffc",
      "incomplete_value": true,
      "site": "00873ffc",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00874fec",
      "incomplete_value": true,
      "site": "00874ffc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6e6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874040",
      "incomplete_value": true,
      "site": "00874050",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:61b:8"
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
      "00874f94",
      "READ",
      [
        "storage",
        "002a7dcb",
        null,
        "string"
      ]
    ],
    [
      "00874f98",
      "READ",
      [
        "storage",
        "002a7dd0",
        null,
        "string"
      ]
    ],
    [
      "00874fec",
      "READ",
      [
        "storage",
        "002a361b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00874f94",
      "READ",
      [
        "storage",
        "002a7f23",
        null,
        "string"
      ]
    ],
    [
      "00874f98",
      "READ",
      [
        "storage",
        "002a7f28",
        null,
        "string"
      ]
    ],
    [
      "00874fec",
      "READ",
      [
        "storage",
        "002a36e6",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874148 ["INT_ADD", "register:40f0:8", ["const:874148:8", "const:4:8"]]
- 00874148 ["CALL", null, ["ram:7643dc:8"]]
+ 008750f4 ["INT_ADD", "register:40f0:8", ["const:8750f4:8", "const:4:8"]]
+ 008750f4 ["CALL", null, ["ram:7647b8:8"]]
- 00873fe0 ["COPY", "tmp:0:8", ["const:dcb:8"]]
- 00873fe0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00873fe0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00873fe0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00874f8c ["COPY", "tmp:0:8", ["const:f23:8"]]
+ 00874f8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00874f8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00874f8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087400c ["INT_ADD", "register:40f0:8", ["const:87400c:8", "const:4:8"]]
- 0087400c ["CALL", null, ["callee:00b3cf24:8"]]
+ 00874fb8 ["INT_ADD", "register:40f0:8", ["const:874fb8:8", "const:4:8"]]
+ 00874fb8 ["CALL", null, ["callee:00b3cf24:8"]]
~~~


<a id="compare-8e264a87f9d23c64f15c133a82982f61"></a>

### [`00874484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874484.md) → [`00875430`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875430.md) FUN_00875430

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
      "definition_site": "00875444",
      "incomplete_value": false,
      "site": "00875448",
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
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874498",
      "incomplete_value": false,
      "site": "0087449c",
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
            "const:d90:8"
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
      "00875448",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875448",
      "DATA",
      [
        "storage",
        "00c80d60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874494 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875440 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00874498 ["COPY", "tmp:0:8", ["const:d90:8"]]
- 00874498 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874498 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874498 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875444 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00875444 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875444 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875444 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008744ac ["INT_ADD", "register:40f0:8", ["const:8744ac:8", "const:4:8"]]
- 008744ac ["CALL", null, ["callee:00c54d90:8"]]
+ 00875458 ["INT_ADD", "register:40f0:8", ["const:875458:8", "const:4:8"]]
+ 00875458 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-11e12a6e308b892be910ae72e95f5a6d"></a>

### [`008744e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/008744e0.md) → [`0087548c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/0087548c.md) FUN_0087548c

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
      "definition_site": "008754a4",
      "incomplete_value": false,
      "site": "008754a8",
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
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008744f8",
      "incomplete_value": false,
      "site": "008744fc",
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
            "const:d90:8"
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
      "008754a8",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "008754a8",
      "DATA",
      [
        "storage",
        "00c80d60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008744f4 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 008754a0 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 008744f8 ["COPY", "tmp:0:8", ["const:d90:8"]]
- 008744f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008744f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008744f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 008754a4 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 008754a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 008754a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 008754a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0087450c ["INT_ADD", "register:40f0:8", ["const:87450c:8", "const:4:8"]]
- 0087450c ["CALL", null, ["callee:00c54d90:8"]]
+ 008754b8 ["INT_ADD", "register:40f0:8", ["const:8754b8:8", "const:4:8"]]
+ 008754b8 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-3d3ae76ba196e5cbb88639f3efe0d6f8"></a>

### [`0087453c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/0087453c.md) → [`008754e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008754e8.md) FUN_008754e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0087550c",
      "incomplete_value": false,
      "site": "00875510",
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
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874560",
      "incomplete_value": false,
      "site": "00874564",
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
            "const:d90:8"
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
      "00875510",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875510",
      "DATA",
      [
        "storage",
        "00c80d60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874550 ["INT_ADD", "register:40f0:8", ["const:874550:8", "const:4:8"]]
- 00874550 ["CALL", null, ["callee:00c58f30:8"]]
+ 008754fc ["INT_ADD", "register:40f0:8", ["const:8754fc:8", "const:4:8"]]
+ 008754fc ["CALL", null, ["callee:00c58f30:8"]]
- 0087455c ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875508 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 00874560 ["COPY", "tmp:0:8", ["const:d90:8"]]
- 00874560 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00874560 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00874560 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0087550c ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 0087550c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0087550c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0087550c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-57cdcba217ed33645562f9d9525935a0"></a>

### [`00874594`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874594.md) → [`00875540`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875540.md) FUN_00875540

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00875548",
      "incomplete_value": false,
      "site": "0087554c",
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
            "const:d60:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0087459c",
      "incomplete_value": false,
      "site": "008745a0",
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
            "const:d90:8"
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
      "0087554c",
      "DATA",
      [
        "storage",
        "00c7fd90",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0087554c",
      "DATA",
      [
        "storage",
        "00c80d60",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874598 ["COPY", "register:4048:8", ["const:c7f000:8"]]
+ 00875544 ["COPY", "register:4048:8", ["const:c80000:8"]]
- 0087459c ["COPY", "tmp:0:8", ["const:d90:8"]]
- 0087459c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0087459c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0087459c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00875548 ["COPY", "tmp:0:8", ["const:d60:8"]]
+ 00875548 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00875548 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00875548 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 008745c4 ["INT_ADD", "register:40f0:8", ["const:8745c4:8", "const:4:8"]]
- 008745c4 ["CALL", null, ["callee:00c54d60:8"]]
+ 00875570 ["INT_ADD", "register:40f0:8", ["const:875570:8", "const:4:8"]]
+ 00875570 ["CALL", null, ["callee:00c54d60:8"]]
~~~


<a id="compare-cb525a4aadad6588e485ce628e390236"></a>

### [`00874740`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874740.md) → [`008756ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008756ec.md) FUN_008756ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00874670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874670.md) · 呼出先 7件 [`00873ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00873/00873ca8.md) [`00874a8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874a8c.md) [`00874adc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874adc.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`0087561c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/0087561c.md) · 呼出先 7件 [`00874c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00874/00874c54.md) [`00875a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875a38.md) [`00875a88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875a88.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00875788",
      "incomplete_value": false,
      "site": "00875788",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008747dc",
      "incomplete_value": false,
      "site": "008747dc",
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
            "const:e00:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "008757a4",
      "incomplete_value": false,
      "site": "008757a4",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008747f8",
      "incomplete_value": false,
      "site": "008747f8",
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
            "const:e00:8"
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
      "00875788",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ],
    [
      "008757a4",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ],
    [
      "008757ec",
      "READ",
      [
        "storage",
        "00c7fe20",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00875788",
      "DATA",
      [
        "storage",
        "00c80dd0",
        null,
        "undefined *"
      ]
    ],
    [
      "008757a4",
      "DATA",
      [
        "storage",
        "00c80dd0",
        null,
        "undefined *"
      ]
    ],
    [
      "008757ec",
      "READ",
      [
        "storage",
        "00c80df0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 008747c4 ["INT_ADD", "register:40f0:8", ["const:8747c4:8", "const:4:8"]]
- 008747c4 ["CALL", null, ["callee:00c54d60:8"]]
+ 00875770 ["INT_ADD", "register:40f0:8", ["const:875770:8", "const:4:8"]]
+ 00875770 ["CALL", null, ["callee:00c54d60:8"]]
- 008747c8 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 00875774 ["COPY", "register:4040:8", ["const:c80000:8"]]
- 008747cc ["COPY", "tmp:0:8", ["const:e00:8"]]
- 008747cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008747cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008747cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875778 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 00875778 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875778 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875778 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d081509055ced88fdaf333e95e2d861b"></a>

### [`00874940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/00874940.md) → [`008758ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/008758ec.md) FUN_008758ec

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
      "definition_site": "00875900",
      "incomplete_value": false,
      "site": "00875904",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00874954",
      "incomplete_value": false,
      "site": "00874958",
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
            "const:e00:8"
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
      "00875904",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875904",
      "DATA",
      [
        "storage",
        "00c80dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00874950 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 008758fc ["COPY", "register:4040:8", ["const:c80000:8"]]
- 00874954 ["COPY", "tmp:0:8", ["const:e00:8"]]
- 00874954 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00874954 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00874954 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875900 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 00875900 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875900 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00874968 ["INT_ADD", "register:40f0:8", ["const:874968:8", "const:4:8"]]
- 00874968 ["CALL", null, ["callee:00c54d90:8"]]
+ 00875914 ["INT_ADD", "register:40f0:8", ["const:875914:8", "const:4:8"]]
+ 00875914 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-143b4e8234b3e8a3b7341ec79f0f835a"></a>

### [`0087499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00874/0087499c.md) → [`00875948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00875/00875948.md) FUN_00875948

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
      "definition_site": "00875960",
      "incomplete_value": false,
      "site": "00875964",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "008749b4",
      "incomplete_value": false,
      "site": "008749b8",
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
            "const:e00:8"
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
      "00875964",
      "DATA",
      [
        "storage",
        "00c7fe00",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00875964",
      "DATA",
      [
        "storage",
        "00c80dd0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 008749b0 ["COPY", "register:4040:8", ["const:c7f000:8"]]
+ 0087595c ["COPY", "register:4040:8", ["const:c80000:8"]]
- 008749b4 ["COPY", "tmp:0:8", ["const:e00:8"]]
- 008749b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 008749b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 008749b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00875960 ["COPY", "tmp:0:8", ["const:dd0:8"]]
+ 00875960 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00875960 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00875960 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 008749c8 ["INT_ADD", "register:40f0:8", ["const:8749c8:8", "const:4:8"]]
- 008749c8 ["CALL", null, ["callee:00c54d90:8"]]
+ 00875974 ["INT_ADD", "register:40f0:8", ["const:875974:8", "const:4:8"]]
+ 00875974 ["CALL", null, ["callee:00c54d90:8"]]
~~~


