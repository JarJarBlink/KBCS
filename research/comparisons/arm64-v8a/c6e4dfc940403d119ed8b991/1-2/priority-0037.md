# v16.0.2 → v16.0.3 · 最優先の変更候補 (37)

[一覧の目次](README.md)

<a id="compare-769ef8ef72ab21a2a134c603cc1f9a7c"></a>

### [`006a39dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a39dc.md) → [`006a3d8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3d8c.md) FUN_006a3d8c

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
      "definition_site": "006a3db0",
      "incomplete_value": false,
      "site": "006a3db0",
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
            "const:a20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a3a00",
      "incomplete_value": false,
      "site": "006a3a00",
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
            "const:a50:8"
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
      "006a3db0",
      "DATA",
      [
        "storage",
        "00c75a50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a3db0",
      "DATA",
      [
        "storage",
        "00c76a20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a39f0 ["INT_ADD", "register:40f0:8", ["const:6a39f0:8", "const:4:8"]]
- 006a39f0 ["CALL", null, ["callee:00c58f30:8"]]
+ 006a3da0 ["INT_ADD", "register:40f0:8", ["const:6a3da0:8", "const:4:8"]]
+ 006a3da0 ["CALL", null, ["callee:00c58f30:8"]]
- 006a39f8 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006a3da8 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006a39fc ["COPY", "tmp:0:8", ["const:a50:8"]]
- 006a39fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006a39fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006a39fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006a3dac ["COPY", "tmp:0:8", ["const:a20:8"]]
+ 006a3dac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006a3dac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006a3dac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-aa5718c86692bc837b66436d9fcc6884"></a>

### [`006a3a10`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3a10.md) → [`006a3dc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3dc0.md) FUN_006a3dc0

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
      "unmatched:006a3a1c",
      "DATA",
      [
        "storage",
        "00c75a50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a3dcc",
      "DATA",
      [
        "storage",
        "00c76a20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a3a10 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 006a3a10 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006a3a14 ["COPY", "register:4048:8", ["const:c75000:8"]]
- 006a3a18 ["COPY", "tmp:0:8", ["const:a50:8"]]
- 006a3a18 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006a3a18 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006a3a18 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-f5cb9bd56e56c8ae9f0b39b3452bfbc3"></a>

### [`006a3a5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3a5c.md) → [`006a3e0c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3e0c.md) _INIT_102

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.40% / 新版 77.40%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a3f58",
      "incomplete_value": true,
      "site": "006a3f6c",
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
      "definition_site": "006a402c",
      "incomplete_value": false,
      "site": "006a4040",
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
      "definition_site": "006a3c7c",
      "incomplete_value": false,
      "site": "006a3c90",
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
      "definition_site": "006a4034",
      "incomplete_value": false,
      "site": "006a4040",
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
            "const:790:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a3c84",
      "incomplete_value": false,
      "site": "006a3c90",
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
            "const:7d0:8"
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
      "unmatched:006a3a8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a3a98",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006a3ab4",
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
      "006a3e3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "006a3e48",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006a3e64",
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
- 006a3bbc ["INT_ADD", "register:40f0:8", ["const:6a3bbc:8", "const:4:8"]]
- 006a3bbc ["CALL", null, ["callee:0043bb58:8"]]
+ 006a3f6c ["INT_ADD", "register:40f0:8", ["const:6a3f6c:8", "const:4:8"]]
+ 006a3f6c ["CALL", null, ["callee:0043bb58:8"]]
- 006a3c90 ["INT_ADD", "register:40f0:8", ["const:6a3c90:8", "const:4:8"]]
- 006a3c90 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006a4040 ["INT_ADD", "register:40f0:8", ["const:6a4040:8", "const:4:8"]]
+ 006a4040 ["CALL", null, ["callee:00c58ed0:8"]]
- 006a3a6c ["COPY", "tmp:0:8", ["const:f0:8"]]
- 006a3a6c ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 006a3a6c ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 006a3a6c ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f2ae14e897d5c5997b29d981258eaf33"></a>

### [`006a3dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3dec.md) → [`006a419c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a4/006a419c.md) FUN_006a419c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 1件 [`0084e5f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0084e/0084e5f4.md) · 呼出先 1件 [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md)
- 新版 呼出元 1件 [`0084f5a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084f/0084f5a0.md) · 呼出先 1件 [`006a64e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a64e0.md)

変更の種類 call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_return_alignment

命令の説明率　旧版 91.67% / 新版 91.67%

アドレスに依存する影響 `call_argument_candidate` 2件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a41b0",
      "incomplete_value": true,
      "site": "006a41b4",
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
              [
                "leaf",
                "const:20:8"
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
    "old": null,
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a41ac",
      "incomplete_value": true,
      "site": "006a41b4",
      "value": [
        "LOAD",
        "8",
        [
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
    "old": null,
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 006a3e04 ["INT_ADD", "register:40f0:8", ["const:6a3e04:8", "const:4:8"]]
- 006a3e04 ["CALL", null, ["callee:006a64e0:8"]]
+ 006a41b4 ["INT_ADD", "register:40f0:8", ["const:6a41b4:8", "const:4:8"]]
+ 006a41b4 ["CALL", null, ["callee:006a64e0:8"]]
- 006a3e18 ["COPY", "register:0:8", ["register:40f0:8"]]
- 006a3e18 ["RETURN", null, ["register:0:8"]]
+ 006a41c8 ["COPY", "register:0:8", ["register:40f0:8"]]
+ 006a41c8 ["RETURN", null, ["register:0:8"]]
~~~


<a id="compare-5a17e6c4af92b27f484507be35a63921"></a>

### [`006a3e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3e1c.md) → [`006a41cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a4/006a41cc.md) FUN_006a41cc

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 21件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`004410cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00441/004410cc.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md) [`00488474`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00488/00488474.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 21件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`004413ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004413ec.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md) [`00488794`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488794.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 69.79% / 新版 69.79%

優先判定に残った影響 `call_argument_candidate` 6件, `store_condition` 4件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 26件, `unresolved_call_alignment` 12件, `unresolved_store_alignment` 52件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006a4b5c",
      "incomplete_value": true,
      "site": "006a4b60",
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
      "definition_site": "006a47ac",
      "incomplete_value": true,
      "site": "006a47b0",
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
    "ordinal": 120,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006a4b58",
      "incomplete_value": true,
      "site": "006a4b64",
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
      "definition_site": "006a47a8",
      "incomplete_value": true,
      "site": "006a47b4",
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
    "ordinal": 121,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "006a4b70",
      "incomplete_value": true,
      "site": "006a4b70",
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
      "definition_site": "006a47c0",
      "incomplete_value": true,
      "site": "006a47c0",
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
    "ordinal": 122,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a3e1c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a3e20",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a3e24",
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
      "006a41cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006a41d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006a41d4",
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
- 006a4128 ["INT_ADD", "register:40f0:8", ["const:6a4128:8", "const:4:8"]]
- 006a4128 ["CALL", null, ["callee:004413ec:8"]]
+ 006a44d8 ["INT_ADD", "register:40f0:8", ["const:6a44d8:8", "const:4:8"]]
+ 006a44d8 ["CALL", null, ["callee:004413ec:8"]]
- 006a422c ["INT_ADD", "register:40f0:8", ["const:6a422c:8", "const:4:8"]]
- 006a422c ["CALL", null, ["callee:0043bf04:8"]]
+ 006a45dc ["INT_ADD", "register:40f0:8", ["const:6a45dc:8", "const:4:8"]]
+ 006a45dc ["CALL", null, ["callee:0043bf04:8"]]
+ 006a4250 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:60:8"]]
+ 006a4250 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4000:8"]]
~~~


<a id="compare-49d129db570bc6d5958ee32478d9d4ad"></a>

### [`006a4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4954.md) → [`006a4d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a4/006a4d04.md) FUN_006a4d04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a26210`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a26/00a26210.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004801b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/004801b8.md) [`00480218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480218.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md)
- 新版 呼出元 1件 [`00a271bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a27/00a271bc.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004804d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/004804d8.md) [`00480538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480538.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`006a64e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a64e0.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 75.79% / 新版 75.79%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 37件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a4984",
      "incomplete_value": true,
      "site": "006a4990",
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
              [
                "leaf",
                "const:20:8"
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
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a4980",
      "incomplete_value": true,
      "site": "006a4990",
      "value": [
        "LOAD",
        "8",
        [
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a4d44",
      "incomplete_value": true,
      "site": "006a4d54",
      "value": [
        "live",
        "register:40a0:8"
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
      "unmatched:006a4958",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a495c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a4960",
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
      "006a4d08",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006a4d0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006a4d10",
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
- 006a4990 ["INT_ADD", "register:40f0:8", ["const:6a4990:8", "const:4:8"]]
- 006a4990 ["CALL", null, ["callee:006a64e0:8"]]
+ 006a4d40 ["INT_ADD", "register:40f0:8", ["const:6a4d40:8", "const:4:8"]]
+ 006a4d40 ["CALL", null, ["callee:006a64e0:8"]]
- 006a49a4 ["INT_ADD", "register:40f0:8", ["const:6a49a4:8", "const:4:8"]]
- 006a49a4 ["CALL", null, ["callee:004804d8:8"]]
+ 006a4d54 ["INT_ADD", "register:40f0:8", ["const:6a4d54:8", "const:4:8"]]
+ 006a4d54 ["CALL", null, ["callee:004804d8:8"]]
- 006a4a94 ["INT_ADD", "register:40f0:8", ["const:6a4a94:8", "const:4:8"]]
- 006a4a94 ["CALL", null, ["callee:00480538:8"]]
+ 006a4e44 ["INT_ADD", "register:40f0:8", ["const:6a4e44:8", "const:4:8"]]
+ 006a4e44 ["CALL", null, ["callee:00480538:8"]]
~~~


<a id="compare-7e6e0ff7d65a90b7a662a4ff9c4b4afb"></a>

### [`006a4dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4dc8.md) → [`006a5178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a5/006a5178.md) FUN_006a5178

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00a2b33c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a2b/00a2b33c.md) · 呼出先 2件 [`00480bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480bd0.md) [`00480c28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00480/00480c28.md)
- 新版 呼出元 1件 [`00a2c310`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a2c/00a2c310.md) · 呼出先 2件 [`00480ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480ef0.md) [`00480f48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00480/00480f48.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a4e74",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a521c"
      ]
    ],
    [
      "unmatched:006a4ee0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5280"
      ]
    ],
    [
      "unmatched:006a4ee4",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006a51c8"
      ]
    ]
  ],
  "added": [
    [
      "006a5224",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a521c"
      ]
    ],
    [
      "006a5290",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5280"
      ]
    ],
    [
      "006a5294",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "006a51c8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a4df0 ["INT_ADD", "register:40f0:8", ["const:6a4df0:8", "const:4:8"]]
- 006a4df0 ["CALL", null, ["callee:00480ef0:8"]]
+ 006a51a0 ["INT_ADD", "register:40f0:8", ["const:6a51a0:8", "const:4:8"]]
+ 006a51a0 ["CALL", null, ["callee:00480ef0:8"]]
- 006a4e00 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 006a4e00 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 006a51b0 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 006a51b0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 006a4e20 ["CBRANCH", null, ["local:b2:8", "register:101:1"]]
+ 006a51d0 ["CBRANCH", null, ["local:b1:8", "register:101:1"]]
~~~


<a id="compare-8c3898aa627477075f1c666b01f62d1f"></a>

### [`006a4ee8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4ee8.md) → [`006a5298`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a5/006a5298.md) FUN_006a5298

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 4件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`0090a60c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090a/0090a60c.md) [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) · 呼出先 0件 
- 新版 呼出元 4件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`0090b5b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090b/0090b5b8.md) [`0090dc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090d/0090dc54.md) [`0091bb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0091b/0091bb78.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 006a4f0c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a4f0c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 006a52bc ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a52bc ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
~~~


<a id="compare-69f0ba6dade24a3990f37e764d52201a"></a>

### [`006a4f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4f20.md) → [`006a52d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a5/006a52d0.md) FUN_006a52d0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`0090dc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090d/0090dc54.md) [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 62.40% / 新版 62.40%

優先判定に残った影響 `return_value_candidate` 1件, `unresolved_branch_alignment` 17件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 32件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "006a52e0",
      "incomplete_value": true,
      "site": "006a52fc",
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
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a4f20",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a4f24",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a4f28",
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
      "006a52d0",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "006a52d4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "006a52d8",
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
- 006a4f20 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 006a4f20 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 006a4f20 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 006a4f20 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 006a4f24 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 006a4f24 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 006a4f24 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 006a4f24 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006a4f28 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 006a4f28 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 006a4f28 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 006a4f28 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-0bd359eb1b999e153ddd64c6e6f90606"></a>

### [`006a5308`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5308.md) → [`006a56b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a5/006a56b8.md) FUN_006a56b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`0090dc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090d/0090dc54.md) [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 96.97% / 新版 96.97%

優先判定に残った影響 `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a531c",
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
      "006a56cc",
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
- 006a530c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a530c ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 006a56bc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006a56bc ["CBRANCH", null, ["local:b12:8", "tmp:0:1"]]
- 006a531c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006a531c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006a531c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:30:8"]]
- 006a531c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006a5320 ["COPY", "register:40e8:8", ["register:8:8"]]
~~~


<a id="compare-c1371a51258f951dc6380622bb8e27bc"></a>

### [`006a5410`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5410.md) → [`006a57c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a5/006a57c0.md) FUN_006a57c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) [`0090cca8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090c/0090cca8.md) [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) [`0090dc54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090d/0090dc54.md) [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 97.14% / 新版 97.14%

優先判定に残った影響 `unresolved_store_alignment` 2件

~~~diff
- 006a5454 ["BRANCH", null, ["local:b20:8"]]
+ 006a5804 ["BRANCH", null, ["local:b19:8"]]
- 006a5490 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 006a5490 ["CBRANCH", null, ["local:b19:8", "tmp:0:1"]]
+ 006a5840 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 006a5840 ["CBRANCH", null, ["local:b18:8", "tmp:0:1"]]
- 006a54b0 ["INT_ADD", "register:40f0:8", ["const:6a54b0:8", "const:4:8"]]
- 006a54b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 006a5860 ["INT_ADD", "register:40f0:8", ["const:6a5860:8", "const:4:8"]]
+ 006a5860 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-d6532b30584db4ad433570376c986ff1"></a>

### [`006a5528`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5528.md) → [`006a58d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a5/006a58d8.md) FUN_006a58d8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`009d3b48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009d3/009d3b48.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`009d4af4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009d4/009d4af4.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.57% / 新版 98.57%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a5590",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a59a0"
      ]
    ],
    [
      "unmatched:006a56a4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5a3c"
      ]
    ]
  ],
  "added": [
    [
      "006a5940",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a59a0"
      ]
    ],
    [
      "006a5a54",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a5a3c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a552c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a552c ["CBRANCH", null, ["local:b39:8", "tmp:0:1"]]
+ 006a58dc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006a58dc ["CBRANCH", null, ["local:b40:8", "tmp:0:1"]]
- 006a5550 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a5550 ["CBRANCH", null, ["local:b38:8", "tmp:0:1"]]
+ 006a5900 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 006a5900 ["CBRANCH", null, ["local:b39:8", "tmp:0:1"]]
- 006a5590 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 006a5590 ["CBRANCH", null, ["local:b17:8", "tmp:0:1"]]
~~~


<a id="compare-2b3fe1bc228f9fa9eb3e67ebaeb6596a"></a>

### [`006a5758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5758.md) → [`006a5b08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a5/006a5b08.md) FUN_006a5b08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`00b28ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b28/00b28ff0.md) · 呼出先 15件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487bc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487bc0.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b29fe4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b29/00b29fe4.md) · 呼出先 15件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00487ee0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487ee0.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 78.37% / 新版 78.37%

優先判定に残った影響 `call_argument_candidate` 2件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 14件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a5870",
      "incomplete_value": true,
      "site": "006a5878",
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
            "const:28:8"
          ]
        ]
      ]
    },
    "ordinal": 9,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a5874",
      "incomplete_value": true,
      "site": "006a5878",
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "006a590c"
      ],
      [
        "FALL_THROUGH",
        "006a5cbc"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "006a5cbc",
      "incomplete_value": true,
      "site": "006a5cc0",
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
      "definition_site": "006a590c",
      "incomplete_value": true,
      "site": "006a5910",
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
    "ordinal": 33,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a578c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a5790",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "unmatched:006a57a8",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006a5b3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x70]",
        null,
        null
      ]
    ],
    [
      "006a5b40",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00488180"
      ]
    ],
    [
      "006a5b58",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a5878 ["INT_ADD", "register:40f0:8", ["const:6a5878:8", "const:4:8"]]
- 006a5878 ["CALL", null, ["callee:00487c9c:8"]]
+ 006a5c28 ["INT_ADD", "register:40f0:8", ["const:6a5c28:8", "const:4:8"]]
+ 006a5c28 ["CALL", null, ["callee:00487c9c:8"]]
- 006a5788 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:28:8"]]
- 006a5788 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 006a578c ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006a578c ["INT_ADD", "tmp:1:8", ["register:40e8:8", "const:fffffffffffffff0:8"]]
- 006a578c ["STORE", null, ["const:1b1:8", "tmp:1:8", "tmp:0:8"]]
~~~


<a id="compare-b224e60eecd4dd0d67fc81fcd777970f"></a>

### [`006a5b84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a5/006a5b84.md) → [`006a5f34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a5/006a5f34.md) FUN_006a5f34

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`0090dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0090d/0090dd50.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`0091abcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0091a/0091abcc.md) · 呼出先 3件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`0090ecfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0090e/0090ecfc.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) [`0091bb78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0091b/0091bb78.md) · 呼出先 3件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.08% / 新版 90.08%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a5c28",
      "incomplete_value": false,
      "site": "006a5c2c",
      "value": [
        "leaf",
        "const:40:8"
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
      "definition_site": "006a5dd4",
      "incomplete_value": false,
      "site": "006a5de4",
      "value": [
        "leaf",
        "const:40:8"
      ]
    },
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a63ec",
      "incomplete_value": false,
      "site": "006a63f8",
      "value": [
        "leaf",
        "const:40:8"
      ]
    },
    "old": null,
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
      "unmatched:006a5ca4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a6064"
      ]
    ],
    [
      "unmatched:006a5cbc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a605c"
      ]
    ],
    [
      "006a6288",
      "DATA",
      [
        "storage",
        "00396582",
        null,
        "byte[51]"
      ]
    ]
  ],
  "added": [
    [
      "006a6054",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a6064"
      ]
    ],
    [
      "006a606c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a605c"
      ]
    ],
    [
      "006a6288",
      "DATA",
      [
        "storage",
        "00396582",
        null,
        "dword"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a5c2c ["INT_ADD", "register:40f0:8", ["const:6a5c2c:8", "const:4:8"]]
- 006a5c2c ["CALL", null, ["callee:00c58f30:8"]]
+ 006a5fdc ["INT_ADD", "register:40f0:8", ["const:6a5fdc:8", "const:4:8"]]
+ 006a5fdc ["CALL", null, ["callee:00c58f30:8"]]
- 006a5de4 ["INT_ADD", "register:40f0:8", ["const:6a5de4:8", "const:4:8"]]
- 006a5de4 ["CALL", null, ["callee:00c58f30:8"]]
+ 006a6194 ["INT_ADD", "register:40f0:8", ["const:6a6194:8", "const:4:8"]]
+ 006a6194 ["CALL", null, ["callee:00c58f30:8"]]
- 006a6048 ["INT_ADD", "register:40f0:8", ["const:6a6048:8", "const:4:8"]]
- 006a6048 ["CALL", null, ["callee:00c58f30:8"]]
+ 006a63f8 ["INT_ADD", "register:40f0:8", ["const:6a63f8:8", "const:4:8"]]
+ 006a63f8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-486055fd5ca45b6ad3e3afd55f911570"></a>

### [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md) → [`006a64e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a64e0.md) FUN_006a64e0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 5件 [`006a3dec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3dec.md) [`006a4954`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a4/006a4954.md) [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md) [`0083a178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0083a/0083a178.md) [`00849920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00849/00849920.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`006a6130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6130.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 5件 [`006a419c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a4/006a419c.md) [`006a4d04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a4/006a4d04.md) [`006a64e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a64e0.md) [`0083b124`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0083b/0083b124.md) [`0084a8cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0084a/0084a8cc.md) · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`006a64e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a64e0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

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
      "definition_site": "006a6164",
      "incomplete_value": true,
      "site": "006a6168",
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
            "const:30:8"
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
      "definition_site": "006a6160",
      "incomplete_value": true,
      "site": "006a6168",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:38:8"
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


~~~diff
- 006a6168 ["INT_ADD", "register:40f0:8", ["const:6a6168:8", "const:4:8"]]
- 006a6168 ["CALL", null, ["callee:005c1b8c:8"]]
+ 006a6518 ["INT_ADD", "register:40f0:8", ["const:6a6518:8", "const:4:8"]]
+ 006a6518 ["CALL", null, ["callee:005c1b8c:8"]]
- 006a6130 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 006a6130 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 006a64e0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006a64e0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 006a6150 ["INT_ADD", "register:40f0:8", ["const:6a6150:8", "const:4:8"]]
- 006a6150 ["CALL", null, ["local:b0:8"]]
+ 006a6500 ["INT_ADD", "register:40f0:8", ["const:6a6500:8", "const:4:8"]]
+ 006a6500 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-a869d9c12fb86cac63a6976f0654e489"></a>

### [`006a61d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a61d0.md) → [`006a6580`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a6580.md) FUN_006a6580

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006a3e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a3/006a3e1c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`006a41cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a4/006a41cc.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a658c",
      "incomplete_value": false,
      "site": "006a6590",
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
      "definition_site": "006a61dc",
      "incomplete_value": false,
      "site": "006a61e0",
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
      "006a658c",
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
      "006a658c",
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
- 006a61e0 ["INT_ADD", "register:40f0:8", ["const:6a61e0:8", "const:4:8"]]
- 006a61e0 ["CALL", null, ["callee:0043bad8:8"]]
+ 006a6590 ["INT_ADD", "register:40f0:8", ["const:6a6590:8", "const:4:8"]]
+ 006a6590 ["CALL", null, ["callee:0043bad8:8"]]
- 006a61d8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006a6588 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 006a61dc ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 006a61dc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006a61dc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006a61dc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006a658c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006a658c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006a658c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006a658c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-47f7c9bf0d3531a750d95d5a21b178b9"></a>

### [`006a6234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6234.md) → [`006a65e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a65e4.md) FUN_006a65e4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`006a61e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a61e4.md) [`006a6234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6234.md) · 呼出先 3件 [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md) [`006a6234`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6234.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`006a6594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a6594.md) [`006a65e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a65e4.md) · 呼出先 3件 [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md) [`006a65e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a65e4.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a6600",
      "incomplete_value": true,
      "site": "006a6604",
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
      "definition_site": "006a6250",
      "incomplete_value": true,
      "site": "006a6254",
      "value": [
        "live",
        "register:4040:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  }
]
~~~


~~~diff
- 006a6254 ["INT_ADD", "register:40f0:8", ["const:6a6254:8", "const:4:8"]]
- 006a6254 ["CALL", null, ["local:b0:8"]]
+ 006a6604 ["INT_ADD", "register:40f0:8", ["const:6a6604:8", "const:4:8"]]
+ 006a6604 ["CALL", null, ["local:b0:8"]]
- 006a6234 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 006a6234 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 006a65e4 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 006a65e4 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 006a6250 ["COPY", "register:4008:8", ["register:4040:8"]]
~~~


<a id="compare-31118d70a08cce843177497883ea8f84"></a>

### [`006a6284`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6284.md) → [`006a6634`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a6634.md) _INIT_103

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.84% / 新版 76.84%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 12件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006a67ac",
      "incomplete_value": true,
      "site": "006a67bc",
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
      "definition_site": "006a67b0",
      "incomplete_value": true,
      "site": "006a67bc",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "006a6424",
      "incomplete_value": true,
      "site": "006a6434",
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
      "unmatched:006a62b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a62c0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "unmatched:006a62c8",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006a6664",
      "WRITE",
      [
        "storage",
        "Stack[-0x38]",
        null,
        null
      ]
    ],
    [
      "006a6670",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006a6678",
      "WRITE",
      [
        "storage",
        "Stack[-0xff]",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006a640c ["INT_ADD", "register:40f0:8", ["const:6a640c:8", "const:4:8"]]
- 006a640c ["CALL", null, ["callee:0043bb58:8"]]
+ 006a67bc ["INT_ADD", "register:40f0:8", ["const:6a67bc:8", "const:4:8"]]
+ 006a67bc ["CALL", null, ["callee:0043bb58:8"]]
- 006a6434 ["INT_ADD", "register:40f0:8", ["const:6a6434:8", "const:4:8"]]
- 006a6434 ["CALL", null, ["callee:0043bb58:8"]]
+ 006a67e4 ["INT_ADD", "register:40f0:8", ["const:6a67e4:8", "const:4:8"]]
+ 006a67e4 ["CALL", null, ["callee:0043bb58:8"]]
- 006a64b8 ["INT_ADD", "register:40f0:8", ["const:6a64b8:8", "const:4:8"]]
- 006a64b8 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006a6868 ["INT_ADD", "register:40f0:8", ["const:6a6868:8", "const:4:8"]]
+ 006a6868 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-2aa5cae3f2274dcae5f8d61edf3ac9ba"></a>

### [`006a6614`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6614.md) → [`006a69c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a69c4.md) FUN_006a69c4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 6件 [`00811368`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/00811368.md) [`008116c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/008116c8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00996970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00996/00996970.md) [`00b2fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fa54.md)
- 新版 呼出元 1件 [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) · 呼出先 6件 [`008122cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00812/008122cc.md) [`0081262c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00812/0081262c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0099791c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00997/0099791c.md) [`00b30a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a48.md)

変更の種類 branch_condition_or_target, call, call_count, call_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment

命令の説明率　旧版 69.05% / 新版 69.05%

優先判定に残った影響 `call_target` 9件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a6d34",
      "value": [
        "leaf",
        "ram:8122cc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a6984",
      "value": [
        "leaf",
        "ram:811368:8"
      ]
    },
    "ordinal": 20,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a6da0",
      "value": [
        "leaf",
        "ram:81262c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a69f0",
      "value": [
        "leaf",
        "ram:8116c8:8"
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
      "site": "006a6db0",
      "value": [
        "leaf",
        "ram:81262c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a6a00",
      "value": [
        "leaf",
        "ram:8116c8:8"
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
      "unmatched:006a6634",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a6bc4"
      ]
    ],
    [
      "unmatched:006a6654",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b30a48"
      ]
    ],
    [
      "unmatched:006a665c",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "008524fc"
      ]
    ]
  ],
  "added": [
    [
      "006a69e4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "006a6bc4"
      ]
    ],
    [
      "006a6a04",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b30a48"
      ]
    ],
    [
      "006a6a0c",
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
- 006a6640 ["INT_ADD", "register:40f0:8", ["const:6a6640:8", "const:4:8"]]
- 006a6640 ["CALL", null, ["callee:008524fc:8"]]
+ 006a69f0 ["INT_ADD", "register:40f0:8", ["const:6a69f0:8", "const:4:8"]]
+ 006a69f0 ["CALL", null, ["callee:008524fc:8"]]
- 006a6984 ["INT_ADD", "register:40f0:8", ["const:6a6984:8", "const:4:8"]]
- 006a6984 ["CALL", null, ["ram:811368:8"]]
+ 006a6d34 ["INT_ADD", "register:40f0:8", ["const:6a6d34:8", "const:4:8"]]
+ 006a6d34 ["CALL", null, ["ram:8122cc:8"]]
- 006a69f0 ["INT_ADD", "register:40f0:8", ["const:6a69f0:8", "const:4:8"]]
- 006a69f0 ["CALL", null, ["ram:8116c8:8"]]
+ 006a6da0 ["INT_ADD", "register:40f0:8", ["const:6a6da0:8", "const:4:8"]]
+ 006a6da0 ["CALL", null, ["ram:81262c:8"]]
~~~


<a id="compare-b67ecf41337a9154346ac7544d9b2d4a"></a>

### [`006a6aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6aac.md) → [`006a6e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a6e5c.md) FUN_006a6e5c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 3件 [`006af3f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af3f4.md) [`006af6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af6c4.md) [`006afb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afb14.md) · 呼出先 18件 [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`0052dd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0052d/0052dd40.md) [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md) [`006adf80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf80.md)
- 新版 呼出元 3件 [`006af7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006af7a4.md) [`006afa74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afa74.md) [`006afec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afec4.md) · 呼出先 18件 [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`0052e060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0052e/0052e060.md) [`005cd4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd4e0.md) [`006ae330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ae/006ae330.md)

変更の種類 call, call_target, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 93.33% / 新版 93.33%

優先判定に残った影響 `call_target` 1件, `store_value` 3件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006a6e98",
      "incomplete_value": true,
      "site": "006a6eb0",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:61c:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a6ae8",
      "incomplete_value": true,
      "site": "006a6b00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:551:8"
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
    "kind": "store_value",
    "new": {
      "definition_site": "006a6f40",
      "incomplete_value": false,
      "site": "006a6f40",
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
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a6b90",
      "incomplete_value": false,
      "site": "006a6b90",
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
            "const:ad0:8"
          ]
        ]
      ]
    },
    "ordinal": 21,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006a7028",
      "incomplete_value": false,
      "site": "006a7034",
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
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a6c78",
      "incomplete_value": false,
      "site": "006a6c84",
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
            "const:cd0:8"
          ]
        ]
      ]
    },
    "ordinal": 26,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:006a6abc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:006a6ad4",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "006a6e98",
      "READ",
      [
        "storage",
        "002a4551",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006a6e6c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "006a6e84",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "006a6e98",
      "READ",
      [
        "storage",
        "002a461c",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a6b1c ["INT_ADD", "register:40f0:8", ["const:6a6b1c:8", "const:4:8"]]
- 006a6b1c ["CALL", null, ["ram:8113c0:8"]]
+ 006a6ecc ["INT_ADD", "register:40f0:8", ["const:6a6ecc:8", "const:4:8"]]
+ 006a6ecc ["CALL", null, ["ram:812324:8"]]
- 006a6abc ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 006a6abc ["COPY", "tmp:1:8", ["register:4098:8"]]
- 006a6abc ["INT_ADD", "tmp:2:8", ["register:8:8", "const:150:8"]]
- 006a6abc ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 006a6ac0 ["COPY", "tmp:0:8", ["const:120:8"]]
- 006a6ac0 ["INT_CARRY", "register:105:1", ["register:8:8", "tmp:0:8"]]
- 006a6ac0 ["INT_SCARRY", "register:106:1", ["register:8:8", "tmp:0:8"]]
- 006a6ac0 ["INT_ADD", "tmp:1:8", ["register:8:8", "tmp:0:8"]]
~~~


<a id="compare-f35c290cd85d397af10e110398985ad0"></a>

### [`006a6e5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6e5c.md) → [`006a720c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a720c.md) FUN_006a720c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006a7518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7518.md) · 呼出先 4件 [`008116c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/008116c8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b2fa54`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b2f/00b2fa54.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 1件 [`006a78c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a78c8.md) · 呼出先 4件 [`0081262c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00812/0081262c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b30a48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b30/00b30a48.md) [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 call, call_target, comparison, comparison_count, constant, operands_and_dependencies, operation_sequence

命令の説明率　旧版 91.54% / 新版 91.54%

優先判定に残った影響 `call_target` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7350",
      "value": [
        "leaf",
        "ram:81262c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a6fa0",
      "value": [
        "leaf",
        "ram:8116c8:8"
      ]
    },
    "ordinal": 8,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7360",
      "value": [
        "leaf",
        "ram:81262c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a6fb0",
      "value": [
        "leaf",
        "ram:8116c8:8"
      ]
    },
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7374",
      "value": [
        "leaf",
        "ram:81262c:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a6fc4",
      "value": [
        "leaf",
        "ram:8116c8:8"
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
      "006a7350",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008116c8"
      ]
    ],
    [
      "006a7360",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008116c8"
      ]
    ],
    [
      "006a7374",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008116c8"
      ]
    ]
  ],
  "added": [
    [
      "006a7350",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081262c"
      ]
    ],
    [
      "006a7360",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081262c"
      ]
    ],
    [
      "006a7374",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0081262c"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a6fa0 ["INT_ADD", "register:40f0:8", ["const:6a6fa0:8", "const:4:8"]]
- 006a6fa0 ["CALL", null, ["ram:8116c8:8"]]
+ 006a7350 ["INT_ADD", "register:40f0:8", ["const:6a7350:8", "const:4:8"]]
+ 006a7350 ["CALL", null, ["ram:81262c:8"]]
- 006a6fb0 ["INT_ADD", "register:40f0:8", ["const:6a6fb0:8", "const:4:8"]]
- 006a6fb0 ["CALL", null, ["ram:8116c8:8"]]
+ 006a7360 ["INT_ADD", "register:40f0:8", ["const:6a7360:8", "const:4:8"]]
+ 006a7360 ["CALL", null, ["ram:81262c:8"]]
- 006a6fc4 ["INT_ADD", "register:40f0:8", ["const:6a6fc4:8", "const:4:8"]]
- 006a6fc4 ["CALL", null, ["ram:8116c8:8"]]
+ 006a7374 ["INT_ADD", "register:40f0:8", ["const:6a7374:8", "const:4:8"]]
+ 006a7374 ["CALL", null, ["ram:81262c:8"]]
~~~


<a id="compare-f81baf71cf0473ef30f79e8469b16160"></a>

### [`006a7064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7064.md) → [`006a7414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a7414.md) FUN_006a7414

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006afd4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afd4c.md) · 呼出先 11件 [`005cc9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc9e0.md) [`00664800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664800.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`0075b97c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075b/0075b97c.md) [`00811630`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/00811630.md)
- 新版 呼出元 1件 [`006b00fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b00fc.md) · 呼出先 11件 [`005ccd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccd90.md) [`00664bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664bb0.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md) [`0075bd2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075b/0075bd2c.md) [`00812594`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00812/00812594.md)

変更の種類 call, call_target, constant, operands_and_dependencies, unresolved_call_alignment

命令の説明率　旧版 92.86% / 新版 92.86%

優先判定に残った影響 `call_target` 12件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7510",
      "value": [
        "leaf",
        "ram:985ae8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7160",
      "value": [
        "leaf",
        "ram:984b3c:8"
      ]
    },
    "ordinal": 9,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7524",
      "value": [
        "leaf",
        "ram:812594:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7174",
      "value": [
        "leaf",
        "ram:811630:8"
      ]
    },
    "ordinal": 10,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7538",
      "value": [
        "leaf",
        "ram:812594:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a7188",
      "value": [
        "leaf",
        "ram:811630:8"
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
      "006a74c4",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[83]"
      ]
    ],
    [
      "006a7510",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00984b3c"
      ]
    ],
    [
      "006a7524",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00811630"
      ]
    ]
  ],
  "added": [
    [
      "006a74c4",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[67]"
      ]
    ],
    [
      "006a7510",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00985ae8"
      ]
    ],
    [
      "006a7524",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00812594"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a7160 ["INT_ADD", "register:40f0:8", ["const:6a7160:8", "const:4:8"]]
- 006a7160 ["CALL", null, ["ram:984b3c:8"]]
+ 006a7510 ["INT_ADD", "register:40f0:8", ["const:6a7510:8", "const:4:8"]]
+ 006a7510 ["CALL", null, ["ram:985ae8:8"]]
- 006a7174 ["INT_ADD", "register:40f0:8", ["const:6a7174:8", "const:4:8"]]
- 006a7174 ["CALL", null, ["ram:811630:8"]]
+ 006a7524 ["INT_ADD", "register:40f0:8", ["const:6a7524:8", "const:4:8"]]
+ 006a7524 ["CALL", null, ["ram:812594:8"]]
- 006a7188 ["INT_ADD", "register:40f0:8", ["const:6a7188:8", "const:4:8"]]
- 006a7188 ["CALL", null, ["ram:811630:8"]]
+ 006a7538 ["INT_ADD", "register:40f0:8", ["const:6a7538:8", "const:4:8"]]
+ 006a7538 ["CALL", null, ["ram:812594:8"]]
~~~


<a id="compare-5cf52372f53bb096eb7b46e9fa0b3022"></a>

### [`006a7518`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7518.md) → [`006a78c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a78c8.md) FUN_006a78c8

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 46件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 1件 [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 46件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.58% / 新版 94.58%

優先判定に残った影響 `call_argument_candidate` 24件, `call_target` 9件, `store_value` 12件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006a8228",
      "incomplete_value": false,
      "site": "006a8228",
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
            "const:d20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a7e78",
      "incomplete_value": false,
      "site": "006a7e78",
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
            "const:d50:8"
          ]
        ]
      ]
    },
    "ordinal": 71,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006a8378",
      "incomplete_value": false,
      "site": "006a8378",
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
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a7fc8",
      "incomplete_value": false,
      "site": "006a7fc8",
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
            "const:dd0:8"
          ]
        ]
      ]
    },
    "ordinal": 80,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006a8414",
      "incomplete_value": true,
      "site": "006a8414",
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
      "definition_site": "006a8064",
      "incomplete_value": true,
      "site": "006a8064",
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
    "ordinal": 84,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006a7930",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[83]"
      ]
    ],
    [
      "006a7964",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "dword"
      ]
    ],
    [
      "006a7a78",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00811368"
      ]
    ]
  ],
  "added": [
    [
      "006a7930",
      "DATA",
      [
        "storage",
        "003b5258",
        null,
        "byte[67]"
      ]
    ],
    [
      "006a7964",
      "DATA",
      [
        "storage",
        "003b6038",
        null,
        "byte[31]"
      ]
    ],
    [
      "006a7a78",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008122cc"
      ]
    ]
  ]
}
~~~


