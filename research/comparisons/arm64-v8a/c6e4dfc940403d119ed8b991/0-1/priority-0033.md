# v16.0.1 → v16.0.2 · 最優先の変更候補 (33)

[一覧の目次](README.md)

<a id="compare-a7cd13afb8f214dd619298f69a6bf545"></a>

### [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) → [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) FUN_006bbcf0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`006788e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00678/006788e0.md) [`00700af8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00700/00700af8.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) [`009248c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00924/009248c8.md) · 呼出先 105件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0043e828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e828.md) [`0043e94c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043e/0043e94c.md) [`0043f438`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043f/0043f438.md)
- 新版 呼出元 4件 [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 105件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.69% / 新版 71.69%

優先判定に残った影響 `call_argument_candidate` 63件, `call_target` 2件, `store_condition` 50件, `store_value` 1件, `unresolved_branch_alignment` 49件, `unresolved_call_alignment` 141件, `unresolved_store_alignment` 163件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006be1bc",
      "incomplete_value": false,
      "site": "006be1bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:2f0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006be164",
      "incomplete_value": false,
      "site": "006be164",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:220:8"
          ]
        ]
      ]
    },
    "ordinal": 372,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006bc1b0",
      "incomplete_value": true,
      "site": "006bc1b0",
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
      "definition_site": "006bc158",
      "incomplete_value": true,
      "site": "006bc158",
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
    "ordinal": 43,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006bbe9c",
      "incomplete_value": false,
      "site": "006bbea4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a8000:8"
          ],
          [
            "leaf",
            "const:f2b:8"
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
      "unmatched:006bbde0",
      "WRITE",
      [
        "storage",
        "Stack[-0x208]",
        null,
        null
      ]
    ],
    [
      "unmatched:006bbde4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006bbe50"
      ]
    ],
    [
      "006bbe70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006bc5e8"
      ]
    ]
  ],
  "added": [
    [
      "006bbe38",
      "WRITE",
      [
        "storage",
        "Stack[-0x208]",
        null,
        null
      ]
    ],
    [
      "006bbe3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006bbe50"
      ]
    ],
    [
      "006bbe70",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006bc148"
      ]
    ]
  ]
}
~~~


~~~diff
- 006bbe6c ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 006bbe6c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006bbe6c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006bbe6c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 006bbec4 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 006bbec4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006bbec4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006bbec4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 006bbea4 ["INT_ADD", "register:40f0:8", ["const:6bbea4:8", "const:4:8"]]
- 006bbea4 ["CALL", null, ["callee:0043de18:8"]]
+ 006bbefc ["INT_ADD", "register:40f0:8", ["const:6bbefc:8", "const:4:8"]]
+ 006bbefc ["CALL", null, ["callee:0043de18:8"]]
- 006bbec4 ["INT_ADD", "register:40f0:8", ["const:6bbec4:8", "const:4:8"]]
- 006bbec4 ["CALL", null, ["callee:0048ce94:8"]]
+ 006bbf1c ["INT_ADD", "register:40f0:8", ["const:6bbf1c:8", "const:4:8"]]
+ 006bbf1c ["CALL", null, ["callee:0048ce94:8"]]
~~~


<a id="compare-a328f3a71fa9d15fd143d49a388823df"></a>

### [`006be9ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006be9ec.md) → [`006bea44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bea44.md) FUN_006bea44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 5件 [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`006c00a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c00a8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57e50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e50.md) [`00c57e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e70.md)
- 新版 呼出元 2件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 5件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006c0100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0100.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)

変更の種類 branch_condition_or_target, branch_value, call, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 25.64% / 新版 25.64%

