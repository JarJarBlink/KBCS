# v16.0.2 → v16.0.3 · 最優先の変更候補 (74)

[一覧の目次](README.md)

<a id="compare-35b84fc0bd458ea5c76afd4d7a8b05d8"></a>

### [`00a8120c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a8120c.md) → [`00a82200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a82/00a82200.md) FUN_00a82200

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
      "definition_site": "00a82224",
      "incomplete_value": false,
      "site": "00a82224",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:340:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a81230",
      "incomplete_value": false,
      "site": "00a81230",
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
      "00a82224",
      "DATA",
      [
        "storage",
        "00c8c370",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a82224",
      "DATA",
      [
        "storage",
        "00c8d340",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a81220 ["INT_ADD", "register:40f0:8", ["const:a81220:8", "const:4:8"]]
- 00a81220 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a82214 ["INT_ADD", "register:40f0:8", ["const:a82214:8", "const:4:8"]]
+ 00a82214 ["CALL", null, ["callee:00c58f30:8"]]
- 00a81228 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a8221c ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a8122c ["COPY", "tmp:0:8", ["const:370:8"]]
- 00a8122c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a8122c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a8122c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a82220 ["COPY", "tmp:0:8", ["const:340:8"]]
+ 00a82220 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a82220 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a82220 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d67c2cfcb7bc0db67f9a7f2f7af5ef95"></a>

### [`00a81240`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a81240.md) → [`00a82234`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a82/00a82234.md) FUN_00a82234

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
      "definition_site": "00a82240",
      "incomplete_value": false,
      "site": "00a82240",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:340:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8124c",
      "incomplete_value": false,
      "site": "00a8124c",
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
      "00a82240",
      "DATA",
      [
        "storage",
        "00c8c370",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a82240",
      "DATA",
      [
        "storage",
        "00c8d340",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a81244 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a82238 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a81248 ["COPY", "tmp:0:8", ["const:370:8"]]
- 00a81248 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a81248 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a81248 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a8223c ["COPY", "tmp:0:8", ["const:340:8"]]
+ 00a8223c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a8223c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a8223c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-4a9a1db741f74cf18050a7a46f06ec7c"></a>

### [`00a81288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a81288.md) → [`00a8227c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a82/00a8227c.md) _INIT_226

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 80.23% / 新版 80.23%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a823d8",
      "incomplete_value": false,
      "site": "00a823dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:120:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a813e4",
      "incomplete_value": false,
      "site": "00a813e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:160:8"
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
      "definition_site": "00a823c8",
      "incomplete_value": false,
      "site": "00a823dc",
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
                "const:1125000:8"
              ],
              [
                "leaf",
                "const:120:8"
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
      "definition_site": "00a813d4",
      "incomplete_value": false,
      "site": "00a813e8",
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
                "const:1124000:8"
              ],
              [
                "leaf",
                "const:160:8"
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a81448",
      "incomplete_value": true,
      "site": "00a8144c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00a812b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a812c4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a812e0",
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
      "00a822ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a822b8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00a822d4",
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
- 00a813e8 ["INT_ADD", "register:40f0:8", ["const:a813e8:8", "const:4:8"]]
- 00a813e8 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a823dc ["INT_ADD", "register:40f0:8", ["const:a823dc:8", "const:4:8"]]
+ 00a823dc ["CALL", null, ["callee:0043bb58:8"]]
- 00a8144c ["INT_ADD", "register:40f0:8", ["const:a8144c:8", "const:4:8"]]
- 00a8144c ["CALL", null, ["callee:0043bb58:8"]]
+ 00a82440 ["INT_ADD", "register:40f0:8", ["const:a82440:8", "const:4:8"]]
+ 00a82440 ["CALL", null, ["callee:0043bb58:8"]]
- 00a814bc ["INT_ADD", "register:40f0:8", ["const:a814bc:8", "const:4:8"]]
- 00a814bc ["CALL", null, ["callee:00c58ed0:8"]]
+ 00a824b0 ["INT_ADD", "register:40f0:8", ["const:a824b0:8", "const:4:8"]]
+ 00a824b0 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-479398401b7f407ec9803f0702acbe7b"></a>

### [`00a81618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a81618.md) → [`00a8260c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a82/00a8260c.md) _INIT_227

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 75.14% / 新版 75.14%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a8282c",
      "incomplete_value": false,
      "site": "00a82840",
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
      "definition_site": "00a81838",
      "incomplete_value": false,
      "site": "00a8184c",
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
      "definition_site": "00a82834",
      "incomplete_value": false,
      "site": "00a82840",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1125000:8"
          ],
          [
            "leaf",
            "const:138:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a81840",
      "incomplete_value": false,
      "site": "00a8184c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1124000:8"
          ],
          [
            "leaf",
            "const:178:8"
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
      "definition_site": "00a8283c",
      "incomplete_value": false,
      "site": "00a82840",
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
      "definition_site": "00a81848",
      "incomplete_value": false,
      "site": "00a8184c",
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
      "unmatched:00a8161c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a81620",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a81624",
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
      "00a82610",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a82614",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a82618",
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
- 00a8184c ["INT_ADD", "register:40f0:8", ["const:a8184c:8", "const:4:8"]]
- 00a8184c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00a82840 ["INT_ADD", "register:40f0:8", ["const:a82840:8", "const:4:8"]]
+ 00a82840 ["CALL", null, ["callee:00c58ed0:8"]]
- 00a81618 ["INT_SUB", "register:8:8", ["register:8:8", "const:120:8"]]
- 00a8161c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a8161c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a8161c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:f0:8"]]
- 00a8161c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-cd7a7b83d71ba049fd2def81204a1249"></a>

### [`00a819a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a819a8.md) → [`00a8299c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a82/00a8299c.md) FUN_00a8299c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a834bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a834bc.md) · 呼出先 18件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044295c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/0044295c.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md)
- 新版 呼出元 1件 [`00a844b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a844b0.md) · 呼出先 18件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c7c.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.41% / 新版 84.41%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 25件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 22件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a81d20",
      "incomplete_value": false,
      "site": "00a81d24",
      "value": [
        "leaf",
        "const:3c:8"
      ]
    },
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a81d1c",
      "incomplete_value": true,
      "site": "00a81d24",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:7:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a8329c",
      "incomplete_value": true,
      "site": "00a832a8",
      "value": [
        "live",
        "register:40c8:8"
      ]
    },
    "old": null,
    "ordinal": 30,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a819ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a819b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a819b4",
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
      "00a829a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a829a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a829a8",
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
- 00a81d24 ["INT_ADD", "register:40f0:8", ["const:a81d24:8", "const:4:8"]]
- 00a81d24 ["CALL", null, ["callee:00c59070:8"]]
+ 00a82d18 ["INT_ADD", "register:40f0:8", ["const:a82d18:8", "const:4:8"]]
+ 00a82d18 ["CALL", null, ["callee:00c59070:8"]]
- 00a822b4 ["INT_ADD", "register:40f0:8", ["const:a822b4:8", "const:4:8"]]
- 00a822b4 ["CALL", null, ["callee:00c58fe0:8"]]
+ 00a832a8 ["INT_ADD", "register:40f0:8", ["const:a832a8:8", "const:4:8"]]
+ 00a832a8 ["CALL", null, ["callee:00c58fe0:8"]]
- 00a819a8 ["INT_SUB", "register:8:8", ["register:8:8", "const:190:8"]]
~~~


<a id="compare-1cb5d8c366729eac7d135ef56dd90e9e"></a>

### [`00a824fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a824fc.md) → [`00a834f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a834f0.md) FUN_00a834f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a819a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a81/00a819a8.md) · 呼出先 10件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`008bbb1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbb1c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00a8299c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a82/00a8299c.md) · 呼出先 10件 [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048aea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea0.md) [`008bcac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcac8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.50% / 新版 69.50%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 7件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a835c4",
      "incomplete_value": false,
      "site": "00a835e4",
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
      "definition_site": "00a825d0",
      "incomplete_value": false,
      "site": "00a825f0",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a835c8",
      "incomplete_value": true,
      "site": "00a835e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a825d4",
      "incomplete_value": true,
      "site": "00a825f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 3
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a8255c"
      ],
      [
        "FALL_THROUGH",
        "00a83550"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a83554",
      "value": [
        "live",
        "register:102:1"
      ]
    },
    "old": {
      "definition_site": "00a82558",
      "incomplete_value": true,
      "site": "00a82560",
      "value": [
        "INT_LESSEQUAL",
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
    "ordinal": 16,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a82540",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a8254c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a82550",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a83534",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00a83540",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00a83544",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a825f0 ["INT_ADD", "register:40f0:8", ["const:a825f0:8", "const:4:8"]]
- 00a825f0 ["CALL", null, ["callee:0047ec3c:8"]]
+ 00a835e4 ["INT_ADD", "register:40f0:8", ["const:a835e4:8", "const:4:8"]]
+ 00a835e4 ["CALL", null, ["callee:0047ec3c:8"]]
- 00a82540 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a82540 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00a82540 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00a82544 ["COPY", "register:40c8:8", ["register:4008:8"]]
~~~


<a id="compare-c55f41ee476fa634cda0737028d98ea2"></a>

### [`00a82754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82754.md) → [`00a83748`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83748.md) FUN_00a83748

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md) · 呼出先 5件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0048ab80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab80.md) [`0048ab88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab88.md)
- 新版 呼出元 1件 [`00a845ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a845ec.md) · 呼出先 5件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`0046ac48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046ac48.md) [`0048aea0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea0.md) [`0048aea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048aea8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 86.10% / 新版 86.10%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a83858",
      "incomplete_value": true,
      "site": "00a8386c",
      "value": [
        "LOAD",
        "8",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a82864",
      "incomplete_value": true,
      "site": "00a82878",
      "value": [
        "LOAD",
        "8",
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
                "const:18:8"
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
      "definition_site": "00a8388c",
      "incomplete_value": true,
      "site": "00a83898",
      "value": [
        "LOAD",
        "8",
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
                "const:18:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a82898",
      "incomplete_value": true,
      "site": "00a828a4",
      "value": [
        "LOAD",
        "8",
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
                "const:18:8"
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
      "definition_site": "00a828b0",
      "incomplete_value": true,
      "site": "00a828c8",
      "value": [
        "live",
        "register:40b0:8"
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
      "00a837a0",
      "READ",
      [
        "storage",
        "002c3ff0",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:00a82900",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a837b8"
      ]
    ],
    [
      "00a83968",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a829cc"
      ]
    ]
  ],
  "added": [
    [
      "00a837a0",
      "READ",
      [
        "storage",
        "002c4040",
        null,
        "undefined8"
      ]
    ],
    [
      "00a838f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a837b8"
      ]
    ],
    [
      "00a83968",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a839c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a82878 ["INT_ADD", "register:40f0:8", ["const:a82878:8", "const:4:8"]]
- 00a82878 ["CALL", null, ["callee:0048aea0:8"]]
+ 00a8386c ["INT_ADD", "register:40f0:8", ["const:a8386c:8", "const:4:8"]]
+ 00a8386c ["CALL", null, ["callee:0048aea0:8"]]
- 00a828a4 ["INT_ADD", "register:40f0:8", ["const:a828a4:8", "const:4:8"]]
- 00a828a4 ["CALL", null, ["callee:0048aea8:8"]]
+ 00a83898 ["INT_ADD", "register:40f0:8", ["const:a83898:8", "const:4:8"]]
+ 00a83898 ["CALL", null, ["callee:0048aea8:8"]]
- 00a828c8 ["INT_ADD", "register:40f0:8", ["const:a828c8:8", "const:4:8"]]
- 00a828c8 ["CALL", null, ["callee:0046ac48:8"]]
+ 00a838bc ["INT_ADD", "register:40f0:8", ["const:a838bc:8", "const:4:8"]]
+ 00a838bc ["CALL", null, ["callee:0046ac48:8"]]
~~~


<a id="compare-b6758271b8db96459f47086b206f0070"></a>

### [`00a82a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82a40.md) → [`00a83a34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83a34.md) FUN_00a83a34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 15件 [`0068be68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068b/0068be68.md) [`00695564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695564.md) [`00696768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00696/00696768.md) [`0069802c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00698/0069802c.md) [`006c3da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3da8.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 15件 [`0068c218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0068c/0068c218.md) [`00695914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00695/00695914.md) [`00696b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00696/00696b18.md) [`006983dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00698/006983dc.md) [`006c4158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c4/006c4158.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a82a98 ["BRANCH", null, ["local:b18:8"]]
+ 00a83a8c ["BRANCH", null, ["local:b19:8"]]
- 00a82ab4 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a82ab4 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 00a83aa8 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00a83aa8 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 00a82ae8 ["INT_ADD", "register:40f0:8", ["const:a82ae8:8", "const:4:8"]]
- 00a82ae8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a83adc ["INT_ADD", "register:40f0:8", ["const:a83adc:8", "const:4:8"]]
+ 00a83adc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-2bdb979628e38cd066d0eb50efd950d5"></a>

### [`00a82b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82b70.md) → [`00a83b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83b64.md) FUN_00a83b64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`00680e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00680/00680e48.md) [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) [`008eb020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008eb/008eb020.md) [`009f55a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f5/009f55a8.md) [`009f6c68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f6/009f6c68.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008bbcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcb0.md) [`00a843a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a843a8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 5件 [`006811f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00681/006811f8.md) [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) [`008ebfcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008eb/008ebfcc.md) [`009f6554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f6/009f6554.md) [`009f7c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f7/009f7c14.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008bcc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcc5c.md) [`00a8539c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a8539c.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.28% / 新版 91.28%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00a83da4",
      "incomplete_value": true,
      "site": "00a83dc4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4098:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "00a82cf0"
      ],
      [
        "CONDITIONAL_JUMP",
        "00a83ce4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a83ce0",
      "incomplete_value": true,
      "site": "00a83d1c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "INT_ADD",
              [
                "live",
                "register:40b8:8"
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a82d28",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 38,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a82b84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a82b88",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a82b9c",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a83b78",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a83b7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a83b90",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a82b84 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00a82b84 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00a82b84 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:90:8"]]
- 00a82b84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a82b88 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00a82b88 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00a82b88 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:a0:8"]]
- 00a82b88 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a82b8c ["COPY", "tmp:0:8", ["const:50:8"]]
- 00a82b8c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00a82b8c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00a82b8c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-3f041bd60837a00307727866c331a2a5"></a>

### [`00a82e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82e20.md) → [`00a83e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83e14.md) FUN_00a83e14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`007df140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007df/007df140.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`007e00a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007e0/007e00a4.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 91.58% / 新版 91.58%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a82f18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a83ef8"
      ]
    ],
    [
      "unmatched:00a82f2c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a83f60"
      ]
    ],
    [
      "unmatched:00a82f60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a83f40"
      ]
    ]
  ],
  "added": [
    [
      "00a83f0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a83ef8"
      ]
    ],
    [
      "00a83f20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a83f60"
      ]
    ],
    [
      "00a83f54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a83f40"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a82e7c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a82e7c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 00a83e70 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00a83e70 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 00a82e94 ["INT_ADD", "register:40f0:8", ["const:a82e94:8", "const:4:8"]]
- 00a82e94 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a83e88 ["INT_ADD", "register:40f0:8", ["const:a83e88:8", "const:4:8"]]
+ 00a83e88 ["CALL", null, ["callee:00c58f30:8"]]
- 00a82ec8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a82ec8 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00a83ebc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00a83ebc ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-505dddce188dd597ef4238e0da774af3"></a>

### [`00a82f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82f9c.md) → [`00a83f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83f90.md) FUN_00a83f90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 9件 [`0067f084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067f/0067f084.md) [`006ff370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ff/006ff370.md) [`0082c734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082c/0082c734.md) [`008cac14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ca/008cac14.md) [`008dd148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008dd/008dd148.md) · 呼出先 6件 [`008699e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00869/008699e0.md) [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 9件 [`0067f434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067f/0067f434.md) [`006ff720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ff/006ff720.md) [`0082d6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082d/0082d6e0.md) [`008cbbc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008cb/008cbbc0.md) [`008de0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008de/008de0f4.md) · 呼出先 6件 [`0086a98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0086a/0086a98c.md) [`00a84190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a84190.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 92.19% / 新版 92.19%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a84150",
      "incomplete_value": true,
      "site": "00a84158",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "old": null,
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
      "unmatched:00a830f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8414c"
      ]
    ],
    [
      "unmatched:00a83190",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84174"
      ]
    ],
    [
      "unmatched:00a83148",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "00a840ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8414c"
      ]
    ],
    [
      "00a84184",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84174"
      ]
    ],
    [
      "00a8413c",
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
- 00a83164 ["INT_ADD", "register:40f0:8", ["const:a83164:8", "const:4:8"]]
- 00a83164 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a84158 ["INT_ADD", "register:40f0:8", ["const:a84158:8", "const:4:8"]]
+ 00a84158 ["CALL", null, ["callee:00c58f50:8"]]
- 00a82fe4 ["INT_ADD", "register:40f0:8", ["const:a82fe4:8", "const:4:8"]]
- 00a82fe4 ["CALL", null, ["callee:0086a98c:8"]]
+ 00a83fd8 ["INT_ADD", "register:40f0:8", ["const:a83fd8:8", "const:4:8"]]
+ 00a83fd8 ["CALL", null, ["callee:0086a98c:8"]]
- 00a83034 ["INT_ADD", "register:40f0:8", ["const:a83034:8", "const:4:8"]]
- 00a83034 ["CALL", null, ["callee:00a84190:8"]]
+ 00a84028 ["INT_ADD", "register:40f0:8", ["const:a84028:8", "const:4:8"]]
+ 00a84028 ["CALL", null, ["callee:00a84190:8"]]
~~~


<a id="compare-93eeb3fbed6f7e82b0e297878a07b363"></a>

### [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) → [`00a84190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a84190.md) FUN_00a84190

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a82f9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82f9c.md) · 呼出先 6件 [`008bc284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bc/008bc284.md) [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) [`00a846b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a846b0.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00a83f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83f90.md) · 呼出先 6件 [`008bd230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bd/008bd230.md) [`00a85450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85450.md) [`00a856a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a856a4.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.16% / 新版 88.16%

優先判定に残った影響 `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a831cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a831e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a831ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a841c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00a841dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00a841e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a831cc ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a831cc ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00a831cc ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00a831d0 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00a831d0 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 00a831d0 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 00a831d4 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00a831d4 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 00a831d4 ["INT_ADD", "register:4000:8", ["register:4000:8", "const:8:8"]]
- 00a831d4 ["STORE", null, ["const:1b1:8", "register:4000:8", "tmp:1:8"]]
~~~


<a id="compare-b851bb855ea51f64943e5ef5c32b49cb"></a>

### [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md) → [`00a842c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a842c4.md) FUN_00a842c4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 75件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0062be1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062b/0062be1c.md) [`0062d408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062d/0062d408.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a8479c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8479c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 75件 [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0062c1cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062c/0062c1cc.md) [`0062d7b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062d/0062d7b8.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00a85790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85790.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 99.19% / 新版 99.19%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a83370",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8434c"
      ]
    ]
  ],
  "added": [
    [
      "00a84364",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8434c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a83354 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a83354 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 00a84348 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00a84348 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 00a83368 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a83368 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00a8435c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00a8435c ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 00a83370 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00a83370 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-3d2a7e55d596c180f1ea78afee59a9ee"></a>

### [`00a835f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a835f8.md) → [`00a845ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a845ec.md) FUN_00a845ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 55件 [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) [`005f46ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005f4/005f46ec.md) [`0060eb90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060eb90.md) [`0062b518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062b/0062b518.md) [`0062f2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0062f/0062f2c0.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00a82754`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82754.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 55件 [`005c80f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c80f0.md) [`005f4a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005f4/005f4a9c.md) [`0060ef40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060ef40.md) [`0062b8c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062b/0062b8c8.md) [`0062f670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0062f/0062f670.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00a83748`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83748.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a83708"
      ],
      [
        "FALL_THROUGH",
        "00a846fc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a846fc",
      "incomplete_value": true,
      "site": "00a84700",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a83708",
      "incomplete_value": true,
      "site": "00a8370c",
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
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:0:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a835f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a835fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a83600",
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
      "00a845ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "00a845f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a845f4",
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
- 00a835f8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 00a835f8 ["STORE", null, ["const:1b1:8", "register:8:8", "register:5100:8"]]
- 00a835fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a835fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a835fc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 00a835fc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a83600 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00a83600 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00a83600 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a83600 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-94658d456df458e6bf4ec6cd537a9f93"></a>

### [`00a8376c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8376c.md) → [`00a84760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a84760.md) FUN_00a84760

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0065cd0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065c/0065cd0c.md) [`0065d670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065d/0065d670.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0065d0bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065d/0065d0bc.md) [`0065da20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065d/0065da20.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 44.44% / 新版 44.44%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件, `unresolved_branch_alignment` 71件, `unresolved_call_alignment` 24件, `unresolved_store_alignment` 96件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a84d88",
      "incomplete_value": true,
      "site": "00a84d88",
      "value": [
        "live",
        "register:40d8:8"
      ]
    },
    "old": {
      "definition_site": "00a8394c",
      "incomplete_value": true,
      "site": "00a8394c",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 32,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a84bf8",
      "incomplete_value": true,
      "site": "00a84bf8",
      "value": [
        "live",
        "register:40e0:8"
      ]
    },
    "old": {
      "definition_site": "00a83d94",
      "incomplete_value": true,
      "site": "00a83d94",
      "value": [
        "live",
        "register:40d8:8"
      ]
    },
    "ordinal": 92,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a8391c",
      "incomplete_value": false,
      "site": "00a83924",
      "value": [
        "leaf",
        "const:50:8"
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
      "unmatched:00a838c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84b90"
      ]
    ],
    [
      "00a848d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84d58"
      ]
    ],
    [
      "unmatched:00a838ec",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a838fc"
      ]
    ]
  ],
  "added": [
    [
      "00a848b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84b90"
      ]
    ],
    [
      "00a848d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a84910"
      ]
    ],
    [
      "00a848e0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00a848f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a83924 ["INT_ADD", "register:40f0:8", ["const:a83924:8", "const:4:8"]]
- 00a83924 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a84d60 ["INT_ADD", "register:40f0:8", ["const:a84d60:8", "const:4:8"]]
+ 00a84d60 ["CALL", null, ["callee:00c58f30:8"]]
- 00a8394c ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00a8394c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00a84d88 ["COPY", "tmp:0:8", ["register:40d8:8"]]
+ 00a84d88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
- 00a83d94 ["COPY", "tmp:0:8", ["register:40d8:8"]]
- 00a83d94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
+ 00a84bf8 ["COPY", "tmp:0:8", ["register:40e0:8"]]
+ 00a84bf8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-3990f86fa702ae12c20a6730086b28a8"></a>

### [`00a843a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a843a8.md) → [`00a8539c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a8539c.md) FUN_00a8539c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00a82b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82b70.md) [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`00a83b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83b64.md) [`00a85450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85450.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a843f8 ["BRANCH", null, ["local:b10:8"]]
+ 00a853ec ["BRANCH", null, ["local:b11:8"]]
- 00a84404 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
+ 00a853f8 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
- 00a84418 ["INT_ADD", "register:40f0:8", ["const:a84418:8", "const:4:8"]]
- 00a84418 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a8540c ["INT_ADD", "register:40f0:8", ["const:a8540c:8", "const:4:8"]]
+ 00a8540c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-69877eeb723057417ed04f79447a2dee"></a>

### [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) → [`00a85450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85450.md) FUN_00a85450

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) · 呼出先 7件 [`008bbcb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008bb/008bbcb0.md) [`00a843a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a843a8.md) [`00a845f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a845f8.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)
- 新版 呼出元 1件 [`00a84190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a84190.md) · 呼出先 7件 [`008bcc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008bc/008bcc5c.md) [`00a8539c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a8539c.md) [`00a855ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a855ec.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.52% / 新版 82.52%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a8448c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a84494",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a8449c",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a85480",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "00a85488",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "00a85490",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a84484 ["INT_ADD", "tmp:0:8", ["register:40c0:8", "const:28:8"]]
- 00a84484 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00a84488 ["INT_LESSEQUAL", "register:105:1", ["register:4010:8", "register:4008:8"]]
- 00a84488 ["INT_SBORROW", "register:106:1", ["register:4008:8", "register:4010:8"]]
- 00a84488 ["INT_SUB", "tmp:0:8", ["register:4008:8", "register:4010:8"]]
- 00a84488 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00a8448c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00a8448c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00a8448c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-4c4fd58dca7f2a5534d64b4aebeae899"></a>

### [`00a845f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a845f8.md) → [`00a855ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a855ec.md) FUN_00a855ec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8445c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8445c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a85450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85450.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 93.48% / 新版 93.48%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a84674",
      "incomplete_value": false,
      "site": "00a84678",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "00a84670",
      "incomplete_value": true,
      "site": "00a84678",
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
      "unmatched:00a84664",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8561c"
      ]
    ]
  ],
  "added": [
    [
      "00a85658",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8561c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a84678 ["INT_ADD", "register:40f0:8", ["const:a84678:8", "const:4:8"]]
- 00a84678 ["CALL", null, ["callee:00c54d90:8"]]
+ 00a8566c ["INT_ADD", "register:40f0:8", ["const:a8566c:8", "const:4:8"]]
+ 00a8566c ["CALL", null, ["callee:00c54d90:8"]]
- 00a84630 ["INT_ADD", "register:40f0:8", ["const:a84630:8", "const:4:8"]]
- 00a84630 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a85624 ["INT_ADD", "register:40f0:8", ["const:a85624:8", "const:4:8"]]
+ 00a85624 ["CALL", null, ["callee:00c58f50:8"]]
- 00a8463c ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 00a85630 ["CBRANCH", null, ["local:b17:8", "register:101:1"]]
~~~


<a id="compare-3f3c3c533bcd4a887ed087cdc75f2d36"></a>

### [`00a846b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a846b0.md) → [`00a856a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a856a4.md) FUN_00a856a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8319c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a8319c.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a84190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a84190.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a846b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a846b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a846b8",
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
      "00a856a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "00a856a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00a856ac",
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
- 00a846b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a846b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a846b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 00a846b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a846b4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a846b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40c8:8"]]
- 00a846b8 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00a846b8 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00a846b8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a846b8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4a93f954fdcbf1f07ec734bbfa97b042"></a>

### [`00a8479c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a8479c.md) → [`00a85790`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85790.md) FUN_00a85790

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md) · 呼出先 4件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`00a842c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a842c4.md) · 呼出先 4件 [`00494970`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494970.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `call_argument_candidate` 4件, `return_value_candidate` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a857fc",
      "incomplete_value": true,
      "site": "00a85800",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a84808",
      "incomplete_value": true,
      "site": "00a8480c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a857f0",
      "incomplete_value": true,
      "site": "00a85800",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a84874",
      "incomplete_value": true,
      "site": "00a8487c",
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
            "const:8:8"
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
      "unmatched:00a847bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a857c4"
      ]
    ],
    [
      "unmatched:00a847c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a847c0"
      ]
    ],
    [
      "unmatched:00a847e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a857c8"
      ]
    ]
  ],
  "added": [
    [
      "00a857b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a857c4"
      ]
    ],
    [
      "00a857bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a857b4"
      ]
    ],
    [
      "00a857d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a857c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8480c ["INT_ADD", "register:40f0:8", ["const:a8480c:8", "const:4:8"]]
- 00a8480c ["CALL", null, ["callee:00494970:8"]]
+ 00a85800 ["INT_ADD", "register:40f0:8", ["const:a85800:8", "const:4:8"]]
+ 00a85800 ["CALL", null, ["callee:00494970:8"]]
- 00a8487c ["INT_ADD", "register:40f0:8", ["const:a8487c:8", "const:4:8"]]
- 00a8487c ["CALL", null, ["callee:00c54d90:8"]]
+ 00a85870 ["INT_ADD", "register:40f0:8", ["const:a85870:8", "const:4:8"]]
+ 00a85870 ["CALL", null, ["callee:00c54d90:8"]]
- 00a848b0 ["INT_ADD", "register:40f0:8", ["const:a848b0:8", "const:4:8"]]
- 00a848b0 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a858a4 ["INT_ADD", "register:40f0:8", ["const:a858a4:8", "const:4:8"]]
+ 00a858a4 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-460f1b77b8a286363a1bf2454581839a"></a>

### [`00a848d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a848d0.md) → [`00a858c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a858c4.md) _INIT_228

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 83.62% / 新版 83.62%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a85a20",
      "incomplete_value": true,
      "site": "00a85a24",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "00a85a10",
      "incomplete_value": true,
      "site": "00a85a24",
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
      "definition_site": "00a85a18",
      "incomplete_value": true,
      "site": "00a85a24",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a84900",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a8490c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a84928",
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
      "00a858f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a85900",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00a8591c",
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
- 00a84a30 ["INT_ADD", "register:40f0:8", ["const:a84a30:8", "const:4:8"]]
- 00a84a30 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a85a24 ["INT_ADD", "register:40f0:8", ["const:a85a24:8", "const:4:8"]]
+ 00a85a24 ["CALL", null, ["callee:0043bb58:8"]]
- 00a84b04 ["INT_ADD", "register:40f0:8", ["const:a84b04:8", "const:4:8"]]
- 00a84b04 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00a85af8 ["INT_ADD", "register:40f0:8", ["const:a85af8:8", "const:4:8"]]
+ 00a85af8 ["CALL", null, ["callee:00c58ed0:8"]]
- 00a848ec ["COPY", "tmp:0:8", ["const:8:8"]]
- 00a848ec ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00a848ec ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00a848ec ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-5dfc67246e0dc800531e38e6cb8ed24b"></a>

### [`00a84c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84c60.md) → [`00a85c54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85c54.md) FUN_00a85c54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`008876d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/008876d8.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`009de664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009de/009de664.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 3件 [`00888684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/00888684.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`009df610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009df/009df610.md) · 呼出先 1件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 81.82% / 新版 81.82%

~~~diff
- 00a84c68 ["INT_ADD", "register:40f0:8", ["const:a84c68:8", "const:4:8"]]
- 00a84c68 ["CALL", null, ["callee:008524fc:8"]]
+ 00a85c5c ["INT_ADD", "register:40f0:8", ["const:a85c5c:8", "const:4:8"]]
+ 00a85c5c ["CALL", null, ["callee:008524fc:8"]]
- 00a84c90 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4fe:8"]]
- 00a84c90 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00a84c90 ["INT_ZEXT", "register:4058:8", ["tmp:1:1"]]
- 00a84c94 ["INT_LEFT", "tmp:0:4", ["register:4050:4", "const:18:4"]]
- 00a84c94 ["INT_OR", "tmp:1:4", ["register:4048:4", "tmp:0:4"]]
- 00a84c94 ["INT_ZEXT", "register:4048:8", ["tmp:1:4"]]
~~~


<a id="compare-49d81b98b367e435da5513f808204b32"></a>

### [`00a84e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84e50.md) → [`00a85e44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85e44.md) FUN_00a85e44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0083f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083f/0083f8dc.md) · 呼出先 1件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md)
- 新版 呼出元 1件 [`00840888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00840/00840888.md) · 呼出先 1件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 00a84e8c ["INT_ADD", "register:40f0:8", ["const:a84e8c:8", "const:4:8"]]
- 00a84e8c ["CALL", null, ["callee:0048d1e4:8"]]
+ 00a85e80 ["INT_ADD", "register:40f0:8", ["const:a85e80:8", "const:4:8"]]
+ 00a85e80 ["CALL", null, ["callee:0048d1e4:8"]]
- 00a84eb4 ["INT_ADD", "register:40f0:8", ["const:a84eb4:8", "const:4:8"]]
- 00a84eb4 ["CALL", null, ["callee:0048d1e4:8"]]
+ 00a85ea8 ["INT_ADD", "register:40f0:8", ["const:a85ea8:8", "const:4:8"]]
+ 00a85ea8 ["CALL", null, ["callee:0048d1e4:8"]]
~~~