~~~diff
- 006a7658 ["INT_ADD", "register:40f0:8", ["const:6a7658:8", "const:4:8"]]
- 006a7658 ["CALL", null, ["callee:0099791c:8"]]
+ 006a7a08 ["INT_ADD", "register:40f0:8", ["const:6a7a08:8", "const:4:8"]]
+ 006a7a08 ["CALL", null, ["callee:0099791c:8"]]
- 006a76c8 ["INT_ADD", "register:40f0:8", ["const:6a76c8:8", "const:4:8"]]
- 006a76c8 ["CALL", null, ["ram:811368:8"]]
+ 006a7a78 ["INT_ADD", "register:40f0:8", ["const:6a7a78:8", "const:4:8"]]
+ 006a7a78 ["CALL", null, ["ram:8122cc:8"]]
- 006a78b4 ["INT_ADD", "register:40f0:8", ["const:6a78b4:8", "const:4:8"]]
- 006a78b4 ["CALL", null, ["ram:8113c0:8"]]
+ 006a7c64 ["INT_ADD", "register:40f0:8", ["const:6a7c64:8", "const:4:8"]]
+ 006a7c64 ["CALL", null, ["ram:812324:8"]]
~~~


<a id="compare-26ab3b541abab57d5d678460956c321b"></a>

