# v16.0.1 → v16.0.2 · 最優先の変更候補 (58)

[一覧の目次](README.md)

<a id="compare-48d2cb0daa44fabe3cce1572b0b88a2f"></a>

### [`009390b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00939/009390b4.md) → [`00939108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00939/00939108.md) FUN_00939108

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 20件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00487e20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00487/00487e20.md) [`00488434`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488434.md) [`00488658`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00488/00488658.md)
- 新版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 20件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md) [`00488698`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488698.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 53.06% / 新版 53.06%

優先判定に残った影響 `call_argument_candidate` 2件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 58件, `unresolved_call_alignment` 30件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 102件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0093a01c",
      "incomplete_value": true,
      "site": "0093a020",
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
      "definition_site": "00939fc8",
      "incomplete_value": true,
      "site": "00939fcc",
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
    "ordinal": 199,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0093a018",
      "incomplete_value": true,
      "site": "0093a024",
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
      "definition_site": "00939fc4",
      "incomplete_value": true,
      "site": "00939fd0",
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
    "ordinal": 200,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0093a030",
      "incomplete_value": true,
      "site": "0093a030",
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
                "const:48:8"
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
      "definition_site": "00939fdc",
      "incomplete_value": true,
      "site": "00939fdc",
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
                "const:48:8"
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
    "ordinal": 201,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009390e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:009390ec",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ],
    [
      "unmatched:00939104",
      "DATA",
      [
        "storage",
        "00c64d38",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0093913c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "00939140",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00487e60"
      ]
    ],
    [
      "00939158",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0093919c ["INT_ADD", "register:40f0:8", ["const:93919c:8", "const:4:8"]]
- 0093919c ["CALL", null, ["callee:00c53da0:8"]]
+ 009391f0 ["INT_ADD", "register:40f0:8", ["const:9391f0:8", "const:4:8"]]
+ 009391f0 ["CALL", null, ["callee:00c53da0:8"]]
- 00939f78 ["INT_ADD", "register:40f0:8", ["const:939f78:8", "const:4:8"]]
- 00939f78 ["CALL", null, ["callee:00488698:8"]]
+ 00939fcc ["INT_ADD", "register:40f0:8", ["const:939fcc:8", "const:4:8"]]
+ 00939fcc ["CALL", null, ["callee:00488698:8"]]
- 0093a020 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0093a020 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0093a020 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0093a020 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
+ 0093a074 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0093a074 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0093a074 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0093a074 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:1:1"]]
~~~


<a id="compare-d5322f5f234e1e371a263bf390dfcf84"></a>

### [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) → [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) FUN_0093b7c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0089e87c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089e/0089e87c.md) · 呼出先 63件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00447ef4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00447/00447ef4.md)
- 新版 呼出元 1件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 63件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md)

変更の種類 call, call_argument_candidate, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 95.41% / 新版 95.41%

優先判定に残った影響 `call_argument_candidate` 18件, `call_target` 6件, `store_value` 34件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0093ba04",
      "incomplete_value": true,
      "site": "0093ba1c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a1f:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093b9b0",
      "incomplete_value": true,
      "site": "0093b9c8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:9df:8"
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
      "definition_site": "0093bb38",
      "incomplete_value": true,
      "site": "0093bb40",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "0093bae4",
      "incomplete_value": true,
      "site": "0093baec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:a00:8"
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
      "definition_site": "0093bb44",
      "incomplete_value": true,
      "site": "0093bb4c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cf0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093baf0",
      "incomplete_value": true,
      "site": "0093baf8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:cb0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 53,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0093b9e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048ccf8"
      ]
    ],
    [
      "0093ba04",
      "READ",
      [
        "storage",
        "002b79df",
        null,
        "string"
      ]
    ],
    [
      "0093ba18",
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
      "0093b9e8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "0093ba04",
      "READ",
      [
        "storage",
        "002b7a1f",
        null,
        "string"
      ]
    ],
    [
      "0093ba18",
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
- 0093bb58 ["INT_ADD", "register:40f0:8", ["const:93bb58:8", "const:4:8"]]
- 0093bb58 ["CALL", null, ["callee:00c57f80:8"]]
+ 0093bbac ["INT_ADD", "register:40f0:8", ["const:93bbac:8", "const:4:8"]]
+ 0093bbac ["CALL", null, ["callee:00c57f80:8"]]
- 0093bd2c ["INT_ADD", "register:40f0:8", ["const:93bd2c:8", "const:4:8"]]
- 0093bd2c ["CALL", null, ["callee:0046d4d0:8"]]
+ 0093bd80 ["INT_ADD", "register:40f0:8", ["const:93bd80:8", "const:4:8"]]
+ 0093bd80 ["CALL", null, ["callee:0046d4d0:8"]]
- 0093be44 ["COPY", "tmp:0:8", ["const:3ea:8"]]
- 0093be44 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
- 0093be44 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
- 0093be44 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
+ 0093be98 ["COPY", "tmp:0:8", ["const:38e:8"]]
+ 0093be98 ["INT_CARRY", "register:105:1", ["register:4008:8", "tmp:0:8"]]
+ 0093be98 ["INT_SCARRY", "register:106:1", ["register:4008:8", "tmp:0:8"]]
+ 0093be98 ["INT_ADD", "tmp:1:8", ["register:4008:8", "tmp:0:8"]]
~~~


<a id="compare-19d9fdb3458a4382c8e4f798cbe914c2"></a>

### [`0093f3b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3b0.md) → [`0093f404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f404.md) FUN_0093f404

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0093f1d8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f1d8.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0093f22c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f22c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0093f410",
      "incomplete_value": false,
      "site": "0093f414",
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
      "definition_site": "0093f3bc",
      "incomplete_value": false,
      "site": "0093f3c0",
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
      "0093f410",
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
      "0093f410",
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
- 0093f3c0 ["INT_ADD", "register:40f0:8", ["const:93f3c0:8", "const:4:8"]]
- 0093f3c0 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0093f414 ["INT_ADD", "register:40f0:8", ["const:93f414:8", "const:4:8"]]
+ 0093f414 ["CALL", null, ["callee:0043b7b8:8"]]
- 0093f3bc ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 0093f3bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 0093f3bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 0093f3bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 0093f410 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 0093f410 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 0093f410 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 0093f410 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-6aeb186d6c4411a52cd9b3e84c4948ae"></a>

### [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) → [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) FUN_0093f418

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009390b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00939/009390b4.md) [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) · 呼出先 10件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) [`0094270c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094270c.md) [`0094288c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094288c.md) [`00942f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/00942f94.md)
- 新版 呼出元 2件 [`00939108`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00939/00939108.md) [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) · 呼出先 10件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 87.02% / 新版 87.02%

優先判定に残った影響 `call_argument_candidate` 16件, `store_condition` 1件, `unresolved_branch_alignment` 102件, `unresolved_call_alignment` 51件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0093f520",
      "incomplete_value": true,
      "site": "0093f524",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093f4cc",
      "incomplete_value": true,
      "site": "0093f4d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
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
                "const:48:8"
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
      "definition_site": "0093f8dc",
      "incomplete_value": true,
      "site": "0093f8e0",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0093f888",
      "incomplete_value": true,
      "site": "0093f88c",
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
                "const:460:8"
              ]
            ]
          ],
          [
            "leaf",
            "const:30:8"
          ]
        ]
      ]
    },
    "ordinal": 19,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009404a8",
      "incomplete_value": true,
      "site": "009404ac",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:348:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 93,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0093f46c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0094092c"
      ]
    ],
    [
      "unmatched:0093f518",
      "WRITE",
      [
        "storage",
        "Stack[-0x5e8]",
        null,
        null
      ]
    ],
    [
      "unmatched:0093f5f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x5b0]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0093f4c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0094092c"
      ]
    ],
    [
      "0093f56c",
      "WRITE",
      [
        "storage",
        "Stack[-0x5e8]",
        null,
        null
      ]
    ],
    [
      "0093f64c",
      "WRITE",
      [
        "storage",
        "Stack[-0x5b0]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 0093f4d0 ["INT_ADD", "register:40f0:8", ["const:93f4d0:8", "const:4:8"]]
- 0093f4d0 ["CALL", null, ["callee:00942fe8:8"]]
+ 0093f524 ["INT_ADD", "register:40f0:8", ["const:93f524:8", "const:4:8"]]
+ 0093f524 ["CALL", null, ["callee:00942fe8:8"]]
- 0093f88c ["INT_ADD", "register:40f0:8", ["const:93f88c:8", "const:4:8"]]
- 0093f88c ["CALL", null, ["callee:0043bb60:8"]]
+ 0093f8e0 ["INT_ADD", "register:40f0:8", ["const:93f8e0:8", "const:4:8"]]
+ 0093f8e0 ["CALL", null, ["callee:0043bb60:8"]]
+ 0093f88c ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 0093f88c ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
+ 0093f88c ["COPY", "register:5010:8", ["const:0:8"]]
+ 0093f88c ["COPY", "register:5018:8", ["const:0:8"]]
~~~


<a id="compare-babb2cee1e9355a4ab06072455441ba7"></a>

### [`0094270c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094270c.md) → [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) FUN_00942760

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 5件 [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) [`0094288c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094288c.md) [`00942f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/00942f94.md) [`00943998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00943/00943998.md) [`00944178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/00944178.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 5件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md) [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.92% / 新版 97.92%

アドレスに依存する影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00942718",
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
      "0094276c",
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
- 00942718 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 00942718 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 00942718 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
- 00942718 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
+ 0094276c ["COPY", "tmp:0:8", ["register:40d0:8"]]
+ 0094276c ["COPY", "tmp:1:8", ["register:40c8:8"]]
+ 0094276c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:60:8"]]
+ 0094276c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00942790 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00942790 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:5000:16"]]
~~~


<a id="compare-a7764972ef697044f55ba85bd73d3023"></a>

### [`0094288c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094288c.md) → [`009428e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/009428e0.md) FUN_009428e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) [`00943998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00943/00943998.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0094270c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094270c.md) [`00944178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/00944178.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 2件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 90.10% / 新版 90.10%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00942a04",
      "incomplete_value": true,
      "site": "00942a08",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffc0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00942a68",
      "incomplete_value": true,
      "site": "00942a6c",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:40e8:8"
              ],
              [
                "leaf",
                "const:ffffffffffffffa8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 8,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00942a28",
      "incomplete_value": true,
      "site": "00942a2c",
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
            "const:30:8"
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
      "unmatched:009428b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "009429b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00942974"
      ]
    ],
    [
      "unmatched:00942968",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0094290c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "009429b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009429c8"
      ]
    ],
    [
      "009429bc",
      "WRITE",
      [
        "storage",
        "Stack[-0xe8]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00942a08 ["INT_ADD", "register:40f0:8", ["const:942a08:8", "const:4:8"]]
- 00942a08 ["CALL", null, ["callee:00c57f80:8"]]
+ 00942a5c ["INT_ADD", "register:40f0:8", ["const:942a5c:8", "const:4:8"]]
+ 00942a5c ["CALL", null, ["callee:00c57f80:8"]]
- 00942a18 ["INT_ADD", "register:40f0:8", ["const:942a18:8", "const:4:8"]]
- 00942a18 ["CALL", null, ["callee:00c57f80:8"]]
+ 00942a6c ["INT_ADD", "register:40f0:8", ["const:942a6c:8", "const:4:8"]]
+ 00942a6c ["CALL", null, ["callee:00c57f80:8"]]
- 00942a2c ["INT_ADD", "register:40f0:8", ["const:942a2c:8", "const:4:8"]]
- 00942a2c ["CALL", null, ["callee:00942760:8"]]
+ 00942a80 ["INT_ADD", "register:40f0:8", ["const:942a80:8", "const:4:8"]]
+ 00942a80 ["CALL", null, ["callee:00942760:8"]]
~~~


<a id="compare-e9c35a5ad18fa77614b0255026e07290"></a>

### [`00942f94`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/00942f94.md) → [`00942fe8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942fe8.md) FUN_00942fe8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) [`00943998`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00943/00943998.md) [`00944178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/00944178.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0094270c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00942/0094270c.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) [`009439ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/009439ec.md) [`009441cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009441cc.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00942760`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00942/00942760.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 78.45% / 新版 78.45%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 3件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 37件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00943594",
      "incomplete_value": true,
      "site": "00943598",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "ordinal": 32,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009435d4",
      "incomplete_value": true,
      "site": "009435d8",
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
            "const:30:8"
          ]
        ]
      ]
    },
    "ordinal": 33,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00943630",
      "incomplete_value": true,
      "site": "00943634",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:90:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 36,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00942f94",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00942f98",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00942f9c",
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
      "00942fe8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00942fec",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00942ff0",
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
+ 00943154 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:28:8"]]
+ 00943154 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 009431a8 ["INT_ADD", "tmp:0:8", ["register:4098:8", "const:20:8"]]
- 009431a8 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 009431a8 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
- 009431a8 ["LOAD", "tmp:3:8", ["const:1b1:8", "tmp:2:8"]]
- 009431b0 ["INT_ADD", "register:40f0:8", ["const:9431b0:8", "const:4:8"]]
- 009431b0 ["CALL", null, ["callee:0043bb60:8"]]
+ 00943204 ["INT_ADD", "register:40f0:8", ["const:943204:8", "const:4:8"]]
+ 00943204 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-3a4d39d1de92710ae6d43c2eebbcee21"></a>

### [`00943818`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00943/00943818.md) → [`0094386c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00943/0094386c.md) FUN_0094386c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0093f3c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093f/0093f3c4.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`0093f418`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093f/0093f418.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 88.54% / 新版 88.54%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00943970",
      "incomplete_value": true,
      "site": "00943974",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:28:8"
              ]
            ]
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
      "unmatched:00943840",
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
      "00943894",
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
- 00943920 ["INT_ADD", "register:40f0:8", ["const:943920:8", "const:4:8"]]
- 00943920 ["CALL", null, ["callee:00c57f80:8"]]
+ 00943974 ["INT_ADD", "register:40f0:8", ["const:943974:8", "const:4:8"]]
+ 00943974 ["CALL", null, ["callee:00c57f80:8"]]
- 00943840 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00943840 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff8:8"]]
- 00943840 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 00943844 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00943844 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-d151769888c280e002c26ecadf34f169"></a>

### [`0094479c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/0094479c.md) → [`009447f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/009447f0.md) FUN_009447f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009447fc",
      "incomplete_value": false,
      "site": "00944800",
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
      "definition_site": "009447a8",
      "incomplete_value": false,
      "site": "009447ac",
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
      "009447fc",
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
      "009447fc",
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
- 009447ac ["INT_ADD", "register:40f0:8", ["const:9447ac:8", "const:4:8"]]
- 009447ac ["CALL", null, ["callee:0043b7b8:8"]]
+ 00944800 ["INT_ADD", "register:40f0:8", ["const:944800:8", "const:4:8"]]
+ 00944800 ["CALL", null, ["callee:0043b7b8:8"]]
- 009447a8 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009447a8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009447a8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009447a8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009447fc ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009447fc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009447fc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009447fc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-ec9ac3ec0a7c0e1fa9c9fa70aa6b1ebd"></a>

### [`009447b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/009447b0.md) → [`00944804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/00944804.md) FUN_00944804

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) [`009447b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00944/009447b0.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) [`00944804`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00944/00944804.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 94.37% / 新版 94.37%

優先判定に残った影響 `call_argument_candidate` 9件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0094495c",
      "incomplete_value": false,
      "site": "00944964",
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
      "definition_site": "00944908",
      "incomplete_value": false,
      "site": "00944910",
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
      "definition_site": "00944980",
      "incomplete_value": false,
      "site": "0094498c",
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
      "definition_site": "0094492c",
      "incomplete_value": false,
      "site": "00944938",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00944ab4",
      "incomplete_value": false,
      "site": "00944abc",
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
      "definition_site": "00944a60",
      "incomplete_value": false,
      "site": "00944a68",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009448c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00944c48"
      ]
    ],
    [
      "00944914",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00944bf8"
      ]
    ],
    [
      "0094495c",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00944914",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00944c48"
      ]
    ],
    [
      "00944934",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00944bf8"
      ]
    ],
    [
      "0094495c",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00944910 ["INT_ADD", "register:40f0:8", ["const:944910:8", "const:4:8"]]
- 00944910 ["CALL", null, ["callee:00441ed4:8"]]
+ 00944964 ["INT_ADD", "register:40f0:8", ["const:944964:8", "const:4:8"]]
+ 00944964 ["CALL", null, ["callee:00441ed4:8"]]
- 00944938 ["INT_ADD", "register:40f0:8", ["const:944938:8", "const:4:8"]]
- 00944938 ["CALL", null, ["callee:00442834:8"]]
+ 0094498c ["INT_ADD", "register:40f0:8", ["const:94498c:8", "const:4:8"]]
+ 0094498c ["CALL", null, ["callee:00442834:8"]]
- 00944a68 ["INT_ADD", "register:40f0:8", ["const:944a68:8", "const:4:8"]]
- 00944a68 ["CALL", null, ["callee:00441ed4:8"]]
+ 00944abc ["INT_ADD", "register:40f0:8", ["const:944abc:8", "const:4:8"]]
+ 00944abc ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-a7fa3d262e71eb4188916e6ae75608e0"></a>

### [`00945274`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00945/00945274.md) → [`009452c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452c8.md) FUN_009452c8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0093b770`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0093b/0093b770.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`0093b7c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0093b/0093b7c4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009452d4",
      "incomplete_value": false,
      "site": "009452d8",
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
      "definition_site": "00945280",
      "incomplete_value": false,
      "site": "00945284",
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
      "009452d4",
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
      "009452d4",
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
- 00945284 ["INT_ADD", "register:40f0:8", ["const:945284:8", "const:4:8"]]
- 00945284 ["CALL", null, ["callee:0043b7b8:8"]]
+ 009452d8 ["INT_ADD", "register:40f0:8", ["const:9452d8:8", "const:4:8"]]
+ 009452d8 ["CALL", null, ["callee:0043b7b8:8"]]
- 00945280 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 00945280 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00945280 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00945280 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 009452d4 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 009452d4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 009452d4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 009452d4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-d6bdc98f077df7a89ff381776aefc3e7"></a>

