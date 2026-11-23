# v16.0.2 → v16.0.3 · 最優先の変更候補 (83)

[一覧の目次](README.md)

<a id="compare-34ffcf49b46ac5f44063fd863d5febaa"></a>

### [`00b2d92c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2d92c.md) → [`00b2e920`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2e920.md) _INIT_260

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_store_alignment

命令の説明率　旧版 77.40% / 新版 77.40%

優先判定に残った影響 `call_argument_candidate` 3件, `store_destination` 4件, `store_value` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b2eba8",
      "incomplete_value": false,
      "site": "00b2eba8",
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
            "const:f48:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2dbb4",
      "incomplete_value": false,
      "site": "00b2dbb4",
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
            "const:f88:8"
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b2ebc4",
      "incomplete_value": false,
      "site": "00b2ebc4",
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
                "const:f48:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:9:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2dbd0",
      "incomplete_value": false,
      "site": "00b2dbd0",
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
                "const:f88:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:9:8"
          ]
        ]
      ]
    },
    "ordinal": 50,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b2ebc8",
      "incomplete_value": false,
      "site": "00b2ebc8",
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
                "const:f48:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2dbd4",
      "incomplete_value": false,
      "site": "00b2dbd4",
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
                "const:f88:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:1:8"
          ]
        ]
      ]
    },
    "ordinal": 51,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00b2d95c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2d968",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b2d984",
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
      "00b2e950",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "00b2e95c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b2e978",
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
- 00b2da8c ["INT_ADD", "register:40f0:8", ["const:b2da8c:8", "const:4:8"]]
- 00b2da8c ["CALL", null, ["callee:0043bb58:8"]]
+ 00b2ea80 ["INT_ADD", "register:40f0:8", ["const:b2ea80:8", "const:4:8"]]
+ 00b2ea80 ["CALL", null, ["callee:0043bb58:8"]]
- 00b2dba4 ["INT_ADD", "register:40f0:8", ["const:b2dba4:8", "const:4:8"]]
- 00b2dba4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b2eb98 ["INT_ADD", "register:40f0:8", ["const:b2eb98:8", "const:4:8"]]
+ 00b2eb98 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b2dbdc ["INT_ADD", "register:40f0:8", ["const:b2dbdc:8", "const:4:8"]]
- 00b2dbdc ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b2ebd0 ["INT_ADD", "register:40f0:8", ["const:b2ebd0:8", "const:4:8"]]
+ 00b2ebd0 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-a4cdd90ad3b82415402511d994a77c9e"></a>