優先判定に残った影響 `store_destination` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 7件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006bea54",
      "incomplete_value": false,
      "site": "006bea54",
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
      "definition_site": "006be9fc",
      "incomplete_value": false,
      "site": "006be9fc",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006bea58",
      "incomplete_value": true,
      "site": "006bea58",
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
      "definition_site": "006bea00",
      "incomplete_value": true,
      "site": "006bea00",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006bea50",
      "READ",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "006bea54",
      "WRITE",
      [
        "storage",
        "00ca4968",
        null,
        "undefined8"
      ]
    ],
    [
      "006bea70",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "006bea50",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "006bea54",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "006bea70",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 006be9fc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:968:8"]]
- 006be9fc ["COPY", "tmp:1:8", ["const:0:8"]]
- 006be9fc ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 006bea54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
+ 006bea54 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 006bea54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 006bea54 ["COPY", "register:4010:8", ["const:c62000:8"]]
- 006bea58 ["COPY", "tmp:0:8", ["const:f90:8"]]
- 006bea58 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 006bea58 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 006bea58 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
~~~


<a id="compare-5223c9e500d44e17f15b222257bc553d"></a>

### [`006bea88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006bea88.md) → [`006beae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006beae0.md) FUN_006beae0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) · 呼出先 4件 [`0067686c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/0067686c.md) [`00744208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/00744208.md) [`0074423c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00744/0074423c.md) [`0085cefc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085c/0085cefc.md)
- 新版 呼出元 1件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) · 呼出先 4件 [`006768ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/006768ac.md) [`00744260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744260.md) [`00744294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00744/00744294.md) [`0085cf54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085cf54.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 81.46% / 新版 81.46%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006beb60",
      "DATA",
      [
        "storage",
        "003c7c70",
        null,
        "qword"
      ]
    ],
    [
      "unmatched:006beb38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006bec10"
      ]
    ],
    [
      "unmatched:006beb94",
      "DATA",
      [
        "storage",
        "00333974",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "006beb60",
      "DATA",
      [
        "storage",
        "003c7c70",
        null,
        "dword"
      ]
    ],
    [
      "006beb90",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006bec10"
      ]
    ],
    [
      "006bebec",
      "DATA",
      [
        "storage",
        "00333974",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 006beaa8 ["INT_ADD", "register:40f0:8", ["const:6beaa8:8", "const:4:8"]]
- 006beaa8 ["CALL", null, ["callee:006768ac:8"]]
+ 006beb00 ["INT_ADD", "register:40f0:8", ["const:6beb00:8", "const:4:8"]]
+ 006beb00 ["CALL", null, ["callee:006768ac:8"]]
- 006beaac ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
- 006beaac ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006beaac ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006beaac ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 006beb04 ["INT_RIGHT", "tmp:0:4", ["register:4000:4", "const:0:4"]]
+ 006beb04 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006beb04 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006beb04 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 006beab8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006beab8 ["CBRANCH", null, ["local:b39:8", "tmp:0:1"]]
+ 006beb10 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006beb10 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
~~~


<a id="compare-99ead12f6ec78c1b327084f90fe80184"></a>

### [`006bece4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006bece4.md) → [`006bed3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bed3c.md) FUN_006bed3c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) · 呼出先 0件 
- 新版 呼出元 1件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006bed44 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006bed44 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 006bed9c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006bed9c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
~~~


<a id="compare-5105feabbaa8d9df9977468201ea01f4"></a>

### [`006bed5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006bed5c.md) → [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) FUN_006bedb4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) · 呼出先 24件 [`005e48ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e48ac.md) [`005e4e18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e4/005e4e18.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md) [`006c001c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c001c.md) [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md)
- 新版 呼出元 1件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) · 呼出先 24件 [`005e48ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e48ec.md) [`005e4e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4e58.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`006c0074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0074.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 54.08% / 新版 54.08%

優先判定に残った影響 `call_argument_candidate` 9件, `call_target` 1件, `store_value` 2件, `unresolved_call_alignment` 28件, `unresolved_store_alignment` 67件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006bf444",
      "incomplete_value": true,
      "site": "006bf45c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:dd0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bf3ec",
      "incomplete_value": true,
      "site": "006bf404",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 74,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006bf460",
      "incomplete_value": true,
      "site": "006bf470",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:760:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bf408",
      "incomplete_value": true,
      "site": "006bf418",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 75,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006befc8",
      "incomplete_value": true,
      "site": "006befe4",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:22b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 25,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006bed60",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006bed64",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006bed68",
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
      "006bedb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006bedbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006bedc0",
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
- 006befe4 ["INT_ADD", "register:40f0:8", ["const:6befe4:8", "const:4:8"]]
- 006befe4 ["CALL", null, ["callee:00878f30:8"]]
+ 006bf03c ["INT_ADD", "register:40f0:8", ["const:6bf03c:8", "const:4:8"]]
+ 006bf03c ["CALL", null, ["callee:00878f30:8"]]
+ 006befe4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:e0:8"]]
+ 006befe4 ["COPY", "tmp:1:4", ["const:0:4"]]
+ 006befe4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
- 006bf000 ["INT_ADD", "register:40f0:8", ["const:6bf000:8", "const:4:8"]]
- 006bf000 ["CALL", null, ["callee:00c5a900:8"]]
+ 006bf058 ["INT_ADD", "register:40f0:8", ["const:6bf058:8", "const:4:8"]]
+ 006bf058 ["CALL", null, ["callee:00c5a900:8"]]
~~~


<a id="compare-c131b14ba2955809cf7d6a29ba63ebc6"></a>

### [`006bf630`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bf/006bf630.md) → [`006bf688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bf/006bf688.md) FUN_006bf688

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 6件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`00720090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00720/00720090.md) [`0088c870`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0088c/0088c870.md) [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 6件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.18% / 新版 91.18%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bf6c0",
      "incomplete_value": true,
      "site": "006bf6c8",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "006bf6c4",
      "incomplete_value": false,
      "site": "006bf6c8",
      "value": [
        "leaf",
        "const:4:8"
      ]
    },
    "old": null,
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
      "unmatched:006bf664",
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
      "006bf6bc",
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
- 006bf670 ["INT_ADD", "register:40f0:8", ["const:6bf670:8", "const:4:8"]]
- 006bf670 ["CALL", null, ["callee:00c5a900:8"]]
+ 006bf6c8 ["INT_ADD", "register:40f0:8", ["const:6bf6c8:8", "const:4:8"]]
+ 006bf6c8 ["CALL", null, ["callee:00c5a900:8"]]
- 006bf660 ["COPY", "tmp:0:4", ["const:0:4"]]
- 006bf660 ["COPY", "tmp:1:4", ["tmp:0:4"]]
- 006bf660 ["INT_ADD", "register:40a0:8", ["register:40a0:8", "const:8:8"]]
- 006bf660 ["STORE", null, ["const:1b1:8", "register:40a0:8", "tmp:1:4"]]
- 006bf664 ["COPY", "tmp:0:8", ["register:8:8"]]
- 006bf664 ["COPY", "tmp:1:4", ["const:0:4"]]
- 006bf664 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
~~~


<a id="compare-641782d45bd64b94ba386c201f20ee51"></a>

### [`006bf6e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bf/006bf6e0.md) → [`006bf738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bf/006bf738.md) FUN_006bf738

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`006bbc98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bb/006bbc98.md) [`00720090`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00720/00720090.md) [`0090dcfc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0090d/0090dcfc.md) [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) [`00aa3e24`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aa3/00aa3e24.md) · 呼出先 3件 [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c5a830`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a830.md) [`00c5a840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c5a/00c5a840.md)
- 新版 呼出元 5件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`007200e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00720/007200e8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) [`00aa3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00aa3/00aa3e94.md) · 呼出先 3件 [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c5a900`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a900.md) [`00c5a910`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a910.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bf770",
      "incomplete_value": true,
      "site": "006bf778",
      "value": [
        "live",
        "register:8:8"
      ]
    },
    "old": {
      "definition_site": "006bf718",
      "incomplete_value": true,
      "site": "006bf720",
      "value": [
        "INT_SUB",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bf780",
      "incomplete_value": true,
      "site": "006bf78c",
      "value": [
        "live",
        "register:8:8"
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
      "unmatched:006bf714",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006bf730",
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
      "006bf76c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006bf788",
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
- 006bf720 ["INT_ADD", "register:40f0:8", ["const:6bf720:8", "const:4:8"]]
- 006bf720 ["CALL", null, ["callee:00c5a900:8"]]
+ 006bf778 ["INT_ADD", "register:40f0:8", ["const:6bf778:8", "const:4:8"]]
+ 006bf778 ["CALL", null, ["callee:00c5a900:8"]]
- 006bf734 ["INT_ADD", "register:40f0:8", ["const:6bf734:8", "const:4:8"]]
- 006bf734 ["CALL", null, ["callee:00c5a910:8"]]
+ 006bf78c ["INT_ADD", "register:40f0:8", ["const:6bf78c:8", "const:4:8"]]
+ 006bf78c ["CALL", null, ["callee:00c5a910:8"]]
- 006bf714 ["COPY", "tmp:0:8", ["register:8:8"]]
- 006bf714 ["COPY", "tmp:1:4", ["const:0:4"]]
- 006bf714 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:4"]]
~~~


<a id="compare-28c09cdf254bf1b7bfd7619e1a7f9c17"></a>

### [`006bf88c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006bf/006bf88c.md) → [`006bf8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bf/006bf8e4.md) FUN_006bf8e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`00679800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00679/00679800.md) [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) [`009259d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00925/009259d0.md) · 呼出先 10件 [`00467afc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467afc.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00467ffc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ffc.md)
- 新版 呼出元 4件 [`00679840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00679/00679840.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) [`00925a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00925/00925a24.md) · 呼出先 10件 [`00467b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b3c.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.81% / 新版 62.81%

優先判定に残った影響 `call_argument_candidate` 16件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 24件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006bf938",
      "incomplete_value": true,
      "site": "006bf94c",
      "value": [
        "live",
        "register:40c0:8"
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
      "definition_site": "006bf93c",
      "incomplete_value": false,
      "site": "006bf94c",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006bf940",
      "incomplete_value": false,
      "site": "006bf94c",
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
      "006bf91c",
      "READ",
      [
        "storage",
        "00c9ab68",
        null,
        "pointer"
      ]
    ],
    [
      "006bf930",
      "READ",
      [
        "storage",
        "00ca4c94",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:006bf9d8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ]
  ],
  "added": [
    [
      "006bf91c",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "006bf930",
      "READ",
      [
        "storage",
        "00ca4d94",
        null,
        "undefined4"
      ]
    ],
    [
      "006bfa30",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ]
  ]
}
~~~


~~~diff
- 006bf94c ["INT_ADD", "register:40f0:8", ["const:6bf94c:8", "const:4:8"]]
- 006bf94c ["CALL", null, ["callee:00467b6c:8"]]
+ 006bf9a4 ["INT_ADD", "register:40f0:8", ["const:6bf9a4:8", "const:4:8"]]
+ 006bf9a4 ["CALL", null, ["callee:00467b6c:8"]]
- 006bfacc ["INT_ADD", "register:40f0:8", ["const:6bfacc:8", "const:4:8"]]
- 006bfacc ["CALL", null, ["callee:0046cb4c:8"]]
+ 006bfb24 ["INT_ADD", "register:40f0:8", ["const:6bfb24:8", "const:4:8"]]
+ 006bfb24 ["CALL", null, ["callee:0046cb4c:8"]]
+ 006bfacc ["INT_MULT", "tmp:0:4", ["register:40c8:4", "register:40a0:4"]]
+ 006bfacc ["INT_ZEXT", "register:4048:8", ["tmp:0:4"]]
~~~


<a id="compare-fb3916eb21b0d9ba61ab385c2ea195b8"></a>

### [`006c00a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c00a8.md) → [`006c0100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0100.md) FUN_006c0100

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`006be9ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006be/006be9ec.md) [`00851a0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/00851a0c.md) · 呼出先 7件 [`0048ab30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab30.md) [`0048ab38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048a/0048ab38.md) [`006c02c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c02c0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 2件 [`006bea44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bea44.md) [`00851a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851a64.md) · 呼出先 7件 [`0048ab70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab70.md) [`0048ab78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048a/0048ab78.md) [`006c0318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0318.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.94% / 新版 91.94%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006c0120",
      "incomplete_value": true,
      "site": "006c0124",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "006c01c0",
      "incomplete_value": true,
      "site": "006c01c4",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "006c0244",
      "incomplete_value": true,
      "site": "006c0248",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:006c00dc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c0230"
      ]
    ],
    [
      "unmatched:006c01f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c01f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c0264"
      ]
    ]
  ],
  "added": [
    [
      "006c0134",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c0230"
      ]
    ],
    [
      "006c024c",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "006c0250",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c0264"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c0124 ["INT_ADD", "register:40f0:8", ["const:6c0124:8", "const:4:8"]]
- 006c0124 ["CALL", null, ["callee:0048ab78:8"]]
+ 006c017c ["INT_ADD", "register:40f0:8", ["const:6c017c:8", "const:4:8"]]
+ 006c017c ["CALL", null, ["callee:0048ab78:8"]]
- 006c01c4 ["INT_ADD", "register:40f0:8", ["const:6c01c4:8", "const:4:8"]]
- 006c01c4 ["CALL", null, ["callee:00c57f50:8"]]
+ 006c021c ["INT_ADD", "register:40f0:8", ["const:6c021c:8", "const:4:8"]]
+ 006c021c ["CALL", null, ["callee:00c57f50:8"]]
- 006c0248 ["INT_ADD", "register:40f0:8", ["const:6c0248:8", "const:4:8"]]
- 006c0248 ["CALL", null, ["callee:00c57f50:8"]]
+ 006c02a0 ["INT_ADD", "register:40f0:8", ["const:6c02a0:8", "const:4:8"]]
+ 006c02a0 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-cb5c805408f5ad3a1e44c31a107447e5"></a>

### [`006c02c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c02c0.md) → [`006c0318`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0318.md) FUN_006c0318

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006c00a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c00a8.md) · 呼出先 3件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006c0100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0100.md) · 呼出先 3件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 69.77% / 新版 69.77%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c0378",
      "incomplete_value": true,
      "site": "006c037c",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "006c034c",
      "incomplete_value": true,
      "site": "006c0350",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006c0308"
      ],
      [
        "FALL_THROUGH",
        "006c0360"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006c0360",
      "incomplete_value": true,
      "site": "006c0364",
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
      "definition_site": "006c0308",
      "incomplete_value": true,
      "site": "006c030c",
      "value": [
        "BOOL_NEGATE",
        "1",
        [
          [
            "live",
            "register:101:1"
          ]
        ]
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
      "unmatched:006c02c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c02c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c02d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c0340"
      ]
    ]
  ],
  "added": [
    [
      "006c0318",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006c031c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006c032c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c0340"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c0324 ["INT_ADD", "register:40f0:8", ["const:6c0324:8", "const:4:8"]]
- 006c0324 ["CALL", null, ["callee:00494650:8"]]
+ 006c037c ["INT_ADD", "register:40f0:8", ["const:6c037c:8", "const:4:8"]]
+ 006c037c ["CALL", null, ["callee:00494650:8"]]
- 006c0350 ["INT_ADD", "register:40f0:8", ["const:6c0350:8", "const:4:8"]]
- 006c0350 ["CALL", null, ["callee:00c57f80:8"]]
+ 006c03a8 ["INT_ADD", "register:40f0:8", ["const:6c03a8:8", "const:4:8"]]
+ 006c03a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 006c0350 ["COPY", "register:4040:8", ["register:40a0:8"]]
~~~


<a id="compare-5b662af016174a64a9acda18087120b3"></a>

### [`006c0370`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0370.md) → [`006c03c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c03c8.md) FUN_006c03c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 11.11% / 新版 11.11%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006c0370",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c037c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "unmatched:006c0388",
      "DATA",
      [
        "storage",
        "00c76220",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006c03c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006c03d4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c57f60"
      ]
    ],
    [
      "006c03e0",
      "DATA",
      [
        "storage",
        "00c762f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c0370 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006c0370 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006c0370 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 006c0370 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006c0374 ["COPY", "register:40e8:8", ["register:8:8"]]
- 006c0378 ["COPY", "register:4000:8", ["const:10:8"]]
~~~


<a id="compare-43ce33669feaaad4c5b03ab37598c14e"></a>

### [`006c0394`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0394.md) → [`006c03ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c03ec.md) FUN_006c03ec

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
      "unmatched:006c039c",
      "DATA",
      [
        "storage",
        "00c76220",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006c03f4",
      "DATA",
      [
        "storage",
        "00c762f0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c0394 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006c0398 ["COPY", "tmp:0:8", ["const:220:8"]]
- 006c0398 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006c0398 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006c0398 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006c039c ["COPY", "tmp:0:8", ["register:4008:8"]]
- 006c039c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-4b220dc8eb3050af4af0ab12deab110d"></a>

### [`006c03ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c03ac.md) → [`006c0404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0404.md) FUN_006c0404

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 17件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 49.83% / 新版 49.83%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `store_value` 2件, `unresolved_branch_alignment` 19件, `unresolved_call_alignment` 24件, `unresolved_store_alignment` 29件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c058c",
      "incomplete_value": true,
      "site": "006c059c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:383:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006c0534",
      "incomplete_value": true,
      "site": "006c0544",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3d0:8"
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
      "definition_site": "006c05a0",
      "incomplete_value": true,
      "site": "006c05a0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006c0548",
      "incomplete_value": true,
      "site": "006c0548",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 18,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006c0430",
      "incomplete_value": true,
      "site": "006c0438",
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
    "ordinal": 6,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006c03b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c03b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c03b8",
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
      "006c0408",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006c040c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006c0410",
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
- 006c03e0 ["INT_ADD", "register:40f0:8", ["const:6c03e0:8", "const:4:8"]]
- 006c03e0 ["CALL", null, ["callee:00851550:8"]]
+ 006c0438 ["INT_ADD", "register:40f0:8", ["const:6c0438:8", "const:4:8"]]
+ 006c0438 ["CALL", null, ["callee:00851550:8"]]
- 006c0438 ["INT_ADD", "register:40f0:8", ["const:6c0438:8", "const:4:8"]]
- 006c0438 ["CALL", null, ["callee:0066892c:8"]]
+ 006c0490 ["INT_ADD", "register:40f0:8", ["const:6c0490:8", "const:4:8"]]
+ 006c0490 ["CALL", null, ["callee:0066892c:8"]]
- 006c0470 ["INT_ADD", "register:40f0:8", ["const:6c0470:8", "const:4:8"]]
- 006c0470 ["CALL", null, ["callee:0047ce14:8"]]
+ 006c04c8 ["INT_ADD", "register:40f0:8", ["const:6c04c8:8", "const:4:8"]]
+ 006c04c8 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-662e5853c4857ece129e3c9a1e9d77fb"></a>

### [`006c097c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c097c.md) → [`006c09d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c09d4.md) _INIT_108

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
      "definition_site": "006c0a10",
      "incomplete_value": true,
      "site": "006c0a2c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006c09b8",
      "incomplete_value": true,
      "site": "006c09d4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006c0a34",
      "incomplete_value": true,
      "site": "006c0a50",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006c09dc",
      "incomplete_value": true,
      "site": "006c09f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006c0a54",
      "incomplete_value": true,
      "site": "006c0a70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006c09fc",
      "incomplete_value": true,
      "site": "006c0a18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "006c0a10",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "006c0a34",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "006c0a54",
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
      "006c0a10",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006c0a34",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006c0a54",
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
- 006c0a50 ["COPY", "tmp:0:8", ["const:f5d:8"]]
- 006c0a50 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006c0a50 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006c0a50 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006c0aa8 ["COPY", "tmp:0:8", ["const:f10:8"]]
+ 006c0aa8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006c0aa8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006c0aa8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006c0a70 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 006c0a70 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006c0a70 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006c0a70 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006c0ac8 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 006c0ac8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006c0ac8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006c0ac8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006c0adc ["INT_ADD", "register:40f0:8", ["const:6c0adc:8", "const:4:8"]]
- 006c0adc ["CALL", null, ["callee:0043b838:8"]]
+ 006c0b34 ["INT_ADD", "register:40f0:8", ["const:6c0b34:8", "const:4:8"]]
+ 006c0b34 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-859a6472fc1668d73f2d41b1782dc2c3"></a>

### [`006c0f20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0f20.md) → [`006c0f78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f78.md) FUN_006c0f78

根拠 `leaf_bytes_and_unique_code_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 2件 [`006e5d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e5d70.md) [`00814bf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00814/00814bf8.md) · 呼出先 0件 
- 新版 呼出元 2件 [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) [`00814c50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00814/00814c50.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-fa615c6d90d1b1d513698e3089e9aede"></a>

### [`006c119c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c1/006c119c.md) → [`006c11f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c1/006c11f4.md) FUN_006c11f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 10件 [`0064be88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064b/0064be88.md) [`006acaec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ac/006acaec.md) [`006c43e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c43e4.md) [`006e7c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e7/006e7c40.md) [`006e9e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e9/006e9e64.md) · 呼出先 12件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md) [`0046bd54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046b/0046bd54.md) [`0046e7a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e7a0.md)
- 新版 呼出元 10件 [`0064bec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064bec8.md) [`006acb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006acb44.md) [`006c443c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c443c.md) [`006e7c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e7c98.md) [`006e9ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e9ebc.md) · 呼出先 12件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`0046bd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046b/0046bd94.md) [`0046e7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e7e0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.05% / 新版 93.05%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c1370",
      "incomplete_value": true,
      "site": "006c1388",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c136c",
      "incomplete_value": true,
      "site": "006c1388",
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
                "register:40d8:4"
              ],
              [
                "live",
                "register:40d0:4"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 5
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c1368",
      "incomplete_value": true,
      "site": "006c1388",
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
    "old": null,
    "ordinal": 10,
    "slot": 7
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006c11a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c11a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c11a8",
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
      "006c11f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006c11fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006c1200",
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
- 006c1330 ["INT_ADD", "register:40f0:8", ["const:6c1330:8", "const:4:8"]]
- 006c1330 ["CALL", null, ["callee:00469c44:8"]]
+ 006c1388 ["INT_ADD", "register:40f0:8", ["const:6c1388:8", "const:4:8"]]
+ 006c1388 ["CALL", null, ["callee:00469c44:8"]]
- 006c1388 ["INT_SEXT", "tmp:0:8", ["register:4040:4"]]
- 006c1388 ["INT_SEXT", "tmp:1:8", ["register:40b8:4"]]
- 006c1388 ["INT_MULT", "register:4040:8", ["tmp:0:8", "tmp:1:8"]]
- 006c119c ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-8d7b2a3f8fad93b51a0d5593601a4e72"></a>

### [`006c2018`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c2/006c2018.md) → [`006c2070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c2/006c2070.md) FUN_006c2070

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) [`008ef9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef9f4.md) [`008f5be4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f5/008f5be4.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 10件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006c1d88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c1/006c1d88.md) [`006c1e14`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c1/006c1e14.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 6件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) [`008f5c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5c38.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006c1de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c1/006c1de0.md) [`006c1e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c1/006c1e6c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.25% / 新版 99.25%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c2180",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c2128",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "006c2334",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c22dc",
      "value": [
        "leaf",
        "ram:47acf4:8"
      ]
    },
    "ordinal": 14,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006c2180",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006c2334",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006c2180",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006c2334",
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
- 006c2128 ["INT_ADD", "register:40f0:8", ["const:6c2128:8", "const:4:8"]]
- 006c2128 ["CALL", null, ["ram:47acf4:8"]]
+ 006c2180 ["INT_ADD", "register:40f0:8", ["const:6c2180:8", "const:4:8"]]
+ 006c2180 ["CALL", null, ["ram:47ad34:8"]]
- 006c22dc ["INT_ADD", "register:40f0:8", ["const:6c22dc:8", "const:4:8"]]
- 006c22dc ["CALL", null, ["ram:47acf4:8"]]
+ 006c2334 ["INT_ADD", "register:40f0:8", ["const:6c2334:8", "const:4:8"]]
+ 006c2334 ["CALL", null, ["ram:47ad34:8"]]
- 006c20b8 ["INT_ADD", "register:40f0:8", ["const:6c20b8:8", "const:4:8"]]
- 006c20b8 ["CALL", null, ["callee:00851550:8"]]
+ 006c2110 ["INT_ADD", "register:40f0:8", ["const:6c2110:8", "const:4:8"]]
+ 006c2110 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-1910ebeeffdeac694b6da1345b9b472b"></a>

### [`006c3278`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c3/006c3278.md) → [`006c32d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c32d0.md) FUN_006c32d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 10件 [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) [`006c30bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c3/006c30bc.md) [`006c30f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c3/006c30f0.md) [`006c3118`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c3/006c3118.md) [`006c31b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c3/006c31b4.md) · 呼出先 12件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 10件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006c3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3114.md) [`006c3148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3148.md) [`006c3170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3170.md) [`006c320c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c320c.md) · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.39% / 新版 96.39%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c36c0",
      "incomplete_value": true,
      "site": "006c36d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006c3668",
      "incomplete_value": true,
      "site": "006c3678",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ee8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 59,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c36d8",
      "incomplete_value": true,
      "site": "006c36e4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006c3680",
      "incomplete_value": true,
      "site": "006c368c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 62,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c353c",
      "incomplete_value": false,
      "site": "006c3554",
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
    "old": {
      "definition_site": "006c34e4",
      "incomplete_value": false,
      "site": "006c34fc",
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
            "const:f90:8"
          ]
        ]
      ]
    },
    "ordinal": 14,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006c340c",
      "READ",
      [
        "storage",
        "00c9aca0",
        null,
        "pointer"
      ]
    ],
    [
      "006c3464",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "006c3474",
      "PARAM",
      [
        "storage",
        "00ca4f00",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006c340c",
      "READ",
      [
        "storage",
        "00c9ad70",
        null,
        "pointer"
      ]
    ],
    [
      "006c3464",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006c3474",
      "PARAM",
      [
        "storage",
        "00ca5000",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c34a4 ["INT_ADD", "register:40f0:8", ["const:6c34a4:8", "const:4:8"]]
- 006c34a4 ["CALL", null, ["callee:00c57f50:8"]]
+ 006c34fc ["INT_ADD", "register:40f0:8", ["const:6c34fc:8", "const:4:8"]]
+ 006c34fc ["CALL", null, ["callee:00c57f50:8"]]
- 006c34fc ["INT_ADD", "register:40f0:8", ["const:6c34fc:8", "const:4:8"]]
- 006c34fc ["CALL", null, ["callee:00c57f00:8"]]
+ 006c3554 ["INT_ADD", "register:40f0:8", ["const:6c3554:8", "const:4:8"]]
+ 006c3554 ["CALL", null, ["callee:00c57f00:8"]]
- 006c39cc ["INT_ADD", "register:40f0:8", ["const:6c39cc:8", "const:4:8"]]
- 006c39cc ["CALL", null, ["callee:00c57f50:8"]]
+ 006c3a24 ["INT_ADD", "register:40f0:8", ["const:6c3a24:8", "const:4:8"]]
+ 006c3a24 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-6c441aa76087bd576f452ba6ff6909b4"></a>

### [`006c3d50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c3/006c3d50.md) → [`006c3da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3da8.md) FUN_006c3da8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) · 呼出先 4件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00a829d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a82/00a829d0.md)
- 新版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 4件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a82a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82a40.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 97.53% / 新版 97.53%

優先判定に残った影響 `store_value` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c3fd8",
      "incomplete_value": true,
      "site": "006c3fe8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006c3f80",
      "incomplete_value": true,
      "site": "006c3f90",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:ee8:8"
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
      "definition_site": "006c3ff0",
      "incomplete_value": true,
      "site": "006c3ff8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d88:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006c3f98",
      "incomplete_value": true,
      "site": "006c3fa0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:d48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 43,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006c3e34",
      "READ",
      [
        "storage",
        "002c3ff8",
        null,
        "undefined8"
      ]
    ],
    [
      "006c3fd8",
      "READ",
      [
        "storage",
        "002c3ee8",
        null,
        "undefined8"
      ]
    ],
    [
      "006c3ff0",
      "READ",
      [
        "storage",
        "002c3d48",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006c3e34",
      "READ",
      [
        "storage",
        "002c4038",
        null,
        "undefined8"
      ]
    ],
    [
      "006c3fd8",
      "READ",
      [
        "storage",
        "002c3f28",
        null,
        "undefined8"
      ]
    ],
    [
      "006c3ff0",
      "READ",
      [
        "storage",
        "002c3d88",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c3da0 ["INT_ADD", "register:40f0:8", ["const:6c3da0:8", "const:4:8"]]
- 006c3da0 ["CALL", null, ["callee:00851550:8"]]
+ 006c3df8 ["INT_ADD", "register:40f0:8", ["const:6c3df8:8", "const:4:8"]]
+ 006c3df8 ["CALL", null, ["callee:00851550:8"]]
- 006c3db0 ["INT_ADD", "register:40f0:8", ["const:6c3db0:8", "const:4:8"]]
- 006c3db0 ["CALL", null, ["callee:00a82a40:8"]]
+ 006c3e08 ["INT_ADD", "register:40f0:8", ["const:6c3e08:8", "const:4:8"]]
+ 006c3e08 ["CALL", null, ["callee:00a82a40:8"]]
- 006c3dc4 ["COPY", "register:4050:8", ["const:2c3000:8"]]
+ 006c3e1c ["COPY", "register:4050:8", ["const:2c4000:8"]]
~~~


<a id="compare-a36e9dae96ac1b7c1e77a3c6c7b359bc"></a>

### [`006c4238`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c4238.md) → [`006c4290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4290.md) FUN_006c4290

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 7件 [`0064b1a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064b/0064b1a8.md) [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) [`006e5d70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e5/006e5d70.md) [`006e93a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e9/006e93a4.md) [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006c0f38`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c0/006c0f38.md) [`006c41c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c41c0.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 7件 [`0064b1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064b1e8.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) [`006e93fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e93fc.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006c0f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f90.md) [`006c4218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4218.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.79% / 新版 88.79%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006c4370",
      "incomplete_value": false,
      "site": "006c4378",
      "value": [
        "leaf",
        "const:b:8"
      ]
    },
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c4408",
      "value": [
        "leaf",
        "ram:6c0f90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c43b0",
      "value": [
        "leaf",
        "ram:6c0f38:8"
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
      "unmatched:006c4238",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c423c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c4240",
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
      "006c4290",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006c4294",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006c4298",
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
- 006c4320 ["BRANCH", null, ["local:b37:8"]]
+ 006c4378 ["BRANCH", null, ["local:b38:8"]]
- 006c4358 ["INT_ADD", "register:40f0:8", ["const:6c4358:8", "const:4:8"]]
- 006c4358 ["CALL", null, ["callee:00851550:8"]]
+ 006c43b0 ["INT_ADD", "register:40f0:8", ["const:6c43b0:8", "const:4:8"]]
+ 006c43b0 ["CALL", null, ["callee:00851550:8"]]
- 006c4378 ["INT_ADD", "register:40f0:8", ["const:6c4378:8", "const:4:8"]]
- 006c4378 ["CALL", null, ["callee:0047ce14:8"]]
+ 006c43d0 ["INT_ADD", "register:40f0:8", ["const:6c43d0:8", "const:4:8"]]
+ 006c43d0 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-bba69a38033ff561fff2d8e745ca2d70"></a>

### [`006c43e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c43e4.md) → [`006c443c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c443c.md) FUN_006c443c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 6件 [`0064be88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064b/0064be88.md) [`006b3480`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3480.md) [`006e7990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e7/006e7990.md) [`006e9e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e9/006e9e64.md) [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 18件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`00469144`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469144.md)
- 新版 呼出元 6件 [`0064bec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064bec8.md) [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) [`006e79e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e79e8.md) [`006e9ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e9ebc.md) [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 18件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00469184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469184.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 24件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 21件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c45e8",
      "incomplete_value": true,
      "site": "006c4604",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": null,
    "ordinal": 16,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c45ec",
      "incomplete_value": false,
      "site": "006c4604",
      "value": [
        "leaf",
        "const:8:8"
      ]
    },
    "old": null,
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006c461c",
      "incomplete_value": true,
      "site": "006c4624",
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
                "register:4048:4"
              ],
              [
                "live",
                "register:4050:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 20,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006c4424",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c44f0"
      ]
    ],
    [
      "unmatched:006c44b0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ],
    [
      "unmatched:006c44f0",
      "READ",
      [
        "storage",
        "00c9b4f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006c447c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c44f0"
      ]
    ],
    [
      "006c4508",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0046ca04"
      ]
    ],
    [
      "006c4548",
      "READ",
      [
        "storage",
        "00c9b5c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c45ac ["INT_ADD", "register:40f0:8", ["const:6c45ac:8", "const:4:8"]]
- 006c45ac ["CALL", null, ["callee:00489f8c:8"]]
+ 006c4604 ["INT_ADD", "register:40f0:8", ["const:6c4604:8", "const:4:8"]]
+ 006c4604 ["CALL", null, ["callee:00489f8c:8"]]
- 006c45cc ["INT_ADD", "register:40f0:8", ["const:6c45cc:8", "const:4:8"]]
- 006c45cc ["CALL", null, ["callee:00489f8c:8"]]
+ 006c4624 ["INT_ADD", "register:40f0:8", ["const:6c4624:8", "const:4:8"]]
+ 006c4624 ["CALL", null, ["callee:00489f8c:8"]]
- 006c4624 ["INT_ADD", "register:40f0:8", ["const:6c4624:8", "const:4:8"]]
- 006c4624 ["CALL", null, ["callee:00469184:8"]]
+ 006c467c ["INT_ADD", "register:40f0:8", ["const:6c467c:8", "const:4:8"]]
+ 006c467c ["CALL", null, ["callee:00469184:8"]]
~~~


<a id="compare-7ec5a3f9be974ecce54afe2905f84193"></a>

### [`006c4e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c4e6c.md) → [`006c4ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4ec4.md) FUN_006c4ec4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 13件 [`006d14b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d14b8.md) [`006d1848`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d1848.md) [`006d3e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d3/006d3e3c.md) [`006d83e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d83e8.md) [`006d8768`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8768.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 13件 [`006d1510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d1510.md) [`006d18a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d18a0.md) [`006d3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d3/006d3e94.md) [`006d8440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8440.md) [`006d87c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d87c0.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.84% / 新版 86.84%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c4f28",
      "incomplete_value": true,
      "site": "006c4f2c",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006c4f68"
      ],
      [
        "FALL_THROUGH",
        "006c4fc0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006c4fc0",
      "incomplete_value": true,
      "site": "006c4fc4",
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
              [
                "live",
                "register:4040:8"
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
      "definition_site": "006c4f68",
      "incomplete_value": true,
      "site": "006c4f6c",
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
      "unmatched:006c4e80",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c4f00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c4f94"
      ]
    ],
    [
      "unmatched:006c4f68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c4f28"
      ]
    ]
  ],
  "added": [
    [
      "006c4ed8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006c4f58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c4f94"
      ]
    ],
    [
      "006c4fc0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c4f28"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c4ed4 ["INT_ADD", "register:40f0:8", ["const:6c4ed4:8", "const:4:8"]]
- 006c4ed4 ["CALL", null, ["callee:0043bbe4:8"]]
+ 006c4f2c ["INT_ADD", "register:40f0:8", ["const:6c4f2c:8", "const:4:8"]]
+ 006c4f2c ["CALL", null, ["callee:0043bbe4:8"]]
- 006c4f14 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006c4f14 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
+ 006c4f6c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006c4f6c ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 006c4e80 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006c4e80 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006c4e80 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 006c4e80 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-bf3e618fedd5f3556e460c285855ba7f"></a>

### [`006c4fb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c4fb4.md) → [`006c500c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c500c.md) FUN_006c500c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`008db6f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008db/008db6f4.md) [`008f2694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f2/008f2694.md) [`008f39a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f3/008f39a8.md) · 呼出先 0件 
- 新版 呼出元 3件 [`008db748`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008db/008db748.md) [`008f26e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f2/008f26e8.md) [`008f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39fc.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 74.07% / 新版 74.07%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006c503c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006c5018"
      ]
    ],
    [
      "unmatched:006c5010",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c5058"
      ]
    ]
  ],
  "added": [
    [
      "006c503c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c5070"
      ]
    ],
    [
      "006c5068",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c5058"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c4fbc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006c4fbc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006c5014 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006c5014 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 006c4fc8 ["COPY", "register:0:8", ["register:40f0:8"]]
- 006c4fc8 ["RETURN", null, ["register:0:8"]]
- 006c4fe0 ["INT_ZEXT", "register:4040:8", ["register:101:1"]]
~~~


<a id="compare-49524f64ca05b4c5f82184bb71b8b624"></a>

### [`006c5020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c5/006c5020.md) → [`006c5078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c5078.md) FUN_006c5078

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`007595dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/007595dc.md) [`0075a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075a/0075a418.md) [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`00ad0958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad0958.md) · 呼出先 0件 
- 新版 呼出元 4件 [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006c503c ["CBRANCH", null, ["local:b11:8", "register:101:1"]]
+ 006c5094 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
- 006c5044 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 006c5044 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 006c5044 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 006c5044 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 006c509c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 006c509c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 006c509c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 006c509c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
- 006c504c ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
- 006c504c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 006c50a4 ["INT_EQUAL", "tmp:0:1", ["register:4058:8", "const:0:8"]]
+ 006c50a4 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-cd1200ec242d9fe18c2f8657a31db431"></a>

### [`006c5088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c5/006c5088.md) → [`006c50e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c50e0.md) FUN_006c50e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 9件 [`00682ae4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682ae4.md) [`006834e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00683/006834e0.md) [`007595dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/007595dc.md) [`0075a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075a/0075a418.md) [`008ef9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef9f4.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 9件 [`00682b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682b24.md) [`00683520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00683/00683520.md) [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 1件, `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c5154",
      "incomplete_value": false,
      "site": "006c5158",
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
      "definition_site": "006c50fc",
      "incomplete_value": false,
      "site": "006c5100",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "006c5124",
      "incomplete_value": false,
      "site": "006c512c",
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
      "006c5154",
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
      "006c5154",
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
- 006c5100 ["INT_ADD", "register:40f0:8", ["const:6c5100:8", "const:4:8"]]
- 006c5100 ["CALL", null, ["callee:00442970:8"]]
+ 006c5158 ["INT_ADD", "register:40f0:8", ["const:6c5158:8", "const:4:8"]]
+ 006c5158 ["CALL", null, ["callee:00442970:8"]]
- 006c50c8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006c50c8 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
- 006c50c8 ["CBRANCH", null, ["local:b8:8", "tmp:1:1"]]
+ 006c5120 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006c5120 ["BOOL_OR", "tmp:1:1", ["register:101:1", "tmp:0:1"]]
+ 006c5120 ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
- 006c50dc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006c50dc ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 006c5134 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006c5134 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-fcecc44040866b7d5a4426079dac4cec"></a>

### [`006c5110`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c5/006c5110.md) → [`006c5168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c5168.md) FUN_006c5168

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`007595dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/007595dc.md) [`0075a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075a/0075a418.md) [`008f39a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f3/008f39a8.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 3件 [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`008f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39fc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.18% / 新版 99.18%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c5348",
      "incomplete_value": false,
      "site": "006c534c",
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
      "definition_site": "006c52f0",
      "incomplete_value": false,
      "site": "006c52f4",
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
      "006c5348",
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
      "006c5348",
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
- 006c52f4 ["INT_ADD", "register:40f0:8", ["const:6c52f4:8", "const:4:8"]]
- 006c52f4 ["CALL", null, ["callee:00442970:8"]]
+ 006c534c ["INT_ADD", "register:40f0:8", ["const:6c534c:8", "const:4:8"]]
+ 006c534c ["CALL", null, ["callee:00442970:8"]]
- 006c52f0 ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 006c52f0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006c52f0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006c52f0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006c5348 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 006c5348 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006c5348 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006c5348 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5f20de26d4d8dcb1e855119ecbf9957f"></a>

### [`006c52f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c5/006c52f8.md) → [`006c5350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c5350.md) FUN_006c5350

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 13件 [`00682990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682990.md) [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`007595dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/007595dc.md) [`0075a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075a/0075a418.md) [`007fb230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fb230.md) · 呼出先 25件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`006cb0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb0b4.md) [`006d5ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d5/006d5ea4.md) [`006d6318`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d6318.md)
- 新版 呼出元 13件 [`006829d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/006829d0.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`007fb288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb288.md) · 呼出先 25件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006cb10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb10c.md) [`006d5efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5efc.md) [`006d6370`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6370.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 95.63% / 新版 95.63%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 18件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006c5ec8",
      "incomplete_value": false,
      "site": "006c5ed4",
      "value": [
        "leaf",
        "const:1:8"
      ]
    },
    "ordinal": 49,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006c5ecc",
      "incomplete_value": true,
      "site": "006c5ed4",
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
    "ordinal": 49,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006c5ed0",
      "incomplete_value": true,
      "site": "006c5ed4",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40b8:4"
          ]
        ]
      ]
    },
    "ordinal": 49,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006c5ef0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006c5ea4"
      ]
    ],
    [
      "unmatched:006c5ea8",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bbe4"
      ]
    ],
    [
      "unmatched:006c5eb8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006c5ec0"
      ]
    ]
  ],
  "added": [
    [
      "006c5ef0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c5efc"
      ]
    ],
    [
      "006c5f00",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bbe4"
      ]
    ],
    [
      "006c5f10",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006c5f18"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c5ed4 ["INT_ADD", "register:40f0:8", ["const:6c5ed4:8", "const:4:8"]]
- 006c5ed4 ["CALL", null, ["callee:00b04a58:8"]]
+ 006c5f2c ["INT_ADD", "register:40f0:8", ["const:6c5f2c:8", "const:4:8"]]
+ 006c5f2c ["CALL", null, ["callee:00b04a58:8"]]
- 006c5358 ["INT_ADD", "register:40f0:8", ["const:6c5358:8", "const:4:8"]]
- 006c5358 ["CALL", null, ["callee:00676aa0:8"]]
+ 006c53b0 ["INT_ADD", "register:40f0:8", ["const:6c53b0:8", "const:4:8"]]
+ 006c53b0 ["CALL", null, ["callee:00676aa0:8"]]
- 006c5374 ["INT_ADD", "register:40f0:8", ["const:6c5374:8", "const:4:8"]]
- 006c5374 ["CALL", null, ["callee:00851550:8"]]
+ 006c53cc ["INT_ADD", "register:40f0:8", ["const:6c53cc:8", "const:4:8"]]
+ 006c53cc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-e63525e953493399b608d1fb71061f84"></a>

### [`006c6484`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6484.md) → [`006c64dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c64dc.md) FUN_006c64dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006cdc88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cd/006cdc88.md) [`008f09d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f0/008f09d4.md) [`009f8cac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009f8/009f8cac.md) · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`006d5ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d5/006d5ea4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00b04c7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b04/00b04c7c.md)
- 新版 呼出元 3件 [`006cdce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cd/006cdce0.md) [`008f0a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f0/008f0a28.md) [`009f8d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f8/009f8d00.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006d5efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5efc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b04d18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b04/00b04d18.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 77.95% / 新版 77.95%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 28件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c6510",
      "incomplete_value": true,
      "site": "006c6528",
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
      "definition_site": "006c6514",
      "incomplete_value": false,
      "site": "006c6528",
      "value": [
        "leaf",
        "const:0:8"
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
      "definition_site": "006c6500",
      "incomplete_value": true,
      "site": "006c650c",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40b0:4"
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
      "unmatched:006c64c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "unmatched:006c64f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c6dc8"
      ]
    ],
    [
      "unmatched:006c6520",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c658c"
      ]
    ]
  ],
  "added": [
    [
      "006c6518",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "006c6550",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c6dc8"
      ]
    ],
    [
      "006c6578",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c658c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c64d0 ["INT_ADD", "register:40f0:8", ["const:6c64d0:8", "const:4:8"]]
- 006c64d0 ["CALL", null, ["callee:00676aa0:8"]]
+ 006c6528 ["INT_ADD", "register:40f0:8", ["const:6c6528:8", "const:4:8"]]
+ 006c6528 ["CALL", null, ["callee:00676aa0:8"]]
- 006c650c ["INT_ADD", "register:40f0:8", ["const:6c650c:8", "const:4:8"]]
- 006c650c ["CALL", null, ["callee:00b04d18:8"]]
+ 006c6564 ["INT_ADD", "register:40f0:8", ["const:6c6564:8", "const:4:8"]]
+ 006c6564 ["CALL", null, ["callee:00b04d18:8"]]
+ 006c650c ["COPY", "register:40a0:8", ["register:4098:8"]]
~~~


<a id="compare-4b8917874d21570c659441e125962920"></a>

### [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) → [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) FUN_006c6e68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 14件 [`00682990`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00682/00682990.md) [`00707ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00707/00707ee0.md) [`007595dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/007595dc.md) [`0075a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075a/0075a418.md) [`007fb230`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007fb/007fb230.md) · 呼出先 71件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`006899ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/006899ac.md) [`006cb0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb0b4.md) [`006d5ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d5/006d5ea4.md)
- 新版 呼出元 14件 [`006829d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/006829d0.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`007fb288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb288.md) · 呼出先 71件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006899ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/006899ec.md) [`006cb10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb10c.md) [`006d5efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5efc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.93% / 新版 78.93%

優先判定に残った影響 `call_argument_candidate` 27件, `unresolved_branch_alignment` 77件, `unresolved_call_alignment` 60件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 176件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006c71b0",
      "incomplete_value": true,
      "site": "006c71bc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40c0:4"
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
      "definition_site": "006c71b4",
      "incomplete_value": true,
      "site": "006c71bc",
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c7fbc",
      "incomplete_value": true,
      "site": "006c7fc8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:40c0:4"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 73,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006c71d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006c7184"
      ]
    ],
    [
      "unmatched:006c7188",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bbe4"
      ]
    ],
    [
      "unmatched:006c718c",
      "READ",
      [
        "storage",
        "Stack[-0x290]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006c71d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006c71dc"
      ]
    ],
    [
      "006c71e0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bbe4"
      ]
    ],
    [
      "006c71e4",
      "READ",
      [
        "storage",
        "Stack[-0x290]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006c71bc ["INT_ADD", "register:40f0:8", ["const:6c71bc:8", "const:4:8"]]
- 006c71bc ["CALL", null, ["callee:00b012fc:8"]]
+ 006c7214 ["INT_ADD", "register:40f0:8", ["const:6c7214:8", "const:4:8"]]
+ 006c7214 ["CALL", null, ["callee:00b012fc:8"]]
- 006c7f70 ["INT_ADD", "register:40f0:8", ["const:6c7f70:8", "const:4:8"]]
- 006c7f70 ["CALL", null, ["callee:00b022d8:8"]]
+ 006c7fc8 ["INT_ADD", "register:40f0:8", ["const:6c7fc8:8", "const:4:8"]]
+ 006c7fc8 ["CALL", null, ["callee:00b022d8:8"]]
- 006c9a44 ["INT_ADD", "register:40f0:8", ["const:6c9a44:8", "const:4:8"]]
- 006c9a44 ["CALL", null, ["callee:00b06618:8"]]
+ 006c9a9c ["INT_ADD", "register:40f0:8", ["const:6c9a9c:8", "const:4:8"]]
+ 006c9a9c ["CALL", null, ["callee:00b06618:8"]]
~~~


<a id="compare-407bd497a7d022cc339036dc1c89a5f6"></a>

### [`006cb0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb0b4.md) → [`006cb10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb10c.md) FUN_006cb10c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`006c52f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c5/006c52f8.md) [`006c6394`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6394.md) [`006c6e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c6/006c6e10.md) [`006cba74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cba74.md) [`006ccb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cc/006ccb78.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`006d6170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d6170.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 5件 [`006c5350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c5350.md) [`006c63ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c63ec.md) [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) [`006cbacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cbacc.md) [`006ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cc/006ccbd0.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006d61c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d61c8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.72% / 新版 96.72%

アドレスに依存する影響 `call_argument_candidate` 4件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006cb17c",
      "incomplete_value": true,
      "site": "006cb188",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "006cb174",
      "incomplete_value": true,
      "site": "006cb188",
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
    "old": null,
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006cb178",
      "incomplete_value": true,
      "site": "006cb188",
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
    "ordinal": 1,
    "slot": 4
  }
]
~~~