### [`009465c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/009465c4.md) → [`00946618`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946618.md) FUN_00946618

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`00945288`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00945/00945288.md) [`0094691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/0094691c.md) [`00946c50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946c50.md) · 呼出先 2件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 3件 [`009452dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00945/009452dc.md) [`00946970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946970.md) [`00946ca4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946ca4.md) · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.73% / 新版 96.73%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 10件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009468c4",
      "incomplete_value": true,
      "site": "009468c8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:18:8"
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
        "00946744"
      ],
      [
        "FALL_THROUGH",
        "00946798"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00946798",
      "incomplete_value": true,
      "site": "009467ac",
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
    "old": {
      "definition_site": "00946744",
      "incomplete_value": true,
      "site": "00946758",
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
                "const:0:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 38,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00946744"
      ],
      [
        "FALL_THROUGH",
        "00946798"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00946798",
      "incomplete_value": true,
      "site": "009467ac",
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
    "old": {
      "definition_site": "00946744",
      "incomplete_value": true,
      "site": "00946758",
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
                "const:0:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 39,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00946744",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0094693c"
      ]
    ],
    [
      "unmatched:00946764",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:0094683c",
      "READ",
      [
        "storage",
        "Stack[-0x72]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00946798",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0094693c"
      ]
    ],
    [
      "009467b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "00946890",
      "READ",
      [
        "storage",
        "Stack[-0x72]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009468c8 ["INT_ADD", "register:40f0:8", ["const:9468c8:8", "const:4:8"]]
- 009468c8 ["CALL", null, ["callee:00c57f80:8"]]
+ 0094691c ["INT_ADD", "register:40f0:8", ["const:94691c:8", "const:4:8"]]
+ 0094691c ["CALL", null, ["callee:00c57f80:8"]]
- 00946640 ["INT_EQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
- 00946640 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 00946694 ["INT_EQUAL", "tmp:0:1", ["register:4050:4", "const:0:4"]]
+ 00946694 ["CBRANCH", null, ["local:b21:8", "tmp:0:1"]]
- 0094666c ["COPY", "tmp:0:8", ["register:4058:8"]]
- 0094666c ["INT_ADD", "tmp:1:8", ["register:4000:8", "const:18:8"]]
- 0094666c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-dd521a3f5f6a995182c4c955679bfb06"></a>

### [`00946edc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00946/00946edc.md) → [`00946f30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00946/00946f30.md) _INIT_188

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
      "definition_site": "00946f6c",
      "incomplete_value": true,
      "site": "00946f88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00946f18",
      "incomplete_value": true,
      "site": "00946f34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00946f90",
      "incomplete_value": true,
      "site": "00946fac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00946f3c",
      "incomplete_value": true,
      "site": "00946f58",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00946fb0",
      "incomplete_value": true,
      "site": "00946fcc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00946f5c",
      "incomplete_value": true,
      "site": "00946f78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00946f6c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00946f90",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00946fb0",
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
      "00946f6c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00946f90",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00946fb0",
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
- 00946fd0 ["COPY", "tmp:0:8", ["const:f09:8"]]
- 00946fd0 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00946fd0 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00946fd0 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00947024 ["COPY", "tmp:0:8", ["const:ebc:8"]]
+ 00947024 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00947024 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00947024 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 0094703c ["INT_ADD", "register:40f0:8", ["const:94703c:8", "const:4:8"]]
- 0094703c ["CALL", null, ["callee:0043b838:8"]]
+ 00947090 ["INT_ADD", "register:40f0:8", ["const:947090:8", "const:4:8"]]
+ 00947090 ["CALL", null, ["callee:0043b838:8"]]
- 00947078 ["INT_ADD", "register:40f0:8", ["const:947078:8", "const:4:8"]]
- 00947078 ["CALL", null, ["callee:0043b838:8"]]
+ 009470cc ["INT_ADD", "register:40f0:8", ["const:9470cc:8", "const:4:8"]]
+ 009470cc ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-c707613f1d06612ab2d6ee80a4b03e2c"></a>

### [`009612bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/009612bc.md) → [`00961310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/00961310.md) FUN_00961310

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`009781a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00978/009781a8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`009781fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/009781fc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 99.31% / 新版 99.31%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00961408",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bb60"
      ]
    ]
  ],
  "added": [
    [
      "009613dc",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bb60"
      ]
    ]
  ]
}
~~~


~~~diff
- 00961330 ["INT_ADD", "register:40f0:8", ["const:961330:8", "const:4:8"]]
- 00961330 ["CALL", null, ["callee:0043bb60:8"]]
+ 00961384 ["INT_ADD", "register:40f0:8", ["const:961384:8", "const:4:8"]]
+ 00961384 ["CALL", null, ["callee:0043bb60:8"]]
- 0096134c ["BRANCH", null, ["local:b8:8"]]
+ 009613a0 ["BRANCH", null, ["local:b7:8"]]
- 0096135c ["INT_ADD", "register:40f0:8", ["const:96135c:8", "const:4:8"]]
- 0096135c ["CALL", null, ["callee:0043bb60:8"]]
+ 009613b0 ["INT_ADD", "register:40f0:8", ["const:9613b0:8", "const:4:8"]]
+ 009613b0 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-73b554b8bb6c9e1f50cf0810e79a0596"></a>

### [`009615f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/009615f8.md) → [`0096164c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/0096164c.md) FUN_0096164c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57f40`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57f40.md) [`00c57fe0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57fe0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 98.15% / 新版 98.15%

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00961660",
      "incomplete_value": true,
      "site": "00961664",
      "value": [
        "live",
        "register:40c0:8"
      ]
    },
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0096171c",
      "incomplete_value": true,
      "site": "00961720",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
    "ordinal": 4,
    "slot": 1
  }
]
~~~


~~~diff
- 00961664 ["INT_ADD", "register:40f0:8", ["const:961664:8", "const:4:8"]]
- 00961664 ["CALL", null, ["callee:00c57f60:8"]]
+ 009616b8 ["INT_ADD", "register:40f0:8", ["const:9616b8:8", "const:4:8"]]
+ 009616b8 ["CALL", null, ["callee:00c57f60:8"]]
- 009616cc ["INT_ADD", "register:40f0:8", ["const:9616cc:8", "const:4:8"]]
- 009616cc ["CALL", null, ["callee:0043b7a4:8"]]
+ 00961720 ["INT_ADD", "register:40f0:8", ["const:961720:8", "const:4:8"]]
+ 00961720 ["CALL", null, ["callee:0043b7a4:8"]]
- 0096161c ["INT_ADD", "register:40f0:8", ["const:96161c:8", "const:4:8"]]
- 0096161c ["CALL", null, ["callee:00c580b0:8"]]
+ 00961670 ["INT_ADD", "register:40f0:8", ["const:961670:8", "const:4:8"]]
+ 00961670 ["CALL", null, ["callee:00c580b0:8"]]
~~~


<a id="compare-748c47315dfed07bd0710911ee237819"></a>

### [`009617a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/009617a0.md) → [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) FUN_009617f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 25件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`005cc9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005cc9a0.md) [`00604e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00604/00604e54.md) [`006649ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006649ec.md)
- 新版 呼出元 0件  · 呼出先 25件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005cc9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc9e0.md) [`00604e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00604/00604e94.md) [`00664a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664a2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 88.02% / 新版 88.02%

優先判定に残った影響 `call_argument_candidate` 15件, `store_condition` 2件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 6件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009619d8",
      "incomplete_value": true,
      "site": "009619dc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_OR",
            "4",
            [
              [
                "live",
                "register:4048:4"
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
    "old": null,
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00961b94",
      "incomplete_value": true,
      "site": "00961b98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4048:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4040:8"
              ],
              [
                "leaf",
                "const:8:4"
              ]
            ]
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
    "new": null,
    "old": {
      "definition_site": "00961ba4",
      "incomplete_value": true,
      "site": "00961ba8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a8:8"
          ],
          [
            "INT_LEFT",
            "8",
            [
              "INT_SEXT",
              [
                "leaf",
                "const:3:8"
              ]
            ]
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
      "unmatched:00961b1c",
      "DATA",
      [
        "storage",
        "00333fc8",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00961cd0",
      "DATA",
      [
        "storage",
        "003964c4",
        "fde_003964c4",
        "dword"
      ]
    ],
    [
      "00961d78",
      "DATA",
      [
        "storage",
        "003964c4",
        "fde_003964c4",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "00961b70",
      "DATA",
      [
        "storage",
        "00333fc8",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00961cd0",
      "DATA",
      [
        "storage",
        "003964c4",
        null,
        "qword"
      ]
    ],
    [
      "00961d78",
      "DATA",
      [
        "storage",
        "003964c4",
        null,
        "qword"
      ]
    ]
  ]
}
~~~


~~~diff
- 00961988 ["INT_ADD", "register:40f0:8", ["const:961988:8", "const:4:8"]]
- 00961988 ["CALL", null, ["callee:005cc9e0:8"]]
+ 009619dc ["INT_ADD", "register:40f0:8", ["const:9619dc:8", "const:4:8"]]
+ 009619dc ["CALL", null, ["callee:005cc9e0:8"]]
- 009619dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3:8"]]
- 009619dc ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 009619dc ["INT_ZEXT", "register:4050:8", ["tmp:1:1"]]
- 00961b44 ["INT_ADD", "register:40f0:8", ["const:961b44:8", "const:4:8"]]
- 00961b44 ["CALL", null, ["callee:00604e94:8"]]
+ 00961b98 ["INT_ADD", "register:40f0:8", ["const:961b98:8", "const:4:8"]]
+ 00961b98 ["CALL", null, ["callee:00604e94:8"]]
~~~


<a id="compare-2ca80129b6daec02be1f6859d1f5f22e"></a>

### [`00962f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00962/00962f1c.md) → [`00962f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00962/00962f70.md) FUN_00962f70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 9件 [`005cc9a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005cc/005cc9a0.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md) [`006649ec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006649ec.md) [`0071b970`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071b/0071b970.md) [`0082eb2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0082e/0082eb2c.md)
- 新版 呼出元 0件  · 呼出先 9件 [`005cc9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc9e0.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`00664a2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664a2c.md) [`0071b9c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071b/0071b9c8.md) [`0082eb84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0082e/0082eb84.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 89.49% / 新版 89.49%

優先判定に残った影響 `unresolved_call_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00962fac",
      "DATA",
      [
        "storage",
        "00339ade",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:00962fb0",
      "DATA",
      [
        "storage",
        "00339ae1",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:00962fb4",
      "DATA",
      [
        "storage",
        "00339ae0",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "00963000",
      "DATA",
      [
        "storage",
        "00339ade",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00963004",
      "DATA",
      [
        "storage",
        "00339ae1",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "00963008",
      "DATA",
      [
        "storage",
        "00339ae0",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 00962f9c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00962f9c ["CBRANCH", null, ["local:b100:8", "tmp:0:1"]]
+ 00962ff0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00962ff0 ["CBRANCH", null, ["local:b101:8", "tmp:0:1"]]
- 00962fac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:2:8"]]
- 00962fac ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00962fac ["INT_ZEXT", "register:4040:8", ["tmp:1:1"]]
- 00962fb0 ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:5:8"]]
- 00962fb0 ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
- 00962fb0 ["INT_ZEXT", "register:4048:8", ["tmp:1:1"]]
~~~


<a id="compare-36e4ca60cffb959436297d86cc9cfba8"></a>

### [`009781a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00978/009781a8.md) → [`009781fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/009781fc.md) FUN_009781fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009612bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/009612bc.md) · 呼出先 4件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`009784e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00978/009784e8.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00961310`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/00961310.md) · 呼出先 4件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0097853c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/0097853c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 96.58% / 新版 96.58%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00978298",
      "incomplete_value": true,
      "site": "0097829c",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "old": {
      "definition_site": "00978244",
      "incomplete_value": true,
      "site": "00978248",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "0097823c",
      "incomplete_value": true,
      "site": "00978248",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
              ]
            ]
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
      "definition_site": "009782c4",
      "incomplete_value": true,
      "site": "009782c8",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:009782b8",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ],
    [
      "00978418",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009783bc"
      ]
    ],
    [
      "unmatched:00978374",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009784e4"
      ]
    ]
  ],
  "added": [
    [
      "0097830c",
      "WRITE",
      [
        "storage",
        "Stack[-0xf0]",
        null,
        null
      ]
    ],
    [
      "009783b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009783bc"
      ]
    ],
    [
      "009783c8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009784e4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00978248 ["INT_ADD", "register:40f0:8", ["const:978248:8", "const:4:8"]]
- 00978248 ["CALL", null, ["callee:0043bb60:8"]]
+ 0097829c ["INT_ADD", "register:40f0:8", ["const:97829c:8", "const:4:8"]]
+ 0097829c ["CALL", null, ["callee:0043bb60:8"]]
- 00978274 ["INT_ADD", "register:40f0:8", ["const:978274:8", "const:4:8"]]
- 00978274 ["CALL", null, ["callee:0043bb60:8"]]
+ 009782c8 ["INT_ADD", "register:40f0:8", ["const:9782c8:8", "const:4:8"]]
+ 009782c8 ["CALL", null, ["callee:0043bb60:8"]]
- 0097829c ["INT_ADD", "register:40f0:8", ["const:97829c:8", "const:4:8"]]
- 0097829c ["CALL", null, ["callee:0043bb60:8"]]
+ 009782f0 ["INT_ADD", "register:40f0:8", ["const:9782f0:8", "const:4:8"]]
+ 009782f0 ["CALL", null, ["callee:0043bb60:8"]]
~~~


<a id="compare-71f17b9618561b66d347187408842202"></a>

### [`009784e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00978/009784e8.md) → [`0097853c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/0097853c.md) FUN_0097853c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009781a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00978/009781a8.md) [`009784e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00978/009784e8.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`009781fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/009781fc.md) [`0097853c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/0097853c.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 86.39% / 新版 86.39%

優先判定に残った影響 `call_argument_candidate` 46件, `store_condition` 5件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00978650",
      "incomplete_value": true,
      "site": "00978660",
      "value": [
        "live",
        "register:40c8:8"
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
      "definition_site": "0097865c",
      "incomplete_value": true,
      "site": "00978660",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40b0:8"
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
    "old": null,
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00978654",
      "incomplete_value": true,
      "site": "00978660",
      "value": [
        "live",
        "register:40c0:8"
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
      "unmatched:00978578",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00978700"
      ]
    ],
    [
      "unmatched:00978580",
      "WRITE",
      [
        "storage",
        "Stack[-0x3c0]",
        null,
        null
      ]
    ],
    [
      "unmatched:009785a8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009785d8"
      ]
    ]
  ],
  "added": [
    [
      "009785cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00978700"
      ]
    ],
    [
      "009785d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x3c0]",
        null,
        null
      ]
    ],
    [
      "009785fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009785d8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097860c ["INT_ADD", "register:40f0:8", ["const:97860c:8", "const:4:8"]]
- 0097860c ["CALL", null, ["callee:00c58010:8"]]
+ 00978660 ["INT_ADD", "register:40f0:8", ["const:978660:8", "const:4:8"]]
+ 00978660 ["CALL", null, ["callee:00c58010:8"]]
- 00978684 ["INT_ADD", "register:40f0:8", ["const:978684:8", "const:4:8"]]
- 00978684 ["CALL", null, ["callee:00441ed4:8"]]
+ 009786d8 ["INT_ADD", "register:40f0:8", ["const:9786d8:8", "const:4:8"]]
+ 009786d8 ["CALL", null, ["callee:00441ed4:8"]]
- 0097873c ["INT_ADD", "register:40f0:8", ["const:97873c:8", "const:4:8"]]
- 0097873c ["CALL", null, ["callee:00441ed4:8"]]
+ 00978790 ["INT_ADD", "register:40f0:8", ["const:978790:8", "const:4:8"]]
+ 00978790 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-01dc0d55c664a7296d8a591699f93322"></a>

### [`009796e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00979/009796e4.md) → [`00979738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00979/00979738.md) FUN_00979738

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009784e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00978/009784e8.md) [`009796e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00979/009796e4.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`0097853c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00978/0097853c.md) [`00979738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00979/00979738.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.88% / 新版 92.88%

優先判定に残った影響 `call_argument_candidate` 18件, `store_condition` 2件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00979774",
      "incomplete_value": false,
      "site": "00979778",
      "value": [
        "leaf",
        "const:25:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009798c0",
      "incomplete_value": false,
      "site": "009798c8",
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
      "definition_site": "0097986c",
      "incomplete_value": false,
      "site": "00979874",
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
      "definition_site": "00979978",
      "incomplete_value": false,
      "site": "00979980",
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
      "definition_site": "00979924",
      "incomplete_value": false,
      "site": "0097992c",
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
      "unmatched:009796f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009797bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097a3e0"
      ]
    ],
    [
      "009798c0",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "00979748",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00979810",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097a3e0"
      ]
    ],
    [
      "009798c0",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 00979778 ["INT_ADD", "register:40f0:8", ["const:979778:8", "const:4:8"]]
- 00979778 ["CALL", null, ["callee:00c580a0:8"]]
+ 009797cc ["INT_ADD", "register:40f0:8", ["const:9797cc:8", "const:4:8"]]
+ 009797cc ["CALL", null, ["callee:00c580a0:8"]]
- 00979834 ["CBRANCH", null, ["local:b36:8", "register:101:1"]]
+ 00979888 ["CBRANCH", null, ["local:b37:8", "register:101:1"]]
- 00979874 ["INT_ADD", "register:40f0:8", ["const:979874:8", "const:4:8"]]
- 00979874 ["CALL", null, ["callee:00441ed4:8"]]
+ 009798c8 ["INT_ADD", "register:40f0:8", ["const:9798c8:8", "const:4:8"]]
+ 009798c8 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-df0f8618406b4ad7bdb677d8764b568e"></a>

### [`0097a6f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097a/0097a6f8.md) → [`0097a74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097a/0097a74c.md) FUN_0097a74c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`009796e4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00979/009796e4.md) [`0097a6f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097a/0097a6f8.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`00979738`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00979/00979738.md) [`0097a74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097a/0097a74c.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, store_destination, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.80% / 新版 84.80%

優先判定に残った影響 `call_argument_candidate` 29件, `store_condition` 4件, `store_destination` 2件, `unresolved_branch_alignment` 15件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0097b260",
      "incomplete_value": true,
      "site": "0097b260",
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
            "const:80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097b0f4",
      "incomplete_value": true,
      "site": "0097b0f4",
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
            "const:100:8"
          ]
        ]
      ]
    },
    "ordinal": 64,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "0097b264",
      "incomplete_value": true,
      "site": "0097b264",
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
            "const:90:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097b0f8",
      "incomplete_value": true,
      "site": "0097b0f8",
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
            "const:110:8"
          ]
        ]
      ]
    },
    "ordinal": 65,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097a8b8",
      "incomplete_value": false,
      "site": "0097a8c0",
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
      "definition_site": "0097a864",
      "incomplete_value": false,
      "site": "0097a86c",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0097a6f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097a6fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097a700",
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
      "0097a74c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "0097a750",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "0097a754",
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
- 0097a86c ["INT_ADD", "register:40f0:8", ["const:97a86c:8", "const:4:8"]]
- 0097a86c ["CALL", null, ["callee:00441ed4:8"]]
+ 0097a8c0 ["INT_ADD", "register:40f0:8", ["const:97a8c0:8", "const:4:8"]]
+ 0097a8c0 ["CALL", null, ["callee:00441ed4:8"]]
- 0097a8c0 ["COPY", "register:4010:8", ["register:40a0:8"]]
- 0097a960 ["INT_ADD", "register:40f0:8", ["const:97a960:8", "const:4:8"]]
- 0097a960 ["CALL", null, ["callee:004428c4:8"]]
+ 0097a9b4 ["INT_ADD", "register:40f0:8", ["const:97a9b4:8", "const:4:8"]]
+ 0097a9b4 ["CALL", null, ["callee:004428c4:8"]]
~~~


<a id="compare-86cf3e7c435e3692afff6e8510e2d5d5"></a>

### [`0097b694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097b/0097b694.md) → [`0097b6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097b/0097b6e8.md) FUN_0097b6e8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0097a6f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097a/0097a6f8.md) [`0097b694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097b/0097b694.md) · 呼出先 21件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`0097a74c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097a/0097a74c.md) [`0097b6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097b/0097b6e8.md) · 呼出先 21件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.42% / 新版 90.42%

優先判定に残った影響 `call_argument_candidate` 20件, `unresolved_branch_alignment` 10件, `unresolved_call_alignment` 5件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097b860",
      "incomplete_value": false,
      "site": "0097b868",
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
      "definition_site": "0097b80c",
      "incomplete_value": false,
      "site": "0097b814",
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
      "definition_site": "0097b918",
      "incomplete_value": false,
      "site": "0097b920",
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
      "definition_site": "0097b8c4",
      "incomplete_value": false,
      "site": "0097b8cc",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097b934",
      "incomplete_value": false,
      "site": "0097b940",
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
      "definition_site": "0097b8e0",
      "incomplete_value": false,
      "site": "0097b8ec",
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
      "unmatched:0097b6a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0097b860",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "0097b918",
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
      "0097b6fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0097b860",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0097b918",
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
- 0097b814 ["INT_ADD", "register:40f0:8", ["const:97b814:8", "const:4:8"]]
- 0097b814 ["CALL", null, ["callee:00441ed4:8"]]
+ 0097b868 ["INT_ADD", "register:40f0:8", ["const:97b868:8", "const:4:8"]]
+ 0097b868 ["CALL", null, ["callee:00441ed4:8"]]
- 0097b8cc ["INT_ADD", "register:40f0:8", ["const:97b8cc:8", "const:4:8"]]
- 0097b8cc ["CALL", null, ["callee:00441ed4:8"]]
+ 0097b920 ["INT_ADD", "register:40f0:8", ["const:97b920:8", "const:4:8"]]
+ 0097b920 ["CALL", null, ["callee:00441ed4:8"]]
- 0097b8ec ["INT_ADD", "register:40f0:8", ["const:97b8ec:8", "const:4:8"]]
- 0097b8ec ["CALL", null, ["callee:00442834:8"]]
+ 0097b940 ["INT_ADD", "register:40f0:8", ["const:97b940:8", "const:4:8"]]
+ 0097b940 ["CALL", null, ["callee:00442834:8"]]
~~~


<a id="compare-5f1a20c1b0ab679df32fdf7a3fe35e82"></a>