### [`006a97bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a9/006a97bc.md) → [`006a9b6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a9/006a9b6c.md) FUN_006a9b6c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 16件 [`0044bb18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044b/0044bb18.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md)
- 新版 呼出元 1件 [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 16件 [`0044be38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044b/0044be38.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.38% / 新版 97.38%

優先判定に残った影響 `call_target` 3件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006a9bdc",
      "incomplete_value": true,
      "site": "006a9bdc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:2ed:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006a982c",
      "incomplete_value": true,
      "site": "006a982c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:20f:8"
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
      "site": "006a9bb0",
      "value": [
        "leaf",
        "ram:48d058:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a9800",
      "value": [
        "leaf",
        "ram:48cd38:8"
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
      "site": "006a9d10",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006a9960",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "006a9bb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048cd38"
      ]
    ],
    [
      "006a9bcc",
      "READ",
      [
        "storage",
        "002bb20f",
        null,
        "string"
      ]
    ],
    [
      "006a9d10",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006a9bb0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0048d058"
      ]
    ],
    [
      "006a9bcc",
      "READ",
      [
        "storage",
        "002bb2ed",
        null,
        "string"
      ]
    ],
    [
      "006a9d10",
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
- 006a9800 ["INT_ADD", "register:40f0:8", ["const:6a9800:8", "const:4:8"]]
- 006a9800 ["CALL", null, ["ram:48cd38:8"]]
+ 006a9bb0 ["INT_ADD", "register:40f0:8", ["const:6a9bb0:8", "const:4:8"]]
+ 006a9bb0 ["CALL", null, ["ram:48d058:8"]]
- 006a9960 ["INT_ADD", "register:40f0:8", ["const:6a9960:8", "const:4:8"]]
- 006a9960 ["CALL", null, ["ram:47ad34:8"]]
+ 006a9d10 ["INT_ADD", "register:40f0:8", ["const:6a9d10:8", "const:4:8"]]
+ 006a9d10 ["CALL", null, ["ram:47b054:8"]]
- 006a99f8 ["INT_ADD", "register:40f0:8", ["const:6a99f8:8", "const:4:8"]]
- 006a99f8 ["CALL", null, ["ram:47ad34:8"]]
+ 006a9da8 ["INT_ADD", "register:40f0:8", ["const:6a9da8:8", "const:4:8"]]
+ 006a9da8 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-fb0c32209de662464cb8bc235cf6b952"></a>

### [`006aabac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006aa/006aabac.md) → [`006aaf5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006aa/006aaf5c.md) FUN_006aaf5c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006ac970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac970.md) · 呼出先 11件 [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md)
- 新版 呼出元 1件 [`006acd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ac/006acd20.md) · 呼出先 11件 [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 76.86% / 新版 76.86%

優先判定に残った影響 `call_argument_candidate` 15件, `store_destination` 14件, `store_value` 16件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006ab018",
      "incomplete_value": true,
      "site": "006ab018",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:36e:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006aac68",
      "incomplete_value": true,
      "site": "006aac68",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:32e:8"
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
      "definition_site": "006ab030",
      "incomplete_value": true,
      "site": "006ab030",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:572:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006aac80",
      "incomplete_value": true,
      "site": "006aac80",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:528:8"
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
      "definition_site": "006ab034",
      "incomplete_value": true,
      "site": "006ab034",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006aac84",
      "incomplete_value": true,
      "site": "006aac84",
      "value": [
        "LOAD",
        "8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006aaf84",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006aaf90",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006aaf98",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006aaf84",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006aaf90",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006aaf98",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006aabf0 ["INT_ADD", "register:40f0:8", ["const:6aabf0:8", "const:4:8"]]
- 006aabf0 ["CALL", null, ["callee:00c596b0:8"]]
+ 006aafa0 ["INT_ADD", "register:40f0:8", ["const:6aafa0:8", "const:4:8"]]
+ 006aafa0 ["CALL", null, ["callee:00c596b0:8"]]
- 006aac8c ["COPY", "tmp:0:8", ["const:0:8"]]
- 006aac8c ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
- 006aac8c ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
- 006aac8c ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
+ 006ab03c ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 006ab03c ["INT_CARRY", "register:105:1", ["register:40a0:8", "tmp:0:8"]]
+ 006ab03c ["INT_SCARRY", "register:106:1", ["register:40a0:8", "tmp:0:8"]]
+ 006ab03c ["INT_ADD", "tmp:1:8", ["register:40a0:8", "tmp:0:8"]]
- 006aad34 ["COPY", "tmp:0:8", ["const:38:8"]]
- 006aad34 ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
- 006aad34 ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
- 006aad34 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
+ 006ab0e4 ["COPY", "tmp:0:8", ["const:ff8:8"]]
+ 006ab0e4 ["INT_CARRY", "register:105:1", ["register:40c0:8", "tmp:0:8"]]
+ 006ab0e4 ["INT_SCARRY", "register:106:1", ["register:40c0:8", "tmp:0:8"]]
+ 006ab0e4 ["INT_ADD", "tmp:1:8", ["register:40c0:8", "tmp:0:8"]]
~~~


<a id="compare-0e89af8933c4ee863920884b88a395f4"></a>

### [`006ac8c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac8c4.md) → [`006acc74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ac/006acc74.md) FUN_006acc74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 5件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`006c0e2c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0e2c.md) [`006c0f84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f84.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c586e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c586e0.md)
- 新版 呼出元 1件 [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) · 呼出先 5件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`006c11dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c11dc.md) [`006c1334`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c1334.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c596b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c596b0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.70% / 新版 90.70%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006acc90",
      "incomplete_value": true,
      "site": "006acc90",
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
      "definition_site": "006ac8e0",
      "incomplete_value": true,
      "site": "006ac8e0",
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
      "definition_site": "006acc98",
      "incomplete_value": false,
      "site": "006accac",
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
      "definition_site": "006ac8e8",
      "incomplete_value": false,
      "site": "006ac8fc",
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
      "definition_site": "006acca0",
      "incomplete_value": false,
      "site": "006accac",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006ac8f0",
      "incomplete_value": false,
      "site": "006ac8fc",
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
      "006acc8c",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006acc98",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006acca0",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006acc8c",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006acc98",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006acca0",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006ac8fc ["INT_ADD", "register:40f0:8", ["const:6ac8fc:8", "const:4:8"]]
- 006ac8fc ["CALL", null, ["callee:00c596b0:8"]]
+ 006accac ["INT_ADD", "register:40f0:8", ["const:6accac:8", "const:4:8"]]
+ 006accac ["CALL", null, ["callee:00c596b0:8"]]
- 006ac8d4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006acc84 ["COPY", "register:4040:8", ["const:ca5000:8"]]
- 006ac8dc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a78:8"]]
- 006ac8dc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 006acc8c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a38:8"]]
+ 006acc8c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-ba8fd16e8483e8642a7470da6a2e026f"></a>

### [`006ac970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac970.md) → [`006acd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ac/006acd20.md) FUN_006acd20

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 11件 [`0046edcc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046edcc.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) [`006a733c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a733c.md)
- 新版 呼出元 1件 [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 11件 [`0046f0ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f0ec.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`005cd0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd0f4.md) [`006a76ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a76ec.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.87% / 新版 94.87%

優先判定に残った影響 `call_target` 4件, `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006acdf0",
      "incomplete_value": true,
      "site": "006acdf8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:c0:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006aca40",
      "incomplete_value": true,
      "site": "006aca48",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:70:8"
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
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ace14",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006aca64",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006ace5c",
      "value": [
        "leaf",
        "ram:6c1340:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006acaac",
      "value": [
        "leaf",
        "ram:6c0f90:8"
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
      "006acdf0",
      "READ",
      [
        "storage",
        "002c4070",
        null,
        "undefined8"
      ]
    ],
    [
      "006ace14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006ace5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c0f90"
      ]
    ]
  ],
  "added": [
    [
      "006acdf0",
      "READ",
      [
        "storage",
        "002c40c0",
        null,
        "undefined8"
      ]
    ],
    [
      "006ace14",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006ace5c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c1340"
      ]
    ]
  ]
}
~~~


~~~diff
- 006aca64 ["INT_ADD", "register:40f0:8", ["const:6aca64:8", "const:4:8"]]
- 006aca64 ["CALL", null, ["ram:47ad34:8"]]
+ 006ace14 ["INT_ADD", "register:40f0:8", ["const:6ace14:8", "const:4:8"]]
+ 006ace14 ["CALL", null, ["ram:47b054:8"]]
- 006acaac ["INT_ADD", "register:40f0:8", ["const:6acaac:8", "const:4:8"]]
- 006acaac ["CALL", null, ["ram:6c0f90:8"]]
+ 006ace5c ["INT_ADD", "register:40f0:8", ["const:6ace5c:8", "const:4:8"]]
+ 006ace5c ["CALL", null, ["ram:6c1340:8"]]
- 006acb00 ["INT_ADD", "register:40f0:8", ["const:6acb00:8", "const:4:8"]]
- 006acb00 ["CALL", null, ["ram:6ab3dc:8"]]
+ 006aceb0 ["INT_ADD", "register:40f0:8", ["const:6aceb0:8", "const:4:8"]]
+ 006aceb0 ["CALL", null, ["ram:6ab78c:8"]]
~~~


<a id="compare-64fc75d70f24d8c468b21b37a8090ed7"></a>

### [`006acb44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006acb44.md) → [`006acef4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ac/006acef4.md) FUN_006acef4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 21件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b30.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`004688f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/004688f8.md)
- 新版 呼出元 1件 [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) · 呼出先 21件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e50.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468c18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468c18.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.30% / 新版 99.30%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006acf2c",
      "incomplete_value": true,
      "site": "006acf2c",
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
      "definition_site": "006acb7c",
      "incomplete_value": true,
      "site": "006acb7c",
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
      "definition_site": "006acf34",
      "incomplete_value": false,
      "site": "006acf48",
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
      "definition_site": "006acb84",
      "incomplete_value": false,
      "site": "006acb98",
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
      "definition_site": "006acf3c",
      "incomplete_value": false,
      "site": "006acf48",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006acb8c",
      "incomplete_value": false,
      "site": "006acb98",
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
      "006acf28",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006acf34",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006acf3c",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006acf28",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006acf34",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006acf3c",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006acb98 ["INT_ADD", "register:40f0:8", ["const:6acb98:8", "const:4:8"]]
- 006acb98 ["CALL", null, ["callee:00c596b0:8"]]
+ 006acf48 ["INT_ADD", "register:40f0:8", ["const:6acf48:8", "const:4:8"]]
+ 006acf48 ["CALL", null, ["callee:00c596b0:8"]]
- 006acf2c ["INT_ADD", "register:40f0:8", ["const:6acf2c:8", "const:4:8"]]
- 006acf2c ["CALL", null, ["callee:008524fc:8"]]
+ 006ad2dc ["INT_ADD", "register:40f0:8", ["const:6ad2dc:8", "const:4:8"]]
+ 006ad2dc ["CALL", null, ["callee:008524fc:8"]]
- 006acb74 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006acf24 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-5e62918dc7579ace7301660acead65d0"></a>

### [`006adf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf30.md) → [`006ae2e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ae/006ae2e0.md) FUN_006ae2e0

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
      "definition_site": "006ae300",
      "incomplete_value": false,
      "site": "006ae304",
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
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006adf50",
      "incomplete_value": false,
      "site": "006adf54",
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
            "const:ad0:8"
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
      "006ae304",
      "DATA",
      [
        "storage",
        "00c75ad0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ae304",
      "DATA",
      [
        "storage",
        "00c76aa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006adf44 ["INT_ADD", "register:40f0:8", ["const:6adf44:8", "const:4:8"]]
- 006adf44 ["CALL", null, ["callee:00c58f30:8"]]
+ 006ae2f4 ["INT_ADD", "register:40f0:8", ["const:6ae2f4:8", "const:4:8"]]
+ 006ae2f4 ["CALL", null, ["callee:00c58f30:8"]]
- 006adf4c ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006ae2fc ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006adf50 ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 006adf50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006adf50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006adf50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ae300 ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 006ae300 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ae300 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ae300 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f28c08f5366e46612b0cc35d236cbc3d"></a>

### [`006adf68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ad/006adf68.md) → [`006ae318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ae/006ae318.md) FUN_006ae318

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
      "definition_site": "006ae31c",
      "incomplete_value": false,
      "site": "006ae320",
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
            "const:aa0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006adf6c",
      "incomplete_value": false,
      "site": "006adf70",
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
      "006ae320",
      "DATA",
      [
        "storage",
        "00c75ad0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006ae320",
      "DATA",
      [
        "storage",
        "00c76aa0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006adf68 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006ae318 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006adf6c ["COPY", "tmp:0:8", ["const:ad0:8"]]
- 006adf6c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006adf6c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006adf6c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006ae31c ["COPY", "tmp:0:8", ["const:aa0:8"]]
+ 006ae31c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006ae31c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006ae31c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-98f39f48a852820ca3305f825bc67a00"></a>

### [`006af39c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af39c.md) → [`006af74c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006af74c.md) FUN_006af74c

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
      "definition_site": "006af76c",
      "incomplete_value": false,
      "site": "006af770",
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
            "const:b10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af3bc",
      "incomplete_value": false,
      "site": "006af3c0",
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
            "const:b40:8"
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
      "006af770",
      "DATA",
      [
        "storage",
        "00c75b40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af770",
      "DATA",
      [
        "storage",
        "00c76b10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af3b0 ["INT_ADD", "register:40f0:8", ["const:6af3b0:8", "const:4:8"]]
- 006af3b0 ["CALL", null, ["callee:00c58f30:8"]]
+ 006af760 ["INT_ADD", "register:40f0:8", ["const:6af760:8", "const:4:8"]]
+ 006af760 ["CALL", null, ["callee:00c58f30:8"]]
- 006af3b8 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006af768 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006af3bc ["COPY", "tmp:0:8", ["const:b40:8"]]
- 006af3bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af3bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af3bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006af76c ["COPY", "tmp:0:8", ["const:b10:8"]]
+ 006af76c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006af76c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006af76c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-253f77f1b3ab6a70043b9baf021df16e"></a>

### [`006af3f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af3f4.md) → [`006af7a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006af7a4.md) FUN_006af7a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 9件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006a6aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6aac.md) [`006af5d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af5d8.md) [`006af5dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af5dc.md)
- 新版 呼出元 0件  · 呼出先 9件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006a6e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a6e5c.md) [`006af988`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006af988.md) [`006af98c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006af98c.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.89% / 新版 95.89%

優先判定に残った影響 `call_target` 1件, `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006af834",
      "incomplete_value": false,
      "site": "006af834",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af484",
      "incomplete_value": false,
      "site": "006af484",
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
            "const:bb0:8"
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006af7e0",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006af430",
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
      "006af7e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006af834",
      "DATA",
      [
        "storage",
        "00c75bb0",
        null,
        "undefined *"
      ]
    ],
    [
      "006af89c",
      "READ",
      [
        "storage",
        "00c75bd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006af7e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006af834",
      "DATA",
      [
        "storage",
        "00c76b80",
        null,
        "undefined *"
      ]
    ],
    [
      "006af89c",
      "READ",
      [
        "storage",
        "00c76ba0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af430 ["INT_ADD", "register:40f0:8", ["const:6af430:8", "const:4:8"]]
- 006af430 ["CALL", null, ["ram:47ad34:8"]]
+ 006af7e0 ["INT_ADD", "register:40f0:8", ["const:6af7e0:8", "const:4:8"]]
+ 006af7e0 ["CALL", null, ["ram:47b054:8"]]
- 006af43c ["INT_ADD", "register:40f0:8", ["const:6af43c:8", "const:4:8"]]
- 006af43c ["CALL", null, ["callee:0047d134:8"]]
+ 006af7ec ["INT_ADD", "register:40f0:8", ["const:6af7ec:8", "const:4:8"]]
+ 006af7ec ["CALL", null, ["callee:0047d134:8"]]
- 006af478 ["INT_ADD", "register:40f0:8", ["const:6af478:8", "const:4:8"]]
- 006af478 ["CALL", null, ["callee:008524fc:8"]]
+ 006af828 ["INT_ADD", "register:40f0:8", ["const:6af828:8", "const:4:8"]]
+ 006af828 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-52f74cae2b176518fa638870c11d77af"></a>

### [`006af590`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af590.md) → [`006af940`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006af940.md) FUN_006af940

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
      "definition_site": "006af964",
      "incomplete_value": false,
      "site": "006af964",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af5b4",
      "incomplete_value": false,
      "site": "006af5b4",
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
            "const:bb0:8"
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
      "006af964",
      "DATA",
      [
        "storage",
        "00c75bb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af964",
      "DATA",
      [
        "storage",
        "00c76b80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af5a4 ["INT_ADD", "register:40f0:8", ["const:6af5a4:8", "const:4:8"]]
- 006af5a4 ["CALL", null, ["callee:00c58f30:8"]]
+ 006af954 ["INT_ADD", "register:40f0:8", ["const:6af954:8", "const:4:8"]]
+ 006af954 ["CALL", null, ["callee:00c58f30:8"]]
- 006af5ac ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006af95c ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006af5b0 ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 006af5b0 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af5b0 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af5b0 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006af960 ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 006af960 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006af960 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006af960 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-0b178d225f55921223f8492042657ff1"></a>

### [`006af5c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af5c4.md) → [`006af974`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006af974.md) FUN_006af974

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
      "definition_site": "006af980",
      "incomplete_value": false,
      "site": "006af980",
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
            "const:b80:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af5d0",
      "incomplete_value": false,
      "site": "006af5d0",
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
      "006af980",
      "DATA",
      [
        "storage",
        "00c75bb0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006af980",
      "DATA",
      [
        "storage",
        "00c76b80",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af5c8 ["COPY", "register:4048:8", ["const:c75000:8"]]
+ 006af978 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 006af5cc ["COPY", "tmp:0:8", ["const:bb0:8"]]
- 006af5cc ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006af5cc ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006af5cc ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006af97c ["COPY", "tmp:0:8", ["const:b80:8"]]
+ 006af97c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006af97c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006af97c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9e0a02576ec081b95d32b20bd4fd9d33"></a>

### [`006af66c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af66c.md) → [`006afa1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afa1c.md) FUN_006afa1c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006afa3c",
      "incomplete_value": true,
      "site": "006afa40",
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
            "const:c10:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af68c",
      "incomplete_value": true,
      "site": "006af690",
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
            "const:c40:8"
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
      "006afa40",
      "DATA",
      [
        "storage",
        "00c75c40",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afa40",
      "DATA",
      [
        "storage",
        "00c76c10",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af680 ["INT_ADD", "register:40f0:8", ["const:6af680:8", "const:4:8"]]
- 006af680 ["CALL", null, ["callee:00c58f30:8"]]
+ 006afa30 ["INT_ADD", "register:40f0:8", ["const:6afa30:8", "const:4:8"]]
+ 006afa30 ["CALL", null, ["callee:00c58f30:8"]]
- 006af688 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006afa38 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006af68c ["COPY", "tmp:0:8", ["const:c40:8"]]
- 006af68c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af68c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af68c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006afa3c ["COPY", "tmp:0:8", ["const:c10:8"]]
+ 006afa3c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006afa3c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006afa3c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-ca3d93bc9b5c95334c599b0a9692bd6e"></a>

### [`006af6c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af6c4.md) → [`006afa74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afa74.md) FUN_006afa74

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006a6aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6aac.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 4件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006a6e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a6e5c.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

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
      "site": "006afa9c",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006af6ec",
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
      "006afa9c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006afa9c",
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
- 006af6ec ["INT_ADD", "register:40f0:8", ["const:6af6ec:8", "const:4:8"]]
- 006af6ec ["CALL", null, ["ram:47ad34:8"]]
+ 006afa9c ["INT_ADD", "register:40f0:8", ["const:6afa9c:8", "const:4:8"]]
+ 006afa9c ["CALL", null, ["ram:47b054:8"]]
- 006af6f8 ["INT_ADD", "register:40f0:8", ["const:6af6f8:8", "const:4:8"]]
- 006af6f8 ["CALL", null, ["callee:0047d134:8"]]
+ 006afaa8 ["INT_ADD", "register:40f0:8", ["const:6afaa8:8", "const:4:8"]]
+ 006afaa8 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-b3405ca071cd1811dae1c29a11fc06bd"></a>

### [`006af750`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af750.md) → [`006afb00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afb00.md) FUN_006afb00

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
      "definition_site": "006afb24",
      "incomplete_value": false,
      "site": "006afb24",
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
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af774",
      "incomplete_value": false,
      "site": "006af774",
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
            "const:cd0:8"
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
      "006afb24",
      "DATA",
      [
        "storage",
        "00c75cd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afb24",
      "DATA",
      [
        "storage",
        "00c76ca0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af764 ["INT_ADD", "register:40f0:8", ["const:6af764:8", "const:4:8"]]
- 006af764 ["CALL", null, ["callee:00c58f30:8"]]
+ 006afb14 ["INT_ADD", "register:40f0:8", ["const:6afb14:8", "const:4:8"]]
+ 006afb14 ["CALL", null, ["callee:00c58f30:8"]]
- 006af76c ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006afb1c ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006af770 ["COPY", "tmp:0:8", ["const:cd0:8"]]
- 006af770 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006af770 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006af770 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006afb20 ["COPY", "tmp:0:8", ["const:ca0:8"]]
+ 006afb20 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006afb20 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006afb20 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-88e7971e273b482d43d4245f8bd9586c"></a>

### [`006af784`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af784.md) → [`006afb34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afb34.md) FUN_006afb34

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
      "definition_site": "006afb40",
      "incomplete_value": false,
      "site": "006afb40",
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
            "const:ca0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af790",
      "incomplete_value": false,
      "site": "006af790",
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
            "const:cd0:8"
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
      "006afb40",
      "DATA",
      [
        "storage",
        "00c75cd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afb40",
      "DATA",
      [
        "storage",
        "00c76ca0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af788 ["COPY", "register:4048:8", ["const:c75000:8"]]
+ 006afb38 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 006af78c ["COPY", "tmp:0:8", ["const:cd0:8"]]
- 006af78c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006af78c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006af78c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006afb3c ["COPY", "tmp:0:8", ["const:ca0:8"]]
+ 006afb3c ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006afb3c ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006afb3c ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-bdc6b25d98b64c80244256677080af8f"></a>

### [`006af7a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006af7a0.md) → [`006afb50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afb50.md) FUN_006afb50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 9件 [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00469c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469c44.md) [`00489f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00489/00489f8c.md) [`008b92e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b92e8.md) [`008b9344`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b9344.md)
- 新版 呼出元 0件  · 呼出先 9件 [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00469f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/00469f64.md) [`0048a2ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048a/0048a2ac.md) [`008ba294`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba294.md) [`008ba2f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba2f0.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.94% / 新版 98.94%

優先判定に残った影響 `call_argument_candidate` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006afb9c",
      "incomplete_value": true,
      "site": "006afb9c",
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
      "definition_site": "006af7ec",
      "incomplete_value": true,
      "site": "006af7ec",
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
      "definition_site": "006afba4",
      "incomplete_value": false,
      "site": "006afbb4",
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
      "definition_site": "006af7f4",
      "incomplete_value": false,
      "site": "006af804",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006afbac",
      "incomplete_value": false,
      "site": "006afbb4",
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
            "const:260:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006af7fc",
      "incomplete_value": false,
      "site": "006af804",
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
      "006afb98",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006afba4",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006afbac",
      "PARAM",
      [
        "storage",
        "00c71290",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ],
  "added": [
    [
      "006afb98",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006afba4",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006afbac",
      "PARAM",
      [
        "storage",
        "00c72260",
        null,
        "pointer __((offset(0x10)))"
      ]
    ]
  ]
}
~~~


~~~diff
- 006af804 ["INT_ADD", "register:40f0:8", ["const:6af804:8", "const:4:8"]]
- 006af804 ["CALL", null, ["callee:00c596b0:8"]]
+ 006afbb4 ["INT_ADD", "register:40f0:8", ["const:6afbb4:8", "const:4:8"]]
+ 006afbb4 ["CALL", null, ["callee:00c596b0:8"]]
- 006af7c8 ["INT_ADD", "register:40f0:8", ["const:6af7c8:8", "const:4:8"]]
- 006af7c8 ["CALL", null, ["callee:008ba294:8"]]
+ 006afb78 ["INT_ADD", "register:40f0:8", ["const:6afb78:8", "const:4:8"]]
+ 006afb78 ["CALL", null, ["callee:008ba294:8"]]
- 006af7d8 ["INT_ADD", "register:40f0:8", ["const:6af7d8:8", "const:4:8"]]
- 006af7d8 ["CALL", null, ["callee:008ba294:8"]]
+ 006afb88 ["INT_ADD", "register:40f0:8", ["const:6afb88:8", "const:4:8"]]
+ 006afb88 ["CALL", null, ["callee:008ba294:8"]]
~~~


<a id="compare-a448914ee27cfaf286498ca79e643c58"></a>

### [`006afabc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afabc.md) → [`006afe6c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afe6c.md) FUN_006afe6c

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
      "definition_site": "006afe8c",
      "incomplete_value": false,
      "site": "006afe90",
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
            "const:d20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afadc",
      "incomplete_value": false,
      "site": "006afae0",
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
            "const:d50:8"
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
      "006afe90",
      "DATA",
      [
        "storage",
        "00c75d50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afe90",
      "DATA",
      [
        "storage",
        "00c76d20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afad0 ["INT_ADD", "register:40f0:8", ["const:6afad0:8", "const:4:8"]]
- 006afad0 ["CALL", null, ["callee:00c58f30:8"]]
+ 006afe80 ["INT_ADD", "register:40f0:8", ["const:6afe80:8", "const:4:8"]]
+ 006afe80 ["CALL", null, ["callee:00c58f30:8"]]
- 006afad8 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006afe88 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006afadc ["COPY", "tmp:0:8", ["const:d50:8"]]
- 006afadc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006afadc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006afadc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006afe8c ["COPY", "tmp:0:8", ["const:d20:8"]]
+ 006afe8c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006afe8c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006afe8c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-816b595d73d03a9077e8deae27ac68a5"></a>

### [`006afaf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afaf4.md) → [`006afea4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afea4.md) FUN_006afea4

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
      "definition_site": "006afea8",
      "incomplete_value": false,
      "site": "006afeac",
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
            "const:d20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afaf8",
      "incomplete_value": false,
      "site": "006afafc",
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
            "const:d50:8"
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
      "006afeac",
      "DATA",
      [
        "storage",
        "00c75d50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afeac",
      "DATA",
      [
        "storage",
        "00c76d20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afaf4 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006afea4 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006afaf8 ["COPY", "tmp:0:8", ["const:d50:8"]]
- 006afaf8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006afaf8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006afaf8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006afea8 ["COPY", "tmp:0:8", ["const:d20:8"]]
+ 006afea8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006afea8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006afea8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-39cefc8bf3f7cc7f2f6f7d14517408b6"></a>

### [`006afb14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afb14.md) → [`006afec4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006afec4.md) FUN_006afec4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 6件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006a6aac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a6/006a6aac.md) [`008113c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00811/008113c0.md) [`00ab0a64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ab0/00ab0a64.md)
- 新版 呼出元 0件  · 呼出先 6件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006a6e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a6/006a6e5c.md) [`00812324`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00812/00812324.md) [`00ab1a58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ab1/00ab1a58.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 94.83% / 新版 94.83%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afefc",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afb4c",
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
      "site": "006aff18",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afb68",
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
      "site": "006aff60",
      "value": [
        "leaf",
        "ram:812324:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afbb0",
      "value": [
        "leaf",
        "ram:8113c0:8"
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
      "006afefc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006aff18",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006aff60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "008113c0"
      ]
    ]
  ],
  "added": [
    [
      "006afefc",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006aff18",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006aff60",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00812324"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afb4c ["INT_ADD", "register:40f0:8", ["const:6afb4c:8", "const:4:8"]]
- 006afb4c ["CALL", null, ["ram:47ad34:8"]]
+ 006afefc ["INT_ADD", "register:40f0:8", ["const:6afefc:8", "const:4:8"]]
+ 006afefc ["CALL", null, ["ram:47b054:8"]]
- 006afb68 ["INT_ADD", "register:40f0:8", ["const:6afb68:8", "const:4:8"]]
- 006afb68 ["CALL", null, ["ram:47ad34:8"]]
+ 006aff18 ["INT_ADD", "register:40f0:8", ["const:6aff18:8", "const:4:8"]]
+ 006aff18 ["CALL", null, ["ram:47b054:8"]]
- 006afbb0 ["INT_ADD", "register:40f0:8", ["const:6afbb0:8", "const:4:8"]]
- 006afbb0 ["CALL", null, ["ram:8113c0:8"]]
+ 006aff60 ["INT_ADD", "register:40f0:8", ["const:6aff60:8", "const:4:8"]]
+ 006aff60 ["CALL", null, ["ram:812324:8"]]
~~~


<a id="compare-c4f4c700f8c5a423179160e541977605"></a>

### [`006afc28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afc28.md) → [`006affd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006af/006affd8.md) FUN_006affd8

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
      "definition_site": "006afffc",
      "incomplete_value": false,
      "site": "006afffc",
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
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afc4c",
      "incomplete_value": false,
      "site": "006afc4c",
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
            "const:dd0:8"
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
      "006afffc",
      "DATA",
      [
        "storage",
        "00c75dd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006afffc",
      "DATA",
      [
        "storage",
        "00c76da0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afc3c ["INT_ADD", "register:40f0:8", ["const:6afc3c:8", "const:4:8"]]
- 006afc3c ["CALL", null, ["callee:00c58f30:8"]]
+ 006affec ["INT_ADD", "register:40f0:8", ["const:6affec:8", "const:4:8"]]
+ 006affec ["CALL", null, ["callee:00c58f30:8"]]
- 006afc44 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006afff4 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006afc48 ["COPY", "tmp:0:8", ["const:dd0:8"]]
- 006afc48 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006afc48 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006afc48 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006afff8 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 006afff8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006afff8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006afff8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-439553ac7f32a2279265e8fd0741a833"></a>

### [`006afc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afc5c.md) → [`006b000c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b000c.md) FUN_006b000c

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
      "definition_site": "006b0018",
      "incomplete_value": false,
      "site": "006b0018",
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
            "const:da0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afc68",
      "incomplete_value": false,
      "site": "006afc68",
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
            "const:dd0:8"
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
      "006b0018",
      "DATA",
      [
        "storage",
        "00c75dd0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b0018",
      "DATA",
      [
        "storage",
        "00c76da0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afc60 ["COPY", "register:4048:8", ["const:c75000:8"]]
+ 006b0010 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 006afc64 ["COPY", "tmp:0:8", ["const:dd0:8"]]
- 006afc64 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006afc64 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006afc64 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006b0014 ["COPY", "tmp:0:8", ["const:da0:8"]]
+ 006b0014 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006b0014 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006b0014 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-d58684a84e162830dfd5acef986454a1"></a>

### [`006afc78`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afc78.md) → [`006b0028`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b0028.md) FUN_006b0028

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006a733c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a733c.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006a76ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a76ec.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_target` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b0048",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afc98",
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
      "site": "006b0054",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006afca4",
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
      "006b0048",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006b0054",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006b0048",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006b0054",
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
- 006afc98 ["INT_ADD", "register:40f0:8", ["const:6afc98:8", "const:4:8"]]
- 006afc98 ["CALL", null, ["ram:47ad34:8"]]
+ 006b0048 ["INT_ADD", "register:40f0:8", ["const:6b0048:8", "const:4:8"]]
+ 006b0048 ["CALL", null, ["ram:47b054:8"]]
- 006afca4 ["INT_ADD", "register:40f0:8", ["const:6afca4:8", "const:4:8"]]
- 006afca4 ["CALL", null, ["ram:47ad34:8"]]
+ 006b0054 ["INT_ADD", "register:40f0:8", ["const:6b0054:8", "const:4:8"]]
+ 006b0054 ["CALL", null, ["ram:47b054:8"]]
~~~


<a id="compare-96d02d77c8e1cce1dac3a1c13c3a8aaa"></a>

### [`006afcfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afcfc.md) → [`006b00ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b00ac.md) FUN_006b00ac

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
      "definition_site": "006b00d0",
      "incomplete_value": false,
      "site": "006b00d0",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afd20",
      "incomplete_value": false,
      "site": "006afd20",
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
            "const:e50:8"
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
      "006b00d0",
      "DATA",
      [
        "storage",
        "00c75e50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b00d0",
      "DATA",
      [
        "storage",
        "00c76e20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afd10 ["INT_ADD", "register:40f0:8", ["const:6afd10:8", "const:4:8"]]
- 006afd10 ["CALL", null, ["callee:00c58f30:8"]]
+ 006b00c0 ["INT_ADD", "register:40f0:8", ["const:6b00c0:8", "const:4:8"]]
+ 006b00c0 ["CALL", null, ["callee:00c58f30:8"]]
- 006afd18 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006b00c8 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006afd1c ["COPY", "tmp:0:8", ["const:e50:8"]]
- 006afd1c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006afd1c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006afd1c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b00cc ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 006b00cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b00cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b00cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7584ddb2afef570da2bf932e495f4b23"></a>

### [`006afd30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006afd30.md) → [`006b00e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b00e0.md) FUN_006b00e0

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
      "definition_site": "006b00ec",
      "incomplete_value": false,
      "site": "006b00ec",
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
            "const:e20:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006afd3c",
      "incomplete_value": false,
      "site": "006afd3c",
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
            "const:e50:8"
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
      "006b00ec",
      "DATA",
      [
        "storage",
        "00c75e50",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b00ec",
      "DATA",
      [
        "storage",
        "00c76e20",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006afd34 ["COPY", "register:4048:8", ["const:c75000:8"]]
+ 006b00e4 ["COPY", "register:4048:8", ["const:c76000:8"]]
- 006afd38 ["COPY", "tmp:0:8", ["const:e50:8"]]
- 006afd38 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
- 006afd38 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
- 006afd38 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
+ 006b00e8 ["COPY", "tmp:0:8", ["const:e20:8"]]
+ 006b00e8 ["INT_CARRY", "register:105:1", ["register:4048:8", "tmp:0:8"]]
+ 006b00e8 ["INT_SCARRY", "register:106:1", ["register:4048:8", "tmp:0:8"]]
+ 006b00e8 ["INT_ADD", "tmp:1:8", ["register:4048:8", "tmp:0:8"]]
~~~


<a id="compare-9f3391dc40b01770578d6f0451bf1ed0"></a>

### [`006aff00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006af/006aff00.md) → [`006b02b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b02b0.md) _INIT_104

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
      "definition_site": "006b02ec",
      "incomplete_value": true,
      "site": "006b0308",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006aff3c",
      "incomplete_value": true,
      "site": "006aff58",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006b0310",
      "incomplete_value": true,
      "site": "006b032c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006aff60",
      "incomplete_value": true,
      "site": "006aff7c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006b0330",
      "incomplete_value": true,
      "site": "006b034c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006aff80",
      "incomplete_value": true,
      "site": "006aff9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "006b02ec",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006b0310",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006b0330",
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
      "006b02ec",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006b0310",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "006b0330",
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
- 006b0060 ["INT_ADD", "register:40f0:8", ["const:6b0060:8", "const:4:8"]]
- 006b0060 ["CALL", null, ["callee:0043bb58:8"]]
+ 006b0410 ["INT_ADD", "register:40f0:8", ["const:6b0410:8", "const:4:8"]]
+ 006b0410 ["CALL", null, ["callee:0043bb58:8"]]
- 006b0134 ["INT_ADD", "register:40f0:8", ["const:6b0134:8", "const:4:8"]]
- 006b0134 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006b04e4 ["INT_ADD", "register:40f0:8", ["const:6b04e4:8", "const:4:8"]]
+ 006b04e4 ["CALL", null, ["callee:00c58ed0:8"]]
- 006aff28 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 006b02d8 ["COPY", "register:4098:8", ["const:ca8000:8"]]
~~~


<a id="compare-6242c7631bcaab43538df103c88209c8"></a>

### [`006b0290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b0/006b0290.md) → [`006b0640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b0/006b0640.md) FUN_006b0640

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) · 呼出先 23件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00447734`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447734.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 1件 [`006b3c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3c14.md) · 呼出先 23件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00447a54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00447/00447a54.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 84.97% / 新版 84.97%

優先判定に残った影響 `call_argument_candidate` 64件, `store_destination` 7件, `store_value` 43件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006b0688",
      "incomplete_value": false,
      "site": "006b069c",
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
            "const:ea0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b02d8",
      "incomplete_value": false,
      "site": "006b02ec",
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
            "const:ed0:8"
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
      "definition_site": "006b06dc",
      "incomplete_value": true,
      "site": "006b06dc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:49d:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b032c",
      "incomplete_value": true,
      "site": "006b032c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3ce:8"
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
      "definition_site": "006b06f8",
      "incomplete_value": true,
      "site": "006b06f8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f91:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b0348",
      "incomplete_value": true,
      "site": "006b0348",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f47:8"
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
      "006b069c",
      "DATA",
      [
        "storage",
        "00c75ed0",
        null,
        "pointer"
      ]
    ],
    [
      "006b06b4",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006b06c8",
      "READ",
      [
        "storage",
        "002b63ce",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006b069c",
      "DATA",
      [
        "storage",
        "00c76ea0",
        null,
        "pointer"
      ]
    ],
    [
      "006b06b4",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "006b06c8",
      "READ",
      [
        "storage",
        "002b649d",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b069c ["INT_ADD", "register:40f0:8", ["const:6b069c:8", "const:4:8"]]
- 006b069c ["CALL", null, ["callee:00c58f50:8"]]
+ 006b0a4c ["INT_ADD", "register:40f0:8", ["const:6b0a4c:8", "const:4:8"]]
+ 006b0a4c ["CALL", null, ["callee:00c58f50:8"]]
- 006b0740 ["INT_ADD", "register:40f0:8", ["const:6b0740:8", "const:4:8"]]
- 006b0740 ["CALL", null, ["callee:00c54d90:8"]]
+ 006b0af0 ["INT_ADD", "register:40f0:8", ["const:6b0af0:8", "const:4:8"]]
+ 006b0af0 ["CALL", null, ["callee:00c54d90:8"]]
- 006b0908 ["INT_ADD", "register:40f0:8", ["const:6b0908:8", "const:4:8"]]
- 006b0908 ["CALL", null, ["callee:00447a54:8"]]
+ 006b0cb8 ["INT_ADD", "register:40f0:8", ["const:6b0cb8:8", "const:4:8"]]
+ 006b0cb8 ["CALL", null, ["callee:00447a54:8"]]
~~~


<a id="compare-bf8da0185dcf150900554db02c5f8493"></a>

### [`006b2a00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2a00.md) → [`006b2db0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2db0.md) FUN_006b2db0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) · 呼出先 10件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0064e580`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064e580.md) [`006f16e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f1/006f16e0.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006b3c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3c14.md) · 呼出先 10件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0064e930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064e/0064e930.md) [`006f1a90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f1/006f1a90.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

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
      "site": "006b2e08",
      "value": [
        "leaf",
        "ram:6f1a90:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b2a58",
      "value": [
        "leaf",
        "ram:6f16e0:8"
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
      "006b2e08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f16e0"
      ]
    ]
  ],
  "added": [
    [
      "006b2e08",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f1a90"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b2a58 ["INT_ADD", "register:40f0:8", ["const:6b2a58:8", "const:4:8"]]
- 006b2a58 ["CALL", null, ["ram:6f16e0:8"]]
+ 006b2e08 ["INT_ADD", "register:40f0:8", ["const:6b2e08:8", "const:4:8"]]
+ 006b2e08 ["CALL", null, ["ram:6f1a90:8"]]
- 006b2a18 ["INT_ADD", "register:40f0:8", ["const:6b2a18:8", "const:4:8"]]
- 006b2a18 ["CALL", null, ["callee:008524fc:8"]]
+ 006b2dc8 ["INT_ADD", "register:40f0:8", ["const:6b2dc8:8", "const:4:8"]]
+ 006b2dc8 ["CALL", null, ["callee:008524fc:8"]]
- 006b2a24 ["INT_ADD", "register:40f0:8", ["const:6b2a24:8", "const:4:8"]]
- 006b2a24 ["CALL", null, ["callee:00ac969c:8"]]
+ 006b2dd4 ["INT_ADD", "register:40f0:8", ["const:6b2dd4:8", "const:4:8"]]
+ 006b2dd4 ["CALL", null, ["callee:00ac969c:8"]]
~~~


<a id="compare-e2a6d60f4dafaba82d45dabc141dde92"></a>

### [`006b2bb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b2bb4.md) → [`006b2f64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b2f64.md) FUN_006b2f64

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b3bfc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3bfc.md) · 呼出先 24件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046d7f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d7f0.md) [`0046da24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da24.md) [`0046da88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da88.md) [`0046ee44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046e/0046ee44.md)
- 新版 呼出元 1件 [`006b3fac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3fac.md) · 呼出先 24件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046db10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046db10.md) [`0046dd44`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dd44.md) [`0046dda8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046dda8.md) [`0046f164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046f/0046f164.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.49% / 新版 99.49%

優先判定に残った影響 `call_target` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b357c",
      "value": [
        "leaf",
        "ram:6c1340:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b31cc",
      "value": [
        "leaf",
        "ram:6c0f90:8"
      ]
    },
    "ordinal": 96,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b3628",
      "value": [
        "leaf",
        "ram:6f28dc:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b3278",
      "value": [
        "leaf",
        "ram:6f252c:8"
      ]
    },
    "ordinal": 108,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b366c",
      "value": [
        "leaf",
        "ram:64f0a8:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b32bc",
      "value": [
        "leaf",
        "ram:64ecf8:8"
      ]
    },
    "ordinal": 111,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006b357c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c0f90"
      ]
    ],
    [
      "006b3628",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f252c"
      ]
    ],
    [
      "006b366c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0064ecf8"
      ]
    ]
  ],
  "added": [
    [
      "006b357c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c1340"
      ]
    ],
    [
      "006b3628",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006f28dc"
      ]
    ],
    [
      "006b366c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0064f0a8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b2ec8 ["INT_ADD", "register:40f0:8", ["const:6b2ec8:8", "const:4:8"]]
- 006b2ec8 ["CALL", null, ["callee:008524fc:8"]]
+ 006b3278 ["INT_ADD", "register:40f0:8", ["const:6b3278:8", "const:4:8"]]
+ 006b3278 ["CALL", null, ["callee:008524fc:8"]]
- 006b31cc ["INT_ADD", "register:40f0:8", ["const:6b31cc:8", "const:4:8"]]
- 006b31cc ["CALL", null, ["ram:6c0f90:8"]]
+ 006b357c ["INT_ADD", "register:40f0:8", ["const:6b357c:8", "const:4:8"]]
+ 006b357c ["CALL", null, ["ram:6c1340:8"]]
- 006b3278 ["INT_ADD", "register:40f0:8", ["const:6b3278:8", "const:4:8"]]
- 006b3278 ["CALL", null, ["ram:6f252c:8"]]
+ 006b3628 ["INT_ADD", "register:40f0:8", ["const:6b3628:8", "const:4:8"]]
+ 006b3628 ["CALL", null, ["ram:6f28dc:8"]]
~~~


<a id="compare-a476fd4a01d3b02eecf355ee6378224e"></a>

### [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) → [`006b3888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3888.md) FUN_006b3888

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b545c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b5/006b545c.md) · 呼出先 20件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md) [`00468ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468ca0.md) [`00468fc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468fc8.md)
- 新版 呼出元 1件 [`006b580c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b5/006b580c.md) · 呼出先 20件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md) [`00468fc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468fc0.md) [`004692e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004692e8.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies

命令の説明率　旧版 97.80% / 新版 97.80%

優先判定に残った影響 `branch_value` 1件, `call_argument_candidate` 2件, `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "branch_value",
    "new": {
      "definition_site": "006b38b0",
      "incomplete_value": true,
      "site": "006b38b0",
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
      "definition_site": "006b3500",
      "incomplete_value": true,
      "site": "006b3500",
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
      "definition_site": "006b38b8",
      "incomplete_value": false,
      "site": "006b38cc",
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
      "definition_site": "006b3508",
      "incomplete_value": false,
      "site": "006b351c",
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
      "definition_site": "006b38c0",
      "incomplete_value": false,
      "site": "006b38cc",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b3510",
      "incomplete_value": false,
      "site": "006b351c",
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
      "006b38ac",
      "READ",
      [
        "storage",
        "00ca4a78",
        null,
        "undefined8"
      ]
    ],
    [
      "006b38b8",
      "PARAM",
      [
        "storage",
        "00c65f28",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006b38c0",
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
      "006b38ac",
      "READ",
      [
        "storage",
        "00ca5a38",
        null,
        "undefined8"
      ]
    ],
    [
      "006b38b8",
      "PARAM",
      [
        "storage",
        "00c66ef8",
        null,
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "006b38c0",
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
- 006b351c ["INT_ADD", "register:40f0:8", ["const:6b351c:8", "const:4:8"]]
- 006b351c ["CALL", null, ["callee:00c596b0:8"]]
+ 006b38cc ["INT_ADD", "register:40f0:8", ["const:6b38cc:8", "const:4:8"]]
+ 006b38cc ["CALL", null, ["callee:00c596b0:8"]]
- 006b3554 ["INT_ADD", "register:40f0:8", ["const:6b3554:8", "const:4:8"]]
- 006b3554 ["CALL", null, ["ram:651a4c:8"]]
+ 006b3904 ["INT_ADD", "register:40f0:8", ["const:6b3904:8", "const:4:8"]]
+ 006b3904 ["CALL", null, ["ram:651dfc:8"]]
- 006b34f4 ["COPY", "register:4040:8", ["const:ca4000:8"]]
+ 006b38a4 ["COPY", "register:4040:8", ["const:ca5000:8"]]
~~~


<a id="compare-2ed4cf0487a645b7848ed353dd5ecdfa"></a>

### [`006b3864`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b3864.md) → [`006b3c14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3c14.md) FUN_006b3c14

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 19件 [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005e3154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e3/005e3154.md) [`0066d11c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0066d/0066d11c.md)
- 新版 呼出元 1件 [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 19件 [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`005e3504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e3/005e3504.md) [`0066d4cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0066d/0066d4cc.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 92.89% / 新版 92.89%

優先判定に残った影響 `branch_value` 2件, `call_argument_candidate` 2件, `call_target` 1件, `store_destination` 3件, `store_value` 3件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006b3d90",
      "incomplete_value": true,
      "site": "006b3d9c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:370:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b39e0",
      "incomplete_value": true,
      "site": "006b39ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:320:8"
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
      "definition_site": "006b3da0",
      "incomplete_value": true,
      "site": "006b3da8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "old": {
      "definition_site": "006b39f0",
      "incomplete_value": true,
      "site": "006b39f8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:700:8"
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
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006b3e84",
      "incomplete_value": false,
      "site": "006b3e84",
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
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b3ad4",
      "incomplete_value": false,
      "site": "006b3ad4",
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
    "ordinal": 74,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006b3c9c",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "006b3d90",
      "READ",
      [
        "storage",
        "002c2320",
        null,
        null
      ]
    ],
    [
      "006b3da0",
      "READ",
      [
        "storage",
        "002c2700",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006b3c9c",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "006b3d90",
      "READ",
      [
        "storage",
        "002c2370",
        null,
        null
      ]
    ],
    [
      "006b3da0",
      "READ",
      [
        "storage",
        "002c2750",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006b3abc ["INT_ADD", "register:40f0:8", ["const:6b3abc:8", "const:4:8"]]
- 006b3abc ["CALL", null, ["ram:9ccbd0:8"]]
+ 006b3e6c ["INT_ADD", "register:40f0:8", ["const:6b3e6c:8", "const:4:8"]]
+ 006b3e6c ["CALL", null, ["ram:9cdb7c:8"]]
- 006b3ad4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 006b3ad4 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
+ 006b3e84 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 006b3e84 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4048:8"]]
- 006b3ad8 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a78:8"]]
- 006b3ad8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
+ 006b3e88 ["INT_ADD", "tmp:0:8", ["register:40a8:8", "const:a38:8"]]
+ 006b3e88 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4050:8"]]
~~~


<a id="compare-f17a837bb74c7c041506722e838d2663"></a>

### [`006b7188`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7188.md) → [`006b7538`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7538.md) FUN_006b7538

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 11件 [`0064b1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064b1e8.md) [`0064dc08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064d/0064dc08.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`00657d4c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00657/00657d4c.md) [`006e93fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e93fc.md) · 呼出先 15件 [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`0069ef6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069e/0069ef6c.md) [`006a2bd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2bd0.md) [`006a2da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da0.md) [`006a2da4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2da4.md)
- 新版 呼出元 11件 [`0064b598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064b/0064b598.md) [`0064dfb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064d/0064dfb8.md) [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`006580fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00658/006580fc.md) [`006e97ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e9/006e97ac.md) · 呼出先 15件 [`00550d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d10.md) [`0069f31c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f31c.md) [`006a2f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2f80.md) [`006a3150`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3150.md) [`006a3154`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a3/006a3154.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.71% / 新版 94.71%

優先判定に残った影響 `store_value` 5件

アドレスに依存する影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006b7580",
      "incomplete_value": false,
      "site": "006b7580",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b71d0",
      "incomplete_value": false,
      "site": "006b71d0",
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
            "const:f0:8"
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
      "definition_site": "006b760c",
      "incomplete_value": true,
      "site": "006b760c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3d2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b725c",
      "incomplete_value": true,
      "site": "006b725c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:307:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006b7638",
      "incomplete_value": false,
      "site": "006b7638",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7288",
      "incomplete_value": false,
      "site": "006b7288",
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
            "const:1f0:8"
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
      "006b7580",
      "DATA",
      [
        "storage",
        "00c760f0",
        null,
        "undefined *"
      ]
    ],
    [
      "006b75fc",
      "READ",
      [
        "storage",
        "002a2307",
        null,
        "string"
      ]
    ],
    [
      "006b7638",
      "DATA",
      [
        "storage",
        "00c761f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7580",
      "DATA",
      [
        "storage",
        "00c770c0",
        null,
        "undefined *"
      ]
    ],
    [
      "006b75fc",
      "READ",
      [
        "storage",
        "002a23d2",
        null,
        "string"
      ]
    ],
    [
      "006b7638",
      "DATA",
      [
        "storage",
        "00c771c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7380 ["INT_ADD", "register:40f0:8", ["const:6b7380:8", "const:4:8"]]
- 006b7380 ["CALL", null, ["callee:006a3154:8"]]
+ 006b7730 ["INT_ADD", "register:40f0:8", ["const:6b7730:8", "const:4:8"]]
+ 006b7730 ["CALL", null, ["callee:006a3154:8"]]
- 006b7424 ["INT_ADD", "register:40f0:8", ["const:6b7424:8", "const:4:8"]]
- 006b7424 ["CALL", null, ["callee:006a3154:8"]]
+ 006b77d4 ["INT_ADD", "register:40f0:8", ["const:6b77d4:8", "const:4:8"]]
+ 006b77d4 ["CALL", null, ["callee:006a3154:8"]]
- 006b71c4 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b7574 ["COPY", "register:4040:8", ["const:c77000:8"]]
~~~


<a id="compare-23e16db024e77a17d1526d3f76425b86"></a>

### [`006b7564`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7564.md) → [`006b7914`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7914.md) FUN_006b7914

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006b76c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b76c8.md) · 呼出先 6件 [`0067e628`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0067e/0067e628.md) [`00682364`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682364.md) [`006b223c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b2/006b223c.md) [`006b76ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b76ec.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md)
- 新版 呼出元 1件 [`006b7a78`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7a78.md) · 呼出先 6件 [`0067e9d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0067e/0067e9d8.md) [`00682714`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682714.md) [`006b25ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b2/006b25ec.md) [`006b7a9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7a9c.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 95.51% / 新版 95.51%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006b792c",
      "incomplete_value": false,
      "site": "006b7934",
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
            "const:ea0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b757c",
      "incomplete_value": false,
      "site": "006b7584",
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
            "const:ed0:8"
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
      "definition_site": "006b7a30",
      "incomplete_value": false,
      "site": "006b7a34",
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
            "const:8b0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7680",
      "incomplete_value": false,
      "site": "006b7684",
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
            "const:8e0:8"
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
      "006b7934",
      "DATA",
      [
        "storage",
        "00c75ed0",
        null,
        "pointer"
      ]
    ],
    [
      "006b7a34",
      "DATA",
      [
        "storage",
        "00c748e0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006b7934",
      "DATA",
      [
        "storage",
        "00c76ea0",
        null,
        "pointer"
      ]
    ],
    [
      "006b7a34",
      "DATA",
      [
        "storage",
        "00c758b0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7578 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006b7928 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006b757c ["COPY", "tmp:0:8", ["const:ed0:8"]]
- 006b757c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b757c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b757c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b792c ["COPY", "tmp:0:8", ["const:ea0:8"]]
+ 006b792c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b792c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b792c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006b758c ["INT_ADD", "register:40f0:8", ["const:6b758c:8", "const:4:8"]]
- 006b758c ["CALL", null, ["callee:006b7a9c:8"]]
+ 006b793c ["INT_ADD", "register:40f0:8", ["const:6b793c:8", "const:4:8"]]
+ 006b793c ["CALL", null, ["callee:006b7a9c:8"]]
~~~


<a id="compare-0a1ba2367ac7c058cb09850e6c7404b2"></a>

### [`006b77c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b77c0.md) → [`006b7b70`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7b70.md) FUN_006b7b70

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
      "definition_site": "006b7b84",
      "incomplete_value": false,
      "site": "006b7b88",
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
            "const:ec0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b77d4",
      "incomplete_value": false,
      "site": "006b77d8",
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
            "const:ef0:8"
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
      "006b7b88",
      "DATA",
      [
        "storage",
        "00c75ef0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7b88",
      "DATA",
      [
        "storage",
        "00c76ec0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b77cc ["INT_ADD", "register:40f0:8", ["const:6b77cc:8", "const:4:8"]]
- 006b77cc ["CALL", null, ["callee:00c58f30:8"]]
+ 006b7b7c ["INT_ADD", "register:40f0:8", ["const:6b7b7c:8", "const:4:8"]]
+ 006b7b7c ["CALL", null, ["callee:00c58f30:8"]]
- 006b77d0 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006b7b80 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006b77d4 ["COPY", "tmp:0:8", ["const:ef0:8"]]
- 006b77d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b77d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b77d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7b84 ["COPY", "tmp:0:8", ["const:ec0:8"]]
+ 006b7b84 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7b84 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7b84 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-e690e4c2345ad9d431169ccb1863cc17"></a>

### [`006b77fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b77fc.md) → [`006b7bac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7bac.md) FUN_006b7bac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`006b7a38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a38.md) [`006b7a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a3c.md)
- 新版 呼出元 0件  · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`006b7de8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7de8.md) [`006b7dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7dec.md)

変更の種類 call, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 92.77% / 新版 92.77%

優先判定に残った影響 `call_target` 1件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006b7c2c",
      "incomplete_value": true,
      "site": "006b7c3c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:d03:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b787c",
      "incomplete_value": true,
      "site": "006b788c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:c25:8"
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
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006b7c54",
      "incomplete_value": false,
      "site": "006b7c5c",
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
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b78a4",
      "incomplete_value": false,
      "site": "006b78ac",
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
            "const:f60:8"
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
      "site": "006b7be4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b7834",
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
      "006b7be4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006b7c2c",
      "READ",
      [
        "storage",
        "002bdc25",
        null,
        "string"
      ]
    ],
    [
      "006b7c5c",
      "DATA",
      [
        "storage",
        "00c75f60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7be4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006b7c2c",
      "READ",
      [
        "storage",
        "002bdd03",
        null,
        "string"
      ]
    ],
    [
      "006b7c5c",
      "DATA",
      [
        "storage",
        "00c76f30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7834 ["INT_ADD", "register:40f0:8", ["const:6b7834:8", "const:4:8"]]
- 006b7834 ["CALL", null, ["ram:47ad34:8"]]
+ 006b7be4 ["INT_ADD", "register:40f0:8", ["const:6b7be4:8", "const:4:8"]]
+ 006b7be4 ["CALL", null, ["ram:47b054:8"]]
- 006b7840 ["INT_ADD", "register:40f0:8", ["const:6b7840:8", "const:4:8"]]
- 006b7840 ["CALL", null, ["callee:0047d134:8"]]
+ 006b7bf0 ["INT_ADD", "register:40f0:8", ["const:6b7bf0:8", "const:4:8"]]
+ 006b7bf0 ["CALL", null, ["callee:0047d134:8"]]
- 006b786c ["INT_ADD", "register:40f0:8", ["const:6b786c:8", "const:4:8"]]
- 006b786c ["CALL", null, ["callee:008524fc:8"]]
+ 006b7c1c ["INT_ADD", "register:40f0:8", ["const:6b7c1c:8", "const:4:8"]]
+ 006b7c1c ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b5a49608312d153cac1999af9ef2f98c"></a>

### [`006b7a04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a04.md) → [`006b7db4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7db4.md) FUN_006b7db4

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
      "definition_site": "006b7dc8",
      "incomplete_value": false,
      "site": "006b7dcc",
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
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7a18",
      "incomplete_value": false,
      "site": "006b7a1c",
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
            "const:f60:8"
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
      "006b7dcc",
      "DATA",
      [
        "storage",
        "00c75f60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7dcc",
      "DATA",
      [
        "storage",
        "00c76f30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7a10 ["INT_ADD", "register:40f0:8", ["const:6b7a10:8", "const:4:8"]]
- 006b7a10 ["CALL", null, ["callee:00c58f30:8"]]
+ 006b7dc0 ["INT_ADD", "register:40f0:8", ["const:6b7dc0:8", "const:4:8"]]
+ 006b7dc0 ["CALL", null, ["callee:00c58f30:8"]]
- 006b7a14 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006b7dc4 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006b7a18 ["COPY", "tmp:0:8", ["const:f60:8"]]
- 006b7a18 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7a18 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7a18 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7dc8 ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 006b7dc8 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7dc8 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7dc8 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c32d4b4ed9da4f0d47884a354e30295c"></a>

### [`006b7a28`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7a28.md) → [`006b7dd8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7dd8.md) FUN_006b7dd8

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
      "definition_site": "006b7ddc",
      "incomplete_value": false,
      "site": "006b7de0",
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
            "const:f30:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7a2c",
      "incomplete_value": false,
      "site": "006b7a30",
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
            "const:f60:8"
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
      "006b7de0",
      "DATA",
      [
        "storage",
        "00c75f60",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7de0",
      "DATA",
      [
        "storage",
        "00c76f30",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7a28 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006b7dd8 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006b7a2c ["COPY", "tmp:0:8", ["const:f60:8"]]
- 006b7a2c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7a2c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7a2c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7ddc ["COPY", "tmp:0:8", ["const:f30:8"]]
+ 006b7ddc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7ddc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7ddc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-c6491775332c8ffc24b31f9b87934e75"></a>

### [`006b7ae0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7ae0.md) → [`006b7e90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7e90.md) FUN_006b7e90

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
      "definition_site": "006b7ea4",
      "incomplete_value": false,
      "site": "006b7ea8",
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
            "const:fc0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7af4",
      "incomplete_value": false,
      "site": "006b7af8",
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
            "const:ff0:8"
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
      "006b7ea8",
      "DATA",
      [
        "storage",
        "00c75ff0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7ea8",
      "DATA",
      [
        "storage",
        "00c76fc0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7aec ["INT_ADD", "register:40f0:8", ["const:6b7aec:8", "const:4:8"]]
- 006b7aec ["CALL", null, ["callee:00c58f30:8"]]
+ 006b7e9c ["INT_ADD", "register:40f0:8", ["const:6b7e9c:8", "const:4:8"]]
+ 006b7e9c ["CALL", null, ["callee:00c58f30:8"]]
- 006b7af0 ["COPY", "register:4040:8", ["const:c75000:8"]]
+ 006b7ea0 ["COPY", "register:4040:8", ["const:c76000:8"]]
- 006b7af4 ["COPY", "tmp:0:8", ["const:ff0:8"]]
- 006b7af4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7af4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7af4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7ea4 ["COPY", "tmp:0:8", ["const:fc0:8"]]
+ 006b7ea4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7ea4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7ea4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a169b112800529541ffa531496ad58d6"></a>

### [`006b7b1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7b1c.md) → [`006b7ecc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7ecc.md) FUN_006b7ecc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b7ee8",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b7b38",
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
      "006b7ee8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006b7ee8",
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
- 006b7b38 ["INT_ADD", "register:40f0:8", ["const:6b7b38:8", "const:4:8"]]
- 006b7b38 ["CALL", null, ["ram:47ad34:8"]]
+ 006b7ee8 ["INT_ADD", "register:40f0:8", ["const:6b7ee8:8", "const:4:8"]]
+ 006b7ee8 ["CALL", null, ["ram:47b054:8"]]
- 006b7b44 ["INT_ADD", "register:40f0:8", ["const:6b7b44:8", "const:4:8"]]
- 006b7b44 ["CALL", null, ["callee:0047d134:8"]]
+ 006b7ef4 ["INT_ADD", "register:40f0:8", ["const:6b7ef4:8", "const:4:8"]]
+ 006b7ef4 ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-651fb3d1f8de568e71dffbdef288ea3f"></a>

### [`006b7b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7b88.md) → [`006b7f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7f38.md) FUN_006b7f38

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
      "definition_site": "006b7f4c",
      "incomplete_value": false,
      "site": "006b7f50",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:40:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7b9c",
      "incomplete_value": false,
      "site": "006b7ba0",
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
            "const:70:8"
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
      "006b7f50",
      "DATA",
      [
        "storage",
        "00c76070",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b7f50",
      "DATA",
      [
        "storage",
        "00c77040",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7b94 ["INT_ADD", "register:40f0:8", ["const:6b7b94:8", "const:4:8"]]
- 006b7b94 ["CALL", null, ["callee:00c58f30:8"]]
+ 006b7f44 ["INT_ADD", "register:40f0:8", ["const:6b7f44:8", "const:4:8"]]
+ 006b7f44 ["CALL", null, ["callee:00c58f30:8"]]
- 006b7b98 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b7f48 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b7b9c ["COPY", "tmp:0:8", ["const:70:8"]]
- 006b7b9c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7b9c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7b9c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b7f4c ["COPY", "tmp:0:8", ["const:40:8"]]
+ 006b7f4c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7f4c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b7f4c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-952699138638c32acfa3d1d54e53367e"></a>

### [`006b7bc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7bc4.md) → [`006b7f74`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7f74.md) FUN_006b7f74

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`008b91d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b9/008b91d0.md)
- 新版 呼出元 0件  · 呼出先 3件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008ba17c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008ba/008ba17c.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 93.75% / 新版 93.75%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b7f90",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006b7be0",
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
      "006b7f90",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006b7f90",
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
- 006b7be0 ["INT_ADD", "register:40f0:8", ["const:6b7be0:8", "const:4:8"]]
- 006b7be0 ["CALL", null, ["ram:47ad34:8"]]
+ 006b7f90 ["INT_ADD", "register:40f0:8", ["const:6b7f90:8", "const:4:8"]]
+ 006b7f90 ["CALL", null, ["ram:47b054:8"]]
- 006b7bec ["INT_ADD", "register:40f0:8", ["const:6b7bec:8", "const:4:8"]]
- 006b7bec ["CALL", null, ["callee:0047d134:8"]]
+ 006b7f9c ["INT_ADD", "register:40f0:8", ["const:6b7f9c:8", "const:4:8"]]
+ 006b7f9c ["CALL", null, ["callee:0047d134:8"]]
~~~


<a id="compare-d13c3b4deff7b292cca840ff2f2f0f7e"></a>

### [`006b7c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7c30.md) → [`006b7fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b7/006b7fe0.md) FUN_006b7fe0

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
      "definition_site": "006b8004",
      "incomplete_value": false,
      "site": "006b8004",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7c54",
      "incomplete_value": false,
      "site": "006b7c54",
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
      "006b8004",
      "DATA",
      [
        "storage",
        "00c760f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b8004",
      "DATA",
      [
        "storage",
        "00c770c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7c44 ["INT_ADD", "register:40f0:8", ["const:6b7c44:8", "const:4:8"]]
- 006b7c44 ["CALL", null, ["callee:00c58f30:8"]]
+ 006b7ff4 ["INT_ADD", "register:40f0:8", ["const:6b7ff4:8", "const:4:8"]]
+ 006b7ff4 ["CALL", null, ["callee:00c58f30:8"]]
- 006b7c4c ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b7ffc ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b7c50 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 006b7c50 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7c50 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7c50 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b8000 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 006b8000 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8000 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8000 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-f44c38d7f998273380514b8ee0ce06c1"></a>

### [`006b7c64`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7c64.md) → [`006b8014`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b8014.md) FUN_006b8014

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
      "definition_site": "006b8018",
      "incomplete_value": false,
      "site": "006b801c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7c68",
      "incomplete_value": false,
      "site": "006b7c6c",
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
      "006b801c",
      "DATA",
      [
        "storage",
        "00c760f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b801c",
      "DATA",
      [
        "storage",
        "00c770c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7c64 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b8014 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b7c68 ["COPY", "tmp:0:8", ["const:f0:8"]]
- 006b7c68 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b7c68 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b7c68 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b8018 ["COPY", "tmp:0:8", ["const:c0:8"]]
+ 006b8018 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8018 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8018 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-5f55e5ea19a67baa488f4809e812fe3b"></a>

### [`006b7cb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7cb4.md) → [`006b8064`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b8064.md) FUN_006b8064

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`006b7c84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b7/006b7c84.md) [`006b8140`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8140.md) [`006b81c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b81c8.md) [`006b8250`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8250.md) · 呼出先 10件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`005509f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509f0.md) [`005509fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00550/005509fc.md) [`00597f08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00597/00597f08.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 4件 [`006b8034`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b8034.md) [`006b84f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b84f0.md) [`006b8578`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b8578.md) [`006b8600`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b8600.md) · 呼出先 10件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`00550d10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d10.md) [`00550d1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00550/00550d1c.md) [`00598228`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00598/00598228.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.95% / 新版 89.95%

優先判定に残った影響 `call_target` 2件, `store_value` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006b80d0",
      "incomplete_value": true,
      "site": "006b80d0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:3d2:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7d20",
      "incomplete_value": true,
      "site": "006b7d20",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:307:8"
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
      "definition_site": "006b8130",
      "incomplete_value": true,
      "site": "006b8140",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2dc:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b7d80",
      "incomplete_value": true,
      "site": "006b7d90",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:29c:8"
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
      "definition_site": "006b8134",
      "incomplete_value": true,
      "site": "006b8144",
      "value": [
        "LOAD",
        "16",
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
      "definition_site": "006b7d84",
      "incomplete_value": true,
      "site": "006b7d94",
      "value": [
        "LOAD",
        "16",
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
      "006b80a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a84cf8"
      ]
    ],
    [
      "006b80bc",
      "READ",
      [
        "storage",
        "002a2307",
        null,
        "string"
      ]
    ],
    [
      "006b8130",
      "READ",
      [
        "storage",
        "0029f29c",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006b80a4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "00a85cec"
      ]
    ],
    [
      "006b80bc",
      "READ",
      [
        "storage",
        "002a23d2",
        null,
        "string"
      ]
    ],
    [
      "006b8130",
      "READ",
      [
        "storage",
        "0029f2dc",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b7cf4 ["INT_ADD", "register:40f0:8", ["const:6b7cf4:8", "const:4:8"]]
- 006b7cf4 ["CALL", null, ["ram:a84cf8:8"]]
+ 006b80a4 ["INT_ADD", "register:40f0:8", ["const:6b80a4:8", "const:4:8"]]
+ 006b80a4 ["CALL", null, ["ram:a85cec:8"]]
- 006b7e00 ["INT_ADD", "register:40f0:8", ["const:6b7e00:8", "const:4:8"]]
- 006b7e00 ["CALL", null, ["ram:a84d68:8"]]
+ 006b81b0 ["INT_ADD", "register:40f0:8", ["const:6b81b0:8", "const:4:8"]]
+ 006b81b0 ["CALL", null, ["ram:a85d5c:8"]]
- 006b7ce8 ["INT_ADD", "register:40f0:8", ["const:6b7ce8:8", "const:4:8"]]
- 006b7ce8 ["CALL", null, ["callee:008524fc:8"]]
+ 006b8098 ["INT_ADD", "register:40f0:8", ["const:6b8098:8", "const:4:8"]]
+ 006b8098 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-52ac02e5a79d27ba01a6171e22acf942"></a>

### [`006b80ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b80ec.md) → [`006b849c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b849c.md) FUN_006b849c

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
      "definition_site": "006b84c0",
      "incomplete_value": false,
      "site": "006b84c0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:140:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b8110",
      "incomplete_value": false,
      "site": "006b8110",
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
      "006b84c0",
      "DATA",
      [
        "storage",
        "00c76170",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b84c0",
      "DATA",
      [
        "storage",
        "00c77140",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8100 ["INT_ADD", "register:40f0:8", ["const:6b8100:8", "const:4:8"]]
- 006b8100 ["CALL", null, ["callee:00c58f30:8"]]
+ 006b84b0 ["INT_ADD", "register:40f0:8", ["const:6b84b0:8", "const:4:8"]]
+ 006b84b0 ["CALL", null, ["callee:00c58f30:8"]]
- 006b8108 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b84b8 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b810c ["COPY", "tmp:0:8", ["const:170:8"]]
- 006b810c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b810c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b810c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b84bc ["COPY", "tmp:0:8", ["const:140:8"]]
+ 006b84bc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b84bc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b84bc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-b64213eafdb68ad44ba503c0776d5dfd"></a>

### [`006b8120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8120.md) → [`006b84d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b84d0.md) FUN_006b84d0

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
      "definition_site": "006b84d4",
      "incomplete_value": false,
      "site": "006b84d8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:140:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b8124",
      "incomplete_value": false,
      "site": "006b8128",
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
      "006b84d8",
      "DATA",
      [
        "storage",
        "00c76170",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b84d8",
      "DATA",
      [
        "storage",
        "00c77140",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8120 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b84d0 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b8124 ["COPY", "tmp:0:8", ["const:170:8"]]
- 006b8124 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b8124 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b8124 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b84d4 ["COPY", "tmp:0:8", ["const:140:8"]]
+ 006b84d4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b84d4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b84d4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a4ed78080f97c5d79f3b75160b4ee4fb"></a>

### [`006b8174`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8174.md) → [`006b8524`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b8524.md) FUN_006b8524

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
      "definition_site": "006b8548",
      "incomplete_value": false,
      "site": "006b8548",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b8198",
      "incomplete_value": false,
      "site": "006b8198",
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
      "006b8548",
      "DATA",
      [
        "storage",
        "00c761f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b8548",
      "DATA",
      [
        "storage",
        "00c771c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8188 ["INT_ADD", "register:40f0:8", ["const:6b8188:8", "const:4:8"]]
- 006b8188 ["CALL", null, ["callee:00c58f30:8"]]
+ 006b8538 ["INT_ADD", "register:40f0:8", ["const:6b8538:8", "const:4:8"]]
+ 006b8538 ["CALL", null, ["callee:00c58f30:8"]]
- 006b8190 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b8540 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b8194 ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 006b8194 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b8194 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b8194 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b8544 ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 006b8544 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8544 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8544 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-1dfa1888b722ff1bc5dd801a22230b1e"></a>

### [`006b81a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b81a8.md) → [`006b8558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b8558.md) FUN_006b8558

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
      "definition_site": "006b855c",
      "incomplete_value": false,
      "site": "006b8560",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:1c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b81ac",
      "incomplete_value": false,
      "site": "006b81b0",
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
      "006b8560",
      "DATA",
      [
        "storage",
        "00c761f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b8560",
      "DATA",
      [
        "storage",
        "00c771c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b81a8 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b8558 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b81ac ["COPY", "tmp:0:8", ["const:1f0:8"]]
- 006b81ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b81ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b81ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b855c ["COPY", "tmp:0:8", ["const:1c0:8"]]
+ 006b855c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b855c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b855c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-7eb3a94e0ce6922b64bd1d20fd1ac833"></a>

### [`006b81fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b81fc.md) → [`006b85ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b85ac.md) FUN_006b85ac

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
      "definition_site": "006b85d0",
      "incomplete_value": false,
      "site": "006b85d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:240:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b8220",
      "incomplete_value": false,
      "site": "006b8220",
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
      "006b85d0",
      "DATA",
      [
        "storage",
        "00c76270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b85d0",
      "DATA",
      [
        "storage",
        "00c77240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8210 ["INT_ADD", "register:40f0:8", ["const:6b8210:8", "const:4:8"]]
- 006b8210 ["CALL", null, ["callee:00c58f30:8"]]
+ 006b85c0 ["INT_ADD", "register:40f0:8", ["const:6b85c0:8", "const:4:8"]]
+ 006b85c0 ["CALL", null, ["callee:00c58f30:8"]]
- 006b8218 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b85c8 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b821c ["COPY", "tmp:0:8", ["const:270:8"]]
- 006b821c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b821c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b821c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b85cc ["COPY", "tmp:0:8", ["const:240:8"]]
+ 006b85cc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b85cc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b85cc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-bcfd122a1d6105b25724720642d75ca0"></a>

### [`006b8230`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8230.md) → [`006b85e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b85e0.md) FUN_006b85e0

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
      "definition_site": "006b85e4",
      "incomplete_value": false,
      "site": "006b85e8",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:240:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b8234",
      "incomplete_value": false,
      "site": "006b8238",
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
      "006b85e8",
      "DATA",
      [
        "storage",
        "00c76270",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006b85e8",
      "DATA",
      [
        "storage",
        "00c77240",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8230 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006b85e0 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006b8234 ["COPY", "tmp:0:8", ["const:270:8"]]
- 006b8234 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b8234 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b8234 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b85e4 ["COPY", "tmp:0:8", ["const:240:8"]]
+ 006b85e4 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b85e4 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b85e4 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-a429de83d2fff8edcab850cd5fcef658"></a>

### [`006b8280`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8280.md) → [`006b8630`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b8630.md) _INIT_105

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 86.44% / 新版 86.44%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006b866c",
      "incomplete_value": true,
      "site": "006b8688",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006b82bc",
      "incomplete_value": true,
      "site": "006b82d8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006b8690",
      "incomplete_value": true,
      "site": "006b86ac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006b82e0",
      "incomplete_value": true,
      "site": "006b82fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006b86b0",
      "incomplete_value": true,
      "site": "006b86cc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006b8300",
      "incomplete_value": true,
      "site": "006b831c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "006b866c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006b8690",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006b86b0",
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
      "006b866c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006b8690",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "006b86b0",
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
- 006b84b4 ["INT_ADD", "register:40f0:8", ["const:6b84b4:8", "const:4:8"]]
- 006b84b4 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006b8864 ["INT_ADD", "register:40f0:8", ["const:6b8864:8", "const:4:8"]]
+ 006b8864 ["CALL", null, ["callee:00c58ed0:8"]]
- 006b82a8 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 006b8658 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 006b82ac ["COPY", "tmp:0:8", ["const:818:8"]]
- 006b82ac ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 006b82ac ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 006b82ac ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 006b865c ["COPY", "tmp:0:8", ["const:7d8:8"]]
+ 006b865c ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 006b865c ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 006b865c ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-d0ff63a1c8416ce12f4314d1b2db0e45"></a>

### [`006b8610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8610.md) → [`006b89c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b89c0.md) FUN_006b89c0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`00b11e20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b11/00b11e20.md) · 呼出先 20件 [`00440bbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440bbc.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md) [`00487e60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/00487e60.md)
- 新版 呼出元 1件 [`00b12e14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b12/00b12e14.md) · 呼出先 20件 [`00440edc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00440/00440edc.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md) [`00488180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00488/00488180.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 96.00% / 新版 96.00%

優先判定に残った影響 `store_value` 3件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006b8a00",
      "incomplete_value": false,
      "site": "006b8a08",
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
      "definition_site": "006b8650",
      "incomplete_value": false,
      "site": "006b8658",
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
      "definition_site": "006b8a1c",
      "incomplete_value": true,
      "site": "006b8a28",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2fa:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006b866c",
      "incomplete_value": true,
      "site": "006b8678",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:2ba:8"
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
      "definition_site": "006b8cd4",
      "incomplete_value": true,
      "site": "006b8cd8",
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
      "definition_site": "006b8924",
      "incomplete_value": true,
      "site": "006b8928",
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
      "006b8a08",
      "DATA",
      [
        "storage",
        "00c64e08",
        null,
        "undefined *"
      ]
    ],
    [
      "006b8a1c",
      "READ",
      [
        "storage",
        "0029f2ba",
        null,
        "string"
      ]
    ],
    [
      "006b8c54",
      "READ",
      [
        "storage",
        "00c9b5f0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006b8a08",
      "DATA",
      [
        "storage",
        "00c65dd8",
        null,
        "undefined *"
      ]
    ],
    [
      "006b8a1c",
      "READ",
      [
        "storage",
        "0029f2fa",
        null,
        "string"
      ]
    ],
    [
      "006b8c54",
      "READ",
      [
        "storage",
        "00c9c5c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006b8648 ["INT_ADD", "register:40f0:8", ["const:6b8648:8", "const:4:8"]]
- 006b8648 ["CALL", null, ["callee:00488180:8"]]
+ 006b89f8 ["INT_ADD", "register:40f0:8", ["const:6b89f8:8", "const:4:8"]]
+ 006b89f8 ["CALL", null, ["callee:00488180:8"]]
- 006b864c ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 006b89fc ["COPY", "register:4040:8", ["const:c65000:8"]]
- 006b8650 ["COPY", "tmp:0:8", ["const:e08:8"]]
- 006b8650 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006b8650 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006b8650 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006b8a00 ["COPY", "tmp:0:8", ["const:dd8:8"]]
+ 006b8a00 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8a00 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006b8a00 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8b17050399fe9e33c835aa7db1f85ff0"></a>

### [`006b8c9c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8c9c.md) → [`006b904c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b904c.md) FUN_006b904c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 17件 [`006b8610`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8610.md) [`006b8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8cb0.md) [`006b8fb8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fb8.md) [`006b9a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b9/006b9a3c.md) [`006ba598`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ba/006ba598.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 17件 [`006b89c0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b8/006b89c0.md) [`006b9060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b9060.md) [`006b9368`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b9368.md) [`006b9dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b9dec.md) [`006ba948`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ba/006ba948.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b9058",
      "incomplete_value": false,
      "site": "006b905c",
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
      "definition_site": "006b8ca8",
      "incomplete_value": false,
      "site": "006b8cac",
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
      "006b9058",
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
      "006b9058",
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
- 006b8cac ["INT_ADD", "register:40f0:8", ["const:6b8cac:8", "const:4:8"]]
- 006b8cac ["CALL", null, ["callee:0043bad8:8"]]
+ 006b905c ["INT_ADD", "register:40f0:8", ["const:6b905c:8", "const:4:8"]]
+ 006b905c ["CALL", null, ["callee:0043bad8:8"]]
- 006b8ca4 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006b9054 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 006b8ca8 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 006b8ca8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006b8ca8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006b8ca8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006b9058 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006b9058 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006b9058 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006b9058 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-b4c2ab328de0c9dbd64e3873b71b5c20"></a>

### [`006b8fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8fa4.md) → [`006b9354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b9354.md) FUN_006b9354

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006b8cb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b8/006b8cb0.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`006b9060`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b9/006b9060.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006b9360",
      "incomplete_value": false,
      "site": "006b9364",
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
      "definition_site": "006b8fb0",
      "incomplete_value": false,
      "site": "006b8fb4",
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
      "006b9360",
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
      "006b9360",
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
- 006b8fb4 ["INT_ADD", "register:40f0:8", ["const:6b8fb4:8", "const:4:8"]]
- 006b8fb4 ["CALL", null, ["callee:0043bad8:8"]]
+ 006b9364 ["INT_ADD", "register:40f0:8", ["const:6b9364:8", "const:4:8"]]
+ 006b9364 ["CALL", null, ["callee:0043bad8:8"]]
- 006b8fac ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 006b935c ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 006b8fb0 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 006b8fb0 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006b8fb0 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006b8fb0 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006b9360 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 006b9360 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006b9360 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006b9360 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-10eebfdfc1216ef499d175c37692a519"></a>

### [`006bb3bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bb3bc.md) → [`006bb76c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bb/006bb76c.md) _INIT_106

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 88.14% / 新版 88.14%

優先判定に残った影響 `call_argument_candidate` 3件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006bb7a8",
      "incomplete_value": true,
      "site": "006bb7c4",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006bb3f8",
      "incomplete_value": true,
      "site": "006bb414",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006bb828",
      "incomplete_value": true,
      "site": "006bb844",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006bb478",
      "incomplete_value": true,
      "site": "006bb494",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bb98c",
      "incomplete_value": false,
      "site": "006bb9a0",
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
      "definition_site": "006bb5dc",
      "incomplete_value": false,
      "site": "006bb5f0",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006bb7a8",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006bb7cc",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006bb7ec",
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
      "006bb7a8",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006bb7cc",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "006bb7ec",
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
- 006bb5f0 ["INT_ADD", "register:40f0:8", ["const:6bb5f0:8", "const:4:8"]]
- 006bb5f0 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006bb9a0 ["INT_ADD", "register:40f0:8", ["const:6bb9a0:8", "const:4:8"]]
+ 006bb9a0 ["CALL", null, ["callee:00c58ed0:8"]]
- 006bb3e4 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 006bb794 ["COPY", "register:4098:8", ["const:ca8000:8"]]
- 006bb3e8 ["COPY", "tmp:0:8", ["const:830:8"]]
- 006bb3e8 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
- 006bb3e8 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
- 006bb3e8 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
+ 006bb798 ["COPY", "tmp:0:8", ["const:7f0:8"]]
+ 006bb798 ["INT_CARRY", "register:105:1", ["register:4098:8", "tmp:0:8"]]
+ 006bb798 ["INT_SCARRY", "register:106:1", ["register:4098:8", "tmp:0:8"]]
+ 006bb798 ["INT_ADD", "tmp:1:8", ["register:4098:8", "tmp:0:8"]]
~~~


<a id="compare-f2904bd5e69982c49d9aeab48feaf950"></a>

### [`006bb960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bb960.md) → [`006bbd10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bb/006bbd10.md) _INIT_107

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
      "definition_site": "006bbd4c",
      "incomplete_value": true,
      "site": "006bbd68",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006bb99c",
      "incomplete_value": true,
      "site": "006bb9b8",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006bbd70",
      "incomplete_value": true,
      "site": "006bbd8c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006bb9c0",
      "incomplete_value": true,
      "site": "006bb9dc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006bbd90",
      "incomplete_value": true,
      "site": "006bbdac",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "definition_site": "006bb9e0",
      "incomplete_value": true,
      "site": "006bb9fc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "006bbd4c",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006bbd70",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006bbd90",
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
      "006bbd4c",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006bbd70",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "006bbd90",
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
- 006bbac0 ["INT_ADD", "register:40f0:8", ["const:6bbac0:8", "const:4:8"]]
- 006bbac0 ["CALL", null, ["callee:0043bb58:8"]]
+ 006bbe70 ["INT_ADD", "register:40f0:8", ["const:6bbe70:8", "const:4:8"]]
+ 006bbe70 ["CALL", null, ["callee:0043bb58:8"]]
- 006bbb94 ["INT_ADD", "register:40f0:8", ["const:6bbb94:8", "const:4:8"]]
- 006bbb94 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006bbf44 ["INT_ADD", "register:40f0:8", ["const:6bbf44:8", "const:4:8"]]
+ 006bbf44 ["CALL", null, ["callee:00c58ed0:8"]]
- 006bb988 ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 006bbd38 ["COPY", "register:4098:8", ["const:ca8000:8"]]
~~~


<a id="compare-9da73bbb3da391a2e0046990b26f2170"></a>

### [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) → [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) FUN_006bc0a0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 105件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043de18`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043d/0043de18.md) [`0043e868`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e868.md) [`0043e98c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043e/0043e98c.md) [`0043f478`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043f/0043f478.md)
- 新版 呼出元 4件 [`00678cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00678/00678cd0.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) [`009258c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00925/009258c8.md) · 呼出先 105件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043e138`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043e138.md) [`0043eb88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043eb88.md) [`0043ecac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043e/0043ecac.md) [`0043f798`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043f/0043f798.md)

変更の種類 branch_value, call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_destination, store_value

命令の説明率　旧版 97.73% / 新版 97.73%

優先判定に残った影響 `call_argument_candidate` 13件, `call_target` 19件, `store_destination` 7件, `store_value` 8件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006bcfc0",
      "incomplete_value": true,
      "site": "006bcfd8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bcc10",
      "incomplete_value": true,
      "site": "006bcc28",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 136,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006bd940",
      "incomplete_value": true,
      "site": "006bd94c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:e48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bd590",
      "incomplete_value": true,
      "site": "006bd59c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:df8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 224,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006be278",
      "incomplete_value": true,
      "site": "006be284",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:e48:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bdec8",
      "incomplete_value": true,
      "site": "006bded4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:df8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 345,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006bc234",
      "DATA",
      [
        "storage",
        "0039badc",
        null,
        "qword"
      ]
    ],
    [
      "006bc23c",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ],
    [
      "006bc24c",
      "DATA",
      [
        "storage",
        "00344440",
        null,
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006bc234",
      "DATA",
      [
        "storage",
        "0039badc",
        "fde_0039badc",
        "dword"
      ]
    ],
    [
      "006bc23c",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[11]"
      ]
    ],
    [
      "006bc24c",
      "DATA",
      [
        "storage",
        "00344440",
        null,
        "byte[23]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006bbf8c ["INT_ADD", "register:40f0:8", ["const:6bbf8c:8", "const:4:8"]]
- 006bbf8c ["CALL", null, ["ram:47ad34:8"]]
+ 006bc33c ["INT_ADD", "register:40f0:8", ["const:6bc33c:8", "const:4:8"]]
+ 006bc33c ["CALL", null, ["ram:47b054:8"]]
- 006bc4d8 ["INT_ADD", "register:40f0:8", ["const:6bc4d8:8", "const:4:8"]]
- 006bc4d8 ["CALL", null, ["ram:47ad34:8"]]
+ 006bc888 ["INT_ADD", "register:40f0:8", ["const:6bc888:8", "const:4:8"]]
+ 006bc888 ["CALL", null, ["ram:47b054:8"]]
- 006bc560 ["INT_ADD", "register:40f0:8", ["const:6bc560:8", "const:4:8"]]
- 006bc560 ["CALL", null, ["callee:008b8a14:8"]]
+ 006bc910 ["INT_ADD", "register:40f0:8", ["const:6bc910:8", "const:4:8"]]
+ 006bc910 ["CALL", null, ["callee:008b8a14:8"]]
~~~


<a id="compare-4eab52f89ac3477c5b71feb9ca88753b"></a>

### [`006bea44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bea44.md) → [`006bedf4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006be/006bedf4.md) FUN_006bedf4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 2件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00856e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00856/00856e84.md) · 呼出先 5件 [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`006c0100`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0100.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f20.md) [`00c57f40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f40.md)
- 新版 呼出元 2件 [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`00857e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00857/00857e30.md) · 呼出先 5件 [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`006c04b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c0/006c04b0.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58ef0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ef0.md) [`00c58f10`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f10.md)

変更の種類 branch_value, call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_destination, store_value

命令の説明率　旧版 53.85% / 新版 53.85%

優先判定に残った影響 `call_argument_candidate` 5件, `store_destination` 8件, `store_value` 2件

アドレスに依存する影響 `branch_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006bee04",
      "incomplete_value": false,
      "site": "006bee04",
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
            "const:a28:8"
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006bee64",
      "incomplete_value": false,
      "site": "006bee64",
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
      "definition_site": "006beab4",
      "incomplete_value": false,
      "site": "006beab4",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "bounded",
    "kind": "store_destination",
    "new": {
      "definition_site": "006bee68",
      "incomplete_value": false,
      "site": "006bee68",
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
      "definition_site": "006beab8",
      "incomplete_value": false,
      "site": "006beab8",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006bee00",
      "READ",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "006bee04",
      "WRITE",
      [
        "storage",
        "00ca4a68",
        null,
        "undefined8"
      ]
    ],
    [
      "006bee20",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ]
  ],
  "added": [
    [
      "006bee00",
      "READ",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "006bee04",
      "WRITE",
      [
        "storage",
        "00ca5a28",
        null,
        "undefined8"
      ]
    ],
    [
      "006bee20",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ]
  ]
}
~~~


~~~diff
- 006bea54 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a68:8"]]
- 006bea54 ["COPY", "tmp:1:8", ["const:0:8"]]
- 006bea54 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
+ 006bee04 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:a28:8"]]
+ 006bee04 ["COPY", "tmp:1:8", ["const:0:8"]]
+ 006bee04 ["STORE", null, ["const:1b1:8", "tmp:0:8", "tmp:1:8"]]
- 006bea90 ["INT_ADD", "register:40f0:8", ["const:6bea90:8", "const:4:8"]]
- 006bea90 ["CALL", null, ["callee:00c58ef0:8"]]
+ 006bee40 ["INT_ADD", "register:40f0:8", ["const:6bee40:8", "const:4:8"]]
+ 006bee40 ["CALL", null, ["callee:00c58ef0:8"]]
- 006beacc ["INT_ADD", "register:40f0:8", ["const:6beacc:8", "const:4:8"]]
- 006beacc ["CALL", null, ["callee:00c58ed0:8"]]
+ 006bee7c ["INT_ADD", "register:40f0:8", ["const:6bee7c:8", "const:4:8"]]
+ 006bee7c ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-f38088da619fc9bb79a2e0cbbb2db8f5"></a>

### [`006bedb4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006be/006bedb4.md) → [`006bf164`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bf/006bf164.md) FUN_006bf164

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) · 呼出先 24件 [`005e48ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e48ec.md) [`005e4e58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e4/005e4e58.md) [`005e81d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005e8/005e81d8.md) [`006c0074`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0074.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md)
- 新版 呼出元 1件 [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) · 呼出先 24件 [`005e4c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e4/005e4c9c.md) [`005e5208`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e5/005e5208.md) [`005e8588`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005e8/005e8588.md) [`006c0424`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c0/006c0424.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md)

変更の種類 call, call_target, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 89.48% / 新版 89.48%

優先判定に残った影響 `call_target` 4件, `store_value` 19件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006bf1e4",
      "incomplete_value": false,
      "site": "006bf1ec",
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
            "const:b6f:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bee34",
      "incomplete_value": false,
      "site": "006bee3c",
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
            "const:a98:8"
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
      "definition_site": "006bf244",
      "incomplete_value": false,
      "site": "006bf248",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b1000:8"
          ],
          [
            "leaf",
            "const:ec3:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006bee94",
      "incomplete_value": false,
      "site": "006bee98",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2b1000:8"
          ],
          [
            "leaf",
            "const:e79:8"
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
      "definition_site": "006bf28c",
      "incomplete_value": false,
      "site": "006bf294",
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
            "const:bb6:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006beedc",
      "incomplete_value": false,
      "site": "006beee4",
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
            "const:a5e:8"
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
      "006bf1ec",
      "DATA",
      [
        "storage",
        "002aea98",
        null,
        "string"
      ]
    ],
    [
      "006bf218",
      "DATA",
      [
        "storage",
        "002b75ae",
        null,
        "string"
      ]
    ],
    [
      "006bf248",
      "DATA",
      [
        "storage",
        "002b1e79",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "006bf1ec",
      "DATA",
      [
        "storage",
        "002aeb6f",
        null,
        "string"
      ]
    ],
    [
      "006bf218",
      "DATA",
      [
        "storage",
        "002b767d",
        null,
        "string"
      ]
    ],
    [
      "006bf248",
      "DATA",
      [
        "storage",
        "002b1ec3",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 006bee5c ["COPY", "tmp:0:8", ["const:5ae:8"]]
- 006bee5c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006bee5c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006bee5c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006bf20c ["COPY", "tmp:0:8", ["const:67d:8"]]
+ 006bf20c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006bf20c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006bf20c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
- 006bee88 ["INT_ADD", "register:40f0:8", ["const:6bee88:8", "const:4:8"]]
- 006bee88 ["CALL", null, ["callee:00803b14:8"]]
+ 006bf238 ["INT_ADD", "register:40f0:8", ["const:6bf238:8", "const:4:8"]]
+ 006bf238 ["CALL", null, ["callee:00803b14:8"]]
- 006bef2c ["INT_ADD", "register:40f0:8", ["const:6bef2c:8", "const:4:8"]]
- 006bef2c ["CALL", null, ["callee:00803c64:8"]]
+ 006bf2dc ["INT_ADD", "register:40f0:8", ["const:6bf2dc:8", "const:4:8"]]
+ 006bf2dc ["CALL", null, ["callee:00803c64:8"]]
~~~


<a id="compare-dd67c3dc44c8d74236dc0a8ad7438e62"></a>

### [`006bf8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bf/006bf8e4.md) → [`006bfc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bf/006bfc94.md) FUN_006bfc94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`00679840`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00679/00679840.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) [`00925a24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00925/00925a24.md) · 呼出先 10件 [`00467b3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b3c.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`0046803c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/0046803c.md)
- 新版 呼出元 4件 [`00679bf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00679/00679bf0.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) [`009269d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00926/009269d0.md) · 呼出先 10件 [`00467e5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e5c.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`0046827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046827c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`0046835c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046835c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 98.14% / 新版 98.14%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bfe00",
      "incomplete_value": false,
      "site": "006bfe04",
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
      "definition_site": "006bfa50",
      "incomplete_value": false,
      "site": "006bfa54",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bfe70",
      "incomplete_value": false,
      "site": "006bfe74",
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
      "definition_site": "006bfac0",
      "incomplete_value": false,
      "site": "006bfac4",
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
    "ordinal": 11,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006bfed0",
      "incomplete_value": false,
      "site": "006bfed4",
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
      "definition_site": "006bfb20",
      "incomplete_value": false,
      "site": "006bfb24",
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
    "ordinal": 15,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006bfccc",
      "READ",
      [
        "storage",
        "00c9ac38",
        null,
        "pointer"
      ]
    ],
    [
      "006bfce0",
      "READ",
      [
        "storage",
        "00ca4d94",
        null,
        "undefined4"
      ]
    ],
    [
      "006bfe00",
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
      "006bfccc",
      "READ",
      [
        "storage",
        "00c9bc08",
        null,
        "pointer"
      ]
    ],
    [
      "006bfce0",
      "READ",
      [
        "storage",
        "00ca5d54",
        null,
        "undefined4"
      ]
    ],
    [
      "006bfe00",
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
- 006bfa54 ["INT_ADD", "register:40f0:8", ["const:6bfa54:8", "const:4:8"]]
- 006bfa54 ["CALL", null, ["callee:0046ce6c:8"]]
+ 006bfe04 ["INT_ADD", "register:40f0:8", ["const:6bfe04:8", "const:4:8"]]
+ 006bfe04 ["CALL", null, ["callee:0046ce6c:8"]]
- 006bfac4 ["INT_ADD", "register:40f0:8", ["const:6bfac4:8", "const:4:8"]]
- 006bfac4 ["CALL", null, ["callee:0046ce6c:8"]]
+ 006bfe74 ["INT_ADD", "register:40f0:8", ["const:6bfe74:8", "const:4:8"]]
+ 006bfe74 ["CALL", null, ["callee:0046ce6c:8"]]
- 006bfb24 ["INT_ADD", "register:40f0:8", ["const:6bfb24:8", "const:4:8"]]
- 006bfb24 ["CALL", null, ["callee:0046ce6c:8"]]
+ 006bfed4 ["INT_ADD", "register:40f0:8", ["const:6bfed4:8", "const:4:8"]]
+ 006bfed4 ["CALL", null, ["callee:0046ce6c:8"]]
~~~


<a id="compare-197499ae3cb9aef60bcf1aec157f0d57"></a>

### [`006c03c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c03c8.md) → [`006c0778`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c0/006c0778.md) FUN_006c0778

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
      "definition_site": "006c078c",
      "incomplete_value": false,
      "site": "006c0790",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:2c0:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006c03dc",
      "incomplete_value": false,
      "site": "006c03e0",
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
      "006c0790",
      "DATA",
      [
        "storage",
        "00c762f0",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006c0790",
      "DATA",
      [
        "storage",
        "00c772c0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c03d4 ["INT_ADD", "register:40f0:8", ["const:6c03d4:8", "const:4:8"]]
- 006c03d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 006c0784 ["INT_ADD", "register:40f0:8", ["const:6c0784:8", "const:4:8"]]
+ 006c0784 ["CALL", null, ["callee:00c58f30:8"]]
- 006c03d8 ["COPY", "register:4040:8", ["const:c76000:8"]]
+ 006c0788 ["COPY", "register:4040:8", ["const:c77000:8"]]
- 006c03dc ["COPY", "tmp:0:8", ["const:2f0:8"]]
- 006c03dc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 006c03dc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 006c03dc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 006c078c ["COPY", "tmp:0:8", ["const:2c0:8"]]
+ 006c078c ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 006c078c ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 006c078c ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-8b51f535783b12a81a9ae1edce189620"></a>

### [`006c0404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0404.md) → [`006c07b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c0/006c07b4.md) FUN_006c07b4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 17件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048cd38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048cd38.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 0件  · 呼出先 17件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d058`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d058.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 call, call_argument_candidate, call_target, constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.28% / 新版 94.28%

優先判定に残った影響 `call_argument_candidate` 4件, `call_target` 3件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c088c",
      "incomplete_value": true,
      "site": "006c089c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3c3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006c04dc",
      "incomplete_value": true,
      "site": "006c04ec",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c08a0",
      "incomplete_value": true,
      "site": "006c08a0",
      "value": [
        "LOAD",
        "8",
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
      "definition_site": "006c04f0",
      "incomplete_value": true,
      "site": "006c04f0",
      "value": [
        "LOAD",
        "8",
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
    "ordinal": 13,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c093c",
      "incomplete_value": true,
      "site": "006c094c",
      "value": [
        "LOAD",
        "16",
        [
          [
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
                "const:3c3:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "006c0800",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[59]"
      ]
    ],
    [
      "006c0818",
      "DATA",
      [
        "storage",
        "00344440",
        null,
        "dword"
      ]
    ],
    [
      "006c086c",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006c0800",
      "DATA",
      [
        "storage",
        "0038f284",
        null,
        "byte[11]"
      ]
    ],
    [
      "006c0818",
      "DATA",
      [
        "storage",
        "00344440",
        null,
        "byte[23]"
      ]
    ],
    [
      "006c086c",
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
- 006c04bc ["INT_ADD", "register:40f0:8", ["const:6c04bc:8", "const:4:8"]]
- 006c04bc ["CALL", null, ["ram:47ad34:8"]]
+ 006c086c ["INT_ADD", "register:40f0:8", ["const:6c086c:8", "const:4:8"]]
+ 006c086c ["CALL", null, ["ram:47b054:8"]]
- 006c05f0 ["INT_ADD", "register:40f0:8", ["const:6c05f0:8", "const:4:8"]]
- 006c05f0 ["CALL", null, ["ram:48cd38:8"]]
+ 006c09a0 ["INT_ADD", "register:40f0:8", ["const:6c09a0:8", "const:4:8"]]
+ 006c09a0 ["CALL", null, ["ram:48d058:8"]]
- 006c0618 ["INT_ADD", "register:40f0:8", ["const:6c0618:8", "const:4:8"]]
- 006c0618 ["CALL", null, ["callee:00c59000:8"]]
+ 006c09c8 ["INT_ADD", "register:40f0:8", ["const:6c09c8:8", "const:4:8"]]
+ 006c09c8 ["CALL", null, ["callee:00c59000:8"]]
~~~


<a id="compare-506a57c21614203a02fe75f6f5aa9c0f"></a>

### [`006c09d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c09d4.md) → [`006c0d84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c0/006c0d84.md) _INIT_108

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
      "definition_site": "006c0dc0",
      "incomplete_value": true,
      "site": "006c0ddc",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 9,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c0de4",
      "incomplete_value": true,
      "site": "006c0e00",
      "value": [
        "LOAD",
        "16",
        [
          [
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
    "ordinal": 12,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c0e04",
      "incomplete_value": true,
      "site": "006c0e20",
      "value": [
        "LOAD",
        "16",
        [
          [
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
      "006c0dc0",
      "READ",
      [
        "storage",
        "002b7f66",
        null,
        "string"
      ]
    ],
    [
      "006c0de4",
      "READ",
      [
        "storage",
        "002b7f79",
        null,
        "string"
      ]
    ],
    [
      "006c0e04",
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
      "006c0dc0",
      "READ",
      [
        "storage",
        "002b8035",
        null,
        "string"
      ]
    ],
    [
      "006c0de4",
      "READ",
      [
        "storage",
        "002b8048",
        null,
        "string"
      ]
    ],
    [
      "006c0e04",
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
- 006c0b34 ["INT_ADD", "register:40f0:8", ["const:6c0b34:8", "const:4:8"]]
- 006c0b34 ["CALL", null, ["callee:0043bb58:8"]]
+ 006c0ee4 ["INT_ADD", "register:40f0:8", ["const:6c0ee4:8", "const:4:8"]]
+ 006c0ee4 ["CALL", null, ["callee:0043bb58:8"]]
- 006c0c08 ["INT_ADD", "register:40f0:8", ["const:6c0c08:8", "const:4:8"]]
- 006c0c08 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006c0fb8 ["INT_ADD", "register:40f0:8", ["const:6c0fb8:8", "const:4:8"]]
+ 006c0fb8 ["CALL", null, ["callee:00c58ed0:8"]]
- 006c09fc ["COPY", "register:4098:8", ["const:ca7000:8"]]
+ 006c0dac ["COPY", "register:4098:8", ["const:ca8000:8"]]
~~~


<a id="compare-952110598ed45e875627b54040fd9fd3"></a>

### [`006c2070`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c2/006c2070.md) → [`006c2420`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c2/006c2420.md) FUN_006c2420

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) [`008f5c38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f5/008f5c38.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 10件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006c1de0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c1/006c1de0.md) [`006c1e6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c1/006c1e6c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 6件 [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) [`008f09f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f0/008f09f4.md) [`008f6be4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f6/008f6be4.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 10件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006c2190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c2/006c2190.md) [`006c221c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c2/006c221c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

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
      "site": "006c2530",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c2180",
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
      "site": "006c26e4",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c2334",
      "value": [
        "leaf",
        "ram:47ad34:8"
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
      "006c2530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006c26e4",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ]
  ],
  "added": [
    [
      "006c2530",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006c26e4",
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
- 006c2180 ["INT_ADD", "register:40f0:8", ["const:6c2180:8", "const:4:8"]]
- 006c2180 ["CALL", null, ["ram:47ad34:8"]]
+ 006c2530 ["INT_ADD", "register:40f0:8", ["const:6c2530:8", "const:4:8"]]
+ 006c2530 ["CALL", null, ["ram:47b054:8"]]
- 006c2334 ["INT_ADD", "register:40f0:8", ["const:6c2334:8", "const:4:8"]]
- 006c2334 ["CALL", null, ["ram:47ad34:8"]]
+ 006c26e4 ["INT_ADD", "register:40f0:8", ["const:6c26e4:8", "const:4:8"]]
+ 006c26e4 ["CALL", null, ["ram:47b054:8"]]
- 006c2110 ["INT_ADD", "register:40f0:8", ["const:6c2110:8", "const:4:8"]]
- 006c2110 ["CALL", null, ["callee:008524fc:8"]]
+ 006c24c0 ["INT_ADD", "register:40f0:8", ["const:6c24c0:8", "const:4:8"]]
+ 006c24c0 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-10f8d9113cdd6a6295646a4fbaee62a2"></a>

### [`006c32d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c32d0.md) → [`006c3680`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c3/006c3680.md) FUN_006c3680

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 10件 [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006c3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3114.md) [`006c3148`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3148.md) [`006c3170`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3170.md) [`006c320c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c320c.md) · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0047e91c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e91c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 10件 [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`006c34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c3/006c34c4.md) [`006c34f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c3/006c34f8.md) [`006c3520`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c3/006c3520.md) [`006c35bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c3/006c35bc.md) · 呼出先 12件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0047ec3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047ec3c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.39% / 新版 96.39%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c3a70",
      "incomplete_value": true,
      "site": "006c3a80",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 59,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c3a88",
      "incomplete_value": true,
      "site": "006c3a94",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 62,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c38ec",
      "incomplete_value": false,
      "site": "006c3904",
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
      "006c37bc",
      "READ",
      [
        "storage",
        "00c9ad70",
        null,
        "pointer"
      ]
    ],
    [
      "006c3814",
      "READ",
      [
        "storage",
        "00ca5038",
        null,
        "undefined1"
      ]
    ],
    [
      "006c3824",
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
      "006c37bc",
      "READ",
      [
        "storage",
        "00c9bd40",
        null,
        "pointer"
      ]
    ],
    [
      "006c3814",
      "READ",
      [
        "storage",
        "00ca5ff8",
        null,
        "undefined1"
      ]
    ],
    [
      "006c3824",
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
- 006c3554 ["INT_ADD", "register:40f0:8", ["const:6c3554:8", "const:4:8"]]
- 006c3554 ["CALL", null, ["callee:00c58ed0:8"]]
+ 006c3904 ["INT_ADD", "register:40f0:8", ["const:6c3904:8", "const:4:8"]]
+ 006c3904 ["CALL", null, ["callee:00c58ed0:8"]]
- 006c3a7c ["INT_ADD", "register:40f0:8", ["const:6c3a7c:8", "const:4:8"]]
- 006c3a7c ["CALL", null, ["callee:00c58ed0:8"]]
+ 006c3e2c ["INT_ADD", "register:40f0:8", ["const:6c3e2c:8", "const:4:8"]]
+ 006c3e2c ["CALL", null, ["callee:00c58ed0:8"]]
- 006c3354 ["COPY", "register:0:8", ["register:4040:8"]]
- 006c3354 ["INT_ADD", "register:40f0:8", ["const:6c3354:8", "const:4:8"]]
- 006c3354 ["CALLIND", null, ["register:0:8"]]
+ 006c3704 ["COPY", "register:0:8", ["register:4040:8"]]
+ 006c3704 ["INT_ADD", "register:40f0:8", ["const:6c3704:8", "const:4:8"]]
+ 006c3704 ["CALLIND", null, ["register:0:8"]]
~~~


<a id="compare-fe554c22c3825af66949e7e50026f496"></a>

### [`006c3da8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c3/006c3da8.md) → [`006c4158`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c4/006c4158.md) FUN_006c4158

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 4件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046cac4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046cac4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00a82a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a82/00a82a40.md)
- 新版 呼出元 1件 [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 4件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046cde4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cde4.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00a83a34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a83/00a83a34.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.88% / 新版 97.88%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c4388",
      "incomplete_value": true,
      "site": "006c4398",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:f78:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 41,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006c43a0",
      "incomplete_value": true,
      "site": "006c43a8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:dd8:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "006c41e4",
      "READ",
      [
        "storage",
        "002c4038",
        null,
        "undefined8"
      ]
    ],
    [
      "006c4388",
      "READ",
      [
        "storage",
        "002c3f28",
        null,
        "undefined8"
      ]
    ],
    [
      "006c43a0",
      "READ",
      [
        "storage",
        "002c3d88",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006c41e4",
      "READ",
      [
        "storage",
        "002c4088",
        null,
        "undefined8"
      ]
    ],
    [
      "006c4388",
      "READ",
      [
        "storage",
        "002c3f78",
        null,
        "undefined8"
      ]
    ],
    [
      "006c43a0",
      "READ",
      [
        "storage",
        "002c3dd8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c3df8 ["INT_ADD", "register:40f0:8", ["const:6c3df8:8", "const:4:8"]]
- 006c3df8 ["CALL", null, ["callee:008524fc:8"]]
+ 006c41a8 ["INT_ADD", "register:40f0:8", ["const:6c41a8:8", "const:4:8"]]
+ 006c41a8 ["CALL", null, ["callee:008524fc:8"]]
- 006c3e08 ["INT_ADD", "register:40f0:8", ["const:6c3e08:8", "const:4:8"]]
- 006c3e08 ["CALL", null, ["callee:00a83a34:8"]]
+ 006c41b8 ["INT_ADD", "register:40f0:8", ["const:6c41b8:8", "const:4:8"]]
+ 006c41b8 ["CALL", null, ["callee:00a83a34:8"]]
- 006c3e34 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:38:8"]]
- 006c3e34 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 006c3e34 ["COPY", "register:5008:8", ["const:0:8"]]
- 006c3e34 ["COPY", "register:5010:8", ["const:0:8"]]
+ 006c41e4 ["INT_ADD", "tmp:0:8", ["register:4050:8", "const:88:8"]]
+ 006c41e4 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 006c41e4 ["COPY", "register:5008:8", ["const:0:8"]]
+ 006c41e4 ["COPY", "register:5010:8", ["const:0:8"]]
~~~


<a id="compare-85522c1796975249509c31c10d115643"></a>

### [`006c4290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4290.md) → [`006c4640`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c4/006c4640.md) FUN_006c4640

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 7件 [`0064b1e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064b1e8.md) [`0064ecf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064e/0064ecf8.md) [`006e5dc8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e5/006e5dc8.md) [`006e93fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e93fc.md) [`006f252c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006f2/006f252c.md) · 呼出先 7件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`006c0f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c0/006c0f90.md) [`006c4218`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c4218.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 7件 [`0064b598`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064b/0064b598.md) [`0064f0a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064f/0064f0a8.md) [`006e6178`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e6/006e6178.md) [`006e97ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e9/006e97ac.md) [`006f28dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006f2/006f28dc.md) · 呼出先 7件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`006c1340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c1/006c1340.md) [`006c45c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c4/006c45c8.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 95.33% / 新版 95.33%

優先判定に残った影響 `call_target` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c46e0",
      "value": [
        "leaf",
        "ram:6c1340:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c4330",
      "value": [
        "leaf",
        "ram:6c0f90:8"
      ]
    },
    "ordinal": 4,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c4774",
      "value": [
        "leaf",
        "ram:47b054:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c43c4",
      "value": [
        "leaf",
        "ram:47ad34:8"
      ]
    },
    "ordinal": 12,
    "slot": 0
  },
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c47b8",
      "value": [
        "leaf",
        "ram:6c1340:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c4408",
      "value": [
        "leaf",
        "ram:6c0f90:8"
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
      "006c46e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c0f90"
      ]
    ],
    [
      "006c4774",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "006c47b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c0f90"
      ]
    ]
  ],
  "added": [
    [
      "006c46e0",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c1340"
      ]
    ],
    [
      "006c4774",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "006c47b8",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "006c1340"
      ]
    ]
  ]
}
~~~


~~~diff
- 006c4330 ["INT_ADD", "register:40f0:8", ["const:6c4330:8", "const:4:8"]]
- 006c4330 ["CALL", null, ["ram:6c0f90:8"]]
+ 006c46e0 ["INT_ADD", "register:40f0:8", ["const:6c46e0:8", "const:4:8"]]
+ 006c46e0 ["CALL", null, ["ram:6c1340:8"]]
- 006c43c4 ["INT_ADD", "register:40f0:8", ["const:6c43c4:8", "const:4:8"]]
- 006c43c4 ["CALL", null, ["ram:47ad34:8"]]
+ 006c4774 ["INT_ADD", "register:40f0:8", ["const:6c4774:8", "const:4:8"]]
+ 006c4774 ["CALL", null, ["ram:47b054:8"]]
- 006c4408 ["INT_ADD", "register:40f0:8", ["const:6c4408:8", "const:4:8"]]
- 006c4408 ["CALL", null, ["ram:6c0f90:8"]]
+ 006c47b8 ["INT_ADD", "register:40f0:8", ["const:6c47b8:8", "const:4:8"]]
+ 006c47b8 ["CALL", null, ["ram:6c1340:8"]]
~~~


<a id="compare-b35077a7aa9481974469a7170b5b150f"></a>

### [`006c443c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c4/006c443c.md) → [`006c47ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c4/006c47ec.md) FUN_006c47ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 6件 [`0064bec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0064b/0064bec8.md) [`006b34d8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006b3/006b34d8.md) [`006e79e8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e7/006e79e8.md) [`006e9ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006e9/006e9ebc.md) [`00859bb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859bb0.md) · 呼出先 18件 [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467f94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f94.md) [`00468844`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468844.md) [`00469184`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469184.md)
- 新版 呼出元 6件 [`0064c278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0064c/0064c278.md) [`006b3888`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006b3/006b3888.md) [`006e7d98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006e7/006e7d98.md) [`006ea26c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ea/006ea26c.md) [`0085ab5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab5c.md) · 呼出先 18件 [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`004682b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/004682b4.md) [`00468b64`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468b64.md) [`004694a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00469/004694a4.md)

変更の種類 call, call_target, constant, operands_and_dependencies

命令の説明率　旧版 99.26% / 新版 99.26%

優先判定に残った影響 `call_target` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_target",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c5180",
      "value": [
        "leaf",
        "ram:63c978:8"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "006c4dd0",
      "value": [
        "leaf",
        "ram:63c5c8:8"
      ]
    },
    "ordinal": 99,
    "slot": 0
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006c48f8",
      "READ",
      [
        "storage",
        "00c9b5c0",
        null,
        "pointer"
      ]
    ],
    [
      "006c4904",
      "DATA",
      [
        "storage",
        "00ca4580",
        null,
        null
      ]
    ],
    [
      "006c493c",
      "DATA",
      [
        "storage",
        "00ca4580",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006c48f8",
      "READ",
      [
        "storage",
        "00c9c590",
        null,
        "pointer"
      ]
    ],
    [
      "006c4904",
      "DATA",
      [
        "storage",
        "00ca5550",
        null,
        null
      ]
    ],
    [
      "006c493c",
      "DATA",
      [
        "storage",
        "00ca5550",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006c4dd0 ["INT_ADD", "register:40f0:8", ["const:6c4dd0:8", "const:4:8"]]
- 006c4dd0 ["CALL", null, ["ram:63c5c8:8"]]
+ 006c5180 ["INT_ADD", "register:40f0:8", ["const:6c5180:8", "const:4:8"]]
+ 006c5180 ["CALL", null, ["ram:63c978:8"]]
- 006c4464 ["INT_ADD", "register:40f0:8", ["const:6c4464:8", "const:4:8"]]
- 006c4464 ["CALL", null, ["callee:00467bc0:8"]]
+ 006c4814 ["INT_ADD", "register:40f0:8", ["const:6c4814:8", "const:4:8"]]
+ 006c4814 ["CALL", null, ["callee:00467bc0:8"]]
- 006c4494 ["INT_ADD", "register:40f0:8", ["const:6c4494:8", "const:4:8"]]
- 006c4494 ["CALL", null, ["callee:00467e8c:8"]]
+ 006c4844 ["INT_ADD", "register:40f0:8", ["const:6c4844:8", "const:4:8"]]
+ 006c4844 ["CALL", null, ["callee:00467e8c:8"]]
~~~


<a id="compare-e5ef54c2c05ee462d646cdc355d22315"></a>

### [`006c50e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c50e0.md) → [`006c5490`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c5/006c5490.md) FUN_006c5490

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 9件 [`00682b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/00682b24.md) [`00683520`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00683/00683520.md) [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`008efa48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008ef/008efa48.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 9件 [`00682ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682ed4.md) [`006838d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00683/006838d0.md) [`007599e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00759/007599e4.md) [`0075a820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075a/0075a820.md) [`008f09f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f0/008f09f4.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 97.06% / 新版 97.06%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c5504",
      "incomplete_value": false,
      "site": "006c5508",
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
      "006c5504",
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
      "006c5504",
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
- 006c5158 ["INT_ADD", "register:40f0:8", ["const:6c5158:8", "const:4:8"]]
- 006c5158 ["CALL", null, ["callee:00442c90:8"]]
+ 006c5508 ["INT_ADD", "register:40f0:8", ["const:6c5508:8", "const:4:8"]]
+ 006c5508 ["CALL", null, ["callee:00442c90:8"]]
- 006c5154 ["COPY", "tmp:0:8", ["const:170:8"]]
- 006c5154 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006c5154 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006c5154 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006c5504 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 006c5504 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006c5504 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006c5504 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-eb399cdf985a1927aff4d85f4519e05a"></a>

### [`006c5168`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c5/006c5168.md) → [`006c5518`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c5/006c5518.md) FUN_006c5518

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`008f39fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008f3/008f39fc.md) · 呼出先 1件 [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md)
- 新版 呼出元 3件 [`007599e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00759/007599e4.md) [`0075a820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075a/0075a820.md) [`008f49a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008f4/008f49a8.md) · 呼出先 1件 [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.18% / 新版 99.18%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006c56f8",
      "incomplete_value": false,
      "site": "006c56fc",
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
      "006c56f8",
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
      "006c56f8",
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
- 006c534c ["INT_ADD", "register:40f0:8", ["const:6c534c:8", "const:4:8"]]
- 006c534c ["CALL", null, ["callee:00442c90:8"]]
+ 006c56fc ["INT_ADD", "register:40f0:8", ["const:6c56fc:8", "const:4:8"]]
+ 006c56fc ["CALL", null, ["callee:00442c90:8"]]
- 006c5348 ["COPY", "tmp:0:8", ["const:170:8"]]
- 006c5348 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 006c5348 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 006c5348 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 006c56f8 ["COPY", "tmp:0:8", ["const:1b0:8"]]
+ 006c56f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 006c56f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 006c56f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-90c3818761c93394b0c624cefd44d587"></a>

### [`006c6e68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006c6/006c6e68.md) → [`006c7218`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006c7/006c7218.md) FUN_006c7218

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 14件 [`006829d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00682/006829d0.md) [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`00759634`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00759/00759634.md) [`0075a470`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0075a/0075a470.md) [`007fb288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb288.md) · 呼出先 71件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00676aa0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00676/00676aa0.md) [`006899ec`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00689/006899ec.md) [`006cb10c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb10c.md) [`006d5efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d5/006d5efc.md)
- 新版 呼出元 14件 [`00682d80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00682/00682d80.md) [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`007599e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00759/007599e4.md) [`0075a820`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0075a/0075a820.md) [`007fc1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fc1ec.md) · 呼出先 71件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00676e50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00676/00676e50.md) [`00689d9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00689/00689d9c.md) [`006cb4bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cb/006cb4bc.md) [`006d62ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d6/006d62ac.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.98% / 新版 99.98%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006caf90",
      "incomplete_value": false,
      "site": "006caf9c",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2df000:8"
          ],
          [
            "leaf",
            "const:d38:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006cabe0",
      "incomplete_value": false,
      "site": "006cabec",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:2df000:8"
          ],
          [
            "leaf",
            "const:cf8:8"
          ]
        ]
      ]
    },
    "ordinal": 264,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006caf90",
      "PARAM",
      [
        "storage",
        "002dfcf8",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006caf90",
      "PARAM",
      [
        "storage",
        "002dfd38",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006cabec ["INT_ADD", "register:40f0:8", ["const:6cabec:8", "const:4:8"]]
- 006cabec ["CALL", null, ["callee:00c590a0:8"]]
+ 006caf9c ["INT_ADD", "register:40f0:8", ["const:6caf9c:8", "const:4:8"]]
+ 006caf9c ["CALL", null, ["callee:00c590a0:8"]]
- 006c6ec8 ["INT_ADD", "register:40f0:8", ["const:6c6ec8:8", "const:4:8"]]
- 006c6ec8 ["CALL", null, ["callee:00676e50:8"]]
+ 006c7278 ["INT_ADD", "register:40f0:8", ["const:6c7278:8", "const:4:8"]]
+ 006c7278 ["CALL", null, ["callee:00676e50:8"]]
- 006c6ee8 ["INT_ADD", "register:40f0:8", ["const:6c6ee8:8", "const:4:8"]]
- 006c6ee8 ["CALL", null, ["callee:008524fc:8"]]
+ 006c7298 ["INT_ADD", "register:40f0:8", ["const:6c7298:8", "const:4:8"]]
+ 006c7298 ["CALL", null, ["callee:008524fc:8"]]
~~~


<a id="compare-b483724a34a8a2097baa85bf30819d04"></a>

### [`006cb8e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cb8e4.md) → [`006cbc94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cb/006cbc94.md) FUN_006cbc94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 2件 [`006cbacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cbacc.md) [`006ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cc/006ccbd0.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`006d7078`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7078.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`006cbe7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cb/006cbe7c.md) [`006ccf80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cc/006ccf80.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`006d7428`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d7/006d7428.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 96.33% / 新版 96.33%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006cbce4",
      "incomplete_value": true,
      "site": "006cbcf0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:50:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
    "ordinal": 16,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006cbd68",
      "incomplete_value": true,
      "site": "006cbd74",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:358:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
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
      "006cbce4",
      "READ",
      [
        "storage",
        "002c4000",
        null,
        "undefined8"
      ]
    ],
    [
      "006cbd68",
      "READ",
      [
        "storage",
        "002c4308",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "006cbce4",
      "READ",
      [
        "storage",
        "002c4050",
        null,
        "undefined8"
      ]
    ],
    [
      "006cbd68",
      "READ",
      [
        "storage",
        "002c4358",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 006cb924 ["INT_ADD", "register:40f0:8", ["const:6cb924:8", "const:4:8"]]
- 006cb924 ["CALL", null, ["callee:00c58f30:8"]]
+ 006cbcd4 ["INT_ADD", "register:40f0:8", ["const:6cbcd4:8", "const:4:8"]]
+ 006cbcd4 ["CALL", null, ["callee:00c58f30:8"]]
- 006cb934 ["COPY", "tmp:0:8", ["register:4040:8"]]
- 006cb934 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
- 006cb934 ["COPY", "register:5008:8", ["const:0:8"]]
- 006cb934 ["COPY", "register:5010:8", ["const:0:8"]]
+ 006cbce4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:50:8"]]
+ 006cbce4 ["LOAD", "register:5000:8", ["const:1b1:8", "tmp:0:8"]]
+ 006cbce4 ["COPY", "register:5008:8", ["const:0:8"]]
+ 006cbce4 ["COPY", "register:5010:8", ["const:0:8"]]
- 006cb948 ["INT_ADD", "register:40f0:8", ["const:6cb948:8", "const:4:8"]]
- 006cb948 ["CALL", null, ["callee:0043bf04:8"]]
+ 006cbcf8 ["INT_ADD", "register:40f0:8", ["const:6cbcf8:8", "const:4:8"]]
+ 006cbcf8 ["CALL", null, ["callee:0043bf04:8"]]
~~~


<a id="compare-ac6bc95891749c1c8fcdaa30f5c662a1"></a>

### [`006cbacc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cb/006cbacc.md) → [`006cbe7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cb/006cbe7c.md) FUN_006cbe7c

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`006cdce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cd/006cdce0.md) [`009f8670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f8/009f8670.md) [`009f8d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f8/009f8d00.md) [`00adf288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf288.md) · 呼出先 25件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 4件 [`006ce090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ce/006ce090.md) [`009f961c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f9/009f961c.md) [`009f9cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f9/009f9cac.md) [`00ae027c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae0/00ae027c.md) · 呼出先 25件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.30% / 新版 99.30%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ccce4",
      "incomplete_value": false,
      "site": "006ccce8",
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
      "definition_site": "006cc934",
      "incomplete_value": false,
      "site": "006cc938",
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
    "ordinal": 62,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ccd04",
      "incomplete_value": false,
      "site": "006ccd08",
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
      "definition_site": "006cc954",
      "incomplete_value": false,
      "site": "006cc958",
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
    "ordinal": 63,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006ccd24",
      "incomplete_value": false,
      "site": "006ccd28",
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
      "definition_site": "006cc974",
      "incomplete_value": false,
      "site": "006cc978",
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
    "ordinal": 64,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006cc22c",
      "READ",
      [
        "storage",
        "002dfef8",
        null,
        null
      ]
    ],
    [
      "006cc22c",
      "READ",
      [
        "storage",
        "002dff08",
        null,
        null
      ]
    ],
    [
      "006cc234",
      "READ",
      [
        "storage",
        "002dff18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006cc22c",
      "READ",
      [
        "storage",
        "002dff38",
        null,
        null
      ]
    ],
    [
      "006cc22c",
      "READ",
      [
        "storage",
        "002dff48",
        null,
        null
      ]
    ],
    [
      "006cc234",
      "READ",
      [
        "storage",
        "002dff58",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006cc938 ["INT_ADD", "register:40f0:8", ["const:6cc938:8", "const:4:8"]]
- 006cc938 ["CALL", null, ["callee:00442c90:8"]]
+ 006ccce8 ["INT_ADD", "register:40f0:8", ["const:6ccce8:8", "const:4:8"]]
+ 006ccce8 ["CALL", null, ["callee:00442c90:8"]]
- 006cc958 ["INT_ADD", "register:40f0:8", ["const:6cc958:8", "const:4:8"]]
- 006cc958 ["CALL", null, ["callee:00442c90:8"]]
+ 006ccd08 ["INT_ADD", "register:40f0:8", ["const:6ccd08:8", "const:4:8"]]
+ 006ccd08 ["CALL", null, ["callee:00442c90:8"]]
- 006cc978 ["INT_ADD", "register:40f0:8", ["const:6cc978:8", "const:4:8"]]
- 006cc978 ["CALL", null, ["callee:00442c90:8"]]
+ 006ccd28 ["INT_ADD", "register:40f0:8", ["const:6ccd28:8", "const:4:8"]]
+ 006ccd28 ["CALL", null, ["callee:00442c90:8"]]
~~~


<a id="compare-bdfc064bb731a0d59f315bb513f390c4"></a>

### [`006ccbd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cc/006ccbd0.md) → [`006ccf80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006cc/006ccf80.md) FUN_006ccf80

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 4件 [`006cdce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cd/006cdce0.md) [`009f8670`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f8/009f8670.md) [`009f8d00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f8/009f8d00.md) [`00adf288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf288.md) · 呼出先 25件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005c17dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c17dc.md)
- 新版 呼出元 4件 [`006ce090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ce/006ce090.md) [`009f961c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f9/009f961c.md) [`009f9cac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f9/009f9cac.md) [`00ae027c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae0/00ae027c.md) · 呼出先 25件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005c1b8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1b8c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 99.30% / 新版 99.30%

優先判定に残った影響 `call_argument_candidate` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006cddf4",
      "incomplete_value": false,
      "site": "006cddf8",
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
      "definition_site": "006cda44",
      "incomplete_value": false,
      "site": "006cda48",
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
    "ordinal": 62,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006cde14",
      "incomplete_value": false,
      "site": "006cde18",
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
      "definition_site": "006cda64",
      "incomplete_value": false,
      "site": "006cda68",
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
    "ordinal": 63,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "006cde34",
      "incomplete_value": false,
      "site": "006cde38",
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
      "definition_site": "006cda84",
      "incomplete_value": false,
      "site": "006cda88",
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
    "ordinal": 64,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006cd330",
      "READ",
      [
        "storage",
        "002dfef8",
        null,
        null
      ]
    ],
    [
      "006cd330",
      "READ",
      [
        "storage",
        "002dff08",
        null,
        null
      ]
    ],
    [
      "006cd338",
      "READ",
      [
        "storage",
        "002dff18",
        null,
        null
      ]
    ]
  ],
  "added": [
    [
      "006cd330",
      "READ",
      [
        "storage",
        "002dff38",
        null,
        null
      ]
    ],
    [
      "006cd330",
      "READ",
      [
        "storage",
        "002dff48",
        null,
        null
      ]
    ],
    [
      "006cd338",
      "READ",
      [
        "storage",
        "002dff58",
        null,
        null
      ]
    ]
  ]
}
~~~


~~~diff
- 006cda48 ["INT_ADD", "register:40f0:8", ["const:6cda48:8", "const:4:8"]]
- 006cda48 ["CALL", null, ["callee:00442c90:8"]]
+ 006cddf8 ["INT_ADD", "register:40f0:8", ["const:6cddf8:8", "const:4:8"]]
+ 006cddf8 ["CALL", null, ["callee:00442c90:8"]]
- 006cda68 ["INT_ADD", "register:40f0:8", ["const:6cda68:8", "const:4:8"]]
- 006cda68 ["CALL", null, ["callee:00442c90:8"]]
+ 006cde18 ["INT_ADD", "register:40f0:8", ["const:6cde18:8", "const:4:8"]]
+ 006cde18 ["CALL", null, ["callee:00442c90:8"]]
- 006cda88 ["INT_ADD", "register:40f0:8", ["const:6cda88:8", "const:4:8"]]
- 006cda88 ["CALL", null, ["callee:00442c90:8"]]
+ 006cde38 ["INT_ADD", "register:40f0:8", ["const:6cde38:8", "const:4:8"]]
+ 006cde38 ["CALL", null, ["callee:00442c90:8"]]
~~~


<a id="compare-027473884fcb44c45bc95431328d6fc2"></a>

### [`006cdce0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006cd/006cdce0.md) → [`006ce090`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ce/006ce090.md) FUN_006ce090

根拠 `instruction_blocks_cfg_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 5件 [`00707f38`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00707/00707f38.md) [`007fb288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007fb/007fb288.md) [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) [`009f79e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/009f7/009f79e4.md) [`00ae1328`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00ae1/00ae1328.md) · 呼出先 35件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00442970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00442/00442970.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00468c1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00468/00468c1c.md)
- 新版 呼出元 5件 [`007082e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00708/007082e8.md) [`007fc1ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007fc/007fc1ec.md) [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) [`009f8990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/009f8/009f8990.md) [`00ae231c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae2/00ae231c.md) · 呼出先 35件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00442c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00442/00442c90.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`00468f3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468f3c.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies, store_value

命令の説明率　旧版 99.33% / 新版 99.33%

優先判定に残った影響 `call_argument_candidate` 2件, `store_value` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006cf0a0",
      "incomplete_value": true,
      "site": "006cf0a0",
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
      "definition_site": "006cecf0",
      "incomplete_value": true,
      "site": "006cecf0",
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
    "ordinal": 156,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006cf0a0",
      "incomplete_value": true,
      "site": "006cf0a0",
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
      "definition_site": "006cecf0",
      "incomplete_value": true,
      "site": "006cecf0",
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
    "ordinal": 157,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006cfbc8",
      "incomplete_value": true,
      "site": "006cfbc8",
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
      "definition_site": "006cf818",
      "incomplete_value": true,
      "site": "006cf818",
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
    "ordinal": 254,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "006ce19c",
      "DATA",
      [
        "storage",
        "003c9690",
        "fde_003c9690",
        "dword"
      ]
    ],
    [
      "006ce1a0",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "dword"
      ]
    ],
    [
      "006ce1ec",
      "DATA",
      [
        "storage",
        "00436ba0",
        "fde_00436ba0",
        "dword"
      ]
    ]
  ],
  "added": [
    [
      "006ce19c",
      "DATA",
      [
        "storage",
        "003c9690",
        null,
        "dword"
      ]
    ],
    [
      "006ce1a0",
      "DATA",
      [
        "storage",
        "003c9698",
        null,
        "qword"
      ]
    ],
    [
      "006ce1ec",
      "DATA",
      [
        "storage",
        "00436ba0",
        null,
        "byte[47]"
      ]
    ]
  ]
}
~~~


~~~diff
- 006cf9ec ["INT_ADD", "register:40f0:8", ["const:6cf9ec:8", "const:4:8"]]
- 006cf9ec ["CALL", null, ["callee:00a47910:8"]]
+ 006cfd9c ["INT_ADD", "register:40f0:8", ["const:6cfd9c:8", "const:4:8"]]
+ 006cfd9c ["CALL", null, ["callee:00a47910:8"]]
- 006cfd9c ["INT_ADD", "register:40f0:8", ["const:6cfd9c:8", "const:4:8"]]
- 006cfd9c ["CALL", null, ["callee:00442c90:8"]]
+ 006d014c ["INT_ADD", "register:40f0:8", ["const:6d014c:8", "const:4:8"]]
+ 006d014c ["CALL", null, ["callee:00442c90:8"]]
- 006cfdbc ["INT_ADD", "register:40f0:8", ["const:6cfdbc:8", "const:4:8"]]
- 006cfdbc ["CALL", null, ["callee:00442c90:8"]]
+ 006d016c ["INT_ADD", "register:40f0:8", ["const:6d016c:8", "const:4:8"]]
+ 006d016c ["CALL", null, ["callee:00442c90:8"]]
~~~


<a id="compare-7125d988ff8300f656710ce6b297d9f2"></a>

### [`006d0a74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d0a74.md) → [`006d0e24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d0/006d0e24.md) FUN_006d0e24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006d203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d2/006d203c.md) · 呼出先 13件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006d7ec8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7ec8.md) [`006d7ecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d7/006d7ecc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006d23ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d2/006d23ec.md) · 呼出先 13件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`006d8278`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8278.md) [`006d827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d827c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 94.64% / 新版 94.64%

優先判定に残った影響 `store_value` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "006d0ec0",
      "incomplete_value": true,
      "site": "006d0ec0",
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
            "const:3b8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "006d0b10",
      "incomplete_value": true,
      "site": "006d0b10",
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
            "const:3e8:8"
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
      "definition_site": "006d0f70",
      "incomplete_value": false,
      "site": "006d0f74",
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
      "definition_site": "006d0bc0",
      "incomplete_value": false,
      "site": "006d0bc4",
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
      "006d0ec0",
      "DATA",
      [
        "storage",
        "00c763e8",
        null,
        "undefined *"
      ]
    ],
    [
      "006d0f24",
      "READ",
      [
        "storage",
        "00c76408",
        null,
        "pointer"
      ]
    ],
    [
      "006d0f24",
      "READ",
      [
        "storage",
        "00c76410",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "006d0ec0",
      "DATA",
      [
        "storage",
        "00c773b8",
        null,
        "undefined *"
      ]
    ],
    [
      "006d0f24",
      "READ",
      [
        "storage",
        "00c773d8",
        null,
        "pointer"
      ]
    ],
    [
      "006d0f24",
      "READ",
      [
        "storage",
        "00c773e0",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d0a9c ["INT_ADD", "register:40f0:8", ["const:6d0a9c:8", "const:4:8"]]
- 006d0a9c ["CALL", null, ["callee:008524fc:8"]]
+ 006d0e4c ["INT_ADD", "register:40f0:8", ["const:6d0e4c:8", "const:4:8"]]
+ 006d0e4c ["CALL", null, ["callee:008524fc:8"]]
- 006d0aa0 ["INT_ADD", "register:40f0:8", ["const:6d0aa0:8", "const:4:8"]]
- 006d0aa0 ["CALL", null, ["callee:0046cd24:8"]]
+ 006d0e50 ["INT_ADD", "register:40f0:8", ["const:6d0e50:8", "const:4:8"]]
+ 006d0e50 ["CALL", null, ["callee:0046cd24:8"]]
- 006d0ad8 ["INT_ADD", "register:40f0:8", ["const:6d0ad8:8", "const:4:8"]]
- 006d0ad8 ["CALL", null, ["callee:00a47944:8"]]
+ 006d0e88 ["INT_ADD", "register:40f0:8", ["const:6d0e88:8", "const:4:8"]]
+ 006d0e88 ["CALL", null, ["callee:00a47944:8"]]
~~~


<a id="compare-e4e4e841c80b0e873f834f62de8ca928"></a>

### [`006d0c98`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d0c98.md) → [`006d1048`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d1/006d1048.md) FUN_006d1048

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006d203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d2/006d203c.md) · 呼出先 13件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006d82a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d82a8.md) [`006d82ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d82ac.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006d23ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d2/006d23ec.md) · 呼出先 13件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`006d8658`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d8658.md) [`006d865c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d865c.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.55% / 新版 97.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006d11c4",
      "incomplete_value": false,
      "site": "006d11c4",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:438:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006d1128",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "006d113c",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ],
    [
      "006d1154",
      "READ",
      [
        "storage",
        "00c9b440",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006d1128",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "006d113c",
      "DATA",
      [
        "storage",
        "00c8c7f8",
        null,
        "undefined *"
      ]
    ],
    [
      "006d1154",
      "READ",
      [
        "storage",
        "00c9c410",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d0cc8 ["INT_ADD", "register:40f0:8", ["const:6d0cc8:8", "const:4:8"]]
- 006d0cc8 ["CALL", null, ["callee:008524fc:8"]]
+ 006d1078 ["INT_ADD", "register:40f0:8", ["const:6d1078:8", "const:4:8"]]
+ 006d1078 ["CALL", null, ["callee:008524fc:8"]]
- 006d0ccc ["INT_ADD", "register:40f0:8", ["const:6d0ccc:8", "const:4:8"]]
- 006d0ccc ["CALL", null, ["callee:0046cd24:8"]]
+ 006d107c ["INT_ADD", "register:40f0:8", ["const:6d107c:8", "const:4:8"]]
+ 006d107c ["CALL", null, ["callee:0046cd24:8"]]
- 006d0d04 ["INT_ADD", "register:40f0:8", ["const:6d0d04:8", "const:4:8"]]
- 006d0d04 ["CALL", null, ["callee:00a47944:8"]]
+ 006d10b4 ["INT_ADD", "register:40f0:8", ["const:6d10b4:8", "const:4:8"]]
+ 006d10b4 ["CALL", null, ["callee:00a47944:8"]]
~~~


<a id="compare-a500309ba99b69d75b059bc6ad31f2eb"></a>

### [`006d0fa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d0/006d0fa4.md) → [`006d1354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d1/006d1354.md) FUN_006d1354

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 1件 [`006d203c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d2/006d203c.md) · 呼出先 13件 [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`006d8438`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d8438.md) [`006d843c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006d8/006d843c.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md)
- 新版 呼出元 1件 [`006d23ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d2/006d23ec.md) · 呼出先 13件 [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`006d87e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d87e8.md) [`006d87ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006d8/006d87ec.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 97.55% / 新版 97.55%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "006d14d0",
      "incomplete_value": false,
      "site": "006d14d0",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "leaf",
            "const:c77000:8"
          ],
          [
            "leaf",
            "const:4b8:8"
          ]
        ]
      ]
    },
    "old": {
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
      "006d1434",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "006d1448",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ],
    [
      "006d1460",
      "READ",
      [
        "storage",
        "00c9b440",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "006d1434",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "006d1448",
      "DATA",
      [
        "storage",
        "00c8c7f8",
        null,
        "undefined *"
      ]
    ],
    [
      "006d1460",
      "READ",
      [
        "storage",
        "00c9c410",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 006d0fd4 ["INT_ADD", "register:40f0:8", ["const:6d0fd4:8", "const:4:8"]]
- 006d0fd4 ["CALL", null, ["callee:008524fc:8"]]
+ 006d1384 ["INT_ADD", "register:40f0:8", ["const:6d1384:8", "const:4:8"]]
+ 006d1384 ["CALL", null, ["callee:008524fc:8"]]
- 006d0fd8 ["INT_ADD", "register:40f0:8", ["const:6d0fd8:8", "const:4:8"]]
- 006d0fd8 ["CALL", null, ["callee:0046cd24:8"]]
+ 006d1388 ["INT_ADD", "register:40f0:8", ["const:6d1388:8", "const:4:8"]]
+ 006d1388 ["CALL", null, ["callee:0046cd24:8"]]
- 006d1010 ["INT_ADD", "register:40f0:8", ["const:6d1010:8", "const:4:8"]]
- 006d1010 ["CALL", null, ["callee:00a47944:8"]]
+ 006d13c0 ["INT_ADD", "register:40f0:8", ["const:6d13c0:8", "const:4:8"]]
+ 006d13c0 ["CALL", null, ["callee:00a47944:8"]]
~~~