~~~diff
- 006cb130 ["INT_ADD", "register:40f0:8", ["const:6cb130:8", "const:4:8"]]
- 006cb130 ["CALL", null, ["callee:006d61c8:8"]]
+ 006cb188 ["INT_ADD", "register:40f0:8", ["const:6cb188:8", "const:4:8"]]
+ 006cb188 ["CALL", null, ["callee:006d61c8:8"]]
- 006cb144 ["INT_ADD", "register:40f0:8", ["const:6cb144:8", "const:4:8"]]
- 006cb144 ["CALL", null, ["callee:00c57f60:8"]]
+ 006cb19c ["INT_ADD", "register:40f0:8", ["const:6cb19c:8", "const:4:8"]]
+ 006cb19c ["CALL", null, ["callee:00c57f60:8"]]
- 006cb100 ["INT_ADD", "register:40f0:8", ["const:6cb100:8", "const:4:8"]]
- 006cb100 ["CALL", null, ["callee:0043bbe4:8"]]
+ 006cb158 ["INT_ADD", "register:40f0:8", ["const:6cb158:8", "const:4:8"]]
+ 006cb158 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-ff37d1405f9ec44e7da6e3b1f4b5553b"></a>

### [`006cb1d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb1d0.md) → [`006cb228`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb228.md) FUN_006cb228

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`006cdc88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cd/006cdc88.md) [`008ef9f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ef/008ef9f4.md) [`008f09d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f0/008f09d4.md) [`00adf218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00adf/00adf218.md) · 呼出先 2件 [`00b03910`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b03/00b03910.md) [`00b0695c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b06/00b0695c.md)
- 新版 呼出元 4件 [`006cdce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cd/006cdce0.md) [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) [`008f0a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f0/008f0a28.md) [`00adf288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf288.md) · 呼出先 2件 [`00b039ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b03/00b039ac.md) [`00b069f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b06/00b069f8.md)

変更の種類 branch_condition_or_target, constant, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "006cb310",
      "incomplete_value": false,
      "site": "006cb318",
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
    "ordinal": 1,
    "slot": 0
  }
]
~~~


~~~diff
- 006cb1ec ["CBRANCH", null, ["local:b26:8", "register:101:1"]]
+ 006cb244 ["CBRANCH", null, ["local:b25:8", "register:101:1"]]
- 006cb1f4 ["CBRANCH", null, ["local:b30:8", "register:101:1"]]
+ 006cb24c ["CBRANCH", null, ["local:b29:8", "register:101:1"]]
- 006cb208 ["INT_ADD", "register:40f0:8", ["const:6cb208:8", "const:4:8"]]
- 006cb208 ["CALL", null, ["callee:00b069f8:8"]]
+ 006cb260 ["INT_ADD", "register:40f0:8", ["const:6cb260:8", "const:4:8"]]
+ 006cb260 ["CALL", null, ["callee:00b069f8:8"]]
~~~


<a id="compare-8f5d21b9fc2b949795f8083935e2b302"></a>

### [`006cb314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb314.md) → [`006cb36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb36c.md) FUN_006cb36c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 5件 [`006cb540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb540.md) [`006cba74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cba74.md) [`006ccb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cc/006ccb78.md) [`006cdc88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cd/006cdc88.md) [`00adf218`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00adf/00adf218.md) · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00470994`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470994.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`009e0fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009e0/009e0fc0.md)
- 新版 呼出元 5件 [`006cb598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb598.md) [`006cbacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cbacc.md) [`006ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cc/006ccbd0.md) [`006cdce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cd/006cdce0.md) [`00adf288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf288.md) · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004709d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/004709d4.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`009e1014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009e1/009e1014.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 93.65% / 新版 93.65%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006cb50c",
      "incomplete_value": true,
      "site": "006cb518",
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
            "register:4040:8"
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
      "definition_site": "006cb50c",
      "incomplete_value": true,
      "site": "006cb518",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006cb514",
      "incomplete_value": true,
      "site": "006cb518",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
              "LOAD"
            ]
          ],
          [
            "leaf",
            "const:2:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006cb4bc",
      "incomplete_value": true,
      "site": "006cb4c0",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "leaf",
            "const:2:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 4
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006cb440",
      "DATA",
      [
        "storage",
        "003c9668",
        null,
        "dword"
      ]
    ],
    [
      "006cb444",
      "DATA",
      [
        "storage",
        "003c9660",
        null,
        "qword"
      ]
    ],
    [
      "unmatched:006cb400",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006cb52c"
      ]
    ]
  ],
  "added": [
    [
      "006cb440",
      "DATA",
      [
        "storage",
        "003c9668",
        null,
        "uleb128"
      ]
    ],
    [
      "006cb444",
      "DATA",
      [
        "storage",
        "003c9660",
        null,
        "dword"
      ]
    ],
    [
      "006cb458",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006cb52c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006cb4c0 ["INT_ADD", "register:40f0:8", ["const:6cb4c0:8", "const:4:8"]]
- 006cb4c0 ["CALL", null, ["callee:004709d4:8"]]
+ 006cb518 ["INT_ADD", "register:40f0:8", ["const:6cb518:8", "const:4:8"]]
+ 006cb518 ["CALL", null, ["callee:004709d4:8"]]
- 006cb358 ["INT_ADD", "register:40f0:8", ["const:6cb358:8", "const:4:8"]]
- 006cb358 ["CALL", null, ["callee:00851550:8"]]
+ 006cb3b0 ["INT_ADD", "register:40f0:8", ["const:6cb3b0:8", "const:4:8"]]
+ 006cb3b0 ["CALL", null, ["callee:00851550:8"]]
- 006cb368 ["INT_ADD", "register:40f0:8", ["const:6cb368:8", "const:4:8"]]
- 006cb368 ["CALL", null, ["callee:009e1014:8"]]
+ 006cb3c0 ["INT_ADD", "register:40f0:8", ["const:6cb3c0:8", "const:4:8"]]
+ 006cb3c0 ["CALL", null, ["callee:009e1014:8"]]
~~~


<a id="compare-9944b0e09ff1d96c3dcfc0dcf89065fd"></a>

### [`006cb540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb540.md) → [`006cb598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb598.md) FUN_006cb598

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006cba74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cba74.md) [`006ccb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cc/006ccb78.md) · 呼出先 11件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`005c3e7c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c3/005c3e7c.md) [`006b8c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c44.md) [`006cb314`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb314.md)
- 新版 呼出元 2件 [`006cbacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cbacc.md) [`006ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cc/006ccbd0.md) · 呼出先 11件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`006cb36c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb36c.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.59% / 新版 94.59%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006cb590"
      ],
      [
        "FALL_THROUGH",
        "006cb5e8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006cb5e4",
      "incomplete_value": true,
      "site": "006cb5ec",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "definition_site": null,
      "incomplete_value": true,
      "site": "006cb594",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:006cb590",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006cb764"
      ]
    ],
    [
      "unmatched:006cb5c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:006cb5c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006cb650"
      ]
    ]
  ],
  "added": [
    [
      "006cb5e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006cb764"
      ]
    ],
    [
      "006cb61c",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "006cb620",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006cb650"
      ]
    ]
  ]
}
~~~


~~~diff
- 006cb5ec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:28:8"]]
- 006cb5ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
- 006cb578 ["COPY", "tmp:0:8", ["const:0:8"]]
- 006cb578 ["COPY", "tmp:1:8", ["const:0:8"]]
- 006cb578 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 006cb578 ["COPY", "tmp:3:8", ["tmp:0:8"]]
- 006cb57c ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:10:8"]]
- 006cb57c ["COPY", "tmp:1:8", ["const:0:8"]]
- 006cb57c ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-bc10a67450ed67a4d8cdd7ee493a5259"></a>