### [`0097c4a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097c/0097c4a8.md) → [`0097c4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097c/0097c4fc.md) FUN_0097c4fc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0097b694`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097b/0097b694.md) [`0097c4a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097c/0097c4a8.md) · 呼出先 22件 [`0043b764`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b764.md) [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`00440f70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440f70.md) [`00441cec`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/00441cec.md)
- 新版 呼出元 2件 [`0097b6e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097b/0097b6e8.md) [`0097c4fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097c/0097c4fc.md) · 呼出先 22件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00441d2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/00441d2c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.59% / 新版 92.59%

優先判定に残った影響 `call_argument_candidate` 17件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097c57c",
      "incomplete_value": false,
      "site": "0097c580",
      "value": [
        "leaf",
        "const:25:8"
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
      "definition_site": "0097c5f4",
      "incomplete_value": true,
      "site": "0097c5f8",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "0097c660",
      "incomplete_value": false,
      "site": "0097c668",
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
      "definition_site": "0097c60c",
      "incomplete_value": false,
      "site": "0097c614",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0097c594",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097c5fc"
      ]
    ],
    [
      "0097c660",
      "PARAM",
      [
        "storage",
        "002b7f53",
        null,
        null
      ]
    ],
    [
      "0097c684",
      "PARAM",
      [
        "storage",
        "002c0ee9",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0097c5e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097c5fc"
      ]
    ],
    [
      "0097c660",
      "PARAM",
      [
        "storage",
        "002b7f93",
        null,
        null
      ]
    ],
    [
      "0097c684",
      "PARAM",
      [
        "storage",
        "002c0f29",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097c52c ["INT_ADD", "register:40f0:8", ["const:97c52c:8", "const:4:8"]]
- 0097c52c ["CALL", null, ["callee:00c580a0:8"]]
+ 0097c580 ["INT_ADD", "register:40f0:8", ["const:97c580:8", "const:4:8"]]
+ 0097c580 ["CALL", null, ["callee:00c580a0:8"]]
- 0097c5a4 ["INT_ADD", "register:40f0:8", ["const:97c5a4:8", "const:4:8"]]
- 0097c5a4 ["CALL", null, ["callee:00c58010:8"]]
+ 0097c5f8 ["INT_ADD", "register:40f0:8", ["const:97c5f8:8", "const:4:8"]]
+ 0097c5f8 ["CALL", null, ["callee:00c58010:8"]]
- 0097c614 ["INT_ADD", "register:40f0:8", ["const:97c614:8", "const:4:8"]]
- 0097c614 ["CALL", null, ["callee:00441ed4:8"]]
+ 0097c668 ["INT_ADD", "register:40f0:8", ["const:97c668:8", "const:4:8"]]
+ 0097c668 ["CALL", null, ["callee:00441ed4:8"]]
~~~


<a id="compare-13e84acbd9bf7fdd6e4d28a14ab3f74d"></a>

### [`0097d1c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d1c0.md) → [`0097d214`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d214.md) FUN_0097d214

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
      "definition_site": "0097d228",
      "incomplete_value": false,
      "site": "0097d22c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:db8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d1d4",
      "incomplete_value": false,
      "site": "0097d1d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ce8:8"
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
      "0097d22c",
      "DATA",
      [
        "storage",
        "00c87ce8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097d22c",
      "DATA",
      [
        "storage",
        "00c87db8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d1cc ["INT_ADD", "register:40f0:8", ["const:97d1cc:8", "const:4:8"]]
- 0097d1cc ["CALL", null, ["callee:00c57f60:8"]]
+ 0097d220 ["INT_ADD", "register:40f0:8", ["const:97d220:8", "const:4:8"]]
+ 0097d220 ["CALL", null, ["callee:00c57f60:8"]]
- 0097d1d4 ["COPY", "tmp:0:8", ["const:ce8:8"]]
- 0097d1d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d1d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d1d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097d228 ["COPY", "tmp:0:8", ["const:db8:8"]]
+ 0097d228 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097d228 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097d228 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e9ea520c79427fadf5effc81a77933ba"></a>

### [`0097d1fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d1fc.md) → [`0097d250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d250.md) FUN_0097d250

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

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
      "site": "0097d274",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d220",
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
      "0097d274",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "0097d274",
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
- 0097d220 ["INT_ADD", "register:40f0:8", ["const:97d220:8", "const:4:8"]]
- 0097d220 ["CALL", null, ["ram:47acf4:8"]]
+ 0097d274 ["INT_ADD", "register:40f0:8", ["const:97d274:8", "const:4:8"]]
+ 0097d274 ["CALL", null, ["ram:47ad34:8"]]
- 0097d22c ["INT_ADD", "register:40f0:8", ["const:97d22c:8", "const:4:8"]]
- 0097d22c ["CALL", null, ["callee:0047ce14:8"]]
+ 0097d280 ["INT_ADD", "register:40f0:8", ["const:97d280:8", "const:4:8"]]
+ 0097d280 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-9da1cad0ca212983ba0421081d53d1d9"></a>

### [`0097d270`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d270.md) → [`0097d2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d2c4.md) FUN_0097d2c4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `store_value` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "0097d2e4",
      "incomplete_value": false,
      "site": "0097d2e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:e38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d290",
      "incomplete_value": false,
      "site": "0097d294",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:d68:8"
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
      "0097d2e8",
      "DATA",
      [
        "storage",
        "00c87d68",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0097d2a0",
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
      "0097d2e8",
      "DATA",
      [
        "storage",
        "00c87e38",
        null,
        "undefined *"
      ]
    ],
    [
      "0097d2f4",
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
- 0097d284 ["INT_ADD", "register:40f0:8", ["const:97d284:8", "const:4:8"]]
- 0097d284 ["CALL", null, ["callee:00c57f60:8"]]
+ 0097d2d8 ["INT_ADD", "register:40f0:8", ["const:97d2d8:8", "const:4:8"]]
+ 0097d2d8 ["CALL", null, ["callee:00c57f60:8"]]
- 0097d290 ["COPY", "tmp:0:8", ["const:d68:8"]]
- 0097d290 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d290 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d290 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097d2e4 ["COPY", "tmp:0:8", ["const:e38:8"]]
+ 0097d2e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097d2e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097d2e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0097d2a0 ["COPY", "tmp:0:8", ["register:8:8"]]
- 0097d2a0 ["INT_ADD", "register:8:8", ["register:8:8", "const:20:8"]]
- 0097d2a0 ["LOAD", "tmp:1:8", ["const:1b1:8", "tmp:0:8"]]
- 0097d2a0 ["INT_ADD", "tmp:2:8", ["tmp:0:8", "const:8:8"]]
~~~


<a id="compare-7377372da7a404c7ba9d2b63051bcf82"></a>

### [`0097d2c8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d2c8.md) → [`0097d31c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d31c.md) FUN_0097d31c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 14件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`00492e08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00492/00492e08.md) [`00684fb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00684/00684fb0.md)
- 新版 呼出元 0件  · 呼出先 14件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00492e48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00492/00492e48.md) [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d360",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d30c",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0097d438",
      "incomplete_value": true,
      "site": "0097d43c",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:0097d2fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097d398"
      ]
    ],
    [
      "0097d360",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:0097d360",
      "READ",
      [
        "storage",
        "002b309f",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0097d350",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097d398"
      ]
    ],
    [
      "0097d360",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0097d3b4",
      "READ",
      [
        "storage",
        "002b30d0",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d30c ["INT_ADD", "register:40f0:8", ["const:97d30c:8", "const:4:8"]]
- 0097d30c ["CALL", null, ["ram:47acf4:8"]]
+ 0097d360 ["INT_ADD", "register:40f0:8", ["const:97d360:8", "const:4:8"]]
+ 0097d360 ["CALL", null, ["ram:47ad34:8"]]
- 0097d360 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 0097d360 ["LOAD", "register:5000:16", ["const:1b1:8", "tmp:0:8"]]
- 0097d360 ["COPY", "register:5010:8", ["const:0:8"]]
- 0097d360 ["COPY", "register:5018:8", ["const:0:8"]]
- 0097d43c ["INT_ADD", "register:40f0:8", ["const:97d43c:8", "const:4:8"]]
- 0097d43c ["CALL", null, ["callee:00c57f80:8"]]
+ 0097d490 ["INT_ADD", "register:40f0:8", ["const:97d490:8", "const:4:8"]]
+ 0097d490 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-4bf2f7aaae85daebee30d760186a7228"></a>

### [`0097d5a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d5a8.md) → [`0097d5fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d5fc.md) FUN_0097d5fc

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
      "definition_site": "0097d620",
      "incomplete_value": false,
      "site": "0097d620",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ea8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d5cc",
      "incomplete_value": false,
      "site": "0097d5cc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
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
      "0097d620",
      "DATA",
      [
        "storage",
        "00c87dd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097d620",
      "DATA",
      [
        "storage",
        "00c87ea8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d5bc ["INT_ADD", "register:40f0:8", ["const:97d5bc:8", "const:4:8"]]
- 0097d5bc ["CALL", null, ["callee:00c57f60:8"]]
+ 0097d610 ["INT_ADD", "register:40f0:8", ["const:97d610:8", "const:4:8"]]
+ 0097d610 ["CALL", null, ["callee:00c57f60:8"]]
- 0097d5c8 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 0097d5c8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d5c8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d5c8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097d61c ["COPY", "tmp:0:8", ["const:ea8:8"]]
+ 0097d61c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097d61c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097d61c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca8d02d5bca93f49bf4c4435df90c716"></a>

### [`0097d5dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d5dc.md) → [`0097d630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d630.md) FUN_0097d630

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
      "definition_site": "0097d63c",
      "incomplete_value": false,
      "site": "0097d63c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:ea8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d5e8",
      "incomplete_value": false,
      "site": "0097d5e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
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
      "0097d63c",
      "DATA",
      [
        "storage",
        "00c87dd8",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097d63c",
      "DATA",
      [
        "storage",
        "00c87ea8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d5e4 ["COPY", "tmp:0:8", ["const:dd8:8"]]
- 0097d5e4 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 0097d5e4 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 0097d5e4 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 0097d638 ["COPY", "tmp:0:8", ["const:ea8:8"]]
+ 0097d638 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 0097d638 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 0097d638 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-08a2870598d9aafd14dc2acd941c1bcf"></a>

### [`0097d5f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d5f8.md) → [`0097d64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d64c.md) FUN_0097d64c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`00689980`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00689/00689980.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006899c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/006899c0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.53% / 新版 98.53%

優先判定に残った影響 `call_target` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d684",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d630",
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
      "0097d684",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "0097d6dc",
      "DATA",
      [
        "storage",
        "0039b22c",
        "fde_0039b22c",
        "dword"
      ]
    ],
    [
      "unmatched:0097d6b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097d730"
      ]
    ]
  ],
  "added": [
    [
      "0097d684",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0097d6dc",
      "DATA",
      [
        "storage",
        "0039b22c",
        null,
        "dword"
      ]
    ],
    [
      "0097d708",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097d730"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d630 ["INT_ADD", "register:40f0:8", ["const:97d630:8", "const:4:8"]]
- 0097d630 ["CALL", null, ["ram:47acf4:8"]]
+ 0097d684 ["INT_ADD", "register:40f0:8", ["const:97d684:8", "const:4:8"]]
+ 0097d684 ["CALL", null, ["ram:47ad34:8"]]
- 0097d63c ["INT_ADD", "register:40f0:8", ["const:97d63c:8", "const:4:8"]]
- 0097d63c ["CALL", null, ["callee:0047ce14:8"]]
+ 0097d690 ["INT_ADD", "register:40f0:8", ["const:97d690:8", "const:4:8"]]
+ 0097d690 ["CALL", null, ["callee:0047ce14:8"]]
- 0097d660 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 0097d660 ["CBRANCH", null, ["local:b28:8", "tmp:0:1"]]
+ 0097d6b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 0097d6b4 ["CBRANCH", null, ["local:b27:8", "tmp:0:1"]]
~~~


<a id="compare-bb5a1548e104e11df1456745db547eac"></a>

### [`0097d844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d844.md) → [`0097d898`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d898.md) FUN_0097d898

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
      "definition_site": "0097d8ac",
      "incomplete_value": false,
      "site": "0097d8b0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:f38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097d858",
      "incomplete_value": false,
      "site": "0097d85c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:e68:8"
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
      "0097d8b0",
      "DATA",
      [
        "storage",
        "00c87e68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097d8b0",
      "DATA",
      [
        "storage",
        "00c87f38",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d850 ["INT_ADD", "register:40f0:8", ["const:97d850:8", "const:4:8"]]
- 0097d850 ["CALL", null, ["callee:00c57f60:8"]]
+ 0097d8a4 ["INT_ADD", "register:40f0:8", ["const:97d8a4:8", "const:4:8"]]
+ 0097d8a4 ["CALL", null, ["callee:00c57f60:8"]]
- 0097d858 ["COPY", "tmp:0:8", ["const:e68:8"]]
- 0097d858 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d858 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d858 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097d8ac ["COPY", "tmp:0:8", ["const:f38:8"]]
+ 0097d8ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097d8ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097d8ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4f5257e4171157edb2440830f4f42578"></a>

### [`0097d880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d880.md) → [`0097d8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d8d4.md) FUN_0097d8d4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.16% / 新版 92.16%

優先判定に残った影響 `call_target` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d8fc",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "0097d8a8",
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
      "0097d8fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:0097d8f4",
      "DATA",
      [
        "storage",
        "00335f34",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:0097d930",
      "DATA",
      [
        "storage",
        "00335f30",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "0097d8fc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0097d948",
      "DATA",
      [
        "storage",
        "00335f34",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "0097d984",
      "DATA",
      [
        "storage",
        "00335f30",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097d8a8 ["INT_ADD", "register:40f0:8", ["const:97d8a8:8", "const:4:8"]]
- 0097d8a8 ["CALL", null, ["ram:47acf4:8"]]
+ 0097d8fc ["INT_ADD", "register:40f0:8", ["const:97d8fc:8", "const:4:8"]]
+ 0097d8fc ["CALL", null, ["ram:47ad34:8"]]
- 0097d8fc ["INT_ADD", "register:40f0:8", ["const:97d8fc:8", "const:4:8"]]
- 0097d8fc ["CALL", null, ["callee:00851550:8"]]
+ 0097d950 ["INT_ADD", "register:40f0:8", ["const:97d950:8", "const:4:8"]]
+ 0097d950 ["CALL", null, ["callee:00851550:8"]]
- 0097d8b4 ["INT_ADD", "register:40f0:8", ["const:97d8b4:8", "const:4:8"]]
- 0097d8b4 ["CALL", null, ["callee:0047ce14:8"]]
+ 0097d908 ["INT_ADD", "register:40f0:8", ["const:97d908:8", "const:4:8"]]
+ 0097d908 ["CALL", null, ["callee:0047ce14:8"]]
~~~


<a id="compare-c1b6ea082048f9dc8f531ea226b63ca3"></a>

### [`0097d978`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d978.md) → [`0097d9cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097d9cc.md) FUN_0097d9cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 55.56% / 新版 55.56%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0097d990",
      "DATA",
      [
        "storage",
        "00c87ee8",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:0097d994",
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
      "0097d9e4",
      "DATA",
      [
        "storage",
        "00c87fb8",
        null,
        "undefined *"
      ]
    ],
    [
      "0097d9e8",
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
- 0097d984 ["INT_ADD", "register:40f0:8", ["const:97d984:8", "const:4:8"]]
- 0097d984 ["CALL", null, ["callee:00c57f60:8"]]
+ 0097d9d8 ["INT_ADD", "register:40f0:8", ["const:97d9d8:8", "const:4:8"]]
+ 0097d9d8 ["CALL", null, ["callee:00c57f60:8"]]
- 0097d98c ["COPY", "tmp:0:8", ["const:ee8:8"]]
- 0097d98c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097d98c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097d98c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0097d990 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 0097d990 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4040:8"]]
~~~


<a id="compare-996478b507792674fa95cae52c7ddec7"></a>

### [`0097d9b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097d/0097d9b4.md) → [`0097da08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097d/0097da08.md) FUN_0097da08

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 13件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`005e8198`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e8/005e8198.md) [`0071e394`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071e/0071e394.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 0件  · 呼出先 13件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`0071e3ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071e/0071e3ec.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.21% / 新版 85.21%

優先判定に残った影響 `call_argument_candidate` 3件, `call_target` 1件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0097da08",
      "incomplete_value": false,
      "site": "0097da10",
      "value": [
        "leaf",
        "const:b:8"
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
      "definition_site": "0097da64",
      "incomplete_value": true,
      "site": "0097da6c",
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
    "ordinal": 3,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0097de70",
      "incomplete_value": true,
      "site": "0097de74",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:4048:8"
          ]
        ]
      ]
    },
    "ordinal": 29,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0097d9c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097da04",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:0097da34",
      "READ",
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
      "0097da18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0097da58",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "0097da88",
      "READ",
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
- 0097da10 ["INT_ADD", "register:40f0:8", ["const:97da10:8", "const:4:8"]]
- 0097da10 ["CALL", null, ["callee:0047ce14:8"]]
+ 0097da64 ["INT_ADD", "register:40f0:8", ["const:97da64:8", "const:4:8"]]
+ 0097da64 ["CALL", null, ["callee:0047ce14:8"]]
- 0097da6c ["INT_ADD", "register:40f0:8", ["const:97da6c:8", "const:4:8"]]
- 0097da6c ["CALL", null, ["callee:00c53da0:8"]]
+ 0097dac0 ["INT_ADD", "register:40f0:8", ["const:97dac0:8", "const:4:8"]]
+ 0097dac0 ["CALL", null, ["callee:00c53da0:8"]]
- 0097de74 ["INT_ADD", "register:40f0:8", ["const:97de74:8", "const:4:8"]]
- 0097de74 ["CALL", null, ["callee:00b2f88c:8"]]
+ 0097dec8 ["INT_ADD", "register:40f0:8", ["const:97dec8:8", "const:4:8"]]
+ 0097dec8 ["CALL", null, ["callee:00b2f88c:8"]]
~~~


<a id="compare-228010706091e3d3ab804ef29c3804d6"></a>

### [`0097e088`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097e/0097e088.md) → [`0097e0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097e0dc.md) FUN_0097e0dc

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
      "definition_site": "0097e0f0",
      "incomplete_value": false,
      "site": "0097e0f4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097e09c",
      "incomplete_value": false,
      "site": "0097e0a0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c87000:8"
          ],
          [
            "leaf",
            "const:f68:8"
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
      "0097e0f4",
      "DATA",
      [
        "storage",
        "00c87f68",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "0097e0f4",
      "DATA",
      [
        "storage",
        "00c88038",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097e094 ["INT_ADD", "register:40f0:8", ["const:97e094:8", "const:4:8"]]
- 0097e094 ["CALL", null, ["callee:00c57f60:8"]]
+ 0097e0e8 ["INT_ADD", "register:40f0:8", ["const:97e0e8:8", "const:4:8"]]
+ 0097e0e8 ["CALL", null, ["callee:00c57f60:8"]]
- 0097e098 ["COPY", "register:4040:8", ["const:c87000:8"]]
+ 0097e0ec ["COPY", "register:4040:8", ["const:c88000:8"]]
- 0097e09c ["COPY", "tmp:0:8", ["const:f68:8"]]
- 0097e09c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 0097e09c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 0097e09c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 0097e0f0 ["COPY", "tmp:0:8", ["const:38:8"]]
+ 0097e0f0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e0f0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 0097e0f0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-4c55cd376fad043d5e1d4de0d6e07861"></a>

### [`0097e0c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097e/0097e0c4.md) → [`0097e118`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097e118.md) FUN_0097e118

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 10件 [`00468804`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00468/00468804.md) [`0046a8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a8e8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`008b9290`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9290.md)
- 新版 呼出元 0件  · 呼出先 10件 [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment

命令の説明率　旧版 83.81% / 新版 83.81%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 4件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097e528",
      "incomplete_value": false,
      "site": "0097e538",
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
      "definition_site": "0097e4d4",
      "incomplete_value": false,
      "site": "0097e4e4",
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
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097e530",
      "incomplete_value": false,
      "site": "0097e538",
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
            "const:248:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097e4dc",
      "incomplete_value": false,
      "site": "0097e4e4",
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
            "const:178:8"
          ]
        ]
      ]
    },
    "ordinal": 22,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0097e250",
      "DATA",
      [
        "storage",
        "00339ade",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:0097e254",
      "DATA",
      [
        "storage",
        "00339ae1",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:0097e258",
      "DATA",
      [
        "storage",
        "00339ae0",
        null,
        "fde_table_entry"
      ]
    ]
  ],
  "added": [
    [
      "0097e2a4",
      "DATA",
      [
        "storage",
        "00339ade",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "0097e2a8",
      "DATA",
      [
        "storage",
        "00339ae1",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "0097e2ac",
      "DATA",
      [
        "storage",
        "00339ae0",
        null,
        "fde_table_entry"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097e4e4 ["INT_ADD", "register:40f0:8", ["const:97e4e4:8", "const:4:8"]]
- 0097e4e4 ["CALL", null, ["callee:00c586e0:8"]]
+ 0097e538 ["INT_ADD", "register:40f0:8", ["const:97e538:8", "const:4:8"]]
+ 0097e538 ["CALL", null, ["callee:00c586e0:8"]]
- 0097e0f8 ["INT_ADD", "register:40f0:8", ["const:97e0f8:8", "const:4:8"]]
- 0097e0f8 ["CALL", null, ["callee:008b92e8:8"]]
+ 0097e14c ["INT_ADD", "register:40f0:8", ["const:97e14c:8", "const:4:8"]]
+ 0097e14c ["CALL", null, ["callee:008b92e8:8"]]
- 0097e0fc ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
- 0097e0fc ["CBRANCH", null, ["local:b30:8", "tmp:0:1"]]
+ 0097e150 ["INT_EQUAL", "tmp:0:1", ["register:4000:4", "const:0:4"]]
+ 0097e150 ["CBRANCH", null, ["local:b29:8", "tmp:0:1"]]
~~~


<a id="compare-ead8c42a9456d961604ee1d355a79e2e"></a>

### [`0097e66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097e/0097e66c.md) → [`0097e6c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097e6c0.md) _INIT_189

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.23% / 新版 80.23%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0097e7c0",
      "incomplete_value": true,
      "site": "0097e7cc",
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
    "new": null,
    "old": {
      "definition_site": "0097e89c",
      "incomplete_value": true,
      "site": "0097e8a0",
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
            "const:f90:8"
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
      "unmatched:0097e69c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097e6a8",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0097e6c4",
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
      "0097e6f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "0097e6fc",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "0097e718",
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
- 0097e7cc ["INT_ADD", "register:40f0:8", ["const:97e7cc:8", "const:4:8"]]
- 0097e7cc ["CALL", null, ["callee:0043b838:8"]]
+ 0097e820 ["INT_ADD", "register:40f0:8", ["const:97e820:8", "const:4:8"]]
+ 0097e820 ["CALL", null, ["callee:0043b838:8"]]
- 0097e84c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0097e84c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0097e84c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0097e84c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0097e8a0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 0097e8a0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0097e8a0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0097e8a0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 0097e8a0 ["INT_ADD", "register:40f0:8", ["const:97e8a0:8", "const:4:8"]]
- 0097e8a0 ["CALL", null, ["callee:00c57f00:8"]]
+ 0097e8f4 ["INT_ADD", "register:40f0:8", ["const:97e8f4:8", "const:4:8"]]
+ 0097e8f4 ["CALL", null, ["callee:00c57f00:8"]]
~~~


<a id="compare-5dc58fe0b75b67009f7adecfa4d33e6e"></a>

### [`0097e9fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097e/0097e9fc.md) → [`0097ea50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097ea50.md) FUN_0097ea50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0097fb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097fb20.md) · 呼出先 6件 [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`005977bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/005977bc.md) [`00597a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00597/00597a8c.md) [`0097f338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097f338.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) · 呼出先 6件 [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`005977fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/005977fc.md) [`00597acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597acc.md) [`0097f38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097f38c.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.99% / 新版 83.99%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `store_value` 3件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 8件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0097eb94",
      "incomplete_value": true,
      "site": "0097eb94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e19:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097eb40",
      "incomplete_value": true,
      "site": "0097eb40",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e6d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0097ee6c",
      "incomplete_value": true,
      "site": "0097ee6c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097ee18",
      "incomplete_value": true,
      "site": "0097ee18",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f75:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 56,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "0097efc4",
      "incomplete_value": true,
      "site": "0097efc4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:30a:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097ef70",
      "incomplete_value": true,
      "site": "0097ef70",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2ca:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 68,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0097ea68",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097ec44"
      ]
    ],
    [
      "0097eb84",
      "READ",
      [
        "storage",
        "002bce6d",
        null,
        "string"
      ]
    ],
    [
      "unmatched:0097ec40",
      "READ",
      [
        "storage",
        "002b83e7",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0097eabc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097ec44"
      ]
    ],
    [
      "0097eb84",
      "READ",
      [
        "storage",
        "002bce19",
        null,
        "string"
      ]
    ],
    [
      "0097ec94",
      "READ",
      [
        "storage",
        "002b8393",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097ea5c ["INT_ADD", "register:40f0:8", ["const:97ea5c:8", "const:4:8"]]
- 0097ea5c ["CALL", null, ["callee:004410cc:8"]]
+ 0097eab0 ["INT_ADD", "register:40f0:8", ["const:97eab0:8", "const:4:8"]]
+ 0097eab0 ["CALL", null, ["callee:004410cc:8"]]
- 0097eab0 ["INT_ADD", "register:40f0:8", ["const:97eab0:8", "const:4:8"]]
- 0097eab0 ["CALL", null, ["callee:00c57f80:8"]]
+ 0097eb04 ["INT_ADD", "register:40f0:8", ["const:97eb04:8", "const:4:8"]]
+ 0097eb04 ["CALL", null, ["callee:00c57f80:8"]]
- 0097eaec ["COPY", "register:0:8", ["register:4048:8"]]
- 0097eaec ["INT_ADD", "register:40f0:8", ["const:97eaec:8", "const:4:8"]]
- 0097eaec ["CALLIND", null, ["register:0:8"]]
+ 0097eb40 ["COPY", "register:0:8", ["register:4048:8"]]
+ 0097eb40 ["INT_ADD", "register:40f0:8", ["const:97eb40:8", "const:4:8"]]
+ 0097eb40 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-4e9e4a45e93367c9942ba8414b47e7ec"></a>

### [`0097f338`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097f338.md) → [`0097f38c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097f38c.md) FUN_0097f38c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0097e9fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097e/0097e9fc.md) · 呼出先 0件 
- 新版 呼出元 1件 [`0097ea50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097e/0097ea50.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment

命令の説明率　旧版 65.93% / 新版 65.93%

優先判定に残った影響 `return_value_candidate` 1件

アドレスに依存する影響 `unresolved_branch_alignment` 21件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "0097f7c8",
      "incomplete_value": true,
      "site": "0097f7cc",
      "value": [
        "INT_OR",
        "8",
        [
          [
            "INT_ZEXT",
            "8",
            [
              [
                "live",
                "register:4040:4"
              ]
            ]
          ],
          [
            "INT_LEFT",
            "8",
            [
              [
                "live",
                "register:4048:8"
              ],
              [
                "leaf",
                "const:20:4"
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
      "unmatched:0097f360",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097f53c"
      ]
    ],
    [
      "unmatched:0097f368",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097f41c"
      ]
    ],
    [
      "0097f598",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:0097f5b8"
      ]
    ]
  ],
  "added": [
    [
      "0097f3b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097f53c"
      ]
    ],
    [
      "0097f3bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097f41c"
      ]
    ],
    [
      "0097f598",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0097f60c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097f348 ["INT_RIGHT", "register:4048:8", ["register:4058:8", "const:1:8"]]
- 0097f34c ["INT_AND", "tmp:0:4", ["register:4058:4", "const:1:4"]]
- 0097f34c ["INT_SLESS", "register:107:1", ["tmp:0:4", "const:0:4"]]
- 0097f34c ["INT_EQUAL", "register:108:1", ["tmp:0:4", "const:0:4"]]
- 0097f34c ["COPY", "register:100:1", ["register:107:1"]]
- 0097f350 ["INT_AND", "register:4068:8", ["register:4068:8", "const:ffff0000ffffffff:8"]]
- 0097f350 ["INT_OR", "register:4068:8", ["register:4068:8", "const:5f7200000000:8"]]
~~~


<a id="compare-ecb135f2438e1329ec588f12c926aef4"></a>

### [`0097f77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097f77c.md) → [`0097f7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097f7d0.md) FUN_0097f7d0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00980868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980868.md) · 呼出先 3件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md) [`00981720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981720.md)
- 新版 呼出元 1件 [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) · 呼出先 3件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00981774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981774.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.29% / 新版 84.29%

優先判定に残った影響 `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0097f7e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097f7e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097f7f4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048cec4"
      ]
    ]
  ],
  "added": [
    [
      "0097f838",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0097f83c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0097f848",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0048cec4"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097f7b4 ["COPY", "register:4048:8", ["const:7101:8"]]
+ 0097f808 ["COPY", "register:4048:8", ["const:7102:8"]]
- 0097f7e4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 0097f7e4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 0097f7e4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 0097f7e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0097f7e8 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 0097f7e8 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 0097f7e8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 0097f7e8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-00af56c1345a79a5b52b08ad040d4a9f"></a>

### [`0097f894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097f894.md) → [`0097f8e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097f8e8.md) FUN_0097f8e8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0043c258`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043c/0043c258.md) · 呼出先 11件 [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`0044b844`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044b844.md) [`0044ba18`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044b/0044ba18.md) [`00561d34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561d34.md) [`00561fd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00561/00561fd0.md)
- 新版 呼出元 1件 [`0043c298`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043c/0043c298.md) · 呼出先 11件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`0044b884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044b884.md) [`0044ba58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044ba58.md) [`00561d74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00561/00561d74.md) [`00562010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00562/00562010.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.62% / 新版 87.62%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0097f8d8",
      "incomplete_value": true,
      "site": "0097f8dc",
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
            "const:40:8"
          ]
        ]
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
      "definition_site": "0097f8f8",
      "incomplete_value": true,
      "site": "0097f8fc",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097f974",
      "incomplete_value": true,
      "site": "0097f97c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c98:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097f920",
      "incomplete_value": true,
      "site": "0097f928",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:bc8:8"
              ]
            ]
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
      "unmatched:0097f898",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097f89c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0097f974",
      "READ",
      [
        "storage",
        "00c9abc8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "0097f8ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "0097f8f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "0097f974",
      "READ",
      [
        "storage",
        "00c9ac98",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097f8dc ["INT_ADD", "register:40f0:8", ["const:97f8dc:8", "const:4:8"]]
- 0097f8dc ["CALL", null, ["callee:00562010:8"]]
+ 0097f930 ["INT_ADD", "register:40f0:8", ["const:97f930:8", "const:4:8"]]
+ 0097f930 ["CALL", null, ["callee:00562010:8"]]
- 0097f8fc ["INT_ADD", "register:40f0:8", ["const:97f8fc:8", "const:4:8"]]
- 0097f8fc ["CALL", null, ["callee:00c57f80:8"]]
+ 0097f950 ["INT_ADD", "register:40f0:8", ["const:97f950:8", "const:4:8"]]
+ 0097f950 ["CALL", null, ["callee:00c57f80:8"]]
- 0097f928 ["INT_ADD", "register:40f0:8", ["const:97f928:8", "const:4:8"]]
- 0097f928 ["CALL", null, ["callee:00561d74:8"]]
+ 0097f97c ["INT_ADD", "register:40f0:8", ["const:97f97c:8", "const:4:8"]]
+ 0097f97c ["CALL", null, ["callee:00561d74:8"]]
~~~


<a id="compare-c1addf84cc8ce3b49c745d3df9f55a72"></a>

### [`0097fb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097fb20.md) → [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) FUN_0097fb74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`00981878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981878.md) [`00b28f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00b28/00b28f54.md) · 呼出先 26件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`0044108c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00441/0044108c.md) [`00481430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481430.md) [`00481f84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481f84.md)
- 新版 呼出元 2件 [`009818cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009818cc.md) [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 26件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md) [`00481fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481fc4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 92.76% / 新版 92.76%

優先判定に残った影響 `call_argument_candidate` 25件, `store_condition` 3件, `unresolved_branch_alignment` 7件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097fbf4",
      "incomplete_value": false,
      "site": "0097fbfc",
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
            "const:edc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0097fba0",
      "incomplete_value": false,
      "site": "0097fba8",
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
            "const:f30:8"
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
      "definition_site": "0097fcd4",
      "incomplete_value": true,
      "site": "0097fcdc",
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
    "ordinal": 12,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "0097fcd8",
      "incomplete_value": true,
      "site": "0097fcdc",
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
            "const:a0:8"
          ]
        ]
      ]
    },
    "old": null,
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
      "unmatched:0097fb54",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097fb74",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c0]",
        null,
        null
      ]
    ],
    [
      "unmatched:0097fb78",
      "READ",
      [
        "storage",
        "002b62bd",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "0097fba8",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "0097fbc8",
      "WRITE",
      [
        "storage",
        "Stack[-0x1c0]",
        null,
        null
      ]
    ],
    [
      "0097fbcc",
      "READ",
      [
        "storage",
        "002b62fd",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 0097fba8 ["INT_ADD", "register:40f0:8", ["const:97fba8:8", "const:4:8"]]
- 0097fba8 ["CALL", null, ["callee:00c58040:8"]]
+ 0097fbfc ["INT_ADD", "register:40f0:8", ["const:97fbfc:8", "const:4:8"]]
+ 0097fbfc ["CALL", null, ["callee:00c58040:8"]]
+ 0097fba8 ["COPY", "tmp:0:8", ["register:4040:8"]]
+ 0097fba8 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:ffffffffffffffd8:8"]]
+ 0097fba8 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
- 0097fc68 ["INT_ADD", "register:40f0:8", ["const:97fc68:8", "const:4:8"]]
- 0097fc68 ["CALL", null, ["callee:0048d3b0:8"]]
+ 0097fcbc ["INT_ADD", "register:40f0:8", ["const:97fcbc:8", "const:4:8"]]
+ 0097fcbc ["CALL", null, ["callee:0048d3b0:8"]]
~~~


<a id="compare-ae8e1fe2b718a564c3ae33740297b59d"></a>

### [`00980738`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980738.md) → [`0098078c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/0098078c.md) FUN_0098078c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `unresolved_return_alignment` 1件

~~~diff
- 0098074c ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
- 0098074c ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0098074c ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0098074c ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 009807a0 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:0:4"]]
+ 009807a0 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 009807a0 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 009807a0 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 00980768 ["COPY", "register:0:8", ["register:40f0:8"]]
- 00980768 ["RETURN", null, ["register:0:8"]]
- 00980770 ["INT_ADD", "register:40f0:8", ["const:980770:8", "const:4:8"]]
- 00980770 ["CALL", null, ["callee:00c57f80:8"]]
+ 009807c4 ["INT_ADD", "register:40f0:8", ["const:9807c4:8", "const:4:8"]]
+ 009807c4 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-455f480308b9549340e5f08ee5618a7a"></a>

### [`009807e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/009807e0.md) → [`00980834`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980834.md) FUN_00980834

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) [`00773894`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00773/00773894.md) · 呼出先 1件 [`008514f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00851/008514f8.md)
- 新版 呼出元 2件 [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) [`007738ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00773/007738ec.md) · 呼出先 1件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 87.50% / 新版 87.50%

アドレスに依存する影響 `unresolved_return_alignment` 1件

~~~diff
- 009807e8 ["INT_ADD", "register:40f0:8", ["const:9807e8:8", "const:4:8"]]
- 009807e8 ["CALL", null, ["callee:00851550:8"]]
+ 0098083c ["INT_ADD", "register:40f0:8", ["const:98083c:8", "const:4:8"]]
+ 0098083c ["CALL", null, ["callee:00851550:8"]]
- 009807fc ["COPY", "register:0:8", ["register:40f0:8"]]
- 009807fc ["RETURN", null, ["register:0:8"]]
+ 00980850 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 00980850 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-52af99fc6659b92f6fe3d45c1efb0500"></a>

### [`00980800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980800.md) → [`00980854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980854.md) FUN_00980854

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 2件 [`00980868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980868.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 2件 [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00980800",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00980804",
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
      "00980854",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00980858",
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
- 00980800 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00980800 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00980800 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 00980800 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00980804 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00980804 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
- 00980824 ["CBRANCH", null, ["local:b7:8", "register:101:1"]]
+ 00980878 ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
~~~


<a id="compare-d54ea15ebf98b459b5ab46f4893c8640"></a>

### [`00980868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980868.md) → [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) FUN_009808bc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0089b28c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0089b/0089b28c.md) [`00980800`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980800.md) · 呼出先 13件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0048ccf8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ccf8.md) [`0048ce50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce50.md) [`0048dc4c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048d/0048dc4c.md) [`0049069c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00490/0049069c.md)
- 新版 呼出元 2件 [`0089b2e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089b/0089b2e4.md) [`00980854`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980854.md) · 呼出先 13件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce90.md) [`0048dc8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048d/0048dc8c.md) [`004906dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00490/004906dc.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 91.76% / 新版 91.76%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00980ad0",
      "incomplete_value": true,
      "site": "00980ad4",
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
            "const:18:8"
          ]
        ]
      ]
    },
    "ordinal": 13,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00980b18",
      "incomplete_value": true,
      "site": "00980b1c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:c0:8"
              ]
            ]
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
    "new": {
      "definition_site": "00980bd8",
      "incomplete_value": true,
      "site": "00980bdc",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 21,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0098086c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:00980870",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:00980874",
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
      "009808c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "009808c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "009808c8",
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
- 00980a80 ["INT_ADD", "register:40f0:8", ["const:980a80:8", "const:4:8"]]
- 00980a80 ["CALL", null, ["callee:0043bb60:8"]]
+ 00980ad4 ["INT_ADD", "register:40f0:8", ["const:980ad4:8", "const:4:8"]]
+ 00980ad4 ["CALL", null, ["callee:0043bb60:8"]]
- 00980ad4 ["INT_ADD", "register:40f0:8", ["const:980ad4:8", "const:4:8"]]
- 00980ad4 ["CALL", null, ["callee:0043bb60:8"]]
+ 00980b28 ["INT_ADD", "register:40f0:8", ["const:980b28:8", "const:4:8"]]
+ 00980b28 ["CALL", null, ["callee:0043bb60:8"]]
- 00980b1c ["INT_ADD", "register:40f0:8", ["const:980b1c:8", "const:4:8"]]
- 00980b1c ["CALL", null, ["callee:00c57f80:8"]]
+ 00980b70 ["INT_ADD", "register:40f0:8", ["const:980b70:8", "const:4:8"]]
+ 00980b70 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-80fdea91386003e54fd500b5555b4638"></a>

### [`00980d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980d04.md) → [`00980d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980d58.md) FUN_00980d58

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`00980868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980868.md) [`00980f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980f2c.md) · 呼出先 1件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md)
- 新版 呼出元 2件 [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) [`00980f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980f80.md) · 呼出先 1件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md)

変更の種類 call_argument_candidate, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.92% / 新版 97.92%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00980d60",
      "incomplete_value": true,
      "site": "00980d68",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "00980d60",
      "incomplete_value": true,
      "site": "00980d68",
      "value": [
        "LOAD",
        "8",
        [
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
    "slot": 3
  }
]
~~~


~~~diff
- 00980d68 ["INT_ADD", "register:40f0:8", ["const:980d68:8", "const:4:8"]]
- 00980d68 ["CALL", null, ["callee:0043bb60:8"]]
+ 00980dbc ["INT_ADD", "register:40f0:8", ["const:980dbc:8", "const:4:8"]]
+ 00980dbc ["CALL", null, ["callee:0043bb60:8"]]
- 00980d3c ["INT_ADD", "register:40f0:8", ["const:980d3c:8", "const:4:8"]]
- 00980d3c ["CALL", null, ["callee:0043bb60:8"]]
+ 00980d90 ["INT_ADD", "register:40f0:8", ["const:980d90:8", "const:4:8"]]
+ 00980d90 ["CALL", null, ["callee:0043bb60:8"]]
- 00980d5c ["BRANCH", null, ["local:b6:8"]]
+ 00980db0 ["BRANCH", null, ["local:b7:8"]]
~~~


<a id="compare-9efee36460cdd47c8a6f14bc4e4e8ac2"></a>

### [`00980e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980e10.md) → [`00980e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980e64.md) FUN_00980e64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00980868`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980868.md) · 呼出先 4件 [`0048ce84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce84.md) [`00981720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981720.md) [`009821cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009821cc.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`009808bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/009808bc.md) · 呼出先 4件 [`0048cec4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cec4.md) [`00981774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981774.md) [`00982220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982220.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.28% / 新版 80.28%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00980eac",
      "incomplete_value": true,
      "site": "00980ec4",
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
            "const:735:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00980e58",
      "incomplete_value": false,
      "site": "00980e70",
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
      "definition_site": "00980ed8",
      "incomplete_value": true,
      "site": "00980eec",
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
            "const:60:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00980ee4",
      "incomplete_value": true,
      "site": "00980eec",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "unmatched:00980e14",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00980e18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00980e1c",
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
      "00980e68",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00980e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00980e70",
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
- 00980e70 ["INT_ADD", "register:40f0:8", ["const:980e70:8", "const:4:8"]]
- 00980e70 ["CALL", null, ["callee:00982220:8"]]
+ 00980ec4 ["INT_ADD", "register:40f0:8", ["const:980ec4:8", "const:4:8"]]
+ 00980ec4 ["CALL", null, ["callee:00982220:8"]]
+ 00980e70 ["COPY", "tmp:0:8", ["register:40b0:8"]]
+ 00980e70 ["COPY", "tmp:1:8", ["register:40a8:8"]]
+ 00980e70 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
+ 00980e70 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00980e98 ["INT_ADD", "register:40f0:8", ["const:980e98:8", "const:4:8"]]
- 00980e98 ["CALL", null, ["callee:00982220:8"]]
+ 00980eec ["INT_ADD", "register:40f0:8", ["const:980eec:8", "const:4:8"]]
+ 00980eec ["CALL", null, ["callee:00982220:8"]]
~~~


<a id="compare-de08f6da0e491b9f34ac985897c5dbf3"></a>

### [`00980f2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980f2c.md) → [`00980f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980f80.md) FUN_00980f80

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) · 呼出先 7件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`006b8c44`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006b8/006b8c44.md) [`00980d04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980d04.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) · 呼出先 7件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) [`00980d58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980d58.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 89.80% / 新版 89.80%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 4件, `unresolved_branch_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00981098",
      "incomplete_value": true,
      "site": "0098109c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:60:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00980f84"
      ],
      [
        "FALL_THROUGH",
        "00980fd8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00980fd4",
      "incomplete_value": true,
      "site": "00980fe4",
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00980f90",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "ordinal": 14,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00980f84"
      ],
      [
        "FALL_THROUGH",
        "00980fd8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00980fd4",
      "incomplete_value": true,
      "site": "00980fe4",
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
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "00980f90",
      "value": [
        "live",
        "register:101:1"
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
      "unmatched:00980f78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098113c"
      ]
    ],
    [
      "unmatched:00980f84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00981154"
      ]
    ],
    [
      "unmatched:00980fcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00981030"
      ]
    ]
  ],
  "added": [
    [
      "00980fcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098113c"
      ]
    ],
    [
      "00980fd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00981154"
      ]
    ],
    [
      "00981020",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00981030"
      ]
    ]
  ]
}
~~~


