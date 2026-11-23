# v16.0.2 → v16.0.3 · 最優先の変更候補 (32)

[一覧の目次](README.md)

<a id="compare-cc62cb9824239eb0262f6c0bdc093f38"></a>

### [`0064a6cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064a6cc.md) → [`0064aa7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064a/0064aa7c.md) FUN_0064aa7c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006465f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00646/006465f0.md) · 呼出先 5件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00468e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468e60.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`0048ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab78.md)
- 新版 呼出元 1件 [`006469a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00646/006469a0.md) · 呼出先 5件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00469180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469180.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`0048ae90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae90.md) [`0048ae98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae98.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.41% / 新版 97.41%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0064abd0",
      "incomplete_value": false,
      "site": "0064abe4",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0064ac54",
      "incomplete_value": true,
      "site": "0064ac58",
      "value": [
        "LOAD",
        "8",
        [
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
              "INT_LEFT"
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 12,
    "slot": 1
  }
]
~~~


~~~diff
- 0064a834 ["INT_ADD", "register:40f0:8", ["const:64a834:8", "const:4:8"]]
- 0064a834 ["CALL", null, ["callee:0048a2ac:8"]]
+ 0064abe4 ["INT_ADD", "register:40f0:8", ["const:64abe4:8", "const:4:8"]]
+ 0064abe4 ["CALL", null, ["callee:0048a2ac:8"]]
- 0064a8a8 ["INT_ADD", "register:40f0:8", ["const:64a8a8:8", "const:4:8"]]
- 0064a8a8 ["CALL", null, ["callee:0048a2ac:8"]]
+ 0064ac58 ["INT_ADD", "register:40f0:8", ["const:64ac58:8", "const:4:8"]]
+ 0064ac58 ["CALL", null, ["callee:0048a2ac:8"]]
- 0064a734 ["INT_ADD", "register:40f0:8", ["const:64a734:8", "const:4:8"]]
- 0064a734 ["CALL", null, ["callee:0048a2ac:8"]]
+ 0064aae4 ["INT_ADD", "register:40f0:8", ["const:64aae4:8", "const:4:8"]]
+ 0064aae4 ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-a5ab45fc9dc082c6379f42fa4d887dbb"></a>

### [`0064aa98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064aa98.md) → [`0064ae48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064a/0064ae48.md) FUN_0064ae48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`0064e3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e3bc.md) [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) · 呼出先 19件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006c0dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0dc8.md)
- 新版 呼出元 2件 [`0064e76c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e76c.md) [`0064e930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e930.md) · 呼出先 19件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`006c1178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c1178.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 87.35% / 新版 87.35%

優先判定に残った影響 `call_argument_candidate` 13件, `store_destination` 7件, `store_value` 12件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064b12c",
      "incomplete_value": true,
      "site": "0064b13c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f9a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064ad7c",
      "incomplete_value": true,
      "site": "0064ad8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ecd:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 42,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064b14c",
      "incomplete_value": true,
      "site": "0064b14c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0064ad9c",
      "incomplete_value": true,
      "site": "0064ad9c",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 43,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064b140",
      "incomplete_value": true,
      "site": "0064b154",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "0064ad90",
      "incomplete_value": true,
      "site": "0064ada4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 44,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0064ae84",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0064ae90",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064ae98",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0064ae84",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0064ae90",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064ae98",
      "PARAM",
      [
        "storage",
        "00c748b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064aae4 ["COPY", "register:4010:8", ["const:c73000:8"]]
+ 0064ae94 ["COPY", "register:4010:8", ["const:c74000:8"]]
- 0064aae8 ["COPY", "tmp:0:8", ["const:8e0:8"]]
- 0064aae8 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 0064aae8 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 0064aae8 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 0064ae98 ["COPY", "tmp:0:8", ["const:8b0:8"]]
+ 0064ae98 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 0064ae98 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 0064ae98 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
- 0064aaf4 ["INT_ADD", "register:40f0:8", ["const:64aaf4:8", "const:4:8"]]
- 0064aaf4 ["CALL", null, ["callee:00c596b0:8"]]
+ 0064aea4 ["INT_ADD", "register:40f0:8", ["const:64aea4:8", "const:4:8"]]
+ 0064aea4 ["CALL", null, ["callee:00c596b0:8"]]
~~~


<a id="compare-dafe06b4ceeda30de760501d023ca5a9"></a>

### [`0064b1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064b1e8.md) → [`0064b598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064b/0064b598.md) FUN_0064b598

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) · 呼出先 29件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440b40.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`00473580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00473/00473580.md)
- 新版 呼出元 1件 [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) · 呼出先 29件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00440e60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440e60.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`004738a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00473/004738a0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.71% / 新版 91.71%

優先判定に残った影響 `call_argument_candidate` 21件, `call_target` 5件, `store_value` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `branch_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064b87c",
      "incomplete_value": true,
      "site": "0064b87c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2d8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064b4cc",
      "incomplete_value": true,
      "site": "0064b4cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:298:8"
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
      "definition_site": "0064b880",
      "incomplete_value": true,
      "site": "0064b880",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0064b4d0",
      "incomplete_value": true,
      "site": "0064b4d0",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 26,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0064ba24",
      "incomplete_value": true,
      "site": "0064ba24",
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
      "definition_site": "0064b674",
      "incomplete_value": true,
      "site": "0064b674",
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
    "ordinal": 23,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0064b1f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064b1fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064b200",
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
      "0064b5a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0064b5ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0064b5b0",
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
- 0064b228 ["INT_ADD", "register:40f0:8", ["const:64b228:8", "const:4:8"]]
- 0064b228 ["CALL", null, ["callee:006b2838:8"]]
+ 0064b5d8 ["INT_ADD", "register:40f0:8", ["const:64b5d8:8", "const:4:8"]]
+ 0064b5d8 ["CALL", null, ["callee:006b2838:8"]]
- 0064b230 ["INT_ADD", "register:40f0:8", ["const:64b230:8", "const:4:8"]]
- 0064b230 ["CALL", null, ["callee:006c4640:8"]]
+ 0064b5e0 ["INT_ADD", "register:40f0:8", ["const:64b5e0:8", "const:4:8"]]
+ 0064b5e0 ["CALL", null, ["callee:006c4640:8"]]
- 0064b26c ["INT_ADD", "register:40f0:8", ["const:64b26c:8", "const:4:8"]]
- 0064b26c ["CALL", null, ["callee:008524fc:8"]]
+ 0064b61c ["INT_ADD", "register:40f0:8", ["const:64b61c:8", "const:4:8"]]
+ 0064b61c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-31979e3887f4b8060aec83de3bffcfb8"></a>

