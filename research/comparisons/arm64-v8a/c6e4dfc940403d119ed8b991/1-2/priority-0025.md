# v16.0.2 → v16.0.3 · 最優先の変更候補 (25)

[一覧の目次](README.md)

<a id="compare-5dd7b0d27b91d77e0b1aac2936800aaa"></a>

### [`005c1a3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1a3c.md) → [`005c1dec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1dec.md) FUN_005c1dec

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005c1884`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1884.md) · 呼出先 0件 
- 新版 呼出元 1件 [`005c1c34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1c34.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.80% / 新版 68.80%

アドレスに依存する影響 `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c1a60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1ef4"
      ]
    ],
    [
      "unmatched:005c1bf8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1f14"
      ]
    ],
    [
      "unmatched:005c1c24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1f14"
      ]
    ]
  ],
  "added": [
    [
      "005c1e10",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1ef4"
      ]
    ],
    [
      "005c1fa8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1f14"
      ]
    ],
    [
      "005c1fd4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c1f14"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c1a54 ["INT_AND", "register:4058:8", ["register:4058:8", "const:ffff0000ffffffff:8"]]
- 005c1a54 ["INT_OR", "register:4058:8", ["register:4058:8", "const:d20d00000000:8"]]
- 005c1a58 ["INT_AND", "tmp:0:4", ["register:4050:4", "const:ffff:4"]]
- 005c1a58 ["INT_OR", "tmp:0:4", ["tmp:0:4", "const:99080000:4"]]
- 005c1a58 ["INT_ZEXT", "register:4050:8", ["tmp:0:4"]]
- 005c1a5c ["INT_AND", "register:4058:8", ["register:4058:8", "const:ffffffffffff:8"]]
- 005c1a5c ["INT_OR", "register:4058:8", ["register:4058:8", "const:d20000000000000:8"]]
~~~


<a id="compare-ba3895806def426df27e4cd55004bb09"></a>

### [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) → [`005c1fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1fe0.md) FUN_005c1fe0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 19件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) [`00675b88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/00675b88.md) [`00675bd4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00675/00675bd4.md) [`007342f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00734/007342f8.md) · 呼出先 2件 [`005c1c30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c30.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 19件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c1fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1fe0.md) [`00675f38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00675/00675f38.md) [`00675f84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00675/00675f84.md) [`007346a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00734/007346a8.md) · 呼出先 2件 [`005c1fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c1/005c1fe0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005c1c30 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005c1c30 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 005c1fe0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005c1fe0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005c1c50 ["INT_ADD", "register:40f0:8", ["const:5c1c50:8", "const:4:8"]]
- 005c1c50 ["CALL", null, ["local:b0:8"]]
+ 005c2000 ["INT_ADD", "register:40f0:8", ["const:5c2000:8", "const:4:8"]]
+ 005c2000 ["CALL", null, ["local:b0:8"]]
- 005c1c5c ["INT_ADD", "register:40f0:8", ["const:5c1c5c:8", "const:4:8"]]
- 005c1c5c ["CALL", null, ["local:b0:8"]]
+ 005c200c ["INT_ADD", "register:40f0:8", ["const:5c200c:8", "const:4:8"]]
+ 005c200c ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-c56a87c505701183523a974d18973f39"></a>

### [`005c1c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c74.md) → [`005c2024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2024.md) FUN_005c2024

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c1c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c74.md) · 呼出先 2件 [`005c1c74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1c74.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c2024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2024.md) · 呼出先 2件 [`005c2024`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2024.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c1c78",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c1c7c",
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
      "005c2028",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c202c",
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
- 005c1c74 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005c1c74 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 005c2024 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005c2024 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 005c1c78 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c1c78 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c1c78 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005c1c78 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c1c7c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005c1c7c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005c1c7c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005c1c7c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-495bd01c22a1d70c7f984cba1964f414"></a>

### [`005c1d08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d08.md) → [`005c20b8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20b8.md) FUN_005c20b8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 0.00% / 新版 0.00%

優先判定に残った影響 `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c1d08",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c1d14",
      "PARAM",
      [
        "storage",
        "002b7f8c",
        null,
        "string"
      ]
    ],
    [
      "unmatched:005c1d18",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "0043bad8"
      ]
    ]
  ],
  "added": [
    [
      "005c20b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005c20c4",
      "PARAM",
      [
        "storage",
        "002b805b",
        null,
        "string"
      ]
    ],
    [
      "005c20c8",
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
- 005c1d08 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c1d08 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c1d08 ["INT_ADD", "register:8:8", ["register:8:8", "const:fffffffffffffff0:8"]]
- 005c1d08 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c1d0c ["COPY", "register:40e8:8", ["register:8:8"]]
- 005c1d10 ["COPY", "register:4000:8", ["const:2b7000:8"]]
~~~


<a id="compare-5a89fb01619232c836fe4435eb8ca3ea"></a>

### [`005c1d1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d1c.md) → [`005c20cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20cc.md) FUN_005c20cc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 8件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`0069a55c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069a/0069a55c.md) [`0069f154`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0069f/0069f154.md) [`006a2ae8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a2/006a2ae8.md) [`0089e8d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0089e/0089e8d4.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 8件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`0069a90c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069a/0069a90c.md) [`0069f504`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0069f/0069f504.md) [`006a2e98`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a2/006a2e98.md) [`0089f880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0089f/0089f880.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c20d8",
      "incomplete_value": false,
      "site": "005c20dc",
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
      "definition_site": "005c1d28",
      "incomplete_value": false,
      "site": "005c1d2c",
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
      "005c20d8",
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
      "005c20d8",
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
- 005c1d2c ["INT_ADD", "register:40f0:8", ["const:5c1d2c:8", "const:4:8"]]
- 005c1d2c ["CALL", null, ["callee:0043bad8:8"]]
+ 005c20dc ["INT_ADD", "register:40f0:8", ["const:5c20dc:8", "const:4:8"]]
+ 005c20dc ["CALL", null, ["callee:0043bad8:8"]]
- 005c1d24 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005c20d4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005c1d28 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005c1d28 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005c1d28 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005c1d28 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005c20d8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005c20d8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005c20d8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005c20d8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-5757c4a548b541d415141ed8935f3d94"></a>

### [`005c1d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d30.md) → [`005c20e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20e0.md) FUN_005c20e0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c1d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d30.md) · 呼出先 5件 [`005c1d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d30.md) [`005c25d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c25d0.md) [`005c26f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c26f4.md) [`005c294c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c294c.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 2件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c20e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20e0.md) · 呼出先 5件 [`005c20e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20e0.md) [`005c2980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2980.md) [`005c2aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2aa4.md) [`005c2cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2cfc.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 84.96% / 新版 84.96%

優先判定に残った影響 `call_argument_candidate` 8件, `store_condition` 9件, `unresolved_branch_alignment` 17件, `unresolved_store_alignment` 13件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c1dec",
      "incomplete_value": true,
      "site": "005c1df8",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "005c1df0",
      "incomplete_value": true,
      "site": "005c1df8",
      "value": [
        "live",
        "register:40d0:8"
      ]
    },
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c21b8",
      "incomplete_value": true,
      "site": "005c21cc",
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
            "const:c:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005c1e08",
      "incomplete_value": true,
      "site": "005c1e1c",
      "value": [
        "live",
        "register:40d8:8"
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
      "unmatched:005c1d5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c1d74",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c1da0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c2164"
      ]
    ]
  ],
  "added": [
    [
      "005c210c",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "005c2124",
      "WRITE",
      [
        "storage",
        "Stack[-0x68]",
        null,
        null
      ]
    ],
    [
      "005c2150",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c2164"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c1dc8 ["CBRANCH", null, ["local:b77:8", "register:101:1"]]
+ 005c2178 ["CBRANCH", null, ["local:b70:8", "register:101:1"]]
- 005c1df8 ["INT_ADD", "register:40f0:8", ["const:5c1df8:8", "const:4:8"]]
- 005c1df8 ["CALL", null, ["callee:005c2980:8"]]
+ 005c21a8 ["INT_ADD", "register:40f0:8", ["const:5c21a8:8", "const:4:8"]]
+ 005c21a8 ["CALL", null, ["callee:005c2980:8"]]
- 005c1e1c ["INT_ADD", "register:40f0:8", ["const:5c1e1c:8", "const:4:8"]]
- 005c1e1c ["CALL", null, ["callee:005c2980:8"]]
+ 005c21cc ["INT_ADD", "register:40f0:8", ["const:5c21cc:8", "const:4:8"]]
+ 005c21cc ["CALL", null, ["callee:005c2980:8"]]
~~~


<a id="compare-bad04e7cb64bb10b0f86cd383014b697"></a>

### [`005c25d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c25d0.md) → [`005c2980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2980.md) FUN_005c2980

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005c1d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d30.md) [`005c26f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c26f4.md) [`005c294c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c294c.md) · 呼出先 0件 
- 新版 呼出元 3件 [`005c20e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20e0.md) [`005c2aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2aa4.md) [`005c2cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2cfc.md) · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.67% / 新版 87.67%

アドレスに依存する影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c25ec",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c29c4"
      ]
    ]
  ],
  "added": [
    [
      "005c299c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c29c4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c25ec ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005c25ec ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005c25fc ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005c25fc ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 005c29ac ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 005c29ac ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 005c2610 ["BRANCH", null, ["local:b11:8"]]
+ 005c29c0 ["BRANCH", null, ["local:b13:8"]]
~~~


<a id="compare-c10d3dfe78b6a88499366ddf2ad2090b"></a>

### [`005c26f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c26f4.md) → [`005c2aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2aa4.md) FUN_005c2aa4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005c1d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d30.md) · 呼出先 2件 [`005c25d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c25d0.md) [`005c294c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c294c.md)
- 新版 呼出元 1件 [`005c20e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20e0.md) · 呼出先 2件 [`005c2980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2980.md) [`005c2cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2cfc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 90.67% / 新版 90.67%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 7件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c278c",
      "incomplete_value": true,
      "site": "005c279c",
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
            "const:c:8"
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
      "definition_site": "005c2790",
      "incomplete_value": true,
      "site": "005c279c",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c2794",
      "incomplete_value": true,
      "site": "005c279c",
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
            "const:24:8"
          ]
        ]
      ]
    },
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
      "unmatched:005c26f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c26f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c26fc",
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
      "005c2aa4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005c2aa8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c2aac",
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
- 005c279c ["INT_ADD", "register:40f0:8", ["const:5c279c:8", "const:4:8"]]
- 005c279c ["CALL", null, ["callee:005c2cfc:8"]]
+ 005c2b4c ["INT_ADD", "register:40f0:8", ["const:5c2b4c:8", "const:4:8"]]
+ 005c2b4c ["CALL", null, ["callee:005c2cfc:8"]]
- 005c26f4 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c26f4 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c26f4 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005c26f4 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c26f8 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005c26f8 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-a4d455e4f80ae30a1612c86185e2533a"></a>