~~~diff
+ 00980fd4 ["INT_LESSEQUAL", "register:105:1", ["register:40c8:8", "register:40b8:8"]]
+ 00980fd4 ["INT_SBORROW", "register:106:1", ["register:40b8:8", "register:40c8:8"]]
+ 00980fd4 ["INT_SUB", "tmp:0:8", ["register:40b8:8", "register:40c8:8"]]
+ 00980fd4 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 00980fe4 ["INT_SUB", "register:40c8:8", ["register:4098:8", "register:40c0:8"]]
- 00980fec ["COPY", "tmp:0:8", ["const:1:8"]]
- 00980fec ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 00980fec ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 00980fec ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-dfef164a939e0e65f6f941e62ba06b41"></a>

### [`009811a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/009811a4.md) → [`009811f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009811f8.md) FUN_009811f8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005fe66c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005fe/005fe66c.md) [`00605254`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00605/00605254.md) [`0075b9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075b/0075b9c4.md) [`0075eb80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0075e/0075eb80.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00605294`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00605/00605294.md) [`0075ba1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075ba1c.md) [`0075ebd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075e/0075ebd8.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `unresolved_store_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009811a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009811a8",
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
      "009811f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009811fc",
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
- 009811a4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009811a4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009811a4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 009811a4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009811a8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009811a8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 009811c8 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 009811c8 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
+ 0098121c ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0098121c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-ec25bfd06abc83edd0c4cb71a7fb7b45"></a>