<a id="compare-70f8971a9059ca400988db96098be693"></a>

### [`00a84f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a84/00a84f18.md) → [`00a85f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a85/00a85f0c.md) FUN_00a85f0c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`00853cd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cd0.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`0087f3c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087f/0087f3c0.md) [`00a871e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a871e8.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0044b574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b574.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) [`00676af8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676af8.md)
- 新版 呼出元 4件 [`00854c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c7c.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) [`0088036c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00880/0088036c.md) [`00a881dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a88/00a881dc.md) · 呼出先 15件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0044b894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044b/0044b894.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00562094`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00562/00562094.md) [`00676ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676ea8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.32% / 新版 86.32%

優先判定に残った影響 `call_argument_candidate` 5件, `store_condition` 4件, `store_value` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a861a4",
      "incomplete_value": false,
      "site": "00a861a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a851b0",
      "incomplete_value": false,
      "site": "00a851b0",
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
            "const:3f0:8"
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a85ffc",
      "incomplete_value": true,
      "site": "00a8601c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:1438:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a86018",
      "incomplete_value": true,
      "site": "00a8601c",
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
            "const:1440:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a85024",
      "incomplete_value": true,
      "site": "00a85028",
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
            "const:1440:8"
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
      "unmatched:00a84f44",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a84f9c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048d1e4"
      ]
    ],
    [
      "unmatched:00a84fa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a85fac"
      ]
    ]
  ],
  "added": [
    [
      "00a85f38",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00a85f90",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048d1e4"
      ]
    ],
    [
      "00a85f9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a85fac"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a85028 ["INT_ADD", "register:40f0:8", ["const:a85028:8", "const:4:8"]]
- 00a85028 ["CALL", null, ["callee:00a8821c:8"]]
+ 00a8601c ["INT_ADD", "register:40f0:8", ["const:a8601c:8", "const:4:8"]]
+ 00a8601c ["CALL", null, ["callee:00a8821c:8"]]
- 00a850d4 ["INT_ADD", "register:40f0:8", ["const:a850d4:8", "const:4:8"]]
- 00a850d4 ["CALL", null, ["callee:0043bf04:8"]]
+ 00a860c8 ["INT_ADD", "register:40f0:8", ["const:a860c8:8", "const:4:8"]]
+ 00a860c8 ["CALL", null, ["callee:0043bf04:8"]]
- 00a85150 ["INT_ADD", "register:40f0:8", ["const:a85150:8", "const:4:8"]]
- 00a85150 ["CALL", null, ["callee:00c59010:8"]]
+ 00a86144 ["INT_ADD", "register:40f0:8", ["const:a86144:8", "const:4:8"]]
+ 00a86144 ["CALL", null, ["callee:00c59010:8"]]
~~~


<a id="compare-e11a1d4cbd80f061cfa46437ed48805a"></a>

### [`00a85304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a85/00a85304.md) → [`00a862f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a86/00a862f8.md) FUN_00a862f8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 25件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`00674b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00674/00674b70.md) [`006759ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/006759ec.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 25件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`00674f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00674/00674f20.md) [`00675d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00675/00675d9c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.10% / 新版 84.10%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 36件, `unresolved_call_alignment` 15件, `unresolved_store_alignment` 39件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a85cb0"
      ],
      [
        "FALL_THROUGH",
        "00a86ca4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a86ca4",
      "incomplete_value": true,
      "site": "00a86cbc",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "FLOAT_LESS",
            "1",
            [
              "FLOAT_SUB",
              [
                "leaf",
                "const:3ff0000000000000:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:1"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a85cb0",
      "incomplete_value": true,
      "site": "00a85cc8",
      "value": [
        "INT_NOTEQUAL",
        "1",
        [
          [
            "FLOAT_LESS",
            "1",
            [
              [
                "live",
                "register:5100:8"
              ],
              [
                "live",
                "register:5000:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:1"
          ]
        ]
      ]
    },
    "ordinal": 81,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a863d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a853f4"
      ]
    ],
    [
      "unmatched:00a853e4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a85418"
      ]
    ],
    [
      "unmatched:00a853f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00a85418"
      ]
    ]
  ],
  "added": [
    [
      "00a863d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a863e8"
      ]
    ],
    [
      "00a863d8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8640c"
      ]
    ],
    [
      "00a863e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8640c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8533c ["INT_ADD", "register:40f0:8", ["const:a8533c:8", "const:4:8"]]
- 00a8533c ["CALL", null, ["callee:0048d1e4:8"]]
+ 00a86330 ["INT_ADD", "register:40f0:8", ["const:a86330:8", "const:4:8"]]
+ 00a86330 ["CALL", null, ["callee:0048d1e4:8"]]
- 00a85360 ["BRANCH", null, ["local:b23:8"]]
+ 00a86354 ["BRANCH", null, ["local:b24:8"]]
- 00a85380 ["INT_ADD", "register:40f0:8", ["const:a85380:8", "const:4:8"]]
- 00a85380 ["CALL", null, ["callee:008524fc:8"]]
+ 00a86374 ["INT_ADD", "register:40f0:8", ["const:a86374:8", "const:4:8"]]
+ 00a86374 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a157c4a4af0a27f31b416d9eafd57bf5"></a>

### [`00a86d44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86d44.md) → [`00a87d38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a87/00a87d38.md) FUN_00a87d38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md) [`00480aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480aa4.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

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
      "definition_site": "00a86e14",
      "incomplete_value": false,
      "site": "00a86e1c",
      "value": [
        "leaf",
        "const:30:8"
      ]
    },
    "ordinal": 5,
    "slot": 1
  }
]
~~~