### [`005c294c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c294c.md) → [`005c2cfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2cfc.md) FUN_005c2cfc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`005c1d30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c1/005c1d30.md) [`005c26f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c26f4.md) · 呼出先 1件 [`005c25d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c25d0.md)
- 新版 呼出元 2件 [`005c20e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c20e0.md) [`005c2aa4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2aa4.md) · 呼出先 1件 [`005c2980`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2980.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005c296c ["INT_ADD", "register:40f0:8", ["const:5c296c:8", "const:4:8"]]
- 005c296c ["CALL", null, ["callee:005c2980:8"]]
+ 005c2d1c ["INT_ADD", "register:40f0:8", ["const:5c2d1c:8", "const:4:8"]]
+ 005c2d1c ["CALL", null, ["callee:005c2980:8"]]
- 005c297c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005c297c ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 005c2d2c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 005c2d2c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 005c29bc ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005c29bc ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 005c2d6c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 005c2d6c ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
~~~


<a id="compare-a2e19414a4f9a4a3afbdb5837577c0eb"></a>

### [`005c2a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2a40.md) → [`005c2df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2df0.md) FUN_005c2df0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c2a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2a40.md) · 呼出先 2件 [`005c2a40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2a40.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c2df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2df0.md) · 呼出先 2件 [`005c2df0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2df0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005c2a40 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005c2a40 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005c2df0 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005c2df0 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
- 005c2a5c ["INT_ADD", "register:40f0:8", ["const:5c2a5c:8", "const:4:8"]]
- 005c2a5c ["CALL", null, ["local:b0:8"]]
+ 005c2e0c ["INT_ADD", "register:40f0:8", ["const:5c2e0c:8", "const:4:8"]]
+ 005c2e0c ["CALL", null, ["local:b0:8"]]
- 005c2a68 ["INT_ADD", "register:40f0:8", ["const:5c2a68:8", "const:4:8"]]
- 005c2a68 ["CALL", null, ["local:b0:8"]]
+ 005c2e18 ["INT_ADD", "register:40f0:8", ["const:5c2e18:8", "const:4:8"]]
+ 005c2e18 ["CALL", null, ["local:b0:8"]]
~~~


<a id="compare-9bf4848eabe250b37705956c964040eb"></a>

### [`005c2a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2a90.md) → [`005c2e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e40.md) FUN_005c2e40

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c2a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2a90.md) · 呼出先 2件 [`005c2a90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2a90.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c2e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e40.md) · 呼出先 2件 [`005c2e40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 58.82% / 新版 58.82%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c2aac",
      "incomplete_value": true,
      "site": "005c2ab0",
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


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c2a94",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c2a98",
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
      "005c2e44",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c2e48",
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
- 005c2ab0 ["INT_ADD", "register:40f0:8", ["const:5c2ab0:8", "const:4:8"]]
- 005c2ab0 ["CALL", null, ["local:b0:8"]]
+ 005c2e60 ["INT_ADD", "register:40f0:8", ["const:5c2e60:8", "const:4:8"]]
+ 005c2e60 ["CALL", null, ["local:b0:8"]]
- 005c2a90 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005c2a90 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005c2e40 ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005c2e40 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005c2a94 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c2a94 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c2a94 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005c2a94 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-882c436b1c597d66a965c24dce705728"></a>

### [`005c2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2ad4.md) → [`005c2e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e84.md) FUN_005c2e84

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005bc80c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005bc/005bc80c.md) [`005c2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2ad4.md) · 呼出先 7件 [`005c2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2ad4.md) [`005c3778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3778.md) [`005c3938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3938.md) [`005c3b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3b04.md) [`005c3d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3d5c.md)
- 新版 呼出元 2件 [`005bcbbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005bc/005bcbbc.md) [`005c2e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e84.md) · 呼出先 7件 [`005c2e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e84.md) [`005c3b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3b28.md) [`005c3ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3ce8.md) [`005c3eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3eb4.md) [`005c410c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c410c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 68.36% / 新版 68.36%

優先判定に残った影響 `call_argument_candidate` 29件, `store_condition` 5件, `unresolved_branch_alignment` 13件, `unresolved_call_alignment` 42件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c2b78",
      "incomplete_value": true,
      "site": "005c2b88",
      "value": [
        "live",
        "register:40e0:8"
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
      "definition_site": "005c2b7c",
      "incomplete_value": true,
      "site": "005c2b88",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "005c2b80",
      "incomplete_value": true,
      "site": "005c2b88",
      "value": [
        "live",
        "register:40c0:8"
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
      "unmatched:005c2ae4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c2b14",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c2b18",
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
      "005c2e94",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005c2ec4",
      "WRITE",
      [
        "storage",
        "Stack[-0x88]",
        null,
        null
      ]
    ],
    [
      "005c2ec8",
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
- 005c2b88 ["INT_ADD", "register:40f0:8", ["const:5c2b88:8", "const:4:8"]]
- 005c2b88 ["CALL", null, ["callee:005c3ce8:8"]]
+ 005c2f38 ["INT_ADD", "register:40f0:8", ["const:5c2f38:8", "const:4:8"]]
+ 005c2f38 ["CALL", null, ["callee:005c3ce8:8"]]
- 005c2bac ["INT_ADD", "register:40f0:8", ["const:5c2bac:8", "const:4:8"]]
- 005c2bac ["CALL", null, ["callee:005c3ce8:8"]]
+ 005c2f5c ["INT_ADD", "register:40f0:8", ["const:5c2f5c:8", "const:4:8"]]
+ 005c2f5c ["CALL", null, ["callee:005c3ce8:8"]]
- 005c2bc4 ["INT_ADD", "register:40f0:8", ["const:5c2bc4:8", "const:4:8"]]
- 005c2bc4 ["CALL", null, ["callee:005c3ce8:8"]]
+ 005c2f74 ["INT_ADD", "register:40f0:8", ["const:5c2f74:8", "const:4:8"]]
+ 005c2f74 ["CALL", null, ["callee:005c3ce8:8"]]
~~~


<a id="compare-777c6bea05723419ea0cbfc7e8c6c11d"></a>

### [`005c3778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3778.md) → [`005c3b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3b28.md) FUN_005c3b28

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005c2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2ad4.md) [`005c3b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3b04.md) · 呼出先 3件 [`005c3d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3d5c.md) [`00664e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664e50.md) [`00b000f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b000f0.md)
- 新版 呼出元 2件 [`005c2e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e84.md) [`005c3eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3eb4.md) · 呼出先 3件 [`005c410c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c410c.md) [`00665200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665200.md) [`00b010e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b010e4.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 97.32% / 新版 97.32%

優先判定に残った影響 `store_condition` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005c38b0"
      ],
      [
        "FALL_THROUGH",
        "005c3c60"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005c3c60",
      "incomplete_value": true,
      "site": "005c3c6c",
      "value": [
        "INT_EQUAL",
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
    },
    "old": {
      "definition_site": "005c38b0",
      "incomplete_value": true,
      "site": "005c38bc",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SLESS",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:4"
              ]
            ]
          ],
          [
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:40b8:4"
              ],
              [
                "live",
                "register:4000:4"
              ]
            ]
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
        "FALL_THROUGH",
        "005c38b0"
      ],
      [
        "FALL_THROUGH",
        "005c3c60"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005c3c60",
      "incomplete_value": true,
      "site": "005c3c70",
      "value": [
        "INT_EQUAL",
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
    },
    "old": {
      "definition_site": "005c38b0",
      "incomplete_value": true,
      "site": "005c38c0",
      "value": [
        "INT_EQUAL",
        "1",
        [
          [
            "INT_SLESS",
            "1",
            [
              "INT_SUB",
              [
                "leaf",
                "const:0:4"
              ]
            ]
          ],
          [
            "INT_SBORROW",
            "1",
            [
              [
                "live",
                "register:40b8:4"
              ],
              [
                "live",
                "register:4000:4"
              ]
            ]
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
      "unmatched:005c38b0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c3cd0"
      ]
    ]
  ],
  "added": [
    [
      "005c3c60",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c3cd0"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c37ac ["INT_ADD", "register:40f0:8", ["const:5c37ac:8", "const:4:8"]]
- 005c37ac ["CALL", null, ["callee:005c410c:8"]]
+ 005c3b5c ["INT_ADD", "register:40f0:8", ["const:5c3b5c:8", "const:4:8"]]
+ 005c3b5c ["CALL", null, ["callee:005c410c:8"]]
- 005c37bc ["INT_ADD", "register:40f0:8", ["const:5c37bc:8", "const:4:8"]]
- 005c37bc ["CALL", null, ["callee:00665200:8"]]
+ 005c3b6c ["INT_ADD", "register:40f0:8", ["const:5c3b6c:8", "const:4:8"]]
+ 005c3b6c ["CALL", null, ["callee:00665200:8"]]
- 005c37d0 ["INT_ADD", "register:40f0:8", ["const:5c37d0:8", "const:4:8"]]
- 005c37d0 ["CALL", null, ["callee:00b010e4:8"]]
+ 005c3b80 ["INT_ADD", "register:40f0:8", ["const:5c3b80:8", "const:4:8"]]
+ 005c3b80 ["CALL", null, ["callee:00b010e4:8"]]
~~~


<a id="compare-8a6c95f14bf0b878314ea54f95001c14"></a>

### [`005c3938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3938.md) → [`005c3ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3ce8.md) FUN_005c3ce8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005c2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2ad4.md) [`005c3b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3b04.md) [`005c3d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3d5c.md) · 呼出先 2件 [`00664e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664e50.md) [`00b000f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b000f0.md)
- 新版 呼出元 3件 [`005c2e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e84.md) [`005c3eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3eb4.md) [`005c410c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c410c.md) · 呼出先 2件 [`00665200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665200.md) [`00b010e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b010e4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 83.48% / 新版 83.48%

優先判定に残った影響 `call_argument_candidate` 5件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c39bc",
      "incomplete_value": true,
      "site": "005c39c8",
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
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c39b8",
      "incomplete_value": true,
      "site": "005c39c8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "1",
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
          ]
        ]
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c39d8",
      "incomplete_value": true,
      "site": "005c39e8",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "1",
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
      "unmatched:005c3938",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c393c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c3940",
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
      "005c3ce8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005c3cec",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005c3cf0",
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
- 005c39c8 ["INT_ADD", "register:40f0:8", ["const:5c39c8:8", "const:4:8"]]
- 005c39c8 ["CALL", null, ["callee:00b010e4:8"]]
+ 005c3d78 ["INT_ADD", "register:40f0:8", ["const:5c3d78:8", "const:4:8"]]
+ 005c3d78 ["CALL", null, ["callee:00b010e4:8"]]
- 005c39e8 ["INT_ADD", "register:40f0:8", ["const:5c39e8:8", "const:4:8"]]
- 005c39e8 ["CALL", null, ["callee:00b010e4:8"]]
+ 005c3d98 ["INT_ADD", "register:40f0:8", ["const:5c3d98:8", "const:4:8"]]
+ 005c3d98 ["CALL", null, ["callee:00b010e4:8"]]
- 005c3a68 ["INT_ADD", "register:40f0:8", ["const:5c3a68:8", "const:4:8"]]
- 005c3a68 ["CALL", null, ["callee:00b010e4:8"]]
+ 005c3e18 ["INT_ADD", "register:40f0:8", ["const:5c3e18:8", "const:4:8"]]
+ 005c3e18 ["CALL", null, ["callee:00b010e4:8"]]
~~~


<a id="compare-3b6486d8fe50f474e6dd3b3ec5fdb4c8"></a>

### [`005c3b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3b04.md) → [`005c3eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3eb4.md) FUN_005c3eb4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005c2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2ad4.md) · 呼出先 5件 [`005c3778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3778.md) [`005c3938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3938.md) [`005c3d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3d5c.md) [`00664e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664e50.md) [`00b000f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b000f0.md)
- 新版 呼出元 1件 [`005c2e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e84.md) · 呼出先 5件 [`005c3b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3b28.md) [`005c3ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3ce8.md) [`005c410c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c410c.md) [`00665200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665200.md) [`00b010e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b010e4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.67% / 新版 90.67%

優先判定に残った影響 `call_argument_candidate` 8件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c3f28",
      "incomplete_value": true,
      "site": "005c3f38",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "1",
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
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c3f98",
      "incomplete_value": true,
      "site": "005c3fa0",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "005c3f94",
      "incomplete_value": true,
      "site": "005c3fa0",
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
            "const:4:8"
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
      "unmatched:005c3b68",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b010e4"
      ]
    ],
    [
      "unmatched:005c3b74",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00665200"
      ]
    ],
    [
      "unmatched:005c3c9c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c3fec"
      ]
    ]
  ],
  "added": [
    [
      "005c3f18",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00b010e4"
      ]
    ],
    [
      "005c3f24",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00665200"
      ]
    ],
    [
      "005c404c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c3fec"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c3b88 ["INT_ADD", "register:40f0:8", ["const:5c3b88:8", "const:4:8"]]
- 005c3b88 ["CALL", null, ["callee:00b010e4:8"]]
+ 005c3f38 ["INT_ADD", "register:40f0:8", ["const:5c3f38:8", "const:4:8"]]
+ 005c3f38 ["CALL", null, ["callee:00b010e4:8"]]
- 005c3bf0 ["INT_ADD", "register:40f0:8", ["const:5c3bf0:8", "const:4:8"]]
- 005c3bf0 ["CALL", null, ["callee:005c3ce8:8"]]
+ 005c3fa0 ["INT_ADD", "register:40f0:8", ["const:5c3fa0:8", "const:4:8"]]
+ 005c3fa0 ["CALL", null, ["callee:005c3ce8:8"]]
- 005c3c0c ["INT_ADD", "register:40f0:8", ["const:5c3c0c:8", "const:4:8"]]
- 005c3c0c ["CALL", null, ["callee:005c3ce8:8"]]
+ 005c3fbc ["INT_ADD", "register:40f0:8", ["const:5c3fbc:8", "const:4:8"]]
+ 005c3fbc ["CALL", null, ["callee:005c3ce8:8"]]
~~~


<a id="compare-793a03f707dd4946ed2f3ecb7d109553"></a>

### [`005c3d5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3d5c.md) → [`005c410c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c410c.md) FUN_005c410c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005c2ad4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c2/005c2ad4.md) [`005c3778`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3778.md) [`005c3b04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3b04.md) · 呼出先 3件 [`005c3938`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3938.md) [`00664e50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664e50.md) [`00b000f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b00/00b000f0.md)
- 新版 呼出元 3件 [`005c2e84`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c2/005c2e84.md) [`005c3b28`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3b28.md) [`005c3eb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3eb4.md) · 呼出先 3件 [`005c3ce8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c3/005c3ce8.md) [`00665200`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665200.md) [`00b010e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b01/00b010e4.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies, operation_sequence

命令の説明率　旧版 95.45% / 新版 95.45%

優先判定に残った影響 `call_argument_candidate` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4158",
      "incomplete_value": true,
      "site": "005c4160",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4154",
      "incomplete_value": true,
      "site": "005c4160",
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
    "old": null,
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4150",
      "incomplete_value": true,
      "site": "005c4160",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "LOAD",
            "1",
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


~~~diff
- 005c3db0 ["INT_ADD", "register:40f0:8", ["const:5c3db0:8", "const:4:8"]]
- 005c3db0 ["CALL", null, ["callee:00b010e4:8"]]
+ 005c4160 ["INT_ADD", "register:40f0:8", ["const:5c4160:8", "const:4:8"]]
+ 005c4160 ["CALL", null, ["callee:00b010e4:8"]]
- 005c3dbc ["INT_ADD", "register:40f0:8", ["const:5c3dbc:8", "const:4:8"]]
- 005c3dbc ["CALL", null, ["callee:00665200:8"]]
+ 005c416c ["INT_ADD", "register:40f0:8", ["const:5c416c:8", "const:4:8"]]
+ 005c416c ["CALL", null, ["callee:00665200:8"]]
- 005c3e88 ["INT_ADD", "register:40f0:8", ["const:5c3e88:8", "const:4:8"]]
- 005c3e88 ["CALL", null, ["callee:00b010e4:8"]]
+ 005c4238 ["INT_ADD", "register:40f0:8", ["const:5c4238:8", "const:4:8"]]
+ 005c4238 ["CALL", null, ["callee:00b010e4:8"]]
~~~


<a id="compare-658836b5659228a86127349ddc4fb345"></a>

### [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) → [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) FUN_005c426c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 54件 [`005c0ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0ba4.md) [`005c0bd8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c0/005c0bd8.md) [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`005c6340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c6340.md) [`0063dd50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0063d/0063dd50.md) · 呼出先 2件 [`005c3ebc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3ebc.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 54件 [`005c0f54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c0/005c0f54.md) [`005c0f88`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c0/005c0f88.md) [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`005c66f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c66f0.md) [`0063e100`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0063e/0063e100.md) · 呼出先 2件 [`005c426c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c426c.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 85.00% / 新版 85.00%

優先判定に残った影響 `unresolved_store_alignment` 4件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c3ec0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c3ec4",
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
      "005c4270",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c4274",
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
- 005c3ebc ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
- 005c3ebc ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005c426c ["INT_EQUAL", "tmp:0:1", ["register:4008:8", "const:0:8"]]
+ 005c426c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 005c3ec0 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c3ec0 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c3ec0 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005c3ec0 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c3ec4 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005c3ec4 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005c3ec4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005c3ec4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-91d216996580bc6a4ff5a347414ac019"></a>

### [`005c3f0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c3/005c3f0c.md) → [`005c42bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c42bc.md) _INIT_64

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 5件 [`0043aeb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043a/0043aeb0.md) [`0043b838`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b838.md) [`00c57f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f00.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md)
- 新版 呼出元 0件  · 呼出先 5件 [`0043b1d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043b1d0.md) [`0043bb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bb58.md) [`00c58ed0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58ed0.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 74.01% / 新版 74.01%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4454",
      "incomplete_value": true,
      "site": "005c4458",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "005c4448",
      "incomplete_value": true,
      "site": "005c4458",
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
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c444c",
      "incomplete_value": true,
      "site": "005c4458",
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
      "unmatched:005c3f10",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c3f14",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c3f18",
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
      "005c42c0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005c42c4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c42c8",
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
- 005c40a8 ["INT_ADD", "register:40f0:8", ["const:5c40a8:8", "const:4:8"]]
- 005c40a8 ["CALL", null, ["callee:0043bb58:8"]]
+ 005c4458 ["INT_ADD", "register:40f0:8", ["const:5c4458:8", "const:4:8"]]
+ 005c4458 ["CALL", null, ["callee:0043bb58:8"]]
- 005c40d0 ["INT_ADD", "register:40f0:8", ["const:5c40d0:8", "const:4:8"]]
- 005c40d0 ["CALL", null, ["callee:0043bb58:8"]]
+ 005c4480 ["INT_ADD", "register:40f0:8", ["const:5c4480:8", "const:4:8"]]
+ 005c4480 ["CALL", null, ["callee:0043bb58:8"]]
- 005c4140 ["INT_ADD", "register:40f0:8", ["const:5c4140:8", "const:4:8"]]
- 005c4140 ["CALL", null, ["callee:00c58ed0:8"]]
+ 005c44f0 ["INT_ADD", "register:40f0:8", ["const:5c44f0:8", "const:4:8"]]
+ 005c44f0 ["CALL", null, ["callee:00c58ed0:8"]]
~~~


<a id="compare-8a8a359b2e60492b34a1d2651950f894"></a>

### [`005c429c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c429c.md) → [`005c464c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c464c.md) FUN_005c464c

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 16件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`005c45e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c45e0.md) [`00687668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687668.md)
- 新版 呼出元 1件 [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) · 呼出先 16件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`005c4990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4990.md) [`00687a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00687/00687a18.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.95% / 新版 71.95%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 2件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4744",
      "incomplete_value": true,
      "site": "005c4754",
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
    "ordinal": 6,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4780",
      "incomplete_value": false,
      "site": "005c4794",
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
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c442c",
      "incomplete_value": true,
      "site": "005c4434",
      "value": [
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
      "unmatched:005c42cc",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c42e0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c46a0"
      ]
    ],
    [
      "unmatched:005c4344",
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
      "005c467c",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005c4690",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c46a0"
      ]
    ],
    [
      "005c46f4",
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
- 005c43a4 ["INT_ADD", "register:40f0:8", ["const:5c43a4:8", "const:4:8"]]
- 005c43a4 ["CALL", null, ["callee:00448254:8"]]
+ 005c4754 ["INT_ADD", "register:40f0:8", ["const:5c4754:8", "const:4:8"]]
+ 005c4754 ["CALL", null, ["callee:00448254:8"]]
- 005c43e4 ["INT_ADD", "register:40f0:8", ["const:5c43e4:8", "const:4:8"]]
- 005c43e4 ["CALL", null, ["callee:0047e96c:8"]]
+ 005c4794 ["INT_ADD", "register:40f0:8", ["const:5c4794:8", "const:4:8"]]
+ 005c4794 ["CALL", null, ["callee:0047e96c:8"]]
- 005c4434 ["INT_ADD", "register:40f0:8", ["const:5c4434:8", "const:4:8"]]
- 005c4434 ["CALL", null, ["callee:00c54d90:8"]]
+ 005c47e4 ["INT_ADD", "register:40f0:8", ["const:5c47e4:8", "const:4:8"]]
+ 005c47e4 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-84085d2b5d8625ddb2267fabe1269648"></a>

### [`005c45e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c45e0.md) → [`005c4990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4990.md) FUN_005c4990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005c429c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c429c.md) [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) · 呼出先 12件 [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md) [`00684ff0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00684/00684ff0.md) [`006853b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006853b4.md) [`006855c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00685/006855c8.md) [`00687668`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687668.md)
- 新版 呼出元 2件 [`005c464c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c464c.md) [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) · 呼出先 12件 [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md) [`006853a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00685/006853a0.md) [`00685764`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00685/00685764.md) [`00685978`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00685/00685978.md) [`00687a18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00687/00687a18.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 79.46% / 新版 79.46%

優先判定に残った影響 `call_argument_candidate` 11件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 17件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c49d4",
      "incomplete_value": true,
      "site": "005c49d8",
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
            "const:1648:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005c4624",
      "incomplete_value": true,
      "site": "005c4628",
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
    "ordinal": 1,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c49c8",
      "incomplete_value": true,
      "site": "005c49d8",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c49cc",
      "incomplete_value": true,
      "site": "005c49d8",
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
      "unmatched:005c45e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c45e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c45ec",
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
      "005c4994",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005c4998",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005c499c",
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
- 005c4628 ["INT_ADD", "register:40f0:8", ["const:5c4628:8", "const:4:8"]]
- 005c4628 ["CALL", null, ["callee:00687bb8:8"]]
+ 005c49d8 ["INT_ADD", "register:40f0:8", ["const:5c49d8:8", "const:4:8"]]
+ 005c49d8 ["CALL", null, ["callee:00687bb8:8"]]
- 005c4648 ["INT_ADD", "register:40f0:8", ["const:5c4648:8", "const:4:8"]]
- 005c4648 ["CALL", null, ["callee:00687a18:8"]]
+ 005c49f8 ["INT_ADD", "register:40f0:8", ["const:5c49f8:8", "const:4:8"]]
+ 005c49f8 ["CALL", null, ["callee:00687a18:8"]]
- 005c4660 ["INT_ADD", "register:40f0:8", ["const:5c4660:8", "const:4:8"]]
- 005c4660 ["CALL", null, ["callee:00c59010:8"]]
+ 005c4a10 ["INT_ADD", "register:40f0:8", ["const:5c4a10:8", "const:4:8"]]
+ 005c4a10 ["CALL", null, ["callee:00c59010:8"]]
~~~


<a id="compare-b64e926a91ae8ec4ee188152e949d5f7"></a>

### [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) → [`005c4d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4d48.md) FUN_005c4d48

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) · 呼出先 30件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467ba0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467ba0.md) [`00469d0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00469/00469d0c.md) [`0046a290`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046a/0046a290.md)
- 新版 呼出元 1件 [`005c80f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c80f0.md) · 呼出先 30件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467ec0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467ec0.md) [`0046a02c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046a02c.md) [`0046a5b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046a/0046a5b0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.27% / 新版 71.27%

優先判定に残った影響 `call_argument_candidate` 102件, `store_condition` 4件, `unresolved_branch_alignment` 20件, `unresolved_call_alignment` 42件, `unresolved_store_alignment` 35件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4de0",
      "incomplete_value": true,
      "site": "005c4df4",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "005c4de4",
      "incomplete_value": false,
      "site": "005c4df4",
      "value": [
        "leaf",
        "const:a6:8"
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c4de8",
      "incomplete_value": false,
      "site": "005c4df4",
      "value": [
        "leaf",
        "const:a6:8"
      ]
    },
    "old": null,
    "ordinal": 5,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c499c",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c49a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c49a4",
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
      "005c4d4c",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "005c4d50",
      "WRITE",
      [
        "storage",
        "Stack[-0x90]",
        null,
        null
      ]
    ],
    [
      "005c4d54",
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
- 005c4a44 ["INT_ADD", "register:40f0:8", ["const:5c4a44:8", "const:4:8"]]
- 005c4a44 ["CALL", null, ["callee:00467ec0:8"]]
+ 005c4df4 ["INT_ADD", "register:40f0:8", ["const:5c4df4:8", "const:4:8"]]
+ 005c4df4 ["CALL", null, ["callee:00467ec0:8"]]
- 005c4abc ["INT_ADD", "register:40f0:8", ["const:5c4abc:8", "const:4:8"]]
- 005c4abc ["CALL", null, ["callee:00687bb8:8"]]
+ 005c4e6c ["INT_ADD", "register:40f0:8", ["const:5c4e6c:8", "const:4:8"]]
+ 005c4e6c ["CALL", null, ["callee:00687bb8:8"]]
- 005c4b04 ["INT_ADD", "register:40f0:8", ["const:5c4b04:8", "const:4:8"]]
- 005c4b04 ["CALL", null, ["callee:0046a5b0:8"]]
+ 005c4eb4 ["INT_ADD", "register:40f0:8", ["const:5c4eb4:8", "const:4:8"]]
+ 005c4eb4 ["CALL", null, ["callee:0046a5b0:8"]]
~~~


<a id="compare-cc1acaad08d330f32519e636ee13e83f"></a>

### [`005c5f90`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c5/005c5f90.md) → [`005c6340`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6340.md) FUN_005c6340

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005c4998`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c4/005c4998.md) [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00664c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c0c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 3件 [`005c4d48`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c4/005c4d48.md) [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00664fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664fbc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence

命令の説明率　旧版 97.67% / 新版 97.67%

~~~diff
- 005c5fb4 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005c5fb4 ["CBRANCH", null, ["local:b34:8", "tmp:0:1"]]
+ 005c6364 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 005c6364 ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
- 005c5fcc ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005c5fcc ["CBRANCH", null, ["local:b34:8", "tmp:0:1"]]
+ 005c637c ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 005c637c ["CBRANCH", null, ["local:b36:8", "tmp:0:1"]]
- 005c6038 ["INT_ADD", "register:40f0:8", ["const:5c6038:8", "const:4:8"]]
- 005c6038 ["CALL", null, ["callee:00c58f30:8"]]
+ 005c63e8 ["INT_ADD", "register:40f0:8", ["const:5c63e8:8", "const:4:8"]]
+ 005c63e8 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-51dfa12d37d5f88649bc32de2f58ba56"></a>

### [`005c6194`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c6194.md) → [`005c6544`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6544.md) FUN_005c6544

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 8件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) [`00a466a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00a46/00a466a4.md) · 呼出先 2件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 8件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) [`00a47698`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00a47/00a47698.md) · 呼出先 2件 [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 63.16% / 新版 63.16%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c656c",
      "incomplete_value": true,
      "site": "005c6570",
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
            "const:50:8"
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
      "unmatched:005c6194",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c6198",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c61b4",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005c6544",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c6548",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005c6564",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c61c0 ["INT_ADD", "register:40f0:8", ["const:5c61c0:8", "const:4:8"]]
- 005c61c0 ["CALL", null, ["callee:005d8fb8:8"]]
+ 005c6570 ["INT_ADD", "register:40f0:8", ["const:5c6570:8", "const:4:8"]]
+ 005c6570 ["CALL", null, ["callee:005d8fb8:8"]]
- 005c6194 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c6194 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c6194 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005c6194 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c6198 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005c6198 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-e06c8e5c9f4af49081e24d5e56ea1d73"></a>

### [`005c61e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c61e0.md) → [`005c6590`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6590.md) FUN_005c6590

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 4件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`006103fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00610/006103fc.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 4件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`006107ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00610/006107ac.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 4件 [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 82.86% / 新版 82.86%

優先判定に残った影響 `store_value` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005c65b4",
      "incomplete_value": false,
      "site": "005c65b8",
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
      "definition_site": "005c6204",
      "incomplete_value": false,
      "site": "005c6208",
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
      "005c65b8",
      "DATA",
      [
        "storage",
        "00c8b880",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005c6240",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005c6248",
      "DATA",
      [
        "storage",
        "00c8b828",
        null,
        "undefined *"
      ]
    ]
  ],
  "added": [
    [
      "005c65b8",
      "DATA",
      [
        "storage",
        "00c8c850",
        null,
        "undefined *"
      ]
    ],
    [
      "005c65f0",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ],
    [
      "005c65f8",
      "DATA",
      [
        "storage",
        "00c8c7f8",
        null,
        "undefined *"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c61f4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 005c61f4 ["CBRANCH", null, ["local:b6:8", "tmp:0:1"]]
+ 005c65a4 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 005c65a4 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 005c61f8 ["COPY", "register:4040:8", ["const:c8b000:8"]]
+ 005c65a8 ["COPY", "register:4040:8", ["const:c8c000:8"]]
- 005c61fc ["COPY", "tmp:0:8", ["const:870:8"]]
- 005c61fc ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005c61fc ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005c61fc ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
+ 005c65ac ["COPY", "tmp:0:8", ["const:840:8"]]
+ 005c65ac ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
+ 005c65ac ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
+ 005c65ac ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-720429d3469db95e52c1feac7c3f4104"></a>

### [`005c626c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c626c.md) → [`005c661c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c661c.md) FUN_005c661c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 3件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`00700b50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00700/00700b50.md) [`00adf288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00adf/00adf288.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) [`00700f00`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00700/00700f00.md) [`00ae027c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00ae0/00ae027c.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 92.45% / 新版 92.45%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c66c4",
      "incomplete_value": true,
      "site": "005c66c8",
      "value": [
        "LOAD",
        "8",
        [
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
    "slot": 1
  }
]
~~~


~~~diff
- 005c6318 ["INT_ADD", "register:40f0:8", ["const:5c6318:8", "const:4:8"]]
- 005c6318 ["CALL", null, ["callee:0043bf04:8"]]
+ 005c66c8 ["INT_ADD", "register:40f0:8", ["const:5c66c8:8", "const:4:8"]]
+ 005c66c8 ["CALL", null, ["callee:0043bf04:8"]]
- 005c62bc ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005c62bc ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 005c666c ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 005c666c ["CBRANCH", null, ["local:b11:8", "tmp:0:1"]]
- 005c62d4 ["INT_ADD", "register:40f0:8", ["const:5c62d4:8", "const:4:8"]]
- 005c62d4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005c6684 ["INT_ADD", "register:40f0:8", ["const:5c6684:8", "const:4:8"]]
+ 005c6684 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-32ca9bcdec6b6f7feb933fd105d89679"></a>

### [`005c6340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c6340.md) → [`005c66f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c66f0.md) FUN_005c66f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) · 呼出先 23件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`0048795c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048795c.md) [`0048797c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00487/0048797c.md)
- 新版 呼出元 1件 [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) · 呼出先 23件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`00487c7c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c7c.md) [`00487c9c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00487/00487c9c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_destination, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 79.69% / 新版 79.69%

優先判定に残った影響 `call_argument_candidate` 9件, `store_destination` 1件, `store_value` 3件, `unresolved_branch_alignment` 8件, `unresolved_call_alignment` 7件, `unresolved_store_alignment` 26件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005c6c24",
      "incomplete_value": true,
      "site": "005c6c28",
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
      "definition_site": "005c6874",
      "incomplete_value": true,
      "site": "005c6878",
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
    "kind": "store_value",
    "new": {
      "definition_site": "005c6c20",
      "incomplete_value": true,
      "site": "005c6c2c",
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
      "definition_site": "005c6870",
      "incomplete_value": true,
      "site": "005c687c",
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
    "ordinal": 69,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_destination",
    "new": {
      "definition_site": "005c6c38",
      "incomplete_value": true,
      "site": "005c6c38",
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
      "definition_site": "005c6888",
      "incomplete_value": true,
      "site": "005c6888",
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
    "ordinal": 70,
    "slot": 1
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c6358",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c636c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f0]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c6378",
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
      "005c6708",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005c671c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1f0]",
        null,
        null
      ]
    ],
    [
      "005c6728",
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
- 005c6428 ["INT_ADD", "register:40f0:8", ["const:5c6428:8", "const:4:8"]]
- 005c6428 ["CALL", null, ["callee:00c54d60:8"]]
+ 005c67d8 ["INT_ADD", "register:40f0:8", ["const:5c67d8:8", "const:4:8"]]
+ 005c67d8 ["CALL", null, ["callee:00c54d60:8"]]
- 005c6474 ["INT_ADD", "register:40f0:8", ["const:5c6474:8", "const:4:8"]]
- 005c6474 ["CALL", null, ["callee:00c54d60:8"]]
+ 005c6824 ["INT_ADD", "register:40f0:8", ["const:5c6824:8", "const:4:8"]]
+ 005c6824 ["CALL", null, ["callee:00c54d60:8"]]
- 005c64cc ["COPY", "register:4040:8", ["const:c64000:8"]]
+ 005c687c ["COPY", "register:4040:8", ["const:c65000:8"]]
~~~


<a id="compare-bab0d876ac77bae8782e842b4029945c"></a>

### [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) → [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) FUN_005c6d68

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 37件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0044d960`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0044d/0044d960.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md) [`0046da94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046da94.md) [`0046db14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046db14.md)
- 新版 呼出元 1件 [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 37件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0044dc80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0044d/0044dc80.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md) [`0046ddb4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046ddb4.md) [`0046de34`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046de34.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 87.66% / 新版 87.66%

優先判定に残った影響 `call_argument_candidate` 30件, `unresolved_branch_alignment` 3件, `unresolved_call_alignment` 18件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c6f30",
      "incomplete_value": true,
      "site": "005c6f38",
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
            "register:40b8:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 15,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c6f34",
      "incomplete_value": true,
      "site": "005c6f38",
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
    "old": {
      "definition_site": "005c6b84",
      "incomplete_value": true,
      "site": "005c6b88",
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
    "ordinal": 15,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c6b9c",
      "incomplete_value": true,
      "site": "005c6bb0",
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
            "register:40b8:8"
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
      "005c6dd0",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "dword"
      ]
    ],
    [
      "005c6de8",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "qword"
      ]
    ],
    [
      "005c6e00",
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
      "005c6dd0",
      "DATA",
      [
        "storage",
        "0039b1b4",
        null,
        "qword"
      ]
    ],
    [
      "005c6de8",
      "DATA",
      [
        "storage",
        "0039b1bc",
        null,
        "dword"
      ]
    ],
    [
      "005c6e00",
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
- 005c6b88 ["INT_ADD", "register:40f0:8", ["const:5c6b88:8", "const:4:8"]]
- 005c6b88 ["CALL", null, ["callee:00687bb8:8"]]
+ 005c6f38 ["INT_ADD", "register:40f0:8", ["const:5c6f38:8", "const:4:8"]]
+ 005c6f38 ["CALL", null, ["callee:00687bb8:8"]]
- 005c6bb0 ["INT_ADD", "register:40f0:8", ["const:5c6bb0:8", "const:4:8"]]
- 005c6bb0 ["CALL", null, ["callee:00688250:8"]]
+ 005c6f60 ["INT_ADD", "register:40f0:8", ["const:5c6f60:8", "const:4:8"]]
+ 005c6f60 ["CALL", null, ["callee:00688250:8"]]
- 005c6c30 ["INT_ADD", "register:40f0:8", ["const:5c6c30:8", "const:4:8"]]
- 005c6c30 ["CALL", null, ["callee:008b89cc:8"]]
+ 005c6fe0 ["INT_ADD", "register:40f0:8", ["const:5c6fe0:8", "const:4:8"]]
+ 005c6fe0 ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-1864a9f6f4e83ac57a9fbcba82bd3ced"></a>

### [`005c7260`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7260.md) → [`005c7610`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c7/005c7610.md) FUN_005c7610

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) · 呼出先 12件 [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00859ba4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00859/00859ba4.md) [`0085b2fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0085b/0085b2fc.md)
- 新版 呼出元 1件 [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) · 呼出先 12件 [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`0085ab50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085a/0085ab50.md) [`0085c2a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0085c/0085c2a8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 90.24% / 新版 90.24%

優先判定に残った影響 `call_argument_candidate` 3件, `store_condition` 1件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c76d8",
      "incomplete_value": false,
      "site": "005c76e0",
      "value": [
        "leaf",
        "const:a:8"
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
      "definition_site": "005c76dc",
      "incomplete_value": false,
      "site": "005c76e0",
      "value": [
        "leaf",
        "const:0:8"
      ]
    },
    "old": null,
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c7564",
      "incomplete_value": false,
      "site": "005c756c",
      "value": [
        "leaf",
        "const:a:8"
      ]
    },
    "ordinal": 27,
    "slot": 2
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c7260",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c7264",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c7278",
      "READ",
      [
        "storage",
        "002c4198",
        null,
        "undefined8"
      ]
    ]
  ],
  "added": [
    [
      "005c7610",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005c7614",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005c7628",
      "READ",
      [
        "storage",
        "002c41e8",
        null,
        "undefined8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c7330 ["INT_ADD", "register:40f0:8", ["const:5c7330:8", "const:4:8"]]
- 005c7330 ["CALL", null, ["callee:0047d134:8"]]
+ 005c76e0 ["INT_ADD", "register:40f0:8", ["const:5c76e0:8", "const:4:8"]]
+ 005c76e0 ["CALL", null, ["callee:0047d134:8"]]
- 005c756c ["INT_ADD", "register:40f0:8", ["const:5c756c:8", "const:4:8"]]
- 005c756c ["CALL", null, ["callee:0047d134:8"]]
+ 005c791c ["INT_ADD", "register:40f0:8", ["const:5c791c:8", "const:4:8"]]
+ 005c791c ["CALL", null, ["callee:0047d134:8"]]
- 005c7260 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c7260 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c7260 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005c7260 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
~~~


<a id="compare-1326be8d9b732729833191d28c45f089"></a>

### [`005c7638`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7638.md) → [`005c79e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c7/005c79e8.md) FUN_005c79e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0060a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060a/0060a8e0.md) [`00b3d6b4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3d/00b3d6b4.md) · 呼出先 2件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 4件 [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0060ac90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060a/0060ac90.md) [`00b3e6a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3e/00b3e6a8.md) · 呼出先 2件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 83.67% / 新版 83.67%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 3件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c7a48",
      "incomplete_value": false,
      "site": "005c7a50",
      "value": [
        "leaf",
        "const:28:8"
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
        "005c76c4"
      ],
      [
        "FALL_THROUGH",
        "005c7a74"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005c7a74",
      "incomplete_value": true,
      "site": "005c7a78",
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
      "definition_site": "005c76c4",
      "incomplete_value": true,
      "site": "005c76c8",
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
      "unmatched:005c7638",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c763c",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c7640",
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
      "005c79e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005c79ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005c79f0",
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
- 005c76a0 ["INT_ADD", "register:40f0:8", ["const:5c76a0:8", "const:4:8"]]
- 005c76a0 ["CALL", null, ["callee:00c58f30:8"]]
+ 005c7a50 ["INT_ADD", "register:40f0:8", ["const:5c7a50:8", "const:4:8"]]
+ 005c7a50 ["CALL", null, ["callee:00c58f30:8"]]
- 005c7638 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c7638 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c7638 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 005c7638 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c763c ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005c763c ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-6d7db1b508d5a8c939f1a8c4a911a482"></a>

### [`005c76fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c76fc.md) → [`005c7aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c7/005c7aac.md) FUN_005c7aac

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 4件 [`005c69b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c6/005c69b8.md) [`005c8604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8604.md) [`005c8800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8800.md) [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 4件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58160`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58160.md)
- 新版 呼出元 4件 [`005c6d68`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c6/005c6d68.md) [`005c89b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c89b4.md) [`005c8bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c8bb0.md) [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) · 呼出先 4件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59130`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59130.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 74.81% / 新版 74.81%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 14件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 29件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c7918",
      "incomplete_value": true,
      "site": "005c791c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:30:8"
              ]
            ]
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
      "unmatched:005c76fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c7700",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c7704",
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
      "005c7aac",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005c7ab0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005c7ab4",
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
- 005c791c ["INT_ADD", "register:40f0:8", ["const:5c791c:8", "const:4:8"]]
- 005c791c ["CALL", null, ["callee:0043bf04:8"]]
+ 005c7ccc ["INT_ADD", "register:40f0:8", ["const:5c7ccc:8", "const:4:8"]]
+ 005c7ccc ["CALL", null, ["callee:0043bf04:8"]]
- 005c76fc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c76fc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c76fc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 005c76fc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c7700 ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 005c7700 ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 005c7700 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005c7700 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-17e9bef789d15ff67b88457411eb11eb"></a>

### [`005c7d40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c7d40.md) → [`005c80f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c80f0.md) FUN_005c80f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`00997090`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00997/00997090.md) · 呼出先 29件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`004678a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/004678a0.md) [`00467b6c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467b6c.md) [`00467df4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467df4.md) [`00467f5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00467/00467f5c.md)
- 新版 呼出元 1件 [`0099803c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00998/0099803c.md) · 呼出先 29件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00467bc0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467bc0.md) [`00467e8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00467/00467e8c.md) [`00468114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/00468114.md) [`0046827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00468/0046827c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 88.75% / 新版 88.75%

優先判定に残った影響 `call_argument_candidate` 41件, `unresolved_branch_alignment` 9件, `unresolved_call_alignment` 1件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c819c",
      "incomplete_value": true,
      "site": "005c81ac",
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
      "definition_site": "005c81a0",
      "incomplete_value": false,
      "site": "005c81ac",
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
      "definition_site": "005c81a4",
      "incomplete_value": true,
      "site": "005c81ac",
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
    "old": null,
    "ordinal": 9,
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005c7d74",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c7ee8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c847c"
      ]
    ],
    [
      "005c82ac",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005c7f10"
      ]
    ]
  ],
  "added": [
    [
      "005c8124",
      "WRITE",
      [
        "storage",
        "Stack[-0xa0]",
        null,
        null
      ]
    ],
    [
      "005c8298",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c847c"
      ]
    ],
    [
      "005c82ac",
      "UNCONDITIONAL_JUMP",
      [
        "local_branch",
        "005c82c0"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c7dfc ["INT_ADD", "register:40f0:8", ["const:5c7dfc:8", "const:4:8"]]
- 005c7dfc ["CALL", null, ["callee:004682b4:8"]]
+ 005c81ac ["INT_ADD", "register:40f0:8", ["const:5c81ac:8", "const:4:8"]]
+ 005c81ac ["CALL", null, ["callee:004682b4:8"]]
- 005c7e5c ["INT_ADD", "register:40f0:8", ["const:5c7e5c:8", "const:4:8"]]
- 005c7e5c ["CALL", null, ["callee:0046a02c:8"]]
+ 005c820c ["INT_ADD", "register:40f0:8", ["const:5c820c:8", "const:4:8"]]
+ 005c820c ["CALL", null, ["callee:0046a02c:8"]]
- 005c7e68 ["INT_ADD", "register:40f0:8", ["const:5c7e68:8", "const:4:8"]]
- 005c7e68 ["CALL", null, ["callee:00468f3c:8"]]
+ 005c8218 ["INT_ADD", "register:40f0:8", ["const:5c8218:8", "const:4:8"]]
+ 005c8218 ["CALL", null, ["callee:00468f3c:8"]]
~~~


<a id="compare-38294540dcd55d473d6e73ef83eff760"></a>

### [`005c8534`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8534.md) → [`005c88e4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c88e4.md) FUN_005c88e4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.08% / 新版 98.08%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c8590",
      "incomplete_value": false,
      "site": "005c8594",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "005c858c",
      "incomplete_value": true,
      "site": "005c8594",
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
      "unmatched:005c8588",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c894c"
      ]
    ]
  ],
  "added": [
    [
      "005c8938",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005c894c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005c8594 ["INT_ADD", "register:40f0:8", ["const:5c8594:8", "const:4:8"]]
- 005c8594 ["CALL", null, ["callee:00c54d90:8"]]
+ 005c8944 ["INT_ADD", "register:40f0:8", ["const:5c8944:8", "const:4:8"]]
+ 005c8944 ["CALL", null, ["callee:00c54d90:8"]]
- 005c8550 ["INT_ADD", "register:40f0:8", ["const:5c8550:8", "const:4:8"]]
- 005c8550 ["CALL", null, ["callee:00c58f50:8"]]
+ 005c8900 ["INT_ADD", "register:40f0:8", ["const:5c8900:8", "const:4:8"]]
+ 005c8900 ["CALL", null, ["callee:00c58f50:8"]]
- 005c8564 ["INT_ADD", "register:40f0:8", ["const:5c8564:8", "const:4:8"]]
- 005c8564 ["CALL", null, ["callee:00c54d90:8"]]
+ 005c8914 ["INT_ADD", "register:40f0:8", ["const:5c8914:8", "const:4:8"]]
+ 005c8914 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-6e648d96c16b892ea0611766ddb00df9"></a>

### [`005c8604`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8604.md) → [`005c89b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c89b4.md) FUN_005c89b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d8fc4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8fc4.md) · 呼出先 6件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c76fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c76fc.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`00b07288`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b07/00b07288.md) [`00b3bf30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00b3b/00b3bf30.md)
- 新版 呼出元 1件 [`005d9374`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d9/005d9374.md) · 呼出先 6件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005c7aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c7/005c7aac.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`00b0827c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b08/00b0827c.md) [`00b3cf24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00b3c/00b3cf24.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.61% / 新版 86.61%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 5件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005c8644",
      "incomplete_value": true,
      "site": "005c865c",
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c8a08",
      "incomplete_value": true,
      "site": "005c8a0c",
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
    "old": {
      "definition_site": "005c8658",
      "incomplete_value": true,
      "site": "005c865c",
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
      "unmatched:005c8604",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c8608",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c860c",
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
      "005c89b4",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005c89b8",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005c89bc",
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
- 005c865c ["INT_ADD", "register:40f0:8", ["const:5c865c:8", "const:4:8"]]
- 005c865c ["CALL", null, ["callee:00b0827c:8"]]
+ 005c8a0c ["INT_ADD", "register:40f0:8", ["const:5c8a0c:8", "const:4:8"]]
+ 005c8a0c ["CALL", null, ["callee:00b0827c:8"]]
- 005c8604 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005c8604 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005c8604 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffb0:8"]]
- 005c8604 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005c8608 ["COPY", "tmp:0:8", ["register:40d0:8"]]
- 005c8608 ["COPY", "tmp:1:8", ["register:40c8:8"]]
- 005c8608 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005c8608 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-a4bc04f66c391f305585d12b6472620d"></a>

### [`005c8800`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8800.md) → [`005c8bb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c8/005c8bb0.md) FUN_005c8bb0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005d9f8c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d9/005d9f8c.md) · 呼出先 13件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`005c76fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c7/005c76fc.md) [`0071c4b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0071c/0071c4b8.md) [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6efc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6efc.md)
- 新版 呼出元 1件 [`005da33c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005da/005da33c.md) · 呼出先 13件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`005c7aac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c7/005c7aac.md) [`0071c868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0071c/0071c868.md) [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7ea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7ea8.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 29.81% / 新版 29.81%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 45件, `unresolved_call_alignment` 17件, `unresolved_store_alignment` 79件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c8bd4",
      "incomplete_value": true,
      "site": "005c8be8",
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
    "ordinal": 0,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c8be4",
      "incomplete_value": true,
      "site": "005c8be8",
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
    "old": {
      "definition_site": "005c8834",
      "incomplete_value": true,
      "site": "005c8838",
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
    "ordinal": 0,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c90ac",
      "incomplete_value": false,
      "site": "005c90c0",
      "value": [
        "leaf",
        "const:4d:8"
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
      "unmatched:005c8800",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c8804",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c8808",
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
      "005c8bb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005c8bb4",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005c8bb8",
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
- 005c8838 ["INT_ADD", "register:40f0:8", ["const:5c8838:8", "const:4:8"]]
- 005c8838 ["CALL", null, ["callee:00b0827c:8"]]
+ 005c8be8 ["INT_ADD", "register:40f0:8", ["const:5c8be8:8", "const:4:8"]]
+ 005c8be8 ["CALL", null, ["callee:00b0827c:8"]]
- 005c8be8 ["INT_ADD", "tmp:0:8", ["register:40b0:8", "const:248:8"]]
- 005c8be8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005c8d10 ["INT_ADD", "register:40f0:8", ["const:5c8d10:8", "const:4:8"]]
- 005c8d10 ["CALL", null, ["callee:00aa4e88:8"]]
+ 005c90c0 ["INT_ADD", "register:40f0:8", ["const:5c90c0:8", "const:4:8"]]
+ 005c90c0 ["CALL", null, ["callee:00aa4e88:8"]]
~~~


<a id="compare-c8e87c277154546765561d7c8c91a2f2"></a>

### [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) → [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) FUN_005c92ec

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`0098546c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00985/0098546c.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 70件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00440fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440fb0.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046ca04`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046c/0046ca04.md)
- 新版 呼出元 2件 [`00986418`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00986/00986418.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 70件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`004412d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/004412d0.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046cd24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046c/0046cd24.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, store_value, unresolved_branch_alignment, unresolved_call_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 60.53% / 新版 60.53%

優先判定に残った影響 `call_argument_candidate` 71件, `store_condition` 17件, `store_value` 2件, `unresolved_branch_alignment` 132件, `unresolved_call_alignment` 156件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 206件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005ca474",
      "value": [
        "live",
        "register:40a0:4"
      ]
    },
    "old": {
      "definition_site": null,
      "incomplete_value": true,
      "site": "005c944c",
      "value": [
        "live",
        "register:40e0:4"
      ]
    },
    "ordinal": 57,
    "slot": 2
  },
  {
    "confidence": "bounded",
    "kind": "store_value",
    "new": {
      "definition_site": "005cb9a0",
      "incomplete_value": false,
      "site": "005cb9a0",
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
            "const:928:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cb5f0",
      "incomplete_value": false,
      "site": "005cb5f0",
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
            "const:958:8"
          ]
        ]
      ]
    },
    "ordinal": 363,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005c9378",
      "incomplete_value": true,
      "site": "005c937c",
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
      "definition_site": "005c8fc8",
      "incomplete_value": true,
      "site": "005c8fcc",
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
      "unmatched:005c8f3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c8f40",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005c8f44",
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
      "005c92ec",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005c92f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005c92f4",
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
- 005c8fcc ["INT_ADD", "register:40f0:8", ["const:5c8fcc:8", "const:4:8"]]
- 005c8fcc ["CALL", null, ["callee:008b8a14:8"]]
+ 005c937c ["INT_ADD", "register:40f0:8", ["const:5c937c:8", "const:4:8"]]
+ 005c937c ["CALL", null, ["callee:008b8a14:8"]]
- 005c9010 ["INT_ADD", "register:40f0:8", ["const:5c9010:8", "const:4:8"]]
- 005c9010 ["CALL", null, ["callee:005d9054:8"]]
+ 005c93c0 ["INT_ADD", "register:40f0:8", ["const:5c93c0:8", "const:4:8"]]
+ 005c93c0 ["CALL", null, ["callee:005d9054:8"]]
- 005c9094 ["INT_ADD", "register:40f0:8", ["const:5c9094:8", "const:4:8"]]
- 005c9094 ["CALL", null, ["callee:005c464c:8"]]
+ 005c9444 ["INT_ADD", "register:40f0:8", ["const:5c9444:8", "const:4:8"]]
+ 005c9444 ["CALL", null, ["callee:005c464c:8"]]
~~~