### [`0098126c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/0098126c.md) → [`009812c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009812c0.md) FUN_009812c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.84% / 新版 91.84%

優先判定に残った影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009812b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009812f0"
      ]
    ],
    [
      "unmatched:009812c0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009812fc"
      ]
    ]
  ],
  "added": [
    [
      "00981308",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009812f0"
      ]
    ],
    [
      "00981314",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009812fc"
      ]
    ]
  ]
}
~~~


~~~diff
- 009812b4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009812b4 ["INT_EQUAL", "tmp:1:1", ["register:100:1", "register:103:1"]]
- 009812b4 ["BOOL_AND", "tmp:2:1", ["tmp:0:1", "tmp:1:1"]]
- 009812b4 ["CBRANCH", null, ["local:b2:8", "tmp:2:1"]]
- 009812bc ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8:8"]]
- 009812bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 009812c0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 009812c0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-65eae0f02cbe9ced841be2166dbb5bca"></a>

### [`00981330`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981330.md) → [`00981384`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981384.md) FUN_00981384

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`006103bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00610/006103bc.md) [`00769d84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00769/00769d84.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 2件 [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`00769ddc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00769/00769ddc.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 98.53% / 新版 98.53%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00981400"
      ],
      [
        "FALL_THROUGH",
        "00981454"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00981454",
      "incomplete_value": true,
      "site": "00981458",
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
      "definition_site": "00981400",
      "incomplete_value": true,
      "site": "00981404",
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
    "ordinal": 13,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00981400",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00981460"
      ]
    ]
  ],
  "added": [
    [
      "00981454",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00981460"
      ]
    ]
  ]
}
~~~


~~~diff
- 00981338 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00981338 ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
+ 0098138c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0098138c ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 00981388 ["BRANCH", null, ["local:b20:8"]]
+ 009813dc ["BRANCH", null, ["local:b19:8"]]
- 00981390 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00981390 ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
+ 009813e4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 009813e4 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
~~~


<a id="compare-693ed351501eaaccb72688769a71281e"></a>

### [`00981440`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981440.md) → [`00981494`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981494.md) FUN_00981494

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a261bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a26/00a261bc.md) · 呼出先 7件 [`004803f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004803f0.md) [`00480744`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480744.md) [`004807cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/004807cc.md) [`0086a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a460.md) [`009821cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009821cc.md)
- 新版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 7件 [`00480430`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480430.md) [`00480784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480784.md) [`0048080c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/0048080c.md) [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`00982220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982220.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.42% / 新版 92.42%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00981510",
      "incomplete_value": true,
      "site": "00981514",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "old": null,
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
      "unmatched:00981458",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:00981470",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00981544",
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
      "009814ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009814c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x58]",
        null,
        null
      ]
    ],
    [
      "00981544",
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
- 009814c0 ["INT_ADD", "register:40f0:8", ["const:9814c0:8", "const:4:8"]]
- 009814c0 ["CALL", null, ["callee:0048080c:8"]]
+ 00981514 ["INT_ADD", "register:40f0:8", ["const:981514:8", "const:4:8"]]
+ 00981514 ["CALL", null, ["callee:0048080c:8"]]
- 00981458 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 00981458 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 00981458 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 00981458 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00981470 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00981470 ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff0:8"]]
- 00981470 ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-33b503bdf4c73f23d971b6e37bad7d62"></a>

### [`0098157c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/0098157c.md) → [`009815d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009815d0.md) FUN_009815d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a2b2e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a2b/00a2b2e8.md) · 呼出先 6件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`00480e28`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00480/00480e28.md) [`00481098`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481098.md) [`00481128`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481128.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 6件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00480e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480e68.md) [`004810d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/004810d8.md) [`00481168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481168.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 93.15% / 新版 93.15%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0098162c",
      "incomplete_value": true,
      "site": "00981630",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00981580",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00981584",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00981648",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009816b0"
      ]
    ]
  ],
  "added": [
    [
      "009815d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009815d8",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0098169c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009816b0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00981630 ["INT_ADD", "register:40f0:8", ["const:981630:8", "const:4:8"]]
- 00981630 ["CALL", null, ["callee:004810d8:8"]]
+ 00981684 ["INT_ADD", "register:40f0:8", ["const:981684:8", "const:4:8"]]
+ 00981684 ["CALL", null, ["callee:004810d8:8"]]
- 0098157c ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
- 00981580 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00981580 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00981580 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 00981580 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-8335d22a570e5abcc992aed9c97837a9"></a>

### [`00981720`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981720.md) → [`00981774`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981774.md) FUN_00981774

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 3件 [`0097f77c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097f77c.md) [`0097fb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097fb20.md) [`00980e10`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00980/00980e10.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 3件 [`0097f7d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097f7d0.md) [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) [`00980e64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00980/00980e64.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 92.31% / 新版 92.31%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00981728",
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
      "0098177c",
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
- 00981728 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 00981728 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 00981728 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00981728 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 00981758 ["INT_RIGHT", "register:4040:8", ["register:4040:8", "const:1:8"]]
+ 0098177c ["COPY", "tmp:0:8", ["register:40c0:8"]]
+ 0098177c ["COPY", "tmp:1:8", ["register:40b8:8"]]
+ 0098177c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
+ 0098177c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e90c306801ee4bcad52f2d6144cf3bba"></a>

### [`00981828`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981828.md) → [`0098187c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/0098187c.md) FUN_0098187c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 76.92% / 新版 76.92%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0098184c",
      "DATA",
      [
        "storage",
        "00c88000",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:00981850",
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
      "009818a0",
      "DATA",
      [
        "storage",
        "00c880d0",
        null,
        "undefined *"
      ]
    ],
    [
      "009818a4",
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
- 0098183c ["INT_ADD", "register:40f0:8", ["const:98183c:8", "const:4:8"]]
- 0098183c ["CALL", null, ["callee:00c57f60:8"]]
+ 00981890 ["INT_ADD", "register:40f0:8", ["const:981890:8", "const:4:8"]]
+ 00981890 ["CALL", null, ["callee:00c57f60:8"]]
- 00981848 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00981848 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 00981848 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 00981848 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 0098184c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0098184c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 0098184c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 0098184c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-3052420551d4e958c1d19f1998fd3536"></a>

### [`0098185c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/0098185c.md) → [`009818b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009818b0.md) FUN_009818b0

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
      "definition_site": "009818bc",
      "incomplete_value": false,
      "site": "009818bc",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:d0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00981868",
      "incomplete_value": false,
      "site": "00981868",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:0:8"
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
      "009818bc",
      "DATA",
      [
        "storage",
        "00c88000",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009818bc",
      "DATA",
      [
        "storage",
        "00c880d0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 00981864 ["COPY", "tmp:0:8", ["const:0:8"]]
- 00981864 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 00981864 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 00981864 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009818b8 ["COPY", "tmp:0:8", ["const:d0:8"]]
+ 009818b8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009818b8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009818b8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-501ea407de7c103e49adc9c1e0926577"></a>

### [`00981878`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981878.md) → [`009818cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/009818cc.md) FUN_009818cc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 18件 [`0043dba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043dba4.md) [`00481430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00481/00481430.md) [`004823fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00482/004823fc.md) [`00482538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00482/00482538.md) [`004825b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00482/004825b0.md)
- 新版 呼出元 0件  · 呼出先 18件 [`0043dbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043dbe4.md) [`00481470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00481/00481470.md) [`0048243c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/0048243c.md) [`00482578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/00482578.md) [`004825f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00482/004825f0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 89.11% / 新版 89.11%

優先判定に残った影響 `call_argument_candidate` 8件, `store_value` 1件, `unresolved_branch_alignment` 5件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 11件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "00981b64",
      "incomplete_value": false,
      "site": "00981b68",
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
                "const:c65000:8"
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
    "old": {
      "definition_site": "00981b10",
      "incomplete_value": false,
      "site": "00981b14",
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
                "const:c65000:8"
              ],
              [
                "leaf",
                "const:530:8"
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
    "ordinal": 27,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009819bc",
      "incomplete_value": false,
      "site": "009819c4",
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
            "const:edc:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00981968",
      "incomplete_value": false,
      "site": "00981970",
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
            "const:f30:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00981990",
      "incomplete_value": true,
      "site": "00981998",
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
      "unmatched:0098187c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00981898",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:009818b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00981de4"
      ]
    ]
  ],
  "added": [
    [
      "009818d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "009818ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "00981904",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00981de4"
      ]
    ]
  ]
}
~~~


~~~diff
- 00981970 ["INT_ADD", "register:40f0:8", ["const:981970:8", "const:4:8"]]
- 00981970 ["CALL", null, ["callee:00c58040:8"]]
+ 009819c4 ["INT_ADD", "register:40f0:8", ["const:9819c4:8", "const:4:8"]]
+ 009819c4 ["CALL", null, ["callee:00c58040:8"]]
- 00981998 ["INT_ADD", "register:40f0:8", ["const:981998:8", "const:4:8"]]
- 00981998 ["CALL", null, ["callee:0043dbe4:8"]]
+ 009819ec ["INT_ADD", "register:40f0:8", ["const:9819ec:8", "const:4:8"]]
+ 009819ec ["CALL", null, ["callee:0043dbe4:8"]]
- 00981ac0 ["INT_ADD", "register:40f0:8", ["const:981ac0:8", "const:4:8"]]
- 00981ac0 ["CALL", null, ["callee:00c57f50:8"]]
+ 00981b14 ["INT_ADD", "register:40f0:8", ["const:981b14:8", "const:4:8"]]
+ 00981b14 ["CALL", null, ["callee:00c57f50:8"]]
~~~


<a id="compare-1c8f833cc5fcfbcad0d78bb205ddaea6"></a>

### [`00981dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981dbc.md) → [`00981e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981e10.md) FUN_00981e10

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0097fb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097fb20.md) · 呼出先 6件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`00981fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981fc0.md) [`009821b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009821b8.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00982014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982014.md) [`0098220c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/0098220c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 9件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "00981f7c",
      "incomplete_value": true,
      "site": "00981f80",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:00981dc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00981dc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00981ebc",
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
      "00981e14",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00981e18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00981f10",
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
- 00981f2c ["INT_ADD", "register:40f0:8", ["const:981f2c:8", "const:4:8"]]
- 00981f2c ["CALL", null, ["callee:00c57f80:8"]]
+ 00981f80 ["INT_ADD", "register:40f0:8", ["const:981f80:8", "const:4:8"]]
+ 00981f80 ["CALL", null, ["callee:00c57f80:8"]]
- 00981f80 ["INT_ADD", "register:40f0:8", ["const:981f80:8", "const:4:8"]]
- 00981f80 ["CALL", null, ["callee:0098220c:8"]]
+ 00981fd4 ["INT_ADD", "register:40f0:8", ["const:981fd4:8", "const:4:8"]]
+ 00981fd4 ["CALL", null, ["callee:0098220c:8"]]
- 00981dbc ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-670d87e1d58899c748c93e8f2175b34c"></a>

### [`00981fc0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981fc0.md) → [`00982014`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982014.md) FUN_00982014

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00981dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981dbc.md) · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 1件 [`00981e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981e10.md) · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.35% / 新版 95.35%

優先判定に残った影響 `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00981fc0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:00981fc4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:00981fc8",
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
      "00982014",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00982018",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "0098201c",
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
- 00981fc0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 00981fc0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 00981fc0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 00981fc0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 00981fc4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 00981fc4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 00981fc8 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 00981fc8 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 00981fc8 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 00981fc8 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-4f647c70014bbb9bd06dea18745ba0fb"></a>

### [`009821b8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009821b8.md) → [`0098220c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/0098220c.md) FUN_0098220c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00981dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00981/00981dbc.md) · 呼出先 1件 [`0043b778`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b778.md)
- 新版 呼出元 1件 [`00981e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00981/00981e10.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00982218",
      "incomplete_value": false,
      "site": "0098221c",
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
      "definition_site": "009821c4",
      "incomplete_value": false,
      "site": "009821c8",
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
      "00982218",
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
      "00982218",
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
- 009821c8 ["INT_ADD", "register:40f0:8", ["const:9821c8:8", "const:4:8"]]
- 009821c8 ["CALL", null, ["callee:0043b7b8:8"]]
+ 0098221c ["INT_ADD", "register:40f0:8", ["const:98221c:8", "const:4:8"]]
+ 0098221c ["CALL", null, ["callee:0043b7b8:8"]]
- 009821c4 ["COPY", "tmp:0:8", ["const:f4c:8"]]
- 009821c4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 009821c4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 009821c4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 00982218 ["COPY", "tmp:0:8", ["const:f8c:8"]]
+ 00982218 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 00982218 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 00982218 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-9d016395c5d00db0605e22d5a5835ee9"></a>

### [`009822fc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009822fc.md) → [`00982350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982350.md) FUN_00982350

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 1件 [`009821cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009821cc.md) · 呼出先 1件 [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`00982220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982220.md) · 呼出先 1件 [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 95.38% / 新版 95.38%

アドレスに依存する影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009823d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009823a0"
      ]
    ]
  ],
  "added": [
    [
      "00982428",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009823a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00982334 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 00982334 ["COPY", "tmp:1:8", ["register:4060:8"]]
- 00982334 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
- 00982334 ["INT_ADD", "tmp:1:8", ["register:4010:8", "const:1:8"]]
- 00982380 ["INT_ADD", "register:40f0:8", ["const:982380:8", "const:4:8"]]
- 00982380 ["CALL", null, ["callee:00c58120:8"]]
+ 009823d4 ["INT_ADD", "register:40f0:8", ["const:9823d4:8", "const:4:8"]]
+ 009823d4 ["CALL", null, ["callee:00c58120:8"]]
+ 00982388 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 00982388 ["COPY", "tmp:1:8", ["register:4060:8"]]
+ 00982388 ["CBRANCH", null, ["const:2:4", "tmp:0:1"]]
+ 00982388 ["INT_ADD", "tmp:1:8", ["register:4010:8", "const:1:8"]]
~~~


<a id="compare-4cea9fa0ee51d6eb0de4da66859230ec"></a>

### [`00982400`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/00982400.md) → [`00982454`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982454.md) FUN_00982454

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0098240c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009824a0"
      ]
    ]
  ],
  "added": [
    [
      "00982460",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009824a0"
      ]
    ]
  ]
}
~~~


~~~diff
- 00982400 ["COPY", "register:4040:8", ["register:4000:8"]]
- 00982404 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 00982404 ["LOAD", "register:4000:8", ["const:1b1:8", "tmp:0:8"]]
- 00982408 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 00982408 ["COPY", "tmp:1:8", ["const:0:8"]]
- 00982408 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
~~~


<a id="compare-d7d49d2bf24b7be3f8fc8b9f137b41fa"></a>

### [`00982450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/00982450.md) → [`009824a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/009824a4.md) FUN_009824a4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0097fb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0097f/0097fb20.md) · 呼出先 5件 [`0086a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a460.md) [`009826e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009826e0.md) [`00982840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/00982840.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58430`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58430.md)
- 新版 呼出元 1件 [`0097fb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0097f/0097fb74.md) · 呼出先 5件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md) [`00982734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982734.md) [`00982894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982894.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58500`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58500.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.23% / 新版 83.23%

優先判定に残った影響 `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009824d0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00982554"
      ]
    ],
    [
      "unmatched:009824d8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00982574"
      ]
    ],
    [
      "unmatched:009824e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009824dc"
      ]
    ]
  ],
  "added": [
    [
      "00982524",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00982554"
      ]
    ],
    [
      "0098252c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00982574"
      ]
    ],
    [
      "00982538",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00982530"
      ]
    ]
  ]
}
~~~


~~~diff
- 00982488 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00982488 ["CBRANCH", null, ["local:b43:8", "tmp:0:1"]]
+ 009824dc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 009824dc ["CBRANCH", null, ["local:b42:8", "tmp:0:1"]]
- 009824cc ["INT_LESSEQUAL", "register:105:1", ["register:40a8:8", "register:4040:8"]]
- 009824cc ["INT_SBORROW", "register:106:1", ["register:4040:8", "register:40a8:8"]]
- 009824cc ["INT_SUB", "tmp:0:8", ["register:4040:8", "register:40a8:8"]]
- 009824cc ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 009824d0 ["CBRANCH", null, ["local:b10:8", "register:101:1"]]
~~~