### [`0064bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064bd94.md) → [`0064c144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064c/0064c144.md) FUN_0064c144

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0064b1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064b1e8.md) [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00656d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656d98.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 3件 [`0064b598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064b/0064b598.md) [`00898890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/00898890.md) [`009d4af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d4af4.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00657148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657148.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0064be20",
      "incomplete_value": true,
      "site": "0064be34",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0064be24",
      "incomplete_value": true,
      "site": "0064be34",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "ordinal": 2,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0064bddc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064be64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0064c274"
      ]
    ]
  ],
  "added": [
    [
      "0064c18c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0064c214",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0064c274"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064be34 ["INT_ADD", "register:40f0:8", ["const:64be34:8", "const:4:8"]]
- 0064be34 ["CALL", null, ["callee:00657148:8"]]
+ 0064c1e4 ["INT_ADD", "register:40f0:8", ["const:64c1e4:8", "const:4:8"]]
+ 0064c1e4 ["CALL", null, ["callee:00657148:8"]]
- 0064bddc ["INT_ADD", "tmp:0:8", ["register:8:8", "const:30:8"]]
- 0064bddc ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 0064bde4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0064bde4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0064bde4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0064bde4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0064c194 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0064c194 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0064c194 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0064c194 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-b29b65d831d34e298c869f8fc1a2d1f5"></a>

### [`0064ca48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064c/0064ca48.md) → [`0064cdf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064c/0064cdf8.md) FUN_0064cdf8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0064ccb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064c/0064ccb0.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`0064d060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064d060.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 18.07% / 新版 18.07%

優先判定に残った影響 `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 11件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0064cf18",
      "incomplete_value": true,
      "site": "0064cf1c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b58:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064cb68",
      "incomplete_value": true,
      "site": "0064cb6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:b98:8"
              ]
            ]
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
      "0064ce04",
      "READ",
      [
        "storage",
        "00ca6c90",
        null,
        "undefined1"
      ]
    ],
    [
      "0064ce08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0064ca68"
      ]
    ],
    [
      "unmatched:0064ca60",
      "READ",
      [
        "storage",
        "00ca6ca0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "0064ce04",
      "READ",
      [
        "storage",
        "00ca7c50",
        null,
        "undefined1"
      ]
    ],
    [
      "0064ce08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0064ce18"
      ]
    ],
    [
      "0064ce10",
      "READ",
      [
        "storage",
        "00ca7c60",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064cb6c ["INT_ADD", "register:40f0:8", ["const:64cb6c:8", "const:4:8"]]
- 0064cb6c ["CALL", null, ["callee:00c58f50:8"]]
+ 0064cf1c ["INT_ADD", "register:40f0:8", ["const:64cf1c:8", "const:4:8"]]
+ 0064cf1c ["CALL", null, ["callee:00c58f50:8"]]
- 0064ca50 ["COPY", "register:4040:8", ["const:ca6000:8"]]
+ 0064ce00 ["COPY", "register:4040:8", ["const:ca7000:8"]]
- 0064ca54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c90:8"]]
- 0064ca54 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 0064ca54 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
+ 0064ce04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:c50:8"]]
+ 0064ce04 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0064ce04 ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
~~~


<a id="compare-76341246d4328573ff3483d8a991b160"></a>

### [`0064d874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064d874.md) → [`0064dc24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064dc24.md) FUN_0064dc24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 10件 [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md)
- 新版 呼出元 1件 [`00b12e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12e14.md) · 呼出先 10件 [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`004889b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/004889b8.md) [`00b1217c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b1217c.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 81.11% / 新版 81.11%

優先判定に残った影響 `store_destination` 1件, `store_value` 6件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0064dc58",
      "incomplete_value": false,
      "site": "0064dc64",
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
      "definition_site": "0064d8a8",
      "incomplete_value": false,
      "site": "0064d8b4",
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
    "ordinal": 8,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064dc6c",
      "incomplete_value": true,
      "site": "0064dc7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fdb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064d8bc",
      "incomplete_value": true,
      "site": "0064d8cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f0e:8"
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
      "definition_site": "0064dc80",
      "incomplete_value": true,
      "site": "0064dc80",
      "value": [
        "LOAD",
        "8",
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
                "const:d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064d8d0",
      "incomplete_value": true,
      "site": "0064d8d0",
      "value": [
        "LOAD",
        "8",
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
                "const:d:8"
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
      "0064dc64",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "0064dc6c",
      "READ",
      [
        "storage",
        "002a9f0e",
        null,
        "string"
      ]
    ],
    [
      "0064dc74",
      "READ",
      [
        "storage",
        "002a9f1b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0064dc64",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "0064dc6c",
      "READ",
      [
        "storage",
        "002a9fdb",
        null,
        "string"
      ]
    ],
    [
      "0064dc74",
      "READ",
      [
        "storage",
        "002a9fe8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064d8a0 ["INT_ADD", "register:40f0:8", ["const:64d8a0:8", "const:4:8"]]
- 0064d8a0 ["CALL", null, ["callee:00488180:8"]]
+ 0064dc50 ["INT_ADD", "register:40f0:8", ["const:64dc50:8", "const:4:8"]]
+ 0064dc50 ["CALL", null, ["callee:00488180:8"]]
- 0064d8a4 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 0064dc54 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 0064d8a8 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 0064d8a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0064d8a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0064d8a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0064dc58 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 0064dc58 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0064dc58 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0064dc58 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f4ecf87061aab6a616a3fa21ca7654d9"></a>

### [`0064da2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064da2c.md) → [`0064dddc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064dddc.md) FUN_0064dddc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) · 呼出先 13件 [`0046e7b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7b0.md) [`0046e7c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7c0.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md)
- 新版 呼出元 1件 [`0064e930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e930.md) · 呼出先 13件 [`0046ead0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ead0.md) [`0046eae0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046eae0.md) [`0046ecd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046ecd0.md) [`0046f414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f414.md) [`0046fa44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046fa44.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.85% / 新版 85.85%

優先判定に残った影響 `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064de2c",
      "incomplete_value": true,
      "site": "0064de2c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:23e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064da7c",
      "incomplete_value": true,
      "site": "0064da7c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:1fe:8"
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
      "definition_site": "0064de20",
      "incomplete_value": true,
      "site": "0064de30",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0064da70",
      "incomplete_value": true,
      "site": "0064da80",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064dee0",
      "incomplete_value": true,
      "site": "0064def4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:efb:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064db30",
      "incomplete_value": true,
      "site": "0064db44",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e1d:8"
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
      "0064de1c",
      "READ",
      [
        "storage",
        "0029f1fe",
        null,
        "string"
      ]
    ],
    [
      "0064de20",
      "READ",
      [
        "storage",
        "0029f205",
        null,
        "string"
      ]
    ],
    [
      "0064dee0",
      "READ",
      [
        "storage",
        "002b3e1d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0064de1c",
      "READ",
      [
        "storage",
        "0029f23e",
        null,
        "string"
      ]
    ],
    [
      "0064de20",
      "READ",
      [
        "storage",
        "0029f245",
        null,
        "string"
      ]
    ],
    [
      "0064dee0",
      "READ",
      [
        "storage",
        "002b3efb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064da54 ["INT_ADD", "register:40f0:8", ["const:64da54:8", "const:4:8"]]
- 0064da54 ["CALL", null, ["callee:0063ab94:8"]]
+ 0064de04 ["INT_ADD", "register:40f0:8", ["const:64de04:8", "const:4:8"]]
+ 0064de04 ["CALL", null, ["callee:0063ab94:8"]]
- 0064da5c ["INT_ADD", "register:40f0:8", ["const:64da5c:8", "const:4:8"]]
- 0064da5c ["CALL", null, ["callee:0063bbb4:8"]]
+ 0064de0c ["INT_ADD", "register:40f0:8", ["const:64de0c:8", "const:4:8"]]
+ 0064de0c ["CALL", null, ["callee:0063bbb4:8"]]
- 0064da64 ["COPY", "tmp:0:8", ["const:1fe:8"]]
- 0064da64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0064da64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0064da64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0064de14 ["COPY", "tmp:0:8", ["const:23e:8"]]
+ 0064de14 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0064de14 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0064de14 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-23a40f0b73a2c2487d28cd429a29b858"></a>

### [`0064dc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064dc08.md) → [`0064dfb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064dfb8.md) FUN_0064dfb8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00655530`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655530.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006411b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/006411b4.md) [`00641ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ca8.md) [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md)
- 新版 呼出元 1件 [`006558e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/006558e0.md) · 呼出先 12件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00641564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641564.md) [`00642058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00642/00642058.md) [`006b7538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7538.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 97.50% / 新版 97.50%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0064de08",
      "incomplete_value": true,
      "site": "0064de10",
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
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0064de04",
      "incomplete_value": true,
      "site": "0064de10",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4000:4"
              ],
              [
                "live",
                "register:4040:4"
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
      "unmatched:0064dd30",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "0064e0fc",
      "DATA",
      [
        "storage",
        "00432898",
        null,
        "dword"
      ]
    ],
    [
      "unmatched:0064dd78",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00641ca8"
      ]
    ]
  ],
  "added": [
    [
      "0064e0e0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "0064e0fc",
      "DATA",
      [
        "storage",
        "00432898",
        "fde_00432898",
        "dword"
      ]
    ],
    [
      "0064e128",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00642058"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064de10 ["INT_ADD", "register:40f0:8", ["const:64de10:8", "const:4:8"]]
- 0064de10 ["CALL", null, ["callee:0071d604:8"]]
+ 0064e1c0 ["INT_ADD", "register:40f0:8", ["const:64e1c0:8", "const:4:8"]]
+ 0064e1c0 ["CALL", null, ["callee:0071d604:8"]]
- 0064dc40 ["INT_RIGHT", "tmp:0:4", ["register:4008:4", "const:0:4"]]
- 0064dc40 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0064dc40 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0064dc40 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0064dff0 ["INT_RIGHT", "tmp:0:4", ["register:4008:4", "const:0:4"]]
+ 0064dff0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0064dff0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0064dff0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 0064dc90 ["INT_ADD", "register:40f0:8", ["const:64dc90:8", "const:4:8"]]
- 0064dc90 ["CALL", null, ["callee:00c58f30:8"]]
+ 0064e040 ["INT_ADD", "register:40f0:8", ["const:64e040:8", "const:4:8"]]
+ 0064e040 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-1e32f7be225f2d0d6d509d9bc8e02ac3"></a>

### [`0064df50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064df50.md) → [`0064e300`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e300.md) FUN_0064e300

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0064a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064a570.md) [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006411b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/006411b4.md) [`00641ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ca8.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`0071d18c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d18c.md)
- 新版 呼出元 2件 [`0064a920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064a/0064a920.md) [`00653990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653990.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00641564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641564.md) [`00642058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00642/00642058.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`0071d53c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071d/0071d53c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.53% / 新版 78.53%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0064e3c0",
      "incomplete_value": true,
      "site": "0064e3c4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:19d8:8"
              ]
            ]
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e3f8",
      "value": [
        "leaf",
        "ram:642058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e048",
      "value": [
        "leaf",
        "ram:641ca8:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0064e004"
      ],
      [
        "FALL_THROUGH",
        "0064e3b4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0064e3b4",
      "incomplete_value": true,
      "site": "0064e3b8",
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
    "old": {
      "definition_site": "0064e004",
      "incomplete_value": true,
      "site": "0064e008",
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
    "ordinal": 22,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0064df7c",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064df84",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064e004",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0064e3c0"
      ]
    ]
  ],
  "added": [
    [
      "0064e32c",
      "WRITE",
      [
        "storage",
        "Stack[-0xc0]",
        null,
        null
      ]
    ],
    [
      "0064e334",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "0064e3b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0064e3c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064e014 ["INT_ADD", "register:40f0:8", ["const:64e014:8", "const:4:8"]]
- 0064e014 ["CALL", null, ["callee:0043bf04:8"]]
+ 0064e3c4 ["INT_ADD", "register:40f0:8", ["const:64e3c4:8", "const:4:8"]]
+ 0064e3c4 ["CALL", null, ["callee:0043bf04:8"]]
- 0064e048 ["INT_ADD", "register:40f0:8", ["const:64e048:8", "const:4:8"]]
- 0064e048 ["CALL", null, ["ram:641ca8:8"]]
+ 0064e3f8 ["INT_ADD", "register:40f0:8", ["const:64e3f8:8", "const:4:8"]]
+ 0064e3f8 ["CALL", null, ["ram:642058:8"]]
- 0064df7c ["COPY", "tmp:0:8", ["register:8:8"]]
- 0064df7c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-4d595b1b945af7cd3be3df9a7730284d"></a>

### [`0064e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e1dc.md) → [`0064e58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e58c.md) FUN_0064e58c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0064a570`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064a570.md) [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006411b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/006411b4.md) [`00641ca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ca8.md) [`0071bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071bf30.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 2件 [`0064a920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064a/0064a920.md) [`00653990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653990.md) · 呼出先 8件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00641564`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641564.md) [`00642058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00642/00642058.md) [`0071c2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c2e0.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.29% / 新版 87.29%

優先判定に残った影響 `call_target` 1件, `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e684",
      "value": [
        "leaf",
        "ram:642058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e2d4",
      "value": [
        "leaf",
        "ram:641ca8:8"
      ]
    },
    "ordinal": 3,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "0064e36c"
      ],
      [
        "FALL_THROUGH",
        "0064e71c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0064e71c",
      "incomplete_value": true,
      "site": "0064e720",
      "value": [
        "INT_EQUAL",
        "1",
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
    "old": {
      "definition_site": "0064e36c",
      "incomplete_value": true,
      "site": "0064e370",
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
    "ordinal": 23,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0064e1e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064e1e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0064e1e8",
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
      "0064e590",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0064e594",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "0064e598",
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
- 0064e2d4 ["INT_ADD", "register:40f0:8", ["const:64e2d4:8", "const:4:8"]]
- 0064e2d4 ["CALL", null, ["ram:641ca8:8"]]
+ 0064e684 ["INT_ADD", "register:40f0:8", ["const:64e684:8", "const:4:8"]]
+ 0064e684 ["CALL", null, ["ram:642058:8"]]
- 0064e1dc ["INT_SUB", "register:8:8", ["register:8:8", "const:b0:8"]]
- 0064e1e0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0064e1e0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0064e1e0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 0064e1e0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-9a5cd7d15d1fa3e64701903013617729"></a>

### [`0064e3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e3bc.md) → [`0064e76c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e76c.md) FUN_0064e76c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`0064e3b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e3b4.md) [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) · 呼出先 12件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047cacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047cacc.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md)
- 新版 呼出元 4件 [`0064e764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e764.md) [`0064e930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e930.md) [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`006b3fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3fac.md) · 呼出先 12件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047cdec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047c/0047cdec.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0063d10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d10c.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 89.38% / 新版 89.38%

優先判定に残った影響 `call_target` 2件, `store_value` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064e814",
      "incomplete_value": true,
      "site": "0064e824",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064e464",
      "incomplete_value": true,
      "site": "0064e474",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:408:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e8b8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e508",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 22,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e8c4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0064e514",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "unmatched:0064e3fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:0064e404",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0047cdec"
      ]
    ],
    [
      "unmatched:0064e408",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0064e7ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0064e7b4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0047cdec"
      ]
    ],
    [
      "0064e7b8",
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
- 0064e508 ["INT_ADD", "register:40f0:8", ["const:64e508:8", "const:4:8"]]
- 0064e508 ["CALL", null, ["ram:47ad34:8"]]
+ 0064e8b8 ["INT_ADD", "register:40f0:8", ["const:64e8b8:8", "const:4:8"]]
+ 0064e8b8 ["CALL", null, ["ram:47b054:8"]]
- 0064e514 ["INT_ADD", "register:40f0:8", ["const:64e514:8", "const:4:8"]]
- 0064e514 ["CALL", null, ["ram:47ad34:8"]]
+ 0064e8c4 ["INT_ADD", "register:40f0:8", ["const:64e8c4:8", "const:4:8"]]
+ 0064e8c4 ["CALL", null, ["ram:47b054:8"]]
- 0064e3d4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0064e3d4 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 0064e3d4 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 0064e3d4 ["CBRANCH", null, ["local:b6:8", "tmp:2:1"]]
+ 0064e784 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0064e784 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 0064e784 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 0064e784 ["CBRANCH", null, ["local:b4:8", "tmp:2:1"]]
~~~


<a id="compare-42d3291fe7d5d11b588c1c748b253302"></a>

### [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) → [`0064e930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e930.md) FUN_0064e930

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) · 呼出先 31件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470120.md) [`0048ce8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce8c.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)
- 新版 呼出元 1件 [`006b2db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2db0.md) · 呼出先 31件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470440.md) [`0048d1ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1ac.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, store_condition, store_value, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 97.08% / 新版 97.08%

優先判定に残った影響 `call_argument_candidate` 10件, `store_condition` 1件, `store_value` 3件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0064ec00",
      "incomplete_value": true,
      "site": "0064ec08",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064e850",
      "incomplete_value": true,
      "site": "0064e858",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:408:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0064ece0",
      "incomplete_value": false,
      "site": "0064ece0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064e930",
      "incomplete_value": false,
      "site": "0064e930",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 53,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0064ee64",
      "incomplete_value": false,
      "site": "0064ee64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0064eab4",
      "incomplete_value": false,
      "site": "0064eab4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:118:8"
          ]
        ]
      ]
    },
    "ordinal": 65,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0064e968",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "0064e97c",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064e984",
      "PARAM",
      [
        "storage",
        "00c738e0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "0064e968",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "0064e97c",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "0064e984",
      "PARAM",
      [
        "storage",
        "00c748b0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 0064e5dc ["INT_ADD", "register:40f0:8", ["const:64e5dc:8", "const:4:8"]]
- 0064e5dc ["CALL", null, ["callee:00c596b0:8"]]
+ 0064e98c ["INT_ADD", "register:40f0:8", ["const:64e98c:8", "const:4:8"]]
+ 0064e98c ["CALL", null, ["callee:00c596b0:8"]]
- 0064e98c ["COPY", "register:0:8", ["register:4040:8"]]
- 0064e98c ["INT_ADD", "register:40f0:8", ["const:64e98c:8", "const:4:8"]]
- 0064e98c ["CALLIND", null, ["register:0:8"]]
+ 0064ed3c ["COPY", "register:0:8", ["register:4040:8"]]
+ 0064ed3c ["INT_ADD", "register:40f0:8", ["const:64ed3c:8", "const:4:8"]]
+ 0064ed3c ["CALLIND", null, ["register:0:8"]]
- 0064ec3c ["INT_ADD", "register:40f0:8", ["const:64ec3c:8", "const:4:8"]]
- 0064ec3c ["CALL", null, ["callee:006c2338:8"]]
+ 0064efec ["INT_ADD", "register:40f0:8", ["const:64efec:8", "const:4:8"]]
+ 0064efec ["CALL", null, ["callee:006c2338:8"]]
~~~


<a id="compare-d34b8ba46fdf8a40a585e496ebfc86a4"></a>

### [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) → [`00651e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00651/00651e94.md) FUN_00651e94

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) · 呼出先 24件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md)
- 新版 呼出元 1件 [`006b3888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3888.md) · 呼出先 24件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 87.24% / 新版 87.24%

優先判定に残った影響 `call_argument_candidate` 24件, `call_target` 1件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00652280",
      "value": [
        "leaf",
        "ram:64c278:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00651ed0",
      "value": [
        "leaf",
        "ram:64bec8:8"
      ]
    },
    "ordinal": 72,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00651f94",
      "incomplete_value": true,
      "site": "00651fa4",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 84,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00651f9c",
      "incomplete_value": true,
      "site": "00651fa4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
            "4",
            [
              [
                "live",
                "register:40d0:4"
              ],
              "INT_SRIGHT"
            ]
          ]
        ]
      ]
    },
    "ordinal": 84,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00651f24",
      "DATA",
      [
        "storage",
        "0042ef64",
        null,
        "byte[43]"
      ]
    ],
    [
      "006521f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00651eb0"
      ]
    ],
    [
      "unmatched:00651e64",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b89cc"
      ]
    ]
  ],
  "added": [
    [
      "00651f24",
      "DATA",
      [
        "storage",
        "0042ef64",
        null,
        "byte[35]"
      ]
    ],
    [
      "006521f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652260"
      ]
    ],
    [
      "00652214",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b89cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 00651b20 ["INT_ADD", "register:40f0:8", ["const:651b20:8", "const:4:8"]]
- 00651b20 ["CALL", null, ["callee:00467bc0:8"]]
+ 00651ed0 ["INT_ADD", "register:40f0:8", ["const:651ed0:8", "const:4:8"]]
+ 00651ed0 ["CALL", null, ["callee:00467bc0:8"]]
- 00651ed0 ["INT_ADD", "register:40f0:8", ["const:651ed0:8", "const:4:8"]]
- 00651ed0 ["CALL", null, ["ram:64bec8:8"]]
+ 00652280 ["INT_ADD", "register:40f0:8", ["const:652280:8", "const:4:8"]]
+ 00652280 ["CALL", null, ["ram:64c278:8"]]
- 00651fa4 ["INT_ADD", "register:40f0:8", ["const:651fa4:8", "const:4:8"]]
- 00651fa4 ["CALL", null, ["callee:00468b64:8"]]
+ 00652354 ["INT_ADD", "register:40f0:8", ["const:652354:8", "const:4:8"]]
+ 00652354 ["CALL", null, ["callee:00468b64:8"]]
~~~


<a id="compare-e77e709658ecf624008d83d4f34e96b5"></a>

### [`00652500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652500.md) → [`006528b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/006528b0.md) FUN_006528b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0064133c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/0064133c.md) [`00793960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00793/00793960.md) [`00b2afe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2afe4.md) [`00b2b10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b10c.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`006416ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/006416ec.md) [`00793d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00793/00793d3c.md) [`00b2bfd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bfd8.md) [`00b2c100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c100.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 94.29% / 新版 94.29%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00652544",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652928"
      ]
    ]
  ],
  "added": [
    [
      "006528f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652928"
      ]
    ]
  ]
}
~~~


~~~diff
- 00652514 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00652514 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00652514 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00652514 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 006528c4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 006528c4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006528c4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006528c4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 00652540 ["INT_LESSEQUAL", "register:105:1", ["register:40a8:8", "register:4040:8"]]
- 00652540 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:40a8:8"]]
- 00652540 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:40a8:8"]]
- 00652540 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00652544 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
~~~


<a id="compare-bbe63d23c1667d25b1b6c2b0580403e5"></a>

### [`0065258c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/0065258c.md) → [`0065293c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/0065293c.md) FUN_0065293c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`0064133c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/0064133c.md) [`007906b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00790/007906b4.md) [`00793960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00793/00793960.md) [`00b2afe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2a/00b2afe4.md) [`00b2b10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2b/00b2b10c.md) · 呼出先 4件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 5件 [`006416ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/006416ec.md) [`00790a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00790/00790a90.md) [`00793d3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00793/00793d3c.md) [`00b2bfd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2b/00b2bfd8.md) [`00b2c100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2c/00b2c100.md) · 呼出先 4件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 79.03% / 新版 79.03%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "00652648",
      "incomplete_value": true,
      "site": "00652664",
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
      "unmatched:006525a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006525b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:006525d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006529e8"
      ]
    ]
  ],
  "added": [
    [
      "00652950",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00652968",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00652984",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006529e8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006525a0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006525a0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006525a0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 006525a0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006525a4 ["COPY", "tmp:0:8", ["const:40:8"]]
- 006525a4 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 006525a4 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 006525a4 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
- 006525a8 ["COPY", "register:40c0:8", ["register:1660:8"]]
~~~


<a id="compare-75c3f07d09f1c8c5afa69e965df03885"></a>

### [`006526c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/006526c4.md) → [`00652a74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652a74.md) FUN_00652a74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006526ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652ac8"
      ]
    ],
    [
      "unmatched:00652700",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652ac8"
      ]
    ]
  ],
  "added": [
    [
      "00652a9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652ac8"
      ]
    ],
    [
      "00652ab0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652ac8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006526c8 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 006526c8 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006526c8 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006526c8 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 00652a78 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 00652a78 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 00652a78 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 00652a78 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 006526e0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006526e0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006526e4 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 006526e4 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-49331bd3def1dd5d087ead57e9193bb1"></a>

### [`00652724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652724.md) → [`00652ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652ad4.md) FUN_00652ad4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`006409f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00640/006409f0.md) [`0064d680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064d680.md) [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md) [`006b0290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b0/006b0290.md) · 呼出先 5件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0064133c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/0064133c.md) [`00652840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652840.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 6件 [`00640da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00640/00640da0.md) [`0064da30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064da30.md) [`0065919c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00659/0065919c.md) [`0065b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065b/0065b130.md) [`006b0640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b0640.md) · 呼出先 5件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006416ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/006416ec.md) [`00652bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652bf0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.00% / 新版 55.00%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 6件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00652774",
      "incomplete_value": false,
      "site": "0065277c",
      "value": [
        "leaf",
        "const:78:8"
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
      "definition_site": "00652798",
      "incomplete_value": true,
      "site": "006527a0",
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
            "const:28:8"
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
      "definition_site": "0065279c",
      "incomplete_value": true,
      "site": "006527a0",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00652728",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065272c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00652730",
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
      "00652ad8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00652adc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00652ae0",
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
- 0065277c ["INT_ADD", "register:40f0:8", ["const:65277c:8", "const:4:8"]]
- 0065277c ["CALL", null, ["callee:00c58f30:8"]]
+ 00652b2c ["INT_ADD", "register:40f0:8", ["const:652b2c:8", "const:4:8"]]
+ 00652b2c ["CALL", null, ["callee:00c58f30:8"]]
- 006527a0 ["INT_ADD", "register:40f0:8", ["const:6527a0:8", "const:4:8"]]
- 006527a0 ["CALL", null, ["callee:006416ec:8"]]
+ 00652b50 ["INT_ADD", "register:40f0:8", ["const:652b50:8", "const:4:8"]]
+ 00652b50 ["CALL", null, ["callee:006416ec:8"]]
- 006527d0 ["INT_ADD", "register:40f0:8", ["const:6527d0:8", "const:4:8"]]
- 006527d0 ["CALL", null, ["callee:0043bf04:8"]]
+ 00652b80 ["INT_ADD", "register:40f0:8", ["const:652b80:8", "const:4:8"]]
+ 00652b80 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-1f7fd33c36cf9a30035fa2c427fc736f"></a>

### [`00652840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652840.md) → [`00652bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652bf0.md) FUN_00652bf0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00652724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652724.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00652ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652ad4.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 98.11% / 新版 98.11%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "006529d0",
      "incomplete_value": true,
      "site": "006529d8",
      "value": [
        "live",
        "register:4040:8"
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
      "unmatched:00652968",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652d08"
      ]
    ]
  ],
  "added": [
    [
      "00652d18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652d08"
      ]
    ]
  ]
}
~~~


~~~diff
- 006528a8 ["BRANCH", null, ["local:b29:8"]]
+ 00652c58 ["BRANCH", null, ["local:b30:8"]]
- 00652964 ["COPY", "register:4060:8", ["register:4018:8"]]
- 00652968 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00652968 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
~~~


<a id="compare-4a3a09777364120f83d06e422d3cea5a"></a>