### [`00b2dd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2dd38.md) → [`00b2ed2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2ed2c.md) FUN_00b2ed2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0067e1dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e1dc.md) · 呼出先 2件 [`00b3cb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3cb74.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 1件 [`0067e58c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e58c.md) · 呼出先 2件 [`00b3db68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3db68.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 88.24% / 新版 88.24%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2ed44",
      "incomplete_value": false,
      "site": "00b2ed54",
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
            "const:8d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2dd50",
      "incomplete_value": false,
      "site": "00b2dd60",
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
            "const:900:8"
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
      "00b2ed54",
      "DATA",
      [
        "storage",
        "00c74900",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b2ed54",
      "DATA",
      [
        "storage",
        "00c758d0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2dd48 ["INT_ADD", "register:40f0:8", ["const:b2dd48:8", "const:4:8"]]
- 00b2dd48 ["CALL", null, ["callee:00b3db68:8"]]
+ 00b2ed3c ["INT_ADD", "register:40f0:8", ["const:b2ed3c:8", "const:4:8"]]
+ 00b2ed3c ["CALL", null, ["callee:00b3db68:8"]]
- 00b2dd4c ["COPY", "register:4040:8", ["const:c74000:8"]]
+ 00b2ed40 ["COPY", "register:4040:8", ["const:c75000:8"]]
- 00b2dd50 ["COPY", "tmp:0:8", ["const:900:8"]]
- 00b2dd50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2dd50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2dd50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2ed44 ["COPY", "tmp:0:8", ["const:8d0:8"]]
+ 00b2ed44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2ed44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2ed44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-dc0103edf7d85e4b1a42defcd6dc8592"></a>

### [`00b2dd7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2d/00b2dd7c.md) → [`00b2ed70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2e/00b2ed70.md) FUN_00b2ed70

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) [`00ac5560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac5/00ac5560.md) [`00ac6d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac6/00ac6d04.md) [`00ac7274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac7/00ac7274.md) · 呼出先 11件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008641b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00864/008641b8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 4件 [`00964fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00964/00964fd8.md) [`00ac6554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac6/00ac6554.md) [`00ac7cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac7/00ac7cf8.md) [`00ac8268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac8/00ac8268.md) · 呼出先 11件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00865164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00865/00865164.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 65.07% / 新版 65.07%

優先判定に残った影響 `call_argument_candidate` 42件, `store_destination` 49件, `store_value` 29件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2ee18",
      "incomplete_value": true,
      "site": "00b2ee18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:934:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2de24",
      "incomplete_value": true,
      "site": "00b2de24",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:856:8"
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
      "definition_site": "00b2ee1c",
      "incomplete_value": true,
      "site": "00b2ee1c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b2de28",
      "incomplete_value": true,
      "site": "00b2de28",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2ee90",
      "incomplete_value": true,
      "site": "00b2ee90",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2de9c",
      "incomplete_value": true,
      "site": "00b2de9c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:f6a:8"
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
      "00b2edd0",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2edf0",
      "READ",
      [
        "storage",
        "002a22cb",
        null,
        "string"
      ]
    ],
    [
      "00b2ee0c",
      "READ",
      [
        "storage",
        "002bc856",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b2edd0",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2edf0",
      "READ",
      [
        "storage",
        "002a2396",
        null,
        "string"
      ]
    ],
    [
      "00b2ee0c",
      "READ",
      [
        "storage",
        "002bc934",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2ddd8 ["COPY", "tmp:0:8", ["const:38:8"]]
- 00b2ddd8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2ddd8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2ddd8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2edcc ["COPY", "tmp:0:8", ["const:ff8:8"]]
+ 00b2edcc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2edcc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2edcc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b2ddf8 ["COPY", "tmp:0:8", ["const:2cb:8"]]
- 00b2ddf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2ddf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2ddf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2edec ["COPY", "tmp:0:8", ["const:396:8"]]
+ 00b2edec ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2edec ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2edec ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b2de14 ["COPY", "tmp:0:8", ["const:856:8"]]
- 00b2de14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2de14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2de14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2ee08 ["COPY", "tmp:0:8", ["const:934:8"]]
+ 00b2ee08 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2ee08 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2ee08 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c09529176b092a326bfabdafbb13276"></a>

### [`00b2e554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2e/00b2e554.md) → [`00b2f548`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b2f/00b2f548.md) FUN_00b2f548

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`0090dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dc5c.md) [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) [`00ac5560`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac5/00ac5560.md) [`00ac6d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac6/00ac6d04.md) [`00ac7274`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ac7/00ac7274.md) · 呼出先 24件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md)
- 新版 呼出元 5件 [`0090ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ec08.md) [`00964fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00964/00964fd8.md) [`00ac6554`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac6/00ac6554.md) [`00ac7cf8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac7/00ac7cf8.md) [`00ac8268`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ac8/00ac8268.md) · 呼出先 24件 [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046e898`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046e/0046e898.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 81.30% / 新版 81.30%

優先判定に残った影響 `call_argument_candidate` 42件, `store_destination` 42件, `store_value` 25件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b2f5ec",
      "incomplete_value": true,
      "site": "00b2f5ec",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:5d5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2e5f8",
      "incomplete_value": true,
      "site": "00b2e5f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:50a:8"
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
      "definition_site": "00b2f604",
      "incomplete_value": true,
      "site": "00b2f604",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ca7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2e610",
      "incomplete_value": true,
      "site": "00b2e610",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc9:8"
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
      "definition_site": "00b2f608",
      "incomplete_value": true,
      "site": "00b2f608",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b2e614",
      "incomplete_value": true,
      "site": "00b2e614",
      "value": [
        "LOAD",
        "8",
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
      "00b2f5bc",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2f5dc",
      "READ",
      [
        "storage",
        "002a450a",
        null,
        "string"
      ]
    ],
    [
      "00b2f5f8",
      "READ",
      [
        "storage",
        "002bdbc9",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b2f5bc",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b2f5dc",
      "READ",
      [
        "storage",
        "002a45d5",
        null,
        "string"
      ]
    ],
    [
      "00b2f5f8",
      "READ",
      [
        "storage",
        "002bdca7",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2e598 ["INT_ADD", "register:40f0:8", ["const:b2e598:8", "const:4:8"]]
- 00b2e598 ["CALL", null, ["callee:0048af58:8"]]
+ 00b2f58c ["INT_ADD", "register:40f0:8", ["const:b2f58c:8", "const:4:8"]]
+ 00b2f58c ["CALL", null, ["callee:0048af58:8"]]
- 00b2e5c4 ["COPY", "tmp:0:8", ["const:38:8"]]
- 00b2e5c4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2e5c4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2e5c4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2f5b8 ["COPY", "tmp:0:8", ["const:ff8:8"]]
+ 00b2f5b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2f5b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2f5b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 00b2e5e4 ["COPY", "tmp:0:8", ["const:50a:8"]]
- 00b2e5e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2e5e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2e5e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b2f5d8 ["COPY", "tmp:0:8", ["const:5d5:8"]]
+ 00b2f5d8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2f5d8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b2f5d8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c97ef51c8abcfa3ceaed874bf861243a"></a>

### [`00b2f3e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f3e8.md) → [`00b303dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b303dc.md) FUN_00b303dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) [`0097e118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097e118.md) · 呼出先 2件 [`00695c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695c04.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`00964fd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00964/00964fd8.md) [`0097f0c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0097f/0097f0c4.md) · 呼出先 2件 [`00695fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00695/00695fb4.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b303f4",
      "incomplete_value": false,
      "site": "00b3041c",
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
      "definition_site": "00b2f400",
      "incomplete_value": false,
      "site": "00b2f428",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b303f4",
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
      "00b303f4",
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
- 00b2f428 ["INT_ADD", "register:40f0:8", ["const:b2f428:8", "const:4:8"]]
- 00b2f428 ["CALL", null, ["callee:00695fb4:8"]]
+ 00b3041c ["INT_ADD", "register:40f0:8", ["const:b3041c:8", "const:4:8"]]
+ 00b3041c ["CALL", null, ["callee:00695fb4:8"]]
- 00b2f400 ["COPY", "tmp:0:8", ["const:735:8"]]
- 00b2f400 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 00b2f400 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 00b2f400 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 00b303f4 ["COPY", "tmp:0:8", ["const:785:8"]]
+ 00b303f4 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 00b303f4 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 00b303f4 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
- 00b2f450 ["INT_ADD", "register:40f0:8", ["const:b2f450:8", "const:4:8"]]
- 00b2f450 ["CALL", null, ["callee:00c58f80:8"]]
+ 00b30444 ["INT_ADD", "register:40f0:8", ["const:b30444:8", "const:4:8"]]
+ 00b30444 ["CALL", null, ["callee:00c58f80:8"]]
~~~


<a id="compare-f2d3e0622ad2e8e65c91bae7f7f7a5f8"></a>

### [`00b2f454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f454.md) → [`00b30448`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30448.md) _INIT_261

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b30484",
      "incomplete_value": true,
      "site": "00b304a0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b2f490",
      "incomplete_value": true,
      "site": "00b2f4ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b304c8",
      "incomplete_value": true,
      "site": "00b304e4",
      "value": [
        "LOAD",
        "16",
        [
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
                "const:e3d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2f4d4",
      "incomplete_value": true,
      "site": "00b2f4f0",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "00b304e8",
      "incomplete_value": true,
      "site": "00b30500",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b2f4f4",
      "incomplete_value": true,
      "site": "00b2f50c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b30484",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b304a8",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b304c8",
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
      "00b30484",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b304a8",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b304c8",
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
- 00b2f688 ["INT_ADD", "register:40f0:8", ["const:b2f688:8", "const:4:8"]]
- 00b2f688 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b3067c ["INT_ADD", "register:40f0:8", ["const:b3067c:8", "const:4:8"]]
+ 00b3067c ["CALL", null, ["callee:00c58ed0:8"]]
- 00b2f47c ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b30470 ["COPY", "register:4098:8", ["const:1125000:8"]]
- 00b2f480 ["COPY", "tmp:0:8", ["const:fa0:8"]]
- 00b2f480 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b2f480 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b2f480 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b30474 ["COPY", "tmp:0:8", ["const:f60:8"]]
+ 00b30474 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b30474 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b30474 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-17e18ca2709d082c5db6cf67e6ade67f"></a>

### [`00b2f7e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f7e4.md) → [`00b307d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b307d8.md) FUN_00b307d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 2件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) · 呼出先 1件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md)
- 新版 呼出元 2件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) [`00a9682c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a96/00a9682c.md) · 呼出先 1件 [`00b3cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cef0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b30814",
      "incomplete_value": false,
      "site": "00b30814",
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
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2f820",
      "incomplete_value": false,
      "site": "00b2f820",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca3000:8"
          ],
          [
            "leaf",
            "const:f6c:8"
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
      "00b30814",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b30814",
      "WRITE",
      [
        "storage",
        "00ca4f3c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f820 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00b2f820 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f6c:8"]]
- 00b2f820 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b30814 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00b30814 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f3c:8"]]
+ 00b30814 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b2f814 ["INT_ADD", "register:40f0:8", ["const:b2f814:8", "const:4:8"]]
- 00b2f814 ["CALL", null, ["callee:00b3cef0:8"]]
+ 00b30808 ["INT_ADD", "register:40f0:8", ["const:b30808:8", "const:4:8"]]
+ 00b30808 ["CALL", null, ["callee:00b3cef0:8"]]
- 00b2f818 ["COPY", "register:4040:8", ["const:ca3000:8"]]
+ 00b3080c ["COPY", "register:4040:8", ["const:ca4000:8"]]
~~~


<a id="compare-75fb95d9338c6319e628b4608bd896c3"></a>

### [`00b2f82c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f82c.md) → [`00b30820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30820.md) FUN_00b30820

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0075d5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d5e0.md) · 呼出先 2件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 1件 [`0075d990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075d990.md) · 呼出先 2件 [`00b3cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cef0.md) [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 95.83% / 新版 95.83%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b30870",
      "incomplete_value": false,
      "site": "00b30870",
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
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2f87c",
      "incomplete_value": false,
      "site": "00b2f87c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca3000:8"
          ],
          [
            "leaf",
            "const:f6c:8"
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
      "00b30870",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b30870",
      "WRITE",
      [
        "storage",
        "00ca4f3c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f87c ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00b2f87c ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f6c:8"]]
- 00b2f87c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b30870 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00b30870 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f3c:8"]]
+ 00b30870 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b2f840 ["INT_ADD", "register:40f0:8", ["const:b2f840:8", "const:4:8"]]
- 00b2f840 ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b30834 ["INT_ADD", "register:40f0:8", ["const:b30834:8", "const:4:8"]]
+ 00b30834 ["CALL", null, ["callee:00b3cf24:8"]]
- 00b2f870 ["INT_ADD", "register:40f0:8", ["const:b2f870:8", "const:4:8"]]
- 00b2f870 ["CALL", null, ["callee:00b3cef0:8"]]
+ 00b30864 ["INT_ADD", "register:40f0:8", ["const:b30864:8", "const:4:8"]]
+ 00b30864 ["CALL", null, ["callee:00b3cef0:8"]]
~~~


<a id="compare-54a43ce1c5c4242235fe4b3b688bb08c"></a>

### [`00b2f8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f8b0.md) → [`00b308a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b308a4.md) FUN_00b308a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 1件 [`0075d5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d5e0.md) · 呼出先 2件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 1件 [`0075d990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075d990.md) · 呼出先 2件 [`00b3cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cef0.md) [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 96.30% / 新版 96.30%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b30900",
      "incomplete_value": false,
      "site": "00b30900",
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
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2f90c",
      "incomplete_value": false,
      "site": "00b2f90c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca3000:8"
          ],
          [
            "leaf",
            "const:f6c:8"
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
      "00b30900",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b30900",
      "WRITE",
      [
        "storage",
        "00ca4f3c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f90c ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00b2f90c ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f6c:8"]]
- 00b2f90c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b30900 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00b30900 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f3c:8"]]
+ 00b30900 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b2f8c4 ["INT_ADD", "register:40f0:8", ["const:b2f8c4:8", "const:4:8"]]
- 00b2f8c4 ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b308b8 ["INT_ADD", "register:40f0:8", ["const:b308b8:8", "const:4:8"]]
+ 00b308b8 ["CALL", null, ["callee:00b3cf24:8"]]
- 00b2f900 ["INT_ADD", "register:40f0:8", ["const:b2f900:8", "const:4:8"]]
- 00b2f900 ["CALL", null, ["callee:00b3cef0:8"]]
+ 00b308f4 ["INT_ADD", "register:40f0:8", ["const:b308f4:8", "const:4:8"]]
+ 00b308f4 ["CALL", null, ["callee:00b3cef0:8"]]
~~~


<a id="compare-7ca8a1609c8c0206139a5d6cf52190ad"></a>

### [`00b2f944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f944.md) → [`00b30938`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30938.md) FUN_00b30938

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 4件 [`0075928c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/0075928c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) [`00996c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996c70.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 2件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 4件 [`0075963c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00759/0075963c.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) [`00997c1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00997/00997c1c.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 2件 [`00b3cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cef0.md) [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b309a8",
      "incomplete_value": false,
      "site": "00b309a8",
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
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2f9b4",
      "incomplete_value": false,
      "site": "00b2f9b4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca3000:8"
          ],
          [
            "leaf",
            "const:f6c:8"
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
      "00b309a8",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b309a8",
      "WRITE",
      [
        "storage",
        "00ca4f3c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2f9b4 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00b2f9b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f6c:8"]]
- 00b2f9b4 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b309a8 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00b309a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f3c:8"]]
+ 00b309a8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b2f95c ["INT_ADD", "register:40f0:8", ["const:b2f95c:8", "const:4:8"]]
- 00b2f95c ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b30950 ["INT_ADD", "register:40f0:8", ["const:b30950:8", "const:4:8"]]
+ 00b30950 ["CALL", null, ["callee:00b3cf24:8"]]
- 00b2f97c ["INT_ADD", "register:40f0:8", ["const:b2f97c:8", "const:4:8"]]
- 00b2f97c ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b30970 ["INT_ADD", "register:40f0:8", ["const:b30970:8", "const:4:8"]]
+ 00b30970 ["CALL", null, ["callee:00b3cf24:8"]]
~~~


<a id="compare-22514536ae12849731009d992187a1c9"></a>

### [`00b2f9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2f9c8.md) → [`00b309bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b309bc.md) FUN_00b309bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 6件 [`0070d410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0070d/0070d410.md) [`0075928c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/0075928c.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`00962f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00962/00962f70.md) [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 2件 [`00b3befc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3befc.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 6件 [`0070d7c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0070d/0070d7c0.md) [`0075963c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00759/0075963c.md) [`009627a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009627a0.md) [`00963f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00963/00963f1c.md) [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 2件 [`00b3cef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cef0.md) [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `store_destination` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b30a34",
      "incomplete_value": false,
      "site": "00b30a34",
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
            "const:f3c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2fa40",
      "incomplete_value": false,
      "site": "00b2fa40",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:ca3000:8"
          ],
          [
            "leaf",
            "const:f6c:8"
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
      "00b30a34",
      "WRITE",
      [
        "storage",
        "00ca3f6c",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b30a34",
      "WRITE",
      [
        "storage",
        "00ca4f3c",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2fa40 ["COPY", "tmp:0:4", ["register:4048:4"]]
- 00b2fa40 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f6c:8"]]
- 00b2fa40 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
+ 00b30a34 ["COPY", "tmp:0:4", ["register:4048:4"]]
+ 00b30a34 ["INT_ADD", "tmp:1:8", ["register:4040:8", "const:f3c:8"]]
+ 00b30a34 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:1"]]
- 00b2f9e0 ["INT_ADD", "register:40f0:8", ["const:b2f9e0:8", "const:4:8"]]
- 00b2f9e0 ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b309d4 ["INT_ADD", "register:40f0:8", ["const:b309d4:8", "const:4:8"]]
+ 00b309d4 ["CALL", null, ["callee:00b3cf24:8"]]
- 00b2f9fc ["INT_ADD", "register:40f0:8", ["const:b2f9fc:8", "const:4:8"]]
- 00b2f9fc ["CALL", null, ["callee:00b3cf24:8"]]
+ 00b309f0 ["INT_ADD", "register:40f0:8", ["const:b309f0:8", "const:4:8"]]
+ 00b309f0 ["CALL", null, ["callee:00b3cf24:8"]]
~~~


<a id="compare-57295cca95c2dbc6a43c4d6d4190dc50"></a>

### [`00b2faa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2faa8.md) → [`00b30a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a9c.md) FUN_00b30a9c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00476b90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00476/00476b90.md) · 呼出先 15件 [`0046dafc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046dafc.md) [`00597e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e48.md) [`00597e88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597e88.md) [`007522d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00752/007522d8.md) [`007643dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00764/007643dc.md)
- 新版 呼出元 1件 [`00476eb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00476/00476eb0.md) · 呼出先 15件 [`0046de1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de1c.md) [`00598168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598168.md) [`005981a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/005981a8.md) [`00752688`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00752/00752688.md) [`007647b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007647b8.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.89% / 新版 91.89%

優先判定に残った影響 `call_argument_candidate` 2件, `call_target` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b30b64",
      "incomplete_value": true,
      "site": "00b30b6c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:10:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2fb70",
      "incomplete_value": true,
      "site": "00b2fb78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fc0:8"
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
      "definition_site": "00b30b60",
      "incomplete_value": true,
      "site": "00b30b70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4d9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b2fb6c",
      "incomplete_value": true,
      "site": "00b2fb7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:402:8"
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
      "definition_site": "00b30b60",
      "incomplete_value": true,
      "site": "00b30b70",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b2fb6c",
      "incomplete_value": true,
      "site": "00b2fb7c",
      "value": [
        "LOAD",
        "16",
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
      "00b30ac8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00768430"
      ]
    ],
    [
      "00b30ad8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007643dc"
      ]
    ],
    [
      "00b30ae0",
      "PARAM",
      [
        "storage",
        "002b98a4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b30ac8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0076880c"
      ]
    ],
    [
      "00b30ad8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "007647b8"
      ]
    ],
    [
      "00b30ae0",
      "PARAM",
      [
        "storage",
        "002b9982",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2fad4 ["INT_ADD", "register:40f0:8", ["const:b2fad4:8", "const:4:8"]]
- 00b2fad4 ["CALL", null, ["ram:768430:8"]]
+ 00b30ac8 ["INT_ADD", "register:40f0:8", ["const:b30ac8:8", "const:4:8"]]
+ 00b30ac8 ["CALL", null, ["ram:76880c:8"]]
- 00b2fae4 ["INT_ADD", "register:40f0:8", ["const:b2fae4:8", "const:4:8"]]
- 00b2fae4 ["CALL", null, ["ram:7643dc:8"]]
+ 00b30ad8 ["INT_ADD", "register:40f0:8", ["const:b30ad8:8", "const:4:8"]]
+ 00b30ad8 ["CALL", null, ["ram:7647b8:8"]]
- 00b2faf8 ["INT_ADD", "register:40f0:8", ["const:b2faf8:8", "const:4:8"]]
- 00b2faf8 ["CALL", null, ["callee:00c59000:8"]]
+ 00b30aec ["INT_ADD", "register:40f0:8", ["const:b30aec:8", "const:4:8"]]
+ 00b30aec ["CALL", null, ["callee:00c59000:8"]]
~~~


<a id="compare-ed6f9f717228d388612173a2d974bd63"></a>

### [`00b2ff14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2ff14.md) → [`00b30f08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30f08.md) FUN_00b30f08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00b2faa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2faa8.md) · 呼出先 12件 [`00560498`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00560/00560498.md) [`00597648`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597648.md) [`0059765c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059765c.md) [`00597664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597664.md) [`00597f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f04.md)
- 新版 呼出元 1件 [`00b30a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a9c.md) · 呼出先 12件 [`005607b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00560/005607b8.md) [`00597968`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597968.md) [`0059797c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059797c.md) [`00597984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597984.md) [`00598224`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598224.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `unresolved_store_alignment` 10件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b30f38",
      "READ",
      [
        "storage",
        "002c2850",
        null,
        null
      ]
    ],
    [
      "unmatched:00b2ff60",
      "READ",
      [
        "storage",
        "002aa5d4",
        null,
        "string"
      ]
    ],
    [
      "unmatched:00b2ff60",
      "READ",
      [
        "storage",
        "002aa5e4",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b30f38",
      "READ",
      [
        "storage",
        "002c28a0",
        null,
        null
      ]
    ],
    [
      "00b30f54",
      "READ",
      [
        "storage",
        "002aa6a1",
        null,
        "string"
      ]
    ],
    [
      "00b30f54",
      "READ",
      [
        "storage",
        "002aa6b1",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b2ff38 ["INT_ADD", "register:40f0:8", ["const:b2ff38:8", "const:4:8"]]
- 00b2ff38 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b30f2c ["INT_ADD", "register:40f0:8", ["const:b30f2c:8", "const:4:8"]]
+ 00b30f2c ["CALL", null, ["callee:00c58f30:8"]]
- 00b2ff44 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:850:8"]]
- 00b2ff44 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 00b2ff44 ["COPY", "register:5010:8", ["const:0:8"]]
- 00b2ff44 ["COPY", "register:5018:8", ["const:0:8"]]
+ 00b30f38 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:8a0:8"]]
+ 00b30f38 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 00b30f38 ["COPY", "register:5010:8", ["const:0:8"]]
+ 00b30f38 ["COPY", "register:5018:8", ["const:0:8"]]
- 00b2ff5c ["COPY", "tmp:0:8", ["const:574:8"]]
- 00b2ff5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b2ff5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b2ff5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-de3375c5c23236d320fd55973e784992"></a>

### [`00b301dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b301dc.md) → [`00b311d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b31/00b311d0.md) FUN_00b311d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00452c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00452/00452c94.md) [`004578b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00457/004578b8.md) [`00458270`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00458/00458270.md) · 呼出先 11件 [`004517dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00451/004517dc.md) [`00459b10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459b10.md) [`0045be38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0045b/0045be38.md) [`0059765c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/0059765c.md) [`00597664`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597664.md)
- 新版 呼出元 3件 [`00452fb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00452/00452fb4.md) [`00457bd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00457/00457bd8.md) [`00458590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00458/00458590.md) · 呼出先 11件 [`00451afc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00451/00451afc.md) [`00459e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00459/00459e30.md) [`0045c158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045c/0045c158.md) [`0059797c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059797c.md) [`00597984`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597984.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.55% / 新版 97.55%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3122c",
      "incomplete_value": false,
      "site": "00b31240",
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
      "definition_site": "00b30238",
      "incomplete_value": false,
      "site": "00b3024c",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b31338",
      "incomplete_value": true,
      "site": "00b31338",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:917:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b30344",
      "incomplete_value": true,
      "site": "00b30344",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:7bf:8"
              ]
            ]
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
      "00b31240",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "00b31268",
      "DATA",
      [
        "storage",
        "00c63bb0",
        null,
        "pointer"
      ]
    ],
    [
      "00b3129c",
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
      "00b31240",
      "DATA",
      [
        "storage",
        "00c64b80",
        null,
        "pointer"
      ]
    ],
    [
      "00b31268",
      "DATA",
      [
        "storage",
        "00c64b80",
        null,
        "pointer"
      ]
    ],
    [
      "00b3129c",
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
- 00b3020c ["INT_ADD", "register:40f0:8", ["const:b3020c:8", "const:4:8"]]
- 00b3020c ["CALL", null, ["callee:00c58f30:8"]]
+ 00b31200 ["INT_ADD", "register:40f0:8", ["const:b31200:8", "const:4:8"]]
+ 00b31200 ["CALL", null, ["callee:00c58f30:8"]]
- 00b30234 ["COPY", "register:40c0:8", ["const:c63000:8"]]
+ 00b31228 ["COPY", "register:40c0:8", ["const:c64000:8"]]
- 00b30238 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 00b30238 ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
- 00b30238 ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
- 00b30238 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
+ 00b3122c ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 00b3122c ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
+ 00b3122c ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
+ 00b3122c ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
~~~


<a id="compare-e4b75255387b0be0d5ac8d53863d62ec"></a>

### [`00b308b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b308b4.md) → [`00b318a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b31/00b318a8.md) FUN_00b318a8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b2fddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fddc.md) [`00b308b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b308b4.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`00b30dd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30dd0.md) [`00b318a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b31/00b318a8.md) · 呼出先 21件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.66% / 新版 98.66%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b31a18",
      "incomplete_value": false,
      "site": "00b31a20",
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
      "definition_site": "00b30a24",
      "incomplete_value": false,
      "site": "00b30a2c",
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
      "definition_site": "00b31ad8",
      "incomplete_value": false,
      "site": "00b31ae0",
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
      "definition_site": "00b30ae4",
      "incomplete_value": false,
      "site": "00b30aec",
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
      "definition_site": "00b31af4",
      "incomplete_value": false,
      "site": "00b31b00",
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
      "definition_site": "00b30b00",
      "incomplete_value": false,
      "site": "00b30b0c",
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
      "00b31a18",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00b31ad8",
      "PARAM",
      [
        "storage",
        "002b5e27",
        null,
        null
      ]
    ],
    [
      "00b31af4",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b31a18",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00b31ad8",
      "PARAM",
      [
        "storage",
        "002b5ef6",
        null,
        null
      ]
    ],
    [
      "00b31af4",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b30a2c ["INT_ADD", "register:40f0:8", ["const:b30a2c:8", "const:4:8"]]
- 00b30a2c ["CALL", null, ["callee:004421f4:8"]]
+ 00b31a20 ["INT_ADD", "register:40f0:8", ["const:b31a20:8", "const:4:8"]]
+ 00b31a20 ["CALL", null, ["callee:004421f4:8"]]
- 00b30aec ["INT_ADD", "register:40f0:8", ["const:b30aec:8", "const:4:8"]]
- 00b30aec ["CALL", null, ["callee:004421f4:8"]]
+ 00b31ae0 ["INT_ADD", "register:40f0:8", ["const:b31ae0:8", "const:4:8"]]
+ 00b31ae0 ["CALL", null, ["callee:004421f4:8"]]
- 00b30b0c ["INT_ADD", "register:40f0:8", ["const:b30b0c:8", "const:4:8"]]
- 00b30b0c ["CALL", null, ["callee:00442b54:8"]]
+ 00b31b00 ["INT_ADD", "register:40f0:8", ["const:b31b00:8", "const:4:8"]]
+ 00b31b00 ["CALL", null, ["callee:00442b54:8"]]
~~~


<a id="compare-cea9ec54bcd2c4d1cf716997c66e80d9"></a>

### [`00b311b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b311b4.md) → [`00b321a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b321a8.md) FUN_00b321a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b308b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b30/00b308b4.md) [`00b311b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b311b4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`00b318a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b31/00b318a8.md) [`00b321a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b321a8.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.48% / 新版 98.48%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b322fc",
      "incomplete_value": false,
      "site": "00b32304",
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
      "definition_site": "00b31308",
      "incomplete_value": false,
      "site": "00b31310",
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
      "definition_site": "00b32320",
      "incomplete_value": false,
      "site": "00b3232c",
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
      "definition_site": "00b3132c",
      "incomplete_value": false,
      "site": "00b31338",
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
      "definition_site": "00b32454",
      "incomplete_value": false,
      "site": "00b3245c",
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
      "definition_site": "00b31460",
      "incomplete_value": false,
      "site": "00b31468",
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
      "00b322fc",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00b32320",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00b32454",
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
      "00b322fc",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00b32320",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00b32454",
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
- 00b31310 ["INT_ADD", "register:40f0:8", ["const:b31310:8", "const:4:8"]]
- 00b31310 ["CALL", null, ["callee:004421f4:8"]]
+ 00b32304 ["INT_ADD", "register:40f0:8", ["const:b32304:8", "const:4:8"]]
+ 00b32304 ["CALL", null, ["callee:004421f4:8"]]
- 00b31338 ["INT_ADD", "register:40f0:8", ["const:b31338:8", "const:4:8"]]
- 00b31338 ["CALL", null, ["callee:00442b54:8"]]
+ 00b3232c ["INT_ADD", "register:40f0:8", ["const:b3232c:8", "const:4:8"]]
+ 00b3232c ["CALL", null, ["callee:00442b54:8"]]
- 00b31468 ["INT_ADD", "register:40f0:8", ["const:b31468:8", "const:4:8"]]
- 00b31468 ["CALL", null, ["callee:004421f4:8"]]
+ 00b3245c ["INT_ADD", "register:40f0:8", ["const:b3245c:8", "const:4:8"]]
+ 00b3245c ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-72ad344563d32a16180d330c065fd06b"></a>

### [`00b31bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b31bf4.md) → [`00b32be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b32be8.md) FUN_00b32be8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b319b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b319b4.md) [`00b31bf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b31/00b31bf4.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)
- 新版 呼出元 2件 [`00b329a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b329a8.md) [`00b32be8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b32/00b32be8.md) · 呼出先 22件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`0044204c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/0044204c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.08% / 新版 99.08%

優先判定に残った影響 `call_argument_candidate` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b32d48",
      "incomplete_value": false,
      "site": "00b32d50",
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
      "definition_site": "00b31d54",
      "incomplete_value": false,
      "site": "00b31d5c",
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
      "definition_site": "00b32d6c",
      "incomplete_value": false,
      "site": "00b32d78",
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
      "definition_site": "00b31d78",
      "incomplete_value": false,
      "site": "00b31d84",
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
      "definition_site": "00b32ea8",
      "incomplete_value": false,
      "site": "00b32eb0",
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
      "definition_site": "00b31eb4",
      "incomplete_value": false,
      "site": "00b31ebc",
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
      "00b32d48",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "00b32d6c",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ],
    [
      "00b32ea8",
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
      "00b32d48",
      "PARAM",
      [
        "storage",
        "002b8062",
        null,
        null
      ]
    ],
    [
      "00b32d6c",
      "PARAM",
      [
        "storage",
        "002c0f73",
        null,
        "string"
      ]
    ],
    [
      "00b32ea8",
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
- 00b31d5c ["INT_ADD", "register:40f0:8", ["const:b31d5c:8", "const:4:8"]]
- 00b31d5c ["CALL", null, ["callee:004421f4:8"]]
+ 00b32d50 ["INT_ADD", "register:40f0:8", ["const:b32d50:8", "const:4:8"]]
+ 00b32d50 ["CALL", null, ["callee:004421f4:8"]]
- 00b31d84 ["INT_ADD", "register:40f0:8", ["const:b31d84:8", "const:4:8"]]
- 00b31d84 ["CALL", null, ["callee:00442b54:8"]]
+ 00b32d78 ["INT_ADD", "register:40f0:8", ["const:b32d78:8", "const:4:8"]]
+ 00b32d78 ["CALL", null, ["callee:00442b54:8"]]
- 00b31ebc ["INT_ADD", "register:40f0:8", ["const:b31ebc:8", "const:4:8"]]
- 00b31ebc ["CALL", null, ["callee:004421f4:8"]]
+ 00b32eb0 ["INT_ADD", "register:40f0:8", ["const:b32eb0:8", "const:4:8"]]
+ 00b32eb0 ["CALL", null, ["callee:004421f4:8"]]
~~~


<a id="compare-d8c420f15fb8ffda591b2864d2d27cee"></a>

### [`00b32acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b32/00b32acc.md) → [`00b33ac0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b33/00b33ac0.md) _INIT_262

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
      "definition_site": "00b33afc",
      "incomplete_value": true,
      "site": "00b33b18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b32b08",
      "incomplete_value": true,
      "site": "00b32b24",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b33b20",
      "incomplete_value": true,
      "site": "00b33b3c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b32b2c",
      "incomplete_value": true,
      "site": "00b32b48",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b33b40",
      "incomplete_value": true,
      "site": "00b33b5c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b32b4c",
      "incomplete_value": true,
      "site": "00b32b68",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b33afc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b33b20",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b33b40",
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
      "00b33afc",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b33b20",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b33b40",
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
- 00b32c2c ["INT_ADD", "register:40f0:8", ["const:b32c2c:8", "const:4:8"]]
- 00b32c2c ["CALL", null, ["callee:0043bb58:8"]]
+ 00b33c20 ["INT_ADD", "register:40f0:8", ["const:b33c20:8", "const:4:8"]]
+ 00b33c20 ["CALL", null, ["callee:0043bb58:8"]]
- 00b32d00 ["INT_ADD", "register:40f0:8", ["const:b32d00:8", "const:4:8"]]
- 00b32d00 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b33cf4 ["INT_ADD", "register:40f0:8", ["const:b33cf4:8", "const:4:8"]]
+ 00b33cf4 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b32af4 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b33ae8 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-1bbf9beec15f6c54b89c8068fd5c7060"></a>

### [`00b32e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b32/00b32e5c.md) → [`00b33e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b33/00b33e50.md) _INIT_263

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
      "definition_site": "00b33e8c",
      "incomplete_value": true,
      "site": "00b33ea8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b32e98",
      "incomplete_value": true,
      "site": "00b32eb4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b33eb0",
      "incomplete_value": true,
      "site": "00b33ecc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b32ebc",
      "incomplete_value": true,
      "site": "00b32ed8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b33ed0",
      "incomplete_value": true,
      "site": "00b33eec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b32edc",
      "incomplete_value": true,
      "site": "00b32ef8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b33e8c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b33eb0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b33ed0",
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
      "00b33e8c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b33eb0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b33ed0",
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
- 00b32fbc ["INT_ADD", "register:40f0:8", ["const:b32fbc:8", "const:4:8"]]
- 00b32fbc ["CALL", null, ["callee:0043bb58:8"]]
+ 00b33fb0 ["INT_ADD", "register:40f0:8", ["const:b33fb0:8", "const:4:8"]]
+ 00b33fb0 ["CALL", null, ["callee:0043bb58:8"]]
- 00b33090 ["INT_ADD", "register:40f0:8", ["const:b33090:8", "const:4:8"]]
- 00b33090 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b34084 ["INT_ADD", "register:40f0:8", ["const:b34084:8", "const:4:8"]]
+ 00b34084 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b32e84 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b33e78 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-952aaf69ee5338461859a3f29342604c"></a>

### [`00b331f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b331f0.md) → [`00b341e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b34/00b341e4.md) FUN_00b341e4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`00aa5998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa5/00aa5998.md) [`00aa6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa6/00aa6150.md) [`00aa73fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa7/00aa73fc.md) [`00aa949c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa9/00aa949c.md) [`00aadffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aadffc.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 5件 [`00aa698c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa6/00aa698c.md) [`00aa7144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa7/00aa7144.md) [`00aa83f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aa8/00aa83f0.md) [`00aaa490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aaa/00aaa490.md) [`00aaeff0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aae/00aaeff0.md) · 呼出先 12件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b34228",
      "incomplete_value": true,
      "site": "00b34238",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33234",
      "incomplete_value": true,
      "site": "00b33244",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c25:8"
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
      "definition_site": "00b34254",
      "incomplete_value": true,
      "site": "00b34260",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33260",
      "incomplete_value": true,
      "site": "00b3326c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3a0:8"
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
      "definition_site": "00b34250",
      "incomplete_value": true,
      "site": "00b34264",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:7b7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3325c",
      "incomplete_value": true,
      "site": "00b33270",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6d9:8"
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
      "00b34228",
      "READ",
      [
        "storage",
        "002a4c25",
        null,
        "string"
      ]
    ],
    [
      "00b34250",
      "READ",
      [
        "storage",
        "002bc6d9",
        null,
        "string"
      ]
    ],
    [
      "00b34250",
      "READ",
      [
        "storage",
        "002bc6e9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b34228",
      "READ",
      [
        "storage",
        "002a4cf0",
        null,
        "string"
      ]
    ],
    [
      "00b34250",
      "READ",
      [
        "storage",
        "002bc7b7",
        null,
        "string"
      ]
    ],
    [
      "00b34250",
      "READ",
      [
        "storage",
        "002bc7c7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3321c ["INT_ADD", "register:40f0:8", ["const:b3321c:8", "const:4:8"]]
- 00b3321c ["CALL", null, ["callee:005891cc:8"]]
+ 00b34210 ["INT_ADD", "register:40f0:8", ["const:b34210:8", "const:4:8"]]
+ 00b34210 ["CALL", null, ["callee:005891cc:8"]]
- 00b33224 ["INT_ADD", "register:40f0:8", ["const:b33224:8", "const:4:8"]]
- 00b33224 ["CALL", null, ["callee:005894bc:8"]]
+ 00b34218 ["INT_ADD", "register:40f0:8", ["const:b34218:8", "const:4:8"]]
+ 00b34218 ["CALL", null, ["callee:005894bc:8"]]
- 00b3322c ["COPY", "tmp:0:8", ["const:c25:8"]]
- 00b3322c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b3322c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b3322c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b34220 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 00b34220 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b34220 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b34220 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e61cf385aa23b2bf85ffba4aef3a4bb7"></a>

### [`00b333bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b333bc.md) → [`00b343b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b34/00b343b0.md) FUN_00b343b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00aad70c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aad70c.md) [`00aadfe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aad/00aadfe8.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 2件 [`00aae700`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aae/00aae700.md) [`00aaefdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00aae/00aaefdc.md) · 呼出先 12件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.33% / 新版 88.33%

優先判定に残った影響 `store_value` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b34408",
      "incomplete_value": true,
      "site": "00b34418",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33414",
      "incomplete_value": true,
      "site": "00b33424",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c25:8"
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
      "definition_site": "00b34434",
      "incomplete_value": true,
      "site": "00b3443c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:1b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33440",
      "incomplete_value": true,
      "site": "00b33448",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:160:8"
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
      "definition_site": "00b34430",
      "incomplete_value": true,
      "site": "00b34440",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b3343c",
      "incomplete_value": true,
      "site": "00b3344c",
      "value": [
        "LOAD",
        "16",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b34408",
      "READ",
      [
        "storage",
        "002a4c25",
        null,
        "string"
      ]
    ],
    [
      "00b34430",
      "READ",
      [
        "storage",
        "002b3471",
        null,
        "string"
      ]
    ],
    [
      "00b34430",
      "READ",
      [
        "storage",
        "002b3481",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b34408",
      "READ",
      [
        "storage",
        "002a4cf0",
        null,
        "string"
      ]
    ],
    [
      "00b34430",
      "READ",
      [
        "storage",
        "002b34bb",
        null,
        "string"
      ]
    ],
    [
      "00b34430",
      "READ",
      [
        "storage",
        "002b34cb",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b333fc ["INT_ADD", "register:40f0:8", ["const:b333fc:8", "const:4:8"]]
- 00b333fc ["CALL", null, ["callee:005891cc:8"]]
+ 00b343f0 ["INT_ADD", "register:40f0:8", ["const:b343f0:8", "const:4:8"]]
+ 00b343f0 ["CALL", null, ["callee:005891cc:8"]]
- 00b33404 ["INT_ADD", "register:40f0:8", ["const:b33404:8", "const:4:8"]]
- 00b33404 ["CALL", null, ["callee:005894bc:8"]]
+ 00b343f8 ["INT_ADD", "register:40f0:8", ["const:b343f8:8", "const:4:8"]]
+ 00b343f8 ["CALL", null, ["callee:005894bc:8"]]
- 00b3340c ["COPY", "tmp:0:8", ["const:c25:8"]]
- 00b3340c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b3340c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b3340c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b34400 ["COPY", "tmp:0:8", ["const:cf0:8"]]
+ 00b34400 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b34400 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b34400 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-51d447a8148e257c5177bfdd7d3757b7"></a>

### [`00b33620`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33620.md) → [`00b34614`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b34/00b34614.md) FUN_00b34614

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00893e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/00893e14.md) · 呼出先 9件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00894dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894dc0.md) · 呼出先 9件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.04% / 新版 91.04%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3465c",
      "incomplete_value": true,
      "site": "00b3466c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e03:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33668",
      "incomplete_value": true,
      "site": "00b33678",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d25:8"
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
      "00b3465c",
      "READ",
      [
        "storage",
        "002bbd25",
        null,
        "string"
      ]
    ],
    [
      "00b34660",
      "READ",
      [
        "storage",
        "002bbd2f",
        null,
        "string"
      ]
    ],
    [
      "00b34670",
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
      "00b3465c",
      "READ",
      [
        "storage",
        "002bbe03",
        null,
        "string"
      ]
    ],
    [
      "00b34660",
      "READ",
      [
        "storage",
        "002bbe0d",
        null,
        "string"
      ]
    ],
    [
      "00b34670",
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
- 00b33644 ["INT_ADD", "register:40f0:8", ["const:b33644:8", "const:4:8"]]
- 00b33644 ["CALL", null, ["callee:005891cc:8"]]
+ 00b34638 ["INT_ADD", "register:40f0:8", ["const:b34638:8", "const:4:8"]]
+ 00b34638 ["CALL", null, ["callee:005891cc:8"]]
- 00b3364c ["INT_ADD", "register:40f0:8", ["const:b3364c:8", "const:4:8"]]
- 00b3364c ["CALL", null, ["callee:005894bc:8"]]
+ 00b34640 ["INT_ADD", "register:40f0:8", ["const:b34640:8", "const:4:8"]]
+ 00b34640 ["CALL", null, ["callee:005894bc:8"]]
- 00b33658 ["INT_ADD", "register:40f0:8", ["const:b33658:8", "const:4:8"]]
- 00b33658 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3464c ["INT_ADD", "register:40f0:8", ["const:b3464c:8", "const:4:8"]]
+ 00b3464c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-90a9afcff1e0982afcb45f1c1a23c66f"></a>

### [`00b33768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33768.md) → [`00b3475c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b34/00b3475c.md) _INIT_264

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 82.21% / 新版 82.21%

優先判定に残った影響 `call_argument_candidate` 4件, `store_destination` 4件, `store_value` 4件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b34798",
      "incomplete_value": true,
      "site": "00b347b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b337a4",
      "incomplete_value": true,
      "site": "00b337c0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b347bc",
      "incomplete_value": true,
      "site": "00b347d8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b337c8",
      "incomplete_value": true,
      "site": "00b337e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b347dc",
      "incomplete_value": true,
      "site": "00b347f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b337e8",
      "incomplete_value": true,
      "site": "00b33804",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b34798",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b347bc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b347dc",
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
      "00b34798",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b347bc",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b347dc",
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
- 00b339a0 ["INT_ADD", "register:40f0:8", ["const:b339a0:8", "const:4:8"]]
- 00b339a0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b34994 ["INT_ADD", "register:40f0:8", ["const:b34994:8", "const:4:8"]]
+ 00b34994 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b33a18 ["INT_ADD", "register:40f0:8", ["const:b33a18:8", "const:4:8"]]
- 00b33a18 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b34a0c ["INT_ADD", "register:40f0:8", ["const:b34a0c:8", "const:4:8"]]
+ 00b34a0c ["CALL", null, ["callee:00c58ed0:8"]]
- 00b33790 ["COPY", "register:4098:8", ["const:1124000:8"]]
+ 00b34784 ["COPY", "register:4098:8", ["const:1125000:8"]]
~~~


<a id="compare-f4dd763c8ed623af5094c623e71049ae"></a>

### [`00b33b78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33b78.md) → [`00b34b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b34/00b34b6c.md) FUN_00b34b6c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043f658`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f658.md) · 呼出先 10件 [`0046ca94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca94.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)
- 新版 呼出元 1件 [`0043f978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f978.md) · 呼出先 10件 [`0046cdb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cdb4.md) [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 83.78% / 新版 83.78%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b34bf0",
      "incomplete_value": true,
      "site": "00b34bf0",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:5b7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33bfc",
      "incomplete_value": true,
      "site": "00b33bfc",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2b2000:8"
              ],
              [
                "leaf",
                "const:56d:8"
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
      "definition_site": "00b34c0c",
      "incomplete_value": true,
      "site": "00b34c1c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:13b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33c18",
      "incomplete_value": true,
      "site": "00b33c28",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:fe3:8"
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
      "definition_site": "00b34c10",
      "incomplete_value": true,
      "site": "00b34c20",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b33c1c",
      "incomplete_value": true,
      "site": "00b33c2c",
      "value": [
        "LOAD",
        "16",
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
      "00b34bc0",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "00b34bc4",
      "PARAM",
      [
        "storage",
        "00ca4d70",
        null,
        "undefined8"
      ]
    ],
    [
      "00b34be0",
      "READ",
      [
        "storage",
        "002b256d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b34bc0",
      "READ",
      [
        "storage",
        "00c9bc08",
        null,
        "pointer"
      ]
    ],
    [
      "00b34bc4",
      "PARAM",
      [
        "storage",
        "00ca5d30",
        null,
        "undefined8"
      ]
    ],
    [
      "00b34be0",
      "READ",
      [
        "storage",
        "002b25b7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b33bd4 ["INT_ADD", "register:40f0:8", ["const:b33bd4:8", "const:4:8"]]
- 00b33bd4 ["CALL", null, ["callee:0046cdb4:8"]]
+ 00b34bc8 ["INT_ADD", "register:40f0:8", ["const:b34bc8:8", "const:4:8"]]
+ 00b34bc8 ["CALL", null, ["callee:0046cdb4:8"]]
- 00b33bac ["INT_ADD", "register:40f0:8", ["const:b33bac:8", "const:4:8"]]
- 00b33bac ["CALL", null, ["callee:005891cc:8"]]
+ 00b34ba0 ["INT_ADD", "register:40f0:8", ["const:b34ba0:8", "const:4:8"]]
+ 00b34ba0 ["CALL", null, ["callee:005891cc:8"]]
- 00b33bc0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b33bc0 ["INT_ADD", "register:40f0:8", ["const:b33bc0:8", "const:4:8"]]
- 00b33bc0 ["CALLIND", null, ["register:0:8"]]
+ 00b34bb4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b34bb4 ["INT_ADD", "register:40f0:8", ["const:b34bb4:8", "const:4:8"]]
+ 00b34bb4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-97f8eeb3a8c9de7d663e22459e3a4244"></a>

### [`00b33e14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33e14.md) → [`00b34e08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b34/00b34e08.md) FUN_00b34e08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0043f574`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f574.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 2件 [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0043f894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f894.md) · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.55% / 新版 94.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b34e5c",
      "incomplete_value": true,
      "site": "00b34e5c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:989:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b33e68",
      "incomplete_value": true,
      "site": "00b33e68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8be:8"
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
      "00b34e44",
      "READ",
      [
        "storage",
        "002a28be",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b34e44",
      "READ",
      [
        "storage",
        "002a2989",
        null,
        "string"
      ]
    ],
    [
      "00b34e60",
      "DATA",
      [
        "storage",
        "00562928",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b33e30 ["INT_ADD", "register:40f0:8", ["const:b33e30:8", "const:4:8"]]
- 00b33e30 ["CALL", null, ["callee:005891cc:8"]]
+ 00b34e24 ["INT_ADD", "register:40f0:8", ["const:b34e24:8", "const:4:8"]]
+ 00b34e24 ["CALL", null, ["callee:005891cc:8"]]
- 00b33e38 ["INT_ADD", "register:40f0:8", ["const:b33e38:8", "const:4:8"]]
- 00b33e38 ["CALL", null, ["callee:005894bc:8"]]
+ 00b34e2c ["INT_ADD", "register:40f0:8", ["const:b34e2c:8", "const:4:8"]]
+ 00b34e2c ["CALL", null, ["callee:005894bc:8"]]
- 00b33e44 ["COPY", "tmp:0:8", ["const:8be:8"]]
- 00b33e44 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b33e44 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b33e44 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b34e38 ["COPY", "tmp:0:8", ["const:989:8"]]
+ 00b34e38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b34e38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b34e38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f4b6da4c54827f3abe35f2b8b4207f7c"></a>

### [`00b33f2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b33/00b33f2c.md) → [`00b34f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b34/00b34f20.md) _INIT_265

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
      "definition_site": "00b34f5c",
      "incomplete_value": true,
      "site": "00b34f78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b33f68",
      "incomplete_value": true,
      "site": "00b33f84",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b34f80",
      "incomplete_value": true,
      "site": "00b34f9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b33f8c",
      "incomplete_value": true,
      "site": "00b33fa8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b34fa0",
      "incomplete_value": true,
      "site": "00b34fbc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b33fac",
      "incomplete_value": true,
      "site": "00b33fc8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b34f5c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b34f80",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b34fa0",
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
      "00b34f5c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b34f80",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b34fa0",
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
- 00b3408c ["INT_ADD", "register:40f0:8", ["const:b3408c:8", "const:4:8"]]
- 00b3408c ["CALL", null, ["callee:0043bb58:8"]]
+ 00b35080 ["INT_ADD", "register:40f0:8", ["const:b35080:8", "const:4:8"]]
+ 00b35080 ["CALL", null, ["callee:0043bb58:8"]]
- 00b34160 ["INT_ADD", "register:40f0:8", ["const:b34160:8", "const:4:8"]]
- 00b34160 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b35154 ["INT_ADD", "register:40f0:8", ["const:b35154:8", "const:4:8"]]
+ 00b35154 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b33f58 ["COPY", "tmp:0:8", ["const:30:8"]]
- 00b33f58 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b33f58 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b33f58 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b34f4c ["COPY", "tmp:0:8", ["const:ff0:8"]]
+ 00b34f4c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b34f4c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b34f4c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-54962f8efcd6a4c5a70f779ff38331b8"></a>

### [`00b3431c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3431c.md) → [`00b35310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35310.md) FUN_00b35310

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1690.md) · 呼出先 2件 [`00b34834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34834.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b1a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1a40.md) · 呼出先 2件 [`00b35828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35828.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b35378",
      "incomplete_value": false,
      "site": "00b35384",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b34384",
      "incomplete_value": false,
      "site": "00b34390",
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
            "const:50:8"
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
      "00b35378",
      "PARAM",
      [
        "storage",
        "01125050",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b35378",
      "PARAM",
      [
        "storage",
        "01126010",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b34390 ["INT_ADD", "register:40f0:8", ["const:b34390:8", "const:4:8"]]
- 00b34390 ["CALL", null, ["callee:00b35828:8"]]
+ 00b35384 ["INT_ADD", "register:40f0:8", ["const:b35384:8", "const:4:8"]]
+ 00b35384 ["CALL", null, ["callee:00b35828:8"]]
- 00b34354 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b34354 ["INT_ADD", "register:40f0:8", ["const:b34354:8", "const:4:8"]]
- 00b34354 ["CALLIND", null, ["register:0:8"]]
+ 00b35348 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b35348 ["INT_ADD", "register:40f0:8", ["const:b35348:8", "const:4:8"]]
+ 00b35348 ["CALLIND", null, ["register:0:8"]]
- 00b3437c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3437c ["INT_ADD", "register:40f0:8", ["const:b3437c:8", "const:4:8"]]
- 00b3437c ["CALLIND", null, ["register:0:8"]]
+ 00b35370 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b35370 ["INT_ADD", "register:40f0:8", ["const:b35370:8", "const:4:8"]]
+ 00b35370 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-47561fa3e0486f01cf11c63515a95406"></a>

### [`00b343e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b343e4.md) → [`00b353d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b353d8.md) FUN_00b353d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1690.md) · 呼出先 2件 [`00b3499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3499c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b1a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1a40.md) · 呼出先 2件 [`00b35990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35990.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b35440",
      "incomplete_value": false,
      "site": "00b3544c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3444c",
      "incomplete_value": false,
      "site": "00b34458",
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
            "const:80:8"
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
      "00b35440",
      "PARAM",
      [
        "storage",
        "01125080",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b35440",
      "PARAM",
      [
        "storage",
        "01126040",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b34458 ["INT_ADD", "register:40f0:8", ["const:b34458:8", "const:4:8"]]
- 00b34458 ["CALL", null, ["callee:00b35990:8"]]
+ 00b3544c ["INT_ADD", "register:40f0:8", ["const:b3544c:8", "const:4:8"]]
+ 00b3544c ["CALL", null, ["callee:00b35990:8"]]
- 00b3441c ["COPY", "register:0:8", ["register:4048:8"]]
- 00b3441c ["INT_ADD", "register:40f0:8", ["const:b3441c:8", "const:4:8"]]
- 00b3441c ["CALLIND", null, ["register:0:8"]]
+ 00b35410 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b35410 ["INT_ADD", "register:40f0:8", ["const:b35410:8", "const:4:8"]]
+ 00b35410 ["CALLIND", null, ["register:0:8"]]
- 00b34444 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b34444 ["INT_ADD", "register:40f0:8", ["const:b34444:8", "const:4:8"]]
- 00b34444 ["CALLIND", null, ["register:0:8"]]
+ 00b35438 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b35438 ["INT_ADD", "register:40f0:8", ["const:b35438:8", "const:4:8"]]
+ 00b35438 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-e84d3f5eb446871e0978d3a2cb73eb57"></a>

### [`00b344ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b344ac.md) → [`00b354a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b354a0.md) FUN_00b354a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1690.md) · 呼出先 13件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0087a360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087a/0087a360.md) [`0087b414`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087b/0087b414.md) [`00b34b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34b04.md) [`00b34d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34d00.md)
- 新版 呼出元 1件 [`005b1a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1a40.md) · 呼出先 13件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0087b30c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087b/0087b30c.md) [`0087c3c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087c/0087c3c0.md) [`00b35af8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35af8.md) [`00b35cf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35cf4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.89% / 新版 94.89%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b354e8",
      "incomplete_value": true,
      "site": "00b354e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:679:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b344f4",
      "incomplete_value": true,
      "site": "00b344f4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:639:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b355d4",
      "incomplete_value": false,
      "site": "00b355dc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b345e0",
      "incomplete_value": false,
      "site": "00b345e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:4b8:8"
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
      "definition_site": "00b35558",
      "incomplete_value": false,
      "site": "00b35560",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:e1e:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b34564",
      "incomplete_value": false,
      "site": "00b3456c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2bb000:8"
          ],
          [
            "leaf",
            "const:d40:8"
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
      "00b354d8",
      "READ",
      [
        "storage",
        "002a0639",
        null,
        "string"
      ]
    ],
    [
      "00b35558",
      "PARAM",
      [
        "storage",
        "002bbd40",
        null,
        "string"
      ]
    ],
    [
      "00b35598",
      "PARAM",
      [
        "storage",
        "002b9596",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b354d8",
      "READ",
      [
        "storage",
        "002a0679",
        null,
        "string"
      ]
    ],
    [
      "00b35558",
      "PARAM",
      [
        "storage",
        "002bbe1e",
        null,
        "string"
      ]
    ],
    [
      "00b35598",
      "PARAM",
      [
        "storage",
        "002b9665",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3456c ["INT_ADD", "register:40f0:8", ["const:b3456c:8", "const:4:8"]]
- 00b3456c ["CALL", null, ["callee:00b35af8:8"]]
+ 00b35560 ["INT_ADD", "register:40f0:8", ["const:b35560:8", "const:4:8"]]
+ 00b35560 ["CALL", null, ["callee:00b35af8:8"]]
- 00b345ac ["INT_ADD", "register:40f0:8", ["const:b345ac:8", "const:4:8"]]
- 00b345ac ["CALL", null, ["callee:00b35cf4:8"]]
+ 00b355a0 ["INT_ADD", "register:40f0:8", ["const:b355a0:8", "const:4:8"]]
+ 00b355a0 ["CALL", null, ["callee:00b35cf4:8"]]
- 00b344e0 ["COPY", "tmp:0:8", ["const:639:8"]]
- 00b344e0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b344e0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b344e0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b354d4 ["COPY", "tmp:0:8", ["const:679:8"]]
+ 00b354d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b354d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b354d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-6c1713ba5f8888c558ec3475e7186065"></a>

### [`00b34f04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34f04.md) → [`00b35ef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35ef8.md) FUN_00b35ef8

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
      "definition_site": "00b35f0c",
      "incomplete_value": false,
      "site": "00b35f10",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b34f18",
      "incomplete_value": false,
      "site": "00b34f1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:4b8:8"
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
      "00b35f10",
      "DATA",
      [
        "storage",
        "00c8f4b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b35f10",
      "DATA",
      [
        "storage",
        "00c90488",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b34f10 ["INT_ADD", "register:40f0:8", ["const:b34f10:8", "const:4:8"]]
- 00b34f10 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b35f04 ["INT_ADD", "register:40f0:8", ["const:b35f04:8", "const:4:8"]]
+ 00b35f04 ["CALL", null, ["callee:00c58f30:8"]]
- 00b34f14 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b35f08 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b34f18 ["COPY", "tmp:0:8", ["const:4b8:8"]]
- 00b34f18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b34f18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b34f18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b35f0c ["COPY", "tmp:0:8", ["const:488:8"]]
+ 00b35f0c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b35f0c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b35f0c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cf82b4c72f54803f8b7f7f51d8522b12"></a>

### [`00b34f28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34f28.md) → [`00b35f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35f1c.md) FUN_00b35f1c

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
      "definition_site": "00b35f20",
      "incomplete_value": false,
      "site": "00b35f24",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:488:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b34f2c",
      "incomplete_value": false,
      "site": "00b34f30",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:4b8:8"
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
      "00b35f24",
      "DATA",
      [
        "storage",
        "00c8f4b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b35f24",
      "DATA",
      [
        "storage",
        "00c90488",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b34f28 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b35f1c ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b34f2c ["COPY", "tmp:0:8", ["const:4b8:8"]]
- 00b34f2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b34f2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b34f2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b35f20 ["COPY", "tmp:0:8", ["const:488:8"]]
+ 00b35f20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b35f20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b35f20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca9640979727496f8f15c2a2e0a9f4a7"></a>

### [`00b3541c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b3541c.md) → [`00b36410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36410.md) FUN_00b36410

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
      "definition_site": "00b36424",
      "incomplete_value": false,
      "site": "00b36428",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:4f8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b35430",
      "incomplete_value": false,
      "site": "00b35434",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
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
      "00b36428",
      "DATA",
      [
        "storage",
        "00c8f528",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b36428",
      "DATA",
      [
        "storage",
        "00c904f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35428 ["INT_ADD", "register:40f0:8", ["const:b35428:8", "const:4:8"]]
- 00b35428 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3641c ["INT_ADD", "register:40f0:8", ["const:b3641c:8", "const:4:8"]]
+ 00b3641c ["CALL", null, ["callee:00c58f30:8"]]
- 00b3542c ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b36420 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b35430 ["COPY", "tmp:0:8", ["const:528:8"]]
- 00b35430 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b35430 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b35430 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b36424 ["COPY", "tmp:0:8", ["const:4f8:8"]]
+ 00b36424 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b36424 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b36424 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0c92b2a0248db1f7d539ec22cc97761a"></a>

### [`00b35458`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35458.md) → [`00b3644c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b3644c.md) FUN_00b3644c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 98.13% / 新版 98.13%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b36540",
      "incomplete_value": true,
      "site": "00b36540",
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
      "definition_site": "00b3554c",
      "incomplete_value": true,
      "site": "00b3554c",
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
      "00b36534",
      "READ",
      [
        "storage",
        "01125070",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b36534",
      "READ",
      [
        "storage",
        "01126030",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35484 ["INT_ADD", "register:40f0:8", ["const:b35484:8", "const:4:8"]]
- 00b35484 ["CALL", null, ["callee:00c5baa0:8"]]
+ 00b36478 ["INT_ADD", "register:40f0:8", ["const:b36478:8", "const:4:8"]]
+ 00b36478 ["CALL", null, ["callee:00c5baa0:8"]]
- 00b3549c ["COPY", "register:0:8", ["register:4040:8"]]
- 00b3549c ["INT_ADD", "register:40f0:8", ["const:b3549c:8", "const:4:8"]]
- 00b3549c ["CALLIND", null, ["register:0:8"]]
+ 00b36490 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b36490 ["INT_ADD", "register:40f0:8", ["const:b36490:8", "const:4:8"]]
+ 00b36490 ["CALLIND", null, ["register:0:8"]]
- 00b354b0 ["INT_ADD", "register:40f0:8", ["const:b354b0:8", "const:4:8"]]
- 00b354b0 ["CALL", null, ["callee:00c5bab0:8"]]
+ 00b364a4 ["INT_ADD", "register:40f0:8", ["const:b364a4:8", "const:4:8"]]
+ 00b364a4 ["CALL", null, ["callee:00c5bab0:8"]]
~~~


<a id="compare-d6aa37c560ca31641d8557d4b5f68db0"></a>

### [`00b356a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b356a4.md) → [`00b36698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36698.md) _INIT_266

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 3件 [`00b342bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b342bc.md) [`00b342ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b342ec.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00b352b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b352b0.md) [`00b352e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b352e0.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination

命令の説明率　旧版 52.38% / 新版 52.38%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b366c0",
      "incomplete_value": false,
      "site": "00b366c0",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:10:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b356cc",
      "incomplete_value": false,
      "site": "00b356cc",
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
                "const:50:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
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
      "definition_site": "00b366dc",
      "incomplete_value": false,
      "site": "00b366dc",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:40:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b356e8",
      "incomplete_value": false,
      "site": "00b356e8",
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
                "const:80:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
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
      "definition_site": "00b366b8",
      "incomplete_value": false,
      "site": "00b366c4",
      "value": [
        "leaf",
        "const:b352b0:8"
      ]
    },
    "old": {
      "definition_site": "00b356c4",
      "incomplete_value": false,
      "site": "00b356d0",
      "value": [
        "leaf",
        "const:b342bc:8"
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
      "00b366b0",
      "PARAM",
      [
        "storage",
        "01125050",
        null,
        null
      ]
    ],
    [
      "unmatched:00b356c4",
      "PARAM",
      [
        "storage",
        "00b342bc",
        null,
        null
      ]
    ],
    [
      "00b366bc",
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
      "00b366b0",
      "PARAM",
      [
        "storage",
        "01126010",
        null,
        null
      ]
    ],
    [
      "00b366b8",
      "PARAM",
      [
        "storage",
        "00b352b0",
        null,
        null
      ]
    ],
    [
      "00b366bc",
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
- 00b356d0 ["INT_ADD", "register:40f0:8", ["const:b356d0:8", "const:4:8"]]
- 00b356d0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b366c4 ["INT_ADD", "register:40f0:8", ["const:b366c4:8", "const:4:8"]]
+ 00b366c4 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b356b0 ["COPY", "register:4098:8", ["const:c63000:8"]]
+ 00b366a4 ["COPY", "register:4098:8", ["const:c64000:8"]]
- 00b356b4 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00b356b4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b356b4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b356b4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b366a8 ["COPY", "tmp:0:8", ["const:30:8"]]
+ 00b366a8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b366a8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b366a8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-9a3f0fbef83f1ca641989a199e3d82f4"></a>

### [`00b356f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b356f8.md) → [`00b366ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b366ec.md) FUN_00b366ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0066d0d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d0d0.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`0066d480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d480.md) · 呼出先 12件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 82.28% / 新版 82.28%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b36748",
      "incomplete_value": true,
      "site": "00b36758",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d42:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b35754",
      "incomplete_value": true,
      "site": "00b35764",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c64:8"
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
      "definition_site": "00b3675c",
      "incomplete_value": true,
      "site": "00b3676c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b35768",
      "incomplete_value": true,
      "site": "00b35778",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3674c",
      "incomplete_value": true,
      "site": "00b36774",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b35758",
      "incomplete_value": true,
      "site": "00b35780",
      "value": [
        "LOAD",
        "16",
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
      "00b36748",
      "READ",
      [
        "storage",
        "002bac64",
        null,
        "string"
      ]
    ],
    [
      "00b3674c",
      "READ",
      [
        "storage",
        "002bac70",
        null,
        "string"
      ]
    ],
    [
      "00b3675c",
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
      "00b36748",
      "READ",
      [
        "storage",
        "002bad42",
        null,
        "string"
      ]
    ],
    [
      "00b3674c",
      "READ",
      [
        "storage",
        "002bad4e",
        null,
        "string"
      ]
    ],
    [
      "00b3675c",
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
- 00b3571c ["INT_ADD", "register:40f0:8", ["const:b3571c:8", "const:4:8"]]
- 00b3571c ["CALL", null, ["callee:005891cc:8"]]
+ 00b36710 ["INT_ADD", "register:40f0:8", ["const:b36710:8", "const:4:8"]]
+ 00b36710 ["CALL", null, ["callee:005891cc:8"]]
- 00b35730 ["INT_ADD", "register:40f0:8", ["const:b35730:8", "const:4:8"]]
- 00b35730 ["CALL", null, ["callee:00589c30:8"]]
+ 00b36724 ["INT_ADD", "register:40f0:8", ["const:b36724:8", "const:4:8"]]
+ 00b36724 ["CALL", null, ["callee:00589c30:8"]]
- 00b35734 ["INT_ADD", "register:40f0:8", ["const:b35734:8", "const:4:8"]]
- 00b35734 ["CALL", null, ["callee:005894bc:8"]]
+ 00b36728 ["INT_ADD", "register:40f0:8", ["const:b36728:8", "const:4:8"]]
+ 00b36728 ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-a40f94c3f9decc95725b06a7e2d58b88"></a>

### [`00b35884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35884.md) → [`00b36878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36878.md) FUN_00b36878

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md) [`0066d148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d148.md) [`00763ce8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00763/00763ce8.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 3件 [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md) [`0066d4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4f8.md) [`007640c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00764/007640c4.md) · 呼出先 12件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 84.81% / 新版 84.81%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b368c0",
      "incomplete_value": true,
      "site": "00b368d8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b358cc",
      "incomplete_value": true,
      "site": "00b358e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b368dc",
      "incomplete_value": true,
      "site": "00b368f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d5f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b358e8",
      "incomplete_value": true,
      "site": "00b358fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c81:8"
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
      "definition_site": "00b368dc",
      "incomplete_value": true,
      "site": "00b368f0",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b358e8",
      "incomplete_value": true,
      "site": "00b358fc",
      "value": [
        "LOAD",
        "16",
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
      "00b368c0",
      "READ",
      [
        "storage",
        "002c32e0",
        null,
        null
      ]
    ],
    [
      "00b368dc",
      "READ",
      [
        "storage",
        "002bac81",
        null,
        "string"
      ]
    ],
    [
      "00b368dc",
      "READ",
      [
        "storage",
        "002bac91",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b368c0",
      "READ",
      [
        "storage",
        "002c3330",
        null,
        null
      ]
    ],
    [
      "00b368dc",
      "READ",
      [
        "storage",
        "002bad5f",
        null,
        "string"
      ]
    ],
    [
      "00b368dc",
      "READ",
      [
        "storage",
        "002bad6f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b358a8 ["INT_ADD", "register:40f0:8", ["const:b358a8:8", "const:4:8"]]
- 00b358a8 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3689c ["INT_ADD", "register:40f0:8", ["const:b3689c:8", "const:4:8"]]
+ 00b3689c ["CALL", null, ["callee:005891cc:8"]]
- 00b358b0 ["INT_ADD", "register:40f0:8", ["const:b358b0:8", "const:4:8"]]
- 00b358b0 ["CALL", null, ["callee:005894bc:8"]]
+ 00b368a4 ["INT_ADD", "register:40f0:8", ["const:b368a4:8", "const:4:8"]]
+ 00b368a4 ["CALL", null, ["callee:005894bc:8"]]
- 00b358bc ["INT_ADD", "register:40f0:8", ["const:b358bc:8", "const:4:8"]]
- 00b358bc ["CALL", null, ["callee:00c58f30:8"]]
+ 00b368b0 ["INT_ADD", "register:40f0:8", ["const:b368b0:8", "const:4:8"]]
+ 00b368b0 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-28719bfc1682ec17b46eea1b222f4f92"></a>

### [`00b35a0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35a0c.md) → [`00b36a00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36a00.md) _INIT_267

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
      "definition_site": "00b36a3c",
      "incomplete_value": true,
      "site": "00b36a58",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b35a48",
      "incomplete_value": true,
      "site": "00b35a64",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b36a60",
      "incomplete_value": true,
      "site": "00b36a7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b35a6c",
      "incomplete_value": true,
      "site": "00b35a88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b36aa0",
      "incomplete_value": true,
      "site": "00b36ab8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b35aac",
      "incomplete_value": true,
      "site": "00b35ac4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b36a3c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b36a60",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b36a80",
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
      "00b36a3c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b36a60",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b36a80",
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
- 00b35c40 ["INT_ADD", "register:40f0:8", ["const:b35c40:8", "const:4:8"]]
- 00b35c40 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b36c34 ["INT_ADD", "register:40f0:8", ["const:b36c34:8", "const:4:8"]]
+ 00b36c34 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b35a34 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b36a28 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b35a38 ["COPY", "tmp:0:8", ["const:b0:8"]]
- 00b35a38 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b35a38 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b35a38 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b36a2c ["COPY", "tmp:0:8", ["const:70:8"]]
+ 00b36a2c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b36a2c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b36a2c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-4bb2e90a68defc2c0a8bed0e93dc94ea"></a>

### [`00b35da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35da8.md) → [`00b36d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36d9c.md) FUN_00b36d9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0043b714`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b714.md) · 呼出先 5件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00b35f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35f94.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 1件 [`0043ba34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043ba34.md) · 呼出先 5件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00b36f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36f88.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.80% / 新版 97.80%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b36dcc",
      "incomplete_value": true,
      "site": "00b36dcc",
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
      "definition_site": "00b35dd8",
      "incomplete_value": true,
      "site": "00b35dd8",
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
      "definition_site": "00b36e7c",
      "incomplete_value": false,
      "site": "00b36e88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b35e88",
      "incomplete_value": false,
      "site": "00b35e94",
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
            "const:d0:8"
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
      "definition_site": "00b36ee8",
      "incomplete_value": false,
      "site": "00b36eec",
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
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b35ef4",
      "incomplete_value": false,
      "site": "00b35ef8",
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
      "00b36dc8",
      "READ",
      [
        "storage",
        "011250d8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b36e7c",
      "PARAM",
      [
        "storage",
        "011250d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b36ee8",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b36dc8",
      "READ",
      [
        "storage",
        "01126098",
        null,
        "undefined8"
      ]
    ],
    [
      "00b36e7c",
      "PARAM",
      [
        "storage",
        "01126090",
        null,
        "undefined8"
      ]
    ],
    [
      "00b36ee8",
      "PARAM",
      [
        "storage",
        "002a01b0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b35e94 ["INT_ADD", "register:40f0:8", ["const:b35e94:8", "const:4:8"]]
- 00b35e94 ["CALL", null, ["callee:00b36f88:8"]]
+ 00b36e88 ["INT_ADD", "register:40f0:8", ["const:b36e88:8", "const:4:8"]]
+ 00b36e88 ["CALL", null, ["callee:00b36f88:8"]]
- 00b35ef8 ["INT_ADD", "register:40f0:8", ["const:b35ef8:8", "const:4:8"]]
- 00b35ef8 ["CALL", null, ["callee:00442c90:8"]]
+ 00b36eec ["INT_ADD", "register:40f0:8", ["const:b36eec:8", "const:4:8"]]
+ 00b36eec ["CALL", null, ["callee:00442c90:8"]]
- 00b35dd0 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b36dc4 ["COPY", "register:4040:8", ["const:1126000:8"]]
~~~


<a id="compare-1abcc23f9f7885d1c06443bfb09b7b45"></a>

### [`00b36098`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36098.md) → [`00b3708c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b3708c.md) _INIT_268

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00b35da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b35/00b35da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00b36d94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b36/00b36d94.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 45.45% / 新版 45.45%

優先判定に残った影響 `store_destination` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b370a8",
      "incomplete_value": false,
      "site": "00b370a8",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:90:8"
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
      "definition_site": "00b360b4",
      "incomplete_value": false,
      "site": "00b360b4",
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
                "const:d0:8"
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
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b370ac",
      "incomplete_value": false,
      "site": "00b370ac",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:90:8"
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
      "definition_site": "00b360b8",
      "incomplete_value": false,
      "site": "00b360b8",
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
                "const:d0:8"
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b370b0",
      "incomplete_value": false,
      "site": "00b370b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b360bc",
      "incomplete_value": false,
      "site": "00b360bc",
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
            "const:d0:8"
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
      "00b37090",
      "PARAM",
      [
        "storage",
        "011250d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b37098",
      "PARAM",
      [
        "storage",
        "00b35da0",
        null,
        null
      ]
    ],
    [
      "00b370a4",
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
      "00b37090",
      "PARAM",
      [
        "storage",
        "01126090",
        null,
        "undefined8"
      ]
    ],
    [
      "00b37098",
      "PARAM",
      [
        "storage",
        "00b36d94",
        null,
        null
      ]
    ],
    [
      "00b370a4",
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
- 00b36098 ["COPY", "register:4008:8", ["const:1125000:8"]]
+ 00b3708c ["COPY", "register:4008:8", ["const:1126000:8"]]
- 00b3609c ["COPY", "tmp:0:8", ["const:d0:8"]]
- 00b3609c ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b3609c ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b3609c ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b37090 ["COPY", "tmp:0:8", ["const:90:8"]]
+ 00b37090 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b37090 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b37090 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
- 00b360a4 ["COPY", "register:4000:8", ["const:b35da0:8"]]
+ 00b37098 ["COPY", "register:4000:8", ["const:b36d94:8"]]
~~~


<a id="compare-6b993f96676ff1ab8c8410fb1c04d629"></a>

### [`00b36200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36200.md) → [`00b371f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b371f4.md) FUN_00b371f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`005bad10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ba/005bad10.md) [`008978e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00897/008978e4.md) · 呼出先 10件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 2件 [`005bb0c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bb/005bb0c0.md) [`00898890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00898/00898890.md) · 呼出先 10件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.10% / 新版 87.10%

優先判定に残った影響 `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b37240",
      "incomplete_value": true,
      "site": "00b37250",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d31:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3624c",
      "incomplete_value": true,
      "site": "00b3625c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c62:8"
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
      "definition_site": "00b37254",
      "incomplete_value": true,
      "site": "00b37264",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b36260",
      "incomplete_value": true,
      "site": "00b36270",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b37244",
      "incomplete_value": true,
      "site": "00b37270",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b36250",
      "incomplete_value": true,
      "site": "00b3627c",
      "value": [
        "LOAD",
        "16",
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
      "00b37240",
      "READ",
      [
        "storage",
        "002b7c62",
        null,
        "string"
      ]
    ],
    [
      "00b37244",
      "READ",
      [
        "storage",
        "002b7c6c",
        null,
        "string"
      ]
    ],
    [
      "00b37254",
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
      "00b37240",
      "READ",
      [
        "storage",
        "002b7d31",
        null,
        "string"
      ]
    ],
    [
      "00b37244",
      "READ",
      [
        "storage",
        "002b7d3b",
        null,
        "string"
      ]
    ],
    [
      "00b37254",
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
- 00b36224 ["INT_ADD", "register:40f0:8", ["const:b36224:8", "const:4:8"]]
- 00b36224 ["CALL", null, ["callee:005891cc:8"]]
+ 00b37218 ["INT_ADD", "register:40f0:8", ["const:b37218:8", "const:4:8"]]
+ 00b37218 ["CALL", null, ["callee:005891cc:8"]]
- 00b3622c ["INT_ADD", "register:40f0:8", ["const:b3622c:8", "const:4:8"]]
- 00b3622c ["CALL", null, ["callee:005894bc:8"]]
+ 00b37220 ["INT_ADD", "register:40f0:8", ["const:b37220:8", "const:4:8"]]
+ 00b37220 ["CALL", null, ["callee:005894bc:8"]]
- 00b36238 ["INT_ADD", "register:40f0:8", ["const:b36238:8", "const:4:8"]]
- 00b36238 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3722c ["INT_ADD", "register:40f0:8", ["const:b3722c:8", "const:4:8"]]
+ 00b3722c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-0014e09e7cb1c40e3c4bdf83b35dbe87"></a>

### [`00b363b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b363b0.md) → [`00b373a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b373a4.md) _INIT_269

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 2件 [`00bc488c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bc4/00bc488c.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00bc5880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bc5/00bc5880.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 constant, operands_and_dependencies, store_destination

命令の説明率　旧版 44.44% / 新版 44.44%

優先判定に残った影響 `store_destination` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b373bc",
      "incomplete_value": false,
      "site": "00b373bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:a8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b363c8",
      "incomplete_value": false,
      "site": "00b363c8",
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
            "const:e8:8"
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
      "definition_site": "00b373bc",
      "incomplete_value": false,
      "site": "00b373bc",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:a8:8"
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
      "definition_site": "00b363c8",
      "incomplete_value": false,
      "site": "00b363c8",
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
                "const:e8:8"
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b373c0",
      "incomplete_value": false,
      "site": "00b373c0",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:a8:8"
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
      "definition_site": "00b363cc",
      "incomplete_value": false,
      "site": "00b363cc",
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
                "const:e8:8"
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
      "00b373ac",
      "PARAM",
      [
        "storage",
        "011250e8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b373b0",
      "READ",
      [
        "storage",
        "00c9acc8",
        null,
        "pointer"
      ]
    ],
    [
      "00b373b0",
      "PARAM",
      [
        "storage",
        "00bc488c",
        "std::__ndk1::basic_string<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::~basic_string",
        null
      ]
    ]
  ],
  "added": [
    [
      "00b373ac",
      "PARAM",
      [
        "storage",
        "011260a8",
        null,
        "undefined8"
      ]
    ],
    [
      "00b373b0",
      "READ",
      [
        "storage",
        "00c9bc98",
        null,
        "pointer"
      ]
    ],
    [
      "00b373b0",
      "PARAM",
      [
        "storage",
        "00bc5880",
        "std::__ndk1::basic_string<char,std::__ndk1::char_traits<char>,std::__ndk1::allocator<char>>::~basic_string",
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b363b0 ["COPY", "register:4000:8", ["const:c9a000:8"]]
+ 00b373a4 ["COPY", "register:4000:8", ["const:c9b000:8"]]
- 00b363b4 ["COPY", "register:4008:8", ["const:1125000:8"]]
+ 00b373a8 ["COPY", "register:4008:8", ["const:1126000:8"]]
- 00b363b8 ["COPY", "tmp:0:8", ["const:e8:8"]]
- 00b363b8 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 00b363b8 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 00b363b8 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 00b373ac ["COPY", "tmp:0:8", ["const:a8:8"]]
+ 00b373ac ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 00b373ac ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 00b373ac ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-56bddc8d20eb9d2c8c732196567024fa"></a>

### [`00b363d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b363d4.md) → [`00b373c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b373c8.md) FUN_00b373c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0087e768`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0087e/0087e768.md) · 呼出先 13件 [`00497874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497874.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`0087f714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0087f/0087f714.md) · 呼出先 13件 [`00497b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497b94.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.82% / 新版 91.82%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3741c",
      "incomplete_value": true,
      "site": "00b3741c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:505:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36428",
      "incomplete_value": true,
      "site": "00b36428",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:42e:8"
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
      "definition_site": "00b37424",
      "incomplete_value": true,
      "site": "00b37424",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b36430",
      "incomplete_value": true,
      "site": "00b36430",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b37420",
      "incomplete_value": true,
      "site": "00b37438",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3642c",
      "incomplete_value": true,
      "site": "00b36444",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b37404",
      "READ",
      [
        "storage",
        "002b042e",
        null,
        "string"
      ]
    ],
    [
      "00b3740c",
      "READ",
      [
        "storage",
        "002b0434",
        null,
        "string"
      ]
    ],
    [
      "00b37420",
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
      "00b37404",
      "READ",
      [
        "storage",
        "002b0505",
        null,
        "string"
      ]
    ],
    [
      "00b3740c",
      "READ",
      [
        "storage",
        "002b050b",
        null,
        "string"
      ]
    ],
    [
      "00b37420",
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
- 00b363f8 ["INT_ADD", "register:40f0:8", ["const:b363f8:8", "const:4:8"]]
- 00b363f8 ["CALL", null, ["callee:005891cc:8"]]
+ 00b373ec ["INT_ADD", "register:40f0:8", ["const:b373ec:8", "const:4:8"]]
+ 00b373ec ["CALL", null, ["callee:005891cc:8"]]
- 00b36400 ["INT_ADD", "register:40f0:8", ["const:b36400:8", "const:4:8"]]
- 00b36400 ["CALL", null, ["callee:005894bc:8"]]
+ 00b373f4 ["INT_ADD", "register:40f0:8", ["const:b373f4:8", "const:4:8"]]
+ 00b373f4 ["CALL", null, ["callee:005894bc:8"]]
- 00b3640c ["COPY", "tmp:0:8", ["const:42e:8"]]
- 00b3640c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b3640c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b3640c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b37400 ["COPY", "tmp:0:8", ["const:505:8"]]
+ 00b37400 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b37400 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b37400 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b7859d4aca3a73f677f77f031c6dae1b"></a>

### [`00b365e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b365e0.md) → [`00b375d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b375d4.md) _INIT_270

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
      "definition_site": "00b37610",
      "incomplete_value": true,
      "site": "00b3762c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3661c",
      "incomplete_value": true,
      "site": "00b36638",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b37634",
      "incomplete_value": true,
      "site": "00b37650",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b36640",
      "incomplete_value": true,
      "site": "00b3665c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b37654",
      "incomplete_value": true,
      "site": "00b37670",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b36660",
      "incomplete_value": true,
      "site": "00b3667c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b37610",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b37634",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b37654",
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
      "00b37610",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b37634",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b37654",
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
- 00b36814 ["INT_ADD", "register:40f0:8", ["const:b36814:8", "const:4:8"]]
- 00b36814 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b37808 ["INT_ADD", "register:40f0:8", ["const:b37808:8", "const:4:8"]]
+ 00b37808 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b36608 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b375fc ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b3660c ["COPY", "tmp:0:8", ["const:100:8"]]
- 00b3660c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b3660c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b3660c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b37600 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 00b37600 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b37600 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b37600 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-6da35327d0a0b036acc2a875e48e436f"></a>

### [`00b36970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36970.md) → [`00b37964`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37964.md) FUN_00b37964

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005b1554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1554.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`005b1904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1904.md) · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.74% / 新版 94.74%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b379b4",
      "incomplete_value": true,
      "site": "00b379b4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e5:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b369c0",
      "incomplete_value": true,
      "site": "00b369c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:18:8"
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
      "00b379a0",
      "READ",
      [
        "storage",
        "002ae018",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b379a0",
      "READ",
      [
        "storage",
        "002ae0e5",
        null,
        "string"
      ]
    ],
    [
      "00b379b8",
      "DATA",
      [
        "storage",
        "00562928",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b369a0 ["COPY", "tmp:0:8", ["const:18:8"]]
- 00b369a0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b369a0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b369a0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b37994 ["COPY", "tmp:0:8", ["const:e5:8"]]
+ 00b37994 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b37994 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b37994 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 00b369c8 ["INT_ADD", "register:40f0:8", ["const:b369c8:8", "const:4:8"]]
- 00b369c8 ["CALL", null, ["callee:005891cc:8"]]
+ 00b379bc ["INT_ADD", "register:40f0:8", ["const:b379bc:8", "const:4:8"]]
+ 00b379bc ["CALL", null, ["callee:005891cc:8"]]
- 00b369d0 ["INT_ADD", "register:40f0:8", ["const:b369d0:8", "const:4:8"]]
- 00b369d0 ["CALL", null, ["callee:005894bc:8"]]
+ 00b379c4 ["INT_ADD", "register:40f0:8", ["const:b379c4:8", "const:4:8"]]
+ 00b379c4 ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-4b5e2f7318f7781962beafae714a73f0"></a>

### [`00b36a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36a90.md) → [`00b37a84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37a84.md) FUN_00b37a84

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1554.md) · 呼出先 2件 [`00b34834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b34834.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b1904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1904.md) · 呼出先 2件 [`00b35828`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35828.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b37aec",
      "incomplete_value": false,
      "site": "00b37af8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36af8",
      "incomplete_value": false,
      "site": "00b36b04",
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
            "const:130:8"
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
      "00b37aec",
      "PARAM",
      [
        "storage",
        "01125130",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b37aec",
      "PARAM",
      [
        "storage",
        "011260f0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b36b04 ["INT_ADD", "register:40f0:8", ["const:b36b04:8", "const:4:8"]]
- 00b36b04 ["CALL", null, ["callee:00b35828:8"]]
+ 00b37af8 ["INT_ADD", "register:40f0:8", ["const:b37af8:8", "const:4:8"]]
+ 00b37af8 ["CALL", null, ["callee:00b35828:8"]]
- 00b36ac8 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b36ac8 ["INT_ADD", "register:40f0:8", ["const:b36ac8:8", "const:4:8"]]
- 00b36ac8 ["CALLIND", null, ["register:0:8"]]
+ 00b37abc ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b37abc ["INT_ADD", "register:40f0:8", ["const:b37abc:8", "const:4:8"]]
+ 00b37abc ["CALLIND", null, ["register:0:8"]]
- 00b36af0 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b36af0 ["INT_ADD", "register:40f0:8", ["const:b36af0:8", "const:4:8"]]
- 00b36af0 ["CALLIND", null, ["register:0:8"]]
+ 00b37ae4 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b37ae4 ["INT_ADD", "register:40f0:8", ["const:b37ae4:8", "const:4:8"]]
+ 00b37ae4 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-f00a683372799e3cf6e972f99d2b9945"></a>

### [`00b36b58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36b58.md) → [`00b37b4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37b4c.md) FUN_00b37b4c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`005b1554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005b1/005b1554.md) · 呼出先 2件 [`00b3499c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b3499c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 1件 [`005b1904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005b1/005b1904.md) · 呼出先 2件 [`00b35990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b35990.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.00% / 新版 98.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b37bb4",
      "incomplete_value": false,
      "site": "00b37bc0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:120:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36bc0",
      "incomplete_value": false,
      "site": "00b36bcc",
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
            "const:160:8"
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
      "00b37bb4",
      "PARAM",
      [
        "storage",
        "01125160",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b37bb4",
      "PARAM",
      [
        "storage",
        "01126120",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b36bcc ["INT_ADD", "register:40f0:8", ["const:b36bcc:8", "const:4:8"]]
- 00b36bcc ["CALL", null, ["callee:00b35990:8"]]
+ 00b37bc0 ["INT_ADD", "register:40f0:8", ["const:b37bc0:8", "const:4:8"]]
+ 00b37bc0 ["CALL", null, ["callee:00b35990:8"]]
- 00b36b90 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b36b90 ["INT_ADD", "register:40f0:8", ["const:b36b90:8", "const:4:8"]]
- 00b36b90 ["CALLIND", null, ["register:0:8"]]
+ 00b37b84 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b37b84 ["INT_ADD", "register:40f0:8", ["const:b37b84:8", "const:4:8"]]
+ 00b37b84 ["CALLIND", null, ["register:0:8"]]
- 00b36bb8 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b36bb8 ["INT_ADD", "register:40f0:8", ["const:b36bb8:8", "const:4:8"]]
- 00b36bb8 ["CALLIND", null, ["register:0:8"]]
+ 00b37bac ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b37bac ["INT_ADD", "register:40f0:8", ["const:b37bac:8", "const:4:8"]]
+ 00b37bac ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-df4e6890194acc3be11b45c6fa05e1fd"></a>

### [`00b36d54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36d54.md) → [`00b37d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37d48.md) Java_jp_co_ponos_battlecats_MyGoogleSignInListener_onFailure

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition, store_value

命令の説明率　旧版 83.72% / 新版 83.72%

優先判定に残った影響 `store_value` 3件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b37d84",
      "incomplete_value": true,
      "site": "00b37d94",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a51:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36d90",
      "incomplete_value": true,
      "site": "00b36da0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:982:8"
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
      "definition_site": "00b37d88",
      "incomplete_value": true,
      "site": "00b37d98",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:be0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36d94",
      "incomplete_value": true,
      "site": "00b36da4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b90:8"
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
      "definition_site": "00b37d8c",
      "incomplete_value": true,
      "site": "00b37d9c",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b36d98",
      "incomplete_value": true,
      "site": "00b36da8",
      "value": [
        "LOAD",
        "16",
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
      "00b37d68",
      "READ",
      [
        "storage",
        "01125180",
        null,
        "undefined8"
      ]
    ],
    [
      "00b37d84",
      "READ",
      [
        "storage",
        "002b8982",
        null,
        null
      ]
    ],
    [
      "00b37d88",
      "READ",
      [
        "storage",
        "002c2b90",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b37d68",
      "READ",
      [
        "storage",
        "01126140",
        null,
        "undefined8"
      ]
    ],
    [
      "00b37d84",
      "READ",
      [
        "storage",
        "002b8a51",
        null,
        null
      ]
    ],
    [
      "00b37d88",
      "READ",
      [
        "storage",
        "002c2be0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b36d70 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b37d64 ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b36d74 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:180:8"]]
- 00b36d74 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b37d68 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:140:8"]]
+ 00b37d68 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00b36d80 ["INT_ADD", "register:40f0:8", ["const:b36d80:8", "const:4:8"]]
- 00b36d80 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b37d74 ["INT_ADD", "register:40f0:8", ["const:b37d74:8", "const:4:8"]]
+ 00b37d74 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-36109fd747cf6a6af83385fd802f50b6"></a>

### [`00b36e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36e2c.md) → [`00b37e20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37e20.md) Java_jp_co_ponos_battlecats_MyGoogleSignInListener_onCancel

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, constant, operands_and_dependencies, operation_sequence, store_condition, store_value

命令の説明率　旧版 81.82% / 新版 81.82%

優先判定に残った影響 `store_value` 4件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b37e60",
      "incomplete_value": true,
      "site": "00b37e70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36e6c",
      "incomplete_value": true,
      "site": "00b36e7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b37e5c",
      "incomplete_value": true,
      "site": "00b37e74",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:570:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b36e68",
      "incomplete_value": true,
      "site": "00b36e80",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:499:8"
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
      "definition_site": "00b37e5c",
      "incomplete_value": true,
      "site": "00b37e74",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b36e68",
      "incomplete_value": true,
      "site": "00b36e80",
      "value": [
        "LOAD",
        "16",
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
      "00b37e40",
      "READ",
      [
        "storage",
        "01125180",
        null,
        "undefined8"
      ]
    ],
    [
      "00b37e5c",
      "READ",
      [
        "storage",
        "002b1499",
        null,
        null
      ]
    ],
    [
      "00b37e5c",
      "READ",
      [
        "storage",
        "002b14a9",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b37e40",
      "READ",
      [
        "storage",
        "01126140",
        null,
        "undefined8"
      ]
    ],
    [
      "00b37e5c",
      "READ",
      [
        "storage",
        "002b1570",
        null,
        null
      ]
    ],
    [
      "00b37e5c",
      "READ",
      [
        "storage",
        "002b1580",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b36e48 ["COPY", "register:4040:8", ["const:1125000:8"]]
+ 00b37e3c ["COPY", "register:4040:8", ["const:1126000:8"]]
- 00b36e4c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:180:8"]]
- 00b36e4c ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b37e40 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:140:8"]]
+ 00b37e40 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
- 00b36e58 ["INT_ADD", "register:40f0:8", ["const:b36e58:8", "const:4:8"]]
- 00b36e58 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b37e4c ["INT_ADD", "register:40f0:8", ["const:b37e4c:8", "const:4:8"]]
+ 00b37e4c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-a6fc096b57dae7d1764c814b2f35cf1d"></a>

### [`00b36f10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b36/00b36f10.md) → [`00b37f04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b37/00b37f04.md) _INIT_271

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00b342bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b342bc.md) [`00b342ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b34/00b342ec.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00b352b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b352b0.md) [`00b352e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b35/00b352e0.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 82.29% / 新版 82.29%

優先判定に残った影響 `call_argument_candidate` 1件, `store_destination` 2件, `store_value` 6件, `unresolved_call_alignment` 2件

アドレスに依存する影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b37f64",
      "incomplete_value": true,
      "site": "00b37f80",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "00b36f70",
      "incomplete_value": true,
      "site": "00b36f8c",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "00b37f84",
      "incomplete_value": true,
      "site": "00b37fa0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b36f90",
      "incomplete_value": true,
      "site": "00b36fac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b37fa4",
      "incomplete_value": true,
      "site": "00b37fbc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b36fb0",
      "incomplete_value": true,
      "site": "00b36fc8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b37f40",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b37f64",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b37f84",
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
      "00b37f40",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b37f64",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b37f84",
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
- 00b37180 ["INT_ADD", "register:40f0:8", ["const:b37180:8", "const:4:8"]]
- 00b37180 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b38174 ["INT_ADD", "register:40f0:8", ["const:b38174:8", "const:4:8"]]
+ 00b38174 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b36f38 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b37f2c ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b36f3c ["COPY", "tmp:0:8", ["const:118:8"]]
- 00b36f3c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b36f3c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b36f3c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b37f30 ["COPY", "tmp:0:8", ["const:d8:8"]]
+ 00b37f30 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b37f30 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b37f30 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-e58a792f6f897437729bb47a1814075f"></a>

### [`00b37478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37478.md) → [`00b3846c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b3846c.md) FUN_00b3846c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00887838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887838.md) · 呼出先 16件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md)
- 新版 呼出元 1件 [`008887e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008887e4.md) · 呼出先 16件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`0057c208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057c/0057c208.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.82% / 新版 92.82%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b384cc",
      "incomplete_value": true,
      "site": "00b384cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d4c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b374d8",
      "incomplete_value": true,
      "site": "00b374d8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c7d:8"
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
      "definition_site": "00b384d0",
      "incomplete_value": true,
      "site": "00b384d0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b374dc",
      "incomplete_value": true,
      "site": "00b374dc",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b384ec",
      "incomplete_value": true,
      "site": "00b384f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3f0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b374f8",
      "incomplete_value": true,
      "site": "00b37504",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3a0:8"
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
      "00b384b8",
      "READ",
      [
        "storage",
        "002b7c7d",
        null,
        "string"
      ]
    ],
    [
      "00b384c0",
      "READ",
      [
        "storage",
        "002b7c83",
        null,
        "string"
      ]
    ],
    [
      "00b384e8",
      "READ",
      [
        "storage",
        "002bc6d9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b384b8",
      "READ",
      [
        "storage",
        "002b7d4c",
        null,
        "string"
      ]
    ],
    [
      "00b384c0",
      "READ",
      [
        "storage",
        "002b7d52",
        null,
        "string"
      ]
    ],
    [
      "00b384e8",
      "READ",
      [
        "storage",
        "002bc7b7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b375b0 ["INT_ADD", "register:40f0:8", ["const:b375b0:8", "const:4:8"]]
- 00b375b0 ["CALL", null, ["callee:0057c208:8"]]
+ 00b385a4 ["INT_ADD", "register:40f0:8", ["const:b385a4:8", "const:4:8"]]
+ 00b385a4 ["CALL", null, ["callee:0057c208:8"]]
- 00b374ac ["INT_ADD", "register:40f0:8", ["const:b374ac:8", "const:4:8"]]
- 00b374ac ["CALL", null, ["callee:005891cc:8"]]
+ 00b384a0 ["INT_ADD", "register:40f0:8", ["const:b384a0:8", "const:4:8"]]
+ 00b384a0 ["CALL", null, ["callee:005891cc:8"]]
- 00b374b4 ["INT_ADD", "register:40f0:8", ["const:b374b4:8", "const:4:8"]]
- 00b374b4 ["CALL", null, ["callee:005894bc:8"]]
+ 00b384a8 ["INT_ADD", "register:40f0:8", ["const:b384a8:8", "const:4:8"]]
+ 00b384a8 ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-f5f6f668f1c2b6c615e042899bdf615c"></a>

### [`00b37850`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37850.md) → [`00b38844`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38844.md) FUN_00b38844

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00887828`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887828.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`008887d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008887d4.md) · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.16% / 新版 95.16%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3888c",
      "incomplete_value": true,
      "site": "00b388a8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:89b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b37898",
      "incomplete_value": true,
      "site": "00b378b4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:851:8"
              ]
            ]
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
      "00b3888c",
      "READ",
      [
        "storage",
        "002c0851",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3888c",
      "READ",
      [
        "storage",
        "002c089b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b37874 ["INT_ADD", "register:40f0:8", ["const:b37874:8", "const:4:8"]]
- 00b37874 ["CALL", null, ["callee:005891cc:8"]]
+ 00b38868 ["INT_ADD", "register:40f0:8", ["const:b38868:8", "const:4:8"]]
+ 00b38868 ["CALL", null, ["callee:005891cc:8"]]
- 00b3787c ["INT_ADD", "register:40f0:8", ["const:b3787c:8", "const:4:8"]]
- 00b3787c ["CALL", null, ["callee:005894bc:8"]]
+ 00b38870 ["INT_ADD", "register:40f0:8", ["const:b38870:8", "const:4:8"]]
+ 00b38870 ["CALL", null, ["callee:005894bc:8"]]
- 00b37888 ["COPY", "tmp:0:8", ["const:851:8"]]
- 00b37888 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b37888 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b37888 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b3887c ["COPY", "tmp:0:8", ["const:89b:8"]]
+ 00b3887c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3887c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3887c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-922414c50f629e1681627823562dc429"></a>

### [`00b37984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37984.md) → [`00b38978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38978.md) FUN_00b38978

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00887830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00887/00887830.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`008887dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00888/008887dc.md) · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.08% / 新版 95.08%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b389bc",
      "incomplete_value": true,
      "site": "00b389d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:175:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b379c8",
      "incomplete_value": true,
      "site": "00b379e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:97:8"
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
      "00b389bc",
      "READ",
      [
        "storage",
        "002bd097",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b389bc",
      "READ",
      [
        "storage",
        "002bd175",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b379a8 ["INT_ADD", "register:40f0:8", ["const:b379a8:8", "const:4:8"]]
- 00b379a8 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3899c ["INT_ADD", "register:40f0:8", ["const:b3899c:8", "const:4:8"]]
+ 00b3899c ["CALL", null, ["callee:005891cc:8"]]
- 00b379b0 ["INT_ADD", "register:40f0:8", ["const:b379b0:8", "const:4:8"]]
- 00b379b0 ["CALL", null, ["callee:005894bc:8"]]
+ 00b389a4 ["INT_ADD", "register:40f0:8", ["const:b389a4:8", "const:4:8"]]
+ 00b389a4 ["CALL", null, ["callee:005894bc:8"]]
- 00b379bc ["COPY", "tmp:0:8", ["const:97:8"]]
- 00b379bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b379bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b379bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b389b0 ["COPY", "tmp:0:8", ["const:175:8"]]
+ 00b389b0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b389b0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b389b0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-0f670e1b6ac9f75ff5f066ecc8047608"></a>

### [`00b37ab4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37ab4.md) → [`00b38aa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38aa8.md) FUN_00b38aa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`00888304`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888304.md) [`0088bc44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bc44.md) · 呼出先 8件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 2件 [`008892b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/008892b0.md) [`0088cbf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cbf0.md) · 呼出先 8件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 93.51% / 新版 93.51%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b38ae0",
      "incomplete_value": true,
      "site": "00b38af0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6a6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b37aec",
      "incomplete_value": true,
      "site": "00b37afc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5c8:8"
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
      "definition_site": "00b38af4",
      "incomplete_value": true,
      "site": "00b38af4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b37b00",
      "incomplete_value": true,
      "site": "00b37b00",
      "value": [
        "LOAD",
        "8",
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
      "00b38ae0",
      "READ",
      [
        "storage",
        "002b45c8",
        null,
        "string"
      ]
    ],
    [
      "00b38ae8",
      "READ",
      [
        "storage",
        "002b45d5",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b38ae0",
      "READ",
      [
        "storage",
        "002b46a6",
        null,
        "string"
      ]
    ],
    [
      "00b38ae8",
      "READ",
      [
        "storage",
        "002b46b3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b37ad4 ["INT_ADD", "register:40f0:8", ["const:b37ad4:8", "const:4:8"]]
- 00b37ad4 ["CALL", null, ["callee:005891cc:8"]]
+ 00b38ac8 ["INT_ADD", "register:40f0:8", ["const:b38ac8:8", "const:4:8"]]
+ 00b38ac8 ["CALL", null, ["callee:005891cc:8"]]
- 00b37adc ["INT_ADD", "register:40f0:8", ["const:b37adc:8", "const:4:8"]]
- 00b37adc ["CALL", null, ["callee:005894bc:8"]]
+ 00b38ad0 ["INT_ADD", "register:40f0:8", ["const:b38ad0:8", "const:4:8"]]
+ 00b38ad0 ["CALL", null, ["callee:005894bc:8"]]
- 00b37ae8 ["COPY", "tmp:0:8", ["const:5c8:8"]]
- 00b37ae8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b37ae8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b37ae8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b38adc ["COPY", "tmp:0:8", ["const:6a6:8"]]
+ 00b38adc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b38adc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b38adc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9ce821778c9563389fba50dba1810544"></a>

### [`00b37c24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37c24.md) → [`00b38c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38c18.md) FUN_00b38c18

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00889bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00889/00889bfc.md) [`0088a3e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088a/0088a3e0.md) [`0088bc44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088b/0088bc44.md) · 呼出先 11件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`0057bee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0057b/0057bee8.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)
- 新版 呼出元 3件 [`0088aba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088a/0088aba8.md) [`0088b38c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088b/0088b38c.md) [`0088cbf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088c/0088cbf0.md) · 呼出先 11件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`0057c208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0057c/0057c208.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.12% / 新版 96.12%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b38d74",
      "incomplete_value": true,
      "site": "00b38d8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:710:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b37d80",
      "incomplete_value": true,
      "site": "00b37d98",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6c0:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b38c80",
      "incomplete_value": false,
      "site": "00b38c8c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:180:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b37c8c",
      "incomplete_value": false,
      "site": "00b37c98",
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
            "const:1c0:8"
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
      "definition_site": "00b38d00",
      "incomplete_value": false,
      "site": "00b38d0c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:1b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b37d0c",
      "incomplete_value": false,
      "site": "00b37d18",
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
            "const:1f0:8"
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
      "00b38c80",
      "PARAM",
      [
        "storage",
        "011251c0",
        null,
        null
      ]
    ],
    [
      "00b38d00",
      "PARAM",
      [
        "storage",
        "011251f0",
        null,
        null
      ]
    ],
    [
      "00b38d60",
      "READ",
      [
        "storage",
        "002a9531",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b38c80",
      "PARAM",
      [
        "storage",
        "01126180",
        null,
        null
      ]
    ],
    [
      "00b38d00",
      "PARAM",
      [
        "storage",
        "011261b0",
        null,
        null
      ]
    ],
    [
      "00b38d60",
      "READ",
      [
        "storage",
        "002a95fe",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b37c98 ["INT_ADD", "register:40f0:8", ["const:b37c98:8", "const:4:8"]]
- 00b37c98 ["CALL", null, ["callee:0088a570:8"]]
+ 00b38c8c ["INT_ADD", "register:40f0:8", ["const:b38c8c:8", "const:4:8"]]
+ 00b38c8c ["CALL", null, ["callee:0088a570:8"]]
- 00b37d18 ["INT_ADD", "register:40f0:8", ["const:b37d18:8", "const:4:8"]]
- 00b37d18 ["CALL", null, ["callee:0057c208:8"]]
+ 00b38d0c ["INT_ADD", "register:40f0:8", ["const:b38d0c:8", "const:4:8"]]
+ 00b38d0c ["CALL", null, ["callee:0057c208:8"]]
- 00b37c64 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b37c64 ["INT_ADD", "register:40f0:8", ["const:b37c64:8", "const:4:8"]]
- 00b37c64 ["CALLIND", null, ["register:0:8"]]
+ 00b38c58 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b38c58 ["INT_ADD", "register:40f0:8", ["const:b38c58:8", "const:4:8"]]
+ 00b38c58 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fcc0a795685df3e083fa0fb779f77977"></a>

### [`00b37e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37e64.md) → [`00b38e58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38e58.md) FUN_00b38e58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00888480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888480.md) · 呼出先 16件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)
- 新版 呼出元 1件 [`0088942c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/0088942c.md) · 呼出先 16件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.87% / 新版 95.87%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b38ec4",
      "incomplete_value": true,
      "site": "00b38ec4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d5b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b37ed0",
      "incomplete_value": true,
      "site": "00b37ed0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c8c:8"
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
      "definition_site": "00b38ecc",
      "incomplete_value": true,
      "site": "00b38ecc",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b37ed8",
      "incomplete_value": true,
      "site": "00b37ed8",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b39040",
      "incomplete_value": false,
      "site": "00b39048",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:1e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3804c",
      "incomplete_value": false,
      "site": "00b38054",
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
            "const:220:8"
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
      "00b38eac",
      "READ",
      [
        "storage",
        "002b7c8c",
        null,
        "string"
      ]
    ],
    [
      "00b38eb4",
      "READ",
      [
        "storage",
        "002b7c92",
        null,
        "string"
      ]
    ],
    [
      "00b38ec8",
      "READ",
      [
        "storage",
        "002bb48d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b38eac",
      "READ",
      [
        "storage",
        "002b7d5b",
        null,
        "string"
      ]
    ],
    [
      "00b38eb4",
      "READ",
      [
        "storage",
        "002b7d61",
        null,
        "string"
      ]
    ],
    [
      "00b38ec8",
      "READ",
      [
        "storage",
        "002bb56b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38054 ["INT_ADD", "register:40f0:8", ["const:b38054:8", "const:4:8"]]
- 00b38054 ["CALL", null, ["callee:00b3932c:8"]]
+ 00b39048 ["INT_ADD", "register:40f0:8", ["const:b39048:8", "const:4:8"]]
+ 00b39048 ["CALL", null, ["callee:00b3932c:8"]]
- 00b37ea0 ["INT_ADD", "register:40f0:8", ["const:b37ea0:8", "const:4:8"]]
- 00b37ea0 ["CALL", null, ["callee:005891cc:8"]]
+ 00b38e94 ["INT_ADD", "register:40f0:8", ["const:b38e94:8", "const:4:8"]]
+ 00b38e94 ["CALL", null, ["callee:005891cc:8"]]
- 00b37ea8 ["INT_ADD", "register:40f0:8", ["const:b37ea8:8", "const:4:8"]]
- 00b37ea8 ["CALL", null, ["callee:005894bc:8"]]
+ 00b38e9c ["INT_ADD", "register:40f0:8", ["const:b38e9c:8", "const:4:8"]]
+ 00b38e9c ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-abe06e851f21956862a4084c4e5854aa"></a>

### [`00b3855c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b3855c.md) → [`00b39550`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39550.md) FUN_00b39550

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00888e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00888/00888e20.md) · 呼出先 15件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)
- 新版 呼出元 1件 [`00889dcc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00889/00889dcc.md) · 呼出先 15件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.43% / 新版 88.43%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b395a0",
      "incomplete_value": true,
      "site": "00b395b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:596:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b385ac",
      "incomplete_value": true,
      "site": "00b385bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4bf:8"
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
      "definition_site": "00b395b4",
      "incomplete_value": true,
      "site": "00b395c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "00b385c0",
      "incomplete_value": true,
      "site": "00b385d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a40:8"
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
      "definition_site": "00b395a4",
      "incomplete_value": true,
      "site": "00b395cc",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b385b0",
      "incomplete_value": true,
      "site": "00b385d8",
      "value": [
        "LOAD",
        "16",
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
      "00b395a0",
      "READ",
      [
        "storage",
        "002b14bf",
        null,
        "string"
      ]
    ],
    [
      "00b395a4",
      "READ",
      [
        "storage",
        "002b14ce",
        null,
        "string"
      ]
    ],
    [
      "00b395b4",
      "READ",
      [
        "storage",
        "002c2a40",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b395a0",
      "READ",
      [
        "storage",
        "002b1596",
        null,
        "string"
      ]
    ],
    [
      "00b395a4",
      "READ",
      [
        "storage",
        "002b15a5",
        null,
        "string"
      ]
    ],
    [
      "00b395b4",
      "READ",
      [
        "storage",
        "002c2a90",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38584 ["INT_ADD", "register:40f0:8", ["const:b38584:8", "const:4:8"]]
- 00b38584 ["CALL", null, ["callee:005891cc:8"]]
+ 00b39578 ["INT_ADD", "register:40f0:8", ["const:b39578:8", "const:4:8"]]
+ 00b39578 ["CALL", null, ["callee:005891cc:8"]]
- 00b3858c ["INT_ADD", "register:40f0:8", ["const:b3858c:8", "const:4:8"]]
- 00b3858c ["CALL", null, ["callee:005894bc:8"]]
+ 00b39580 ["INT_ADD", "register:40f0:8", ["const:b39580:8", "const:4:8"]]
+ 00b39580 ["CALL", null, ["callee:005894bc:8"]]
- 00b38598 ["INT_ADD", "register:40f0:8", ["const:b38598:8", "const:4:8"]]
- 00b38598 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3958c ["INT_ADD", "register:40f0:8", ["const:b3958c:8", "const:4:8"]]
+ 00b3958c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-b049a5112f658e639eccd344018b031f"></a>

### [`00b387c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b387c0.md) → [`00b397b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b397b4.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdReady

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00597654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) [`00597974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597974.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, constant, operands_and_dependencies

命令の説明率　旧版 96.55% / 新版 96.55%

優先判定に残った影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3986c",
      "incomplete_value": true,
      "site": "00b3986c",
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
      "definition_site": "00b38878",
      "incomplete_value": true,
      "site": "00b38878",
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
      "00b397d8",
      "READ",
      [
        "storage",
        "011251e0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39868",
      "READ",
      [
        "storage",
        "011251e0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b397d8",
      "READ",
      [
        "storage",
        "011261a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39868",
      "READ",
      [
        "storage",
        "011261a0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b387d8 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b397cc ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b387e4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:1e0:8"]]
- 00b387e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b397d8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:1a0:8"]]
+ 00b397d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b387f4 ["INT_ADD", "register:40f0:8", ["const:b387f4:8", "const:4:8"]]
- 00b387f4 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b397e8 ["INT_ADD", "register:40f0:8", ["const:b397e8:8", "const:4:8"]]
+ 00b397e8 ["CALL", null, ["callee:00589cb4:8"]]
~~~


<a id="compare-2b48c313926a5dec979b6cc216ca468d"></a>

### [`00b3898c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b3898c.md) → [`00b39980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39980.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdOpened

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00597654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) [`00597974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597974.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `branch_value` 2件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b399a8",
      "incomplete_value": true,
      "site": "00b399a8",
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
      "definition_site": "00b389b4",
      "incomplete_value": true,
      "site": "00b389b4",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b39a38",
      "incomplete_value": true,
      "site": "00b39a38",
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
      "definition_site": "00b38a44",
      "incomplete_value": true,
      "site": "00b38a44",
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b389b4"
      ],
      [
        "FALL_THROUGH",
        "00b399a8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b399a8",
      "incomplete_value": true,
      "site": "00b399c8",
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
      "definition_site": "00b389b4",
      "incomplete_value": true,
      "site": "00b389d4",
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
      "00b399a4",
      "READ",
      [
        "storage",
        "011252a0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39a34",
      "READ",
      [
        "storage",
        "011252a0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b399a4",
      "READ",
      [
        "storage",
        "01126260",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39a34",
      "READ",
      [
        "storage",
        "01126260",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b389a4 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b39998 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b389b0 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:2a0:8"]]
- 00b389b0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b399a4 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:260:8"]]
+ 00b399a4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b389c0 ["INT_ADD", "register:40f0:8", ["const:b389c0:8", "const:4:8"]]
- 00b389c0 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b399b4 ["INT_ADD", "register:40f0:8", ["const:b399b4:8", "const:4:8"]]
+ 00b399b4 ["CALL", null, ["callee:00589cb4:8"]]
~~~


<a id="compare-afd40405e3adf3759239566d45159b6b"></a>

### [`00b38b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38b3c.md) → [`00b39b30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39b30.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdShowFailed

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 94.12% / 新版 94.12%

優先判定に残った影響 `branch_value` 1件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b39b60",
      "incomplete_value": true,
      "site": "00b39b60",
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
      "definition_site": "00b38b6c",
      "incomplete_value": true,
      "site": "00b38b6c",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b38b6c"
      ],
      [
        "FALL_THROUGH",
        "00b39b60"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b39b60",
      "incomplete_value": true,
      "site": "00b39bb4",
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
      "definition_site": "00b38b6c",
      "incomplete_value": true,
      "site": "00b38bc0",
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
    "ordinal": 11,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b38b6c"
      ],
      [
        "FALL_THROUGH",
        "00b39b60"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b39b60",
      "incomplete_value": true,
      "site": "00b39bb4",
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
      "definition_site": "00b38b6c",
      "incomplete_value": true,
      "site": "00b38bc0",
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
      "00b39b5c",
      "READ",
      [
        "storage",
        "01125240",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39bac",
      "READ",
      [
        "storage",
        "01125240",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b39b5c",
      "READ",
      [
        "storage",
        "01126200",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39bac",
      "READ",
      [
        "storage",
        "01126200",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38b5c ["COPY", "register:40b8:8", ["const:1125000:8"]]
+ 00b39b50 ["COPY", "register:40b8:8", ["const:1126000:8"]]
- 00b38b68 ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:240:8"]]
- 00b38b68 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b39b5c ["INT_ADD", "tmp:0:8", ["register:40b8:8", "const:200:8"]]
+ 00b39b5c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b38b88 ["INT_ADD", "register:40f0:8", ["const:b38b88:8", "const:4:8"]]
- 00b38b88 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b39b7c ["INT_ADD", "register:40f0:8", ["const:b39b7c:8", "const:4:8"]]
+ 00b39b7c ["CALL", null, ["callee:00589cb4:8"]]
~~~


<a id="compare-cec84e410f724aa548d428e76b680711"></a>

### [`00b38c94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38c94.md) → [`00b39c88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39c88.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdRewarded

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `branch_value` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b39cb0",
      "incomplete_value": true,
      "site": "00b39cb0",
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
      "definition_site": "00b38cbc",
      "incomplete_value": true,
      "site": "00b38cbc",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b38cbc"
      ],
      [
        "FALL_THROUGH",
        "00b39cb0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b39cb0",
      "incomplete_value": true,
      "site": "00b39cd8",
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
      "definition_site": "00b38cbc",
      "incomplete_value": true,
      "site": "00b38ce4",
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
      "00b39cac",
      "READ",
      [
        "storage",
        "01125270",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39ccc",
      "READ",
      [
        "storage",
        "01125270",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b39cac",
      "READ",
      [
        "storage",
        "01126230",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39ccc",
      "READ",
      [
        "storage",
        "01126230",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38cac ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b39ca0 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b38cb8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:270:8"]]
- 00b38cb8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b39cac ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:230:8"]]
+ 00b39cac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b38ccc ["INT_ADD", "register:40f0:8", ["const:b38ccc:8", "const:4:8"]]
- 00b38ccc ["CALL", null, ["callee:00589cb4:8"]]
+ 00b39cc0 ["INT_ADD", "register:40f0:8", ["const:b39cc0:8", "const:4:8"]]
+ 00b39cc0 ["CALL", null, ["callee:00589cb4:8"]]
~~~


<a id="compare-78d508f5f360b988135a6098107d0481"></a>

### [`00b38d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38d74.md) → [`00b39d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39d68.md) Java_jp_co_ponos_battlecats_IronSourceImplementation_onAdClosed

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 8件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00596f6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00596/00596f6c.md) [`00597654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597654.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`0059728c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/0059728c.md) [`00597974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00597/00597974.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 95.40% / 新版 95.40%

優先判定に残った影響 `branch_value` 2件, `store_condition` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b39d90",
      "incomplete_value": true,
      "site": "00b39d90",
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
      "definition_site": "00b38d9c",
      "incomplete_value": true,
      "site": "00b38d9c",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b39e20",
      "incomplete_value": true,
      "site": "00b39e20",
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
      "definition_site": "00b38e2c",
      "incomplete_value": true,
      "site": "00b38e2c",
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
    "ordinal": 6,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00b38d9c"
      ],
      [
        "FALL_THROUGH",
        "00b39d90"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b39d90",
      "incomplete_value": true,
      "site": "00b39db0",
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
      "definition_site": "00b38d9c",
      "incomplete_value": true,
      "site": "00b38dbc",
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
      "00b39d8c",
      "READ",
      [
        "storage",
        "011252d0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39e1c",
      "READ",
      [
        "storage",
        "011252d0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b39d8c",
      "READ",
      [
        "storage",
        "01126290",
        null,
        "undefined8"
      ]
    ],
    [
      "00b39e1c",
      "READ",
      [
        "storage",
        "01126290",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b38d8c ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b39d80 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b38d98 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:2d0:8"]]
- 00b38d98 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b39d8c ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:290:8"]]
+ 00b39d8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b38da8 ["INT_ADD", "register:40f0:8", ["const:b38da8:8", "const:4:8"]]
- 00b38da8 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b39d9c ["INT_ADD", "register:40f0:8", ["const:b39d9c:8", "const:4:8"]]
+ 00b39d9c ["CALL", null, ["callee:00589cb4:8"]]
~~~


<a id="compare-85641755ed3226cf105a3f47b83e2532"></a>

### [`00b38f24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38f24.md) → [`00b39f18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39f18.md) _INIT_272

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 4件 [`00b372e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b372e0.md) [`00b37310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37310.md) [`00b37394`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b37/00b37394.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00b382d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b382d4.md) [`00b38304`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38304.md) [`00b38388`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b38/00b38388.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 call, call_count, constant, operands_and_dependencies, operation_sequence, store_destination, unresolved_call_alignment

命令の説明率　旧版 34.38% / 新版 34.38%

優先判定に残った影響 `store_destination` 7件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "00b39f40",
      "incomplete_value": false,
      "site": "00b39f40",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:150:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b38f4c",
      "incomplete_value": false,
      "site": "00b38f4c",
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
                "const:190:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
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
      "definition_site": "00b39f5c",
      "incomplete_value": false,
      "site": "00b39f5c",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:180:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b38f68",
      "incomplete_value": false,
      "site": "00b38f68",
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
                "const:1c0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:20:8"
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
      "definition_site": "00b39f60",
      "incomplete_value": false,
      "site": "00b39f60",
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
                "const:1126000:8"
              ],
              [
                "leaf",
                "const:180:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b38f6c",
      "incomplete_value": false,
      "site": "00b38f6c",
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
                "const:1c0:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:50:8"
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
      "00b39f30",
      "PARAM",
      [
        "storage",
        "01125190",
        null,
        null
      ]
    ],
    [
      "unmatched:00b38f44",
      "PARAM",
      [
        "storage",
        "00b372e0",
        null,
        null
      ]
    ],
    [
      "00b39f3c",
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
      "00b39f30",
      "PARAM",
      [
        "storage",
        "01126150",
        null,
        null
      ]
    ],
    [
      "00b39f38",
      "PARAM",
      [
        "storage",
        "00b382d4",
        null,
        null
      ]
    ],
    [
      "00b39f3c",
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
- 00b38f30 ["COPY", "register:4098:8", ["const:c63000:8"]]
+ 00b39f24 ["COPY", "register:4098:8", ["const:c64000:8"]]
- 00b38f34 ["COPY", "tmp:0:8", ["const:60:8"]]
- 00b38f34 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b38f34 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b38f34 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b39f28 ["COPY", "tmp:0:8", ["const:30:8"]]
+ 00b39f28 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b39f28 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b39f28 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00b38f38 ["COPY", "register:4008:8", ["const:1125000:8"]]
~~~


<a id="compare-27550a4ada40f887659bb59421ccaf2a"></a>

### [`00b38fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38fb4.md) → [`00b39fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39fa8.md) FUN_00b39fa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00891164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891164.md) · 呼出先 12件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00892110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892110.md) · 呼出先 12件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a088",
      "incomplete_value": true,
      "site": "00b3a088",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:8b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b39094",
      "incomplete_value": true,
      "site": "00b39094",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:866:8"
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
      "definition_site": "00b3a090",
      "incomplete_value": true,
      "site": "00b3a090",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b3909c",
      "incomplete_value": true,
      "site": "00b3909c",
      "value": [
        "LOAD",
        "8",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3a01c",
      "incomplete_value": false,
      "site": "00b3a028",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b39028",
      "incomplete_value": false,
      "site": "00b39034",
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
            "const:330:8"
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
      "00b3a01c",
      "PARAM",
      [
        "storage",
        "01125330",
        null,
        null
      ]
    ],
    [
      "00b3a070",
      "READ",
      [
        "storage",
        "002c0866",
        null,
        "string"
      ]
    ],
    [
      "00b3a078",
      "READ",
      [
        "storage",
        "002c086b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3a01c",
      "PARAM",
      [
        "storage",
        "011262f0",
        null,
        null
      ]
    ],
    [
      "00b3a070",
      "READ",
      [
        "storage",
        "002c08b0",
        null,
        "string"
      ]
    ],
    [
      "00b3a078",
      "READ",
      [
        "storage",
        "002c08b5",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b39034 ["INT_ADD", "register:40f0:8", ["const:b39034:8", "const:4:8"]]
- 00b39034 ["CALL", null, ["callee:0058f794:8"]]
+ 00b3a028 ["INT_ADD", "register:40f0:8", ["const:b3a028:8", "const:4:8"]]
+ 00b3a028 ["CALL", null, ["callee:0058f794:8"]]
- 00b38ff4 ["COPY", "register:0:8", ["register:4048:8"]]
- 00b38ff4 ["INT_ADD", "register:40f0:8", ["const:b38ff4:8", "const:4:8"]]
- 00b38ff4 ["CALLIND", null, ["register:0:8"]]
+ 00b39fe8 ["COPY", "register:0:8", ["register:4048:8"]]
+ 00b39fe8 ["INT_ADD", "register:40f0:8", ["const:b39fe8:8", "const:4:8"]]
+ 00b39fe8 ["CALLIND", null, ["register:0:8"]]
- 00b39020 ["COPY", "register:0:8", ["register:4040:8"]]
- 00b39020 ["INT_ADD", "register:40f0:8", ["const:b39020:8", "const:4:8"]]
- 00b39020 ["CALLIND", null, ["register:0:8"]]
+ 00b3a014 ["COPY", "register:0:8", ["register:4040:8"]]
+ 00b3a014 ["INT_ADD", "register:40f0:8", ["const:b3a014:8", "const:4:8"]]
+ 00b3a014 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-d06bf1772a380abad312fc619af62d88"></a>

### [`00b391b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b391b0.md) → [`00b3a1a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a1a4.md) FUN_00b3a1a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00891164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891164.md) [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) [`00891a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891a64.md) · 呼出先 8件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 3件 [`00892110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892110.md) [`00892308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892308.md) [`00892a10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892a10.md) · 呼出先 8件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.05% / 新版 96.05%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a1e4",
      "incomplete_value": true,
      "site": "00b3a1fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:325:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b391f0",
      "incomplete_value": true,
      "site": "00b39208",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:24e:8"
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
      "00b3a1e4",
      "READ",
      [
        "storage",
        "002af24e",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3a1e4",
      "READ",
      [
        "storage",
        "002af325",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b391d0 ["INT_ADD", "register:40f0:8", ["const:b391d0:8", "const:4:8"]]
- 00b391d0 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3a1c4 ["INT_ADD", "register:40f0:8", ["const:b3a1c4:8", "const:4:8"]]
+ 00b3a1c4 ["CALL", null, ["callee:005891cc:8"]]
- 00b391d8 ["INT_ADD", "register:40f0:8", ["const:b391d8:8", "const:4:8"]]
- 00b391d8 ["CALL", null, ["callee:005894bc:8"]]
+ 00b3a1cc ["INT_ADD", "register:40f0:8", ["const:b3a1cc:8", "const:4:8"]]
+ 00b3a1cc ["CALL", null, ["callee:005894bc:8"]]
- 00b391e4 ["COPY", "tmp:0:8", ["const:24e:8"]]
- 00b391e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b391e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b391e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b3a1d8 ["COPY", "tmp:0:8", ["const:325:8"]]
+ 00b3a1d8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a1d8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a1d8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-64ce322c71de7e6d0545afe5ca29129a"></a>

### [`00b3931c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3931c.md) → [`00b3a310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a310.md) FUN_00b3a310

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`0075d7b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075d/0075d7b4.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`00891164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891164.md) [`00892c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892c50.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 4件 [`0075db64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075d/0075db64.md) [`0076a1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0076a/0076a1b8.md) [`00892110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892110.md) [`00893bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893bfc.md) · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.08% / 新版 95.08%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a354",
      "incomplete_value": true,
      "site": "00b3a36c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d01:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b39360",
      "incomplete_value": true,
      "site": "00b39378",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c36:8"
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
      "00b3a354",
      "READ",
      [
        "storage",
        "002a4c36",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3a354",
      "READ",
      [
        "storage",
        "002a4d01",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b39340 ["INT_ADD", "register:40f0:8", ["const:b39340:8", "const:4:8"]]
- 00b39340 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3a334 ["INT_ADD", "register:40f0:8", ["const:b3a334:8", "const:4:8"]]
+ 00b3a334 ["CALL", null, ["callee:005891cc:8"]]
- 00b39348 ["INT_ADD", "register:40f0:8", ["const:b39348:8", "const:4:8"]]
- 00b39348 ["CALL", null, ["callee:005894bc:8"]]
+ 00b3a33c ["INT_ADD", "register:40f0:8", ["const:b3a33c:8", "const:4:8"]]
+ 00b3a33c ["CALL", null, ["callee:005894bc:8"]]
- 00b39354 ["COPY", "tmp:0:8", ["const:c36:8"]]
- 00b39354 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b39354 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b39354 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b3a348 ["COPY", "tmp:0:8", ["const:d01:8"]]
+ 00b3a348 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a348 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a348 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9f61b9d2127caee81d9b3a37a2bee84f"></a>

### [`00b3944c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3944c.md) → [`00b3a440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a440.md) FUN_00b3a440

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00a9be3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9be3c.md) · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.80% / 新版 91.80%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a47c",
      "incomplete_value": true,
      "site": "00b3a48c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d14:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b39488",
      "incomplete_value": true,
      "site": "00b39498",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c49:8"
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
      "definition_site": "00b3a490",
      "incomplete_value": true,
      "site": "00b3a490",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b3949c",
      "incomplete_value": true,
      "site": "00b3949c",
      "value": [
        "LOAD",
        "8",
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
      "00b3a47c",
      "READ",
      [
        "storage",
        "002a4c49",
        null,
        "string"
      ]
    ],
    [
      "00b3a484",
      "READ",
      [
        "storage",
        "002a4c56",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3a47c",
      "READ",
      [
        "storage",
        "002a4d14",
        null,
        "string"
      ]
    ],
    [
      "00b3a484",
      "READ",
      [
        "storage",
        "002a4d21",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b39470 ["INT_ADD", "register:40f0:8", ["const:b39470:8", "const:4:8"]]
- 00b39470 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3a464 ["INT_ADD", "register:40f0:8", ["const:b3a464:8", "const:4:8"]]
+ 00b3a464 ["CALL", null, ["callee:005891cc:8"]]
- 00b39478 ["INT_ADD", "register:40f0:8", ["const:b39478:8", "const:4:8"]]
- 00b39478 ["CALL", null, ["callee:005894bc:8"]]
+ 00b3a46c ["INT_ADD", "register:40f0:8", ["const:b3a46c:8", "const:4:8"]]
+ 00b3a46c ["CALL", null, ["callee:005894bc:8"]]
- 00b39484 ["COPY", "tmp:0:8", ["const:c49:8"]]
- 00b39484 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b39484 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b39484 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b3a478 ["COPY", "tmp:0:8", ["const:d14:8"]]
+ 00b3a478 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a478 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a478 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-2d59edf76767d49f7d754cab8407b60a"></a>

### [`00b3957c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3957c.md) → [`00b3a570`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a570.md) FUN_00b3a570

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00a9ae48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a9a/00a9ae48.md) · 呼出先 8件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00a9be3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a9b/00a9be3c.md) · 呼出先 8件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.16% / 新版 95.16%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a5b8",
      "incomplete_value": true,
      "site": "00b3a5d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:f2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b395c4",
      "incomplete_value": true,
      "site": "00b395e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:25:8"
              ]
            ]
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
      "00b3a5b8",
      "READ",
      [
        "storage",
        "002ae025",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3a5b8",
      "READ",
      [
        "storage",
        "002ae0f2",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b395a0 ["INT_ADD", "register:40f0:8", ["const:b395a0:8", "const:4:8"]]
- 00b395a0 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3a594 ["INT_ADD", "register:40f0:8", ["const:b3a594:8", "const:4:8"]]
+ 00b3a594 ["CALL", null, ["callee:005891cc:8"]]
- 00b395a8 ["INT_ADD", "register:40f0:8", ["const:b395a8:8", "const:4:8"]]
- 00b395a8 ["CALL", null, ["callee:005894bc:8"]]
+ 00b3a59c ["INT_ADD", "register:40f0:8", ["const:b3a59c:8", "const:4:8"]]
+ 00b3a59c ["CALL", null, ["callee:005894bc:8"]]
- 00b395b4 ["COPY", "tmp:0:8", ["const:25:8"]]
- 00b395b4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b395b4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b395b4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b3a5a8 ["COPY", "tmp:0:8", ["const:f2:8"]]
+ 00b3a5a8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a5a8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a5a8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-e239b19692e103ddcad8485e4edcd7cf"></a>

### [`00b396b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b396b0.md) → [`00b3a6a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a6a4.md) FUN_00b3a6a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) · 呼出先 12件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00894150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894150.md) · 呼出先 12件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.00% / 新版 86.00%

優先判定に残った影響 `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a6f0",
      "incomplete_value": true,
      "site": "00b3a700",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:155:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b396fc",
      "incomplete_value": true,
      "site": "00b3970c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2a6000:8"
              ],
              [
                "leaf",
                "const:ffd:8"
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
      "definition_site": "00b3a704",
      "incomplete_value": true,
      "site": "00b3a714",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b39710",
      "incomplete_value": true,
      "site": "00b39720",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 10,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a6f4",
      "incomplete_value": true,
      "site": "00b3a71c",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b39700",
      "incomplete_value": true,
      "site": "00b39728",
      "value": [
        "LOAD",
        "16",
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
      "00b3a6f0",
      "READ",
      [
        "storage",
        "002a6ffd",
        null,
        "string"
      ]
    ],
    [
      "00b3a6f4",
      "READ",
      [
        "storage",
        "002a7007",
        null,
        "string"
      ]
    ],
    [
      "00b3a704",
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
      "00b3a6f0",
      "READ",
      [
        "storage",
        "002a7155",
        null,
        "string"
      ]
    ],
    [
      "00b3a6f4",
      "READ",
      [
        "storage",
        "002a715f",
        null,
        "string"
      ]
    ],
    [
      "00b3a704",
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
- 00b396d4 ["INT_ADD", "register:40f0:8", ["const:b396d4:8", "const:4:8"]]
- 00b396d4 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3a6c8 ["INT_ADD", "register:40f0:8", ["const:b3a6c8:8", "const:4:8"]]
+ 00b3a6c8 ["CALL", null, ["callee:005891cc:8"]]
- 00b396dc ["INT_ADD", "register:40f0:8", ["const:b396dc:8", "const:4:8"]]
- 00b396dc ["CALL", null, ["callee:005894bc:8"]]
+ 00b3a6d0 ["INT_ADD", "register:40f0:8", ["const:b3a6d0:8", "const:4:8"]]
+ 00b3a6d0 ["CALL", null, ["callee:005894bc:8"]]
- 00b396e8 ["INT_ADD", "register:40f0:8", ["const:b396e8:8", "const:4:8"]]
- 00b396e8 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3a6dc ["INT_ADD", "register:40f0:8", ["const:b3a6dc:8", "const:4:8"]]
+ 00b3a6dc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-647342f491caee7e985113b30b74c53e"></a>

### [`00b3988c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b3988c.md) → [`00b3a880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a880.md) FUN_00b3a880

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00892494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892494.md) [`008931a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008931a4.md) [`008932f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00893/008932f4.md) · 呼出先 11件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 3件 [`00893440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893440.md) [`00894150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/00894150.md) [`008942a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00894/008942a0.md) · 呼出先 11件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3a8c4",
      "incomplete_value": true,
      "site": "00b3a8e4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d82:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b398d0",
      "incomplete_value": true,
      "site": "00b398f0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:ca4:8"
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
      "definition_site": "00b3a8e8",
      "incomplete_value": true,
      "site": "00b3a8f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:56b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b398f4",
      "incomplete_value": true,
      "site": "00b39900",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:48d:8"
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
      "definition_site": "00b3a8f8",
      "incomplete_value": true,
      "site": "00b3a8f8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b39904",
      "incomplete_value": true,
      "site": "00b39904",
      "value": [
        "LOAD",
        "8",
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
      "00b3a8c4",
      "READ",
      [
        "storage",
        "002baca4",
        null,
        "string"
      ]
    ],
    [
      "00b3a8e8",
      "READ",
      [
        "storage",
        "002bb48d",
        null,
        "string"
      ]
    ],
    [
      "00b3a8ec",
      "READ",
      [
        "storage",
        "002bb49a",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3a8c4",
      "READ",
      [
        "storage",
        "002bad82",
        null,
        "string"
      ]
    ],
    [
      "00b3a8e8",
      "READ",
      [
        "storage",
        "002bb56b",
        null,
        "string"
      ]
    ],
    [
      "00b3a8ec",
      "READ",
      [
        "storage",
        "002bb578",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b398b0 ["INT_ADD", "register:40f0:8", ["const:b398b0:8", "const:4:8"]]
- 00b398b0 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3a8a4 ["INT_ADD", "register:40f0:8", ["const:b3a8a4:8", "const:4:8"]]
+ 00b3a8a4 ["CALL", null, ["callee:005891cc:8"]]
- 00b398b8 ["INT_ADD", "register:40f0:8", ["const:b398b8:8", "const:4:8"]]
- 00b398b8 ["CALL", null, ["callee:005894bc:8"]]
+ 00b3a8ac ["INT_ADD", "register:40f0:8", ["const:b3a8ac:8", "const:4:8"]]
+ 00b3a8ac ["CALL", null, ["callee:005894bc:8"]]
- 00b398c4 ["COPY", "tmp:0:8", ["const:ca4:8"]]
- 00b398c4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b398c4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b398c4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b3a8b8 ["COPY", "tmp:0:8", ["const:d82:8"]]
+ 00b3a8b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a8b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b3a8b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9427a34991fca8140f15850b61acde06"></a>

### [`00b39a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39a00.md) → [`00b3a9f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3a9f4.md) FUN_00b3a9f4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0089135c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089135c.md) · 呼出先 14件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md)
- 新版 呼出元 1件 [`00892308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892308.md) · 呼出先 14件 [`0048d1e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1e4.md) [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.74% / 新版 92.74%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3aa40",
      "incomplete_value": true,
      "site": "00b3aa50",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:53b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b39a4c",
      "incomplete_value": true,
      "site": "00b39a5c",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:45d:8"
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
      "definition_site": "00b3aa54",
      "incomplete_value": true,
      "site": "00b3aa54",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b39a60",
      "incomplete_value": true,
      "site": "00b39a60",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b3aa60",
      "incomplete_value": true,
      "site": "00b3aa70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:963:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b39a6c",
      "incomplete_value": true,
      "site": "00b39a7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:894:8"
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
      "00b3aa40",
      "READ",
      [
        "storage",
        "002be45d",
        null,
        "string"
      ]
    ],
    [
      "00b3aa44",
      "READ",
      [
        "storage",
        "002be46b",
        null,
        "string"
      ]
    ],
    [
      "00b3aa60",
      "READ",
      [
        "storage",
        "002b5894",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3aa40",
      "READ",
      [
        "storage",
        "002be53b",
        null,
        "string"
      ]
    ],
    [
      "00b3aa44",
      "READ",
      [
        "storage",
        "002be549",
        null,
        "string"
      ]
    ],
    [
      "00b3aa60",
      "READ",
      [
        "storage",
        "002b5963",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b39bb4 ["INT_ADD", "register:40f0:8", ["const:b39bb4:8", "const:4:8"]]
- 00b39bb4 ["CALL", null, ["callee:00b3c13c:8"]]
+ 00b3aba8 ["INT_ADD", "register:40f0:8", ["const:b3aba8:8", "const:4:8"]]
+ 00b3aba8 ["CALL", null, ["callee:00b3c13c:8"]]
- 00b39a34 ["INT_ADD", "register:40f0:8", ["const:b39a34:8", "const:4:8"]]
- 00b39a34 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3aa28 ["INT_ADD", "register:40f0:8", ["const:b3aa28:8", "const:4:8"]]
+ 00b3aa28 ["CALL", null, ["callee:005891cc:8"]]
- 00b39a3c ["INT_ADD", "register:40f0:8", ["const:b39a3c:8", "const:4:8"]]
- 00b39a3c ["CALL", null, ["callee:005894bc:8"]]
+ 00b3aa30 ["INT_ADD", "register:40f0:8", ["const:b3aa30:8", "const:4:8"]]
+ 00b3aa30 ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-bfb65828afe11e090e04f973c9f1fead"></a>

### [`00b39ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b39/00b39ff0.md) → [`00b3afe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3a/00b3afe4.md) FUN_00b3afe4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00891fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891fb8.md) · 呼出先 12件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00892f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892f64.md) · 呼出先 12件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.85% / 新版 96.85%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3b038",
      "incomplete_value": true,
      "site": "00b3b058",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:5b6:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a044",
      "incomplete_value": true,
      "site": "00b3a064",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:4df:8"
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3b144",
      "incomplete_value": false,
      "site": "00b3b15c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a150",
      "incomplete_value": false,
      "site": "00b3a168",
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
            "const:310:8"
          ]
        ]
      ]
    },
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3b14c",
      "incomplete_value": false,
      "site": "00b3b15c",
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
      "definition_site": "00b3a158",
      "incomplete_value": false,
      "site": "00b3a168",
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
    "ordinal": 10,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b3b038",
      "READ",
      [
        "storage",
        "002b14df",
        null,
        "string"
      ]
    ],
    [
      "00b3b05c",
      "READ",
      [
        "storage",
        "002b3cc5",
        null,
        "string"
      ]
    ],
    [
      "00b3b060",
      "READ",
      [
        "storage",
        "002b3cd2",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3b038",
      "READ",
      [
        "storage",
        "002b15b6",
        null,
        "string"
      ]
    ],
    [
      "00b3b05c",
      "READ",
      [
        "storage",
        "002b3da3",
        null,
        "string"
      ]
    ],
    [
      "00b3b060",
      "READ",
      [
        "storage",
        "002b3db0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3a168 ["INT_ADD", "register:40f0:8", ["const:b3a168:8", "const:4:8"]]
- 00b3a168 ["CALL", null, ["callee:00b3c460:8"]]
+ 00b3b15c ["INT_ADD", "register:40f0:8", ["const:b3b15c:8", "const:4:8"]]
+ 00b3b15c ["CALL", null, ["callee:00b3c460:8"]]
- 00b3a024 ["INT_ADD", "register:40f0:8", ["const:b3a024:8", "const:4:8"]]
- 00b3a024 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3b018 ["INT_ADD", "register:40f0:8", ["const:b3b018:8", "const:4:8"]]
+ 00b3b018 ["CALL", null, ["callee:005891cc:8"]]
- 00b3a02c ["INT_ADD", "register:40f0:8", ["const:b3a02c:8", "const:4:8"]]
- 00b3a02c ["CALL", null, ["callee:005894bc:8"]]
+ 00b3b020 ["INT_ADD", "register:40f0:8", ["const:b3b020:8", "const:4:8"]]
+ 00b3b020 ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-362e49793b9288d36fc9f306c1e66b42"></a>

### [`00b3a48c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a48c.md) → [`00b3b480`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b480.md) FUN_00b3b480

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00891164`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/00891164.md) [`00892c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892c50.md) [`008a4308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4308.md) [`008ad0e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad0e4.md) · 呼出先 10件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 4件 [`00892110`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/00892110.md) [`00893bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/00893bfc.md) [`008a52b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a52b4.md) [`008ae090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae090.md) · 呼出先 10件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3b4cc",
      "incomplete_value": true,
      "site": "00b3b4d8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b3a4d8",
      "incomplete_value": true,
      "site": "00b3a4e4",
      "value": [
        "LOAD",
        "8",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3b4c8",
      "incomplete_value": true,
      "site": "00b3b4e0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a6e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a4d4",
      "incomplete_value": true,
      "site": "00b3a4ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9a3:8"
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
      "definition_site": "00b3b4e4",
      "incomplete_value": true,
      "site": "00b3b4f4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:330:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a4f0",
      "incomplete_value": true,
      "site": "00b3a500",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b3b4c8",
      "READ",
      [
        "storage",
        "002a39a3",
        null,
        "string"
      ]
    ],
    [
      "00b3b4cc",
      "READ",
      [
        "storage",
        "002a39b3",
        null,
        "string"
      ]
    ],
    [
      "00b3b4e4",
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
      "00b3b4c8",
      "READ",
      [
        "storage",
        "002a3a6e",
        null,
        "string"
      ]
    ],
    [
      "00b3b4cc",
      "READ",
      [
        "storage",
        "002a3a7e",
        null,
        "string"
      ]
    ],
    [
      "00b3b4e4",
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
- 00b3a5a4 ["INT_ADD", "register:40f0:8", ["const:b3a5a4:8", "const:4:8"]]
- 00b3a5a4 ["CALL", null, ["callee:00b3c748:8"]]
+ 00b3b598 ["INT_ADD", "register:40f0:8", ["const:b3b598:8", "const:4:8"]]
+ 00b3b598 ["CALL", null, ["callee:00b3c748:8"]]
- 00b3a4b0 ["INT_ADD", "register:40f0:8", ["const:b3a4b0:8", "const:4:8"]]
- 00b3a4b0 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3b4a4 ["INT_ADD", "register:40f0:8", ["const:b3b4a4:8", "const:4:8"]]
+ 00b3b4a4 ["CALL", null, ["callee:005891cc:8"]]
- 00b3a4b8 ["INT_ADD", "register:40f0:8", ["const:b3a4b8:8", "const:4:8"]]
- 00b3a4b8 ["CALL", null, ["callee:005894bc:8"]]
+ 00b3b4ac ["INT_ADD", "register:40f0:8", ["const:b3b4ac:8", "const:4:8"]]
+ 00b3b4ac ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-5c35f76c73dd47234205cc1cd17de69b"></a>

### [`00b3a654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a654.md) → [`00b3b648`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b648.md) FUN_00b3b648

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00892670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00892/00892670.md) [`008a4444`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008a4/008a4444.md) [`008ad220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ad/008ad220.md) · 呼出先 9件 [`00574d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00574/00574d2c.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 3件 [`0089361c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00893/0089361c.md) [`008a53f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008a5/008a53f0.md) [`008ae1cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ae/008ae1cc.md) · 呼出先 9件 [`0057504c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00575/0057504c.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 96.91% / 新版 96.91%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3b748",
      "incomplete_value": false,
      "site": "00b3b754",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:350:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a754",
      "incomplete_value": false,
      "site": "00b3a760",
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
            "const:390:8"
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
      "00b3b694",
      "READ",
      [
        "storage",
        "002a4c5f",
        null,
        "string"
      ]
    ],
    [
      "00b3b748",
      "PARAM",
      [
        "storage",
        "01125390",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00b3b694",
      "READ",
      [
        "storage",
        "002a4d2a",
        null,
        "string"
      ]
    ],
    [
      "00b3b748",
      "PARAM",
      [
        "storage",
        "01126350",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3a760 ["INT_ADD", "register:40f0:8", ["const:b3a760:8", "const:4:8"]]
- 00b3a760 ["CALL", null, ["callee:00b3c748:8"]]
+ 00b3b754 ["INT_ADD", "register:40f0:8", ["const:b3b754:8", "const:4:8"]]
+ 00b3b754 ["CALL", null, ["callee:00b3c748:8"]]
- 00b3a67c ["INT_ADD", "register:40f0:8", ["const:b3a67c:8", "const:4:8"]]
- 00b3a67c ["CALL", null, ["callee:005891cc:8"]]
+ 00b3b670 ["INT_ADD", "register:40f0:8", ["const:b3b670:8", "const:4:8"]]
+ 00b3b670 ["CALL", null, ["callee:005891cc:8"]]
- 00b3a684 ["INT_ADD", "register:40f0:8", ["const:b3a684:8", "const:4:8"]]
- 00b3a684 ["CALL", null, ["callee:005894bc:8"]]
+ 00b3b678 ["INT_ADD", "register:40f0:8", ["const:b3b678:8", "const:4:8"]]
+ 00b3b678 ["CALL", null, ["callee:005894bc:8"]]
~~~


<a id="compare-cf92de612ebe8c7accd1aacc995ce954"></a>

### [`00b3a814`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3a814.md) → [`00b3b808`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b808.md) FUN_00b3b808

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00a06df0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a06/00a06df0.md) · 呼出先 9件 [`00497a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00497/00497a88.md) [`00588eac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00588/00588eac.md) [`00589184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589184.md) [`0058919c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/0058919c.md) [`00589360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589360.md)
- 新版 呼出元 1件 [`00a07d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a07/00a07d9c.md) · 呼出先 9件 [`00497da8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00497/00497da8.md) [`005891cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005891cc.md) [`005894a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894a4.md) [`005894bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/005894bc.md) [`00589680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589680.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 92.68% / 新版 92.68%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3b84c",
      "incomplete_value": true,
      "site": "00b3b85c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:720:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a858",
      "incomplete_value": true,
      "site": "00b3a868",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:6d0:8"
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
      "definition_site": "00b3b860",
      "incomplete_value": true,
      "site": "00b3b874",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:90e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3a86c",
      "incomplete_value": true,
      "site": "00b3a880",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:8ce:8"
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
      "definition_site": "00b3b860",
      "incomplete_value": true,
      "site": "00b3b874",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "00b3a86c",
      "incomplete_value": true,
      "site": "00b3a880",
      "value": [
        "LOAD",
        "16",
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
      "00b3b84c",
      "READ",
      [
        "storage",
        "002c26d0",
        null,
        null
      ]
    ],
    [
      "00b3b860",
      "READ",
      [
        "storage",
        "002a18ce",
        null,
        "string"
      ]
    ],
    [
      "00b3b860",
      "READ",
      [
        "storage",
        "002a18de",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3b84c",
      "READ",
      [
        "storage",
        "002c2720",
        null,
        null
      ]
    ],
    [
      "00b3b860",
      "READ",
      [
        "storage",
        "002a190e",
        null,
        "string"
      ]
    ],
    [
      "00b3b860",
      "READ",
      [
        "storage",
        "002a191e",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3a834 ["INT_ADD", "register:40f0:8", ["const:b3a834:8", "const:4:8"]]
- 00b3a834 ["CALL", null, ["callee:005891cc:8"]]
+ 00b3b828 ["INT_ADD", "register:40f0:8", ["const:b3b828:8", "const:4:8"]]
+ 00b3b828 ["CALL", null, ["callee:005891cc:8"]]
- 00b3a83c ["INT_ADD", "register:40f0:8", ["const:b3a83c:8", "const:4:8"]]
- 00b3a83c ["CALL", null, ["callee:005894bc:8"]]
+ 00b3b830 ["INT_ADD", "register:40f0:8", ["const:b3b830:8", "const:4:8"]]
+ 00b3b830 ["CALL", null, ["callee:005894bc:8"]]
- 00b3a848 ["INT_ADD", "register:40f0:8", ["const:b3a848:8", "const:4:8"]]
- 00b3a848 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b3b83c ["INT_ADD", "register:40f0:8", ["const:b3b83c:8", "const:4:8"]]
+ 00b3b83c ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-7069f507b80b14fb7a5de8246ef5a0a1"></a>

### [`00b3aa00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aa00.md) → [`00b3b9f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3b9f4.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyGetCurrencyBalance

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 2件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3ba1c",
      "incomplete_value": true,
      "site": "00b3ba1c",
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
      "definition_site": "00b3aa28",
      "incomplete_value": true,
      "site": "00b3aa28",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3ba38",
      "incomplete_value": true,
      "site": "00b3ba38",
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
      "definition_site": "00b3aa44",
      "incomplete_value": true,
      "site": "00b3aa44",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b3aa28"
      ],
      [
        "FALL_THROUGH",
        "00b3ba1c"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b3ba1c",
      "incomplete_value": true,
      "site": "00b3ba34",
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
      "definition_site": "00b3aa28",
      "incomplete_value": true,
      "site": "00b3aa40",
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
      "00b3ba18",
      "READ",
      [
        "storage",
        "01125380",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3ba30",
      "READ",
      [
        "storage",
        "01125380",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3ba18",
      "READ",
      [
        "storage",
        "01126340",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3ba30",
      "READ",
      [
        "storage",
        "01126340",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3aa18 ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b3ba0c ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b3aa24 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:380:8"]]
- 00b3aa24 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b3ba18 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:340:8"]]
+ 00b3ba18 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b3aa38 ["INT_ADD", "register:40f0:8", ["const:b3aa38:8", "const:4:8"]]
- 00b3aa38 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b3ba2c ["INT_ADD", "register:40f0:8", ["const:b3ba2c:8", "const:4:8"]]
+ 00b3ba2c ["CALL", null, ["callee:00589cb4:8"]]
~~~


<a id="compare-939086427ae297bca3e79127f86ec3a1"></a>

### [`00b3aad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aad4.md) → [`00b3bac8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bac8.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoySpendCurrency

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0045a0d4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0045a/0045a0d4.md) [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, constant, operands_and_dependencies, store_condition

命令の説明率　旧版 90.48% / 新版 90.48%

優先判定に残った影響 `branch_value` 2件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3baf0",
      "incomplete_value": true,
      "site": "00b3baf0",
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
      "definition_site": "00b3aafc",
      "incomplete_value": true,
      "site": "00b3aafc",
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
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3bb0c",
      "incomplete_value": true,
      "site": "00b3bb0c",
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
      "definition_site": "00b3ab18",
      "incomplete_value": true,
      "site": "00b3ab18",
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
    "guard": [
      [
        "FALL_THROUGH",
        "00b3aafc"
      ],
      [
        "FALL_THROUGH",
        "00b3baf0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00b3baf0",
      "incomplete_value": true,
      "site": "00b3bb08",
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
      "definition_site": "00b3aafc",
      "incomplete_value": true,
      "site": "00b3ab14",
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
      "00b3baec",
      "READ",
      [
        "storage",
        "011253b0",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3bb04",
      "READ",
      [
        "storage",
        "011253b0",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3baec",
      "READ",
      [
        "storage",
        "01126370",
        null,
        "undefined8"
      ]
    ],
    [
      "00b3bb04",
      "READ",
      [
        "storage",
        "01126370",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3aaec ["COPY", "register:40a8:8", ["const:1125000:8"]]
+ 00b3bae0 ["COPY", "register:40a8:8", ["const:1126000:8"]]
- 00b3aaf8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:3b0:8"]]
- 00b3aaf8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b3baec ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:370:8"]]
+ 00b3baec ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00b3ab0c ["INT_ADD", "register:40f0:8", ["const:b3ab0c:8", "const:4:8"]]
- 00b3ab0c ["CALL", null, ["callee:00589cb4:8"]]
+ 00b3bb00 ["INT_ADD", "register:40f0:8", ["const:b3bb00:8", "const:4:8"]]
+ 00b3bb00 ["CALL", null, ["callee:00589cb4:8"]]
~~~


<a id="compare-39a31ec5f9c7f08c7e82f1b256fe18bb"></a>

### [`00b3aba8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aba8.md) → [`00b3bb9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bb9c.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementRequestSuccess

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b8bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00b3c8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c8b0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3bbdc",
      "incomplete_value": true,
      "site": "00b3bbe0",
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
                "register:4000:8"
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
      "definition_site": "00b3abe8",
      "incomplete_value": true,
      "site": "00b3abec",
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
                "register:4000:8"
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
      "definition_site": "00b3bbc8",
      "incomplete_value": false,
      "site": "00b3bbd0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:2b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3abd4",
      "incomplete_value": false,
      "site": "00b3abdc",
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
            "const:2f8:8"
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
      "00b3bbc8",
      "PARAM",
      [
        "storage",
        "011252f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3bbc8",
      "PARAM",
      [
        "storage",
        "011262b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3abdc ["INT_ADD", "register:40f0:8", ["const:b3abdc:8", "const:4:8"]]
- 00b3abdc ["CALL", null, ["callee:00b3c8b0:8"]]
+ 00b3bbd0 ["INT_ADD", "register:40f0:8", ["const:b3bbd0:8", "const:4:8"]]
+ 00b3bbd0 ["CALL", null, ["callee:00b3c8b0:8"]]
- 00b3abcc ["INT_ADD", "register:40f0:8", ["const:b3abcc:8", "const:4:8"]]
- 00b3abcc ["CALL", null, ["callee:00589cb4:8"]]
+ 00b3bbc0 ["INT_ADD", "register:40f0:8", ["const:b3bbc0:8", "const:4:8"]]
+ 00b3bbc0 ["CALL", null, ["callee:00589cb4:8"]]
- 00b3abd0 ["COPY", "register:4000:8", ["const:1125000:8"]]
+ 00b3bbc4 ["COPY", "register:4000:8", ["const:1126000:8"]]
~~~


<a id="compare-dd41f31a092487f21da64e4642d25fba"></a>

### [`00b3ac68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ac68.md) → [`00b3bc5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bc5c.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementRequestFailure

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b8bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00b3c8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c8b0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3bcb8",
      "incomplete_value": true,
      "site": "00b3bcbc",
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
                "register:4000:8"
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
      "definition_site": "00b3acc4",
      "incomplete_value": true,
      "site": "00b3acc8",
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
                "register:4000:8"
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
      "definition_site": "00b3bca4",
      "incomplete_value": false,
      "site": "00b3bcac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:2b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3acb0",
      "incomplete_value": false,
      "site": "00b3acb8",
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
            "const:2f8:8"
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
      "00b3bca4",
      "PARAM",
      [
        "storage",
        "011252f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3bca4",
      "PARAM",
      [
        "storage",
        "011262b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3acb8 ["INT_ADD", "register:40f0:8", ["const:b3acb8:8", "const:4:8"]]
- 00b3acb8 ["CALL", null, ["callee:00b3c8b0:8"]]
+ 00b3bcac ["INT_ADD", "register:40f0:8", ["const:b3bcac:8", "const:4:8"]]
+ 00b3bcac ["CALL", null, ["callee:00b3c8b0:8"]]
- 00b3ac98 ["INT_ADD", "register:40f0:8", ["const:b3ac98:8", "const:4:8"]]
- 00b3ac98 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b3bc8c ["INT_ADD", "register:40f0:8", ["const:b3bc8c:8", "const:4:8"]]
+ 00b3bc8c ["CALL", null, ["callee:00589cb4:8"]]
- 00b3aca8 ["INT_ADD", "register:40f0:8", ["const:b3aca8:8", "const:4:8"]]
- 00b3aca8 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b3bc9c ["INT_ADD", "register:40f0:8", ["const:b3bc9c:8", "const:4:8"]]
+ 00b3bc9c ["CALL", null, ["callee:00589cb4:8"]]
~~~


<a id="compare-bece881b6e23c6bde9ed83cdc4a98671"></a>

### [`00b3ad74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ad74.md) → [`00b3bd68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bd68.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementContentReady

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b8bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00b3c8b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c8b0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3bda8",
      "incomplete_value": true,
      "site": "00b3bdac",
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
                "register:4000:8"
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
      "definition_site": "00b3adb4",
      "incomplete_value": true,
      "site": "00b3adb8",
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
                "register:4000:8"
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
      "definition_site": "00b3bd94",
      "incomplete_value": false,
      "site": "00b3bd9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:2b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3ada0",
      "incomplete_value": false,
      "site": "00b3ada8",
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
            "const:2f8:8"
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
      "00b3bd94",
      "PARAM",
      [
        "storage",
        "011252f8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3bd94",
      "PARAM",
      [
        "storage",
        "011262b8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ada8 ["INT_ADD", "register:40f0:8", ["const:b3ada8:8", "const:4:8"]]
- 00b3ada8 ["CALL", null, ["callee:00b3c8b0:8"]]
+ 00b3bd9c ["INT_ADD", "register:40f0:8", ["const:b3bd9c:8", "const:4:8"]]
+ 00b3bd9c ["CALL", null, ["callee:00b3c8b0:8"]]
- 00b3ad98 ["INT_ADD", "register:40f0:8", ["const:b3ad98:8", "const:4:8"]]
- 00b3ad98 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b3bd8c ["INT_ADD", "register:40f0:8", ["const:b3bd8c:8", "const:4:8"]]
+ 00b3bd8c ["CALL", null, ["callee:00589cb4:8"]]
- 00b3ad9c ["COPY", "register:4000:8", ["const:1125000:8"]]
+ 00b3bd90 ["COPY", "register:4000:8", ["const:1126000:8"]]
~~~


<a id="compare-3457e5e56271ec827623cb94bc804584"></a>

### [`00b3ae34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3ae34.md) → [`00b3be28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3be28.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementShown

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b9c0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00b3c9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c9b4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3be68",
      "incomplete_value": true,
      "site": "00b3be6c",
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
                "register:4000:8"
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
      "definition_site": "00b3ae74",
      "incomplete_value": true,
      "site": "00b3ae78",
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
                "register:4000:8"
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
      "definition_site": "00b3be54",
      "incomplete_value": false,
      "site": "00b3be5c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3ae60",
      "incomplete_value": false,
      "site": "00b3ae68",
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
            "const:310:8"
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
      "00b3be54",
      "PARAM",
      [
        "storage",
        "01125310",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3be54",
      "PARAM",
      [
        "storage",
        "011262d0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ae68 ["INT_ADD", "register:40f0:8", ["const:b3ae68:8", "const:4:8"]]
- 00b3ae68 ["CALL", null, ["callee:00b3c9b4:8"]]
+ 00b3be5c ["INT_ADD", "register:40f0:8", ["const:b3be5c:8", "const:4:8"]]
+ 00b3be5c ["CALL", null, ["callee:00b3c9b4:8"]]
- 00b3ae58 ["INT_ADD", "register:40f0:8", ["const:b3ae58:8", "const:4:8"]]
- 00b3ae58 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b3be4c ["INT_ADD", "register:40f0:8", ["const:b3be4c:8", "const:4:8"]]
+ 00b3be4c ["CALL", null, ["callee:00589cb4:8"]]
- 00b3ae5c ["COPY", "register:4000:8", ["const:1125000:8"]]
+ 00b3be50 ["COPY", "register:4000:8", ["const:1126000:8"]]
~~~


<a id="compare-dad53d7c7c082ded3bd1efa35cd50f8e"></a>

### [`00b3aef4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3a/00b3aef4.md) → [`00b3bee8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3b/00b3bee8.md) Java_jp_co_ponos_battlecats_TapjoyImplementation_onTapjoyPlacementDismissed

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00589994`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00589/00589994.md) [`00b3b9c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3b9c0.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00589cb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00589/00589cb4.md) [`00b3c9b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3c9b4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.19% / 新版 89.19%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00b3bf28",
      "incomplete_value": true,
      "site": "00b3bf2c",
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
                "register:4000:8"
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
      "definition_site": "00b3af34",
      "incomplete_value": true,
      "site": "00b3af38",
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
                "register:4000:8"
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
      "definition_site": "00b3bf14",
      "incomplete_value": false,
      "site": "00b3bf1c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:1126000:8"
          ],
          [
            "leaf",
            "const:2d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3af20",
      "incomplete_value": false,
      "site": "00b3af28",
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
            "const:310:8"
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
      "00b3bf14",
      "PARAM",
      [
        "storage",
        "01125310",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b3bf14",
      "PARAM",
      [
        "storage",
        "011262d0",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3af28 ["INT_ADD", "register:40f0:8", ["const:b3af28:8", "const:4:8"]]
- 00b3af28 ["CALL", null, ["callee:00b3c9b4:8"]]
+ 00b3bf1c ["INT_ADD", "register:40f0:8", ["const:b3bf1c:8", "const:4:8"]]
+ 00b3bf1c ["CALL", null, ["callee:00b3c9b4:8"]]
- 00b3af18 ["INT_ADD", "register:40f0:8", ["const:b3af18:8", "const:4:8"]]
- 00b3af18 ["CALL", null, ["callee:00589cb4:8"]]
+ 00b3bf0c ["INT_ADD", "register:40f0:8", ["const:b3bf0c:8", "const:4:8"]]
+ 00b3bf0c ["CALL", null, ["callee:00589cb4:8"]]
- 00b3af1c ["COPY", "register:4000:8", ["const:1125000:8"]]
+ 00b3bf10 ["COPY", "register:4000:8", ["const:1126000:8"]]
~~~


<a id="compare-43c9638428d8326b18998ff9f959599a"></a>

### [`00b3bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bac4.md) → [`00b3cab8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cab8.md) _INIT_273

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`0058ccc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0058c/0058ccc0.md) [`0089132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00891/0089132c.md) [`00b38fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b38/00b38fa4.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`0058cfe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0058c/0058cfe0.md) [`008922d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00892/008922d8.md) [`00b39f98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b39/00b39f98.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_call_alignment

命令の説明率　旧版 72.60% / 新版 72.60%

優先判定に残った影響 `store_destination` 8件, `store_value` 5件, `unresolved_call_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3caf4",
      "incomplete_value": true,
      "site": "00b3cb10",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3bb00",
      "incomplete_value": true,
      "site": "00b3bb1c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3cb18",
      "incomplete_value": true,
      "site": "00b3cb34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3bb24",
      "incomplete_value": true,
      "site": "00b3bb40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3cbb4",
      "incomplete_value": true,
      "site": "00b3cbf8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3bbc0",
      "incomplete_value": true,
      "site": "00b3bc04",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b3caf4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b3cb18",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b3cb38",
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
      "00b3caf4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b3cb18",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b3cb38",
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
- 00b3baec ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b3cae0 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b3baf0 ["COPY", "tmp:0:8", ["const:2e0:8"]]
- 00b3baf0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b3baf0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b3baf0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b3cae4 ["COPY", "tmp:0:8", ["const:2a0:8"]]
+ 00b3cae4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b3cae4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b3cae4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
- 00b3baf8 ["COPY", "register:4048:8", ["const:2b7000:8"]]
~~~


<a id="compare-b05459d34398dda5b2eeff6a4db70d57"></a>

### [`00b3c008`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c008.md) → [`00b3cffc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cffc.md) _INIT_274

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
      "definition_site": "00b3d038",
      "incomplete_value": true,
      "site": "00b3d054",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3c044",
      "incomplete_value": true,
      "site": "00b3c060",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3d05c",
      "incomplete_value": true,
      "site": "00b3d078",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3c068",
      "incomplete_value": true,
      "site": "00b3c084",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3d07c",
      "incomplete_value": true,
      "site": "00b3d098",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3c088",
      "incomplete_value": true,
      "site": "00b3c0a4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b3d038",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b3d05c",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b3d07c",
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
      "00b3d038",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b3d05c",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b3d07c",
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
- 00b3c23c ["INT_ADD", "register:40f0:8", ["const:b3c23c:8", "const:4:8"]]
- 00b3c23c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b3d230 ["INT_ADD", "register:40f0:8", ["const:b3d230:8", "const:4:8"]]
+ 00b3d230 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b3c030 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b3d024 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b3c034 ["COPY", "tmp:0:8", ["const:3c0:8"]]
- 00b3c034 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b3c034 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b3c034 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b3d028 ["COPY", "tmp:0:8", ["const:380:8"]]
+ 00b3d028 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b3d028 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b3d028 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-131db24460d18d5d766d158f36495ca5"></a>

### [`00b3c504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c504.md) → [`00b3d4f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d4f8.md) FUN_00b3d4f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`00b3c3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c3a8.md) [`00b3c760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3c760.md) · 呼出先 6件 [`0046db40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58470.md) [`00c58480`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58480.md)
- 新版 呼出元 2件 [`00b3d39c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d39c.md) [`00b3d754`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3d754.md) · 呼出先 6件 [`0046de60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de60.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59440`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59440.md) [`00c59450`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59450.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.78% / 新版 97.78%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3d544",
      "incomplete_value": true,
      "site": "00b3d544",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "00b3c550",
      "incomplete_value": true,
      "site": "00b3c550",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b3d524",
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
      "00b3d524",
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
- 00b3c528 ["COPY", "tmp:0:8", ["const:dc9:8"]]
- 00b3c528 ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
- 00b3c528 ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
- 00b3c528 ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
+ 00b3d51c ["COPY", "tmp:0:8", ["const:e98:8"]]
+ 00b3d51c ["INT_CARRY", "register:105:1", ["register:4050:8", "tmp:0:8"]]
+ 00b3d51c ["INT_SCARRY", "register:106:1", ["register:4050:8", "tmp:0:8"]]
+ 00b3d51c ["INT_ADD", "tmp:1:8", ["register:4050:8", "tmp:0:8"]]
- 00b3c560 ["INT_ADD", "register:40f0:8", ["const:b3c560:8", "const:4:8"]]
- 00b3c560 ["CALL", null, ["callee:00c59440:8"]]
+ 00b3d554 ["INT_ADD", "register:40f0:8", ["const:b3d554:8", "const:4:8"]]
+ 00b3d554 ["CALL", null, ["callee:00c59440:8"]]
- 00b3c570 ["INT_ADD", "register:40f0:8", ["const:b3c570:8", "const:4:8"]]
- 00b3c570 ["CALL", null, ["callee:00c58f50:8"]]
+ 00b3d564 ["INT_ADD", "register:40f0:8", ["const:b3d564:8", "const:4:8"]]
+ 00b3d564 ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-6eded13564bbcfdaecfe516acc16268a"></a>

### [`00b3cb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3c/00b3cb74.md) → [`00b3db68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3d/00b3db68.md) FUN_00b3db68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 8件 [`006714ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00671/006714ec.md) [`0067a3e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067a/0067a3e4.md) [`0085b488`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b488.md) [`008d1a7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008d1/008d1a7c.md) [`00926604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00926/00926604.md) · 呼出先 16件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0082e378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082e378.md)
- 新版 呼出元 8件 [`0067189c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00671/0067189c.md) [`0067a794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067a/0067a794.md) [`0085c434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c434.md) [`008d2a28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008d2/008d2a28.md) [`009275b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00927/009275b0.md) · 呼出先 16件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0082f324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0082f/0082f324.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 90.33% / 新版 90.33%

優先判定に残った影響 `call_argument_candidate` 14件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3dd5c",
      "incomplete_value": true,
      "site": "00b3dd5c",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:552:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3cd68",
      "incomplete_value": true,
      "site": "00b3cd68",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2be000:8"
              ],
              [
                "leaf",
                "const:474:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 41,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3de74",
      "incomplete_value": true,
      "site": "00b3de88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:107:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3ce80",
      "incomplete_value": true,
      "site": "00b3ce94",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 51,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3dea4",
      "incomplete_value": false,
      "site": "00b3dec4",
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
      "definition_site": "00b3ceb0",
      "incomplete_value": false,
      "site": "00b3ced0",
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
    "ordinal": 23,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "00b3dbb8",
      "DATA",
      [
        "storage",
        "00c74750",
        null,
        "pointer"
      ]
    ],
    [
      "00b3dbec",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "00b3dc0c",
      "READ",
      [
        "storage",
        "002bacb9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3dbb8",
      "DATA",
      [
        "storage",
        "00c75720",
        null,
        "pointer"
      ]
    ],
    [
      "00b3dbec",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b3dc0c",
      "READ",
      [
        "storage",
        "002bad97",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3ced0 ["INT_ADD", "register:40f0:8", ["const:b3ced0:8", "const:4:8"]]
- 00b3ced0 ["CALL", null, ["callee:0047ec3c:8"]]
+ 00b3dec4 ["INT_ADD", "register:40f0:8", ["const:b3dec4:8", "const:4:8"]]
+ 00b3dec4 ["CALL", null, ["callee:0047ec3c:8"]]
- 00b3d020 ["INT_ADD", "register:40f0:8", ["const:b3d020:8", "const:4:8"]]
- 00b3d020 ["CALL", null, ["callee:00c58ef0:8"]]
+ 00b3e014 ["INT_ADD", "register:40f0:8", ["const:b3e014:8", "const:4:8"]]
+ 00b3e014 ["CALL", null, ["callee:00c58ef0:8"]]
- 00b3d05c ["INT_ADD", "register:40f0:8", ["const:b3d05c:8", "const:4:8"]]
- 00b3d05c ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b3e050 ["INT_ADD", "register:40f0:8", ["const:b3e050:8", "const:4:8"]]
+ 00b3e050 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-ca822b8f878a9943c28d4e824f008b7c"></a>

### [`00b3d1c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3d/00b3d1c4.md) → [`00b3e1b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3e/00b3e1b8.md) _INIT_275

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 87.57% / 新版 87.57%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3e1f4",
      "incomplete_value": true,
      "site": "00b3e210",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3d200",
      "incomplete_value": true,
      "site": "00b3d21c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3e294",
      "incomplete_value": true,
      "site": "00b3e2b0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3d2a0",
      "incomplete_value": true,
      "site": "00b3d2bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3e3e8",
      "incomplete_value": false,
      "site": "00b3e3ec",
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
      "definition_site": "00b3d3f4",
      "incomplete_value": false,
      "site": "00b3d3f8",
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
      "00b3e1f4",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b3e218",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b3e238",
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
      "00b3e1f4",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b3e218",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b3e238",
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
- 00b3d3f8 ["INT_ADD", "register:40f0:8", ["const:b3d3f8:8", "const:4:8"]]
- 00b3d3f8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b3e3ec ["INT_ADD", "register:40f0:8", ["const:b3e3ec:8", "const:4:8"]]
+ 00b3e3ec ["CALL", null, ["callee:00c58ed0:8"]]
- 00b3d1ec ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b3e1e0 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b3d1f0 ["COPY", "tmp:0:8", ["const:3d8:8"]]
- 00b3d1f0 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b3d1f0 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b3d1f0 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b3e1e4 ["COPY", "tmp:0:8", ["const:398:8"]]
+ 00b3e1e4 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b3e1e4 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b3e1e4 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-5788261fbb3d94a31c8f34d4dde0d663"></a>

### [`00b3e1d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e1d4.md) → [`00b3f1c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f1c8.md) FUN_00b3f1c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00a95838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a95/00a95838.md) [`00b3e870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e870.md) [`00b3f580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f580.md) · 呼出先 16件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006f1618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f1618.md) [`00727a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727a28.md) [`00727d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00727/00727d74.md) [`00731464`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00731/00731464.md)
- 新版 呼出元 3件 [`00a9682c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a96/00a9682c.md) [`00b3f864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f864.md) [`00b40574`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40574.md) · 呼出先 16件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006f19c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f1/006f19c8.md) [`00727dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00727/00727dd8.md) [`00728124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00728/00728124.md) [`00731814`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00731/00731814.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 98.90% / 新版 98.90%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3f218",
      "value": [
        "leaf",
        "ram:b3efa8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3e224",
      "value": [
        "leaf",
        "ram:b3dfb4:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b3f2f8",
      "incomplete_value": true,
      "site": "00b3f300",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:728:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3e304",
      "incomplete_value": true,
      "site": "00b3e30c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:758:8"
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
      "00b3f218",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b3dfb4"
      ]
    ],
    [
      "00b3f2f8",
      "READ",
      [
        "storage",
        "00c9b758",
        null,
        "pointer"
      ]
    ],
    [
      "00b3f2f8",
      "PARAM",
      [
        "storage",
        "011237d0",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "00b3f218",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00b3efa8"
      ]
    ],
    [
      "00b3f2f8",
      "READ",
      [
        "storage",
        "00c9c728",
        null,
        "pointer"
      ]
    ],
    [
      "00b3f2f8",
      "PARAM",
      [
        "storage",
        "01124790",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3e224 ["INT_ADD", "register:40f0:8", ["const:b3e224:8", "const:4:8"]]
- 00b3e224 ["CALL", null, ["ram:b3dfb4:8"]]
+ 00b3f218 ["INT_ADD", "register:40f0:8", ["const:b3f218:8", "const:4:8"]]
+ 00b3f218 ["CALL", null, ["ram:b3efa8:8"]]
- 00b3e30c ["INT_ADD", "register:40f0:8", ["const:b3e30c:8", "const:4:8"]]
- 00b3e30c ["CALL", null, ["callee:0087fac4:8"]]
+ 00b3f300 ["INT_ADD", "register:40f0:8", ["const:b3f300:8", "const:4:8"]]
+ 00b3f300 ["CALL", null, ["callee:0087fac4:8"]]
- 00b3e1f8 ["INT_ADD", "register:40f0:8", ["const:b3e1f8:8", "const:4:8"]]
- 00b3e1f8 ["CALL", null, ["callee:008524fc:8"]]
+ 00b3f1ec ["INT_ADD", "register:40f0:8", ["const:b3f1ec:8", "const:4:8"]]
+ 00b3f1ec ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-60a4f68ccf823b0fefe36f1be5cc993d"></a>

### [`00b3e5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e5d8.md) → [`00b3f5cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f5cc.md) FUN_00b3f5cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 14件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b204b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b20/00b204b8.md) · 呼出先 14件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c8c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 88.51% / 新版 88.51%

優先判定に残った影響 `store_value` 3件, `unresolved_store_alignment` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3f60c",
      "incomplete_value": false,
      "site": "00b3f618",
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
      "definition_site": "00b3e618",
      "incomplete_value": false,
      "site": "00b3e624",
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
      "definition_site": "00b3f630",
      "incomplete_value": true,
      "site": "00b3f630",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:449:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3e63c",
      "incomplete_value": true,
      "site": "00b3e63c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2f1:8"
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
      "definition_site": "00b3f634",
      "incomplete_value": true,
      "site": "00b3f634",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b3e640",
      "incomplete_value": true,
      "site": "00b3e640",
      "value": [
        "LOAD",
        "8",
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
      "00b3f618",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "00b3f620",
      "READ",
      [
        "storage",
        "002a82f1",
        null,
        "string"
      ]
    ],
    [
      "00b3f628",
      "READ",
      [
        "storage",
        "002a82f8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3f618",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "00b3f620",
      "READ",
      [
        "storage",
        "002a8449",
        null,
        "string"
      ]
    ],
    [
      "00b3f628",
      "READ",
      [
        "storage",
        "002a8450",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3e610 ["INT_ADD", "register:40f0:8", ["const:b3e610:8", "const:4:8"]]
- 00b3e610 ["CALL", null, ["callee:00488180:8"]]
+ 00b3f604 ["INT_ADD", "register:40f0:8", ["const:b3f604:8", "const:4:8"]]
+ 00b3f604 ["CALL", null, ["callee:00488180:8"]]
- 00b3e614 ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 00b3f608 ["COPY", "register:4040:8", ["const:c65000:8"]]
- 00b3e618 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 00b3e618 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b3e618 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b3e618 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b3f60c ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 00b3f60c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b3f60c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b3f60c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-9cef8139f9a1b924c031acbc33506282"></a>

### [`00b3e870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3e/00b3e870.md) → [`00b3f864`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3f/00b3f864.md) FUN_00b3f864

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 22件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md)
- 新版 呼出元 3件 [`00678cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00678/00678cd0.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`009258c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00925/009258c8.md) · 呼出先 22件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00493168`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00493/00493168.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 98.33% / 新版 98.33%

優先判定に残った影響 `call_argument_candidate` 1件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3fb9c",
      "incomplete_value": true,
      "site": "00b3fbb4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:89d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3eba8",
      "incomplete_value": true,
      "site": "00b3ebc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:85d:8"
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
      "definition_site": "00b3fbb8",
      "incomplete_value": true,
      "site": "00b3fbb8",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00b3ebc4",
      "incomplete_value": true,
      "site": "00b3ebc4",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 32,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b3fba4",
      "incomplete_value": true,
      "site": "00b3fbc0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3ebb0",
      "incomplete_value": true,
      "site": "00b3ebcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b3f8b8",
      "READ",
      [
        "storage",
        "00c9b760",
        null,
        "pointer"
      ]
    ],
    [
      "00b3f8b8",
      "PARAM",
      [
        "storage",
        "011237e8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b3fb9c",
      "READ",
      [
        "storage",
        "0029f85d",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b3f8b8",
      "READ",
      [
        "storage",
        "00c9c730",
        null,
        "pointer"
      ]
    ],
    [
      "00b3f8b8",
      "PARAM",
      [
        "storage",
        "011247a8",
        null,
        "undefined1"
      ]
    ],
    [
      "00b3fb9c",
      "READ",
      [
        "storage",
        "0029f89d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3e8cc ["INT_ADD", "register:40f0:8", ["const:b3e8cc:8", "const:4:8"]]
- 00b3e8cc ["CALL", null, ["callee:0087fac4:8"]]
+ 00b3f8c0 ["INT_ADD", "register:40f0:8", ["const:b3f8c0:8", "const:4:8"]]
+ 00b3f8c0 ["CALL", null, ["callee:0087fac4:8"]]
- 00b3e8b4 ["INT_ADD", "register:40f0:8", ["const:b3e8b4:8", "const:4:8"]]
- 00b3e8b4 ["CALL", null, ["callee:008524fc:8"]]
+ 00b3f8a8 ["INT_ADD", "register:40f0:8", ["const:b3f8a8:8", "const:4:8"]]
+ 00b3f8a8 ["CALL", null, ["callee:008524fc:8"]]
- 00b3e8b8 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 00b3f8ac ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-574e1e2c3a94764a612eb71169e0eaba"></a>

### [`00b3f8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f8a0.md) → [`00b40894`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40894.md) FUN_00b40894

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
      "definition_site": "00b408a8",
      "incomplete_value": false,
      "site": "00b408ac",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:588:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3f8b4",
      "incomplete_value": false,
      "site": "00b3f8b8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
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
      "00b408ac",
      "DATA",
      [
        "storage",
        "00c8f5b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b408ac",
      "DATA",
      [
        "storage",
        "00c90588",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3f8ac ["INT_ADD", "register:40f0:8", ["const:b3f8ac:8", "const:4:8"]]
- 00b3f8ac ["CALL", null, ["callee:00c58f30:8"]]
+ 00b408a0 ["INT_ADD", "register:40f0:8", ["const:b408a0:8", "const:4:8"]]
+ 00b408a0 ["CALL", null, ["callee:00c58f30:8"]]
- 00b3f8b0 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b408a4 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b3f8b4 ["COPY", "tmp:0:8", ["const:5b8:8"]]
- 00b3f8b4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f8b4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f8b4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b408a8 ["COPY", "tmp:0:8", ["const:588:8"]]
+ 00b408a8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b408a8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b408a8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2503427110b6dd4b3e253bc99a1b2c14"></a>

### [`00b3f8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f8c4.md) → [`00b408b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b408b8.md) FUN_00b408b8

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
      "definition_site": "00b408bc",
      "incomplete_value": false,
      "site": "00b408c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:588:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3f8c8",
      "incomplete_value": false,
      "site": "00b3f8cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:5b8:8"
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
      "00b408c0",
      "DATA",
      [
        "storage",
        "00c8f5b8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b408c0",
      "DATA",
      [
        "storage",
        "00c90588",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3f8c4 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b408b8 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b3f8c8 ["COPY", "tmp:0:8", ["const:5b8:8"]]
- 00b3f8c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f8c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b3f8c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b408bc ["COPY", "tmp:0:8", ["const:588:8"]]
+ 00b408bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b408bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b408bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ba8b879eff51cc2a0769934f2b6d1b61"></a>

### [`00b3f8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3f8dc.md) → [`00b408d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b408d0.md) FUN_00b408d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "00b40900",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00b3f90c",
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
      "00b40900",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "00b40900",
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
- 00b3f90c ["INT_ADD", "register:40f0:8", ["const:b3f90c:8", "const:4:8"]]
- 00b3f90c ["CALL", null, ["ram:47ad34:8"]]
+ 00b40900 ["INT_ADD", "register:40f0:8", ["const:b40900:8", "const:4:8"]]
+ 00b40900 ["CALL", null, ["ram:47b054:8"]]
- 00b3f908 ["INT_ADD", "register:40f0:8", ["const:b3f908:8", "const:4:8"]]
- 00b3f908 ["CALL", null, ["callee:008ba17c:8"]]
+ 00b408fc ["INT_ADD", "register:40f0:8", ["const:b408fc:8", "const:4:8"]]
+ 00b408fc ["CALL", null, ["callee:008ba17c:8"]]
- 00b3f92c ["INT_ADD", "register:40f0:8", ["const:b3f92c:8", "const:4:8"]]
- 00b3f92c ["CALL", null, ["callee:008524fc:8"]]
+ 00b40920 ["INT_ADD", "register:40f0:8", ["const:b40920:8", "const:4:8"]]
+ 00b40920 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-a4bb83a1633ee92f8d1ce8ad167f96cf"></a>

### [`00b3fa24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3fa24.md) → [`00b40a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40a18.md) FUN_00b40a18

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
      "definition_site": "00b40a3c",
      "incomplete_value": false,
      "site": "00b40a3c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:608:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3fa48",
      "incomplete_value": false,
      "site": "00b3fa48",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:638:8"
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
      "00b40a3c",
      "DATA",
      [
        "storage",
        "00c8f638",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b40a3c",
      "DATA",
      [
        "storage",
        "00c90608",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3fa38 ["INT_ADD", "register:40f0:8", ["const:b3fa38:8", "const:4:8"]]
- 00b3fa38 ["CALL", null, ["callee:00c58f30:8"]]
+ 00b40a2c ["INT_ADD", "register:40f0:8", ["const:b40a2c:8", "const:4:8"]]
+ 00b40a2c ["CALL", null, ["callee:00c58f30:8"]]
- 00b3fa40 ["COPY", "register:4040:8", ["const:c8f000:8"]]
+ 00b40a34 ["COPY", "register:4040:8", ["const:c90000:8"]]
- 00b3fa44 ["COPY", "tmp:0:8", ["const:638:8"]]
- 00b3fa44 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00b3fa44 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00b3fa44 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 00b40a38 ["COPY", "tmp:0:8", ["const:608:8"]]
+ 00b40a38 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 00b40a38 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 00b40a38 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-87c10379683ed979d29f5180726c7d8a"></a>

### [`00b3fa58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3fa58.md) → [`00b40a4c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40a4c.md) FUN_00b40a4c

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
      "definition_site": "00b40a58",
      "incomplete_value": false,
      "site": "00b40a58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c90000:8"
          ],
          [
            "leaf",
            "const:608:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3fa64",
      "incomplete_value": false,
      "site": "00b3fa64",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c8f000:8"
          ],
          [
            "leaf",
            "const:638:8"
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
      "00b40a58",
      "DATA",
      [
        "storage",
        "00c8f638",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "00b40a58",
      "DATA",
      [
        "storage",
        "00c90608",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3fa5c ["COPY", "register:4048:8", ["const:c8f000:8"]]
+ 00b40a50 ["COPY", "register:4048:8", ["const:c90000:8"]]
- 00b3fa60 ["COPY", "tmp:0:8", ["const:638:8"]]
- 00b3fa60 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00b3fa60 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00b3fa60 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00b40a54 ["COPY", "tmp:0:8", ["const:608:8"]]
+ 00b40a54 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00b40a54 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00b40a54 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-bac46fbead0b6c0e9514dd790ee3df17"></a>

### [`00b3fa74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3fa74.md) → [`00b40a68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40a68.md) FUN_00b40a68

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`008b92f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92f0.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`0048ae90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048ae90.md) [`008ba29c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba29c.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 87.50% / 新版 87.50%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b40aac",
      "incomplete_value": true,
      "site": "00b40ac4",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
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
                "const:a38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3fab8",
      "incomplete_value": true,
      "site": "00b3fad0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:a78:8"
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
      "definition_site": "00b40ab8",
      "incomplete_value": false,
      "site": "00b40ac4",
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
      "definition_site": "00b3fac4",
      "incomplete_value": false,
      "site": "00b3fad0",
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
      "definition_site": "00b40abc",
      "incomplete_value": false,
      "site": "00b40ac4",
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
            "const:f08:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b3fac8",
      "incomplete_value": false,
      "site": "00b3fad0",
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
            "const:f38:8"
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
      "00b40aac",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40ab8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00b40abc",
      "PARAM",
      [
        "storage",
        "00c65f38",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00b40aac",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "00b40ab8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00b40abc",
      "PARAM",
      [
        "storage",
        "00c66f08",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b3fad0 ["INT_ADD", "register:40f0:8", ["const:b3fad0:8", "const:4:8"]]
- 00b3fad0 ["CALL", null, ["callee:00c596b0:8"]]
+ 00b40ac4 ["INT_ADD", "register:40f0:8", ["const:b40ac4:8", "const:4:8"]]
+ 00b40ac4 ["CALL", null, ["callee:00c596b0:8"]]
- 00b3fb00 ["INT_ADD", "register:40f0:8", ["const:b3fb00:8", "const:4:8"]]
- 00b3fb00 ["CALL", null, ["callee:00c596b0:8"]]
+ 00b40af4 ["INT_ADD", "register:40f0:8", ["const:b40af4:8", "const:4:8"]]
+ 00b40af4 ["CALL", null, ["callee:00c596b0:8"]]
- 00b3faa8 ["INT_ADD", "register:40f0:8", ["const:b3faa8:8", "const:4:8"]]
- 00b3faa8 ["CALL", null, ["callee:00467e8c:8"]]
+ 00b40a9c ["INT_ADD", "register:40f0:8", ["const:b40a9c:8", "const:4:8"]]
+ 00b40a9c ["CALL", null, ["callee:00467e8c:8"]]
~~~


<a id="compare-ba710eb98cd4282b34bf25af8c470e58"></a>

### [`00b3fb7c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3f/00b3fb7c.md) → [`00b40b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40b70.md) _INIT_276

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 85.88% / 新版 85.88%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00b40bac",
      "incomplete_value": true,
      "site": "00b40bc8",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "00b3fbb8",
      "incomplete_value": true,
      "site": "00b3fbd4",
      "value": [
        "LOAD",
        "16",
        [
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
      "definition_site": "00b40bd0",
      "incomplete_value": true,
      "site": "00b40bec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3fbdc",
      "incomplete_value": true,
      "site": "00b3fbf8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b40bf0",
      "incomplete_value": true,
      "site": "00b40c0c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00b3fbfc",
      "incomplete_value": true,
      "site": "00b3fc18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00b40bac",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00b40bd0",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00b40bf0",
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
      "00b40bac",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "00b40bd0",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "00b40bf0",
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
- 00b3fdb0 ["INT_ADD", "register:40f0:8", ["const:b3fdb0:8", "const:4:8"]]
- 00b3fdb0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 00b40da4 ["INT_ADD", "register:40f0:8", ["const:b40da4:8", "const:4:8"]]
+ 00b40da4 ["CALL", null, ["callee:00c58ed0:8"]]
- 00b3fba4 ["COPY", "register:4098:8", ["const:1125000:8"]]
+ 00b40b98 ["COPY", "register:4098:8", ["const:1126000:8"]]
- 00b3fba8 ["COPY", "tmp:0:8", ["const:3f0:8"]]
- 00b3fba8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00b3fba8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00b3fba8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 00b40b9c ["COPY", "tmp:0:8", ["const:3b0:8"]]
+ 00b40b9c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 00b40b9c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 00b40b9c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-1da2f4356537eaf7b8ac854500cb2f03"></a>

### [`00b40000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40000.md) → [`00b40ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b40/00b40ff4.md) _ZN8firebase9analytics8internal10FutureData3GetEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ad80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad80.md) · 呼出先 0件 
- 新版 呼出元 1件 [`00c5bd50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd50.md) · 呼出先 0件 

変更の種類 constant, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "00b40ffc",
      "incomplete_value": true,
      "site": "00b41000",
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
      "definition_site": "00b40008",
      "incomplete_value": true,
      "site": "00b4000c",
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
      "00b40ff8",
      "READ",
      [
        "storage",
        "00c9b770",
        null,
        "pointer"
      ]
    ],
    [
      "00b40ffc",
      "READ",
      [
        "storage",
        "01125428",
        "firebase::analytics::internal::FutureData::s_future_data_",
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "00b40ff8",
      "READ",
      [
        "storage",
        "00c9c740",
        null,
        "pointer"
      ]
    ],
    [
      "00b40ffc",
      "READ",
      [
        "storage",
        "011263e8",
        "firebase::analytics::internal::FutureData::s_future_data_",
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40000 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 00b40ff4 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 00b40004 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:770:8"]]
- 00b40004 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b40ff8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:740:8"]]
+ 00b40ff8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e94f721b76ae44ac2413c2ba1a395f40"></a>

### [`00b40010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40010.md) → [`00b41004`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41004.md) _ZN8firebase9analytics8internal36RegisterTerminateOnDefaultAppDestroyEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5adc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5adc0.md) · 呼出先 5件 [`00b4041c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4041c.md) [`00c5aca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5aca0.md) [`00c5acc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acc0.md) [`00c5acd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5acd0.md) [`00c5ad30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ad30.md)
- 新版 呼出元 1件 [`00c5bd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd90.md) · 呼出先 5件 [`00b41410`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41410.md) [`00c5bc70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc70.md) [`00c5bc90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bc90.md) [`00c5bca0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bca0.md) [`00c5bd00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bd00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 89.47% / 新版 89.47%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41018",
      "incomplete_value": true,
      "site": "00b4101c",
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
      "definition_site": "00b40024",
      "incomplete_value": true,
      "site": "00b40028",
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
      "00b41014",
      "READ",
      [
        "storage",
        "00c9b778",
        null,
        "pointer"
      ]
    ],
    [
      "00b41018",
      "READ",
      [
        "storage",
        "00ca4700",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ],
    [
      "00b41018",
      "PARAM",
      [
        "storage",
        "002a8301",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00b41014",
      "READ",
      [
        "storage",
        "00c9c748",
        null,
        "pointer"
      ]
    ],
    [
      "00b41018",
      "READ",
      [
        "storage",
        "00ca56d0",
        "firebase::analytics::internal::kAnalyticsModuleName",
        "pointer"
      ]
    ],
    [
      "00b41018",
      "PARAM",
      [
        "storage",
        "002a8459",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40028 ["INT_ADD", "register:40f0:8", ["const:b40028:8", "const:4:8"]]
- 00b40028 ["CALL", null, ["callee:00c5bc70:8"]]
+ 00b4101c ["INT_ADD", "register:40f0:8", ["const:b4101c:8", "const:4:8"]]
+ 00b4101c ["CALL", null, ["callee:00c5bc70:8"]]
- 00b4001c ["COPY", "register:4098:8", ["const:c9b000:8"]]
+ 00b41010 ["COPY", "register:4098:8", ["const:c9c000:8"]]
- 00b40020 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:778:8"]]
- 00b40020 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
+ 00b41014 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:748:8"]]
+ 00b41014 ["LOAD", "register:4098:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d7105375dbe46f6e0297236df296ba82"></a>

### [`00b40348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40348.md) → [`00b4133c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b4133c.md) _ZNKSt6__ndk120__vector_base_commonILb1EE20__throw_length_errorEv

根拠 `symbol` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00c5ade0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5ade0.md) · 呼出先 1件 [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md)
- 新版 呼出元 1件 [`00c5bdb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5bdb0.md) · 呼出先 1件 [`00b41350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41350.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41348",
      "incomplete_value": false,
      "site": "00b4134c",
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
      "definition_site": "00b40354",
      "incomplete_value": false,
      "site": "00b40358",
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
      "00b41348",
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
      "00b41348",
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
- 00b40358 ["INT_ADD", "register:40f0:8", ["const:b40358:8", "const:4:8"]]
- 00b40358 ["CALL", null, ["callee:00b41350:8"]]
+ 00b4134c ["INT_ADD", "register:40f0:8", ["const:b4134c:8", "const:4:8"]]
+ 00b4134c ["CALL", null, ["callee:00b41350:8"]]
- 00b40350 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 00b41344 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 00b40354 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 00b40354 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00b40354 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00b40354 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00b41348 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 00b41348 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41348 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00b41348 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-2b46b31ccb96e3bba28c1a1786aebd20"></a>

### [`00b4035c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b4035c.md) → [`00b41350`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b41350.md) FUN_00b41350

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 11件 [`00b40348`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b40348.md) [`00bb8424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8424.md) [`00bb8638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8638.md) [`00bb8778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb8778.md) [`00bb88b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00bb8/00bb88b8.md) · 呼出先 4件 [`00b403ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b40/00b403ac.md) [`00c37d68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37d68.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)
- 新版 呼出元 11件 [`00b4133c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b4133c.md) [`00bb9418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb9/00bb9418.md) [`00bb962c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb9/00bb962c.md) [`00bb976c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb9/00bb976c.md) [`00bb98ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00bb9/00bb98ac.md) · 呼出先 4件 [`00b413a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b41/00b413a0.md) [`00c38d5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38d5c.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b4137c",
      "incomplete_value": true,
      "site": "00b41388",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b40388",
      "incomplete_value": true,
      "site": "00b40394",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00b41380",
      "incomplete_value": true,
      "site": "00b41388",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c38:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00b4038c",
      "incomplete_value": true,
      "site": "00b40394",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "00b4137c",
      "READ",
      [
        "storage",
        "00c9ac60",
        null,
        "pointer"
      ]
    ],
    [
      "00b4137c",
      "PARAM",
      [
        "storage",
        "00c968a8",
        "std::length_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00b41380",
      "READ",
      [
        "storage",
        "00c9ac68",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "00b4137c",
      "READ",
      [
        "storage",
        "00c9bc30",
        null,
        "pointer"
      ]
    ],
    [
      "00b4137c",
      "PARAM",
      [
        "storage",
        "00c97878",
        "std::length_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00b41380",
      "READ",
      [
        "storage",
        "00c9bc38",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 00b40394 ["INT_ADD", "register:40f0:8", ["const:b40394:8", "const:4:8"]]
- 00b40394 ["CALL", null, ["callee:00c58fb0:8"]]
+ 00b41388 ["INT_ADD", "register:40f0:8", ["const:b41388:8", "const:4:8"]]
+ 00b41388 ["CALL", null, ["callee:00c58fb0:8"]]
- 00b40370 ["INT_ADD", "register:40f0:8", ["const:b40370:8", "const:4:8"]]
- 00b40370 ["CALL", null, ["callee:00c58f90:8"]]
+ 00b41364 ["INT_ADD", "register:40f0:8", ["const:b41364:8", "const:4:8"]]
+ 00b41364 ["CALL", null, ["callee:00c58f90:8"]]
- 00b4037c ["INT_ADD", "register:40f0:8", ["const:b4037c:8", "const:4:8"]]
- 00b4037c ["CALL", null, ["callee:00b413a0:8"]]
+ 00b41370 ["INT_ADD", "register:40f0:8", ["const:b41370:8", "const:4:8"]]
+ 00b41370 ["CALL", null, ["callee:00b413a0:8"]]
~~~