<a id="compare-5ba38455a7ffc6064ea1b4f534c588ab"></a>

### [`009826e0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009826e0.md) → [`00982734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982734.md) FUN_00982734

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00982450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/00982450.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`009824a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/009824a4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009826e0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:009826e4",
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
      "00982734",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "00982738",
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
- 009826e0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009826e0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009826e0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 009826e0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009826e4 ["COPY", "tmp:0:8", ["register:40c0:8"]]
- 009826e4 ["COPY", "tmp:1:8", ["register:40b8:8"]]
- 009826e4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 009826e4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 0098272c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0098272c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
+ 00982780 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00982780 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-8e27a93537f3eccab8e4f60b39497cfa"></a>

### [`009827e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009827e8.md) → [`0098283c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/0098283c.md) FUN_0098283c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`0086a460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0086a/0086a460.md)
- 新版 呼出元 0件  · 呼出先 1件 [`0086a4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0086a/0086a4b8.md)

変更の種類 constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 95.45% / 新版 95.45%

アドレスに依存する影響 `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009827ec",
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
      "00982840",
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
- 009827ec ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009827ec ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 00982800 ["INT_ADD", "register:40f0:8", ["const:982800:8", "const:4:8"]]
- 00982800 ["CALL", null, ["callee:0086a4b8:8"]]
+ 00982854 ["INT_ADD", "register:40f0:8", ["const:982854:8", "const:4:8"]]
+ 00982854 ["CALL", null, ["callee:0086a4b8:8"]]
+ 00982840 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
+ 00982840 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-e0051dbe29d00d8b34a5b0c9329ab2e7"></a>

### [`00982840`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/00982840.md) → [`00982894`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982894.md) FUN_00982894

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`00982450`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/00982450.md) · 呼出先 5件 [`0043bb20`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bb20.md) [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md) [`00c58050`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c58/00c58050.md)
- 新版 呼出元 1件 [`009824a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/009824a4.md) · 呼出先 5件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 98.94% / 新版 98.94%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009828fc",
      "incomplete_value": true,
      "site": "00982900",
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
      "definition_site": "009828f8",
      "incomplete_value": true,
      "site": "00982900",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009828f8",
      "incomplete_value": true,
      "site": "00982900",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:8:8"
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


~~~diff
- 009828ac ["INT_ADD", "register:40f0:8", ["const:9828ac:8", "const:4:8"]]
- 009828ac ["CALL", null, ["callee:0043bb60:8"]]
+ 00982900 ["INT_ADD", "register:40f0:8", ["const:982900:8", "const:4:8"]]
+ 00982900 ["CALL", null, ["callee:0043bb60:8"]]
- 00982878 ["INT_ADD", "register:40f0:8", ["const:982878:8", "const:4:8"]]
- 00982878 ["CALL", null, ["callee:00c57f60:8"]]
+ 009828cc ["INT_ADD", "register:40f0:8", ["const:9828cc:8", "const:4:8"]]
+ 009828cc ["CALL", null, ["callee:00c57f60:8"]]
- 0098289c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 0098289c ["INT_ADD", "tmp:1:8", ["register:40a0:8", "const:30:8"]]
- 0098289c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-7d6023a849052b440b423ec0662b8977"></a>

### [`009829dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/009829dc.md) → [`00982a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982a30.md) _INIT_190

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043ae70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043a/0043ae70.md) [`0043b7f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043b7f8.md) [`00c57e30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e30.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 85.31% / 新版 85.31%

優先判定に残った影響 `call_argument_candidate` 11件, `store_value` 4件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00982a6c",
      "incomplete_value": true,
      "site": "00982a88",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00982a18",
      "incomplete_value": true,
      "site": "00982a34",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00982ab0",
      "incomplete_value": true,
      "site": "00982acc",
      "value": [
        "LOAD",
        "16",
        [
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
    "old": {
      "definition_site": "00982a5c",
      "incomplete_value": true,
      "site": "00982a78",
      "value": [
        "LOAD",
        "16",
        [
          [
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00982b0c",
      "incomplete_value": true,
      "site": "00982b28",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "00982ab8",
      "incomplete_value": true,
      "site": "00982ad4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "00982a6c",
      "READ",
      [
        "storage",
        "002b7f26",
        null,
        "string"
      ]
    ],
    [
      "00982a90",
      "READ",
      [
        "storage",
        "002b7f39",
        null,
        "string"
      ]
    ],
    [
      "00982ab0",
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
      "00982a6c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "00982a90",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "00982ab0",
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
- 00982b3c ["INT_ADD", "register:40f0:8", ["const:982b3c:8", "const:4:8"]]
- 00982b3c ["CALL", null, ["callee:0043b838:8"]]
+ 00982b90 ["INT_ADD", "register:40f0:8", ["const:982b90:8", "const:4:8"]]
+ 00982b90 ["CALL", null, ["callee:0043b838:8"]]
- 00982b50 ["INT_ADD", "register:40f0:8", ["const:982b50:8", "const:4:8"]]
- 00982b50 ["CALL", null, ["callee:0043b838:8"]]
+ 00982ba4 ["INT_ADD", "register:40f0:8", ["const:982ba4:8", "const:4:8"]]
+ 00982ba4 ["CALL", null, ["callee:0043b838:8"]]
- 00982b64 ["INT_ADD", "register:40f0:8", ["const:982b64:8", "const:4:8"]]
- 00982b64 ["CALL", null, ["callee:0043b838:8"]]
+ 00982bb8 ["INT_ADD", "register:40f0:8", ["const:982bb8:8", "const:4:8"]]
+ 00982bb8 ["CALL", null, ["callee:0043b838:8"]]
~~~


<a id="compare-d38ae5e6d02c05dad07908eda22d1bca"></a>

### [`00984a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00984/00984a08.md) → [`00984a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00984/00984a5c.md) FUN_00984a5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`0098cf8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098c/0098cf8c.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 6件 [`00695bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695bac.md) [`009a2b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a2/009a2b34.md) [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md)
- 新版 呼出元 3件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098cfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098cfe0.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 6件 [`00695c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695c04.md) [`009a2b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2b88.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)

変更の種類 branch_value, call_argument_candidate, constant, local_def_use, operands_and_dependencies, store_condition

命令の説明率　旧版 96.43% / 新版 96.43%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 1件, `store_condition` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00984a88",
      "incomplete_value": true,
      "site": "00984a88",
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
      "definition_site": "00984a34",
      "incomplete_value": true,
      "site": "00984a34",
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
                "register:4010:8"
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00984aa8",
      "incomplete_value": true,
      "site": "00984ab0",
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
            "const:f:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 0,
    "slot": 5
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "00984a34"
      ],
      [
        "FALL_THROUGH",
        "00984a88"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "00984a88",
      "incomplete_value": true,
      "site": "00984aac",
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
      "definition_site": "00984a34",
      "incomplete_value": true,
      "site": "00984a58",
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
                "register:4010:8"
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
      "00984a98",
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
      "00984a98",
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
- 00984a5c ["INT_ADD", "register:40f0:8", ["const:984a5c:8", "const:4:8"]]
- 00984a5c ["CALL", null, ["callee:00695c04:8"]]
+ 00984ab0 ["INT_ADD", "register:40f0:8", ["const:984ab0:8", "const:4:8"]]
+ 00984ab0 ["CALL", null, ["callee:00695c04:8"]]
- 00984a44 ["COPY", "tmp:0:8", ["const:6f5:8"]]
- 00984a44 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
- 00984a44 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
- 00984a44 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
+ 00984a98 ["COPY", "tmp:0:8", ["const:735:8"]]
+ 00984a98 ["INT_CARRY", "register:105:1", ["register:4010:8", "tmp:0:8"]]
+ 00984a98 ["INT_SCARRY", "register:106:1", ["register:4010:8", "tmp:0:8"]]
+ 00984a98 ["INT_ADD", "tmp:1:8", ["register:4010:8", "tmp:0:8"]]
- 00984a74 ["INT_ADD", "register:40f0:8", ["const:984a74:8", "const:4:8"]]
- 00984a74 ["CALL", null, ["callee:00c53d70:8"]]
+ 00984ac8 ["INT_ADD", "register:40f0:8", ["const:984ac8:8", "const:4:8"]]
+ 00984ac8 ["CALL", null, ["callee:00c53d70:8"]]
~~~


<a id="compare-b554ff513ef175deb2e74d003b8dadd8"></a>

### [`00984c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00984/00984c34.md) → [`00984c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00984/00984c88.md) FUN_00984c88

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`006a700c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a7/006a700c.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 14件 [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`0047edb4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047edb4.md) [`006667a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00666/006667a8.md) [`00695bac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00695/00695bac.md) [`00985294`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985294.md)
- 新版 呼出元 2件 [`006a7064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7064.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 14件 [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006667e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00666/006667e8.md) [`00695c04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00695/00695c04.md) [`009852e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/009852e8.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.75% / 新版 74.75%

優先判定に残った影響 `call_argument_candidate` 10件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 11件

アドレスに依存する影響 `branch_value` 1件, `store_condition` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00984cdc",
      "incomplete_value": true,
      "site": "00984cdc",
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
      "definition_site": "00984c88",
      "incomplete_value": true,
      "site": "00984c88",
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
      "definition_site": "00984ce4",
      "incomplete_value": false,
      "site": "00984cf4",
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
      "definition_site": "00984c90",
      "incomplete_value": false,
      "site": "00984ca0",
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
      "definition_site": "00984cec",
      "incomplete_value": false,
      "site": "00984cf4",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "00984c98",
      "incomplete_value": false,
      "site": "00984ca0",
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
            "const:1c0:8"
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
      "00984cd0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "00984ce4",
      "PARAM",
      [
        "storage",
        "00c65e58",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00984cec",
      "PARAM",
      [
        "storage",
        "00c711c0",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "00984cd0",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "00984ce4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "00984cec",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 00984ca0 ["INT_ADD", "register:40f0:8", ["const:984ca0:8", "const:4:8"]]
- 00984ca0 ["CALL", null, ["callee:00c586e0:8"]]
+ 00984cf4 ["INT_ADD", "register:40f0:8", ["const:984cf4:8", "const:4:8"]]
+ 00984cf4 ["CALL", null, ["callee:00c586e0:8"]]
- 00984cf4 ["COPY", "tmp:0:8", ["const:f00:8"]]
- 00984cf4 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 00984cf4 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 00984cf4 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
- 00984d6c ["INT_ADD", "register:40f0:8", ["const:984d6c:8", "const:4:8"]]
- 00984d6c ["CALL", null, ["callee:0047e91c:8"]]
+ 00984dc0 ["INT_ADD", "register:40f0:8", ["const:984dc0:8", "const:4:8"]]
+ 00984dc0 ["CALL", null, ["callee:0047e91c:8"]]
~~~


<a id="compare-e904f0ef6a1935ce421d52b894e43a30"></a>

### [`0098c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098c/0098c9c4.md) → [`0098ca18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098ca18.md) FUN_0098ca18

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`00ad0958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00ad0/00ad0958.md) · 呼出先 3件 [`00664a8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664a8c.md) [`00664b30`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/00664b30.md) [`00afff64`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00aff/00afff64.md)
- 新版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`00ad09c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ad0/00ad09c8.md) · 呼出先 3件 [`00664acc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664acc.md) [`00664b70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664b70.md) [`00b00000`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b00000.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.36% / 新版 91.36%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0098cd24",
      "incomplete_value": true,
      "site": "0098cd28",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "INT_OR",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "live",
                "register:4048:4"
              ]
            ]
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
      "definition_site": "0098cdd4",
      "incomplete_value": true,
      "site": "0098cdd8",
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
    "ordinal": 7,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "0098cb5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098cdd4"
      ]
    ],
    [
      "unmatched:0098cb08",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098cc00"
      ]
    ],
    [
      "unmatched:0098cde0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098cab8"
      ]
    ]
  ],
  "added": [
    [
      "0098cb54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098cdd4"
      ]
    ],
    [
      "0098cb5c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098cc00"
      ]
    ],
    [
      "0098ce34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098cab8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0098cd28 ["INT_ADD", "register:40f0:8", ["const:98cd28:8", "const:4:8"]]
- 0098cd28 ["CALL", null, ["callee:00664b70:8"]]
+ 0098cd7c ["INT_ADD", "register:40f0:8", ["const:98cd7c:8", "const:4:8"]]
+ 0098cd7c ["CALL", null, ["callee:00664b70:8"]]
- 0098cdd8 ["INT_ADD", "register:40f0:8", ["const:98cdd8:8", "const:4:8"]]
- 0098cdd8 ["CALL", null, ["callee:00b00000:8"]]
+ 0098ce2c ["INT_ADD", "register:40f0:8", ["const:98ce2c:8", "const:4:8"]]
+ 0098ce2c ["CALL", null, ["callee:00b00000:8"]]
- 0098ca28 ["BRANCH", null, ["local:b9:8"]]
+ 0098ca7c ["BRANCH", null, ["local:b8:8"]]
~~~


<a id="compare-ad50d30422d0377fb7a6d3652ec4dda3"></a>

### [`0098ced4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098c/0098ced4.md) → [`0098cf28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098cf28.md) FUN_0098cf28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) [`0099ba70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0099b/0099ba70.md) · 呼出先 0件 
- 新版 呼出元 2件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`0099bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0099b/0099bac4.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 97.83% / 新版 97.83%

アドレスに依存する影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:0098cf58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098cfb8"
      ]
    ]
  ],
  "added": [
    [
      "0098cfac",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098cfb8"
      ]
    ]
  ]
}
~~~


~~~diff
- 0098ced8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 0098ced8 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 0098cf2c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 0098cf2c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 0098cf20 ["INT_EQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
- 0098cf20 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 0098cf74 ["INT_EQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
+ 0098cf74 ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
- 0098cf28 ["INT_EQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
- 0098cf28 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
+ 0098cf7c ["INT_EQUAL", "tmp:0:1", ["register:4060:8", "const:0:8"]]
+ 0098cf7c ["CBRANCH", null, ["local:b16:8", "tmp:0:1"]]
~~~


<a id="compare-cf82c3707c66caf0893d05b4ad2f1260"></a>

### [`0098cf8c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098c/0098cf8c.md) → [`0098cfe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098c/0098cfe0.md) FUN_0098cfe0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`006a700c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a7/006a700c.md) [`009617a0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00961/009617a0.md) [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 18件 [`0044fcbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0044f/0044fcbc.md) [`0046e538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e538.md) [`0047e8dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047e/0047e8dc.md) [`005e2a2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005e2/005e2a2c.md) [`00604e54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00604/00604e54.md)
- 新版 呼出元 4件 [`006a7064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7064.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 18件 [`0044fcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044f/0044fcfc.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`005e2a6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e2/005e2a6c.md) [`00604e94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00604/00604e94.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 73.22% / 新版 73.22%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 14件, `store_condition` 1件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0098d06c",
      "incomplete_value": true,
      "site": "0098d06c",
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
      "definition_site": "0098d018",
      "incomplete_value": true,
      "site": "0098d018",
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
    "new": null,
    "old": {
      "definition_site": "0098d020",
      "incomplete_value": true,
      "site": "0098d030",
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
      "definition_site": "0098d07c",
      "incomplete_value": false,
      "site": "0098d084",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0098d028",
      "incomplete_value": false,
      "site": "0098d030",
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
            "const:1c0:8"
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
      "unmatched:0098cfd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098db00"
      ]
    ],
    [
      "unmatched:0098cfdc",
      "DATA",
      [
        "storage",
        "00335f64",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "unmatched:0098cfe4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098db00"
      ]
    ]
  ],
  "added": [
    [
      "0098d02c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098db00"
      ]
    ],
    [
      "0098d030",
      "DATA",
      [
        "storage",
        "00335f64",
        null,
        "fde_table_entry"
      ]
    ],
    [
      "0098d038",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098db00"
      ]
    ]
  ]
}
~~~


~~~diff
- 0098cfc4 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:1f:4"]]
- 0098cfc4 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
- 0098cfc4 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
- 0098cfc4 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
+ 0098d018 ["INT_RIGHT", "tmp:0:4", ["register:4040:4", "const:1f:4"]]
+ 0098d018 ["INT_AND", "tmp:1:4", ["tmp:0:4", "const:1:4"]]
+ 0098d018 ["INT_EQUAL", "tmp:2:1", ["tmp:1:4", "const:0:4"]]
+ 0098d018 ["INT_EQUAL", "tmp:3:1", ["tmp:2:1", "const:0:1"]]
- 0098d018 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 0098d018 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
+ 0098d06c ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 0098d06c ["CBRANCH", null, ["local:b9:8", "tmp:0:1"]]
- 0098d030 ["INT_ADD", "register:40f0:8", ["const:98d030:8", "const:4:8"]]
- 0098d030 ["CALL", null, ["callee:00c586e0:8"]]
+ 0098d084 ["INT_ADD", "register:40f0:8", ["const:98d084:8", "const:4:8"]]
+ 0098d084 ["CALL", null, ["callee:00c586e0:8"]]
~~~


<a id="compare-0c2b77a82fb2f312b1ef581859c85b59"></a>

### [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) → [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) FUN_0098dc5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00856e2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00856/00856e2c.md) · 呼出先 129件 [`0043ddd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043d/0043ddd8.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0046ca84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046ca84.md) [`0046e538`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046e/0046e538.md) [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md)
- 新版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 129件 [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`0046e578`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046e578.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 67.07% / 新版 67.07%

優先判定に残った影響 `call_argument_candidate` 109件, `call_target` 9件, `store_condition` 22件, `unresolved_branch_alignment` 262件, `unresolved_call_alignment` 357件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 106件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009930ec",
      "incomplete_value": true,
      "site": "009930ec",
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
      "definition_site": "00993098",
      "incomplete_value": true,
      "site": "00993098",
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
    "ordinal": 537,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0098dcbc",
      "incomplete_value": false,
      "site": "0098dcc0",
      "value": [
        "leaf",
        "const:516:8"
      ]
    },
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0098dd88",
      "incomplete_value": true,
      "site": "0098dd8c",
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
            "const:8e8:8"
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
      "unmatched:0098dcb4",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008b6f70"
      ]
    ],
    [
      "0098de00",
      "DATA",
      [
        "storage",
        "0042e518",
        null,
        "byte[59]"
      ]
    ],
    [
      "unmatched:0098ddc8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0099696c"
      ]
    ]
  ],
  "added": [
    [
      "0098de00",
      "DATA",
      [
        "storage",
        "0042e518",
        null,
        "byte[39]"
      ]
    ],
    [
      "0098de1c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0099696c"
      ]
    ],
    [
      "0098df20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0098df0c"
      ]
    ]
  ]
}
~~~


~~~diff
- 0098dcc0 ["INT_ADD", "register:40f0:8", ["const:98dcc0:8", "const:4:8"]]
- 0098dcc0 ["CALL", null, ["callee:008b7a20:8"]]
+ 0098dd14 ["INT_ADD", "register:40f0:8", ["const:98dd14:8", "const:4:8"]]
+ 0098dd14 ["CALL", null, ["callee:008b7a20:8"]]
- 0098dd8c ["INT_ADD", "register:40f0:8", ["const:98dd8c:8", "const:4:8"]]
- 0098dd8c ["CALL", null, ["callee:009c333c:8"]]
+ 0098dde0 ["INT_ADD", "register:40f0:8", ["const:98dde0:8", "const:4:8"]]
+ 0098dde0 ["CALL", null, ["callee:009c333c:8"]]
+ 0098dd8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:3:8"]]
+ 0098dd8c ["LOAD", "tmp:1:1", ["const:1b1:8", "tmp:0:8"]]
+ 0098dd8c ["INT_ZEXT", "register:4050:8", ["tmp:1:1"]]
~~~


<a id="compare-234cd6947860b476aeadc8a1da2ab886"></a>