### [`006529e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/006529e8.md) → [`00652d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652d98.md) FUN_00652d98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006529e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006529ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006529f0",
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
      "00652d98",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00652d9c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00652da0",
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
- 006529e8 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006529e8 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006529e8 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 006529e8 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006529ec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006529ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 006529f0 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006529f0 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006529f0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006529f0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-1c6c0efe0eb1a2541e7369063f09e28a"></a>

### [`00652a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652a98.md) → [`00652e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652e48.md) FUN_00652e48

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 8件 [`006409f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00640/006409f0.md) [`0064d680`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064d680.md) [`00652a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652a98.md) [`00652c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652c78.md) [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) · 呼出先 2件 [`00652a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652a98.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 8件 [`00640da0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00640/00640da0.md) [`0064da30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064da30.md) [`00652e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652e48.md) [`00653028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653028.md) [`0065919c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00659/0065919c.md) · 呼出先 2件 [`00652e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652e48.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.78% / 新版 97.78%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00652e60",
      "incomplete_value": true,
      "site": "00652e68",
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 00652ab8 ["INT_ADD", "register:40f0:8", ["const:652ab8:8", "const:4:8"]]
- 00652ab8 ["CALL", null, ["local:b0:8"]]
+ 00652e68 ["INT_ADD", "register:40f0:8", ["const:652e68:8", "const:4:8"]]
+ 00652e68 ["CALL", null, ["local:b0:8"]]
- 00652a98 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00652a98 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00652e48 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00652e48 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 00652aa8 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-8357bbae8749a77ed33e5bad7fdaf7f5"></a>

### [`00652b4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652b4c.md) → [`00652efc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652efc.md) FUN_00652efc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0063c60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063c60c.md) [`0063cd5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063c/0063cd5c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`0063c9bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063c/0063c9bc.md) [`0063d10c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063d/0063d10c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00652f08",
      "incomplete_value": false,
      "site": "00652f0c",
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
      "definition_site": "00652b58",
      "incomplete_value": false,
      "site": "00652b5c",
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
      "00652f08",
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
      "00652f08",
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
- 00652b5c ["INT_ADD", "register:40f0:8", ["const:652b5c:8", "const:4:8"]]
- 00652b5c ["CALL", null, ["callee:0043bad8:8"]]
+ 00652f0c ["INT_ADD", "register:40f0:8", ["const:652f0c:8", "const:4:8"]]
+ 00652f0c ["CALL", null, ["callee:0043bad8:8"]]
- 00652b54 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00652f04 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00652b58 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00652b58 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00652b58 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00652b58 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00652f08 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00652f08 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00652f08 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00652f08 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-9aba5ba3b637814f97ffab17028b6077"></a>

### [`00652b60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652b60.md) → [`00652f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652f10.md) FUN_00652f10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) · 呼出先 3件 [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 1件 [`0063e100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e100.md) · 呼出先 3件 [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.68% / 新版 92.68%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00652bb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652f90"
      ]
    ]
  ],
  "added": [
    [
      "00652f60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00652f90"
      ]
    ]
  ]
}
~~~