### [`006cb88c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb88c.md) → [`006cb8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb8e4.md) FUN_006cb8e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`006cba74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cba74.md) [`006ccb78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cc/006ccb78.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`006d7020`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7020.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`006cbacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cbacc.md) [`006ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cc/006ccbd0.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006d7078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7078.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.33% / 新版 96.33%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006cb934",
      "incomplete_value": true,
      "site": "006cb940",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "leaf",
            "const:2c4000:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006cb8dc",
      "incomplete_value": true,
      "site": "006cb8e8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:fc0:8"
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
      "definition_site": "006cb9b8",
      "incomplete_value": true,
      "site": "006cb9c4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:308:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006cb960",
      "incomplete_value": true,
      "site": "006cb96c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2c8:8"
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
      "006cb934",
      "READ",
      [
        "storage",
        "002c3fc0",
        null,
        "undefined8"
      ]
    ],
    [
      "006cb9b8",
      "READ",
      [
        "storage",
        "002c42c8",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006cb934",
      "READ",
      [
        "storage",
        "002c4000",
        null,
        "undefined8"
      ]
    ],
    [
      "006cb9b8",
      "READ",
      [
        "storage",
        "002c4308",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006cb8cc ["INT_ADD", "register:40f0:8", ["const:6cb8cc:8", "const:4:8"]]
- 006cb8cc ["CALL", null, ["callee:00c57f60:8"]]
+ 006cb924 ["INT_ADD", "register:40f0:8", ["const:6cb924:8", "const:4:8"]]
+ 006cb924 ["CALL", null, ["callee:00c57f60:8"]]
- 006cb8d0 ["COPY", "register:4040:8", ["const:2c3000:8"]]
+ 006cb928 ["COPY", "register:4040:8", ["const:2c4000:8"]]
- 006cb8dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:fc0:8"]]
- 006cb8dc ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 006cb8dc ["COPY", "register:5008:8", ["const:0:8"]]
- 006cb8dc ["COPY", "register:5010:8", ["const:0:8"]]
+ 006cb934 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 006cb934 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 006cb934 ["COPY", "register:5008:8", ["const:0:8"]]
+ 006cb934 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-1979f669f4a092c83cf65c8b93035c8c"></a>

### [`006cfeec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cf/006cfeec.md) → [`006cff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cf/006cff44.md) FUN_006cff44

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006d02a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d0/006d02a4.md) [`0089bc8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089bc8c.md) [`00b1f428`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b1f/00b1f428.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006d7064`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7064.md) [`006d7088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7088.md) [`006d76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`006d777c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d777c.md)
- 新版 呼出元 3件 [`006d02fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d02fc.md) [`0089bce4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089bce4.md) [`00b1f4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b1f/00b1f4c4.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006d70bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70bc.md) [`006d70e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70e0.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`006d77d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d77d4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 91.10% / 新版 91.10%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 4件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d01fc",
      "incomplete_value": true,
      "site": "006d0200",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:006cfef0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006cfef4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006cfef8",
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
      "006cff48",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006cff4c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006cff50",
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
- 006d01a8 ["INT_ADD", "register:40f0:8", ["const:6d01a8:8", "const:4:8"]]
- 006d01a8 ["CALL", null, ["callee:00c57f80:8"]]
+ 006d0200 ["INT_ADD", "register:40f0:8", ["const:6d0200:8", "const:4:8"]]
+ 006d0200 ["CALL", null, ["callee:00c57f80:8"]]
- 006cfeec ["INT_SUB", "register:8:8", ["register:8:8", "const:b0:8"]]
- 006cfef0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006cfef0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006cfef0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:80:8"]]
- 006cfef0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ab7b94f3bf8ff9aad5a0b1fde77e00d2"></a>

### [`006d02a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d0/006d02a4.md) → [`006d02fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d02fc.md) FUN_006d02fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`007595dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00759/007595dc.md) [`0075a418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075a/0075a418.md) [`008f39a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f3/008f39a8.md) · 呼出先 14件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`005626f4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00562/005626f4.md) [`006cfeec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cf/006cfeec.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 3件 [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`008f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39fc.md) · 呼出先 14件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00562734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562734.md) [`006cff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cf/006cff44.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 95.31% / 新版 95.31%

優先判定に残った影響 `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006d0510",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "uleb128"
      ]
    ],
    [
      "006d0594",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "qword"
      ]
    ],
    [
      "unmatched:006d0664",
      "DATA",
      [
        "storage",
        "002c46f8",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006d0510",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[83]"
      ]
    ],
    [
      "006d0594",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "dword"
      ]
    ],
    [
      "006d06bc",
      "DATA",
      [
        "storage",
        "002c46f8",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d02f0 ["INT_ADD", "register:40f0:8", ["const:6d02f0:8", "const:4:8"]]
- 006d02f0 ["CALL", null, ["callee:00562734:8"]]
+ 006d0348 ["INT_ADD", "register:40f0:8", ["const:6d0348:8", "const:4:8"]]
+ 006d0348 ["CALL", null, ["callee:00562734:8"]]
- 006d0300 ["INT_ADD", "register:40f0:8", ["const:6d0300:8", "const:4:8"]]
- 006d0300 ["CALL", null, ["callee:00c57f80:8"]]
+ 006d0358 ["INT_ADD", "register:40f0:8", ["const:6d0358:8", "const:4:8"]]
+ 006d0358 ["CALL", null, ["callee:00c57f80:8"]]
- 006d0348 ["INT_ADD", "register:40f0:8", ["const:6d0348:8", "const:4:8"]]
- 006d0348 ["CALL", null, ["callee:00851550:8"]]
+ 006d03a0 ["INT_ADD", "register:40f0:8", ["const:6d03a0:8", "const:4:8"]]
+ 006d03a0 ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-91ca18e8f599b2fddc3b1047069232dc"></a>

### [`006d0a1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d0/006d0a1c.md) → [`006d0a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d0a74.md) FUN_006d0a74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006d1fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d1fe4.md) · 呼出先 13件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`006d7e70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7e70.md) [`006d7e74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7e74.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006d203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d2/006d203c.md) · 呼出先 13件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006d7ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7ec8.md) [`006d7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7ecc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.50% / 新版 62.50%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d0b20",
      "incomplete_value": true,
      "site": "006d0b40",
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
            "register:4040:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d0b2c",
      "incomplete_value": false,
      "site": "006d0b40",
      "value": [
        "leaf",
        "const:578:8"
      ]
    },
    "old": null,
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d0b30",
      "incomplete_value": true,
      "site": "006d0b40",
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
    "old": null,
    "ordinal": 6,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006d0a20",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d0a24",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d0a28",
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
      "006d0a78",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006d0a7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006d0a80",
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
- 006d0ae8 ["INT_ADD", "register:40f0:8", ["const:6d0ae8:8", "const:4:8"]]
- 006d0ae8 ["CALL", null, ["callee:008b7044:8"]]
+ 006d0b40 ["INT_ADD", "register:40f0:8", ["const:6d0b40:8", "const:4:8"]]
+ 006d0b40 ["CALL", null, ["callee:008b7044:8"]]
- 006d0b7c ["INT_ADD", "register:40f0:8", ["const:6d0b7c:8", "const:4:8"]]
- 006d0b7c ["CALL", null, ["callee:00c53da0:8"]]
+ 006d0bd4 ["INT_ADD", "register:40f0:8", ["const:6d0bd4:8", "const:4:8"]]
+ 006d0bd4 ["CALL", null, ["callee:00c53da0:8"]]
+ 006d0b7c ["COPY", "register:40a8:8", ["const:c9b000:8"]]
~~~


<a id="compare-9c74e5147cb22e4379cb6561dd9cb035"></a>

### [`006d0c40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d0/006d0c40.md) → [`006d0c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d0c98.md) FUN_006d0c98

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006d1fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d1fe4.md) · 呼出先 13件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`006d8250`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8250.md) [`006d8254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8254.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006d203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d2/006d203c.md) · 呼出先 13件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006d82a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d82a8.md) [`006d82ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d82ac.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment

命令の説明率　旧版 96.32% / 新版 96.32%

優先判定に残った影響 `store_value` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006d0e14",
      "incomplete_value": false,
      "site": "006d0e14",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d0dbc",
      "incomplete_value": false,
      "site": "006d0dbc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:398:8"
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
      "unmatched:006d0d20",
      "READ",
      [
        "storage",
        "00c9b368",
        null,
        "pointer"
      ]
    ],
    [
      "006d0d8c",
      "DATA",
      [
        "storage",
        "00c8b758",
        null,
        "undefined *"
      ]
    ],
    [
      "006d0da4",
      "READ",
      [
        "storage",
        "00c9b370",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006d0d78",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "006d0d8c",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ],
    [
      "006d0da4",
      "READ",
      [
        "storage",
        "00c9b440",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d0c70 ["INT_ADD", "register:40f0:8", ["const:6d0c70:8", "const:4:8"]]
- 006d0c70 ["CALL", null, ["callee:00851550:8"]]
+ 006d0cc8 ["INT_ADD", "register:40f0:8", ["const:6d0cc8:8", "const:4:8"]]
+ 006d0cc8 ["CALL", null, ["callee:00851550:8"]]
- 006d0c74 ["INT_ADD", "register:40f0:8", ["const:6d0c74:8", "const:4:8"]]
- 006d0c74 ["CALL", null, ["callee:0046ca04:8"]]
+ 006d0ccc ["INT_ADD", "register:40f0:8", ["const:6d0ccc:8", "const:4:8"]]
+ 006d0ccc ["CALL", null, ["callee:0046ca04:8"]]
- 006d0cac ["INT_ADD", "register:40f0:8", ["const:6d0cac:8", "const:4:8"]]
- 006d0cac ["CALL", null, ["callee:00a46950:8"]]
+ 006d0d04 ["INT_ADD", "register:40f0:8", ["const:6d0d04:8", "const:4:8"]]
+ 006d0d04 ["CALL", null, ["callee:00a46950:8"]]
~~~


<a id="compare-e50ef4c17db2c24b79eded0dafdcf583"></a>

### [`006d0f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d0/006d0f4c.md) → [`006d0fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d0fa4.md) FUN_006d0fa4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006d1fe4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d1fe4.md) · 呼出先 13件 [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`005d8bc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005d8/005d8bc8.md) [`006d83e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d83e0.md) [`006d83e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d83e4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006d203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d2/006d203c.md) · 呼出先 13件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006d8438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8438.md) [`006d843c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d843c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.50% / 新版 86.50%

優先判定に残った影響 `call_argument_candidate` 4件, `store_value` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006d1120",
      "incomplete_value": false,
      "site": "006d1120",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d10c8",
      "incomplete_value": false,
      "site": "006d10c8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:418:8"
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
      "definition_site": "006d100c",
      "incomplete_value": true,
      "site": "006d1010",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_ADD",
            "4",
            [
              "TRUNC",
              [
                "leaf",
                "const:49:4"
              ]
            ]
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
      "definition_site": "006d0ff8",
      "incomplete_value": false,
      "site": "006d1010",
      "value": [
        "leaf",
        "const:7b:8"
      ]
    },
    "old": null,
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
      "unmatched:006d0f50",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d0f54",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d0f58",
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
      "006d0fa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006d0fac",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006d0fb0",
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
- 006d0fb8 ["INT_ADD", "register:40f0:8", ["const:6d0fb8:8", "const:4:8"]]
- 006d0fb8 ["CALL", null, ["callee:00a46950:8"]]
+ 006d1010 ["INT_ADD", "register:40f0:8", ["const:6d1010:8", "const:4:8"]]
+ 006d1010 ["CALL", null, ["callee:00a46950:8"]]
- 006d1010 ["INT_ADD", "register:40f0:8", ["const:6d1010:8", "const:4:8"]]
- 006d1010 ["CALL", null, ["callee:00a467d8:8"]]
+ 006d1068 ["INT_ADD", "register:40f0:8", ["const:6d1068:8", "const:4:8"]]
+ 006d1068 ["CALL", null, ["callee:00a467d8:8"]]
- 006d1070 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
- 006d1070 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 006d10c8 ["INT_EQUAL", "tmp:0:1", ["register:40b0:8", "const:0:8"]]
+ 006d10c8 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
~~~


<a id="compare-04270fd7df6c3b4d2d2bf907f279b41d"></a>

### [`006d14b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d14b8.md) → [`006d1510`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d1510.md) FUN_006d1510

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 5件 [`007bda44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007bd/007bda44.md) [`008f39a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f3/008f39a8.md) [`008f7008`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f7/008f7008.md) [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`00ad0958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad0958.md) · 呼出先 6件 [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`006c4e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c4e6c.md) [`006d7ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7ef4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 5件 [`007bda9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007bd/007bda9c.md) [`008f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39fc.md) [`008f6b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f6/008f6b3c.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 6件 [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006c4ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4ec4.md) [`006d7f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7f4c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.54% / 新版 99.54%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d1828",
      "incomplete_value": false,
      "site": "006d1830",
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
    "old": {
      "definition_site": "006d17d0",
      "incomplete_value": false,
      "site": "006d17d8",
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
            "const:3ea:8"
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
      "006d1688",
      "DATA",
      [
        "storage",
        "00477d48",
        null,
        null
      ]
    ],
    [
      "006d16a0",
      "DATA",
      [
        "storage",
        "00477d40",
        null,
        null
      ]
    ],
    [
      "006d16a8",
      "DATA",
      [
        "storage",
        "00477d48",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006d1828",
      "PARAM",
      [
        "storage",
        "002a638e",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d17d8 ["INT_ADD", "register:40f0:8", ["const:6d17d8:8", "const:4:8"]]
- 006d17d8 ["CALL", null, ["callee:00c58260:8"]]
+ 006d1830 ["INT_ADD", "register:40f0:8", ["const:6d1830:8", "const:4:8"]]
+ 006d1830 ["CALL", null, ["callee:00c58260:8"]]
- 006d14f8 ["INT_ADD", "register:40f0:8", ["const:6d14f8:8", "const:4:8"]]
- 006d14f8 ["CALL", null, ["callee:006c4ec4:8"]]
+ 006d1550 ["INT_ADD", "register:40f0:8", ["const:6d1550:8", "const:4:8"]]
+ 006d1550 ["CALL", null, ["callee:006c4ec4:8"]]
- 006d150c ["INT_ADD", "register:40f0:8", ["const:6d150c:8", "const:4:8"]]
- 006d150c ["CALL", null, ["callee:00676aa0:8"]]
+ 006d1564 ["INT_ADD", "register:40f0:8", ["const:6d1564:8", "const:4:8"]]
+ 006d1564 ["CALL", null, ["callee:00676aa0:8"]]
~~~


<a id="compare-31b8b35913d2211132ee5b08361b7544"></a>

### [`006d4c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d4/006d4c44.md) → [`006d4c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d4/006d4c9c.md) FUN_006d4c9c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`006d3e3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d3/006d3e3c.md) [`006d7e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7e78.md) [`006d8258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8258.md) [`006d9ae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9ae8.md) · 呼出先 5件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f10.md) [`008b6f18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f18.md) [`008b7948`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b7948.md) [`008b79c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b7/008b79c8.md)
- 新版 呼出元 4件 [`006d3e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d3/006d3e94.md) [`006d7ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7ed0.md) [`006d82b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d82b0.md) [`006d9b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9b40.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b6f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f70.md) [`008b79a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b79a0.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 94.05% / 新版 94.05%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_call_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d4cf4",
      "incomplete_value": true,
      "site": "006d4cfc",
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
            "register:4098:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006d4cd8",
      "incomplete_value": false,
      "site": "006d4cdc",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d4d44",
      "incomplete_value": true,
      "site": "006d4d48",
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
    "old": {
      "definition_site": "006d4cec",
      "incomplete_value": true,
      "site": "006d4cf0",
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
            "register:4040:8"
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
      "unmatched:006d4c6c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6f68"
      ]
    ],
    [
      "unmatched:006d4cd4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6f68"
      ]
    ]
  ],
  "added": [
    [
      "006d4cc4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6f68"
      ]
    ],
    [
      "006d4d2c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6f68"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d4c84 ["INT_ADD", "register:40f0:8", ["const:6d4c84:8", "const:4:8"]]
- 006d4c84 ["CALL", null, ["callee:008b7a20:8"]]
+ 006d4cdc ["INT_ADD", "register:40f0:8", ["const:6d4cdc:8", "const:4:8"]]
+ 006d4cdc ["CALL", null, ["callee:008b7a20:8"]]
- 006d4c98 ["INT_ADD", "register:40f0:8", ["const:6d4c98:8", "const:4:8"]]
- 006d4c98 ["CALL", null, ["callee:00851550:8"]]
+ 006d4cf0 ["INT_ADD", "register:40f0:8", ["const:6d4cf0:8", "const:4:8"]]
+ 006d4cf0 ["CALL", null, ["callee:00851550:8"]]
- 006d4ca4 ["INT_ADD", "register:40f0:8", ["const:6d4ca4:8", "const:4:8"]]
- 006d4ca4 ["CALL", null, ["callee:008b79a0:8"]]
+ 006d4cfc ["INT_ADD", "register:40f0:8", ["const:6d4cfc:8", "const:4:8"]]
+ 006d4cfc ["CALL", null, ["callee:008b79a0:8"]]
~~~


<a id="compare-0bab9d838773c635e72b90f307fcb23f"></a>

### [`006d4d94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d4/006d4d94.md) → [`006d4dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d4/006d4dec.md) FUN_006d4dec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`008f7e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008f7/008f7e78.md) [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) [`00ae128c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ae1/00ae128c.md) · 呼出先 26件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467db4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467db4.md) [`00467e9c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467e9c.md) [`00467ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467ea4.md)
- 新版 呼出元 3件 [`008f7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f7/008f7ecc.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 26件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`00467edc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467edc.md) [`00467ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ee4.md)

変更の種類 call_argument_candidate, constant, local_def_use, operands_and_dependencies, unresolved_branch_alignment

命令の説明率　旧版 98.04% / 新版 98.04%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006d51b0",
      "incomplete_value": true,
      "site": "006d51bc",
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
    "ordinal": 43,
    "slot": 6
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006d51b4",
      "incomplete_value": false,
      "site": "006d51bc",
      "value": [
        "leaf",
        "const:24:8"
      ]
    },
    "ordinal": 43,
    "slot": 7
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d5234",
      "incomplete_value": true,
      "site": "006d5240",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": null,
    "ordinal": 44,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006d5168",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "byte[15]"
      ]
    ],
    [
      "006d516c",
      "DATA",
      [
        "storage",
        "003c9690",
        null,
        "dword"
      ]
    ],
    [
      "006d53d0",
      "READ",
      [
        "storage",
        "00c9b4a8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006d5168",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "dword"
      ]
    ],
    [
      "006d516c",
      "DATA",
      [
        "storage",
        "003c9690",
        "fde_003c9690",
        "dword"
      ]
    ],
    [
      "006d53d0",
      "READ",
      [
        "storage",
        "00c9b578",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d51bc ["INT_ADD", "register:40f0:8", ["const:6d51bc:8", "const:4:8"]]
- 006d51bc ["CALL", null, ["callee:0046969c:8"]]
+ 006d5214 ["INT_ADD", "register:40f0:8", ["const:6d5214:8", "const:4:8"]]
+ 006d5214 ["CALL", null, ["callee:0046969c:8"]]
- 006d51e8 ["INT_ADD", "register:40f0:8", ["const:6d51e8:8", "const:4:8"]]
- 006d51e8 ["CALL", null, ["callee:00468fc8:8"]]
+ 006d5240 ["INT_ADD", "register:40f0:8", ["const:6d5240:8", "const:4:8"]]
+ 006d5240 ["CALL", null, ["callee:00468fc8:8"]]
- 006d53a8 ["INT_ADD", "register:40f0:8", ["const:6d53a8:8", "const:4:8"]]
- 006d53a8 ["CALL", null, ["callee:00468fc8:8"]]
+ 006d5400 ["INT_ADD", "register:40f0:8", ["const:6d5400:8", "const:4:8"]]
+ 006d5400 ["CALL", null, ["callee:00468fc8:8"]]
~~~


<a id="compare-963e8992fefa90bc3faba2198aae2d84"></a>

### [`006d5fc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d5/006d5fc8.md) → [`006d6020`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6020.md) FUN_006d6020

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006d5ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d5/006d5ea4.md) [`0078bc3c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0078b/0078bc3c.md) · 呼出先 0件 
- 新版 呼出元 2件 [`006d5efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5efc.md) [`0078bc94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0078b/0078bc94.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 99.06% / 新版 99.06%

優先判定に残った影響 `return_value_candidate` 2件

アドレスに依存する影響 `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "006d6164",
      "incomplete_value": true,
      "site": "006d616c",
      "value": [
        "live",
        "register:4018:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "006d6164",
      "incomplete_value": true,
      "site": "006d616c",
      "value": [
        "live",
        "register:4050:8"
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
      "unmatched:006d60f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d6160"
      ]
    ]
  ],
  "added": [
    [
      "006d6150",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d6160"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d60f8 ["CBRANCH", null, ["local:b31:8", "register:101:1"]]
+ 006d6150 ["CBRANCH", null, ["local:b32:8", "register:101:1"]]
~~~


<a id="compare-790dcec6c9bf60e4923f9e8194dc55be"></a>

### [`006d6170`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d6170.md) → [`006d61c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d61c8.md) FUN_006d61c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006cb0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb0b4.md) · 呼出先 0件 
- 新版 呼出元 1件 [`006cb10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb10c.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, control_flow, operands_and_dependencies, return_value_candidate

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `return_value_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "006d6268",
      "incomplete_value": true,
      "site": "006d6270",
      "value": [
        "live",
        "register:4008:8"
      ]
    },
    "ordinal": 2,
    "slot": 0
  }
]
~~~


~~~diff
- 006d6178 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 006d61d0 ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
- 006d6188 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006d6188 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 006d61e0 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006d61e0 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
- 006d6198 ["CBRANCH", null, ["local:b13:8", "register:101:1"]]
+ 006d61f0 ["CBRANCH", null, ["local:b12:8", "register:101:1"]]
~~~


<a id="compare-f6bfbcfe41bc87fab9948b5404ff0ab1"></a>

### [`006d635c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d635c.md) → [`006d63b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d63b4.md) FUN_006d63b4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`006cb540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cb/006cb540.md) [`006d635c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d635c.md) [`006d66d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d66d8.md) · 呼出先 3件 [`006d635c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d635c.md) [`006d66d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d66d8.md) [`006d69b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d69b0.md)
- 新版 呼出元 3件 [`006cb598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb598.md) [`006d63b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d63b4.md) [`006d6730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6730.md) · 呼出先 3件 [`006d63b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d63b4.md) [`006d6730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6730.md) [`006d6a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6a08.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006d6400 ["INT_ADD", "register:40f0:8", ["const:6d6400:8", "const:4:8"]]
- 006d6400 ["CALL", null, ["local:b0:8"]]
+ 006d6458 ["INT_ADD", "register:40f0:8", ["const:6d6458:8", "const:4:8"]]
+ 006d6458 ["CALL", null, ["local:b0:8"]]
- 006d6418 ["INT_ADD", "register:40f0:8", ["const:6d6418:8", "const:4:8"]]
- 006d6418 ["CALL", null, ["local:b0:8"]]
+ 006d6470 ["INT_ADD", "register:40f0:8", ["const:6d6470:8", "const:4:8"]]
+ 006d6470 ["CALL", null, ["local:b0:8"]]
- 006d64e8 ["INT_ADD", "register:40f0:8", ["const:6d64e8:8", "const:4:8"]]
- 006d64e8 ["CALL", null, ["callee:006d6730:8"]]
+ 006d6540 ["INT_ADD", "register:40f0:8", ["const:6d6540:8", "const:4:8"]]
+ 006d6540 ["CALL", null, ["callee:006d6730:8"]]
~~~


<a id="compare-ab4f173d0e8b280cdeef04782da7b0d7"></a>

### [`006d66d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d66d8.md) → [`006d6730`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6730.md) FUN_006d6730

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`006d635c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d635c.md) · 呼出先 1件 [`006d635c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d635c.md)
- 新版 呼出元 1件 [`006d63b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d63b4.md) · 呼出先 1件 [`006d63b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d63b4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 96.70% / 新版 96.70%

~~~diff
- 006d6828 ["INT_ADD", "register:40f0:8", ["const:6d6828:8", "const:4:8"]]
- 006d6828 ["CALL", null, ["callee:006d63b4:8"]]
+ 006d6880 ["INT_ADD", "register:40f0:8", ["const:6d6880:8", "const:4:8"]]
+ 006d6880 ["CALL", null, ["callee:006d63b4:8"]]
- 006d6840 ["INT_ADD", "register:40f0:8", ["const:6d6840:8", "const:4:8"]]
- 006d6840 ["CALL", null, ["callee:006d63b4:8"]]
+ 006d6898 ["INT_ADD", "register:40f0:8", ["const:6d6898:8", "const:4:8"]]
+ 006d6898 ["CALL", null, ["callee:006d63b4:8"]]
- 006d6970 ["COPY", "tmp:0:8", ["const:1:8"]]
- 006d6970 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d6970 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d6970 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-020715147d117cf8e2e9d1e856df35cc"></a>

### [`006d69b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d69b0.md) → [`006d6a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6a08.md) FUN_006d6a08

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006d635c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d635c.md) [`006d69b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d69b0.md) · 呼出先 1件 [`006d69b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d6/006d69b0.md)
- 新版 呼出元 2件 [`006d63b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d63b4.md) [`006d6a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6a08.md) · 呼出先 1件 [`006d6a08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d6/006d6a08.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.23% / 新版 92.23%

優先判定に残った影響 `unresolved_branch_alignment` 9件, `unresolved_store_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006d69c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d69c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d69c8",
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
      "006d6a18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006d6a1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006d6a20",
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
- 006d69b0 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
- 006d69b0 ["CBRANCH", null, ["local:b96:8", "tmp:0:1"]]
+ 006d6a08 ["INT_EQUAL", "tmp:0:1", ["register:4020:8", "const:0:8"]]
+ 006d6a08 ["CBRANCH", null, ["local:b95:8", "tmp:0:1"]]
- 006d69c0 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 006d69c0 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 006d69c0 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 006d69c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006d69c4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006d69c4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006d69c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 006d69c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-71b3c7a18734baa3b6f546d8bf918b94"></a>

### [`006d7088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7088.md) → [`006d70e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70e0.md) FUN_006d70e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006cfeec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cf/006cfeec.md) · 呼出先 10件 [`006d738c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d738c.md) [`006d7650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7650.md) [`006d76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`006d76e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76e4.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md)
- 新版 呼出元 1件 [`006cff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cf/006cff44.md) · 呼出先 10件 [`006d73e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d73e4.md) [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 93.72% / 新版 93.72%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d733c",
      "incomplete_value": true,
      "site": "006d7344",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7338",
      "incomplete_value": true,
      "site": "006d7344",
      "value": [
        "INT_SRIGHT",
        "8",
        [
          [
            "INT_SUB",
            "8",
            [
              [
                "live",
                "register:4050:8"
              ],
              [
                "live",
                "register:4040:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:2:8"
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
      "definition_site": "006d73a0",
      "incomplete_value": false,
      "site": "006d73a4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:f75:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7348",
      "incomplete_value": false,
      "site": "006d734c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2a9000:8"
          ],
          [
            "leaf",
            "const:fd1:8"
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
      "unmatched:006d71b0",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d71c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7310"
      ]
    ],
    [
      "006d73a0",
      "PARAM",
      [
        "storage",
        "002a9fd1",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006d7208",
      "READ",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "006d721c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7310"
      ]
    ],
    [
      "006d73a0",
      "PARAM",
      [
        "storage",
        "002a9f75",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d72ec ["INT_ADD", "register:40f0:8", ["const:6d72ec:8", "const:4:8"]]
- 006d72ec ["CALL", null, ["callee:00c5a960:8"]]
+ 006d7344 ["INT_ADD", "register:40f0:8", ["const:6d7344:8", "const:4:8"]]
+ 006d7344 ["CALL", null, ["callee:00c5a960:8"]]
- 006d734c ["INT_ADD", "register:40f0:8", ["const:6d734c:8", "const:4:8"]]
- 006d734c ["CALL", null, ["callee:006d76a8:8"]]
+ 006d73a4 ["INT_ADD", "register:40f0:8", ["const:6d73a4:8", "const:4:8"]]
+ 006d73a4 ["CALL", null, ["callee:006d76a8:8"]]
- 006d70dc ["CBRANCH", null, ["local:b28:8", "register:102:1"]]
+ 006d7134 ["CBRANCH", null, ["local:b29:8", "register:102:1"]]
~~~


<a id="compare-1408697cf9ab7b6733767e500b123289"></a>

### [`006d738c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d738c.md) → [`006d73e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d73e4.md) FUN_006d73e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006d7088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7088.md) [`007f3e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3e8c.md) · 呼出先 8件 [`006d76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) [`00c53f5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53f5c.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`006d70e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70e0.md) [`007f3ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3ee4.md) · 呼出先 8件 [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 91.53% / 新版 91.53%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d74b8",
      "incomplete_value": true,
      "site": "006d74d4",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "006d74c0",
      "incomplete_value": true,
      "site": "006d74d4",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "live",
            "register:4040:8"
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
      "definition_site": "006d74c4",
      "incomplete_value": true,
      "site": "006d74d4",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:006d7404",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d749c"
      ]
    ],
    [
      "006d7478",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006d7608"
      ]
    ],
    [
      "unmatched:006d744c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d74f0"
      ]
    ]
  ],
  "added": [
    [
      "006d745c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d749c"
      ]
    ],
    [
      "006d7478",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7660"
      ]
    ],
    [
      "006d74a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d74f0"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d747c ["INT_ADD", "register:40f0:8", ["const:6d747c:8", "const:4:8"]]
- 006d747c ["CALL", null, ["callee:00c5a970:8"]]
+ 006d74d4 ["INT_ADD", "register:40f0:8", ["const:6d74d4:8", "const:4:8"]]
+ 006d74d4 ["CALL", null, ["callee:00c5a970:8"]]
- 006d7630 ["INT_ADD", "register:40f0:8", ["const:6d7630:8", "const:4:8"]]
- 006d7630 ["CALL", null, ["callee:00c57f80:8"]]
+ 006d7688 ["INT_ADD", "register:40f0:8", ["const:6d7688:8", "const:4:8"]]
+ 006d7688 ["CALL", null, ["callee:00c57f80:8"]]
- 006d73e0 ["CBRANCH", null, ["local:b24:8", "register:101:1"]]
+ 006d7438 ["CBRANCH", null, ["local:b25:8", "register:101:1"]]
~~~


<a id="compare-765c86ad8807335b5d4990dedcb8a528"></a>

### [`006d7650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7650.md) → [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) FUN_006d76a8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`006d7088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7088.md) [`006d777c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d777c.md) [`007f3e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3e8c.md) [`007f4190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4190.md) · 呼出先 4件 [`006d76b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76b4.md) [`00c37d5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c37/00c37d5c.md) [`00c57ef0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ef0.md) [`00c57f10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f10.md)
- 新版 呼出元 4件 [`006d70e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70e0.md) [`006d77d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d77d4.md) [`007f3ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3ee4.md) [`007f41e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f41e8.md) · 呼出先 4件 [`006d770c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d770c.md) [`00c37df8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37df8.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d76d8",
      "incomplete_value": true,
      "site": "006d76e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:618:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7680",
      "incomplete_value": true,
      "site": "006d7688",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:548:8"
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
      "definition_site": "006d76dc",
      "incomplete_value": true,
      "site": "006d76e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:620:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7684",
      "incomplete_value": true,
      "site": "006d7688",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:550:8"
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
      "006d76d8",
      "READ",
      [
        "storage",
        "00c9b548",
        null,
        "pointer"
      ]
    ],
    [
      "006d76d8",
      "PARAM",
      [
        "storage",
        "00c96870",
        "std::range_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006d76dc",
      "READ",
      [
        "storage",
        "00c9b550",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006d76d8",
      "READ",
      [
        "storage",
        "00c9b618",
        null,
        "pointer"
      ]
    ],
    [
      "006d76d8",
      "PARAM",
      [
        "storage",
        "00c96940",
        "std::range_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006d76dc",
      "READ",
      [
        "storage",
        "00c9b620",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7688 ["INT_ADD", "register:40f0:8", ["const:6d7688:8", "const:4:8"]]
- 006d7688 ["CALL", null, ["callee:00c57fe0:8"]]
+ 006d76e0 ["INT_ADD", "register:40f0:8", ["const:6d76e0:8", "const:4:8"]]
+ 006d76e0 ["CALL", null, ["callee:00c57fe0:8"]]
- 006d7664 ["INT_ADD", "register:40f0:8", ["const:6d7664:8", "const:4:8"]]
- 006d7664 ["CALL", null, ["callee:00c57fc0:8"]]
+ 006d76bc ["INT_ADD", "register:40f0:8", ["const:6d76bc:8", "const:4:8"]]
+ 006d76bc ["CALL", null, ["callee:00c57fc0:8"]]
- 006d7670 ["INT_ADD", "register:40f0:8", ["const:6d7670:8", "const:4:8"]]
- 006d7670 ["CALL", null, ["callee:006d770c:8"]]
+ 006d76c8 ["INT_ADD", "register:40f0:8", ["const:6d76c8:8", "const:4:8"]]
+ 006d76c8 ["CALL", null, ["callee:006d770c:8"]]
~~~


<a id="compare-b3934c920e214076eb72b3ce5b5a71ed"></a>

### [`006d76a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76a0.md) → [`006d76f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76f8.md) FUN_006d76f8

根拠 `code_and_unique_call_neighborhood` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 25件 [`006cfeec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cf/006cfeec.md) [`006d7088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7088.md) [`006d738c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d738c.md) [`006d76e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d76e4.md) [`007f3e8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f3/007f3e8c.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 25件 [`006cff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cf/006cff44.md) [`006d70e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d70e0.md) [`006d73e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d73e4.md) [`006d773c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d773c.md) [`007f3ee4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f3/007f3ee4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7704",
      "incomplete_value": false,
      "site": "006d7708",
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
      "definition_site": "006d76ac",
      "incomplete_value": false,
      "site": "006d76b0",
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
      "006d7704",
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
      "006d7704",
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
- 006d76b0 ["INT_ADD", "register:40f0:8", ["const:6d76b0:8", "const:4:8"]]
- 006d76b0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 006d7708 ["INT_ADD", "register:40f0:8", ["const:6d7708:8", "const:4:8"]]
+ 006d7708 ["CALL", null, ["callee:0043b7b8:8"]]
- 006d76ac ["COPY", "tmp:0:8", ["const:f23:8"]]
- 006d76ac ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006d76ac ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006d76ac ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006d7704 ["COPY", "tmp:0:8", ["const:ecf:8"]]
+ 006d7704 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006d7704 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006d7704 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-283ef82627795c5b00ebb1ae48336458"></a>

### [`006d777c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d777c.md) → [`006d77d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d77d4.md) FUN_006d77d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006cfeec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006cf/006cfeec.md) · 呼出先 9件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`006d7650`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7650.md) [`006d7b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7b90.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`006cff44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cf/006cff44.md) · 呼出先 9件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`006d76a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d76a8.md) [`006d7be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7be8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 99.18% / 新版 99.18%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7b7c",
      "incomplete_value": false,
      "site": "006d7b80",
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
            "const:b7b:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7b24",
      "incomplete_value": false,
      "site": "006d7b28",
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
            "const:bd7:8"
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
      "unmatched:006d7b1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7be4"
      ]
    ],
    [
      "006d7b7c",
      "PARAM",
      [
        "storage",
        "002a7bd7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006d7b74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7be4"
      ]
    ],
    [
      "006d7b7c",
      "PARAM",
      [
        "storage",
        "002a7b7b",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7b28 ["INT_ADD", "register:40f0:8", ["const:6d7b28:8", "const:4:8"]]
- 006d7b28 ["CALL", null, ["callee:006d76a8:8"]]
+ 006d7b80 ["INT_ADD", "register:40f0:8", ["const:6d7b80:8", "const:4:8"]]
+ 006d7b80 ["CALL", null, ["callee:006d76a8:8"]]
- 006d780c ["INT_ADD", "register:40f0:8", ["const:6d780c:8", "const:4:8"]]
- 006d780c ["CALL", null, ["callee:00c57f60:8"]]
+ 006d7864 ["INT_ADD", "register:40f0:8", ["const:6d7864:8", "const:4:8"]]
+ 006d7864 ["CALL", null, ["callee:00c57f60:8"]]
- 006d782c ["INT_ADD", "register:40f0:8", ["const:6d782c:8", "const:4:8"]]
- 006d782c ["CALL", null, ["callee:00c58160:8"]]
+ 006d7884 ["INT_ADD", "register:40f0:8", ["const:6d7884:8", "const:4:8"]]
+ 006d7884 ["CALL", null, ["callee:00c58160:8"]]
~~~


<a id="compare-65d04e975772368bedb9f846b39ee4a1"></a>

### [`006d7b90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7b90.md) → [`006d7be8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7be8.md) FUN_006d7be8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006d777c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d777c.md) [`007f4190`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/007f4/007f4190.md) · 呼出先 7件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c57f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`006d77d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d77d4.md) [`007f41e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007f4/007f41e8.md) · 呼出先 7件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58050`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58050.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.56% / 新版 91.56%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d7cb0",
      "incomplete_value": true,
      "site": "006d7ccc",
      "value": [
        "live",
        "register:4040:8"
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
      "definition_site": "006d7cb8",
      "incomplete_value": true,
      "site": "006d7ccc",
      "value": [
        "live",
        "register:4048:8"
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
      "definition_site": "006d7cbc",
      "incomplete_value": true,
      "site": "006d7ccc",
      "value": [
        "live",
        "register:40a8:8"
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
      "unmatched:006d7be4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7e04"
      ]
    ],
    [
      "unmatched:006d7c00",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7c90"
      ]
    ],
    [
      "unmatched:006d7d88",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7dd4"
      ]
    ]
  ],
  "added": [
    [
      "006d7c3c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7e04"
      ]
    ],
    [
      "006d7c58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7c90"
      ]
    ],
    [
      "006d7de0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7dd4"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7c74 ["INT_ADD", "register:40f0:8", ["const:6d7c74:8", "const:4:8"]]
- 006d7c74 ["CALL", null, ["callee:00c5a9b0:8"]]
+ 006d7ccc ["INT_ADD", "register:40f0:8", ["const:6d7ccc:8", "const:4:8"]]
+ 006d7ccc ["CALL", null, ["callee:00c5a9b0:8"]]
- 006d7be4 ["CBRANCH", null, ["local:b25:8", "register:101:1"]]
- 006d7be8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:10:8"]]
- 006d7be8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ac460196278eabc294768c7c2c434c62"></a>

### [`006d7e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7e28.md) → [`006d7e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7e80.md) FUN_006d7e80

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
      "definition_site": "006d7ea4",
      "incomplete_value": false,
      "site": "006d7ea4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:3e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7e4c",
      "incomplete_value": false,
      "site": "006d7e4c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
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
      "006d7ea4",
      "DATA",
      [
        "storage",
        "00c76318",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d7ea4",
      "DATA",
      [
        "storage",
        "00c763e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7e3c ["INT_ADD", "register:40f0:8", ["const:6d7e3c:8", "const:4:8"]]
- 006d7e3c ["CALL", null, ["callee:00c57f60:8"]]
+ 006d7e94 ["INT_ADD", "register:40f0:8", ["const:6d7e94:8", "const:4:8"]]
+ 006d7e94 ["CALL", null, ["callee:00c57f60:8"]]
- 006d7e48 ["COPY", "tmp:0:8", ["const:318:8"]]
- 006d7e48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d7e48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d7e48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d7ea0 ["COPY", "tmp:0:8", ["const:3e8:8"]]
+ 006d7ea0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d7ea0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d7ea0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4d6adae8c64fb35dfbf666b053dd1719"></a>

### [`006d7e5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7e5c.md) → [`006d7eb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7eb4.md) FUN_006d7eb4

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
      "definition_site": "006d7ec0",
      "incomplete_value": false,
      "site": "006d7ec0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:3e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d7e68",
      "incomplete_value": false,
      "site": "006d7e68",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
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
      "006d7ec0",
      "DATA",
      [
        "storage",
        "00c76318",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d7ec0",
      "DATA",
      [
        "storage",
        "00c763e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d7e64 ["COPY", "tmp:0:8", ["const:318:8"]]
- 006d7e64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006d7e64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006d7e64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006d7ebc ["COPY", "tmp:0:8", ["const:3e8:8"]]
+ 006d7ebc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006d7ebc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006d7ebc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-c74300e550244a9420d8035077374995"></a>

### [`006d7e78`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7e78.md) → [`006d7ed0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7ed0.md) FUN_006d7ed0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006d4c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d4/006d4c44.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006d4c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d4/006d4c9c.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 80.95% / 新版 80.95%

優先判定に残った影響 `call_target` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d7efc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d7ea4",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:006d7e98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006d7ea0",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7f04"
      ]
    ],
    [
      "006d7efc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006d7ef0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d7ef8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006d7f04"
      ]
    ],
    [
      "006d7efc",
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
- 006d7ea4 ["INT_ADD", "register:40f0:8", ["const:6d7ea4:8", "const:4:8"]]
- 006d7ea4 ["CALL", null, ["ram:47acf4:8"]]
+ 006d7efc ["INT_ADD", "register:40f0:8", ["const:6d7efc:8", "const:4:8"]]
+ 006d7efc ["CALL", null, ["ram:47ad34:8"]]
- 006d7e90 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 006d7ee8 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 006d7e94 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006d7e94 ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 006d7eec ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006d7eec ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-b0bfdaddf2e3cc2bd0f9f377f10b06e4"></a>

### [`006d8208`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8208.md) → [`006d8260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8260.md) FUN_006d8260

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
      "definition_site": "006d8284",
      "incomplete_value": false,
      "site": "006d8284",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d822c",
      "incomplete_value": false,
      "site": "006d822c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:398:8"
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
      "006d8284",
      "DATA",
      [
        "storage",
        "00c76398",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8284",
      "DATA",
      [
        "storage",
        "00c76468",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d821c ["INT_ADD", "register:40f0:8", ["const:6d821c:8", "const:4:8"]]
- 006d821c ["CALL", null, ["callee:00c57f60:8"]]
+ 006d8274 ["INT_ADD", "register:40f0:8", ["const:6d8274:8", "const:4:8"]]
+ 006d8274 ["CALL", null, ["callee:00c57f60:8"]]
- 006d8228 ["COPY", "tmp:0:8", ["const:398:8"]]
- 006d8228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d8228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d8228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d8280 ["COPY", "tmp:0:8", ["const:468:8"]]
+ 006d8280 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8280 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8280 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-03954aca06f41985e10c8667038b9f75"></a>

### [`006d823c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d823c.md) → [`006d8294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8294.md) FUN_006d8294

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
      "definition_site": "006d82a0",
      "incomplete_value": false,
      "site": "006d82a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:468:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d8248",
      "incomplete_value": false,
      "site": "006d8248",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
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
      "006d82a0",
      "DATA",
      [
        "storage",
        "00c76398",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d82a0",
      "DATA",
      [
        "storage",
        "00c76468",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8244 ["COPY", "tmp:0:8", ["const:398:8"]]
- 006d8244 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006d8244 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006d8244 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006d829c ["COPY", "tmp:0:8", ["const:468:8"]]
+ 006d829c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006d829c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006d829c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d583b9353c38e1444052f3e378f704c6"></a>

### [`006d8258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8258.md) → [`006d82b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d82b0.md) FUN_006d82b0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`00459d74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00459/00459d74.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`006d4c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d4/006d4c44.md) [`006d7ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d7/006d7ef4.md)
- 新版 呼出元 0件  · 呼出先 6件 [`00459db4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00459/00459db4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006d4c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d4/006d4c9c.md) [`006d7f4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7f4c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.10% / 新版 97.10%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d82d8",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8280",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "006d82e4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d828c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "006d82d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006d82e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006d8364",
      "DATA",
      [
        "storage",
        "0039ba9c",
        null,
        "qword"
      ]
    ]
  ],
  "added": [
    [
      "006d82d8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d82e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d8364",
      "DATA",
      [
        "storage",
        "0039ba9c",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8280 ["INT_ADD", "register:40f0:8", ["const:6d8280:8", "const:4:8"]]
- 006d8280 ["CALL", null, ["ram:47acf4:8"]]
+ 006d82d8 ["INT_ADD", "register:40f0:8", ["const:6d82d8:8", "const:4:8"]]
+ 006d82d8 ["CALL", null, ["ram:47ad34:8"]]
- 006d828c ["INT_ADD", "register:40f0:8", ["const:6d828c:8", "const:4:8"]]
- 006d828c ["CALL", null, ["ram:47acf4:8"]]
+ 006d82e4 ["INT_ADD", "register:40f0:8", ["const:6d82e4:8", "const:4:8"]]
+ 006d82e4 ["CALL", null, ["ram:47ad34:8"]]
- 006d82d8 ["INT_ADD", "register:40f0:8", ["const:6d82d8:8", "const:4:8"]]
- 006d82d8 ["CALL", null, ["callee:006d7f4c:8"]]
+ 006d8330 ["INT_ADD", "register:40f0:8", ["const:6d8330:8", "const:4:8"]]
+ 006d8330 ["CALL", null, ["callee:006d7f4c:8"]]
~~~


<a id="compare-f345237e3f5a71b11765d6dbf8c8f428"></a>

### [`006d8398`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8398.md) → [`006d83f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d83f0.md) FUN_006d83f0

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
      "definition_site": "006d8414",
      "incomplete_value": false,
      "site": "006d8414",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d83bc",
      "incomplete_value": false,
      "site": "006d83bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:418:8"
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
      "006d8414",
      "DATA",
      [
        "storage",
        "00c76418",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8414",
      "DATA",
      [
        "storage",
        "00c764e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d83ac ["INT_ADD", "register:40f0:8", ["const:6d83ac:8", "const:4:8"]]
- 006d83ac ["CALL", null, ["callee:00c57f60:8"]]
+ 006d8404 ["INT_ADD", "register:40f0:8", ["const:6d8404:8", "const:4:8"]]
+ 006d8404 ["CALL", null, ["callee:00c57f60:8"]]
- 006d83b8 ["COPY", "tmp:0:8", ["const:418:8"]]
- 006d83b8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d83b8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d83b8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d8410 ["COPY", "tmp:0:8", ["const:4e8:8"]]
+ 006d8410 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8410 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8410 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-26baa9b299a1f46d69cb722dda67174f"></a>

### [`006d83cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d83cc.md) → [`006d8424`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8424.md) FUN_006d8424

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
      "definition_site": "006d8430",
      "incomplete_value": false,
      "site": "006d8430",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:4e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d83d8",
      "incomplete_value": false,
      "site": "006d83d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
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
      "006d8430",
      "DATA",
      [
        "storage",
        "00c76418",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8430",
      "DATA",
      [
        "storage",
        "00c764e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d83d4 ["COPY", "tmp:0:8", ["const:418:8"]]
- 006d83d4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006d83d4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006d83d4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006d842c ["COPY", "tmp:0:8", ["const:4e8:8"]]
+ 006d842c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006d842c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006d842c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b346b92630872406124883d98fd5d9e7"></a>

### [`006d83e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d83e8.md) → [`006d8440`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8440.md) FUN_006d8440

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 11件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00676a60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00676/00676a60.md) [`006c4e6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006c4/006c4e6c.md) [`006d1258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d1/006d1258.md)
- 新版 呼出元 0件  · 呼出先 11件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006c4ec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4ec4.md) [`006d12b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d1/006d12b0.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 93.78% / 新版 93.78%

優先判定に残った影響 `call_target` 2件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8484",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d842c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "006d84ac",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d8454",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "006d8484",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006d84ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006d8550",
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
      "006d8484",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d84ac",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d85a8",
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
- 006d842c ["INT_ADD", "register:40f0:8", ["const:6d842c:8", "const:4:8"]]
- 006d842c ["CALL", null, ["ram:47acf4:8"]]
+ 006d8484 ["INT_ADD", "register:40f0:8", ["const:6d8484:8", "const:4:8"]]
+ 006d8484 ["CALL", null, ["ram:47ad34:8"]]
- 006d8454 ["INT_ADD", "register:40f0:8", ["const:6d8454:8", "const:4:8"]]
- 006d8454 ["CALL", null, ["ram:47acf4:8"]]
+ 006d84ac ["INT_ADD", "register:40f0:8", ["const:6d84ac:8", "const:4:8"]]
+ 006d84ac ["CALL", null, ["ram:47ad34:8"]]
- 006d8484 ["INT_ADD", "register:40f0:8", ["const:6d8484:8", "const:4:8"]]
- 006d8484 ["CALL", null, ["callee:006c4ec4:8"]]
+ 006d84dc ["INT_ADD", "register:40f0:8", ["const:6d84dc:8", "const:4:8"]]
+ 006d84dc ["CALL", null, ["callee:006c4ec4:8"]]
~~~


<a id="compare-1e0091067d4edfe81691098f449a8db3"></a>

### [`006d8718`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8718.md) → [`006d8770`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8770.md) FUN_006d8770

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
      "definition_site": "006d8794",
      "incomplete_value": false,
      "site": "006d8794",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:568:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d873c",
      "incomplete_value": false,
      "site": "006d873c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:498:8"
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
      "006d8794",
      "DATA",
      [
        "storage",
        "00c76498",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8794",
      "DATA",
      [
        "storage",
        "00c76568",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d872c ["INT_ADD", "register:40f0:8", ["const:6d872c:8", "const:4:8"]]
- 006d872c ["CALL", null, ["callee:00c57f60:8"]]
+ 006d8784 ["INT_ADD", "register:40f0:8", ["const:6d8784:8", "const:4:8"]]
+ 006d8784 ["CALL", null, ["callee:00c57f60:8"]]
- 006d8738 ["COPY", "tmp:0:8", ["const:498:8"]]
- 006d8738 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d8738 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d8738 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d8790 ["COPY", "tmp:0:8", ["const:568:8"]]
+ 006d8790 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8790 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8790 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-700c03038d6b155142aa328b69dc26d0"></a>

### [`006d8cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d8/006d8cb0.md) → [`006d8d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8d08.md) FUN_006d8d08

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
      "definition_site": "006d8d2c",
      "incomplete_value": false,
      "site": "006d8d2c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:5e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d8cd4",
      "incomplete_value": false,
      "site": "006d8cd4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:518:8"
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
      "006d8d2c",
      "DATA",
      [
        "storage",
        "00c76518",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d8d2c",
      "DATA",
      [
        "storage",
        "00c765e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d8cc4 ["INT_ADD", "register:40f0:8", ["const:6d8cc4:8", "const:4:8"]]
- 006d8cc4 ["CALL", null, ["callee:00c57f60:8"]]
+ 006d8d1c ["INT_ADD", "register:40f0:8", ["const:6d8d1c:8", "const:4:8"]]
+ 006d8d1c ["CALL", null, ["callee:00c57f60:8"]]
- 006d8cd0 ["COPY", "tmp:0:8", ["const:518:8"]]
- 006d8cd0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d8cd0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d8cd0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d8d28 ["COPY", "tmp:0:8", ["const:5e8:8"]]
+ 006d8d28 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8d28 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d8d28 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-98af1cfacdbec23071ed1e0c8f8c5846"></a>

### [`006d9834`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9834.md) → [`006d988c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d988c.md) FUN_006d988c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006d9834",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d9838",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d9858",
      "DATA",
      [
        "storage",
        "00c76598",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d988c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006d9890",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006d98b0",
      "DATA",
      [
        "storage",
        "00c76668",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d9834 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006d9834 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006d9834 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006d9834 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006d9838 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006d9838 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006d983c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-62f0aaebc75e66bfc19e4a6b88c9d26d"></a>

### [`006d9884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9884.md) → [`006d98dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d98dc.md) FUN_006d98dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a468d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468d8.md) [`00a468f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468f0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a4692c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a4692c.md) [`00a46944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46944.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 91.49% / 新版 91.49%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d995c",
      "incomplete_value": false,
      "site": "006d9964",
      "value": [
        "leaf",
        "const:a:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006d9960",
      "incomplete_value": false,
      "site": "006d9964",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "old": null,
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
      "unmatched:006d989c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d990c"
      ]
    ],
    [
      "006d98f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006d9900"
      ]
    ],
    [
      "006d9910",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006d9928"
      ]
    ]
  ],
  "added": [
    [
      "006d98f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d990c"
      ]
    ],
    [
      "006d98f8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d9958"
      ]
    ],
    [
      "006d9910",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d9980"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d990c ["INT_ADD", "register:40f0:8", ["const:6d990c:8", "const:4:8"]]
- 006d990c ["CALL", null, ["callee:0047ce14:8"]]
+ 006d9964 ["INT_ADD", "register:40f0:8", ["const:6d9964:8", "const:4:8"]]
+ 006d9964 ["CALL", null, ["callee:0047ce14:8"]]
- 006d989c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006d989c ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 006d989c ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 006d989c ["CBRANCH", null, ["local:b7:8", "tmp:2:1"]]
- 006d98a8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006d98a8 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
+ 006d9900 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006d9900 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
~~~


<a id="compare-3840663e681ac01f58ac1dd8f2c85062"></a>

### [`006d996c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d996c.md) → [`006d99c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d99c4.md) FUN_006d99c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 38.46% / 新版 38.46%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006d996c",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d9970",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d9990",
      "DATA",
      [
        "storage",
        "00c76618",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d99c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006d99c8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006d99e8",
      "DATA",
      [
        "storage",
        "00c766e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d996c ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006d996c ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006d996c ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006d996c ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006d9970 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006d9970 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006d9974 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-33dc8c27e2ae752af1810249731b2e50"></a>

### [`006d99bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d99bc.md) → [`006d9a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9a14.md) FUN_006d9a14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a46bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46bb8.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_target` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9a84",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9a2c",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "006d9a48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006d9a54"
      ]
    ],
    [
      "006d9a84",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006d9a54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006d9a48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006d9aac"
      ]
    ],
    [
      "006d9a84",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d9aac",
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
- 006d99d4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006d99d4 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 006d99d4 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 006d99d4 ["CBRANCH", null, ["local:b5:8", "tmp:2:1"]]
+ 006d9a2c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006d9a2c ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
+ 006d9a2c ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
+ 006d9a2c ["CBRANCH", null, ["local:b4:8", "tmp:2:1"]]
- 006d9a2c ["INT_ADD", "register:40f0:8", ["const:6d9a2c:8", "const:4:8"]]
- 006d9a2c ["CALL", null, ["ram:47acf4:8"]]
+ 006d9a84 ["INT_ADD", "register:40f0:8", ["const:6d9a84:8", "const:4:8"]]
+ 006d9a84 ["CALL", null, ["ram:47ad34:8"]]
- 006d99d8 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006d99d8 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 006d9a30 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006d9a30 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
~~~


<a id="compare-2a41655fd35e0098143d5d6942ec87ef"></a>

### [`006d9a98`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9a98.md) → [`006d9af0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9af0.md) FUN_006d9af0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006d9abc",
      "DATA",
      [
        "storage",
        "00c76698",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006d9ac0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d9ac4",
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
      "006d9b14",
      "DATA",
      [
        "storage",
        "00c76768",
        null,
        "undefined *"
      ]
    ],
    [
      "006d9b18",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006d9b1c",
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
- 006d9aac ["INT_ADD", "register:40f0:8", ["const:6d9aac:8", "const:4:8"]]
- 006d9aac ["CALL", null, ["callee:00c57f60:8"]]
+ 006d9b04 ["INT_ADD", "register:40f0:8", ["const:6d9b04:8", "const:4:8"]]
+ 006d9b04 ["CALL", null, ["callee:00c57f60:8"]]
- 006d9ab8 ["COPY", "tmp:0:8", ["const:698:8"]]
- 006d9ab8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d9ab8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d9ab8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006d9abc ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006d9abc ["COPY", "tmp:1:8", ["register:4048:8"]]
- 006d9abc ["COPY", "tmp:2:8", ["register:4000:8"]]
- 006d9abc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2a915019be0576452b8e8a44ef38e29e"></a>

### [`006d9ae8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9ae8.md) → [`006d9b40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9b40.md) FUN_006d9b40

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0068c610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0068c/0068c610.md) [`006d4c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d4/006d4c44.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0068c668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0068c/0068c668.md) [`006d4c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d4/006d4c9c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 81.33% / 新版 81.33%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9b78",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9b20",
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
      "unmatched:006d9aec",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d9af0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006d9af4",
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
      "006d9b44",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006d9b48",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006d9b4c",
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
- 006d9b20 ["INT_ADD", "register:40f0:8", ["const:6d9b20:8", "const:4:8"]]
- 006d9b20 ["CALL", null, ["ram:47acf4:8"]]
+ 006d9b78 ["INT_ADD", "register:40f0:8", ["const:6d9b78:8", "const:4:8"]]
+ 006d9b78 ["CALL", null, ["ram:47ad34:8"]]
- 006d9b78 ["INT_ADD", "register:40f0:8", ["const:6d9b78:8", "const:4:8"]]
- 006d9b78 ["CALL", null, ["callee:00851550:8"]]
+ 006d9bd0 ["INT_ADD", "register:40f0:8", ["const:6d9bd0:8", "const:4:8"]]
+ 006d9bd0 ["CALL", null, ["callee:00851550:8"]]
- 006d9ae8 ["INT_SUB", "register:8:8", ["register:8:8", "const:50:8"]]
~~~


<a id="compare-efff5c5431353a5bbf48dab67a850021"></a>

### [`006d9c64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9c64.md) → [`006d9cbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9cbc.md) FUN_006d9cbc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006d9cdc",
      "incomplete_value": false,
      "site": "006d9ce0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:7e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d9c84",
      "incomplete_value": false,
      "site": "006d9c88",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:718:8"
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
      "006d9ce0",
      "DATA",
      [
        "storage",
        "00c76718",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d9ce0",
      "DATA",
      [
        "storage",
        "00c767e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d9c78 ["INT_ADD", "register:40f0:8", ["const:6d9c78:8", "const:4:8"]]
- 006d9c78 ["CALL", null, ["callee:00c57f60:8"]]
+ 006d9cd0 ["INT_ADD", "register:40f0:8", ["const:6d9cd0:8", "const:4:8"]]
+ 006d9cd0 ["CALL", null, ["callee:00c57f60:8"]]
- 006d9c84 ["COPY", "tmp:0:8", ["const:718:8"]]
- 006d9c84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d9c84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d9c84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d9cdc ["COPY", "tmp:0:8", ["const:7e8:8"]]
+ 006d9cdc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9cdc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9cdc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cbe093ee63522544e1276fb8c6d08aa9"></a>

### [`006d9cbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9cbc.md) → [`006d9d14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9d14.md) FUN_006d9d14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a46bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46bb8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)

変更の種類 branch_condition_or_target, call, call_target, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 98.80% / 新版 98.80%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9d48",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9cf0",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "site": "006d9d54",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006d9cfc",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "006d9d48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "006d9d54",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006d9d48",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006d9d54",
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
- 006d9cf0 ["INT_ADD", "register:40f0:8", ["const:6d9cf0:8", "const:4:8"]]
- 006d9cf0 ["CALL", null, ["ram:47acf4:8"]]
+ 006d9d48 ["INT_ADD", "register:40f0:8", ["const:6d9d48:8", "const:4:8"]]
+ 006d9d48 ["CALL", null, ["ram:47ad34:8"]]
- 006d9cfc ["INT_ADD", "register:40f0:8", ["const:6d9cfc:8", "const:4:8"]]
- 006d9cfc ["CALL", null, ["ram:47acf4:8"]]
+ 006d9d54 ["INT_ADD", "register:40f0:8", ["const:6d9d54:8", "const:4:8"]]
+ 006d9d54 ["CALL", null, ["ram:47ad34:8"]]
- 006d9cec ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 006d9cec ["CBRANCH", null, ["local:b37:8", "tmp:0:1"]]
+ 006d9d44 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 006d9d44 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
~~~


<a id="compare-80689b1ba5c786c73b97609323396209"></a>

### [`006d9f80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9f80.md) → [`006d9fd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d9/006d9fd8.md) FUN_006d9fd8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006d9ff8",
      "incomplete_value": false,
      "site": "006d9ffc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:868:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d9fa0",
      "incomplete_value": false,
      "site": "006d9fa4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:798:8"
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
      "006d9ffc",
      "DATA",
      [
        "storage",
        "00c76798",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d9ffc",
      "DATA",
      [
        "storage",
        "00c76868",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d9f94 ["INT_ADD", "register:40f0:8", ["const:6d9f94:8", "const:4:8"]]
- 006d9f94 ["CALL", null, ["callee:00c57f60:8"]]
+ 006d9fec ["INT_ADD", "register:40f0:8", ["const:6d9fec:8", "const:4:8"]]
+ 006d9fec ["CALL", null, ["callee:00c57f60:8"]]
- 006d9fa0 ["COPY", "tmp:0:8", ["const:798:8"]]
- 006d9fa0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006d9fa0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006d9fa0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006d9ff8 ["COPY", "tmp:0:8", ["const:868:8"]]
+ 006d9ff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9ff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006d9ff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f90511b4a6a4de80c948b4f36850506e"></a>

### [`006d9fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006d9/006d9fd8.md) → [`006da030`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da030.md) FUN_006da030

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.70% / 新版 88.70%

優先判定に残った影響 `call_target` 1件, `store_condition` 2件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da070",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da018",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
        "006da0cc"
      ],
      [
        "FALL_THROUGH",
        "006da124"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006da124",
      "incomplete_value": true,
      "site": "006da128",
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
      "definition_site": "006da0cc",
      "incomplete_value": true,
      "site": "006da0d0",
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
              [
                "live",
                "register:4040:8"
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
    "ordinal": 17,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006da164"
      ],
      [
        "FALL_THROUGH",
        "006da1bc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006da1bc",
      "incomplete_value": true,
      "site": "006da1c0",
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
              [
                "live",
                "register:4040:8"
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
      "definition_site": "006da164",
      "incomplete_value": true,
      "site": "006da168",
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
      "unmatched:006da00c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006da014",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006da078"
      ]
    ],
    [
      "006da070",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "006da064",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006da06c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006da078"
      ]
    ],
    [
      "006da070",
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
- 006da018 ["INT_ADD", "register:40f0:8", ["const:6da018:8", "const:4:8"]]
- 006da018 ["CALL", null, ["ram:47acf4:8"]]
+ 006da070 ["INT_ADD", "register:40f0:8", ["const:6da070:8", "const:4:8"]]
+ 006da070 ["CALL", null, ["ram:47ad34:8"]]
- 006d9ffc ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
+ 006da054 ["CBRANCH", null, ["local:b9:8", "register:101:1"]]
- 006da004 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 006da05c ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
~~~


<a id="compare-1755c80efc09a723998cd4bbb4e5603b"></a>

### [`006da2c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006da2c8.md) → [`006da320`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da320.md) FUN_006da320

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006da340",
      "incomplete_value": false,
      "site": "006da344",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:8e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006da2e8",
      "incomplete_value": false,
      "site": "006da2ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:818:8"
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
      "006da344",
      "DATA",
      [
        "storage",
        "00c76818",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006da344",
      "DATA",
      [
        "storage",
        "00c768e8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006da2dc ["INT_ADD", "register:40f0:8", ["const:6da2dc:8", "const:4:8"]]
- 006da2dc ["CALL", null, ["callee:00c57f60:8"]]
+ 006da334 ["INT_ADD", "register:40f0:8", ["const:6da334:8", "const:4:8"]]
+ 006da334 ["CALL", null, ["callee:00c57f60:8"]]
- 006da2e8 ["COPY", "tmp:0:8", ["const:818:8"]]
- 006da2e8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006da2e8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006da2e8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006da340 ["COPY", "tmp:0:8", ["const:8e8:8"]]
+ 006da340 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006da340 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006da340 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-371a2dd518dc1f596afc73c1e2833626"></a>

### [`006da320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006da320.md) → [`006da378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da378.md) FUN_006da378

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a46bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46bb8.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.16% / 新版 91.16%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006da414",
      "incomplete_value": true,
      "site": "006da418",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:88:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da5f0",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da598",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:006da330",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006da334",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006da378",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:006da5cc"
      ]
    ]
  ],
  "added": [
    [
      "006da388",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006da38c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006da3d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006da624"
      ]
    ]
  ]
}
~~~


~~~diff
- 006da418 ["INT_ADD", "register:40f0:8", ["const:6da418:8", "const:4:8"]]
- 006da418 ["CALL", null, ["callee:0043bbe4:8"]]
+ 006da470 ["INT_ADD", "register:40f0:8", ["const:6da470:8", "const:4:8"]]
+ 006da470 ["CALL", null, ["callee:0043bbe4:8"]]
- 006da598 ["INT_ADD", "register:40f0:8", ["const:6da598:8", "const:4:8"]]
- 006da598 ["CALL", null, ["ram:47acf4:8"]]
+ 006da5f0 ["INT_ADD", "register:40f0:8", ["const:6da5f0:8", "const:4:8"]]
+ 006da5f0 ["CALL", null, ["ram:47ad34:8"]]
- 006da330 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 006da330 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 006da330 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 006da330 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-708a53d1f122243e05867cbe4831f22b"></a>

### [`006da620`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006da620.md) → [`006da678`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da678.md) FUN_006da678

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006da644",
      "DATA",
      [
        "storage",
        "00c76898",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006da648",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006da64c",
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
      "006da69c",
      "DATA",
      [
        "storage",
        "00c76968",
        null,
        "undefined *"
      ]
    ],
    [
      "006da6a0",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006da6a4",
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
- 006da634 ["INT_ADD", "register:40f0:8", ["const:6da634:8", "const:4:8"]]
- 006da634 ["CALL", null, ["callee:00c57f60:8"]]
+ 006da68c ["INT_ADD", "register:40f0:8", ["const:6da68c:8", "const:4:8"]]
+ 006da68c ["CALL", null, ["callee:00c57f60:8"]]
- 006da640 ["COPY", "tmp:0:8", ["const:898:8"]]
- 006da640 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006da640 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006da640 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006da644 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006da644 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 006da644 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 006da644 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-ce904c803afba9ce3d259be64bd72ed0"></a>

### [`006da670`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006da670.md) → [`006da6c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da6c8.md) FUN_006da6c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 7件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`00492120`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492120.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`00492160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492160.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call, call_count, call_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 84.15% / 新版 84.15%

優先判定に残った影響 `call_target` 2件, `store_condition` 10件, `store_value` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006da798",
      "incomplete_value": true,
      "site": "006da798",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ca000:8"
              ],
              [
                "leaf",
                "const:a20:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006da740",
      "incomplete_value": true,
      "site": "006da740",
      "value": [
        "LOAD",
        "8",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ca000:8"
              ],
              [
                "leaf",
                "const:9e0:8"
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
      "definition_site": "006da79c",
      "incomplete_value": true,
      "site": "006da79c",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006da744",
      "incomplete_value": true,
      "site": "006da744",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 11,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da718",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006da6c0",
      "value": [
        "leaf",
        "ram:47acf4:8"
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
      "unmatched:006da694",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006da744"
      ]
    ],
    [
      "unmatched:006da6a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:006da6ac",
      "READ",
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
      "006da6ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006da744"
      ]
    ],
    [
      "006da6fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006da704",
      "READ",
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
- 006da6c0 ["INT_ADD", "register:40f0:8", ["const:6da6c0:8", "const:4:8"]]
- 006da6c0 ["CALL", null, ["ram:47acf4:8"]]
+ 006da718 ["INT_ADD", "register:40f0:8", ["const:6da718:8", "const:4:8"]]
+ 006da718 ["CALL", null, ["ram:47ad34:8"]]
- 006da6ec ["INT_ADD", "register:40f0:8", ["const:6da6ec:8", "const:4:8"]]
- 006da6ec ["CALL", null, ["callee:00851550:8"]]
+ 006da744 ["INT_ADD", "register:40f0:8", ["const:6da744:8", "const:4:8"]]
+ 006da744 ["CALL", null, ["callee:00851550:8"]]
+ 006da6fc ["INT_ADD", "register:40f0:8", ["const:6da6fc:8", "const:4:8"]]
+ 006da6fc ["CALL", null, ["ram:47ad34:8"]]
~~~


<a id="compare-c6bfb9f12656026272895613b8c6b86f"></a>

### [`006da81c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006da81c.md) → [`006da874`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006da874.md) _INIT_109

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.27% / 新版 76.27%

優先判定に残った影響 `call_argument_candidate` 12件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006da9d0",
      "incomplete_value": true,
      "site": "006da9d4",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": {
      "definition_site": "006da978",
      "incomplete_value": false,
      "site": "006da97c",
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
            "const:778:8"
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
      "definition_site": "006da968",
      "incomplete_value": false,
      "site": "006da97c",
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
                "const:778:8"
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
      "definition_site": "006da970",
      "incomplete_value": true,
      "site": "006da97c",
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
      "unmatched:006da84c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006da858",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006da874",
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
      "006da8a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "006da8b0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006da8cc",
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
- 006da97c ["INT_ADD", "register:40f0:8", ["const:6da97c:8", "const:4:8"]]
- 006da97c ["CALL", null, ["callee:0043b838:8"]]
+ 006da9d4 ["INT_ADD", "register:40f0:8", ["const:6da9d4:8", "const:4:8"]]
+ 006da9d4 ["CALL", null, ["callee:0043b838:8"]]
- 006da990 ["INT_ADD", "register:40f0:8", ["const:6da990:8", "const:4:8"]]
- 006da990 ["CALL", null, ["callee:0043b838:8"]]
+ 006da9e8 ["INT_ADD", "register:40f0:8", ["const:6da9e8:8", "const:4:8"]]
+ 006da9e8 ["CALL", null, ["callee:0043b838:8"]]
- 006da9e0 ["INT_ADD", "register:40f0:8", ["const:6da9e0:8", "const:4:8"]]
- 006da9e0 ["CALL", null, ["callee:0043b838:8"]]
+ 006daa38 ["INT_ADD", "register:40f0:8", ["const:6daa38:8", "const:4:8"]]
+ 006daa38 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-69bb4d1550afd18cff2e32c274ab7bec"></a>

### [`006dabac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006dabac.md) → [`006dac04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006dac04.md) FUN_006dac04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006dad74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006dad74.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`006f9ed8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f9/006f9ed8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`006dadcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006dadcc.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`006f9f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f9/006f9f30.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.47% / 新版 76.47%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006dac64",
      "incomplete_value": true,
      "site": "006dac6c",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 6,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006dad3c",
      "incomplete_value": true,
      "site": "006dad54",
      "value": [
        "live",
        "register:40d8:8"
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006dad44",
      "incomplete_value": true,
      "site": "006dad54",
      "value": [
        "live",
        "register:40c0:8"
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
      "unmatched:006dabb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dabb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dabb8",
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
      "006dac08",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006dac0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006dac10",
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
- 006dac6c ["INT_ADD", "register:40f0:8", ["const:6dac6c:8", "const:4:8"]]
- 006dac6c ["CALL", null, ["callee:0048797c:8"]]
+ 006dacc4 ["INT_ADD", "register:40f0:8", ["const:6dacc4:8", "const:4:8"]]
+ 006dacc4 ["CALL", null, ["callee:0048797c:8"]]
- 006dacfc ["INT_ADD", "register:40f0:8", ["const:6dacfc:8", "const:4:8"]]
- 006dacfc ["CALL", null, ["callee:00c580d0:8"]]
+ 006dad54 ["INT_ADD", "register:40f0:8", ["const:6dad54:8", "const:4:8"]]
+ 006dad54 ["CALL", null, ["callee:00c580d0:8"]]
- 006dad10 ["INT_ADD", "register:40f0:8", ["const:6dad10:8", "const:4:8"]]
- 006dad10 ["CALL", null, ["callee:00c57f80:8"]]
+ 006dad68 ["INT_ADD", "register:40f0:8", ["const:6dad68:8", "const:4:8"]]
+ 006dad68 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-ad2353d9d66ebaac8c54870ab9c2198b"></a>

### [`006dad74`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006dad74.md) → [`006dadcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006dadcc.md) FUN_006dadcc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b11d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b11d84.md) · 呼出先 9件 [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md) [`006dabac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006da/006dabac.md) [`00b110ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b110ec.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 9件 [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md) [`006dac04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006da/006dac04.md) [`00b11188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11188.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 65.00% / 新版 65.00%

優先判定に残った影響 `call_argument_candidate` 7件, `store_condition` 5件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006dae2c",
      "incomplete_value": true,
      "site": "006dae3c",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006dae30",
      "incomplete_value": true,
      "site": "006dae3c",
      "value": [
        "live",
        "register:8:8"
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
      "definition_site": "006dae34",
      "incomplete_value": false,
      "site": "006dae3c",
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
      "unmatched:006dad78",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dad7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dad80",
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
      "006dadd0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "006dadd4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "006dadd8",
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
- 006dade4 ["INT_ADD", "register:40f0:8", ["const:6dade4:8", "const:4:8"]]
- 006dade4 ["CALL", null, ["callee:00b11188:8"]]
+ 006dae3c ["INT_ADD", "register:40f0:8", ["const:6dae3c:8", "const:4:8"]]
+ 006dae3c ["CALL", null, ["callee:00b11188:8"]]
- 006dae08 ["INT_ADD", "register:40f0:8", ["const:6dae08:8", "const:4:8"]]
- 006dae08 ["CALL", null, ["callee:006dac04:8"]]
+ 006dae60 ["INT_ADD", "register:40f0:8", ["const:6dae60:8", "const:4:8"]]
+ 006dae60 ["CALL", null, ["callee:006dac04:8"]]
+ 006dae08 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:20:8"]]
+ 006dae08 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-0fdb80e48c128244c6d0020988eabdb9"></a>

### [`006db0c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006db0c8.md) → [`006db120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006db120.md) FUN_006db120

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b11d84.md) · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0048791c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048791c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 89.33% / 新版 89.33%

優先判定に残った影響 `store_destination` 1件, `store_value` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006db160",
      "incomplete_value": false,
      "site": "006db164",
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
      "definition_site": "006db108",
      "incomplete_value": false,
      "site": "006db10c",
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
      "definition_site": "006db180",
      "incomplete_value": true,
      "site": "006db18c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006db128",
      "incomplete_value": true,
      "site": "006db134",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006db17c",
      "incomplete_value": true,
      "site": "006db190",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:9a7:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006db124",
      "incomplete_value": true,
      "site": "006db138",
      "value": [
        "LOAD",
        "16",
        [
          [
            "leaf",
            "const:1b1:8"
          ],
          [
            "INT_ADD",
            "8",
            [
              [
                "leaf",
                "const:2ad000:8"
              ],
              [
                "leaf",
                "const:a03:8"
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
      "006db164",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "006db17c",
      "READ",
      [
        "storage",
        "002ada03",
        null,
        "string"
      ]
    ],
    [
      "006db17c",
      "READ",
      [
        "storage",
        "002ada13",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006db164",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "006db17c",
      "READ",
      [
        "storage",
        "002ad9a7",
        null,
        "string"
      ]
    ],
    [
      "006db17c",
      "READ",
      [
        "storage",
        "002ad9b7",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006db344 ["INT_ADD", "register:40f0:8", ["const:6db344:8", "const:4:8"]]
- 006db344 ["CALL", null, ["callee:00c57f80:8"]]
+ 006db39c ["INT_ADD", "register:40f0:8", ["const:6db39c:8", "const:4:8"]]
+ 006db39c ["CALL", null, ["callee:00c57f80:8"]]
- 006db100 ["INT_ADD", "register:40f0:8", ["const:6db100:8", "const:4:8"]]
- 006db100 ["CALL", null, ["callee:00487e60:8"]]
+ 006db158 ["INT_ADD", "register:40f0:8", ["const:6db158:8", "const:4:8"]]
+ 006db158 ["CALL", null, ["callee:00487e60:8"]]
- 006db108 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 006db108 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006db108 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006db108 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006db160 ["COPY", "tmp:0:8", ["const:e08:8"]]
+ 006db160 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006db160 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006db160 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-d625c16dca9993dc2536e2c49cbea8fb"></a>

### [`006db3e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006db3e0.md) → [`006db438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006db438.md) FUN_006db438

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006b3ba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b3/006b3ba4.md) · 呼出先 27件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046d490`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d490.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md)
- 新版 呼出元 1件 [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) · 呼出先 27件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.32% / 新版 87.32%

優先判定に残った影響 `call_argument_candidate` 7件, `store_value` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006db678",
      "incomplete_value": false,
      "site": "006db678",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:9e8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006db620",
      "incomplete_value": false,
      "site": "006db620",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:918:8"
          ]
        ]
      ]
    },
    "ordinal": 34,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006db86c",
      "incomplete_value": false,
      "site": "006db86c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:a68:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006db814",
      "incomplete_value": false,
      "site": "006db814",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c76000:8"
          ],
          [
            "leaf",
            "const:998:8"
          ]
        ]
      ]
    },
    "ordinal": 45,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006db4dc",
      "incomplete_value": true,
      "site": "006db4e4",
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
    "old": null,
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
      "006db4b4",
      "READ",
      [
        "storage",
        "00ca7d14",
        null,
        "undefined4"
      ]
    ],
    [
      "006db4d0",
      "READ",
      [
        "storage",
        "00ca7d10",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:006db49c",
      "READ",
      [
        "storage",
        "0029f32c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006db4b4",
      "READ",
      [
        "storage",
        "00ca7e14",
        null,
        "undefined4"
      ]
    ],
    [
      "006db4d0",
      "READ",
      [
        "storage",
        "00ca7e10",
        null,
        "undefined4"
      ]
    ],
    [
      "006db4f4",
      "READ",
      [
        "storage",
        "0029f2df",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006db48c ["INT_ADD", "register:40f0:8", ["const:6db48c:8", "const:4:8"]]
- 006db48c ["CALL", null, ["callee:00728a28:8"]]
+ 006db4e4 ["INT_ADD", "register:40f0:8", ["const:6db4e4:8", "const:4:8"]]
+ 006db4e4 ["CALL", null, ["callee:00728a28:8"]]
- 006db4e4 ["INT_ADD", "register:40f0:8", ["const:6db4e4:8", "const:4:8"]]
- 006db4e4 ["CALL", null, ["callee:00664800:8"]]
+ 006db53c ["INT_ADD", "register:40f0:8", ["const:6db53c:8", "const:4:8"]]
+ 006db53c ["CALL", null, ["callee:00664800:8"]]
- 006db598 ["INT_ADD", "register:40f0:8", ["const:6db598:8", "const:4:8"]]
- 006db598 ["CALL", null, ["callee:0052dd40:8"]]
+ 006db5f0 ["INT_ADD", "register:40f0:8", ["const:6db5f0:8", "const:4:8"]]
+ 006db5f0 ["CALL", null, ["callee:0052dd40:8"]]
~~~


<a id="compare-3997fffc098cbcd8c347f7e54006b9d2"></a>

### [`006dbb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006dbb6c.md) → [`006dbbc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbbc4.md) FUN_006dbbc4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006dbda8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006dbda8.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006fa0e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006fa/006fa0e0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`006dbe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbe00.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006fa138`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006fa/006fa138.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 72.09% / 新版 72.09%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006dbd00",
      "incomplete_value": true,
      "site": "006dbd08",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "old": {
      "definition_site": "006dbca8",
      "incomplete_value": true,
      "site": "006dbcb0",
      "value": [
        "INT_SUB",
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
              "INT_MULT"
            ]
          ],
          [
            "live",
            "register:40b8:8"
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
      "definition_site": "006dbc88",
      "incomplete_value": true,
      "site": "006dbcb0",
      "value": [
        "live",
        "register:40b0:8"
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
      "definition_site": "006dbc90",
      "incomplete_value": true,
      "site": "006dbcb0",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:006dbb70",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dbb74",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dbb78",
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
      "006dbbc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006dbbcc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006dbbd0",
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
- 006dbcb0 ["INT_ADD", "register:40f0:8", ["const:6dbcb0:8", "const:4:8"]]
- 006dbcb0 ["CALL", null, ["callee:00c580d0:8"]]
+ 006dbd08 ["INT_ADD", "register:40f0:8", ["const:6dbd08:8", "const:4:8"]]
+ 006dbd08 ["CALL", null, ["callee:00c580d0:8"]]
+ 006dbcb0 ["INT_LESSEQUAL", "register:105:1", ["register:4050:8", "register:4040:8"]]
+ 006dbcb0 ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:4050:8"]]
+ 006dbcb0 ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:4050:8"]]
+ 006dbcb0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 006dbb6c ["INT_SUB", "register:8:8", ["register:8:8", "const:90:8"]]
~~~


<a id="compare-11b977ba45b68afa141bfacfd7b14d28"></a>

### [`006dbda8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006dbda8.md) → [`006dbe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbe00.md) FUN_006dbe00

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006eecac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ee/006eecac.md) · 呼出先 13件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046d7b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046d/0046d7b0.md) [`006dbb6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006dbb6c.md) [`006dc114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc114.md) [`006dc3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc3f0.md)
- 新版 呼出元 1件 [`006eed04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ee/006eed04.md) · 呼出先 13件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`006dbbc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbbc4.md) [`006dc16c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc16c.md) [`006dc448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc448.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.42% / 新版 92.42%

優先判定に残った影響 `store_condition` 4件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006dbdf8"
      ],
      [
        "FALL_THROUGH",
        "006dbe50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006dbe4c",
      "incomplete_value": true,
      "site": "006dbe64",
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
                "register:40b0:8"
              ],
              [
                "live",
                "register:40d8:8"
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
      "definition_site": "006dbdf4",
      "incomplete_value": true,
      "site": "006dbe0c",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
    "ordinal": 16,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006dbdf8"
      ],
      [
        "FALL_THROUGH",
        "006dbe50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006dbe4c",
      "incomplete_value": true,
      "site": "006dbe68",
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
                "register:40b0:8"
              ],
              [
                "live",
                "register:40d8:8"
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
      "definition_site": "006dbdf4",
      "incomplete_value": true,
      "site": "006dbe10",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
    "ordinal": 17,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006dbdf8"
      ],
      [
        "FALL_THROUGH",
        "006dbe50"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006dbe4c",
      "incomplete_value": true,
      "site": "006dbe6c",
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
                "register:40b0:8"
              ],
              [
                "live",
                "register:40d8:8"
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
      "definition_site": "006dbdf4",
      "incomplete_value": true,
      "site": "006dbe14",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "8",
            [
              "LOAD",
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
      "unmatched:006dbdbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dbdc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dbddc",
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
      "006dbe14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006dbe18",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006dbe34",
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
+ 006dbe14 ["COPY", "tmp:0:8", ["register:40b0:8"]]
+ 006dbe14 ["COPY", "tmp:1:8", ["register:40a8:8"]]
+ 006dbe14 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:a0:8"]]
+ 006dbe14 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
+ 006dbe18 ["COPY", "tmp:0:8", ["register:40a0:8"]]
+ 006dbe18 ["COPY", "tmp:1:8", ["register:4098:8"]]
+ 006dbe18 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:b0:8"]]
+ 006dbe18 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006dbe68 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006dbe68 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 006dbec0 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006dbec0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-a1588ee33e50438f27499c5fe34a39a8"></a>

### [`006dc114`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc114.md) → [`006dc16c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc16c.md) FUN_006dc16c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006dbda8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006dbda8.md) · 呼出先 6件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md) [`0071d034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071d/0071d034.md) [`00728838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00728/00728838.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 1件 [`006dbe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbe00.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`0071d08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d08c.md) [`00728890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00728/00728890.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.27% / 新版 97.27%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006dc3cc",
      "incomplete_value": false,
      "site": "006dc3d0",
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
      "definition_site": "006dc374",
      "incomplete_value": false,
      "site": "006dc378",
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
      "006dc3cc",
      "PARAM",
      [
        "storage",
        "002a01bd",
        null,
        "string"
      ]
    ],
    [
      "006dc3f8",
      "READ",
      [
        "storage",
        "00ca7d14",
        null,
        "undefined4"
      ]
    ],
    [
      "006dc414",
      "READ",
      [
        "storage",
        "00ca7d10",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "006dc3cc",
      "PARAM",
      [
        "storage",
        "002a0170",
        null,
        "string"
      ]
    ],
    [
      "006dc3f8",
      "READ",
      [
        "storage",
        "00ca7e14",
        null,
        "undefined4"
      ]
    ],
    [
      "006dc414",
      "READ",
      [
        "storage",
        "00ca7e10",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dc378 ["INT_ADD", "register:40f0:8", ["const:6dc378:8", "const:4:8"]]
- 006dc378 ["CALL", null, ["callee:00442970:8"]]
+ 006dc3d0 ["INT_ADD", "register:40f0:8", ["const:6dc3d0:8", "const:4:8"]]
+ 006dc3d0 ["CALL", null, ["callee:00442970:8"]]
- 006dc1d4 ["INT_ADD", "register:40f0:8", ["const:6dc1d4:8", "const:4:8"]]
- 006dc1d4 ["CALL", null, ["callee:0071d08c:8"]]
+ 006dc22c ["INT_ADD", "register:40f0:8", ["const:6dc22c:8", "const:4:8"]]
+ 006dc22c ["CALL", null, ["callee:0071d08c:8"]]
- 006dc264 ["INT_ADD", "register:40f0:8", ["const:6dc264:8", "const:4:8"]]
- 006dc264 ["CALL", null, ["callee:00c57f60:8"]]
+ 006dc2bc ["INT_ADD", "register:40f0:8", ["const:6dc2bc:8", "const:4:8"]]
+ 006dc2bc ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-9ece652dcc48a4fd400b4809c2d4a79d"></a>

### [`006dc3f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc3f0.md) → [`006dc448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc448.md) FUN_006dc448

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006dbda8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006db/006dbda8.md) · 呼出先 5件 [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md) [`0071d034`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071d/0071d034.md) [`00728838`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00728/00728838.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`006dbe00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006db/006dbe00.md) · 呼出先 5件 [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md) [`0071d08c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071d/0071d08c.md) [`00728890`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00728/00728890.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.02% / 新版 92.02%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006dc4f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006dc538"
      ]
    ],
    [
      "unmatched:006dc534",
      "READ",
      [
        "storage",
        "00ca7d14",
        null,
        "undefined4"
      ]
    ],
    [
      "unmatched:006dc550",
      "READ",
      [
        "storage",
        "00ca7d10",
        null,
        "undefined4"
      ]
    ]
  ],
  "added": [
    [
      "006dc54c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006dc538"
      ]
    ],
    [
      "006dc58c",
      "READ",
      [
        "storage",
        "00ca7e14",
        null,
        "undefined4"
      ]
    ],
    [
      "006dc5a8",
      "READ",
      [
        "storage",
        "00ca7e10",
        null,
        "undefined4"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dc484 ["INT_ADD", "register:40f0:8", ["const:6dc484:8", "const:4:8"]]
- 006dc484 ["CALL", null, ["callee:0071d08c:8"]]
+ 006dc4dc ["INT_ADD", "register:40f0:8", ["const:6dc4dc:8", "const:4:8"]]
+ 006dc4dc ["CALL", null, ["callee:0071d08c:8"]]
- 006dc4e4 ["INT_LESSEQUAL", "register:105:1", ["register:4048:4", "register:4060:4"]]
- 006dc4e4 ["INT_SBORROW", "register:106:1", ["register:4060:4", "register:4048:4"]]
- 006dc4e4 ["INT_SUB", "tmp:0:4", ["register:4060:4", "register:4048:4"]]
- 006dc4e4 ["INT_SLESS", "register:107:1", ["tmp:0:4", "const:0:4"]]
- 006dc4e8 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006dc4e8 ["INT_ZEXT", "register:4060:8", ["tmp:0:1"]]
~~~


<a id="compare-317004093e6ec69db809b73188a9b67d"></a>

### [`006dc6ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc6ac.md) → [`006dc704`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc704.md) FUN_006dc704

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 2件 [`00480be8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480be8.md) [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006dc6d0 ["INT_ADD", "register:40f0:8", ["const:6dc6d0:8", "const:4:8"]]
- 006dc6d0 ["CALL", null, ["callee:00480c28:8"]]
+ 006dc728 ["INT_ADD", "register:40f0:8", ["const:6dc728:8", "const:4:8"]]
+ 006dc728 ["CALL", null, ["callee:00480c28:8"]]
- 006dc6e0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006dc6e0 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006dc738 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006dc738 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 006dc6fc ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
+ 006dc754 ["CBRANCH", null, ["local:b1:8", "register:101:1"]]
~~~


<a id="compare-95ce7aec6ef58ff65bec2ecb184ac3bb"></a>

### [`006dc748`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc748.md) → [`006dc7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc7a0.md) FUN_006dc7a0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 4件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`004801d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004801d8.md) [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md) [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006dc78c",
      "incomplete_value": true,
      "site": "006dc790",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:20:8"
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


~~~diff
- 006dc790 ["INT_ADD", "register:40f0:8", ["const:6dc790:8", "const:4:8"]]
- 006dc790 ["CALL", null, ["callee:0043bbe4:8"]]
+ 006dc7e8 ["INT_ADD", "register:40f0:8", ["const:6dc7e8:8", "const:4:8"]]
+ 006dc7e8 ["CALL", null, ["callee:0043bbe4:8"]]
- 006dc770 ["INT_ADD", "register:40f0:8", ["const:6dc770:8", "const:4:8"]]
- 006dc770 ["CALL", null, ["callee:00480218:8"]]
+ 006dc7c8 ["INT_ADD", "register:40f0:8", ["const:6dc7c8:8", "const:4:8"]]
+ 006dc7c8 ["CALL", null, ["callee:00480218:8"]]
- 006dc7b4 ["INT_ADD", "register:40f0:8", ["const:6dc7b4:8", "const:4:8"]]
- 006dc7b4 ["CALL", null, ["callee:00480218:8"]]
+ 006dc80c ["INT_ADD", "register:40f0:8", ["const:6dc80c:8", "const:4:8"]]
+ 006dc80c ["CALL", null, ["callee:00480218:8"]]
~~~


<a id="compare-ff83a89ea706489ddcd00921fefde7d1"></a>

### [`006dc864`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc864.md) → [`006dc8bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc8bc.md) FUN_006dc8bc

根拠 `leaf_bytes_and_unique_code_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 5件 [`0063add8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063a/0063add8.md) [`0064aa58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064a/0064aa58.md) [`0064e37c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e37c.md) [`0064e540`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064e540.md) [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) · 呼出先 0件 
- 新版 呼出元 5件 [`0063ae18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063ae18.md) [`0064aa98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064a/0064aa98.md) [`0064e3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e3bc.md) [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 100.00% / 新版 100.00%

<a id="compare-4473f46d03cfac36f4057eec6889ba5c"></a>

### [`006dc884`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc884.md) → [`006dc8dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc8dc.md) FUN_006dc8dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`0063acb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063a/0063acb4.md) [`0063add8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063a/0063add8.md) [`0063b3b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0063b/0063b3b4.md) [`0064ecb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0064e/0064ecb8.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 4件 [`0063acf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063acf4.md) [`0063ae18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063a/0063ae18.md) [`0063b3f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063b/0063b3f4.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

アドレスに依存する影響 `return_value_candidate` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "006dc92c",
      "incomplete_value": true,
      "site": "006dc938",
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
                "register:4040:4"
              ],
              [
                "live",
                "register:4098:4"
              ]
            ]
          ]
        ]
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
      "unmatched:006dc884",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dc888",
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
      "006dc8dc",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006dc8e0",
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
- 006dc884 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006dc884 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006dc884 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006dc884 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006dc888 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006dc888 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006dc88c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-0f4e1b0d234c53d17ca3c60f93711667"></a>

### [`006dc904`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc904.md) → [`006dc95c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc95c.md) FUN_006dc95c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006dd724`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dd/006dd724.md) · 呼出先 0件 
- 新版 呼出元 1件 [`006dd77c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dd/006dd77c.md) · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 73.33% / 新版 73.33%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006dc91c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006dc994"
      ]
    ],
    [
      "unmatched:006dc934",
      "DATA",
      [
        "storage",
        "002e19b8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006dc974",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006dc994"
      ]
    ],
    [
      "006dc98c",
      "DATA",
      [
        "storage",
        "002e19f8",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006dc91c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006dc91c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 006dc91c ["CBRANCH", null, ["local:b4:8", "tmp:1:1"]]
- 006dc930 ["COPY", "tmp:0:8", ["const:9b8:8"]]
- 006dc930 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006dc930 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006dc930 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 006dc934 ["INT_ZEXT", "tmp:0:8", ["register:4040:4"]]
- 006dc934 ["COPY", "tmp:1:8", ["tmp:0:8"]]
- 006dc934 ["INT_LEFT", "tmp:1:8", ["tmp:1:8", "const:2:8"]]
- 006dc934 ["INT_ADD", "tmp:2:8", ["register:4048:8", "tmp:1:8"]]
~~~


<a id="compare-4c66bfdeea126321422562909c79959a"></a>

### [`006dc940`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dc/006dc940.md) → [`006dc998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dc/006dc998.md) FUN_006dc998

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`006f0654`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f0/006f0654.md) · 呼出先 18件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0046e970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e970.md) [`0046f0b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f0b4.md) [`0046f66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f66c.md) [`0046f6e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046f/0046f6e4.md)
- 新版 呼出元 1件 [`006f06ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f0/006f06ac.md) · 呼出先 18件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046e9b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e9b0.md) [`0046f0f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f0f4.md) [`0046f6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f6ac.md) [`0046f724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046f/0046f724.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.40% / 新版 66.40%

優先判定に残った影響 `call_argument_candidate` 14件, `store_value` 5件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 18件, `unresolved_store_alignment` 24件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dcdc8",
      "incomplete_value": true,
      "site": "006dcde0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:b9b:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dcd70",
      "incomplete_value": true,
      "site": "006dcd88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bf7:8"
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
      "definition_site": "006dcde4",
      "incomplete_value": true,
      "site": "006dcdf0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:bae:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dcd8c",
      "incomplete_value": true,
      "site": "006dcd98",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c0a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 39,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dcdf4",
      "incomplete_value": true,
      "site": "006dcdf4",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006dcd9c",
      "incomplete_value": true,
      "site": "006dcd9c",
      "value": [
        "LOAD",
        "8",
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
      "unmatched:006dc96c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dc970",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "unmatched:006dc974",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006dd064"
      ]
    ]
  ],
  "added": [
    [
      "006dc9c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "006dc9c8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006dc9cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006dd064"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dc9ec ["INT_ADD", "register:40f0:8", ["const:6dc9ec:8", "const:4:8"]]
- 006dc9ec ["CALL", null, ["callee:00447f34:8"]]
+ 006dca44 ["INT_ADD", "register:40f0:8", ["const:6dca44:8", "const:4:8"]]
+ 006dca44 ["CALL", null, ["callee:00447f34:8"]]
- 006dca0c ["INT_ADD", "register:40f0:8", ["const:6dca0c:8", "const:4:8"]]
- 006dca0c ["CALL", null, ["callee:0047e64c:8"]]
+ 006dca64 ["INT_ADD", "register:40f0:8", ["const:6dca64:8", "const:4:8"]]
+ 006dca64 ["CALL", null, ["callee:0047e64c:8"]]
+ 006dca0c ["COPY", "tmp:0:8", ["const:eb4:8"]]
+ 006dca0c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006dca0c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006dca0c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-b13626c0e0ca1eefdd8d613e52c376bd"></a>

### [`006dd470`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dd/006dd470.md) → [`006dd4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dd/006dd4c8.md) FUN_006dd4c8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) · 呼出先 10件 [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md) [`0047e60c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e60c.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md)
- 新版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 10件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 82.22% / 新版 82.22%

優先判定に残った影響 `call_argument_candidate` 6件, `store_destination` 7件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dd50c",
      "incomplete_value": true,
      "site": "006dd51c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:312:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dd4b4",
      "incomplete_value": true,
      "site": "006dd4c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:35f:8"
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
      "definition_site": "006dd53c",
      "incomplete_value": true,
      "site": "006dd550",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:eb4:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dd4e4",
      "incomplete_value": true,
      "site": "006dd4f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:e83:8"
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
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006dd6b0",
      "incomplete_value": false,
      "site": "006dd6b0",
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
      "definition_site": "006dd658",
      "incomplete_value": false,
      "site": "006dd658",
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
      "006dd4f8",
      "READ",
      [
        "storage",
        "00ca4f38",
        null,
        "undefined1"
      ]
    ],
    [
      "006dd50c",
      "READ",
      [
        "storage",
        "002a235f",
        null,
        "string"
      ]
    ],
    [
      "006dd53c",
      "READ",
      [
        "storage",
        "002b2e83",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006dd4f8",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006dd50c",
      "READ",
      [
        "storage",
        "002a2312",
        null,
        "string"
      ]
    ],
    [
      "006dd53c",
      "READ",
      [
        "storage",
        "002b2eb4",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dd4d4 ["INT_ADD", "register:40f0:8", ["const:6dd4d4:8", "const:4:8"]]
- 006dd4d4 ["CALL", null, ["callee:00447f34:8"]]
+ 006dd52c ["INT_ADD", "register:40f0:8", ["const:6dd52c:8", "const:4:8"]]
+ 006dd52c ["CALL", null, ["callee:00447f34:8"]]
- 006dd52c ["INT_ADD", "register:40f0:8", ["const:6dd52c:8", "const:4:8"]]
- 006dd52c ["CALL", null, ["callee:0047e64c:8"]]
+ 006dd584 ["INT_ADD", "register:40f0:8", ["const:6dd584:8", "const:4:8"]]
+ 006dd584 ["CALL", null, ["callee:0047e64c:8"]]
- 006dd604 ["INT_ADD", "register:40f0:8", ["const:6dd604:8", "const:4:8"]]
- 006dd604 ["CALL", null, ["callee:00c57f80:8"]]
+ 006dd65c ["INT_ADD", "register:40f0:8", ["const:6dd65c:8", "const:4:8"]]
+ 006dd65c ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-959d76364ee9d5b01f5d843f7fa57b57"></a>

### [`006dde88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006dd/006dde88.md) → [`006ddee0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006dd/006ddee0.md) FUN_006ddee0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006e9e64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e9/006e9e64.md) [`006f86c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f8/006f86c8.md) · 呼出先 14件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00468f4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f4c.md) [`00468f88`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468f88.md)
- 新版 呼出元 2件 [`006e9ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e9ebc.md) [`006f8720`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f8/006f8720.md) · 呼出先 14件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468f8c.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 74.77% / 新版 74.77%

優先判定に残った影響 `call_argument_candidate` 40件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 9件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006ddf20",
      "incomplete_value": true,
      "site": "006ddf20",
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
      "definition_site": "006ddec8",
      "incomplete_value": true,
      "site": "006ddec8",
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
      "definition_site": "006ddf28",
      "incomplete_value": false,
      "site": "006ddf3c",
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
    "old": {
      "definition_site": "006dded0",
      "incomplete_value": false,
      "site": "006ddee4",
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
            "const:e58:8"
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
      "definition_site": "006ddf30",
      "incomplete_value": false,
      "site": "006ddf3c",
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
            "const:8e0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dded8",
      "incomplete_value": false,
      "site": "006ddee4",
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
            "const:810:8"
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
      "unmatched:006ddebc",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "006ddf1c",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:006dded0",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006ddf14",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "006ddf1c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006ddf28",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ddee4 ["INT_ADD", "register:40f0:8", ["const:6ddee4:8", "const:4:8"]]
- 006ddee4 ["CALL", null, ["callee:00c586e0:8"]]
+ 006ddf3c ["INT_ADD", "register:40f0:8", ["const:6ddf3c:8", "const:4:8"]]
+ 006ddf3c ["CALL", null, ["callee:00c586e0:8"]]
- 006ddefc ["INT_ADD", "register:40f0:8", ["const:6ddefc:8", "const:4:8"]]
- 006ddefc ["CALL", null, ["callee:00470120:8"]]
+ 006ddf54 ["INT_ADD", "register:40f0:8", ["const:6ddf54:8", "const:4:8"]]
+ 006ddf54 ["CALL", null, ["callee:00470120:8"]]
- 006ddf20 ["INT_SRIGHT", "register:4040:8", ["register:4040:8", "const:25:8"]]
~~~


<a id="compare-627c1ed1d709f987f17f38128206ae02"></a>

### [`006de788`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006de/006de788.md) → [`006de7e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006de/006de7e0.md) FUN_006de7e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`006dea94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006de/006dea94.md) [`006e1ea8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e1/006e1ea8.md) [`006e3320`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e3/006e3320.md) · 呼出先 4件 [`006b26ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b2/006b26ec.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085b2e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085b/0085b2e0.md) [`009dcecc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009dc/009dcecc.md)
- 新版 呼出元 3件 [`006deaec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006de/006deaec.md) [`006e1f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e1/006e1f00.md) [`006e3378`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e3/006e3378.md) · 呼出先 4件 [`006b2744`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2744.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085b338`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b338.md) [`009dcf20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009dc/009dcf20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006de788",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:006de78c",
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
      "006de7e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "006de7e4",
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
- 006de788 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006de788 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006de788 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 006de788 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006de78c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 006de78c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 006de790 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-9575864100648ded5fd91851e0795f55"></a>

### [`006df714`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006df/006df714.md) → [`006df76c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006df76c.md) FUN_006df76c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006f1688`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f1/006f1688.md) · 呼出先 11件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00494610`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00494/00494610.md)
- 新版 呼出元 1件 [`006f16e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f16e0.md) · 呼出先 11件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00494650`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00494/00494650.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.94% / 新版 71.94%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 11件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 23件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006df750"
      ],
      [
        "FALL_THROUGH",
        "006df7a8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006df7a8",
      "incomplete_value": true,
      "site": "006df7b8",
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
      "definition_site": "006df750",
      "incomplete_value": true,
      "site": "006df760",
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
    "ordinal": 15,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006df750"
      ],
      [
        "FALL_THROUGH",
        "006df7a8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006df7a8",
      "incomplete_value": true,
      "site": "006df7b8",
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
      "definition_site": "006df750",
      "incomplete_value": true,
      "site": "006df760",
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
    "ordinal": 16,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006df750"
      ],
      [
        "FALL_THROUGH",
        "006df7a8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006df7a8",
      "incomplete_value": true,
      "site": "006df7c0",
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
      "definition_site": "006df750",
      "incomplete_value": true,
      "site": "006df768",
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
    "ordinal": 17,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006df718",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006df71c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006df720",
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
      "006df770",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "006df774",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006df778",
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
- 006df7b8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006df7b8 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 006df7b8 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 006df7b8 ["CBRANCH", null, ["local:b10:8", "tmp:2:1"]]
- 006df7c0 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:8:8"]]
- 006df7c0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006df714 ["INT_SUB", "register:8:8", ["register:8:8", "const:a0:8"]]
~~~


<a id="compare-9b869e16cab75a30b3ccdb6ddf9e453b"></a>

### [`006dfc2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006df/006dfc2c.md) → [`006dfc84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006dfc84.md) FUN_006dfc84

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`006ea588`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006ea/006ea588.md) · 呼出先 7件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00800378`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00800/00800378.md) [`00805d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00805/00805d34.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`0085c14c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0085c/0085c14c.md)
- 新版 呼出元 1件 [`006ea5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ea/006ea5e0.md) · 呼出先 7件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`008003d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00800/008003d0.md) [`00805d8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00805/00805d8c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`0085c1a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085c/0085c1a4.md)

変更の種類 branch_condition_or_target, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 98.06% / 新版 98.06%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006dfce0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006dfe08"
      ]
    ]
  ],
  "added": [
    [
      "006dfd38",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006dfe08"
      ]
    ]
  ]
}
~~~


~~~diff
- 006dfc48 ["INT_ADD", "register:40f0:8", ["const:6dfc48:8", "const:4:8"]]
- 006dfc48 ["CALL", null, ["callee:00851550:8"]]
+ 006dfca0 ["INT_ADD", "register:40f0:8", ["const:6dfca0:8", "const:4:8"]]
+ 006dfca0 ["CALL", null, ["callee:00851550:8"]]
- 006dfc5c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006dfc5c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 006dfcb4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006dfcb4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 006dfc64 ["INT_ADD", "register:40f0:8", ["const:6dfc64:8", "const:4:8"]]
- 006dfc64 ["CALL", null, ["callee:00851550:8"]]
+ 006dfcbc ["INT_ADD", "register:40f0:8", ["const:6dfcbc:8", "const:4:8"]]
+ 006dfcbc ["CALL", null, ["callee:00851550:8"]]
~~~


<a id="compare-8b0eaa542781a1bc634353a139892cb2"></a>

### [`006dfdc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006df/006dfdc8.md) → [`006dfe20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006df/006dfe20.md) FUN_006dfe20

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b11d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b11/00b11d84.md) · 呼出先 19件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00470840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00470/00470840.md) [`0048792c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048792c.md) [`0048793c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/0048793c.md)
- 新版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 19件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048796c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048796c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.69% / 新版 91.69%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006dff5c",
      "incomplete_value": true,
      "site": "006dff70",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:fad:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006dff04",
      "incomplete_value": true,
      "site": "006dff18",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 52,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006e02a0",
      "incomplete_value": true,
      "site": "006e02a4",
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
      "definition_site": "006e0248",
      "incomplete_value": true,
      "site": "006e024c",
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
    "ordinal": 88,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006dfe74",
      "incomplete_value": true,
      "site": "006dfe84",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40d0:8"
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
      "definition_site": "006dfe1c",
      "incomplete_value": true,
      "site": "006dfe2c",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:006dfe24",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:006dfe24",
      "WRITE",
      [
        "storage",
        "Stack[-0x1d0]",
        null,
        null
      ]
    ],
    [
      "unmatched:006dfea8",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006dfe7c",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "006dfe7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1d0]",
        null,
        null
      ]
    ],
    [
      "006dff00",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006dfe2c ["INT_ADD", "register:40f0:8", ["const:6dfe2c:8", "const:4:8"]]
- 006dfe2c ["CALL", null, ["callee:006fa14c:8"]]
+ 006dfe84 ["INT_ADD", "register:40f0:8", ["const:6dfe84:8", "const:4:8"]]
+ 006dfe84 ["CALL", null, ["callee:006fa14c:8"]]
- 006dfe04 ["INT_ADD", "register:40f0:8", ["const:6dfe04:8", "const:4:8"]]
- 006dfe04 ["CALL", null, ["callee:00487e60:8"]]
+ 006dfe5c ["INT_ADD", "register:40f0:8", ["const:6dfe5c:8", "const:4:8"]]
+ 006dfe5c ["CALL", null, ["callee:00487e60:8"]]
- 006dfe14 ["COPY", "tmp:0:8", ["const:d38:8"]]
- 006dfe14 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006dfe14 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006dfe14 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-36588941ac9266edf477145409568e5c"></a>

### [`006e04ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006e0/006e04ac.md) → [`006e0504`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e0/006e0504.md) FUN_006e0504

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006f24d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006f2/006f24d4.md) · 呼出先 1件 [`00442930`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00442/00442930.md)
- 新版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 95.24% / 新版 95.24%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006e0544",
      "incomplete_value": false,
      "site": "006e0548",
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
      "definition_site": "006e04ec",
      "incomplete_value": false,
      "site": "006e04f0",
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
      "006e0544",
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
      "006e0544",
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
- 006e04f0 ["INT_ADD", "register:40f0:8", ["const:6e04f0:8", "const:4:8"]]
- 006e04f0 ["CALL", null, ["callee:00442970:8"]]
+ 006e0548 ["INT_ADD", "register:40f0:8", ["const:6e0548:8", "const:4:8"]]
+ 006e0548 ["CALL", null, ["callee:00442970:8"]]
- 006e04ec ["COPY", "tmp:0:8", ["const:1bd:8"]]
- 006e04ec ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006e04ec ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006e04ec ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006e0544 ["COPY", "tmp:0:8", ["const:170:8"]]
+ 006e0544 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006e0544 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006e0544 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