### [`0099691c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/0099691c.md) → [`00996970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996970.md) FUN_00996970

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 7件 [`006a65bc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a6/006a65bc.md) [`006a74c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/006a7/006a74c0.md) [`00963fd8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00963/00963fd8.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) · 呼出先 3件 [`009c777c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c777c.md) [`009c77cc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c77cc.md) [`009c7ba8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c7ba8.md)
- 新版 呼出元 7件 [`006a6614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6614.md) [`006a7518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7518.md) [`0096402c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00964/0096402c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 3件 [`009c77d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c77d0.md) [`009c7820`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7820.md) [`009c7bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7bfc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 0099693c ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 0099693c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 00996990 ["INT_EQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 00996990 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 00996950 ["BRANCH", null, ["local:b7:8"]]
+ 009969a4 ["BRANCH", null, ["local:b6:8"]]
- 00996964 ["INT_ADD", "register:40f0:8", ["const:996964:8", "const:4:8"]]
- 00996964 ["CALL", null, ["callee:009c77d0:8"]]
+ 009969b8 ["INT_ADD", "register:40f0:8", ["const:9969b8:8", "const:4:8"]]
+ 009969b8 ["CALL", null, ["callee:009c77d0:8"]]
~~~


<a id="compare-2c6a54c1c47b363298cdad0c0f600045"></a>

### [`009969c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/009969c0.md) → [`00996a14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996a14.md) FUN_00996a14

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 7件 [`0048ce54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0048c/0048ce54.md) [`008b9858`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9858.md) [`008bacc8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008ba/008bacc8.md) [`009a3c5c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3c5c.md) [`009a3c60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3c60.md)
- 新版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 7件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`008b98b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b98b0.md) [`008bad20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ba/008bad20.md) [`009a3cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3cb0.md) [`009a3cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3cb4.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_value` 4件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00996a44",
      "incomplete_value": true,
      "site": "00996a44",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:28:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009969f0",
      "incomplete_value": true,
      "site": "009969f0",
      "value": [
        "LOAD",
        "8",
        [
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
                "register:1660:8"
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "00996a50",
      "incomplete_value": true,
      "site": "00996a50",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f25:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009969fc",
      "incomplete_value": true,
      "site": "009969fc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f81:8"
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
      "definition_site": "00996a48",
      "incomplete_value": true,
      "site": "00996a54",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "009969f4",
      "incomplete_value": true,
      "site": "00996a00",
      "value": [
        "LOAD",
        "8",
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
      "unmatched:009969c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00996a38",
      "READ",
      [
        "storage",
        "002a7f81",
        null,
        "string"
      ]
    ],
    [
      "00996a48",
      "READ",
      [
        "storage",
        "002a7f88",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "00996a18",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "00996a38",
      "READ",
      [
        "storage",
        "002a7f25",
        null,
        "string"
      ]
    ],
    [
      "00996a48",
      "READ",
      [
        "storage",
        "002a7f2c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 00996a44 ["INT_ADD", "register:40f0:8", ["const:996a44:8", "const:4:8"]]
- 00996a44 ["CALL", null, ["callee:008bad20:8"]]
+ 00996a98 ["INT_ADD", "register:40f0:8", ["const:996a98:8", "const:4:8"]]
+ 00996a98 ["CALL", null, ["callee:008bad20:8"]]
- 009969c4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009969c4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009969c4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 009969c4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 009969dc ["COPY", "tmp:0:8", ["const:f81:8"]]
- 009969dc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009969dc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009969dc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 00996a30 ["COPY", "tmp:0:8", ["const:f25:8"]]
+ 00996a30 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 00996a30 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 00996a30 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-3243038d321abc43809856d44f2c4edf"></a>

### [`00996b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/00996b58.md) → [`00996bac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996bac.md) FUN_00996bac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 2件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 89.80% / 新版 89.80%

アドレスに依存する影響 `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:00996ba8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996c58"
      ]
    ],
    [
      "unmatched:00996bb0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996be8"
      ]
    ]
  ],
  "added": [
    [
      "00996bfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996c58"
      ]
    ],
    [
      "00996c04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996be8"
      ]
    ]
  ]
}
~~~


~~~diff
- 00996ba8 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 00996ba8 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
- 00996bac ["INT_ADD", "tmp:0:8", ["register:40a0:8", "const:8:8"]]
- 00996bac ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 00996bb0 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00996bb0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-29f3b95905d12f97556f4c87e7421387"></a>

### [`00996c1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/00996c1c.md) → [`00996c70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996c70.md) FUN_00996c70

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0094726c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00947/0094726c.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 12件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`0066540c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00665/0066540c.md) [`006675dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00667/006675dc.md) [`0071c460`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0071c/0071c460.md)
- 新版 呼出元 2件 [`009472c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00947/009472c0.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 12件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`0066544c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00665/0066544c.md) [`0066761c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00667/0066761c.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 94.33% / 新版 94.33%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "00996cc8",
      "incomplete_value": true,
      "site": "00996cd8",
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
            "const:a30:8"
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
      "definition_site": "00996cc0",
      "incomplete_value": true,
      "site": "00996cd8",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:a38:8"
              ]
            ]
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
      "definition_site": "00996db4",
      "incomplete_value": true,
      "site": "00996db8",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:00996c30",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00996d48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996df8"
      ]
    ],
    [
      "unmatched:00996d04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996d80"
      ]
    ]
  ],
  "added": [
    [
      "00996c84",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "00996d48",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996d5c"
      ]
    ],
    [
      "00996d58",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996d80"
      ]
    ]
  ]
}
~~~


~~~diff
- 00996c84 ["INT_ADD", "register:40f0:8", ["const:996c84:8", "const:4:8"]]
- 00996c84 ["CALL", null, ["callee:0066761c:8"]]
+ 00996cd8 ["INT_ADD", "register:40f0:8", ["const:996cd8:8", "const:4:8"]]
+ 00996cd8 ["CALL", null, ["callee:0066761c:8"]]
- 00996d54 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 00996d54 ["CBRANCH", null, ["local:b22:8", "tmp:0:1"]]
+ 00996d58 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 00996d58 ["CBRANCH", null, ["local:b20:8", "tmp:0:1"]]
- 00996d64 ["INT_ADD", "register:40f0:8", ["const:996d64:8", "const:4:8"]]
- 00996d64 ["CALL", null, ["callee:0043bbe4:8"]]
+ 00996db8 ["INT_ADD", "register:40f0:8", ["const:996db8:8", "const:4:8"]]
+ 00996db8 ["CALL", null, ["callee:0043bbe4:8"]]
~~~


<a id="compare-689a9bcb78309108c1754a10b8b73e14"></a>

### [`00996f60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00996/00996f60.md) → [`00996fb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996fb4.md) FUN_00996fb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.27% / 新版 87.27%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0099702c",
      "incomplete_value": false,
      "site": "00997030",
      "value": [
        "leaf",
        "const:1:8"
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
      "00996fdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:00996f98"
      ]
    ],
    [
      "unmatched:00996f94",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00997000"
      ]
    ],
    [
      "unmatched:00996fa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00997000"
      ]
    ]
  ],
  "added": [
    [
      "00996fdc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00996fec"
      ]
    ],
    [
      "00996fe8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "00997000"
      ]
    ],
    [
      "00996ff4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "00997000"
      ]
    ]
  ]
}
~~~


~~~diff
- 00997030 ["INT_ADD", "register:40f0:8", ["const:997030:8", "const:4:8"]]
- 00997030 ["CALL", null, ["callee:00c53d70:8"]]
+ 00997084 ["INT_ADD", "register:40f0:8", ["const:997084:8", "const:4:8"]]
+ 00997084 ["CALL", null, ["callee:00c53d70:8"]]
- 00996f6c ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
- 00996f6c ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
+ 00996fc0 ["INT_EQUAL", "tmp:0:1", ["register:4048:8", "const:0:8"]]
+ 00996fc0 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
- 00996f90 ["INT_AND", "register:4060:8", ["register:4060:8", "register:4058:8"]]
~~~


<a id="compare-a20078bc11e4acc3e65229f5ad867fc4"></a>