~~~diff
- 00652b70 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00652b88 ["INT_ADD", "register:40f0:8", ["const:652b88:8", "const:4:8"]]
- 00652b88 ["CALL", null, ["callee:00c58f30:8"]]
+ 00652f38 ["INT_ADD", "register:40f0:8", ["const:652f38:8", "const:4:8"]]
+ 00652f38 ["CALL", null, ["callee:00c58f30:8"]]
- 00652bac ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00652bac ["INT_LESSEQUAL", "register:105:1", ["tmp:0:8", "register:4040:8"]]
- 00652bac ["INT_SBORROW", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00652bac ["INT_SUB", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b5fd0f0eb47251049be0225842d7113d"></a>

### [`00652c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652c2c.md) → [`00652fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652fdc.md) FUN_00652fdc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.21% / 新版 84.21%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00652c2c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00652c30",
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
      "00652fdc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00652fe0",
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
- 00652c2c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00652c2c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00652c2c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 00652c2c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00652c30 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00652c30 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00652c34 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-2abe1922543a87a0583254aac8b405bb"></a>

### [`00652c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652c78.md) → [`00653028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653028.md) FUN_00653028

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) [`00652c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652c78.md) [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) · 呼出先 3件 [`00652a98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652a98.md) [`00652c78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652c78.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0063e100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e100.md) [`00653028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653028.md) [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) · 呼出先 3件 [`00652e48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00652/00652e48.md) [`00653028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653028.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 65.00% / 新版 65.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00653044",
      "incomplete_value": true,
      "site": "00653048",
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
      "definition_site": "00652c94",
      "incomplete_value": true,
      "site": "00652c98",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "00652cac",
      "incomplete_value": true,
      "site": "00652cb0",
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
            "const:28:8"
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
      "definition_site": "00652ca8",
      "incomplete_value": true,
      "site": "00652cb0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:30:8"
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
      "unmatched:00652c7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00652c80",
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
      "0065302c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00653030",
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
- 00652c98 ["INT_ADD", "register:40f0:8", ["const:652c98:8", "const:4:8"]]
- 00652c98 ["CALL", null, ["local:b0:8"]]
+ 00653048 ["INT_ADD", "register:40f0:8", ["const:653048:8", "const:4:8"]]
+ 00653048 ["CALL", null, ["local:b0:8"]]
- 00652cb0 ["INT_ADD", "register:40f0:8", ["const:652cb0:8", "const:4:8"]]
- 00652cb0 ["CALL", null, ["callee:00652e48:8"]]
+ 00653060 ["INT_ADD", "register:40f0:8", ["const:653060:8", "const:4:8"]]
+ 00653060 ["CALL", null, ["callee:00652e48:8"]]
- 00652c78 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00652c78 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00653028 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00653028 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-2337f655cb17e8d2d8e4ffd972ff44f4"></a>

### [`00652cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652cc8.md) → [`00653078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653078.md) FUN_00653078

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) [`00652cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652cc8.md) [`00866da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00866/00866da0.md) · 呼出先 2件 [`00652cc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652cc8.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 3件 [`0063e100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e100.md) [`00653078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653078.md) [`00867d4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00867/00867d4c.md) · 呼出先 2件 [`00653078`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653078.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "00652cec",
      "incomplete_value": true,
      "site": "00652cf4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
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


~~~diff
- 00652cf4 ["INT_ADD", "register:40f0:8", ["const:652cf4:8", "const:4:8"]]
- 00652cf4 ["CALL", null, ["local:b0:8"]]
+ 006530a4 ["INT_ADD", "register:40f0:8", ["const:6530a4:8", "const:4:8"]]
+ 006530a4 ["CALL", null, ["local:b0:8"]]
- 00652cc8 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00652cc8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 00653078 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 00653078 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 00652ce8 ["INT_ADD", "register:40f0:8", ["const:652ce8:8", "const:4:8"]]
- 00652ce8 ["CALL", null, ["local:b0:8"]]
+ 00653098 ["INT_ADD", "register:40f0:8", ["const:653098:8", "const:4:8"]]
+ 00653098 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-fd3db3a59ff766294ea36288fa16131f"></a>

### [`00652d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652d0c.md) → [`006530bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006530bc.md) FUN_006530bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) [`00652d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652d0c.md) [`006584c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006584c8.md) [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) [`00865d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00865/00865d00.md) · 呼出先 2件 [`00652d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652d0c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 8件 [`0063e100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e100.md) [`006530bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006530bc.md) [`00658878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658878.md) [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) [`00866cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00866/00866cac.md) · 呼出先 2件 [`006530bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006530bc.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.78% / 新版 83.78%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006530e4",
      "incomplete_value": true,
      "site": "006530e8",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "006530e0",
      "incomplete_value": true,
      "site": "006530e8",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": null,
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
      "unmatched:00652d10",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00652d14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00652d18",
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
      "006530c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006530c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006530c8",
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
- 00652d38 ["INT_ADD", "register:40f0:8", ["const:652d38:8", "const:4:8"]]
- 00652d38 ["CALL", null, ["local:b0:8"]]
+ 006530e8 ["INT_ADD", "register:40f0:8", ["const:6530e8:8", "const:4:8"]]
+ 006530e8 ["CALL", null, ["local:b0:8"]]
- 00652d0c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 00652d0c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 006530bc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006530bc ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 00652d10 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00652d10 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00652d10 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00652d10 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-7852357d054f96462265f8a2730115a6"></a>

### [`00652da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652da0.md) → [`00653150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653150.md) FUN_00653150

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 7件 [`00642050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00642/00642050.md) [`00677a80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00677/00677a80.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) [`00763db0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763db0.md) [`007647c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007647c8.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0063678c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00636/0063678c.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 7件 [`00642400`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00642/00642400.md) [`00677e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00677/00677e30.md) [`0075ef88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075e/0075ef88.md) [`0076418c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/0076418c.md) [`00764ba4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/00764ba4.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00636b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00636/00636b3c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.50% / 新版 82.50%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00653260",
      "incomplete_value": true,
      "site": "00653264",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:00652e3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653254"
      ]
    ],
    [
      "unmatched:00652e90",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "006531ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653254"
      ]
    ],
    [
      "00653240",
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
- 00652eb4 ["INT_ADD", "register:40f0:8", ["const:652eb4:8", "const:4:8"]]
- 00652eb4 ["CALL", null, ["callee:00c58f50:8"]]
+ 00653264 ["INT_ADD", "register:40f0:8", ["const:653264:8", "const:4:8"]]
+ 00653264 ["CALL", null, ["callee:00c58f50:8"]]
- 00652de0 ["INT_SUB", "register:4048:8", ["register:4050:8", "register:4048:8"]]
- 00652de4 ["INT_SRIGHT", "register:4050:8", ["register:4048:8", "const:3:8"]]
~~~


<a id="compare-0ede7ddcf6ba9f56e8259db7c85760bf"></a>

### [`00652ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652ee0.md) → [`00653290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653290.md) FUN_00653290

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00643130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00643/00643130.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`00653174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653174.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`006434e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00643/006434e0.md) · 呼出先 7件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00653524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653524.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 66.67% / 新版 66.67%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件, `unresolved_branch_alignment` 10件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00652fac",
      "incomplete_value": true,
      "site": "00652fb0",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00653410",
      "incomplete_value": true,
      "site": "00653430",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
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
      "unmatched:00652f0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00652f24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653434"
      ]
    ],
    [
      "unmatched:00652f38",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006532bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "006532d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653434"
      ]
    ],
    [
      "006532e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00652fb0 ["INT_ADD", "register:40f0:8", ["const:652fb0:8", "const:4:8"]]
- 00652fb0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00653360 ["INT_ADD", "register:40f0:8", ["const:653360:8", "const:4:8"]]
+ 00653360 ["CALL", null, ["callee:00c58f30:8"]]
- 00652f08 ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:28:8"]]
- 00652f08 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00652f0c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00652f0c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00652f0c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-71ea7326bc048c447efb2e16e0bd3454"></a>

### [`00653174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653174.md) → [`00653524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653524.md) FUN_00653524

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00645010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/00645010.md) [`00652ee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00652/00652ee0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 2件 [`006453c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00645/006453c0.md) [`00653290`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653290.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00653530",
      "incomplete_value": false,
      "site": "00653534",
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
      "definition_site": "00653180",
      "incomplete_value": false,
      "site": "00653184",
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
      "00653530",
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
      "00653530",
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
- 00653184 ["INT_ADD", "register:40f0:8", ["const:653184:8", "const:4:8"]]
- 00653184 ["CALL", null, ["callee:0043bad8:8"]]
+ 00653534 ["INT_ADD", "register:40f0:8", ["const:653534:8", "const:4:8"]]
+ 00653534 ["CALL", null, ["callee:0043bad8:8"]]
- 0065317c ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 0065352c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00653180 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00653180 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00653180 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00653180 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00653530 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00653530 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00653530 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00653530 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2e8dd32e86fac755e7b310cf3b5aa106"></a>

### [`00653188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653188.md) → [`00653538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653538.md) FUN_00653538

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00645010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/00645010.md) · 呼出先 3件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`006453c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00645/006453c0.md) · 呼出先 3件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.34% / 新版 89.34%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 4件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00653254",
      "incomplete_value": true,
      "site": "00653258",
      "value": [
        "INT_LEFT",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:5:8"
          ]
        ]
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006532a8"
      ],
      [
        "FALL_THROUGH",
        "00653658"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00653658",
      "incomplete_value": true,
      "site": "00653664",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
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
      "definition_site": "006532a8",
      "incomplete_value": true,
      "site": "006532b4",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006532a8"
      ],
      [
        "FALL_THROUGH",
        "00653658"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00653658",
      "incomplete_value": true,
      "site": "00653664",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
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
      "definition_site": "006532a8",
      "incomplete_value": true,
      "site": "006532b4",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "INT_EQUAL",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00653198",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00653208",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653698"
      ]
    ],
    [
      "unmatched:006532a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653624"
      ]
    ]
  ],
  "added": [
    [
      "00653548",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006535b8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653698"
      ]
    ],
    [
      "00653658",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653624"
      ]
    ]
  ]
}
~~~


~~~diff
- 00653258 ["INT_ADD", "register:40f0:8", ["const:653258:8", "const:4:8"]]
- 00653258 ["CALL", null, ["callee:00c58f30:8"]]
+ 00653608 ["INT_ADD", "register:40f0:8", ["const:653608:8", "const:4:8"]]
+ 00653608 ["CALL", null, ["callee:00c58f30:8"]]
- 00653198 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00653198 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00653198 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 00653198 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0065319c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-e25ff159435b52bd4bb8f7ccc5b1863a"></a>

### [`00653370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653370.md) → [`00653720`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653720.md) FUN_00653720

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00645010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00645/00645010.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 1件 [`006453c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00645/006453c0.md) · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006533f8"
      ],
      [
        "FALL_THROUGH",
        "006537a8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006537a8",
      "incomplete_value": true,
      "site": "006537ac",
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
      "definition_site": "006533f8",
      "incomplete_value": true,
      "site": "006533fc",
      "value": [
        "INT_EQUAL",
        "1",
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
    "ordinal": 17,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00653480"
      ],
      [
        "FALL_THROUGH",
        "00653830"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00653830",
      "incomplete_value": true,
      "site": "00653834",
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
      "definition_site": "00653480",
      "incomplete_value": true,
      "site": "00653484",
      "value": [
        "INT_EQUAL",
        "1",
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
    "ordinal": 29,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006533dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653758"
      ]
    ],
    [
      "00653794",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006533f4"
      ]
    ],
    [
      "unmatched:006533f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006537b8"
      ]
    ]
  ],
  "added": [
    [
      "0065378c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653758"
      ]
    ],
    [
      "00653794",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006537a4"
      ]
    ],
    [
      "006537a0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006537b8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065339c ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
+ 0065374c ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
- 006533d8 ["INT_LESSEQUAL", "register:105:1", ["register:40b8:8", "register:4048:8"]]
- 006533d8 ["INT_SBORROW", "register:106:1", ["register:4048:8", "register:40b8:8"]]
- 006533d8 ["INT_SUB", "tmp:0:8", ["register:4048:8", "register:40b8:8"]]
- 006533d8 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 006533dc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006533dc ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
~~~


<a id="compare-5cb47b53549c91399fd207edd4cf40b2"></a>

### [`006534e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006534e8.md) → [`00653898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653898.md) FUN_00653898

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
      "definition_site": "006538ac",
      "incomplete_value": false,
      "site": "006538b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006534fc",
      "incomplete_value": false,
      "site": "00653500",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:908:8"
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
      "006538b0",
      "DATA",
      [
        "storage",
        "00c73908",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006538b0",
      "DATA",
      [
        "storage",
        "00c748d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006534f4 ["INT_ADD", "register:40f0:8", ["const:6534f4:8", "const:4:8"]]
- 006534f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 006538a4 ["INT_ADD", "register:40f0:8", ["const:6538a4:8", "const:4:8"]]
+ 006538a4 ["CALL", null, ["callee:00c58f30:8"]]
- 006534f8 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006538a8 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006534fc ["COPY", "tmp:0:8", ["const:908:8"]]
- 006534fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006534fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006534fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006538ac ["COPY", "tmp:0:8", ["const:8d8:8"]]
+ 006538ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006538ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006538ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5df4b26be1610515ad67541b9fec03fa"></a>

### [`0065350c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/0065350c.md) → [`006538bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/006538bc.md) FUN_006538bc

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
      "definition_site": "006538c0",
      "incomplete_value": false,
      "site": "006538c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:8d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00653510",
      "incomplete_value": false,
      "site": "00653514",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:908:8"
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
      "006538c4",
      "DATA",
      [
        "storage",
        "00c73908",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006538c4",
      "DATA",
      [
        "storage",
        "00c748d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065350c ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006538bc ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00653510 ["COPY", "tmp:0:8", ["const:908:8"]]
- 00653510 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00653510 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00653510 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006538c0 ["COPY", "tmp:0:8", ["const:8d8:8"]]
+ 006538c0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006538c0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006538c0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-727002754d8d34de6b654c0e88a7e91f"></a>

### [`00653558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/00653558.md) → [`00653908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653908.md) FUN_00653908

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
    "new": {
      "definition_site": "00653918",
      "incomplete_value": false,
      "site": "0065391c",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:0065357c",
      "DATA",
      [
        "storage",
        "00c73998",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00653580",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00653584",
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
      "0065392c",
      "DATA",
      [
        "storage",
        "00c74968",
        null,
        "undefined *"
      ]
    ],
    [
      "00653930",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00653934",
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
- 0065356c ["INT_ADD", "register:40f0:8", ["const:65356c:8", "const:4:8"]]
- 0065356c ["CALL", null, ["callee:00c58f30:8"]]
+ 0065391c ["INT_ADD", "register:40f0:8", ["const:65391c:8", "const:4:8"]]
+ 0065391c ["CALL", null, ["callee:00c58f30:8"]]
- 00653574 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00653924 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00653578 ["COPY", "tmp:0:8", ["const:998:8"]]
- 00653578 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00653578 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00653578 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b56ad665907e2a52e09c9040f37329da"></a>

### [`006535a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535a8.md) → [`00653958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653958.md) FUN_00653958

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 1件 [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00653990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653990.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-c8458aab861933a9c405d67aee971d00"></a>

### [`006535e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535e0.md) → [`00653990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653990.md) FUN_00653990

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006535a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00653/006535a8.md) · 呼出先 45件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)
- 新版 呼出元 1件 [`00653958`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00653/00653958.md) · 呼出先 45件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 58件, `call_target` 2件, `unresolved_branch_alignment` 56件, `unresolved_call_alignment` 92件, `unresolved_store_alignment` 45件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00653664",
      "incomplete_value": true,
      "site": "0065366c",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006536bc",
      "incomplete_value": true,
      "site": "006536c0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00653bdc",
      "incomplete_value": true,
      "site": "00653be0",
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
              "INT_LEFT"
            ]
          ],
          [
            "leaf",
            "const:724:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:00653610",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:00653614",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653a10"
      ]
    ],
    [
      "unmatched:00653618",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ],
  "added": [
    [
      "006539c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "006539c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00653a10"
      ]
    ],
    [
      "006539c8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065366c ["INT_ADD", "register:40f0:8", ["const:65366c:8", "const:4:8"]]
- 0065366c ["CALL", null, ["callee:008b7ea8:8"]]
+ 00653a1c ["INT_ADD", "register:40f0:8", ["const:653a1c:8", "const:4:8"]]
+ 00653a1c ["CALL", null, ["callee:008b7ea8:8"]]
- 006536c0 ["INT_ADD", "register:40f0:8", ["const:6536c0:8", "const:4:8"]]
- 006536c0 ["CALL", null, ["callee:008b7ea8:8"]]
+ 00653a70 ["INT_ADD", "register:40f0:8", ["const:653a70:8", "const:4:8"]]
+ 00653a70 ["CALL", null, ["callee:008b7ea8:8"]]
- 00653830 ["INT_ADD", "register:40f0:8", ["const:653830:8", "const:4:8"]]
- 00653830 ["CALL", null, ["callee:00b30a48:8"]]
+ 00653be0 ["INT_ADD", "register:40f0:8", ["const:653be0:8", "const:4:8"]]
+ 00653be0 ["CALL", null, ["callee:00b30a48:8"]]
~~~


<a id="compare-80c2fff5aa6d761be459384953a5ca9d"></a>

### [`006550f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006550f8.md) → [`006554a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/006554a8.md) FUN_006554a8

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
      "definition_site": "006554bc",
      "incomplete_value": false,
      "site": "006554c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065510c",
      "incomplete_value": false,
      "site": "00655110",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "006554c0",
      "DATA",
      [
        "storage",
        "00c73a08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006554c0",
      "DATA",
      [
        "storage",
        "00c749d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655104 ["INT_ADD", "register:40f0:8", ["const:655104:8", "const:4:8"]]
- 00655104 ["CALL", null, ["callee:00c58f30:8"]]
+ 006554b4 ["INT_ADD", "register:40f0:8", ["const:6554b4:8", "const:4:8"]]
+ 006554b4 ["CALL", null, ["callee:00c58f30:8"]]
- 00655108 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006554b8 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 0065510c ["COPY", "tmp:0:8", ["const:a08:8"]]
- 0065510c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065510c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065510c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006554bc ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 006554bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006554bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006554bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-abb8da8a7c3df00cd76a0f87d3f8b397"></a>

### [`0065511c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/0065511c.md) → [`006554cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/006554cc.md) FUN_006554cc

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
      "definition_site": "006554d0",
      "incomplete_value": false,
      "site": "006554d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:9d8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655120",
      "incomplete_value": false,
      "site": "00655124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a08:8"
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
      "006554d4",
      "DATA",
      [
        "storage",
        "00c73a08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006554d4",
      "DATA",
      [
        "storage",
        "00c749d8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065511c ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006554cc ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655120 ["COPY", "tmp:0:8", ["const:a08:8"]]
- 00655120 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655120 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655120 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006554d0 ["COPY", "tmp:0:8", ["const:9d8:8"]]
+ 006554d0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006554d0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006554d0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-679eebf500afcf1e3c0f814af03631f4"></a>

### [`006551c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006551c0.md) → [`00655570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655570.md) FUN_00655570

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
      "definition_site": "00655584",
      "incomplete_value": false,
      "site": "00655588",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:a58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006551d4",
      "incomplete_value": false,
      "site": "006551d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "00655588",
      "DATA",
      [
        "storage",
        "00c73a88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655588",
      "DATA",
      [
        "storage",
        "00c74a58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006551cc ["INT_ADD", "register:40f0:8", ["const:6551cc:8", "const:4:8"]]
- 006551cc ["CALL", null, ["callee:00c58f30:8"]]
+ 0065557c ["INT_ADD", "register:40f0:8", ["const:65557c:8", "const:4:8"]]
+ 0065557c ["CALL", null, ["callee:00c58f30:8"]]
- 006551d0 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00655580 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006551d4 ["COPY", "tmp:0:8", ["const:a88:8"]]
- 006551d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006551d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006551d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655584 ["COPY", "tmp:0:8", ["const:a58:8"]]
+ 00655584 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655584 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655584 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4215426f7efd7c312d87ed6719d5ba78"></a>

### [`006551e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006551e4.md) → [`00655594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655594.md) FUN_00655594

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
      "definition_site": "00655598",
      "incomplete_value": false,
      "site": "0065559c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:a58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006551e8",
      "incomplete_value": false,
      "site": "006551ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:a88:8"
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
      "0065559c",
      "DATA",
      [
        "storage",
        "00c73a88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065559c",
      "DATA",
      [
        "storage",
        "00c74a58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006551e4 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00655594 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006551e8 ["COPY", "tmp:0:8", ["const:a88:8"]]
- 006551e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006551e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006551e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655598 ["COPY", "tmp:0:8", ["const:a58:8"]]
+ 00655598 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655598 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655598 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7789a9c995d0a5d7e9091e94cb921142"></a>

### [`00655288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655288.md) → [`00655638`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655638.md) FUN_00655638

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
      "definition_site": "0065564c",
      "incomplete_value": false,
      "site": "00655650",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065529c",
      "incomplete_value": false,
      "site": "006552a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b08:8"
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
      "00655650",
      "DATA",
      [
        "storage",
        "00c73b08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655650",
      "DATA",
      [
        "storage",
        "00c74ad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655294 ["INT_ADD", "register:40f0:8", ["const:655294:8", "const:4:8"]]
- 00655294 ["CALL", null, ["callee:00c58f30:8"]]
+ 00655644 ["INT_ADD", "register:40f0:8", ["const:655644:8", "const:4:8"]]
+ 00655644 ["CALL", null, ["callee:00c58f30:8"]]
- 00655298 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00655648 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 0065529c ["COPY", "tmp:0:8", ["const:b08:8"]]
- 0065529c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065529c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065529c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065564c ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 0065564c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065564c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065564c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f5d30963584017b3fe8a817d61f86bb6"></a>

### [`006552ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006552ac.md) → [`0065565c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/0065565c.md) FUN_0065565c

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
      "definition_site": "00655660",
      "incomplete_value": false,
      "site": "00655664",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:ad8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006552b0",
      "incomplete_value": false,
      "site": "006552b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b08:8"
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
      "00655664",
      "DATA",
      [
        "storage",
        "00c73b08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655664",
      "DATA",
      [
        "storage",
        "00c74ad8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006552ac ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 0065565c ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006552b0 ["COPY", "tmp:0:8", ["const:b08:8"]]
- 006552b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006552b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006552b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655660 ["COPY", "tmp:0:8", ["const:ad8:8"]]
+ 00655660 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655660 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655660 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ed629c988f91be77de8dbc865150e179"></a>

### [`00655350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655350.md) → [`00655700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655700.md) FUN_00655700

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 77.78% / 新版 77.78%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00655368",
      "DATA",
      [
        "storage",
        "00c73b88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00655718",
      "DATA",
      [
        "storage",
        "00c74b58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065535c ["INT_ADD", "register:40f0:8", ["const:65535c:8", "const:4:8"]]
- 0065535c ["CALL", null, ["callee:00c58f30:8"]]
+ 0065570c ["INT_ADD", "register:40f0:8", ["const:65570c:8", "const:4:8"]]
+ 0065570c ["CALL", null, ["callee:00c58f30:8"]]
- 00655360 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00655710 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655364 ["COPY", "tmp:0:8", ["const:b88:8"]]
- 00655364 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655364 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655364 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9a5b802d603392ed3cfaf39e66a100d6"></a>

### [`00655374`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655374.md) → [`00655724`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655724.md) FUN_00655724

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
      "definition_site": "00655728",
      "incomplete_value": false,
      "site": "0065572c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:b58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655378",
      "incomplete_value": false,
      "site": "0065537c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:b88:8"
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
      "0065572c",
      "DATA",
      [
        "storage",
        "00c73b88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065572c",
      "DATA",
      [
        "storage",
        "00c74b58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655374 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00655724 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655378 ["COPY", "tmp:0:8", ["const:b88:8"]]
- 00655378 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655378 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655378 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00655728 ["COPY", "tmp:0:8", ["const:b58:8"]]
+ 00655728 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00655728 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00655728 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d84fe24fa5fcb03e2aae4524d604f7bd"></a>

### [`00655418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655418.md) → [`006557c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/006557c8.md) FUN_006557c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00655430",
      "DATA",
      [
        "storage",
        "00c73c08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00655434",
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
      "006557e0",
      "DATA",
      [
        "storage",
        "00c74bd8",
        null,
        "undefined *"
      ]
    ],
    [
      "006557e4",
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
- 00655424 ["INT_ADD", "register:40f0:8", ["const:655424:8", "const:4:8"]]
- 00655424 ["CALL", null, ["callee:00c58f30:8"]]
+ 006557d4 ["INT_ADD", "register:40f0:8", ["const:6557d4:8", "const:4:8"]]
+ 006557d4 ["CALL", null, ["callee:00c58f30:8"]]
- 00655428 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006557d8 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 0065542c ["COPY", "tmp:0:8", ["const:c08:8"]]
- 0065542c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065542c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065542c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1540619e682bb069513855b7f749a156"></a>

### [`0065543c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/0065543c.md) → [`006557ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/006557ec.md) FUN_006557ec

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
      "definition_site": "006557f0",
      "incomplete_value": false,
      "site": "006557f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:bd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655440",
      "incomplete_value": false,
      "site": "00655444",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c08:8"
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
      "006557f4",
      "DATA",
      [
        "storage",
        "00c73c08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006557f4",
      "DATA",
      [
        "storage",
        "00c74bd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065543c ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006557ec ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655440 ["COPY", "tmp:0:8", ["const:c08:8"]]
- 00655440 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655440 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655440 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006557f0 ["COPY", "tmp:0:8", ["const:bd8:8"]]
+ 006557f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006557f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006557f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-587d79d6c1c95b92b560e2735882cee6"></a>

### [`006554e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006554e0.md) → [`00655890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655890.md) FUN_00655890

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
      "definition_site": "006558b4",
      "incomplete_value": false,
      "site": "006558b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655504",
      "incomplete_value": false,
      "site": "00655504",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c88:8"
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
      "006558b4",
      "DATA",
      [
        "storage",
        "00c73c88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006558b4",
      "DATA",
      [
        "storage",
        "00c74c58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006554f4 ["INT_ADD", "register:40f0:8", ["const:6554f4:8", "const:4:8"]]
- 006554f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 006558a4 ["INT_ADD", "register:40f0:8", ["const:6558a4:8", "const:4:8"]]
+ 006558a4 ["CALL", null, ["callee:00c58f30:8"]]
- 006554fc ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006558ac ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655500 ["COPY", "tmp:0:8", ["const:c88:8"]]
- 00655500 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655500 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655500 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006558b0 ["COPY", "tmp:0:8", ["const:c58:8"]]
+ 006558b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006558b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006558b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-35df2875d4b8d6d78b014601ae5181f0"></a>

### [`00655514`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655514.md) → [`006558c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/006558c4.md) FUN_006558c4

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
      "definition_site": "006558d0",
      "incomplete_value": false,
      "site": "006558d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:c58:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655520",
      "incomplete_value": false,
      "site": "00655520",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:c88:8"
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
      "006558d0",
      "DATA",
      [
        "storage",
        "00c73c88",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006558d0",
      "DATA",
      [
        "storage",
        "00c74c58",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655518 ["COPY", "register:4048:8", ["const:c73000:8"]]
+ 006558c8 ["COPY", "register:4048:8", ["const:c74000:8"]]
- 0065551c ["COPY", "tmp:0:8", ["const:c88:8"]]
- 0065551c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0065551c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0065551c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006558cc ["COPY", "tmp:0:8", ["const:c58:8"]]
+ 006558cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006558cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006558cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-8a4c11a11bf381e656ee6c5b426d95b7"></a>

### [`00655884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655884.md) → [`00655c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655c34.md) FUN_00655c34

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0065588c",
      "incomplete_value": false,
      "site": "00655890",
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
      "unmatched:0065589c",
      "DATA",
      [
        "storage",
        "00c73d18",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006558a0",
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
      "00655c4c",
      "DATA",
      [
        "storage",
        "00c74ce8",
        null,
        "undefined *"
      ]
    ],
    [
      "00655c50",
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
- 00655890 ["INT_ADD", "register:40f0:8", ["const:655890:8", "const:4:8"]]
- 00655890 ["CALL", null, ["callee:00c58f30:8"]]
+ 00655c40 ["INT_ADD", "register:40f0:8", ["const:655c40:8", "const:4:8"]]
+ 00655c40 ["CALL", null, ["callee:00c58f30:8"]]
- 00655894 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00655c44 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655898 ["COPY", "tmp:0:8", ["const:d18:8"]]
- 00655898 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655898 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655898 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f6445752ccfc95ac0ec34a52370327c8"></a>

### [`006558c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006558c0.md) → [`00655c70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655c70.md) FUN_00655c70

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00641f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641f80.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00642330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00642/00642330.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 branch_condition_or_target, call, call_target, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.08% / 新版 95.08%

優先判定に残った影響 `call_target` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655d1c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065596c",
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
      "site": "00655d28",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655978",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "unmatched:0065595c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00655d40"
      ]
    ],
    [
      "00655d1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00655d28",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00655d0c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00655d40"
      ]
    ],
    [
      "00655d1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00655d28",
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
- 0065596c ["INT_ADD", "register:40f0:8", ["const:65596c:8", "const:4:8"]]
- 0065596c ["CALL", null, ["ram:47ad34:8"]]
+ 00655d1c ["INT_ADD", "register:40f0:8", ["const:655d1c:8", "const:4:8"]]
+ 00655d1c ["CALL", null, ["ram:47b054:8"]]
- 00655978 ["INT_ADD", "register:40f0:8", ["const:655978:8", "const:4:8"]]
- 00655978 ["CALL", null, ["ram:47ad34:8"]]
+ 00655d28 ["INT_ADD", "register:40f0:8", ["const:655d28:8", "const:4:8"]]
+ 00655d28 ["CALL", null, ["ram:47b054:8"]]
- 006558d8 ["INT_ADD", "register:40f0:8", ["const:6558d8:8", "const:4:8"]]
- 006558d8 ["CALL", null, ["callee:008b7ea8:8"]]
+ 00655c88 ["INT_ADD", "register:40f0:8", ["const:655c88:8", "const:4:8"]]
+ 00655c88 ["CALL", null, ["callee:008b7ea8:8"]]
~~~


<a id="compare-c614d6811c9477d94e1d57b9a4f081f5"></a>

### [`006559e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/006559e0.md) → [`00655d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655d90.md) FUN_00655d90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 53.85% / 新版 53.85%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00655a04",
      "DATA",
      [
        "storage",
        "00c73d98",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00655a08",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00655a0c",
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
      "00655db4",
      "DATA",
      [
        "storage",
        "00c74d68",
        null,
        "undefined *"
      ]
    ],
    [
      "00655db8",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "00655dbc",
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
- 006559e8 ["COPY", "register:40e8:8", ["register:8:8"]]
- 006559f4 ["INT_ADD", "register:40f0:8", ["const:6559f4:8", "const:4:8"]]
- 006559f4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00655da4 ["INT_ADD", "register:40f0:8", ["const:655da4:8", "const:4:8"]]
+ 00655da4 ["CALL", null, ["callee:00c58f30:8"]]
- 006559fc ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00655dac ["COPY", "register:4040:8", ["const:c74000:8"]]
~~~


<a id="compare-84d75fabba87f33e6fb2a26bc8b9e90f"></a>

### [`00655a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655a30.md) → [`00655de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00655/00655de0.md) FUN_00655de0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`00655e30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655e30.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`005e3504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e3/005e3504.md) [`006561e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00656/006561e0.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00655f9c",
      "incomplete_value": true,
      "site": "00655f9c",
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
      "definition_site": "00655bec",
      "incomplete_value": true,
      "site": "00655bec",
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
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655e1c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655a6c",
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
      "site": "00655e38",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00655a88",
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
      "00655e1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00655e38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "00655e80",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[43]"
      ]
    ]
  ],
  "added": [
    [
      "00655e1c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00655e38",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "00655e80",
      "DATA",
      [
        "storage",
        "004347c0",
        null,
        "byte[35]"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655a6c ["INT_ADD", "register:40f0:8", ["const:655a6c:8", "const:4:8"]]
- 00655a6c ["CALL", null, ["ram:47ad34:8"]]
+ 00655e1c ["INT_ADD", "register:40f0:8", ["const:655e1c:8", "const:4:8"]]
+ 00655e1c ["CALL", null, ["ram:47b054:8"]]
- 00655a88 ["INT_ADD", "register:40f0:8", ["const:655a88:8", "const:4:8"]]
- 00655a88 ["CALL", null, ["ram:47ad34:8"]]
+ 00655e38 ["INT_ADD", "register:40f0:8", ["const:655e38:8", "const:4:8"]]
+ 00655e38 ["CALL", null, ["ram:47b054:8"]]
- 00655bec ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 00655bec ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
+ 00655f9c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 00655f9c ["CBRANCH", null, ["local:b25:8", "tmp:0:1"]]
~~~


<a id="compare-5d14418a696a592b1aced20eb8bfe999"></a>

### [`00655dfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655dfc.md) → [`006561ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00656/006561ac.md) FUN_006561ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006561b4",
      "incomplete_value": false,
      "site": "006561b8",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:00655e14",
      "DATA",
      [
        "storage",
        "00c73e08",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00655e18",
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
      "006561c4",
      "DATA",
      [
        "storage",
        "00c74dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "006561c8",
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
- 00655e08 ["INT_ADD", "register:40f0:8", ["const:655e08:8", "const:4:8"]]
- 00655e08 ["CALL", null, ["callee:00c58f30:8"]]
+ 006561b8 ["INT_ADD", "register:40f0:8", ["const:6561b8:8", "const:4:8"]]
+ 006561b8 ["CALL", null, ["callee:00c58f30:8"]]
- 00655e0c ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006561bc ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655e10 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00655e10 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655e10 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655e10 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8c7a917c004aad011bb31b02df1610bb"></a>

### [`00655e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655e20.md) → [`006561d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00656/006561d0.md) FUN_006561d0

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
      "definition_site": "006561d4",
      "incomplete_value": false,
      "site": "006561d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:dd8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655e24",
      "incomplete_value": false,
      "site": "00655e28",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:e08:8"
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
      "006561d8",
      "DATA",
      [
        "storage",
        "00c73e08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006561d8",
      "DATA",
      [
        "storage",
        "00c74dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655e20 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 006561d0 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655e24 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00655e24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655e24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655e24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006561d4 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 006561d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006561d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006561d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-15520ee0d7b33f5a57d03c88b4037642"></a>

### [`00655e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655e38.md) → [`006561e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00656/006561e8.md) FUN_006561e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 81.25% / 新版 81.25%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00655e54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00656204",
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
- 00655e40 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00655e40 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006561f0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006561f0 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00655e4c ["COPY", "register:40e8:8", ["register:8:8"]]
- 00655e50 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00655e50 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-11dc070599f7280c3f59e76763f3ba6b"></a>

### [`00655ea4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00655/00655ea4.md) → [`00656254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00656/00656254.md) FUN_00656254

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
      "definition_site": "00656278",
      "incomplete_value": false,
      "site": "00656278",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:e68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00655ec8",
      "incomplete_value": false,
      "site": "00655ec8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:e98:8"
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
      "00656278",
      "DATA",
      [
        "storage",
        "00c73e98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00656278",
      "DATA",
      [
        "storage",
        "00c74e68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00655eb8 ["INT_ADD", "register:40f0:8", ["const:655eb8:8", "const:4:8"]]
- 00655eb8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00656268 ["INT_ADD", "register:40f0:8", ["const:656268:8", "const:4:8"]]
+ 00656268 ["CALL", null, ["callee:00c58f30:8"]]
- 00655ec0 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00656270 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00655ec4 ["COPY", "tmp:0:8", ["const:e98:8"]]
- 00655ec4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00655ec4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00655ec4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00656274 ["COPY", "tmp:0:8", ["const:e68:8"]]
+ 00656274 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00656274 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00656274 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5358edf21294f27830b7c22c2f3418db"></a>

### [`0065658c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/0065658c.md) → [`0065693c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00656/0065693c.md) FUN_0065693c

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
      "definition_site": "00656960",
      "incomplete_value": false,
      "site": "00656960",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:ee8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006565b0",
      "incomplete_value": false,
      "site": "006565b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:f18:8"
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
      "00656960",
      "DATA",
      [
        "storage",
        "00c73f18",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00656960",
      "DATA",
      [
        "storage",
        "00c74ee8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006565a0 ["INT_ADD", "register:40f0:8", ["const:6565a0:8", "const:4:8"]]
- 006565a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 00656950 ["INT_ADD", "register:40f0:8", ["const:656950:8", "const:4:8"]]
+ 00656950 ["CALL", null, ["callee:00c58f30:8"]]
- 006565a8 ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 00656958 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 006565ac ["COPY", "tmp:0:8", ["const:f18:8"]]
- 006565ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006565ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006565ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065695c ["COPY", "tmp:0:8", ["const:ee8:8"]]
+ 0065695c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065695c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065695c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f87d5fc896cbb4c8863fce1305d82a3c"></a>

### [`00656ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656ca0.md) → [`00657050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657050.md) FUN_00657050

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
      "definition_site": "00657074",
      "incomplete_value": false,
      "site": "00657074",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:f68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00656cc4",
      "incomplete_value": false,
      "site": "00656cc4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c73000:8"
          ],
          [
            "leaf",
            "const:f98:8"
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
      "00657074",
      "DATA",
      [
        "storage",
        "00c73f98",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657074",
      "DATA",
      [
        "storage",
        "00c74f68",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00656cb4 ["INT_ADD", "register:40f0:8", ["const:656cb4:8", "const:4:8"]]
- 00656cb4 ["CALL", null, ["callee:00c58f30:8"]]
+ 00657064 ["INT_ADD", "register:40f0:8", ["const:657064:8", "const:4:8"]]
+ 00657064 ["CALL", null, ["callee:00c58f30:8"]]
- 00656cbc ["COPY", "register:4040:8", ["const:c73000:8"]]
+ 0065706c ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00656cc0 ["COPY", "tmp:0:8", ["const:f98:8"]]
- 00656cc0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00656cc0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00656cc0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657070 ["COPY", "tmp:0:8", ["const:f68:8"]]
+ 00657070 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657070 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657070 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-588590533f19c387adf72a1d35eeac68"></a>

### [`00656cf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656cf0.md) → [`006570a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/006570a0.md) FUN_006570a0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.62% / 新版 90.62%

優先判定に残った影響 `call_target` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006570c0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00656d10",
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
      "site": "006570cc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00656d1c",
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
      "006570c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006570cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:00656d40",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006570c0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006570cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006570f0",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00656d10 ["INT_ADD", "register:40f0:8", ["const:656d10:8", "const:4:8"]]
- 00656d10 ["CALL", null, ["ram:47ad34:8"]]
+ 006570c0 ["INT_ADD", "register:40f0:8", ["const:6570c0:8", "const:4:8"]]
+ 006570c0 ["CALL", null, ["ram:47b054:8"]]
- 00656d1c ["INT_ADD", "register:40f0:8", ["const:656d1c:8", "const:4:8"]]
- 00656d1c ["CALL", null, ["ram:47ad34:8"]]
+ 006570cc ["INT_ADD", "register:40f0:8", ["const:6570cc:8", "const:4:8"]]
+ 006570cc ["CALL", null, ["ram:47b054:8"]]
- 00656d0c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 00656d0c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 006570bc ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006570bc ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
~~~


<a id="compare-bccbd23920901aee3bbcac84e5a181ea"></a>

### [`00656d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656d98.md) → [`00657148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657148.md) FUN_00657148

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0064bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064bd94.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00656ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656ed0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`0064c144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064c/0064c144.md) · 呼出先 4件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00657280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657280.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 98.36% / 新版 98.36%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00656df0",
      "incomplete_value": true,
      "site": "00656df4",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "00656dec",
      "incomplete_value": true,
      "site": "00656df4",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00656dec",
      "incomplete_value": true,
      "site": "00656df4",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40b0:8"
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
    "ordinal": 0,
    "slot": 3
  }
]
~~~


~~~diff
- 00656df4 ["INT_ADD", "register:40f0:8", ["const:656df4:8", "const:4:8"]]
- 00656df4 ["CALL", null, ["callee:0043be80:8"]]
+ 006571a4 ["INT_ADD", "register:40f0:8", ["const:6571a4:8", "const:4:8"]]
+ 006571a4 ["CALL", null, ["callee:0043be80:8"]]
- 00656e08 ["INT_ADD", "register:40f0:8", ["const:656e08:8", "const:4:8"]]
- 00656e08 ["CALL", null, ["callee:0043be80:8"]]
+ 006571b8 ["INT_ADD", "register:40f0:8", ["const:6571b8:8", "const:4:8"]]
+ 006571b8 ["CALL", null, ["callee:0043be80:8"]]
- 00656e10 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 00656e10 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 00656e10 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 00656e10 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 006571c0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 006571c0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006571c0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006571c0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
~~~


<a id="compare-92fe6e094da92761cf78418bb75bcf31"></a>

### [`00656ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656ed0.md) → [`00657280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657280.md) FUN_00657280

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00656d98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656d98.md) [`00656ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00656/00656ed0.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`00657148`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657148.md) [`00657280`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657280.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.19% / 新版 92.19%

優先判定に残った影響 `call_argument_candidate` 14件, `store_condition` 2件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006573f4",
      "incomplete_value": false,
      "site": "006573fc",
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
      "definition_site": "00657044",
      "incomplete_value": false,
      "site": "0065704c",
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
      "definition_site": "006574b4",
      "incomplete_value": false,
      "site": "006574bc",
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
      "definition_site": "00657104",
      "incomplete_value": false,
      "site": "0065710c",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006574d0",
      "incomplete_value": false,
      "site": "006574dc",
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
      "definition_site": "00657120",
      "incomplete_value": false,
      "site": "0065712c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00656f08",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:00656f14",
      "WRITE",
      [
        "storage",
        "Stack[-0x180]",
        null,
        null
      ]
    ],
    [
      "unmatched:00656f94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00657b5c"
      ]
    ]
  ],
  "added": [
    [
      "006572b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "006572c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x180]",
        null,
        null
      ]
    ],
    [
      "00657344",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00657b5c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065704c ["INT_ADD", "register:40f0:8", ["const:65704c:8", "const:4:8"]]
- 0065704c ["CALL", null, ["callee:004421f4:8"]]
+ 006573fc ["INT_ADD", "register:40f0:8", ["const:6573fc:8", "const:4:8"]]
+ 006573fc ["CALL", null, ["callee:004421f4:8"]]
- 00657088 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00657088 ["CBRANCH", null, ["local:b133:8", "tmp:0:1"]]
+ 00657438 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00657438 ["CBRANCH", null, ["local:b134:8", "tmp:0:1"]]
- 0065710c ["INT_ADD", "register:40f0:8", ["const:65710c:8", "const:4:8"]]
- 0065710c ["CALL", null, ["callee:004421f4:8"]]
+ 006574bc ["INT_ADD", "register:40f0:8", ["const:6574bc:8", "const:4:8"]]
+ 006574bc ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-28fe3854e6785ec6843e13c7ab269173"></a>

### [`00657928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657928.md) → [`00657cd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657cd8.md) FUN_00657cd8

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
      "definition_site": "00657cf8",
      "incomplete_value": false,
      "site": "00657cfc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657948",
      "incomplete_value": false,
      "site": "0065794c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:18:8"
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
      "00657cfc",
      "DATA",
      [
        "storage",
        "00c74018",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657cfc",
      "DATA",
      [
        "storage",
        "00c74fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065793c ["INT_ADD", "register:40f0:8", ["const:65793c:8", "const:4:8"]]
- 0065793c ["CALL", null, ["callee:00c58f30:8"]]
+ 00657cec ["INT_ADD", "register:40f0:8", ["const:657cec:8", "const:4:8"]]
+ 00657cec ["CALL", null, ["callee:00c58f30:8"]]
- 00657948 ["COPY", "tmp:0:8", ["const:18:8"]]
- 00657948 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657948 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657948 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657cf8 ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 00657cf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657cf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657cf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-23315871215d0dbd17a9f761ac1f0153"></a>

### [`00657960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657960.md) → [`00657d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657d10.md) FUN_00657d10

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
      "definition_site": "00657d14",
      "incomplete_value": false,
      "site": "00657d18",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:fe8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657964",
      "incomplete_value": false,
      "site": "00657968",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:18:8"
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
      "00657d18",
      "DATA",
      [
        "storage",
        "00c74018",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657d18",
      "DATA",
      [
        "storage",
        "00c74fe8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657964 ["COPY", "tmp:0:8", ["const:18:8"]]
- 00657964 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657964 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657964 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657d14 ["COPY", "tmp:0:8", ["const:fe8:8"]]
+ 00657d14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657d14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657d14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bf5ada04749a0ff8d0b8b4dfb7206a31"></a>

### [`00657b2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657b2c.md) → [`00657edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657edc.md) FUN_00657edc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00657b50",
      "DATA",
      [
        "storage",
        "00c74088",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657f00",
      "DATA",
      [
        "storage",
        "00c75058",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657b40 ["INT_ADD", "register:40f0:8", ["const:657b40:8", "const:4:8"]]
- 00657b40 ["CALL", null, ["callee:00c58f30:8"]]
+ 00657ef0 ["INT_ADD", "register:40f0:8", ["const:657ef0:8", "const:4:8"]]
+ 00657ef0 ["CALL", null, ["callee:00c58f30:8"]]
- 00657b48 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 00657ef8 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00657b4c ["COPY", "tmp:0:8", ["const:88:8"]]
- 00657b4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657b4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657b4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8441a1d3f2476cba133055ef67fd8234"></a>

### [`00657b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657b84.md) → [`00657f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657f34.md) FUN_00657f34

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`006b247c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b247c.md) [`006b262c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b262c.md) [`006b2668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2668.md) [`006b26a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b26a4.md)
- 新版 呼出元 0件  · 呼出先 6件 [`005e3504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e3/005e3504.md) [`006b282c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b282c.md) [`006b29dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b29dc.md) [`006b2a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2a18.md) [`006b2a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2a54.md)

変更の種類 call, call_argument_candidate, call_count, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00657bd0",
      "incomplete_value": true,
      "site": "00657be0",
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
            "const:300:8"
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
      "definition_site": "00657bd4",
      "incomplete_value": false,
      "site": "00657be0",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00657bcc",
      "incomplete_value": true,
      "site": "00657be0",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4000:4"
          ]
        ]
      ]
    },
    "ordinal": 6,
    "slot": 5
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00657ba8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b262c"
      ]
    ],
    [
      "unmatched:00657bb0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "unmatched:00657bb8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b2668"
      ]
    ]
  ],
  "added": [
    [
      "00657f58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b29dc"
      ]
    ],
    [
      "00657f60",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ],
    [
      "00657f68",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006b2a18"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657be0 ["INT_ADD", "register:40f0:8", ["const:657be0:8", "const:4:8"]]
- 00657be0 ["CALL", null, ["callee:005e3504:8"]]
+ 00657f90 ["INT_ADD", "register:40f0:8", ["const:657f90:8", "const:4:8"]]
+ 00657f90 ["CALL", null, ["callee:005e3504:8"]]
- 00657b98 ["INT_ADD", "register:40f0:8", ["const:657b98:8", "const:4:8"]]
- 00657b98 ["CALL", null, ["callee:008524fc:8"]]
+ 00657f48 ["INT_ADD", "register:40f0:8", ["const:657f48:8", "const:4:8"]]
+ 00657f48 ["CALL", null, ["callee:008524fc:8"]]
- 00657ba8 ["INT_ADD", "register:40f0:8", ["const:657ba8:8", "const:4:8"]]
- 00657ba8 ["CALL", null, ["ram:6b262c:8"]]
~~~


<a id="compare-0d34dc90143c4da24f4bd49394fb710a"></a>

### [`00657c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657c28.md) → [`00657fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657fd8.md) FUN_00657fd8

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
      "definition_site": "00657ff8",
      "incomplete_value": false,
      "site": "00657ffc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657c48",
      "incomplete_value": false,
      "site": "00657c4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
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
      "00657ffc",
      "DATA",
      [
        "storage",
        "00c74118",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00657ffc",
      "DATA",
      [
        "storage",
        "00c750e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657c3c ["INT_ADD", "register:40f0:8", ["const:657c3c:8", "const:4:8"]]
- 00657c3c ["CALL", null, ["callee:00c58f30:8"]]
+ 00657fec ["INT_ADD", "register:40f0:8", ["const:657fec:8", "const:4:8"]]
+ 00657fec ["CALL", null, ["callee:00c58f30:8"]]
- 00657c44 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 00657ff4 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00657c48 ["COPY", "tmp:0:8", ["const:118:8"]]
- 00657c48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657c48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657c48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00657ff8 ["COPY", "tmp:0:8", ["const:e8:8"]]
+ 00657ff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00657ff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00657ff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-fedb7e254f0862aa578ff76eef1f60c8"></a>

### [`00657c60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657c60.md) → [`00658010`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658010.md) FUN_00658010

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
      "unmatched:00657c68",
      "DATA",
      [
        "storage",
        "00c74118",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00658018",
      "DATA",
      [
        "storage",
        "00c750e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657c60 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 00657c64 ["COPY", "tmp:0:8", ["const:118:8"]]
- 00657c64 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657c64 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657c64 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00657c68 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 00657c68 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-e527b3a31b7fe7bd04d43a77397b8b53"></a>

### [`00657c80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657c80.md) → [`00658030`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658030.md) FUN_00658030

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md)
- 新版 呼出元 0件  · 呼出先 2件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00658050",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00657ca0",
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
      "site": "0065805c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00657cac",
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
      "00658050",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065805c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00658050",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0065805c",
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
- 00657ca0 ["INT_ADD", "register:40f0:8", ["const:657ca0:8", "const:4:8"]]
- 00657ca0 ["CALL", null, ["ram:47ad34:8"]]
+ 00658050 ["INT_ADD", "register:40f0:8", ["const:658050:8", "const:4:8"]]
+ 00658050 ["CALL", null, ["ram:47b054:8"]]
- 00657cac ["INT_ADD", "register:40f0:8", ["const:657cac:8", "const:4:8"]]
- 00657cac ["CALL", null, ["ram:47ad34:8"]]
+ 0065805c ["INT_ADD", "register:40f0:8", ["const:65805c:8", "const:4:8"]]
+ 0065805c ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-02c6e209507ebb9cf21f38afc50bd673"></a>

### [`00657d10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657d10.md) → [`006580c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/006580c0.md) FUN_006580c0

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
      "unmatched:00657d28",
      "DATA",
      [
        "storage",
        "00c74198",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00657d2c",
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
      "006580d8",
      "DATA",
      [
        "storage",
        "00c75168",
        null,
        "undefined *"
      ]
    ],
    [
      "006580dc",
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
- 00657d1c ["INT_ADD", "register:40f0:8", ["const:657d1c:8", "const:4:8"]]
- 00657d1c ["CALL", null, ["callee:00c58f30:8"]]
+ 006580cc ["INT_ADD", "register:40f0:8", ["const:6580cc:8", "const:4:8"]]
+ 006580cc ["CALL", null, ["callee:00c58f30:8"]]
- 00657d20 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 006580d0 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00657d24 ["COPY", "tmp:0:8", ["const:198:8"]]
- 00657d24 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657d24 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657d24 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-67905f9b1ad7917148ee7228213b1d6c"></a>

### [`00657e38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657e38.md) → [`006581e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/006581e8.md) FUN_006581e8

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
      "unmatched:00657e50",
      "DATA",
      [
        "storage",
        "00c74218",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00657e54",
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
      "00658200",
      "DATA",
      [
        "storage",
        "00c751e8",
        null,
        "undefined *"
      ]
    ],
    [
      "00658204",
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
- 00657e44 ["INT_ADD", "register:40f0:8", ["const:657e44:8", "const:4:8"]]
- 00657e44 ["CALL", null, ["callee:00c58f30:8"]]
+ 006581f4 ["INT_ADD", "register:40f0:8", ["const:6581f4:8", "const:4:8"]]
+ 006581f4 ["CALL", null, ["callee:00c58f30:8"]]
- 00657e48 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 006581f8 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00657e4c ["COPY", "tmp:0:8", ["const:218:8"]]
- 00657e4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00657e4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00657e4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-74c54428d43e60f77d2b9802fad7d37a"></a>

### [`00657f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657f04.md) → [`006582b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/006582b4.md) FUN_006582b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 call_argument_candidate, constant, local_def_use, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006582c8",
      "incomplete_value": false,
      "site": "006582cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:268:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00657f18",
      "incomplete_value": false,
      "site": "00657f1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:298:8"
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
      "definition_site": "00657f0c",
      "incomplete_value": false,
      "site": "00657f10",
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
      "006582cc",
      "DATA",
      [
        "storage",
        "00c74298",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006582cc",
      "DATA",
      [
        "storage",
        "00c75268",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00657f10 ["INT_ADD", "register:40f0:8", ["const:657f10:8", "const:4:8"]]
- 00657f10 ["CALL", null, ["callee:00c58f30:8"]]
+ 006582c0 ["INT_ADD", "register:40f0:8", ["const:6582c0:8", "const:4:8"]]
+ 006582c0 ["CALL", null, ["callee:00c58f30:8"]]
- 00657f08 ["COPY", "register:40e8:8", ["register:8:8"]]
- 00657f0c ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-dddc6026d3220c49ad99b927ff7d1783"></a>

### [`00657fcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657fcc.md) → [`0065837c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/0065837c.md) FUN_0065837c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`00ad6fbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad6/00ad6fbc.md) · 呼出先 21件 [`0044db90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044db90.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ef30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048e/0048ef30.md)
- 新版 呼出元 2件 [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`00ad7fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ad7/00ad7fb0.md) · 呼出先 21件 [`0044deb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044deb0.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046dda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda8.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048f250`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048f/0048f250.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.00% / 新版 83.00%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0065864c",
      "incomplete_value": true,
      "site": "0065864c",
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
            "const:d94:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065829c",
      "incomplete_value": true,
      "site": "0065829c",
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
            "const:dd4:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006580c4",
      "incomplete_value": true,
      "site": "006580c8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:30:8"
              ]
            ]
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
    "new": null,
    "old": {
      "definition_site": "006581ac",
      "incomplete_value": true,
      "site": "006581b4",
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
            "const:2f38:8"
          ]
        ]
      ]
    },
    "ordinal": 27,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006583bc",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "006583d4",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "006583ec",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "006583bc",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "006583d4",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "dword"
      ]
    ],
    [
      "006583ec",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006580c8 ["INT_ADD", "register:40f0:8", ["const:6580c8:8", "const:4:8"]]
- 006580c8 ["CALL", null, ["callee:00c58f50:8"]]
+ 00658478 ["INT_ADD", "register:40f0:8", ["const:658478:8", "const:4:8"]]
+ 00658478 ["CALL", null, ["callee:00c58f50:8"]]
- 006581b4 ["INT_ADD", "register:40f0:8", ["const:6581b4:8", "const:4:8"]]
- 006581b4 ["CALL", null, ["callee:008b8a14:8"]]
+ 00658564 ["INT_ADD", "register:40f0:8", ["const:658564:8", "const:4:8"]]
+ 00658564 ["CALL", null, ["callee:008b8a14:8"]]
- 0065829c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:dd4:8"]]
- 0065829c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
+ 0065864c ["INT_ADD", "tmp:0:8", ["register:40c8:8", "const:d94:8"]]
+ 0065864c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:4"]]
~~~


<a id="compare-218b5bf80f115cc3ccfa85229ecf068d"></a>

### [`006583e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006583e4.md) → [`00658794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658794.md) FUN_00658794

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`0065e23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e23c.md) [`0065ef44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ef44.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`00a832d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a83/00a832d0.md)
- 新版 呼出元 2件 [`0065e5ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e5ec.md) [`0065f2f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f2f4.md) · 呼出先 5件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f1c.md) [`008b894c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b894c.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`00a842c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a84/00a842c4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0065848c",
      "incomplete_value": true,
      "site": "00658494",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4000:8"
          ],
          [
            "live",
            "register:40a8:8"
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
    "new": null,
    "old": {
      "definition_site": "00658490",
      "incomplete_value": true,
      "site": "00658494",
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
    "ordinal": 16,
    "slot": 2
  }
]
~~~


~~~diff
- 00658494 ["INT_ADD", "register:40f0:8", ["const:658494:8", "const:4:8"]]
- 00658494 ["CALL", null, ["callee:008b894c:8"]]
+ 00658844 ["INT_ADD", "register:40f0:8", ["const:658844:8", "const:4:8"]]
+ 00658844 ["CALL", null, ["callee:008b894c:8"]]
- 006583f8 ["INT_ADD", "register:40f0:8", ["const:6583f8:8", "const:4:8"]]
- 006583f8 ["CALL", null, ["callee:008524fc:8"]]
+ 006587a8 ["INT_ADD", "register:40f0:8", ["const:6587a8:8", "const:4:8"]]
+ 006587a8 ["CALL", null, ["callee:008524fc:8"]]
- 00658408 ["INT_ADD", "register:40f0:8", ["const:658408:8", "const:4:8"]]
- 00658408 ["CALL", null, ["callee:00a842c4:8"]]
+ 006587b8 ["INT_ADD", "register:40f0:8", ["const:6587b8:8", "const:4:8"]]
+ 006587b8 ["CALL", null, ["callee:00a842c4:8"]]
~~~


<a id="compare-025b7ef6bbe583908a38d1a206bb65b5"></a>

### [`00658c2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658c2c.md) → [`00658fdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658fdc.md) FUN_00658fdc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006584c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006584c8.md) [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00641ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00641/00641ba0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009dfb6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009df/009dfb6c.md)
- 新版 呼出元 3件 [`00658878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658878.md) [`0065a28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065a/0065a28c.md) [`0065c21c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065c/0065c21c.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00641f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00641/00641f50.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`009e0b18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009e0/009e0b18.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.08% / 新版 96.08%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00658d5c"
      ],
      [
        "FALL_THROUGH",
        "0065910c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0065910c",
      "incomplete_value": true,
      "site": "00659110",
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
      "definition_site": "00658d5c",
      "incomplete_value": true,
      "site": "00658d60",
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
      "unmatched:00658c8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00659198"
      ]
    ],
    [
      "unmatched:00658d5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00659118"
      ]
    ],
    [
      "unmatched:00658d78",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0065903c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00659198"
      ]
    ],
    [
      "0065910c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00659118"
      ]
    ],
    [
      "00659128",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00658c58 ["INT_ADD", "register:40f0:8", ["const:658c58:8", "const:4:8"]]
- 00658c58 ["CALL", null, ["callee:008524fc:8"]]
+ 00659008 ["INT_ADD", "register:40f0:8", ["const:659008:8", "const:4:8"]]
+ 00659008 ["CALL", null, ["callee:008524fc:8"]]
- 00658c68 ["INT_ADD", "register:40f0:8", ["const:658c68:8", "const:4:8"]]
- 00658c68 ["CALL", null, ["callee:009e1fc0:8"]]
+ 00659018 ["INT_ADD", "register:40f0:8", ["const:659018:8", "const:4:8"]]
+ 00659018 ["CALL", null, ["callee:009e1fc0:8"]]
- 00658c70 ["INT_EQUAL", "tmp:0:1", ["register:40a0:4", "const:0:4"]]
- 00658c70 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 00659020 ["INT_EQUAL", "tmp:0:1", ["register:40a0:4", "const:0:4"]]
+ 00659020 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-73f7cc4293e5532e72deaee7cdbb7e8c"></a>

### [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) → [`0065919c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00659/0065919c.md) FUN_0065919c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00aeef94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aee/00aeef94.md) · 呼出先 38件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 1件 [`00aeff88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aef/00aeff88.md) · 呼出先 38件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.00% / 新版 75.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 43件, `call_target` 1件, `store_condition` 5件, `store_destination` 3件, `store_value` 1件, `unresolved_branch_alignment` 32件, `unresolved_call_alignment` 22件, `unresolved_store_alignment` 43件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00659474",
      "incomplete_value": true,
      "site": "00659474",
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
            "const:38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00658f68",
      "incomplete_value": true,
      "site": "00658f68",
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
            "const:8:8"
          ]
        ]
      ]
    },
    "ordinal": 24,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00659474",
      "incomplete_value": true,
      "site": "00659474",
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
                "const:38:8"
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
      "definition_site": "00658f68",
      "incomplete_value": true,
      "site": "00658f68",
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
    "ordinal": 25,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "00659478",
      "incomplete_value": true,
      "site": "00659478",
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
            "const:48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00658f6c",
      "incomplete_value": true,
      "site": "00658f6c",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00658e04",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00658e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c0]",
        null,
        null
      ]
    ],
    [
      "unmatched:00658eb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00659280"
      ]
    ]
  ],
  "added": [
    [
      "006591b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006591ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c0]",
        null,
        null
      ]
    ],
    [
      "00659260",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00659280"
      ]
    ]
  ]
}
~~~


~~~diff
- 00658e60 ["INT_ADD", "register:40f0:8", ["const:658e60:8", "const:4:8"]]
- 00658e60 ["CALL", null, ["callee:009e1fc0:8"]]
+ 00659210 ["INT_ADD", "register:40f0:8", ["const:659210:8", "const:4:8"]]
+ 00659210 ["CALL", null, ["callee:009e1fc0:8"]]
- 00658e7c ["INT_ADD", "register:40f0:8", ["const:658e7c:8", "const:4:8"]]
- 00658e7c ["CALL", null, ["callee:009e3f94:8"]]
+ 0065922c ["INT_ADD", "register:40f0:8", ["const:65922c:8", "const:4:8"]]
+ 0065922c ["CALL", null, ["callee:009e3f94:8"]]
- 00658e9c ["INT_ADD", "register:40f0:8", ["const:658e9c:8", "const:4:8"]]
- 00658e9c ["CALL", null, ["callee:009e0b18:8"]]
+ 0065924c ["INT_ADD", "register:40f0:8", ["const:65924c:8", "const:4:8"]]
+ 0065924c ["CALL", null, ["callee:009e0b18:8"]]
~~~


<a id="compare-7429bb6faa30fb6039409ab91d4d6664"></a>

### [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) → [`0065a28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065a/0065a28c.md) FUN_0065a28c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) [`0065ec38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ec38.md) · 呼出先 32件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)
- 新版 呼出元 2件 [`0065919c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00659/0065919c.md) [`0065efe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065efe8.md) · 呼出先 32件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.58% / 新版 72.58%

優先判定に残った影響 `call_argument_candidate` 18件, `store_condition` 4件, `store_value` 2件, `unresolved_branch_alignment` 16件, `unresolved_call_alignment` 27件, `unresolved_store_alignment` 55件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0065a93c",
      "incomplete_value": false,
      "site": "0065a93c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:668:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065a58c",
      "incomplete_value": false,
      "site": "0065a58c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:698:8"
          ]
        ]
      ]
    },
    "ordinal": 61,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0065a9dc",
      "incomplete_value": true,
      "site": "0065a9e0",
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
      "definition_site": "0065a62c",
      "incomplete_value": true,
      "site": "0065a630",
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
    "ordinal": 68,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065a4ec",
      "incomplete_value": true,
      "site": "0065a528",
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
            "const:4c8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 16,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00659ef0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:00659ef4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00659f08",
      "WRITE",
      [
        "storage",
        "Stack[-0x148]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0065a2a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0065a2a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0065a2b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x148]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0065a178 ["INT_ADD", "register:40f0:8", ["const:65a178:8", "const:4:8"]]
- 0065a178 ["CALL", null, ["callee:00a48594:8"]]
+ 0065a528 ["INT_ADD", "register:40f0:8", ["const:65a528:8", "const:4:8"]]
+ 0065a528 ["CALL", null, ["callee:00a48594:8"]]
- 0065a360 ["INT_ADD", "register:40f0:8", ["const:65a360:8", "const:4:8"]]
- 0065a360 ["CALL", null, ["callee:00658fdc:8"]]
+ 0065a710 ["INT_ADD", "register:40f0:8", ["const:65a710:8", "const:4:8"]]
+ 0065a710 ["CALL", null, ["callee:00658fdc:8"]]
- 0065a398 ["INT_ADD", "register:40f0:8", ["const:65a398:8", "const:4:8"]]
- 0065a398 ["CALL", null, ["callee:00658fdc:8"]]
+ 0065a748 ["INT_ADD", "register:40f0:8", ["const:65a748:8", "const:4:8"]]
+ 0065a748 ["CALL", null, ["callee:00658fdc:8"]]
~~~


<a id="compare-6a24ab42334a50726e2f65a763fe8460"></a>

### [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md) → [`0065b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065b/0065b130.md) FUN_0065b130

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00657980`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657980.md) · 呼出先 38件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 1件 [`00657d30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00657/00657d30.md) · 呼出先 38件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 80.56% / 新版 80.56%

優先判定に残った影響 `call_argument_candidate` 8件, `call_target` 1件, `store_condition` 1件, `store_value` 2件, `unresolved_branch_alignment` 24件, `unresolved_call_alignment` 17件, `unresolved_store_alignment` 30件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0065bca0",
      "incomplete_value": true,
      "site": "0065bca4",
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
      "definition_site": "0065b8f0",
      "incomplete_value": true,
      "site": "0065b8f4",
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
    "ordinal": 100,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0065bd74",
      "incomplete_value": false,
      "site": "0065bd74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065b9c4",
      "incomplete_value": false,
      "site": "0065b9c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:618:8"
          ]
        ]
      ]
    },
    "ordinal": 105,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065b294",
      "incomplete_value": true,
      "site": "0065b2a4",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
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
      "unmatched:0065ae60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0065b1f8"
      ]
    ],
    [
      "unmatched:0065ae94",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0065bfd4"
      ]
    ],
    [
      "unmatched:0065aeb8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0065aed4"
      ]
    ]
  ],
  "added": [
    [
      "0065b210",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0065b1f8"
      ]
    ],
    [
      "0065b244",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0065bfd4"
      ]
    ],
    [
      "0065b268",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0065b284"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065aef4 ["INT_ADD", "register:40f0:8", ["const:65aef4:8", "const:4:8"]]
- 0065aef4 ["CALL", null, ["callee:00c590a0:8"]]
+ 0065b2a4 ["INT_ADD", "register:40f0:8", ["const:65b2a4:8", "const:4:8"]]
+ 0065b2a4 ["CALL", null, ["callee:00c590a0:8"]]
- 0065b11c ["INT_ADD", "register:40f0:8", ["const:65b11c:8", "const:4:8"]]
- 0065b11c ["CALL", null, ["ram:63dc84:8"]]
+ 0065b4cc ["INT_ADD", "register:40f0:8", ["const:65b4cc:8", "const:4:8"]]
+ 0065b4cc ["CALL", null, ["ram:63e034:8"]]
- 0065b14c ["CBRANCH", null, ["local:b50:8", "register:101:1"]]
+ 0065b4fc ["CBRANCH", null, ["local:b52:8", "register:101:1"]]
~~~


<a id="compare-c028dddac7dc1186bd1de450fecad3ae"></a>

### [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) → [`0065c21c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065c/0065c21c.md) FUN_0065c21c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md) [`0065f6b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f6b0.md) · 呼出先 32件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md)
- 新版 呼出元 2件 [`0065b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065b/0065b130.md) [`0065fa60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065fa60.md) · 呼出先 32件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 72.78% / 新版 72.78%

優先判定に残った影響 `call_argument_candidate` 13件, `call_target` 1件, `store_destination` 3件, `store_value` 3件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 28件, `unresolved_store_alignment` 44件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0065c284",
      "incomplete_value": false,
      "site": "0065c284",
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
            "const:d98:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065bed4",
      "incomplete_value": false,
      "site": "0065bed4",
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
            "const:dd8:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0065c290",
      "incomplete_value": true,
      "site": "0065c290",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4058:8"
          ],
          [
            "leaf",
            "const:d90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065bee0",
      "incomplete_value": true,
      "site": "0065bee0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4058:8"
          ],
          [
            "leaf",
            "const:dd0:8"
          ]
        ]
      ]
    },
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "0065c298",
      "incomplete_value": false,
      "site": "0065c298",
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
            "const:d94:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065bee8",
      "incomplete_value": false,
      "site": "0065bee8",
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
            "const:dd4:8"
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
      "0065c284",
      "WRITE",
      [
        "storage",
        "00ca6dd8",
        null,
        "undefined4"
      ]
    ],
    [
      "0065c290",
      "WRITE",
      [
        "storage",
        "00ca6dd0",
        null,
        "undefined1"
      ]
    ],
    [
      "0065c298",
      "WRITE",
      [
        "storage",
        "00ca6dd4",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "0065c284",
      "WRITE",
      [
        "storage",
        "00ca7d98",
        null,
        "undefined4"
      ]
    ],
    [
      "0065c290",
      "WRITE",
      [
        "storage",
        "00ca7d90",
        null,
        "undefined1"
      ]
    ],
    [
      "0065c298",
      "WRITE",
      [
        "storage",
        "00ca7d94",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065bed4 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:dd8:8"]]
- 0065bed4 ["COPY", "tmp:1:4", ["const:0:4"]]
- 0065bed4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
+ 0065c284 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:d98:8"]]
+ 0065c284 ["COPY", "tmp:1:4", ["const:0:4"]]
+ 0065c284 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
- 0065bee0 ["COPY", "tmp:0:4", ["const:0:4"]]
- 0065bee0 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 0065bee0 ["INT_ADD", "tmp:2:8", ["register:4058:8", "const:dd0:8"]]
- 0065bee0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
+ 0065c290 ["COPY", "tmp:0:4", ["const:0:4"]]
+ 0065c290 ["COPY", "tmp:1:4", ["tmp:0:4"]]
+ 0065c290 ["INT_ADD", "tmp:2:8", ["register:4058:8", "const:d90:8"]]
+ 0065c290 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:1:1"]]
- 0065bee8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:dd4:8"]]
- 0065bee8 ["COPY", "tmp:1:4", ["const:0:4"]]
- 0065bee8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
+ 0065c298 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:d94:8"]]
+ 0065c298 ["COPY", "tmp:1:4", ["const:0:4"]]
+ 0065c298 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
~~~


<a id="compare-9e915a1a12ac1f1e046336db90f6d6c3"></a>

### [`0065cd0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065c/0065cd0c.md) → [`0065d0bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065d/0065d0bc.md) FUN_0065d0bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 31件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md)
- 新版 呼出元 1件 [`00ae231c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae2/00ae231c.md) · 呼出先 31件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467de8.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00468114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468114.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.83% / 新版 88.83%

優先判定に残った影響 `call_argument_candidate` 20件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 15件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065d414",
      "incomplete_value": true,
      "site": "0065d420",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 25,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065d418",
      "incomplete_value": true,
      "site": "0065d420",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": null,
    "ordinal": 25,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065d41c",
      "incomplete_value": false,
      "site": "0065d420",
      "value": [
        "leaf",
        "const:11e:8"
      ]
    },
    "old": null,
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
      "unmatched:0065cd24",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065cd28",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065cd3c",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0065d0d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0065d0d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0065d0ec",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0065cf0c ["INT_ADD", "register:40f0:8", ["const:65cf0c:8", "const:4:8"]]
- 0065cf0c ["CALL", null, ["callee:008524fc:8"]]
+ 0065d2bc ["INT_ADD", "register:40f0:8", ["const:65d2bc:8", "const:4:8"]]
+ 0065d2bc ["CALL", null, ["callee:008524fc:8"]]
- 0065d070 ["INT_ADD", "register:40f0:8", ["const:65d070:8", "const:4:8"]]
- 0065d070 ["CALL", null, ["callee:0046ac48:8"]]
+ 0065d420 ["INT_ADD", "register:40f0:8", ["const:65d420:8", "const:4:8"]]
+ 0065d420 ["CALL", null, ["callee:0046ac48:8"]]
- 0065d158 ["INT_ADD", "register:40f0:8", ["const:65d158:8", "const:4:8"]]
- 0065d158 ["CALL", null, ["callee:00467de8:8"]]
+ 0065d508 ["INT_ADD", "register:40f0:8", ["const:65d508:8", "const:4:8"]]
+ 0065d508 ["CALL", null, ["callee:00467de8:8"]]
~~~


<a id="compare-107c15b6f95e0eb28b5a04d69506f505"></a>

### [`0065d670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065d/0065d670.md) → [`0065da20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065d/0065da20.md) FUN_0065da20

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00651ae4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00651/00651ae4.md) · 呼出先 31件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ac8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ac8.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md)
- 新版 呼出元 1件 [`00651e94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00651/00651e94.md) · 呼出先 31件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467de8.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00468114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468114.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.57% / 新版 93.57%

優先判定に残った影響 `call_argument_candidate` 21件, `store_condition` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065db20",
      "incomplete_value": false,
      "site": "0065db2c",
      "value": [
        "leaf",
        "const:b2:8"
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065db84",
      "incomplete_value": true,
      "site": "0065dba0",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 14,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065db80",
      "incomplete_value": true,
      "site": "0065dba0",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:4f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:0065d6a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065d6c8",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "0065da7c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0065d74c"
      ]
    ]
  ],
  "added": [
    [
      "0065da58",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "0065da78",
      "WRITE",
      [
        "storage",
        "Stack[-0xa8]",
        null,
        null
      ]
    ],
    [
      "0065da7c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "0065dafc"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065d77c ["INT_ADD", "register:40f0:8", ["const:65d77c:8", "const:4:8"]]
- 0065d77c ["CALL", null, ["callee:00467ec0:8"]]
+ 0065db2c ["INT_ADD", "register:40f0:8", ["const:65db2c:8", "const:4:8"]]
+ 0065db2c ["CALL", null, ["callee:00467ec0:8"]]
- 0065d7f0 ["INT_ADD", "register:40f0:8", ["const:65d7f0:8", "const:4:8"]]
- 0065d7f0 ["CALL", null, ["callee:004699bc:8"]]
+ 0065dba0 ["INT_ADD", "register:40f0:8", ["const:65dba0:8", "const:4:8"]]
+ 0065dba0 ["CALL", null, ["callee:004699bc:8"]]
- 0065d800 ["INT_ADD", "register:40f0:8", ["const:65d800:8", "const:4:8"]]
- 0065d800 ["CALL", null, ["callee:0048a2ac:8"]]
+ 0065dbb0 ["INT_ADD", "register:40f0:8", ["const:65dbb0:8", "const:4:8"]]
+ 0065dbb0 ["CALL", null, ["callee:0048a2ac:8"]]
~~~


<a id="compare-7f8f909a77be23769f91128f42ee52f2"></a>

### [`0065dfd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065d/0065dfd4.md) → [`0065e384`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e384.md) FUN_0065e384

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
      "definition_site": "0065e390",
      "incomplete_value": false,
      "site": "0065e39c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:2e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065dfe0",
      "incomplete_value": false,
      "site": "0065dfec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:318:8"
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
      "0065e39c",
      "DATA",
      [
        "storage",
        "00c74318",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e39c",
      "DATA",
      [
        "storage",
        "00c752e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065dfdc ["COPY", "register:4050:8", ["const:c74000:8"]]
+ 0065e38c ["COPY", "register:4050:8", ["const:c75000:8"]]
- 0065dfe0 ["COPY", "tmp:0:8", ["const:318:8"]]
- 0065dfe0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0065dfe0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0065dfe0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0065e390 ["COPY", "tmp:0:8", ["const:2e8:8"]]
+ 0065e390 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0065e390 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0065e390 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-ad5534b3d6b58336431d9ab5fc608ef9"></a>

### [`0065e018`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e018.md) → [`0065e3c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e3c8.md) FUN_0065e3c8

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
      "definition_site": "0065e3e0",
      "incomplete_value": false,
      "site": "0065e3ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:2e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065e030",
      "incomplete_value": false,
      "site": "0065e03c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:318:8"
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
      "0065e3ec",
      "DATA",
      [
        "storage",
        "00c74318",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e3ec",
      "DATA",
      [
        "storage",
        "00c752e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e02c ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065e3dc ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065e030 ["COPY", "tmp:0:8", ["const:318:8"]]
- 0065e030 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065e030 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065e030 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065e3e0 ["COPY", "tmp:0:8", ["const:2e8:8"]]
+ 0065e3e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e3e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e3e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0065e060 ["COPY", "register:0:8", ["register:4040:8"]]
- 0065e060 ["INT_ADD", "register:40f0:8", ["const:65e060:8", "const:4:8"]]
- 0065e060 ["CALLIND", null, ["register:0:8"]]
+ 0065e410 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0065e410 ["INT_ADD", "register:40f0:8", ["const:65e410:8", "const:4:8"]]
+ 0065e410 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-16b68fc99cd2cc5724bce00f00aeeec7"></a>

### [`0065e074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e074.md) → [`0065e424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e424.md) FUN_0065e424

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
      "definition_site": "0065e44c",
      "incomplete_value": false,
      "site": "0065e450",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:2e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065e09c",
      "incomplete_value": false,
      "site": "0065e0a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:318:8"
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
      "0065e450",
      "DATA",
      [
        "storage",
        "00c74318",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e450",
      "DATA",
      [
        "storage",
        "00c752e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e088 ["INT_ADD", "register:40f0:8", ["const:65e088:8", "const:4:8"]]
- 0065e088 ["CALL", null, ["callee:00c58f30:8"]]
+ 0065e438 ["INT_ADD", "register:40f0:8", ["const:65e438:8", "const:4:8"]]
+ 0065e438 ["CALL", null, ["callee:00c58f30:8"]]
- 0065e098 ["COPY", "register:4048:8", ["const:c74000:8"]]
+ 0065e448 ["COPY", "register:4048:8", ["const:c75000:8"]]
- 0065e09c ["COPY", "tmp:0:8", ["const:318:8"]]
- 0065e09c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0065e09c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0065e09c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0065e44c ["COPY", "tmp:0:8", ["const:2e8:8"]]
+ 0065e44c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0065e44c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0065e44c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-84331fcfba16500c4e934772a24bfe81"></a>

### [`0065e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e104.md) → [`0065e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e4b4.md) FUN_0065e4b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

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
      "definition_site": "0065e4d0",
      "incomplete_value": false,
      "site": "0065e4d4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:2e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065e120",
      "incomplete_value": false,
      "site": "0065e124",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:318:8"
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
      "0065e4d4",
      "DATA",
      [
        "storage",
        "00c74318",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e4d4",
      "DATA",
      [
        "storage",
        "00c752e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e11c ["COPY", "register:4050:8", ["const:c74000:8"]]
+ 0065e4cc ["COPY", "register:4050:8", ["const:c75000:8"]]
- 0065e120 ["COPY", "tmp:0:8", ["const:318:8"]]
- 0065e120 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0065e120 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0065e120 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0065e4d0 ["COPY", "tmp:0:8", ["const:2e8:8"]]
+ 0065e4d0 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0065e4d0 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0065e4d0 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 0065e148 ["COPY", "register:0:8", ["register:4048:8"]]
- 0065e148 ["INT_ADD", "register:40f0:8", ["const:65e148:8", "const:4:8"]]
- 0065e148 ["CALLIND", null, ["register:0:8"]]
+ 0065e4f8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0065e4f8 ["INT_ADD", "register:40f0:8", ["const:65e4f8:8", "const:4:8"]]
+ 0065e4f8 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-c1ad4d8011a1217a5385bc6e0d976014"></a>

### [`0065e23c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e23c.md) → [`0065e5ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e5ec.md) FUN_0065e5ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0065e20c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e20c.md) · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006583e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006583e4.md)
- 新版 呼出元 1件 [`0065e5bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e5bc.md) · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00658794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658794.md)

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
      "site": "0065e610",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e260",
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
      "site": "0065e61c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e26c",
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
      "0065e610",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065e61c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0065e610",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0065e61c",
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
- 0065e260 ["INT_ADD", "register:40f0:8", ["const:65e260:8", "const:4:8"]]
- 0065e260 ["CALL", null, ["ram:47ad34:8"]]
+ 0065e610 ["INT_ADD", "register:40f0:8", ["const:65e610:8", "const:4:8"]]
+ 0065e610 ["CALL", null, ["ram:47b054:8"]]
- 0065e26c ["INT_ADD", "register:40f0:8", ["const:65e26c:8", "const:4:8"]]
- 0065e26c ["CALL", null, ["ram:47ad34:8"]]
+ 0065e61c ["INT_ADD", "register:40f0:8", ["const:65e61c:8", "const:4:8"]]
+ 0065e61c ["CALL", null, ["ram:47b054:8"]]
- 0065e290 ["INT_ADD", "register:40f0:8", ["const:65e290:8", "const:4:8"]]
- 0065e290 ["CALL", null, ["callee:00658794:8"]]
+ 0065e640 ["INT_ADD", "register:40f0:8", ["const:65e640:8", "const:4:8"]]
+ 0065e640 ["CALL", null, ["callee:00658794:8"]]
~~~


<a id="compare-f3292202dc37ca2a5ab1831b0ee3659d"></a>

### [`0065e2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e2c4.md) → [`0065e674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e674.md) FUN_0065e674

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
      "definition_site": "0065e688",
      "incomplete_value": false,
      "site": "0065e68c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:368:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065e2d8",
      "incomplete_value": false,
      "site": "0065e2dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:398:8"
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
      "0065e68c",
      "DATA",
      [
        "storage",
        "00c74398",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e68c",
      "DATA",
      [
        "storage",
        "00c75368",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e2d0 ["INT_ADD", "register:40f0:8", ["const:65e2d0:8", "const:4:8"]]
- 0065e2d0 ["CALL", null, ["callee:00c58f30:8"]]
+ 0065e680 ["INT_ADD", "register:40f0:8", ["const:65e680:8", "const:4:8"]]
+ 0065e680 ["CALL", null, ["callee:00c58f30:8"]]
- 0065e2d4 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065e684 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065e2d8 ["COPY", "tmp:0:8", ["const:398:8"]]
- 0065e2d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065e2d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065e2d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065e688 ["COPY", "tmp:0:8", ["const:368:8"]]
+ 0065e688 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e688 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e688 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-804cf694026f6bd93163bfb9013bee97"></a>

### [`0065e2e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e2e8.md) → [`0065e698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e698.md) FUN_0065e698

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
      "definition_site": "0065e69c",
      "incomplete_value": false,
      "site": "0065e6a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:368:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065e2ec",
      "incomplete_value": false,
      "site": "0065e2f0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:398:8"
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
      "0065e6a0",
      "DATA",
      [
        "storage",
        "00c74398",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065e6a0",
      "DATA",
      [
        "storage",
        "00c75368",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e2e8 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065e698 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065e2ec ["COPY", "tmp:0:8", ["const:398:8"]]
- 0065e2ec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065e2ec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065e2ec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065e69c ["COPY", "tmp:0:8", ["const:368:8"]]
+ 0065e69c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e69c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065e69c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-52c7c819c62ef91b3d56e119a4f37366"></a>

### [`0065e330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e330.md) → [`0065e6e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e6e0.md) FUN_0065e6e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0065e300`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e300.md) · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b7a68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a68.md)
- 新版 呼出元 1件 [`0065e6b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e6b0.md) · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b8a14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b8a14.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e700",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e350",
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
      "site": "0065e70c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065e35c",
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
      "0065e700",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065e70c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065e730",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "0065e700",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0065e70c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0065e730",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065e350 ["INT_ADD", "register:40f0:8", ["const:65e350:8", "const:4:8"]]
- 0065e350 ["CALL", null, ["ram:47ad34:8"]]
+ 0065e700 ["INT_ADD", "register:40f0:8", ["const:65e700:8", "const:4:8"]]
+ 0065e700 ["CALL", null, ["ram:47b054:8"]]
- 0065e35c ["INT_ADD", "register:40f0:8", ["const:65e35c:8", "const:4:8"]]
- 0065e35c ["CALL", null, ["ram:47ad34:8"]]
+ 0065e70c ["INT_ADD", "register:40f0:8", ["const:65e70c:8", "const:4:8"]]
+ 0065e70c ["CALL", null, ["ram:47b054:8"]]
- 0065e370 ["INT_ADD", "register:40f0:8", ["const:65e370:8", "const:4:8"]]
- 0065e370 ["CALL", null, ["callee:008524fc:8"]]
+ 0065e720 ["INT_ADD", "register:40f0:8", ["const:65e720:8", "const:4:8"]]
+ 0065e720 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-0c9faf826be44c0035e1a7bf336ef2b0"></a>

### [`0065e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e3b0.md) → [`0065e760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e760.md) FUN_0065e760

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`00658dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/00658dec.md) [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md) [`0065ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065a/0065ad80.md) [`0065be6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065b/0065be6c.md) [`0065e3b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065e3b0.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 8件 [`0065919c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00659/0065919c.md) [`0065a28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065a/0065a28c.md) [`0065b130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065b/0065b130.md) [`0065c21c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065c/0065c21c.md) [`0065e760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065e760.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.25% / 新版 89.25%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_branch_alignment` 8件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065e8b0",
      "incomplete_value": false,
      "site": "0065e8b8",
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
      "definition_site": "0065e500",
      "incomplete_value": false,
      "site": "0065e508",
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
      "definition_site": "0065e8d4",
      "incomplete_value": false,
      "site": "0065e8e0",
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
      "definition_site": "0065e524",
      "incomplete_value": false,
      "site": "0065e530",
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
      "definition_site": "0065ea08",
      "incomplete_value": false,
      "site": "0065ea10",
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
      "definition_site": "0065e658",
      "incomplete_value": false,
      "site": "0065e660",
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
      "0065e8b0",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0065e8d4",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "0065ea08",
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
      "0065e8b0",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "0065e8d4",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "0065ea08",
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
- 0065e508 ["INT_ADD", "register:40f0:8", ["const:65e508:8", "const:4:8"]]
- 0065e508 ["CALL", null, ["callee:004421f4:8"]]
+ 0065e8b8 ["INT_ADD", "register:40f0:8", ["const:65e8b8:8", "const:4:8"]]
+ 0065e8b8 ["CALL", null, ["callee:004421f4:8"]]
- 0065e530 ["INT_ADD", "register:40f0:8", ["const:65e530:8", "const:4:8"]]
- 0065e530 ["CALL", null, ["callee:00442b54:8"]]
+ 0065e8e0 ["INT_ADD", "register:40f0:8", ["const:65e8e0:8", "const:4:8"]]
+ 0065e8e0 ["CALL", null, ["callee:00442b54:8"]]
- 0065e660 ["INT_ADD", "register:40f0:8", ["const:65e660:8", "const:4:8"]]
- 0065e660 ["CALL", null, ["callee:004421f4:8"]]
+ 0065ea10 ["INT_ADD", "register:40f0:8", ["const:65ea10:8", "const:4:8"]]
+ 0065ea10 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-6a9f08e7b80e407f67a6ff0aae4f419b"></a>

### [`0065eba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065eba0.md) → [`0065ef50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065ef50.md) FUN_0065ef50

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 56.25% / 新版 56.25%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0065ebc8",
      "DATA",
      [
        "storage",
        "00c74418",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0065ebd4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065ebd8",
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
      "0065ef78",
      "DATA",
      [
        "storage",
        "00c753e8",
        null,
        "undefined *"
      ]
    ],
    [
      "0065ef84",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0065ef88",
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
- 0065ebb4 ["INT_ADD", "register:40f0:8", ["const:65ebb4:8", "const:4:8"]]
- 0065ebb4 ["CALL", null, ["callee:00c58f30:8"]]
+ 0065ef64 ["INT_ADD", "register:40f0:8", ["const:65ef64:8", "const:4:8"]]
+ 0065ef64 ["CALL", null, ["callee:00c58f30:8"]]
- 0065ebc0 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065ef70 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065ebc4 ["COPY", "tmp:0:8", ["const:418:8"]]
- 0065ebc4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065ebc4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065ebc4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0960409d2ca19fd1426a4f77f0ebff1c"></a>

### [`0065ebe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ebe0.md) → [`0065ef90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065ef90.md) FUN_0065ef90

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
      "definition_site": "0065ef94",
      "incomplete_value": false,
      "site": "0065ef98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:3e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065ebe4",
      "incomplete_value": false,
      "site": "0065ebe8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:418:8"
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
      "0065ef98",
      "DATA",
      [
        "storage",
        "00c74418",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065ef98",
      "DATA",
      [
        "storage",
        "00c753e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ebe0 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065ef90 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065ebe4 ["COPY", "tmp:0:8", ["const:418:8"]]
- 0065ebe4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065ebe4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065ebe4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0065ef94 ["COPY", "tmp:0:8", ["const:3e8:8"]]
+ 0065ef94 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0065ef94 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0065ef94 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b3b46756f8a739bf16e4f2ecb7245998"></a>

### [`0065ec38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ec38.md) → [`0065efe8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065efe8.md) FUN_0065efe8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0065ec08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ec08.md) · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00659edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00659/00659edc.md)
- 新版 呼出元 1件 [`0065efb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065e/0065efb8.md) · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0065a28c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065a/0065a28c.md)

変更の種類 branch_condition_or_target, call, call_target, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 95.12% / 新版 95.12%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065f008",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ec58",
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
      "site": "0065f030",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ec80",
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
      "0065f008",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065f030",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0065f008",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0065f030",
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
- 0065ec58 ["INT_ADD", "register:40f0:8", ["const:65ec58:8", "const:4:8"]]
- 0065ec58 ["CALL", null, ["ram:47ad34:8"]]
+ 0065f008 ["INT_ADD", "register:40f0:8", ["const:65f008:8", "const:4:8"]]
+ 0065f008 ["CALL", null, ["ram:47b054:8"]]
- 0065ec80 ["INT_ADD", "register:40f0:8", ["const:65ec80:8", "const:4:8"]]
- 0065ec80 ["CALL", null, ["ram:47ad34:8"]]
+ 0065f030 ["INT_ADD", "register:40f0:8", ["const:65f030:8", "const:4:8"]]
+ 0065f030 ["CALL", null, ["ram:47b054:8"]]
- 0065ec54 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 0065ec54 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 0065f004 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 0065f004 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-0c7334d9a05835eaf985f44f9c6cc438"></a>

### [`0065ecdc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ecdc.md) → [`0065f08c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f08c.md) FUN_0065f08c

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
      "definition_site": "0065f098",
      "incomplete_value": false,
      "site": "0065f0a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c75000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0065ece8",
      "incomplete_value": false,
      "site": "0065ecf4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c74000:8"
          ],
          [
            "leaf",
            "const:498:8"
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
      "0065f0a4",
      "DATA",
      [
        "storage",
        "00c74498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f0a4",
      "DATA",
      [
        "storage",
        "00c75468",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ece4 ["COPY", "register:4050:8", ["const:c74000:8"]]
+ 0065f094 ["COPY", "register:4050:8", ["const:c75000:8"]]
- 0065ece8 ["COPY", "tmp:0:8", ["const:498:8"]]
- 0065ece8 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 0065ece8 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 0065ece8 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 0065f098 ["COPY", "tmp:0:8", ["const:468:8"]]
+ 0065f098 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 0065f098 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 0065f098 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-44d53ad17b4978bd10b3216cf2b69868"></a>

### [`0065ed20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ed20.md) → [`0065f0d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f0d0.md) FUN_0065f0d0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0065ed44",
      "DATA",
      [
        "storage",
        "00c74498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f0f4",
      "DATA",
      [
        "storage",
        "00c75468",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ed34 ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065f0e4 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065ed38 ["COPY", "tmp:0:8", ["const:498:8"]]
- 0065ed38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065ed38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065ed38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0065ed3c ["COPY", "tmp:0:8", ["const:20:8"]]
- 0065ed3c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 0065ed3c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 0065ed3c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-5df9524d3c67a9bfbb33f62d650f5625"></a>

### [`0065ed7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ed7c.md) → [`0065f12c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f12c.md) FUN_0065f12c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 80.65% / 新版 80.65%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0065ed8c",
      "incomplete_value": false,
      "site": "0065ed90",
      "value": [
        "leaf",
        "const:50:8"
      ]
    },
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0065f184",
      "incomplete_value": true,
      "site": "0065f194",
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
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "0065ede8",
      "incomplete_value": true,
      "site": "0065edf4",
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
      "unmatched:0065ed7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065ed80",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065eda8",
      "DATA",
      [
        "storage",
        "00c74498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f12c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0065f130",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0065f158",
      "DATA",
      [
        "storage",
        "00c75468",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ed90 ["INT_ADD", "register:40f0:8", ["const:65ed90:8", "const:4:8"]]
- 0065ed90 ["CALL", null, ["callee:00c58f30:8"]]
+ 0065f140 ["INT_ADD", "register:40f0:8", ["const:65f140:8", "const:4:8"]]
+ 0065f140 ["CALL", null, ["callee:00c58f30:8"]]
- 0065ede4 ["COPY", "register:0:8", ["register:4040:8"]]
- 0065ede4 ["INT_ADD", "register:40f0:8", ["const:65ede4:8", "const:4:8"]]
- 0065ede4 ["CALLIND", null, ["register:0:8"]]
+ 0065f194 ["COPY", "register:0:8", ["register:4040:8"]]
+ 0065f194 ["INT_ADD", "register:40f0:8", ["const:65f194:8", "const:4:8"]]
+ 0065f194 ["CALLIND", null, ["register:0:8"]]
- 0065ed7c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0065ed7c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0065ed7c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0065ed7c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-de5c437e05a99f83aa123aadd2774734"></a>

### [`0065ee0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ee0c.md) → [`0065f1bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f1bc.md) FUN_0065f1bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 62.50% / 新版 62.50%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "0065ee34"
      ],
      [
        "CONDITIONAL_JUMP",
        "0065f1e4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "0065f1e4",
      "incomplete_value": true,
      "site": "0065f20c",
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
      "definition_site": "0065ee34",
      "incomplete_value": true,
      "site": "0065ee5c",
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
      "unmatched:0065ee0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065ee10",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0065ee2c",
      "DATA",
      [
        "storage",
        "00c74498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f1bc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0065f1c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0065f1dc",
      "DATA",
      [
        "storage",
        "00c75468",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065ee0c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0065ee0c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0065ee0c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 0065ee0c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 0065ee10 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 0065ee10 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 0065ee14 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-aa6b4832cb08026bfb6446e5cfd6ceae"></a>

### [`0065ef44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ef44.md) → [`0065f2f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f2f4.md) FUN_0065f2f4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0065ef14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065ef14.md) · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006583e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00658/006583e4.md)
- 新版 呼出元 1件 [`0065f2c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f2c4.md) · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`00658794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/00658794.md)

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
      "site": "0065f318",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ef68",
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
      "site": "0065f324",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0065ef74",
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
      "0065f318",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0065f324",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "0065f318",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "0065f324",
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
- 0065ef68 ["INT_ADD", "register:40f0:8", ["const:65ef68:8", "const:4:8"]]
- 0065ef68 ["CALL", null, ["ram:47ad34:8"]]
+ 0065f318 ["INT_ADD", "register:40f0:8", ["const:65f318:8", "const:4:8"]]
+ 0065f318 ["CALL", null, ["ram:47b054:8"]]
- 0065ef74 ["INT_ADD", "register:40f0:8", ["const:65ef74:8", "const:4:8"]]
- 0065ef74 ["CALL", null, ["ram:47ad34:8"]]
+ 0065f324 ["INT_ADD", "register:40f0:8", ["const:65f324:8", "const:4:8"]]
+ 0065f324 ["CALL", null, ["ram:47b054:8"]]
- 0065ef98 ["INT_ADD", "register:40f0:8", ["const:65ef98:8", "const:4:8"]]
- 0065ef98 ["CALL", null, ["callee:00658794:8"]]
+ 0065f348 ["INT_ADD", "register:40f0:8", ["const:65f348:8", "const:4:8"]]
+ 0065f348 ["CALL", null, ["callee:00658794:8"]]
~~~


<a id="compare-3348bdc83be442788f68547ca957d625"></a>

### [`0065efcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065efcc.md) → [`0065f37c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f37c.md) FUN_0065f37c

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
      "unmatched:0065efe4",
      "DATA",
      [
        "storage",
        "00c74518",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0065efe8",
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
      "0065f394",
      "DATA",
      [
        "storage",
        "00c754e8",
        null,
        "undefined *"
      ]
    ],
    [
      "0065f398",
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
- 0065efd8 ["INT_ADD", "register:40f0:8", ["const:65efd8:8", "const:4:8"]]
- 0065efd8 ["CALL", null, ["callee:00c58f30:8"]]
+ 0065f388 ["INT_ADD", "register:40f0:8", ["const:65f388:8", "const:4:8"]]
+ 0065f388 ["CALL", null, ["callee:00c58f30:8"]]
- 0065efdc ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 0065f38c ["COPY", "register:4040:8", ["const:c75000:8"]]
- 0065efe0 ["COPY", "tmp:0:8", ["const:518:8"]]
- 0065efe0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065efe0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065efe0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9459f7ca78244b7441157a97f0b91563"></a>

### [`0065eff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065e/0065eff0.md) → [`0065f3a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f3a0.md) FUN_0065f3a0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0065eff8",
      "DATA",
      [
        "storage",
        "00c74518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0065f3a8",
      "DATA",
      [
        "storage",
        "00c754e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0065eff0 ["COPY", "register:4040:8", ["const:c74000:8"]]
- 0065eff4 ["COPY", "tmp:0:8", ["const:518:8"]]
- 0065eff4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0065eff4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0065eff4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0065eff8 ["COPY", "tmp:0:8", ["register:4008:8"]]
- 0065eff8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-b75aa5b21664b72d91d61fda28a377bf"></a>

### [`0065f008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f008.md) → [`0065f3b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f3b8.md) FUN_0065f3b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 1件 [`0065f038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0065f/0065f038.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0065f3e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0065f/0065f3e8.md)

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0065f00c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0065f3e8"
      ]
    ]
  ],
  "added": [
    [
      "0065f3bc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0065f3e8"
      ]
    ]
  ]
}
~~~