<a id="compare-41808654fbf9b66f504aef47fcd39f9d"></a>

### [`005cc1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc1f4.md) → [`005cc5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005cc5a4.md) FUN_005cc5a4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005c8f3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005c8/005c8f3c.md) · 呼出先 12件 [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0047e64c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047e64c.md) [`0047edf4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047e/0047edf4.md) [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md)
- 新版 呼出元 1件 [`005c92ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005c9/005c92ec.md) · 呼出先 12件 [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0047e96c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047e/0047e96c.md) [`0047f114`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047f/0047f114.md) [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.68% / 新版 71.68%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 26件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cc33c",
      "incomplete_value": false,
      "site": "005cc350",
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
    "new": null,
    "old": {
      "definition_site": "005cc344",
      "incomplete_value": true,
      "site": "005cc350",
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
            "const:38:8"
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
      "definition_site": "005cc348",
      "incomplete_value": true,
      "site": "005cc350",
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
    "slot": 3
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005cc1f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cc1fc",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cc200",
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
      "005cc5a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005cc5ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005cc5b0",
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
- 005cc350 ["INT_ADD", "register:40f0:8", ["const:5cc350:8", "const:4:8"]]
- 005cc350 ["CALL", null, ["callee:0047e96c:8"]]
+ 005cc700 ["INT_ADD", "register:40f0:8", ["const:5cc700:8", "const:4:8"]]
+ 005cc700 ["CALL", null, ["callee:0047e96c:8"]]
- 005cc44c ["INT_ADD", "register:40f0:8", ["const:5cc44c:8", "const:4:8"]]
- 005cc44c ["CALL", null, ["callee:00c58ef0:8"]]
+ 005cc7fc ["INT_ADD", "register:40f0:8", ["const:5cc7fc:8", "const:4:8"]]
+ 005cc7fc ["CALL", null, ["callee:00c58ef0:8"]]
- 005cc498 ["INT_ADD", "register:40f0:8", ["const:5cc498:8", "const:4:8"]]
- 005cc498 ["CALL", null, ["callee:00c58f10:8"]]
+ 005cc848 ["INT_ADD", "register:40f0:8", ["const:5cc848:8", "const:4:8"]]
+ 005cc848 ["CALL", null, ["callee:00c58f10:8"]]
~~~


<a id="compare-4fa6f4c6a7262c61b0d0d57eaf5acf4c"></a>

### [`005cc554`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc554.md) → [`005cc904`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005cc904.md) FUN_005cc904

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`005fe6ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005fe/005fe6ac.md) [`007ccf44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/007cc/007ccf44.md) · 呼出先 4件 [`005d8c08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d8c08.md) [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005fea5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005fe/005fea5c.md) [`007cdea8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/007cd/007cdea8.md) · 呼出先 4件 [`005d8fb8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8fb8.md) [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 71.43% / 新版 71.43%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cc96c",
      "incomplete_value": true,
      "site": "005cc970",
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
            "const:50:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cc5bc",
      "incomplete_value": true,
      "site": "005cc5c0",
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
            "const:50:8"
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
      "unmatched:005cc568",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cc984"
      ]
    ],
    [
      "unmatched:005cc57c",
      "DATA",
      [
        "storage",
        "00c8b880",
        null,
        "undefined *"
      ]
    ],
    [
      "unmatched:005cc5b4",
      "READ",
      [
        "storage",
        "00c9b438",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cc918",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cc984"
      ]
    ],
    [
      "005cc92c",
      "DATA",
      [
        "storage",
        "00c8c850",
        null,
        "undefined *"
      ]
    ],
    [
      "005cc964",
      "READ",
      [
        "storage",
        "00c9c408",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cc5c0 ["INT_ADD", "register:40f0:8", ["const:5cc5c0:8", "const:4:8"]]
- 005cc5c0 ["CALL", null, ["callee:005d8fb8:8"]]
+ 005cc970 ["INT_ADD", "register:40f0:8", ["const:5cc970:8", "const:4:8"]]
+ 005cc970 ["CALL", null, ["callee:005d8fb8:8"]]
- 005cc568 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 005cc568 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 005cc56c ["COPY", "register:4040:8", ["const:c8b000:8"]]
~~~


<a id="compare-81e8215d146350eeca10e81931726b23"></a>

### [`005cc5e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc5e0.md) → [`005cc990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005cc990.md) FUN_005cc990

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`005db178`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db178.md) [`005dc220`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc220.md) · 呼出先 5件 [`00851550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00851/00851550.md) [`008b6f68`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b6/008b6f68.md) [`008b7a20`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008b7/008b7a20.md) [`008c2984`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c2/008c2984.md) [`008c3330`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/008c3/008c3330.md)
- 新版 呼出元 2件 [`005db528`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db528.md) [`005dc5d0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc5d0.md) · 呼出先 5件 [`008524fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00852/008524fc.md) [`008b7f14`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b7/008b7f14.md) [`008b89cc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008b8/008b89cc.md) [`008c3930`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c3/008c3930.md) [`008c42dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/008c4/008c42dc.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

優先判定に残った影響 `call_argument_candidate` 4件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cc9a8",
      "incomplete_value": false,
      "site": "005cc9b4",
      "value": [
        "leaf",
        "const:1:8"
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
      "definition_site": "005cc9dc",
      "incomplete_value": true,
      "site": "005cc9e4",
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
            "register:40a0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 7,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cc9f4",
      "incomplete_value": true,
      "site": "005cc9fc",
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
            "register:40a0:8"
          ]
        ]
      ]
    },
    "old": null,
    "ordinal": 10,
    "slot": 1
  }
]
~~~


~~~diff
- 005cc604 ["INT_ADD", "register:40f0:8", ["const:5cc604:8", "const:4:8"]]
- 005cc604 ["CALL", null, ["callee:008b89cc:8"]]
+ 005cc9b4 ["INT_ADD", "register:40f0:8", ["const:5cc9b4:8", "const:4:8"]]
+ 005cc9b4 ["CALL", null, ["callee:008b89cc:8"]]
- 005cc634 ["INT_ADD", "register:40f0:8", ["const:5cc634:8", "const:4:8"]]
- 005cc634 ["CALL", null, ["callee:008b89cc:8"]]
+ 005cc9e4 ["INT_ADD", "register:40f0:8", ["const:5cc9e4:8", "const:4:8"]]
+ 005cc9e4 ["CALL", null, ["callee:008b89cc:8"]]
- 005cc64c ["INT_ADD", "register:40f0:8", ["const:5cc64c:8", "const:4:8"]]
- 005cc64c ["CALL", null, ["callee:008b89cc:8"]]
+ 005cc9fc ["INT_ADD", "register:40f0:8", ["const:5cc9fc:8", "const:4:8"]]
+ 005cc9fc ["CALL", null, ["callee:008b89cc:8"]]
~~~


<a id="compare-30e9c70bbd391671f8f9f657f5e57741"></a>

### [`005cc724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc724.md) → [`005ccad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccad4.md) FUN_005ccad4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005cc9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc9e0.md) · 呼出先 9件 [`0043bbe4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bbe4.md) [`00664c0c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664c0c.md) [`00664e80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00664/00664e80.md) [`0068778c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/0068778c.md) [`00687dd0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00687/00687dd0.md)
- 新版 呼出元 1件 [`005ccd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccd90.md) · 呼出先 9件 [`0043bf04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bf04.md) [`00664fbc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00664/00664fbc.md) [`00665230`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00665/00665230.md) [`00687b3c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00687/00687b3c.md) [`00688180`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00688/00688180.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 70.86% / 新版 70.86%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 12件, `unresolved_call_alignment` 3件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ccaf4",
      "incomplete_value": true,
      "site": "005ccafc",
      "value": [
        "INT_ZEXT",
        "8",
        [
          [
            "live",
            "register:4008:4"
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
      "definition_site": "005ccd4c",
      "incomplete_value": true,
      "site": "005ccd58",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40a0:8"
          ],
          [
            "live",
            "register:40b8:8"
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
      "definition_site": "005ccd50",
      "incomplete_value": true,
      "site": "005ccd58",
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
      "unmatched:005cc770",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ccb8c"
      ]
    ],
    [
      "unmatched:005cc7a0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c594f0"
      ]
    ],
    [
      "unmatched:005cc7b4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ccb8c"
      ]
    ]
  ],
  "added": [
    [
      "005ccb20",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ccb8c"
      ]
    ],
    [
      "005ccb50",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "00c594f0"
      ]
    ],
    [
      "005ccb64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ccb8c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cc74c ["INT_ADD", "register:40f0:8", ["const:5cc74c:8", "const:4:8"]]
- 005cc74c ["CALL", null, ["callee:00664fbc:8"]]
+ 005ccafc ["INT_ADD", "register:40f0:8", ["const:5ccafc:8", "const:4:8"]]
+ 005ccafc ["CALL", null, ["callee:00664fbc:8"]]
- 005cc9a8 ["INT_ADD", "register:40f0:8", ["const:5cc9a8:8", "const:4:8"]]
- 005cc9a8 ["CALL", null, ["callee:00688180:8"]]
+ 005ccd58 ["INT_ADD", "register:40f0:8", ["const:5ccd58:8", "const:4:8"]]
+ 005ccd58 ["CALL", null, ["callee:00688180:8"]]
- 005cc754 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005cc754 ["CBRANCH", null, ["local:b13:8", "tmp:0:1"]]
+ 005ccb04 ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 005ccb04 ["CBRANCH", null, ["local:b14:8", "tmp:0:1"]]
~~~


<a id="compare-1cd77e39e8fe546be88611847d01f77d"></a>

### [`005cc9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc9e0.md) → [`005ccd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccd90.md) FUN_005ccd90

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 6件 [`006a7064`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006a7/006a7064.md) [`00922e1c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00922/00922e1c.md) [`009617f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00961/009617f4.md) [`00962f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00962/00962f70.md) [`0098dc5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0098d/0098dc5c.md) · 呼出先 8件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`00470880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00470/00470880.md) [`005cc724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc724.md) [`005ccb48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccb48.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 6件 [`006a7414`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006a7/006a7414.md) [`00923dc8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00923/00923dc8.md) [`009627a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00962/009627a0.md) [`00963f1c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00963/00963f1c.md) [`0098ec08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0098e/0098ec08.md) · 呼出先 8件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`00470ba0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00470/00470ba0.md) [`005ccad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccad4.md) [`005ccef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccef8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 86.67% / 新版 86.67%

優先判定に残った影響 `call_argument_candidate` 4件, `store_condition` 1件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cce4c",
      "incomplete_value": true,
      "site": "005cce60",
      "value": [
        "live",
        "register:40b8:8"
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
      "definition_site": "005cce50",
      "incomplete_value": true,
      "site": "005cce60",
      "value": [
        "live",
        "register:40a8:8"
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
      "definition_site": "005cce54",
      "incomplete_value": true,
      "site": "005cce60",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:005cc9e4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cc9e8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cca28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ccde4"
      ]
    ]
  ],
  "added": [
    [
      "005ccd94",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005ccd98",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005ccdd8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ccde4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ccab0 ["INT_ADD", "register:40f0:8", ["const:5ccab0:8", "const:4:8"]]
- 005ccab0 ["CALL", null, ["callee:00c590a0:8"]]
+ 005cce60 ["INT_ADD", "register:40f0:8", ["const:5cce60:8", "const:4:8"]]
+ 005cce60 ["CALL", null, ["callee:00c590a0:8"]]
- 005ccae4 ["INT_ADD", "register:40f0:8", ["const:5ccae4:8", "const:4:8"]]
- 005ccae4 ["CALL", null, ["callee:005ccef8:8"]]
+ 005cce94 ["INT_ADD", "register:40f0:8", ["const:5cce94:8", "const:4:8"]]
+ 005cce94 ["CALL", null, ["callee:005ccef8:8"]]
- 005cc9e0 ["INT_SUB", "register:8:8", ["register:8:8", "const:70:8"]]
~~~


<a id="compare-8d2d7b60fbea602128b8e25d7942f72f"></a>

### [`005ccb48`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccb48.md) → [`005ccef8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccef8.md) FUN_005ccef8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005cc9e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005cc9e0.md) · 呼出先 6件 [`00440f00`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00440/00440f00.md) [`005dc340`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005dc/005dc340.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md)
- 新版 呼出元 1件 [`005ccd90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cc/005ccd90.md) · 呼出先 6件 [`00441220`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00441/00441220.md) [`005dc6f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005dc/005dc6f0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 88.43% / 新版 88.43%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_branch_alignment` 4件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cd070",
      "incomplete_value": true,
      "site": "005cd074",
      "value": [
        "INT_ADD",
        "8",
        [
          [
            "live",
            "register:40c0:8"
          ],
          [
            "leaf",
            "const:8:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cccc0",
      "incomplete_value": true,
      "site": "005cccc4",
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
    "ordinal": 4,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cd064",
      "incomplete_value": true,
      "site": "005cd074",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "005cd068",
      "incomplete_value": true,
      "site": "005cd074",
      "value": [
        "INT_SUB",
        "8",
        [
          [
            "live",
            "register:40b8:8"
          ],
          [
            "live",
            "register:4098:8"
          ]
        ]
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
      "unmatched:005ccb58",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ccb5c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ccb78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ccf54"
      ]
    ]
  ],
  "added": [
    [
      "005ccf08",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005ccf0c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005ccf28",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ccf54"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cccc4 ["INT_ADD", "register:40f0:8", ["const:5cccc4:8", "const:4:8"]]
- 005cccc4 ["CALL", null, ["callee:00c590a0:8"]]
+ 005cd074 ["INT_ADD", "register:40f0:8", ["const:5cd074:8", "const:4:8"]]
+ 005cd074 ["CALL", null, ["callee:00c590a0:8"]]
- 005ccb58 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005ccb58 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005ccb58 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:40:8"]]
- 005ccb58 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
- 005ccb5c ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005ccb5c ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005ccb5c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:50:8"]]
- 005ccb5c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-621e6465414b00fa681931c6618a5d8e"></a>

### [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) → [`005cd0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd0f4.md) FUN_005cd0f4

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 7件 [`00678920`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00678/00678920.md) [`006ac970`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006ac/006ac970.md) [`006bbcf0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/006bb/006bbcf0.md) [`00914e84`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00914/00914e84.md) [`0092491c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00924/0092491c.md) · 呼出先 16件 [`00447f34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00447/00447f34.md) [`0046d4d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0046d/0046d4d0.md) [`0047ad34`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047a/0047ad34.md) [`0047ce14`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0047c/0047ce14.md) [`0048ce94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0048c/0048ce94.md)
- 新版 呼出元 7件 [`00678cd0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00678/00678cd0.md) [`006acd20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006ac/006acd20.md) [`006bc0a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/006bc/006bc0a0.md) [`00915e30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00915/00915e30.md) [`009258c8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00925/009258c8.md) · 呼出先 16件 [`00448254`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00448/00448254.md) [`0046d7f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0046d/0046d7f0.md) [`0047b054`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047b/0047b054.md) [`0047d134`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0047d/0047d134.md) [`0048d1b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0048d/0048d1b4.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 84.39% / 新版 84.39%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 2件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cd200",
      "incomplete_value": false,
      "site": "005cd210",
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
            "const:37d:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cce50",
      "incomplete_value": false,
      "site": "005cce60",
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
            "const:2b2:8"
          ]
        ]
      ]
    },
    "ordinal": 7,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cd208",
      "incomplete_value": false,
      "site": "005cd210",
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
            "const:923:8"
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cce58",
      "incomplete_value": false,
      "site": "005cce60",
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
            "const:7cb:8"
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
      "unmatched:005ccd78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cd2fc"
      ]
    ],
    [
      "unmatched:005ccd98",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047ad34"
      ]
    ],
    [
      "unmatched:005ccdbc",
      "READ",
      [
        "storage",
        "002ba42b",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005cd128",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cd2fc"
      ]
    ],
    [
      "005cd148",
      "UNCONDITIONAL_CALL",
      [
        "unresolved_target",
        "0047b054"
      ]
    ],
    [
      "005cd16c",
      "READ",
      [
        "storage",
        "002ba509",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cce60 ["INT_ADD", "register:40f0:8", ["const:5cce60:8", "const:4:8"]]
- 005cce60 ["CALL", null, ["callee:005cd908:8"]]
+ 005cd210 ["INT_ADD", "register:40f0:8", ["const:5cd210:8", "const:4:8"]]
+ 005cd210 ["CALL", null, ["callee:005cd908:8"]]
- 005ccd74 ["INT_LESSEQUAL", "register:105:1", ["register:40b8:8", "register:40b0:8"]]
- 005ccd74 ["INT_SBORROW", "register:106:1", ["register:40b0:8", "register:40b8:8"]]
- 005ccd74 ["INT_SUB", "tmp:0:8", ["register:40b0:8", "register:40b8:8"]]
- 005ccd74 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 005ccd78 ["CBRANCH", null, ["local:b20:8", "register:101:1"]]
~~~


<a id="compare-0a5517dc1372aa2a5571c0946a117e77"></a>

### [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md) → [`005cd4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd4e0.md) FUN_005cd4e0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 53件 [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) [`005db4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db4c8.md) [`00606b24`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00606/00606b24.md) [`0060a8e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060a/0060a8e0.md) [`0060e104`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0060e/0060e104.md) · 呼出先 14件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`0043bb60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043bb60.md) [`00493e08`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00493/00493e08.md) [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) [`005d5ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5ca0.md)
- 新版 呼出元 53件 [`005cd0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd0f4.md) [`005db878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db878.md) [`00606ed4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00606/00606ed4.md) [`0060ac90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060a/0060ac90.md) [`0060e4b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0060e/0060e4b4.md) · 呼出先 14件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`0043be80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043be80.md) [`00494128`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00494/00494128.md) [`005cda50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cda50.md) [`005d6050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6050.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 75.43% / 新版 75.43%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 14件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 8件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cd170",
      "incomplete_value": true,
      "site": "005cd17c",
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
    "ordinal": 0,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cd168",
      "incomplete_value": false,
      "site": "005cd17c",
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
            "const:a17:8"
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
      "definition_site": "005cd61c",
      "incomplete_value": true,
      "site": "005cd62c",
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
            "const:60:8"
          ]
        ]
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
      "unmatched:005cd150",
      "WRITE",
      [
        "storage",
        "Stack[-0x198]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cd15c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1b0]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cd168",
      "PARAM",
      [
        "storage",
        "002a7a17",
        null,
        "string"
      ]
    ]
  ],
  "added": [
    [
      "005cd500",
      "WRITE",
      [
        "storage",
        "Stack[-0x198]",
        null,
        null
      ]
    ],
    [
      "005cd50c",
      "WRITE",
      [
        "storage",
        "Stack[-0x1b0]",
        null,
        null
      ]
    ],
    [
      "005cd518",
      "PARAM",
      [
        "storage",
        "002a7b6f",
        null,
        "string"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cd17c ["INT_ADD", "register:40f0:8", ["const:5cd17c:8", "const:4:8"]]
- 005cd17c ["CALL", null, ["callee:005cda50:8"]]
+ 005cd52c ["INT_ADD", "register:40f0:8", ["const:5cd52c:8", "const:4:8"]]
+ 005cd52c ["CALL", null, ["callee:005cda50:8"]]
- 005cd27c ["INT_ADD", "register:40f0:8", ["const:5cd27c:8", "const:4:8"]]
- 005cd27c ["CALL", null, ["callee:005d6344:8"]]
+ 005cd62c ["INT_ADD", "register:40f0:8", ["const:5cd62c:8", "const:4:8"]]
+ 005cd62c ["CALL", null, ["callee:005d6344:8"]]
- 005cd454 ["INT_ADD", "register:40f0:8", ["const:5cd454:8", "const:4:8"]]
- 005cd454 ["CALL", null, ["callee:00c54d90:8"]]
+ 005cd804 ["INT_ADD", "register:40f0:8", ["const:5cd804:8", "const:4:8"]]
+ 005cd804 ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-f03537ca2b7691aaab73aae51a6e1680"></a>

### [`005cd558`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd558.md) → [`005cd908`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd908.md) FUN_005cd908

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 2件 [`005ccd44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cc/005ccd44.md) [`005db4c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005db/005db4c8.md) · 呼出先 4件 [`0043b7a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7a4.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c58010`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58010.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 2件 [`005cd0f4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd0f4.md) [`005db878`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005db/005db878.md) · 呼出先 4件 [`0043bac4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bac4.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58fe0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fe0.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 92.00% / 新版 92.00%

優先判定に残った影響 `unresolved_branch_alignment` 1件

~~~diff
- 005cd57c ["INT_ADD", "register:40f0:8", ["const:5cd57c:8", "const:4:8"]]
- 005cd57c ["CALL", null, ["callee:00c59080:8"]]
+ 005cd92c ["INT_ADD", "register:40f0:8", ["const:5cd92c:8", "const:4:8"]]
+ 005cd92c ["CALL", null, ["callee:00c59080:8"]]
- 005cd584 ["CBRANCH", null, ["local:b13:8", "register:102:1"]]
+ 005cd934 ["CBRANCH", null, ["local:b15:8", "register:102:1"]]
- 005cd5c4 ["INT_ADD", "register:40f0:8", ["const:5cd5c4:8", "const:4:8"]]
- 005cd5c4 ["CALL", null, ["callee:00c58f30:8"]]
+ 005cd974 ["INT_ADD", "register:40f0:8", ["const:5cd974:8", "const:4:8"]]
+ 005cd974 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-10a2d74db293e7facf3386feb2e1d16d"></a>

### [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) → [`005cda50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cda50.md) FUN_005cda50

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005cd130`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd130.md) [`0088c8c8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0088c/0088c8c8.md) · 呼出先 8件 [`005cd7a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7a8.md) [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) [`005cdb3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdb3c.md) [`00c53ffc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53ffc.md) [`00c580b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580b0.md)
- 新版 呼出元 2件 [`005cd4e0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cd4e0.md) [`0088d874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0088d/0088d874.md) · 呼出先 8件 [`005cdb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdb58.md) [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) [`005cdeec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdeec.md) [`00c54fec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54fec.md) [`00c59080`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59080.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 84.44% / 新版 84.44%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cda78",
      "incomplete_value": true,
      "site": "005cda7c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "005cd6c8",
      "incomplete_value": true,
      "site": "005cd6cc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cda8c",
      "incomplete_value": true,
      "site": "005cda90",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:418:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cd6dc",
      "incomplete_value": true,
      "site": "005cd6e0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:448:8"
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
    "new": null,
    "old": {
      "definition_site": "005cd708",
      "incomplete_value": true,
      "site": "005cd714",
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
      "unmatched:005cd6a0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cd6a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cd6a8",
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
      "005cda50",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005cda54",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005cda58",
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
- 005cd6cc ["INT_ADD", "register:40f0:8", ["const:5cd6cc:8", "const:4:8"]]
- 005cd6cc ["CALL", null, ["callee:00c59320:8"]]
+ 005cda7c ["INT_ADD", "register:40f0:8", ["const:5cda7c:8", "const:4:8"]]
+ 005cda7c ["CALL", null, ["callee:00c59320:8"]]
- 005cd6e0 ["INT_ADD", "register:40f0:8", ["const:5cd6e0:8", "const:4:8"]]
- 005cd6e0 ["CALL", null, ["callee:00c59320:8"]]
+ 005cda90 ["INT_ADD", "register:40f0:8", ["const:5cda90:8", "const:4:8"]]
+ 005cda90 ["CALL", null, ["callee:00c59320:8"]]
- 005cd714 ["INT_ADD", "register:40f0:8", ["const:5cd714:8", "const:4:8"]]
- 005cd714 ["CALL", null, ["callee:005cdba8:8"]]
+ 005cdac4 ["INT_ADD", "register:40f0:8", ["const:5cdac4:8", "const:4:8"]]
+ 005cdac4 ["CALL", null, ["callee:005cdba8:8"]]
~~~


<a id="compare-1e6f8ef004f57513fb81cc8a3704d91b"></a>

### [`005cd758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd758.md) → [`005cdb08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdb08.md) FUN_005cdb08

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 1件 [`005ce9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce9f0.md) · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cd774",
      "incomplete_value": false,
      "site": "005cd778",
      "value": [
        "leaf",
        "const:ffffffffffffffff:8"
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
      "definition_site": "005cd770",
      "incomplete_value": true,
      "site": "005cd778",
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
            "const:8:8"
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
      "unmatched:005cd78c",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005cdb3c",
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
- 005cd778 ["INT_ADD", "register:40f0:8", ["const:5cd778:8", "const:4:8"]]
- 005cd778 ["CALL", null, ["callee:00c54d90:8"]]
+ 005cdb28 ["INT_ADD", "register:40f0:8", ["const:5cdb28:8", "const:4:8"]]
+ 005cdb28 ["CALL", null, ["callee:00c54d90:8"]]
- 005cd76c ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
- 005cd76c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005cdb1c ["INT_EQUAL", "tmp:0:1", ["register:40a0:8", "const:0:8"]]
+ 005cdb1c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
- 005cd77c ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005cd77c ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005cdb2c ["INT_NOTEQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005cdb2c ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-5a82c2814eda578f6006a1ce61dc6fe0"></a>

### [`005cd7a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7a8.md) → [`005cdb58`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdb58.md) FUN_005cdb58

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `unresolved` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 1件 [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) · 呼出先 2件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md)
- 新版 呼出元 1件 [`005cda50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cda50.md) · 呼出先 2件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, constant, control_flow, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005cd7b8 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
- 005cd7b8 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 005cdb68 ["INT_EQUAL", "tmp:0:1", ["register:4098:8", "const:0:8"]]
+ 005cdb68 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
- 005cd7c4 ["INT_ADD", "register:40f0:8", ["const:5cd7c4:8", "const:4:8"]]
- 005cd7c4 ["CALL", null, ["callee:00c54d90:8"]]
+ 005cdb74 ["INT_ADD", "register:40f0:8", ["const:5cdb74:8", "const:4:8"]]
+ 005cdb74 ["CALL", null, ["callee:00c54d90:8"]]
- 005cd7c8 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
- 005cd7c8 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005cdb78 ["INT_EQUAL", "tmp:0:1", ["register:4000:8", "const:0:8"]]
+ 005cdb78 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-cb51ae821f95c7c8cdd150e21e93a1b7"></a>

### [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) → [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) FUN_005cdba8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) · 呼出先 11件 [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) [`005cdecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdecc.md) [`005ce040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce040.md) [`005ce1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce1f4.md) [`005ce3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce3a8.md)
- 新版 呼出元 2件 [`005cda50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cda50.md) [`005ce9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce9f0.md) · 呼出先 11件 [`005ce0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce0f0.md) [`005ce27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce27c.md) [`005ce3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce3f0.md) [`005ce5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce5a4.md) [`005ce758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce758.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 82.21% / 新版 82.21%

優先判定に残った影響 `call_argument_candidate` 4件, `return_value_candidate` 1件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 11件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cdc28",
      "incomplete_value": true,
      "site": "005cdc28",
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
      "definition_site": "005cd878",
      "incomplete_value": true,
      "site": "005cd878",
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
    "ordinal": 19,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cdeb8",
      "incomplete_value": true,
      "site": "005cdebc",
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
      "definition_site": "005cdb08",
      "incomplete_value": true,
      "site": "005cdb0c",
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
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cdd44",
      "incomplete_value": true,
      "site": "005cdd4c",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "old": null,
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
      "unmatched:005cd808",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cd80c",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cd830",
      "READ",
      [
        "storage",
        "00c9b450",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cdbb8",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005cdbbc",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005cdbe0",
      "READ",
      [
        "storage",
        "00c9c420",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cd99c ["INT_ADD", "register:40f0:8", ["const:5cd99c:8", "const:4:8"]]
- 005cd99c ["CALL", null, ["callee:005ce8bc:8"]]
+ 005cdd4c ["INT_ADD", "register:40f0:8", ["const:5cdd4c:8", "const:4:8"]]
+ 005cdd4c ["CALL", null, ["callee:005ce8bc:8"]]
- 005cda24 ["INT_ADD", "register:40f0:8", ["const:5cda24:8", "const:4:8"]]
- 005cda24 ["CALL", null, ["callee:00c58f30:8"]]
+ 005cddd4 ["INT_ADD", "register:40f0:8", ["const:5cddd4:8", "const:4:8"]]
+ 005cddd4 ["CALL", null, ["callee:00c58f30:8"]]
- 005cda4c ["INT_ADD", "register:40f0:8", ["const:5cda4c:8", "const:4:8"]]
- 005cda4c ["CALL", null, ["callee:00c58f30:8"]]
+ 005cddfc ["INT_ADD", "register:40f0:8", ["const:5cddfc:8", "const:4:8"]]
+ 005cddfc ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-feb6cde9bc3c76ba9722e6f9f1d413d3"></a>

### [`005cdb3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdb3c.md) → [`005cdeec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdeec.md) FUN_005cdeec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005cd6a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd6a0.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 1件 [`005cda50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cda50.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, constant, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cdb54",
      "incomplete_value": false,
      "site": "005cdb58",
      "value": [
        "leaf",
        "const:11:8"
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
      "unmatched:005cdb68",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005cdb68",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:005cdb6c",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cdf18",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005cdf18",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cdf1c",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cdb58 ["INT_ADD", "register:40f0:8", ["const:5cdb58:8", "const:4:8"]]
- 005cdb58 ["CALL", null, ["callee:00c5b850:8"]]
+ 005cdf08 ["INT_ADD", "register:40f0:8", ["const:5cdf08:8", "const:4:8"]]
+ 005cdf08 ["CALL", null, ["callee:00c5b850:8"]]
- 005cdb4c ["INT_ADD", "register:40f0:8", ["const:5cdb4c:8", "const:4:8"]]
- 005cdb4c ["CALL", null, ["callee:00c58f90:8"]]
+ 005cdefc ["INT_ADD", "register:40f0:8", ["const:5cdefc:8", "const:4:8"]]
+ 005cdefc ["CALL", null, ["callee:00c58f90:8"]]
- 005cdb5c ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 005cdf0c ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-d6198c320d471e69381ee2b1befc7a0d"></a>

### [`005cdb88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdb88.md) → [`005cdf38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdf38.md) FUN_005cdf38

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) · 呼出先 2件 [`005ce5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce5ac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 1件 [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) · 呼出先 2件 [`005ce95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce95c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 76.36% / 新版 76.36%

優先判定に残った影響 `call_argument_candidate` 2件, `return_value_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 20件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cdcd0",
      "incomplete_value": true,
      "site": "005cdcdc",
      "value": [
        "live",
        "register:40a0:8"
      ]
    },
    "ordinal": 5,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cdcd4",
      "incomplete_value": true,
      "site": "005cdcdc",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 5,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": {
      "definition_site": "005ce0d0",
      "incomplete_value": true,
      "site": "005ce0ec",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005cdb88",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cdb8c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cdb90",
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
      "005cdf38",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005cdf3c",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005cdf40",
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
- 005cdcdc ["INT_ADD", "register:40f0:8", ["const:5cdcdc:8", "const:4:8"]]
- 005cdcdc ["CALL", null, ["callee:005ce95c:8"]]
+ 005ce08c ["INT_ADD", "register:40f0:8", ["const:5ce08c:8", "const:4:8"]]
+ 005ce08c ["CALL", null, ["callee:005ce95c:8"]]
- 005cdb88 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005cdb88 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005cdb88 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffa0:8"]]
- 005cdb88 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005cdb8c ["COPY", "tmp:0:8", ["register:40e0:8"]]
- 005cdb8c ["COPY", "tmp:1:8", ["register:40d8:8"]]
- 005cdb8c ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005cdb8c ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-5f394cde3958248b4c2f590f8d9f62bf"></a>

### [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) → [`005ce0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce0f0.md) FUN_005ce0f0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) [`005ce040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce040.md) · 呼出先 4件 [`005d51f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d51f0.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d5448`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5448.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 2件 [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) [`005ce3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce3f0.md) · 呼出先 4件 [`005d55a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55a0.md) [`005d55ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55ec.md) [`005d57f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d57f8.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_return_alignment, unresolved_store_alignment

命令の説明率　旧版 76.77% / 新版 76.77%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 2件, `unresolved_return_alignment` 1件, `unresolved_store_alignment` 12件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ce224",
      "incomplete_value": true,
      "site": "005ce23c",
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
      "definition_site": "005cde74",
      "incomplete_value": true,
      "site": "005cde8c",
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
    "ordinal": 14,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cde2c",
      "incomplete_value": true,
      "site": "005cde34",
      "value": [
        "live",
        "register:40b0:8"
      ]
    },
    "ordinal": 2,
    "slot": 4
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cde30",
      "incomplete_value": true,
      "site": "005cde34",
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
                "leaf",
                "const:1:4"
              ]
            ]
          ]
        ]
      ]
    },
    "ordinal": 2,
    "slot": 6
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005cdd40",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cdd44",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005cdd48",
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
      "005ce0f0",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005ce0f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005ce0f8",
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
- 005cde34 ["INT_ADD", "register:40f0:8", ["const:5cde34:8", "const:4:8"]]
- 005cde34 ["CALL", null, ["callee:005d57f8:8"]]
+ 005ce1e4 ["INT_ADD", "register:40f0:8", ["const:5ce1e4:8", "const:4:8"]]
+ 005ce1e4 ["CALL", null, ["callee:005d57f8:8"]]
- 005cdd40 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005cdd40 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005cdd40 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 005cdd40 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005cdd44 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005cdd44 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
~~~


<a id="compare-7955ccc68ac49f297697aa06d5956744"></a>

### [`005cdecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdecc.md) → [`005ce27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce27c.md) FUN_005ce27c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) [`005ce1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce1f4.md) [`005d58ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d58ac.md) · 呼出先 3件 [`005d51f0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d51f0.md) [`005d58ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d58ac.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md)
- 新版 呼出元 3件 [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) [`005ce5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce5a4.md) [`005d5c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5c5c.md) · 呼出先 3件 [`005d55a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55a0.md) [`005d5c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5c5c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 83.87% / 新版 83.87%

優先判定に残った影響 `call_argument_candidate` 4件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005cdf88",
      "incomplete_value": true,
      "site": "005cdf90",
      "value": [
        "live",
        "register:4098:8"
      ]
    },
    "ordinal": 3,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ce354",
      "incomplete_value": false,
      "site": "005ce358",
      "value": [
        "leaf",
        "const:18:8"
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
      "definition_site": "005ce370",
      "incomplete_value": false,
      "site": "005ce378",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:005cdf3c",
      "READ",
      [
        "storage",
        "00c9b468",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005cdf40",
      "READ",
      [
        "storage",
        "00c9b458",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005cdf44",
      "READ",
      [
        "storage",
        "00c9b470",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ce2cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ce2b4"
      ]
    ],
    [
      "005ce2ec",
      "READ",
      [
        "storage",
        "00c9c438",
        null,
        "pointer"
      ]
    ],
    [
      "005ce2f0",
      "READ",
      [
        "storage",
        "00c9c428",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cdf90 ["INT_ADD", "register:40f0:8", ["const:5cdf90:8", "const:4:8"]]
- 005cdf90 ["CALL", null, ["callee:005d5c5c:8"]]
+ 005ce2c4 ["INT_ADD", "register:40f0:8", ["const:5ce2c4:8", "const:4:8"]]
+ 005ce2c4 ["CALL", null, ["callee:005d5c5c:8"]]
- 005cdfa8 ["INT_ADD", "register:40f0:8", ["const:5cdfa8:8", "const:4:8"]]
- 005cdfa8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005ce358 ["INT_ADD", "register:40f0:8", ["const:5ce358:8", "const:4:8"]]
+ 005ce358 ["CALL", null, ["callee:00c58f30:8"]]
- 005cdfc8 ["INT_ADD", "register:40f0:8", ["const:5cdfc8:8", "const:4:8"]]
- 005cdfc8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005ce378 ["INT_ADD", "register:40f0:8", ["const:5ce378:8", "const:4:8"]]
+ 005ce378 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-bdd3667938e830b8eaf03c53a3219047"></a>

### [`005ce040`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce040.md) → [`005ce3f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce3f0.md) FUN_005ce3f0

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) · 呼出先 3件 [`005cdd40`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdd40.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md)
- 新版 呼出元 1件 [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) · 呼出先 3件 [`005ce0f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce0f0.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 87.16% / 新版 87.16%

優先判定に残った影響 `call_argument_candidate` 7件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ce420",
      "incomplete_value": true,
      "site": "005ce428",
      "value": [
        "live",
        "register:4008:8"
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
      "definition_site": "005ce424",
      "incomplete_value": false,
      "site": "005ce428",
      "value": [
        "leaf",
        "const:a:8"
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
      "definition_site": "005ce41c",
      "incomplete_value": true,
      "site": "005ce428",
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
      "unmatched:005ce088",
      "READ",
      [
        "storage",
        "00c9b458",
        null,
        "pointer"
      ]
    ],
    [
      "005ce468",
      "DATA",
      [
        "storage",
        "00c70c10",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005ce0ec",
      "READ",
      [
        "storage",
        "00c9b468",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ce438",
      "READ",
      [
        "storage",
        "00c9c428",
        null,
        "pointer"
      ]
    ],
    [
      "005ce468",
      "DATA",
      [
        "storage",
        "00c71be0",
        null,
        "pointer"
      ]
    ],
    [
      "005ce49c",
      "READ",
      [
        "storage",
        "00c9c438",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ce078 ["INT_ADD", "register:40f0:8", ["const:5ce078:8", "const:4:8"]]
- 005ce078 ["CALL", null, ["callee:00c59070:8"]]
+ 005ce428 ["INT_ADD", "register:40f0:8", ["const:5ce428:8", "const:4:8"]]
+ 005ce428 ["CALL", null, ["callee:00c59070:8"]]
- 005ce148 ["INT_ADD", "register:40f0:8", ["const:5ce148:8", "const:4:8"]]
- 005ce148 ["CALL", null, ["callee:00c58f30:8"]]
+ 005ce4f8 ["INT_ADD", "register:40f0:8", ["const:5ce4f8:8", "const:4:8"]]
+ 005ce4f8 ["CALL", null, ["callee:00c58f30:8"]]
- 005ce170 ["INT_ADD", "register:40f0:8", ["const:5ce170:8", "const:4:8"]]
- 005ce170 ["CALL", null, ["callee:00c58f30:8"]]
+ 005ce520 ["INT_ADD", "register:40f0:8", ["const:5ce520:8", "const:4:8"]]
+ 005ce520 ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-187edb960100c9584c8c18e8a74b591b"></a>

### [`005ce1f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce1f4.md) → [`005ce5a4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce5a4.md) FUN_005ce5a4

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) · 呼出先 3件 [`005cdecc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdecc.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c580a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580a0.md)
- 新版 呼出元 1件 [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) · 呼出先 3件 [`005ce27c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce27c.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c59070`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59070.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 81.65% / 新版 81.65%

優先判定に残った影響 `call_argument_candidate` 8件, `return_value_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 16件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ce24c",
      "incomplete_value": true,
      "site": "005ce254",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "005ce250",
      "incomplete_value": true,
      "site": "005ce254",
      "value": [
        "live",
        "register:40a8:8"
      ]
    },
    "ordinal": 1,
    "slot": 3
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ce60c",
      "incomplete_value": false,
      "site": "005ce610",
      "value": [
        "leaf",
        "const:10:8"
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
      "unmatched:005ce1f4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ce1f8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ce1fc",
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
      "005ce5a4",
      "WRITE",
      [
        "storage",
        "Stack[-0x60]",
        null,
        null
      ]
    ],
    [
      "005ce5a8",
      "WRITE",
      [
        "storage",
        "Stack[-0x50]",
        null,
        null
      ]
    ],
    [
      "005ce5ac",
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
- 005ce254 ["INT_ADD", "register:40f0:8", ["const:5ce254:8", "const:4:8"]]
- 005ce254 ["CALL", null, ["callee:005ce27c:8"]]
+ 005ce604 ["INT_ADD", "register:40f0:8", ["const:5ce604:8", "const:4:8"]]
+ 005ce604 ["CALL", null, ["callee:005ce27c:8"]]
- 005ce260 ["INT_ADD", "register:40f0:8", ["const:5ce260:8", "const:4:8"]]
- 005ce260 ["CALL", null, ["callee:00c58f30:8"]]
+ 005ce610 ["INT_ADD", "register:40f0:8", ["const:5ce610:8", "const:4:8"]]
+ 005ce610 ["CALL", null, ["callee:00c58f30:8"]]
- 005ce2fc ["INT_ADD", "register:40f0:8", ["const:5ce2fc:8", "const:4:8"]]
- 005ce2fc ["CALL", null, ["callee:00c58f30:8"]]
+ 005ce6ac ["INT_ADD", "register:40f0:8", ["const:5ce6ac:8", "const:4:8"]]
+ 005ce6ac ["CALL", null, ["callee:00c58f30:8"]]
~~~


<a id="compare-48fed1740b4b57d7c68e8dc7d6b9c06a"></a>

### [`005ce3a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce3a8.md) → [`005ce758`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce758.md) FUN_005ce758

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 1件 [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call, call_argument_candidate, call_count, cfg_edge_inventory, constant, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 78.57% / 新版 78.57%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_call_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ce3b4",
      "incomplete_value": false,
      "site": "005ce3b8",
      "value": [
        "leaf",
        "const:18:8"
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
      "unmatched:005ce3d4",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005ce3d4",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "unmatched:005ce3d8",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ce784",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005ce784",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005ce788",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ce3b8 ["INT_ADD", "register:40f0:8", ["const:5ce3b8:8", "const:4:8"]]
- 005ce3b8 ["CALL", null, ["callee:00c58f90:8"]]
+ 005ce768 ["INT_ADD", "register:40f0:8", ["const:5ce768:8", "const:4:8"]]
+ 005ce768 ["CALL", null, ["callee:00c58f90:8"]]
- 005ce3c4 ["INT_ADD", "register:40f0:8", ["const:5ce3c4:8", "const:4:8"]]
- 005ce3c4 ["CALL", null, ["callee:00c5b850:8"]]
+ 005ce774 ["INT_ADD", "register:40f0:8", ["const:5ce774:8", "const:4:8"]]
+ 005ce774 ["CALL", null, ["callee:00c5b850:8"]]
- 005ce3c8 ["COPY", "register:4008:8", ["const:c9b000:8"]]
+ 005ce778 ["COPY", "register:4008:8", ["const:c9c000:8"]]
~~~


<a id="compare-69241d123aaec03d95a45ebee203e093"></a>

### [`005ce40c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce40c.md) → [`005ce7bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce7bc.md) FUN_005ce7bc

根拠 `code_order_and_references` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f70.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f40.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 cfg_edge_inventory, constant, operands_and_dependencies

命令の説明率　旧版 100.00% / 新版 100.00%

~~~diff
- 005ce41c ["INT_ADD", "register:40f0:8", ["const:5ce41c:8", "const:4:8"]]
- 005ce41c ["CALL", null, ["callee:00c58f40:8"]]
+ 005ce7cc ["INT_ADD", "register:40f0:8", ["const:5ce7cc:8", "const:4:8"]]
+ 005ce7cc ["CALL", null, ["callee:00c58f40:8"]]
~~~


<a id="compare-f7ff1e7c1983fe0c47fd14ccac9fe292"></a>

### [`005ce4b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce4b0.md) → [`005ce860`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce860.md) FUN_005ce860

根拠 `leaf_bytes_and_local_order` · `raw_instruction_pcode` · `observed` · 参照 `equal` · `compiler_shape_candidate`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 cfg_edge_inventory

命令の説明率　旧版 0.00% / 新版 0.00%

<a id="compare-e76633e931830d34cc93432085201dcc"></a>

### [`005ce4c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce4c4.md) → [`005ce874`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce874.md) FUN_005ce874

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_value, unresolved_call_alignment

命令の説明率　旧版 88.89% / 新版 88.89%

優先判定に残った影響 `unresolved_call_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005ce880",
      "incomplete_value": true,
      "site": "005ce884",
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
      "definition_site": "005ce4d0",
      "incomplete_value": true,
      "site": "005ce4d4",
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
      "005ce878",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ],
    [
      "005ce884",
      "DATA",
      [
        "storage",
        "00c70c88",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005ce4f8",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005ce878",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ],
    [
      "005ce884",
      "DATA",
      [
        "storage",
        "00c71c58",
        null,
        "pointer"
      ]
    ],
    [
      "005ce8a8",
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
- 005ce4c4 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 005ce874 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 005ce4c8 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:478:8"]]
- 005ce4c8 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005ce878 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:448:8"]]
+ 005ce878 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005ce4d8 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
- 005ce4d8 ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 005ce888 ["INT_EQUAL", "tmp:0:1", ["register:4040:8", "const:0:8"]]
+ 005ce888 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
~~~


<a id="compare-cfc11eee6d53415fe7b3b8c69d01166c"></a>

### [`005ce50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce50c.md) → [`005ce8bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce8bc.md) FUN_005ce8bc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) · 呼出先 3件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md)
- 新版 呼出元 1件 [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) · 呼出先 3件 [`005ce9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce9f0.md) [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) [`005cf00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf00c.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_return_alignment

命令の説明率　旧版 95.00% / 新版 95.00%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 1件, `unresolved_return_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005ce8e8",
      "incomplete_value": true,
      "site": "005ce8f8",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "005ce8ec",
      "incomplete_value": true,
      "site": "005ce8f8",
      "value": [
        "live",
        "register:4098:8"
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
      "definition_site": "005ce8f0",
      "incomplete_value": true,
      "site": "005ce8f8",
      "value": [
        "live",
        "register:40b0:8"
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
      "unmatched:005ce554",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ce944"
      ]
    ]
  ],
  "added": [
    [
      "005ce904",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005ce944"
      ]
    ]
  ]
}
~~~


~~~diff
- 005ce548 ["INT_ADD", "register:40f0:8", ["const:5ce548:8", "const:4:8"]]
- 005ce548 ["CALL", null, ["callee:005cf00c:8"]]
+ 005ce8f8 ["INT_ADD", "register:40f0:8", ["const:5ce8f8:8", "const:4:8"]]
+ 005ce8f8 ["CALL", null, ["callee:005cf00c:8"]]
- 005ce588 ["INT_ADD", "register:40f0:8", ["const:5ce588:8", "const:4:8"]]
- 005ce588 ["CALL", null, ["callee:005ced54:8"]]
+ 005ce938 ["INT_ADD", "register:40f0:8", ["const:5ce938:8", "const:4:8"]]
+ 005ce938 ["CALL", null, ["callee:005ced54:8"]]
- 005ce528 ["BRANCH", null, ["local:b5:8"]]
+ 005ce8d8 ["BRANCH", null, ["local:b4:8"]]
~~~


<a id="compare-348501e50e75ed1b8edf45b25f29a659"></a>

### [`005ce5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce5ac.md) → [`005ce95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce95c.md) FUN_005ce95c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 1件 [`005cdb88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdb88.md) · 呼出先 3件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) [`005cec5c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cec5c.md)
- 新版 呼出元 1件 [`005cdf38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdf38.md) · 呼出先 3件 [`005ce9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce9f0.md) [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) [`005cf00c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf00c.md)

変更の種類 cfg_edge_inventory, constant, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_store_alignment

命令の説明率　旧版 86.49% / 新版 86.49%

アドレスに依存する影響 `unresolved_store_alignment` 7件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005ce5ac",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ce5b0",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ce5b4",
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
      "005ce95c",
      "WRITE",
      [
        "storage",
        "Stack[-0x40]",
        null,
        null
      ]
    ],
    [
      "005ce960",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005ce964",
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
- 005ce5ac ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005ce5ac ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005ce5ac ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffc0:8"]]
- 005ce5ac ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005ce5b0 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005ce5b0 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40b8:8"]]
- 005ce5b4 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005ce5b4 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005ce5b4 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:20:8"]]
- 005ce5b4 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-2ac54765fa87cb97f9d1463627d390e6"></a>

### [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) → [`005ce9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce9f0.md) FUN_005ce9f0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005ce50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce50c.md) [`005ce5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce5ac.md) · 呼出先 8件 [`005cd758`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd758.md) [`005cd7f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cd7f8.md) [`005cefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cefbc.md) [`005cf028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf028.md) [`005cf0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf0dc.md)
- 新版 呼出元 2件 [`005ce8bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce8bc.md) [`005ce95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce95c.md) · 呼出先 8件 [`005cdb08`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdb08.md) [`005cdba8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdba8.md) [`005cf36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf36c.md) [`005cf3d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf3d8.md) [`005cf48c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf48c.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 63.90% / 新版 63.90%

優先判定に残った影響 `call_argument_candidate` 6件, `unresolved_branch_alignment` 5件, `unresolved_call_alignment` 9件, `unresolved_store_alignment` 15件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ce6fc",
      "incomplete_value": true,
      "site": "005ce70c",
      "value": [
        "live",
        "register:40a0:8"
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
      "definition_site": "005ce704",
      "incomplete_value": true,
      "site": "005ce70c",
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
    "ordinal": 2,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005ce708",
      "incomplete_value": false,
      "site": "005ce70c",
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
      "unmatched:005ce664",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "unmatched:005ce6d0",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005cf36c"
      ]
    ],
    [
      "unmatched:005ce6dc",
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
      "005cea14",
      "WRITE",
      [
        "storage",
        "Stack[-0x48]",
        null,
        null
      ]
    ],
    [
      "005cea80",
      "UNCONDITIONAL_CALL",
      [
        "mapped_function",
        "005cf36c"
      ]
    ],
    [
      "005cea8c",
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
- 005ce70c ["INT_ADD", "register:40f0:8", ["const:5ce70c:8", "const:4:8"]]
- 005ce70c ["CALL", null, ["callee:005cf3d8:8"]]
+ 005ceabc ["INT_ADD", "register:40f0:8", ["const:5ceabc:8", "const:4:8"]]
+ 005ceabc ["CALL", null, ["callee:005cf3d8:8"]]
- 005ce854 ["INT_ADD", "register:40f0:8", ["const:5ce854:8", "const:4:8"]]
- 005ce854 ["CALL", null, ["callee:00c5b870:8"]]
+ 005cec04 ["INT_ADD", "register:40f0:8", ["const:5cec04:8", "const:4:8"]]
+ 005cec04 ["CALL", null, ["callee:00c5b870:8"]]
- 005ce8a4 ["INT_ADD", "register:40f0:8", ["const:5ce8a4:8", "const:4:8"]]
- 005ce8a4 ["CALL", null, ["callee:00c5b870:8"]]
+ 005cec54 ["INT_ADD", "register:40f0:8", ["const:5cec54:8", "const:4:8"]]
+ 005cec54 ["CALL", null, ["callee:00c5b870:8"]]
~~~


<a id="compare-5a23ebb4c3c0df3245035205bc973cc8"></a>

### [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) → [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) FUN_005ced54

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005ce50c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce50c.md) [`005ce5ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce5ac.md) · 呼出先 10件 [`005cdb88`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cd/005cdb88.md) [`005cf0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf0dc.md) [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) [`005d07e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d07e4.md) [`005d0830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0830.md)
- 新版 呼出元 2件 [`005ce8bc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce8bc.md) [`005ce95c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce95c.md) · 呼出先 10件 [`005cdf38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cd/005cdf38.md) [`005cf48c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf48c.md) [`005d0a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a40.md) [`005d0b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0b94.md) [`005d0be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0be0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.38% / 新版 91.38%

優先判定に残った影響 `call_argument_candidate` 5件, `store_value` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 4件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cef00",
      "incomplete_value": true,
      "site": "005cef18",
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
      "definition_site": "005ceb50",
      "incomplete_value": true,
      "site": "005ceb68",
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
    "ordinal": 15,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cefac",
      "incomplete_value": true,
      "site": "005cefbc",
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
      "definition_site": "005cebfc",
      "incomplete_value": true,
      "site": "005cec0c",
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
    "ordinal": 22,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cee10",
      "incomplete_value": true,
      "site": "005cee1c",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005ce9bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cedd0"
      ]
    ],
    [
      "unmatched:005ce9f4",
      "READ",
      [
        "storage",
        "00c9b4b0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005cea0c",
      "DATA",
      [
        "storage",
        "00c70dd8",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005ced6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cedd0"
      ]
    ],
    [
      "005ceda4",
      "READ",
      [
        "storage",
        "00c9c480",
        null,
        "pointer"
      ]
    ],
    [
      "005cedbc",
      "DATA",
      [
        "storage",
        "00c71da8",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cea6c ["INT_ADD", "register:40f0:8", ["const:5cea6c:8", "const:4:8"]]
- 005cea6c ["CALL", null, ["callee:005d0cdc:8"]]
+ 005cee1c ["INT_ADD", "register:40f0:8", ["const:5cee1c:8", "const:4:8"]]
+ 005cee1c ["CALL", null, ["callee:005d0cdc:8"]]
- 005cea84 ["INT_ADD", "register:40f0:8", ["const:5cea84:8", "const:4:8"]]
- 005cea84 ["CALL", null, ["callee:005d0da4:8"]]
+ 005cee34 ["INT_ADD", "register:40f0:8", ["const:5cee34:8", "const:4:8"]]
+ 005cee34 ["CALL", null, ["callee:005d0da4:8"]]
- 005ceaa0 ["INT_ADD", "register:40f0:8", ["const:5ceaa0:8", "const:4:8"]]
- 005ceaa0 ["CALL", null, ["callee:005d0fa8:8"]]
+ 005cee50 ["INT_ADD", "register:40f0:8", ["const:5cee50:8", "const:4:8"]]
+ 005cee50 ["CALL", null, ["callee:005d0fa8:8"]]
~~~


<a id="compare-bc0d3c4c6716d26e7b71c463860c1b17"></a>

### [`005cefbc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005cefbc.md) → [`005cf36c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf36c.md) FUN_005cf36c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) · 呼出先 2件 [`00c58350`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58350.md) [`00c5a870`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a870.md)
- 新版 呼出元 1件 [`005ce9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce9f0.md) · 呼出先 2件 [`00c59320`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59320.md) [`00c5b840`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b840.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 90.91% / 新版 90.91%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cf388",
      "incomplete_value": true,
      "site": "005cf38c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
      "definition_site": "005cefd8",
      "incomplete_value": true,
      "site": "005cefdc",
      "value": [
        "LOAD",
        "8",
        [
          [
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
    "ordinal": 1,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cf39c",
      "incomplete_value": true,
      "site": "005cf3a0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:418:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cefec",
      "incomplete_value": true,
      "site": "005ceff0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:448:8"
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
      "005cf388",
      "READ",
      [
        "storage",
        "00c9ad00",
        null,
        "pointer"
      ]
    ],
    [
      "005cf388",
      "PARAM",
      [
        "storage",
        "01127f18",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005cf39c",
      "READ",
      [
        "storage",
        "00c9b448",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf388",
      "READ",
      [
        "storage",
        "00c9bcd0",
        null,
        "pointer"
      ]
    ],
    [
      "005cf388",
      "PARAM",
      [
        "storage",
        "01128ed8",
        "std::__ndk1::ctype<char>::id",
        "undefined8"
      ]
    ],
    [
      "005cf39c",
      "READ",
      [
        "storage",
        "00c9c418",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cefdc ["INT_ADD", "register:40f0:8", ["const:5cefdc:8", "const:4:8"]]
- 005cefdc ["CALL", null, ["callee:00c59320:8"]]
+ 005cf38c ["INT_ADD", "register:40f0:8", ["const:5cf38c:8", "const:4:8"]]
+ 005cf38c ["CALL", null, ["callee:00c59320:8"]]
- 005ceff0 ["INT_ADD", "register:40f0:8", ["const:5ceff0:8", "const:4:8"]]
- 005ceff0 ["CALL", null, ["callee:00c59320:8"]]
+ 005cf3a0 ["INT_ADD", "register:40f0:8", ["const:5cf3a0:8", "const:4:8"]]
+ 005cf3a0 ["CALL", null, ["callee:00c59320:8"]]
- 005cefcc ["INT_ADD", "register:40f0:8", ["const:5cefcc:8", "const:4:8"]]
- 005cefcc ["CALL", null, ["callee:00c5b840:8"]]
+ 005cf37c ["INT_ADD", "register:40f0:8", ["const:5cf37c:8", "const:4:8"]]
+ 005cf37c ["CALL", null, ["callee:00c5b840:8"]]
~~~


<a id="compare-8923595146c3dac019b5b88a79bfcda8"></a>

### [`005cf028`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf028.md) → [`005cf3d8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf3d8.md) FUN_005cf3d8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) · 呼出先 3件 [`00c53d70`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53d70.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 1件 [`005ce9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce9f0.md) · 呼出先 3件 [`00c54d60`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d60.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 constant, operands_and_dependencies, operation_sequence, store_value

命令の説明率　旧版 91.11% / 新版 91.11%

優先判定に残った影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf420",
      "incomplete_value": true,
      "site": "005cf420",
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
      "definition_site": "005cf070",
      "incomplete_value": true,
      "site": "005cf070",
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
      "005cf410",
      "READ",
      [
        "storage",
        "00c9b4c8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf420",
      "DATA",
      [
        "storage",
        "00c70d90",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf410",
      "READ",
      [
        "storage",
        "00c9c498",
        null,
        "pointer"
      ]
    ],
    [
      "005cf420",
      "DATA",
      [
        "storage",
        "00c71d60",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf050 ["INT_ADD", "register:40f0:8", ["const:5cf050:8", "const:4:8"]]
- 005cf050 ["CALL", null, ["callee:00c58f30:8"]]
+ 005cf400 ["INT_ADD", "register:40f0:8", ["const:5cf400:8", "const:4:8"]]
+ 005cf400 ["CALL", null, ["callee:00c58f30:8"]]
- 005cf058 ["COPY", "register:4048:8", ["const:c9b000:8"]]
+ 005cf408 ["COPY", "register:4048:8", ["const:c9c000:8"]]
- 005cf060 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:4c8:8"]]
- 005cf060 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf410 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:498:8"]]
+ 005cf410 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e580daa66145551a68b4bb57c57c9e88"></a>

### [`005cf0dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf0dc.md) → [`005cf48c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf48c.md) FUN_005cf48c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005ce640`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce640.md) [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d58ac`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d58ac.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 4件 [`005ce9f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ce9f0.md) [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) [`005d55ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55ec.md) [`005d5c5c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5c5c.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005cf4b8",
      "incomplete_value": true,
      "site": "005cf4c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cf108",
      "incomplete_value": true,
      "site": "005cf110",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:480:8"
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
      "definition_site": "005cf4bc",
      "incomplete_value": true,
      "site": "005cf4c0",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cf10c",
      "incomplete_value": true,
      "site": "005cf110",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:488:8"
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
      "005cf4b8",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005cf4b8",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cf4bc",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf4b8",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005cf4b8",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005cf4bc",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf110 ["INT_ADD", "register:40f0:8", ["const:5cf110:8", "const:4:8"]]
- 005cf110 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005cf4c0 ["INT_ADD", "register:40f0:8", ["const:5cf4c0:8", "const:4:8"]]
+ 005cf4c0 ["CALL", null, ["callee:00c58fb0:8"]]
- 005cf0ec ["INT_ADD", "register:40f0:8", ["const:5cf0ec:8", "const:4:8"]]
- 005cf0ec ["CALL", null, ["callee:00c58f90:8"]]
+ 005cf49c ["INT_ADD", "register:40f0:8", ["const:5cf49c:8", "const:4:8"]]
+ 005cf49c ["CALL", null, ["callee:00c58f90:8"]]
- 005cf0f8 ["INT_ADD", "register:40f0:8", ["const:5cf0f8:8", "const:4:8"]]
- 005cf0f8 ["CALL", null, ["callee:00c5b850:8"]]
+ 005cf4a8 ["INT_ADD", "register:40f0:8", ["const:5cf4a8:8", "const:4:8"]]
+ 005cf4a8 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-e838795dab86628055853c8c0d1cca14"></a>

### [`005cf268`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf268.md) → [`005cf618`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf618.md) FUN_005cf618

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf634",
      "incomplete_value": true,
      "site": "005cf634",
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
      "definition_site": "005cf284",
      "incomplete_value": true,
      "site": "005cf284",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf648",
      "incomplete_value": true,
      "site": "005cf64c",
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
      "definition_site": "005cf298",
      "incomplete_value": true,
      "site": "005cf29c",
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
      "005cf62c",
      "READ",
      [
        "storage",
        "00c9b4a8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf634",
      "DATA",
      [
        "storage",
        "00c70d48",
        null,
        "pointer"
      ]
    ],
    [
      "005cf640",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf62c",
      "READ",
      [
        "storage",
        "00c9c478",
        null,
        "pointer"
      ]
    ],
    [
      "005cf634",
      "DATA",
      [
        "storage",
        "00c71d18",
        null,
        "pointer"
      ]
    ],
    [
      "005cf640",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf274 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005cf624 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005cf27c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4a8:8"]]
- 005cf27c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf62c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005cf62c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf288 ["INT_ADD", "register:40f0:8", ["const:5cf288:8", "const:4:8"]]
- 005cf288 ["CALL", null, ["callee:00c59330:8"]]
+ 005cf638 ["INT_ADD", "register:40f0:8", ["const:5cf638:8", "const:4:8"]]
+ 005cf638 ["CALL", null, ["callee:00c59330:8"]]
~~~


<a id="compare-730b6ba844b970311d591a4b55af842b"></a>

### [`005cf2c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf2c4.md) → [`005cf674`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf674.md) FUN_005cf674

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf690",
      "incomplete_value": true,
      "site": "005cf690",
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
      "definition_site": "005cf2e0",
      "incomplete_value": true,
      "site": "005cf2e0",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf6a4",
      "incomplete_value": true,
      "site": "005cf6a8",
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
      "definition_site": "005cf2f4",
      "incomplete_value": true,
      "site": "005cf2f8",
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
      "005cf688",
      "READ",
      [
        "storage",
        "00c9b4a8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf690",
      "DATA",
      [
        "storage",
        "00c70d48",
        null,
        "pointer"
      ]
    ],
    [
      "005cf69c",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf688",
      "READ",
      [
        "storage",
        "00c9c478",
        null,
        "pointer"
      ]
    ],
    [
      "005cf690",
      "DATA",
      [
        "storage",
        "00c71d18",
        null,
        "pointer"
      ]
    ],
    [
      "005cf69c",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf2d0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005cf680 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005cf2d8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4a8:8"]]
- 005cf2d8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf688 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:478:8"]]
+ 005cf688 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf2e4 ["INT_ADD", "register:40f0:8", ["const:5cf2e4:8", "const:4:8"]]
- 005cf2e4 ["CALL", null, ["callee:00c59330:8"]]
+ 005cf694 ["INT_ADD", "register:40f0:8", ["const:5cf694:8", "const:4:8"]]
+ 005cf694 ["CALL", null, ["callee:00c59330:8"]]
~~~


<a id="compare-7b7951b43e5e27c6fbdad3d5e21f4e51"></a>

### [`005cf42c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf42c.md) → [`005cf7dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf7dc.md) FUN_005cf7dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 3件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 3件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.67% / 新版 91.67%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf7f8",
      "incomplete_value": true,
      "site": "005cf7fc",
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
      "definition_site": "005cf448",
      "incomplete_value": true,
      "site": "005cf44c",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf840",
      "incomplete_value": true,
      "site": "005cf844",
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
      "definition_site": "005cf490",
      "incomplete_value": true,
      "site": "005cf494",
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
      "005cf7f0",
      "READ",
      [
        "storage",
        "00c9b4c8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf7fc",
      "DATA",
      [
        "storage",
        "00c70d90",
        null,
        "pointer"
      ]
    ],
    [
      "005cf838",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf7f0",
      "READ",
      [
        "storage",
        "00c9c498",
        null,
        "pointer"
      ]
    ],
    [
      "005cf7fc",
      "DATA",
      [
        "storage",
        "00c71d60",
        null,
        "pointer"
      ]
    ],
    [
      "005cf838",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf438 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005cf7e8 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005cf440 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c8:8"]]
- 005cf440 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf7f0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:498:8"]]
+ 005cf7f0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf45c ["INT_ADD", "register:40f0:8", ["const:5cf45c:8", "const:4:8"]]
- 005cf45c ["CALL", null, ["callee:00c54d90:8"]]
+ 005cf80c ["INT_ADD", "register:40f0:8", ["const:5cf80c:8", "const:4:8"]]
+ 005cf80c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-afd51458ffafcd70b8e6a046eb7cb988"></a>

### [`005cf4bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf4bc.md) → [`005cf86c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf86c.md) FUN_005cf86c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 4件 [`00c53da0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c53/00c53da0.md) [`00c57f50`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f50.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 4件 [`00c54d90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c54/00c54d90.md) [`00c58f20`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f20.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 91.43% / 新版 91.43%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf888",
      "incomplete_value": true,
      "site": "005cf88c",
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
      "definition_site": "005cf4d8",
      "incomplete_value": true,
      "site": "005cf4dc",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005cf8d0",
      "incomplete_value": true,
      "site": "005cf8d4",
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
      "definition_site": "005cf520",
      "incomplete_value": true,
      "site": "005cf524",
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
      "005cf880",
      "READ",
      [
        "storage",
        "00c9b4c8",
        null,
        "pointer"
      ]
    ],
    [
      "005cf88c",
      "DATA",
      [
        "storage",
        "00c70d90",
        null,
        "pointer"
      ]
    ],
    [
      "005cf8c8",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005cf880",
      "READ",
      [
        "storage",
        "00c9c498",
        null,
        "pointer"
      ]
    ],
    [
      "005cf88c",
      "DATA",
      [
        "storage",
        "00c71d60",
        null,
        "pointer"
      ]
    ],
    [
      "005cf8c8",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf4c8 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005cf878 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005cf4d0 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c8:8"]]
- 005cf4d0 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005cf880 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:498:8"]]
+ 005cf880 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005cf4ec ["INT_ADD", "register:40f0:8", ["const:5cf4ec:8", "const:4:8"]]
- 005cf4ec ["CALL", null, ["callee:00c54d90:8"]]
+ 005cf89c ["INT_ADD", "register:40f0:8", ["const:5cf89c:8", "const:4:8"]]
+ 005cf89c ["CALL", null, ["callee:00c54d90:8"]]
~~~


<a id="compare-a4635d85bfe04e6472a0f6f04d34c123"></a>

### [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) → [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) FUN_005cfab0

根拠 `similar_code_order_and_calls` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 2件 [`005cf548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf548.md) [`005d5ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5ca0.md) · 呼出先 10件 [`005cfd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd94.md) [`005cfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfde0.md) [`005cff58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cff58.md) [`005cffa4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cffa4.md) [`005d002c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d002c.md)
- 新版 呼出元 2件 [`005cf8f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf8f8.md) [`005d6050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6050.md) · 呼出先 10件 [`005d0144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0144.md) [`005d0190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0190.md) [`005d0308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0308.md) [`005d0354`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0354.md) [`005d03dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d03dc.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, return_value_candidate, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 85.20% / 新版 85.20%

優先判定に残った影響 `return_value_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 6件, `unresolved_call_alignment` 4件, `unresolved_store_alignment` 10件

~~~json
[
  {
    "confidence": "limited",
    "kind": "return_value_candidate",
    "new": null,
    "old": {
      "definition_site": "005cfa74",
      "incomplete_value": true,
      "site": "005cfa94",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005cf908"
      ],
      [
        "FALL_THROUGH",
        "005cfcb8"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005cfcb8",
      "incomplete_value": true,
      "site": "005cfcbc",
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
      "definition_site": "005cf908",
      "incomplete_value": true,
      "site": "005cf90c",
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
      "unmatched:005cf7e8",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cfbb4"
      ]
    ],
    [
      "unmatched:005cf880",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cfdbc"
      ]
    ],
    [
      "unmatched:005cf8d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cfc24"
      ]
    ]
  ],
  "added": [
    [
      "005cfb98",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cfbb4"
      ]
    ],
    [
      "005cfc30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cfdbc"
      ]
    ],
    [
      "005cfc84",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005cfc24"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cf738 ["INT_EQUAL", "tmp:0:1", ["register:40d0:8", "const:0:8"]]
- 005cf738 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 005cfae8 ["INT_EQUAL", "tmp:0:1", ["register:40d0:8", "const:0:8"]]
+ 005cfae8 ["CBRANCH", null, ["local:b8:8", "tmp:0:1"]]
- 005cf784 ["INT_ADD", "register:40f0:8", ["const:5cf784:8", "const:4:8"]]
- 005cf784 ["CALL", null, ["callee:005d03dc:8"]]
+ 005cfb34 ["INT_ADD", "register:40f0:8", ["const:5cfb34:8", "const:4:8"]]
+ 005cfb34 ["CALL", null, ["callee:005d03dc:8"]]
- 005cf79c ["INT_ADD", "register:40f0:8", ["const:5cf79c:8", "const:4:8"]]
- 005cf79c ["CALL", null, ["callee:00c58f50:8"]]
+ 005cfb4c ["INT_ADD", "register:40f0:8", ["const:5cfb4c:8", "const:4:8"]]
+ 005cfb4c ["CALL", null, ["callee:00c58f50:8"]]
~~~


<a id="compare-553e546ea743f8470052412debace0ee"></a>

### [`005cfb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfb74.md) → [`005cff24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cff24.md) FUN_005cff24

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005cf548`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf548.md) [`005d5ca0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5ca0.md) · 呼出先 3件 [`005cfd3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd3c.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 2件 [`005cf8f8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cf8f8.md) [`005d6050`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6050.md) · 呼出先 3件 [`005d00ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d00ec.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 91.23% / 新版 91.23%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005cfbb4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d000c"
      ]
    ]
  ],
  "added": [
    [
      "005cff64",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d000c"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cfb9c ["COPY", "register:4000:8", ["register:4048:8"]]
- 005cfba0 ["INT_SRIGHT", "register:4058:8", ["register:4050:8", "const:3:8"]]
- 005cfba4 ["COPY", "tmp:0:8", ["const:0:8"]]
- 005cfba4 ["INT_OR", "register:4050:8", ["tmp:0:8", "const:aaaaaaaaaaaaaaaa:8"]]
~~~


<a id="compare-c74b03c721ac76a6525e3fb7b11da40e"></a>

### [`005cfd3c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd3c.md) → [`005d00ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d00ec.md) FUN_005d00ec

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005cfb74`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfb74.md) [`005cfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfde0.md) [`005d03c4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d03c4.md) [`005d80cc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d80cc.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 4件 [`005cff24`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cff24.md) [`005d0190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0190.md) [`005d0774`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0774.md) [`005d847c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d847c.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d00f8",
      "incomplete_value": false,
      "site": "005d00fc",
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
      "definition_site": "005cfd48",
      "incomplete_value": false,
      "site": "005cfd4c",
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
      "005d00f8",
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
      "005d00f8",
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
- 005cfd4c ["INT_ADD", "register:40f0:8", ["const:5cfd4c:8", "const:4:8"]]
- 005cfd4c ["CALL", null, ["callee:0043bad8:8"]]
+ 005d00fc ["INT_ADD", "register:40f0:8", ["const:5d00fc:8", "const:4:8"]]
+ 005d00fc ["CALL", null, ["callee:0043bad8:8"]]
- 005cfd44 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005d00f4 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005cfd48 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005cfd48 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005cfd48 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005cfd48 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d00f8 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005d00f8 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d00f8 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d00f8 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-4dc87977dc3736c19f8581dc78e85ae3"></a>

### [`005cfd94`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfd94.md) → [`005d0144`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0144.md) FUN_005d0144

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6150.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 3件 [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) [`005d6500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6500.md) [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d0170",
      "incomplete_value": true,
      "site": "005d0178",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cfdc0",
      "incomplete_value": true,
      "site": "005cfdc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:480:8"
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
      "definition_site": "005d0174",
      "incomplete_value": true,
      "site": "005d0178",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cfdc4",
      "incomplete_value": true,
      "site": "005cfdc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:488:8"
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
      "005d0170",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d0170",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0174",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d0170",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d0170",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0174",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cfdc8 ["INT_ADD", "register:40f0:8", ["const:5cfdc8:8", "const:4:8"]]
- 005cfdc8 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d0178 ["INT_ADD", "register:40f0:8", ["const:5d0178:8", "const:4:8"]]
+ 005d0178 ["CALL", null, ["callee:00c58fb0:8"]]
- 005cfda4 ["INT_ADD", "register:40f0:8", ["const:5cfda4:8", "const:4:8"]]
- 005cfda4 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d0154 ["INT_ADD", "register:40f0:8", ["const:5d0154:8", "const:4:8"]]
+ 005d0154 ["CALL", null, ["callee:00c58f90:8"]]
- 005cfdb0 ["INT_ADD", "register:40f0:8", ["const:5cfdb0:8", "const:4:8"]]
- 005cfdb0 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d0160 ["INT_ADD", "register:40f0:8", ["const:5d0160:8", "const:4:8"]]
+ 005d0160 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-be9c3a42055cb2975a863f75664442fd"></a>

### [`005cff58`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cff58.md) → [`005d0308`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0308.md) FUN_005d0308

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005cf700`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cf700.md) [`005d6150`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6150.md) [`005d6a30`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d6/005d6a30.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 3件 [`005cfab0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005cf/005cfab0.md) [`005d6500`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6500.md) [`005d6de0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d6/005d6de0.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d0334",
      "incomplete_value": true,
      "site": "005d033c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cff84",
      "incomplete_value": true,
      "site": "005cff8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:480:8"
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
      "definition_site": "005d0338",
      "incomplete_value": true,
      "site": "005d033c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005cff88",
      "incomplete_value": true,
      "site": "005cff8c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:488:8"
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
      "005d0334",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d0334",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0338",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d0334",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d0334",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0338",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005cff8c ["INT_ADD", "register:40f0:8", ["const:5cff8c:8", "const:4:8"]]
- 005cff8c ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d033c ["INT_ADD", "register:40f0:8", ["const:5d033c:8", "const:4:8"]]
+ 005d033c ["CALL", null, ["callee:00c58fb0:8"]]
- 005cff68 ["INT_ADD", "register:40f0:8", ["const:5cff68:8", "const:4:8"]]
- 005cff68 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d0318 ["INT_ADD", "register:40f0:8", ["const:5d0318:8", "const:4:8"]]
+ 005d0318 ["CALL", null, ["callee:00c58f90:8"]]
- 005cff74 ["INT_ADD", "register:40f0:8", ["const:5cff74:8", "const:4:8"]]
- 005cff74 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d0324 ["INT_ADD", "register:40f0:8", ["const:5d0324:8", "const:4:8"]]
+ 005d0324 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-2ca9f31c75041f9e25b08fd544d5b20c"></a>

### [`005d03b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d03b0.md) → [`005d0760`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0760.md) FUN_005d0760

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005d002c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d002c.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 1件 [`005d03dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d03dc.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d076c",
      "incomplete_value": false,
      "site": "005d0770",
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
      "definition_site": "005d03bc",
      "incomplete_value": false,
      "site": "005d03c0",
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
      "005d076c",
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
      "005d076c",
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
- 005d03c0 ["INT_ADD", "register:40f0:8", ["const:5d03c0:8", "const:4:8"]]
- 005d03c0 ["CALL", null, ["callee:0043bad8:8"]]
+ 005d0770 ["INT_ADD", "register:40f0:8", ["const:5d0770:8", "const:4:8"]]
+ 005d0770 ["CALL", null, ["callee:0043bad8:8"]]
- 005d03b8 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005d0768 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005d03bc ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005d03bc ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d03bc ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d03bc ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d076c ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005d076c ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d076c ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d076c ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-19fc6eb321606452ae8546d6165ed0bd"></a>

### [`005d067c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d067c.md) → [`005d0a2c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a2c.md) FUN_005d0a2c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 3件 [`005cfde0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005cf/005cfde0.md) [`005d0550`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0550.md) [`005d82b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d8/005d82b8.md) · 呼出先 1件 [`0043b7b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/0043b/0043b7b8.md)
- 新版 呼出元 3件 [`005d0190`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0190.md) [`005d0900`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0900.md) [`005d8668`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d8/005d8668.md) · 呼出先 1件 [`0043bad8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/0043b/0043bad8.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 80.00% / 新版 80.00%

優先判定に残った影響 `call_argument_candidate` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d0a38",
      "incomplete_value": false,
      "site": "005d0a3c",
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
      "definition_site": "005d0688",
      "incomplete_value": false,
      "site": "005d068c",
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
      "005d0a38",
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
      "005d0a38",
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
- 005d068c ["INT_ADD", "register:40f0:8", ["const:5d068c:8", "const:4:8"]]
- 005d068c ["CALL", null, ["callee:0043bad8:8"]]
+ 005d0a3c ["INT_ADD", "register:40f0:8", ["const:5d0a3c:8", "const:4:8"]]
+ 005d0a3c ["CALL", null, ["callee:0043bad8:8"]]
- 005d0684 ["COPY", "register:4000:8", ["const:2b7000:8"]]
+ 005d0a34 ["COPY", "register:4000:8", ["const:2b8000:8"]]
- 005d0688 ["COPY", "tmp:0:8", ["const:f8c:8"]]
- 005d0688 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
- 005d0688 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
- 005d0688 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
+ 005d0a38 ["COPY", "tmp:0:8", ["const:5b:8"]]
+ 005d0a38 ["INT_CARRY", "register:105:1", ["register:4000:8", "tmp:0:8"]]
+ 005d0a38 ["INT_SCARRY", "register:106:1", ["register:4000:8", "tmp:0:8"]]
+ 005d0a38 ["INT_ADD", "tmp:1:8", ["register:4000:8", "tmp:0:8"]]
~~~


<a id="compare-cd03a9fdb49076290f89964aa5f23a93"></a>

### [`005d07e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d07e4.md) → [`005d0b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0b94.md) FUN_005d0b94

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 1件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 1件 [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d0bc0",
      "incomplete_value": true,
      "site": "005d0bc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d0810",
      "incomplete_value": true,
      "site": "005d0818",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:480:8"
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
      "definition_site": "005d0bc4",
      "incomplete_value": true,
      "site": "005d0bc8",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d0814",
      "incomplete_value": true,
      "site": "005d0818",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:488:8"
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
      "005d0bc0",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d0bc0",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0bc4",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d0bc0",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d0bc0",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0bc4",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d0818 ["INT_ADD", "register:40f0:8", ["const:5d0818:8", "const:4:8"]]
- 005d0818 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d0bc8 ["INT_ADD", "register:40f0:8", ["const:5d0bc8:8", "const:4:8"]]
+ 005d0bc8 ["CALL", null, ["callee:00c58fb0:8"]]
- 005d07f4 ["INT_ADD", "register:40f0:8", ["const:5d07f4:8", "const:4:8"]]
- 005d07f4 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d0ba4 ["INT_ADD", "register:40f0:8", ["const:5d0ba4:8", "const:4:8"]]
+ 005d0ba4 ["CALL", null, ["callee:00c58f90:8"]]
- 005d0800 ["INT_ADD", "register:40f0:8", ["const:5d0800:8", "const:4:8"]]
- 005d0800 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d0bb0 ["INT_ADD", "register:40f0:8", ["const:5d0bb0:8", "const:4:8"]]
+ 005d0bb0 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-efad1fa998f6c34196d462d41accacaf"></a>

### [`005d08e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d08e0.md) → [`005d0c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0c90.md) FUN_005d0c90

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) [`005d0bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0bf8.md) [`005d34bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d34bc.md) [`005d35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d35e0.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 4件 [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) [`005d0fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0fa8.md) [`005d386c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d386c.md) [`005d3990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3990.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d0cbc",
      "incomplete_value": true,
      "site": "005d0cc4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d090c",
      "incomplete_value": true,
      "site": "005d0914",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:480:8"
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
      "definition_site": "005d0cc0",
      "incomplete_value": true,
      "site": "005d0cc4",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d0910",
      "incomplete_value": true,
      "site": "005d0914",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:488:8"
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
      "005d0cbc",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d0cbc",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0cc0",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d0cbc",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d0cbc",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d0cc0",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d0914 ["INT_ADD", "register:40f0:8", ["const:5d0914:8", "const:4:8"]]
- 005d0914 ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d0cc4 ["INT_ADD", "register:40f0:8", ["const:5d0cc4:8", "const:4:8"]]
+ 005d0cc4 ["CALL", null, ["callee:00c58fb0:8"]]
- 005d08f0 ["INT_ADD", "register:40f0:8", ["const:5d08f0:8", "const:4:8"]]
- 005d08f0 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d0ca0 ["INT_ADD", "register:40f0:8", ["const:5d0ca0:8", "const:4:8"]]
+ 005d0ca0 ["CALL", null, ["callee:00c58f90:8"]]
- 005d08fc ["INT_ADD", "register:40f0:8", ["const:5d08fc:8", "const:4:8"]]
- 005d08fc ["CALL", null, ["callee:00c5b850:8"]]
+ 005d0cac ["INT_ADD", "register:40f0:8", ["const:5d0cac:8", "const:4:8"]]
+ 005d0cac ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-0cf4b565e6b9f6c2ba818197f988894c"></a>

### [`005d0bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0bf8.md) → [`005d0fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0fa8.md) FUN_005d0fa8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005ce9a4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005ce/005ce9a4.md) [`005d34bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d34bc.md) · 呼出先 3件 [`005d08e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d08e0.md) [`005d0ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0ef8.md) [`00c5a8b0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8b0.md)
- 新版 呼出元 2件 [`005ced54`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005ce/005ced54.md) [`005d386c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d386c.md) · 呼出先 3件 [`005d0c90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0c90.md) [`005d12a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d12a8.md) [`00c5b880`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b880.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, constant, control_flow, local_def_use, operands_and_dependencies, unresolved_branch_alignment

命令の説明率　旧版 97.40% / 新版 97.40%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 3件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d0ed0",
      "incomplete_value": true,
      "site": "005d0ed4",
      "value": [
        "live",
        "register:4018:8"
      ]
    },
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
      "unmatched:005d0d24",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d12a4"
      ]
    ],
    [
      "unmatched:005d0d78",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d114c"
      ]
    ],
    [
      "unmatched:005d0db4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d12a4"
      ]
    ]
  ],
  "added": [
    [
      "005d10d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d12a4"
      ]
    ],
    [
      "005d1128",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d114c"
      ]
    ],
    [
      "005d1164",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d12a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d0ed4 ["INT_ADD", "register:40f0:8", ["const:5d0ed4:8", "const:4:8"]]
- 005d0ed4 ["CALL", null, ["callee:00c5b880:8"]]
+ 005d1284 ["INT_ADD", "register:40f0:8", ["const:5d1284:8", "const:4:8"]]
+ 005d1284 ["CALL", null, ["callee:00c5b880:8"]]
- 005d0c0c ["CBRANCH", null, ["local:b71:8", "register:101:1"]]
+ 005d0fbc ["CBRANCH", null, ["local:b73:8", "register:101:1"]]
- 005d0c38 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005d0c38 ["CBRANCH", null, ["local:b65:8", "tmp:0:1"]]
+ 005d0fe8 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005d0fe8 ["CBRANCH", null, ["local:b66:8", "tmp:0:1"]]
~~~


<a id="compare-e570a6bb66024b7734119890ba54563c"></a>

### [`005d0ef8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0ef8.md) → [`005d12a8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d12a8.md) FUN_005d12a8

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 7件 [`005d0830`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0830.md) [`005d092c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d092c.md) [`005d0bf8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0bf8.md) [`005d35e0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d35e0.md) [`005d5688`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d5688.md) · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 7件 [`005d0be0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0be0.md) [`005d0cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0cdc.md) [`005d0fa8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0fa8.md) [`005d3990`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d3990.md) [`005d5a38`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5a38.md) · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 branch_condition_or_target, call, call_argument_candidate, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 64.06% / 新版 64.06%

優先判定に残った影響 `call_argument_candidate` 3件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 7件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d0f1c",
      "incomplete_value": false,
      "site": "005d0f20",
      "value": [
        "leaf",
        "const:18:8"
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
      "definition_site": "005d0f6c",
      "incomplete_value": true,
      "site": "005d0f70",
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
    "ordinal": 2,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d135c",
      "incomplete_value": true,
      "site": "005d1374",
      "value": [
        "live",
        "register:4098:8"
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
      "005d12c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005d0f48"
      ]
    ],
    [
      "005d12dc",
      "READ",
      [
        "storage",
        "00c9b4d0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d0f3c",
      "DATA",
      [
        "storage",
        "00c70eb0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d12c4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d12f8"
      ]
    ],
    [
      "005d12dc",
      "READ",
      [
        "storage",
        "00c9c4a0",
        null,
        "pointer"
      ]
    ],
    [
      "005d12ec",
      "DATA",
      [
        "storage",
        "00c71e80",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d0f20 ["INT_ADD", "register:40f0:8", ["const:5d0f20:8", "const:4:8"]]
- 005d0f20 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d12d0 ["INT_ADD", "register:40f0:8", ["const:5d12d0:8", "const:4:8"]]
+ 005d12d0 ["CALL", null, ["callee:00c58f30:8"]]
- 005d0f70 ["INT_ADD", "register:40f0:8", ["const:5d0f70:8", "const:4:8"]]
- 005d0f70 ["CALL", null, ["callee:00c5b870:8"]]
+ 005d1320 ["INT_ADD", "register:40f0:8", ["const:5d1320:8", "const:4:8"]]
+ 005d1320 ["CALL", null, ["callee:00c5b870:8"]]
- 005d0fc4 ["INT_ADD", "register:40f0:8", ["const:5d0fc4:8", "const:4:8"]]
- 005d0fc4 ["CALL", null, ["callee:00c5b870:8"]]
+ 005d1374 ["INT_ADD", "register:40f0:8", ["const:5d1374:8", "const:4:8"]]
+ 005d1374 ["CALL", null, ["callee:00c5b870:8"]]
~~~


<a id="compare-015200b0b9e90dffd1378e03e2df64c3"></a>

### [`005d1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1038.md) → [`005d13e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d13e8.md) FUN_005d13e8

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed`

- 旧版 呼出元 4件 [`005d092c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d092c.md) [`005d1724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1724.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d584c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d584c.md) · 呼出先 4件 [`00c37324`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c37/00c37324.md) [`00c57fc0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fc0.md) [`00c57fe0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fe0.md) [`00c5a880`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a880.md)
- 新版 呼出元 4件 [`005d0cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0cdc.md) [`005d1ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1ad4.md) [`005d55ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55ec.md) [`005d5bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5bfc.md) · 呼出先 4件 [`00c38318`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c38/00c38318.md) [`00c58f90`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f90.md) [`00c58fb0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58fb0.md) [`00c5b850`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b850.md)

変更の種類 call_argument_candidate, constant, operands_and_dependencies

命令の説明率　旧版 85.71% / 新版 85.71%

優先判定に残った影響 `call_argument_candidate` 2件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d1414",
      "incomplete_value": true,
      "site": "005d141c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:450:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d1064",
      "incomplete_value": true,
      "site": "005d106c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:480:8"
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
      "definition_site": "005d1418",
      "incomplete_value": true,
      "site": "005d141c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:458:8"
              ]
            ]
          ]
        ]
      ]
    },
    "old": {
      "definition_site": "005d1068",
      "incomplete_value": true,
      "site": "005d106c",
      "value": [
        "LOAD",
        "8",
        [
          [
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
                "const:488:8"
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
      "005d1414",
      "READ",
      [
        "storage",
        "00c9b480",
        null,
        "pointer"
      ]
    ],
    [
      "005d1414",
      "PARAM",
      [
        "storage",
        "00c96688",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d1418",
      "READ",
      [
        "storage",
        "00c9b488",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1414",
      "READ",
      [
        "storage",
        "00c9c450",
        null,
        "pointer"
      ]
    ],
    [
      "005d1414",
      "PARAM",
      [
        "storage",
        "00c97658",
        "std::__ndk1::regex_error::typeinfo",
        "pointer __((offset(0x10)))"
      ]
    ],
    [
      "005d1418",
      "READ",
      [
        "storage",
        "00c9c458",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d106c ["INT_ADD", "register:40f0:8", ["const:5d106c:8", "const:4:8"]]
- 005d106c ["CALL", null, ["callee:00c58fb0:8"]]
+ 005d141c ["INT_ADD", "register:40f0:8", ["const:5d141c:8", "const:4:8"]]
+ 005d141c ["CALL", null, ["callee:00c58fb0:8"]]
- 005d1048 ["INT_ADD", "register:40f0:8", ["const:5d1048:8", "const:4:8"]]
- 005d1048 ["CALL", null, ["callee:00c58f90:8"]]
+ 005d13f8 ["INT_ADD", "register:40f0:8", ["const:5d13f8:8", "const:4:8"]]
+ 005d13f8 ["CALL", null, ["callee:00c58f90:8"]]
- 005d1054 ["INT_ADD", "register:40f0:8", ["const:5d1054:8", "const:4:8"]]
- 005d1054 ["CALL", null, ["callee:00c5b850:8"]]
+ 005d1404 ["INT_ADD", "register:40f0:8", ["const:5d1404:8", "const:4:8"]]
+ 005d1404 ["CALL", null, ["callee:00c5b850:8"]]
~~~


<a id="compare-d3c61e0f60ab49e5eb013903a2e67640"></a>

### [`005d1084`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1084.md) → [`005d1434`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1434.md) FUN_005d1434

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 3件 [`005d092c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d092c.md) [`005d523c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d523c.md) [`005d584c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d5/005d584c.md) · 呼出先 2件 [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md)
- 新版 呼出元 3件 [`005d0cdc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0cdc.md) [`005d55ec`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d55ec.md) [`005d5bfc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d5/005d5bfc.md) · 呼出先 2件 [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 70.00% / 新版 70.00%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_store_alignment` 8件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1478",
      "incomplete_value": true,
      "site": "005d1478",
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
      "definition_site": "005d10c8",
      "incomplete_value": true,
      "site": "005d10c8",
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
    "ordinal": 6,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d14c4",
      "incomplete_value": true,
      "site": "005d14c8",
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
    "ordinal": 3,
    "slot": 1
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d14c0",
      "incomplete_value": true,
      "site": "005d14c8",
      "value": [
        "live",
        "register:4098:8"
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
      "unmatched:005d1084",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d1088",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d108c",
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
      "005d1434",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005d1438",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005d143c",
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
- 005d1118 ["INT_ADD", "register:40f0:8", ["const:5d1118:8", "const:4:8"]]
- 005d1118 ["CALL", null, ["callee:00c5b870:8"]]
+ 005d14c8 ["INT_ADD", "register:40f0:8", ["const:5d14c8:8", "const:4:8"]]
+ 005d14c8 ["CALL", null, ["callee:00c5b870:8"]]
- 005d1084 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d1084 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d1084 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005d1084 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005d1088 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005d1088 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:40a8:8"]]
~~~


<a id="compare-bd3e24fb59bfc29e6515d4b54f1cab4e"></a>

### [`005d114c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d114c.md) → [`005d14fc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d14fc.md) FUN_005d14fc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1518",
      "incomplete_value": true,
      "site": "005d1518",
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
      "definition_site": "005d1168",
      "incomplete_value": true,
      "site": "005d1168",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d152c",
      "incomplete_value": true,
      "site": "005d1530",
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
      "definition_site": "005d117c",
      "incomplete_value": true,
      "site": "005d1180",
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
      "005d1510",
      "READ",
      [
        "storage",
        "00c9b4d8",
        null,
        "pointer"
      ]
    ],
    [
      "005d1518",
      "DATA",
      [
        "storage",
        "00c70e20",
        null,
        "pointer"
      ]
    ],
    [
      "005d1524",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1510",
      "READ",
      [
        "storage",
        "00c9c4a8",
        null,
        "pointer"
      ]
    ],
    [
      "005d1518",
      "DATA",
      [
        "storage",
        "00c71df0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1524",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1158 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d1508 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d1160 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4d8:8"]]
- 005d1160 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1510 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4a8:8"]]
+ 005d1510 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d116c ["INT_ADD", "register:40f0:8", ["const:5d116c:8", "const:4:8"]]
- 005d116c ["CALL", null, ["callee:00c59330:8"]]
+ 005d151c ["INT_ADD", "register:40f0:8", ["const:5d151c:8", "const:4:8"]]
+ 005d151c ["CALL", null, ["callee:00c59330:8"]]
~~~


<a id="compare-24f54e3ba8aa215c401f08d9b1afc240"></a>

### [`005d11a8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d11a8.md) → [`005d1558`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1558.md) FUN_005d1558

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1588",
      "incomplete_value": true,
      "site": "005d158c",
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
      "definition_site": "005d11d8",
      "incomplete_value": true,
      "site": "005d11dc",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": {
      "definition_site": "005d1574",
      "incomplete_value": true,
      "site": "005d1578",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d11bc",
      "READ",
      [
        "storage",
        "00c9b4d8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d11c4",
      "DATA",
      [
        "storage",
        "00c70e20",
        null,
        "pointer"
      ]
    ],
    [
      "005d1580",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d156c",
      "READ",
      [
        "storage",
        "00c9c4a8",
        null,
        "pointer"
      ]
    ],
    [
      "005d1574",
      "DATA",
      [
        "storage",
        "00c71df0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1580",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d11c8 ["INT_ADD", "register:40f0:8", ["const:5d11c8:8", "const:4:8"]]
- 005d11c8 ["CALL", null, ["callee:00c59330:8"]]
+ 005d1578 ["INT_ADD", "register:40f0:8", ["const:5d1578:8", "const:4:8"]]
+ 005d1578 ["CALL", null, ["callee:00c59330:8"]]
- 005d11b4 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d1564 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d11bc ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4d8:8"]]
- 005d11bc ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-0145a9ee3ecae0d9375c31ca8f947df4"></a>

### [`005d1200`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1200.md) → [`005d15b0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d15b0.md) FUN_005d15b0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, constant, control_flow, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, unresolved_call_alignment

命令の説明率　旧版 90.00% / 新版 90.00%

優先判定に残った影響 `unresolved_call_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d1230",
      "COMPUTED_CALL",
      [
        "unresolved_target",
        null
      ]
    ]
  ],
  "added": [
    [
      "005d15e0",
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
- 005d1218 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 005d15c8 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
- 005d1228 ["COPY", "tmp:0:8", ["register:4000:8"]]
- 005d1228 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005d122c ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:28:8"]]
- 005d122c ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cb750b98a14ef62fa60dcba3305a2888"></a>

### [`005d1278`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1278.md) → [`005d1628`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1628.md) FUN_005d1628

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 78.26% / 新版 78.26%

優先判定に残った影響 `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d128c",
      "READ",
      [
        "storage",
        "00c9b4e0",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d1294",
      "DATA",
      [
        "storage",
        "00c70e68",
        null,
        "pointer"
      ]
    ],
    [
      "005d1650",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d163c",
      "READ",
      [
        "storage",
        "00c9c4b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1644",
      "DATA",
      [
        "storage",
        "00c71e38",
        null,
        "pointer"
      ]
    ],
    [
      "005d1650",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1284 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d1634 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d128c ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e0:8"]]
- 005d128c ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1290 ["COPY", "tmp:0:8", ["const:10:8"]]
- 005d1290 ["INT_CARRY", "register:105:1", ["register:4040:8", "tmp:0:8"]]
- 005d1290 ["INT_SCARRY", "register:106:1", ["register:4040:8", "tmp:0:8"]]
- 005d1290 ["INT_ADD", "tmp:1:8", ["register:4040:8", "tmp:0:8"]]
~~~


<a id="compare-2d458e483d7217d795190ddd62c96975"></a>

### [`005d12d4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d12d4.md) → [`005d1684`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1684.md) FUN_005d1684

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d16a0",
      "incomplete_value": true,
      "site": "005d16a0",
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
      "definition_site": "005d12f0",
      "incomplete_value": true,
      "site": "005d12f0",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d16b4",
      "incomplete_value": true,
      "site": "005d16b8",
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
      "definition_site": "005d1304",
      "incomplete_value": true,
      "site": "005d1308",
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
      "005d1698",
      "READ",
      [
        "storage",
        "00c9b4e0",
        null,
        "pointer"
      ]
    ],
    [
      "005d16a0",
      "DATA",
      [
        "storage",
        "00c70e68",
        null,
        "pointer"
      ]
    ],
    [
      "005d16ac",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1698",
      "READ",
      [
        "storage",
        "00c9c4b0",
        null,
        "pointer"
      ]
    ],
    [
      "005d16a0",
      "DATA",
      [
        "storage",
        "00c71e38",
        null,
        "pointer"
      ]
    ],
    [
      "005d16ac",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d12e0 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d1690 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d12e8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4e0:8"]]
- 005d12e8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1698 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4b0:8"]]
+ 005d1698 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d12f4 ["INT_ADD", "register:40f0:8", ["const:5d12f4:8", "const:4:8"]]
- 005d12f4 ["CALL", null, ["callee:00c59330:8"]]
+ 005d16a4 ["INT_ADD", "register:40f0:8", ["const:5d16a4:8", "const:4:8"]]
+ 005d16a4 ["CALL", null, ["callee:00c59330:8"]]
~~~


<a id="compare-d7e784e95b1fdaaf9f1d6662fd929734"></a>

### [`005d132c`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d132c.md) → [`005d16dc`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d16dc.md) FUN_005d16dc

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_condition` 3件

アドレスに依存する影響 `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d1344"
      ],
      [
        "FALL_THROUGH",
        "005d16f4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d16f4",
      "incomplete_value": true,
      "site": "005d1704",
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
    "old": {
      "definition_site": "005d1344",
      "incomplete_value": true,
      "site": "005d1354",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d1344"
      ],
      [
        "FALL_THROUGH",
        "005d16f4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d16f4",
      "incomplete_value": true,
      "site": "005d1708",
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
    "old": {
      "definition_site": "005d1344",
      "incomplete_value": true,
      "site": "005d1358",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d1344"
      ],
      [
        "FALL_THROUGH",
        "005d16f4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d16f4",
      "incomplete_value": true,
      "site": "005d170c",
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
    "old": {
      "definition_site": "005d1344",
      "incomplete_value": true,
      "site": "005d135c",
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
      "unmatched:005d1344",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1714"
      ]
    ]
  ],
  "added": [
    [
      "005d16f4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1714"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1334 ["CBRANCH", null, ["local:b4:8", "register:101:1"]]
+ 005d16e4 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
- 005d1344 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005d1344 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005d16f4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005d16f4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-e25c9f6f2680fdc3b8bdc4b79e64c223"></a>

### [`005d13bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d13bc.md) → [`005d176c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d176c.md) FUN_005d176c

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 94.44% / 新版 94.44%

優先判定に残った影響 `store_condition` 3件

アドレスに依存する影響 `unresolved_branch_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d13d4"
      ],
      [
        "FALL_THROUGH",
        "005d1784"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d1784",
      "incomplete_value": true,
      "site": "005d1794",
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
      "definition_site": "005d13d4",
      "incomplete_value": true,
      "site": "005d13e4",
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
    "ordinal": 0,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d13d4"
      ],
      [
        "FALL_THROUGH",
        "005d1784"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d1784",
      "incomplete_value": true,
      "site": "005d1798",
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
      "definition_site": "005d13d4",
      "incomplete_value": true,
      "site": "005d13e8",
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
    "ordinal": 1,
    "slot": 0
  },
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d13d4"
      ],
      [
        "FALL_THROUGH",
        "005d1784"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d1784",
      "incomplete_value": true,
      "site": "005d179c",
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
      "definition_site": "005d13d4",
      "incomplete_value": true,
      "site": "005d13ec",
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
      "unmatched:005d13d4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d17a4"
      ]
    ]
  ],
  "added": [
    [
      "005d1784",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d17a4"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d13c4 ["CBRANCH", null, ["local:b3:8", "register:101:1"]]
+ 005d1774 ["CBRANCH", null, ["local:b5:8", "register:101:1"]]
- 005d13d4 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
- 005d13d4 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
+ 005d1784 ["BOOL_NEGATE", "tmp:0:1", ["register:101:1"]]
+ 005d1784 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-863e57a7cf360b67d03eec27bc1a0d98"></a>

### [`005d1404`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1404.md) → [`005d17b4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d17b4.md) FUN_005d17b4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 cfg_edge_inventory, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, store_value, unresolved_return_alignment

命令の説明率　旧版 82.61% / 新版 82.61%

優先判定に残った影響 `store_value` 1件, `unresolved_return_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d17d0",
      "incomplete_value": true,
      "site": "005d17d0",
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
      "definition_site": "005d1420",
      "incomplete_value": true,
      "site": "005d1420",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d17e4",
      "incomplete_value": true,
      "site": "005d17e8",
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
      "definition_site": "005d1434",
      "incomplete_value": true,
      "site": "005d1438",
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
      "005d17c8",
      "READ",
      [
        "storage",
        "00c9b4f0",
        null,
        "pointer"
      ]
    ],
    [
      "005d17d0",
      "DATA",
      [
        "storage",
        "00c70ef8",
        null,
        "pointer"
      ]
    ],
    [
      "005d17dc",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d17c8",
      "READ",
      [
        "storage",
        "00c9c4c0",
        null,
        "pointer"
      ]
    ],
    [
      "005d17d0",
      "DATA",
      [
        "storage",
        "00c71ec8",
        null,
        "pointer"
      ]
    ],
    [
      "005d17dc",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1410 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d17c0 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d1418 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4f0:8"]]
- 005d1418 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d17c8 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c0:8"]]
+ 005d17c8 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d1424 ["INT_ADD", "register:40f0:8", ["const:5d1424:8", "const:4:8"]]
- 005d1424 ["CALL", null, ["callee:00c59330:8"]]
+ 005d17d4 ["INT_ADD", "register:40f0:8", ["const:5d17d4:8", "const:4:8"]]
+ 005d17d4 ["CALL", null, ["callee:00c59330:8"]]
~~~


<a id="compare-a9ebda45bcc927620e923cef2dc8aebb"></a>

### [`005d1460`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1460.md) → [`005d1810`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1810.md) FUN_005d1810

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 50.00% / 新版 50.00%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 1件, `unresolved_store_alignment` 5件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d147c",
      "incomplete_value": true,
      "site": "005d1480",
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
      "unmatched:005d1460",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d1464",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d1474",
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
      "005d1810",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005d1814",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005d1824",
      "READ",
      [
        "storage",
        "00c9c4c0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1480 ["INT_ADD", "register:40f0:8", ["const:5d1480:8", "const:4:8"]]
- 005d1480 ["CALL", null, ["callee:00c59330:8"]]
+ 005d1830 ["INT_ADD", "register:40f0:8", ["const:5d1830:8", "const:4:8"]]
+ 005d1830 ["CALL", null, ["callee:00c59330:8"]]
- 005d1460 ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d1460 ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d1460 ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffe0:8"]]
- 005d1460 ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005d1464 ["INT_ADD", "tmp:0:8", ["register:8:8", "const:10:8"]]
- 005d1464 ["STORE", null, ["const:1b1:8", "tmp:0:8", "register:4098:8"]]
~~~


<a id="compare-e57260d57b707baac2c338d1f7b2e97d"></a>

### [`005d14b8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d14b8.md) → [`005d1868`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1868.md) FUN_005d1868

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 98.28% / 新版 98.28%

優先判定に残った影響 `unresolved_branch_alignment` 1件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d151c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1924"
      ]
    ]
  ],
  "added": [
    [
      "005d18cc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1924"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1500 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005d1500 ["CBRANCH", null, ["local:b4:8", "tmp:0:1"]]
+ 005d18b0 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
+ 005d18b0 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005d1510 ["BRANCH", null, ["local:b11:8"]]
+ 005d18c0 ["BRANCH", null, ["local:b9:8"]]
- 005d151c ["INT_NOTEQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005d151c ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
~~~


<a id="compare-5140f5b75c1feaaf3d9f157180a827fe"></a>

### [`005d15a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d15a0.md) → [`005d1950`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1950.md) FUN_005d1950

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 constant, operands_and_dependencies, store_value

命令の説明率　旧版 86.96% / 新版 86.96%

優先判定に残った影響 `store_value` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d196c",
      "incomplete_value": true,
      "site": "005d196c",
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
      "definition_site": "005d15bc",
      "incomplete_value": true,
      "site": "005d15bc",
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
  },
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d1980",
      "incomplete_value": true,
      "site": "005d1984",
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
      "definition_site": "005d15d0",
      "incomplete_value": true,
      "site": "005d15d4",
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
      "005d1964",
      "READ",
      [
        "storage",
        "00c9b4f8",
        null,
        "pointer"
      ]
    ],
    [
      "005d196c",
      "DATA",
      [
        "storage",
        "00c70f40",
        null,
        "pointer"
      ]
    ],
    [
      "005d1978",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1964",
      "READ",
      [
        "storage",
        "00c9c4c8",
        null,
        "pointer"
      ]
    ],
    [
      "005d196c",
      "DATA",
      [
        "storage",
        "00c71f10",
        null,
        "pointer"
      ]
    ],
    [
      "005d1978",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d15ac ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d195c ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d15b4 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4f8:8"]]
- 005d15b4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
+ 005d1964 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4c8:8"]]
+ 005d1964 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
- 005d15c0 ["INT_ADD", "register:40f0:8", ["const:5d15c0:8", "const:4:8"]]
- 005d15c0 ["CALL", null, ["callee:00c59330:8"]]
+ 005d1970 ["INT_ADD", "register:40f0:8", ["const:5d1970:8", "const:4:8"]]
+ 005d1970 ["CALL", null, ["callee:00c59330:8"]]
~~~


<a id="compare-bcf4e2cb446d751b581d1bb5eff30ed9"></a>

### [`005d15fc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d15fc.md) → [`005d19ac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d19ac.md) FUN_005d19ac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md)
- 新版 呼出元 0件  · 呼出先 2件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_value, unresolved_store_alignment

命令の説明率　旧版 86.36% / 新版 86.36%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_store_alignment` 1件

アドレスに依存する影響 `store_value` 1件

~~~json
[
  {
    "confidence": "limited",
    "kind": "store_value",
    "new": {
      "definition_site": "005d19dc",
      "incomplete_value": true,
      "site": "005d19e0",
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
      "definition_site": "005d162c",
      "incomplete_value": true,
      "site": "005d1630",
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
    "ordinal": 4,
    "slot": 2
  },
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d1618",
      "incomplete_value": true,
      "site": "005d161c",
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
      "unmatched:005d1610",
      "READ",
      [
        "storage",
        "00c9b4f8",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d1618",
      "DATA",
      [
        "storage",
        "00c70f40",
        null,
        "pointer"
      ]
    ],
    [
      "005d19d4",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d19c0",
      "READ",
      [
        "storage",
        "00c9c4c8",
        null,
        "pointer"
      ]
    ],
    [
      "005d19c8",
      "DATA",
      [
        "storage",
        "00c71f10",
        null,
        "pointer"
      ]
    ],
    [
      "005d19d4",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d161c ["INT_ADD", "register:40f0:8", ["const:5d161c:8", "const:4:8"]]
- 005d161c ["CALL", null, ["callee:00c59330:8"]]
+ 005d19cc ["INT_ADD", "register:40f0:8", ["const:5d19cc:8", "const:4:8"]]
+ 005d19cc ["CALL", null, ["callee:00c59330:8"]]
- 005d1608 ["COPY", "register:4040:8", ["const:c9b000:8"]]
+ 005d19b8 ["COPY", "register:4040:8", ["const:c9c000:8"]]
- 005d1610 ["INT_ADD", "tmp:0:8", ["register:4040:8", "const:4f8:8"]]
- 005d1610 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-e5118c22e5bf1a8742f3116e4dcf64d6"></a>

### [`005d1654`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1654.md) → [`005d1a04`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1a04.md) FUN_005d1a04

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `observed` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 0件 
- 新版 呼出元 0件  · 呼出先 0件 

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 91.18% / 新版 91.18%

アドレスに依存する影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d1684",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1a48"
      ]
    ],
    [
      "unmatched:005d16bc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1a58"
      ]
    ]
  ],
  "added": [
    [
      "005d1a34",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1a48"
      ]
    ],
    [
      "005d1a6c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1a58"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d166c ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 005d166c ["CBRANCH", null, ["local:b2:8", "tmp:0:1"]]
+ 005d1a1c ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 005d1a1c ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
- 005d1680 ["INT_LESSEQUAL", "register:105:1", ["register:4050:8", "register:4058:8"]]
- 005d1680 ["INT_SBORROW", "register:106:1", ["register:4058:8", "register:4050:8"]]
- 005d1680 ["INT_SUB", "tmp:0:8", ["register:4058:8", "register:4050:8"]]
- 005d1680 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 005d1684 ["INT_EQUAL", "tmp:0:1", ["register:100:1", "register:103:1"]]
- 005d1684 ["CBRANCH", null, ["local:b3:8", "tmp:0:1"]]
~~~


<a id="compare-58a2fc5ce74c23e4e839ccbd887fbc47"></a>

### [`005d16dc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d16dc.md) → [`005d1a8c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1a8c.md) FUN_005d1a8c

根拠 `code_order_and_references` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call, call_count, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment, unresolved_call_alignment, unresolved_store_alignment

命令の説明率　旧版 61.11% / 新版 61.11%

優先判定に残った影響 `store_condition` 3件, `unresolved_branch_alignment` 1件, `unresolved_call_alignment` 1件, `unresolved_store_alignment` 1件

~~~json
[
  {
    "confidence": "limited",
    "guard": [
      [
        "FALL_THROUGH",
        "005d16f0"
      ],
      [
        "FALL_THROUGH",
        "005d1aa0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d1aa0",
      "incomplete_value": true,
      "site": "005d1aa4",
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
      "definition_site": "005d16f0",
      "incomplete_value": true,
      "site": "005d16f4",
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
        "005d16f0"
      ],
      [
        "FALL_THROUGH",
        "005d1aa0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d1aa0",
      "incomplete_value": true,
      "site": "005d1aa4",
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
      "definition_site": "005d16f0",
      "incomplete_value": true,
      "site": "005d16f4",
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
    "guard": [
      [
        "FALL_THROUGH",
        "005d16f0"
      ],
      [
        "FALL_THROUGH",
        "005d1aa0"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d1aa0",
      "incomplete_value": true,
      "site": "005d1aa8",
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
      "definition_site": "005d16f0",
      "incomplete_value": true,
      "site": "005d16f8",
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
      "unmatched:005d16e0",
      "READ",
      [
        "storage",
        "00c9b478",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d16ec",
      "DATA",
      [
        "storage",
        "00c70c88",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d16f0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1ad0"
      ]
    ]
  ],
  "added": [
    [
      "005d1a90",
      "READ",
      [
        "storage",
        "00c9c448",
        null,
        "pointer"
      ]
    ],
    [
      "005d1a9c",
      "DATA",
      [
        "storage",
        "00c71c58",
        null,
        "pointer"
      ]
    ],
    [
      "005d1aa0",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1ad0"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d16dc ["COPY", "register:4048:8", ["const:c9b000:8"]]
- 005d16e0 ["INT_ADD", "tmp:0:8", ["register:4048:8", "const:478:8"]]
- 005d16e0 ["LOAD", "register:4048:8", ["const:1b1:8", "tmp:0:8"]]
- 005d16e4 ["INT_ADD", "tmp:0:8", ["register:4000:8", "const:8:8"]]
- 005d16e4 ["LOAD", "register:4040:8", ["const:1b1:8", "tmp:0:8"]]
~~~


<a id="compare-cf229a3f3e0574bf04000578254406e5"></a>

### [`005d1724`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1724.md) → [`005d1ad4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1ad4.md) FUN_005d1ad4

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `bounded` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 2件 [`005d1038`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1038.md) [`00c58120`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58120.md)
- 新版 呼出元 0件  · 呼出先 2件 [`005d13e8`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d13e8.md) [`00c590f0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590f0.md)

変更の種類 branch_condition_or_target, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, operands_and_dependencies, operation_sequence, unresolved_branch_alignment

命令の説明率　旧版 89.58% / 新版 89.58%

優先判定に残った影響 `unresolved_branch_alignment` 2件

参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d1754",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1b90"
      ]
    ],
    [
      "unmatched:005d1780",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1b54"
      ]
    ]
  ],
  "added": [
    [
      "005d1b04",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1b90"
      ]
    ],
    [
      "005d1b30",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1b54"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1750 ["INT_LESSEQUAL", "register:105:1", ["register:4048:8", "register:4050:8"]]
- 005d1750 ["INT_SBORROW", "register:106:1", ["register:4050:8", "register:4048:8"]]
- 005d1750 ["INT_SUB", "tmp:0:8", ["register:4050:8", "register:4048:8"]]
- 005d1750 ["INT_SLESS", "register:107:1", ["tmp:0:8", "const:0:8"]]
- 005d1754 ["BOOL_NEGATE", "tmp:0:1", ["register:102:1"]]
- 005d1754 ["CBRANCH", null, ["local:b10:8", "tmp:0:1"]]
- 005d1768 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
- 005d1768 ["CBRANCH", null, ["local:b7:8", "tmp:0:1"]]
+ 005d1b18 ["INT_EQUAL", "tmp:0:1", ["register:4048:4", "const:0:4"]]
+ 005d1b18 ["CBRANCH", null, ["local:b5:8", "tmp:0:1"]]
~~~


<a id="compare-10c75751fc47e5b75ffa7cbec01feb50"></a>

### [`005d17e4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d17e4.md) → [`005d1b94`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1b94.md) FUN_005d1b94

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `unresolved_reference_or_flow` · `cfg_change`

- 旧版 呼出元 5件 [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) [`005d09f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d09f4.md) [`005d2c44`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d2/005d2c44.md) [`005d3114`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d3114.md) [`005d34bc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d3/005d34bc.md) · 呼出先 4件 [`004499f8`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00449/004499f8.md) [`00c57f60`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f60.md) [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c580d0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c580d0.md)
- 新版 呼出元 5件 [`005d0a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a40.md) [`005d0da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0da4.md) [`005d2ff4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d2/005d2ff4.md) [`005d34c4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d34c4.md) [`005d386c`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d3/005d386c.md) · 呼出先 4件 [`00449d18`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00449/00449d18.md) [`00c58f30`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f30.md) [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c590a0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c590a0.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, operands_and_dependencies, operation_sequence, store_condition, unresolved_branch_alignment

命令の説明率　旧版 73.56% / 新版 73.56%

優先判定に残った影響 `call_argument_candidate` 1件, `store_condition` 1件, `unresolved_branch_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d18c0",
      "incomplete_value": true,
      "site": "005d18c8",
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
    "guard": [
      [
        "FALL_THROUGH",
        "005d1834"
      ],
      [
        "FALL_THROUGH",
        "005d1be4"
      ]
    ],
    "kind": "store_condition",
    "new": {
      "definition_site": "005d1be0",
      "incomplete_value": true,
      "site": "005d1be8",
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
    "old": {
      "definition_site": "005d1830",
      "incomplete_value": true,
      "site": "005d1838",
      "value": [
        "INT_LESSEQUAL",
        "1",
        [
          [
            "live",
            "register:4040:8"
          ],
          [
            "live",
            "register:40c0:8"
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
      "005d1bcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "unmatched:005d1840"
      ]
    ],
    [
      "unmatched:005d1834",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1c3c"
      ]
    ],
    [
      "unmatched:005d184c",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1ce8"
      ]
    ]
  ],
  "added": [
    [
      "005d1bcc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1bf0"
      ]
    ],
    [
      "005d1be4",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1c3c"
      ]
    ],
    [
      "005d1bfc",
      "CONDITIONAL_JUMP",
      [
        "local_branch",
        "005d1ce8"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d18c8 ["INT_ADD", "register:40f0:8", ["const:5d18c8:8", "const:4:8"]]
- 005d18c8 ["CALL", null, ["callee:00c58f30:8"]]
+ 005d1c78 ["INT_ADD", "register:40f0:8", ["const:5d1c78:8", "const:4:8"]]
+ 005d1c78 ["CALL", null, ["callee:00c58f30:8"]]
- 005d1810 ["COPY", "register:0:8", ["register:4040:8"]]
- 005d1810 ["INT_ADD", "register:40f0:8", ["const:5d1810:8", "const:4:8"]]
- 005d1810 ["CALLIND", null, ["register:0:8"]]
+ 005d1bc0 ["COPY", "register:0:8", ["register:4040:8"]]
+ 005d1bc0 ["INT_ADD", "register:40f0:8", ["const:5d1bc0:8", "const:4:8"]]
+ 005d1bc0 ["CALLIND", null, ["register:0:8"]]
- 005d181c ["CBRANCH", null, ["local:b6:8", "register:102:1"]]
+ 005d1bcc ["CBRANCH", null, ["local:b5:8", "register:102:1"]]
~~~


<a id="compare-8b16c0b7e85610d4c8ad14b5c3941058"></a>

### [`005d1940`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1940.md) → [`005d1cf0`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1cf0.md) FUN_005d1cf0

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 2件 [`005d0690`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d0690.md) [`005d09f4`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d0/005d09f4.md) · 呼出先 5件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md) [`00c57fb0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57fb0.md) [`00c58360`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c58/00c58360.md) [`00c5a8a0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8a0.md) [`00c5a8c0`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c5a/00c5a8c0.md)
- 新版 呼出元 2件 [`005d0a40`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0a40.md) [`005d0da4`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d0/005d0da4.md) · 呼出先 5件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md) [`00c58f80`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f80.md) [`00c59330`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c59/00c59330.md) [`00c5b870`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b870.md) [`00c5b890`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c5b/00c5b890.md)

変更の種類 branch_condition_or_target, call_argument_candidate, cfg_edge_inventory, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 77.33% / 新版 77.33%

優先判定に残った影響 `call_argument_candidate` 2件, `unresolved_branch_alignment` 3件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d1a28",
      "incomplete_value": true,
      "site": "005d1a2c",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:20:8"
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
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d1a30",
      "incomplete_value": true,
      "site": "005d1a34",
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
  }
]
~~~


参照の変更（対応した命令位置）

~~~json
{
  "removed": [
    [
      "unmatched:005d1954",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d196c",
      "READ",
      [
        "storage",
        "00c9b500",
        null,
        "pointer"
      ]
    ],
    [
      "unmatched:005d1988",
      "DATA",
      [
        "storage",
        "00c70fd0",
        null,
        "pointer"
      ]
    ]
  ],
  "added": [
    [
      "005d1d04",
      "WRITE",
      [
        "storage",
        "Stack[-0x10]",
        null,
        null
      ]
    ],
    [
      "005d1d1c",
      "READ",
      [
        "storage",
        "00c9c4d0",
        null,
        "pointer"
      ]
    ],
    [
      "005d1d38",
      "DATA",
      [
        "storage",
        "00c71fa0",
        null,
        "pointer"
      ]
    ]
  ]
}
~~~


~~~diff
- 005d1a2c ["INT_ADD", "register:40f0:8", ["const:5d1a2c:8", "const:4:8"]]
- 005d1a2c ["CALL", null, ["callee:00c58f50:8"]]
+ 005d1ddc ["INT_ADD", "register:40f0:8", ["const:5d1ddc:8", "const:4:8"]]
+ 005d1ddc ["CALL", null, ["callee:00c58f50:8"]]
- 005d1a34 ["INT_ADD", "register:40f0:8", ["const:5d1a34:8", "const:4:8"]]
- 005d1a34 ["CALL", null, ["callee:00c59330:8"]]
+ 005d1de4 ["INT_ADD", "register:40f0:8", ["const:5d1de4:8", "const:4:8"]]
+ 005d1de4 ["CALL", null, ["callee:00c59330:8"]]
- 005d1954 ["COPY", "tmp:0:8", ["register:40a0:8"]]
- 005d1954 ["COPY", "tmp:1:8", ["register:4098:8"]]
- 005d1954 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:70:8"]]
- 005d1954 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


<a id="compare-e5ced3358ce2926957f0a2cb5a17cc67"></a>

### [`005d1afc`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/005d1/005d1afc.md) → [`005d1eac`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/005d1/005d1eac.md) FUN_005d1eac

根拠 `unique_code_and_context` · `raw_instruction_pcode` · `limited` · 参照 `changed` · `cfg_change`

- 旧版 呼出元 0件  · 呼出先 1件 [`00c57f80`](../../../../reference/16.0.2/arm64-v8a/baa753547ffc7548d0a9c2fb4bd57b11d39da0f12e2ccd794c51df995544a4f6/functions/00c57/00c57f80.md)
- 新版 呼出元 0件  · 呼出先 1件 [`00c58f50`](../../../../reference/16.0.3/arm64-v8a/941278c8d9b42c2598836a75ff173ce3b2fb2215f8067351d5fc1d218ef67c73/functions/00c58/00c58f50.md)

変更の種類 branch_condition_or_target, call_argument_candidate, comparison, comparison_count, constant, control_flow, control_flow_count, local_def_use, memory_read, memory_read_count, memory_write, memory_write_count, operands_and_dependencies, operation_sequence, unresolved_branch_alignment, unresolved_store_alignment

命令の説明率　旧版 68.57% / 新版 68.57%

優先判定に残った影響 `call_argument_candidate` 1件, `unresolved_branch_alignment` 2件, `unresolved_store_alignment` 6件

~~~json
[
  {
    "confidence": "limited",
    "kind": "call_argument_candidate",
    "new": null,
    "old": {
      "definition_site": "005d1b54",
      "incomplete_value": true,
      "site": "005d1b58",
      "value": [
        "LOAD",
        "8",
        [
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
                "const:ffffffffffffffe0:8"
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
      "unmatched:005d1afc",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d1b00",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "unmatched:005d1b04",
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
      "005d1eac",
      "WRITE",
      [
        "storage",
        "Stack[-0x30]",
        null,
        null
      ]
    ],
    [
      "005d1eb0",
      "WRITE",
      [
        "storage",
        "Stack[-0x20]",
        null,
        null
      ]
    ],
    [
      "005d1eb4",
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
- 005d1b58 ["INT_ADD", "register:40f0:8", ["const:5d1b58:8", "const:4:8"]]
- 005d1b58 ["CALL", null, ["callee:00c58f50:8"]]
+ 005d1f08 ["INT_ADD", "register:40f0:8", ["const:5d1f08:8", "const:4:8"]]
+ 005d1f08 ["CALL", null, ["callee:00c58f50:8"]]
- 005d1afc ["COPY", "tmp:0:8", ["register:40e8:8"]]
- 005d1afc ["COPY", "tmp:1:8", ["register:40f0:8"]]
- 005d1afc ["INT_ADD", "register:8:8", ["register:8:8", "const:ffffffffffffffd0:8"]]
- 005d1afc ["STORE", null, ["const:1b1:8", "register:8:8", "tmp:0:8"]]
- 005d1b00 ["COPY", "tmp:0:8", ["register:40b0:8"]]
- 005d1b00 ["COPY", "tmp:1:8", ["register:40a8:8"]]
- 005d1b00 ["INT_ADD", "tmp:2:8", ["register:8:8", "const:10:8"]]
- 005d1b00 ["STORE", null, ["const:1b1:8", "tmp:2:8", "tmp:0:8"]]
~~~