### [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) → [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) FUN_00997090

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00859b58`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00859/00859b58.md) · 呼出先 89件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md)
- 新版 呼出元 1件 [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 89件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md)

変更の種類 branch_condition_or_target, branch_value, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 66.55% / 新版 66.55%

優先判定に残った影響 `call_argument_candidate` 88件, `call_target` 1件, `store_condition` 6件, `unresolved_branch_alignment` 183件, `unresolved_call_alignment` 139件, `unresolved_store_alignment` 37件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "00997170",
      "incomplete_value": true,
      "site": "00997170",
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
      "definition_site": "0099711c",
      "incomplete_value": true,
      "site": "0099711c",
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
    "new": null,
    "old": {
      "definition_site": "009970d8",
      "incomplete_value": false,
      "site": "009970dc",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "ordinal": 0,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "0099715c",
      "incomplete_value": true,
      "site": "00997170",
      "value": [
        "live",
        "register:40b8:8"
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
      "unmatched:009970a0",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:009970a8",
      "WRITE",
      [
        "storage",
        "Stack[-0xf8]",
        null,
        null
      ]
    ],
    [
      "unmatched:009970c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0099713c"
      ]
    ]
  ],
  "added": [
    [
      "009970f4",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009970fc",
      "WRITE",
      [
        "storage",
        "Stack[-0xf8]",
        null,
        null
      ]
    ],
    [
      "00997118",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "0099713c"
      ]
    ]
  ]
}
~~~


~~~diff
- 009970dc ["INT_ADD", "register:40f0:8", ["const:9970dc:8", "const:4:8"]]
- 009970dc ["CALL", null, ["callee:00c586e0:8"]]
+ 00997130 ["INT_ADD", "register:40f0:8", ["const:997130:8", "const:4:8"]]
+ 00997130 ["CALL", null, ["callee:00c586e0:8"]]
+ 0099711c ["COPY", "register:4008:8", ["const:c65000:8"]]
- 00997170 ["INT_ADD", "register:40f0:8", ["const:997170:8", "const:4:8"]]
- 00997170 ["CALL", null, ["callee:00469c44:8"]]
+ 009971c4 ["INT_ADD", "register:40f0:8", ["const:9971c4:8", "const:4:8"]]
+ 009971c4 ["CALL", null, ["callee:00469c44:8"]]
~~~


<a id="compare-18cccd03dc53d759eeb845d4190e3759"></a>

### [`0099ba70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0099b/0099ba70.md) → [`0099bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0099b/0099bac4.md) FUN_0099bac4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) [`009a3a84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3a84.md) · 呼出先 33件 [`00467b2c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b2c.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`00467f1c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f1c.md) [`00467f54`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467f54.md) [`00469c04`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00469/00469c04.md)
- 新版 呼出元 2件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`009a3ad8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3ad8.md) · 呼出先 33件 [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md)

変更の種類 branch_condition_or_target, branch_value, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 76.00% / 新版 76.00%

優先判定に残った影響 `call_argument_candidate` 52件, `store_condition` 7件, `unresolved_branch_alignment` 45件, `unresolved_call_alignment` 42件, `unresolved_store_alignment` 10件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "0099bb1c",
      "incomplete_value": true,
      "site": "0099bb1c",
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
      "definition_site": "0099bac8",
      "incomplete_value": true,
      "site": "0099bac8",
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
      "definition_site": "0099bb24",
      "incomplete_value": false,
      "site": "0099bb34",
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
      "definition_site": "0099bad0",
      "incomplete_value": false,
      "site": "0099bae0",
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
      "definition_site": "0099bb2c",
      "incomplete_value": false,
      "site": "0099bb34",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "0099bad8",
      "incomplete_value": false,
      "site": "0099bae0",
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
            "const:1c0:8"
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
      "unmatched:0099ba74",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:0099ba78",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:0099ba7c",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "0099bac8",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "0099bacc",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "0099bad0",
      "WRITE",
      [
        "storage",
        "Stack[-0x80]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
+ 0099bac8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:a0:8"]]
+ 0099bac8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:51c0:8"]]
- 0099bae0 ["INT_ADD", "register:40f0:8", ["const:99bae0:8", "const:4:8"]]
- 0099bae0 ["CALL", null, ["callee:00c586e0:8"]]
+ 0099bb34 ["INT_ADD", "register:40f0:8", ["const:99bb34:8", "const:4:8"]]
+ 0099bb34 ["CALL", null, ["callee:00c586e0:8"]]
- 0099c2cc ["INT_ADD", "register:40f0:8", ["const:99c2cc:8", "const:4:8"]]
- 0099c2cc ["CALL", null, ["callee:00961740:8"]]
+ 0099c320 ["INT_ADD", "register:40f0:8", ["const:99c320:8", "const:4:8"]]
+ 0099c320 ["CALL", null, ["callee:00961740:8"]]
~~~


<a id="compare-1e06ef2bb36639b5bfe15b6bc9153da4"></a>

### [`009a137c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a1/009a137c.md) → [`009a13d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a1/009a13d0.md) FUN_009a13d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) [`0099ba70`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0099b/0099ba70.md) · 呼出先 1件 [`00c53cd0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53cd0.md)
- 新版 呼出元 2件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`0099bac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0099b/0099bac4.md) · 呼出先 1件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 89.09% / 新版 89.09%

優先判定に残った影響 `unresolved_branch_alignment` 3件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "009a1434",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009a13f8"
      ]
    ],
    [
      "unmatched:009a13f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a1480"
      ]
    ],
    [
      "unmatched:009a1400",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a1438"
      ]
    ]
  ],
  "added": [
    [
      "009a1434",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009a144c"
      ]
    ],
    [
      "009a1448",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a1480"
      ]
    ],
    [
      "009a1454",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a1438"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a13b0 ["BRANCH", null, ["local:b7:8"]]
+ 009a1404 ["BRANCH", null, ["local:b8:8"]]
- 009a13bc ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009a13bc ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 009a13bc ["CBRANCH", null, ["local:b7:8", "tmp:1:1"]]
+ 009a1410 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009a1410 ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
+ 009a1410 ["CBRANCH", null, ["local:b8:8", "tmp:1:1"]]
- 009a13c4 ["INT_MULT", "tmp:0:8", ["register:4060:8", "register:4048:8"]]
- 009a13c4 ["INT_SUB", "register:4060:8", ["register:4058:8", "tmp:0:8"]]
~~~


<a id="compare-50617c6793332fb7f82187e27ec7d27c"></a>

### [`009a1458`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a1/009a1458.md) → [`009a14ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a1/009a14ac.md) FUN_009a14ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) · 呼出先 6件 [`00467860`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467860.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`0046a8e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046a8e8.md) [`0046af0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046a/0046af0c.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 6件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`0046a928`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a928.md) [`0046af4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046af4c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_value, call_argument_candidate, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.23% / 新版 96.23%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "009a14f0",
      "incomplete_value": true,
      "site": "009a14f0",
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
      "definition_site": "009a149c",
      "incomplete_value": true,
      "site": "009a149c",
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
    "new": null,
    "old": {
      "definition_site": "009a14a4",
      "incomplete_value": true,
      "site": "009a14b8",
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
      "definition_site": "009a1500",
      "incomplete_value": false,
      "site": "009a150c",
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
            "const:290:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a14ac",
      "incomplete_value": false,
      "site": "009a14b8",
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
            "const:1c0:8"
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
      "unmatched:009a1490",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "009a14ec",
      "READ",
      [
        "storage",
        "00ca4978",
        null,
        "undefined8"
      ]
    ],
    [
      "unmatched:009a14a4",
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
      "009a14e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "009a14ec",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "009a14f8",
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
- 009a14b8 ["INT_ADD", "register:40f0:8", ["const:9a14b8:8", "const:4:8"]]
- 009a14b8 ["CALL", null, ["callee:00c586e0:8"]]
+ 009a150c ["INT_ADD", "register:40f0:8", ["const:9a150c:8", "const:4:8"]]
+ 009a150c ["CALL", null, ["callee:00c586e0:8"]]
- 009a159c ["INT_ADD", "register:40f0:8", ["const:9a159c:8", "const:4:8"]]
- 009a159c ["CALL", null, ["callee:0046af4c:8"]]
+ 009a15f0 ["INT_ADD", "register:40f0:8", ["const:9a15f0:8", "const:4:8"]]
+ 009a15f0 ["CALL", null, ["callee:0046af4c:8"]]
- 009a15b4 ["INT_ADD", "register:40f0:8", ["const:9a15b4:8", "const:4:8"]]
- 009a15b4 ["CALL", null, ["callee:00467ba0:8"]]
+ 009a1608 ["INT_ADD", "register:40f0:8", ["const:9a1608:8", "const:4:8"]]
+ 009a1608 ["CALL", null, ["callee:00467ba0:8"]]
~~~


<a id="compare-9fd6f8f9107afc3ab1c922ef6ebcd1f0"></a>

### [`009a1600`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a1/009a1600.md) → [`009a1654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a1/009a1654.md) FUN_009a1654

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`0099703c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00997/0099703c.md) · 呼出先 9件 [`00440ec0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00440/00440ec0.md) [`0046c9c4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0046c/0046c9c4.md) [`0072c138`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0072c/0072c138.md) [`0072c2dc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0072c/0072c2dc.md) [`007534d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00753/007534d0.md)
- 新版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 9件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0072c190`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c190.md) [`0072c334`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0072c/0072c334.md) [`00753528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00753/00753528.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 71.99% / 新版 71.99%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 3件, `store_value` 4件, `unresolved_branch_alignment` 53件, `unresolved_call_alignment` 34件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 25件

アドレスに依存する影響 `store_value` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a16f8",
      "incomplete_value": true,
      "site": "009a1710",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2b0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a16a4",
      "incomplete_value": true,
      "site": "009a16bc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:270:8"
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
      "definition_site": "009a174c",
      "incomplete_value": true,
      "site": "009a1764",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d70:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a16f8",
      "incomplete_value": true,
      "site": "009a1710",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d30:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 28,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "009a19c4",
      "incomplete_value": true,
      "site": "009a19d0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "009a1970",
      "incomplete_value": true,
      "site": "009a197c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:100:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 55,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a162c",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a1638",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "009a16f8",
      "READ",
      [
        "storage",
        "002c2270",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "009a1680",
      "WRITE",
      [
        "storage",
        "Stack[-0xb0]",
        null,
        null
      ]
    ],
    [
      "009a168c",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "009a16f8",
      "READ",
      [
        "storage",
        "002c22b0",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 009a1cfc ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 009a1cfc ["CBRANCH", null, ["local:b74:8", "tmp:0:1"]]
+ 009a1d50 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 009a1d50 ["CBRANCH", null, ["local:b72:8", "tmp:0:1"]]
- 009a205c ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 009a205c ["CBRANCH", null, ["local:b102:8", "tmp:0:1"]]
- 009a257c ["INT_ADD", "register:40f0:8", ["const:9a257c:8", "const:4:8"]]
- 009a257c ["CALL", null, ["callee:00c57f80:8"]]
+ 009a25d0 ["INT_ADD", "register:40f0:8", ["const:9a25d0:8", "const:4:8"]]
+ 009a25d0 ["CALL", null, ["callee:00c57f80:8"]]
~~~


<a id="compare-bf36003bc49dd34a889bc205d4f0a6b7"></a>

### [`009a2b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a2/009a2b34.md) → [`009a2b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2b88.md) FUN_009a2b88

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 10件 [`00982d6c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00982/00982d6c.md) [`00984a08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00984/00984a08.md) [`00984c34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00984/00984c34.md) [`00985418`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00985/00985418.md) [`0098dc08`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0098d/0098dc08.md) · 呼出先 5件 [`009a2c84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a2/009a2c84.md) [`00c53d00`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c53/00c53d00.md) [`00c57e80`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e80.md) [`00c57eb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57eb0.md) [`00c57ee0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57ee0.md)
- 新版 呼出元 10件 [`00982dc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00982/00982dc0.md) [`00984a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00984/00984a5c.md) [`00984c88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00984/00984c88.md) [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 5件 [`009a2cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2cd8.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 80.95% / 新版 80.95%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "009a2bbc"
      ],
      [
        "CONDITIONAL_JUMP",
        "009a2c10"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a2c84",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "009a2bb8",
      "incomplete_value": true,
      "site": "009a2c30",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4068:4"
              ],
              [
                "live",
                "register:4050:4"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:4"
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
      "unmatched:009a2b8c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2bec"
      ]
    ],
    [
      "unmatched:009a2bbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2c78"
      ]
    ],
    [
      "unmatched:009a2bc4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2c50"
      ]
    ]
  ],
  "added": [
    [
      "009a2be0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2bec"
      ]
    ],
    [
      "009a2c10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2c78"
      ]
    ],
    [
      "009a2c18",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2c50"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a2b8c ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009a2b8c ["BOOL_AND", "tmp:1:1", ["register:102:1", "tmp:0:1"]]
- 009a2b8c ["CBRANCH", null, ["local:b6:8", "tmp:1:1"]]
- 009a2b90 ["COPY", "tmp:0:8", ["const:0:8"]]
- 009a2b90 ["INT_EQUAL", "tmp:1:1", ["register:4040:8", "const:0:8"]]
- 009a2b90 ["CBRANCH", null, ["const:2:4", "tmp:1:1"]]
- 009a2b90 ["INT_DIV", "tmp:0:8", ["register:4050:8", "register:4040:8"]]
- 009a2b94 ["INT_MULT", "tmp:0:8", ["register:4058:8", "register:4040:8"]]
- 009a2b94 ["INT_SUB", "register:4058:8", ["register:4050:8", "tmp:0:8"]]
~~~


<a id="compare-9d7b4baf490261dd9da70f698cb0aaeb"></a>

### [`009a2c84`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a2/009a2c84.md) → [`009a2cd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2cd8.md) FUN_009a2cd8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009a2b34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a2/009a2b34.md) · 呼出先 0件 
- 新版 呼出元 1件 [`009a2b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2b88.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 74.03% / 新版 74.03%

アドレスに依存する影響 `unresolved_branch_alignment` 8件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a2cd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2d1c"
      ]
    ],
    [
      "009a2d40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009a2cfc"
      ]
    ],
    [
      "unmatched:009a2cf8",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009a2d0c"
      ]
    ]
  ],
  "added": [
    [
      "009a2d28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2d1c"
      ]
    ],
    [
      "009a2d40",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2d50"
      ]
    ],
    [
      "009a2d4c",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009a2d60"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a2cd0 ["INT_LESSEQUAL", "register:105:1", ["register:4008:8", "register:4060:8"]]
- 009a2cd0 ["INT_SBORROW", "register:106:1", ["register:4060:8", "register:4008:8"]]
- 009a2cd0 ["INT_SUB", "tmp:0:8", ["register:4060:8", "register:4008:8"]]
- 009a2cd0 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 009a2cd4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009a2cd4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 009a2ce0 ["CBRANCH", null, ["local:b14:8", "register:101:1"]]
+ 009a2d34 ["CBRANCH", null, ["local:b16:8", "register:101:1"]]
~~~


<a id="compare-6dc295bdbd574a495605eec7ca906483"></a>

### [`009a2dbc`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a2/009a2dbc.md) → [`009a2e10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2e10.md) FUN_009a2e10

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.62% / 新版 84.62%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a2de0",
      "DATA",
      [
        "storage",
        "00c88080",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a2e34",
      "DATA",
      [
        "storage",
        "00c88150",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a2dd0 ["INT_ADD", "register:40f0:8", ["const:9a2dd0:8", "const:4:8"]]
- 009a2dd0 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a2e24 ["INT_ADD", "register:40f0:8", ["const:9a2e24:8", "const:4:8"]]
+ 009a2e24 ["CALL", null, ["callee:00c57f60:8"]]
- 009a2ddc ["COPY", "tmp:0:8", ["const:80:8"]]
- 009a2ddc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a2ddc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a2ddc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a2de0 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009a2de0 ["COPY", "tmp:1:8", ["register:4048:8"]]
- 009a2de0 ["COPY", "tmp:2:8", ["register:4000:8"]]
- 009a2de0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e6270a360aeb871c9105607ca262279c"></a>

### [`009a2e0c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a2/009a2e0c.md) → [`009a2e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a2/009a2e60.md) FUN_009a2e60

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 8件 [`0043bba4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0043b/0043bba4.md) [`00467b60`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00467/00467b60.md) [`005c179c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/005c1/005c179c.md) [`006647c0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00664/006647c0.md) [`009c7cb0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c7/009c7cb0.md)
- 新版 呼出元 0件  · 呼出先 8件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`009c7d04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c7/009c7d04.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.99% / 新版 85.99%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 1件, `store_destination` 1件, `store_value` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a306c",
      "value": [
        "live",
        "register:40b8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3098",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 30,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "009a3070",
      "incomplete_value": true,
      "site": "009a3070",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "old": {
      "definition_site": "009a309c",
      "incomplete_value": true,
      "site": "009a309c",
      "value": [
        "live",
        "register:40e0:8"
      ]
    },
    "ordinal": 31,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a2e7c",
      "incomplete_value": true,
      "site": "009a2e80",
      "value": [
        "LOAD",
        "8",
        [
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
      "unmatched:009a2e54",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a2e7c",
      "READ",
      [
        "storage",
        "Stack[-0x78]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a2fcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a3034"
      ]
    ]
  ],
  "added": [
    [
      "009a2ea8",
      "WRITE",
      [
        "storage",
        "Stack[-0x98]",
        null,
        null
      ]
    ],
    [
      "009a3020",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a3034"
      ]
    ],
    [
      "009a3024",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "009a3058"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a2e80 ["INT_ADD", "register:40f0:8", ["const:9a2e80:8", "const:4:8"]]
- 009a2e80 ["CALL", null, ["callee:0043bbe4:8"]]
+ 009a2ed4 ["INT_ADD", "register:40f0:8", ["const:9a2ed4:8", "const:4:8"]]
+ 009a2ed4 ["CALL", null, ["callee:0043bbe4:8"]]
- 009a2ea0 ["CBRANCH", null, ["local:b33:8", "register:101:1"]]
+ 009a2ef4 ["CBRANCH", null, ["local:b34:8", "register:101:1"]]
- 009a2ef4 ["INT_ADD", "register:40f0:8", ["const:9a2ef4:8", "const:4:8"]]
- 009a2ef4 ["CALL", null, ["callee:009c7d04:8"]]
+ 009a2f48 ["INT_ADD", "register:40f0:8", ["const:9a2f48:8", "const:4:8"]]
+ 009a2f48 ["CALL", null, ["callee:009c7d04:8"]]
~~~


<a id="compare-50d843d02ebed957bcabb78be601e5df"></a>

### [`009a31b0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a31b0.md) → [`009a3204`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3204.md) FUN_009a3204

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_store_alignment` 5件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a31b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a31b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a31d4",
      "DATA",
      [
        "storage",
        "00c88110",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3204",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009a3208",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a3228",
      "DATA",
      [
        "storage",
        "00c881e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a31b0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009a31b0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009a31b0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 009a31b0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009a31b4 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009a31b4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009a31c4 ["INT_ADD", "register:40f0:8", ["const:9a31c4:8", "const:4:8"]]
- 009a31c4 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a3218 ["INT_ADD", "register:40f0:8", ["const:9a3218:8", "const:4:8"]]
+ 009a3218 ["CALL", null, ["callee:00c57f60:8"]]
~~~


<a id="compare-ccac9d7cc144cb28d4aa5de115e915fc"></a>

### [`009a32e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a32e8.md) → [`009a333c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a333c.md) FUN_009a333c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 61.54% / 新版 61.54%

優先判定に残った影響 `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a330c",
      "DATA",
      [
        "storage",
        "00c88190",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a3310",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a3314",
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
      "009a3360",
      "DATA",
      [
        "storage",
        "00c88260",
        null,
        "undefined *"
      ]
    ],
    [
      "009a3364",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a3368",
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
- 009a32fc ["INT_ADD", "register:40f0:8", ["const:9a32fc:8", "const:4:8"]]
- 009a32fc ["CALL", null, ["callee:00c57f60:8"]]
+ 009a3350 ["INT_ADD", "register:40f0:8", ["const:9a3350:8", "const:4:8"]]
+ 009a3350 ["CALL", null, ["callee:00c57f60:8"]]
- 009a3308 ["COPY", "tmp:0:8", ["const:190:8"]]
- 009a3308 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3308 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3308 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a330c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009a330c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 009a330c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 009a330c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-83e3ff430957aa72ff8bfedf089f4b5d"></a>

### [`009a35ac`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a35ac.md) → [`009a3600`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3600.md) FUN_009a3600

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6ea4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6ea4.md) [`00a468f0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a468f0.md) [`00a46bb8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a46/00a46bb8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md) [`00a46944`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46944.md) [`00a46c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a46c0c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 74.42% / 新版 74.42%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3624",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a35d0",
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
      "site": "009a3630",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a35dc",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a3634",
      "incomplete_value": false,
      "site": "009a3638",
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
      "unmatched:009a35ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a35b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a3624",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009a3600",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009a3604",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a3624",
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
- 009a35d0 ["INT_ADD", "register:40f0:8", ["const:9a35d0:8", "const:4:8"]]
- 009a35d0 ["CALL", null, ["ram:47acf4:8"]]
+ 009a3624 ["INT_ADD", "register:40f0:8", ["const:9a3624:8", "const:4:8"]]
+ 009a3624 ["CALL", null, ["ram:47ad34:8"]]
- 009a35dc ["INT_ADD", "register:40f0:8", ["const:9a35dc:8", "const:4:8"]]
- 009a35dc ["CALL", null, ["ram:47acf4:8"]]
+ 009a3630 ["INT_ADD", "register:40f0:8", ["const:9a3630:8", "const:4:8"]]
+ 009a3630 ["CALL", null, ["ram:47ad34:8"]]
- 009a3624 ["COPY", "tmp:0:4", ["register:40a0:4"]]
- 009a3624 ["COPY", "tmp:1:8", ["register:4050:8"]]
- 009a3624 ["COPY", "tmp:2:8", ["tmp:1:8"]]
- 009a3624 ["INT_LEFT", "tmp:2:8", ["tmp:2:8", "const:0:8"]]
~~~


<a id="compare-eeaf9a345f241bf87c7cd679cae0be08"></a>

### [`009a3684`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3684.md) → [`009a36d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a36d8.md) FUN_009a36d8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a3694",
      "incomplete_value": false,
      "site": "009a3698",
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
      "009a36fc",
      "DATA",
      [
        "storage",
        "00c88290",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a36fc",
      "DATA",
      [
        "storage",
        "00c88360",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3698 ["INT_ADD", "register:40f0:8", ["const:9a3698:8", "const:4:8"]]
- 009a3698 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a36ec ["INT_ADD", "register:40f0:8", ["const:9a36ec:8", "const:4:8"]]
+ 009a36ec ["CALL", null, ["callee:00c57f60:8"]]
- 009a36a4 ["COPY", "tmp:0:8", ["const:290:8"]]
- 009a36a4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a36a4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a36a4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a36f8 ["COPY", "tmp:0:8", ["const:360:8"]]
+ 009a36f8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a36f8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a36f8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-cba94a38f3350ff0627317a908abb3f0"></a>

### [`009a36d4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a36d4.md) → [`009a3728`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3728.md) FUN_009a3728

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b6f50`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b6/008b6f50.md) [`009c32e8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c32e8.md) [`009c32f8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009c3/009c32f8.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b6fa8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6fa8.md) [`009c333c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c333c.md) [`009c334c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009c3/009c334c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, call_target, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 89.58% / 新版 89.58%

優先判定に残った影響 `call_argument_candidate` 1件, `call_target` 1件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3758",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3704",
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a3750",
      "incomplete_value": true,
      "site": "009a3754",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:009a36fc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:009a3710"
      ]
    ],
    [
      "009a3758",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ],
    [
      "unmatched:009a3710",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009a3750",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a3764"
      ]
    ],
    [
      "009a3758",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "009a3764",
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
- 009a3700 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
- 009a3700 ["CBRANCH", null, ["local:b46:8", "tmp:0:1"]]
+ 009a3754 ["INT_NOTEQUAL", "tmp:0:1", ["register:4040:4", "const:0:4"]]
+ 009a3754 ["CBRANCH", null, ["local:b44:8", "tmp:0:1"]]
- 009a3704 ["INT_ADD", "register:40f0:8", ["const:9a3704:8", "const:4:8"]]
- 009a3704 ["CALL", null, ["ram:47acf4:8"]]
+ 009a3758 ["INT_ADD", "register:40f0:8", ["const:9a3758:8", "const:4:8"]]
+ 009a3758 ["CALL", null, ["ram:47ad34:8"]]
- 009a3754 ["INT_ADD", "register:40f0:8", ["const:9a3754:8", "const:4:8"]]
- 009a3754 ["CALL", null, ["callee:008b6fa8:8"]]
+ 009a37a8 ["INT_ADD", "register:40f0:8", ["const:9a37a8:8", "const:4:8"]]
+ 009a37a8 ["CALL", null, ["callee:008b6fa8:8"]]
~~~


<a id="compare-e5bbcf6f4deebae948b71ae543c6e1e5"></a>

### [`009a3880`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3880.md) → [`009a38d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a38d4.md) FUN_009a38d4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 92.31% / 新版 92.31%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a38e4",
      "incomplete_value": false,
      "site": "009a38e8",
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
      "009a38f8",
      "DATA",
      [
        "storage",
        "00c88310",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a38f8",
      "DATA",
      [
        "storage",
        "00c883e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3894 ["INT_ADD", "register:40f0:8", ["const:9a3894:8", "const:4:8"]]
- 009a3894 ["CALL", null, ["callee:00c57f60:8"]]
+ 009a38e8 ["INT_ADD", "register:40f0:8", ["const:9a38e8:8", "const:4:8"]]
+ 009a38e8 ["CALL", null, ["callee:00c57f60:8"]]
- 009a38a0 ["COPY", "tmp:0:8", ["const:310:8"]]
- 009a38a0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a38a0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a38a0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 009a38f4 ["COPY", "tmp:0:8", ["const:3e0:8"]]
+ 009a38f4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 009a38f4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 009a38f4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-94b5b9e2443b3b4c3f8d84906925cc43"></a>

### [`009a38b4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a38b4.md) → [`009a3908`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3908.md) FUN_009a3908

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 40.00% / 新版 40.00%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:009a38c0",
      "DATA",
      [
        "storage",
        "00c88310",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3914",
      "DATA",
      [
        "storage",
        "00c883e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a38b8 ["COPY", "register:4048:8", ["const:c88000:8"]]
- 009a38bc ["COPY", "tmp:0:8", ["const:310:8"]]
- 009a38bc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009a38bc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009a38bc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
- 009a38c0 ["COPY", "tmp:0:8", ["register:4048:8"]]
- 009a38c0 ["COPY", "tmp:1:8", ["register:4040:8"]]
- 009a38c0 ["COPY", "tmp:2:8", ["register:4008:8"]]
- 009a38c0 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-65c9a21d542f82dd38c3cdcb9d91c951"></a>

### [`009a38d0`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a38d0.md) → [`009a3924`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3924.md) FUN_009a3924

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "009a38fc",
      "incomplete_value": false,
      "site": "009a3900",
      "value": [
        "leaf",
        "const:0:8"
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
      "unmatched:009a38e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a38f4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009a393c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a3948",
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
- 009a3900 ["INT_ADD", "register:40f0:8", ["const:9a3900:8", "const:4:8"]]
- 009a3900 ["CALL", null, ["callee:0047ce14:8"]]
+ 009a3954 ["INT_ADD", "register:40f0:8", ["const:9a3954:8", "const:4:8"]]
+ 009a3954 ["CALL", null, ["callee:0047ce14:8"]]
- 009a38d8 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
+ 009a392c ["CBRANCH", null, ["local:b6:8", "register:101:1"]]
- 009a38e0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 009a38e0 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
+ 009a3934 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 009a3934 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-9d2702514397760a6a1bf7b8fa9884ec"></a>

### [`009a3958`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3958.md) → [`009a39ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a39ac.md) FUN_009a39ac

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57e90`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00c57/00c57e90.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 69.23% / 新版 69.23%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "009a39bc",
      "incomplete_value": false,
      "site": "009a39c0",
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
      "unmatched:009a397c",
      "DATA",
      [
        "storage",
        "00c88390",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:009a3980",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a3984",
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
      "009a39d0",
      "DATA",
      [
        "storage",
        "00c88460",
        null,
        "undefined *"
      ]
    ],
    [
      "009a39d4",
      "READ",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a39d8",
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
- 009a396c ["INT_ADD", "register:40f0:8", ["const:9a396c:8", "const:4:8"]]
- 009a396c ["CALL", null, ["callee:00c57f60:8"]]
+ 009a39c0 ["INT_ADD", "register:40f0:8", ["const:9a39c0:8", "const:4:8"]]
+ 009a39c0 ["CALL", null, ["callee:00c57f60:8"]]
- 009a3978 ["COPY", "tmp:0:8", ["const:390:8"]]
- 009a3978 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 009a3978 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 009a3978 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 009a397c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 009a397c ["COPY", "tmp:1:8", ["register:4048:8"]]
- 009a397c ["COPY", "tmp:2:8", ["register:4000:8"]]
- 009a397c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-c8aa7c2d81c30b3f5348b181f391e979"></a>

### [`009a398c`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a398c.md) → [`009a39e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a39e0.md) FUN_009a39e0

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
      "definition_site": "009a39ec",
      "incomplete_value": false,
      "site": "009a39ec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:460:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "009a3998",
      "incomplete_value": false,
      "site": "009a3998",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c88000:8"
          ],
          [
            "leaf",
            "const:390:8"
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
      "009a39ec",
      "DATA",
      [
        "storage",
        "00c88390",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a39ec",
      "DATA",
      [
        "storage",
        "00c88460",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3994 ["COPY", "tmp:0:8", ["const:390:8"]]
- 009a3994 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 009a3994 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 009a3994 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 009a39e8 ["COPY", "tmp:0:8", ["const:460:8"]]
+ 009a39e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 009a39e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 009a39e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d0fa49e1f324806b11f10995d66ec779"></a>

### [`009a39a8`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a39a8.md) → [`009a39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a39fc.md) FUN_009a39fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047acf4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047a/0047acf4.md) [`0047cdd4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/0047c/0047cdd4.md) [`008b9178`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/008b9/008b9178.md) [`00a1a6a4`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/00a1a/00a1a6a4.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md) [`00a1a6f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a1a/00a1a6f8.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 83.33% / 新版 83.33%

優先判定に残った影響 `store_condition` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "CONDITIONAL_JUMP",
        "009a39b0"
      ],
      [
        "CONDITIONAL_JUMP",
        "009a3a04"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "009a3a50",
      "value": [
        "live",
        "register:101:1"
      ]
    },
    "old": {
      "definition_site": "009a39ac",
      "incomplete_value": true,
      "site": "009a39fc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SUB",
            "4",
            [
              [
                "live",
                "register:4040:4"
              ],
              [
                "leaf",
                "const:5:4"
              ]
            ]
          ],
          [
            "leaf",
            "const:0:4"
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
      "unmatched:009a39b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a3a40"
      ]
    ],
    [
      "unmatched:009a39cc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047acf4"
      ]
    ]
  ],
  "added": [
    [
      "009a3a04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "009a3a40"
      ]
    ],
    [
      "009a3a20",
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
+ 009a39fc ["COPY", "tmp:0:8", ["register:4010:8"]]
+ 009a39fc ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
+ 009a39fc ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 009a39a8 ["COPY", "tmp:0:8", ["register:4010:8"]]
- 009a39a8 ["LOAD", "tmp:1:4", ["const:1b1:8", "tmp:0:8"]]
- 009a39a8 ["INT_ZEXT", "register:4040:8", ["tmp:1:4"]]
- 009a39ac ["COPY", "tmp:0:4", ["const:5:4"]]
- 009a39ac ["INT_LESSEQUAL", "register:105:1", ["const:5:4", "register:4040:4"]]
- 009a39ac ["INT_SBORROW", "register:106:1", ["register:4040:4", "const:5:4"]]
- 009a39ac ["INT_SUB", "tmp:1:4", ["register:4040:4", "tmp:0:4"]]
~~~


<a id="compare-9222e145fac7cd2a2a07d43c912b0752"></a>

### [`009a3a34`](../../../../reference/16.0.1/arm64-v8a/2c22d76fc1ddec676d4ed6206d5ec55a02a651f407d39d1c0b32ded16fd7eabe/functions/009a3/009a3a34.md) → [`009a3a88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009a3/009a3a88.md) FUN_009a3a88

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
      "unmatched:009a3a34",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a3a38",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:009a3a58",
      "DATA",
      [
        "storage",
        "00c88410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "009a3a88",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "009a3a8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "009a3aac",
      "DATA",
      [
        "storage",
        "00c884e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 009a3a34 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 009a3a34 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 009a3a34 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 009a3a34 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 009a3a38 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 009a3a38 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
- 009a3a3c ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