~~~diff
- 00a86e1c ["INT_ADD", "register:40f0:8", ["const:a86e1c:8", "const:4:8"]]
- 00a86e1c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a87e10 ["INT_ADD", "register:40f0:8", ["const:a87e10:8", "const:4:8"]]
+ 00a87e10 ["CALL", null, ["callee:00c58f30:8"]]
- 00a86d70 ["INT_ADD", "register:40f0:8", ["const:a86d70:8", "const:4:8"]]
- 00a86d70 ["CALL", null, ["callee:004804d8:8"]]
+ 00a87d64 ["INT_ADD", "register:40f0:8", ["const:a87d64:8", "const:4:8"]]
+ 00a87d64 ["CALL", null, ["callee:004804d8:8"]]
- 00a86d7c ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00a86d7c ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 00a87d70 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 00a87d70 ["CBRANCH", null, ["local:b15:8", "tmp:0:1"]]
~~~


<a id="compare-f93dc9a190456c28aa1e3a56b92537bd"></a>

### [`00a86e74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86e74.md) → [`00a87e68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a87/00a87e68.md) FUN_00a87e68

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 1件 [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 1件 [`004813f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00481/004813f8.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a86e84",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004813f8"
      ]
    ]
  ],
  "added": [
    [
      "00a87e78",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "004813f8"
      ]
    ]
  ]
}
~~~


<a id="compare-99d85a93de0abf370ea74850e9329d34"></a>

### [`00a86e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86e88.md) → [`00a87e7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a87/00a87e7c.md) FUN_00a87e7c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 1件 [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 1件 [`00480aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480aa4.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00a86ea4"
      ],
      [
        "FALL_THROUGH",
        "00a87e98"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00a87e98",
      "incomplete_value": true,
      "site": "00a87ea4",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "FLOAT_EQUAL",
            "1",
            [
              [
                "live",
                "register:5000:8"
              ],
              "INT2FLOAT"
            ]
          ],
          [
            "INT_NOTEQUAL",
            "1",
            [
              "FLOAT_LESS",
              [
                "leaf",
                "const:0:1"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a86ea4",
      "incomplete_value": true,
      "site": "00a86eb0",
      "value": [
        "BOOL_OR",
        "1",
        [
          [
            "live",
            "register:101:1"
          ],
          [
            "INT_NOTEQUAL",
            "1",
            [
              [
                "live",
                "register:100:1"
              ],
              [
                "live",
                "register:103:1"
              ]
            ]
          ]
        ]
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
      "unmatched:00a86e8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a86ea4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a87ea8"
      ]
    ]
  ],
  "added": [
    [
      "00a87e80",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a87e98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a87ea8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a86e8c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a86e8c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00a86e9c ["INT_ADD", "register:40f0:8", ["const:a86e9c:8", "const:4:8"]]
- 00a86e9c ["CALL", null, ["callee:00480aa4:8"]]
+ 00a87e90 ["INT_ADD", "register:40f0:8", ["const:a87e90:8", "const:4:8"]]
+ 00a87e90 ["CALL", null, ["callee:00480aa4:8"]]
- 00a86ea0 ["INT2FLOAT", "tmp:0:8", ["const:0:8"]]
- 00a86ea0 ["COPY", "register:100:1", ["const:0:1"]]
- 00a86ea0 ["COPY", "register:101:1", ["const:0:1"]]
- 00a86ea0 ["COPY", "register:102:1", ["const:1:1"]]
+ 00a87e94 ["INT2FLOAT", "tmp:0:8", ["const:0:8"]]
+ 00a87e94 ["COPY", "register:100:1", ["const:0:1"]]
+ 00a87e94 ["COPY", "register:101:1", ["const:0:1"]]
+ 00a87e94 ["COPY", "register:102:1", ["const:1:1"]]
~~~


<a id="compare-fb670e9660d0e7307296e17036f64cb8"></a>

### [`00a86ed4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86ed4.md) → [`00a87ec8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a87/00a87ec8.md) FUN_00a87ec8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 1件 [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 1件 [`00480aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480aa4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a86ed4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a86ed8",
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
      "00a87ec8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a87ecc",
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
- 00a86ed4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a86ed4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a86ed4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00a86ed4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a86ed8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a86ed8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00a86edc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-412589ad9b2ba61f92960746024f2514"></a>

### [`00a86f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a86/00a86f0c.md) → [`00a87f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a87/00a87f00.md) FUN_00a87f00

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a8767c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a8767c.md) · 呼出先 9件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00596d50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596d50.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a068a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a068a4.md)
- 新版 呼出元 1件 [`00a88670`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a88/00a88670.md) · 呼出先 9件 [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`00597070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597070.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a07850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07850.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.09% / 新版 98.09%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a87fcc",
      "incomplete_value": true,
      "site": "00a87fcc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:7ad:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a86fd8",
      "incomplete_value": true,
      "site": "00a86fd8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00a87fbc",
      "READ",
      [
        "storage",
        "002bd6cf",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a87fbc",
      "READ",
      [
        "storage",
        "002bd7ad",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a86f40 ["INT_ADD", "register:40f0:8", ["const:a86f40:8", "const:4:8"]]
- 00a86f40 ["CALL", null, ["callee:00597070:8"]]
+ 00a87f34 ["INT_ADD", "register:40f0:8", ["const:a87f34:8", "const:4:8"]]
+ 00a87f34 ["CALL", null, ["callee:00597070:8"]]
- 00a86f84 ["INT_ADD", "register:40f0:8", ["const:a86f84:8", "const:4:8"]]
- 00a86f84 ["CALL", null, ["callee:004413ec:8"]]
+ 00a87f78 ["INT_ADD", "register:40f0:8", ["const:a87f78:8", "const:4:8"]]
+ 00a87f78 ["CALL", null, ["callee:004413ec:8"]]
- 00a86fa0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00a86fa0 ["INT_ADD", "register:40f0:8", ["const:a86fa0:8", "const:4:8"]]
- 00a86fa0 ["CALLIND", null, ["register:0:8"]]
+ 00a87f94 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00a87f94 ["INT_ADD", "register:40f0:8", ["const:a87f94:8", "const:4:8"]]
+ 00a87f94 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-6d2e86a005e2302a06c3de898445f5b8"></a>

### [`00a8762c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a8762c.md) → [`00a88620`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a88/00a88620.md) FUN_00a88620

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
      "definition_site": "00a88644",
      "incomplete_value": false,
      "site": "00a88644",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a87650",
      "incomplete_value": false,
      "site": "00a87650",
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
            "const:3f0:8"
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
      "00a88644",
      "DATA",
      [
        "storage",
        "00c8c3f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a88644",
      "DATA",
      [
        "storage",
        "00c8d3c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a87640 ["INT_ADD", "register:40f0:8", ["const:a87640:8", "const:4:8"]]
- 00a87640 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a88634 ["INT_ADD", "register:40f0:8", ["const:a88634:8", "const:4:8"]]
+ 00a88634 ["CALL", null, ["callee:00c58f30:8"]]
- 00a87648 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a8863c ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a8764c ["COPY", "tmp:0:8", ["const:3f0:8"]]
- 00a8764c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a8764c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a8764c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a88640 ["COPY", "tmp:0:8", ["const:3c0:8"]]
+ 00a88640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a88640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a88640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f4b44880354263df0afa7eff29150856"></a>

### [`00a87660`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a87660.md) → [`00a88654`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a88/00a88654.md) FUN_00a88654

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
      "definition_site": "00a88660",
      "incomplete_value": false,
      "site": "00a88660",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:3c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8766c",
      "incomplete_value": false,
      "site": "00a8766c",
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
      "00a88660",
      "DATA",
      [
        "storage",
        "00c8c3f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a88660",
      "DATA",
      [
        "storage",
        "00c8d3c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a87664 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a88658 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a87668 ["COPY", "tmp:0:8", ["const:3f0:8"]]
- 00a87668 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a87668 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a87668 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a8865c ["COPY", "tmp:0:8", ["const:3c0:8"]]
+ 00a8865c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a8865c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a8865c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-06032e3679f6763849cd7c0d5e7beced"></a>

### [`00a877b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a87/00a877b0.md) → [`00a887a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a88/00a887a4.md) _INIT_229

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
      "definition_site": "00a887e0",
      "incomplete_value": true,
      "site": "00a887fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a877ec",
      "incomplete_value": true,
      "site": "00a87808",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a88804",
      "incomplete_value": true,
      "site": "00a88820",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a87810",
      "incomplete_value": true,
      "site": "00a8782c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a88824",
      "incomplete_value": true,
      "site": "00a88840",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00a87830",
      "incomplete_value": true,
      "site": "00a8784c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00a887e0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00a88804",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00a88824",
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
      "00a887e0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00a88804",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00a88824",
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
- 00a87910 ["INT_ADD", "register:40f0:8", ["const:a87910:8", "const:4:8"]]
- 00a87910 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a88904 ["INT_ADD", "register:40f0:8", ["const:a88904:8", "const:4:8"]]
+ 00a88904 ["CALL", null, ["callee:0043bb58:8"]]
- 00a879e4 ["INT_ADD", "register:40f0:8", ["const:a879e4:8", "const:4:8"]]
- 00a879e4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00a889d8 ["INT_ADD", "register:40f0:8", ["const:a889d8:8", "const:4:8"]]
+ 00a889d8 ["CALL", null, ["callee:00c58ed0:8"]]
- 00a877d8 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00a887cc ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-d8c6cb0012e74dca200219c29310a9fb"></a>

### [`00a897b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a897b0.md) → [`00a8a7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8a/00a8a7a4.md) _INIT_230

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.27% / 新版 76.27%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a898fc",
      "incomplete_value": true,
      "site": "00a89910",
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
    "new": null,
    "old": {
      "definition_site": "00a89904",
      "incomplete_value": true,
      "site": "00a89910",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a8a958",
      "incomplete_value": true,
      "site": "00a8a968",
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
      "unmatched:00a897b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a897b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a897bc",
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
      "00a8a7a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a8a7ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a8a7b0",
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
- 00a89910 ["INT_ADD", "register:40f0:8", ["const:a89910:8", "const:4:8"]]
- 00a89910 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a8a904 ["INT_ADD", "register:40f0:8", ["const:a8a904:8", "const:4:8"]]
+ 00a8a904 ["CALL", null, ["callee:0043bb58:8"]]
- 00a89974 ["INT_ADD", "register:40f0:8", ["const:a89974:8", "const:4:8"]]
- 00a89974 ["CALL", null, ["callee:0043bb58:8"]]
+ 00a8a968 ["INT_ADD", "register:40f0:8", ["const:a8a968:8", "const:4:8"]]
+ 00a8a968 ["CALL", null, ["callee:0043bb58:8"]]
- 00a899e4 ["INT_ADD", "register:40f0:8", ["const:a899e4:8", "const:4:8"]]
- 00a899e4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00a8a9d8 ["INT_ADD", "register:40f0:8", ["const:a8a9d8:8", "const:4:8"]]
+ 00a8a9d8 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-3c4e8323f1311a9a062cc91ff6b7bc6e"></a>

### [`00a89b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89b40.md) → [`00a8ab34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8a/00a8ab34.md) FUN_00a8ab34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 7件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f95c.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`0069ec74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ec74.md) [`00839b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00839/00839b70.md)
- 新版 呼出元 2件 [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 7件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043fc7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043fc7c.md) [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`0069f024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f024.md) [`0083ab1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083a/0083ab1c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a89b7c",
      "incomplete_value": true,
      "site": "00a89b84",
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
            "register:40a8:8"
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
      "definition_site": "00a8ab7c",
      "incomplete_value": true,
      "site": "00a8ab84",
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
            "register:40a8:8"
          ]
        ]
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
      "definition_site": "00a8ab80",
      "incomplete_value": false,
      "site": "00a8ab84",
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
      "unmatched:00a89b40",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89b44",
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
      "00a8ab34",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a8ab38",
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
- 00a89b84 ["INT_ADD", "register:40f0:8", ["const:a89b84:8", "const:4:8"]]
- 00a89b84 ["CALL", null, ["callee:0069f024:8"]]
+ 00a8ab78 ["INT_ADD", "register:40f0:8", ["const:a8ab78:8", "const:4:8"]]
+ 00a8ab78 ["CALL", null, ["callee:0069f024:8"]]
- 00a89b90 ["INT_ADD", "register:40f0:8", ["const:a89b90:8", "const:4:8"]]
- 00a89b90 ["CALL", null, ["callee:0069a90c:8"]]
+ 00a8ab84 ["INT_ADD", "register:40f0:8", ["const:a8ab84:8", "const:4:8"]]
+ 00a8ab84 ["CALL", null, ["callee:0069a90c:8"]]
- 00a89ba0 ["INT_ADD", "register:40f0:8", ["const:a89ba0:8", "const:4:8"]]
- 00a89ba0 ["CALL", null, ["callee:0069f024:8"]]
+ 00a8ab94 ["INT_ADD", "register:40f0:8", ["const:a8ab94:8", "const:4:8"]]
+ 00a8ab94 ["CALL", null, ["callee:0069f024:8"]]
~~~


<a id="compare-ffe7de86f95eb1946f1161c01db10e5f"></a>

### [`00a89bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89bcc.md) → [`00a8abc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8a/00a8abc0.md) FUN_00a8abc0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 3件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) [`00a992a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a992a8.md) [`00a9aa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9aa9c.md) · 呼出先 17件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cb9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb9c.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md)
- 新版 呼出元 3件 [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) [`00a9a29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a29c.md) [`00a9ba90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9ba90.md) · 呼出先 17件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cebc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cebc.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`008b7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f14.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 58.75% / 新版 58.75%

優先判定に残った影響 `call_argument_candidate` 10件, `store_value` 3件, `unresolved_branch_alignment` 18件, `unresolved_call_alignment` 34件, `unresolved_store_alignment` 36件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8b1f4",
      "incomplete_value": false,
      "site": "00a8b1f8",
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
                "const:c8c000:8"
              ],
              [
                "leaf",
                "const:840:8"
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
      "definition_site": "00a8a200",
      "incomplete_value": false,
      "site": "00a8a204",
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
                "const:c8b000:8"
              ],
              [
                "leaf",
                "const:870:8"
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
    "ordinal": 59,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8b25c",
      "incomplete_value": false,
      "site": "00a8b25c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8a268",
      "incomplete_value": false,
      "site": "00a8a268",
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
            "const:488:8"
          ]
        ]
      ]
    },
    "ordinal": 64,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8b304",
      "incomplete_value": false,
      "site": "00a8b308",
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
                "const:c8c000:8"
              ],
              [
                "leaf",
                "const:840:8"
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
      "definition_site": "00a8a310",
      "incomplete_value": false,
      "site": "00a8a314",
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
                "const:c8b000:8"
              ],
              [
                "leaf",
                "const:870:8"
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
      "unmatched:00a89be0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89be4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a89c0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a8abd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a8abd8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a8ac00",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a89c1c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00a89c1c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00a8ac10 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00a8ac10 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00a89c34 ["INT_ADD", "register:40f0:8", ["const:a89c34:8", "const:4:8"]]
- 00a89c34 ["CALL", null, ["callee:00c596b0:8"]]
+ 00a8ac28 ["INT_ADD", "register:40f0:8", ["const:a8ac28:8", "const:4:8"]]
+ 00a8ac28 ["CALL", null, ["callee:00c596b0:8"]]
- 00a89c4c ["INT_ADD", "register:40f0:8", ["const:a89c4c:8", "const:4:8"]]
- 00a89c4c ["CALL", null, ["callee:0048a2ac:8"]]
+ 00a8ac40 ["INT_ADD", "register:40f0:8", ["const:a8ac40:8", "const:4:8"]]
+ 00a8ac40 ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-e1221f9a6dba303823e1450321fdcc14"></a>

### [`00a8dd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8dd6c.md) → [`00a8ed60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8e/00a8ed60.md) FUN_00a8ed60

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 7件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00768430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768430.md) [`00a91b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91b68.md) [`00a91e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91e80.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 2件 [`00852a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/00852a10.md) [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 7件 [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0076880c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/0076880c.md) [`00a92b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a92b5c.md) [`00a92e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a92e74.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 57.45% / 新版 57.45%

優先判定に残った影響 `call_argument_candidate` 6件, `call_target` 1件, `store_destination` 7件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a8edf0",
      "incomplete_value": false,
      "site": "00a8edf0",
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
      "definition_site": "00a8ddfc",
      "incomplete_value": false,
      "site": "00a8ddfc",
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
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00a8edf4",
      "incomplete_value": false,
      "site": "00a8edf4",
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
      "definition_site": "00a8de00",
      "incomplete_value": false,
      "site": "00a8de00",
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
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8edf0",
      "incomplete_value": false,
      "site": "00a8edf4",
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
      "definition_site": "00a8ddfc",
      "incomplete_value": false,
      "site": "00a8de00",
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
      "00a8ed70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "00a8ed88",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00a8ed9c",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00a8ed70",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076880c"
      ]
    ],
    [
      "00a8ed88",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00a8ed9c",
      "PARAM",
      [
        "storage",
        "00ca5fc0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8dd7c ["INT_ADD", "register:40f0:8", ["const:a8dd7c:8", "const:4:8"]]
- 00a8dd7c ["CALL", null, ["ram:768430:8"]]
+ 00a8ed70 ["INT_ADD", "register:40f0:8", ["const:a8ed70:8", "const:4:8"]]
+ 00a8ed70 ["CALL", null, ["ram:76880c:8"]]
- 00a8ddac ["INT_ADD", "register:40f0:8", ["const:a8ddac:8", "const:4:8"]]
- 00a8ddac ["CALL", null, ["callee:00a92b5c:8"]]
+ 00a8eda0 ["INT_ADD", "register:40f0:8", ["const:a8eda0:8", "const:4:8"]]
+ 00a8eda0 ["CALL", null, ["callee:00a92b5c:8"]]
- 00a8ddd8 ["INT_ADD", "register:40f0:8", ["const:a8ddd8:8", "const:4:8"]]
- 00a8ddd8 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00a8edcc ["INT_ADD", "register:40f0:8", ["const:a8edcc:8", "const:4:8"]]
+ 00a8edcc ["CALL", null, ["callee:00c58ef0:8"]]
~~~


<a id="compare-e667efdb898ef2f3c270cc407eaa1195"></a>

### [`00a8de28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8de28.md) → [`00a8ee1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8e/00a8ee1c.md) FUN_00a8ee1c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md)
- 新版 呼出元 1件 [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 24件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0046ce6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce6c.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048ae90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae90.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 73.31% / 新版 73.31%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 13件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8f238",
      "incomplete_value": true,
      "site": "00a8f238",
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
      "definition_site": "00a8e244",
      "incomplete_value": true,
      "site": "00a8e244",
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
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a8f0ac",
      "incomplete_value": true,
      "site": "00a8f0b0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a8e0b8",
      "incomplete_value": true,
      "site": "00a8e0bc",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 24,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a8de60",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00a8de64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8f350"
      ]
    ],
    [
      "unmatched:00a8de6c",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00a8ee54",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00a8ee58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a8f350"
      ]
    ],
    [
      "00a8ee60",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8e0bc ["INT_ADD", "register:40f0:8", ["const:a8e0bc:8", "const:4:8"]]
- 00a8e0bc ["CALL", null, ["callee:0048ae90:8"]]
+ 00a8f0b0 ["INT_ADD", "register:40f0:8", ["const:a8f0b0:8", "const:4:8"]]
+ 00a8f0b0 ["CALL", null, ["callee:0048ae90:8"]]
- 00a8de5c ["COPY", "tmp:0:8", ["const:38:8"]]
- 00a8de5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a8de5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a8de5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a8de60 ["LOAD", "tmp:0:1", ["const:1b1:8", "register:4040:8"]]
- 00a8de60 ["INT_ZEXT", "register:4040:8", ["tmp:0:1"]]
~~~


<a id="compare-8da1876b5a06f176e379aa1c4ee3139a"></a>

### [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) → [`00a8f618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8f/00a8f618.md) FUN_00a8f618

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 75件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 75件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.93% / 新版 75.93%

優先判定に残った影響 `call_argument_candidate` 31件, `call_target` 10件, `store_condition` 4件, `store_value` 7件, `unresolved_branch_alignment` 58件, `unresolved_call_alignment` 85件, `unresolved_store_alignment` 54件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a8fbdc",
      "incomplete_value": false,
      "site": "00a8fbdc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:f88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8ebe8",
      "incomplete_value": false,
      "site": "00a8ebe8",
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
            "const:fb8:8"
          ]
        ]
      ]
    },
    "ordinal": 44,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9003c",
      "incomplete_value": true,
      "site": "00a90040",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8f048",
      "incomplete_value": true,
      "site": "00a8f04c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 93,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9003c",
      "incomplete_value": true,
      "site": "00a90040",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a8f048",
      "incomplete_value": true,
      "site": "00a8f04c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:40:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 94,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a8f654",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a8f668",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a8f670",
      "PARAM",
      [
        "storage",
        "00c8c460",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a8f654",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00a8f668",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a8f670",
      "PARAM",
      [
        "storage",
        "00c8d430",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a8e684 ["INT_ADD", "register:40f0:8", ["const:a8e684:8", "const:4:8"]]
- 00a8e684 ["CALL", null, ["callee:00c596b0:8"]]
+ 00a8f678 ["INT_ADD", "register:40f0:8", ["const:a8f678:8", "const:4:8"]]
+ 00a8f678 ["CALL", null, ["callee:00c596b0:8"]]
- 00a8e7d0 ["INT_ADD", "register:40f0:8", ["const:a8e7d0:8", "const:4:8"]]
- 00a8e7d0 ["CALL", null, ["ram:768420:8"]]
+ 00a8f7c4 ["INT_ADD", "register:40f0:8", ["const:a8f7c4:8", "const:4:8"]]
+ 00a8f7c4 ["CALL", null, ["ram:7687fc:8"]]
- 00a8e7ec ["INT_ADD", "register:40f0:8", ["const:a8e7ec:8", "const:4:8"]]
- 00a8e7ec ["CALL", null, ["callee:008b89cc:8"]]
+ 00a8f7e0 ["INT_ADD", "register:40f0:8", ["const:a8f7e0:8", "const:4:8"]]
+ 00a8f7e0 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-1068c86a3615f0b76773b6c6d0e15bae"></a>

### [`00a915b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a915b0.md) → [`00a925a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a925a4.md) FUN_00a925a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) · 呼出先 3件 [`007685fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/007685fc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`00a8f618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8f/00a8f618.md) · 呼出先 3件 [`007689d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007689d8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

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
      "site": "00a925c4",
      "value": [
        "leaf",
        "ram:7689d8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a915d0",
      "value": [
        "leaf",
        "ram:7685fc:8"
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
      "00a925c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007685fc"
      ]
    ]
  ],
  "added": [
    [
      "00a925c4",
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
- 00a915d0 ["INT_ADD", "register:40f0:8", ["const:a915d0:8", "const:4:8"]]
- 00a915d0 ["CALL", null, ["ram:7685fc:8"]]
+ 00a925c4 ["INT_ADD", "register:40f0:8", ["const:a925c4:8", "const:4:8"]]
+ 00a925c4 ["CALL", null, ["ram:7689d8:8"]]
- 00a915e8 ["INT_ADD", "register:40f0:8", ["const:a915e8:8", "const:4:8"]]
- 00a915e8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00a925dc ["INT_ADD", "register:40f0:8", ["const:a925dc:8", "const:4:8"]]
+ 00a925dc ["CALL", null, ["callee:00c58f50:8"]]
- 00a91614 ["INT_ADD", "register:40f0:8", ["const:a91614:8", "const:4:8"]]
- 00a91614 ["CALL", null, ["callee:00c58f80:8"]]
+ 00a92608 ["INT_ADD", "register:40f0:8", ["const:a92608:8", "const:4:8"]]
+ 00a92608 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-64578c707ce3b28353033a1ddd822622"></a>

### [`00a91618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91618.md) → [`00a9260c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a9260c.md) FUN_00a9260c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md) [`00744294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744294.md) [`00745a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00745/00745a7c.md)
- 新版 呼出元 1件 [`00a8f618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8f/00a8f618.md) · 呼出先 10件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`004939f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/004939f0.md) [`00744644`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00744/00744644.md) [`00745e2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00745/00745e2c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.00% / 新版 94.00%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92680",
      "incomplete_value": true,
      "site": "00a92680",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:384:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9168c",
      "incomplete_value": true,
      "site": "00a9168c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:33a:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a926cc",
      "incomplete_value": false,
      "site": "00a926cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
          ],
          [
            "leaf",
            "const:88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a916d8",
      "incomplete_value": false,
      "site": "00a916d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:b8:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a92658",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a91664",
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
      "00a92638",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "00a92650",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "00a92658",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00a92638",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "00a92650",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "00a92658",
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
- 00a91664 ["INT_ADD", "register:40f0:8", ["const:a91664:8", "const:4:8"]]
- 00a91664 ["CALL", null, ["ram:48cd38:8"]]
+ 00a92658 ["INT_ADD", "register:40f0:8", ["const:a92658:8", "const:4:8"]]
+ 00a92658 ["CALL", null, ["ram:48d058:8"]]
- 00a91670 ["COPY", "tmp:0:8", ["const:33a:8"]]
- 00a91670 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a91670 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a91670 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a92664 ["COPY", "tmp:0:8", ["const:384:8"]]
+ 00a92664 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a92664 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a92664 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00a91698 ["INT_ADD", "register:40f0:8", ["const:a91698:8", "const:4:8"]]
- 00a91698 ["CALL", null, ["callee:0048d1b4:8"]]
+ 00a9268c ["INT_ADD", "register:40f0:8", ["const:a9268c:8", "const:4:8"]]
+ 00a9268c ["CALL", null, ["callee:0048d1b4:8"]]
~~~


<a id="compare-2fc17c5984d39cf19587a45e05cf721f"></a>

### [`00a91824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91824.md) → [`00a92818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a92818.md) FUN_00a92818

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a8e624`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8e/00a8e624.md) · 呼出先 10件 [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`004936d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/004936d0.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`009ae2c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009ae/009ae2c0.md)
- 新版 呼出元 1件 [`00a8f618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8f/00a8f618.md) · 呼出先 10件 [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`004939f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/004939f0.md) [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md) [`009af26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009af/009af26c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.39% / 新版 94.39%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a92890",
      "incomplete_value": true,
      "site": "00a92890",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:384:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9189c",
      "incomplete_value": true,
      "site": "00a9189c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2c1000:8"
              ],
              [
                "leaf",
                "const:33a:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a928d8",
      "incomplete_value": false,
      "site": "00a928d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8e000:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a918e4",
      "incomplete_value": false,
      "site": "00a918e4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:38:8"
          ]
        ]
      ]
    },
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a92868",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a91874",
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
      "00a92848",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "00a92858",
      "DATA",
      [
        "storage",
        "0039b1d8",
        "fde_0039b1d8",
        "dword"
      ]
    ],
    [
      "00a92868",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00a92848",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "00a92858",
      "DATA",
      [
        "storage",
        "0039b1d8",
        null,
        "dword"
      ]
    ],
    [
      "00a92868",
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
- 00a91874 ["INT_ADD", "register:40f0:8", ["const:a91874:8", "const:4:8"]]
- 00a91874 ["CALL", null, ["ram:48cd38:8"]]
+ 00a92868 ["INT_ADD", "register:40f0:8", ["const:a92868:8", "const:4:8"]]
+ 00a92868 ["CALL", null, ["ram:48d058:8"]]
- 00a91880 ["COPY", "tmp:0:8", ["const:33a:8"]]
- 00a91880 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a91880 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a91880 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a92874 ["COPY", "tmp:0:8", ["const:384:8"]]
+ 00a92874 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a92874 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a92874 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00a918a8 ["INT_ADD", "register:40f0:8", ["const:a918a8:8", "const:4:8"]]
- 00a918a8 ["CALL", null, ["callee:0048d1b4:8"]]
+ 00a9289c ["INT_ADD", "register:40f0:8", ["const:a9289c:8", "const:4:8"]]
+ 00a9289c ["CALL", null, ["callee:0048d1b4:8"]]
~~~


<a id="compare-aefd4537ce9885a3a3d9a4588a58d820"></a>

### [`00a91a4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91a4c.md) → [`00a92a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a92a40.md) FUN_00a92a40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d7bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d7/009d7bd0.md) · 呼出先 4件 [`00a9ae40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae40.md) [`00a9ae44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae44.md) [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`009d8b7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d8/009d8b7c.md) · 呼出先 4件 [`00a9be34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9be34.md) [`00a9be38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9be38.md) [`00a9be3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9be3c.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.54% / 新版 86.54%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a91a88",
      "DATA",
      [
        "storage",
        "00c8cfb8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a91a88",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a91ac8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a92ad4"
      ]
    ]
  ],
  "added": [
    [
      "00a92a7c",
      "DATA",
      [
        "storage",
        "00c8df88",
        null,
        "undefined *"
      ]
    ],
    [
      "00a92a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00a92abc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a92ad4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a91a78 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00a91a78 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00a91a78 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00a91a78 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 00a92a6c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00a92a6c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00a92a6c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00a92a6c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00a91a7c ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a92a70 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a91a80 ["COPY", "tmp:0:8", ["const:fb8:8"]]
- 00a91a80 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a91a80 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a91a80 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-dee1607266e1f2f85c865aef5c348c95"></a>

### [`00a91b68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91b68.md) → [`00a92b5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a92b5c.md) FUN_00a92b5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8dd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8dd6c.md) · 呼出先 7件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`00a8ed60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8e/00a8ed60.md) · 呼出先 7件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`00598228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598228.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.68% / 新版 71.68%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 15件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a91b78",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a91b90",
      "READ",
      [
        "storage",
        "002b32c2",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a91ba0",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00a92b6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a92b84",
      "READ",
      [
        "storage",
        "002b330c",
        null,
        "string"
      ]
    ],
    [
      "00a92b94",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00a91b78 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00a91b78 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00a91b78 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 00a91b78 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a91b7c ["COPY", "tmp:0:8", ["const:50:8"]]
- 00a91b7c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00a91b7c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00a91b7c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 00a91b80 ["COPY", "register:40b0:8", ["register:1660:8"]]
~~~


<a id="compare-4aea525a282f0d82413026766f880275"></a>

### [`00a91e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a91/00a91e80.md) → [`00a92e74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a92/00a92e74.md) FUN_00a92e74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8dd6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8d/00a8dd6c.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`0048ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab78.md)
- 新版 呼出元 1件 [`00a8ed60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8e/00a8ed60.md) · 呼出先 24件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0046ce6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce6c.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0048ae90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae90.md) [`0048ae98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae98.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.50% / 新版 91.50%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 4件, `store_value` 4件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 10件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a93274",
      "incomplete_value": true,
      "site": "00a93278",
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
      "definition_site": "00a92280",
      "incomplete_value": true,
      "site": "00a92284",
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
    "ordinal": 51,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9333c",
      "incomplete_value": true,
      "site": "00a93340",
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
      "definition_site": "00a92348",
      "incomplete_value": true,
      "site": "00a9234c",
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
    "ordinal": 57,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a93438",
      "incomplete_value": true,
      "site": "00a9343c",
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
      "definition_site": "00a92444",
      "incomplete_value": true,
      "site": "00a92448",
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
    "ordinal": 64,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a91ec4",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a91ec8",
      "READ",
      [
        "storage",
        "002bf5bf",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a91ecc",
      "READ",
      [
        "storage",
        "002bf5c4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a92eb8",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "00a92ebc",
      "READ",
      [
        "storage",
        "002bf69d",
        null,
        "string"
      ]
    ],
    [
      "00a92ec0",
      "READ",
      [
        "storage",
        "002bf6a2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a920e4 ["INT_ADD", "register:40f0:8", ["const:a920e4:8", "const:4:8"]]
- 00a920e4 ["CALL", null, ["callee:0046ce6c:8"]]
+ 00a930d8 ["INT_ADD", "register:40f0:8", ["const:a930d8:8", "const:4:8"]]
+ 00a930d8 ["CALL", null, ["callee:0046ce6c:8"]]
- 00a92128 ["INT_ADD", "register:40f0:8", ["const:a92128:8", "const:4:8"]]
- 00a92128 ["CALL", null, ["callee:00c54d60:8"]]
+ 00a9311c ["INT_ADD", "register:40f0:8", ["const:a9311c:8", "const:4:8"]]
+ 00a9311c ["CALL", null, ["callee:00c54d60:8"]]
- 00a92150 ["INT_ADD", "register:40f0:8", ["const:a92150:8", "const:4:8"]]
- 00a92150 ["CALL", null, ["callee:0048ae98:8"]]
+ 00a93144 ["INT_ADD", "register:40f0:8", ["const:a93144:8", "const:4:8"]]
+ 00a93144 ["CALL", null, ["callee:0048ae98:8"]]
~~~


<a id="compare-2602e3ea9a6bedf70e26c13a92b59d43"></a>

### [`00a9286c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a9286c.md) → [`00a93860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a93/00a93860.md) FUN_00a93860

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00a9b294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b294.md) [`00a9b39c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9b/00a9b39c.md) · 呼出先 10件 [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00a46934`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46934.md) [`00a46944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46944.md)
- 新版 呼出元 2件 [`00a9c288`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9c/00a9c288.md) [`00a9c390`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9c/00a9c390.md) · 呼出先 10件 [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`00a47928`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47928.md) [`00a47938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47938.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.78% / 新版 92.78%

優先判定に残った影響 `unresolved_store_alignment` 9件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a92870",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a92874",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a92878",
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
      "00a93864",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00a93868",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a9386c",
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
- 00a9286c ["INT_SUB", "register:8:8", ["register:8:8", "const:60:8"]]
- 00a92870 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a92870 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a92870 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a92870 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00a92874 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00a92874 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00a92874 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 00a92874 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-594877b83e4f4e5810d029217e14fe86"></a>

### [`00a92ba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a92ba8.md) → [`00a93b9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a93/00a93b9c.md) FUN_00a93b9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) [`00a92db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a92db8.md) · 呼出先 9件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`0046cb4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb4c.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`0048ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab78.md) [`00768420`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00768/00768420.md)
- 新版 呼出元 2件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) [`00a93dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a93/00a93dac.md) · 呼出先 9件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`0046ce6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce6c.md) [`0048ae90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae90.md) [`0048ae98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae98.md) [`007687fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00768/007687fc.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.67% / 新版 96.67%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a93bb0",
      "value": [
        "leaf",
        "ram:7687fc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a92bbc",
      "value": [
        "leaf",
        "ram:768420:8"
      ]
    },
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00a93c10",
      "incomplete_value": false,
      "site": "00a93c14",
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
            "const:d30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a92c1c",
      "incomplete_value": false,
      "site": "00a92c20",
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
            "const:d70:8"
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
      "00a93bb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768420"
      ]
    ],
    [
      "00a93c10",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00a93bb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007687fc"
      ]
    ],
    [
      "00a93c10",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a92bbc ["INT_ADD", "register:40f0:8", ["const:a92bbc:8", "const:4:8"]]
- 00a92bbc ["CALL", null, ["ram:768420:8"]]
+ 00a93bb0 ["INT_ADD", "register:40f0:8", ["const:a93bb0:8", "const:4:8"]]
+ 00a93bb0 ["CALL", null, ["ram:7687fc:8"]]
- 00a92c20 ["INT_ADD", "register:40f0:8", ["const:a92c20:8", "const:4:8"]]
- 00a92c20 ["CALL", null, ["callee:0046ce6c:8"]]
+ 00a93c14 ["INT_ADD", "register:40f0:8", ["const:a93c14:8", "const:4:8"]]
+ 00a93c14 ["CALL", null, ["callee:0046ce6c:8"]]
- 00a92bd0 ["INT_ADD", "register:40f0:8", ["const:a92bd0:8", "const:4:8"]]
- 00a92bd0 ["CALL", null, ["callee:008b89cc:8"]]
+ 00a93bc4 ["INT_ADD", "register:40f0:8", ["const:a93bc4:8", "const:4:8"]]
+ 00a93bc4 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-c5c3621ff02ff5fcaaefec5b695cf78c"></a>

### [`00a92db8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a92/00a92db8.md) → [`00a93dac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a93/00a93dac.md) FUN_00a93dac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 57件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ee4.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md)
- 新版 呼出元 1件 [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 57件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468204`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468204.md) [`0046827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046827c.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 96.26% / 新版 96.26%

優先判定に残った影響 `call_argument_candidate` 7件, `call_target` 1件, `store_value` 9件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

アドレスに依存する影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a93e7c",
      "incomplete_value": true,
      "site": "00a93e90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:87e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a92e88",
      "incomplete_value": true,
      "site": "00a92e9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7b3:8"
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
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a93edc",
      "incomplete_value": true,
      "site": "00a93ee8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a92ee8",
      "incomplete_value": true,
      "site": "00a92ef4",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a93ed8",
      "incomplete_value": true,
      "site": "00a93ef4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bcc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a92ee4",
      "incomplete_value": true,
      "site": "00a92f00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:afd:8"
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
      "00a93dec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00a93e00",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a93e08",
      "PARAM",
      [
        "storage",
        "00c8c460",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00a93dec",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00a93e00",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00a93e08",
      "PARAM",
      [
        "storage",
        "00c8d430",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a92e20 ["INT_ADD", "register:40f0:8", ["const:a92e20:8", "const:4:8"]]
- 00a92e20 ["CALL", null, ["callee:00c596b0:8"]]
+ 00a93e14 ["INT_ADD", "register:40f0:8", ["const:a93e14:8", "const:4:8"]]
+ 00a93e14 ["CALL", null, ["callee:00c596b0:8"]]
- 00a92f74 ["INT_ADD", "register:40f0:8", ["const:a92f74:8", "const:4:8"]]
- 00a92f74 ["CALL", null, ["callee:0043e138:8"]]
+ 00a93f68 ["INT_ADD", "register:40f0:8", ["const:a93f68:8", "const:4:8"]]
+ 00a93f68 ["CALL", null, ["callee:0043e138:8"]]
- 00a930ec ["INT_ADD", "register:40f0:8", ["const:a930ec:8", "const:4:8"]]
- 00a930ec ["CALL", null, ["callee:0046cebc:8"]]
+ 00a940e0 ["INT_ADD", "register:40f0:8", ["const:a940e0:8", "const:4:8"]]
+ 00a940e0 ["CALL", null, ["callee:0046cebc:8"]]
~~~


<a id="compare-d600f33c56b13251f3e539ef995c0926"></a>

### [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) → [`00a9682c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a96/00a9682c.md) FUN_00a9682c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00a9a424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a424.md) [`00a9a4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a4fc.md) · 呼出先 24件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043eca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043eca0.md) [`0043f7cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f7cc.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 2件 [`00a9b418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b418.md) [`00a9b4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b4f0.md) · 呼出先 24件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043efc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043efc0.md) [`0043faec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043faec.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 98.26% / 新版 98.26%

優先判定に残った影響 `call_target` 2件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a96af8",
      "incomplete_value": true,
      "site": "00a96b18",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:306000:8"
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
      "definition_site": "00a95b04",
      "incomplete_value": true,
      "site": "00a95b24",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:306000:8"
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
    "ordinal": 72,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a96af8",
      "incomplete_value": true,
      "site": "00a96b18",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00a95b04",
      "incomplete_value": true,
      "site": "00a95b24",
      "value": [
        "LOAD",
        "16",
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
    "ordinal": 73,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a96b1c",
      "incomplete_value": true,
      "site": "00a96b28",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00a95b28",
      "incomplete_value": true,
      "site": "00a95b34",
      "value": [
        "LOAD",
        "16",
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
      "00a96868",
      "DATA",
      [
        "storage",
        "0039bac0",
        null,
        "byte[23]"
      ]
    ],
    [
      "00a96868",
      "DATA",
      [
        "storage",
        "0039bac8",
        null,
        "byte[23]"
      ]
    ],
    [
      "00a9688c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0084e5f4"
      ]
    ]
  ],
  "added": [
    [
      "00a96868",
      "DATA",
      [
        "storage",
        "0039bac0",
        null,
        "byte[43]"
      ]
    ],
    [
      "00a96868",
      "DATA",
      [
        "storage",
        "0039bac8",
        null,
        "byte[43]"
      ]
    ],
    [
      "00a9688c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0084f5a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a95898 ["INT_ADD", "register:40f0:8", ["const:a95898:8", "const:4:8"]]
- 00a95898 ["CALL", null, ["ram:84e5f4:8"]]
+ 00a9688c ["INT_ADD", "register:40f0:8", ["const:a9688c:8", "const:4:8"]]
+ 00a9688c ["CALL", null, ["ram:84f5a0:8"]]
- 00a95db0 ["INT_ADD", "register:40f0:8", ["const:a95db0:8", "const:4:8"]]
- 00a95db0 ["CALL", null, ["ram:a84df8:8"]]
+ 00a96da4 ["INT_ADD", "register:40f0:8", ["const:a96da4:8", "const:4:8"]]
+ 00a96da4 ["CALL", null, ["ram:a85dec:8"]]
- 00a95890 ["INT_ADD", "register:40f0:8", ["const:a95890:8", "const:4:8"]]
- 00a95890 ["CALL", null, ["callee:00c594d0:8"]]
+ 00a96884 ["INT_ADD", "register:40f0:8", ["const:a96884:8", "const:4:8"]]
+ 00a96884 ["CALL", null, ["callee:00c594d0:8"]]
~~~


<a id="compare-18be16224498f54d919f806fc4b88c4c"></a>

### [`00a95f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95f7c.md) → [`00a96f70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a96/00a96f70.md) FUN_00a96f70

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
      "definition_site": "00a96f94",
      "incomplete_value": false,
      "site": "00a96f94",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a95fa0",
      "incomplete_value": false,
      "site": "00a95fa0",
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
            "const:488:8"
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
      "00a96f94",
      "DATA",
      [
        "storage",
        "00c8c488",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a96f94",
      "DATA",
      [
        "storage",
        "00c8d458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a95f90 ["INT_ADD", "register:40f0:8", ["const:a95f90:8", "const:4:8"]]
- 00a95f90 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a96f84 ["INT_ADD", "register:40f0:8", ["const:a96f84:8", "const:4:8"]]
+ 00a96f84 ["CALL", null, ["callee:00c58f30:8"]]
- 00a95f98 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a96f8c ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a95f9c ["COPY", "tmp:0:8", ["const:488:8"]]
- 00a95f9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a95f9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a95f9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a96f90 ["COPY", "tmp:0:8", ["const:458:8"]]
+ 00a96f90 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a96f90 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a96f90 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5189e9a4474f278693eeb352db760443"></a>

### [`00a95fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95fb0.md) → [`00a96fa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a96/00a96fa4.md) FUN_00a96fa4

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
      "definition_site": "00a96fb0",
      "incomplete_value": false,
      "site": "00a96fb0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:458:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a95fbc",
      "incomplete_value": false,
      "site": "00a95fbc",
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
            "const:488:8"
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
      "00a96fb0",
      "DATA",
      [
        "storage",
        "00c8c488",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a96fb0",
      "DATA",
      [
        "storage",
        "00c8d458",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a95fb4 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a96fa8 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a95fb8 ["COPY", "tmp:0:8", ["const:488:8"]]
- 00a95fb8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a95fb8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a95fb8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a96fac ["COPY", "tmp:0:8", ["const:458:8"]]
+ 00a96fac ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a96fac ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a96fac ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5b80953b50047506c29a8d7cd44bed05"></a>

### [`00a95fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95fcc.md) → [`00a96fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a96/00a96fc0.md) FUN_00a96fc0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

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
      "site": "00a96fe0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a95fec",
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
      "site": "00a96fec",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a95ff8",
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
      "00a96fe0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a96fec",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a96fe0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a96fec",
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
- 00a95fec ["INT_ADD", "register:40f0:8", ["const:a95fec:8", "const:4:8"]]
- 00a95fec ["CALL", null, ["ram:47ad34:8"]]
+ 00a96fe0 ["INT_ADD", "register:40f0:8", ["const:a96fe0:8", "const:4:8"]]
+ 00a96fe0 ["CALL", null, ["ram:47b054:8"]]
- 00a95ff8 ["INT_ADD", "register:40f0:8", ["const:a95ff8:8", "const:4:8"]]
- 00a95ff8 ["CALL", null, ["ram:47ad34:8"]]
+ 00a96fec ["INT_ADD", "register:40f0:8", ["const:a96fec:8", "const:4:8"]]
+ 00a96fec ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-7dfd583f70f3fe9f462f84cf50fa5dd3"></a>

### [`00a9606c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a96/00a9606c.md) → [`00a97060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a97/00a97060.md) FUN_00a97060

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00a8a488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a8a/00a8a488.md) · 呼出先 22件 [`0046e804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e804.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046ef38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ef38.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f6ac.md)
- 新版 呼出元 1件 [`00a8b47c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8b/00a8b47c.md) · 呼出先 22件 [`0046eb24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eb24.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f258`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f258.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) [`0046f9cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f9cc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 33.30% / 新版 33.30%

優先判定に残った影響 `call_argument_candidate` 27件, `store_value` 6件, `unresolved_branch_alignment` 135件, `unresolved_call_alignment` 147件, `unresolved_store_alignment` 262件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a984d8",
      "incomplete_value": true,
      "site": "00a984d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:456:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a974e4",
      "incomplete_value": true,
      "site": "00a974e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:38b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 214,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a984f0",
      "incomplete_value": true,
      "site": "00a984f0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:168:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a974fc",
      "incomplete_value": true,
      "site": "00a974fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 216,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00a984f4",
      "incomplete_value": true,
      "site": "00a984f4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00a97500",
      "incomplete_value": true,
      "site": "00a97500",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 217,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a960b0",
      "DATA",
      [
        "storage",
        "00c8c508",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:00a96104",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:00a96108",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9885c"
      ]
    ]
  ],
  "added": [
    [
      "00a970a4",
      "DATA",
      [
        "storage",
        "00c8d4d8",
        null,
        "pointer"
      ]
    ],
    [
      "00a970f8",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00a970fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9885c"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a96170 ["INT_ADD", "register:40f0:8", ["const:a96170:8", "const:4:8"]]
- 00a96170 ["CALL", null, ["callee:0047e96c:8"]]
+ 00a97164 ["INT_ADD", "register:40f0:8", ["const:a97164:8", "const:4:8"]]
+ 00a97164 ["CALL", null, ["callee:0047e96c:8"]]
- 00a96294 ["INT_ADD", "register:40f0:8", ["const:a96294:8", "const:4:8"]]
- 00a96294 ["CALL", null, ["callee:0047e96c:8"]]
+ 00a97288 ["INT_ADD", "register:40f0:8", ["const:a97288:8", "const:4:8"]]
+ 00a97288 ["CALL", null, ["callee:0047e96c:8"]]
- 00a96500 ["INT_ADD", "register:40f0:8", ["const:a96500:8", "const:4:8"]]
- 00a96500 ["CALL", null, ["callee:00a99188:8"]]
+ 00a974f4 ["INT_ADD", "register:40f0:8", ["const:a974f4:8", "const:4:8"]]
+ 00a974f4 ["CALL", null, ["callee:00a99188:8"]]
~~~


<a id="compare-519f530a1e960251815467929d0f5aac"></a>

### [`00a982bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a982bc.md) → [`00a992b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a992b0.md) FUN_00a992b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a98484`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98484.md) · 呼出先 6件 [`0046e8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e8e4.md) [`0046f01c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f01c.md) [`00672b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00672/00672b88.md) [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`00a99478`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99478.md) · 呼出先 6件 [`0046ec04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ec04.md) [`0046f33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f33c.md) [`00672f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00672/00672f38.md) [`0067e9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e9d8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.49% / 新版 96.49%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a992c0",
      "incomplete_value": false,
      "site": "00a992c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:4d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a982cc",
      "incomplete_value": false,
      "site": "00a982d4",
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
            "const:508:8"
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
      "definition_site": "00a99434",
      "incomplete_value": false,
      "site": "00a99438",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c85000:8"
          ],
          [
            "leaf",
            "const:6a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98440",
      "incomplete_value": false,
      "site": "00a98444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c84000:8"
          ],
          [
            "leaf",
            "const:6d8:8"
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
      "00a992c8",
      "DATA",
      [
        "storage",
        "00c8c508",
        null,
        "pointer"
      ]
    ],
    [
      "00a99438",
      "DATA",
      [
        "storage",
        "00c846d8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00a992c8",
      "DATA",
      [
        "storage",
        "00c8d4d8",
        null,
        "pointer"
      ]
    ],
    [
      "00a99438",
      "DATA",
      [
        "storage",
        "00c856a8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a982c8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a992bc ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a982cc ["COPY", "tmp:0:8", ["const:508:8"]]
- 00a982cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a982cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a982cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a992c0 ["COPY", "tmp:0:8", ["const:4d8:8"]]
+ 00a992c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a992c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a992c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00a982dc ["INT_ADD", "register:40f0:8", ["const:a982dc:8", "const:4:8"]]
- 00a982dc ["CALL", null, ["callee:0046ec04:8"]]
+ 00a992d0 ["INT_ADD", "register:40f0:8", ["const:a992d0:8", "const:4:8"]]
+ 00a992d0 ["CALL", null, ["callee:0046ec04:8"]]
~~~


<a id="compare-547861e1f6fbf7347c051ede3150710a"></a>

### [`00a984ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a984ac.md) → [`00a994a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a994a0.md) FUN_00a994a0

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
      "definition_site": "00a994b4",
      "incomplete_value": false,
      "site": "00a994b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:4f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a984c0",
      "incomplete_value": false,
      "site": "00a984c4",
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
            "const:528:8"
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
      "00a994b8",
      "DATA",
      [
        "storage",
        "00c8c528",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a994b8",
      "DATA",
      [
        "storage",
        "00c8d4f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a984b8 ["INT_ADD", "register:40f0:8", ["const:a984b8:8", "const:4:8"]]
- 00a984b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a994ac ["INT_ADD", "register:40f0:8", ["const:a994ac:8", "const:4:8"]]
+ 00a994ac ["CALL", null, ["callee:00c58f30:8"]]
- 00a984bc ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a994b0 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a984c0 ["COPY", "tmp:0:8", ["const:528:8"]]
- 00a984c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a984c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a984c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a994b4 ["COPY", "tmp:0:8", ["const:4f8:8"]]
+ 00a994b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a994b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a994b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b6e6d49bbf900b1d2d40a22be31538e3"></a>

### [`00a984e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a984e8.md) → [`00a994dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a994dc.md) FUN_00a994dc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 23件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00442b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442b78.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)
- 新版 呼出元 0件  · 呼出先 23件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00442e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442e98.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `call_target` 6件, `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a99888",
      "incomplete_value": false,
      "site": "00a99888",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98894",
      "incomplete_value": false,
      "site": "00a98894",
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
            "const:598:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a998c0",
      "incomplete_value": false,
      "site": "00a998c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a988cc",
      "incomplete_value": false,
      "site": "00a988cc",
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
            "const:618:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a995a8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a985b4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a995a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a995c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a99628",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ]
  ],
  "added": [
    [
      "00a995a8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a995c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a99628",
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
- 00a985b4 ["INT_ADD", "register:40f0:8", ["const:a985b4:8", "const:4:8"]]
- 00a985b4 ["CALL", null, ["ram:47ad34:8"]]
+ 00a995a8 ["INT_ADD", "register:40f0:8", ["const:a995a8:8", "const:4:8"]]
+ 00a995a8 ["CALL", null, ["ram:47b054:8"]]
- 00a985d0 ["INT_ADD", "register:40f0:8", ["const:a985d0:8", "const:4:8"]]
- 00a985d0 ["CALL", null, ["ram:47ad34:8"]]
+ 00a995c4 ["INT_ADD", "register:40f0:8", ["const:a995c4:8", "const:4:8"]]
+ 00a995c4 ["CALL", null, ["ram:47b054:8"]]
- 00a98634 ["INT_ADD", "register:40f0:8", ["const:a98634:8", "const:4:8"]]
- 00a98634 ["CALL", null, ["ram:48cd38:8"]]
+ 00a99628 ["INT_ADD", "register:40f0:8", ["const:a99628:8", "const:4:8"]]
+ 00a99628 ["CALL", null, ["ram:48d058:8"]]
~~~


<a id="compare-854ae2f53ef03ee23d8a1d5c8e8d8e8e"></a>

### [`00a98b9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98b9c.md) → [`00a99b90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99b90.md) FUN_00a99b90

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
      "definition_site": "00a99ba4",
      "incomplete_value": false,
      "site": "00a99ba8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98bb0",
      "incomplete_value": false,
      "site": "00a98bb4",
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
            "const:598:8"
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
      "00a99ba8",
      "DATA",
      [
        "storage",
        "00c8c598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a99ba8",
      "DATA",
      [
        "storage",
        "00c8d568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98ba8 ["INT_ADD", "register:40f0:8", ["const:a98ba8:8", "const:4:8"]]
- 00a98ba8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a99b9c ["INT_ADD", "register:40f0:8", ["const:a99b9c:8", "const:4:8"]]
+ 00a99b9c ["CALL", null, ["callee:00c58f30:8"]]
- 00a98bac ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a99ba0 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a98bb0 ["COPY", "tmp:0:8", ["const:598:8"]]
- 00a98bb0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98bb0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98bb0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a99ba4 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 00a99ba4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99ba4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99ba4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fafe96d0fab0bf7cc97109215b409cfd"></a>

### [`00a98bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98bc0.md) → [`00a99bb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99bb4.md) FUN_00a99bb4

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
      "definition_site": "00a99bb8",
      "incomplete_value": false,
      "site": "00a99bbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98bc4",
      "incomplete_value": false,
      "site": "00a98bc8",
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
            "const:598:8"
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
      "00a99bbc",
      "DATA",
      [
        "storage",
        "00c8c598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a99bbc",
      "DATA",
      [
        "storage",
        "00c8d568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98bc0 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a99bb4 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a98bc4 ["COPY", "tmp:0:8", ["const:598:8"]]
- 00a98bc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98bc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98bc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a99bb8 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 00a99bb8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99bb8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99bb8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9bb44cbd02a7310dde1dafeea5dc98e0"></a>

### [`00a98c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98c80.md) → [`00a99c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99c74.md) FUN_00a99c74

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
      "definition_site": "00a99c88",
      "incomplete_value": false,
      "site": "00a99c8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98c94",
      "incomplete_value": false,
      "site": "00a98c98",
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
            "const:618:8"
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
      "00a99c8c",
      "DATA",
      [
        "storage",
        "00c8c618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a99c8c",
      "DATA",
      [
        "storage",
        "00c8d5e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98c8c ["INT_ADD", "register:40f0:8", ["const:a98c8c:8", "const:4:8"]]
- 00a98c8c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a99c80 ["INT_ADD", "register:40f0:8", ["const:a99c80:8", "const:4:8"]]
+ 00a99c80 ["CALL", null, ["callee:00c58f30:8"]]
- 00a98c90 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a99c84 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a98c94 ["COPY", "tmp:0:8", ["const:618:8"]]
- 00a98c94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98c94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98c94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a99c88 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 00a99c88 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99c88 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99c88 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ab255a958fa18df69c77bf7e791bd559"></a>

### [`00a98ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98ca4.md) → [`00a99c98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99c98.md) FUN_00a99c98

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
      "definition_site": "00a99c9c",
      "incomplete_value": false,
      "site": "00a99ca0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98ca8",
      "incomplete_value": false,
      "site": "00a98cac",
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
            "const:618:8"
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
      "00a99ca0",
      "DATA",
      [
        "storage",
        "00c8c618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a99ca0",
      "DATA",
      [
        "storage",
        "00c8d5e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98ca4 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a99c98 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a98ca8 ["COPY", "tmp:0:8", ["const:618:8"]]
- 00a98ca8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98ca8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98ca8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a99c9c ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 00a99c9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99c9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99c9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fb6d1282c9bc42843f780e273be541b6"></a>

### [`00a98d64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98d64.md) → [`00a99d58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99d58.md) FUN_00a99d58

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
      "definition_site": "00a99d78",
      "incomplete_value": false,
      "site": "00a99d7c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:678:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98d84",
      "incomplete_value": false,
      "site": "00a98d88",
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
            "const:6a8:8"
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
      "00a99d7c",
      "DATA",
      [
        "storage",
        "00c8c6a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a99d7c",
      "DATA",
      [
        "storage",
        "00c8d678",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98d78 ["INT_ADD", "register:40f0:8", ["const:a98d78:8", "const:4:8"]]
- 00a98d78 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a99d6c ["INT_ADD", "register:40f0:8", ["const:a99d6c:8", "const:4:8"]]
+ 00a99d6c ["CALL", null, ["callee:00c58f30:8"]]
- 00a98d80 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a99d74 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a98d84 ["COPY", "tmp:0:8", ["const:6a8:8"]]
- 00a98d84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98d84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98d84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a99d78 ["COPY", "tmp:0:8", ["const:678:8"]]
+ 00a99d78 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99d78 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99d78 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-635044c62d42a79174fbf2c60c918081"></a>

### [`00a98dbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98dbc.md) → [`00a99db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99db0.md) FUN_00a99db0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d51c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99e54",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98e60",
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
      "site": "00a99e60",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98e6c",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99eb8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a98ec4",
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
      "00a99e54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a99e60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a99eb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a99e54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a99e60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a99eb8",
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
- 00a98e60 ["INT_ADD", "register:40f0:8", ["const:a98e60:8", "const:4:8"]]
- 00a98e60 ["CALL", null, ["ram:47ad34:8"]]
+ 00a99e54 ["INT_ADD", "register:40f0:8", ["const:a99e54:8", "const:4:8"]]
+ 00a99e54 ["CALL", null, ["ram:47b054:8"]]
- 00a98e6c ["INT_ADD", "register:40f0:8", ["const:a98e6c:8", "const:4:8"]]
- 00a98e6c ["CALL", null, ["ram:47ad34:8"]]
+ 00a99e60 ["INT_ADD", "register:40f0:8", ["const:a99e60:8", "const:4:8"]]
+ 00a99e60 ["CALL", null, ["ram:47b054:8"]]
- 00a98ec4 ["INT_ADD", "register:40f0:8", ["const:a98ec4:8", "const:4:8"]]
- 00a98ec4 ["CALL", null, ["ram:47ad34:8"]]
+ 00a99eb8 ["INT_ADD", "register:40f0:8", ["const:a99eb8:8", "const:4:8"]]
+ 00a99eb8 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-22f6bc59100cd8aea04177db2caf7870"></a>

### [`00a98f18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98f18.md) → [`00a99f0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99f0c.md) FUN_00a99f0c

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
      "definition_site": "00a99f2c",
      "incomplete_value": false,
      "site": "00a99f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:6f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a98f38",
      "incomplete_value": false,
      "site": "00a98f3c",
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
            "const:728:8"
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
      "00a99f30",
      "DATA",
      [
        "storage",
        "00c8c728",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a99f30",
      "DATA",
      [
        "storage",
        "00c8d6f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a98f2c ["INT_ADD", "register:40f0:8", ["const:a98f2c:8", "const:4:8"]]
- 00a98f2c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a99f20 ["INT_ADD", "register:40f0:8", ["const:a99f20:8", "const:4:8"]]
+ 00a99f20 ["CALL", null, ["callee:00c58f30:8"]]
- 00a98f34 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a99f28 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a98f38 ["COPY", "tmp:0:8", ["const:728:8"]]
- 00a98f38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a98f38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a98f38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a99f2c ["COPY", "tmp:0:8", ["const:6f8:8"]]
+ 00a99f2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99f2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a99f2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cd7606416592fd4837d930a9d6ee6883"></a>

### [`00a98f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a98/00a98f70.md) → [`00a99f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a99/00a99f64.md) FUN_00a99f64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 11件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047d1fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047d/0047d1fc.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047d51c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d51c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.10% / 新版 96.10%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a00c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99018",
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
      "site": "00a9a018",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99024",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a070",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9907c",
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
      "00a9a00c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9a018",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9a070",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a9a00c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a9a018",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a9a070",
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
- 00a99018 ["INT_ADD", "register:40f0:8", ["const:a99018:8", "const:4:8"]]
- 00a99018 ["CALL", null, ["ram:47ad34:8"]]
+ 00a9a00c ["INT_ADD", "register:40f0:8", ["const:a9a00c:8", "const:4:8"]]
+ 00a9a00c ["CALL", null, ["ram:47b054:8"]]
- 00a99024 ["INT_ADD", "register:40f0:8", ["const:a99024:8", "const:4:8"]]
- 00a99024 ["CALL", null, ["ram:47ad34:8"]]
+ 00a9a018 ["INT_ADD", "register:40f0:8", ["const:a9a018:8", "const:4:8"]]
+ 00a9a018 ["CALL", null, ["ram:47b054:8"]]
- 00a9907c ["INT_ADD", "register:40f0:8", ["const:a9907c:8", "const:4:8"]]
- 00a9907c ["CALL", null, ["ram:47ad34:8"]]
+ 00a9a070 ["INT_ADD", "register:40f0:8", ["const:a9a070:8", "const:4:8"]]
+ 00a9a070 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-5fd56f0b7717f92c5a0da1d0ef626da8"></a>

### [`00a990d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a990d0.md) → [`00a9a0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a0c4.md) FUN_00a9a0c4

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
      "definition_site": "00a9a0e4",
      "incomplete_value": false,
      "site": "00a9a0e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:778:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a990f0",
      "incomplete_value": false,
      "site": "00a990f4",
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
            "const:7a8:8"
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
      "00a9a0e8",
      "DATA",
      [
        "storage",
        "00c8c7a8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a0e8",
      "DATA",
      [
        "storage",
        "00c8d778",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a990e4 ["INT_ADD", "register:40f0:8", ["const:a990e4:8", "const:4:8"]]
- 00a990e4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9a0d8 ["INT_ADD", "register:40f0:8", ["const:a9a0d8:8", "const:4:8"]]
+ 00a9a0d8 ["CALL", null, ["callee:00c58f30:8"]]
- 00a990ec ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9a0e0 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a990f0 ["COPY", "tmp:0:8", ["const:7a8:8"]]
- 00a990f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a990f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a990f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a0e4 ["COPY", "tmp:0:8", ["const:778:8"]]
+ 00a9a0e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a0e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a0e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2d51e0a2a8644304bd6ef6b9a3e2d932"></a>

### [`00a99128`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99128.md) → [`00a9a11c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a11c.md) FUN_00a9a11c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 96.92% / 新版 96.92%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a1c0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a991cc",
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
      "site": "00a9a1cc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a991d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 7,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a9a1c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9a1cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a9a1c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a9a1cc",
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
- 00a991cc ["INT_ADD", "register:40f0:8", ["const:a991cc:8", "const:4:8"]]
- 00a991cc ["CALL", null, ["ram:47ad34:8"]]
+ 00a9a1c0 ["INT_ADD", "register:40f0:8", ["const:a9a1c0:8", "const:4:8"]]
+ 00a9a1c0 ["CALL", null, ["ram:47b054:8"]]
- 00a991d8 ["INT_ADD", "register:40f0:8", ["const:a991d8:8", "const:4:8"]]
- 00a991d8 ["CALL", null, ["ram:47ad34:8"]]
+ 00a9a1cc ["INT_ADD", "register:40f0:8", ["const:a9a1cc:8", "const:4:8"]]
+ 00a9a1cc ["CALL", null, ["ram:47b054:8"]]
- 00a99148 ["INT_ADD", "register:40f0:8", ["const:a99148:8", "const:4:8"]]
- 00a99148 ["CALL", null, ["callee:008b7ea8:8"]]
+ 00a9a13c ["INT_ADD", "register:40f0:8", ["const:a9a13c:8", "const:4:8"]]
+ 00a9a13c ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-591ce3a9bd0db0acfec2fb17eb817c5b"></a>

### [`00a99258`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99258.md) → [`00a9a24c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a24c.md) FUN_00a9a24c

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
      "definition_site": "00a9a270",
      "incomplete_value": false,
      "site": "00a9a270",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:7f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9927c",
      "incomplete_value": false,
      "site": "00a9927c",
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
            "const:828:8"
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
      "00a9a270",
      "DATA",
      [
        "storage",
        "00c8c828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a270",
      "DATA",
      [
        "storage",
        "00c8d7f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9926c ["INT_ADD", "register:40f0:8", ["const:a9926c:8", "const:4:8"]]
- 00a9926c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9a260 ["INT_ADD", "register:40f0:8", ["const:a9a260:8", "const:4:8"]]
+ 00a9a260 ["CALL", null, ["callee:00c58f30:8"]]
- 00a99274 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9a268 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a99278 ["COPY", "tmp:0:8", ["const:828:8"]]
- 00a99278 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a99278 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a99278 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a26c ["COPY", "tmp:0:8", ["const:7f8:8"]]
+ 00a9a26c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a26c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a26c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-10dbb06b948cbecb0582a5703b25dbab"></a>

### [`00a99360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99360.md) → [`00a9a354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a354.md) FUN_00a9a354

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
      "definition_site": "00a9a378",
      "incomplete_value": false,
      "site": "00a9a378",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:888:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a99384",
      "incomplete_value": false,
      "site": "00a99384",
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
            "const:8b8:8"
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
      "00a9a378",
      "DATA",
      [
        "storage",
        "00c8c8b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a378",
      "DATA",
      [
        "storage",
        "00c8d888",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a99374 ["INT_ADD", "register:40f0:8", ["const:a99374:8", "const:4:8"]]
- 00a99374 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9a368 ["INT_ADD", "register:40f0:8", ["const:a9a368:8", "const:4:8"]]
+ 00a9a368 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9937c ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9a370 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a99380 ["COPY", "tmp:0:8", ["const:8b8:8"]]
- 00a99380 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a99380 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a99380 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a374 ["COPY", "tmp:0:8", ["const:888:8"]]
+ 00a9a374 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a374 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a374 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-401326c465313c51cf736f49cbc90c6a"></a>

### [`00a994bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a994bc.md) → [`00a9a4b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a4b0.md) FUN_00a9a4b0

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
      "definition_site": "00a9a4d0",
      "incomplete_value": false,
      "site": "00a9a4d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:908:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a994dc",
      "incomplete_value": false,
      "site": "00a994e0",
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
            "const:938:8"
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
      "00a9a4d4",
      "DATA",
      [
        "storage",
        "00c8c938",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9a4d4",
      "DATA",
      [
        "storage",
        "00c8d908",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a994d0 ["INT_ADD", "register:40f0:8", ["const:a994d0:8", "const:4:8"]]
- 00a994d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9a4c4 ["INT_ADD", "register:40f0:8", ["const:a9a4c4:8", "const:4:8"]]
+ 00a9a4c4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a994d8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9a4cc ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a994dc ["COPY", "tmp:0:8", ["const:938:8"]]
- 00a994dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a994dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a994dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9a4d0 ["COPY", "tmp:0:8", ["const:908:8"]]
+ 00a9a4d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a4d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9a4d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-124f85fb3770020b92742387d3fdc250"></a>

### [`00a99514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99514.md) → [`00a9a508`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9a508.md) FUN_00a9a508

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 23件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`004891a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/004891a8.md)
- 新版 呼出元 0件  · 呼出先 23件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`004894c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00489/004894c8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 48.75% / 新版 48.75%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 3件, `store_value` 1件, `unresolved_branch_alignment` 34件, `unresolved_call_alignment` 43件, `unresolved_store_alignment` 51件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9a6cc",
      "incomplete_value": false,
      "site": "00a9a6d8",
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
            "const:548:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a996d8",
      "incomplete_value": false,
      "site": "00a996e4",
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
            "const:578:8"
          ]
        ]
      ]
    },
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a544",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a99550",
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
      "site": "00a9a560",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9956c",
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
      "00a9a544",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9a560",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9a5c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ]
  ],
  "added": [
    [
      "00a9a544",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a9a560",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a9a5c4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007647b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a99550 ["INT_ADD", "register:40f0:8", ["const:a99550:8", "const:4:8"]]
- 00a99550 ["CALL", null, ["ram:47ad34:8"]]
+ 00a9a544 ["INT_ADD", "register:40f0:8", ["const:a9a544:8", "const:4:8"]]
+ 00a9a544 ["CALL", null, ["ram:47b054:8"]]
- 00a9956c ["INT_ADD", "register:40f0:8", ["const:a9956c:8", "const:4:8"]]
- 00a9956c ["CALL", null, ["ram:47ad34:8"]]
+ 00a9a560 ["INT_ADD", "register:40f0:8", ["const:a9a560:8", "const:4:8"]]
+ 00a9a560 ["CALL", null, ["ram:47b054:8"]]
- 00a995d0 ["INT_ADD", "register:40f0:8", ["const:a995d0:8", "const:4:8"]]
- 00a995d0 ["CALL", null, ["ram:7643dc:8"]]
+ 00a9a5c4 ["INT_ADD", "register:40f0:8", ["const:a9a5c4:8", "const:4:8"]]
+ 00a9a5c4 ["CALL", null, ["ram:7647b8:8"]]
~~~


<a id="compare-b974bab72dd593a5fc237805759219ad"></a>

### [`00a99f7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a99/00a99f7c.md) → [`00a9af70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9a/00a9af70.md) FUN_00a9af70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a99f7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a99f80",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a99f84",
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
      "00a9af70",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00a9af74",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a9af78",
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
- 00a99f7c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a99f7c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a99f7c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00a99f7c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a99f80 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a99f80 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00a99f84 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00a99f84 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00a99f84 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00a99f84 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-01c83c6930a5b7596b1c5115a5fb27f8"></a>

### [`00a9a030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a030.md) → [`00a9b024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b024.md) FUN_00a9b024

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
      "definition_site": "00a9b038",
      "incomplete_value": false,
      "site": "00a9b03c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:988:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a044",
      "incomplete_value": false,
      "site": "00a9a048",
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
            "const:9b8:8"
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
      "00a9b03c",
      "DATA",
      [
        "storage",
        "00c8c9b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b03c",
      "DATA",
      [
        "storage",
        "00c8d988",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a03c ["INT_ADD", "register:40f0:8", ["const:a9a03c:8", "const:4:8"]]
- 00a9a03c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9b030 ["INT_ADD", "register:40f0:8", ["const:a9b030:8", "const:4:8"]]
+ 00a9b030 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9a040 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9b034 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9a044 ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 00a9a044 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a044 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a044 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b038 ["COPY", "tmp:0:8", ["const:988:8"]]
+ 00a9b038 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b038 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b038 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3b87b49e7507b96ec3c1785b3953322b"></a>

### [`00a9a06c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a06c.md) → [`00a9b060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b060.md) FUN_00a9b060

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0092e434`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0092e/0092e434.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0092f3e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0092f/0092f3e0.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b080",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a08c",
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
      "site": "00a9b08c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a098",
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
      "00a9b080",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00a9b08c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a9b080",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a9b08c",
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
- 00a9a08c ["INT_ADD", "register:40f0:8", ["const:a9a08c:8", "const:4:8"]]
- 00a9a08c ["CALL", null, ["ram:47ad34:8"]]
+ 00a9b080 ["INT_ADD", "register:40f0:8", ["const:a9b080:8", "const:4:8"]]
+ 00a9b080 ["CALL", null, ["ram:47b054:8"]]
- 00a9a098 ["INT_ADD", "register:40f0:8", ["const:a9a098:8", "const:4:8"]]
- 00a9a098 ["CALL", null, ["ram:47ad34:8"]]
+ 00a9b08c ["INT_ADD", "register:40f0:8", ["const:a9b08c:8", "const:4:8"]]
+ 00a9b08c ["CALL", null, ["ram:47b054:8"]]
- 00a9a07c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 00a9b070 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
~~~


<a id="compare-24b83084c87de373160f1e61751b49dd"></a>

### [`00a9a104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a104.md) → [`00a9b0f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b0f8.md) FUN_00a9b0f8

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
      "definition_site": "00a9b10c",
      "incomplete_value": false,
      "site": "00a9b110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:a08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a118",
      "incomplete_value": false,
      "site": "00a9a11c",
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
            "const:a38:8"
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
      "00a9b110",
      "DATA",
      [
        "storage",
        "00c8ca38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b110",
      "DATA",
      [
        "storage",
        "00c8da08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a110 ["INT_ADD", "register:40f0:8", ["const:a9a110:8", "const:4:8"]]
- 00a9a110 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9b104 ["INT_ADD", "register:40f0:8", ["const:a9b104:8", "const:4:8"]]
+ 00a9b104 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9a114 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9b108 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9a118 ["COPY", "tmp:0:8", ["const:a38:8"]]
- 00a9a118 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a118 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a118 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b10c ["COPY", "tmp:0:8", ["const:a08:8"]]
+ 00a9b10c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b10c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b10c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-09c27b7e38c7d1604cf1e629f6669416"></a>

### [`00a9a140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a140.md) → [`00a9b134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b134.md) FUN_00a9b134

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0054079c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00540/0054079c.md) [`007692b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/007692b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009bd4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009bd/009bd4b0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`00540abc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00540/00540abc.md) [`00769694`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00769/00769694.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009be45c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009be/009be45c.md) [`00a1b6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a1b/00a1b6a4.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.55% / 新版 91.55%

アドレスに依存する影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a9a1a8",
      "incomplete_value": true,
      "site": "00a9a1c0",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a9a198",
      "incomplete_value": true,
      "site": "00a9a1c0",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a9a198",
      "incomplete_value": true,
      "site": "00a9a1c0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
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
      "unmatched:00a9a1b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9a1fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9b220"
      ]
    ]
  ],
  "added": [
    [
      "00a9b1a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00a9b1f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00a9b220"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a1c0 ["INT_ADD", "register:40f0:8", ["const:a9a1c0:8", "const:4:8"]]
- 00a9a1c0 ["CALL", null, ["callee:00540abc:8"]]
+ 00a9b1b4 ["INT_ADD", "register:40f0:8", ["const:a9b1b4:8", "const:4:8"]]
+ 00a9b1b4 ["CALL", null, ["callee:00540abc:8"]]
- 00a9a1dc ["INT_ADD", "register:40f0:8", ["const:a9a1dc:8", "const:4:8"]]
- 00a9a1dc ["CALL", null, ["callee:00769694:8"]]
+ 00a9b1d0 ["INT_ADD", "register:40f0:8", ["const:a9b1d0:8", "const:4:8"]]
+ 00a9b1d0 ["CALL", null, ["callee:00769694:8"]]
- 00a9a17c ["INT_ADD", "register:40f0:8", ["const:a9a17c:8", "const:4:8"]]
- 00a9a17c ["CALL", null, ["callee:009be45c:8"]]
+ 00a9b170 ["INT_ADD", "register:40f0:8", ["const:a9b170:8", "const:4:8"]]
+ 00a9b170 ["CALL", null, ["callee:009be45c:8"]]
~~~


<a id="compare-947c26122bd3745b50a29cabe183d39c"></a>

### [`00a9a2ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a2ac.md) → [`00a9b2a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b2a0.md) FUN_00a9b2a0

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
      "definition_site": "00a9b2b4",
      "incomplete_value": false,
      "site": "00a9b2b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:a88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a2c0",
      "incomplete_value": false,
      "site": "00a9a2c4",
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
            "const:ab8:8"
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
      "00a9b2b8",
      "DATA",
      [
        "storage",
        "00c8cab8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b2b8",
      "DATA",
      [
        "storage",
        "00c8da88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a2b8 ["INT_ADD", "register:40f0:8", ["const:a9a2b8:8", "const:4:8"]]
- 00a9a2b8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9b2ac ["INT_ADD", "register:40f0:8", ["const:a9b2ac:8", "const:4:8"]]
+ 00a9b2ac ["CALL", null, ["callee:00c58f30:8"]]
- 00a9a2bc ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9b2b0 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9a2c0 ["COPY", "tmp:0:8", ["const:ab8:8"]]
- 00a9a2c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a2c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a2c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b2b4 ["COPY", "tmp:0:8", ["const:a88:8"]]
+ 00a9b2b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b2b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b2b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-de177c98a642ec87853458be1fda680d"></a>

### [`00a9a318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a318.md) → [`00a9b30c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b30c.md) FUN_00a9b30c

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
      "definition_site": "00a9b330",
      "incomplete_value": false,
      "site": "00a9b330",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a33c",
      "incomplete_value": false,
      "site": "00a9a33c",
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
            "const:b38:8"
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
      "00a9b330",
      "DATA",
      [
        "storage",
        "00c8cb38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b330",
      "DATA",
      [
        "storage",
        "00c8db08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a32c ["INT_ADD", "register:40f0:8", ["const:a9a32c:8", "const:4:8"]]
- 00a9a32c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9b320 ["INT_ADD", "register:40f0:8", ["const:a9b320:8", "const:4:8"]]
+ 00a9b320 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9a334 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9b328 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9a338 ["COPY", "tmp:0:8", ["const:b38:8"]]
- 00a9a338 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a338 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a338 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b32c ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 00a9b32c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b32c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b32c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-df6db50fa6984ff15142ea68583c508f"></a>

### [`00a9a34c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a34c.md) → [`00a9b340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b340.md) FUN_00a9b340

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
      "definition_site": "00a9b34c",
      "incomplete_value": false,
      "site": "00a9b34c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:b08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a358",
      "incomplete_value": false,
      "site": "00a9a358",
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
            "const:b38:8"
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
      "00a9b34c",
      "DATA",
      [
        "storage",
        "00c8cb38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b34c",
      "DATA",
      [
        "storage",
        "00c8db08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a350 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a9b344 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a9a354 ["COPY", "tmp:0:8", ["const:b38:8"]]
- 00a9a354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9b348 ["COPY", "tmp:0:8", ["const:b08:8"]]
+ 00a9b348 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b348 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b348 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f66c29b6a067712268df99b3085fe9c7"></a>

### [`00a9a3d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a3d4.md) → [`00a9b3c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b3c8.md) FUN_00a9b3c8

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
      "unmatched:00a9a3d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9a3d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9a3f8",
      "DATA",
      [
        "storage",
        "00c8cbb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b3c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a9b3cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a9b3ec",
      "DATA",
      [
        "storage",
        "00c8db88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a3d4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a9a3d4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a9a3d4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00a9a3d4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a9a3d8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a9a3d8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00a9a3dc ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-71aa64b3584affa8a8c45abc431efc52"></a>

### [`00a9a408`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a408.md) → [`00a9b3fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b3fc.md) FUN_00a9b3fc

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
      "unmatched:00a9a414",
      "DATA",
      [
        "storage",
        "00c8cbb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b408",
      "DATA",
      [
        "storage",
        "00c8db88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a408 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 00a9a408 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00a9a40c ["COPY", "register:4048:8", ["const:c8c000:8"]]
- 00a9a410 ["COPY", "tmp:0:8", ["const:bb8:8"]]
- 00a9a410 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a410 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a410 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-a243fd51039cbd0f93fa136107851132"></a>

### [`00a9a424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a424.md) → [`00a9b418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b418.md) FUN_00a9b418

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`00a9682c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a96/00a9682c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.65% / 新版 95.65%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9a448",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a9b43c",
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
- 00a9a430 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00a9a430 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 00a9b424 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00a9b424 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00a9a434 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00a9a434 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 00a9b428 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00a9b428 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 00a9a448 ["INT_ADD", "register:40f0:8", ["const:a9a448:8", "const:4:8"]]
- 00a9a448 ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-afbe4a0fefce0488906d68da74e5920a"></a>

### [`00a9a4ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a4ac.md) → [`00a9b4a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b4a0.md) FUN_00a9b4a0

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
      "definition_site": "00a9b4c4",
      "incomplete_value": false,
      "site": "00a9b4c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a4d0",
      "incomplete_value": false,
      "site": "00a9a4d0",
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
            "const:c38:8"
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
      "00a9b4c4",
      "DATA",
      [
        "storage",
        "00c8cc38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b4c4",
      "DATA",
      [
        "storage",
        "00c8dc08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a4c0 ["INT_ADD", "register:40f0:8", ["const:a9a4c0:8", "const:4:8"]]
- 00a9a4c0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9b4b4 ["INT_ADD", "register:40f0:8", ["const:a9b4b4:8", "const:4:8"]]
+ 00a9b4b4 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9a4c8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9b4bc ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9a4cc ["COPY", "tmp:0:8", ["const:c38:8"]]
- 00a9a4cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a4cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a4cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b4c0 ["COPY", "tmp:0:8", ["const:c08:8"]]
+ 00a9b4c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b4c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b4c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4f2d8f72d2248157e3665af9f8659395"></a>

### [`00a9a4e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a4e0.md) → [`00a9b4d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b4d4.md) FUN_00a9b4d4

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
      "definition_site": "00a9b4e0",
      "incomplete_value": false,
      "site": "00a9b4e0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:c08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a4ec",
      "incomplete_value": false,
      "site": "00a9a4ec",
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
            "const:c38:8"
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
      "00a9b4e0",
      "DATA",
      [
        "storage",
        "00c8cc38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b4e0",
      "DATA",
      [
        "storage",
        "00c8dc08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a4e4 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a9b4d8 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a9a4e8 ["COPY", "tmp:0:8", ["const:c38:8"]]
- 00a9a4e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a4e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a4e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9b4dc ["COPY", "tmp:0:8", ["const:c08:8"]]
+ 00a9b4dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b4dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b4dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0c770425e7a2b55ec3f5ce488b6a0cdd"></a>

### [`00a9a4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a4fc.md) → [`00a9b4f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b4f0.md) FUN_00a9b4f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md) [`008ba85c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba85c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.79% / 新版 86.79%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b534",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a540",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00a9a5d8",
      "incomplete_value": true,
      "site": "00a9a5f0",
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
            "const:2f08:8"
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
    "new": null,
    "old": {
      "definition_site": "00a9a5dc",
      "incomplete_value": true,
      "site": "00a9a5f0",
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
            "const:18:8"
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
      "00a9b534",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00a9a59c",
      "READ",
      [
        "storage",
        "002a17de",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00a9a5a0",
      "READ",
      [
        "storage",
        "002a17e5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00a9b534",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00a9b590",
      "READ",
      [
        "storage",
        "002a181e",
        null,
        "string"
      ]
    ],
    [
      "00a9b594",
      "READ",
      [
        "storage",
        "002a1825",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a540 ["INT_ADD", "register:40f0:8", ["const:a9a540:8", "const:4:8"]]
- 00a9a540 ["CALL", null, ["ram:47ad34:8"]]
+ 00a9b534 ["INT_ADD", "register:40f0:8", ["const:a9b534:8", "const:4:8"]]
+ 00a9b534 ["CALL", null, ["ram:47b054:8"]]
- 00a9a5f0 ["INT_ADD", "register:40f0:8", ["const:a9a5f0:8", "const:4:8"]]
- 00a9a5f0 ["CALL", null, ["callee:008bbccc:8"]]
+ 00a9b5e4 ["INT_ADD", "register:40f0:8", ["const:a9b5e4:8", "const:4:8"]]
+ 00a9b5e4 ["CALL", null, ["callee:008bbccc:8"]]
- 00a9a530 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00a9a530 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 00a9b524 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00a9b524 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
~~~


<a id="compare-13180bb81497f271ae9ce3196cb78075"></a>

### [`00a9a760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a760.md) → [`00a9b754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b754.md) FUN_00a9b754

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
      "definition_site": "00a9b778",
      "incomplete_value": false,
      "site": "00a9b778",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a784",
      "incomplete_value": false,
      "site": "00a9a784",
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
            "const:ca8:8"
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
      "00a9b778",
      "DATA",
      [
        "storage",
        "00c8cca8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b778",
      "DATA",
      [
        "storage",
        "00c8dc78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a774 ["INT_ADD", "register:40f0:8", ["const:a9a774:8", "const:4:8"]]
- 00a9a774 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9b768 ["INT_ADD", "register:40f0:8", ["const:a9b768:8", "const:4:8"]]
+ 00a9b768 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9a77c ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9b770 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9a780 ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00a9a780 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a780 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a780 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9b774 ["COPY", "tmp:0:8", ["const:c78:8"]]
+ 00a9b774 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b774 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9b774 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-886b19f2818fc417433b06466d6cdbbf"></a>

### [`00a9a794`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a794.md) → [`00a9b788`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b788.md) FUN_00a9b788

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
      "definition_site": "00a9b794",
      "incomplete_value": false,
      "site": "00a9b794",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:c78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a7a0",
      "incomplete_value": false,
      "site": "00a9a7a0",
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
            "const:ca8:8"
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
      "00a9b794",
      "DATA",
      [
        "storage",
        "00c8cca8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b794",
      "DATA",
      [
        "storage",
        "00c8dc78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a798 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a9b78c ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a9a79c ["COPY", "tmp:0:8", ["const:ca8:8"]]
- 00a9a79c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a79c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a79c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9b790 ["COPY", "tmp:0:8", ["const:c78:8"]]
+ 00a9b790 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b790 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b790 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-5bfadb81348c1700c34d8b531be0b48b"></a>

### [`00a9a7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a7b0.md) → [`00a9b7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b7a4.md) FUN_00a9b7a4

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
      "site": "00a9b7c8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a7d4",
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
      "00a9b7c8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a9b7c8",
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
- 00a9a7d4 ["INT_ADD", "register:40f0:8", ["const:a9a7d4:8", "const:4:8"]]
- 00a9a7d4 ["CALL", null, ["ram:47ad34:8"]]
+ 00a9b7c8 ["INT_ADD", "register:40f0:8", ["const:a9b7c8:8", "const:4:8"]]
+ 00a9b7c8 ["CALL", null, ["ram:47b054:8"]]
- 00a9a7e0 ["INT_ADD", "register:40f0:8", ["const:a9a7e0:8", "const:4:8"]]
- 00a9a7e0 ["CALL", null, ["callee:0047d134:8"]]
+ 00a9b7d4 ["INT_ADD", "register:40f0:8", ["const:a9b7d4:8", "const:4:8"]]
+ 00a9b7d4 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-8ca5e8b09477c2a1e4a2dc8dccfc4e79"></a>

### [`00a9a824`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a824.md) → [`00a9b818`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b818.md) FUN_00a9b818

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9a848",
      "DATA",
      [
        "storage",
        "00c8cd38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a9a84c",
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
      "00a9b83c",
      "DATA",
      [
        "storage",
        "00c8dd08",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9b840",
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
- 00a9a838 ["INT_ADD", "register:40f0:8", ["const:a9a838:8", "const:4:8"]]
- 00a9a838 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9b82c ["INT_ADD", "register:40f0:8", ["const:a9b82c:8", "const:4:8"]]
+ 00a9b82c ["CALL", null, ["callee:00c58f30:8"]]
- 00a9a840 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9b834 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9a844 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 00a9a844 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a844 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9a844 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-40ff7443a946e7d59fc3d0ddce944b5b"></a>

### [`00a9a858`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a858.md) → [`00a9b84c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b84c.md) FUN_00a9b84c

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
      "definition_site": "00a9b858",
      "incomplete_value": false,
      "site": "00a9b858",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:d08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a864",
      "incomplete_value": false,
      "site": "00a9a864",
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
            "const:d38:8"
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
      "00a9b858",
      "DATA",
      [
        "storage",
        "00c8cd38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b858",
      "DATA",
      [
        "storage",
        "00c8dd08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a85c ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a9b850 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a9a860 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 00a9a860 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a860 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9a860 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9b854 ["COPY", "tmp:0:8", ["const:d08:8"]]
+ 00a9b854 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b854 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9b854 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0d6f3fe683c9ee13c477edafc13a3fa6"></a>

### [`00a9a874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9a874.md) → [`00a9b868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9b868.md) FUN_00a9b868

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 12件 [`0044f920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044f920.md) [`00455338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00455/00455338.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md)
- 新版 呼出元 0件  · 呼出先 12件 [`0044fc40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044f/0044fc40.md) [`00455658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00455/00455658.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md)

変更の種類 branch_condition_or_target, call, call_target, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_target` 2件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00a9b8c4",
      "incomplete_value": false,
      "site": "00a9b8c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9a8d0",
      "incomplete_value": false,
      "site": "00a9a8d0",
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
            "const:da8:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9b8ac",
      "value": [
        "leaf",
        "ram:7647b8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a8b8",
      "value": [
        "leaf",
        "ram:7643dc:8"
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
      "site": "00a9b940",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9a94c",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "unmatched:00a9a890",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a9b8ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "00a9b8c4",
      "DATA",
      [
        "storage",
        "00c8cda8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9b884",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00a9b8ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007647b8"
      ]
    ],
    [
      "00a9b8c4",
      "DATA",
      [
        "storage",
        "00c8dd78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9a8b8 ["INT_ADD", "register:40f0:8", ["const:a9a8b8:8", "const:4:8"]]
- 00a9a8b8 ["CALL", null, ["ram:7643dc:8"]]
+ 00a9b8ac ["INT_ADD", "register:40f0:8", ["const:a9b8ac:8", "const:4:8"]]
+ 00a9b8ac ["CALL", null, ["ram:7647b8:8"]]
- 00a9a94c ["INT_ADD", "register:40f0:8", ["const:a9a94c:8", "const:4:8"]]
- 00a9a94c ["CALL", null, ["ram:47ad34:8"]]
+ 00a9b940 ["INT_ADD", "register:40f0:8", ["const:a9b940:8", "const:4:8"]]
+ 00a9b940 ["CALL", null, ["ram:47b054:8"]]
- 00a9a884 ["COPY", "tmp:0:8", ["const:70:8"]]
- 00a9a884 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 00a9a884 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 00a9a884 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-58fe7444643d899759c983f12a81a594"></a>

### [`00a9aa4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9aa4c.md) → [`00a9ba40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9ba40.md) FUN_00a9ba40

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
      "unmatched:00a9aa70",
      "DATA",
      [
        "storage",
        "00c8cda8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a9aa74",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9aa78",
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
      "00a9ba64",
      "DATA",
      [
        "storage",
        "00c8dd78",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9ba68",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a9ba6c",
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
- 00a9aa60 ["INT_ADD", "register:40f0:8", ["const:a9aa60:8", "const:4:8"]]
- 00a9aa60 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9ba54 ["INT_ADD", "register:40f0:8", ["const:a9ba54:8", "const:4:8"]]
+ 00a9ba54 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9aa68 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9ba5c ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9aa6c ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00a9aa6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9aa6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9aa6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1177e9981611987325d7bd215ed282d2"></a>

### [`00a9aa80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9aa80.md) → [`00a9ba74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9ba74.md) FUN_00a9ba74

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
      "definition_site": "00a9ba80",
      "incomplete_value": false,
      "site": "00a9ba80",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:d78:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9aa8c",
      "incomplete_value": false,
      "site": "00a9aa8c",
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
      "00a9ba80",
      "DATA",
      [
        "storage",
        "00c8cda8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9ba80",
      "DATA",
      [
        "storage",
        "00c8dd78",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9aa84 ["COPY", "register:4048:8", ["const:c8c000:8"]]
+ 00a9ba78 ["COPY", "register:4048:8", ["const:c8d000:8"]]
- 00a9aa88 ["COPY", "tmp:0:8", ["const:da8:8"]]
- 00a9aa88 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00a9aa88 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00a9aa88 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00a9ba7c ["COPY", "tmp:0:8", ["const:d78:8"]]
+ 00a9ba7c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9ba7c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00a9ba7c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-57906f206a116e9badf89c1955651cc3"></a>

### [`00a9aa9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9aa9c.md) → [`00a9ba90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9ba90.md) FUN_00a9ba90

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00853cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00853/00853cc8.md) [`00a89bcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a89/00a89bcc.md)
- 新版 呼出元 0件  · 呼出先 3件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00854c74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00854/00854c74.md) [`00a8abc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a8a/00a8abc0.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00a9bac0",
      "DATA",
      [
        "storage",
        "003c77e0",
        null,
        "byte[15]"
      ]
    ]
  ],
  "added": [
    [
      "00a9bac0",
      "DATA",
      [
        "storage",
        "003c77e0",
        null,
        "byte[31]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9aac0 ["INT_ADD", "register:40f0:8", ["const:a9aac0:8", "const:4:8"]]
- 00a9aac0 ["CALL", null, ["callee:008524fc:8"]]
+ 00a9bab4 ["INT_ADD", "register:40f0:8", ["const:a9bab4:8", "const:4:8"]]
+ 00a9bab4 ["CALL", null, ["callee:008524fc:8"]]
- 00a9aad0 ["INT_ADD", "register:40f0:8", ["const:a9aad0:8", "const:4:8"]]
- 00a9aad0 ["CALL", null, ["callee:008524fc:8"]]
+ 00a9bac4 ["INT_ADD", "register:40f0:8", ["const:a9bac4:8", "const:4:8"]]
+ 00a9bac4 ["CALL", null, ["callee:008524fc:8"]]
- 00a9aad4 ["INT_ADD", "register:40f0:8", ["const:a9aad4:8", "const:4:8"]]
- 00a9aad4 ["CALL", null, ["callee:00854c74:8"]]
+ 00a9bac8 ["INT_ADD", "register:40f0:8", ["const:a9bac8:8", "const:4:8"]]
+ 00a9bac8 ["CALL", null, ["callee:00854c74:8"]]
~~~


<a id="compare-e907cd4819e07e3642922626cc069ff6"></a>

### [`00a9ab54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ab54.md) → [`00a9bb48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9bb48.md) FUN_00a9bb48

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00a9ab6c",
      "DATA",
      [
        "storage",
        "00c8ce38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00a9ab70",
      "DATA",
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
      "00a9bb60",
      "DATA",
      [
        "storage",
        "00c8de08",
        null,
        "undefined *"
      ]
    ],
    [
      "00a9bb64",
      "DATA",
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
- 00a9ab60 ["INT_ADD", "register:40f0:8", ["const:a9ab60:8", "const:4:8"]]
- 00a9ab60 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9bb54 ["INT_ADD", "register:40f0:8", ["const:a9bb54:8", "const:4:8"]]
+ 00a9bb54 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9ab64 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9bb58 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9ab68 ["COPY", "tmp:0:8", ["const:e38:8"]]
- 00a9ab68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ab68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ab68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6ca564cefb56808c86fce3629055a8a1"></a>

### [`00a9ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ab78.md) → [`00a9bb6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9bb6c.md) FUN_00a9bb6c

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
      "definition_site": "00a9bb70",
      "incomplete_value": false,
      "site": "00a9bb74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:e08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9ab7c",
      "incomplete_value": false,
      "site": "00a9ab80",
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
            "const:e38:8"
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
      "00a9bb74",
      "DATA",
      [
        "storage",
        "00c8ce38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9bb74",
      "DATA",
      [
        "storage",
        "00c8de08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ab78 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9bb6c ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9ab7c ["COPY", "tmp:0:8", ["const:e38:8"]]
- 00a9ab7c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ab7c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ab7c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9bb70 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 00a9bb70 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bb70 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bb70 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-53f7226f667156f2a80a373f8d8dc43a"></a>

### [`00a9ab90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ab90.md) → [`00a9bb84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9bb84.md) FUN_00a9bb84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0046cb08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cb08.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0046ce28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046ce28.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.21% / 新版 86.21%

優先判定に残った影響 `call_target` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9bbac",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00a9abb8",
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
      "unmatched:00a9ab90",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00a9ab94",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a9bbac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00a9bb84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00a9bb88",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00a9bbac",
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
- 00a9abb8 ["INT_ADD", "register:40f0:8", ["const:a9abb8:8", "const:4:8"]]
- 00a9abb8 ["CALL", null, ["ram:47ad34:8"]]
+ 00a9bbac ["INT_ADD", "register:40f0:8", ["const:a9bbac:8", "const:4:8"]]
+ 00a9bbac ["CALL", null, ["ram:47b054:8"]]
- 00a9ab90 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00a9ab90 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00a9ab90 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00a9ab90 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00a9ab94 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00a9ab94 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-6e68415960ccd7af97bb802f53d4ce9a"></a>

### [`00a9ac30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ac30.md) → [`00a9bc24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9bc24.md) FUN_00a9bc24

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
      "definition_site": "00a9bc38",
      "incomplete_value": false,
      "site": "00a9bc3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:e88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9ac44",
      "incomplete_value": false,
      "site": "00a9ac48",
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
            "const:eb8:8"
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
      "00a9bc3c",
      "DATA",
      [
        "storage",
        "00c8ceb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9bc3c",
      "DATA",
      [
        "storage",
        "00c8de88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ac3c ["INT_ADD", "register:40f0:8", ["const:a9ac3c:8", "const:4:8"]]
- 00a9ac3c ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9bc30 ["INT_ADD", "register:40f0:8", ["const:a9bc30:8", "const:4:8"]]
+ 00a9bc30 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9ac40 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9bc34 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9ac44 ["COPY", "tmp:0:8", ["const:eb8:8"]]
- 00a9ac44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ac44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ac44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9bc38 ["COPY", "tmp:0:8", ["const:e88:8"]]
+ 00a9bc38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bc38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bc38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b11023a3ed591819122dbc2cabc40f39"></a>

### [`00a9ac54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ac54.md) → [`00a9bc48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9bc48.md) FUN_00a9bc48

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
      "definition_site": "00a9bc4c",
      "incomplete_value": false,
      "site": "00a9bc50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:e88:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9ac58",
      "incomplete_value": false,
      "site": "00a9ac5c",
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
            "const:eb8:8"
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
      "00a9bc50",
      "DATA",
      [
        "storage",
        "00c8ceb8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9bc50",
      "DATA",
      [
        "storage",
        "00c8de88",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ac54 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9bc48 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9ac58 ["COPY", "tmp:0:8", ["const:eb8:8"]]
- 00a9ac58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ac58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ac58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9bc4c ["COPY", "tmp:0:8", ["const:e88:8"]]
+ 00a9bc4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bc4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bc4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-3106fdbe128a47212beba6bdab0a875d"></a>

### [`00a9ad14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ad14.md) → [`00a9bd08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9bd08.md) FUN_00a9bd08

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
      "definition_site": "00a9bd1c",
      "incomplete_value": false,
      "site": "00a9bd20",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9ad28",
      "incomplete_value": false,
      "site": "00a9ad2c",
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
            "const:f38:8"
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
      "00a9bd20",
      "DATA",
      [
        "storage",
        "00c8cf38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9bd20",
      "DATA",
      [
        "storage",
        "00c8df08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ad20 ["INT_ADD", "register:40f0:8", ["const:a9ad20:8", "const:4:8"]]
- 00a9ad20 ["CALL", null, ["callee:00c58f30:8"]]
+ 00a9bd14 ["INT_ADD", "register:40f0:8", ["const:a9bd14:8", "const:4:8"]]
+ 00a9bd14 ["CALL", null, ["callee:00c58f30:8"]]
- 00a9ad24 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9bd18 ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9ad28 ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00a9ad28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ad28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ad28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9bd1c ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 00a9bd1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bd1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bd1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8a97bd67f04d964f354743dbb85cb9e5"></a>

### [`00a9ad38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ad38.md) → [`00a9bd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9bd2c.md) FUN_00a9bd2c

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
      "definition_site": "00a9bd30",
      "incomplete_value": false,
      "site": "00a9bd34",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8d000:8"
          ],
          [
            "leaf",
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00a9ad3c",
      "incomplete_value": false,
      "site": "00a9ad40",
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
            "const:f38:8"
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
      "00a9bd34",
      "DATA",
      [
        "storage",
        "00c8cf38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00a9bd34",
      "DATA",
      [
        "storage",
        "00c8df08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00a9ad38 ["COPY", "register:4040:8", ["const:c8c000:8"]]
+ 00a9bd2c ["COPY", "register:4040:8", ["const:c8d000:8"]]
- 00a9ad3c ["COPY", "tmp:0:8", ["const:f38:8"]]
- 00a9ad3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ad3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00a9ad3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00a9bd30 ["COPY", "tmp:0:8", ["const:f08:8"]]
+ 00a9bd30 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bd30 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00a9bd30 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


